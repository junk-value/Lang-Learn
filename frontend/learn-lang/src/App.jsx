import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
      <h1>Welcome to LearnLang!</h1>
      <Footer/>
    </>
  )
}

export default App
