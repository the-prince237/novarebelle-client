import Metas from '@/components/Metas'
import styles from './index.module.css'

const metas = {
  title: 'Revenge Buy',
  metas: [
    {
      name: "description",
      content: 'Revenge-Buy, Économisez en faisant vos achats en groupe'
    },
    {
      property: 'og:image',
      content:"/favicon.png"
    }
  ]
}

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <Metas title={metas.title} metas={metas.metas} />
      <main className={styles.main}>
        home
      </main>
    </div>
  )
}