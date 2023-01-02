import Link from 'next/link'
import styles from '../styles/Button.module.css'


const Button = ({label, link}) => {
  return (
    <button type="button" className={styles.Button}>
      <Link href={link} className={styles.LinkButton}>{label}</Link>
    </button>
  )
}

export default Button