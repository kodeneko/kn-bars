import React from 'react';
import type { GraphicProps } from './graphic.types';
import styles from './graphic.module.css';
import { ContLabel } from '../hori-axis/cont-label.component';
import { ContBar } from '../bar/cont-bar.component';

const Graphic: React.FC<GraphicProps> = ({ labels, bars, max }) => {

  return (
    <div className={styles.cont}>
      <ContBar bars={bars} max={max} />
      <ContLabel labels={labels} />
    </div>
  )
}

export { Graphic };