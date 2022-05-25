import { useState } from "react";
import { TopicResponse } from "../../types/Topic"
import * as C from "./styles"

interface IProps {
  responseTopic : TopicResponse;
}

type ConvertedDateType = {
  dia : string | number;
  mes : string | number;
  ano : string | number;
  hora : string | number;
  minutos : string | number;
}


export const ResponseCard = ({responseTopic} : IProps) => {

  const [ date, setDate ] = useState();

  let convertedDate = (createdTime : number):ConvertedDateType => {
    let date = new Date(createdTime);

    let convertNumber = (number:number) => {
      
      if(number < 10){
        return '0' + number;
      }

      return number;
    }

    let newDate : ConvertedDateType = {
      dia : convertNumber(date.getDate()),
      mes : convertNumber(date.getMonth()),
      ano : date.getFullYear(),
      hora : convertNumber(date.getHours()),
      minutos : convertNumber(date.getMinutes())
    }

    return newDate;
  } 

  return(
    <C.Container>
      
      <C.Wrapper>
        
        <p>{responseTopic.content}</p>
        <br />
        <p>{convertedDate(responseTopic.createdAt).dia + '/' + convertedDate(responseTopic.createdAt).mes + ' - ' + convertedDate(responseTopic.createdAt).hora + ':' + convertedDate(responseTopic.createdAt).minutos}</p>
      </C.Wrapper>
    </C.Container>
  )
}