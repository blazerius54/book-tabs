import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { changeBookStatus, changeBookFilter, resetBookFilter } from './actions';
import {
  TabsWrapper,
  TabsContainer,
  TabsTitles,
  SingleTitle,
  TabContent,
  TagContent,
  FiltredText,
  ClearTagsBtn,
} from './styled';
import TabBookList from '../../components/TabBookList';
import { tabTitles } from '../../utils/consts';
import TagList from '../../components/TagList';

class HomePage extends Component {
  state = {
    activeTab: '',
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
    const {
      books,
      filterTags,
      changeBookStatus,
      changeBookFilter,
      resetBookFilter,
    } = this.props;
    const isBooksFiltred = filterTags && filterTags.length > 0;
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
          {isBooksFiltred && (
            <TagContent>
              <FiltredText>Filtred by tags: </FiltredText>
              <TagList tagList={filterTags} />
              <ClearTagsBtn onClick={resetBookFilter}>(clear)</ClearTagsBtn>
            </TagContent>
          )}
          <TabContent>
            <TabBookList
              bookList={books[activeTab]}
              changeBookStatus={id =>
                changeBookStatus(id, newStatus, activeTab)
              }
              newStatus={newStatus}
              filterTags={filterTags}
              changeBookFilter={changeBookFilter}
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
  changeBookFilter: PropTypes.func.isRequired,
  resetBookFilter: PropTypes.func.isRequired,
  filterTags: PropTypes.array,
};

const mapStateToProps = state => ({
  books: state.appReducer.books,
  filterTags: state.appReducer.filterTags,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changeBookStatus, changeBookFilter, resetBookFilter },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
