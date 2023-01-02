import Title from '../Components/Title';
import Article from '../Components/Article';
import styles from'../styles/Tarifs.module.css';

const Tarifs = () => {
  return (
    <div className={styles.Tarifs}>
        <div className={styles.TitleTarifs}>
          <Title text="Tarifs et Prestations"/>
        </div>
        <div className={styles.ArticleTarifs}>
          <Article
            title="Juste moi"
            text="Séance pour une personne, en extérieur ou en studio"
            price="130 euros" 
          />

          <Article
            title="Pour deux"
            text="Pour deux personnes, en extérieur ou en studio"
            price="195 euros" 
          />

          <Article
            title="Famille"
            text="Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)"
            price="220 euros" 
          />

          <Article
            title="Il était une fois"
            text="Photo de grossesse (À votre domicile, en extérieur ou en studio)"
            price="160 euros" 
          />

          <Article
            title="Mon bébé"
            text="Photo d’enfant jusqu’à 3 ans (photo à domicile)"
            price="100 euros" 
          />  

          <Article
            title="J’immortalise l’événement"
            text="Sur mesure - Prestation de mariage ou baptême" 
            price ="Sur devis"
          />
        </div>
    </div>
  )
}

export default Tarifs