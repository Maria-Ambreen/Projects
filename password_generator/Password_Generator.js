import { useState } from "react";

function Passwords() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(true) ;
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let passwordCharacters = "";
    let generatedPassword = "";

    if (uppercase) passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) passwordCharacters += "0123456789";
    if (symbols) passwordCharacters += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      generatedPassword += passwordCharacters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="container-fluid">
      <h1>Password Generator</h1>
      <h2>Your Password:</h2>
      <p>{password}</p>
      <div className="form container">
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          <label>Include Uppercase Letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          <label>Include Lowercase Letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          <label>Include Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          <label>Include Symbols</label>
        </div>
        <button className="btn btn-primary" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default Passwords;