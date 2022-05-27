import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "./Card";
import { TabsProps } from "../interfaces/IndexProps";
import CardWrapper from "./CardWrapper";

const TabComponent = ({ rides }: TabsProps) => {
  const [index, setIndex] = useState(0);
  function handleIndexChange(index: number) {
    setIndex(index);
  }
  return (
    <div className="w-full h-[calc(100vh-5rem)] bg-gray-900">
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
              <CardWrapper rides={rides} />
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
