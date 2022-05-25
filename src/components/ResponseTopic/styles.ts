import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  > span {

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    > button {
      margin-top: 10px;
      padding: 15px 25px;
      background-color: #247EE9;
      color: #fff;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      gap: 10px;
      border-radius: 10px;
    }

    > textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      font-family: monospace;

      @media (min-width: 1024px) {
        width: 50%;
        height: 50%;
      }
    }
  }
`