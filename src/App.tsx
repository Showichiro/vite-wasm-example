import { useEffect, useState } from "react";
import "./App.css";
import init, { greet, get_random_value } from "../wasm/pkg";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => greet(name)}>Greet</button>

      <button onClick={() => window.alert(get_random_value())}>
        Get RandomValue
      </button>
    </>
  );
}

export default App;
