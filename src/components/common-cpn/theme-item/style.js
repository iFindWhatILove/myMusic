import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 140px;
  margin: 20px 0 20px 0;

  .cover-top {
    position: relative;

    img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      line-height: 27px;
      color: #ccc;
      height: 27px;
      background-position: 0 -537px;
      padding: 0 10px;

      .erji {
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }

      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        transform: translateY(5px);
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`