import React from 'react';
import "./SideBarToggleButton.css";

const SideBarToggleButton = props => (
      <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button-line"/>
      <div className="toggle-button-line"/>
      <div className="toggle-button-line"/>


   </button>
);

export default SideBarToggleButton;