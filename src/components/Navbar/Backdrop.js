import React from 'react';

import './Backdrop.css';

/*This is the "layer" in front of my main page when the sidebar appears*/
const Backdrop = props => (
  <div className = 'backdrop' tabIndex = {0} onClick={props.click} /> /*When you click on it, the sidebar closes*/
);

export default Backdrop;
