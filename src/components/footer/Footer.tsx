import React from 'react';
import styles from './Footer.module.scss'
import {ArrowRightSmall} from "../../static/svg";
import {navTabs} from "../../mock";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
       <div className={styles.logo}>
         <img src="logo-white.png" alt="logo"/>
       </div>
        <nav className={styles.nav}>
          {navTabs
            .map(tab => {
              if(tab.link !== null){
                return (
                  <div className={styles.nav_item}>
                    <a key={tab.id} href={tab.link} target='_blank' rel='noreferrer nofollow'>
                      {tab.text}
                    </a>
                    <ArrowRightSmall color='#fff'/>
                  </div>
                )
              } else{
                return (
                  <a href={`#${tab.id}`} className={classNames(styles.nav_item, styles.nav_withoutLine)} key={tab.id}>{tab.text}</a>
                )
              }

            })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;