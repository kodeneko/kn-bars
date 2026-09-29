import React from 'react';
import type { VarAxisProps } from './var-axis.types';
import styles from './var-axis.module.css';

const VarAxis: React.FC<VarAxisProps> = ({ max, divs }) => {
  const chunk = max / divs;
  const labels = Array(divs).fill(0)
    .map((_, index) => chunk * (index + 1) )
    .reverse();
  
  return (
    <div className={styles.mainCont}>
      {labels.map(label =>
        <div key={label} className={styles.info}>
          <div className={styles.label}>{label}</div>
        </div>
      )}
    </div>

  )
}

export { VarAxis };