import { useState } from 'react';
import ButtonPanel from './Components/ButtonPanel';
import Display from './Components/Display';
import './App.css';
import * as math from "mathjs";
import inputCheck from './utils/inputCheck';
import memoApi from './api/memoApi';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [info, setInfo] = useState('');

  async function handleClick(button) {
    if (inputCheck.isNumberButton(button)) {
      append(button);
    } else if (inputCheck.isOperationButton(button)) {
      operate(button);
    } else if (button === '=') {
      calculate();
      setInput('');
    } else if (button === 'DEL') {
      clearAll();
    } else if (button === 'M') {
      await saveNumber();
    } else if (button === 'MR') {
      await showNumber();
    }
  }

  function append(button) {
    const lastCharacter = input.charAt(input.length - 1);

    if (result && !input) {
      return;
    } else if (button === '0' && input === '0') {
      return;
    } else if (input === '0' && button !== '.') {
      setInput(button);
    } else if (button === '.' && !input) {
      setInput('0.');
    } else if (button === '.' && lastCharacter === '.') {
      return;
    } else if (button === '.' && inputCheck.isDecimal(input)) {
      return
    } else {
      setInput(input + button);
    }
  }

  function operate(button) {
    const lastCharacter = input.charAt(input.length - 1);
    if (!input && !result) {
      return;
    } else if (inputCheck.isOperationButton(lastCharacter)) {
      setInput(input.slice(0, -1) + button);
    } else if (!input && result) {
      setInput(result + button);
    } else {
      setInput(input + button);
      calculate();
    }
  }

  function calculate() {
    const lastCharacter = input.charAt(input.length - 1);
    if (inputCheck.isOperationButton(lastCharacter)) {
      setInput(input.slice(0, -1));
    } else if (!input) {
      setResult('0');
    } else {
      try {
        setResult(math.evaluate(input).toString() || "")
      } catch (e) {
        setInfo('error');
      }
    }
  }

  function clearAll() {
    setInfo('');
    setInput('');
    setResult('');
    memoApi.postNumber({number: ''})
  }

  async function saveNumber() {
    let numberToSave= '';
    
    if (!result) {
      numberToSave = input;
    } else {
      numberToSave = result;
    }
     
    let data = { number: numberToSave }
    let response = await memoApi.postNumber(data);

    if (response) {
      setInfo(response.message);
    }
    setInfo('M');
  }

  async function showNumber() {
    let data = await memoApi.getNumber();
    if (data.message) {
      setInfo(data.message);
      setInput('');
    }
    setInput(data.memo);
  }

  return (
    <div className="calculator-grid">
      <Display info={info} input={input} result={result} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
}

export default App;
