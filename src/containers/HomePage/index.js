import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { changeBookStatus } from './actions';
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
    const { books, changeBookStatus } = this.props;
    let newStatus = '';

    if (activeTab === 'toread') {
      newStatus = 'inprogress';
    }
    if (activeTab === 'inprogress') {
      newStatus = 'done';
    }
    if (activeTab === 'done') {
      newStatus = 'toread';
    }

    return (
      <TabsWrapper>
        <TabsContainer>
          <TabsTitles>
            {tabTitles.map(({ text, routing }) => (
              <SingleTitle key={routing} activeTab={activeTab === routing}>
                <Link to={`/${routing}`}>
                  {text} {books[routing].length}
                </Link>
              </SingleTitle>
            ))}
          </TabsTitles>
          <TabContent>
            <TabBookList
              bookList={books[activeTab]}
              changeBookStatus={id =>
                changeBookStatus(id, newStatus, activeTab)
              }
            />
          </TabContent>
        </TabsContainer>
      </TabsWrapper>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  changeBookStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.appReducer.books,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeBookStatus }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
