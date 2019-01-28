import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import * as style from './reviewedBookListing.less'
import * as config from '../../config'
import * as jobActions from '../../actions'
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import ReviewedBook from '../../components/ReviewedBook/reviewedBook'
import { withRouter } from 'react-router-dom';
import Header from '../Header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

import SkeletonReviewListing from '../../components/SkeltelonLoad/reviewedListingSkeleton'



let booksArray = [];
let temp = []
let loadingPage = true;
let isGenreChanged = true;
class ReviewedBookListing extends Component {
  // Component state initialized
  state = {
    selectedOption: { "label": config.GENRES_VALUES[0], "value": config.GENRES[0] },
    isSortedDescending: true,
    sortBy: 'Descending',
    search: '',
    loadingPage: true
  }

  // Invoked immediately after ReviewedBookListing component is mounted 
  componentDidMount() {
    // Calling the function which calls the epic with a type to load options for genre select box
    this.props.loadGenreSelectList()
  }

  // Called on change of the genre select box to load the corresponding reviews of genre books
  handleChange = selectedOption => {
    isGenreChanged = true;
    this.setState({ selectedOption });
    this.props.hadleGenreChange(selectedOption);
  };


  // Fetching reviews of selected book and navigating to review details
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

  // Sorting the books
  sortByDate = () => {
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

  // Filtering the books 
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

    // Building ReviewedBook components
    for (let i = 0; i < booksArray.length; i++) {
      booksList.push(
        <ReviewedBook key={i} bookDetails={booksArray[i]} bookClicked={this.fetchReviews} />
      )
    }

    loadingPage = this.props.loadReviewPublicationsReducer.loading


    return (
      <div>
        <Header/>
        <br />
        <Container>
          <h2 className={style.heading}>{config.LANDING_PAGE_HEADING}</h2>
          <br />
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              {/* Genre select box */}
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.loadReviewPublicationsReducer.genreFilter}
              />
            </Col>
          </Row>

          {/* Sorting and filter components */}
          <Row>
            <span className={style.spanHeading} onClick={this.sortByDate}><b>Sort By Review Date {'  '}
              {this.state.isSortedDescending ?
                <FontAwesomeIcon icon={faAngleDoubleDown} />
                : <FontAwesomeIcon icon={faAngleDoubleUp} />
              }
            </b>
            </span>
          </Row>
          <br />
          <Row className={style.filterRow}>
            <span className={style.spanHeading} ><b>Filter By Title {'  '}</b><input className={style.filterInput} value={this.state.search} onChange={this.updateSearch} /></span>
          </Row>
          <br />
          {/* Skeleton componenet before loading review book lists  */}
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
        
        {/* Populating reviewed book lists */}
        <section className={style.books}>
          {booksList}
        </section>

      </div>
    )
  }
}



// Selecting the data from the store that the connected ReviewedBookListing component needs
const mapStateToProps = (state, ownProps) => {
  return {
    loadReviewPublicationsReducer: state.loadReviewPublicationsReducer,
  }
}


// Dispatching actions to the store. : Job actions present in the location ../../actions 
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(jobActions, dispatch);
}

// Wrapped withRouter HOC to get access to the history object’s properties and the closest <Route>'s match
// connect() function connects ReviewedBookListing component to a Redux store

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewedBookListing));