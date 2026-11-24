import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';
import { Link } from "react-router-dom";

const NotFound = () => {
  return(
    <div className={Style.noFound}>
      <Container>
        <Row>
          <Col>
            <div className={Style.content}>
              <div className={Style.statusCode}>404</div>
              <h1>Page Not Found</h1>
              <div className={Style.noFoundBtn}>
                <Link to="/" className="notFound__btn notFound__btn--primary"> Back to Home </Link>
                <button type="button" className="notFound__btn notFound__btn--secondary" onClick={() => window.history.back()} > Go Back </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NotFound;