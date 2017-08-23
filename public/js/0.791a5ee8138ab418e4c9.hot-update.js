webpackHotUpdate(0,{

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactAddonsUpdate = __webpack_require__(36);\n\nvar _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _style = __webpack_require__(27);\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _reactQrSvg = __webpack_require__(819);\n\nvar _DeviceTable = __webpack_require__(446);\n\nvar _DeviceTable2 = _interopRequireDefault(_DeviceTable);\n\nvar _reactBootstrap = __webpack_require__(47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    CustomerPage: {\n        displayName: 'CustomerPage'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar CustomerPage = _wrapComponent('CustomerPage')(function (_React$Component) {\n    _inherits(CustomerPage, _React$Component);\n\n    function CustomerPage() {\n        _classCallCheck(this, CustomerPage);\n\n        var _this = _possibleConstructorReturn(this, (CustomerPage.__proto__ || Object.getPrototypeOf(CustomerPage)).call(this));\n\n        _this.state = {\n            devices: [],\n            customer: {}\n        };\n        return _this;\n    }\n\n    _createClass(CustomerPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.loadDevice();\n            this.loadCustomer();\n        }\n    }, {\n        key: 'loadDevice',\n        value: function loadDevice() {\n            var _this2 = this;\n\n            fetch('/api/customers/' + this.props.params.id + '/devices').then(function (response) {\n                return response.json();\n            }).then(function (devices) {\n                _this2.setState({ devices: devices });\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n        // loadCustomer() {\n        //   fetch(`/api/customer/${this.props.params.id}`).then(response => response.json()).then(customer => {\n        //       this.setState({customer});\n        //   }).catch(err => {\n        //       console.log(err);\n        //   });\n        // }\n\n    }, {\n        key: 'print',\n        value: function print() {\n            window.print();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var today = new Date();\n            var dd = today.getDate();\n            var mm = today.getMonth() + 1; //January is 0!\n            var yyyy = today.getFullYear();\n            if (dd < 10) {\n                dd = '0' + dd;\n            }\n            if (mm < 10) {\n                mm = '0' + mm;\n            }\n            today = dd + '/' + mm + '/' + yyyy;\n            return _react3.default.createElement(\n                'div',\n                { id: 'print', style: _style2.default.row },\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989', size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement('br', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'PROCES VERBAL DE CONSTATARE'\n                    ),\n                    _react3.default.createElement(\n                        'p',\n                        null,\n                        'Incheiat astazi ',\n                        today,\n                        ' intre SC XXX SRL, si XXX, telefon 0700 000 000, posesor al dispozitivului marca: SAMSUNG GALAXY S7 EDGE, cod IMEI/SERIE: 35262516516811, serie acumulator 06116518. Defectiuni raportate: TOUCHSCREEN CRAPAT, costul estimat interventiei: 350 RON (costul final poate sa difere!). Observatii: ZGARIETURI PROFUNDE CARCASA SPATE. Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Dispozitivele care nu sunt ridicate in maxim 30 zile de la data reparatiei, intra in proprietatea SC XXX SRL. Veridicarea statusului interventiei se paote face la http:/localhost:3000/customer/:id. Se estimeaza ca procedura de service dureaza pana la 11/09/2016. Va rugam nu incercati ridicarea dispozitivului inainte de data estimata pentru reparatie! Semnatura client, Ridicat din service,'\n                    ),\n                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                    _react3.default.createElement('hr', null)\n                ),\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989', size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement('br', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'CERTIFICAT DE GARANTIE'\n                    ),\n                    _react3.default.createElement(\n                        'h5',\n                        { style: _style2.default.center },\n                        'Cod unic client: ',\n                        this.props.params.id\n                    ),\n                    _react3.default.createElement(\n                        'b',\n                        null,\n                        'Garante reparatie: 30 zile - se acora pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii\"'\n                    ),\n                    _react3.default.createElement(\n                        'ol',\n                        null,\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Garantia isi pierde valabilitatea daca produsul s-a defectat datoriata neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU INTRA IN GARANTIE!'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Prezentul certificat de garantie nu este valid fara stampila SC XXX SRL.'\n                        )\n                    ),\n                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                    _react3.default.createElement(\n                        'button',\n                        { className: 'btn btn-success', style: _style2.default.left, onClick: this.print },\n                        'Print'\n                    )\n                ),\n                _react3.default.createElement('br', null)\n            );\n        }\n    }]);\n\n    return CustomerPage;\n}(_react3.default.Component));\n\nexports.default = CustomerPage;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZS5qcz9kZTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0LWFkZG9ucy11cGRhdGUnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHtRUkNvZGV9IGZyb20gJ3JlYWN0LXFyLXN2Zyc7XG5cbmltcG9ydCBEZXZpY2VUYWJsZSBmcm9tICcuL0RldmljZVRhYmxlJztcblxuaW1wb3J0IHtcbiAgICBQYW5lbCxcbiAgICBGb3JtR3JvdXAsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgQ29udHJvbExhYmVsLFxuICAgIEJ1dHRvbixcbiAgICBCdXR0b25Ub29sYmFyLFxuICAgIEFsZXJ0XG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZXZpY2VzOiBbXSxcbiAgICAgICAgICAgIGN1c3RvbWVyOiB7fVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGV2aWNlKCk7XG4gICAgICAgIHRoaXMubG9hZEN1c3RvbWVyKCk7XG4gICAgfVxuICAgIGxvYWREZXZpY2UoKSB7XG4gICAgICBmZXRjaChgL2FwaS9jdXN0b21lcnMvJHt0aGlzLnByb3BzLnBhcmFtcy5pZH0vZGV2aWNlc2ApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRldmljZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldmljZXN9KTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIC8vIGxvYWRDdXN0b21lcigpIHtcbiAgICAvLyAgIGZldGNoKGAvYXBpL2N1c3RvbWVyLyR7dGhpcy5wcm9wcy5wYXJhbXMuaWR9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oY3VzdG9tZXIgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1c3RvbWVyfSk7XG4gICAgLy8gICB9KS5jYXRjaChlcnIgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgcHJpbnQoKSB7XG4gICAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW0gPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGRcbiAgICAgICAgfVxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbVxuICAgICAgICB9XG4gICAgICAgIHRvZGF5ID0gZGQgKyAnLycgKyBtbSArICcvJyArIHl5eXk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJpbnRcIiBzdHlsZT17c3R5bGUucm93fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZS51bmRlY29yYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Qmxpa2UgRGV2ZWxvcG1lbnQgU1JMPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkcmVzYTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+U3RyLiBMYWhvdmFyaSBuci4gNzE8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVsZWZvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+MDcyMCA3MzcgMjcyPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlYjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+d3d3LnNlcnZpY2Vnc20uYmxpa2Uucm88L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZS51bmRlY29yYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJvZ3JhbSBkZSBsdWNydTo8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+TCAtIFY8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjA5OjAwIC0gMTg6MDA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1c3RvbWVyLzU4ZTVmNzA3YTVkZmFhMWFmYjM5ODk4OVwiIHNpemU9ezY0fSBsZXZlbD1cIlFcIiBiZ0NvbG9yPVwiI0ZGRkZGRlwiIGZnQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17c3R5bGUuY2VudGVyfT5QUk9DRVMgVkVSQkFMIERFIENPTlNUQVRBUkU8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluY2hlaWF0IGFzdGF6aSB7dG9kYXl9IGludHJlIFNDIFhYWCBTUkwsIHNpIFhYWCwgdGVsZWZvbiAwNzAwIDAwMCAwMDAsIHBvc2Vzb3IgYWwgZGlzcG96aXRpdnVsdWkgbWFyY2E6IFNBTVNVTkcgR0FMQVhZIFM3IEVER0UsIGNvZCBJTUVJL1NFUklFOiAzNTI2MjUxNjUxNjgxMSwgc2VyaWUgYWN1bXVsYXRvciAwNjExNjUxOC4gRGVmZWN0aXVuaSByYXBvcnRhdGU6IFRPVUNIU0NSRUVOIENSQVBBVCwgY29zdHVsIGVzdGltYXQgaW50ZXJ2ZW50aWVpOiAzNTAgUk9OIChjb3N0dWwgZmluYWwgcG9hdGUgc2EgZGlmZXJlISkuIE9ic2VydmF0aWk6IFpHQVJJRVRVUkkgUFJPRlVOREUgQ0FSQ0FTQSBTUEFURS4gTnUgbmUgYXN1bWFtIHJlc3BvbnNhYmlsaXRhdGVhIHBlbnRydSBkZWZlY3RpdW5pbGUgYW50ZXJpb2FyZSBhbGUgZGlzcG96aXRpdnVsdWkgYWR1cyBpbiBzZXJ2aWNlLiBEaXNwb3ppdGl2ZWxlIGNhcmUgbnUgc3VudCByaWRpY2F0ZSBpbiBtYXhpbSAzMCB6aWxlIGRlIGxhIGRhdGEgcmVwYXJhdGllaSwgaW50cmEgaW4gcHJvcHJpZXRhdGVhIFNDIFhYWCBTUkwuIFZlcmlkaWNhcmVhIHN0YXR1c3VsdWkgaW50ZXJ2ZW50aWVpIHNlIHBhb3RlIGZhY2UgbGEgaHR0cDovbG9jYWxob3N0OjMwMDAvY3VzdG9tZXIvOmlkLiBTZSBlc3RpbWVhemEgY2EgcHJvY2VkdXJhIGRlIHNlcnZpY2UgZHVyZWF6YSBwYW5hIGxhIDExLzA5LzIwMTYuIFZhIHJ1Z2FtIG51IGluY2VyY2F0aSByaWRpY2FyZWEgZGlzcG96aXRpdnVsdWkgaW5haW50ZSBkZSBkYXRhIGVzdGltYXRhIHBlbnRydSByZXBhcmF0aWUhIFNlbW5hdHVyYSBjbGllbnQsIFJpZGljYXQgZGluIHNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPERldmljZVRhYmxlIGRldmljZXM9e3RoaXMuc3RhdGUuZGV2aWNlc30gcGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc30vPlxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUubGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3N0eWxlLnVuZGVjb3JhdGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5CbGlrZSBEZXZlbG9wbWVudCBTUkw8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRyZXNhOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TdHIuIExhaG92YXJpIG5yLiA3MTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UZWxlZm9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4wNzIwIDczNyAyNzI8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2ViOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj53d3cuc2VydmljZWdzbS5ibGlrZS5ybzwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUubGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3N0eWxlLnVuZGVjb3JhdGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9ncmFtIGRlIGx1Y3J1OjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5MIC0gVjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+MDk6MDAgLSAxODowMDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VzdG9tZXIvNThlNWY3MDdhNWRmYWExYWZiMzk4OTg5XCIgc2l6ZT17NjR9IGxldmVsPVwiUVwiIGJnQ29sb3I9XCIjRkZGRkZGXCIgZmdDb2xvcj1cIiMwMDAwMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXtzdHlsZS5jZW50ZXJ9PkNFUlRJRklDQVQgREUgR0FSQU5USUU8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3N0eWxlLmNlbnRlcn0+Q29kIHVuaWMgY2xpZW50OiB7dGhpcy5wcm9wcy5wYXJhbXMuaWR9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICBHYXJhbnRlIHJlcGFyYXRpZTogMzAgemlsZSAtIHNlIGFjb3JhIHBlbnRydSBwaWVzYS9waWVzZWxlIGlubG9jdWl0YS9pbmxvY3VpdGUgc2F1IGRlZmVjdHVsIHJlbWVkaWF0LCBjdSB1cm1hdG9hcmVsZSBvYnNlcnZhdGlpXCJcbiAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+R2FyYW50aWEgaXNpIHBpZXJkZSB2YWxhYmlsaXRhdGVhIGRhY2EgcHJvZHVzdWwgcy1hIGRlZmVjdGF0IGRhdG9yaWF0YSBuZWdsaWplbnRlaSBpbiB1dGlsaXphcmUsIG1hbmlwdWxhcmUsIGNvbnRhY3R1bCBjdSBsaWNoaWRlIHNhdSBhIHVub3IgaW5zdGFsYXJpL21vZGlmaWNhcmUgYWxlIHNvZnR1bHVpIG9yaWdpbmFsLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGV0ZXJpb3JhcmlsZSBkZSBnZW51bCB6Z2FyaWV0dXJpbG9yLCBzb2N1cmlsb3Igc2F1IHJ1cHR1cmkgYWxlIGVsZW1lbnRlbG9yIGRlbW9udGFiaWxlIHNhdSBuZWRlbW9udGFiaWxlIGNhcmUgbnUgYXUgZm9zdCBhZHVzZSBsYSBjdW5vc3RpbnRhIHByZXN0YXRvcnVsdWkgaW4gbW9tZW50dWwgaW50b2NtaXJpaSBwcm9jZXN1bHVpIHZlcmJhbCBkZSBjb25zdGF0YXJlLCBOVSBJTlRSQSBJTiBHQVJBTlRJRSE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByZXplbnR1bCBjZXJ0aWZpY2F0IGRlIGdhcmFudGllIG51IGVzdGUgdmFsaWQgZmFyYSBzdGFtcGlsYSBTQyBYWFggU1JMLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDxEZXZpY2VUYWJsZSBkZXZpY2VzPXt0aGlzLnN0YXRlLmRldmljZXN9IHBhcmFtcz17dGhpcy5wcm9wcy5wYXJhbXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBzdHlsZT17c3R5bGUubGVmdH0gb25DbGljaz17dGhpcy5wcmludH0+UHJpbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9wcmludC9QcmludFBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBNUJBO0FBaUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFWQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTVCQTtBQWlDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWVBO0FBNUZBO0FBZ0dBOzs7O0FBNUlBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})