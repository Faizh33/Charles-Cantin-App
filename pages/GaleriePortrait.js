import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import portrait1 from '../Pictures/portrait1-min.jpg';
import portrait2 from '../Pictures/portrait2-min.jpg';
import portrait3 from '../Pictures/portrait3-min.jpg';
import portrait4 from '../Pictures/portrait4-min.jpg';


const GaleriePortrait = () => {
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