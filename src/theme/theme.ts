import { colors } from "./colors";

export const lightTheme = {
  mode: "light" as const,
  background: colors.gray[50],
  surface: colors.white,
  text: colors.gray[900],
  textSecondary: colors.gray[500],
  border: colors.gray[200],
  primary: colors.primary[500],
  danger: colors.error,
};

export const darkTheme = {
  mode: "dark" as const,
  background: colors.gray[900],
  surface: colors.gray[800],
  text: colors.gray[50],
  textSecondary: colors.gray[400],
  border: colors.gray[700],
  primary: colors.primary[400],
  danger: colors.error,
};
