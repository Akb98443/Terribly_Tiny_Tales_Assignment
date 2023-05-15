import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { sortMapByValue } from '../array.js';
import ExportButton from './ExportButton.jsx';
import WordFrequencyChart from './WordFrequencyChart.jsx';

const DataContainer = () => {
  const [wordFrequency, setWordFrequency] = useState(new Map());
  const [csvData, setCsvData] = useState('');

  const fetchData = async () => {
    try {
      const url = 'https://www.terriblytinytales.com/test.txt';
      const response = await axios.get(url);
      const fileContent = response.data;

      const words = fileContent
        .replace(/[^A-Za-z\s/:.@/]+/g, '')
        .split(/\/|\s+|\.|@/);

      const frequencyMap = new Map();
      for (const word of words) {
        const normalizedWord = word.toLowerCase();
        const count = frequencyMap.get(normalizedWord) || 0;
        frequencyMap.set(normalizedWord, count + 1);
      }

      const sortedFrequencyMap = sortMapByValue(frequencyMap, 21);
      setWordFrequency(sortedFrequencyMap);
    } catch (error) {
      console.error('Some error occured :', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const limit = 21;
    const numbers = Array.from(wordFrequency.values()).slice(0, limit);
    const chartData = Array.from(wordFrequency.keys()).slice(0, limit);

    const csv = Array.from(wordFrequency.entries())
      .map(([word, frequency]) => `${word},${frequency}`)
      .join('\n');

    setCsvData(csv);
  }, [wordFrequency]);

  return (
    <div className="container">
      <WordFrequencyChart data={{ series: [{ data: Array.from(wordFrequency.values()) }] }} />
      <ExportButton csvData={csvData} />
    </div>
  );
};

export default DataContainer;
