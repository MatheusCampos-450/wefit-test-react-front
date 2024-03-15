import styled from "styled-components";

import Button from "@/shared/components/atoms/Button";

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  padding: 4rem;

  border-radius: 0.25rem;
  background: ${({ theme }) => theme.cartBackground};

  @media (max-width: 375px) {
    padding: 2rem;
  }
`;

export const EmptyCartTitle = styled.h1`
  margin: 0 0 1.5rem;

  font-family: Open Sans;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: center;

  color: ${({ theme }) => theme.cartTextColor};
`;

export const ImageWrapperStyled = styled.div`
  width: 100%;
  max-width: 12rem;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 0.063rem;
  max-width: 27rem;

  background: #3f3d56;
`;

export const ButtonStyled = styled(Button)`
  margin: 1.5rem 0 0;
  max-width: 10.75rem;
`;
