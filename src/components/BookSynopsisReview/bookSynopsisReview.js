import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './bookSynopsisReview.css'
import ReviewBook from './ReviewBlock/reviewBlock'


const bookSynopsisReview = (props) => {
    const reviewDetails = props.review.reviewDetails
    let reviewsList = [];

    for (let i = 0; i < reviewDetails.book.review_count; i++) {
        reviewsList.push(
            <ReviewBook key={i} reviewDetail={reviewDetails.book.critic_reviews[i]} title={reviewDetails.book.title} />
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
                                    <h5>No critic rating</h5>
                                    <h6 className="reviewSpan">Waiting for minimum critic reviews</h6>
                                </div>

                        }
                        <br />
                        <a href="#reviews">
                            <h4 className="reviewHeading">See {reviewDetails.book.review_count} Critic Review</h4>
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


            </Container>
            <section className="reviews" classId="reviews">
                {reviewsList}
            </section>
        </div>
    )
}

export default bookSynopsisReview