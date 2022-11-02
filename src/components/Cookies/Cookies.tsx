import React, { useState } from "react";
import style from "./styles.module.scss";
import { KEY_ACCEPT } from "./contstants";

const Cookies = () => {
  const [showEnterCookies, setShowEnterCookies] = useState(true);

  const clickHandler = () => {
    setShowEnterCookies(false);
    localStorage.setItem(KEY_ACCEPT, "true");
  };
  return (
    <>
      {!(localStorage.getItem(KEY_ACCEPT) === "true") && showEnterCookies && (
        <div className={style.wrapper}>
          <div className={style.wrapperText}>Мы используем Cookies</div>
          <div className={style.wrapperButtons}>
            <button onClick={clickHandler} className={style.buttonEnter}>
              Подтвердить
            </button>
            <button onClick={clickHandler} className={style.buttonReject}>
              Отклонить
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
