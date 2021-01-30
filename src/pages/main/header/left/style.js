import styled from 'styled-components'

export const HeaderLeft = styled.div`
 display: flex;
 .logo {
     display: block;
     height: 100%;
     width: 176px;
 }
 .select-list {
     line-height: 70px;
     display: flex;
     
     .select-item {
         position: relative;

         &:last-child  a::after {
            content: '';
            display: block;
            position: absolute;
            width: 28px;
            height: 19px;
            background: url(${require('@/assets/img/sprite_01.png').default});
            background-position-x: 50px;
            top: 22px;
            right: -12px;
        }

        a {
            padding: 0 20px;
            display: block;
            color: #ccc;
            position: relative;

            &:hover {
                text-decoration: none;
                color: #fff;
            }

            .icon {
                width: 12px;
                height: 7px;
                position: absolute;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%,0);
                background-position-x: 14px;
                display: none;
            }

        }

        &:hover {
            background-color: #000;
        }

        &.active {
            background-color: #000;
            a {
                text-decoration: none;
                color: #fff;

                .icon {
                    display: block;
                }
            }
        }

     }
 }
`