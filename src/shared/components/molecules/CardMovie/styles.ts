import styled, { css } from "styled-components";
import Button from "../../atoms/Button";

export const CardMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 21.125rem;
  min-height: 20.25rem;

  padding: 1rem;

  background: ${({ theme }) => theme.cardMovieBackground};
  border-radius: 0.25rem;

  button {
    .add-cart-icon {
      margin: 0 0.25rem 0 0;
    }
  }
`;

export const MovieTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;

  color: ${({ theme }) => theme.cardMovieTextColor};

  margin: 0 0 0.5rem;
`;

export const MoviePrice = styled.span`
  font-family: Open Sans;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;

  color: ${({ theme }) => theme.cardMovieTextColor};

  margin: 0 0 0.5rem;
`;

interface IButton {
  isActive: boolean;
}

export const ButtonStyled = styled(Button)<IButton>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      background: ${theme.green};
    `}
`;
