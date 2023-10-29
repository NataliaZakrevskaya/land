import React from 'react';
import styles from './HeadBlock.module.scss'
import {headBlock} from "../../../../mock";
import {ArrowLeftBig} from "../../../../static/svg";

interface IProps{
  click: () => void
}

const HeadBlock = ({click}: IProps) => {

  return (
    <div className={styles.block}>
      <div className={styles.up}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{headBlock.title}</h1>
          <p dangerouslySetInnerHTML={{__html: headBlock.subtitle}} className={styles.subtitle}/>
          <button onClick={click} className={styles.btn}>{headBlock.btnText}</button>
        </div>
        <img
          className={styles.img}
          src='main-Photo.png'
          alt="main photo"
        />
      </div>
      <div className={styles.down}>
        <div className={styles.textBlock}>
          <div className={styles.icon}>
            <ArrowLeftBig/>
          </div>
          <p>{headBlock.text}</p>
        </div>
        <div className={styles.descriptionBlock} dangerouslySetInnerHTML={{__html: headBlock.description}}/>
      </div>
    </div>
  );
};

export default HeadBlock;