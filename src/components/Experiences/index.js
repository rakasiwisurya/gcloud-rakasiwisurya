import React from "react";

const Experiences = () => {
  return (
    <section id="experiences" style={{ margin: "50px 0" }}>
      <h1 className="h2 text-secondary fw-bold text-center mb-5">Work Experiences</h1>
      <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
        <div class="timeline-step">
          <div
            class="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title="2003"
          >
            <div class="inner-circle"></div>
            <p class="h6 mt-3 mb-1">2015-2017</p>
            <p class="h6 text-muted mb-1">UI/UX Designer</p>
            <p class="h6 mb-0 mb-lg-0" style={{ color: "#aaa" }}>
              PT. Nutech Integrasi
            </p>
          </div>
        </div>
        <div class="timeline-step">
          <div
            class="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title="2004"
          >
            <div class="inner-circle"></div>
            <p class="h6 mt-3 mb-1">2017-2019</p>
            <p class="h6 text-muted mb-1">Frontend Developer</p>
            <p class="h6 mb-0 mb-lg-0" style={{ color: "#aaa" }}>
              PT. Nutech Integrasi
            </p>
          </div>
        </div>
        <div class="timeline-step">
          <div
            class="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title="2005"
          >
            <div class="inner-circle"></div>
            <p class="h6 mt-3 mb-1">2019-2021</p>
            <p class="h6 text-muted mb-1">Backend Developer</p>
            <p class="h6 mb-0 mb-lg-0" style={{ color: "#aaa" }}>
              PT. Nutech Integrasi
            </p>
          </div>
        </div>
        <div class="timeline-step mb-0">
          <div
            class="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title="2020"
          >
            <div class="inner-circle"></div>
            <p class="h6 mt-3 mb-1">2021-2022</p>
            <p class="h6 text-muted mb-1">Fullstack Developer</p>
            <p class="h6 mb-0 mb-lg-0" style={{ color: "#aaa" }}>
              PT. Nutech Integrasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
