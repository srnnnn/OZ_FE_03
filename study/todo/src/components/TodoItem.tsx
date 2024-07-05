import { useState } from "react";
import useStore from "../../config/useStore";

export default function TodoItem({ todo }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const removeTodo = useStore((state) => state.removeTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const editTodo = useStore((state) => state.editTodo);
  const setEditing = useStore((state) => state.setEditing);

  const handleTitleClick = () => {
    setEditing(todo.id, true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const handleTitleBlur = () => {
    editTodo(todo.id, newTitle);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (newTitle === "") {
        removeTodo(todo.id);
      }
      editTodo(todo.id, newTitle);
    }
  };

  return (
    <>
      <div className="todoItem-div">
        <input
          type="checkbox"
          className="todoItem-div__input_checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <div className="todoItem-div__title">
          {todo.isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="todoItem-div__title-input"
            />
          ) : (
            <div
              onClick={handleTitleClick}
              className={todo.isCompleted ? "todoItem-div__title-line" : ""}
            >
              {todo.title}
            </div>
          )}
        </div>
        <button
          className="todoItem-div__button-delete"
          onClick={() => removeTodo(todo.id)}
        >
          삭제
        </button>
      </div>
    </>
  );
}
