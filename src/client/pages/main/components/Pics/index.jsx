import React from 'react';
import classnames from 'classnames';

import styles from './styles.pcss';

export default () => (
  <div className={styles.pics}>
    <div className={styles.pic}>
      <img src="static/strategy.jpg" alt="Strategy" />
      <div className={styles.textWrap}>
        <span className={styles.text}>
          Strategy
        </span>
      </div>
    </div>
    <div className={styles.pic}>
      <img src="static/launch.jpg" alt="Launch" />
      <div className={styles.textWrap}>
        <span className={styles.text}>
          Launch
        </span>
      </div>
    </div>
    <div className={styles.pic}>
      <img src="static/integration.jpg" alt="CI" />
      <div className={styles.textWrap}>
        <span className={classnames(styles.text, styles.twoLines)}>
          Continuous
          <br />
          Integration
        </span>
      </div>
    </div>
    <div className={styles.pic}>
      <img src="static/monitoring.jpg" alt="Monitoring" />
      <div className={styles.textWrap}>
        <span className={styles.text}>
          Monitoring
        </span>
      </div>
    </div>
    <div className={styles.pic}>
      <img src="static/koa-react.jpg" alt="Stack" />
      <div className={styles.textWrap}>
        <span className={styles.text}>
          Node &amp; React
        </span>
      </div>
    </div>
    <div className={styles.pic}>
      <img src="static/deploy.jpg" alt="Deployment" />
      <div className={styles.textWrap}>
        <span className={classnames(styles.text, styles.twoLines)}>
          Easy
          <br />
          Deployment
        </span>
      </div>
    </div>
  </div>
);
