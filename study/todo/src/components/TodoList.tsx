import TodoItem from './TodoItem';

import useStore from '../../config/useStore';

export default function TodoList() {
  // const [todoList, setTodoList] = useState<Todo[]>([]);

  const todos = useStore((state) => state.todos);
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}
