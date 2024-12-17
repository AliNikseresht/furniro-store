"use client";

import { TTab } from "@/types/tabs";
import React, { useState } from "react";

interface TabsProps {
  tabs: TTab;
  initialActiveTabId?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, initialActiveTabId }) => {
  const [activeTab, setActiveTab] = useState<string>(
    initialActiveTabId || tabs[0]?.id
  );

  return (
    <div className="flex flex-col items-center">
      <div role="tablist" className="tabs tabs-bordered flex mb-4">
        {tabs.map((tab) => (
          <React.Fragment key={tab.id}>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab px-4 py-2 rounded-md text-[#000]"
              aria-label={tab.label}
              checked={activeTab === tab.id}
              onChange={() => setActiveTab(tab.id)}
            />
          </React.Fragment>
        ))}
      </div>
      <div
        role="tabpanel"
        className="tab-content py-7 flex justify-center items-center md:w-[60rem]"
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
