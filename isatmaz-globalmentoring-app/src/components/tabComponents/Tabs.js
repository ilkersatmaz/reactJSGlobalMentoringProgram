import React, { useState, useCallback } from "react";
import Tab from "./Tab";
import './Tab.css';

function Tabs (props) {

  const {children} = props;
  const [activeTab, SetActiveTab] = useState(children[0].props.label);  

  const onClickTabItem = useCallback((tab) => {
    SetActiveTab(tab);
  }, [activeTab]);

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          return child.props.label !== activeTab ? undefined : child.props.children;
        })}
      </div>
    </div>
  );
}


export default Tabs;