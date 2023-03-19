import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

import styles from './Card.module.scss';

import { cards } from '@/mock/cards';

export class Card extends Component<{ card: (typeof cards)[0] }> {
  constructor(props: { card: (typeof cards)[0] }) {
    super(props);
  }

  render() {
    const { title, image, description, rating, price, category } = this.props.card;
    const { titleName, card, wrapImg, img, dollar, star, desc, wrapRate, wrapPrice, wrapStar } =
      styles;

    return (
      <section className={card} data-testid="card">
        <h3 className={titleName}>{title}</h3>
        <p>{category}</p>

        <div className={wrapImg}>
          <img className={img} src={image} alt="product" />
        </div>

        <div className={wrapRate}>
          <div className={wrapStar}>
            <FontAwesomeIcon className={star} icon={faStar} />
            <span>{rating.rate}</span>
          </div>
          <span>Rest: {rating.count}</span>
        </div>

        <div className={wrapPrice}>
          <span>
            <b>Price:</b> {price}
          </span>
          <FontAwesomeIcon className={dollar} icon={faDollarSign} />
        </div>

        <p className={desc}>
          <b>Description:</b> <br />
          {description}
        </p>
      </section>
    );
  }
}
