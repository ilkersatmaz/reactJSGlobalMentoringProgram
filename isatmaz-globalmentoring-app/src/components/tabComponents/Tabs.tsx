import React, { useState, useCallback } from "react";
import Tab from "./Tab";
import './Tab.css';

function Tabs (props : any) {

  const {children} = props;
  const [activeTab, SetActiveTab] = useState(children[0].props.id);  

  const onClickTabItem = useCallback((tab: string) => {
    SetActiveTab(tab);
  }, [activeTab]);

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child: any) => {
          const { id } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={id}
              label={id}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child: any) => {
          return child.props.id !== activeTab ? undefined : child.props.children;
        })}
      </div>
    </div>
  );
}


export default Tabs;