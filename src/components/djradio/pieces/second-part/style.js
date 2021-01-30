import styled from 'styled-components'

export const Wrapper = styled.div`
  .title{
      font-size: 24px !important;
  }
`

export const ItemWrapper = styled.div`
  margin: 20px 0 40px;
  display: flex;
  justify-content: space-between;

  &>div {
      width: 150px;
  }

  .album-image {
    width: 150px !important;
    height: 150px !important;

      img {
          width: 150px !important;
          height: 150px !important;
      }

      a {
        background: none !important;
      }
  }

  .album-info {
      width: 150px !important;

    .artist {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .name {
        font-size: 14px;
        color: #333;
        margin: 5px 0;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
  }
`