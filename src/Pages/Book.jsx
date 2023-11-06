import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ButtonGroup } from "react-bootstrap";

export default function Book() {
  const [step, setStep] = useState(1);
  const place = "Bangalore";
  return (
    <div className="w-screen">
      <div className="mx-auto shadow-lg w-[800px] rounded-lg text-white p-5 -z-0 bg-pink-500 flex flex-col ">
        <h1 className="text-6xl">Let's Get Started</h1>
        <p className="text-xl">
          Let Two Maids do all of the dirty work for you. Focus on everything
          else you need to get done and schedule a cleaning with us today.
        </p>
        <div className="flex justify-between z-40 text-xl">
          <div className="w-32 flex flex-col items-center text-center">
            Contact
            <br />
            Information
            <h1 className="mt-3 h-14 w-14 center-element rounded-full bg-white text-pink">
              1
            </h1>
          </div>
          <div className="w-32 flex flex-col items-center text-center">
            Schedule
            <br />
            Cleaning
            <h1 className="mt-3 h-14 w-14 center-element rounded-full bg-white  text-pink">
              2
            </h1>
          </div>
          <div className=" w-32 flex flex-col items-center text-center">
            Review &
            <br />
            Purchase
            <h1 className="mt-3 h-14 w-14  center-element rounded-full bg-white  text-pink">
              3
            </h1>
          </div>
        </div>
        <ProgressBar
          animated
          now={50 * step}
          className="relative bottom-11 z-10"
        />
        <h4>Let's Find Your Store</h4>
        <p>
          Your store <span className="text-bold text-xl">{place}</span>{" "}
        </p>
        <div className="flex">
          <input type="text" placeholder="ZIP CODE" className="p-2 rounded" />
          <button className="p-2 btn ms-4 pink-btn">
            <i className="fi fi-br-search mx-3"></i>
            <span>FIND YOUR STORE</span>{" "}
          </button>
        </div>
        <h3>Contact Details</h3>
        <InputGroup className="mb-3 ">
          <InputGroup.Text>
            {" "}
            <h5 className="text-pink mt-1">First and last name</h5>{" "}
          </InputGroup.Text>
          <Form.Control
            aria-label="First name"
            className="border-2 border-gray-700"
          />
          <Form.Control
            aria-label="Last name"
            className="border-2 border-gray-700"
          />
        </InputGroup>
        <Form.Control
          aria-label="First name"
          className="border-2 border-gray-700 "
          placeholder="Enter Phone Number"
        />
        <Form.Control
          type="email"
          aria-label="First name"
          className="border-2 mt-3 border-gray-700"
          placeholder="Enter Email"
        />
        <p className="mt-2">
          By proceeding to the next step of the form, you agree to receive
          calls, text messages, or emails at the contact information provided.
          Message rates may apply. Text STOP to opt out at any time.{" "}
          <a href="" className="text-dark">
            Terms and Conditions apply.
          </a>{" "}
        </p>
        <hr />
        <h4>Tell Us About the Job</h4>
        <InputGroup size="sm" className="mb-3 ">
          <InputGroup.Text id="inputGroup-sizing-sm">Bedrooms</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            className="me-2"
            placeholder="0"
          />
          <InputGroup.Text id="inputGroup-sizing-sm">Bathrooms</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            className="me-2"
            placeholder="0"
          />

          <InputGroup.Text id="inputGroup-sizing-sm">People</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            className="me-2"
            placeholder="0"
          />
          <InputGroup.Text id="inputGroup-sizing-sm">Pets</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            className="me-2"
            placeholder="0"
          />
          <InputGroup.Text id="inputGroup-sizing-sm">Sqare ft</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            placeholder="0"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <h4>What Type of Cleaning Would You Like?</h4>
        <ButtonGroup>
          <div> <input type="radio" id={} /> <label>One-Time</label> </div>
        </ButtonGroup>
      </div>
    </div>
  );
}
