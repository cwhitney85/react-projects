import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
        <div>
          {tours.map(tour => {
            // Spread object allows to pass all the values as props
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          })}
        </div>
      </div>
    </section>
  )
};

export default Tours;
