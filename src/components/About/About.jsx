import styles from './About.module.css';

function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutTitle}>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutText1}>
          <p>
            I am currently a full-time college student pursuing my
            Bachelor&apos;s degree in Business Administration. Driven by my
            interest in technology, I&apos;ve become a self-taught full-stack
            developer.
          </p>
        </div>
        <div className={styles.aboutText2}>
          <p>
            Besides that you&apos;ll find me hitting the gym, getting lost in a
            good book, or spend some time with family & friends.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
