import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import portrait1 from '../public/pictures/portrait1-min.jpg';
import portrait2 from '../public/pictures/portrait2-min.jpg';
import portrait3 from '../public/pictures/portrait3-min.jpg';
import portrait4 from '../public/pictures/portrait4-min.jpg';


const GaleriePortrait = () => {
  return (
    <div className={styles.GalerieContainer}>
      <Filters />
      <div className={styles.PictureContainer}>
        <div className={styles.ColumnLeft}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={portrait1} 
              alt="portrait" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={portrait2} 
              alt="portrait" 
            />
          </div>
        </div>
        <div className={styles.ColumnCenter}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={portrait3} 
              alt="portrait" 
            />
          </div>
        </div>
        <div className={styles.ColumnRight}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={portrait4} 
              alt="portrait" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default GaleriePortrait