import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import mariage1 from '../Pictures/mariage1-min.jpg';
import mariage2 from '../Pictures/mariage2-min.jpg';
import mariage3 from '../Pictures/mariage3-min.jpg';
import mariage4 from '../Pictures/mariage4-min.jpg';


const GalerieMariage = () => {
  return (
    <div className={styles.GalerieContainer}>
      <div className={styles.FilterButton}>
        <Button label="Tous" link="/galerie/" />
        <Button label="Mariage" link="/galerie/mariage" />
        <Button label="Grossesse" link="/galerie/grossesse" />
        <Button label="Bébé" link="/galerie/bebe" />
        <Button label="Famille" link="/galerie/famille" />
        <Button label="Baptême" link="/galerie/bapteme" />
        <Button label="Couple" link="/galerie/couple" />
        <Button label="Portrait" link="/galerie/portrait" />
      </div>
      <div className={styles.PictureContainer}>
        <div className={styles.ColumnLeft}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={mariage1} 
              alt="mariage" 
            />
          </div>
        </div>
        <div className={styles.ColumnCenter}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={mariage2} 
              alt="mariage" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={mariage4} 
              alt="mariage" 
            />
          </div>
        </div>
        <div className={styles.ColumnRight}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={mariage3} 
              alt="mariage" 
            />
          </div>
        </div>
      </div>
    </div>
  )}


export default GalerieMariage