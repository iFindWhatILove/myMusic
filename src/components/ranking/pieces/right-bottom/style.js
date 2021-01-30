import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 40px;

  table {
    width: 100%;
    border: 1px solid #d9d9d9;
  }

  .header {
    .ranking {
      width: 78px;
      border-left: none;
    }

    th {
      height: 34px;
      line-height: 34px;
      color: #666;
      border: 1px solid #ddd;
      border-width: 0 0 1px 1px;
      padding-left: 10px;
      background-image: url(${require("@/assets/img/sprite_table.png").default});
    }

    .duration {
      width: 91px;
    }

    .singer {
      width: 173px;
    }
  }

  tbody {
    tr {
      &:nth-child(2n+1) {
        background-color: #f7f7f7;
      }

      td {
        padding: 6px 10px;

        .song-name {
          display: flex;
          align-items: center;

          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
          }

          .name {
            margin-left: 10px;
          }
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        } 
      }
    }
  }
`