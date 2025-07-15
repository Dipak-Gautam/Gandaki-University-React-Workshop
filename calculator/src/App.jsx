import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [output, setOutput] = useState(0);

  const add = () => {
    let temp = Number(firstNumber) + Number(secondNumber);
    setOutput(temp);
  };
  const sub = () => {
    let temp = Number(firstNumber) - Number(secondNumber);
    setOutput(temp);
  };
  const multi = () => {
    let temp = Number(firstNumber) * Number(secondNumber);
    setOutput(temp);
  };

  const div = () => {
    let temp = Number(firstNumber) / Number(secondNumber);
    setOutput(temp);
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOutput(0);
  };

  return (
    <div>
      <div>
        <span>First Number :</span>
        <input
          type="number"
          value={firstNumber}
          placeholder="Enter first number"
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>

      <div>
        <span>Second Number</span>
        <input
          type="text"
          value={secondNumber}
          placeholder="Enter second number"
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <div>
        <span>Output ::</span>
        <span>
          <strong>{output}</strong>
        </span>
      </div>

      <div>
        <button onClick={() => add()}>+</button>
        <button onClick={() => sub()}>-</button>
        <button onClick={() => multi()}>*</button>
        <button onClick={() => div()}>/</button>
        <button onClick={() => clear()}>Clear</button>
      </div>
    </div>
  );
}

export default App;
