import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import bapteme1 from '../public/pictures/bapteme1-min.jpg';
import bapteme2 from '../public/pictures/bapteme2-min.jpg';
import bapteme3 from '../public/pictures/bapteme3-min.jpg';
import bapteme4 from '../public/pictures/bapteme4-min.jpg';
import bapteme5 from '../public/pictures/bapteme5-min.jpg';


const GalerieBapteme = () => {
  return (
    <div className={styles.GalerieContainer}>
      <Filters />
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