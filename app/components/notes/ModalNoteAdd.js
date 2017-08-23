import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';
import Modal from "react-modal";

import style from "../../style";

export default class ModalNoteAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleSubmit(e) {
        console.log('Got submit:', e);
        e.preventDefault();
        const form = document.forms.noteAdd;
        this.props.addNote({note: form.note.value, status: form.status.value});
        form.note.value = '';
        this.setState({showModal: false});
    }
    handleCloseModal() {
        this.setState({showModal: false});
    }
    handleOpenModal() {
        this.setState({showModal: true});
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}>
                    <button className="btn btn-danger" onClick={this.handleCloseModal}>X</button>
                    <h2 style={style.fix}>Add Note</h2>
                    <form name="noteAdd">
                        <FormGroup className="col-md-8">
                            <FormControl type="text" name="note" placeholder="Note"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl componentClass="select" name="status">
                                <option>Primit in service</option>
                                <option>Acceptat</option>
                                <option>Refuzat</option>
                                <option>Asteptand piese</option>
                                <option>In lucru</option>
                                <option>Reparat</option>
                                <option>Predat</option>
                            </FormControl>
                        </FormGroup>
                        <Button bsStyle="primary" onClick={this.handleSubmit}>Add</Button>
                    </form>
                </Modal>
                <button type="button" onClick={this.handleOpenModal} style={style.table} className="btn btn-primary">Add Note</button>
            </div>
        );
    }
}
ModalNoteAdd.propTypes = {
    addNote: React.PropTypes.func.isRequired
};
