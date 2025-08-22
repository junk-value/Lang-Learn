import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import LessonList from './components/LessonList';
import LanguageSelector from './components/LanguageSelector.jsx';
import Greeting from './components/Greeting.jsx';
import WordOfTheDay from "./components/WordOfTheDay";
import SearchWord from "./components/SearchWord";
import ProgressTracker from "./components/ProgressTracker";
import QuizMode from "./components/QuizMode";
import UserProfile from "./components/UserProfile";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState('en'); 
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [learnedWords, setLearnedWords] = useState(() => {
    return JSON.parse(localStorage.getItem("learnedWords")) || [];
  });
  useEffect(() => {
    localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
  }, [learnedWords]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <>
      <Header />
      <h1>Welcome to LearnLang!</h1>

      <Card title="Welcome" content="This is a learning App." />
      <LessonList />
      <div className="p-6">
      <UserProfile 
        name="Tejal Sharma" 
        email="tejal@example.com" 
        role="Frontend Developer" 
      />
      </div>

      <div>
        <LanguageSelector 
        handleChange={(e) => setSelectedLanguage(e.target.value)} 
        selectedLanguage={selectedLanguage}
        />
        <Greeting language={selectedLanguage} />
      </div>
      <WordOfTheDay selectedLanguage={selectedLanguage} />
      <SearchWord selectedLanguage={selectedLanguage} />
      <ProgressTracker learnedCount={learnedWords.length}/>
      <QuizMode words={learnedWords} />
      <Button text="Learn Now" onClick={() => alert('Clicked')} />
      <Footer />
    </>
  );
}

export default App;
