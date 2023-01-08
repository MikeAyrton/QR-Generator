import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

const App = () => {
  const [value, setValue] = useState("");
  const [qrVisible, setQrVisible] = useState(false)

  const generateQRCodeHandler = () => {
    if(!value){
      return;
    }

    setQrVisible(true);

  }


  return (
    <div className="container">
      <h1>QR Code Generator🔥</h1>
      <input
        type='text'
        placeholder='Type a URL...'
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button onClick={generateQRCodeHandler}>Generate QR Code</button>

      {qrVisible && <div className='qr-code-container'>
        <QRCode value={value} size={300} />
        </div>}
    </div>
  );
}

export default App;
