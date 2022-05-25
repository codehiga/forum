import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { Loading } from "../../components/Loading";
import { ResponseSection } from "../../components/ResponseSection";
import { ResponseTopic } from "../../components/ResponseTopic";
import { SendAsk } from "../../components/SendAsk";
import { getSpecificTopic } from "../../forum_controller";
import { Topic as TopicType } from "../../types/Topic";
import * as C from "./styles"

export const Topic = () => {

  const { id } = useParams();

  const [ topicData, setTopicData ] = useState<DocumentData | TopicType>();

  useEffect(() => {
    if(id) redeemUniqueTopic(id);
  }, [id])

  const redeemUniqueTopic = async (id:string) => {

    let dtTopic = await getSpecificTopic(id);
    setTopicData(dtTopic.data());
  }

  if(!topicData || !id) return <Loading />

  return(
    <C.Container>
      <C.Wrapper>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </Link>

        <C.Content>
          { topicData && <h1>{topicData.title}</h1> }
          { topicData && <p>{topicData.content}</p> }

        </C.Content>

        <ResponseTopic idPage={id} />

        <ResponseSection />

      </C.Wrapper>
    </C.Container>
  )
}