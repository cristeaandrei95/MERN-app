import React from 'react';
import {Link} from 'react-router';


export default class NoteRow extends React.Component {
        render() {
          console.log(this.props.note.note);
            return (
              <tr key={this.props.i}>
                <td>{this.props.note.note}</td>
                <td>{this.props.note.date}</td>
                <td>{this.props.note.status}</td>

              </tr>
            );

        };

    };
    NoteRow.propTypes = {
      note: React.PropTypes.object,
      key: React.PropTypes.number,
    };
