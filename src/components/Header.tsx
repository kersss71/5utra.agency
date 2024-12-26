import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>АГЕНТСТВО КУЛЬТУРНЫХ СОБЫТИЙ</h1>
      <div className={styles.contacts}>
        <p>Контакты для связи с нами:</p>
        <p>
          <a className={styles.link} href="tel:+79267888962">
            Тел: +7 926 788-89-62
          </a>
        </p>
        <p>
          TГ:{" "}
          <a href="https://t.me/pyat_utra_agency" className={styles.link}>
            @pyat_utra_agency
          </a>
        </p>
      </div>
    </header>
  );
};
