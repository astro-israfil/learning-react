import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharecters, setIncludeCharecters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "";
    if (length >= 8) {
      str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      str += "0123456789";
    }
    if (includeCharecters) {
      str += "@#$%^&*()_+!~";
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, includeCharecters, includeNumbers, setPassword]);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(passwordInputRef.current.value);
    passwordInputRef.current.select();
  }, [passwordInputRef]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeCharecters, generatePassword]);

  return (
    <>
      <div className='w-full max-w-lg mx-auto my-6 p-4 bg-slate-900 rounded-md'>
        <h1 className='text-4xl text-white text-center my-4'>Password Generator</h1>
        <div className='flex flex-wrap'>
          <input value={password} readOnly={true} ref={passwordInputRef} type="text" className='flex-1 p-3 read-only:text-gray-500 text-2xl rounded-s-md outline-none border-0' />
          <button onClick={copyPassword} className='bg-purple-700 text-white font-medium px-3 py-4 rounded-e-md'>Copy</button>
        </div>
        <div className='flex flex-wrap justify-between items-center mt-4'>
        <div className='flex flex-wrap items-center gap-2'>
          <input onChange={(e) => {setLength(e.target.value)}} min={6} max={30} type="range" name="length" id="length" />
          <label htmlFor="length" className='text-orange-500'>Length: {length}</label>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <input onChange={() => {setIncludeNumbers((prev) => !prev)}} type='checkbox' name="numbers" id="numbers" />
          <label htmlFor="numbers" className='text-orange-500'>Numbers</label>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <input onChange={() => {setIncludeCharecters((prev) => !prev)}} type="checkbox" name="charecter" id="charecter" />
          <label htmlFor="charecter" className='text-orange-500'>Charecters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
