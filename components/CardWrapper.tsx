import Card from "./Card";

const CardWrapper = ({ rides }: any) => {
  return (
    <div>
      {rides?.map(
        (ride: {
          id: number;
          origin_station_code: number;
          station_path: number[];
          destination_station_code: number;
          date: string;
          map_url: string;
          state: string;
          city: string;
          distance: string;
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
            distance={Number(ride.distance)}
          />
        )
      )}
    </div>
  );
};

export default CardWrapper;
