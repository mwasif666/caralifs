"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function SlideV3() {
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sliderSection");
      if (!section) return;

      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Scroll hone par lights on, wapas top par aane par lights off
      if (scrollPosition === 0) {
        setLightsOn(false);
      } else if (sectionPosition < windowHeight / 1.5) {
        setLightsOn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="tf-slider-v3 mb-5" id="sliderSection">
        {/* Background Image */}
        <div className="car-background"></div>

        {/* Lights Overlay */}
        <div className={`car-lights ${lightsOn ? "lights-on" : ""}`}></div>

        <div className="themesflat-container">
          <div className="row align-items-center">
            {/* Left Side - Text & Buttons */}
            <div className="col-md-7">
              <span
                className="wow fadeInUp text-white"
                data-wow-delay="100ms"
                data-wow-duration="2000ms"
              >
                Save up to <span className="text-red fw-bold">15%</span>
              </span>
              <h1
                className="wow fadeInUp text-white display-1 fw-bold"
                data-wow-delay="300ms"
                data-wow-duration="2000ms"
              >
                Find Perfect Car. <br /> Let’s Go!
              </h1>
              <p
                className="wow fadeInUp text-white"
                data-wow-delay="600ms"
                data-wow-duration="2000ms"
              >
                Unlimited mileage · No hidden fees · Free cancellation
              </p>
            </div>

            {/* Right Side - Empty Space */}
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .tf-slider-v3 {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .car-background {
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 100%;
          background: url("https://demo.bravisthemes.com/ducatibox/wp-content/uploads/2024/01/car-banner.png")
            no-repeat center center;
          background-size: contain;
        }

        .car-lights {
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 100%;
          background: url("https://demo.bravisthemes.com/ducatibox/wp-content/uploads/2024/01/car-banner-light.png")
            no-repeat center center;
          background-size: contain;
          opacity: 0; /* Default Off */
          transition: opacity 0.5s ease-in-out;
        }

        .lights-on {
          opacity: 1; /* Lights On when scrolled */
        }

        .themesflat-container {
          position: relative;
          z-index: 2;
        }
        /* Mobile View Adjustments */
        @media (max-width: 768px) {
          .tf-slider-v3 {
            height: 100vh; /* Adjusted height for smaller screens */
          }

          .car-background,
          .car-lights {
            width: 100%; /* Full width on small screens */
            background-size: contain; /* Ensure background scales properly */
            top: 80px;
          }

          .themesflat-container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .col-md-7 {
            padding: 15px;
            text-align: center; /* Center the text on smaller screens */
          }


        /* Extra Small View Adjustments (mobile) */
        @media (max-width: 480px) {
          .tf-slider-v3 {
            height: 350px; /* Adjust height for extra small screens */
          }

          h1 {
            font-size: 1.25rem; /* Adjust heading font size for extra small screens */
          }

          p {
            font-size: 0.875rem; /* Adjust paragraph font size for extra small screens */
          }
        }
      `}</style>
    </>
  );
}
