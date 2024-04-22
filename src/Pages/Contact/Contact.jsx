import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Row } from "react-bootstrap";
import "../../css/Contact.css";
import Helmet from "../../Components/Helmet/Helmet";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_wp60rso", "template_7jz2cnn", form.current, {
                publicKey: "6XnaLBqYtVAVFaMyz",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };
    return (
        <Helmet title="Contact us">
            <div className="container">
                <Row>
                    <h2 className="contact">Contact Us</h2>
                </Row>
                <Row>
                    <p className="contact-text">
                        We will happy to receive your inquiries and suggestions.
                    </p>
                </Row>
                <form
                    style={{
                        maxWidth: "50%",
                    }}
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <Row>
                        <label htmlFor="first">First Name</label>
                        <input
                            type="text"
                            id="first"
                            name="user_name"
                            placeholder="First Name"
                        />
                    </Row>
                    <Row>
                        <label htmlFor="last">Last Name</label>
                        <input type="text" id="last" placeholder="Last Name" />
                    </Row>
                    <Row>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="number"
                            id="phone"
                            name="user_Phone"
                            placeholder="Phone Number"
                        />
                    </Row>
                    <Row>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            placeholder="Email"
                        />
                    </Row>
                    <Row>
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" name="message"></textarea>
                    </Row>
                    <div className="form-btn">
                        <input type="submit" value="Send"></input>
                    </div>
                </form>
            </div>
        </Helmet>
    );
};

export default Contact;
