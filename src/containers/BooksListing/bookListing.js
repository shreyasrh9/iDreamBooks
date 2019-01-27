import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import './bookListing.css'
import * as config from '../../config'
import * as jobActions from '../../actions'
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import ReviewBook from '../../components/ReviewBook/reviewBook'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Header from '../../containers/Header/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

let booksArray = [];
let temp = []
class BookListing extends Component {

  state = {
    selectedOption: { "label": config.GENRES_VALUES[0], "value": config.GENRES[0] },
    isSortedDescending: true,
    sortBy: 'Descending',
    search: ''
  }

  componentDidMount() {
    this.props.loadGenreSelectList()
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.hadleGenreChange(selectedOption)
  }

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

  sortByDate = (books) => {


    console.log(JSON.stringify(booksArray[0]))

    if (books === undefined) {

    } else {
      sortedList = booksArray.sort((a, b) => {
        return a.review_date.localeCompare(b.review_date)
      }
      )
    }

  }

  sortByAscendingDate = () => {
    this.setState({
      isSortedDescending: !this.state.isSortedDescending
    })
    console.log("@#(_))@(#__@#)_" + this.state.isSortedDescending)
    let aSortedList = booksArray.sort((a, b) => {
      if (!this.state.isSortedDescending) {
        this.setState({
          sortBy: 'Descending'
        })
        return a.review_date.localeCompare(b.review_date)
      } else {
        this.setState({
          sortBy: 'Ascending'
        })
        return b.review_date.localeCompare(a.review_date)
      }
    }
    )

    booksArray = aSortedList

  }

  convertToArray = (books) => {
    if (booksArray.length == 0) {
      for (var key in books) {
        booksArray.push(books[key])
      }
      temp = booksArray
    }
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
    
    console.log("MLSMD:MSPD:L:SD<:  "+event.target.value)
    if (event.target.value == '') {
      booksArray = temp
    } else {

      let filtered = booksArray.filter((book) => {
        return book.title.toLowerCase().indexOf(event.target.value) !== -1
      }
      )

      booksArray = filtered
    }

  }

  render() {
    const { selectedOption } = this.state;
    this.convertToArray(this.props.loadReviewPublicationsReducer.topReviewedBooksDetails)

    let booksList = [];

    for (let i = 0; i < booksArray.length; i++) {
      booksList.push(
        <ReviewBook key={i} bookDetails={booksArray[i]} bookClicked={this.fetchReviews} />
      )
    }

    return (
      <div>
        <Header />
        <br />
        <Container>
          <h2 className="heading">{config.LANDING_PAGE_HEADING}</h2>
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
            <span class="spanHeading" onClick={this.sortByAscendingDate}>Sort By Review Date {'  '}
              {this.state.isSortedDescending ?
                <FontAwesomeIcon icon={faAngleDoubleDown} />
                : <FontAwesomeIcon icon={faAngleDoubleUp} />
              }
            </span>
          </Row>

          <Row>
            <input className="filterInput" value={this.state.search} onChange={this.updateSearch} />
          </Row>

        </Container>
        <section className="books">
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
