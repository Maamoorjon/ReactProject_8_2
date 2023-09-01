import "./styles.css";
import { useState } from "react";

export default function App() {
  const [val, setVal] = useState(0);
  const countUp = () => {
    setVal(val + 1);
    setVal((prev) => {
      return prev + 1;
    });
  };
  const countDown = () => {
    setVal(val - 1);
    setVal((prev) => {
      return prev - 1;
    });
  };
  return (
    <div className="App">
      <h3>現在のカウント数{val}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
}
