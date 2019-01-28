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
        // Extracting query.entries
        for (let param of query.entries()) {
            if (param[0] === 'searchKey') {

                searchKey = param[1]

            } else if (param[0] === 'imageUrl') {

                imageUrl = param[1]

            }

            // This loads the reviews based on the search key
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
                {/* Loadinging the imported header component */}
                <Header />

                {/* Loadinging the ReviewDescription component */}
                {this.props.loadReviewReducer.loadingReview ?
                    <ReviewDescription review={this.props.loadReviewReducer} imageUrl={imageUrl} reviewRatingPresent={reviewRatingPresent} />
                    : <Skeleton width={200} height={500} count={8} />
                }

            </div>
        )
    }
}

// Selecting the data from the store that the connected BookReviewDetails component needs
const mapStateToProps = (state, ownProps) => {
    return {
        loadReviewReducer: state.loadReviewReducer,
    }
}

// Dispatching actions to the store. : Job actions present in the location ../../actions 
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(jobActions, dispatch);
}

// Wrapped withRouter HOC to get access to the history object’s properties and the closest <Route>'s match
// connect() function connects BookReviewDetails component to a Redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookReviewDetails));