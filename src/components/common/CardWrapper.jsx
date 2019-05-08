import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CardWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <section className="card--wrap">{children}</section>;
  }
}

export default CardWrapper;
