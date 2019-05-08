import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Item } from '.';

class List extends PureComponent {
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    submitList: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    listKey: PropTypes.string.isRequired,
  };
  /* eslint-enable */

  render() {
    const { items, listKey, submitList } = this.props;
    const itemList = !!items.length && items.map((it, i ) => <Item item={it} listKey={listKey} index={i} key={i} submitList={submitList} />);
    return (
      <div className="items-list">
        {!!items.length && itemList}
      </div>
    );
  }
}

export default List;
