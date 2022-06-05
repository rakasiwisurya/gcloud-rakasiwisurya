import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const certificates = [
  "https://storage.googleapis.com/rakabucket-startup/FE-1.jpg",
  "https://storage.googleapis.com/rakabucket-startup/FE-2.jpg",
  "https://storage.googleapis.com/rakabucket-startup/FE-3.jpg",
  "https://storage.googleapis.com/rakabucket-startup/BE-1.jpg",
  "https://storage.googleapis.com/rakabucket-startup/BE-2.jpg",
  "https://storage.googleapis.com/rakabucket-startup/BE-3.jpg",
];

const Certificates = () => {
  return (
    <section id="certificates" className="bg-dark" style={{ padding: "50px 0" }}>
      <Container>
        <h1 className="h2 text-light fw-bold text-center mb-5">My Certificates</h1>
        <Row className="g-3">
          {certificates.map((certificate, index) => (
            <Col md={4} key={`certificate-${index}`}>
              <Image
                src={certificate}
                style={{ width: "100%", cursor: "pointer" }}
                rounded
                onClick={() => window.open(certificate)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
