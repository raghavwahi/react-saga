import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { calculatePreprationTime } from "./../Utils/Util";

class Recipe extends React.Component {
  render() {
    const preprationTime = calculatePreprationTime(this.props.preprationTime);
    return (
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {preprationTime}
              </Card.Subtitle>
              <Card.Text>
                <Link className="link-primary" to={`recipe/${this.props.id}`}>
                  More details
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Recipe;
