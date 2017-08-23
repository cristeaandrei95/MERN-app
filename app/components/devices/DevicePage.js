import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';
import style from "../../style";

import DeviceInfo from './DeviceInfo';
import NoteList from '../notes/NoteList';

import { Panel, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Alert }
  from 'react-bootstrap';

export default class CustomerPage extends React.Component {
  render() {

    return (
      <div style={style.row}>
      <DeviceInfo params={this.props.params} />
      <NoteList params={this.props.params}/>
      </div>
    );
  }
}
DeviceInfo.propTypes = {
  params: React.PropTypes.object.isRequired,
  device: React.PropTypes.object,
};
