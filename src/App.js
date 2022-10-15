import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getUsers = () => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setData([])}>Remove Data</button>
        <button onClick={getUsers}>Get Data</button>
      </div>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
