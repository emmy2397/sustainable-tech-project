import React, {Component} from 'react';
import FormNavs from './formNavs';
// import Email from './email';
import './App.css';
import plant from './plant-smiling.png';

import emailjs from 'emailjs-com';

const subject = "Consumescape reminder"
let importantInputFields = false;
let totalMilSec = 1000 * 60 * 60 * 24 * 30;
const totalSec = totalMilSec / 1000
const totalMin = totalSec / 60;
const totalHrs = totalMin / 60;
let totalDys = totalHrs / 24;

//Reassigned totalDys to 2 seconds to get a feedback of the setTimeout fxn
// totalDys = 2000;
let activeTab1 = "activeTab";
let activeTab2 = "";

/* let today = new Date();
let mySetDay = new Date("2021 May 31");
console.log(today)
console.log(mySetDay);
let today_day = today.getDate();
let mySetDay_day = mySetDay.getDate();
let today_month = today.getMonth();
let mySetDay_month = mySetDay.getMonth();
let today_year = today.getFullYear();
let mySetDay_year = mySetDay.getFullYear();
let monthDuration = null;
let daysInMonth = [];
let daysLeft = 0;
let userCustomDate */
// today.setMonth(2, 0)
// console.log(today)




// if((mySetDay_year - today_year >= 0) && (mySetDay_year - today_year <= 1)){
//     let tempMySetDayMonth = mySetDay;
//     (mySetDay_year - today_year > 0) ? tempMySetDayMonth.setMonth(0) : tempMySetDayMonth.setMonth(mySetDay_month);
//     let monthsLeftInYear = mySetDay_month - tempMySetDayMonth.getMonth();
//     if(monthsLeftInYear <= 0){
//         if((mySetDay_month == today_month) && (mySetDay_year - today_year == 0)){
//             daysLeft = mySetDay_day - today_day;
//             console.log(daysLeft)
//         }
//         else if(mySetDay_month == 0 && today_month == 11){

//             let tempMySetDayMonth = today;
//             tempMySetDayMonth.setMonth(today_month + 1, 0);
//             let daysLeftInStartingMonth = tempMySetDayMonth.getDate() - today_day;
//             daysLeft += daysLeftInStartingMonth + mySetDay_day;
//             if(daysLeft < 30){
//                 console.log(daysLeft)
//             }
//             else{
//                 console.log("not valid")
//             }
//         }
//         else {
//             console.log("not valid")
//         }
//         /*else {
//             console.log(monthsLeftInYear);
//             monthDuration = mySetDay_month - today_month;
//             let end;
//             let tempTodayMonth = today;
//             tempTodayMonth.setMonth(today_month + 1, 0);
//             let daysLeftInStartingMonth = tempTodayMonth.getDate() - today_day;
//             for(let i = today_month + 1; i < mySetDay_month; i++){
//                 today.setMonth(i+1,0);
//                 end = today.getDate();
//                 daysInMonth.push(end);
//             }
//             for(let i = 0; i < daysInMonth.length; i++){
//                 daysLeft += daysInMonth[i];
//             }
//             console.log(daysLeftInStartingMonth )
//             daysLeft += daysLeftInStartingMonth + mySetDay_day;
//             if(daysLeft > 1 && daysLeft < 29){
//                 console.log("allowed custom date")
//             }
//             else{
//                 console.log("Not allowed date")
//             }
//             console.log(monthDuration);
//             console.log(daysLeft)
//         }  */
//     }
//     else{
//         console.log("not valid")
//     }
// }
// else{
//     console.log("not valid");
// }

