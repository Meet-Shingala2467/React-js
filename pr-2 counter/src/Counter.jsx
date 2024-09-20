import React, { useState } from 'react';
import './Counter.css'; 

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('initial');

  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setColor(randomColor);
  };

  const increment = () => {
    setCount(count + 1);  
    generateRandomColor();
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      generateRandomColor();
    }
  };

  const reset = () => {
    setCount(0);
    setColor('initial');
  };

  return (
    <div>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>R</button>
      <span style={{ color: color }}>{count}</span>
    </div>
  );
}

export default Counter;
