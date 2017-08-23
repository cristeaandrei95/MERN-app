import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import ModalDeviceAdd from "./ModalDeviceAdd";
import DeviceTable from "./DeviceTable";
import style from "../../style"

export default class DeviceList extends React.Component {
  constructor() {
    super();
    this.state = {
      devices: [],
      loading: true
    };
  }
  componentDidMount() {
    console.log('DeviceList: componentDidMount');
    this.loadData();
  }
  loadData() {
    fetch(`/api/customers/${this.props.params.id}/devices`).then(response =>
      response.json()
    ).then(devices => {
      this.setState({ devices });
      console.log(`Devices loaded in DeviceList state: ${devices}`);
    }).catch(err => {
      console.log(err);
    });
  }
  addDevice(newDevice) {
    console.log('Adding Device:', newDevice);
    fetch(`/api/customers/${this.props.params.id}/addDevice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDevice),
    }).then(res => res.json()).then(() => {
      this.loadData();
    }).catch(err => {
      // ideally, show error to user also.
      console.log('Error adding Device:', err);
    });
  }
  print(){
    window.print();
}

  render() {
    return (
      <div>
        <h1>Print</h1>
        <DeviceTable devices={this.state.devices} params={this.props.params}/>
        <button className="btn btn-success" style={style.table} onClick={this.print}>Print</button>
      </div>
    );
  }
}
