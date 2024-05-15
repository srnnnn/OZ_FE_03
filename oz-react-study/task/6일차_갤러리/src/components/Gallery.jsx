import React, { useEffect, useState } from 'react'


const Gallery = ({imgs}) => {

  return (
    <>
        <div className="imgs">
            {imgs.map(i => (
            <img src={i.urls.small}/>
            ))}
      </div>
    </>
    
  )
}

export default Gallery;