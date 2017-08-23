import React from 'react';
import {Link} from 'react-router';

export default class CustomerRow extends React.Component {
        render() {
            return (
              <tr>
                <td><Link to={`/customers/${this.props.customer._id}`}>{this.props.customer.name}</Link></td>
                <td>{this.props.customer.company}</td>
                <td>{this.props.customer.phone}</td>
                <td>{this.props.customer.address}</td>
                <td>{this.props.customer.status}</td>
              </tr>
            );

        };

    };
    CustomerRow.propTypes = {
      customer: React.PropTypes.object,
      key: React.PropTypes.number,
    };
