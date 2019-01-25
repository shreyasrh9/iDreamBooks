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

class BookListing extends Component {

  state = {
    selectedOption: { "label": config.GENRES_VALUES[0], "value": config.GENRES[0] }
  }

  componentDidMount() {
    this.props.loadGenreSelectList()
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    const bookDetails = this.props.loadReviewPublicationsReducer.topReviewedBooksDetails
    let booksList = [];
    console.log(bookDetails)

    for (var key in bookDetails) {
      
      booksList.push(
        <ReviewBook bookDetails={bookDetails[key]} />
      )
    }

    console.log(booksList)


    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookListing);