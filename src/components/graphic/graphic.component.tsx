import React from 'react';
import type { GraphicProps } from './graphic.types';
import styles from './graphic.module.css';
import { ContLabel } from '../hori-axis/cont-label.component';
import { ContBar } from '../bar/cont-bar.component';
import { VarAxis } from '../var-axis/var-axis.component';

const Graphic: React.FC<GraphicProps> = ({ labels, bars, max }) => {

  return (
    <div className={styles.cont}>
      <VarAxis max={max} divs={5} />
      <div className={styles.part02}>
        <ContBar bars={bars} max={max} />
        <ContLabel labels={labels} />
      </div>
    </div>
  )
}

export { Graphic };