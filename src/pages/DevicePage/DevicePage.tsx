import React, { useState } from "react";
import style from "./styles.module.scss";
import MyRating from "../../components/Rating/Rating";
import Button from "../../components/Button/Button";
import useTheme from "../../hooks/useTheme";
import { Tab, Tabs } from "../../components/Tabs";
import Rubles from "../../components/Rubles";
import { useParams } from "react-router-dom";
import { deviceAPI } from "../../services/DeviceService";

const DevicePage = () => {
  const [count, setCount] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const { id } = useParams();
  const { theme } = useTheme();
  const { data: device } = deviceAPI.useFetchOneDeviceQuery(id ? id : "");
  const deviceImages = [
    {
      id: 1,
      image: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
    },
    {
      id: 2,
      image:
        "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
    },
    {
      id: 3,
      image: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
    },
    {
      id: 4,
      image:
        "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
    },
    {
      id: 5,
      image: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
    },
    {
      id: 6,
      image:
        "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
    },
    {
      id: 7,
      image: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
    },
    {
      id: 8,
      image:
        "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
    },
    {
      id: 9,
      image: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
    },
    {
      id: 10,
      image:
        "http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1",
    },
  ];
  const info = [
    {
      id: 1,
      title: "Цвет",
      description: "белый",
    },
    {
      id: 2,
      title: "Процессор",
      description: "Intel Core i7",
    },
    {
      id: 3,
      title: "Видеокарта",
      description: "NVidia Geforce 850",
    },
    {
      id: 4,
      title: "Материнская плата",
      description: "Gigabite",
    },
    {
      id: 5,
      title: "Блок питания",
      description: "800вт",
    },
  ];
  const increment = () => {
    if (count + 5 !== deviceImages.length) {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (count) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className={style.wrapper}>
        <h2>{device?.name}</h2>
        <div className={style.wrapperDevice}>
          <div className={style.wrapperImages}>
            <div className={style.wrapperImg}>
              <img
                className={style.deviceImg}
                src={
                  device &&
                  process.env.REACT_APP_API_URL + device.img[selectedImg]
                }
              />
            </div>
            <div className={style.wrapperMiniImages}>
              <button className={style.switcher} onClick={decrement}>
                {"<"}
              </button>
              {device?.img.map(
                (el, index) =>
                  index >= count &&
                  index < count + 5 && (
                    <div
                      key={index}
                      className={style.containMiniImage}
                      style={{
                        boxShadow:
                          index === selectedImg
                            ? `5px 5px 5px ${theme.colors.secondary}`
                            : "",
                      }}
                    >
                      <img
                        className={style.deviceMiniImg}
                        key={id}
                        src={process.env.REACT_APP_API_URL + el}
                        onClick={() => setSelectedImg(index)}
                      />
                    </div>
                  )
              )}
              <button className={style.switcher} onClick={increment}>
                {">"}
              </button>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={style.wrapperDescription}>
              <div className={style.headerDescription}>
                Основные характеристики
              </div>
              <div className={style.wrapperDetail}>
                {info.map(({ id, title, description }) => (
                  <div className={style.descriptionItem} key={id}>
                    <strong className={style.detailName}>{title}: </strong>
                    <span className={style.detailDescription}>
                      {description}
                    </span>
                  </div>
                ))}
              </div>
              <div className={style.containAddition}>
                <MyRating />
                <div>Отзывы</div>
                <div className={style.price}>
                  <span>
                    {device?.price} <Rubles />
                  </span>
                </div>
              </div>

              <Button
                onClick={() => null}
                styles={{ width: "100%", height: "4em" }}
              >
                Добавить в корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Tabs>
        <Tab title="Характеристики" component={<div>Hello</div>} />
        <Tab title="Отзывы" component={<div>Hello</div>} />
      </Tabs>
    </>
  );
};

export default DevicePage;
