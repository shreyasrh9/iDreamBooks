import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { Row, Col } from 'reactstrap'

const reviewListing = (props) => {
    return (
        <Row>
            <Col>
                <Skeleton width={props.width} height={props.height} count={props.count} />
            </Col>
            <Col>
                <Skeleton width={props.width} height={props.height} count={props.count} />
            </Col>

        </Row>
    )
}

export default reviewListing