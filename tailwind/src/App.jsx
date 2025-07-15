import { useState } from "react";
import Button from "./Component/Button/Button";

function App() {
  const [display, setDisplay] = useState("");
  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "00",
    "/",
  ];

  const evaluate = () => {
    let result = eval(display);
    setDisplay(result);
  };

  return (
    <div className=" flex h-[100vh] bg-slate-200 justify-center items-center">
      <div className="space-y-5 w-80 border bg-white  rounded-xl p-5 px-10">
        <div className="border border-gray-200 p-4 text-end text-xl font-semibold bg-slate-200 rounded-xl h-14">
          {display}
        </div>
        <div className="flex justify-between">
          <Button data={"AC"} onClick={() => setDisplay("")} />
          <Button data={"="} onClick={() => evaluate()} />
        </div>
        <div className="flex flex-wrap justify-evenly space-y-3">
          {buttons.map((item) => (
            <Button
              key={item}
              data={item}
              onClick={() => setDisplay((prev) => prev + item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
