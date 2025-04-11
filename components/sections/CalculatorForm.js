"use client";
import React, { useState } from "react";

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    callDate: "",
    callTime: "",
    category: [],
    message: "",
    area: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newCategories = checked
          ? [...prev.category, value]
          : prev.category.filter((item) => item !== value);
        return { ...prev, category: newCategories };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Appointment booked successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      callDate: "",
      callTime: "",
      category: [],
      message: "",
      city: "",
    });
  };

  return (
    <div
      className="container-fluid p-0 my-5"
      style={{
        backgroundImage: "url(./assets/images/page/image-form.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-6 col-md-10">
            <div className="card shadow-lg">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="callDate" className="form-label">
                        Appointment Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="callDate"
                        name="callDate"
                        required
                        value={formData.callDate}
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

                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="Your city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="message" className="form-label">
                        Note
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Write your note"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-between gap-3 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2 flex-grow-1"
                    >
                      Proceed to Payment
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary px-4 py-2 d-flex align-items-center gap-2"
                      onClick={handleReset}
                    >
                      <span>Reset All</span>
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
