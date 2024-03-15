import styled from "styled-components";
import { css } from "styled-components";

interface IImageContainerProps {
  maxWidth?: number;
}

export const ImageWrapper = styled.div<IImageContainerProps>`
  ${(props) => css`
    max-width: ${`${props.maxWidth}px`};
  `}
`;
