import styled from "styled-components";

export const CartItemDesktopContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 1rem;

  width: 100%;
  margin: 1rem 0;
`;

export const ProductContainer = styled.div`
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

export const QTDContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;

export const SubTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;
