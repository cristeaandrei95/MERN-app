import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';
import style from "../../style.js";

import DeviceList from '../devices/DeviceList';
import CustomerInfo from './CustomerInfo';

import { Panel, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Alert }
  from 'react-bootstrap';

export default class CustomerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      successVisible: false
    };
  }
  render() {
    const customer = this.state.customer;
    return (
      <div style={style.row}>
      <CustomerInfo params={this.props.params} />
      <DeviceList params={this.props.params}/>
      </div>
    );
  }
}
CustomerInfo.propTypes = {
  params: React.PropTypes.object.isRequired,
  customer: React.PropTypes.object,
};
