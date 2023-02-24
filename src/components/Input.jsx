import React, { useState, useContext } from 'react';
import dataSetter from '../util';
import { DataContext } from '../App';

export default function Input({ id, categoryId, name }) {
  const { data, setData } = useContext(DataContext);

  // Determine if editing
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(name);

  // Get attributes for specific Input type
  let className;
  let maxLength;
  switch (name) {
    case 'Name':
    case 'Job Title':
    case 'Degree or Certification':
    case 'School':
    case 'Company':
      maxLength = 24;
      break;
    case 'Skill':
      maxLength = 20;
      break;
    case 'Summary':
      className = "summary";
      maxLength = 150;
      break;
    case 'Responsibilities':
      className = "responsibilities";
      maxLength = 175;
      break;
    case 'Email Address':
      maxLength = 48;
      break;
    case 'Phone Number':
    case 'Language':
      maxLength = 15;
      break;
    case 'From':
    case 'To':
      className = "date-input";
      maxLength = 4;
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
    const updatedText = e.target.value;
    dataSetter({ id, updatedText, data, setData, categoryId, name })
  }

  // Close input
  function handleSave(e) {
    if (e.key === 'Enter') {
      // If empty string, set to default val
      if (!text) {
        setText(name)
      }
      setEdit(!edit);
    }
  }

  // Close input
  function handleOutsideClick() {
    // If empty string, set to default val
    if (!text) {
      setText(name)
    }
    setEdit(!edit);
  }

  if (name === 'Responsibilities' || name === 'Summary') {
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
