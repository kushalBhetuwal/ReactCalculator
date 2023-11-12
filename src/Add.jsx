import { useState, useRef } from "react";
let value = 0;
const Add = () => {
  const [inputValue, setInputValue] = useState();
  const [state, setState] = useState();
  const inputRef = useRef(null);
  function handleChange(e) {
    setInputValue(e.target.value);
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
    <div className="filter">
      <input
        className="input"
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <div className="margin">
        <button className="button" onClick={add}>
          add
        </button>
        <button className="button" onClick={subtract}>
          Subtract
        </button>
        <button className="button" onClick={division}>
          Divide
        </button>
        <button className="button" onClick={multiply}>
          Multiply
        </button>
        <button className="button color" onClick={resetInput}>
          Reset Input
        </button>
        <button className="button color" onClick={resetResult}>
          Reset Result
        </button>
      </div>

      <h1>Result:{state}</h1>
    </div>
  );
};
export default Add;
