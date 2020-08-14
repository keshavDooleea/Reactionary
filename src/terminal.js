import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import Output from "./output";
import Information from "./info";
import ReactDOM from "react-dom";

function Terminal() {
  document.addEventListener("keydown", function (event) {});

  return (
    <div>
      <div>
        <Tabs className="Tabs">
          <TabList className="tablist">
            <Tab className="tab">TERMINAL</Tab>
            <Tab className="tab">INFORMATION</Tab>
          </TabList>

          <TabPanel>
            <Output />
          </TabPanel>
          <TabPanel>
            <Information />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Terminal;
