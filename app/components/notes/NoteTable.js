import React from 'react';
import {Link} from 'react-router';
import NoteRow from './NoteRow';

export default class NoteTable extends React.Component {
    render() {
      console.log(`Note Table has: ${this.props.notes}`);
      let Row = this.props.notes.map((note, i) =>   ( <NoteRow note={note} params={this.props.params} key={i}/> ) );
        return (
            <table className="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <th>Note</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{Row}</tbody>
            </table>
        );
    };
};

NoteTable.propTypes = {
    notes: React.PropTypes.array
};
