import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left {
      display: flex;
      align-items: center;

      .title {
          font-size: 20px;
          font-family: "Microsoft Yahei",Arial,Helvetica,sans-serif;
      }

      .count {
        margin-left: 20px;
      }
  }
`