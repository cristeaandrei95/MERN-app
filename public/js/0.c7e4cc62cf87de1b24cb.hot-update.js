webpackHotUpdate(0,{

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redboxReact2 = __webpack_require__(17);

	var _redboxReact3 = _interopRequireDefault(_redboxReact2);

	var _reactTransformCatchErrors3 = __webpack_require__(15);

	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(16);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactAddonsUpdate = __webpack_require__(37);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _reactRouter = __webpack_require__(19);

	var _style = __webpack_require__(28);

	var _style2 = _interopRequireDefault(_style);

	var _reactQrSvg = __webpack_require__(828);

	var _reactContenteditable = __webpack_require__(736);

	var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

	var _DeviceTable = __webpack_require__(450);

	var _DeviceTable2 = _interopRequireDefault(_DeviceTable);

	var _reactBootstrap = __webpack_require__(48);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	    CustomerPage: {
	        displayName: 'CustomerPage'
	    }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/home/wisechimp/projects/service-gsm-1.0.3/app/components/print/PrintPage.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});

	var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	    filename: '/home/wisechimp/projects/service-gsm-1.0.3/app/components/print/PrintPage.js',
	    components: _components,
	    locals: [],
	    imports: [_react3.default, _redboxReact3.default]
	});

	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	    };
	}

	var CustomerPage = _wrapComponent('CustomerPage')(function (_React$Component) {
	    _inherits(CustomerPage, _React$Component);

	    function CustomerPage() {
	        _classCallCheck(this, CustomerPage);

	        var _this = _possibleConstructorReturn(this, (CustomerPage.__proto__ || Object.getPrototypeOf(CustomerPage)).call(this));

	        _this.state = {
	            devices: [],
	            customer: [],
	            html: "<b> Garante reparatie: 30 zile - se acorda pentru piesa/piesele inlocuita/inlocuite sau defectul remediat, cu urmatoarele observatii: </b>"
	        };
	        return _this;
	    }

	    _createClass(CustomerPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadDevice();
	            this.loadCustomer();
	        }
	    }, {
	        key: 'loadDevice',
	        value: function loadDevice() {
	            var _this2 = this;

	            fetch('/api/customers/' + this.props.params.id + '/devices').then(function (response) {
	                return response.json();
	            }).then(function (devices) {
	                _this2.setState({ devices: devices });
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(evt) {
	            this.setState({ html: evt.target.value });
	        }
	    }, {
	        key: 'loadCustomer',
	        value: function loadCustomer() {
	            var _this3 = this;

	            fetch('/api/customers/' + this.props.params.id).then(function (response) {
	                return response.json();
	            }).then(function (customer) {
	                _this3.setState({ customer: customer });
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }
	    }, {
	        key: 'print',
	        value: function print() {
	            window.print();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var today = new Date();
	            var dd = today.getDate();
	            var mm = today.getMonth() + 1; //January is 0!
	            var yyyy = today.getFullYear();
	            if (dd < 10) {
	                dd = '0' + dd;
	            }
	            if (mm < 10) {
	                mm = '0' + mm;
	            }
	            today = dd + '/' + mm + '/' + yyyy;

	            return _react3.default.createElement(
	                'div',
	                { id: 'print', style: _style2.default.row },
	                _react3.default.createElement(
	                    'div',
	                    null,
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },
	                        _react3.default.createElement(
	                            'ul',
	                            { style: _style2.default.undecorate },
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Service:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'SC BLIKE DEVELOPMENT SRL'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Adresa:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'Str. Lahovari nr. 71'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Telefon:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    '0720 737 272'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Web:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'servicegsm.blike.ro'
	                                )
	                            )
	                        )
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },
	                        _react3.default.createElement(
	                            'ul',
	                            { style: _style2.default.undecorate },
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Program de lucru:'
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'L - V'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    '09:00 - 18:00'
	                                )
	                            )
	                        )
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },
	                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'https://servicegsm.blike.ro/customer/' + this.props.params.id, size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })
	                    )
	                ),
	                _react3.default.createElement('br', null),
	                _react3.default.createElement(
	                    'div',
	                    { className: 'col-md-12 col-lg-12' },
	                    _react3.default.createElement(
	                        'h4',
	                        { style: _style2.default.center },
	                        'PROCES VERBAL DE CONSTATARE'
	                    ),
	                    _react3.default.createElement(
	                        'p',
	                        null,
	                        'Incheiat astazi ',
	                        today,
	                        ' intre SC BLIKE DEVELOPMENT SRL, si ',
	                        this.state.customer.company == '' ? this.state.customer.name : this.state.customer.company,
	                        ', telefon ',
	                        this.state.customer.phone,
	                        ', posesor al dispozitivului / dispozitivelor, conform rubricii "echipamente predate in service". Nu ne asumam responsabilitatea pentru defectiunile anterioare ale dispozitivului adus in service. Verificarea status-ului interventiei se poate face online la adresa: https://servicegsm.blike.ro/customer/',
	                        this.props.params.id,
	                        ' sau prin scanarea codului QR.'
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-6 col-lg-6', style: _style2.default.left },
	                        'Semnatura client,'
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-6 col-lg-6', style: _style2.default.right },
	                        'Reprezentant service,'
	                    ),
	                    _react3.default.createElement('br', null),
	                    _react3.default.createElement('br', null),
	                    _react3.default.createElement(
	                        'h4',
	                        null,
	                        'Echipamente predate in service:'
	                    ),
	                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),
	                    _react3.default.createElement('hr', null)
	                ),
	                _react3.default.createElement(
	                    'div',
	                    null,
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },
	                        _react3.default.createElement(
	                            'ul',
	                            { style: _style2.default.undecorate },
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Service:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'SC BLIKE DEVELOPMENT SRL'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Adresa:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'Str. Lahovari nr. 71'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Telefon:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    '0720 737 272'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Web:',
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'servicegsm.blike.ro'
	                                )
	                            )
	                        )
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-lg-4', style: _style2.default.left },
	                        _react3.default.createElement(
	                            'ul',
	                            { style: _style2.default.undecorate },
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                'Program de lucru:'
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    'L - V'
	                                )
	                            ),
	                            _react3.default.createElement(
	                                'li',
	                                null,
	                                _react3.default.createElement(
	                                    'b',
	                                    null,
	                                    '09:00 - 18:00'
	                                )
	                            )
	                        )
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-lg-4', style: _style2.default.center },
	                        _react3.default.createElement(_reactQrSvg.QRCode, { value: 'https://servicegsm.blike.ro/customer/' + this.props.params.id, size: 64, level: 'Q', bgColor: '#FFFFFF', fgColor: '#000000' })
	                    )
	                ),
	                _react3.default.createElement('br', null),
	                _react3.default.createElement(
	                    'div',
	                    { className: 'col-md-12 col-lg-12' },
	                    _react3.default.createElement(
	                        'h4',
	                        { style: _style2.default.center },
	                        'CERTIFICAT DE GARANTIE'
	                    ),
	                    _react3.default.createElement(
	                        'h5',
	                        { style: _style2.default.center },
	                        'Cod unic client: ',
	                        this.props.params.id
	                    ),
	                    _react3.default.createElement(_reactContenteditable2.default, { html: this.state.html, disable: false, onChange: this.handleChange }),
	                    _react3.default.createElement(
	                        'ol',
	                        null,
	                        _react3.default.createElement(
	                            'li',
	                            null,
	                            'Garantia isi pierde valabilitatea daca produsul s-a defectat datorita neglijentei in utilizare, manipulare, contactul cu lichide sau a unor instalari/modificare ale softului original.'
	                        ),
	                        _react3.default.createElement(
	                            'li',
	                            null,
	                            'Deteriorarile de genul zgarieturilor, socurilor sau rupturi ale elementelor demontabile sau nedemontabile care nu au fost aduse la cunostinta prestatorului in momentul intocmirii procesului verbal de constatare, NU FAC OBIECTUL GARANTIEI!'
	                        ),
	                        _react3.default.createElement(
	                            'li',
	                            null,
	                            'Prezentul certificat de garantie nu este valid fara stampila SC BLIKE DEVELOPMENT SRL.'
	                        )
	                    ),
	                    _react3.default.createElement(_DeviceTable2.default, { devices: this.state.devices, params: this.props.params }),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-6 col-lg-6', style: _style2.default.left },
	                        'Semnatura client,'
	                    ),
	                    _react3.default.createElement(
	                        'div',
	                        { className: 'col-md-6 col-lg-6', style: _style2.default.right },
	                        'Reprezentant service,'
	                    ),
	                    _react3.default.createElement('br', null),
	                    _react3.default.createElement(
	                        'button',
	                        { className: 'btn btn-success', style: _style2.default.left, onClick: this.print },
	                        'Print'
	                    )
	                ),
	                _react3.default.createElement('br', null)
	            );
	        }
	    }]);

	    return CustomerPage;
	}(_react3.default.Component));

	exports.default = CustomerPage;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ })

})