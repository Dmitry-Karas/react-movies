import styled from "@emotion/styled/macro";

export const MovieWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    height: 2px;
    border-radius: 2px;

    background-color: lightgray;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
    margin-right: 50px;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 30px;
  line-height: 1.16;
  text-transform: uppercase;
  color: var(--color-dark);
`;

export const Info = styled.div``;

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.p`
  width: 200px;
  color: var(--color-light);
`;

export const Rating = styled.span`
  display: inline-block;
  border-radius: 5px;
  font-style: normal;
  font-size: 12px;
  text-align: center;
  line-height: 1.42;
  color: #fff;
  background-color: var(--color-accent);
  width: 36px;
  height: 16px;
`;

export const Content = styled.p`
  color: var(--color-dark);
  width: 100%;
`;

export const TitleH3 = styled.h3`
  margin-bottom: 20px;
  color: var(--color-dark);
`;

export const Overview = styled.p`
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.67;
  color: var(--color-dark);
`;

export const AdditionalLinksWrapper = styled.div`
  display: flex;
`;
