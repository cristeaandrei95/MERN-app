webpackHotUpdate(0,{

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactAddonsUpdate = __webpack_require__(36);\n\nvar _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _style = __webpack_require__(27);\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _reactQrSvg = __webpack_require__(819);\n\nvar _DeviceTable = __webpack_require__(446);\n\nvar _DeviceTable2 = _interopRequireDefault(_DeviceTable);\n\nvar _reactBootstrap = __webpack_require__(47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    CustomerPage: {\n        displayName: 'CustomerPage'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar CustomerPage = _wrapComponent('CustomerPage')(function (_React$Component) {\n    _inherits(CustomerPage, _React$Component);\n\n    function CustomerPage() {\n        _classCallCheck(this, CustomerPage);\n\n        var _this = _possibleConstructorReturn(this, (CustomerPage.__proto__ || Object.getPrototypeOf(CustomerPage)).call(this));\n\n        _this.state = {\n            devices: []\n        };\n        return _this;\n    }\n\n    _createClass(CustomerPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.loadData();\n        }\n    }, {\n        key: 'loadData',\n        value: function loadData() {\n            var _this2 = this;\n\n            fetch('/api/customers/' + this.props.params.id + '/devices').then(function (response) {\n                return response.json();\n            }).then(function (devices) {\n                _this2.setState({ devices: devices });\n                console.log('Devices loaded in DeviceList state: ' + devices);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'print',\n        value: function print() {\n            window.print();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var today = new Date();\n            var dd = today.getDate();\n            var mm = today.getMonth() + 1; //January is 0!\n            var yyyy = today.getFullYear();\n\n            if (dd < 10) {\n                dd = '0' + dd;\n            }\n\n            if (mm < 10) {\n                mm = '0' + mm;\n            }\n\n            today = mm + '/' + dd + '/' + yyyy;\n            return _react3.default.createElement(\n                'div',\n                { style: _style2.default.row },\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989', size: 128, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h3',\n                        { style: _style2.default.center },\n                        'PROCES VERBAL DE CONSTATARE'\n                    ),\n                    _react3.default.createElement(\n                        'p',\n                        null,\n                        'Incheiat astazi ',\n                        today,\n                        ' intre SC XXX SRL, si XXX, telefon 0700 000 000, posesor al dispozitivului marca: SAMSUNG GALAXY S7 EDGE, cod IMEI/SERIE: 35262516516811, serie acumulator 06116518. Defectiuni raportate: TOUCHSCREEN CRAPAT, costul estimat interventiei: 350 RON (costul final poate sa difere!). Observatii: ZGARIETURI PROFUNDE CARCASA SPATE. Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Dispozitivele care nu sunt ridicate in maxim 30 zile de la data reparatiei, intra in proprietatea SC XXX SRL. Veridicarea statusului interventiei se paote face la http:/localhost:3000/customer/:id. Se estimeaza ca procedura de service dureaza pana la 11/09/2016. Va rugam nu incercati ridicarea dispozitivului inainte de data estimata pentru reparatie! Semnatura client, Ridicat din service,'\n                    )\n                ),\n                _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                _react3.default.createElement('hr', null),\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989', size: 128, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })\n                    )\n                ),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h3',\n                        { style: _style2.default.center },\n                        'CERTIFICAT DE GARANTIE'\n                    ),\n                    _react3.default.createElement(\n                        'h4',\n                        { style: _style2.default.center },\n                        'Cod unic client: ',\n                        this.props.params.id\n                    ),\n                    _react3.default.createElement(\n                        'b',\n                        null,\n                        'Garante reparatie: 30 zile - se acora pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii\"'\n                    ),\n                    _react3.default.createElement(\n                        'ol',\n                        null,\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Garantia isi pierde valabilitatea daca produsul s-a defectat datoriata neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU INTRA IN GARANTIE!'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Prezentul certificat de garantie nu este valid fara stampila SC XXX SRL.'\n                        )\n                    )\n                ),\n                _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                _react3.default.createElement(\n                    'button',\n                    { className: 'btn btn-success', style: _style2.default.table, onClick: this.print },\n                    'Print'\n                )\n            );\n        }\n    }]);\n\n    return CustomerPage;\n}(_react3.default.Component));\n\nexports.default = CustomerPage;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZS5qcz9kZTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0LWFkZG9ucy11cGRhdGUnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHtRUkNvZGV9IGZyb20gJ3JlYWN0LXFyLXN2Zyc7XG5cbmltcG9ydCBEZXZpY2VUYWJsZSBmcm9tICcuL0RldmljZVRhYmxlJztcblxuaW1wb3J0IHtcbiAgICBQYW5lbCxcbiAgICBGb3JtR3JvdXAsXG4gICAgRm9ybUNvbnRyb2wsXG4gICAgQ29udHJvbExhYmVsLFxuICAgIEJ1dHRvbixcbiAgICBCdXR0b25Ub29sYmFyLFxuICAgIEFsZXJ0XG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZXZpY2VzOiBbXVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgZmV0Y2goYC9hcGkvY3VzdG9tZXJzLyR7dGhpcy5wcm9wcy5wYXJhbXMuaWR9L2RldmljZXNgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkZXZpY2VzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RldmljZXN9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXZpY2VzIGxvYWRlZCBpbiBEZXZpY2VMaXN0IHN0YXRlOiAke2RldmljZXN9YCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpbnQoKSB7XG4gICAgICAgIHdpbmRvdy5wcmludCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG52YXIgZGQgPSB0b2RheS5nZXREYXRlKCk7XG52YXIgbW0gPSB0b2RheS5nZXRNb250aCgpKzE7IC8vSmFudWFyeSBpcyAwIVxudmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG5pZihkZDwxMCkge1xuICAgIGRkPScwJytkZFxufVxuXG5pZihtbTwxMCkge1xuICAgIG1tPScwJyttbVxufVxuXG50b2RheSA9IG1tKycvJytkZCsnLycreXl5eTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLnJvd30+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkJsaWtlIERldmVsb3BtZW50IFNSTDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZHJlc2E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlN0ci4gTGFob3ZhcmkgbnIuIDcxPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRlbGVmb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjA3MjAgNzM3IDI3MjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnd3dy5zZXJ2aWNlZ3NtLmJsaWtlLnJvPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2dyYW0gZGUgbHVjcnU6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkwgLSBWPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4wOTowMCAtIDE4OjAwPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VzdG9tZXIvNThlNWY3MDdhNWRmYWExYWZiMzk4OTg5XCIgc2l6ZT17MTI4fSBsZXZlbD1cIlFcIiBiZ0NvbG9yPVwiI0ZGRkZGRlwiIGZnQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlLmNlbnRlcn0+UFJPQ0VTIFZFUkJBTCBERSBDT05TVEFUQVJFPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmNoZWlhdCBhc3Rhemkge3RvZGF5fSBpbnRyZSBTQyBYWFggU1JMLCBzaSBYWFgsIHRlbGVmb24gMDcwMCAwMDAgMDAwLCBwb3Nlc29yIGFsIGRpc3Bveml0aXZ1bHVpIG1hcmNhOiBTQU1TVU5HIEdBTEFYWSBTNyBFREdFLCBjb2QgSU1FSS9TRVJJRTogMzUyNjI1MTY1MTY4MTEsIHNlcmllIGFjdW11bGF0b3IgMDYxMTY1MTguIERlZmVjdGl1bmkgcmFwb3J0YXRlOiBUT1VDSFNDUkVFTiBDUkFQQVQsIGNvc3R1bCBlc3RpbWF0IGludGVydmVudGllaTogMzUwIFJPTiAoY29zdHVsIGZpbmFsIHBvYXRlIHNhIGRpZmVyZSEpLiBPYnNlcnZhdGlpOiBaR0FSSUVUVVJJIFBST0ZVTkRFIENBUkNBU0EgU1BBVEUuIE51IG5lIGFzdW1hbSByZXNwb25zYWJpbGl0YXRlYSBwZW50cnUgZGVmZWN0aXVuaWxlIGFudGVyaW9hcmUgYWxlIGRpc3Bveml0aXZ1bHVpIGFkdXMgaW4gc2VydmljZS4gRGlzcG96aXRpdmVsZSBjYXJlIG51IHN1bnQgcmlkaWNhdGUgaW4gbWF4aW0gMzAgemlsZSBkZSBsYSBkYXRhIHJlcGFyYXRpZWksIGludHJhIGluIHByb3ByaWV0YXRlYSBTQyBYWFggU1JMLiBWZXJpZGljYXJlYSBzdGF0dXN1bHVpIGludGVydmVudGllaSBzZSBwYW90ZSBmYWNlIGxhIGh0dHA6L2xvY2FsaG9zdDozMDAwL2N1c3RvbWVyLzppZC4gU2UgZXN0aW1lYXphIGNhIHByb2NlZHVyYSBkZSBzZXJ2aWNlIGR1cmVhemEgcGFuYSBsYSAxMS8wOS8yMDE2LiBWYSBydWdhbSBudSBpbmNlcmNhdGkgcmlkaWNhcmVhIGRpc3Bveml0aXZ1bHVpIGluYWludGUgZGUgZGF0YSBlc3RpbWF0YSBwZW50cnUgcmVwYXJhdGllISBTZW1uYXR1cmEgY2xpZW50LCBSaWRpY2F0IGRpbiBzZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERldmljZVRhYmxlIGRldmljZXM9e3RoaXMuc3RhdGUuZGV2aWNlc30gcGFyYW1zPXt0aGlzLnByb3BzLnBhcmFtc30vPlxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkJsaWtlIERldmVsb3BtZW50IFNSTDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZHJlc2E6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlN0ci4gTGFob3ZhcmkgbnIuIDcxPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRlbGVmb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjA3MjAgNzM3IDI3MjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnd3dy5zZXJ2aWNlZ3NtLmJsaWtlLnJvPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2dyYW0gZGUgbHVjcnU6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkwgLSBWPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4wOTowMCAtIDE4OjAwPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VzdG9tZXIvNThlNWY3MDdhNWRmYWExYWZiMzk4OTg5XCIgc2l6ZT17MTI4fSBsZXZlbD1cIlFcIiBiZ0NvbG9yPVwiI0ZGRkZGRlwiIGZnQ29sb3I9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlLmNlbnRlcn0+Q0VSVElGSUNBVCBERSBHQVJBTlRJRTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17c3R5bGUuY2VudGVyfT5Db2QgdW5pYyBjbGllbnQ6IHt0aGlzLnByb3BzLnBhcmFtcy5pZH08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdhcmFudGUgcmVwYXJhdGllOiAzMCB6aWxlIC0gc2UgYWNvcmEgcGVudHJ1IHBpZXNhL3BpZXNlbGUgaW5sb2N1aXRhL2lubG9jdWl0ZSBzYXUgZGVmZWN0dWwgcmVtZWRpYXQsIGN1IHVybWF0b2FyZWxlIG9ic2VydmF0aWlcIlxuICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HYXJhbnRpYSBpc2kgcGllcmRlIHZhbGFiaWxpdGF0ZWEgZGFjYSBwcm9kdXN1bCBzLWEgZGVmZWN0YXQgZGF0b3JpYXRhIG5lZ2xpamVudGVpIGluIHV0aWxpemFyZSwgbWFuaXB1bGFyZSwgY29udGFjdHVsIGN1IGxpY2hpZGUgc2F1IGEgdW5vciBpbnN0YWxhcmkvbW9kaWZpY2FyZSBhbGUgc29mdHVsdWkgb3JpZ2luYWwuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXRlcmlvcmFyaWxlIGRlIGdlbnVsIHpnYXJpZXR1cmlsb3IsIHNvY3VyaWxvciBzYXUgcnVwdHVyaSBhbGUgZWxlbWVudGVsb3IgZGVtb250YWJpbGUgc2F1IG5lZGVtb250YWJpbGUgY2FyZSBudSBhdSBmb3N0IGFkdXNlIGxhIGN1bm9zdGludGEgcHJlc3RhdG9ydWx1aSBpbiBtb21lbnR1bCBpbnRvY21pcmlpIHByb2Nlc3VsdWkgdmVyYmFsIGRlIGNvbnN0YXRhcmUsIE5VIElOVFJBIElOIEdBUkFOVElFITwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJlemVudHVsIGNlcnRpZmljYXQgZGUgZ2FyYW50aWUgbnUgZXN0ZSB2YWxpZCBmYXJhIHN0YW1waWxhIFNDIFhYWCBTUkwuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RGV2aWNlVGFibGUgZGV2aWNlcz17dGhpcy5zdGF0ZS5kZXZpY2VzfSBwYXJhbXM9e3RoaXMucHJvcHMucGFyYW1zfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBzdHlsZT17c3R5bGUudGFibGV9IG9uQ2xpY2s9e3RoaXMucHJpbnR9PlByaW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvcHJpbnQvUHJpbnRQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFWQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTVCQTtBQWlDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVZBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBNUJBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFOQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhGQTtBQTJGQTs7OztBQWpJQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})