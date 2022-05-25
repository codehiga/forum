import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  

  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    :first-child{
      overflow: auto;
    }
  }
`