import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import useTheme from "./hooks/useTheme";
import AppLayout from "./layouts/AppLayout/AppLayout";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/userSlice";

const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.backgroundBody;
  }, []);

  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
