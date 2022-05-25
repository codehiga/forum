import { createRef } from "react"
import { pushTopicResponse } from "../../forum_controller";
import { TopicResponse } from "../../types/Topic";
import * as C from "./styles"

interface IProps {
  idPage : string;
}

export const ResponseTopic = ({idPage} : IProps) => {

  const responseRef = createRef<HTMLTextAreaElement>();

  const handleSendResponse = async () => {

    if(!responseRef.current?.value) return;

    const response : TopicResponse = {
      content : responseRef.current.value,
      createdAt : Date.now()
    };

    await pushTopicResponse(idPage, response);

    responseRef.current.value = '';
  }

  return(
    <C.Container>
      <C.Wrapper>
        <h2>Responda esse topico:</h2>
        <span>
          <textarea ref={responseRef} />
          <button onClick={handleSendResponse}>Enviar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg></button>
        </span>
      </C.Wrapper>
    </C.Container>
  )
}