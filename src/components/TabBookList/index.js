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
    const { bookList, changeBookStatus } = this.props;
    return (
      <React.Fragment>
        {bookList.map(({ id, author, title, description, tags }) => (
          <SingleBook key={id}>
            <header>
              <AuthorName>
                <p>{author}</p>
              </AuthorName>
              <BookTitle>
                <h4>{title}</h4>
                <button onClick={()=>changeBookStatus(id)}>start reading</button>
              </BookTitle>
            </header>
            <DescriptionContent>
              <p>{description}</p>
            </DescriptionContent>
            <TagList tagList={tags} />
          </SingleBook>
        ))}
      </React.Fragment>
    );
  }
}

TabBookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  changeBookStatus: PropTypes.func.isRequired,
};

export default TabBookList;
