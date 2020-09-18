import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../../routes/providerRoutes'
import Header from '../../layouts/provider/header'
import Footer from '../../layouts/generic/footer'

export class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default index
