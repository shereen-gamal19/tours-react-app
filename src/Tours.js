import React from 'react';
import Tour from './Tour';
// 8 here we will set our props
const Tours = ({tours , removeTour}) => {
  // 9
  return <section>
    <div className="title">
      <h2>
        our tours
      </h2>
      <div className="underline"></div>
    </div>
    <div>
      {/* // 10 we will map through all tours and we will use spread operator to get all tours  */}
      {tours.map((tour)=>{
        return(
           <Tour  key={tour.id} {...tour} removeTour={removeTour} />
        ) 
      })}
    </div>

  </section>;
};

export default Tours;
