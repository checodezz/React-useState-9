import { useState } from "react";
import "./App.css";

const LanguageForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguages((prevValue) => [...prevValue, value]);
    } else {
      setSelectedLanguages((prevValue) =>
        prevValue.filter((lang) => lang !== value),
      );
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value="JavaScript"
        onChange={handleLanguageCheckbox}
      />
      JavaScript
      <input type="checkbox" value="Python" onChange={handleLanguageCheckbox} />
      Python
      <input type="checkbox" value="Java" onChange={handleLanguageCheckbox} />
      Java
      <p>Selected Languages: {selectedLanguages.join(", ")}</p>
    </div>
  );
};

const MusicGenre = () => {
  const [musicGenre, setMusicGenre] = useState([]);

  const handleMusicCheckbox = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setMusicGenre((prevValue) => [...prevValue, value]);
    } else {
      setMusicGenre((prevValue) => prevValue.filter((music) => music != value));
    }
  };
  return (
    <div>
      <input type="checkbox" value="Rock" onChange={handleMusicCheckbox} />
      Rock
      <input type="checkbox" value="Jazz" onChange={handleMusicCheckbox} />
      Jazz
      <input type="checkbox" value="Pop" onChange={handleMusicCheckbox} />
      Pop
      <p>Selected Music: {musicGenre.join(", ")}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <LanguageForm />
      <MusicGenre />
    </main>
  );
}
