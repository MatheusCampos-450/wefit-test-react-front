import styled from "styled-components";

export const CartDesktopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem;
`;

export const Header = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 1rem;

  width: 100%;
`;

export const ColumnTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartColumnTitleColor};
`;
