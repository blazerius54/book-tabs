import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SingleBook,
  AuthorName,
  BookTitle,
  DescriptionContent,
} from './styled';
import TagList from '../TagList';

class TabBookList extends Component {
  render() {
    const {
      bookList,
      changeBookStatus,
      newStatus,
      filterTags,
      changeBookFilter,
    } = this.props;

    return (
      <React.Fragment>
        {bookList &&
          bookList.map(book => {
            const { id, author, title, description, tags } = book;
            if (
              filterTags.length > 0 &&
              !filterTags.every(val => book.tags.includes(val))
            ) {
              return;
            }

            return (
              <SingleBook key={id}>
                <header>
                  <AuthorName>
                    <p>{author}</p>
                  </AuthorName>
                  <BookTitle>
                    <h4>{title}</h4>
                    <button onClick={() => changeBookStatus(id)}>
                      {newStatus}
                    </button>
                  </BookTitle>
                </header>
                <DescriptionContent>
                  <p>{description}</p>
                </DescriptionContent>
                <TagList tagList={tags} changeBookFilter={changeBookFilter} />
              </SingleBook>
            );
          })}
      </React.Fragment>
    );
  }
}

TabBookList.propTypes = {
  changeBookStatus: PropTypes.func.isRequired,
  newStatus: PropTypes.string.isRequired,
  changeBookFilter: PropTypes.func.isRequired,
  bookList: PropTypes.array,
  filterTags: PropTypes.array,
};

export default TabBookList;
