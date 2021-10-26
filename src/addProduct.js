import React, {Component} from 'react';
import './App.css';

class AddProduct extends Component {
  state= {
      type: null,
      name: null,
      shop: null,
      price: null,
      urgency: null,
      usage: null,
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  /*Has to be split in to one Function for step one that leads to step two and than the real 
  handlesubmit like here, adding the product information / displaying the product information*/
  handleSubmit =(e) => {
      e.preventDefault();
      //console.log(this.state);
      this.props.addProduct(this.state);
  }

render() {
    return (
        <div>
             <form onSubmit={this.handleSubmit}>
                <div class="formBox">
                    <h2>Step 1</h2>
                
                
                        <label htmlFor="name">Product type:</label>
                        <input type="text" id="type" onChange={this.handleChange}/>
                        
                        <label htmlFor="name">Product name:</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                        
                        <label htmlFor="name">Link or name of shop (optional):</label>
                        <input type="text" id="shop" onChange={this.handleChange}/>
                        <br/><br/>
                        <p>Button linking to the next step = missing, but I am afraid to break the "data collection"</p>
                </div>
                <br/>

                <div class="formBox">
                <h2>Step 2</h2>
                    <label htmlFor="name">Price:</label>
                    <input type="number" id="price" onChange={this.handleChange}/>
                    
                    <label htmlFor="name">Urgency:</label>
                    <select name="urgency" id="urgency" onChange={this.handleChange}>
                    {/*Both select inputs have a default  value "not selected" because it is not displaying the top option (value) otherwise */}
                        <option value="Not selected">- Not selected -</option>
                        <option value="High">High</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Low">Low</option>
                    </select>
                    <br/>
                    <label htmlFor="name">Usage:</label>
                    <select name="usage" id="usage" onChange={this.handleChange}>
                        <option value="Not selected">- Not selected -</option>
                        <option value="Daily">Daily</option>
                        <option value="Few times per week">Few times per week</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Every few weeks">Every few weeks</option>
                        <option value="Monthly">Monthly</option>
                        <option value="More rarely">More rarely</option>
                    </select>
                    <br/><br/>
                    <button class="submitButton">Submit</button>
                </div>
            </form>
            
        </div>
          
      )
  }
}

export default AddProduct;
