import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=> {
    axios.get('/api/jokes')
    .then((Response) => {
      setJokes(Response.data)
    })
    .catch((error) => {
      console.log("Error To fetch Data")
    })
  })
  return (
    <>
      <h1>Jokes</h1>
      <p>There are {jokes.length} Number Of Jokes</p>
      {
        jokes.map((jokes, index) =>(
            <div key={jokes.id}>
              <h1>{jokes.title}</h1>
              <p>{jokes.content}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