// if(mySetDay.getDate())




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
        time: totalMilSec,
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
        fieldEightValidated: "fieldNotValidated",
        fieldNineValidated: "fieldNotValidated",
        fieldTenValidated: "fieldNotValidated",
        fieldOne: false,
        fieldTwo: false,
        fieldThree: false,
        fieldFour: false,
        fieldFive: false,
        fieldSix: false,
        fieldSeven: false,
        fieldEight: false,
        fieldNine: false,
        fieldTen: false,
        defaultReminder: true,
        prodScore: null
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
      let fieldEightValidated = this.state.fieldEightValidated;
      let fieldNineValidated = this.state.fieldNineValidated;
      let fieldTenValidated = this.state.fieldTenValidated;
      let fieldOne = this.state.fieldOne;
      let fieldTwo = this.state.fieldTwo;
      let fieldThree = this.state.fieldThree;
      let fieldFour = this.state.fieldFour;
      let fieldFive = this.state.fieldFive;
      let fieldSix = this.state.fieldSix;
      let fieldSeven = this.state.fieldSeven;
      let fieldEight = this.state.fieldEight;
      let fieldNine = this.state.fieldNine;
      let fieldTen = this.state.fieldTen;
      let customDateSet = false;



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
      let userCustomDate
      if(e.target.id === "reminderdate"){
        userCustomDate = e.target.value;
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let splittedDate = userCustomDate.split("-");
        let selectedMonth = splittedDate[1];
        selectedMonth = Number(selectedMonth);
        splittedDate[1] = months[selectedMonth - 1];
        let selectedDate = `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]}`;
        console.log(selectedMonth, splittedDate, selectedDate)
        let mySetDay = new Date(selectedDate);
        let today = new Date();
        // let mySetDay = new Date("2021 May 31");
        console.log(today)
        console.log(mySetDay);
        let today_day = today.getDate();
        let mySetDay_day = mySetDay.getDate();
        let today_month = today.getMonth();
        let mySetDay_month = mySetDay.getMonth();
        let today_year = today.getFullYear();
        let mySetDay_year = mySetDay.getFullYear();
        let monthDuration = null;
        let daysInMonth = [];
        let daysLeft = 0;

        if((mySetDay_year - today_year >= 0) && (mySetDay_year - today_year <= 1)){
            let tempMySetDayMonth = mySetDay;
            (mySetDay_year - today_year > 0) ? tempMySetDayMonth.setMonth(0) : tempMySetDayMonth.setMonth(mySetDay_month);
            let monthsLeftInYear = mySetDay_month - tempMySetDayMonth.getMonth();
            if(monthsLeftInYear <= 0){
                if((mySetDay_month == today_month) && (mySetDay_year - today_year == 0)){
                    daysLeft = mySetDay_day - today_day;
                    console.log(daysLeft);
                    totalDys = daysLeft;
                    totalMilSec = daysLeft * 24 * 60 * 60 * 1000
                    if(daysLeft >= 1 && daysLeft < 30){
                        customDateSet = true
                        totalDys = daysLeft;
                        totalMilSec = daysLeft * 24 * 60 * 60 * 1000;
                    }
                    else {customDateSet = false;}
                }
                else if(mySetDay_month == 0 && today_month == 11){

                    let tempMySetDayMonth = today;
                    tempMySetDayMonth.setMonth(today_month + 1, 0);
                    let daysLeftInStartingMonth = tempMySetDayMonth.getDate() - today_day;
                    daysLeft += daysLeftInStartingMonth + mySetDay_day;
                    if(daysLeft < 30){
                        console.log(daysLeft);
                        customDateSet = true;
                        totalDys = daysLeft;
                        totalMilSec = daysLeft * 24 * 60 * 60 * 1000;
                    }
                    else{
                        console.log("not valid");
                        customDateSet = false;
                    }
                }
                /* else {
                    console.log("not valid");
                    customDateSet = false;
                } */
                else {
                    console.log(monthsLeftInYear);
                    monthDuration = mySetDay_month - today_month;
                    let end;
                    let tempTodayMonth = today;
                    tempTodayMonth.setMonth(today_month + 1, 0);
                    let daysLeftInStartingMonth = tempTodayMonth.getDate() - today_day;
                    for(let i = today_month + 1; i < mySetDay_month; i++){
                        today.setMonth(i+1,0);
                        end = today.getDate();
                        daysInMonth.push(end);
                    }
                    for(let i = 0; i < daysInMonth.length; i++){
                        daysLeft += daysInMonth[i];
                    }
                    console.log(daysLeftInStartingMonth )
                    daysLeft += daysLeftInStartingMonth + mySetDay_day;
                    if(daysLeft > 1 && daysLeft < 29){
                        console.log(daysLeft);
                        customDateSet = true;
                        totalDys = daysLeft;
                        totalMilSec = daysLeft * 24 * 60 * 60 * 1000;
                    }
                    else{
                        console.log("Not valid");
                        customDateSet = false;
                    }
                    /* console.log(monthDuration);
                    console.log(daysLeft) */
                } 
            }
            else{
                console.log("not valid");
                customDateSet = false;
            }
        }
        else{
            console.log("not valid");
            customDateSet = false;
        }
        if(!customDateSet){
            alert("Date not valid:\nEnter a day not more than 29 days from today")
        }

        console.log(customDateSet);
        if(customDateSet){
            setReminder = true;
        }
        else{
            setReminder = false;
        }
        fieldEightValidated = (customDateSet) ? "fieldValidated" : "fieldNotValidated";
        fieldEight = (customDateSet) ? true : false;
      }
      if(e.target.id === "client"){
        fieldNineValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldNine = (target.length > 0) ? true : false;
      }
      if(e.target.id === "email"){
        fieldTenValidated = (target.length > 0) ? "fieldValidated" : "fieldNotValidated";
        fieldTen = (target.length > 0) ? true : false;
      }

