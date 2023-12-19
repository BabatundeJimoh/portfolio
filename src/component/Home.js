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
            <h4>
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
                src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  This is a weather app I created.It tells you the weather
                  condition of any place you want to know.
                </Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <a
                    href="https://github.com/BabatundeJimoh/weather"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://tundesweatherapp.netlify.app"
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
                src="https://www.codingnepalweb.com/wp-content/uploads/2021/12/Build-A-Random-Quote-Generator-in-HTML-CSS-JavaScript.jpg"
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
                  only using html and css.Really helped me.
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
