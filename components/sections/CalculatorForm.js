"use client";

import React, { useState } from "react";

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        category: checked
          ? [...prevData.category, value]
          : prevData.category.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <div className="widget-calculator-form mg-2 my-5" id="CallExpert">
        <div className="themesflat-container full">
          <div className="calculator-form-wrap">
            <div className="calculator-form">
              <h2 className="title-section-main wow fadeInUp">
                Talk to our Car expert
              </h2>
              <form onSubmit={handleSubmit} className="container mt-5 py-4">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Contact</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Advice on</label>
                    <div className="d-flex flex-wrap gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="buy"
                          name="category"
                          value="buy"
                          checked={formData.category.includes("buy")}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="buy">
                          Buying a Car
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="sell"
                          name="category"
                          value="sell"
                          checked={formData.category.includes("sell")}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="sell">
                          Selling a Car
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="compare"
                          name="category"
                          value="compare"
                          checked={formData.category.includes("compare")}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="compare">
                          Comparisons
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Call Date</label>
                    <input
                      type="date"
                      name="callDate"
                      className="form-control"
                      required
                      value={formData.callDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Call Time</label>
                    <input
                      type="time"
                      name="callTime"
                      className="form-control"
                      required
                      value={formData.callTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Note</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Write your note"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12 d-flex justify-content-between mt-3">
                    <button type="submit" className="payment">
                      Proceed to Payment
                    </button>
                    <button
                      type="reset"
                      className="bg-transparent text-dark"
                      onClick={() =>
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          category: [],
                          callDate: "",
                          callTime: "",
                          message: "",
                        })
                      }
                    >
                      <div className="d-flex gap-5 align-items-center">
                        <span>Reset All</span>
                        <i className="icon-rotate-left-circular-arrow-interface-symbol-1" />
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="calculator-image">
              <img
                src="./assets/images/page/image-form.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;
