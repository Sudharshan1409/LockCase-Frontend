import React, { Component } from "react";
import axiosInstance from "../axiosInstance";
import { LOCK_COMPONENT } from "./lock";
import { GROUP_COMPONENT } from "./group";

export default class HOME extends Component {
  constructor(props) {
    super(props);

    // Initializing the state
    this.state = {
      lockData: [],
      groupData: [],
      lockShowModal: false,
      showGroupModal: false,
      lockDataParams: {
        name: "",
        value: "",
        pin: "",
      },
      groupDataParams: {
        name: "",
        description: "",
      },
    };
  }

  lockHandleClose = () => {
    let lockDataParams = this.state.lockDataParams;
    lockDataParams.name = "";
    this.setState({ lockShowModal: false, lockDataParams: lockDataParams });
  };
  lockHandleShow = () => this.setState({ lockShowModal: true });

  groupHandleClose = () => {
    let groupDataParams = this.state.groupDataParams;
    groupDataParams.name = "";
    this.setState({ groupShowModal: false, groupDataParams: groupDataParams });
  };

  groupHandleShow = () => this.setState({ groupShowModal: true });

  lockHandleSave = () => {
    console.log("handle save", this.state);
    axiosInstance
      .post(`/locks`, {
        name: this.state.lockDataParams.name,
        value: this.state.lockDataParams.value,
        pin: this.state.lockDataParams.pin,
      })
      .then((response) => {
        console.log("response", response.data);
      });
    let lockData = this.state.lockData;
    lockData.push({
      name: this.state.lockDataParams.name,
      value: this.state.lockDataParams.value,
    });
    this.setState({
      lockData: lockData,
      lockShowModal: false,
      lockDataParams: {
        name: "",
        value: "",
        pin: "",
      },
    });
    console.log("state", this.state);
  };

  groupHandleSave = () => {
    console.log("handle save", this.state);
    axiosInstance
      .post(`/groups`, {
        name: this.state.groupDataParams.name,
        description: this.state.groupDataParams.description,
      })
      .then((response) => {
        console.log("response", response.data);
        let groupData = this.state.groupData;
        groupData.push(response.data.data);
        this.setState({
          groupData: groupData,
          groupShowModal: false,
          groupDataParams: {
            name: "",
          },
        });
        console.log("state", this.state);
      });
  };

  groupChangeName = (e) => {
    let groupDataParams = this.state.groupDataParams;
    groupDataParams.name = e.target.value;
    this.setState({ groupDataParams: groupDataParams });
  };

  groupChangeDescription = (e) => {
    let groupDataParams = this.state.groupDataParams;
    groupDataParams.description = e.target.value;
    this.setState({ groupDataParams: groupDataParams });
  };

  lockChangeName = (e) => {
    let lockDataParams = this.state.lockDataParams;
    lockDataParams.name = e.target.value;
    this.setState({ lockDataParams: lockDataParams });
  };

  lockChangeValue = (e) => {
    let lockDataParams = this.state.lockDataParams;
    lockDataParams.value = e.target.value;
    this.setState({ lockDataParams: lockDataParams });
  };

  lockChangePin = (e) => {
    let lockDataParams = this.state.lockDataParams;
    lockDataParams.pin = e.target.value;
    this.setState({ lockDataParams: lockDataParams });
  };

  componentDidMount() {
    axiosInstance.get(`/home`).then((response) => {
      console.log("response", response.data.data);
      this.setState({
        lockData: response.data.data.locks,
        groupData: response.data.data.groups,
      });
    });
  }
  render() {
    // const Button = styled.button`
    //   background-color: #4e73df;
    //   color: white;
    //   padding: 12px 20px;
    //   border: none;
    //   border-radius: 4px;
    //   cursor: pointer;
    //   margin: 0.5rem;
    //   float: right;
    // `;

    return (
      <>
        <LOCK_COMPONENT
          lockDataParams={this.state.lockDataParams}
          lockData={this.state.lockData}
          lockHandleShow={this.lockHandleShow.bind(this)}
          lockShowModal={this.state.lockShowModal}
          lockChangeName={this.lockChangeName.bind(this)}
          lockChangeValue={this.lockChangeValue.bind(this)}
          lockChangePin={this.lockChangePin.bind(this)}
          lockHandleClose={this.lockHandleClose.bind(this)}
          lockHandleSave={this.lockHandleSave.bind(this)}
        />
        <GROUP_COMPONENT
          groupDataParams={this.state.groupDataParams}
          groupData={this.state.groupData}
          groupHandleShow={this.groupHandleShow.bind(this)}
          groupShowModal={this.state.groupShowModal}
          groupChangeName={this.groupChangeName.bind(this)}
          groupChangeDescription={this.groupChangeDescription.bind(this)}
          groupHandleClose={this.groupHandleClose.bind(this)}
          groupHandleSave={this.groupHandleSave.bind(this)}
        />
      </>
    );
  }
}
