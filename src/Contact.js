import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor() {
    super();
    
    document.title = "Contact - Etherchime";
  }

  render() {
    return (
      <section className="section columns is-marginless is-large has-background-grey-lighter">
        <div className="container column is-two-fifths is-narrow">
          <p className="content is-size-4">
            All compositions featured on this website are free-to-use under <a href="">this license</a>, but I would be glad to compose music specifically for your project. For inquiries about my composition services and anything else, please reach me on <a href="https://www.instagram.com/etherchime/" target="_blank" rel="noopener noreferrer">Instagram</a> or via <a href="mailto:etherchime@gmail.com">etherchime@gmail.com</a>.
          </p>
          {/*<form method="post" action="/contactengine.php" id="contactForm">
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
          </form>*/}
        </div>
      </section>
    );
  }
}

export default Contact;