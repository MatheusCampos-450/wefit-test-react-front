import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: 67.5rem;

  border-radius: 0.25rem;
  background: ${({ theme }) => theme.cartBackground};
`;
