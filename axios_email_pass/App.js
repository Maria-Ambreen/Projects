//import logo from './logo.svg';
//LOGIN_FORM using Axios
//(1. npm i axios,2.Create form with email and password.3.create state to store email and password.
//4.Store the value in state using onChange method.5.Call the Api with data stored in state.
//6.Handle Error and Success. )
import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <div className="App">
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi} >Login</button>
    </div>
  );
}
export default App;