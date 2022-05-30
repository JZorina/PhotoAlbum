import { Photo } from "../Interfaces/Photo";

export const IdPrefix ='Id:';
export const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
export const initialPhoto:Photo={
    id:0,
    title:'',
    thumbnailUrl:'',
    url:'',
    albumId:0
  }

  export const Texts = {
    mainTitle:'Photo Albums Page',
    modal:{
      idPrefix:'Id:',
      albunPrefix:'Album:'
    }

  };
