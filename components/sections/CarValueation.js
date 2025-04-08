"use client";

import React, { useState } from "react";
import { Button, Stepper, Step, StepLabel } from "@mui/material";

// Define steps
const steps = ["Car Details", "Your Details"];

const carData = {
  makes: ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi"],
  models: {
    Toyota: ["Camry", "Corolla", "RAV4"],
    Honda: ["Civic", "Accord", "CR-V"],
    Ford: ["Mustang", "F-150", "Escape"],
    BMW: ["X5", "M3", "i8"],
    Mercedes: ["C-Class", "E-Class", "S-Class"],
    Audi: ["A4", "Q5", "A6"],
  },
  years: [2023, 2022, 2021, 2020, 2019],
  versions: ["Base", "Sport", "Luxury", "Performance"],
  specs: ["US", "EU", "Asia", "Middle East"],
};

const CarValuation = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    version: "",
    specs: "",
    mileage: "",
    fullName: "",
    email: "",
    goal: "",
  });

  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 0) {
      if (!formData.make) newErrors.make = "Car make is required";
      if (!formData.model) newErrors.model = "Car model is required";
      if (!formData.year) newErrors.year = "Car year is required";
      if (!formData.version) newErrors.version = "Car version is required";
      if (!formData.specs) newErrors.specs = "Regional specs are required";
      if (!formData.mileage) newErrors.mileage = "Mileage is required";
    } else if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.goal) newErrors.goal = "Goal with car is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="car-valuation-container" id="CarValuation">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-8 text-white">
            <h1 className="text-white">
              Know Your Car’s True Market Value for Free
            </h1>
            <p>
              Discover your car's true value with free valuations, detailed
              market trends, and <br /> price analysis for buyers and sellers.
            </p>
          </div>
          <div className="col-md-4 bg-white p-4 rounded shadow steppers">
            <p className="text-center">
              Provide accurate details for the most precise valuation.
            </p>
            <div className="col-md-12 py-3 ">
              <Stepper activeStep={step} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            {step === 0 && (
              <>
                <div className="mb-3">
                  <select
                    name="make"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.make}
                  >
                    <option value="">Select Car Make</option>
                    {carData.makes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                  {errors.make && (
                    <small className="text-danger">{errors.make}</small>
                  )}
                </div>
                <div className="mb-3">
                  <select
                    name="model"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.model}
                  >
                    <option value="">Select Car Model</option>
                    {formData.make &&
                      carData.models[formData.make]?.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                  </select>
                  {errors.model && (
                    <small className="text-danger">{errors.model}</small>
                  )}
                </div>
                <div className="mb-3">
                  <select
                    name="year"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.year}
                  >
                    <option value="">Select Year</option>
                    {carData.years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  {errors.year && (
                    <small className="text-danger">{errors.year}</small>
                  )}
                </div>
                <div className="mb-3">
                  <select
                    name="version"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.version}
                  >
                    <option value="">Select Car Version</option>
                    {carData.versions.map((version) => (
                      <option key={version} value={version}>
                        {version}
                      </option>
                    ))}
                  </select>
                  {errors.version && (
                    <small className="text-danger">{errors.version}</small>
                  )}
                </div>
                <div className="mb-3">
                  <select
                    name="specs"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.specs}
                  >
                    <option value="">Select Regional Specs</option>
                    {carData.specs.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                  {errors.specs && (
                    <small className="text-danger">{errors.specs}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="mileage"
                    placeholder="Enter Mileage"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.mileage}
                  />
                  {errors.mileage && (
                    <small className="text-danger">{errors.mileage}</small>
                  )}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={nextStep}
                >
                  Next →
                </Button>
              </>
            )}

            {step === 1 && (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.fullName}
                  />
                  {errors.fullName && (
                    <small className="text-danger">{errors.fullName}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <select
                    name="goal"
                    className="form-select"
                    onChange={handleChange}
                    value={formData.goal}
                  >
                    <option value="">What's your goal with this car?</option>
                    <option value="Sell It">Sell It</option>
                    <option value="Buy It">Buy It</option>
                    <option value="Trade-In">Trade-In</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                  {errors.goal && (
                    <small className="text-danger">{errors.goal}</small>
                  )}
                </div>

                <div className="d-flex justify-content-between">
                  <Button variant="outlined" onClick={prevStep}>
                    ← Back
                  </Button>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarValuation;
