import { useState, useRef } from "react";
let value = 0;
const Add = () => {
  const [inputValue, setInputValue] = useState();
  const [state, setState] = useState();
  const inputRef = useRef(null);
  function handleChange(e) {
    setInputValue(e.target.value.replace(/[^0-9]/g, ""));
  }

  function add() {
    if (!inputValue) {
      return;
    }
    value = value + parseInt(inputRef.current.value);
    setState(value);
  }

  function subtract() {
    if (!inputValue) {
      return;
    }
    value -= parseInt(inputRef.current.value);
    setState(value);
  }

  function division() {
    if (!inputValue) {
      return;
    }
    value /= parseInt(inputRef.current.value);
    setState(value);
  }

  function multiply() {
    if (!inputValue) {
      return;
    }
    value *= parseInt(inputRef.current.value);
    setState(value);
  }

  function resetInput() {
    setInputValue("");
  }

  function resetResult() {
    setInputValue("");
    setState(0);
  }
  return (
    <div>
      <input
        pattern="[0-9]*"
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a number to calculate"
      />
      <br />
      <button onClick={add}>add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={division}>Divide</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>

      <h1>Result:{state}</h1>
    </div>
  );
};
export default Add;
