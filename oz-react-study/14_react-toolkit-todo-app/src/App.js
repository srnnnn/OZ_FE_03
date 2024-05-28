import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'

function App() {

  const todos = useSelector(state => state.todos);
  console.log(todos);
  return (
    <div className="App">
      <input />
      <button>Add TODO</button>
      <ul>
        {todos.map(todo => (
          <>
            <input />
            <span>
              {todo.text}
            </span>
            <button>Edit</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
