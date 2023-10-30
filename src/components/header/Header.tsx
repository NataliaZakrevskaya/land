import React from 'react';
import {ArrowRightSmall} from "../../static/svg";
import {navTabs} from "../../mock";
import styles from './Header.module.scss'
import classNames from "classnames";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt="logo"/>
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
                  <ArrowRightSmall color='#000'/>
                </div>
              )
            } else{
              return (
                <a href={`#${tab.id}`} className={classNames(styles.nav_item, styles.nav_withoutLine)} key={tab.id}>{tab.text}</a>
              )
            }

          })}
      </nav>
    </header>
  );
};

export default Header;