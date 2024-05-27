import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {fetchPosts} from './actions/posts';

function App() {

  const counter = useSelector((state) => state.counter); //store.getState()를 대체함
  const todos = useSelector((state) => state.todos);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch(); //store.dispatch(action) 대체

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])


  const [todoValue, settodoValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', text: todoValue})
  }

  const handleIncrement = () => {
     //redux store state 업데이트
     dispatch({type:'INCREMENT'})
  }
  const handleDecrement = () => {
    dispatch({type:'DECREMENT'}) 
  }
  return (
    <div className="App">
      <div>
        <ul>
          {posts.map((post,index) => <li key={index}>{post.title}</li>)}
        </ul>
      </div>

        <div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input type='text' value={todoValue} onChange={((e)=> settodoValue(e.target.value))}/>
            <input type='submit'/>
          </form>
        </div>

        <div>
        Clicked: {counter} times
        {" "}
        <button onClick={handleIncrement}>+</button>
        {" "}
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
