import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as jobActions from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/header'
import ReviewDescription from '../../components/ReviewDescription/reviewDescription'
import Skeleton from 'react-loading-skeleton';


let imageUrl = ''
class BookReviewDetails extends Component {

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
            if (this.props.loadReviewReducer.reviewDetails.book.to_read_or_not === undefined) {
                reviewRatingPresent = false
            }
        }
        return (
            <div>
                <Header />

                {this.props.loadReviewReducer.loadingReview ?
                    <ReviewDescription review={this.props.loadReviewReducer} imageUrl={imageUrl} reviewRatingPresent={reviewRatingPresent} />
                    : <Skeleton width={200} height={500} count={8} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookReviewDetails));