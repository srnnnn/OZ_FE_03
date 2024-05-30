import './App.css';
import { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
        <h1>Counter App</h1>
        <div className='container'>
        <div data-testid="counter" className='count'>{count}</div>
        <div className='btnDiv'>
        <button data-testid="minus-button" onClick={() => setCount((prev) => prev - 1)} disabled={disabled} className='pmbtn'> - </button>
        <button data-testid="plus-button" onClick={() => setCount((prev) => prev + 1)} disabled={disabled} className='pmbtn'> + </button>
        <button style={{backgroundColor:"gray"}} data-testid="on/off-button" onClick={() => setDisabled((prev) => !prev)} className='ofbtn'> on/off </button>
        </div>
        </div>
    </div>
  );
}

export default App;
