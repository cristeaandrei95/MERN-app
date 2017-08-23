webpackHotUpdate(0,{

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redboxReact2 = __webpack_require__(16);

	var _redboxReact3 = _interopRequireDefault(_redboxReact2);

	var _reactTransformCatchErrors3 = __webpack_require__(14);

	var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(15);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	    DeviceRow: {
	        displayName: 'DeviceRow'
	    }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/home/wisechimp/projects/app-redux/app/components/devices/DeviceRow.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});

	var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	    filename: '/home/wisechimp/projects/app-redux/app/components/devices/DeviceRow.js',
	    components: _components,
	    locals: [],
	    imports: [_react3.default, _redboxReact3.default]
	});

	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	    };
	}

	var DeviceRow = _wrapComponent('DeviceRow')(function (_React$Component) {
	    _inherits(DeviceRow, _React$Component);

	    function DeviceRow(props) {
	        _classCallCheck(this, DeviceRow);

	        var _this = _possibleConstructorReturn(this, (DeviceRow.__proto__ || Object.getPrototypeOf(DeviceRow)).call(this));

	        _this.state = {
	            printable: props.device.printable
	        };
	        return _this;
	    }

	    _createClass(DeviceRow, [{
	        key: 'onCheckChange',
	        value: function onCheckChange(e) {
	            if (this.state.printable) {
	                this.setState({ printable: 0 });
	                console.log(this.state.printable);
	            } else {
	                this.setState({ printable: 1 });
	                console.log(this.state.printable);
	            }
	            var state = this.state.printable;
	            this.state.printable == 1 ? this.setState({ printable: 0 }) : this.setState({ printable: 1 });
	            console.log(this.state.printable);
	            if (state) {
	                console.log('check');
	                fetch('/api/customers/' + this.props.params.id + '/devices/' + this.props.device.id + '/printing', {
	                    method: 'PATCH',
	                    headers: {
	                        'Content-Type': 'application/json'
	                    },
	                    body: JSON.stringify({ "printable": 0 })
	                }).then(function (res) {
	                    return res.json();
	                }).catch(function (err) {
	                    console.log('Error changing printable state:', err);
	                });
	            } else {
	                console.log('uncheck');
	                fetch('/api/customers/' + this.props.params.id + '/devices/' + this.props.device.id + '/printing', {
	                    method: 'PATCH',
	                    headers: {
	                        'Content-Type': 'application/json'
	                    },
	                    body: JSON.stringify({ "printable": 1 })
	                }).then(function (res) {
	                    return res.json();
	                }).catch(function (err) {
	                    console.log('Error changing printable state:', err);
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var deviceStatus = void 0;
	            try {
	                status = typeof this.props.device.notes[this.props.device.notes.length - 1].status !== 'undefined' ? true : false;
	                if (status) {
	                    console.log(this.props.device.notes[this.props.device.notes.length - 1].status);
	                    deviceStatus = this.props.device.notes[this.props.device.notes.length - 1].status;
	                }
	            } catch (err) {}
	            //  deviceStatus == '' ? console.log('true') : console.log('false'); 

	            return _react3.default.createElement(
	                'tr',
	                null,
	                _react3.default.createElement(
	                    'td',
	                    null,
	                    _react3.default.createElement('input', { type: 'checkbox', className: 'printCheckbox', name: 'printable', checked: this.state.printable, onChange: this.onCheckChange.bind(this) })
	                ),
	                _react3.default.createElement(
	                    'td',
	                    null,
	                    _react3.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/customers/' + this.props.params.id + '/devices/' + this.props.device.id },
	                        this.props.device.device
	                    )
	                ),
	                _react3.default.createElement(
	                    'td',
	                    null,
	                    this.props.device.model
	                ),
	                _react3.default.createElement(
	                    'td',
	                    null,
	                    this.props.device.imei
	                ),
	                _react3.default.createElement(
	                    'td',
	                    null,
	                    this.props.device.createdAt
	                ),
	                _react3.default.createElement(
	                    'td',
	                    null,
	                    deviceStatus
	                )
	            );
	        }
	    }]);

	    return DeviceRow;
	}(_react3.default.Component));

	exports.default = DeviceRow;
	;
	DeviceRow.propTypes = {
	    device: _react3.default.PropTypes.object,
	    key: _react3.default.PropTypes.number
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})