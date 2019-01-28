import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import * as style from './bookListing.less'
import * as config from '../../config'
import * as jobActions from '../../actions'
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import ReviewBook from '../../components/ReviewBook/reviewBook'
import { withRouter } from 'react-router-dom';
import Header from '../../containers/Header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

import SkeletonReviewListing from '../../components/SkeltelonLoad/reviewListing'



let booksArray = [];
let temp = []
let loadingPage = true;
let isGenreChanged = true;
class BookListing extends Component {

  state = {
    selectedOption: { "label": config.GENRES_VALUES[0], "value": config.GENRES[0] },
    isSortedDescending: true,
    sortBy: 'Descending',
    search: '',
    loadingPage: true
  }

  componentDidMount() {
    this.props.loadGenreSelectList()
  }

  handleChange = selectedOption => {
    isGenreChanged = true;
    this.setState({ selectedOption });
    this.props.hadleGenreChange(selectedOption);
  };

  fetchReviews = (searchKey, imageUrl) => {
    if (searchKey.indexOf(',') > -1) {
      searchKey = searchKey.split(',')[0]
    }


    const queryParams = [];
    queryParams.push('searchKey=' + searchKey);
    queryParams.push('imageUrl=' + imageUrl);

    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/review',
      search: '?' + queryString
    });
  }

  sortByDate = books => {
    console.log(JSON.stringify(booksArray[0]));

    if (books === undefined) {
    } else {
      sortedList = booksArray.sort((a, b) => {
        return a.review_date.localeCompare(b.review_date);
      });
    }
    isGenreChanged = false;
  };

  sortByAscendingDate = () => {
    this.setState({
      isSortedDescending: !this.state.isSortedDescending
    });
    console.log("@#(_))@(#__@#)_" + this.state.isSortedDescending);
    let aSortedList = booksArray.sort((a, b) => {
      if (!this.state.isSortedDescending) {
        this.setState({
          sortBy: "Descending"
        });
        return a.review_date.localeCompare(b.review_date);
      } else {
        this.setState({
          sortBy: "Ascending"
        });
        return b.review_date.localeCompare(a.review_date);
      }
    });

    booksArray = aSortedList;
    isGenreChanged = false;
  };

  convertToArray = (books) => {
    if (this.state.search == "") {
      booksArray = []
      for (var key in books) {
        booksArray.push(books[key])
      }
      temp = booksArray
    }
  }


  updateSearch = event => {
    this.setState({
      search: event.target.value
    });

    console.log("MLSMD:MSPD:L:SD<:  " + event.target.value);
    booksArray = temp;
    if (event.target.value != "") {
      let filtered = booksArray.filter(book => {
        return book.title.toLowerCase().indexOf(event.target.value) !== -1;
      });

      booksArray = filtered;
    }
    isGenreChanged = false;
  };

  render() {
    const { selectedOption } = this.state;
    if (!this.props.loadReviewPublicationsReducer.loading && isGenreChanged) {
      booksArray = this.props.loadReviewPublicationsReducer
        .topReviewedBooksDetails;
      temp = booksArray;
    }


    let booksList = [];

    for (let i = 0; i < booksArray.length; i++) {
      booksList.push(
        <ReviewBook key={i} bookDetails={booksArray[i]} bookClicked={this.fetchReviews} />
      )
    }

    loadingPage = this.props.loadReviewPublicationsReducer.loading


    return (
      <div>
        <Header />
        <br />
        <Container>
          <h2 className={style.heading}>{config.LANDING_PAGE_HEADING}</h2>
          <br />
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.loadReviewPublicationsReducer.genreFilter}
              />
            </Col>
          </Row>


          <Row>
            <span className={style.spanHeading} onClick={this.sortByAscendingDate}>Sort By Review Date {'  '}
              {this.state.isSortedDescending ?
                <FontAwesomeIcon icon={faAngleDoubleDown} />
                : <FontAwesomeIcon icon={faAngleDoubleUp} />
              }
            </span>
          </Row>
          <br />
          <Row>
            <span className={style.spanHeading} >Filter By Title {'  '}<input className={style.filterInput} value={this.state.search} onChange={this.updateSearch} /></span>
          </Row>
          <br />
          {
            loadingPage ?
              <div>
                <Container>
                  <SkeletonReviewListing width={80} height={200} count={6} />
                  <br />
                  <SkeletonReviewListing width={80} height={200} count={6} />
                </Container>
              </div>
              : null
          }
        </Container>




        <section className={style.books}>
          {booksList}
        </section>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loadReviewPublicationsReducer: state.loadReviewPublicationsReducer,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(jobActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookListing));
