import styled from 'styled-components'

export const Wrapper = styled.div`
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;

    .title {
        height: 25px;
        padding-left: 14px;
        font-size: 16px;
        margin-bottom: 5px;
        font-family: "Microsoft Yahei";
    }

    .item {
        width: 160px;
        color: #333;
        height: 29px;
        line-height: 29px;
        margin-bottom: 2px;
        cursor: pointer;

        span {
            display: inline-block;
            width: 160px;
            padding-left: 27px;
            cursor: pointer;           
            background: url(${require('@/assets/img/singer_sprite.png').default}) no-repeat 0 -30px;

            &:hover {
                text-decoration: underline;
            }

            &.active {
                color: red;
                background-position: 0 0;
            }
        }
    }
`