import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Card>
      <Card.Header>Not Found</Card.Header>
      <Card.Body>
        <Card.Title>Error 404. Page Not Found</Card.Title>
        <Card.Text>
          We could not find the page. <Link className="link-primary" to="/">Click here</Link> to go to
          home page.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NotFoundPage;
