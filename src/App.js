import {useState} from "react";

function App() {
  const [count, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
