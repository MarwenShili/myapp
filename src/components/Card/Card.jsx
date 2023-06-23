import { useState } from "react";
import { useEffect } from "react";
import { ToUppercase } from "../../utils/ToUpperCase";
import "./Card.css";

function Card(props) {
  // const [count, setCount] = useState(0);
  const { setCount } = props;

  function handleCount() {
    setCount(props.count + 1);
  }

  return (
    <div className="card">
      Card {props.title}
      <button onClick={handleCount}>Increment</button>
      {props.count}
    </div>
  );
}

export default Card;
