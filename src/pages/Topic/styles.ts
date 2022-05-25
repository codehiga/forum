import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;


`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  a {
    
    position: fixed;
    left: 10px;
    bottom: 10px;
    background-color: #ececec;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 50%;
    padding: 7px;
    fill: #222;

    @media (min-width: 1024px) {
      position: static;
      border-radius: 0;
      background: none;
      padding: 0;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  @media (min-width: 1024px){
    margin: 0;
  }
`