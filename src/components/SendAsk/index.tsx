import * as C from "./styles"
import * as ForumC from "../../forum_controller"
import { createRef, Dispatch, FormEvent, SetStateAction } from "react"
import { Topic } from "../../types/Topic";

import { v4 as uuid } from "uuid";
import { DocumentData } from "firebase/firestore";

type PropsType = {
  topics : DocumentData[] | Topic[];
  setTopics : Dispatch<SetStateAction<DocumentData[] | Topic[] | undefined>>;
}


export const SendAsk = ({ topics, setTopics } : PropsType) => {

  const titleRef = createRef<HTMLInputElement>();
  const contentRef = createRef<HTMLTextAreaElement>();
  

  const addTopicOnDB = async (e : FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(!titleRef.current?.value || !contentRef.current?.value) return;

    const topic:Topic = {
      id: uuid(),
      title: titleRef.current.value,
      content: contentRef.current?.value,
      createdAt: Date.now(),
      open: true,
      response : false,
      upCount : 0,
      responses : []
    }
    
    const response = await ForumC.AddTopic(topic);

    if(!response.id){
      alert('Topico nao criado :(')
      return;
    }

    setTopics([...topics, topic]);

    titleRef.current.value = '';
    contentRef.current.value = '';
    
    return;
  }

  return(
    <C.Container>
      <C.Wrapper>
        <h1>Crie um topico:</h1>
        <span>
          <form>
            <input ref={titleRef} placeholder="Titulo"/>
            <button
            onClick={
              (e:FormEvent<HTMLButtonElement>) => {addTopicOnDB(e)
              }
            }>Enviar</button>
          </form>
        </span>
        <textarea ref={contentRef} placeholder="Digite sobre o que deseja falar no topico..." />
      </C.Wrapper>
    </C.Container>
  )
}