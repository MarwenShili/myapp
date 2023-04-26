import { useState } from "react";
import { useEffect } from "react";
import { ToUppercase } from "../../utils/ToUpperCase";

function Card(props) {
  useEffect(() => {}, [props.title]);
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      Card {props.title}
      <button onClick={ToUppercase}>Increment</button>
      {count}
    </div>
  );
}

export default Card;
