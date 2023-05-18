import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const WordFrequencyChart = ({ wordFrequency }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const data = Array.from(wordFrequency.values()).slice(0, 20);
    setChartData(data);
  }, [wordFrequency]);

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      height: 350,
      type: 'bar',
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    plotOptions: {
      bar: {
        columnWidth: '100%',
        strokeWidth: 2,
        borderRadius: 4,
        colors: {
          ranges: [{
            from: 0,
            to: 9999,
            color: '#ffffff',
            borderColor: '#000000'
          }]
        }
      }
    },
    stroke: {
      width: 0.5,
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white',
          fontSize: '14px',
        }
      },
      title: {
        text: 'Frequency of Words',
        style: {
          color: 'white',
          fontSize: '20px',
        }
      },
    },
    xaxis: {
      categories: Array.from(wordFrequency.keys()).slice(0, 21),
      labels: {
        style: {
          colors: 'white',
          fontSize: '14px',
        }
      },
      title: {
        text: 'Words',
        style: {
          color: 'white',
          fontSize: '20px',
        }
      },
    }
  };

  return (
    <div className="graph">
      <Chart options={options} series={[{ data: chartData }]} type="bar" height="450px" top="200px" />
    </div>
  );
};

export default WordFrequencyChart
