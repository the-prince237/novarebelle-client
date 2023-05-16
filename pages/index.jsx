import Metas from '@/components/Metas'
import Articles from '@/containers/Home/Articles'
import Hero from '@/containers/Home/Hero'
import Offers from '@/containers/Home/Offers'

import { homeMetas } from '@/metas'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <Metas title={homeMetas.title} metas={homeMetas.metas} />
      <main className={styles.main}>
        <Hero />
        <div className={styles.wrapper}>
          <Offers />
          <Articles />
        </div>
      </main>
    </div>
  )
}