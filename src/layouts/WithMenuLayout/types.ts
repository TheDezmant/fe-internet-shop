import React from "react";

export interface WithMenuLayoutProps {
  children: React.ReactNode;
  setWithMenu: (item: boolean) => void;
}
