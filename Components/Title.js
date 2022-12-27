import styles from '../styles/Title.module.css'

const Title = ({text}) => {
  return (
    <h1 className={styles.MainTitle}>{text}</h1>
  )
}

export default Title