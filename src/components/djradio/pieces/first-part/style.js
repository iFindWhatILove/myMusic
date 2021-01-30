import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 -40px;
  display: flex;
  align-items: center;

  .arrow {
      background-image: url(${require('@/assets/img/radio_slide.png').default});
      width: 20px;
      height: 30px;
      cursor: pointer;
  }

  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }

  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
`

export const Middle = styled.div`
  width: 100%;

  .container {
    width: 100%;
    display: flex !important;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 70px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  border: 2px solid transparent;
  overflow: hidden;

  &:hover {
    background-color: #eee;
  }

  img {
    transform: translateX(30px);
  }

  &.active {
    color: #C20C0C;
    border: 2px solid #d35757;

    img {
      transform: translateX(-30px);
    }
  }
`