import React, { useEffect, useState } from 'react';
import { sortMapByValue } from "../array.js";
import axios from 'axios';
import ExportButton from "./ExportButton.jsx";
import WordFrequencyChart from "./WordFrequencyChart.jsx";

const DataContainer = () => {
  const [wordFrequency, setWordFrequency] = useState(new Map());

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
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <WordFrequencyChart wordFrequency={wordFrequency} />
      <ExportButton csvData={Array.from(wordFrequency.entries()).map(([word, frequency]) => `${word},${frequency}`).join('\n')} />
    </div>
  );
};

export default DataContainer;
