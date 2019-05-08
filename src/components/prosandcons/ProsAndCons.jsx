import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions';
import { getList } from '../../selectors';
import { CardWrapper, CardHeader, List, AddNew, Error } from '../common';
import { PROS_KEY, CONS_KEY } from '../../constants/keys';

class ProsAndCons extends PureComponent {
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    submitList: PropTypes.func.isRequired,
    userId: PropTypes.string,
    groupId: PropTypes.string,
  };

  static defaultProps = {
    userId: null,
    groupId: null,
  };

  /* eslint-enable */

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      groupId: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { userId, groupId, doFetchList } = nextProps;  
    if (!!userId && !!groupId && (userId !==prevState.userId)) {
      doFetchList(userId, groupId);
      return {
        userId,
        groupId,
      };
    }
    return null;
  }

  render() {
    const { data, submitList, isLoading, error } = this.props;
    const pros = data[PROS_KEY] && !!data[PROS_KEY].length ? data[PROS_KEY] : [];
    const cons = data[CONS_KEY] && !!data[CONS_KEY].length ? data[CONS_KEY] : [];
    const cardClass = `cards ${isLoading ? ' loading' : ''}`;

    return (
      <div className={cardClass}>
        {error && <Error error={error} />}
        <CardWrapper >
          <CardHeader title="Pro's" />
          <List items={pros}  listKey={PROS_KEY} submitList={submitList} />
          <AddNew listKey={PROS_KEY} submitList={submitList} />
        </CardWrapper> 
        <CardWrapper>
          <CardHeader title="Con's" />
          <List items={cons} listKey={CONS_KEY} submitList={submitList} />
          <AddNew listKey={CONS_KEY} submitList={submitList} />
        </CardWrapper>
      </div>
    );
  }
}

const mapStateToProps = ({ list }) => {
  const { isListFetching, isListUpdating, errorMsg } = list;
  return {
    data: getList(list),
    isLoading: isListFetching || isListUpdating,
    error: errorMsg,
  };
};

const mapDispatchToProps = {
  doFetchList: fetchList,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProsAndCons),
);
