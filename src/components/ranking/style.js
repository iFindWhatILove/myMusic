import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 980px;
  margin: 0 auto;
`

export const Left = styled.div`
  width: 240px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`

export const LeftContainer = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
  }
`

export const Right = styled.div`
  width: 740px;
  border-right: 1px solid #d3d3d3;
  background-color: #fafafa;
`