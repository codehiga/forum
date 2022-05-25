import { useEffect, useState } from "react"
import { SendAsk } from "../../components/SendAsk"
import * as C from "./styles"
import * as ForumC from "../../forum_controller"
import { Topic } from "../../types/Topic"
import { DocumentData } from "firebase/firestore"
import { TopicItem } from "../../components/TopicItem"
import { Loading } from "../../components/Loading"

export const Home = () => {

  const [ topics, setTopics ] = useState<DocumentData[] | Topic[]>();

  useEffect(() => {
    getTopics();
  }, [])

  const getTopics = async () => {
    setTopics(await ForumC.getAllTopics())
  }

  if(!topics) return <Loading />

  return(
    <C.Container>
      <SendAsk topics={topics} setTopics={setTopics} />

      <C.Wrapper>
        {
          topics && topics.map((topic, id) => (
            <TopicItem key={id} topic={topic} />
          ))
        }
      </C.Wrapper>
    </C.Container>
  )
}