import React from 'react';
import './Products.css';


const Products = ({products, deleteProduct}) => {
    const productList =products.map(product => {
    /*returns products with a price higher than 20 -> Change to a different condition like */
       return  product.price > 20 ? (
            <div className="product" class = "productForm" key={product.id}>
                <div>Product type: {product.type}</div>
                <div>Product name: {product.name}</div>
                <div>Shop or link: {product.shop}</div>
                <div>Price: {product.price}</div>
                <div>Urgency: {product.urgency}</div>
                <div>Usage: {product.usage}</div>
                <button class='deleteButton' onClick={() => {deleteProduct(product.id)}}>Delete product</button>
                <br/>
            </div>
       ) : null;
    })
    return(
        <div className="product-list">
            {productList}
        </div>
    )
}

export default Products;