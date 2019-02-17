import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagWrapper, SingleTag } from './styled';

class TagList extends Component {
  render() {
    const { tagList, changeBookFilter } = this.props;
    return (
      <TagWrapper>
        {tagList.map(tag => (
          <SingleTag key={tag}>
            <button onClick={() => changeBookFilter(tag)}>#{tag}</button>
          </SingleTag>
        ))}
      </TagWrapper>
    );
  }
}

TagList.propTypes = {
  tagList: PropTypes.array.isRequired,
  changeBookFilter: PropTypes.func,
};

export default TagList;
