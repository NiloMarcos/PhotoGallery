import React from 'react';

export default function ButtonPagination({ setCurrentPage, pages }){
  return(
    <p>{Array.from(Array(pages), (item, index) => {
      return <button value={index} onClick={(event) => setCurrentPage(event.target.value)}>{index + 1}</button>
    })}</p>
  );
}