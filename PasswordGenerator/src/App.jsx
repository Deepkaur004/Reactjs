import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // Get the length element by useState HOOK
  const [length, setLength] = useState(8);

  // Get the number allowed element by useState HOOK
  const [numAllowed, setNumAllowed] = useState(false);

  // Get the Charactor Allowed element by useState HOOK
  const [charAllowed, setCharAllowed] = useState(false);

  // Set The password text element by useState HOOK
  const [password, setPassWord] = useState("");

  // Logic for copy the password to clipboard by using USEREF hook
  const passwordRef = useRef(null)

  // Creating a password generator function that generates password
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Modify the string if the number allowed
    if (numAllowed) {
      str += "0123456789";
    }

    // Modify the string if the character allowed
    if (charAllowed) {
      str += "!@#$%^&*{}~"
    }

    // Setting the password from the string by using loop
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassWord(pass);

  }, [length, numAllowed, charAllowed, setPassWord])

  // Copy the password to clipboard 
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator])

  return (
    <>
      {/* Whole Body */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='my-3'>Password Generator</h1>

        {/* PASSWORD BOX */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            className='outline-none bg-blue-700 px-3 py-2 rounded-md text-white'
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        {/* ALL INPUTS */}
        <div className='flex text-sm gap-x-2'>

          {/* RANGE INPUT */}
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'

              onChange={(e) => { setLength(e.target.value) }}
            />

            <label>Length : {length}</label>
          </div>

          {/* NUMBER ALLOWED INPUT */}

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => { setNumAllowed((prev) => !prev) }}
            />

            <label>Number Allowed</label>
          </div>

          {/* CHARECTER ALLOWED INPUT */}

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />

            <label>Characters Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}




export default App;
