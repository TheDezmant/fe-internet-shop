import React, { FC } from "react";
import NavBar from "../../components/Navbar/NavBar";
import { LayoutProps } from "./types";
import Cookies from "../../components/Cookies/Cookies";
import Content from "./Content/Content";

const AppLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Content>{children}</Content>
      <Cookies />
    </>
  );
};

export default AppLayout;
