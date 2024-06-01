import React, { useState } from 'react';

const Dropdown = ({ competition, selectedData }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    selectedData(value);
  };

  return (
    <select
      className="text-center border-2 border-black rounded-md"
      value={selected}
      onChange={handleChange}
    >
      {competition.map((name, index) => (
        <option key={index} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
