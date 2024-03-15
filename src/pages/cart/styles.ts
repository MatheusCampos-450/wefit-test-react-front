import styled from "styled-components";

import Button from "@/shared/components/atoms/Button";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 67.5rem;

  padding: 1.5rem;

  border-radius: 0.25rem;
  background: ${({ theme }) => theme.cartBackground};

  @media (max-width: 375px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1.25fr;
  gap: 1rem;

  width: 100%;
  margin: 0 0 1.5rem;

  @media (max-width: 720px) {
    grid-template-columns: 1.25fr 0.75fr 1fr;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const ColumnTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartColumnTitleColor};
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  margin: 0 0 1.5rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.5rem 0 0;

  border-top: 0.063rem solid ${({ theme }) => theme.cartColumnTitleColor};

  @media (max-width: 375px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const ButtonStyled = styled(Button)`
  max-width: 10.875rem;

  @media (max-width: 375px) {
    max-width: none;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    width: 100%;
    margin: 0 0 1rem;
  }
`;

export const FooterTotalTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.cartColumnTitleColor};
`;

export const FooterTotalPrice = styled.strong`
  font-family: Open Sans;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.cartTextColor};

  margin: 0 0 0 1rem;
`;
