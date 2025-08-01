import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
      <h1>Welcome to LearnLang!</h1>
      
    </>
  )
}

export default App
