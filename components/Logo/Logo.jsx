import Image from "next/image"
import styles from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image width={200} height={200} src="/favicon.png" alt="logo" />
    </div>
  )
}