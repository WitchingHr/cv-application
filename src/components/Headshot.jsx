import React, { useRef, useState } from 'react';
import avatar from '../assets/avatar.png';
import { pic } from '../data';

export default function Headshot() {
  const [image, setImage] = useState(pic.url);

  const inputFile = useRef(null);
  
  function handleClick() {
    inputFile.current.click();
  }

  function onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      pic.url = URL.createObjectURL(e.target.files[0]);
    }
  }

  return (
    <div className="head-shot-wrapper">
      <img
        alt="Headshot"
        className="head-shot"
        src={image === null ? avatar : image}
        onClick={handleClick}
      />
      <input 
        type="file"
        id="avatar"
        accpet="image/*"
        ref={inputFile} 
        onChange={onImageChange}
        style={{display: 'none'}}
      />
    </div>
  );
}