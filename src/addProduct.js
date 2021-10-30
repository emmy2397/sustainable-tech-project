import React, {Component} from 'react';
import FormNavs from './formNavs';

import './App.css';
import plant from './plant-smiling.png';

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
        <div id="div-form">
            <FormNavs formNavs={this.formNavs}/>
            {/*It would be cool if all the first 6 inputs (before the submit-button) would be required. I've only found a simple way for the number/price input*/}

             <form onSubmit={this.handleSubmit}>
                <div className="formBox tab1" style={this.state.tab === 1 ? {display : "block"}: {display : "none"}}>
                        <h2>step 1 - should I buy or should I go?</h2>
                        <p>Your point of view, should I buy this or that or should I just let it be? I'm here to help you in your decision making, but before I can do so, 
                        I need you to tell me a little about the product your struggling whether to buy or not. </p>
                        <img src={plant} alt="picture of a leaf smiling" id="leaf-smiling"/>
                        <label htmlFor="name">Which kind of product do you want to buy?</label>
                        <input type="text" id="type" placeholder="Product type" onChange={this.handleChange}/>
                        
                        <label htmlFor="name">What's it called?</label>
                        <input type="text" id="name" placeholder="Product name" onChange={this.handleChange}/>
                        
                        <label htmlFor="name">Tell me where you would buy it, so I can remind you of the store in case you'll forget the place (optional):</label>
                        <input type="text" id="shop" placeholder="Link or name of shop" onChange={this.handleChange}/>
                        
                        {/*No submit button here, because we just want to go to "next", right?*/}
                    </div>

                    <div class="formBox tab2" style={this.state.tab ===2 ? {display : "block"}: {display: "none"}}>
                        <h2>step 2 - </h2>
                            <p>Tell me a little more about your product, I'll note it down for you so you have all the facts in one place. Be honest to yourself do you really need this product immediatly and are you going to use it frequently?</p>
                            <label htmlFor="name">Price:</label>
                            <input required type="number" id="price" onChange={this.handleChange}/>
                            

                            <label htmlFor="name">Urgency:</label>
                            <select name="urgency" id="urgency" onChange={this.handleChange}>
                            {/*Both select inputs have a default  value "not selected" because it is not displaying the top option (value) otherwise */}
                                <option value="Not selected">- Not selected -</option>
                                <option value="High">High</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Low">Low</option>
                            </select>
                            
                            <label htmlFor="name">Usage:</label>
                            <select  name="usage" id="usage" onChange={this.handleChange}>
                                <option value="Not selected">- Not selected -</option>
                                <option value="Daily">Daily</option>
                                <option value="Few times per week">Few times per week</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Every few weeks">Every few weeks</option>
                                <option value="Monthly">Monthly</option>
                                <option value="More rarely">More rarely</option>
                            </select>
                            
                            <button class="submitButton">Submit</button>
                    </div>

                    <div className="formBox tab3" style={this.state.tab === 3 ? {display : "block"}: {display : "none"}}>
                        <h2>Step 3</h2>

                            {/*p>Your Input:
                            <br/>
                            {this.props.name}
                            </p>
                            */}

                            <label htmlFor="name">Would you like to add a 30 day reminder?</label>
                            <div className="reminder30">
                                <div className={`reminderBox ${this.state.pickedyes ? "activeAnswer" : ""}`} onClick={this.handleClick} value="yes">
                                    <div className="reminderAns">Yes</div>
                                </div>
                                <div className={`reminderBox ${this.state.pickedno ? "activeAnswer" : ""}`} onClick={this.handleClick} value="no">
                                    <div className="reminderAns" value="no">No</div>
                                </div>
                            </div>
                            <br/><br/>
                    </div>

                    <div className="formBox tab4" style={this.state.tab === 4 ? {display : "block"}: {display : "none"}}>
                        <h2>Step 3 - part 2</h2>

                            <label htmlFor="name">Please enter your name:</label>
                            <input type="text" id="client" placeholder="Your name" onChange={this.handleChange}/>
                            
                            <label htmlFor="name">Please enter your e-mail:</label>
                            <input type="text" id="email" placeholder="Your email" onChange={this.handleChange}/>
                            <br/>
                            <label htmlFor="name">When do you want to be reminded?</label>
                            <input type="date" id="reminderdate" onChange={this.handleChange}/>
                            <br/>
                            {/* Unfortunately, it does not work. Source: postmail.invotes.com, functionality: should send email to default mail address
                            (so not even suitable for our case, where the input mail address should receive an reminder... :/)

                            <input type="hidden" name="subject" value={subject} />
                            <input type="hidden" name="access_token" value="tic9kh2ltjs2gqhmq6uio654" />
                            <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                            <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />*/}
                            
                            
                            <br/><br/>
                    </div>

                </form>

            
            </div>
          
      )
  }
}


export default AddProduct;
