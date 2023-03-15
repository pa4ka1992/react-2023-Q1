import { Component } from 'react';

import { Card } from '@/components/card/Card';
import styles from './CardList.module.scss';

import { cards } from '@/mock/cards';

export class CardList extends Component {
  render() {
    return (
      <section className={styles.list}>
        {cards.map((card, key) => (
          <Card card={card} key={key} />
        ))}
      </section>
    );
  }
}
