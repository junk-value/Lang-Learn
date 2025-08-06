import React from 'react';

const LanguageSelector = ({ onChange }) => {
  return (
    <div>
      <label>Select Language: </label>
      <select onChange={(e) => onChange(e.target.value)} style={{ padding: '0.5rem', fontSize: '16px' }}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};


export default LanguageSelector;
