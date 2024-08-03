import Image from "next/image";
import styles from "./Hero.module.css";

export default () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/static/hero.jpg"
          alt="selfie"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi!</h1>
      <p>It is a simple blog.</p>
    </section>
  );
};
