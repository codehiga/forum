import styled from "styled-components";

interface IContainerProps {
  response : boolean;
}

interface ITopicEng {
  bgColor : string;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 200px;
  min-height: 200px;

  border-left: solid 5px ${props => props.response === true ? 'green' : 'red'};
  margin: 25px 0;
`;

export const Wrapper = styled.div`
  width: 100%;

  padding: 0 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {

    > p {

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

export const ButtonsTopicItem = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;

  button {

    padding: 15px 30px;
    cursor: pointer;
    font-size: 16px;
  }
`

export const TopicInfo = styled.div`

`

export const TopicEngContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin: 10px 0;
`
export const TopicEngWrapper = styled.div<ITopicEng>`
  min-width: 150px;
  min-height: 25px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bgColor};

  color: #fff;
`