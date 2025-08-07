import { languageFlags } from '../utils/languages';

<select onChange={handleChange} value={selectedLanguage}>
  <option value="">-- Select --</option>
  {Object.keys(languageFlags).map((lang) => (
    <option key={lang} value={lang}>
      {languageFlags[lang]} {lang}
    </option>
  ))}
</select>
