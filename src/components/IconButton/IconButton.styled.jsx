import styled from "@emotion/styled/macro";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;

  font-size: 20px;
  color: inherit;
  background-color: transparent;

  transition: color 250ms ease-in-out;

  &:hover {
    color: var(--color-accent);
  }
`;
