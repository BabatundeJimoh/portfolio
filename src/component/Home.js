import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Container fluid style={{ backgroundColor: "#474d4c", color: "white" }}>
        <Row style={{ backgroundColor: "#474d4c" }}>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#home">
                <h4>
                  <b>Portfolio</b>
                </h4>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#review">Projects</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>

        <Row id="home" style={{ paddingTop: "120px" }}>
          <Col md={6}>
            <h3>Hi, it's Me</h3>
            <h2>
              I'm <b style={{ color: "#00e8f8" }}>Babatunde</b>
            </h2>
            <p>
              a passionate software developer with a<br></br>
              strong focus on web development. I specialize in creating
              <br></br>
              interactive and user-friendly web applications using
              <br></br>
              cutting-edge technologies like React.js and Bootstrap.
              <br></br>
            </p>
            <div style={{ marginTop: "40px" }}>
              <div className="myicons">
                <a href="https://github.com/BabatundeJimoh">
                  <i className="bi bi-github"></i>{" "}
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/babatunde-jimoh-a4147325a/">
                  {" "}
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              marginTop: "16px",
            }}
          >
            <img
              src="https://d9jhi50qo719s.cloudfront.net/wd7/samples/13ax_800.png?230906090050"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "50%",
                width: "70%", // Adjust the width as needed
                marginTop: "25px",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Adding a shadow effect
                transition: "transform 0.3s ease-in-out", // Adding a smooth transition effect
              }}
              alt="Profile"
              className="profile-image"
            />

            <div
              style={{
                border: "0px",
                marginTop: "10px",
                width: "100%", // Use 100% width for responsiveness
                height: "8px",
                backgroundColor: "#20b2bd",
                marginLeft: "10px",
              }}
            ></div>
          </Col>
        </Row>

        <Row id="about" style={{ paddingTop: "120px" }}>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://d9jhi50qo719s.cloudfront.net/wd7/samples/13ax_800.png?230906090050"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "400px",
                width: "80%",
              }}
              alt="Profile"
            />
          </Col>

          <Col md={6} style={{ marginTop: "40px" }}>
            <h4 style={{ textAlign: "center" }}>
              About <b style={{ color: "#00e8f8" }}>Me</b>
            </h4>
            <p>
              I'm known for my attention to detail, problem-solving abilities,
              <br></br>
              and a commitment to writing clean, efficient code. I thrive in
              <br></br>
              collaborative environments, working closely with<br></br>
              cross-functional teams to bring ideas to life.
            </p>
            <i
              className="bi bi-telephone-fill"
              style={{ color: "#00e8f8", paddingRight: "10px" }}
            ></i>
            +233 247668903
            <p style={{ paddingTop: "20px" }}>
              <i
                className="bi bi-envelope-at-fill"
                style={{ color: "#00e8f8", paddingRight: "10px" }}
              ></i>
              babatunde135333@gmail.com
            </p>
          </Col>

          <h3 style={{ textAlign: "center", paddingTop: "50px" }}>
            My <b style={{ color: "#00e8f8" }}>Services</b>
          </h3>
        </Row>

        <Row id="services">
          <div className="container fluid ">
            <div className="card" style={{ color: " #00e8f8" }}>
              <div className="img-box">
                <img src="https://www.computerhope.com/jargon/j/javascript.png" />
              </div>
              <div className="content">
                <h2>JavaScript</h2>
                <p>
                  Hello, I'm Babatunde, a passionate software developer with an
                  extensive background in JavaScript, a versatile and powerful
                  programming language that drives the modern web. I'm deeply
                  enthusiastic about creating interactive and dynamic web
                  applications that engage users.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="card" style={{ color: "#00e8f8" }}>
              <div className="img-box">
                <img src="https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b" />
              </div>
              <div className="content">
                <h2>React</h2>
                <p>
                  I'm software developer on an exciting journey of mastering
                  React.js. I'm deeply passionate about web development and have
                  embarked on a quest to harness the power of this dynamic
                  JavaScript library.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="card" style={{ color: " #00e8f8" }}>
              <div className="img-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" />
              </div>
              <div className="content">
                <h2>Bootstrap</h2>
                <p>
                  I am also on an exciting journey to master Bootstrap, the
                  versatile front-end framework that empowers modern web
                  development. I'm deeply enthusiastic about creating visually
                  appealing and responsive web interfaces that provide an
                  exceptional user experience.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </Row>
        <Row id="review" className="justify-content-center">
          <h4
            style={{
              textAlign: "center",
              color: "#00e8f8",
              marginBottom: "60px",
            }}
          >
            <b>Projects</b>
          </h4>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--ifHHJ0Yh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/e6zmlxfce899mk6e53ba.png"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Currency Convert</Card.Title>
                <Card.Text>
                  In this app Currency Converter , you can and convert your
                  currency to a different countrys currency.
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <a
                    href="https://github.com/BabatundeJimoh/currency-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://tundecurrency-converter.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    <i class="bi bi-globe"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card
              style={{
                width: "18rem",
              }}
            >
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>E-commerce Website</Card.Title>
                <Card.Text>
                  This is an e-commerce a simple e-commerce website created
                  using React Redux Toolkit.
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <a
                    href="https://github.com/BabatundeJimoh/e-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://e-commerce-4nml135cy-babatundejimohs-projects.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    <i class="bi bi-globe"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card
              style={{
                width: "18rem",
              }}
            >
              <Card.Img
                variant="top"
                src="data:image/png;base64,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"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Daily Quotes</Card.Title>
                <Card.Text>
                  An app created to genetrate quotes, increase your knowleadge
                  and inspire and also motivates you.
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <a
                    href="https://github.com/BabatundeJimoh/quotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://tundequotes.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    <i class="bi bi-globe"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="mb-3 d-flex justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dz209s6jk/image/upload/v1676651421/Challenges/xals0mqfmph6kcspsezk.jpg"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Amazing Card</Card.Title>
                <Card.Text>
                  This is a challenge I completed in frontend mentor basically
                  only using html and css. Really helped me.
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <a
                    href="https://github.com/BabatundeJimoh/mentor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://tundescard.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                  >
                    {" "}
                    <i class="bi bi-globe"></i>{" "}
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row id="contact" style={{ paddingTop: "90px" }}>
          <h4 style={{ textAlign: "center" }}>
            Leave <b style={{ color: "#00e8f8" }}>Message</b>
          </h4>
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                  <Form.Control
                    placeholder="Email"
                    style={{ marginTop: "25px" }}
                  />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                  <Form.Control
                    placeholder="Phone"
                    style={{ marginTop: "25px" }}
                  />
                </Col>
                <InputGroup className="mb-3">
                  <Form.Control
                    style={{ height: "70px", marginTop: "35px" }}
                    type="text"
                    name="message"
                    placeholder="Write a messgae"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    style={{ marginTop: "35px" }}
                  >
                    <button type="submit">
                      <i class="bi bi-send"></i>
                    </button>
                  </InputGroup.Text>
                </InputGroup>
              </Row>
            </Form>
          </Container>
          <div style={{ textAlign: "center" }}>
            <i
              className="bi bi-arrow-up-square"
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick={scrollToTop}
            ></i>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
