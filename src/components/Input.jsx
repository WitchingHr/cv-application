import React, { useState } from 'react';

export default function Input({ name }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(name);

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

  if (edit) {
    return (
      <input
        className='data-input'
        value={text}
        onChange={handleOnChange}
        onKeyDown={handleSave}
        onBlur={handleOutsideClick}
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
      onKeyDown={handleKeyDown}
    >
      {text}
    </div>
  );
}
