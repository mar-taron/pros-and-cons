import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PageHeader extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <section className="page-header">{children}</section>;
  }
}

export default PageHeader;
