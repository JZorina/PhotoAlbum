import React, { lazy, useEffect, useState, Suspense } from "react";
import "./App.css";
import { Photo } from "../../Interfaces/Photo";
import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { initialPhoto, PHOTOS_URL } from "../../Utils/Consts";
import Modal from "../Modal/Modal";
import { en } from "../../Utils/Dictionary";

const PhotoList = lazy(() => import("../PhotoList/PhotoList"));

function App() {
  //Store all the items that was fetched from the API
  const [photos, setPhotos] = useState<Photo[]>([]);
  //Store the presented items
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
  //Store the item that the user has selected
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(initialPhoto);
  //A modal indicator
  const [isModalOpen, setModal] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(true);
  //First, we will fetch the data, process and store it.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(PHOTOS_URL)
      .then(response => response.json())
      .then(json => {
        setPhotos(json);
        setFilteredPhotos(json);
        setSpinner(false);
      });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      {spinner ? (
        <LoadingSpinner />
      ) : (
        <>
          {isModalOpen ? (
            <Modal
              handleClose={closeModal}
              show={isModalOpen}
              photo={selectedPhoto}
            />
          ) : null}
          <h4 className="mainTitle">{en.mainTitle}</h4>
          <div className="featuresContainer">
            <SearchBar data={photos} onSearchTerm={setFilteredPhotos} />
            <DropDown data={photos} handleChange={setFilteredPhotos} />
          </div>
          <Suspense fallback={<LoadingSpinner />}>
            <PhotoList
              allPhotos={filteredPhotos}
              handlePhotoClick={setSelectedPhoto}
              handleModal={setModal}
            />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default React.memo(App);
