import React from 'react';
import './photos.scss';

export default function Photos({ photos }) {
  return (
    <main>
      {photos.map((item) => {
        return (
          <article key={item.id} className="Items-api">
            <img src={item.src.landscape} alt="Foto de capa" />
            <p><strong>Photo By:</strong> {item.photographer}</p>
            <span>Profile at: <a href={item.photographer_url} target="_blank">Photographer</a></span>
          </article>
        )
      })}
    </main>
  )
}