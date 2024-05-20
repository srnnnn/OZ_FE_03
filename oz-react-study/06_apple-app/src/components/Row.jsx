import { useCallback, useEffect , useState} from 'react'
import './Row.css';
import axios from '../api/axios';
import MovieModal from './MovieModal';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from 'styled-components';

const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false); 

  const [movieSelected, setmovieSelected] = useState({});

  const handleClick = (movie) => {
    setmodalOpen(true);
    setmovieSelected(movie);
  }

  //영화정보 가져오기 (api)
  const fetchMovieData = useCallback( async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  },[fetchUrl])

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])


  return (
    <Container>
      <h2>{title}</h2>
      
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수 
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지 
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
        }}

        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <div id={id} className='row__posters'>
          {movies.map((movie)=>(
            <SwiperSlide
            key={movie.id}
            >
              <Wrap>
                <img
                  className='row__poster'
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))} 
        </div>
      </Swiper>
      {modalOpen?<MovieModal {...movieSelected} setmodalOpen={setmodalOpen}/>: null}
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`
const Wrap = styled.div`
width: 95%;
height: 95%;
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);
img {
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
  z-index: 1;
  top: 0;
}
&:hover {
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(0.98);
  border-color: rgba(249, 249, 249, 0.8);
}
`

export default Row;