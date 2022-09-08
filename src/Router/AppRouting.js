import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFoundPage from "../Pages/NotFoundPage";
import HomePage from "../Pages/HomePage";
import RecipeDetailsPage from "../Pages/RecipeDetailsPage";

class AppRouting extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRouting;
