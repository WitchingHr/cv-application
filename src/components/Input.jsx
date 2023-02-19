import React, { useState } from 'react';

export default function Input({ name }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(name);

  // Get class names for date/description inputs
  let className;
  let maxLength;
  switch (name) {
    case 'From':
    case 'To':
      className = "date-input";
      maxLength = 4;
      break;
    case 'Description':
      className = "description-input";
      break;
    default:
      break;
  }

  // Open input
  function handleClick() {
    setEdit(!edit);
  }

  // Open input
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setEdit(!edit);
    }
  }
  
  // Select text on open input
  function handleFocus(e) {
    e.target.select();
  }

  // Update text
  function handleOnChange(e) {
    setText(e.target.value);
  }

  // Close input
  function handleSave(e) {
    if (e.key === 'Enter') {
      // If empty, set to default val
      if (!text) {
        setText(name)
      }
      setEdit(!edit);
    }
  }

  // Close input
  function handleOutsideClick() {
    // If empty, set to default val
    if (!text) {
      setText(name)
    }
    setEdit(!edit);
  }


  // Input editor
  if (edit) {
    return (
      <input
        className={'data-input ' + className}
        value={text}
        onChange={handleOnChange}
        onKeyDown={handleSave}
        onFocus={handleFocus}
        onBlur={handleOutsideClick}
        maxLength={maxLength}
        autoFocus
      />
    );
  }

  // Div/Button
  return (
    <div
      role="button"
      tabIndex="0"
      className="data"
      onClick={handleClick}
      onFocus={handleClick}
      onKeyDown={handleKeyDown}
    >
      {text}
    </div>
  );
}
