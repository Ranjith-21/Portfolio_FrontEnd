import React from 'react'
import { Bounce, JackInTheBox, Slide } from 'react-awesome-reveal';
import { Row, Col, Card } from 'react-bootstrap';
import './../Components/Custom.scss'

function Education() {
  return (
    <div className="Education">
      <Row>
        <Col lg="6">
          <div className="eduImg">
            <img
              src={require("./../Assests/Edu_logo.png")}
              width="90%"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="Edu_content">
            <Bounce>
            <h1>Education</h1>
            <p>Basic Qualification and Certifcations</p>
            <div className="Icon_div">
              <i class="fa-solid fa-building-columns"></i>
              <i class="fa-sharp fa-solid fa-certificate"></i>
            </div>
            </Bounce>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg={12} className="Second_Row_Content my-3">
          <h1>Degree Recieved</h1>
        </Col>
        <Col className="Col_Content">
          <div className="img_div mx-2">
            <img
              className="card_img"
              src={require("./../Assests/ps-logo.png")}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <Slide>
          <Card className="text-start">
            <Card.Header className="CardHeader">
              <h1 className="Col_Header">
                Presidency University, Bangalore &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <p>2017-2020</p>
              </h1>
              <p className="Stream">B.Tech in Civil Engineering</p>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <i class="fa-solid fa-bolt"></i> Had successfully completed
                  EXTENSIVE SURVEY PROJECT held in Ghati, Bangalore.
                </p>
                <p>
                  <i class="fa-solid fa-bolt"></i> Final year project on
                  ''UPGRADATION OF KANAKPURA MUNICIPALITY ROADS" conducted in SJ
                  (Govt) Polytechnic.
                </p>
                <p>
                  <i class="fa-solid fa-bolt"></i> Final year project on ''LAB
                  CONSTRUCTION AND EVALUATION OF A CEMENT CONCRETE POROUS
                  PAVEMENT'' <br />
                  conducted in Presidency University.
                </p>
                <p>
                  <i class="fa-solid fa-bolt"></i> Attended internship in
                  ''ETERNITY STRUCTURES(Designing and Construction Company)''
                  for 56 days, as Phase1 Project from <br />
                  Presidency University during Odd Sem.(5th Sem)
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Slide>
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg={12} className="Second_Row_Content my-3">
          <h1>Certification</h1>
        </Col>
        <Col className="Col_Content">
          <div className="img_div mx-2">
            <img
              className="card_img"
              src={require("./../Assests/Jspider-logo.png")}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
          <Slide >
          <Card className="text-start">
            <Card.Header className="CardHeader">
              <h1 className="Col_Header">
                J Spiders, Bangalore &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <p>11/2021-3/2022</p>
              </h1>
              <p className="Stream">Trained as Front-End Developer</p>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <i class="fa-solid fa-bolt"></i> Had successfully completed
                  the Training Period as a Certified Front-end Developer.
                </p>
                <p>
                  <i class="fa-solid fa-bolt"></i> Writing application interface
                  codes using JavaScript following react.js workflows.
                </p>
                <p>
                  <i class="fa-solid fa-bolt"></i> Had completed the given task
                  within the spitulated time.
                </p>
                <p>
                  <i class="fa-solid fa-bolt"></i> Gained Knowledge and
                  confidence on coding by working on several mini Projects.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          </Slide>
        </Col>
      </Row>
      <Row>
        <p className="last_Content_Edu">
          Made with <i class="fa-sharp fa-solid fa-heart"></i> by Ranjith Reddy
          M A
        </p>
      </Row>
    </div>
  );
}

export default Education