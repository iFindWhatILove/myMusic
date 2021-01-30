import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 270px;
  background: url(${props => props.bgUrl}) center center/6000px;

  & .wrap-v2 {
      height: 100%;
      width: 980px;
      margin: 0 auto;
      display: flex;
      position: relative;
  }
`

export const Banner = styled.div`
  height: 270px;
  width: 730px; 

  .banner-item {
     & img {
          width: 730px;
          height: 270px;
      }
  }
`

export const ImageLink = styled.a.attrs({
    href: 'https://music.163.com/#/download',
    target: '_blank',
})`
  background-image: url(${require('@/assets/img/download.png').default});
  display: block;
  width: 250px;
  height: 270px;
  background-size: cover;
`

export const BtnWrapper = styled.div`
  .common {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    background-color: transparent;
    cursor: pointer;
  }

  .common:hover {
      background-color: rgba(0,0,0,.1);
  }

  .left {
      left: -68px;   
      background-image: url(${require('@/assets/img/banner-control-left.png').default});  
  }

  .right {
    right: -68px;
    background-image: url(${require('@/assets/img/banner-control-right.png').default})
}
`