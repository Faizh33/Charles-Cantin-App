import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import bapteme1 from '../Pictures/bapteme1-min.jpg';
import bapteme2 from '../Pictures/bapteme2-min.jpg';
import bapteme3 from '../Pictures/bapteme3-min.jpg';
import bapteme4 from '../Pictures/bapteme4-min.jpg';
import bapteme5 from '../Pictures/bapteme5-min.jpg';


const GalerieBapteme = () => {
  return (
    <div className={styles.GalerieContainer}>
      <div className={styles.FilterButton}>
        <Button label="Tous" link="/galerie" />
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
              src={bapteme1} 
              alt="bapteme" 
            />
          </div>
        </div>
        <div className={styles.ColumnCenter}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bapteme2} 
              alt="bapteme" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bapteme4} 
              alt="bapteme" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bapteme5} 
              alt="bapteme" 
            />
          </div>
        </div>
        <div className={styles.ColumnRight}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bapteme3} 
              alt="bapteme" 
            />
          </div>
        </div>
      </div>
    </div>
  )}



export default GalerieBapteme;