import React from "react";
import './Tab.css';

function Tab (props) {
  const {onClick, activeTab, label} = props;

  const onClickItem = () => {
    onClick(label);
  };

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }  

  return (
    <li className={className} onClick={onClickItem}>
      {label}
    </li>
  );
  }


export default Tab;