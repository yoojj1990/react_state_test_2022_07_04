import { useState } from "react";

import './App.css';

function InputTest() {
  const [inputText, setInputText] = useState("HelloWorld");

  const onReset = () => {
    setInputText("");
  }

  const onTextChange = (text) => {
    setInputText(text.target.value);
  }

  return(
    <div>
      <input value={inputText} onChange={onTextChange}></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <h1>입력값 : {inputText}</h1>
      </div>
    </div>
  );
}

function Counter() {
  //const [변수이름, 세터이름] = useState(초기값);
  const [num, count] = useState(0);

  const onPlus = () => {
    count(num + 1);
  }
  const onMinus = () => {
    count(num - 1);
  }
  
  return(
    <div>
      <h1>{num}</h1>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter></Counter><br></br>
      <InputTest></InputTest>
    </div>
  );
}

export default App;
