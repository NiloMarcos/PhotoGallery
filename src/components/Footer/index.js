import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <main>
      <div className="footer">
        <footer>
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="*">Home</a></li>
              <li className="list-inline-item"><a href="*">Wallpapers</a></li>
              <li className="list-inline-item"><a href="*">Update</a></li>
            </ul>
          </nav>
          <p className="copyright">PhotoGallery© 2021</p>
        </footer>
      </div>
    </main>
  );
}
