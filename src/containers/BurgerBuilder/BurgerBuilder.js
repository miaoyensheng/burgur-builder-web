import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component{

    state ={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0})
    }

    // purchaseHandler = () => {
    //     this.setState((prevState, props) => {
    //         return {
    //             purchasing: !prevState.purchasing
    //         }
    //     });   
    // }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    addIngredientHandler = (type) => {
        // const oldCount = this.state.ingredients[type];
        // const updatedCount = oldCount + 1;
        // const updatedIngredients = {
        //     ...this.state.ingredients
        // };
        // updatedIngredients[type] = updatedCount;
        // const priceAddition = INGREDIENT_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice + priceAddition;
        // this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        // this.updatePurchaseState(updatedIngredients);


        const updatedCount = this.state.ingredients[type] + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        
        this.updatePurchaseState(updateIngredients);

        this.setState((prevState, props)=>{
            return{
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
                ingredients: updateIngredients
            };
        });

        
    }

    removeIngredientHandler = (type) =>{


        const oldCount = this.state.ingredients[type];

        if (oldCount<=0){
            return;
        }

        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        
        this.updatePurchaseState(updateIngredients);

        this.setState((prevState, props)=>{

            // if (prevState.ingredients[type]<=0){
            //     return;
            // }

            // const updatedCount = prevState.ingredients[type] - 1;
            // const updateIngredients = {
            //     ...prevState.ingredients
            // };
            // updateIngredients[type] = updatedCount;

            // this.updatePurchaseState(updateIngredients);

            return{
                totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
                ingredients: updateIngredients
            };
        });      
        
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        };

        // eslint-disable-next-line
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        purchaseCancelled = {this.purchaseCancelHandler}
                        purchaseContinued = {this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice.toFixed(2)}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;