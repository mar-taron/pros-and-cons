import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';

class Root extends PureComponent {
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  /* eslint-enable */

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    );
  }
}

export default Root;
