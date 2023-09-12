import React from 'react';

import styles from '../styles/cardinfo.module.sass'

const CardInfo = () => {
  return (
    <section className={styles['info']}>
      <p className={styles['sub-title']}>perfume</p>
      <h2 className={styles['title']}>Gabrielle <br/> Essence Eau <br/> De Parfum</h2>
      <p className={styles['desc']}>A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.</p>
      <div className={styles['prices']}>
        <h2 >$149.99</h2>
        <strike>$169.99</strike>
      </div>
      <button>
        <img src={"images/icon-cart.svg"} alt="cart"/>
        <p>Add to Cart</p>
      </button>
    </section>
  );
};

export default CardInfo;