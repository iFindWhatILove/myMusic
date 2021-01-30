import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 62px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active, &:hover {
        background-color: #e6e6e6;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .info {
        margin-left: 10px;

        .name {
            color: #000;
        }

        .update {
            margin-top: 5px;
            color: #999;
        }
    }
`