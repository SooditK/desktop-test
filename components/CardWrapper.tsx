import React from "react";
import { TabsProps } from "../interfaces/IndexProps";
import Card from "./Card";

const CardWrapper = ({ rides }: TabsProps) => {
  return (
    <div>
      {rides.map(
        (ride: {
          id: number;
          origin_station_code: number;
          station_path: number[];
          destination_station_code: number;
          date: string;
          map_url: string;
          state: string;
          city: string;
        }) => (
          <Card
            city={ride.city}
            date={ride.date}
            destination_station_code={ride.destination_station_code}
            id={ride.id}
            map_url={ride.map_url}
            origin_station_code={ride.origin_station_code}
            state={ride.state}
            station_path={ride.station_path}
            key={ride.id}
          />
        )
      )}
    </div>
  );
};

export default CardWrapper;
