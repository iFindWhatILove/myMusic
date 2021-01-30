import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 230px;

  .list {
      .list-item:nth-child(-n+3) .rank {
          color: #c10d0c;
      }

      .list-item {
          display: flex;
          align-items: center;
          height: 32px;

          .rank {
            width: 35px;
            text-align: center;
            margin-left: 10px;
            font-size: 16px;
          }

          .info {
            color: #000;
            width: 170px;
            height: 17px;
            line-height: 17px;
            display: flex;
            justify-content: space-between;

            .name {
                flex: 1;
            }

            .operate {

                .btn {
                    width: 17px;
                    height: 17px;
                    margin-left: 8px;
                    cursor: pointer;
                }

                .play {
                    background-position: -267px -268px;
                }

                .addto {
                    background-position: 0 -700px;
                }

                .favor {
                    background-position: -297px -268px;
                }
            }
          }
      }
  }

  .header {
      height: 100px;
      display: flex;
      margin: 20px 0 0 20px;

      .image {
        width: 80px;
        height: 80px;
        position: relative;

        .image_cover {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            text-indent: -9999px;
            background-position: -145px -57px;
        }
      }

      .info {
        margin: 5px 0 0 10px;

        a {
            font-size: 14px;
            color: #333;
            font-weight: 700;
        }

        .btn {
            display: inline-block;
            text-indent: -9999px;
            width: 22px;
            height: 22px;
            margin: 8px 10px 0 0;
            cursor: pointer;
        }

        .play {
            background-position: -267px -205px;
        }

        .favor {
            background-position: -300px -205px;
        }
      }
  }

  .footer {
      height: 32px;
      margin-right: 32px;
      text-align: right;
      line-height: 32px;

      a {
        color: black;
      }
  }
`