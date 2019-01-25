import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import './bookListing.css'
import * as config from '../../config'
import * as jobActions from '../../actions'
import { bindActionCreators } from 'redux';

class BookListing extends Component {

  componentDidMount() {
    this.props.loadGenreSelectList()
  }

  render() {
    return (
      <Container>
        <h2 className="heading">{config.LANDING_PAGE_HEADING}</h2>

      </Container>
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