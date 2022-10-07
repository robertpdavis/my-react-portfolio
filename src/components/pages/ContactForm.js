import React, { useState } from 'react';
import '../../App.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name and message is empty. If so we set an error message to be displayed on the page.
    if (!name) {
      setErrorMessage('Name is required');
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
      return;
    } else if (!message) {
      setErrorMessage('Mesage is required');
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <section className="section page" id="contact">
      <form className="form">
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      ✉ Email: <a href="mailto:robertpdavis@optusnet.com.au">robertpdavis@optusnet.com.au</a>
    </section>
  );
}

export default ContactForm;
