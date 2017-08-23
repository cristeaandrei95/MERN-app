import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';
import Modal from "react-modal";

import style from "../../style";

export default class ModalCustomerAdd extends React.Component {
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
        const form = document.forms.customerAdd;
        this.props.addCustomer({name: form.name.value,company: form.company.value, phone: form.phone.value, email: form.email.value, address: form.address.value, regcom: form.regcom.value, cif: form.cif.value, iban1: form.iban1.value, bank1: form.bank1.value, iban2: form.iban2.value, bank2: form.bank2.value, status: 'Open', devices: [] });
        form.name.value = '';
        form.company.value = '';
        form.phone.value = '';
        form.email.value = '';
        form.address.value = '';
        form.regcom.value = '';
        form.cif.value = '';
        form.iban1.value = '';
        form.bank1.value = '';
        form.iban2.value = '';
        form.bank2.value = '';
        this.setState({showModal: false});
    }
    handleCloseModal(){
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
                    <h2 style={style.fix}>Add Customer</h2>
                    <form name="customerAdd">
                        <FormGroup style={style.fix}>
                            <Checkbox inline>
                                Company
                            </Checkbox>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="name" placeholder="name"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="company" placeholder="company"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="phone" placeholder="phone"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="email" placeholder="email"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="address" placeholder="address"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="regcom" placeholder="regcom"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="cif" placeholder="cif"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="iban1" placeholder="iban1"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="bank1" placeholder="bank1"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="iban2" placeholder="iban2"/>
                        </FormGroup>
                        <FormGroup className="col-md-4">
                            <FormControl type="text" name="bank2" placeholder="bank2"/>
                        </FormGroup>
                        <Button bsStyle="primary" onClick={this.handleSubmit} >Add</Button>
                    </form>
                </Modal>
                <button type="button" onClick={this.handleOpenModal} style={style.table} className="btn btn-primary">Add Customer</button>
            </div>
        );
    }
}
ModalCustomerAdd.propTypes = {
    addCustomer: React.PropTypes.func.isRequired
};
