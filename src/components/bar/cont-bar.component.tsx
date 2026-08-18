import React from 'react';
import type { ContBarProps } from './bar.types';
import styles from './bar.module.css';
import { Bar } from './bar.component';

const ContBar: React.FC<ContBarProps> = ({ bars, max }) => {
  return (
    <div className={styles.contBar}>
      {bars.map(b => <Bar size={b} max={max} />)}
    </div>
  )
}

export { Bar, ContBar };