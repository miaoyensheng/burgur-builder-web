import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {

            // Array(X) creates an empty array with x spaces
            // map(_, i) where i is the index

            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        
        // where arr is the previous value and el is the current value and the second argument is the initial array that we start with
        // reduces and combine multiple arrays into one array
        .reduce((arr, el) => {
            // console.log(arr)
            // console.log(el)
            // console.log('\n\n')
            return arr.concat(el)
        }, [])

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients</p>;
        }

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;