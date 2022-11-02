import React, { FC } from "react";
import { ContentProps } from "./types";
import style from "./styles.module.scss";

const Content: FC<ContentProps> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Content;
