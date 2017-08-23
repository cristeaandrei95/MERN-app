import React from 'react';
import {Link} from 'react-router';

export default class DeviceRow extends React.Component {
        render() {
          let deviceStatus;
          try {
               status = typeof (this.props.device.notes[this.props.device.notes.length - 1].status) !== 'undefined' ? true : false;
               if (status) {
                 console.log(this.props.device.notes[this.props.device.notes.length - 1].status);
                 deviceStatus = this.props.device.notes[this.props.device.notes.length - 1].status;
               }
           }
           catch (err) {
             deviceStatus = this.props.device.status;
           }
            return (
              <tr key={this.props.i}>
                <td>{this.props.device.device}</td>
                <td>{this.props.device.model}</td>
                <td>{this.props.device.imei}</td>
                <td>{this.props.device.defects}</td>
		<td>{this.props.device.unspecified}</td>
		<td>{this.props.device.observations}</td>
                <td>{deviceStatus}</td>
              </tr>
            );

        };

    };
    DeviceRow.propTypes = {
      device: React.PropTypes.object,
      key: React.PropTypes.number,
    };
