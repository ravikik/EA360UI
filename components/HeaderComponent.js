import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {

        super(props)

        this.state= {
              
        }
    }
    render() {
        return (
            <div>
                
               <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark"></nav>
                 <div><a href="http://localhost:3000" className="navbar navbar-expand-md navbar-dark bg-dark">Agile Service Management </a></div>
               </header>    
            </div>
        )
    }
}

export default HeaderComponent;