import React from "react";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout";
import BookConstainer from "./book/BookContainer";
import Login from "./user/Login";
import {SnackbarProvider} from 'notistack';
import Auth from "./Auth";

const App = () => {
    return (
        <SnackbarProvider maxSnack={3}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/">
                            <Auth>
                                <BookConstainer/>
                            </Auth>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </SnackbarProvider>
    );
};

export default App;