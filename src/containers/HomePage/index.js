import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  TabsWrapper,
  TabsContainer,
  TabsTitles,
  SingleTitle,
  TabContent,
} from './styled';
import bookData from '../../data/books';
import TabBookList from '../../components/TabBookList';
import { tabTitles } from '../../utils/consts';

class HomePage extends Component {
  state = {
    activeTab: 'toRead',
  };

  componentDidMount() {
    const { activeTab } = this.state;
    const { params } = this.props.match;
    if (activeTab !== params.tab) {
      // TODO вынести в отдельную функцию
      this.setState({
        activeTab: params.tab,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { activeTab } = this.state;

    if (nextProps.match && nextProps.match.params.tab !== activeTab) {
      this.setState({
        activeTab: nextProps.match.params.tab,
      });
    }
  }

  render() {
    return (
      <TabsWrapper>
        <TabsContainer>
          <TabsTitles>
            {tabTitles.map(({ text, routing }) => (
              <SingleTitle key={routing}>
                <Link to={`/${routing}`}>{text}</Link>
              </SingleTitle>
            ))}
          </TabsTitles>
          <TabContent>
            <TabBookList bookList={bookData.items} />
          </TabContent>
        </TabsContainer>
      </TabsWrapper>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default HomePage;
