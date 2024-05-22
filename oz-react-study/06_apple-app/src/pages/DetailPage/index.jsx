import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from '../../api/axios';
import { imageBasePath } from "../../constant";
import { styled } from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const DetailPage = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      );
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])

  if (!movie) return null;

  console.log(movie)

  return (
    <Container>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>
        <Wrap>
        <img
          src={`${imageBasePath}${movie.poster_path
          }`}
          alt="detail"
        />
        </Wrap>
      </SwiperSlide>
      <SwiperSlide>
        <Wrap>
        <img
          src={`${imageBasePath}${movie.backdrop_path}`}
          alt="detail"
        />
        </Wrap>
      </SwiperSlide>
      <SwiperSlide>
        <Wrap>
          <Title>{movie.title}</Title>
          <ReleaseDate>{movie.release_date}</ReleaseDate>
          <Popularity>평점 : {movie.vote_average}</Popularity>
          <Overview>{movie.overview}</Overview>
        </Wrap>
      </SwiperSlide>
      </Swiper>

    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`
const Wrap = styled.div`
margin-top:70px;
width: 100%;
height: 500px;
border-radius: 10px;
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
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 28px 0px,
    rgb(0 0 0 / 72%) 0px 10px 12px -10px;
  transform: scale(0.98);
  border-color: rgba(249, 249, 249, 0.8);
}
`
const Title = styled.h1`
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 28px;
  margin-bottom: 10px;
`

const ReleaseDate = styled.p`
  position: relative;
  z-index: 2;
  color: #ddd;
  font-size: 18px;
  margin-bottom: 10px;
`

const Popularity = styled.p`
  position: relative;
  z-index: 2;
  color: #ddd;
  font-size: 18px;
  margin-bottom: 10px;
`

const Overview = styled.p`
  position: relative;
  z-index: 2;
  color: #bbb;
  font-size: 16px;
`
export default DetailPage