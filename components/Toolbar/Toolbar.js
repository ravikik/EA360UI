import React from 'react';
import SideBarToggleButton from '../Sidebar/SideBarToggleButton';
import './Toolbar.css';



const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">

       <div>
           
           <SideBarToggleButton click={props.sideBarbuttonClickHandler}/>
       
       </div>
       <div className="toolbar_logo"><a href="/">AGILE SERVICE MANAGEMENT</a></div>
       <div className="spacer"/>
       <div className="toolbar_navigation_lists">
           <ul> 
               <li><a href="/change">Change</a></li>
               <li><a href="/incident">Incident</a></li>
               <li><a href="/userStories">User Stories</a></li>
               <li><a href="/tasks">Tasks</a></li>
               <li><a href="/signout">Sign Out</a></li>

           </ul>

       </div>



    </nav>


  </header>



);

export default Toolbar;