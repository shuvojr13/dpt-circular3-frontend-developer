import React from 'react';
import data from '../Data.json';

function DataCollection() {
  const { flightOffer } = data;
  const tableHeaders = [
    'Flight',
    'Aircraft',
    'Class',
    'Fare',
    'Route',
    'Departure',
    'Arrival',
    'Duration',
    'Price'
  ];

  return (
    <div className='mx-24'>
      <p className='p-4 font-medium'>{data.message}</p>
      <table className='w-full table-fixed  border border-collapse '>
        <thead>
        <tr className='p-4 border bg-gray-100'>
            {tableHeaders.map((header, indx) => (
              <th key={indx} className=' px-4 py-2'>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flightOffer.map((offer, index) => (
            offer.itineraries.map((itinerary, idx) => (
              <React.Fragment key={index + idx}>
              
                
                {itinerary.segments.map((segment, i) => (
                 
                  <tr key={i} className={i==0 ? 'border-t-2  text-center px-4 ':'text-center px-4'}>
                    <td >{segment.marketingCarrier}{segment.aircraft} </td>
                    <td >{segment.flightNumber}</td>
                    
                  </tr>
                  
                ))}
               
              </React.Fragment>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataCollection;
