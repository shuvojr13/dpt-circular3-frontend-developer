import data from '../Data.json'; 

function DataCollection() {
  const {flightOffer} = data ;
  return (
    <>
        <div>
      <h2>Flight Offers</h2>
      {/* Iterate over the flight offers */}
      {flightOffer.map((offer, index) => (
        <div key={index}>
          <h3>Offer {index + 1}</h3>
          {/* Iterate over the itineraries */}
          {offer.itineraries.map((itinerary, idx) => (
            <div key={idx}>
              <h4>Itinerary {idx + 1}</h4>
              {/* Iterate over the segments */}
              {itinerary.segments.map((segment, i) => (
                <div key={i}>
                  <p>
                    Departure: {segment.departure.iataCode} - {segment.departure.at}
                  </p>
                  <p>
                    Arrival: {segment.arrival.iataCode} - {segment.arrival.at}
                  </p>
                  <p>Marketing Carrier: {segment.marketingCarrier}</p>
                  <p>Carrier Code: {segment.carrierCode}</p>
                  <p>Flight Number: {segment.flightNumber}</p>
                  <p>Aircraft: {segment.aircraft}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
    </>
  )
}

export default DataCollection