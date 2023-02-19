import React, { useState } from 'react';

export default function Input({ name, max }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(name);

  let maxLength;
  let className;
  if (max) {
    maxLength = max;
    className = "date-input";
  }

  function handleClick() {
    setEdit(!edit);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setEdit(!edit);
    }
  }

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleSave(e) {
    if (e.key === 'Enter') {
      if (!text) {
        setText(name)
      }
      setEdit(!edit);
    }
  }

  function handleOutsideClick() {
    if (!text) {
      setText(name)
    }
    setEdit(!edit);
  }

  function handleFocus(e) {
    e.target.select();
  }

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
