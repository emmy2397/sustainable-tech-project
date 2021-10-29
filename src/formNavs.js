import React, {Component} from 'react';
import './App.css'

class FormNavs extends Component {
    state = {
        currentStep : 1
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
        if(this.state.currentStep !== 1){   
            return (
                <button className = "previous form-navs" onClick={this.handleClick} name="previous">
                    previous
                </button>
            )
        }
        return null
    }

    get NextButton(){
        if(this.state.currentStep < 4){
            return(
                <button className = "next form-navs" onClick={this.handleClick} name="next" >
                    next
                </button>
            )
        }
        return null
    }

    handleClick = (e) => {
        let selectedNav = e.target.innerText;
        let currentStep = this.state.currentStep;
        if(selectedNav === "next"){
            currentStep = currentStep + 1
        }
        else if(selectedNav === "previous"){
            currentStep = currentStep - 1;
        }
        this.setState({
            currentStep : currentStep
        })
        this.props.formNavs(currentStep)

    }
}

export default FormNavs;