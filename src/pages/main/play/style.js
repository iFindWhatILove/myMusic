import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;

    .wrap-v2 {
        display: flex;
        width: 980px;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        height: 47px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`

export const Left = styled.div`
  display: flex;
  align-items: center;

  .btn {
      cursor: pointer;
  }

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.play?'-165px':'-204px'};
  }

  .next {
    background-position: -80px -130px;
  }
`

export const Middle = styled.div`
    display: flex;
    width: 642px;
    align-items: center;

    .image {
        width: 34px;
        height: 34px;
        border-radius: 5px;
    }

    .info {
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;

        .song {
            color: #e1e1e1;
            position: relative;
            top: 8px;
            left: 8px;

            .singer-name {
                color: #a1a1a1;
                margin-left: 10px;
            }
        }

        .progress {
            display: flex;
            align-items: center;

            .divider {
                margin: 0 3px;
            }

            .ant-slider {
                width: 493px;
                margin-right: 10px;
            }
        }
    }
`

export const Right = styled.div`
    display: flex;
    position: relative;
    top: 5px;

    .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .left {
        .favor {
            background-position: -88px -163px;
        }

        .share {
            background-position: -114px -163px;
        }
    }

    .right {
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;
        display: flex;

        .volume {
            background-position: -2px -248px;
            position: relative;

            .volume-container{
                position: absolute;
                z-index: 99;
                background-color: rgba(0,0,0,0.65);
                bottom: 24px;
                left: 4px;
                height: 93px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;

                .volume-logo {
                    
                    width: 17px;
                    height: 79px;
                    
    
                    .ant-slider-vertical {
                        margin: 5px 2px
                    }
                }
            }
            
        }

        .loop {
            background-position: -3px -344px;
        }

        .random {
            background-position: -66px -248px;
        }

        .single {
            background-position: -66px -344px;
        }

        .playlist {
            padding-left: 18px;
            text-align: center;
            color: #ccc;
            width: 59px;
            background-position: -42px -68px;
        }
    }
`