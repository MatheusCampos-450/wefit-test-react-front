import styled, { css } from "styled-components";

interface IImageContainerProps {
  maxWidth?: number;
  maxHeight?: number;
}

export const ImageWrapper = styled.div<IImageContainerProps>`
  ${(props) => css`
    max-width: ${`${props.maxWidth}px`};
    max-height: ${`${props.maxHeight}px`};
  `}
`;
