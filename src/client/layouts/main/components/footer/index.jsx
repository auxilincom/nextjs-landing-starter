import React from 'react';

import Logo from '~/static/auxilin-logo.svg';

import styles from './styles.pcss';

export default () => (
  <footer className={styles.footer}>
    <span className={styles.contactUs}>Contact us</span>
    <div className={styles.info}>
      20196 Northbrook Square, 95014 Cupertino, California, USA
      <br />
      <strong>Email: </strong>
      launch@auxilin.com
      <div className={styles.logo}>
        <Logo />
      </div>
      <span>© 2018 Auxilin, all rights reserved.</span>
    </div>
  </footer>
);
