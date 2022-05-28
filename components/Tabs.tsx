import Dropdown from "rc-dropdown";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FullData, TabsProps } from "../interfaces/IndexProps";
import CardWrapper from "./CardWrapper";
import {
  calculateMinDistanceForEveryStation,
  filterUpcomingRides,
  filterPastRides,
} from "../utils/functions";

const TabComponent = ({ data, rides }: FullData) => {
  const [stationCode, setStationCode] = useState(data.station_code);
  const [dropdown, setDropdown] = useState();
  const [index, setIndex] = useState(1);
  const [nearestRides, setNearestRides] = useState<TabsProps[]>();
  const [upcomingRides, setUpcomingRides] = useState<TabsProps[]>();
  const [pastRides, setPastRides] = useState<TabsProps[]>();
  const [cities, setCities] = useState<string[]>();

  function filterAllCities(rides: TabsProps[]) {
    return rides.filter((ride: any) => ride.date === dropdown);
  }

  useEffect(() => {
    const distance = calculateMinDistanceForEveryStation(stationCode, rides);
    const nearestRides = rides.map((ride: any, index: number) => {
      return { ...ride, distance: distance[index] };
    });
    setNearestRides(
      nearestRides.sort((a: any, b: any) => a.distance - b.distance)
    );
    const bhoora = filterUpcomingRides(nearestRides);
    setUpcomingRides(bhoora);
    const pastRides = filterPastRides(nearestRides);
    setPastRides(pastRides);
    const cities = nearestRides.map((ride: any) => ride.city);
    setCities(cities);
  }, [rides, stationCode]);

  console.log(cities);

  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] bg-gray-900">
      <div className="max-w-7xl mx-auto bg-gray-900 py-5">
        <Tabs className=" text-white px-10 py-5">
          <TabList className="flex gap-14 cursor-pointer">
            <Tab
              onClick={() => setIndex(1)}
              className={`${
                index == 1 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5`}
            >
              Nearest Rides
            </Tab>
            <Tab
              onClick={() => setIndex(2)}
              className={`${
                index == 2 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5`}
            >
              Upcoming Rides
            </Tab>
            <Tab
              onClick={() => setIndex(3)}
              className={`${
                index == 3 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5`}
            >
              Past Rides
            </Tab>
          </TabList>
          <TabPanel>
            <h2>
              <CardWrapper rides={nearestRides} />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <CardWrapper rides={upcomingRides} />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <CardWrapper rides={pastRides} />
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
