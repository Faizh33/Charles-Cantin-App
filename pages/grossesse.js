import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import grossesse1 from '../public/pictures/grossesse1-min.jpg';
import grossesse2 from '../public/pictures/grossesse2-min.jpg';
import grossesse3 from '../public/pictures/grossesse3-min.jpg';
import grossesse4 from '../public/pictures/grossesse4-min.jpg';
import grossesse5 from '../public/pictures/grossesse5-min.jpg';

const GalerieGrossesse = () => {
  return (
    <div className={styles.GalerieContainer}>
      <Filters />
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