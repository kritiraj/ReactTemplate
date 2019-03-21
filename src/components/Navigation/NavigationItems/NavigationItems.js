import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <span onClick={props.clicked}><NavigationItem link="/home" exact >Home</NavigationItem></span>
        <span onClick={props.clicked}><NavigationItem link="/about">About</NavigationItem></span>
        {/* <NavigationItem link="/auth">Authenticate</NavigationItem> */}
    </ul>
);

export default navigationItems;