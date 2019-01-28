import React from 'react';
import * as style from './reviewBlock.less';
import Moment from 'react-moment';
import { Row, Col } from 'reactstrap'
import StarRatings from 'react-star-ratings'

const reviewBlock = (props) => {
    console.log(JSON.stringify(props))
    return (
        <div className={style.reviewBlock}>
            <Row>
                <Col >
                    <h6>
                        {props.reviewDetail.source}
                    </h6>
                    <span>Reviewed on <Moment format="MMM DD YYYY">
                        {props.reviewDetail.review_date}
                    </Moment></span>
                </Col>
                <Col>
                    <img className={style.rating_image} src={props.reviewDetail.smiley_or_sad} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <span>
                            {props.reviewDetail.snippet}
                        </span>
                    </div>

                    <StarRatings
                        rating={props.reviewDetail.star_rating}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor="#0c233f"
                    />

                    <div>
                        <span>
                            <a target="_blank" href={props.reviewDetail.review_link}><span className={style.fullReviewLink}>Read Full Review of {props.title}</span></a>
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default reviewBlock;