import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { addTodo, deleteTodo, editTodo, toggleTodo, filterTodo } from './store/todoSlice';

function App() {

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('all');
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const todos = useSelector(state => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo)=>todo.completed);
      case 'active':
        return state.todos.filter((todo)=>!todo.completed);
      default:
        return state.todos;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() !== ''){
      dispatch(
        addTodo(text)
      )
      setText('');
    }
  }

  const handleDelete = (id) => {
    dispatch(
      deleteTodo(id)
    )
  }

  const handleEditStart = (id, text) => {
    setEditId(id);
    setEditText(text);
  }

  const handleEditCancel = () => {
    setEditId(null);
    setEditText('');
  }

  const handleEditSave = () => {
    if(editText.trim() !==''){
      dispatch(
        editTodo({
          id: editId,
          newText: editText
        })
      )
      setEditId(null);
      setEditText('')
    }
  }

  const handleChageFilter = (e) => {
    setFilter(e.target.value);
  }
  return (
    <div className="App">
      <h2>할 일 목록</h2>
      <span>필터 : </span>
      <select onChange={ handleChageFilter } value={filter}> 
        <option value='all'>모두보기</option>
        <option value='completed'>완료됨</option>
        <option value='active'>진행중</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={e=> setText(e.target.value)}/>
        <button type='submit'>추가</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id === editId ? 
            <>
              <input type='text' value={editText} onChange={(e)=> setEditText(e.target.value)}/> 
              <button onClick={handleEditSave} className='editBtn'>저장</button>
              <button onClick={handleEditCancel} className='editBtn'>취소</button>
            </> 
            :
            <>
              <input type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
              <span>
                {todo.text}
              </span>
              <button onClick={() => handleEditStart(todo.id, text)} className='saveBtn'>수정</button>
              <button onClick={() => handleDelete(todo.id)} className='saveBtn'>삭제</button>
              </>
            }

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
