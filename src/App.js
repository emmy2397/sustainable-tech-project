import React, {Component} from 'react';

import Products from './Products';
import AddProduct from './addProduct';
/*import scoredProducts from './Scoring';*/


/*Root component, container component*/

class App extends Component {
  state = {
    products: [
      /*{type:'Electronics', name:'Washing machine', shop:'Amazon', price:300, urgency:'High', usage: 'Weekly',id:1},*/
    ]
  }

  addProduct = (product) => {
    product.id =Math.random();
    let products = [...this.state.products, product];
    this.setState({
      products: products
    });
  }
  deleteProduct = (id) => {
    let products = this.state.products.filter(product => {
      return product.id !== id
    });
    this.setState({
      products: products
    });
  }
  buyProduct = (shop) => {

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(shop);
    alert("Link/Shop Copied:   Paste in the address bar");
  
}



  render() {
    return (
      <div className="AppProduct">
  
          <div className= "productList">
            <div className="productListDescription">
              <h2>Here is where you find your <span>consumables</span></h2>
            </div>
            <Products deleteProduct={this.deleteProduct} buyProduct={this.buyProduct} products={this.state.products}/>
          </div>

          <br/><br/>

          <div className="productForm product-layout">
            <AddProduct addProduct={this.addProduct}/>
            {/*<scoredProducts/>*/}
          </div>
        </div>
      
    )};
}

export default App;
