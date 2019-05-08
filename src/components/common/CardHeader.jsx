import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CardHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className="card--header">
        <h3>{title}</h3>
      </div>
    );
  }
}

export default CardHeader;
