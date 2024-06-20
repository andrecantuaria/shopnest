import React from 'react'
import notfound from '../img/notfound.jpg'

function NotFound() {
  return (
    <section className='container mt-3 mb-3'>
        <figure className='not-found-section'>
            <img className='not-found-img' src={notfound} alt='not-found'/>
        </figure>
    </section>
  )
}

export default NotFound