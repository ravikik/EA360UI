import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListQueuesComponent from './components/ListQueuesComponent';

//import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import AddQueueComponent from './components/AddQueueComponent';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/Sidebar/SideBar';
import { render } from '@testing-library/react';


class App extends Component {
     state = {
     sideBarOpen: true


  };


  sideBarClickHandler = () => {
    this.setState((prevState) => {
     return {sideBarOpen: !prevState.sideBarOpen};


    });

  };

  render () {
    let sideBar;
    if (this.state.sideBarOpen) {
      sideBar = <SideBar />
    }
    return (
      <div style={{height: '100%'}}>
      <body className="App-body" />
      <Toolbar sideBarbuttonClickHandler={this.sideBarClickHandler} />
       {sideBar}
    
      <div className="App">
    
    
        <Router>
            
             <div className="container">
                 <Switch>
                     <Route path = "/" exact component = {ListQueuesComponent}></Route>
                     <Route path = "/listQueues" component = {ListQueuesComponent}></Route>
                     <Route path = "/addQueue" component = {AddQueueComponent}></Route>

                     
                 </Switch>
                </div>
       


        </Router>  

      
      </div>  

    </div>

  );
          
            };
          };

export default App;
