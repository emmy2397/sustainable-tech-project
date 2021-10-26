import React, {Component} from 'react';
import Products from './Products';
import AddProduct from './addProduct';

/*Root component, container component*/

class App extends Component {
  state = {
    products: [
      {type:'Electronics', name:'Washing machine', shop:'Amazon', price:300, urgency:'High', usage: 'Weekly',id:1},
      {type:'Electronics', name:'TV', shop:'https://www.otto.de/p/lg-43up81009lr-lcd-led-fernseher-108-cm-43-zoll-4k-ultra-hd-smart-tv-lg-local-contrast-sprachassistenten-hdr10-pro-lg-thinq-inkl-magic-remote-fernbedienung-1386891678/#variationId=1386891679', price:400, urgency:'Moderate', usage: 'Daily', id:2},
      {type:'Electronics', name:'Computer', shop:'Amazon', price:600, urgency:'Low', usage: 'Few times per week', id:3}
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
        <h1>Consumescape Form Prototype</h1>
        <p class="infoText">Welcome :)</p>

        <div class= "productList">
          <Products deleteProduct={this.deleteProduct} products={this.state.products}/>
        </div>

        <br/><br/>

        <div class="productForm">
          <AddProduct addProduct={this.addProduct}/>
        </div>
        
      </div>
    )};
}

export default App;
