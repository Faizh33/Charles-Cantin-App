import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import bebe1 from '../public/pictures/bebe1-min.jpg';
import bebe2 from '../public/pictures/bebe2-min.jpg';
import bebe3 from '../public/pictures/bebe3-min.jpg';
import bebe4 from '../public/pictures/bebe4-min.jpg';
import bebe5 from '../public/pictures/bebe5-min.jpg';


const GalerieBebe = () => {
    return (
    <div className={styles.GalerieContainer}>
      <Filters />
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