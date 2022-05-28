import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FullData, IndexProps, TabsProps } from "../interfaces/IndexProps";
import CardWrapper from "./CardWrapper";
import { calculateMinDistanceForEveryStation } from "../utils/functions";

const TabComponent = ({ data, rides }: FullData) => {
  const [stationCode, setStationCode] = useState(data.station_code);
  const [index, setIndex] = useState(0);
  const [nearestRides, setNearestRides] = useState<TabsProps[]>();

  function handleIndexChange(index: number) {
    setIndex(index);
  }

  useEffect(() => {
    const distance = calculateMinDistanceForEveryStation(stationCode, rides);
    const nearestRides = rides.map((ride: any, index: number) => {
      return { ...ride, distance: distance[index] };
    });
    setNearestRides(
      nearestRides.sort((a: any, b: any) => a.distance - b.distance)
    );
  }, [rides, stationCode]);

  return (
    <div className="w-full h-full bg-gray-900">
      <div className="max-w-7xl mx-auto bg-gray-900 py-5">
        <Tabs className=" text-white px-10 py-5">
          <TabList className="flex gap-14 cursor-pointer">
            <Tab
              onClick={() => handleIndexChange(1)}
              className={`${
                index == 1 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5`}
            >
              Nearest Rides
            </Tab>
            <Tab
              onClick={() => handleIndexChange(2)}
              className={`${
                index == 2 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5`}
            >
              Upcoming Rides
            </Tab>
            <Tab
              onClick={() => handleIndexChange(3)}
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
              <CardWrapper rides={rides} />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <CardWrapper rides={rides} />
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
