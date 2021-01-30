import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  padding: 40px;

  .artist-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const RightMiddle = styled.div`
    justify-content: space-between;
    margin-top: 20px;

    .item {
      padding: 1px 4px;
      border-radius: 3px;

      &.active {
        background-color: #c20c0c;

        span {
          color: #fff;
        }
      }

      span {
        font-size: 14px;
        color: #333;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
`