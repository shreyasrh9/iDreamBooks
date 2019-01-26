import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';
import './bookSynopsisReview.css'
import BookImage from '../../components/ReviewBook/BookImage/bookImage'
import ReactTextCollapse from 'react-text-collapse'
import ReviewBook from './ReviewBlock/reviewBlock'

const bookSynopsisReview = (props) => {
    const reviewDetails = props.review.reviewDetails
    let reviewsList = [];

    for (var key in reviewDetails.book.review_count) {
        reviewsList.push(
          <ReviewBook key={key} reviewDetails={reviewDetails} />
        )
      }
    return (
        <div>
            <Container>
                <br />
                <Row>
                    <Col xs="6" sm="4">
                        <img src={props.imageUrl} />
                    </Col>
                    <Col className="reviewHeading">
                        <h2>{reviewDetails.book.title}</h2>
                        <h4>by {reviewDetails.book.author}</h4>
                        <br />
                        {
                            props.reviewRatingPresent ?
                                <img src={reviewDetails.book.to_read_or_not} />
                                :
                                <div>
                                    <h6>No critic rating</h6>
                                    <h7 className="reviewSpan">Waiting for minimum critic reviews</h7>
                                </div>

                        }
                        <br />
                        <a href="#critic_reviews">
                            <h5 className="reviewHeading">See {reviewDetails.book.review_count} Critic Review</h5>
                        </a>
                        <br />
                        <FontAwesomeIcon icon={faQuoteLeft} style={{ float: "left" }} />
                        <br />
                        <span>{reviewDetails.book.critic_reviews[0].snippet}</span>
                        <br />
                        <span className="reviewSpan">- {reviewDetails.book.critic_reviews[0].source}</span>
                        <br />
                        <FontAwesomeIcon icon={faQuoteRight} />
                        <br />
                        <br />
                    </Col>
                </Row>

                <section className="reviews">
                    {booksList}
                </section>
            </Container>
        </div>
    )
}

export default bookSynopsisReview