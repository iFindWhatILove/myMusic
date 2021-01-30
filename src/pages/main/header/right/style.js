import styled from 'styled-components'

export const Right = styled.div`
 display: flex;
 line-height: 70px;
 color: rgb(204, 204, 204);
 font-size: 10px;

 .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    margin: 0 16px;
    position: relative;
    top: 50%;
    transform: translate(0px, -50%); 
    font-size: 10px;
    padding: 0px;
    background-color: transparent; 
    color: rgb(204, 204, 204);
 }

 .ant-input-affix-wrapper {
    width: 158px;
    height: 32px;
    line-height: 70px;
    border-radius: 16px;
    position: relative;
    top: 50%;
    transform: translate(0px, -50%);

    .anticon-search {
        background-image: url(${require('@/assets/img/sprite_01.png').default});
        width: 14px;
        height: 14px;
        display: block;
        background-position: -9px -108px;
    }

    .ant-input {
        padding-left: 0;
        font-size: 10px;
    }
 }
`