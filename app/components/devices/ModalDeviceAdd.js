import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';
import Modal from "react-modal";
import { Link } from 'react-router';

import style from "../../style";

export default class ModalDeviceAdd extends React.Component {
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
        const form = document.forms.deviceAdd;
        this.props.addDevice({
            device: form.device.value,
            model: form.model.value,
            imei: form.imei.value,
            defects: form.defects.value,
            unspecified: form.unspecified.value,
	    observations: form.observations.value
        });
        form.model.value = '';
        form.imei.value = '';
        form.defects.value = '';
        form.unspecified.value = '';
	form.observations.value = '';
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
                    <h2 style={style.fix}>Add Device</h2>
                    <form name="deviceAdd">
		      <div className="col-md-12">
                        <FormGroup className="col-md-4">
                            <FormControl componentClass="select" name="device" >
                                <option>Telefon</option>
                                <option>Tableta</option>
                                <option>Desktop</option>
				<option>Laptop</option>
				<option>Altele</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="model" placeholder="Model"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="imei" placeholder="IMEI"/>
                        </FormGroup>
		      </div>
		      <div className="col-md-12">
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="defects" placeholder="Defects"/>
                        </FormGroup>
			<FormGroup className="col-md-4">
                            <FormControl type="text" name="unspecified" placeholder="Defects observed"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="observations" placeholder="Observations"/>
                        </FormGroup>
		      </div>
		      <div className="col-md-12">
                        <FormGroup className="col-md-4">
			    <Button bsStyle="primary" onClick={this.handleSubmit}>Add</Button>
                        </FormGroup>
		      </div>
                    </form>
                </Modal>
                <button type="button" onClick={this.handleOpenModal} style={style.table} className="btn btn-primary">Add Device</button>
                <Link to={`/customers/${this.props.params.id}/print`}><button className="btn btn-success" style={style.table}>Print page</button></Link>
            </div>
        );
    }
}
ModalDeviceAdd.propTypes = {
    addDevice: React.PropTypes.func.isRequired
};
