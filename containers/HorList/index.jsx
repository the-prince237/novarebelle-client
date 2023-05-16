import React from 'react'

import style from './style.module.css'

const HorList = ({items}) => {
  return (
    <div className={style.horlist}>
      <div className={style.list}>
        {items ||
          <>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
          </>
        }
      </div>
    </div>
  )
}

export default HorList
