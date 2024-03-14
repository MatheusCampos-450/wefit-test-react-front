export function getTheme() {
  return {
    background: "#2F2E41",
    textColor: "#ffffff",

    cardMovieBackground: "#ffffff",
    cardMovieTextColor: "#2F2E41",

    blue: "#009EDD",
  };
}

export type IThemeProps = ReturnType<typeof getTheme>;
