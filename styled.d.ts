import "styled-components";

import { IThemeProps } from "@/shared/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends IThemeProps {}
}
