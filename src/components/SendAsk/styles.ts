import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;

  background-color: #F0F0F0;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  > h1 {

    text-transform: uppercase;
    font-size: 22px;
  }

  textarea {
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 10px;
    font-size: 16px;
    font-family: monospace;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    width: 50%;
  }

  form {

    display: flex;
    gap: 10px;

    > button {

      padding: 10px 20px;
      cursor: pointer;
      background-color: #1F64B6;
      border: none;
      color: #fff;
      border-radius: 10px;
      font-weight: 600;
    }
  }
`