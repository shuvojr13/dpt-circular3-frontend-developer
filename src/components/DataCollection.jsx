import React from "react";
import data from "../Data.json";

function DataCollection() {
  const { flightOffer } = data;
  const tableHeaders = [
    "Flight",
    "Aircraft",
    "Class",
    "Fare",
    "Route",
    "Departure",
    "Arrival",
    "Duration",
    "Price",
  ];

  return (
    <div className="mx-20">
      <p className="p-4 font-medium">{data.message}</p>
      <table className="w-full   border border-collapse ">
        <thead>
          <tr className="p-4 border bg-gray-100">
            {tableHeaders.map((header, indx) => (
              <th key={indx} className=" px-8 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flightOffer.map((offer, index) =>
            offer.itineraries.map((itinerary, idx) => (
              <React.Fragment key={index + idx}>
                {itinerary.segments.map((segment, i) => (
                  <tr
                    key={i}
                    className={
                      i == 0
                        ? "border-t-2  text-center text-sm "
                        : "text-center text-sm"
                    }
                  >
                    <td>
                      {segment.marketingCarrier}
                      {segment.aircraft}{" "}
                    </td>
                    <td>{segment.flightNumber}</td>
                    <td>{offer.class[0][0]}</td>
                    <td>{offer.fareBasis[0][0]}</td>
                    <td>
                      {segment.departure.iataCode} - {segment.arrival.iataCode}
                    </td>
                    <td>{segment.departure.at} </td>
                    <td>{segment.arrival.at} </td>
                    <td>{i == 0 ? itinerary.duration : null} </td>
                    <td>
                      {i === 0 ? (
                        <React.Fragment>
                          {offer.price} <br/>
                          <button className='btn-primary'>Select</button>
                        </React.Fragment>
                      ) : null}{" "}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataCollection;
