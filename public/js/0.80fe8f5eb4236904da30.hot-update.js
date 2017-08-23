webpackHotUpdate(0,{

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactAddonsUpdate = __webpack_require__(36);\n\nvar _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _style = __webpack_require__(27);\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _reactQrSvg = __webpack_require__(819);\n\nvar _DeviceTable = __webpack_require__(446);\n\nvar _DeviceTable2 = _interopRequireDefault(_DeviceTable);\n\nvar _reactBootstrap = __webpack_require__(47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    CustomerPage: {\n        displayName: 'CustomerPage'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar CustomerPage = _wrapComponent('CustomerPage')(function (_React$Component) {\n    _inherits(CustomerPage, _React$Component);\n\n    function CustomerPage() {\n        _classCallCheck(this, CustomerPage);\n\n        var _this = _possibleConstructorReturn(this, (CustomerPage.__proto__ || Object.getPrototypeOf(CustomerPage)).call(this));\n\n        _this.state = {\n            devices: [],\n            customer: []\n        };\n        return _this;\n    }\n\n    _createClass(CustomerPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.loadDevice();\n            this.loadCustomer();\n        }\n    }, {\n        key: 'loadDevice',\n        value: function loadDevice() {\n            var _this2 = this;\n\n            fetch('/api/customers/' + this.props.params.id + '/devices').then(function (response) {\n                return response.json();\n            }).then(function (devices) {\n                _this2.setState({ devices: devices });\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'loadCustomer',\n        value: function loadCustomer() {\n            var _this3 = this;\n\n            fetch('/api/customers/' + this.props.params.id).then(function (response) {\n                return response.json();\n            }).then(function (customer) {\n                _this3.setState({ customer: customer });\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'print',\n        value: function print() {\n            window.print();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var today = new Date();\n            var dd = today.getDate();\n            var mm = today.getMonth() + 1; //January is 0!\n            var yyyy = today.getFullYear();\n            if (dd < 10) {\n                dd = '0' + dd;\n            }\n            if (mm < 10) {\n                mm = '0' + mm;\n            }\n            today = dd + '/' + mm + '/' + yyyy;\n\n            return _react3.default.createElement(\n                'div',\n                { id: 'print', style: _style2.default.row },\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'SC BLIKE DEVELOPMENT SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http:/www.servicegsm.blike.ro/customer/{this.props.params.id}', size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement('br', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'PROCES VERBAL DE CONSTATARE'\n                    ),\n                    _react3.default.createElement(\n                        'p',\n                        null,\n                        'Incheiat astazi ',\n                        today,\n                        ' intre SC BLIKE DEVELOPMENT SRL, si ',\n                        this.state.customer.company == '' ? this.state.customer.name : this.state.customer.company,\n                        ', telefon ',\n                        this.state.customer.phone,\n                        ', posesor al dispozitivului / dispozitivelor, conform rubricii \"echipamente predate in service\". Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Verificarea status-ului interventiei se poate face pe online la adresa: http:/www.servicegsm.blike.ro/customer/',\n                        this.props.params.id,\n                        ' sau prin scanarea codului QR.'\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-6 col-lg-6', style: _style2.default.left },\n                        'Semnatura client,'\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-6 col-lg-6', style: _style2.default.right },\n                        'Reprezentant service,'\n                    ),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement(\n                        'h4',\n                        null,\n                        'Echipamente predate in service:'\n                    ),\n                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                    _react3.default.createElement('hr', null)\n                ),\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'SC BLIKE DEVELOPMENT SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http:/www.servicegsm.blike.ro/customer/{this.props.params.id}', size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement('br', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'CERTIFICAT DE GARANTIE'\n                    ),\n                    _react3.default.createElement(\n                        'h5',\n                        { style: _style2.default.center },\n                        'Cod unic client: ',\n                        this.props.params.id\n                    ),\n                    _react3.default.createElement(\n                        'b',\n                        null,\n                        'Garante reparatie: 30 zile - se acora pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii:'\n                    ),\n                    _react3.default.createElement(\n                        'ol',\n                        null,\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Garantia isi pierde valabilitatea daca produsul s-a defectat datoriata neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU INTRA FAC OBIECTUL GARANTIEI!'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Prezentul certificat de garantie nu este valid fara stampila SC BLIKE DEVELOPMENT SRL.'\n                        )\n                    ),\n                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-6 col-lg-6', style: _style2.default.left },\n                        'Semnatura client,'\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-6 col-lg-6', style: _style2.default.right },\n                        'Reprezentant service,'\n                    ),\n                    _react3.default.createElement('br', null),\n                    _react3.default.createElement(\n                        'button',\n                        { className: 'btn btn-success', style: _style2.default.left, onClick: this.print },\n                        'Print'\n                    )\n                ),\n                _react3.default.createElement('br', null)\n            );\n        }\n    }]);\n\n    return CustomerPage;\n}(_react3.default.Component));\n\nexports.default = CustomerPage;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZS5qcz9kZTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0LWFkZG9ucy11cGRhdGUnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHtRUkNvZGV9IGZyb20gJ3JlYWN0LXFyLXN2Zyc7XG5cbmltcG9ydCBEZXZpY2VUYWJsZSBmcm9tICcuL0RldmljZVRhYmxlJztcblxuaW1wb3J0IHtcbiAgICBQYW5lbCxcbiAgICBGb3JtR3JvdXAsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgQ29udHJvbExhYmVsLFxuICAgIEJ1dHRvbixcbiAgICBCdXR0b25Ub29sYmFyLFxuICAgIEFsZXJ0XG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZXZpY2VzOiBbXSxcbiAgICAgICAgICAgIGN1c3RvbWVyOiBbXVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGV2aWNlKCk7XG4gICAgICAgIHRoaXMubG9hZEN1c3RvbWVyKCk7XG4gICAgfVxuICAgIGxvYWREZXZpY2UoKSB7XG4gICAgICBmZXRjaChgL2FwaS9jdXN0b21lcnMvJHt0aGlzLnByb3BzLnBhcmFtcy5pZH0vZGV2aWNlc2ApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRldmljZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldmljZXN9KTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgIGxvYWRDdXN0b21lcigpIHtcbiAgICAgIGZldGNoKGAvYXBpL2N1c3RvbWVycy8ke3RoaXMucHJvcHMucGFyYW1zLmlkfWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGN1c3RvbWVyID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXN0b21lcn0pO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gICAgcHJpbnQoKSB7XG4gICAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW0gPSB0b2RheS5nZXRNb250aCgpICsgMTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKGRkIDwgMTApIHtcbiAgICAgICAgICAgIGRkID0gJzAnICsgZGRcbiAgICAgICAgfVxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbVxuICAgICAgICB9XG4gICAgICAgIHRvZGF5ID0gZGQgKyAnLycgKyBtbSArICcvJyArIHl5eXk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmludFwiIHN0eWxlPXtzdHlsZS5yb3d9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUubGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3N0eWxlLnVuZGVjb3JhdGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TQyBCTElLRSBERVZFTE9QTUVOVCBTUkw8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRyZXNhOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TdHIuIExhaG92YXJpIG5yLiA3MTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UZWxlZm9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4wNzIwIDczNyAyNzI8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2ViOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj53d3cuc2VydmljZWdzbS5ibGlrZS5ybzwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUubGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3N0eWxlLnVuZGVjb3JhdGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9ncmFtIGRlIGx1Y3J1OjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5MIC0gVjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+MDk6MDAgLSAxODowMDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9XCJodHRwOi93d3cuc2VydmljZWdzbS5ibGlrZS5yby9jdXN0b21lci97dGhpcy5wcm9wcy5wYXJhbXMuaWR9XCIgc2l6ZT17NjR9IGxldmVsPVwiUVwiIGJnQ29sb3I9XCIjRkZGRkZGXCIgZmdDb2xvcj1cIiMwMDAwMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXtzdHlsZS5jZW50ZXJ9PlBST0NFUyBWRVJCQUwgREUgQ09OU1RBVEFSRTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5jaGVpYXQgYXN0YXppIHt0b2RheX0gaW50cmUgU0MgQkxJS0UgREVWRUxPUE1FTlQgU1JMLCBzaSB7IHRoaXMuc3RhdGUuY3VzdG9tZXIuY29tcGFueSA9PSAnJyA/IHRoaXMuc3RhdGUuY3VzdG9tZXIubmFtZSA6IHRoaXMuc3RhdGUuY3VzdG9tZXIuY29tcGFueX0sIHRlbGVmb24ge3RoaXMuc3RhdGUuY3VzdG9tZXIucGhvbmV9LCBwb3Nlc29yIGFsIGRpc3Bveml0aXZ1bHVpIC8gZGlzcG96aXRpdmVsb3IsIGNvbmZvcm0gcnVicmljaWkgXCJlY2hpcGFtZW50ZSBwcmVkYXRlIGluIHNlcnZpY2VcIi4gTnUgbmUgYXN1bWFtIHJlc3BvbnNhYmlsaXRhdGVhIHBlbnRydSBkZWZlY3RpdW5pbGUgYW50ZXJpb2FyZSBhbGUgZGlzcG96aXRpdnVsdWkgYWR1cyBpbiBzZXJ2aWNlLiBWZXJpZmljYXJlYSBzdGF0dXMtdWx1aSBpbnRlcnZlbnRpZWkgc2UgcG9hdGUgZmFjZSBwZSBvbmxpbmUgbGEgYWRyZXNhOiBodHRwOi93d3cuc2VydmljZWdzbS5ibGlrZS5yby9jdXN0b21lci97dGhpcy5wcm9wcy5wYXJhbXMuaWR9IHNhdSBwcmluIHNjYW5hcmVhIGNvZHVsdWkgUVIuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctNlwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5TZW1uYXR1cmEgY2xpZW50LDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy02XCIgc3R5bGU9e3N0eWxlLnJpZ2h0fT5SZXByZXplbnRhbnQgc2VydmljZSw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkVjaGlwYW1lbnRlIHByZWRhdGUgaW4gc2VydmljZTo8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8RGV2aWNlVGFibGUgZGV2aWNlcz17dGhpcy5zdGF0ZS5kZXZpY2VzfSBwYXJhbXM9e3RoaXMucHJvcHMucGFyYW1zfS8+XG4gICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNDIEJMSUtFIERFVkVMT1BNRU5UIFNSTDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZHJlc2E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlN0ci4gTGFob3ZhcmkgbnIuIDcxPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRlbGVmb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjA3MjAgNzM3IDI3MjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnd3dy5zZXJ2aWNlZ3NtLmJsaWtlLnJvPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2dyYW0gZGUgbHVjcnU6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkwgLSBWPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4wOTowMCAtIDE4OjAwPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT1cImh0dHA6L3d3dy5zZXJ2aWNlZ3NtLmJsaWtlLnJvL2N1c3RvbWVyL3t0aGlzLnByb3BzLnBhcmFtcy5pZH1cIiBzaXplPXs2NH0gbGV2ZWw9XCJRXCIgYmdDb2xvcj1cIiNGRkZGRkZcIiBmZ0NvbG9yPVwiIzAwMDAwMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3N0eWxlLmNlbnRlcn0+Q0VSVElGSUNBVCBERSBHQVJBTlRJRTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17c3R5bGUuY2VudGVyfT5Db2QgdW5pYyBjbGllbnQ6IHt0aGlzLnByb3BzLnBhcmFtcy5pZH08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdhcmFudGUgcmVwYXJhdGllOiAzMCB6aWxlIC0gc2UgYWNvcmEgcGVudHJ1IHBpZXNhL3BpZXNlbGUgaW5sb2N1aXRhL2lubG9jdWl0ZSBzYXUgZGVmZWN0dWwgcmVtZWRpYXQsIGN1IHVybWF0b2FyZWxlIG9ic2VydmF0aWk6XG4gICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdhcmFudGlhIGlzaSBwaWVyZGUgdmFsYWJpbGl0YXRlYSBkYWNhIHByb2R1c3VsIHMtYSBkZWZlY3RhdCBkYXRvcmlhdGEgbmVnbGlqZW50ZWkgaW4gdXRpbGl6YXJlLCBtYW5pcHVsYXJlLCBjb250YWN0dWwgY3UgbGljaGlkZSBzYXUgYSB1bm9yIGluc3RhbGFyaS9tb2RpZmljYXJlIGFsZSBzb2Z0dWx1aSBvcmlnaW5hbC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRldGVyaW9yYXJpbGUgZGUgZ2VudWwgemdhcmlldHVyaWxvciwgc29jdXJpbG9yIHNhdSBydXB0dXJpIGFsZSBlbGVtZW50ZWxvciBkZW1vbnRhYmlsZSBzYXUgbmVkZW1vbnRhYmlsZSBjYXJlIG51IGF1IGZvc3QgYWR1c2UgbGEgY3Vub3N0aW50YSBwcmVzdGF0b3J1bHVpIGluIG1vbWVudHVsIGludG9jbWlyaWkgcHJvY2VzdWx1aSB2ZXJiYWwgZGUgY29uc3RhdGFyZSwgTlUgSU5UUkEgRkFDIE9CSUVDVFVMIEdBUkFOVElFSSE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByZXplbnR1bCBjZXJ0aWZpY2F0IGRlIGdhcmFudGllIG51IGVzdGUgdmFsaWQgZmFyYSBzdGFtcGlsYSBTQyBCTElLRSBERVZFTE9QTUVOVCBTUkwuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPERldmljZVRhYmxlIGRldmljZXM9e3RoaXMuc3RhdGUuZGV2aWNlc30gcGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc30vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy02XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlNlbW5hdHVyYSBjbGllbnQsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLWxnLTZcIiBzdHlsZT17c3R5bGUucmlnaHR9PlJlcHJlemVudGFudCBzZXJ2aWNlLDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHN0eWxlPXtzdHlsZS5sZWZ0fSBvbkNsaWNrPXt0aGlzLnByaW50fT5QcmludDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBNUJBO0FBaUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVkE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUE1QkE7QUFpQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZBO0FBa0JBO0FBcEdBO0FBd0dBOzs7O0FBdEpBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})