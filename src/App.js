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
        <nav>  
          <div class="nav-title">Consumescape!</div>
            <ul class="nav-menu">
                <li class="nav-link">About</li>
                <li class="nav-link">How To</li>
                <li class="nav-link">Contact</li>
            </ul>
          </nav>    
        <div className= "productList">
          <Products deleteProduct={this.deleteProduct} products={this.state.products}/>
        </div>

        <br/><br/>

        <div className="productForm product-layout">
          <AddProduct addProduct={this.addProduct}/>
        </div>
        
        <footer>
          <ul>
            <li><a href="privacy.html">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <span>techlabs bootcamp project 2021, Consumescape</span>
        </footer>
      </div>
    )};
}

export default App;
