import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagWrapper, SingleTag } from './styled';

class TagList extends Component {
  render() {
    const { tagList } = this.props;
    return (
      <TagWrapper>
        {
          tagList.map(tag => (
            <SingleTag>
              <p>#{tag}</p>
            </SingleTag>
          ))
        }
      </TagWrapper>
    );
  }
}

TagList.propTypes = {
  tagList: PropTypes.array.isRequired,
};

export default TagList;
