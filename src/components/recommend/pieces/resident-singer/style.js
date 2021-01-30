import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;

  .apply-for {
    margin-top: 12px;

    a {
        color: #333;
        font-weight: 700;
        text-align: center;
        display: block;
        height: 31px;
        line-height: 31px;
        border-radius: 4px;
        background-color: #fafafa;
        border: 1px solid #c3c3c3;
        text-decoration: none;
    }
  }

  .singer-list {
      .item:hover {
        background-color: #f4f4f4;
      }

      .item {
        display: flex;
        height: 62px;
        margin-top: 14px;
        background-color: #fafafa;
        text-decoration: none;

        img {
            border: none;
            vertical-align: middle;
        }

        .info {
            margin: 8px 0 0 10px;

            .title {
                color: #333;
                font-size: 14px;
                font-weight: 700;
            }

            .name {
                margin-top: 5px;
            }
        }
      }
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
`