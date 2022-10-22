import { useRef } from "react";
import "./App.css";

function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    console.log(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = "";
    color.current.value = "#FFFFFF";
  };

  return (
    <>
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder="Sound..." />
        <input ref={color} type="color" />
        <button>ADD</button>
      </form>
    </>
  );
}

export default App;
