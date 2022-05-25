export type Topic = {
  id : string;
  title : string;
  content : string;
  createdAt : number;
  upCount : number;
  open : boolean;
  response : boolean;
  responses : [];
}

export type TopicResponse = {
  content : string;
  createdAt : number;
}