import styled from "styled-components";

type BoxProps = {
  display?: 'flex' | 'block' | 'inline-block' | 'inline' | 'inline-flex'
  bkg?: string
  w?: string
  h?: string
}

const Box = styled.div<BoxProps>`
  display: flex;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-color: ${({ bkg }) => bkg};
`

export default Box