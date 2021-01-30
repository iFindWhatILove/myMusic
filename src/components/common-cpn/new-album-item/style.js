import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 118px;

  .album-info {
    font-size: 12px;
    width: 100px;

    .artist {
        color: #666;
    }
  }

  .album-image {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 15px;

    img {
        width: 100px;
        height: 100px;
    }

    .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-position: 0 -570px;
        text-indent: -9999px;
    }
  }
`