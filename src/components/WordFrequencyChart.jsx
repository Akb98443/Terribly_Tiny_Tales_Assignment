import React from 'react';
import Chart from 'react-apexcharts';

const WordFrequencyChart = ({ data }) => {
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      height: 350,
      type: 'bar'
    },
    tooltip: {
      enabled: true,
      theme: 'dark'
    },
    plotOptions: {
      bar: {
        columnWidth: '100%',
        strokeWidth: 2,
        borderRadius: 4,
        colors: {
          ranges: [
            {
              from: 0,
              to: 9999,
              color: '#ffffff',
              borderColor: '#000000'
            }
          ]
        }
      }
    },
    stroke: {
      width: 0.5
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
          fontSize: '14px'
        }
      },
      title: {
        text: 'Frequency of Words',
        style: {
          color: 'white',
          fontSize: '20px'
        }
      }
    },
    xaxis: {
      categories: data.series[0].data.map((_, index) => index + 1),
      labels: {
        style: {
          colors: 'white',
          fontSize: '14px'
        }
      },
      title: {
        text: 'Words',
        style: {
          color: 'white',
          fontSize: '20px'
        }
      }
    }
  };

  return (
    <div className="graph">
      <Chart options={options} series={data.series} type="bar" height="450px" top="200px" />
    </div>
  );
};

export default WordFrequencyChart;
