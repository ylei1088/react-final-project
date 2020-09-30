import React, { useState } from "react";

function BudgetCalculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const onNumber1Change = (event) => {
    const value = event.target.value;
    if (value === "") setNumber1(0);
    else setNumber1(Number.parseInt(value));
  };
  const onNumber2Change = (event) => {
    const value = event.target.value;
    if (value === "") setNumber2(0);
    else setNumber2(Number.parseInt(value));
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className="equation">
        <input
          className="equation__input"
          onChange={onNumber1Change}
          value={number1}
        ></input>
        <span className="equation__operator">+</span>
        <input
          className="equation__input"
          onChange={onNumber2Change}
          value={number2}
        ></input>
        <span className="equation__operator">=</span>
        <span className="equation__result">{number1 + number2}</span>
      </div>
    </div>
  );
}

export default BudgetCalculator;
