import styled from '@emotion/styled/macro'

export const MovieWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 30px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px;

    width: 100%;
    height: 1px;

    border-radius: 2px;
    background-color: lightgrey;
  }
`

export const Image = styled.img`
  width: 300;
  height: 450px;
  object-fit: cover;
  margin-right: 50px;
`

export const ContentWrapper = styled.div`
  flex-grow: 1;
`

export const MovieTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 30px;
  line-height: 1.16;
  text-transform: uppercase;
`

export const Info = styled.div``

export const InfoList = styled.ul`
  margin-bottom: 40px;
`

export const InfoItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`

export const InfoTitle = styled.p`
  width: 200px;
  color: #8c8c8c;
`

export const Rating = styled.span`
  display: inline-block;
  border-radius: 5px;
  font-style: normal;
  font-size: 12px;
  text-align: center;
  line-height: 1.42;
  color: #fff;
  background-color: #ff6b01;
  width: 36px;
  height: 16px;
`

export const InfoContent = styled.p``

export const TitleH3 = styled.h3`
  margin-bottom: 20px;
`

export const Overview = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.67;
`

export const AdditionalLinksWrapper = styled.div`
  display: flex;
`
