import React from 'react';
import CustomerRow from './CustomerRow';
import {Link} from 'react-router';

export default class CustomerTable extends React.Component {
        render() {
          let Row = this.props.customers.map((customer, i) => ( <CustomerRow customer={customer} key={i}/> ));
            return (
                <table className="table table-striped table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{Row}</tbody>
                </table>
            );
        };
    };

    CustomerTable.propTypes = {
      customers: React.PropTypes.array,
    };
