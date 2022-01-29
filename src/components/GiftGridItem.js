import React from 'react'

export const GiftGridItem = ( {id, title, url} ) => {

  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title}/>
      <div className='desc'>
        <p> {title} </p>
        <a type='button' id='link' href={url} target='_blank' rel="noreferrer">Link</a>
      </div>
    </div>
  )
}
