"use client"; // یہ لائن سب سے اوپر add کریں

import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCarSide } from "react-icons/fa";
import Link from "next/link";

const CarServices = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div
            className="card shadow-sm d-flex align-items-center px-5 py-3"
            style={{
              flexDirection: "row",
            }}
          >
            <div>
              <Card.Img
                variant="top"
                src="https://yallamotor-production-assets.s3.ap-south-1.amazonaws.com/uploads/yalla_services/service-valuation.png"
              />
            </div>
            <div>
              <Card.Body>
                <h4>Car Valuation</h4>
                <Card.Text>
                  Get an accurate car valuation with CARALIF.
                </Card.Text>
                <Link href="/#CarValuation">Explore More → </Link>
              </Card.Body>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div
            className="card shadow-sm d-flex align-items-center px-5 py-3"
            style={{
              flexDirection: "row",
            }}
          >
            <div>
              <Card.Img
                variant="top"
                src="https://yallamotor-production-assets.s3.ap-south-1.amazonaws.com/uploads/yalla_services/service-valuation.png"
              />
            </div>
            <div>
              <Card.Body>
                <h4>Car Expert Advice</h4>
                <Card.Text>1 on 1 session with car experts</Card.Text>
                <Link href="/#CallExpert">Explore More → </Link>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarServices;
