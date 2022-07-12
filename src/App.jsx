import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder="email@email.com.br" />
                  <Form.Text className='text-muted'>
                    We'll never share you email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder="password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='secondary' type='submit'>Login</Button>
          </Form>
          <Card className='mb-3' style={{ color: "#000" }}>
            <Card.Img src='https://picsum.photos/200/50' />
            <Card.Body>
              <Card.Title>
                Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstrap cards
              </Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a Button</Alert>
          <Button>Button test</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
