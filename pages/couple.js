import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import couple1 from '../public/pictures/couple1-min.jpg';
import couple2 from '../public/pictures/couple2-min.jpg';
import couple3 from '../public/pictures/couple3-min.jpg';
import couple4 from '../public/pictures/couple4-min.jpg';
import couple5 from '../public/pictures/couple5-min.jpg';


const GalerieCouple = () => {
    return (
      <div className={styles.GalerieContainer}>
        <Filters />
        <div className={styles.PictureContainer}>
          <div className={styles.ColumnLeft}>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple1} 
                alt="couple" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple2} 
                alt="couple" 
              />
            </div>
          </div>
          <div className={styles.ColumnCenter}>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple3} 
                alt="couple" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple4} 
                alt="couple" 
              />
            </div>
          </div>
          <div className={styles.ColumnRight}>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple5} 
                alt="couple" 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

export default GalerieCouple