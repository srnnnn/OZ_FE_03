import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../api/axios';
import requests from '../api/requests';
import styled from 'styled-components';

const Banner = () => {

  const [movie , setMovie] = useState(null);
  const [isClicked, setisClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async ()=> {
    //현재 상영중인 영화 정보 가져오기(여러영화)
    const response = await axios.get(requests.fetchNowPlaying) //-> https://api.themoviedb.org/3/movie/now_playing 이렇게 됨

    //여러영화중 랜덤으로 하나의 id 가져오기
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id

    //특정영화 상세정보 가져오기(비디오정보포함)
    const {data: movieDetail}=await axios.get(`movie/${movieId}`, {
      params: {append_to_response : 'videos'}
    })
    setMovie(movieDetail);
    console.log('movieDetail '+ movieDetail);
  }

   const truncate = (str, n) =>{ //글자수 많으면 ..으로 대체
    return str?.length > n ? str.substring(0,n) + "..." : str;
   }

  if(!movie){
    return (
      <div>
        loading...
      </div>
    )
  }
  
  if(!isClicked){
    return (
      <div 
        className='banner' 
        style={ {backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition:'top center', 
        backgroundSize:"cover"}}>
        <div className='banner__contents'>
          <h1 className='banner__title'> 
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie.videos?.results[0]?.key?
            <button className='banner__button play' onClick={()=>setisClicked(true)}>
              play
            </button> : null}
          </div>
          <p className='banner__description'>
              {truncate(movie.overview, 100)}
          </p>
        </div>
        <div className='banner--fadeBottom'></div>
      </div>
    )
  }else{
    return(
      <>
      <Container>
        <HomeContainer>
        <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?control=0&autoplay=1&mute=1`}></Iframe>
        </HomeContainer>
      </Container>
      <button onClick={()=> setisClicked(false)}>
        X
      </button>
      </>
    )
  }
 
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

`

export default Banner