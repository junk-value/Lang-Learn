import { languageFlags } from "../utils/languages.jsx";

export default function LanguageSelect({ handleChange, selectedLanguage }) {
  const flags = languageFlags || {};

  return (
    <select onChange={handleChange} value={selectedLanguage}>
      <option value="">-- Select --</option>
      {Object.keys(flags).map((lang) => (
        <option key={lang} value={lang}>
          {flags[lang]} {lang}
        </option>
      ))}
    </select>
  );
}
