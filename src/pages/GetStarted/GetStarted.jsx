// GetStart.jsx

import React, { useState } from "react";
import "./GetStarted.css"
import axiosInstance from "../../Axios";

const GetStart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const closeContactWindow = () => {
    setFormError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setFormError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/send-email", {
        name,
        email,
        number,
        message,
      });

      if (response.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
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
    <div className="contact-container" id="get-started">
    <div className="get-button-cont">
      <div
        className="close-button custom-close-button"
        onClick={closeContactWindow}
      >
        <svg
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 9">
            <path
              id="Line 3"
              d="M28.5165 2.7417L2 29.2582"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              clipRule="evenodd"
            />
            <path
              id="Line 4"
              d="M2.00002 2.7417L28.5165 29.2582"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              clipRule="evenodd"
            />
          </g>
        </svg>
      </div>
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
          <label htmlFor="name" className="form-label">
            <input
              type="text"
              id="name"
              className="form-control-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />
          </label>

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

          <label htmlFor="number" className="form-label">
            <input
              type="text"
              id="number"
              className="form-control-3"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              placeholder="What is your phone number?"
            />
          </label>

          <label htmlFor="message" className="form-label">
            <input
              type="text"
              id="message"
              className="form-control-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Would you like to leave a message?"
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
  );
};

export default GetStart;
