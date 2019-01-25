import React from 'react';
import BookImage from '../ReviewBook/BookImage/bookImage'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './reviewBook.css';
import Moment from 'react-moment';

const reviewBook = (props) => (
    <div className="reviewBook" onClick={props.clicked}>
        <Row>
            <Col>
                <BookImage
                    imageLink={props.bookDetails.review_publication_logo}
                    title={props.bookDetails.title}
                    author={props.bookDetails.author} />
            </Col>
            <Col style={{textAlign:"left"}}>
                <FontAwesomeIcon icon={faQuoteLeft} style={{ float: "left" }} />
                <br />
                <span>{props.bookDetails.review_snippet}</span>
                <br />
                <FontAwesomeIcon icon={faQuoteRight} style={{ float: "right" }} />
                <br />
                <h3>{props.bookDetails.review_publication_name}</h3>
                <span className="rating">Rating  </span><img className="rating_image" src={props.bookDetails.review_rating_image}/>
                <br />
                <span className="rating">Reviewed on { '  ' }
                    <Moment format="MMM DD YYYY">
                        {props.bookDetails.review_date}
                    </Moment>
                </span>
            </Col>
        </Row>
    </div>
);

export default reviewBook;