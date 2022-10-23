import { useContext } from "react";
import { TreesContext } from "./";
import "./App.css";

function App() {
  const { trees } = useContext(TreesContext);

  return (
    <>
      <h1>Trees</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
