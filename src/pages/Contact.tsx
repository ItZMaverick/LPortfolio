import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Envelope, Phone, GeoAlt, Linkedin, Github } from 'react-bootstrap-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Get In Touch</h1>
      
      <Row className="g-4">
        {/* Contact Information Column */}
        <Col md={5} className="pe-md-4">
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-4">Contact Information</h3>
              
              <div className="d-flex align-items-start mb-4">
                <Envelope className="me-3 mt-1" size={20} />
                <div>
                  <h5>Email</h5>
                  <a href="mailto:lukelukewl@gmail.com" className="text-decoration-none">lukelukewl@gmail.com</a>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <Phone className="me-3 mt-1" size={20} />
                <div>
                  <h5>Phone</h5>
                  <a href="tel:+447453394350" className="text-decoration-none">+44 7453 394350</a>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <GeoAlt className="me-3 mt-1" size={20} />
                <div>
                  <h5>Location</h5>
                  <p className="mb-0">Paisley, UK</p>
                </div>
              </div>
              
              <hr className="my-4" />
              
              <h5 className="mb-3">Find me on</h5>
              <div className="d-flex">
                <Button variant="outline-primary" href="https://linkedin.com/in/yourprofile" target="_blank" className="me-2">
                  <Linkedin className="me-1" /> LinkedIn
                </Button>
                <Button variant="outline-dark" href="https://github.com/itzmaverick" target="_blank">
                  <Github className="me-1" /> GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Contact Form Column */}
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-4">Send Me a Message</h3>
              
              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Thank you! Your message has been sent successfully.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
          
          {/* Additional Info Section */}
          <div className="mt-4 p-4 bg-light rounded">
            <h4 className="mb-3">What to expect</h4>
            <ul className="list-unstyled">
              <li className="mb-2">📅 I typically respond within 24 hours</li>
              <li className="mb-2">💼 Available for freelance opportunities</li>
              <li className="mb-2">🤝 Open to collaboration on interesting projects</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;