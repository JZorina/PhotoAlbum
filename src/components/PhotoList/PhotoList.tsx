import React from 'react';
import PhotoItem from '../PhotoItem/PhotoItem';
import { Photo } from '../../Interfaces/Photo';
interface Props{
    allPhotos:Photo[];
    handlePhotoClick:(item:Photo)=>void;
    handleModal:(flag:boolean)=>void;
}
const PhotoList:React.FC<Props>=({allPhotos,handlePhotoClick,handleModal})=>{
    const renderPhotos = () =>{
        return allPhotos.map((photo)=>{
          return <PhotoItem 
            key={photo.id}
            photo={photo}
            handleClick = {handlePhotoClick}
            handleModal = {handleModal}
            />
        });
      }
    return <div className='list'>{renderPhotos()}</div>;
}

export default PhotoList;