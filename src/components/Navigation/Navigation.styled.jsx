import styled from "@emotion/styled/macro";

export const Nav = styled.nav`
  display: block;
  margin-left: 70px;
`;

export const List = styled.ul`
  height: 80px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 65px;
  }
`;
