import Button from './Button';
import styles from '../styles/Filters.module.css';

const Filters = () => {
  return (
    <div className={styles.FilterButton}>
        <Button label="Tous" link="/galerie" />
        <Button label="Mariage" link="/mariage" />
        <Button label="Grossesse" link="/grossesse" />
        <Button label="Bébé" link="/bebe" />
        <Button label="Famille" link="/famille" />
        <Button label="Baptême" link="/bapteme" />
        <Button label="Couple" link="/couple" />
        <Button label="Portrait" link="/portrait" />
    </div>
  )
}

export default Filters