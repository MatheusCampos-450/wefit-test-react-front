import styled from "styled-components";

import Button from "@/shared/components/atoms/Button";
import { ImageWrapper } from "@/shared/styles/ImageContainer";

export const CheckoutSuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 67.5rem;

  padding: 4rem;

  border-radius: 0.25rem;
  background: ${({ theme }) => theme.cartBackground};
`;

export const CheckoutSuccessTitle = styled.h1`
  margin: 0 0 1.5rem;

  font-family: Open Sans;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: center;

  color: ${({ theme }) => theme.cartTextColor};
`;

export const ImageWrapperStyled = styled(ImageWrapper)`
  width: 100%;
  max-width: 12rem;
`;

export const ButtonStyled = styled(Button)`
  margin: 1.5rem 0 0;
  max-width: 10.75rem;
`;
