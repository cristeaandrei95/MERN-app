import React from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

import ModalNoteAdd from "./ModalNoteAdd";
import NoteTable from "./NoteTable";


export default class NoteList extends React.Component {
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
      <div>
        <h1>Notes</h1>
        <ModalNoteAdd addNote={this.addNote.bind(this)} />
        <NoteTable notes={this.state.notes} params={this.props.params}/>
      </div>
    );
  }
}
