import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default Wrapper;
