import React from 'react'
import { Bounce } from 'react-awesome-reveal';
import { Row, Col, Accordion } from 'react-bootstrap';

function Experience() {
  return (
    <div className="Experience_Row">
      <Row>
        <Col lg={6}>
          <img
            src={require("./../Assests/Exp-logo.png")}
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
        <Col lg={6} className="Exp_Col">
          <Bounce>
          <div className="Exp_Content">
            <h1>Experience</h1>
            <p>
              <b>Work and Intership</b>
            </p>
            <p className="exp_p">
              I have been working with evolving startups as Associate Software
              Engineer.I have also got trained with well established Institute
              mostly as Trainee Software Developer.
            </p>
          </div>
          </Bounce>
        </Col>
      </Row>
      <Row className="Second_Row_Exp">
        <Col lg={10}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>WORK</Accordion.Header>
              <Accordion.Body>
                <div>
                  <h1>Techno Elevate</h1>
                  <b>10/2020-present</b>
                  <img
                    src={require("./../Assests/Techno_Elevate.png")}
                    width="20%"
                    height="20%"
                    alt=""
                  />
                  <p>
                    I am working as a Reactjs Front End Developer. The projects
                    involved in perfomance optimization and reponsiveness of the
                    application and meeting the clients requirement. Our goal is
                    to make the applicaltion more interactive as per
                    requirements.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Training</Accordion.Header>
              <Accordion.Body>
                <div>
                  <h1>J Spiders</h1>
                  <b>10/2020-present</b>
                  <img
                    src={require("./../Assests/Jspider-logo.png")}
                    width="20%"
                    height="20%"
                    alt=""
                  />
                  <p>
                    I had been Certified as Front End Developer from Jspider
                    Institute and got placement into the company. Got very
                    opportunity to gained Knowledge on technology and confidence
                    on codeing.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className='my-5'>
        <p className="last_Content">
          Made with <i class="fa-sharp fa-solid fa-heart"></i> by Ranjith Reddy
          M A
        </p>
      </Row>
    </div>
  );
}

export default Experience