import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((sum, curr) => {
      const fish = this.props.fishes[curr];
      const count = this.props.order[curr];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return sum + count * fish.price;
      }
      return sum;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup className="order" component="ul">
          {orderIds.map((key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish?.status === 'available';
            if (!fish) return null;
            if (!isAvailable) {
              return (
                <li key={key}>
                  Sorry, {fish ? fish.name : 'fish'} is no longer available.
                </li>
              );
            }
            return (
              <CSSTransition
                key={key}
                classNames="order"
                timeout={{ enter: 250, exit: 250 }}
              >
                <li key={key}>
                  <TransitionGroup component="span" className="count">
                    <CSSTransition
                      key={count}
                      classNames="count"
                      timeout={{ enter: 20050, exit: 20050 }}
                    >
                      <span>{count}</span>
                    </CSSTransition>
                    {` lbs ${fish.name} ${formatPrice(count * fish.price)}`}
                  </TransitionGroup>
                  <button onClick={() => this.props.removeFromOrder(key)}>
                    &times;
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
