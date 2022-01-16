import React from 'react';
import './SideBar.css'


const SideBar = props =>(

    <nav className="sideBar">
         <ul>
           <li>
               <li><a href="/change" class="w3-bar-item w3-button">Change</a></li>
               <li><a href="/incident">Incident</a></li>
               <li><a href="/userStories">User Stories</a></li>
               <li><a href="/tasks">Tasks</a></li>
              
 

           </li>

         </ul>

    </nav>
   

);


export default SideBar;