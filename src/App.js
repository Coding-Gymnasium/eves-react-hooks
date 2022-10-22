import { useReducer } from "react";
import "./App.css";

const initialState = {
  message: "hi",
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      state.message = "hi";
      return {
        message: `HEY! I JUST SAID ${state.message.toUpperCase()}`,
      };
      break;
    case "whisper":
      state.message = "hi";
      return {
        message: `excuse me, I just said ${state.message}`,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  );
}

export default App;
