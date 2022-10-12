import React from 'react'
import { Bounce } from 'react-awesome-reveal';
import { Row, Col, Card } from 'react-bootstrap';
import { Zoom } from 'react-awesome-reveal';

function Project() {

  return (
    <div className="Experience_Row">
      <Row>
        <Col lg={6}>
          <img
            src={require("./../Assests/Project-logo.png")}
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
        <Col lg={6} className="Exp_Col">
          <Bounce>
            <div className="Exp_Content">
              <h1>Project</h1>
              <p className="exp_p">
                My projects makes use of vast variety of latest technology
                tools. My best experience is to create React projects and deploy
                them to web applications.
              </p>
            </div>
          </Bounce>
        </Col>
      </Row>
      <Row>
        <Col className="Second_Row">
          <Zoom>
            <Card style={{ width: "18rem" }} className="Sec_Card">
              <Card.Body>
                <Card.Title>Stronger Me</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Domain:Fitness Application
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    This application provides the client with a variety of
                    functionalities based on their needs.
                  </p>
                  <p>
                    Through Stronger application’s admin portal, Trainers,
                    Plans, and Reward Coin can be added and managed by the
                    admin.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
          <Zoom>
            <Card style={{ width: "18rem" }} className="Sec_Card">
              <Card.Body>
                <Card.Title>My Porfolio</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Domain:About Me
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    This application provides information about my portfolio.
                  </p>
                  <p>
                    Through this application’s we come across my projects,
                    experience, education and other details etc.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
          <Zoom>
            <Card style={{ width: "18rem" }} className="Sec_Card">
              <Card.Body>
                <Card.Title>E-Kart Mini Project</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Domain:Online Store
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    This application allows user to go through the products and
                    buy them through online.
                  </p>
                  <p>
                    Through this application’s we can come across CRUD
                    operations, HTTP integration and form Validations etc.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
      </Row>
      <Row className="my-5">
        <p className="last_Content">
          Made with <i class="fa-sharp fa-solid fa-heart"></i> by Ranjith Reddy
          M A
        </p>
      </Row>
    </div>
  );
}

export default Project