import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[0].email);
      console.log('API is Called')
    })
  }, [])

  return (
    <div className='App'>
      <h2>Hello {data}</h2>

      <hr />
      <h1>Counter App</h1>
      <button style={{ margin: '8px' }} onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button style={{ margin: '8px' }} onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  );
}

export default App;
