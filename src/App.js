import React, {Component} from 'react';

import Products from './Products';
import AddProduct from './addProduct';


/*Root component, container component*/

class App extends Component {
  state = {
    products: [
      {type:'Electronics', name:'Washing machine', shop:'Amazon', price:300, urgency:'High', usage: 'Weekly',id:1},
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



  render() {
    return (
      <div className="AppProduct">
        <div className="container">        
          <div className="productForm product-layout">
            <AddProduct addProduct={this.addProduct}/>
          </div>
        </div>
      </div>
    )};
}

export default App;
