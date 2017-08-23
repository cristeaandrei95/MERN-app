import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import NoteTable from "../notes/NoteTable";
import style from "../../style.js";


export default class DevicePublic extends React.Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }
  componentDidMount() {
    console.log('DeviceList: componentDidMount');
    this.loadData();
  }
  loadData() {
    fetch(`/api/customers/${this.props.params.id}/devices/${this.props.params.did}/notes`).then(response =>
      response.json()
    ).then(notes => {
      this.setState({ notes });
      console.log(`Devices loaded in NoteList state: ${notes}`);
    }).catch(err => {
      console.log(err);
    });
  }
  addNote(newNote) {
    console.log('Adding Note:', newNote);
    fetch(`/api/customers/${this.props.params.id}/devices/${this.props.params.did}/addNote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote),
    }).then(res => res.json()).then(() => {
      this.loadData();
    }).catch(err => {
      // ideally, show error to user also.
      console.log('Error adding Notes:', err);
    });
  }
  render() {
    return (
      <div style={style.row}>
        <h1>Notes</h1>
        <NoteTable notes={this.state.notes} params={this.props.params}/>
      </div>
    );
  }
}
