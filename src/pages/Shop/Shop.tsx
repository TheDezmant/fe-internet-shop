import React from "react";
import DeviceItem from "../../components/DeviceItem/DeviceItem";
import WithMenuLayout from "../../layouts/WithMenuLayout/WithMenuLayout";
import { deviceAPI } from "../../services/DeviceService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import FakeDevices from "../../components/FakeDevises/FakeDevices";
import style from "../../layouts/WithMenuLayout/Menu/styles.module.scss";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { categoriesSlice } from "../../store/reducers/categoriesSlice";

const Shop = () => {
  const { id, all } = useAppSelector((state) => state.categoriesReducer);
  const { data: devices } = deviceAPI.useFetchAllDevicesQuery(
    all ? "" : id.toString()
  );
  const dispatch = useAppDispatch();
  const { showAll } = categoriesSlice.actions;
  return (
    <>
      {all ? (
        <div style={{ margin: "0 200px" }}>
          <div className={style.header} style={{ borderBottom: "none" }}>
            <button
              className={style.iconArrow}
              onClick={() => dispatch(showAll(false))}
            >
              <BsArrowLeft />
            </button>
            <div>Венуться</div>
          </div>
          {devices?.map((device) => (
            <DeviceItem key={device.id} device={device} />
          ))}
        </div>
      ) : (
        <WithMenuLayout>
          {devices?.length ? (
            devices.map((device) => (
              <DeviceItem key={device.id} device={device} />
            ))
          ) : (
            <FakeDevices />
          )}
        </WithMenuLayout>
      )}
    </>
  );
};

export default Shop;
