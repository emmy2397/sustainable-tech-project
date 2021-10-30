import React, {Component} from 'react';

export default class extends Component {
    shouldComponentUpdate(){
        return false;
    }
    
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://smtpjs.com/v3/smtp.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render(){
        return (
            <div id="smtpEmail">

            </div>
        )
    }
}