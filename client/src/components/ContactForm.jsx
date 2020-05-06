import React, { Component } from 'react';
import axios from 'axios';
import Bitmoji from '../images/portfolio_bitmoji.png';

class ContactForm extends Component {

    state = {
        sideNavOpen: true
    };

    toggleMenu = (e) => {
        e.preventDefault();
        this.setState({ sideNavOpen: !this.state.sideNavOpen });
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const company = document.getElementById('company').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: {
                name: name,
                company: company,
                email: email,
                phone: phone,
                messsage: message
            }
        }).then((response) => {
            console.log(response.config.data);
            if (response.data.msg === 'success') {
                document.getElementById("msg-success").innerHTML = "Your message has sent!";
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className={this.state.sideNavOpen ? "d-flex" : " d-flex toggled"} id="wrapper">

                <div className="border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading">
                        <img id="avatar" src={Bitmoji} alt="avatar" />
                    </div>
                    <div className="list-group list-group-flush">
                        <a href="/" className="nav-item list-group-item list-group-item-action">Home</a>
                        <a href="/portfolio" className="nav-item list-group-item list-group-item-action">Gallery</a>
                        <a href="/contact" className="nav-item list-group-item list-group-item-action">Contact</a>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <button id="menu-toggle" className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggleMenu}
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="burger white-text">
                            <i className="fas fa-bars fa-1x"></i>
                        </span>
                    </button>



                    <div className="container-fluid" id="contact-section">
                        <h1 className="brand animated bounceInUp">Send me a message...<i className="far fa-paper-plane"></i></h1>
                        <div id="msg-success"></div>
                        <div className="wrapper animated bounceInRight">
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
                                            <button className="float-right" type="submit" id="contact-btn">Submit</button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;