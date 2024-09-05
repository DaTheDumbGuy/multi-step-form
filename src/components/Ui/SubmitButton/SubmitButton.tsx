import styles from './submitButton.module.scss';
export default function SubmitButton() {
  return (
    <div className={styles['b-submitButton']}>
        <button type="submit" className={styles["b-submitButton__button"]}>Next Step</button>
    </div>
  )
}
