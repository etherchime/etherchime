import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="section columns has-background-grey-lighter">
        <div className="container column is-two-fifths is-narrow">
          <form method="post" action="contactengine.php" id="contactForm">
            <div className="field">
              <label className="label">Full Name:</label>
              <div className="control">
                <input className="input" type="text" name="Name" placeholder="What's your name?" />
              </div>
            </div>
            <div className="field">
              <label className="label">Email:</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" name="Email" placeholder="How can I get back to you?" />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Subject:</label>
              <div className="control">
                <input className="input" type="text" name="Subject" placeholder="What's this message about?" />
              </div>
            </div>

            <div className="field">
              <label className="label">Message:</label>
              <div className="control">
                <textarea className="textarea" name="Message" placeholder="What's your message?"></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;