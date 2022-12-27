import styles from '../styles/Form.module.css'

const Form = () => {

    return (
      <div className={styles.Container}>
        <div className={styles.FormContainer}>
          <form name='contact' method='POST' data-netlify='true'>
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

            <button className={styles.FormBtn}>Envoyer</button>
          </form>
        </div>
      </div>
    );
}

export default Form