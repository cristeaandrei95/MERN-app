import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import DeviceTable from "./DeviceTable";
import style from "../../style.js";


export default class CustomerPublic extends React.Component {
  constructor() {
    super();
    this.state = { devices: [] };
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
  render() {
    return (
      <div style={style.row}>
        <h1>Devices</h1>
        <DeviceTable devices={this.state.devices} params={this.props.params}/>
      </div>
    );
  }
}
