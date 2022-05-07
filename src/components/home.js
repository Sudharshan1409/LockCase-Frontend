import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axiosInstance from "../axiosInstance";

export default class HOME extends Component {
  async callApi() {
    const result = await axiosInstance.get(`/locks`);
    console.log("results", result);
  }
  render() {
    this.callApi();
    return (
      <>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
