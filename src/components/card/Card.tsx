import { Component } from 'react';

import styles from './Card.module.scss';

import { cards } from '@/mock/cards';

export class Card extends Component<{ card: typeof cards[0] }> {
  constructor(props: { card: typeof cards[0] }) {
    super(props);
  }

  render() {
    const { title, image, description } = this.props.card;

    return (
      <section className={styles.card}>
        <h3>{title}</h3>
        <img className={styles.img} src={image} alt="product" />
        <p className={styles.desc}>{description}</p>
      </section>
    );
  }
}
