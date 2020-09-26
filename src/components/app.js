import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home-page";
import IncomePage from "../pages/income-page";
import CategoryPage from "../pages/category-page";
import PieChartPage from "../pages/pie-chart-page";
import BarChartPage from "../pages/bar-chart-page";
import Header from "./header";
import Footer from "./footer";

/**
 * The app is responsible for routing and loading
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/income">
          <IncomePage />
        </Route>

        <Route path="/category">
          <CategoryPage />
        </Route>

        <Route path="/pie">
          <PieChartPage />
        </Route>

        <Route path="/bar">
          <BarChartPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
