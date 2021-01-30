import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 46px;
    transform: translateX(-50%);
    width: 986px;
    height: 301px;
    color: #e2e2e2;

    .main {
        position: relative;
        display: flex;
        height: 260px;
        overflow: hidden;
        background: url(${require('@/assets/img/playpanel_bg.png').default}) -1014px 0 repeat-y;

        .image {
            position: absolute;
            left: 2px;
            top: -360px;
            width: 980px;
            height: auto;
            opacity: .2;
        }
    }
`

export const TopMsg = styled.div`
    display: flex;
    height: 41px;
    line-height: 41px;
    background: url(${require('@/assets/img/playpanel_bg.png').default}) 0 0;
`

export const TopLeft = styled.div`
    display: flex;
    justify-content: space-between;
    width: 553px;
    padding: 0 25px;

    h3 {
        color: #e2e2e2;
        font-weight: 700;
    }

    .operator {
        color: #ccc;

        button {
            background-color: transparent;
            color: #ccc;

            .icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                position: relative;
                top: 4px;
                right: 2px;
            }

            .favor {
                background-position: -24px 0;
            }

            .remove {
                width: 13px;
                background-position: -51px 0;
            }
        }
    }
`

export const TopRight = styled.div`
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: 14px;
`

export const BottomLeft = styled.div`
    position: relative;
    width: 553px;
    padding: 2px;

    .play-item {
        padding: 0 8px 0 25px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        height: 28px;
        line-height: 28px;

        .right {
            display: flex;
            align-items: center;

            .singer {
                width: 80px;
            }

            .duration {
                width: 45px;
            }

            .link {
                margin-left: 20px;
                width: 14px;
                height: 16px;
                background-position: -100px 0;
            }
        }
    }

    .active {
        color: #fff;
        background-color: #000;

        &::before {
            content: "";
            position: absolute;
            left: 8px;
            width: 10px;
            height: 13px;
            background: url(${require('@/assets/img/playlist_sprite.png').default}) -182px 0;
        }
    }
`

export const BottomRight = styled.div`
    position: relative;
    flex: 1;
    margin: 21px 0 20px 0;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    .lrc-item {
        height: 32px;
        text-align: center;

        &.active {
            color: red;
            font-size: 14px;
        }
    }
`

export const LyricWrapper = styled.div`
  position: fixed;
  left: 50%;
  z-index: 99;
  transform: translateX(-50%);
  bottom: 60px;
  background-color: rgba(0, 0, 0, .5);
  color: #fff;
  padding: 10px 16px;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`