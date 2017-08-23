import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';
import style from "../../style.js";

import { Panel, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Alert }
  from 'react-bootstrap';

export default class CustomerInfo extends React.Component {

  constructor() {
    super();
    this.state = { successVisible: false, customer: {} };
  }

  componentDidMount() {
    this.loadData();
  }

    loadData() {
      fetch(`/api/customers/${this.props.params.id}`).then(response => response.json()).then(customer => {
        this.setState({ customer });    // all the attributes of the Customer are top level state items
      });
    }

  render() {
    const customer = this.state.customer;
    return (

        <Panel  header={`Customer ID: ${this.props.params.id}`}>
          <form style={style.formPadding} onSubmit={this.submit}>

          <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Name :</label><span style={style.red}>{customer.name}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Company :</label><span style={style.red}>{customer.company}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Phone :</label><span style={style.red}>{customer.phone}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Email :</label><span style={style.red}>{customer.email}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Address :</label><span style={style.red}>{customer.address}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Reg. Com :</label><span style={style.red}>{customer.regcom}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>CIF :</label><span style={style.red}>{customer.cif}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>IBAN :</label><span style={style.red}>{customer.iban1}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Bank :</label><span style={style.red}>{customer.bank1}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>IBAN :</label><span style={style.red}>{customer.iban2}</span>
          </FormGroup>
                    <FormGroup className="col-md-4" style={style.outputMargin}>
              <label style={style.inputMargin}>Bank :</label><span style={style.red}>{customer.bank2}</span>
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
