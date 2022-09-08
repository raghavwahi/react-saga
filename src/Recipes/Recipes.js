import React from "react";
import { connect } from "react-redux";

import actions from "./actions";
import Recipe from "./Recipe";

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchRecipes();
  }

  render() {
    const recipes = this.props.recipes.map((recipe) => {
      return <Recipe id={recipe.id} key={recipe.id} preprationTime={recipe.prepration_time} title={recipe.title} />;
    });
    return <>{recipes}</>;
  }
}

const mapStateToProps = (state) => {

  return {
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = {
  fetchRecipes: actions.fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
