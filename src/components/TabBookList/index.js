import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SingleBook,
  AuthorName,
  BookTitle,
  DescriptionContent,
} from './styled';
import TagList from "../TagList";

class TabBookList extends Component {
  render() {
    console.log(this.props);
    const { bookList } = this.props;
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
              </BookTitle>
            </header>
            <DescriptionContent>
              <p>{description}</p>
            </DescriptionContent>
            {/*{*/}
              {/*tags && tags.map(tag => <p>{tag}</p>)*/}
            {/*}*/}
            {
              <TagList tagList={tags}/>
            }
          </SingleBook>
        ))}
      </React.Fragment>
    );
  }
}

TabBookList.propTypes = {
  bookList: PropTypes.array.isRequired,
};

export default TabBookList;
