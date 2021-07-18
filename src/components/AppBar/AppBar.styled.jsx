import styled from '@emotion/styled/macro'
import tapeBg from 'images/tape-bg.png'

export const Header = styled.header`
  /* position: sticky; */
  /* top: 0; */
  /* left: 0; */
  /* z-index: 999; */
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 50px;
  box-shadow: 0 10px 5px 0 rgb(0 0 0 / 60%), 0 2px 5px 0 rgb(0 0 0 /14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
  background-color: #fff;

  background-image: url(${tapeBg});
  background-size: 120px;
  background-position-x: 40px;
`
