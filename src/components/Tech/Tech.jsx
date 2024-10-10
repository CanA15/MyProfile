import jsLogo from '/javascript.svg';
import nodejsLogo from '/nodejs.svg';
import postgresqlLogo from '/postgresql.svg';
import reactLogo from '/react.svg';
import expressLogo from '/express.svg';

import styles from './Tech.module.css';

function Tech() {
  return (
    <>
      <div className={styles.techstack}>
        <div className={styles.techstackTransition}>
          <h2>
            What started as curiosity has evolved into a deep passion for
            technology
          </h2>
        </div>
        <div className={styles.techstackTitle}>
          <h2>My current Web-Development Techstack</h2>
        </div>
        <div className={styles.techstackLogos}>
          <img src={jsLogo} alt='MacOS Logo' />
          <img src={reactLogo} alt='ReactJS Logo' />
          <img src={nodejsLogo} alt='Nodejs Logo' />
          <img src={expressLogo} alt='Nodejs Logo' />
          <img src={postgresqlLogo} alt='Postgresql Logo' />
        </div>
      </div>
    </>
  );
}

export default Tech;
