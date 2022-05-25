import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSpecificTopic } from "../../forum_controller"
import { Topic, TopicResponse } from "../../types/Topic"
import { ResponseCard } from "../ResponseCard"
import * as C from "./styles"

export const ResponseSection = () => {

  const { id } = useParams<string>();

  const [ responses, setResponses ] = useState<DocumentData | Topic>();

  useEffect(() => {
    redeemData();
  }, [])

  const redeemData = async () => {
    if(!id) return;
    let data = await getSpecificTopic(id)
    setResponses(data.data())
  }

  return(
    <C.Container>
      <C.Wrapper>
        <b>Comentarios</b>

        { responses?.responses.map((responseTopic : TopicResponse) => (
          <ResponseCard responseTopic={responseTopic} />
        )) }
      </C.Wrapper>
    </C.Container>
  )
}