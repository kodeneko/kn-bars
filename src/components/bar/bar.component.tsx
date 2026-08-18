import React from 'react';
import type { BarProps } from './bar.types';
import styles from './bar.module.css';

const Bar: React.FC<BarProps> = ({ size, max }) => {
  const heightBar = size * 100 / max;

  return (
    <div className={styles.cont}>
      <div
        className={styles.bar}
        style={{ height: `${heightBar}%` }}
      />
    </div>
  )
}

export { Bar };