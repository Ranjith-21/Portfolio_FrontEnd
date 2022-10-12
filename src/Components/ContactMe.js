import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Bounce } from 'react-awesome-reveal';
import axios from 'axios';
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function ContactMe() {
  const [data, setdata] = useState({
    userName:"",
    userComments:"",
    phoneNumber:"",
    email:""
  })
  const [error, seterror] = useState(false)
  const [open, setOpen] = useState(false);
  const submitData=async()=>
  {
    if (validations())
    {
      seterror(false)
      try {
        await axios.post("http://localhost:7000/user/addUserData", {
          userName: data.userName,
          userComments: data.userComments,
          contactNum: data.phoneNumber,
          email: data.email,
        });
        setOpen(true);
        console.log("Data added successfully");
      } catch (err) {
        console.log(err);
      }
   setdata({
     userName: "",
     userComments: "",
     phoneNumber: "",
     email: "",
   });
    }
  }
  const handleInput=(e)=>
  {
    setdata({
      ...data,
      [e.target.name]:e.target.value
    })
    console.log(data);
  }
   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };

    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    let validations=()=>
    {
      if(!data.userName && !data.email && !data.userComments)
      {
        seterror("Naah...! Please enter required details.")
      }else{
        return true
      }
    }


  return (
    <div className="Experience_Row">
      <Row>
        <Col lg={6}>
          <img
            src={require("./../Assests/Contact1.png")}
            width="100%"
            height="100%"
            alt=""
          />
        </Col>
        <Col lg={6} className="Exp_Col">
          <Bounce>
            <div className="Con_Content1">
              <h1>Contact Me</h1>
              <p className="exp_p">
                I am available on almost every social media. You can message me,
                I will reply within 24 hours. I can help you with Reactjs
                Frontend, Redux, React Native and MongoDb.
              </p>
            </div>
          </Bounce>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="Con_Col">
          <Bounce>
            <div className="Con_Content">
              <h1>Address</h1>
              <p className="exp_p">
                Ravindra Nagar, T.Dasarahalli, Bangalore, Karnataka 560057.
              </p>
              <h1>Phone Number</h1>
              <p className="exp_p">+91 9742409231</p>
              <Form className="contact_form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={data.userName}
                    onChange={handleInput}
                    name="userName"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={data.phoneNumber}
                    onChange={handleInput}
                    name="phoneNumber"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={handleInput}
                    name="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Your Opinion on My Portfolio</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.userComments}
                    onChange={handleInput}
                    name="userComments"
                  />
                </Form.Group>
                <Button variant="primary" onClick={submitData}>
                  Submit
                </Button>
                {error?<p style={{color:"red"}} >{error}</p>:""}
              </Form>
            </div>
          </Bounce>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="Thank you for your feedback"
            action={action}
          />
        </Col>
        <Col lg={6}>
          <img
            src={require("./../Assests/Contact2.png")}
            width="100%"
            height="90%"
            alt=""
          />
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

export default ContactMe