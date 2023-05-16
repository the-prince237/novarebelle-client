import Metas from '@/components/Metas'
import Hero from '@/containers/Home/Hero'
import { homeMetas } from '@/metas'

import styles from './index.module.css'

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <Metas title={homeMetas.title} metas={homeMetas.metas} />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  )
}