import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import grossesse1 from '../Pictures/grossesse1-min.jpg';
import grossesse2 from '../Pictures/grossesse2-min.jpg';
import grossesse3 from '../Pictures/grossesse3-min.jpg';
import grossesse4 from '../Pictures/grossesse4-min.jpg';
import grossesse5 from '../Pictures/grossesse5-min.jpg';

const GalerieGrossesse = () => {
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
              src={grossesse5} 
              alt="grossesse" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={grossesse4} 
              alt="grossesse" 
            />
          </div>
        </div>
        <div className={styles.ColumnCenter}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={grossesse3} 
              alt="grossesse" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={grossesse2} 
              alt="grossesse" 
            />
          </div>
        </div>
        <div className={styles.ColumnRight}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={grossesse1} 
              alt="grossesse" 
            />
          </div>
        </div>
      </div>
    </div>
  )}

export default GalerieGrossesse