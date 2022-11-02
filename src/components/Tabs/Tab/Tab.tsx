import React from "react";
import style from "./styles.module.css";

const Tab = ({ component }: { title: string; component: JSX.Element }) => {
  return <div className={style.tabContainer}>{component}</div>;
};

export default Tab;
