import React, {Component} from 'react';
import FormNavs from './formNavs';

import './App.css';

const subject = "Consumescape reminder"

class AddProduct extends Component {
  state= {
        type: null,
        name: null,
        shop: null,
        price: null,
        urgency: null,
        usage: null,
        tab: 1,
        reminder: false,
        time: 3000,
        pickedyes: false,
        pickedno: false,
        client: null,
        email: null,
        reminderdate:null
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
    // let emailReminder;
    // let x = 1;
    let createEmail = () => {
        alert(`You got a reminder`)
        // emailReminder = setInterval(countDown, 1000);
    }
/*     let countDown = () => {
        this.setState(state=>({
            time : state.time - 1000
        }))
        console.log(x++)
            console.log(this.state.time)
        if(this.state.time === 0){
            clearInterval(emailReminder)
        }
    } */
    if(this.state.reminder){
    setTimeout(createEmail, this.state.time);
    }
}

  handleClick = (e) => {
    let target = e.target.innerText;
    let setreminder = this.state.reminder;
    let pickedyes = this.state.pickedyes;
    let pickedno = this.state.pickedno
    console.log(target);
    if(target === "YES"){
        setreminder = true;
        pickedyes = true;
        pickedno = false
    }
    else if(target === "NO"){
        setreminder = false;
        pickedno = true;
        pickedyes = false;
    }
    this.setState({
        reminder: setreminder,
        pickedyes: pickedyes,
        pickedno: pickedno
    });
    
  }

  
  formNavs = (currentStep) => {
    console.log(currentStep)
    switch(currentStep){
        case(1):
            this.setState({
                tab : 1
            })
        break;
        case(2):
            this.setState({
                tab : 2
            })
        break;
        case(3):
            this.setState({
                tab : 3
            })
        break;
        case(4):
            this.setState({
                tab : 4
            })
        break;
        default:
    }
  }
  

render() {
    return (
            <div>

                <nav>  
                <div class="nav-title">Consumescape!</div>
                <ul class="nav-menu">
                    <li class="nav-link">About</li>
                    <li class="nav-link">How To</li>
                    <li class="nav-link">Contact</li>
                </ul>
                </nav>

                <FormNavs formNavs={this.formNavs}/>
             <form onSubmit={this.handleSubmit}>
                <div className="formBox tab1" style={this.state.tab === 1 ? {display : "block"}: {display : "none"}}>
                    <h2>step 1 - should I buy or should I go?</h2>
                        <p>Your point of view, should I buy this or that or should I just let it be? I'm here to help you in your decision making, but before I can do so, I need you to tell me a little about the product your struggling whether to buy or not.</p>

                        <label htmlFor="name">Which kind of product do you want to buy?</label>
                        <input type="text" id="type" placeholder="Product type" onChange={this.handleChange}/>
                        
                        <label htmlFor="name">Product name:</label>
                        <input type="text" id="name" placeholder="Product name" onChange={this.handleChange}/>
                        
                        <label htmlFor="name">Link or name of shop (optional):</label>
                        <input type="text" id="shop" placeholder="Link or name of shop" onChange={this.handleChange}/>
                        <br/><br/>
                        <button className="submitButton">Submit</button>
                    </div>

                    <div class="formBox tab2" style={this.state.tab ===2 ? {display : "block"}: {display: "none"}}>
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

                    <div className="formBox tab3" style={this.state.tab === 3 ? {display : "block"}: {display : "none"}}>
                        <h2>Step 4</h2>
                    
                            <label htmlFor="name">Add a 30 day reminder</label>
                            <div className="reminder30">
                                <div className={`reminderBox ${this.state.pickedyes ? "activeAnswer" : ""}`} onClick={this.handleClick} value="yes">
                                    <div className="reminderAns">YES</div>
                                </div>
                                <div className={`reminderBox ${this.state.pickedno ? "activeAnswer" : ""}`} onClick={this.handleClick} value="no">
                                    <div className="reminderAns" value="no">NO</div>
                                </div>
                            </div>
                            <br/><br/>
                    </div>

                    <div className="formBox tab4" style={this.state.tab === 4 ? {display : "block"}: {display : "none"}}>
                        <h2>Step 5</h2>

                            <label htmlFor="name">Please enter your name:</label>
                            <input type="text" id="client" onChange={this.handleChange}/>
                            
                            <label htmlFor="name">Please enter your e-mail:</label>
                            <input type="text" id="email" onChange={this.handleChange}/>
                            <br/>
                            <label htmlFor="name">When do you want to be reminded?</label>
                            <input type="date" id="reminderdate" onChange={this.handleChange}/>
                            <br/>
                            <input type="hidden" name="subject" value={subject} />
                            <input type="hidden" name="access_token" value="tic9kh2ltjs2gqhmq6uio654" />
                            <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                            <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
                            
                            <p><a href="https://postmail.invotes.com/send" className="submitButton">Create reminder</a></p>
                            <br/><br/>
                    </div>

                </form>
    

            <footer>
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <span>techlabs bootcamp project 2021, Consumescape</span>
            </footer>
            
            </div>
          
      )
  }
}


export default AddProduct;
