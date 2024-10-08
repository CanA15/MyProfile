import { motion } from 'framer-motion';
import profilePic from '/Can-Memoji.png';
import linkedinLogo from '/linkedin.svg';

import styles from './Header.module.css';

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img
            src={profilePic}
            alt='Can Altinova Memoji'
            className={styles.profileImage}
          ></img>
          <div className={styles.profileText}>
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              Hey, I&apos;m Can!
            </motion.h1>
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              Full-time College Student & Software-Developer
            </motion.h2>
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              <div className={styles.links}>
                <a
                  href='https://www.linkedin.com/in/canaltinova'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.linkedinLink}
                >
                  {' '}
                  LinkedIn
                  <img
                    src={linkedinLogo}
                    alt='LinkedIn Logo'
                    className={styles.linkedinLogo}
                  />
                </a>
              </div>
            </motion.h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
