import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabsWrapper, TabsContainer, TabsTitles, SingleTitle, TabContent } from './styled';
import bookData from '../../data/books';
import TabBookList from "../../components/TabBookList";

class HomePage extends Component {
  state = {
    activeTab: 'toRead',
  };

  componentDidMount() {
    const { activeTab } = this.state;
    const { params } = this.props.match;
    if(activeTab !== params.tab) {
      this.setState({
        activeTab: params.tab,
      })
    }
  }

  render() {
    console.log(this.state.activeTab, );
    return (
      <TabsWrapper>
        <TabsContainer>
          <TabsTitles>
            <SingleTitle>
              <button>To read (3)</button>
            </SingleTitle>
            <SingleTitle>
              <button>In progress (1)</button>
            </SingleTitle>
            <SingleTitle>
              <button>Done (5)</button>
            </SingleTitle>
          </TabsTitles>
          <TabContent>
            <TabBookList bookList={bookData.items}/>
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
