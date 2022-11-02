import React from "react";
import style from "./styles.module.scss";
import Button from "../../Button/Button";
import Rubles from "../../Rubles";

const BasketDescription = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>В корзине</div>
      <div className={style.amountItem}>Кол-во товаров</div>
      <div className={style.bonus}>Ввести промокод</div>
      <div className={style.bonus}>Использовать бонусы</div>
      <div className={style.generalPrice}>
        <span>
          199 000 <Rubles styles={{ fontSize: "24px" }} />
        </span>
      </div>
      <Button
        onClick={() => null}
        styles={{ fontSize: "12px", width: "100%", marginBottom: "20px" }}
      >
        Перейти к оформлению
      </Button>
      <div>Вы получите + ...бонусов</div>
      <div className={style.clubCard} />
    </div>
  );
};

export default BasketDescription;
