import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Alert from "./routes/Alert/Alert";
import Market from "./routes/Market/Market";
import Portfolio from "./routes/Portfolio/Portfolio";
import Settings from "./routes/settings/settings";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollToTop from "./utils/ScrollToTop";
const Routes = () => {
  const location = useLocation();
  return (
    <ScrollToTop>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Market} />
                <Route exact path="/safexchange" component={Market} />
                <Route
                  exact
                  path="/safexchange/portfolio"
                  component={Portfolio}
                />
                <Route exact path="/safexchange/alert" component={Alert} />
                <Route
                  exact
                  path="/safexchange/settings"
                  component={Settings}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </ScrollToTop>
  );
};

export default Routes;
