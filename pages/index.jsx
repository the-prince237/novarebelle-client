import Metas from '@/components/Metas'
import styles from './index.module.css'
import { homeMetas } from '@/metas'

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <Metas title={homeMetas.title} metas={homeMetas.metas} />
      <main className={styles.main}>
        home
      </main>
    </div>
  )
}