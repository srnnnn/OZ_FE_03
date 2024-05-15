import { useState,useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery.jsx';
import axios from 'axios';

function App() {

  const [inputValue,setInputValue] = useState('');
  const [imgs, setImgs] = useState([]);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const search = async () => {
    
    try {
      const res = await axios.get('https://api.unsplash.com/photos/random',{
          params: {
              client_id : import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
              count: 5,
              query: inputValue
          }
      });
      setImgs(res.data);  
  } catch (error) {
      console.log(error);
  }
  };
  
  const handleSearch = () => {
    search();
    setInputValue('')
  };

  return (
    <div className='App'>
      <h1>Image Gallery📸</h1>
      <div>원하는 이미지를 검색하세요</div>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Search for Images..' />
      <button onClick={handleSearch}>검색</button>
      <div>
        <Gallery imgs={imgs}></Gallery> 
      </div>
      
    </div>
  )
}

export default App
