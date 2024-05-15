import React, { useEffect, useState } from 'react'
import {styled} from "styled-components"

const Gallery = ({imgs}) => {

  return (
    <>
        <ImgDiv>
            {imgs.map(i => (
            <img src={i.urls.small}/>
            ))}
        </ImgDiv>
    </>
    
  )
}

const ImgDiv = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    align-items: center; 

  img{
    border-radius:10px;
    padding: 5px;
  }

`

export default Gallery;