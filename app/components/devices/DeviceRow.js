import React from 'react';
import {Link} from 'react-router';

export default class DeviceRow extends React.Component {
constructor(props){
  super()
  this.state = {
    printable: props.device.printable
  }
}


    onCheckChange(e) {
      if(this.state.printable){
        this.setState({printable: 0});
        console.log(this.state.printable);
      } else {
        this.setState({printable: 1});
        console.log(this.state.printable);
      }
        let state = this.state.printable
        this.state.printable == 1 ? this.setState({ printable: 0 }) : this.setState({ printable: 1 })
        console.log(this.state.printable);
        if (state) {
            console.log('check');
            fetch(`/api/customers/${this.props.params.id}/devices/${this.props.device.id}/printing`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"printable": 0})
            }).then(res => res.json()).catch(err => {
                console.log('Error changing printable state:', err);
            });
        } else {
            console.log('uncheck');
            fetch(`/api/customers/${this.props.params.id}/devices/${this.props.device.id}/printing`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"printable": 1})
            }).then(res => res.json()).catch(err => {
                console.log('Error changing printable state:', err);
            });
        }
    }
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
            <tr>
                <td><input type="checkbox" className="printCheckbox" name="printable" checked={this.state.printable} onChange={this.onCheckChange.bind(this)}/></td>
                <td>
                    <Link to={`/customers/${this.props.params.id}/devices/${this.props.device.id}`}>{this.props.device.device}</Link>
                </td>
                <td>{this.props.device.model}</td>
                <td>{this.props.device.imei}</td>
                <td>{this.props.device.createdAt}</td>
                <td>{deviceStatus}</td>
            </tr>
        );

    };

};
DeviceRow.propTypes = {
    device: React.PropTypes.object,
    key: React.PropTypes.number
};
