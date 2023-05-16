import Logo from '@/components/Logo/Logo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CgRowFirst } from 'react-icons/cg'
import style from './index.module.css'

const Header = () => {// header bg state
  const [scrolled, setScrolled] = useState(false)

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 120 ? setScrolled(true) : setScrolled(false)
    })
  })

  return (
    <div className={`${style.header} ${scrolled && style.header__scrolled}`}>
      <div className={style.fistSide}>
        <Link href="/" className={style.logo}>
          <Logo />
        </Link>
      </div>
      <div className={style.secondSide}>
        <nav>
          <ul>
            <li className={`${style.navLink} ${style.navLink__bg}`}>
              <span />
              <Link href="/blog"><CgRowFirst />Je veux percer !</Link>
            </li>
            <li className={style.navLink}>
              <span />
              <Link href="/#testimonies">Témoignages</Link>
            </li>
            <li className={style.navLink}>
              <span />
              <Link href="/#contac">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
