export function getTheme() {
  return {
    background: "#2F2E41",
    textColor: "#ffffff",
  };
}

export type IThemeProps = ReturnType<typeof getTheme>;
