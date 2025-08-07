import { greetings, languageFlags } from '../utils/languages';

function Greeting({ language }) {
  if (!language) return <h2>Please select a language</h2>;
  return (
    <h2>
      {languageFlags[language]} {greetings[language]}
    </h2>
  );
}
