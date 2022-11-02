import React from "react";
import style from "./styles.module.scss";
import Button from "../Button/Button";
import { useAppDispatch } from "../../hooks/redux";
import { categoriesSlice } from "../../store/reducers/categoriesSlice";

const FakeDevices = () => {
  const dispatch = useAppDispatch();
  const { showAll } = categoriesSlice.actions;
  return (
    <div className={style.wrapper}>
      <span className={style.text}>Показать все товары?</span>
      <Button onClick={() => dispatch(showAll(true))}>Показать</Button>
    </div>
  );
};

export default FakeDevices;
