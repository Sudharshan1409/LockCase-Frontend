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

export class CREATE_GROUP_COMPONENT extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h2>Groups</h2>
            </Col>
            <Col>
              <Button
                variant="primary"
                onClick={this.props.groupHandleShow}
                style={{
                  backgroundColor: "#4e73df",
                  color: "white",
                  float: "right",
                  marginBottom: "0.5rem",
                }}
              >
                Add Group
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
              {this.props.groupData.map((data, index) => {
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
          show={this.props.groupShowModal}
          onHide={this.props.groupHandleClose}
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
                <Form.Label>Group Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Group Name"
                  name="name"
                  value={this.props.groupDataParams.name}
                  onChange={this.props.groupChangeName}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.groupHandleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.groupHandleSave}>
              Add Group
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
