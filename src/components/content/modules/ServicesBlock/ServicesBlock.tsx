import React from 'react';
import styles from './ServicesBlock.module.scss'
import {servicesQAFirst, servicesQASecond, servicesQAThird} from "../../../../mock";
import LikeSvg from "../../../../static/svg/LikeSvg";
import DislikeSvg from "../../../../static/svg/DislikeSvg";
import {ArrowRight, LikeActiveSvg, TelegramSvg, WeAvatarSvg} from "../../../../static/svg";
import classNames from "classnames";
import {useWindowSize} from "../../../../hooks/useWindowSize";

interface IProps{
  click: () => void
}

const ServicesBlock = ({click}: IProps) => {
  const {width} = useWindowSize()
  const isMobile = width <= 639
  return (
    <section className={styles.services}>
      <div id='services' className={styles.questions}>
        {servicesQAFirst
          .map(item => (
            <div
              key={item.id}
              className={styles.item}
            >
              <div className={styles.question}>
                <div className={styles.text}>
                  <img
                    className={styles.avatar}
                    src="avatar.png"
                    alt="avatar"/>
                  {item.question}
                </div>
                <div className={styles.likes}>
                  <LikeSvg/>
                  <DislikeSvg/>
                </div>
              </div>
              <div className={styles.answer}>
                <div className={styles.text}>
                  <div className={styles.avatar}>
                    <WeAvatarSvg/>
                  </div>
                  <p dangerouslySetInnerHTML={{__html: item.answer}}></p>
                </div>
                <div className={styles.likes}>
                  <LikeActiveSvg/>
                  <DislikeSvg/>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.action}>
        <div className={styles.btnWrapper}>
          <div className={styles.icon}>
            <ArrowRight/>
          </div>
          <button onClick={click} className={styles.button}>Получить бесплатную диагностику бизнеса</button>
        </div>
      </div>
      <div className={styles.questions} id='cases'>
        {servicesQASecond
          .map(item => (
            <div
              key={item.id}
              className={styles.item}
            >
              <div className={styles.question}>
                <div className={styles.text}>
                  <img
                    className={styles.avatar}
                    src="avatar.png"
                    alt="avatar"/>
                  {item.question}
                </div>
                <div className={styles.likes}>
                  <LikeSvg/>
                  <DislikeSvg/>
                </div>
              </div>
              {!isMobile ? (
                <div className={styles.answer}>
                  <div className={styles.text}>
                    <div className={styles.avatar}>
                      <WeAvatarSvg/>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: item.answer}}></p>
                  </div>
                  <div className={styles.likes}>
                    <LikeActiveSvg/>
                    <DislikeSvg/>
                  </div>
                </div>
              ) : (
                <>
                  {item.id === 2 ? (
                    <>
                      <div className={styles.answer}>
                        <div className={styles.text}>
                          <div className={styles.avatar}>
                            <WeAvatarSvg/>
                          </div>
                          <p dangerouslySetInnerHTML={{__html: item.answer2!}}></p>
                        </div>
                      </div>
                      <div className={styles.answer}>
                        <div className={styles.text}>
                          <p dangerouslySetInnerHTML={{__html: item.answer3!}}></p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={styles.answer}>
                      <div className={styles.text}>
                        <div className={styles.avatar}>
                          <WeAvatarSvg/>
                        </div>
                        <p dangerouslySetInnerHTML={{__html: item.answer}}></p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        <div className={styles.formBlock}>
          <div className={styles.form}>
            <p>Спасибо, теперь все понятно!</p>
            <TelegramSvg/>
          </div>
        </div>
      </div>
      <div className={classNames(styles.action, styles.grey)}>
        <div className={styles.btnWrapper}>
          <div className={styles.icon}>
            <ArrowRight/>
          </div>
          <button onClick={click} className={styles.button}>Рассчитайте мой проект бесплатно</button>
        </div>
      </div>
      {!isMobile ? (
        <div className={styles.benefit}>
          <p className={styles.text}>Вы тратите в разы меньше денег и времени, но растите продажи быстрее, чем
            когда-либо.</p>
          <div className={styles.left}/>
          <div className={styles.right}>
            <img
              src="illustration.png"
              alt="illustration"
            />
          </div>
        </div>
      ) : (
        <div className={styles.benefit_mobile}>
          <div className={styles.top}>
            <img
              src="illustration.png"
              alt="illustration"
            />
          </div>
          <div className={styles.bottom}>
            <p className={styles.text}>Вы тратите в разы меньше денег и времени, но растите продажи быстрее, чем
              когда-либо.</p>
          </div>
        </div>
      )}
      <div className={styles.questions}>
        {servicesQAThird
          .map(item => (
            <div
              key={item.id}
              className={styles.item}
            >
              <div className={styles.question}>
                <div className={styles.text}>
                  <img
                    className={styles.avatar}
                    src="avatar.png"
                    alt="avatar"/>
                  {item.question}
                </div>
                <div className={styles.likes}>
                  <LikeSvg/>
                  <DislikeSvg/>
                </div>
              </div>
              <div className={styles.answer}>
                <div className={styles.text}>
                  <div className={styles.avatar}>
                    <WeAvatarSvg/>
                  </div>
                  {item.answer}
                </div>
                <div className={styles.likes}>
                  <LikeActiveSvg/>
                  <DislikeSvg/>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={classNames(styles.action, styles.action_withoutBorder)}>
        <div className={styles.btnWrapper}>
          <div className={styles.icon}>
            <ArrowRight/>
          </div>
          <button onClick={click} className={classNames(styles.button, styles.button_active)}>Хочу работать с Вами
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;