import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [len, setLen] = useState(0);
  const [stNumber, setNumber] = useState(false);
  const [stCharacter, setCharacter] = useState(false);

function generatePassword() {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    if (stNumber) {
      chars += '0123456789';
    }
    if (stCharacter) {
      chars += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    let generatedPassword = '';
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
}

useEffect(()=>{
generatePassword()
},[len,stNumber,stCharacter]);

  return (
    <div className="container">
      <h1>Set Password</h1>
      <h2>password is [ {password} ]</h2>
     
      
      <input type="range" min={5} max={20} value={len} onChange={(e)=>setLen(Number(e.target.value))}/>
       <label>length {len}</label>
      <input type="checkbox" checked={stNumber} onChange={()=>setNumber(!stNumber)} />
      <label>Number </label>
      <input type="checkbox" checked={stCharacter} onChange={()=>setCharacter(!stCharacter)}  />
      <label>Character </label>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator />);
