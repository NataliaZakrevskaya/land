import React, {useEffect, useRef, useState} from 'react';
import styles from './Modal.module.scss'
import useClickOutside from "../../hooks/useClickOutside";
import {CloseSvg} from "../../static/svg";

interface IProps{
  close: () => void
}

const Modal = ({close}: IProps) => {

  const [name, setName] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [mailto, setMailto] = useState<string>('')

  const ref = useRef(null)

  useEffect(() => {
    const body = document.querySelector('body')
    if(body){
      body.classList.add('modal-open')
      return () => {
        body.classList.remove('modal-open')
      }
    }
  }, [])
  useClickOutside([ref], close)

  useEffect(() => {
    const bodyMessage = `
  Имя: ${name},\n
  Телеграм для связи: ${telegram},\n
  Сообщение: ${message}\n
  `
    setMailto(bodyMessage)
  }, [name, telegram, message])
  return (
    <div className={styles.modal}>
      <div ref={ref} className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <div className={styles.text}>
              <p className={styles.title}>Заполните форму обратной связи</p>
              <p className={styles.subtitle}>И мы свяжемся с вами в течение 5 минут!</p>
            </div>
            <div className={styles.icon} onClick={close}>
              <CloseSvg/>
            </div>
          </div>
          <div className={styles.form}>
            <input
              type="text"
              placeholder={'Имя*'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder={'Телеграм для связи*'}
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
            <textarea
              placeholder={'Чем мы можем вам помочь?'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className={styles.action}>
              <p className={styles.text}>
                Нажимая кнопку “Отправить заявку”, вы соглашаетесь с условиями конфиденциальности
              </p>
              <a
                href={`mailto:Aerokz@gmail.com?body=${encodeURIComponent(mailto)}`}
                className={styles.btn}
              >Отправить заявку</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;