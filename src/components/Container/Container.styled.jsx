import styled from "@emotion/styled/macro";

export const StyledContainer = styled.div`
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    max-width: 320px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding-right: 70px;
    padding-left: 70px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1024px;
    padding-right: 70px;
    padding-left: 70px;
    margin: 0 auto;
  }
`;
