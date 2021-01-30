import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;

  .radio-list {
      margin-top: 20px;

      .item {
        display: flex;
        margin-bottom: 10px;
        width: 210px;

        .info {
            width: 160px;
            margin-left: 8px;

            .name {
                color: #000;
                font-weight: 700;
                margin-top: 3px;
            }
        }

        img {
            width: 40px;
            height: 40px;
        }
      }
  }
`