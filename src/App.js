import "./App.css";
import { useFetch } from "./useFetch";

function App({ login="nicorithner" }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>Loading ...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (data) {
    return (
      <>
        <img src={data.avatar_url} alt={data.login} />
        <div>
          <h1>{data.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
          {data.company && <p>{data.company}</p>}
        </div>
      </>
    );
  }
}

export default App;
