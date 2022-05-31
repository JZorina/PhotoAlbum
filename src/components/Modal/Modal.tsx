import React from "react";
import { Photo } from "../../Interfaces/Photo";
import { Texts } from "../../Utils/Consts";
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
            src={require("../../Assets/closeIcon.gif")}
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
            {Texts.modal.albunPrefix} {photo.albumId}
          </p>
          <p>
            {Texts.modal.idPrefix} {photo.id}
          </p>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Modal);
