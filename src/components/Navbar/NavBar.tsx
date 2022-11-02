import React from "react";
import style from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import Button from "../Button/Button";
import useTheme from "../../hooks/useTheme";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <header
      className={style.wrapper}
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "40px" }}>Купить Девайс</h1>
        <TextField
          sx={{ width: "500px" }}
          size={"small"}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
      <div>
        <Button
          onClick={() => null}
          variant={"contained"}
          color={"secondary"}
          styles={{ marginRight: "30px" }}
        >
          Войти
        </Button>
        <Button onClick={() => null} variant={"contained"} color={"secondary"}>
          Регистрация
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
