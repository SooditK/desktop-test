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
      <div className="flex flex-col my-4 items-center rounded-lg h-64 shadow-md md:flex-row  bg-black">
        <div className="flex ml-8">
          <img
            className="object-cover w-full h-96 rounded-lg md:h-auto md:w-48 md md:rounded-lg"
            src={ride.map_url}
            alt=""
          />
        </div>
        <div className="flex text-lg font-semibold flex-col ml-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ride Id: <span className="text-white">{ride.id}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Origin Station:{" "}
            <span className="text-white">{ride.origin_station_code}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Station Path: [
            <span className="text-white">{ride.station_path.toString()}]</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date: <span className="text-white">{ride.date}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Distance: <span className="text-white">{ride.distance}</span>
          </p>
        </div>
        {/* ALIGN ITEMS TO THE RIGHT */}
        <div className="flex flex-col justify-center items-center ml-auto mb-auto p-5 ">
          <div className="flex gap-x-8">
            <p className="mb-3 font-normal text-white rounded-2xl px-3 bg-gray-900">
              <span className="text-white">{ride.city}</span>
            </p>
            <p className="mb-3 font-normal text-white rounded-2xl px-3 bg-gray-900">
              <span className="text-white">{ride.state}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
