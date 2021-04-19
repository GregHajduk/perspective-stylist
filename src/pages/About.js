import React from "react";
import Title from "../components/Title";
import PageMargin from "../components/PageMargin";
import profile from "../assets/images/profile.jpg";

function About() {
  return (
    <PageMargin className="about__container">
      <Title title="about" />
      <article className="about">
        <div className="about__info">
          <h4 className="about__title">Hi I'm Daniela Gogolak</h4>
          <p className="about__desc">
            Interior design is the art and science of enhancing the interior of
            a building to achieve a healthier and more aesthetically pleasing
            environment for the people using the space. An interior designer is
            someone who plans, researches, coordinates, and manages such
            enhancement projects. Interior design is a multifaceted profession
            that includes conceptual development, space planning, site
            inspections, programming, research, communicating with the
            stakeholders of a project, construction management, and execution of
            the design.
          </p>
        </div>
        <div className="about__img">
          <img src={profile} alt="profile" />
        </div>
      </article>
      {/* <ContactForm /> */}
    </PageMargin>
  );
}

export default About;
      
