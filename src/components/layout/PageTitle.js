import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PageTitle extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className="page-title">
        <h1> {title} </h1>
      </div>
    );
  }
}

export default PageTitle;
