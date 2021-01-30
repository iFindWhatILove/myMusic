import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-left: 25px;

  dl {
      display: flex;
      align-items: flex-start;
  }

  dt {
      display: inline-flex;
      align-items: center;
      padding: 15px 0 10px;
      width: 70px;
      text-align: center;

      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-position: -20px -735px;
        margin-right: 8px;
      }
  }

  .item1 i {
    background-position: 0 -60px;
  }

  .item2 i {
    background-position: 0 -88px;
  }

  .item3 i {
    background-position: 0 -117px;
  }

  .item4 i {
    background-position: 0 -141px;
  }

  dd {
    padding-top: 18px;
    padding-left: 15px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #e2e2e2;

    .item {
        margin-bottom: 8px;

        .divider {
            margin: 0 12px;
            color: #e2e2e2;
        }

        .link {
            cursor: pointer;
            
            &:hover {
                text-decoration: underline;
            }
        }
    }
  }
`