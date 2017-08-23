webpackHotUpdate(0,{

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactAddonsUpdate = __webpack_require__(36);\n\nvar _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _style = __webpack_require__(27);\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _reactQrSvg = __webpack_require__(819);\n\nvar _DeviceTable = __webpack_require__(446);\n\nvar _DeviceTable2 = _interopRequireDefault(_DeviceTable);\n\nvar _reactBootstrap = __webpack_require__(47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    CustomerPage: {\n        displayName: 'CustomerPage'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar CustomerPage = _wrapComponent('CustomerPage')(function (_React$Component) {\n    _inherits(CustomerPage, _React$Component);\n\n    function CustomerPage() {\n        _classCallCheck(this, CustomerPage);\n\n        var _this = _possibleConstructorReturn(this, (CustomerPage.__proto__ || Object.getPrototypeOf(CustomerPage)).call(this));\n\n        _this.state = {\n            devices: [],\n            customer: [{\n                company: '',\n                phone: ''\n            }]\n        };\n        return _this;\n    }\n\n    _createClass(CustomerPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.loadDevice();\n            this.loadCustomer();\n        }\n    }, {\n        key: 'loadDevice',\n        value: function loadDevice() {\n            var _this2 = this;\n\n            fetch('/api/customers/' + this.props.params.id + '/devices').then(function (response) {\n                return response.json();\n            }).then(function (devices) {\n                _this2.setState({ devices: devices });\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'loadCustomer',\n        value: function loadCustomer() {\n            var _this3 = this;\n\n            fetch('/api/customers/' + this.props.params.id).then(function (response) {\n                return response.json();\n            }).then(function (customer) {\n                _this3.setState({ customer: customer });\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'print',\n        value: function print() {\n            window.print();\n        }\n    }, {\n        key: 'client',\n        value: function client() {\n            if (this.state.customer.company == '') return;\n            return this.state.customer.name;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var today = new Date();\n            var dd = today.getDate();\n            var mm = today.getMonth() + 1; //January is 0!\n            var yyyy = today.getFullYear();\n            if (dd < 10) {\n                dd = '0' + dd;\n            }\n            if (mm < 10) {\n                mm = '0' + mm;\n            }\n            today = dd + '/' + mm + '/' + yyyy;\n            return _react3.default.createElement(\n                'div',\n                { id: 'print', style: _style2.default.row },\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989', size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement('br', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'PROCES VERBAL DE CONSTATARE'\n                    ),\n                    _react3.default.createElement(\n                        'p',\n                        null,\n                        'Incheiat astazi ',\n                        today,\n                        ' intre Blike Development SRL, si ',\n                        client,\n                        ', telefon ',\n                        this.state.customer.phone,\n                        ', posesor al posesor al dispozitivului / dispozitivelor, conform rubricii \"echipamente predate in service\". Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Veridicarea statusului interventiei se poate face la http:/www.servicegsm.blike.ro/customer/',\n                        this.props.params.id,\n                        '.'\n                    ),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-6 col-lg-6', style: _style2.default.left },\n                        'Semnatura client,'\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-6 col-lg-6', style: _style2.default.right },\n                        'Ridicat din service,'\n                    ),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                    _react3.default.createElement('hr', null)\n                ),\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989', size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement('br', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'CERTIFICAT DE GARANTIE'\n                    ),\n                    _react3.default.createElement(\n                        'h5',\n                        { style: _style2.default.center },\n                        'Cod unic client: ',\n                        this.props.params.id\n                    ),\n                    _react3.default.createElement(\n                        'b',\n                        null,\n                        'Garante reparatie: 30 zile - se acora pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii\"'\n                    ),\n                    _react3.default.createElement(\n                        'ol',\n                        null,\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Garantia isi pierde valabilitatea daca produsul s-a defectat datoriata neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU INTRA IN GARANTIE!'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Prezentul certificat de garantie nu este valid fara stampila SC XXX SRL.'\n                        )\n                    ),\n                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                    _react3.default.createElement(\n                        'button',\n                        { className: 'btn btn-success', style: _style2.default.left, onClick: this.print },\n                        'Print'\n                    )\n                ),\n                _react3.default.createElement('br', null)\n            );\n        }\n    }]);\n\n    return CustomerPage;\n}(_react3.default.Component));\n\nexports.default = CustomerPage;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZS5qcz9kZTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0LWFkZG9ucy11cGRhdGUnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHtRUkNvZGV9IGZyb20gJ3JlYWN0LXFyLXN2Zyc7XG5cbmltcG9ydCBEZXZpY2VUYWJsZSBmcm9tICcuL0RldmljZVRhYmxlJztcblxuaW1wb3J0IHtcbiAgICBQYW5lbCxcbiAgICBGb3JtR3JvdXAsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgQ29udHJvbExhYmVsLFxuICAgIEJ1dHRvbixcbiAgICBCdXR0b25Ub29sYmFyLFxuICAgIEFsZXJ0XG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZXZpY2VzOiBbXSxcbiAgICAgICAgICAgIGN1c3RvbWVyOiBbe1xuICAgICAgICAgICAgICBjb21wYW55OiAnJyxcbiAgICAgICAgICAgICAgcGhvbmU6ICcnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGV2aWNlKCk7XG4gICAgICAgIHRoaXMubG9hZEN1c3RvbWVyKCk7XG4gICAgfVxuICAgIGxvYWREZXZpY2UoKSB7XG4gICAgICBmZXRjaChgL2FwaS9jdXN0b21lcnMvJHt0aGlzLnByb3BzLnBhcmFtcy5pZH0vZGV2aWNlc2ApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRldmljZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldmljZXN9KTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIGxvYWRDdXN0b21lcigpIHtcbiAgICAgIGZldGNoKGAvYXBpL2N1c3RvbWVycy8ke3RoaXMucHJvcHMucGFyYW1zLmlkfWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGN1c3RvbWVyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXN0b21lcn0pO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHByaW50KCkge1xuICAgICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICB9XG4gICAgY2xpZW50KCl7XG4gICAgICBpZih0aGlzLnN0YXRlLmN1c3RvbWVyLmNvbXBhbnkgPT0gJycpIHJldHVybjtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1c3RvbWVyLm5hbWU7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW0gPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGRcbiAgICAgICAgfVxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbVxuICAgICAgICB9XG4gICAgICAgIHRvZGF5ID0gZGQgKyAnLycgKyBtbSArICcvJyArIHl5eXk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJpbnRcIiBzdHlsZT17c3R5bGUucm93fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZS51bmRlY29yYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Qmxpa2UgRGV2ZWxvcG1lbnQgU1JMPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkcmVzYTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+U3RyLiBMYWhvdmFyaSBuci4gNzE8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVsZWZvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+MDcyMCA3MzcgMjcyPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlYjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+d3d3LnNlcnZpY2Vnc20uYmxpa2Uucm88L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZS51bmRlY29yYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJvZ3JhbSBkZSBsdWNydTo8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+TCAtIFY8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjA5OjAwIC0gMTg6MDA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1c3RvbWVyLzU4ZTVmNzA3YTVkZmFhMWFmYjM5ODk4OVwiIHNpemU9ezY0fSBsZXZlbD1cIlFcIiBiZ0NvbG9yPVwiI0ZGRkZGRlwiIGZnQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17c3R5bGUuY2VudGVyfT5QUk9DRVMgVkVSQkFMIERFIENPTlNUQVRBUkU8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluY2hlaWF0IGFzdGF6aSB7dG9kYXl9IGludHJlIEJsaWtlIERldmVsb3BtZW50IFNSTCwgc2kge2NsaWVudH0sIHRlbGVmb24ge3RoaXMuc3RhdGUuY3VzdG9tZXIucGhvbmV9LCBwb3Nlc29yIGFsIHBvc2Vzb3IgYWwgZGlzcG96aXRpdnVsdWkgLyBkaXNwb3ppdGl2ZWxvciwgY29uZm9ybSBydWJyaWNpaSBcImVjaGlwYW1lbnRlIHByZWRhdGUgaW4gc2VydmljZVwiLiBOdSBuZSBhc3VtYW0gcmVzcG9uc2FiaWxpdGF0ZWEgcGVudHJ1IGRlZmVjdGl1bmlsZSBhbnRlcmlvYXJlIGFsZSBkaXNwb3ppdGl2dWx1aSBhZHVzIGluIHNlcnZpY2UuIFZlcmlkaWNhcmVhIHN0YXR1c3VsdWkgaW50ZXJ2ZW50aWVpIHNlIHBvYXRlIGZhY2UgbGEgaHR0cDovd3d3LnNlcnZpY2Vnc20uYmxpa2Uucm8vY3VzdG9tZXIve3RoaXMucHJvcHMucGFyYW1zLmlkfS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy02XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlNlbW5hdHVyYSBjbGllbnQsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTZcIiBzdHlsZT17c3R5bGUucmlnaHR9PlJpZGljYXQgZGluIHNlcnZpY2UsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxEZXZpY2VUYWJsZSBkZXZpY2VzPXt0aGlzLnN0YXRlLmRldmljZXN9IHBhcmFtcz17dGhpcy5wcm9wcy5wYXJhbXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZS51bmRlY29yYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Qmxpa2UgRGV2ZWxvcG1lbnQgU1JMPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkcmVzYTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+U3RyLiBMYWhvdmFyaSBuci4gNzE8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVsZWZvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+MDcyMCA3MzcgMjcyPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlYjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+d3d3LnNlcnZpY2Vnc20uYmxpa2Uucm88L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXtzdHlsZS51bmRlY29yYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJvZ3JhbSBkZSBsdWNydTo8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+TCAtIFY8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjA5OjAwIC0gMTg6MDA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1c3RvbWVyLzU4ZTVmNzA3YTVkZmFhMWFmYjM5ODk4OVwiIHNpemU9ezY0fSBsZXZlbD1cIlFcIiBiZ0NvbG9yPVwiI0ZGRkZGRlwiIGZnQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17c3R5bGUuY2VudGVyfT5DRVJUSUZJQ0FUIERFIEdBUkFOVElFPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXtzdHlsZS5jZW50ZXJ9PkNvZCB1bmljIGNsaWVudDoge3RoaXMucHJvcHMucGFyYW1zLmlkfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgR2FyYW50ZSByZXBhcmF0aWU6IDMwIHppbGUgLSBzZSBhY29yYSBwZW50cnUgcGllc2EvcGllc2VsZSBpbmxvY3VpdGEvaW5sb2N1aXRlIHNhdSBkZWZlY3R1bCByZW1lZGlhdCwgY3UgdXJtYXRvYXJlbGUgb2JzZXJ2YXRpaVwiXG4gICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdhcmFudGlhIGlzaSBwaWVyZGUgdmFsYWJpbGl0YXRlYSBkYWNhIHByb2R1c3VsIHMtYSBkZWZlY3RhdCBkYXRvcmlhdGEgbmVnbGlqZW50ZWkgaW4gdXRpbGl6YXJlLCBtYW5pcHVsYXJlLCBjb250YWN0dWwgY3UgbGljaGlkZSBzYXUgYSB1bm9yIGluc3RhbGFyaS9tb2RpZmljYXJlIGFsZSBzb2Z0dWx1aSBvcmlnaW5hbC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRldGVyaW9yYXJpbGUgZGUgZ2VudWwgemdhcmlldHVyaWxvciwgc29jdXJpbG9yIHNhdSBydXB0dXJpIGFsZSBlbGVtZW50ZWxvciBkZW1vbnRhYmlsZSBzYXUgbmVkZW1vbnRhYmlsZSBjYXJlIG51IGF1IGZvc3QgYWR1c2UgbGEgY3Vub3N0aW50YSBwcmVzdGF0b3J1bHVpIGluIG1vbWVudHVsIGludG9jbWlyaWkgcHJvY2VzdWx1aSB2ZXJiYWwgZGUgY29uc3RhdGFyZSwgTlUgSU5UUkEgSU4gR0FSQU5USUUhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmV6ZW50dWwgY2VydGlmaWNhdCBkZSBnYXJhbnRpZSBudSBlc3RlIHZhbGlkIGZhcmEgc3RhbXBpbGEgU0MgWFhYIFNSTC48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8RGV2aWNlVGFibGUgZGV2aWNlcz17dGhpcy5zdGF0ZS5kZXZpY2VzfSBwYXJhbXM9e3RoaXMucHJvcHMucGFyYW1zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgc3R5bGU9e3N0eWxlLmxlZnR9IG9uQ2xpY2s9e3RoaXMucHJpbnR9PlByaW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvcHJpbnQvUHJpbnRQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBRkE7QUFTQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFWQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTVCQTtBQWlDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVkE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUE1QkE7QUFpQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFlQTtBQW5HQTtBQXVHQTs7OztBQXpKQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})