import styled from "styled-components";

export const AddOrRemoveItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuantityText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 1.5rem;

  font-family: Open Sans;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;

  color: ${({ theme }) => theme.cartTextColor};

  border-radius: 0.25rem;
  border: 0.063rem solid #d9d9d9;

  user-select: none;
`;

export const ButtonTransparent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  cursor: pointer;

  .more-icon {
    margin: 0 0 0 0.25rem;
  }

  .less-icon {
    margin: 0 0.25rem 0 0;
  }
`;
