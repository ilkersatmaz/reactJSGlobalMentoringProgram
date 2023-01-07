import React, { useState, useCallback } from "react";
import Tab from "./Tab";
import './Tab.css';

function Tabs (props : any) {

  const {children,selectedGenre, setSelectedGenre} = props;

  const onClickTabItem = useCallback((tab: string) => {
    setSelectedGenre(tab);
  }, [selectedGenre]);

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child: any) => {
          const { id } = child.props;
          return (
            <Tab
              activeTab={selectedGenre}
              key={id}
              label={id}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child: any) => {
          return child.props.id !== selectedGenre ? undefined : child.props.children;
        })}
      </div>
    </div>
  );
}


export default Tabs;