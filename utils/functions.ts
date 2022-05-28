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
