import React from 'react';
import {
    Panel,
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    ButtonToolbar
} from 'react-bootstrap';

export default class CustomerFilter extends React.Component {
    static get propTypes() {
        return {initFilter: React.PropTypes.object.isRequired, submitHandler: React.PropTypes.func.isRequired};
    }

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.initFilter.status,
            name: this.props.initFilter.name,
            company: this.props.initFilter.company,
            phone: this.props.initFilter.phone

        };
        this.submit = this.submit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
    }

    componentWillReceiveProps(newProps) {
      if (newProps.initFilter.id === this.state.id && newProps.initFilter.name === this.state.name && newProps.initFilter.company === this.state.company && newProps.initFilter.phone === this.state.phone) {
            console.log('CustomerFilter: componentWillReceiveProps, no change');
            return;
        }
        console.log('CustomerFilter: componentWillReceiveProps, new filter:', newProps.initFilter);
        this.setState({id: newProps.initFilter.id, name: newProps.initFilter.name, company: newProps.initFilter.company, phone: newProps.initFilter.phone});
    }

    onChangeId(e) {
        this.setState({id: e.target.value});
    }

    onChangeName(e) {
        this.setState({name: e.target.value});
    }
    onChangeCompany(e) {
        this.setState({company: e.target.value});
    }
    onChangePhone(e) {
        this.setState({phone: e.target.value});
    }



    submit(e) {
        e.preventDefault();
        const newFilter = {};
        if (this.state.id)
            newFilter.id = this.state.id;
        if (this.state.name)
            newFilter.name = this.state.name;
        if (this.state.company)
            newFilter.company = this.state.company;
        if (this.state.phone)
            newFilter.state = this.state.phone;
        this.props.submitHandler(newFilter);
    }

    render() {
        console.log('Rendering CustomerFilter, state=', this.state);
        return (
            <Panel collapsible defaultExpanded header="Search">
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <FormGroup>
                                <ControlLabel>ID</ControlLabel>
                                <FormControl type="text" value={this.state.id} onChange={this.onChangeId} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" value={this.state.name} onChange={this.onChangeName} />
                        </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        <FormGroup>
                            <ControlLabel>Company</ControlLabel>
                            <FormControl type="text" value={this.state.company} onChange={this.onChangeCompany} />
                        </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        <FormGroup>
                            <ControlLabel>Phone</ControlLabel>
                            <FormControl type="text" value={this.state.phone} onChange={this.onChangePhone} />
                        </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <FormGroup>
                                <ControlLabel>&nbsp;</ControlLabel>
                                <ButtonToolbar>
                                    <Button type="submit" bsStyle="primary" onClick={this.submit}>Submit</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        );
    }
}
