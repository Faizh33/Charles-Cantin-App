import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import couple1 from '../Pictures/couple1-min.jpg';
import couple2 from '../Pictures/couple2-min.jpg';
import couple3 from '../Pictures/couple3-min.jpg';
import couple4 from '../Pictures/couple4-min.jpg';
import couple5 from '../Pictures/couple5-min.jpg';


const GalerieCouple = () => {
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