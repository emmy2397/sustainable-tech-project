import React from 'react';
import './Products.css';


const Products = ({products, deleteProduct}) => {
    const productList =products.map(product => {
    /*returns products with a price higher than 20 -> Change to a different condition like */
       return (
            <div className="product productForm" key={product.id}>
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
                    <button className="buyButton">Buy</button>
                    <button className='deleteButton' onClick={() => {deleteProduct(product.id)}}>Delete</button>
                </div>
                <br/>
            </div>
       )
    })
    return(
        <div className="product-list">
            {productList}
        </div>
    )
}

export default Products;