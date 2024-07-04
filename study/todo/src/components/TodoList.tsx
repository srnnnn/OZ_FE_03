import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import useStore from "../store/useStore";

export default function TodoList() {
  // const [todoList, setTodoList] = useState<Todo[]>([]);

  const todos = useStore((state) => state.todos);
  return (
    <>
      <TodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
