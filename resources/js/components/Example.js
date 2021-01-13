import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//pages
//import About from "./pages/About";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import CreateList from "./pages/CreateList";
import View from "./pages/view";
import Taskcreate from "./pages/Taskcreate";
import register from "./pages/register";


class Example extends React.Component{
    state ={
        public_url:"/test/",
    };
    render(){
    return (
        <div className='container'>
          <Router>
            <Header />
            <Switch>
              
              <Route exact path={`/test/contact`}>
                <Contact />
              </Route>
              <Route exact path={`${this.state.public_url}about`}>
                <About />
              </Route>
              <Route exact path={`${this.state.public_url}`}>
                <Home/>
              </Route>
              <Route
                  path={`/test/view/:id`}
                  exact={true}
                  component={View}
                />
                <Route
                  path={`/test/taskcreate/:id`}
                  exact={true}
                  component={Taskcreate}
                />
                <Route
                  path={`/test/register`}
                  exact={true}
                  component={register}
                />
              <Route exact path={`${this.state.public_url}createNew`}>
                <CreateList/>
              </Route>
            </Switch>
          </Router>
        </div>

    );
}
}


export default Example;



if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
