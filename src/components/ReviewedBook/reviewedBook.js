import React from 'react';
import BookImage from '../ReviewedBook/BookImage/bookImage'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import * as style from './reviewedBook.less';
import Moment from 'react-moment';

const reviewedBook = (props) => (
    <div className={style.reviewBook} onClick={() => props.bookClicked(props.bookDetails.isbns, props.bookDetails.review_publication_logo)}>
        <Row>
            <Col>
                <BookImage
                    imageLink={props.bookDetails.review_publication_logo}
                    title={props.bookDetails.title}
                    author={props.bookDetails.author} />
            </Col>
            <Col style={{ textAlign: "left" }}>
                <FontAwesomeIcon icon={faQuoteLeft} style={{ float: "left" }} />
                <br />
                <span>{props.bookDetails.review_snippet}</span>
                <br />
                <FontAwesomeIcon icon={faQuoteRight} style={{ float: "right" }} />
                <br />
                <h3>{props.bookDetails.review_publication_name}</h3>
                <span className={style.rating}><b>Rating</b>  </span><img className={style.rating_image} src={props.bookDetails.review_rating_image} />
                <br />
                <span className={style.rating}><b>Reviewed on {'  '}</b>
                    <Moment format="MMM DD YYYY">
                        {props.bookDetails.review_date}
                    </Moment>
                </span>
            </Col>
        </Row>
    </div>
);

export default reviewedBook;