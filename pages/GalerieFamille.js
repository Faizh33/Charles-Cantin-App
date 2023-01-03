import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image';

import famille1 from '../Pictures/famille1-min.jpg';
import famille2 from '../Pictures/famille2-min.jpg';
import famille3 from '../Pictures/famille3-min.jpg';
import famille4 from '../Pictures/famille4-min.jpg';
import famille5 from '../Pictures/famille5-min.jpg';


const GalerieFamille = () => {
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