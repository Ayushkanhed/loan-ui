import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";
import LoanRequest from "./Component/Forms/Loanrequest";

function App() {
  return (

      <React.Fragment>
          {/* passsing argumrnts - text="" */}
          <Layout>
              {/*<Todo text="learn React"/>*/}
            <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                      <Login/>
                  </Route>
                  <Route path="/dashboard" >
                      <Dashboard />
                  </Route>
                  <Route path="/loanrequest">
                      <LoanRequest/>
                  </Route>
              </Switch>
            </BrowserRouter>
          </Layout>
      </React.Fragment>

  );
}

export default App;
