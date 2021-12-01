import React,{ useState, useEffect } from 'react';
import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import Photos from '../../components/Photos';
import Button from '../../components/ButtonPagination';


export default function Dashboard(){
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [photoParPage, setPhotoParPage] = useState(1);

  useEffect(() => {
    async function loadPhotos(){
      const response = await api.get(`/v1/curated?page=${currentPage}?per_page=${photoParPage}`)
      console.log(response.data.photos);
      setPhotos(response.data.photos);
    }
    loadPhotos();
  },[]);

  const pages = Math.ceil(photos.length / photoParPage);
  const startIndex = currentPage * photoParPage;
  const endIndex = startIndex + photoParPage;
  const currentItems = photos.slice(startIndex, endIndex);

  return(
    <main>
      <div className="Wrapper">
        <Header />

        <Photos 
          photos={currentItems}
        />

        <Button 
          pages={pages}
          setCurrentPage={setCurrentPage}
        />

        <Footer />
      </div>
    </main>
  );
}
