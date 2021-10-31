import React, {Component} from "react";
import './Products.css';

/*let beltscore=0
let Scores = [
    {
        agescore: agescore.value 
    },
    {
        beltscore: beltscore.value
    },
];
let totalscore=0*/


const Scoring = ({products}) => {
    //oder = ({Ninjas}): Wird schon in der Klammer destructured
    //console.log(this.props);
    // functional components: nur "props", container components mit state: "this.props"
    const pricedProducts =products.map(product => {
        /* if Bedingung*/
        if (product.price >200) {
            let pricescore=2
            return ( 
                <div className="product" key={product.id}>
                    Pricescore: {pricescore}
                    Dont buy
                </div>)
        } else if (product.price >100 && product.price<200){
            let pricescore=1
            return ( 
                <div className="product" key={product.id}>
                    Pricescore: {pricescore}
                    Rent
                </div>)
        } else {
            return (
                <div className="product" key={product.id}>
                    Pricescore: {pricescore}
                    Buy
                </div>)
        }
    })
    /*const beltedNinjas =ninjas.map(ninja => {
        
        if (ninja.belt =="black") {
            let beltscore=2
        return ( 
            <div className="ninja" key={ninja.id}>
                Beltscore: {beltscore}
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
            </div>)
        } else if (ninja.belt =='red'){
            let beltscore=1
            return ( 
                <div className="ninja" key={ninja.id}>
                    Beltscore: {beltscore}
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                </div>)            
        } else {
            return ( 
                <div className="ninja" key={ninja.id}>
                    Beltscore: {beltscore}
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                </div>)
        }
       
    })
    const Scores = [beltscore, agescore];
    const totalscore = Scores.reduce((beltscore, agescore) => beltscore+agescore);*/
                
       
    
    return(
        <div className="product-list">
            {pricedProducts}
            {/*{beltedNinjas}
            {beltscore}
            {agescore}
            {totalscore}*/}
        </div>
    )
}

export default Scoring;