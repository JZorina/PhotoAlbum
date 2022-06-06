import React from "react";
import { Photo } from "../../Interfaces/Photo";
import { en } from "../../Utils/Dictionary";
import  images  from "../../Utils/Images";
import "./Modal.css";

interface Props {
  handleClose: any;
  show: boolean;
  photo: Photo;
}
const Modal: React.FC<Props> = ({ show, handleClose, photo }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose}>
          <img
            src={images.closeIcon}
            alt="Close the window"
            className="closeIcon"
          />
        </button>
        <div className="content">
          <h1>{photo.title}</h1>
          <img
            src={photo.thumbnailUrl}
            className="thumbnail"
            alt={photo.title}
          />
          <p>
            {en.prefixes.album} {photo.albumId}
          </p>
          <p>
            {en.prefixes.id} {photo.id}
          </p>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Modal);
