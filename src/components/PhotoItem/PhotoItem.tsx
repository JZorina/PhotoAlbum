import React from "react";
import { Photo } from "../../Interfaces/Photo";
import { en } from "../../Utils/Dictionary";
import "./PhotoItem.css";
interface Props {
  photo: Photo;
  handleClick: (item: Photo) => void;
  handleModal: (flag: boolean) => void;
}
const PhotoItem: React.FC<Props> = ({ photo, handleClick, handleModal }) => {
  const OnPhotoClick = () => {
    handleClick(photo);
    handleModal(true);
  };
  return (
    <div className="main">
      <div className="upperContainer">
        <img
          className="thumbNailImage"
          src={photo.thumbnailUrl}
          alt={photo.title}
          onClick={OnPhotoClick}
        />
      </div>
      <div className="titleContainer">
        <div className="texts">
          <span className="title">{photo.title}</span>
          <span className="id">{en.prefixes.id} {photo.id}</span>
        </div>
        <div className="bottomContainer">
          <p className="url">{photo.url}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PhotoItem);
