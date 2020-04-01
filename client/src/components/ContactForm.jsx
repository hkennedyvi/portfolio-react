import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const company = document.getElementById('email').value;
        const email = document.getElementById('message').value;
        const phone = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data: {
                name: name,
                company: company,   
                email: email,  
                phone: phone,
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="container-fluid" id="contact-section">
                <h1 className="brand">Send me a message... <i className="far fa-paper-plane"></i></h1>
                <div className="wrapper animated bounceInLeft">
                    <div className="contact">
                        <form onSubmit={this.handleSubmit.bind(this)} method="POST" action="send" id="contact-form">
                            <div className="form-group">
                                <p>
                                    <label>Name</label>
                                    <input type="text" name="name" id="name" />
                                </p>
                                <p>
                                    <label>Company</label>
                                    <input type="text" name="company" id="company" />
                                </p>
                                <p>
                                    <label>Email Address</label>
                                    <input type="email" name="email" id="email" />
                                </p>
                                <p>
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" id="phone" />
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" rows="5" id="message"></textarea>
                                </p>
                                <p className="full">
                                    <button type="submit" id="contact-btn">Submit</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="contact-block animated bounceInRight">
                    <h3>Or, find me here <i className="fas fa-hand-point-right"></i></h3>
                    <div className="social-box">
                        <a href="https://www.linkedin.com/in/howard-kennedy-5784876b/"><i className="fab fa-linkedin social-icon-contact"></i></a>
                        <a href="https://github.com/hkennedyvi"><i className="fab fa-github-square social-icon-contact"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;