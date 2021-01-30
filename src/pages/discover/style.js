import styled from 'styled-components'

export const Title = styled.div`
  height: 30px;
  line-height: 30px;
  background-color: #C20C0C;
  text-align: center;
  font-size: 10px;
`

export const Inner = styled.div`
  width: 920px;
  display: flex;
  margin: 0px auto;
  padding-left: 92px;

  .item {
      flex: 0.1;
      a {
        color: #fff;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;

        &:hover, &.active {
            background-color: #9B0909;
            border-radius: 20px;
            text-decoration: none;
        }
      }
  }
`