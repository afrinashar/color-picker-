import React, { useState } from 'react';

const ColorPicker = () => {
  // Initial color state
  const [color, setColor] = useState('#00ff00');

  // Event handler for color change
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      {/* Display current color */}
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: color,
          border: '1px solid #000',
        }}
      ></div>

      {/* Color picker input */}
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
