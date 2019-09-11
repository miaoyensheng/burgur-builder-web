import React from 'react';
import classes from './Toolbar.module.css';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            <ul style={{display:'flex', alignItems: 'center'}}>
                <li style={{display:'block'}} ><a href='/#'>Menu</a></li>
                <li style={{display:'block'}} ><a href='/#'>Careers</a></li>
                <li style={{display:'block'}} ><a href='/#'>About Us</a></li>
            </ul>
        </nav>
    </header>
);


export default toolbar;
