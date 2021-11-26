import React from 'react';

import './button.scss';

export default function ButtonPagination({ setCurrentPage, pages }){
  return(
    <div className="Button-div">
      <p>{Array.from(Array(pages), (item, index) => {
        return <button className="Button-pagination"value={index} onClick={(event) => setCurrentPage(event.target.value)}>{index + 1}</button>
      })}</p>
    </div>
  );
}