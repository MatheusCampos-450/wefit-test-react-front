import styled from "styled-components";

export const CartItemDesktopContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1.25fr;
  gap: 1rem;

  width: 100%;
  margin: 0.75rem 0;

  @media (max-width: 720px) {
    grid-template-columns: 1.25fr 0.75fr 1fr;
  }

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

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin: 0 0 0 1rem;
`;

export const ProductTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartTextColor};
`;

export const ProductPrice = styled.strong`
  font-family: Open Sans;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartTextColor};
`;

export const SubTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;
