import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ADD_KEY } from '../../constants/keys';

class AddNew extends PureComponent {

 /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    submitList: PropTypes.func.isRequired,
    listKey: PropTypes.string.isRequired,
  };
  /* eslint-enable */

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = e => this.setState({ value: e.target.value });

  handleOnClick = () => {
    const { submitList, listKey } = this.props;
    const { value } = this.state;
    if (!!value) {      
      this.setState({
        value: '',
      }, () => {
        submitList(listKey, value, ADD_KEY);
      });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div >       
        <div className="card--actions">
          <input type="text" value={value} onChange={this.handleChange} />
          <button type="button" className="btn--save" onClick={this.handleOnClick}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddNew;
