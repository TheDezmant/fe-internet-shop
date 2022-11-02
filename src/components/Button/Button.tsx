import React, { FC } from "react";
import { ButtonProps } from "./types";
import style from "./styles.module.scss";
import { getContrastColor } from "../../utils/utils";
import useTheme from "../../hooks/useTheme";

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  styles,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={style.buttonWrapper}
      style={{
        background: variant === "outlined" ? "none" : theme.colors[color],
        borderColor: theme.colors[color],
        color:
          variant === "outlined"
            ? theme.colors[color]
            : getContrastColor(theme.colors[color]),
        boxShadow:
          variant === "outlined" ? "none" : `0 0 3px ${theme.colors[color]}`,
        ...styles,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
