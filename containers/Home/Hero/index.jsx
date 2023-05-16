import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiClick } from 'react-icons/gi'
import style from './style.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroBg}>
        <Image src="/images/hero.svg" width={750} height={500} alt="all artists" />
      </div>
      <div className={style.content}>
        <h1>
          <p><span>N</span>OVA</p>
          <div className="vert-separator"></div>
          <p>REBELL<span>E</span></p>
        </h1>
        <h2>Dévoile l'artiste que tu es !</h2>
        <Link href="/#how" className={style.cta}>Le Principe ! <GiClick /></Link>
      </div>
    </div>
  )
}

export default Hero
