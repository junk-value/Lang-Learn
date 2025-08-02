import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
      <h1>Welcome to LearnLang!</h1>
      <Button text="Learn Now" onClick={() => alert('Clicked')} />
      <Footer/>
    </>
  )
}

export default App
