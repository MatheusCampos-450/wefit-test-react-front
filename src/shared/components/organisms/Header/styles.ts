import styled from "styled-components";
import { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 67.5rem;

  margin: 1.5rem 0;
`;

interface IComponent {
  isActiveOnClick: boolean;
}

export const Title = styled.h1<IComponent>`
  font-family: Open Sans;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.688rem;

  color: ${({ theme }) => theme.textColor};

  ${({ isActiveOnClick }) =>
    isActiveOnClick &&
    css`
      cursor: pointer;

      &:hover {
        transition: ease-in-out 200ms;
        transform: translateX(0.125rem);
      }
    `}
`;

export const CartContainer = styled.div<IComponent>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 9rem;

  user-select: none;

  ${({ isActiveOnClick }) =>
    isActiveOnClick &&
    css`
      cursor: pointer;

      &:hover {
        transition: ease-in-out 200ms;
        transform: translateX(-0.125rem);
      }
    `}
`;

export const CartTextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  margin: 0 0.5rem 0 0;
`;

export const CartTitle = styled.strong`
  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.textColor};
`;

export const CartItems = styled.span`
  font-family: Open Sans;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;

  color: #999999;
`;
