import React from "react";
import Products from './Products';
import './Products.css';


/* counter did not work, as well as single scores that should have been summed up
let pricescore = 0;*/



/*const Scoring = ({products}) => {*/
    
    const scoredProducts =products.map(product => {
        /*DO NOT BUY*/
        if (product.price >200 || product.urgency=="Low" || product.usage=="Monthly" || product.usage =="More rarely") {
            /*let pricescore=2*/
            return ( 
                <div className="product" key={product.id}>
                    {/*Pricescore: {pricescore}*/}
                    <p>I recommend you not to buy the product. Please consider other options like renting it!</p>
                </div>)
        /*DO BUY*/
        } else if (product.price <100 || product.urgency=="High" || product.usage=="Daily" || product.usage =="Few times per week"){
            /*let pricescore=0*/
            return ( 
                <div className="product" key={product.id}>
                    {/*Pricescore: {pricescore}*/}
                    <p>It is okay to buy the product. Nevertheless, I recommend to pay attention to good quality and sustainable production.</p>
                </div>)
        /*INDECISIVE*/
        } else {
            /*Option for (product.price >100 && <200|| product.urgency=="Moderate" || product.usage=="Weekly" || product.usage =="Every few weeks" */
             /*let pricescore=1*/
            return (
                <div className="product" key={product.id}>
                    {/*Pricescore: {pricescore}*/}
                    <p>Considering your input, I would recommend to think twice before buying the product. Maybe wait 30 days and decide then!</p>
                </div>)
        }
    })
         
    /*const Scores = [pricescore, agescore];
    const totalscore = Scores.reduce((beltscore, agescore) => beltscore+agescore);*/
                
       
    
    /*return(
        <div className="product-list">
            {scoredProducts}
            {/*{beltedNinjas}
            {beltscore}
            {agescore}
            {totalscore}}
        </div>
    )*/
/*}*/

export default scoredProducts;