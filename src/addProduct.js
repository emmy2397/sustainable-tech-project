import React, {Component} from 'react';
import FormNavs from './formNavs';
// import Email from './email';
import './App.css';
import plant from './plant-smiling.png';

import emailjs from 'emailjs-com';

const subject = "Consumescape reminder"
let importantInputFields = false;
let totalMilSec = 1000 * 60 * 60 * 24 * 30;
let totalSec = totalMilSec / 1000
let totalMin = totalSec / (1000 * 60);
let totalHrs = totalMin / 60;
let totalDys = totalHrs / 24;

//Reassigned totalDys to 2 seconds to get a feedback of the setTimeout fxn
totalDys = 2000;




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
        client: null,
        email: null,
        reminderdate:null,
        nextBtnDisabled: true,
        //states for the form to be validated before submission
        fieldOneValidated: "fieldNotValidated",
        fieldTwoValidated: "fieldNotValidated",
        fieldThreeValidated: "fieldNotValidated",          
        fieldFourValidated:"fieldNotValidated",
        fieldFiveValidated: "fieldNotValidated",
        fieldSixValidated: "fieldNotValidated",
        fieldSevenValidated: "fieldNotValidated",
        fieldOne: false,
        fieldTwo: false,
        fieldThree: false,
        fieldFour: false,
        fieldFive: false,
        fieldSix: false,
        fieldSeven: false
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      });
      let target = e.target.value;
    //   let inputValid = this.state.inputValid;
      let nextBtnDisabled = this.state.nextBtnDisabled;
      let setReminder = this.state.reminder;
      let fieldOneValidated = this.state.fieldOneValidated;
      let fieldTwoValidated = this.state.fieldTwoValidated;
      let fieldThreeValidated = this.state.fieldThreeValidated;
      let fieldFourValidated = this.state.fieldFourValidated;
      let fieldFiveValidated = this.state.fieldFiveValidated;
      let fieldSixValidated = this.state.fieldSixValidated;
      let fieldSevenValidated = this.state.fieldSevenValidated;
      let fieldOne = this.state.fieldOne;
      let fieldTwo = this.state.fieldTwo;
      let fieldThree = this.state.fieldThree;
      let fieldFour = this.state.fieldFour;
      let fieldFive = this.state.fieldFive;
      let fieldSix = this.state.fieldSix;
      let fieldSeven = this.state.fieldSeven;

    //   inputValid = (e.target.attributes.name.value === "validationNeeded") ? true : false;
      if(e.target.id === "type"){
        fieldOneValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldOne = (target.length > 0) ? true : false;
      }
      if(e.target.id === "name"){
        fieldTwoValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldTwo = (target.length > 0) ? true : false
      }
      if(e.target.id === "shop"){
        fieldThreeValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldThree = (target.length > 0) ? true : false;
      }
      if(e.target.id === "price"){
        fieldFourValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldFour = (target.length > 0) ? true : false;
      }     
      if(e.target.id === "urgency"){
        fieldFiveValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldFive = (target.length > 0) ? true : false;
      }     
      if(e.target.id === "usage"){
        fieldSixValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldSix = (target.length > 0) ? true : false;
      }
      if(e.target.id === "reminder30" || e.target.id === "noReminder30"){
          fieldSevenValidated = (target === "Yes" || target === "No") ? "fieldValidated" : "fieldNotValidated"
          fieldSeven = (target === "Yes" || target === "No") ? true : false; 
          if(target === "Yes"){
              setReminder = true;
          }
          else{
              setReminder = false;
          }
      }

/*       if(fieldOneValidated && fieldTwoValidated && fieldFourValidated && fieldFiveValidated && fieldSixValidated){
          importantInputFields = 1;
      } */


      if(fieldOne && fieldTwo && fieldFour && fieldFive && fieldSix && fieldSeven){
        importantInputFields = true;
    }

      if(this.state.tab === 1 && fieldOne && fieldTwo){
          nextBtnDisabled = false;
      }
      else if(fieldFour && fieldFive && fieldSix){
        nextBtnDisabled = false;
      }
      else{
          nextBtnDisabled = true;
      }
      console.log(this.state.tab);
      this.setState({
        nextBtnDisabled: nextBtnDisabled,
        reminder: setReminder,
        fieldOneValidated: fieldOneValidated,
        fieldTwoValidated: fieldTwoValidated,
        fieldThreeValidated: fieldThreeValidated,
        fieldFourValidated: fieldFourValidated,
        fieldFiveValidated: fieldFiveValidated,
        fieldSixValidated: fieldSixValidated,
        fieldSevenValidated: fieldSevenValidated,
        fieldOne: fieldOne,
        fieldTwo: fieldTwo,
        fieldThree: fieldThree,
        fieldFour: fieldFour,
        fieldFive: fieldFive,
        fieldSix: fieldSix
    })
    console.log(nextBtnDisabled)
  }

