import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <div className="todo-div">
        <h1>나의 투두 리스트</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
