import styled from "styled-components";

export const CartItemMobileContainer = styled.div`
  display: grid;

  grid-template-columns: 1.25fr 1fr;
  gap: 1rem;

  width: 100%;
  margin: 1rem 0;

  @media (max-width: 330px) {
    gap: 0.25rem;
  }

  margin: 0.75rem 0;

  &:first-child {
    margin: 0 0 0.75rem;
  }

  &:last-child {
    margin: 0.75rem 0 0;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin: 0 0 0 1rem;
`;

export const ProductTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartTextColor};

  margin: 0 0 1rem;
`;

export const ProductSubtotalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const ProductSubtotal = styled.strong`
  font-family: Open Sans;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;

  color: ${({ theme }) => theme.cartColumnTitleColor};
`;

export const ProductPrice = styled.strong`
  font-family: Open Sans;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartTextColor};

  .button-transparent {
    margin: 0 0 0 1rem;
  }

  &:first-child {
    display: flex;

    margin: 0 0 1rem;
  }

  @media (max-width: 375px) {
    .button-transparent {
      margin: 0 0 0 0.5rem;
    }
  }
`;

export const SubTotalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
