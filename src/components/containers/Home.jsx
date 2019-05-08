import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MainContent, PageHeader, PageTitle, Wrapper } from '../layout';
import { ProsAndCons } from '../prosandcons';
import { fetchUser, fetchGroup, submitList } from '../../actions';

class Home extends Component {

  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    doFetchUser: PropTypes.func.isRequired,
    doFetchGroup: PropTypes.func.isRequired,
    doSubmitList: PropTypes.func.isRequired,
  };
  /* eslint-enable */

  componentDidMount() {
    const { doFetchUser, doFetchGroup } = this.props;
    doFetchUser();
    doFetchGroup();
  }

  render() {
    const {  userId, groupId, doSubmitList } = this.props;
    return ( 
      <Wrapper>
        <MainContent>
          <PageHeader>
            <PageTitle title="Pro's and con's list" />
          </PageHeader>   
          <ProsAndCons userId = {userId} groupId = {groupId} submitList={doSubmitList} />       
        </MainContent>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ user, group }) => {
  const { userId } = user;
  const { groupId } = group;
  return {
    userId,
    groupId,
  };
};

const mapDispatchToProps = {
  doFetchUser: fetchUser,
  doFetchGroup: fetchGroup,
  doSubmitList: submitList,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
