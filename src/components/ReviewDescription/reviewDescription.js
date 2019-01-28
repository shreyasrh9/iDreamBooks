import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import * as style from './reviewDescription.less'
import ReviewBook from './ReviewBlock/reviewBlock'


const bookSynopsisReview = (props) => {
    const reviewDetails = props.review.reviewDetails
    let numberOfPositives = 0;
    let numberOfNegatives = 0;
    let reviewsList = [];

    for (let i = 0; i < reviewDetails.book.review_count; i++) {
        if (reviewDetails.book.critic_reviews[i].pos_or_neg == 'Positive') {
            numberOfPositives += 1
        } else if (reviewDetails.book.critic_reviews[i].pos_or_neg == 'Negative') {
            numberOfNegatives += 1
        }
        reviewsList.push(
            <ReviewBook key={i} reviewDetail={reviewDetails.book.critic_reviews[i]} title={reviewDetails.book.title} />
        )
    }


    return (
        <div>
            <Container>
                <br />
                <Row className={style.reviewDescription}>
                    <Col xs="6" sm="4">
                        <img src={props.imageUrl} />
                    </Col>
                    <Col className={style.reviewHeading}>
                        <h2>{reviewDetails.book.title}</h2>
                        <h4>by {reviewDetails.book.author}</h4>
                        <br />
                        {
                            props.reviewRatingPresent ?
                                <img src={reviewDetails.book.to_read_or_not} />
                                :
                                <div>
                                    <h5>No critic rating</h5>
                                    <h6 className={style.reviewSpan}>Waiting for minimum critic reviews</h6>
                                </div>

                        }
                        <br />
                        <FontAwesomeIcon icon={faQuoteLeft} style={{ float: "left" }} />
                        <br />
                        <span>{reviewDetails.book.critic_reviews[0].snippet}</span>
                        <br />
                        <span className={style.reviewSpan}>- {reviewDetails.book.critic_reviews[0].source}</span>
                        <br />
                        <FontAwesomeIcon icon={faQuoteRight} />
                        <br />
                        <br />
                    </Col>
                </Row>

                <Row className={style.reviewsRow}>
                    <h5>Critics reviews for {reviewDetails.book.title}</h5>
                </Row>
                <Row className={style.reviewsRowSideDescription}>
                    <h6 className={style.reviewsRowSubSideDescription}>All : {reviewDetails.book.review_count}</h6>
                    <h6 className={style.reviewsRowSubSideDescription}>Positive : {numberOfPositives}</h6>
                    <h6 style={{ paddingLeft: "18px" }}>Negative : {numberOfNegatives}</h6>
                </Row>
            </Container>



            <section className={style.reviews} classId="reviews">
                {reviewsList}
            </section>
        </div>
    )
}

export default bookSynopsisReview