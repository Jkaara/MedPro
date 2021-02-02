import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Overview from "../pages/overview/overview";
import CreateForms from "../pages/create-forms/create-forms";
import FillForms from "../pages/fill-forms/fillforms";
import Layout from "../components/layout";


function Routes() {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <Layout className="h-screen" {...props}>
                        <Switch>
                            <Route path="/" exact component={Overview} />
                            <Route path="/fill" component={FillForms} />
                            <Route path="/create" component={CreateForms} />
                        </Switch>
                    </Layout>
                )}
            />
        </BrowserRouter>
    );
}

export default Routes;