/*       if(fieldOneValidated && fieldTwoValidated && fieldFourValidated && fieldFiveValidated && fieldSixValidated){
          importantInputFields = 1;
      } */


      if(fieldOne && fieldTwo && 
        fieldFour && fieldFive && 
        fieldSix && (fieldSeven || fieldEight) && 
        fieldNine && fieldTen ){
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
        fieldEightValidated: fieldEightValidated,
        fieldNineValidated: fieldNineValidated,
        fieldTenValidated: fieldTenValidated,
        fieldOne: fieldOne,
        fieldTwo: fieldTwo,
        fieldThree: fieldThree,
        fieldFour: fieldFour,
        fieldFive: fieldFive,
        fieldSix: fieldSix,
        fieldSeven: fieldSeven,
        fieldEight: fieldEight,
        fieldNine: fieldNine,
        fieldTen: fieldTen
    })
    console.log(nextBtnDisabled)
  }

handleSubmit =(e) => {
    e.preventDefault();
    //console.log(this.state);
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
        // window.open('mailto:test@example.com');
        // emailReminder = setInterval(countDown, 1000);
    }
    e.target.reset();
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
        alert(`You will get a reminder in ${totalDys} days or in ${totalMilSec} Milliseconds`);
        // setTimeout(createEmail, this.state.time);
    }
    this.setState({
        fieldOneValidated: "",
        fieldTwoValidated: "",
        fieldThreeValidated: "",
        fieldFourValidated: "",
        fieldFiveValidated: "",
        fieldSixValidated: "",
        fieldSevenValidated: "",
        fieldEightValidated: "",
        fieldNineValidated: "",
        fieldTenValidated: ""

    })
}

  handleClick = (e) => {
    let target = e.target.id;
    let defaultReminder = this.state.defaultReminder;
    let reminder30 = this.state.reminder30;
    let noReminder30 = this.state.noReminder30;
    let reminderdate = this.state.reminderdate;
    let fieldSevenValidated = this.state.fieldSevenValidated;
    let fieldEightValidated = this.state.fieldEightValidated;
    let fieldSeven = this.state.fieldSeven;
    let fieldEight = this.state.fieldEight;
    console.log(target);
    console.log(this.state)

    if(target === "noCustomise"){
        defaultReminder = true;
        reminderdate = "";
        activeTab1 = "activeTab";
        activeTab2 = "";
        fieldEightValidated = "fieldNotValidated";
        fieldEight = false;
        this.setState({
            reminderdate: reminderdate,
            fieldEightValidated: fieldEightValidated,
            fieldEight: fieldEight
        })
    }
    else if(target === "customise"){
        defaultReminder = false;
        activeTab1 = "";
        activeTab2 = "activeTab";
        if(reminder30 !== ""){
            reminder30 = "";
        }
        if(noReminder30 !== ""){
            noReminder30 = "";
        }
        fieldSevenValidated = "fieldNotValidated";
        fieldSeven =  false;
        this.setState({
            noReminder30: noReminder30,
            reminder30: reminder30,
            fieldSevenValidated: fieldSevenValidated,
            fieldSeven: fieldSeven
        })
    }

    this.setState({
        defaultReminder: defaultReminder
    })
    
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
            case(4):
                this.setState({
                    tab : 4
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
                        
                        <label htmlFor="name">Tell me where you would buy it, so I can remind you of the store in case you'll forget the place (optional):</label>

                        <input type="text" id="shop" placeholder="Link or name of shop" onChange={this.handleChange} className={`${this.state.fieldThreeValidated}`}/>
                        
                        {/*No submit button here, because we just want to go to "next", right?*/}
                    </div>

                    <div class="formBox tab2" style={this.state.tab ===2 ? {display : "block"}: {display: "none"}}>
                        <h2>step 2 - give me some facts</h2>
                            <p>Tell me a little more about your product, I'll note it down for you so you have all the facts in one place. Be honest to yourself do you really need this product immediatly and are you going to use it frequently?</p>
                            <label htmlFor="name">Price (in $):</label>
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
                        <h2>step 3 - set a reminder</h2>

                        <label htmlFor="name">Would you like to add a 30 day reminder or set a custom date not later than 30 days?</label>
                        <div className="reminderPicker">
                            <div className={`noCustomise ${activeTab1}`} id="noCustomise" onClick={this.handleClick}>30day</div>
                            <div className={`customise ${activeTab2}`} id="customise" onClick={this.handleClick}>Custom date</div>
                        </div>
                        <div className="emailReminder">
                            <div name="product_reminder" className={`reminder30 ${this.state.fieldSevenValidated}`} style={this.state.defaultReminder ? {display: "flex"}:{display: "none"}} >
                                <div className={`reminderBox`}>
                                    <input id="reminder30" onChange={this.handleChange} value={this.state.defaultReminder ? "Yes" : ""} type="radio" name="allowReminder" />
                                    <label htmlFor="allowReminder">Yes</label>
                                </div>
                                <div className={`reminderBox`}>
                                    <input id="noReminder30" onChange={this.handleChange} value={this.state.defaultReminder ? "No" : ""} type="radio" name="allowReminder" />
                                    <label htmlFor="allowReminder">No</label>
                                </div>

                            </div>
                            <div className="userReminderDate" style={!this.state.defaultReminder ? {display: "block"}:{display: "none"}}>
                                <label htmlFor="name">When do you want to be reminded?</label>
                                <input type="date" id="reminderdate" onChange={this.handleChange} value={!this.state.defaultReminder ? this.state.reminderdate: ""} className={`${this.state.fieldEightValidated}`}/>
                            </div>
                        </div>
                       {/*  <div style={{textAlign: "center"}}>___________ OR ____________</div>
                        <div style={{textAlign: "center"}}>Set a custom date not later than 30 days</div>*/}                    
                        
                        <label htmlFor="name">Please enter your name:</label>
                        <input type="text" id="client" name="user_name" onChange={this.handleChange} className={`${this.state.fieldNineValidated}`}/>
                        <label htmlFor="name">Please enter your e-mail:</label>
                        <input type="text" id="email" name="user_email" onChange={this.handleChange} className={`${this.state.fieldTenValidated}`}/>
                        <br/>
                        <button class="submitButton">Submit</button>
                    </div>    
                        
                </form>
            </div>
          
      )
  }
}


export default AddProduct;
