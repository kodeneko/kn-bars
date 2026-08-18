import React from 'react';
import type { ContLabelProps } from './hori-axis.types';
import styles from './hori-axis.module.css';

const ContLabel: React.FC<ContLabelProps> = ({ labels }) => {

  return (
    <div className={styles.cont}>
      {labels.map(lab =>
        <div
          key={lab}
          className={styles.lab}
        >
          {lab}
        </div>
      )}
    </div>
  )
}

export { ContLabel };