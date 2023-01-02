import styles from'../styles/Article.module.css';

const Article = ({title, text, price}) => {
  return (
    <div className={styles.ArticleContainer}>
      <div className={styles.ArticleBox}>
        <h1 className={styles.ArticleTitle}>"{title}"</h1>
        <p className={styles.ArticleText}>{text}</p>
        <p className={styles.ArticlePrice}>{price}</p>
      </div>
    </div>
  )
}

export default Article