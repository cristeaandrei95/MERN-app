import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import ModalCustomerAdd from "./ModalCustomerAdd";
import CustomerTable from "./CustomerTable";
import style from "../../style.js";


export default class CustomerList extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }
  componentDidMount() {
    console.log('CustomerList: componentDidMount');
    this.loadData();
  }

  loadData() {
    fetch(`/api/customers/`).then(response =>
      response.json()
    ).then(customers => {
      this.setState({ customers });
    }).catch(err => {
      console.log(err);
    });
  }

  addCustomer(newCustomer) {
    console.log('Adding Customer:', newCustomer);
    fetch('/api/customers/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCustomer),

    }).then(res => res.json()).then(customer => {

      const modifiedCustomers = update(this.state.customers, { $push: [customer] });
      this.setState({ customers: modifiedCustomers });

    }).catch(err => {
      // ideally, show error to user also.
      console.log('Error adding Customer:', err);
    });
  }

  render() {
    console.log('Rendering CustomerList, num items:', this.state.customers.length);
    return (
      <div style={style.row}>
        <h1>Customers</h1>
          <ModalCustomerAdd addCustomer={this.addCustomer.bind(this)} />
          <CustomerTable customers={this.state.customers} />
      </div>
    );
  }
}
