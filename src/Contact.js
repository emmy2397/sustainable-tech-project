import React, {Component} from 'react';

/*Posting the mail is not working, unfortunately, so it remains just a mock up*/

class Contact extends Component {
    render() {
        return (
            <form action="https://postmail.invotes.com/send" method="post" id="email_form">
                <div className="formBox">
                    <h2>Contact us!</h2>
                        <p>Feel free to leave us feedback and suggest new functions!</p>
                        <br/>

                        <label htmlFor="name">Your e-mail address</label>
                        <input type="text" id="email" placeholder="Enter your e-mail address" required onChange={""}/>

                        <label htmlFor="name">Subject</label>
                        <input type="text" id="subject" placeholder="The subject of your message" required onChange={""}/>
                        
                        <label htmlFor="name">Your Message</label>
                        <textarea name="text" placeholder="Message"></textarea>
                        
                        <input type="hidden" name="access_token" value="tic9kh2ltjs2gqhmq6uio654" /> 
                        <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                        <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />

                        <br/><br/>
                        <button className="submitButton" id="submit_form" type="submit">Send</button>

                        <p>Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>

                </div>
            </form>
        )
    }
}

export default Contact;