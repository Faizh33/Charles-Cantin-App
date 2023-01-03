import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import bebe1 from '../Pictures/bebe1-min.jpg';
import bebe2 from '../Pictures/bebe2-min.jpg';
import bebe3 from '../Pictures/bebe3-min.jpg';
import bebe4 from '../Pictures/bebe4-min.jpg';
import bebe5 from '../Pictures/bebe5-min.jpg';


const GalerieBebe = () => {
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
              src={bebe1} 
              alt="bebe" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bebe2} 
              alt="bebe" 
            />
          </div>
        </div>
        <div className={styles.ColumnCenter}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bebe3} 
              alt="bebe" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bebe5} 
              alt="bebe" 
            />
          </div>
        </div>
        <div className={styles.ColumnRight}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={bebe4} 
              alt="bebe" 
            />
          </div>
        </div>
      </div>
    </div>
  )}

export default GalerieBebe