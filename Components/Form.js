import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/Form.module.css'

const Form = () => {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isCaptchaValid) {
      // Traitez le formulaire ici
      console.log("Formulaire soumis avec succès !");
    } else {
      console.log("Veuillez valider le Captcha avant de soumettre le formulaire.");
    }
  };

    return (
      <div className={styles.Container}>
        <div className={styles.FormContainer}>
          <form name='contact' method='POST' data-netlify='true' onSubmit={handleFormSubmit}>
            <label className={styles.FormLabel}>
              Nom<span className={styles.Require}>*</span>
            </label>
            <input
              className={styles.FormInput}
              name="name"
              type="text"
              required />

            <label className={styles.FormLabel}>
              Email<span className={styles.Require}>*</span>
            </label>
            <input
              className={styles.FormInput}
              name="email"
              type="email"
              required />


            <label className={styles.FormLabel}>
              Message<span className={styles.Require}>*</span>
            </label>
              <textarea
                className={styles.Textarea}
                name="message"
                required>
              </textarea>

            <ReCAPTCHA
              sitekey="6LfkelsnAAAAAEd_8l0TutgS3aeR3taTz6T1sjdh"
              onChange={(value) => setIsCaptchaValid(!!value)}
            />

            <button className={styles.FormBtn}>Envoyer</button>
          </form>
        </div>
      </div>
    );
}

export default Form