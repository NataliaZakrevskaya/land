import React, {useState} from 'react';
import HeadBlock from "./modules/HeadBlock/HeadBlock";
import ServicesBlock from "./modules/ServicesBlock/ServicesBlock";
import Modal from "../modal/Modal";
import styles from './Content.module.scss'

const Content = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const openModalClick = () => setOpenModal(true)
  const closeModalClick = () => setOpenModal(false)
  return (
    <div className={styles.content}>
      <HeadBlock click={openModalClick}/>
      <ServicesBlock click={openModalClick}/>
      {openModal && <Modal close={closeModalClick}/>}
    </div>
  );
};

export default Content;