import React from "react";
import style from "./styles.module.scss";
import MyRating from "../Rating/Rating";
import { MdDeleteOutline } from "react-icons/md";
import Rubles from "../Rubles";

const BasketItem = () => {
  return (
    <div className={style.wrapperItem}>
      <div className={style.wrapperContent}>
        <div className={style.wrapperDeviceImage}>
          <img
            className={style.deviceImage}
            src={"https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"}
          />
        </div>
        <div>
          <div className={style.numberId}>Код товара: 15959</div>
          <div className={style.itemName}>Название товара</div>
          <MyRating />
        </div>
      </div>
      <div className={style.wrapperActions}>
        <div className={style.amountItem}>
          <div className={style.sumAmount}>-</div>
          <input className={style.amountInput} />
          <div className={style.sumAmount}>+</div>
        </div>
        <div className={style.priceItem}>
          16 990 <Rubles />
        </div>
        <div className={style.deleteItem}>
          <MdDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
