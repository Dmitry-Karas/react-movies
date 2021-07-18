import styled from '@emotion/styled/macro'

export const Form = styled.form`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 400px;
  margin-bottom: 22px;

  text-align: center;
`

export const Input = styled.input`
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 2px solid dimgray;
  outline: none;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  color: dimgray;
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
    border-color: #ff6b01;

    &::placeholder {
      opacity: 1;
      transition-delay: 250ms;
    }
  }
`

export const Label = styled.label`
  cursor: text;
  position: absolute;
  top: 0;
  left: 0;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.14;
  color: dimgray;

  transform: translate(95px);
  transition: transform 250ms ease-in-out, color 250ms ease-in-out;

  Input:focus + &,
  Input:not(:placeholder-shown) + & {
    cursor: default;
    color: #ff6b01;
    transform: translateY(-30px);
  }
`

export const Button = styled.button`
  position: absolute;
  bottom: 6px;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  opacity: 0;
  pointer-events: none;
  border: none;

  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  background-color: transparent;

  transform: translateX(1000px);
  transition: 250ms opacity ease-in-out, 250ms color ease,
    600ms transform cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    color: #ff6b01;
  }

  Input:focus ~ & {
    opacity: 1;
    pointer-events: all;
    transform: translateX(0);
    /* transition-delay: 250ms; */
  }

  & svg {
    margin-left: 10px;

    color: #ff6b01;
  }
`
