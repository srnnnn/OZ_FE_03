import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="todo-div">
        <h1>나의 투두 리스트</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
