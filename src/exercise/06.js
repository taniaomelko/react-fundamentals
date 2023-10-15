// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // ------------------------------- 2 ---------------------------------
  // const inputRef = useRef();
  // const [value, setValue] = useState('');
  // const [error, setError] = useState(false);

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setValue(value.toLowerCase());

  //   if (value.toLowerCase() === value) {
  //     setError(false);
  //   } else {
  //     setError(true);
  //   }
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const value = event.target.elements[0].value;
  //   const value = inputRef.current.value;
  //   onSubmitUsername(value);
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor='username'>Username:</label>
  //       <input value={value} onChange={handleChange} type="text" id='username' ref={inputRef} />
  //     </div>
  //     <button type="submit" disabled={error}>Submit</button>
  //     {error && (
  //       <div role="alert">Username must be lower case</div>
  //     )}
  //   </form>
  // )
  // ------------------------------- 2 ---------------------------------

  // ------------------------------- 3 ---------------------------------
  const inputRef = useRef();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value.toLowerCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSubmitUsername(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input value={value} onChange={handleChange} type="text" id='username' ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  // ------------------------------- 3 ---------------------------------
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
