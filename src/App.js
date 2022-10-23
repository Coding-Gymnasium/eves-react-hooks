import "./App.css";
import { useInput } from "./useInput";

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    const titleVal = titleProps.value;
    const colorVal = colorProps.value;
    console.log(`${titleVal} sounds like ${colorVal}`);
    resetTitle("");
    resetColor("#FFFFFF");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="title..."
        />
        <input
          {...colorProps}
          type="color"
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default App;
