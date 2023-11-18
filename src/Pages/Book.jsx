import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Multiselect } from 'multiselect-react-dropdown'
import { ButtonGroup } from "react-bootstrap";
import { handleScroll, optionSel } from "../utils";
import { Link } from "react-router-dom";
import { objectArray } from "../data";
const ProgressCheck = ({ step,setStep }) => {
  return (
    <div className="flex justify-between text-xl relative overflow-x-hidden">
      <div className="w-32 flex flex-col z-50 items-center text-center">
        Contact
        <br />
        Information
        <h1 onClick={()=>setStep(0)} className="mt-3 h-14 w-14 center-element rounded-full cur bg-white text-[#015d9c]">
          1
        </h1>
      </div>
      <div className="w-32 flex flex-col z-50 items-center text-center">
        Schedule
        <br />
        Cleaning
        <h1 className="mt-3 h-14 w-14 center-element rounded-full bg-white  text-[#015d9c]">
          2
        </h1>
      </div>
      <div className=" w-32 flex flex-col z-50 items-center text-center">
        Review &
        <br />
        Purchase
        <h1 className="mt-3 h-14 w-14  center-element rounded-full bg-white  text-[#015d9c]">
          3
        </h1>
      </div>
      <ProgressBar
        animated
        now={50 * step}
        className="absolute w-full z-10 top-[90px] left-0"
      />
    </div>
  );
};
export default function Book() {
        useEffect(()=>{
                const head = document.querySelector('head');
                const script = document.createElement('script');
                script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
                head.appendChild(script);
        })
  const [step, setStep] = useState(0);
  const [option, setOption] = useState(optionSel.onetime);
  const [selectedTool, setSelectedTool] = useState({});
  const handleSteps = () => {setStep((pre) => pre + 1); handleScroll()};
  const selectOpt = (e) => setOption(optionSel[e.target.value]);
  const selectedOpt = (v) => setSelectedTool(v);
  const place = "Bangalore";
  return (
    <div className="w-screen">
      <div className=" mx-auto shadow-lg w-[800px] rounded-lg text-white p-5 z-0 bg-[#015d9c]  ">
        {step === 0 ? (
          <div className="flex flex-col">
            <h1 className="text-6xl">Let's Get Started</h1>
            <p className="text-xl">
              Let Two Maids do all of the dirty work for you. Focus on
              everything else you need to get done and schedule a cleaning with
              us today.
            </p>
            <ProgressCheck step={step} setStep={setStep} />
            <h4>Let's Find Your Store</h4>
            <p>
              Your store <span className="text-bold text-xl">{place}</span>
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="ZIP CODE"
                className="p-2 rounded"
              />
              <button className="p-2 btn ms-4 pink-btn">
                <i className="fi fi-br-search mx-3"></i>
                <span>FIND YOUR STORE</span>
              </button>
            </div>
            <h4 className="mt-4">Contact Details</h4>
            <InputGroup className="mb-3 ">
              <InputGroup.Text>
                <h5 className="text-[#015d9c] mt-1">First and last name</h5>
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
              calls, text messages, or emails at the contact information
              provided. Message rates may apply. Text STOP to opt out at any
              time.
              <Link className="text-dark"> Terms and Conditions apply.</Link>
            </p>
            <hr />
            <h4 className="mt-4">Tell Us About the Job</h4>
            <InputGroup size="sm" className="mb-3 ">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Bedrooms
              </InputGroup.Text>
              <Form.Control
                type="number"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                className="me-2"
                placeholder="0"
              />
              <InputGroup.Text id="inputGroup-sizing-sm">
                Bathrooms
              </InputGroup.Text>
              <Form.Control
                type="number"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                className="me-2"
                placeholder="0"
              />

              <InputGroup.Text id="inputGroup-sizing-sm">
                People
              </InputGroup.Text>
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
              <InputGroup.Text id="inputGroup-sizing-sm">
                Sqare ft
              </InputGroup.Text>
              <Form.Control
                type="number"
                aria-label="Small"
                placeholder="0"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <h4 className="mt-3">What Type of Cleaning Would You Like?</h4>
            <Multiselect className="text-black" options={objectArray}displayValue="option"
            showCheckbox={true}/>
            <ButtonGroup className="flex justify-between text-lg">
              <div>
                <input
                  type="radio"
                  onClick={selectOpt}
                  id="onetime"
                  value="onetime"
                  name="sel"
                  defaultChecked
                />
                <label for="onetime">One-Time</label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={selectOpt}
                  id="weekly"
                  value="weekly"
                  name="sel"
                />
                <label for="weekly">Weekly</label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={selectOpt}
                  id="biweekly"
                  value="biweekly"
                  name="sel"
                />
                <label for="biweekly">Bi-weekly</label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={selectOpt}
                  id="monthly"
                  value="monthly"
                  name="sel"
                />
                <label for="monthly">Monthly</label>
              </div>
            </ButtonGroup>
            <h4 className="mt-4 mb-3">Select a Cleaning Package</h4>
            <div className="flex justify-evenly">
              {option.map((v) => (
                <button
                  key={v}
                  onClick={() => selectedOpt(v)}
                  className="btn btn-light"
                >
                  {v.topic}
                </button>
              ))}
            </div>
            <p className="mt-4"> {selectedTool.tooltip} </p>
            <hr />
            <h3>Estimated Price</h3>
            <h1> $400.99 </h1>
            <button className="btn pink-btn mt-3" onClick={handleSteps}>
              Schedule
            </button>
          </div>
        ) : step === 1 ? (
          <div className="h-full w-full z-0">
            <h1 className="text-6xl">Schedule Your Cleaning</h1>
            <p className="text-xl">
              Use our easy, no-hassle pricing feature and instantly book your
              cleaning!
            </p>
            <ProgressCheck step={step} setStep={setStep} />
            <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/saikatsamanta052/30min"
            style={{ minWidth: '320px', height: '580px' }} />
          </div>
        ) : (
          <div className="h-full w-full z-0">
            <ProgressCheck step={step} setStep={setStep} />
          </div>
        )}
      </div>
    </div>
  );
}
