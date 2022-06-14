import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Increment, Decrement, Multi, Divide } from "./Store/action";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [data, setData] = useState(0);

  const state = useSelector((state) => state);

  return (
    <div className="App">
      <h1>Counter :{state.count}</h1>
      <div>
        <input
          type="number"
          onChange={(el) => setData(el.target.value)}
        ></input>

        <button onClick={() => dispatch(Increment(data))}>ADD</button>

        <button onClick={() => dispatch(Decrement(data))}>Substract</button>

        <button onClick={() => dispatch(Multi(data))}>Multiply</button>

        <button onClick={() => dispatch(Divide(data))}>Divide</button>
      </div>
    </div>
  );
}

export default App;
