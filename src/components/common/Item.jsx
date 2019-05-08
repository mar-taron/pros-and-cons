import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { UPDATE_KEY, REMOVE_KEY } from '../../constants/keys';

class Item extends PureComponent {
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    submitList: PropTypes.func.isRequired,
    item: PropTypes.string.isRequired,
    listKey: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };
  /* eslint-enable */

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: '',
    };
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState({
      value: item,
    });
  }

  handleOnEdit = () => {
    const { item } = this.props;
    this.setState({
      isEditing: true,
      value: item,
    });
  }

  handleOnClose = () => this.setState({isEditing: false, value: ''});

  handleItemChange = e => this.setState({ value: e.target.value });

  handleOnSave = () => {
    const { value } = this.state;
    const { item, listKey, index, submitList } = this.props;
    if (value !== item) {      
      this.setState({isEditing: false, value: ''}, () => {
        submitList(listKey, value, UPDATE_KEY, index);
      })
    }
  }

  handleOnRemove = () => {
    const { submitList, listKey, index } = this.props;
    submitList(listKey, null, REMOVE_KEY, index);
  }

  render() {
    const { item } = this.props;
    const { isEditing, value } = this.state;
    return (
       isEditing ? 
        (
          <ul className="table-row">
            <li className="item" ><input type="text" value={value} onChange={this.handleItemChange} /></li>
            <li >
              <div className="card--actions">
                <div className="card--actions">
                  <button type="button" className="btn--cancel" onClick={this.handleOnClose}>
                    Cancel
                  </button>
                  <button type="button" className="btn--save" onClick={this.handleOnSave}>
                    Save
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ) : 
        (
          <ul className="table-row">
            <li onClick={this.handleOnEdit} className="item">{item}</li>
            <li >
              <div className="card--actions">
                <button type="button" className="btn--remove" onClick={this.handleOnRemove}>
                  Remove
                </button>
              </div>
            </li>
          </ul>
        )
    );
  }
}

export default Item;
