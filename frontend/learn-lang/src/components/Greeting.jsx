import { greetings, languageFlags } from './utils/languages.jsx';

function GreetingCard({ lang }) {
  return (
    <div>
      <span>{languageFlags[lang]} </span>
      <span>{greetings[lang]}</span>
    </div>
  );
}
