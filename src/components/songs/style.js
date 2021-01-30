import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 40px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background-color: #fff;

  .title {
    font-size: 24px !important;
  }

  .hot {
    width: 46px;
    height: 29px;
    background-color: #c20c0c;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #aaa;
  }

  .select {
    position: relative;
    top: 2px;
    width: 91px;
    height: 31px;
    line-height: 31px;
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    color: #0c73c2;
    margin-left: -10px;

    &:hover {
        background-color: #fff;
    }

    .temp {
        position: relative;
        left: 5px;
        bottom: 2px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
    }
  }
`

export const Bubble = styled.div`
  position: absolute;
  z-index: 99;
  top: 45px;
  left: -25px;
  width: 700px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  box-shadow: 0 0 10px 2px #d3d3d3;
  border-radius: 5px;
  padding-top: 2px;
  color: #333;

  .arrow {
    position: absolute;
    top: -11px;
    left: 58px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .all {
    padding: 10px 25px;
    border-bottom: 1px solid #e2e2e2;
    text-align: left;

    .link {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const ThemeItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -30px;
`