handleSubmit =(e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addProduct(this.state);
    // let emailReminder;
    // let x = 1;
    if(!importantInputFields){
        // e.preventDefault();
        console.log("At least One required field is not valid")
        return null;
    }
    this.props.addProduct(this.state);

    // let emailReminder;
    // let x = 1;
    let createEmail = () => {
        emailjs.sendForm('service_nrvn6dk', 'template_sumj93m', e.target, 'user_V3nG8LZx2RSPbXghCzEui')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
        alert(`You will get a reminder in ${totalDys/1000} seconds`);
        // window.open('mailto:test@example.com');
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
    //sets the time email fxn will execute
    if(this.state.reminder){
        setTimeout(createEmail, this.state.time);
    }
}

  handleClick = (e) => {
    let target = e.target.innerText;
    
    console.log(target);
    
  }

    formNavs = (currentTab) => {
        console.log(currentTab);
        switch(currentTab){
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
            default:
        }
    
        this.setState({ 
            nextBtnDisabled: true,
        })
        if(currentTab === 1 && this.state.fieldOne && this.state.fieldTwo){
            this.setState({
                nextBtnDisabled: false,
            })
        }
        if(currentTab === 2 && this.state.fieldFour && this.state.fieldFive && this.state.fieldSix){
            this.setState({
                nextBtnDisabled: false,
            })
        }
    }

    nextBtn = () =>{
        return this.state.nextBtnDisabled
    }
  

render(){
    return (

        <div>
            {/* <Email /> Probably not needed*/}

            {/*It would be cool if all the first 6 inputs (before the submit-button) would be required. I've only found a simple way for the number/price input*/}

             <form onSubmit={this.handleSubmit}>
            <FormNavs formNavs={this.formNavs} nextBtn={this.nextBtn}/>

                <div className="formBox tab1" style={this.state.tab === 1 ? {display : "block"}: {display : "none"}}>

                        <h2>step 1 - should I buy or should I go?</h2>
                        <p>Your point of view, should I buy this or that or should I just let it be? I'm here to help you in your decision making, but before I can do so, 
                        I need you to tell me a little about the product your struggling whether to buy or not. </p>
                        <img src={plant} alt="picture of a leaf smiling" id="leaf-smiling"/>
                        <label htmlFor="name">Which kind of product do you want to buy?</label>
                        <input type="text" id="type" placeholder="Product type" name="product_type" onChange={this.handleChange} className={`${this.state.fieldOneValidated}`}/>
                        
                        <label htmlFor="name">What's it called?</label>
                        <input type="text" id="name" placeholder="Product name" name="product_name" onChange={this.handleChange} className={`${this.state.fieldTwoValidated}`}/>
                        <br/>
                        <label htmlFor="name">Tell me where you would buy it, so I can remind you of the store in case you'll forget the place (optional):</label>

                        <input type="text" id="shop" placeholder="Link or name of shop" onChange={this.handleChange} className={`${this.state.fieldThreeValidated}`}/>
                        
                        {/*No submit button here, because we just want to go to "next", right?*/}
                    </div>

                    <div class="formBox tab2" style={this.state.tab ===2 ? {display : "block"}: {display: "none"}}>
                        <h2>step 2 - </h2>
                            <p>Tell me a little more about your product, I'll note it down for you so you have all the facts in one place. Be honest to yourself do you really need this product immediatly and are you going to use it frequently?</p>
                            <label htmlFor="name">Price:</label>
                            <input required type="number" id="price" onChange={this.handleChange} className={`${this.state.fieldFourValidated}`}/>
                            

                            <label htmlFor="name">Urgency:</label>
                            <select name="urgency" id="urgency" onChange={this.handleChange}  className={`${this.state.fieldFiveValidated}`}>
                            {/*Both select inputs have a default  value "not selected" because it is not displaying the top option (value) otherwise */}
                                <option value="Not selected">- Not selected -</option>
                                <option value="High">High</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Low">Low</option>
                            </select>
                            
                            <label htmlFor="name">Usage:</label>
                            <select  name="usage" id="usage" onChange={this.handleChange} className={`${this.state.fieldSixValidated}`}>
                                <option value="Not selected">- Not selected -</option>
                                <option value="Daily">Daily</option>
                                <option value="Few times per week">Few times per week</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Every few weeks">Every few weeks</option>
                                <option value="Monthly">Monthly</option>
                                <option value="More rarely">More rarely</option>
                            </select>

                            <br/>

                    </div>

                    <div className="formBox tab3" style={this.state.tab === 3 ? {display : "block"}: {display : "none"}}>
                        <h2>Step 3</h2>

                        <label htmlFor="name">Would you like to add a 30 day reminder?</label>
                        <div name="product_reminder"  className={`reminder30 ${this.state.fieldSevenValidated}`}>
                            <div className={`reminderBox`}>
                                <input id="reminder30" onChange={this.handleChange} value="Yes" type="radio" name="allowReminder" />
                                <label htmlFor="allowReminder">Yes</label>
                            </div>
                            <div className={`reminderBox`}>
                                <input id="noReminder30" onChange={this.handleChange} value="No" type="radio" name="allowReminder" />
                                <label htmlFor="allowReminder">No</label>
                            </div>
                        </div>
                        <div style={{textAlign: "center"}}>___________ OR ____________</div>
                        <div style={{textAlign: "center"}}>Set a custom date not later than 30 days</div>
                        <label htmlFor="name">When do you want to be reminded?</label>
                        <input type="date" id="reminderdate" onChange={this.handleChange}/>
                        <label htmlFor="name">Please enter your name:</label>
                        <input type="text" id="client" name="user_name" onChange={this.handleChange}/>
                        <label htmlFor="name">Please enter your e-mail:</label>
                        <input type="text" id="email" name="user_email" onChange={this.handleChange}/>
                        <br/>
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
                            <button class="submitButton">Submit</button> 

                    </div>
                </form>
            </div>
          
      )
  }
}


export default AddProduct;
