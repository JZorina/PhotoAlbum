import React, { lazy, useEffect, useState, Suspense } from 'react';
import './App.css';
import { Photo } from '../../Interfaces/Photo';
import SearchBar from '../SearchBar/SearchBar';
import DropDown from '../DropDown/DropDown';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { initialPhoto, PHOTOS_URL, Texts } from '../../Utils/Consts';
import Modal from '../Modal/Modal';

const PhotoList = lazy(()=>import('../PhotoList/PhotoList'))

function App() {
  //Store all the items that was fetched from the API
  const [photos, setPhotos] = useState<Photo[]>([]);
  //Store the presented items
  const [filteredPhotos, setFilteredPhotos]= useState<Photo[]>([]);
  //Store the item that the user has selected
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(initialPhoto);
  //A modal indicator
  const [isModalOpen, setModal] = useState<boolean>(false);
  
  //First, we will fetch the data, process and store it.
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    fetch(PHOTOS_URL)
    .then(response=>response.json())
    .then(json=>{
      setPhotos(json);
      setFilteredPhotos(json);    
    })
  }

  const closeModal = ()=> {
    setModal(false);
  }

  return (
    <div className="App">
      {
        isModalOpen ? 
        <Modal
        handleClose={closeModal}
        show={isModalOpen}
        photo={selectedPhoto}
        />
        :
        null
      }
       <h3>{Texts.mainTitle}</h3>
        <div className='featuresContainer'>
          <DropDown 
          data={photos} 
          handleChange={setFilteredPhotos}
          />
          <SearchBar 
            data={photos}
            onSearchTerm={setFilteredPhotos}
          />
        </div>

        <Suspense fallback ={<div>Loading</div>}>
          <PhotoList 
          allPhotos={filteredPhotos}
          handlePhotoClick={setSelectedPhoto}
          handleModal={setModal}
          />
        </Suspense>
    </div>
  );
}

export default App;
