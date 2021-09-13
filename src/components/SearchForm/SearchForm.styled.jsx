import styled from "@emotion/styled/macro";

export const Form = styled.form`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 400px;
  margin-bottom: 22px;

  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 2px solid var(--color-dark);
  outline: none;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  color: var(--color-dark);
  background-color: transparent;

  transition: border-color 250ms ease-in-out;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #2c2c2caa;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &:focus {
    border-color: var(--color-accent);

    &::placeholder {
      opacity: 1;
      transition-delay: 250ms;
    }
  }
`;

export const Label = styled.label`
  cursor: text;
  position: absolute;
  top: 0;
  left: 0;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.14;
  color: var(--color-dark);

  transition: transform 250ms ease-in-out, color 250ms ease-in-out;

  Input:focus + &,
  Input:not(:placeholder-shown) + & {
    cursor: default;
    color: var(--color-accent);
    transform: translateY(-30px);
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 6px;
  right: 0;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  border: none;

  font-size: 20px;
  font-weight: 500;
  color: var(--color-dark);
  background-color: transparent;

  &:disabled {
    pointer-events: none;
  }

  &:hover:not(:disabled) svg {
    transform: rotate(-280deg) scale(1.4);
    color: var(--color-accent);
  }

  & svg {
    margin-left: 10px;
    transition: color 250ms ease, transform 550ms ease;
  }
`;
