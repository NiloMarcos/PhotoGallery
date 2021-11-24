import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <main>
      <div className="wrapper">
        <div className="Logo-header">
          <p>PhotoGallery</p>
        </div>
        <div className="Wrapper-nav">
          <nav>
            <ul>
              <li><a href="*">Home</a></li>
              <li><a href="*">Wallpapers</a></li>
              <li><a href="*">Atualizar</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}