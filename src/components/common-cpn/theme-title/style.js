import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    padding: 0 10px 4px 34px;
    display: flex;
    justify-content: space-between;
    background-position: -225px -157px;

    .right {
        line-height: 27px;

        .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            background-position: 0 -240px;
        }
    }

    .left {
        display: flex;
        align-items: center;

        h3 {
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 20px;
            margin-right: 20px;
        }

        .keyword {
            display: flex;
            font-size: 12px;
            color: #333;

            .link {
                display: inline;
                cursor: pointer;
            }

            .link:hover {
                text-decoration: underline;
            }

            .divider {
                margin: 0 15px;
                color: #ccc;
                display: inline;
            }
        }
    }
`