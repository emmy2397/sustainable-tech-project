import React, {useState} from 'react';
import './Products.css';

const Products = ({products, deleteProduct, buyProduct}) => {
    const [buyIsOpen, setbuyIsOpen] = useState(true);
    const [deleteIsOpen, setDeleteIsOpen] = useState(true);
    let score = 0;
    // let [score, setScore] = useState(0)
    let openBuy = () => {
        setbuyIsOpen(!buyIsOpen);
    }
    let closeBuy = () => {
        setbuyIsOpen(!buyIsOpen)
    }
   let openDelete = (e) => {
        setDeleteIsOpen(!deleteIsOpen);
        console.log(e.target);
    }
    let closeDelete = () => {
        setDeleteIsOpen(!deleteIsOpen);
    }
    let deleteUserProduct = (e) => {
        console.log(products)
        console.log(e.target.id)
        for(let i = 0; i < products.length; i++){
            console.log(products[i].id);
            if(e.target.id == products[i].id){
                console.log(products[i])
                deleteProduct(products[i].id)
                closeDelete();
                break;
            }
        }
        // deleteProduct(products)
    }
    let buyUserProduct = (e) => {
        for(let i = 0; i < products.length; i++){
            console.log(products[i].shop);
            if(e.target.id == products[i].shop){
                console.log(products[i])
                buyProduct(products[i].shop)
                // deleteProduct(products[i].shop)
                closeBuy();
                break;
            }
        }
        // deleteProduct(products)
    }
    console.log(products)
    let prodScores = [];

    products.forEach((product, i) => {
        console.log(product, i)
        if(product.price)
        {
            if(product.price > 100){
                score+=2
            }
            else if(product.price > 50){
                score+=1
            }
            else{
                    score+=0
            }
        }
        if(product.urgency){
            if(product.urgency === "Low"){
                    score+=2
            }
            else if(product.urgency === "Moderate"){
                score+=1
            }
            else{
                score+=0
            }
        }
        if(product.usage){
            if(product.usage === "More rarely"){
                score+=6
            }
            else if(product.usage === "Monthly"){
                score+=5
            }
            else if(product.usage === "Every few weeks"){
                score+=4
            }
            else if(product.usage === "Weekly"){
                score+=3
            }
            else if(product.usage === "Few times per week"){
                score+=2
            }
            else{
                score+=1
            }
            prodScores.push(score);
            score = 0;

        }
        /* for(let i = 0; i < product[i].length; i++){
            console.log(product[i]);
        } */
    })
    // setScore(score);
    console.log(prodScores)
    for(let i = 0; i<products.length; i++){
        console.log(products[i], prodScores[i])
        products[i].prodScore = prodScores[i]

    }
/*     let deleteKeys = [];
    for (let i = 0; i < products.length; i++){
        deleteKeys.push(i);
    } */
    // console.log(deleteKeys);



    const productList =products.map(product => {
    /*returns products with a price higher than 20 -> Change to a different condition like */
       return (
            <div className="product productForm" key={product.id}>
                <div>Consumescape Score: <span className="arrows">&#8594;</span> {product.prodScore}</div>
                <div>Our advice <span className="arrows">&#8594;</span> {product.prodScore > 5 ? "Don't buy": "Ok to buy"}</div>
                <div>Product type <span className="arrows">&#8594;</span> {product.type}</div>
                <div>Product name <span className="arrows">&#8594;</span> {product.name}</div>
                <div>Shop or link <span className="arrows">&#8594;</span> {product.shop}</div>
                <div>Price <span className="arrows">&#8594;</span> {product.price}</div>
                <div>Urgency <span className="arrows">&#8594;</span> {product.urgency}</div>
                <div>Usage <span className="arrows">&#8594;</span> {product.usage}</div>
                <div>Name <span className="arrows">&#8594;</span> {product.client}</div>
                {/* <div>Email Reminder: {product.reminder30 || product.noReminder30}</div> */}
                <div>E-mail<span className="arrows">&#8594;</span> {product.email}</div>
                <div>Reminder date <span className="arrows">&#x21B4;</span> <br/>{(product.reminderdate) ? `Custom reminder set till ${product.reminderdate}` : "" || (product.reminder30 == "Yes") ? "30 day reminder": "" || `${product.noReminder30} reminder`}</div>
                <div className="userDecision">
                    <button className="buyButton" onClick={openBuy}>Buy</button>
                    <button className={`deleteButton ${product.id}`} onClick={openDelete}>Delete</button>
                </div>
                <br/>
            </div>
       )
    })
    const buyModal = products.map(product => {

                    {/* The Modal to buy a product */}
                return(
                    <div id="myBuyModal" key={product.id} class="modal" style={buyIsOpen ? {display: "none"}: {display: "block"}}>
                        <div class="modal-content">
                            <span class="close" onClick={closeBuy}>&times;</span>
                            <p>Sure you want to Buy this product</p>
                            <div className="userProductLink">
                                <div className="buyLink" id={product.shop} onClick={buyUserProduct}>Yes copy the link to your product</div>
                            </div>
                        </div>
                    </div>
                )
    })
    const deleteModal = products.map(product => {
        {/* The Modal to delete a product */}

        return(
                <div id="myDeleteModal" key={product.id} class="modal" style={deleteIsOpen ? {display: "none"}: {display: "block"}}>
                <div class="modal-content">
                    <span class="close" onClick={closeDelete}>&times;</span>
                    <p>You are about to save and sustain the future</p>
                    <div className="userProductDelete">
                        <button className={`deleteButton `} id={product.id} onClick={deleteUserProduct}>Delete</button>
                        {/* <button className='deleteButton' onClick={() => {deleteProduct(product.id)}}>Delete</button> */}
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="product-list">
            {productList}
            {buyModal}
            {deleteModal}

        </div> 
    )
}

export default Products;