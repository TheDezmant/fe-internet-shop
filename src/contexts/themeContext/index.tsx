import { createContext } from "react";
import { darkTheme, lightTheme } from "../../themes";
import { IThemeContext } from "./types";

const themeContext = createContext<IThemeContext>({
  theme: lightTheme,
  changeTheme: () => null,
});

export default themeContext;
