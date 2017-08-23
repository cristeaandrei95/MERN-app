import React from 'react';
import {Link} from 'react-router';
import DeviceRow from './DeviceRow';

export default class DeviceTable extends React.Component {
    render() {
      console.log(`Device Table has: ${this.props.devices}`);
      let Devices = this.props.devices.filter(devices => devices.printable == 1);
      let Row = Devices.map((device, i) =>   ( <DeviceRow device={device} params={this.props.params} key={i}/> ) );
        return (
            <table className="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <th>Dispozitiv</th>
                        <th>Model</th>
                        <th>Imei</th>
                        <th>Defect</th>
                        <th>Defect constatat</th>
			<th>Observatii</th>
                        <th>Stare</th>
                    </tr>
                </thead>
                <tbody>{Row}</tbody>
            </table>
        );
    };
};

DeviceTable.propTypes = {
    customers: React.PropTypes.array
};
