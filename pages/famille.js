import Filters from '../Components/Filters';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import famille1 from '../public/pictures/famille1-min.jpg';
import famille2 from '../public/pictures/famille2-min.jpg';
import famille3 from '../public/pictures/famille3-min.jpg';
import famille4 from '../public/pictures/famille4-min.jpg';
import famille5 from '../public/pictures/famille5-min.jpg';


const GalerieFamille = () => {
  return (
    <div className={styles.GalerieContainer}>
      <Filters />
      <div className={styles.PictureContainer}>
        <div className={styles.ColumnLeft}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={famille1} 
              alt="famille" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={famille2} 
              alt="famille" 
            />
          </div>
        </div>
        <div className={styles.ColumnCenter}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={famille3} 
              alt="famille" 
            />
          </div>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={famille4} 
              alt="famille" 
            />
          </div>
        </div>
        <div className={styles.ColumnRight}>
          <div className={styles.OnePictContainer}>
            <Image 
              width={400}
              src={famille5} 
              alt="famille" 
            />
          </div>
        </div>
      </div>
    </div>
  )}

export default GalerieFamille