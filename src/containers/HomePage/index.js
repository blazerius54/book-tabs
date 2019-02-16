import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  TabsWrapper,
  TabsContainer,
  TabsTitles,
  SingleTitle,
  TabContent,
} from './styled';
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
    const { history } = this.props;
    const { params } = this.props.match;

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
    const { books } = this.props;

    return (
      <TabsWrapper>
        <TabsContainer>
          <TabsTitles>
            {tabTitles.map(({ text, routing }) => (
              <SingleTitle key={routing} activeTab={activeTab === routing}>
                <Link to={`/${routing}`}>{text} {books[routing].length}</Link>
              </SingleTitle>
            ))}
          </TabsTitles>
          <TabContent>
            <TabBookList bookList={books[activeTab]} />
          </TabContent>
        </TabsContainer>
      </TabsWrapper>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({
  books: state.appReducer.books
});

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({ addNewTodo, deleteTodo, editTodo, setTodoDone }, dispatch)
// }

export default connect(mapStateToProps)(HomePage);