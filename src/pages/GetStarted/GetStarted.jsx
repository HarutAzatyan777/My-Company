// GetStart.jsx

import React, { useState } from "react";
import "./GetStarted.css"
import axiosInstance from "../../Axios";

const GetStart = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");



  const handleSubmit = async (event) => {
    event.preventDefault();

    if ( !email ) {
      setFormError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/send-email", {
       
        email
      });

      if (response.status === 200) {
        setSubmitted(true);
        setEmail("");
        setFormError("");
      } else {
        setFormError("Email sending failed. Please try again later.");
      }
    } catch (error) {
      setFormError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="get-start">

<div className="contact-container" id="get-started">
    <div className="get-button-cont">
      
      <div className="text-get-1">Get Start</div>
      <div className="text-get-2">
        I'm always open to discuss new projects.
      </div>
    </div>

    {submitted ? (
      <div className="alert alert-success">
        Thank you for reaching out! I'll get back to you soon.
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="form-button">
        <div className="get-input">
     

          <label htmlFor="email" className="form-label">
            <input
              type="text"
              id="email"
              className="form-control-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="What is your email?"
            />
          </label>

  
        </div>

        <button
          type="submit"
          className="custom-button"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {formError && <p className="form-error">{formError}</p>}
      </form>
    )}
  </div>
    </div>
 
  );
};

export default GetStart;
