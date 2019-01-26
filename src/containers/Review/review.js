import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as jobActions from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../containers/Header/header'
import BookSynopsisReview from '../../components/BookSynopsisReview/bookSynopsisReview'

let imageUrl = ''
class Review extends Component {

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        let searchKey = '';

        for (let param of query.entries()) {
            if (param[0] === 'searchKey') {

                searchKey = param[1]

            } else if (param[0] === 'imageUrl') {

                imageUrl = param[1]

            }



            this.props.fetchReviews(searchKey)
        }

    }

    render() {
        let reviewRatingPresent = true
        if (this.props.loadReviewReducer.loadingReview) {
            if(this.props.loadReviewReducer.reviewDetails.book.to_read_or_not === undefined){
                reviewRatingPresent = false
            }
        }
        return (
            <div>
                <Header />
                {this.props.loadReviewReducer.loadingReview ?
                    <BookSynopsisReview review={this.props.loadReviewReducer} imageUrl={imageUrl} reviewRatingPresent={reviewRatingPresent}/>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loadReviewReducer: state.loadReviewReducer,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(jobActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));