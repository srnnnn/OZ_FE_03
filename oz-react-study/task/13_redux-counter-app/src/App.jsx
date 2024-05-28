import { useDispatch, useSelector } from 'react-redux';
import './App.css'

function App() {
  const counter = useSelector((state) => state);
   console.log(counter)

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({type:'INCREMENT'})
 }
  const handleDecrement = () => {
    dispatch({type:'DECREMENT'}) 
 }
 const handleAsyncIncrement = () => {
  setTimeout(() => {
    dispatch({ type: 'INCREMENT' });
  }, 1000);
 }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={handleIncrement}>+ 1</button>
      <button onClick={handleDecrement}>- 1</button>
      <button onClick={handleAsyncIncrement}>1초 후 +1</button>
    
    </div>
  );
}

export default App;
