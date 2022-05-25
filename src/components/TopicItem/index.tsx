import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateUpTopic } from "../../forum_controller";
import { Topic } from "../../types/Topic"
import * as C from "./styles"

type PropsType = {

  topic : Topic | DocumentData;
}

type ConvertedDateType = {
  dia : string | number;
  mes : string | number;
  ano : string | number;
  hora : string | number;
  minutos : string | number;
}

export const TopicItem = ({topic} : PropsType) => {

  let { id, title, content, createdAt, response, upCount, responses } = topic;

  const [ countUpLocal, setCountUpLocal ] = useState(upCount);

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

  let updateUpCountLocal = async (id:string) => {

    await updateUpTopic(id);
    setCountUpLocal(countUpLocal + 1);
  }

  return(
    <C.Container response={response}>
      <C.Wrapper>
      
        <span>
          <h1>{title}</h1>
          <C.TopicEngContainer>

            <C.TopicEngWrapper bgColor="#c00000">
            <b>{countUpLocal} UP</b> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-through-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"/>
            </svg>
            </C.TopicEngWrapper>

            <C.TopicEngWrapper bgColor="#008b35">
            
            <b>{responses?.length} {responses?.length > 1 ? 'Respostas' : 'Resposta'}</b>
            </C.TopicEngWrapper>
            
          </C.TopicEngContainer>
          <p>{content}</p>
          <p>{`Publicado em: ${convertedDate(createdAt).dia}/${convertedDate(createdAt).mes}/${convertedDate(createdAt).ano} - ${convertedDate(createdAt).hora}:${convertedDate(createdAt).minutos}`}</p>
        </span>


        <C.ButtonsTopicItem>
          <Link to={`/topic/${id}`}><button>Responder</button></Link>
          <button onClick={() => {updateUpCountLocal(id)}}>UP</button>
        </C.ButtonsTopicItem>
        

      </C.Wrapper>
    </C.Container>
  )
}