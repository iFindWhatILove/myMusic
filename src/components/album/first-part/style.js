import styled from 'styled-components'

export const Wrapper = styled.div`
  .left {
      .title {
          font-size: 24px !important;
      }
    } 

  .album-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      &>div {
          width: 153px;

          .album-image {
              height: 130px;

              & img {
                  width: 130px;
                  height: 130px;
              }

              & .cover {
                background-position: 0 -845px;
              }
          }

          .album-info {
              width: 130px;
          }
      }
  }
`