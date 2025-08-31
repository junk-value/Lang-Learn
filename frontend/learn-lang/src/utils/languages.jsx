import React, { useState } from "react";

const greetings = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
  de: "Hallo",
  jp: "こんにちは",
};

export default function LangLearnApp() {
  const [lang, setLang] = useState("en");

  return (
    <div style={{ padding: "20px" }}>
      <h1>{greetings[lang]}</h1>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="jp">Japanese</option>
      </select>
    </div>
  );
}
