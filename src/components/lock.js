import React, { Component } from "react";
import {
  Modal,
  Form,
  Button,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

export class LOCK_COMPONENT extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h2>Locks</h2>
            </Col>
            <Col>
              <Button
                variant="primary"
                onClick={this.props.lockHandleShow}
                style={{
                  backgroundColor: "#4e73df",
                  color: "white",
                  float: "right",
                  marginBottom: "0.5rem",
                }}
              >
                Add Lock
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {this.props.lockData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
        <Modal
          show={this.props.lockShowModal}
          onHide={this.props.lockHandleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Lock Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lock Name"
                  name="name"
                  value={this.props.lockDataParams.name}
                  onChange={this.props.lockChangeName}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Value:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Value"
                  name="value"
                  value={this.props.lockDataParams.value}
                  onChange={this.props.lockChangeValue}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Pin:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pin"
                  name="pin"
                  value={this.props.lockDataParams.pin}
                  onChange={this.props.lockChangePin}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.lockHandleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.lockHandleSave}>
              Add Lock
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
