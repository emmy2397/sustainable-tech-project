import React, {Component} from 'react';
import './App.css'

class FormNavs extends Component {
    state = {
        currentTab : 1,
        nextBtnDisabled: true
    }

    render(){
        return(
            <>
                {this.PreviousButton}
                {this.NextButton}
            </>
        )
    }

    get PreviousButton(){
        if(this.state.currentTab !== 1){   
            return (
                <button className = "previous form-navs" onClick={this.handleClick} name="previous">
                    previous
                </button>
            )
        }
        return null
    }

    get NextButton(){
        if(this.state.currentTab < 4){
            return(
                <button className = "next form-navs" onClick={this.handleClick} name="next" disabled={this.props.nextBtn()} >
                    next
                </button>
            )
        }
        return null
    }

    handleClick = (e) => {
        let selectedNav = e.target.innerText;
        let currentTab = this.state.currentTab;
        if(selectedNav === "next"){
            currentTab = currentTab + 1
        }
        else if(selectedNav === "previous"){
            currentTab = currentTab - 1;
        }
        this.setState({
            currentTab : currentTab
        })
        this.props.formNavs(currentTab);
        console.log(this.props.nextBtn())
    }
}

export default FormNavs;