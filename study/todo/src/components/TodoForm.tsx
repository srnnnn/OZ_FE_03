import { useState } from "react";
import useStore from "../store/useStore";

export default function TodoForm() {
  const [newTitle, setNewTitle] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    // const newTodo = { id: Date.now(), title: newTitle, isCompleted: false };

    // setTodo((prevTodos: Todo[]) => [...prevTodos, newTodo]);
    if (newTitle === "") {
      return;
    }
    addTodo(newTitle);
    setNewTitle("");
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="투두투두.."
          className="todo-form__input"
          value={newTitle}
          onChange={(e) => setNewTitle(e.currentTarget.value)}
        />
        <button type="submit" className="todo-form__button">
          추가
        </button>
      </form>
    </>
  );
}
