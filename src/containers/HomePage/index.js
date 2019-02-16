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
    activeTab: 'toread',
  };

  setActiveTab = activeTab => {
    this.setState({
      activeTab,
    });
  };

  componentDidMount() {
    const { activeTab } = this.state;
    const { params, history } = this.props.match;
    if (activeTab !== params.tab) {
      this.setActiveTab(params.tab);
    }

    if (!params.tab) {
      history.push('/toread');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { activeTab } = this.state;

    if (nextProps.match && nextProps.match.params.tab !== activeTab) {
      this.setActiveTab(nextProps.match.params.tab);
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <TabsWrapper>
        <TabsContainer>
          <TabsTitles>
            {tabTitles.map(({ text, routing }) => (
              <SingleTitle key={routing} activeTab={activeTab === routing}>
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
  history: PropTypes.object.isRequired,
};

export default HomePage;
