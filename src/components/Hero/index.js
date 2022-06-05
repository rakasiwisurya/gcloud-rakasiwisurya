import React from "react";
import { Container, Image } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="bg-dark" style={{ padding: 50 }}>
      <Container className="d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://storage.googleapis.com/rakabucket-startup/pasfoto-whitebg.png"
            alt="Photo Profile"
            width={200}
            roundedCircle
            thumbnail
          />
          <div className="text-light">
            <h1 className="h2 fw-bold text-center mt-4 mb-3">Rakasiwi Surya</h1>
            <div className="d-flex">
              <div>
                <div>Frontend Developer</div>
              </div>

              <div className="border-start border-end border-2 border-light px-3 mx-3">
                <div>UI/UX Designer</div>
              </div>
              <div>
                <div>Backend Developer</div>
              </div>
            </div>

            <div className="text-center mt-3 fw-bold">PT. Nutech Integrasi (Telkom Group)</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
