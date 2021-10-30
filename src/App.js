import React, {Component} from 'react';

import Products from './Products';
import AddProduct from './addProduct';



import Privacy from './Privacy';
import Contact from './Contact';


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
          <nav>  
            <div className="nav-title">Consumescape!</div>
              <ul className="nav-menu">
                  <li className="nav-link">About</li>
                  <li className="nav-link">How To</li>
                  <li className="nav-link">Contact</li>
              </ul>
            </nav>    
          <div className= "productList">
            <Products deleteProduct={this.deleteProduct} products={this.state.products}/>
          </div>

          <br/><br/>

          <div className="productForm product-layout">
            <AddProduct addProduct={this.addProduct}/>
          </div>
          
          {/*These to components are here because I did not get to routing yet*/}
          <Contact />
          <Privacy />

          <footer>
            <ul class="linklist">
              <li><a href="./Privacy">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <span>techlabs bootcamp project 2021, Consumescape</span>
          </footer>
        </div>
      </div>
    )};
}

export default App;
