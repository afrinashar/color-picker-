import React, { useState } from 'react';
import phants from "./assets/phantw.png"
import shirts from "./assets/fullw.png"
import shoes from "./assets/shoe.png"
import belts from "./assets/belt.png"
import Select from 'react-select';

const DynamicBackgroundColor = () => {
  // State to manage the background color
  const [shirt, setShirt] = useState('#ffffff');
  const [belt, setBelt] = useState('#ffffff');
  const [phant, setPhant] = useState('#ffffff');
  const [shoe, setShoe] = useState('#ffffff');
  // Function to handle color changes
  const shirtHandleColorChange = (event) => {
    setShirt(event.target.value);
  };
  const beltHandleColorChange = (event) => {
    setBelt(event.target.value);
  };
  const phantHandleColorChange = (event) => {
    setPhant(event.target.value);
  };
  const shoeHandleColorChange = (event) => {
    setShoe(event.target.value);
  };



  const [selectedImages, setSelectedImages] = useState([]);

  const imageOptions = [
    { value: "shirt", label: 'Image 1' },
    { value: 'image2.jpg', label: 'Image 2' },
    { value: 'image3.jpg', label: 'Image 3' },
  ];

  const handleImageChange = (selectedOptions) => {
    setSelectedImages(selectedOptions);
  };

  const handleUpload = () => {
    // You can now access the selected images using selectedImages array
    console.log('Selected Images:', selectedImages);
  };

  return (<>
    <div style={{ backgroundColor: shirt, padding: '20px' }}>
      <h2>Dynamic Background Color</h2>

      {/* Display the selected color */}
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor:"ButtonFace",
          margin: '20px 0',
          color:"white"
        }}
      ></div>
<div>

        <img src={shirt} style={{backgroundColor:shirt }} ></img>
<img src={phant} style={{backgroundColor:phant}} ></img>
</div>
      {/* Color input for picking a color */}
  <div className='inputGroup'> 
  <h3> Shirt Colors</h3>
   <input
        type="color"
        value={shirt}
        onChange={shirtHandleColorChange}
      />
       <h3> Belt Colors</h3>
       <input
        type="color"
        value={belt}
        onChange={beltHandleColorChange}
      />
       <h3> Phant Colors</h3>
       <input
        type="color"
        value={phant}
        onChange={phantHandleColorChange}
      />
      <h3> Shoe Colors</h3>
       <input
        type="color"
        value={shoe}
        onChange={shoeHandleColorChange}
      /></div>  
      <div className='dress'>  <img src={shirts} style={{backgroundColor:shirt }} ></img>
      <img src={belts} style={{backgroundColor:belt}} ></img>
<img src={phants} style={{backgroundColor:phant}} ></img>
<img src={shoes} style={{backgroundColor:shoe}} ></img>
  </div>    </div>
    <div>
      <Select
        isMulti
        options={imageOptions}
        onChange={handleImageChange}
        value={selectedImages}
        placeholder="Select Images"
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
    <img src={selectedImages} style={{color:belt, }} ></img>
       </> );
};

export default DynamicBackgroundColor;
