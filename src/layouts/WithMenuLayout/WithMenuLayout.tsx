import React, { FC } from "react";
import Menu from "./Menu/Menu";
import style from "./styles.module.scss";
import { LayoutProps } from "../AppLayout/types";

const WithMenuLayout: FC<LayoutProps> = ({ children }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(switchShowMenu(true));
  //   return () => {
  //     dispatch(switchShowMenu(false));
  //   };
  // }, []);
  return (
    <div className={style.wrapper}>
      <Menu />
      <div className={style.wrapperContent}>{children}</div>
    </div>
  );
};

export default WithMenuLayout;
