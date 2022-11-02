import React, { FC } from "react";
import { RublesProps } from "./types";
import { FaRubleSign } from "@react-icons/all-files/fa/FaRubleSign";
import style from "./styles.module.scss";

const Rubles: FC<RublesProps> = ({ styles }) => {
  return (
    <span style={styles} className={style.wrapper}>
      <FaRubleSign />
    </span>
  );
};

export default Rubles;
