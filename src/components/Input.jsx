import React, { useState } from 'react';

export default function Input({ name }) {
  // Determine if editing
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
      className = "description";
      break;
    case 'Responsibilities':
      className = "responsibilities";
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

  if (name === 'Responsibilities' || name === 'Description') {
    if (edit) {
      return (
        <textarea
          cols="2"
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

    return (
      <div
        title={name}
        role="button"
        tabIndex="0"
        className={"data " + className}
        onClick={handleClick}
        onFocus={handleClick}
        onKeyDown={handleKeyDown}
      >
        {text}
      </div>
    );
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
      title={name}
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
