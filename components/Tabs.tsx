import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FullData, RideProps } from "../interfaces/IndexProps";
import CardWrapper from "./CardWrapper";
import {
  calculateMinDistanceForEveryStation,
  filterUpcomingRides,
  filterPastRides,
  filterAllRides,
} from "../utils/functions";
import DropdownWrapper from "./DropdownWrapper";

const TabComponent = ({ data, rides }: FullData) => {
  const [stationCode, setStationCode] = useState(data.station_code);
  const [dropDownValue, setDropDownValue] = useState<string>("");
  const [stateValue, setStateValue] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [citiDropdown, setCitiDropdown] = useState<boolean>(false);
  const [index, setIndex] = useState(1);
  const [nearestRides, setNearestRides] = useState<RideProps[]>([]);
  const [upcomingRides, setUpcomingRides] = useState<RideProps[]>();
  const [pastRides, setPastRides] = useState<RideProps[]>();
  const [cities, setCities] = useState<string[]>();
  const [states, setStates] = useState<string[]>();

  useEffect(() => {
    const distance = calculateMinDistanceForEveryStation(stationCode, rides);
    const nrRides = rides.map((ride: any, index: number) => {
      return { ...ride, distance: distance[index] };
    });
    const cities = nrRides.map((ride: RideProps) => ride.city);
    setCities(cities);
    const states = nrRides.map((ride: RideProps) => ride.state);
    setStates(states);
    const filteredData = [
      ...filteredNearestRides(nrRides, dropDownValue).sort(
        (a: any, b: any) => a.distance - b.distance
      ),
    ];
    const outOfVarNames = filterAllRides(
      filteredData,
      dropDownValue,
      stateValue
    );
    setNearestRides(
      outOfVarNames.sort((a: any, b: any) => a.distance - b.distance)
    );
    const bhoora = filterUpcomingRides(nrRides);
    setUpcomingRides(bhoora);
    const pastRides = filterPastRides(nrRides, dropDownValue, stateValue);
    setPastRides(pastRides.sort((a: any, b: any) => a.distance - b.distance));
  }, [dropDownValue, rides, stateValue, stationCode]);

  // filter nearestRides based on dropdown value
  const filteredNearestRides = (
    nearestRides: RideProps[],
    dropDownValue: string
  ) => {
    if (!dropDownValue) return nearestRides;
    return nearestRides.filter((ride) => ride.city === dropDownValue);
  };

  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] bg-gray-900">
      <div className="max-w-7xl mx-auto bg-gray-900 py-5">
        <Tabs className=" text-white px-10 py-5">
          <TabList className="flex gap-14">
            <Tab
              onClick={() => setIndex(1)}
              className={`${
                index == 1 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5 cursor-pointer`}
            >
              Nearest Rides
            </Tab>
            <Tab
              onClick={() => setIndex(2)}
              className={`${
                index == 2 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5 cursor-pointer`}
            >
              Upcoming Rides
            </Tab>
            <Tab
              onClick={() => setIndex(3)}
              className={`${
                index == 3 ? "border-b-2 border-slate-50" : "border-0"
              } text-xl mb-5 cursor-pointer`}
            >
              Past Rides
            </Tab>
            <div className="flex ml-auto cursor-pointer">
              <DropdownWrapper
                dropdown={dropdown}
                cities={cities}
                states={states}
                setDropdown={setDropdown}
                setDropDownValue={setDropDownValue}
                dropDownValue={dropDownValue}
                stateValue={stateValue}
                citiDropdown={citiDropdown}
                setCitiDropdown={setCitiDropdown}
                setStateValue={setStateValue}
              />
            </div>
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
