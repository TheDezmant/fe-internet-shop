import React, { FC } from "react";
import style from "./styles.module.scss";

import useTheme from "../../hooks/useTheme";
import MyRating from "../Rating/Rating";
import Button from "../Button/Button";
import Rubles from "../Rubles";
import { DeviceItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/constants";

const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(DEVICE_ROUTE + "/" + device.id);
  };
  return (
    <div
      className={style.wrapper}
      style={{ backgroundColor: theme.colors.backgroundItem }}
      onClick={onClickHandler}
    >
      <div className={style.wrapperImg}>
        <img
          className={style.img}
          src={process.env.REACT_APP_API_URL + device.img[0]}
        />
      </div>
      <div className={style.wrapperDescription}>
        <div className={style.name}>{device.name}</div>
        <div>Описание</div>
        <div className={style.description}>Описание</div>
        <MyRating />
      </div>
      <div className={style.wrapperAction}>
        <div />
        <div className={style.price}>
          <div className={style.name}>Цена:</div>
          <div>
            <span>
              {device.price} <Rubles styles={{ fontSize: "20px" }} />
            </span>
          </div>
        </div>
        <Button onClick={() => null}>Купить</Button>
      </div>
    </div>
  );
};

export default DeviceItem;
