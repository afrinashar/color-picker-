import React, { useState } from 'react';

const DynamicBackgroundColor = () => {
  // State to manage the background color
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // Function to handle color changes
  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '20px' }}>
      <h2>Dynamic Background Color</h2>

      {/* Display the selected color */}
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: backgroundColor,
          margin: '20px 0',
        }}
      ></div>

      {/* Color input for picking a color */}
      <input
        type="color"
        value={backgroundColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default DynamicBackgroundColor;
