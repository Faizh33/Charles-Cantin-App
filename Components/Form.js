import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import validator from "validator";
import styles from '../styles/Form.module.css';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validation des champs
    if (!validator.isLength(name, { min: 2, max: 50 })) {
      console.log("Le nom doit contenir entre 2 et 50 caractères.");
      return;
    }

    if (!validator.isEmail(email)) {
      console.log("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    if (!validator.isLength(message, { min: 10, max: 500 })) {
      console.log("Le message doit contenir entre 10 et 500 caractères.");
      return;
    }

    // Vérification du Captcha
    if (!isCaptchaValid) {
      console.log("Veuillez valider le Captcha avant de soumettre le formulaire.");
      return;
    }

    // Traitez le formulaire ici (vous pouvez envoyer les données à votre backend s'il en existe un)
    console.log("Formulaire soumis avec succès !");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
        <form onSubmit={handleFormSubmit}>
          <label className={styles.FormLabel}>
            Nom<span className={styles.Require}>*</span>
          </label>
          <input
            className={styles.FormInput}
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className={styles.FormLabel}>
            Email<span className={styles.Require}>*</span>
          </label>
          <input
            className={styles.FormInput}
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.FormLabel}>
            Message<span className={styles.Require}>*</span>
          </label>
          <textarea
            className={styles.Textarea}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <ReCAPTCHA
            sitekey="6LfkelsnAAAAAEd_8l0TutgS3aeR3taTz6T1sjdh"
            onChange={(value) => setIsCaptchaValid(!!value)}
          />

          <button className={styles.FormBtn} type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;