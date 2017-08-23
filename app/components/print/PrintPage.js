import React from 'react';
import update from 'react-addons-update';
import {Link} from 'react-router';
import style from "../../style.js";
import {QRCode} from 'react-qr-svg';
import ContentEditable from 'react-contenteditable';

import DeviceTable from './DeviceTable';

import {
    Panel,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
    ButtonToolbar,
    Alert
} from 'react-bootstrap';

export default class CustomerPage extends React.Component {
    constructor() {
        super();
        this.state = {
            devices: [],
            customer: [],
            html: "<b> Garante reparatie: 30 zile - se acorda pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii: </b>"
        };
    }
    componentDidMount() {
        this.loadDevice();
        this.loadCustomer();
    }
    loadDevice() {
      fetch(`/api/customers/${this.props.params.id}/devices`).then(response => response.json()).then(devices => {
          this.setState({devices});
      }).catch(err => {
          console.log(err);
      });

    }
  handleChange(evt) {
    this.setState({html: evt.target.value});
  }
    loadCustomer() {
      fetch(`/api/customers/${this.props.params.id}`).then(response => response.json()).then(customer => {
          this.setState({customer});
      }).catch(err => {
          console.log(err);
      });

    }
    print() {
        window.print();
    }

    render() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = dd + '/' + mm + '/' + yyyy;

        return (
            <div id="print" style={style.row}>
                <div>
                    <div className="col-md-4 col-lg-4" style={style.left}>
                        <ul style={style.undecorate}>
                            <li>Service:
                                <b>SC BLIKE DEVELOPMENT SRL</b>
                            </li>
                            <li>Adresa:
                                <b>Str. Lahovari nr. 71</b>
                            </li>
                            <li>Telefon:
                                <b>0720 737 272</b>
                            </li>
                            <li>Web:
                                <b>servicegsm.blike.ro</b>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-4" style={style.left}>
                        <ul style={style.undecorate}>
                            <li>Program de lucru:</li>
                            <li>
                                <b>L - V</b>
                            </li>
                            <li>
                                <b>09:00 - 18:00</b>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-4" style={style.center}>
                        <QRCode value={`https://servicegsm.blike.ro/customer/${this.props.params.id}`} size={64} level="Q" bgColor="#FFFFFF" fgColor="#000000"/>
                    </div>

                </div>
                <br/>
                <div className="col-md-12 col-lg-12">
                    <h4 style={style.center}>PROCES VERBAL DE CONSTATARE</h4>
                    <p>
                        Incheiat astazi {today} intre SC BLIKE DEVELOPMENT SRL, si { this.state.customer.company == '' ? this.state.customer.name : this.state.customer.company}, telefon {this.state.customer.phone}, posesor al dispozitivului / dispozitivelor, conform rubricii "echipamente predate in service". Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Verificarea status-ului interventiei se poate face online la adresa: https://servicegsm.blike.ro/customer/{this.props.params.id} sau prin scanarea codului QR.
                    </p>
                    <div className="col-md-6 col-lg-6" style={style.left}>Semnatura client,</div>
                    <div className="col-md-6 col-lg-6" style={style.right}>Reprezentant service,</div>
                    <br/>
                    <br/>
                    <h4>Echipamente predate in service:</h4>
                    <DeviceTable devices={this.state.devices} params={this.props.params}/>
                    <hr/>
                </div>
                <div>
                    <div className="col-md-4 col-lg-4" style={style.left}>
                        <ul style={style.undecorate}>
                            <li>Service:
                                <b>SC BLIKE DEVELOPMENT SRL</b>
                            </li>
                            <li>Adresa:
                                <b>Str. Lahovari nr. 71</b>
                            </li>
                            <li>Telefon:
                                <b>0720 737 272</b>
                            </li>
                            <li>Web:
                                <b>servicegsm.blike.ro</b>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-4" style={style.left}>
                        <ul style={style.undecorate}>
                            <li>Program de lucru:</li>
                            <li>
                                <b>L - V</b>
                            </li>
                            <li>
                                <b>09:00 - 18:00</b>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-4" style={style.center}>
                        <QRCode value={`https://servicegsm.blike.ro/customer/${this.props.params.id}`} size={64} level="Q" bgColor="#FFFFFF" fgColor="#000000"/>
                    </div>

                </div>
                <br/>
                <div className="col-md-12 col-lg-12">
                    <h4 style={style.center}>CERTIFICAT DE GARANTIE</h4>
                    <h5 style={style.center}>Cod unic client: {this.props.params.id}</h5>

          <ContentEditable html={this.state.html} disable={false} onChange={this.handleChange} />


                    <ol>
                        <li>Garantia isi pierde valabilitatea daca produsul s-a defectat datorita neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.</li>
                        <li>Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU FAC OBIECTUL GARANTIEI!</li>
                        <li>Prezentul certificat de garantie nu este valid fara stampila SC BLIKE DEVELOPMENT SRL.</li>
                    </ol>
                    <DeviceTable devices={this.state.devices} params={this.props.params}/>
                    <div className="col-md-6 col-lg-6" style={style.left}>Semnatura client,</div>
                    <div className="col-md-6 col-lg-6" style={style.right}>Reprezentant service,</div>
                    <br/>
                    <button className="btn btn-success" style={style.left} onClick={this.print}>Print</button>
                </div>

                <br/>

            </div>
        );
    }
}
