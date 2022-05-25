import { addDoc, arrayUnion, collection, doc, DocumentData, getDoc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { Topic, TopicResponse } from "../types/Topic";

let collectionTopicsReferece = collection(db, 'topics');

export const AddTopic = async (topic:Topic) => {

  const response = await addDoc(collectionTopicsReferece, topic);

  return response;
}

export const getAllTopics = async () => {

  let listTopics = [] as DocumentData[];
  const q = query(collectionTopicsReferece, orderBy("createdAt", "desc"));

  const response = await getDocs(q);
  
  response.docs.forEach((topic) => {
    listTopics.push(topic.data());
  })

  return listTopics;
}

export const getSpecificTopic = async (id:string) => {
  const response = await getDocs(query(collectionTopicsReferece, where("id", "==", id)));
  return response.docs[0];
}

export const updateUpTopic = async (id:string) => {

  let topicSpecify = await getSpecificTopic(id);
  let topicSpecificId = topicSpecify.id;
  let upCountNumber = topicSpecify.data().upCount + 1;

  let docRef = doc(db, 'topics', topicSpecificId)

  updateDoc(docRef, {
    upCount : upCountNumber
  }).then(() => {
    return true;
  })
  
  return false;

}

export const pushTopicResponse = async (id:string, response: TopicResponse) => {

  let topic = await getSpecificTopic(id);
  let topicId = topic.id;

  let docRef = doc(db, 'topics', topicId);

  if(topic.data().responses.length === 0){
    updateDoc(docRef, {
      response : true
    })
  }

  updateDoc(docRef, {
    responses : arrayUnion(response)
  })

}