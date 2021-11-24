import React,{ useState, useEffect } from 'react';
import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Dashboard(){
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function loadPhotos(){
      const response = await api.get('/v1/curated')
      console.log(response.data.photos);
      setPhotos(response.data.photos);
    }

    loadPhotos();
  },[]);

  return(
    <main>
      <div className="Wrapper">
        <Header />

        
        {photos.map((item) => {
          return(
            <article key={item.id} className="Items-api">
              <img src={item.src.landscape} alt="Foto de capa" />
              <p><strong>Photo By:</strong> {item.photographer}</p>
            </article>
          )
        })}

        <Footer />
      </div>
    </main>
  );
}
