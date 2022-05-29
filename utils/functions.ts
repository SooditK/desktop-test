import { RideProps } from "../interfaces/IndexProps";

export function calculateMinimumDistance(
  stationCode: number,
  stationPath: number[]
): number {
  let minDistance = 100;
  stationPath.forEach((station: number) => {
    if (station === stationCode) {
      minDistance = 0;
    } else if (minDistance > Math.abs(station - stationCode)) {
      minDistance = Math.abs(station - stationCode);
    } else {
      minDistance = minDistance;
    }
  });
  return minDistance;
}
export function calculateMinDistanceForEveryStation(
  stationCode: number,
  rides: {
    id: number;
    origin_station_code: number;
    station_path: number[];
    destination_station_code: number;
    date: string;
    map_url: string;
    state: string;
    city: string;
  }[]
): number[] {
  let minDistanceArray: number[] = [];
  rides.forEach(
    (ride: {
      id: number;
      origin_station_code: number;
      station_path: number[];
      destination_station_code: number;
      date: string;
      map_url: string;
      state: string;
      city: string;
    }) => {
      minDistanceArray.push(
        calculateMinimumDistance(stationCode, ride.station_path)
      );
    }
  );
  return minDistanceArray;
}
export function filterUpcomingRides(rides: RideProps[]) {
  const today = new Date();
  const filterRides = rides.filter((ride) => {
    const rideDate = new Date(ride.date);
    return rideDate > today;
  });
  return filterRides;
}

export function filterPastRides(rides: RideProps[], dropDownValue?: string) {
  const today = new Date();
  const toSortRides = dropDownValue
    ? rides.filter((ride) => ride.city === dropDownValue)
    : rides;
  const filterRides = toSortRides.filter((ride) => {
    const rideDate = new Date(ride.date);
    return rideDate < today;
  });
  return filterRides;
}
