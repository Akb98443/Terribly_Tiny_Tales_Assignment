import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({ csvData }) => {
  return (
        <CSVLink data={csvData} filename={"data.csv"}>
      <button className='export'>Export</button>
    </CSVLink>
    
  );
};

export default ExportButton;
