import styled from "@emotion/styled/macro";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px 10px;
  scroll-margin: 30px;
`;

export const Item = styled.li`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 767px) {
    height: 430px;
  }

  @media screen and (min-width: 768px) {
    height: 280px;
  }
`;

export const Info = styled.div`
  padding: 10px;
`;

export const TitleH3 = styled.h3`
  margin-bottom: 5px;
  text-align: center;
  font-size: 14px;
  color: var(--color-dark);
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin: auto;
  height: 100%;
  font-size: 14px;
  text-align: center;
  color: var(--color-light);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NotFoundMessage = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  color: red;
`;
