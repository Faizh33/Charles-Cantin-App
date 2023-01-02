import { useState } from 'react';
import Button from '../Components/Button';
import styles from'../styles/Galerie.module.css';
import Image from 'next/image'

import bapteme1 from '../public/pictures/bapteme1-min.jpg';
import bapteme2 from '../public/pictures/bapteme2-min.jpg';
import bapteme3 from '../public/pictures/bapteme3-min.jpg';
import bapteme4 from '../public/pictures/bapteme4-min.jpg';
import bapteme5 from '../public/pictures/bapteme5-min.jpg';
import bebe1 from '../public/pictures/bebe1-min.jpg';
import bebe2 from '../public/pictures/bebe2-min.jpg';
import bebe3 from '../public/pictures/bebe3-min.jpg';
import bebe4 from '../public/pictures/bebe4-min.jpg';
import bebe5 from '../public/pictures/bebe5-min.jpg';
import couple1 from '../public/pictures/couple1-min.jpg';
import couple2 from '../public/pictures/couple2-min.jpg';
import couple3 from '../public/pictures/couple3-min.jpg';
import couple4 from '../public/pictures/couple4-min.jpg';
import couple5 from '../public/pictures/couple5-min.jpg';
import famille1 from '../public/pictures/famille1-min.jpg';
import famille2 from '../public/pictures/famille2-min.jpg';
import famille3 from '../public/pictures/famille3-min.jpg';
import famille4 from '../public/pictures/famille4-min.jpg';
import famille5 from '../public/pictures/famille5-min.jpg';
import grossesse1 from '../public/pictures/grossesse1-min.jpg';
import grossesse2 from '../public/pictures/grossesse2-min.jpg';
import grossesse3 from '../public/pictures/grossesse3-min.jpg';
import grossesse4 from '../public/pictures/grossesse4-min.jpg';
import grossesse5 from '../public/pictures/grossesse5-min.jpg';
import mariage1 from '../public/pictures/mariage1-min.jpg';
import mariage2 from '../public/pictures/mariage2-min.jpg';
import mariage3 from '../public/pictures/mariage3-min.jpg';
import mariage4 from '../public/pictures/mariage4-min.jpg';
import portrait1 from '../public/pictures/portrait1-min.jpg';
import portrait2 from '../public/pictures/portrait2-min.jpg';
import portrait3 from '../public/pictures/portrait3-min.jpg';
import portrait4 from '../public/pictures/portrait4-min.jpg';


const Galerie = () => {
  
  const [stylePict, setStylePict] = useState("HiddenPictures");
  const [styleBtn, setStyleBtn] = useState("BtnViewMore1");
  
  const changeStyle = () => {
    setStylePict("ShowPictures");
    setStyleBtn("ShowPictures");
  };
  


  return (
    <div className={styles.GalerieContainer}>
        <div className={styles.FilterButton}>
            <Button label="Tous" link="/galerie/mariage" />
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
                src={bapteme1} 
                alt="bapteme" 
              />
            </div>
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
                src={couple1} 
                alt="couple" 
              />
            </div>
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
                src={grossesse1} 
                alt="grossesse" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={mariage1} 
                alt="mariage" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={portrait1} 
                alt="portrait" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bapteme2} 
                alt="bapteme" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bebe2} 
                alt="bebe" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple2} 
                alt="couple" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={famille2} 
                alt="famille" 
                className={stylePict} 
              />
            </div>
          </div>
          <div className={styles.ColumnCenter}>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={grossesse2} 
                alt="grossesse" 
              />
            </div>
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
                src={portrait2} 
                alt="portrait" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bapteme3} 
                alt="bapteme" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bebe3} 
                alt="bebe"  
                className={stylePict}
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple3} 
                alt="couple" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={famille3} 
                alt="famille" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={grossesse3} 
                alt="grossesse" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={mariage3} 
                alt="mariage" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={portrait3} 
                alt="portrait" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bapteme4} 
                alt="bapteme" 
                className={stylePict} 
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
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bapteme5} 
                alt="bapteme" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bebe5} 
                alt="bebe" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple5} 
                alt="couple" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={mariage4} 
                alt="mariage" 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={famille5} 
                alt="famille" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={grossesse5} 
                alt="grossesse" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={bebe4} 
                alt="bebe" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={couple4} 
                alt="couple" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={famille4} 
                alt="famille" 
                className={stylePict} 
              />
            </div>
            <div className={styles.OnePictContainer}>
              <Image 
                width={400}
                src={grossesse4} 
                alt="grossesse" 
                className={stylePict} 
              />
            </div>
          </div>
        </div>
        <div className={styles.BtnViewMore}>
          <button onClick={changeStyle} className={styleBtn}>Voir plus... </button>
        </div>
    </div>
  )
}

export default Galerie;