import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/DustbinData.css";

const DustbinData = () => {
  const { state } = useLocation();
  const { name, level } = state || {};

  if (!state) {
    return <h2>No Data Available</h2>;
  }

  return (
    <div className='data'>
      <h1>{name} Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{level}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DustbinData;
