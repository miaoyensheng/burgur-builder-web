import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return(
        <Aux>
            <div>
                <Toolbar/>
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;