import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './loginpage.css';

const LoginPage = () => {
  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={6} className="left-section">
          <div className="logo">
            <h1>Excel Tech Consulting</h1>
          </div>
        </Col>
        <Col md={6} className="right-section">
          <div className="welcome-back">
            <h1 className="brand">STOCK<span className="highlight">PULSE</span></h1>
            <h2>Welcome Back 👋</h2>
            <p>
              Sign in to stay informed about the latest developments with your stocks. Track real-time updates and gain insights into the current status of your investments effortlessly.
            </p>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="At least 8 characters" />
                <Form.Text className="text-muted">
                  <a href="#">Forgot Password?</a>
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" className="signin-btn">
                Sign in
              </Button>

              <div className="divider">Or</div>

              <Button variant="light" className="google-signin-btn">
                <img src="path/to/google-icon.png" alt="Google Icon" /> Sign in with Google
              </Button>

              <div className="signup-link">
                Don’t have an account? <a href="#">Sign Up</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
