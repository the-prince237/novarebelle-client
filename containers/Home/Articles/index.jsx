import ArticlePreview from '@/containers/ArticlePreview'
import HorList from '@/containers/HorList'
import React from 'react'

import style from './style.module.css'

const Articles = () => {
  return (
    <section className={style.articles}>
      <header>
        <h2>Articles Récents</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus.</p>
      </header>
      <HorList
        items={
          <>
            <ArticlePreview />
            <ArticlePreview />
            <ArticlePreview />
          </>
        }
      />
    </section>
  )
}

export default Articles
