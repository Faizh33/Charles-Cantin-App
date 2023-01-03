import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import mariage1 from '../public/pictures/mariage1-min.jpg';
import mariage2 from '../public/pictures/mariage2-min.jpg';
import mariage3 from '../public/pictures/mariage3-min.jpg';
import mariage4 from '../public/pictures/mariage4-min.jpg';


const GalerieMariage = () => {
  return (
    <div className={styles.GalerieContainer}>
      <Filters />
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