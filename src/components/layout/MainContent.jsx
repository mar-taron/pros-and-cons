import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MainContent extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <main className="wrapper--center">{children}</main>;
  }
}

export default MainContent;
