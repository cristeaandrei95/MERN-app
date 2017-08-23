webpackHotUpdate(0,{

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactAddonsUpdate = __webpack_require__(36);\n\nvar _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _style = __webpack_require__(27);\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _reactQrSvg = __webpack_require__(819);\n\nvar _DeviceTable = __webpack_require__(446);\n\nvar _DeviceTable2 = _interopRequireDefault(_DeviceTable);\n\nvar _reactBootstrap = __webpack_require__(47);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    CustomerPage: {\n        displayName: 'CustomerPage'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/PrintPage.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar CustomerPage = _wrapComponent('CustomerPage')(function (_React$Component) {\n    _inherits(CustomerPage, _React$Component);\n\n    function CustomerPage() {\n        _classCallCheck(this, CustomerPage);\n\n        var _this = _possibleConstructorReturn(this, (CustomerPage.__proto__ || Object.getPrototypeOf(CustomerPage)).call(this));\n\n        _this.state = {\n            devices: []\n        };\n        return _this;\n    }\n\n    _createClass(CustomerPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.loadData();\n        }\n    }, {\n        key: 'loadData',\n        value: function loadData() {\n            var _this2 = this;\n\n            fetch('/api/customers/' + this.props.params.id + '/devices').then(function (response) {\n                return response.json();\n            }).then(function (devices) {\n                _this2.setState({ devices: devices });\n                console.log('Devices loaded in DeviceList state: ' + devices);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'print',\n        value: function print() {\n            window.print();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react3.default.createElement(\n                'div',\n                { style: _style2.default.row },\n                _react3.default.createElement(\n                    'div',\n                    null,\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service: ',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Blike Development SRL'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa: ',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'Str. Lahovari nr. 71'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon: ',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '0720 737 272'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web: ',\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'www.servicegsm.blike.ro'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            { style: _style2.default.undecorate },\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    'L - V'\n                                )\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                _react3.default.createElement(\n                                    'b',\n                                    null,\n                                    '09:00 - 18:00'\n                                )\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(_reactQrSvg.QRCode, {\n                            value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989',\n                            size: 128,\n                            level: 'Q',\n                            bgColor: '#FFFFFF',\n                            fgColor: '#000000'\n                        })\n                    )\n                ),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h3',\n                        null,\n                        'PROCES VERBAL DE CONSTATARE'\n                    ),\n                    _react3.default.createElement(\n                        'p',\n                        null,\n                        'Incheiat astazi 08/09/2016 intre SC XXX SRL, si XXX, telefon 0700 000 000, posesor al dispozitivului marca: SAMSUNG GALAXY S7 EDGE, cod IMEI/SERIE: 35262516516811, serie acumulator 06116518. Defectiuni raportate: TOUCHSCREEN CRAPAT, costul estimat interventiei: 350 RON (costul final poate sa difere!). Observatii: ZGARIETURI PROFUNDE CARCASA SPATE. Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Dispozitivele care nu sunt ridicate in maxim 30 zile de la data reparatiei, intra in proprietatea SC XXX SRL. Veridicarea statusului interventiei se paote face la http:/localhost:3000/customer/:id. Se estimeaza ca procedura de service dureaza pana la 11/09/2016. Va rugam nu incercati ridicarea dispozitivului inainte de data estimata pentru reparatie! Semnatura client,   Ridicat din service,'\n                    )\n                ),\n                _react3.default.createElement('hr', null),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            null,\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Service:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Adresa:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Telefon:'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Web:'\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(\n                            'ul',\n                            null,\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'Program de lucru'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                'L - V'\n                            ),\n                            _react3.default.createElement(\n                                'li',\n                                null,\n                                '09:00 - 18:00'\n                            )\n                        )\n                    ),\n                    _react3.default.createElement(\n                        'div',\n                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },\n                        _react3.default.createElement(_reactQrSvg.QRCode, {\n                            value: 'http://localhost:3000/customer/58e5f707a5dfaa1afb398989',\n                            size: 128,\n                            level: 'Q',\n                            bgColor: '#FFFFFF',\n                            fgColor: '#000000'\n                        })\n                    )\n                ),\n                _react3.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-12' },\n                    _react3.default.createElement(\n                        'h3',\n                        null,\n                        'CERTIFICAT DE GARANTIE'\n                    ),\n                    _react3.default.createElement(\n                        'h4',\n                        null,\n                        'Cod unic client: ',\n                        this.props.params.id\n                    ),\n                    _react3.default.createElement(\n                        'b',\n                        null,\n                        'Garante reparatie: 30 zile - se acora pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii\"'\n                    ),\n                    _react3.default.createElement(\n                        'ol',\n                        null,\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Garantia isi pierde valabilitatea daca produsul s-a defectat datoriata neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU INTRA IN GARANTIE!'\n                        ),\n                        _react3.default.createElement(\n                            'li',\n                            null,\n                            'Prezentul certificat de garantie nu este valid fara stampila SC XXX SRL.'\n                        )\n                    )\n                ),\n                _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),\n                _react3.default.createElement(\n                    'button',\n                    { className: 'btn btn-success', style: _style2.default.table, onClick: this.print },\n                    'Print'\n                )\n            );\n        }\n    }]);\n\n    return CustomerPage;\n}(_react3.default.Component));\n\nexports.default = CustomerPage;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZS5qcz9kZTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0LWFkZG9ucy11cGRhdGUnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHsgUVJDb2RlIH0gZnJvbSAncmVhY3QtcXItc3ZnJztcblxuaW1wb3J0IERldmljZVRhYmxlIGZyb20gJy4vRGV2aWNlVGFibGUnO1xuXG5pbXBvcnQge1xuICAgIFBhbmVsLFxuICAgIEZvcm1Hcm91cCxcbiAgICBGb3JtQ29udHJvbCxcbiAgICBDb250cm9sTGFiZWwsXG4gICAgQnV0dG9uLFxuICAgIEJ1dHRvblRvb2xiYXIsXG4gICAgQWxlcnRcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXJQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRldmljZXM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBmZXRjaChgL2FwaS9jdXN0b21lcnMvJHt0aGlzLnByb3BzLnBhcmFtcy5pZH0vZGV2aWNlc2ApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRldmljZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGV2aWNlc30pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYERldmljZXMgbG9hZGVkIGluIERldmljZUxpc3Qgc3RhdGU6ICR7ZGV2aWNlc31gKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcmludCgpIHtcbiAgICAgICAgd2luZG93LnByaW50KCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLnJvd30+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlcnZpY2U6IDxiPkJsaWtlIERldmVsb3BtZW50IFNSTDwvYj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZHJlc2E6IDxiPlN0ci4gTGFob3ZhcmkgbnIuIDcxPC9iPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRlbGVmb246IDxiPjA3MjAgNzM3IDI3MjwvYj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWI6IDxiPnd3dy5zZXJ2aWNlZ3NtLmJsaWtlLnJvPC9iPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17c3R5bGUudW5kZWNvcmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2dyYW0gZGUgbHVjcnU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5MIC0gVjwvYj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj4wOTowMCAtIDE4OjAwPC9iPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNFwiIHN0eWxlPXtzdHlsZS5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgPFFSQ29kZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jdXN0b21lci81OGU1ZjcwN2E1ZGZhYTFhZmIzOTg5ODlcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPXsxMjh9XG4gICAgICAgICAgICAgICAgICAgIGxldmVsPVwiUVwiXG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgZmdDb2xvcj1cIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+UFJPQ0VTIFZFUkJBTCBERSBDT05TVEFUQVJFPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBJbmNoZWlhdCBhc3RhemkgMDgvMDkvMjAxNiBpbnRyZSBTQyBYWFggU1JMLCBzaSBYWFgsIHRlbGVmb24gMDcwMCAwMDAgMDAwLCBwb3Nlc29yIGFsIGRpc3Bveml0aXZ1bHVpIG1hcmNhOlxuICAgICAgICAgICAgICAgICAgICBTQU1TVU5HIEdBTEFYWSBTNyBFREdFLCBjb2QgSU1FSS9TRVJJRTogMzUyNjI1MTY1MTY4MTEsIHNlcmllIGFjdW11bGF0b3IgMDYxMTY1MTguIERlZmVjdGl1bmkgcmFwb3J0YXRlOiBUT1VDSFNDUkVFTiBDUkFQQVQsXG4gICAgICAgICAgICAgICAgICAgICBjb3N0dWwgZXN0aW1hdCBpbnRlcnZlbnRpZWk6IDM1MCBST04gKGNvc3R1bCBmaW5hbCBwb2F0ZSBzYSBkaWZlcmUhKS4gT2JzZXJ2YXRpaTogWkdBUklFVFVSSSBQUk9GVU5ERSBDQVJDQVNBIFNQQVRFLlxuICAgICAgICAgICAgICAgICAgICAgIE51IG5lIGFzdW1hbSByZXNwb25zYWJpbGl0YXRlYSBwZW50cnUgZGVmZWN0aXVuaWxlIGFudGVyaW9hcmUgYWxlIGRpc3Bveml0aXZ1bHVpIGFkdXMgaW4gc2VydmljZS5cbiAgICAgICAgICAgICAgICAgICAgICBEaXNwb3ppdGl2ZWxlIGNhcmUgbnUgc3VudCByaWRpY2F0ZSBpbiBtYXhpbSAzMCB6aWxlIGRlIGxhIGRhdGEgcmVwYXJhdGllaSwgaW50cmEgaW4gcHJvcHJpZXRhdGVhIFNDIFhYWCBTUkwuIFZlcmlkaWNhcmVhIHN0YXR1c3VsdWlcbiAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2ZW50aWVpIHNlIHBhb3RlIGZhY2UgbGEgaHR0cDovbG9jYWxob3N0OjMwMDAvY3VzdG9tZXIvOmlkLiBTZSBlc3RpbWVhemEgY2EgcHJvY2VkdXJhIGRlIHNlcnZpY2UgZHVyZWF6YSBwYW5hIGxhIDExLzA5LzIwMTYuXG4gICAgICAgICAgICAgICAgICAgICAgIFZhIHJ1Z2FtIG51IGluY2VyY2F0aSByaWRpY2FyZWEgZGlzcG96aXRpdnVsdWkgaW5haW50ZSBkZSBkYXRhIGVzdGltYXRhIHBlbnRydSByZXBhcmF0aWUhXG4gICAgICAgICAgICAgICAgICAgICAgIFNlbW5hdHVyYSBjbGllbnQsICAgUmlkaWNhdCBkaW4gc2VydmljZSxcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoci8+XG48ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+U2VydmljZTo8L2xpPlxuICAgICAgICAgICAgPGxpPkFkcmVzYTo8L2xpPlxuICAgICAgICAgICAgPGxpPlRlbGVmb246PC9saT5cbiAgICAgICAgICAgIDxsaT5XZWI6PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00XCIgc3R5bGU9e3N0eWxlLmxlZnR9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+UHJvZ3JhbSBkZSBsdWNydTwvbGk+XG4gICAgICAgICAgICA8bGk+TCAtIFY8L2xpPlxuICAgICAgICAgICAgPGxpPjA5OjAwIC0gMTg6MDA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTRcIiBzdHlsZT17c3R5bGUubGVmdH0+XG4gICAgPFFSQ29kZVxuICAgIHZhbHVlPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1c3RvbWVyLzU4ZTVmNzA3YTVkZmFhMWFmYjM5ODk4OVwiXG4gICAgc2l6ZT17MTI4fVxuICAgIGxldmVsPVwiUVwiXG4gICAgYmdDb2xvcj1cIiNGRkZGRkZcIlxuICAgIGZnQ29sb3I9XCIjMDAwMDAwXCJcbi8+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICA8aDM+Q0VSVElGSUNBVCBERSBHQVJBTlRJRTwvaDM+XG4gIDxoND5Db2QgdW5pYyBjbGllbnQ6IHt0aGlzLnByb3BzLnBhcmFtcy5pZH08L2g0PlxuICA8Yj5cbkdhcmFudGUgcmVwYXJhdGllOiAzMCB6aWxlIC0gc2UgYWNvcmEgcGVudHJ1IHBpZXNhL3BpZXNlbGUgaW5sb2N1aXRhL2lubG9jdWl0ZSBzYXUgZGVmZWN0dWwgcmVtZWRpYXQsIGN1IHVybWF0b2FyZWxlIG9ic2VydmF0aWlcIlxuICA8L2I+XG4gIDxvbD5cbiAgICA8bGk+R2FyYW50aWEgaXNpIHBpZXJkZSB2YWxhYmlsaXRhdGVhIGRhY2EgcHJvZHVzdWwgcy1hIGRlZmVjdGF0IGRhdG9yaWF0YSBuZWdsaWplbnRlaSBpbiB1dGlsaXphcmUsIG1hbmlwdWxhcmUsIGNvbnRhY3R1bCBjdSBsaWNoaWRlIHNhdSBhIHVub3IgaW5zdGFsYXJpL21vZGlmaWNhcmUgYWxlIHNvZnR1bHVpIG9yaWdpbmFsLjwvbGk+XG4gICAgPGxpPkRldGVyaW9yYXJpbGUgZGUgZ2VudWwgemdhcmlldHVyaWxvciwgc29jdXJpbG9yIHNhdSBydXB0dXJpIGFsZSBlbGVtZW50ZWxvciBkZW1vbnRhYmlsZSBzYXUgbmVkZW1vbnRhYmlsZSBjYXJlIG51IGF1IGZvc3QgYWR1c2UgbGEgY3Vub3N0aW50YSBwcmVzdGF0b3J1bHVpIGluIG1vbWVudHVsIGludG9jbWlyaWkgcHJvY2VzdWx1aSB2ZXJiYWwgZGUgY29uc3RhdGFyZSwgTlUgSU5UUkEgSU4gR0FSQU5USUUhPC9saT5cbiAgICA8bGk+UHJlemVudHVsIGNlcnRpZmljYXQgZGUgZ2FyYW50aWUgbnUgZXN0ZSB2YWxpZCBmYXJhIHN0YW1waWxhIFNDIFhYWCBTUkwuPC9saT5cbiAgPC9vbD5cbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxEZXZpY2VUYWJsZSBkZXZpY2VzPXt0aGlzLnN0YXRlLmRldmljZXN9IHBhcmFtcz17dGhpcy5wcm9wcy5wYXJhbXN9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHN0eWxlPXtzdHlsZS50YWJsZX0gb25DbGljaz17dGhpcy5wcmludH0+UHJpbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9wcmludC9QcmludFBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQWhCQTtBQTJCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBYUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBaEJBO0FBMEJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFOQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpGQTtBQW9GQTs7OztBQTNHQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})