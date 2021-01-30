import styled from 'styled-components'

export const Footer = styled.div`
    height: 172px;
    background-color: #f2f2f2;
    color: #666;
    border-top: 1px solid #d3d3d3;
    font-size: 12px;

    .wrap-v2 {
        width: 980px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
`

export const FooterLeft = styled.div`
 padding-top: 15px;
 line-height: 24px;
 .link a {
     color: #999;
     &::after {
        content: '|';
        margin: 0 10px;
        color: #999;
     }
 }
 .copyright span {
     margin-right: 15px;
 }
`

export const FooterRight = styled.ul`
  display: flex;
  margin: auto;
  li {
      margin-right: 40px;
      .link {
          background: url(${require('@/assets/img/sprite_footer_02.png').default}) no-repeat;
          background-size: 100px;
          display: block;
          width: 50px;
          height: 45px;
      }
      .title {
          background: url(${require('@/assets/img/sprite_footer_01.png').default}) no-repeat;
          background-size: 156px;
          margin-top: 5px;
          display: block;
          width: 52px;
          height: 10px;
      }

      &:nth-child(1) .link {
        background-position: -57px -94px;
      }

      &:nth-child(1) .title {
        background-position: 0px -91px;
      }

      &:nth-child(2) .link {
        background-position: 0px -94px;
      }

      &:nth-child(3) .title {
        background-position: 0px -55px;
      }

      &:nth-child(4) .title {
        background-position: 0px -73px;
      }
  }
`