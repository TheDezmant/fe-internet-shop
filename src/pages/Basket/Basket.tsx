import React from "react";
import BasketItem from "../../components/BasketItem/BasketItem";
import BasketDescription from "../../components/BasketItem/BasketDescription/BasketDescription";
import style from "./styles.module.scss";

const Basket = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>Корзина</div>
      <div className={style.wrapperBasket}>
        <div className={style.wrapperDeviceItems}>
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>
        <BasketDescription />
      </div>
    </div>
  );
};

export default Basket;
