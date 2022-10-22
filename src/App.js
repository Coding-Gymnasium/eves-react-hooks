import { useState } from "react";
import "./App.css";

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound;
    const colorVal = color;
    console.log(`${soundVal} sounds like ${colorVal}`);
    setSound("");
    setColor("#FFFFFF");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={sound}
          type="text"
          placeholder="Sound..."
          onChange={(e) => setSound(e.target.value)}
        />
        <input
          value={color}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default App;
