import React from 'react'
import { BsGiftFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import { MdArticle } from 'react-icons/md'

import style from './style.module.css'

const Offer = ({ name, title, message, actionLabel, actionFunc }) => {
  return (
    <div className={style.offer}>
      {(name === "articles" && <MdArticle />)
        ||(name === "website" && <feImage /> )
        || <BsGiftFill />
      }
      <h3>
        {title || "Superbe Offre !"}
      </h3>
      <p>{message || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio molestiae, quos voluptatibus maxime expedita."}</p>
      <button className={style.cta} onClick={actionFunc}>
        {actionLabel || "Cliquez"}
        <GiClick />
      </button>
    </div>
  )
}

export default Offer
