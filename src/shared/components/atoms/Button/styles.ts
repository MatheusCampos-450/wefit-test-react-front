import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 2.5rem;
  padding: 0.75rem 0.5rem;

  font-family: Open Sans;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  color: ${({ theme }) => theme.textColor};

  border: none;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.blue};
`;
