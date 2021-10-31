import React from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Alert from './Routes/Alert/Alert'
import Market from './Routes/Market/Market'
import Portfolio from './Routes/Portfolio/Portfolio'
import Settings from './Routes/Settings/Settings'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ScrollToTop from '../utils/ScrollToTop'
import Home from './Routes/Home/Home'
const Routes = () => {
    const location = useLocation();
    return (
        <ScrollToTop>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={1000}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path="/safexchange" component={Home}/> 
                            <Route exact path="/safexchange/market" component={Market} />
                            <Route exact path="/safexchange/portfolio" component={Portfolio} />
                            <Route exact path="/safexchange/alert" component={Alert} />
                            <Route exact path="/safexchange/settings" component={Settings} />
                        </Switch>

                    </CSSTransition>
                </TransitionGroup>
            )} />
        </ScrollToTop>
    )
}

export default Routes
