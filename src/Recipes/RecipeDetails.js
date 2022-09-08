import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { calculatePreprationTime } from "../Utils/Util";
import actions from "./actions";

const RecipeDetails = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchRecipe({ id: params.id });
}, []);

  const navigateBackHandler = () => {
    navigate(-1);
  };

  return (
    <Card>
      <Card.Header>
        <Card.Text>Recipe Details</Card.Text>
        <Button variant="primary" onClick={navigateBackHandler}>
          Go Back
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.recipe.title}</Card.Title>
        <Card.Subtitle>
          {calculatePreprationTime(props.recipe.prepration_time)}
        </Card.Subtitle>
        <Card.Text>{props.recipe.items}</Card.Text>
        <Card.Text>{props.recipe.steps}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={navigateBackHandler}>
          Go Back
        </Button>
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    recipe: state.recipes.recipe,
  };
};

const mapDispatchToProps = {
  fetchRecipe: actions.fetchRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
