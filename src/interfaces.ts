import { Palette, Theme } from "@mui/material";

export interface ICustomShadows {
  [key: string]: string;
}

export interface ITheme extends Theme {
  customShadows: ICustomShadows;
  palette: Palette;
}
