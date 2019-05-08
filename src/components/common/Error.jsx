import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Error extends PureComponent {
  static propTypes = {
    error: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const { error } = this.props;
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }
}

export default Error;
