import React, { useState } from 'react';
// 11 we will set our props 
const Tour = ({id , name , info , price , image, removeTour}) => {
  // 13 here we will make the show less/read more button 
  const [readMore , setReadMore] = useState(false)
  
  // 12
  return (
    <article className='single-tour'> 
      <img src={image} alt ={name}/>
      <footer >
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>{/*  14 here will set that if readmore is true then we will show all info and if it false then we will show less letters  */}
        <p>{ readMore ? info : `${info.substring(0,150)}....`}</p>
        {/* 15 here we make the show less/ more button */}
        <button onClick={()=> setReadMore(!readMore)}>
          {readMore ? "show less" : "show more"}
        </button>
        <button className='delete-btn' onClick={()=>removeTour(id)}>not interested</button>


        
      </footer>
    </article>
  )
};

export default Tour;
