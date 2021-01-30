import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
`

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  .control {
    width: 69px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin: 0 5px;
    color: #333;
    padding: 1px 6px;
  }

  .active {
    color: #999;
  }
`

export const MiddleWrapper = styled.div`
  text-align: center;

  .container {
    display: flex;
  }
  
  .ellipsis {
    color: rgba(0, 0, 0, 0.25);
    width: 32px;
    height: 24px;
    letter-spacing: 2px;
    position: relative;

    &:hover::after {
        content: '<<';
        color: #1890ff;
        position: absolute;
        width: 32px;
        height: 24px;
        left: 0;
        top: 0;
        background-color: #fff;
        font-size: 15px;
    }

    &.next:hover::after {
        content: '>>';
    }
  }

  .page {
    background: transparent;
    border: 1px solid #ccc;
    margin: 0 5px;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.65);
    height: 24px;
    line-height: 24px;
    min-width: 24px;

    span {
        padding: 0 6px;
    }

    &:hover {
        color: rgb(24, 144, 255);
        cursor: pointer;
    }

    &.active {
        color: #fff;
        background-color: #c20c0c;
      }
  }
`