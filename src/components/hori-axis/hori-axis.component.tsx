import React from 'react';
import type { HoriAxisProps } from './hori-axis.types';
import styles from './hori-axis.module.css';

const HoriAxis: React.FC<HoriAxisProps> = ({ labels }) => {

  return (
    <div className={styles.cont}>
      {labels.map(lab => <div key={lab} className={styles.lab}>{ lab }</div>)}
    </div>
  )
}

export { HoriAxis };