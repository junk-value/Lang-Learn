import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import LessonList from './components/LessonList';
import LanguageSelector from './components/LanguageSelector.jsx';
import Greeting from './components/Greeting.jsx';
import LanguageSelect from "./components/LanguageSelect";
import WordOfTheDay from "./components/WordOfTheDay";
import SearchWord from "./components/SearchWord";
import ProgressTracker from "./components/ProgressTracker";
import QuizMode from "./components/QuizMode";
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

      <div>
        <LanguageSelector onChange={setLanguage} />
        {/* <Greeting language={language} /> */}
      </div>
      <LanguageSelect
        handleChange={(e) => setSelectedLanguage(e.target.value)}
        selectedLanguage={selectedLanguage}
      />
      <WordOfTheDay selectedLanguage={selectedLanguage} />
      <SearchWord selectedLanguage={selectedLanguage} />
      <ProgressTracker />
      <QuizMode words={learnedWords} />
      <Button text="Learn Now" onClick={() => alert('Clicked')} />
      <Footer />
    </>
  );
}

export default App;

