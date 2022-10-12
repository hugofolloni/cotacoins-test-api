import {useState} from 'react'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [wallet, setWallet] = useState('')

  const handleSubmit = (e) => {
    fetch(`http://localhost:3000/api/users`, {
      method: 'POST',

      headers: {
          'Content-Type': 'application/json'
          },
      body: JSON.stringify({name, email, password, wallet})
        }
    )
    .then(res => res.json())
    .then(data => console.log(data))
      }
          
    const [apiData, setApiData] = useState([])

    const showInfo = () => {
      fetch(`http://localhost:3000/api/users`)
      .then(res => res.json())
      .then(data => setApiData(data))
    }


  return (
    <div className="App">
      <h1>Register</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} />
      <button onClick={() => {console.log(name, email, password, wallet); handleSubmit()}}>Register</button>

      <h1>Data</h1>
      <button onClick={showInfo}>Show Data</button>
      {apiData.map((data) => {
        return (
          <div>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.password}</p>
            <p>{data.wallet}</p>
          </div>
        )
      }
      )}
    </div>
  );
}

export default App;
