import profilePic2 from '/Can-Memoji2.png';
import linkedinLogo from '/linkedin.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <img
          src={profilePic2}
          alt='Can Altinova Memoji waving hand'
          className={styles.profileImage}
        ></img>
        <div className={styles.footerText}>
          <h1>Let&apos;s stay in touch</h1>
          <h2>
            <div className={styles.links}>
              <a
                href='https://www.linkedin.com/in/canaltinova'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.linkedinLink}
              >
                LinkedIn
                <img
                  src={linkedinLogo}
                  alt='LinkedIn Logo'
                  className={styles.linkedinLogo}
                />
              </a>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
