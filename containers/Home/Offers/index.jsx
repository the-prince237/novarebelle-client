import React from 'react'
import Offer from './Offer'

import style from './style.module.css'

const Offers = () => {
  return (
    <section id="how" className={style.offers}>
      <header>
        <h2>Ce que nous vous offrons !</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus.</p>
      </header>
      <div className={style.content}>
        <Offer />
        <Offer />
      </div>
    </section>
  )
}

export default Offers
