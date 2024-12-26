import styles from "../styles/Main.module.css";
import logo from "../images/logo.png";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="логотип 5 утра" width={700} height={500} />
      </div>
      <p className={styles.message}>
        Наш сайт прямо сейчас находится в разработке.
        <br />
        Немного терпения и здесь будет тепло и светло,
        <br />
        как везде, где мы берёмся создать атмосферу.
      </p>
    </main>
  );
};
