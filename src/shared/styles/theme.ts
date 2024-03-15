export function getTheme() {
  return {
    background: "#2F2E41",
    textColor: "#ffffff",

    cardMovieBackground: "#ffffff",
    cardMovieTextColor: "#2F2E41",

    cartBackground: "#ffffff",
    cartTextColor: "#2F2E41",
    cartColumnTitleColor: "#999999",

    blue: "#009EDD",
    green: "#039B00",
  };
}

export type IThemeProps = ReturnType<typeof getTheme>;
