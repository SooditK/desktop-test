import React from "react";

const Card = (ride: {
  id: number;
  origin_station_code: number;
  station_path: number[];
  destination_station_code: number;
  date: string;
  map_url: string;
  state: string;
  city: string;
  distance: number;
}) => {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg h-64 shadow-md md:flex-row  bg-gray-700">
        <div className="flex">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={ride.map_url}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ride Id: {ride.id}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Origin Station: {ride.origin_station_code}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Station Path: [{ride.station_path.toString()}]
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date: {ride.date}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Distance: {ride.distance}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
