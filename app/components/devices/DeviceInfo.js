import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';
import style from "../../style";

import { Panel, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Alert }
  from 'react-bootstrap';

export default class CustomerInfo extends React.Component {

  constructor() {
    super();
    this.state = { successVisible: false, device: {}};
  }

  componentDidMount() {
    this.loadData();
  }

    loadData() {
      fetch(`/api/customers/${this.props.params.id}/devices/${this.props.params.did}`).then(response => response.json()).then(device => {
        this.setState({ device: device});    // all the attributes of the Device are top level state items
      });
    }

  render() {
    const device = this.state.device;
    const status = this.state.status;
    return (

        <Panel header={`Device ID: ${this.props.params.did}`}>
          <form style={style.formPadding} onSubmit={this.submit}>
          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Device : </label><span style={style.red}>{device.device}</span>
          </FormGroup>
          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Model : </label><span style={style.red}>{device.model}</span>
          </FormGroup>
          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Imei : </label><span style={style.red}>{device.imei}</span>
          </FormGroup>
          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Defects : </label><span style={style.red}>{device.defects}</span>
          </FormGroup>
          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Observations : </label><span style={style.red}>{device.observations}</span>
          </FormGroup>
          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Status: </label><span style={style.red}>{device.status}</span>
          </FormGroup>
          </form>
                  {this.state.successVisible ? success : null}
        </Panel>
    );
  }
}
CustomerInfo.propTypes = {
  params: React.PropTypes.object.isRequired,
};
