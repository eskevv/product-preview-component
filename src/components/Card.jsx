import React from 'react';

import styles from '../styles/card.module.sass'
import CardPicture from "./CardPicture";
import CardInfo from "./CardInfo";

const Card = () => {
  return (
    <div className={styles['card-container']}>
      <CardPicture />
      <CardInfo />
    </div>
  );
};

export default Card;