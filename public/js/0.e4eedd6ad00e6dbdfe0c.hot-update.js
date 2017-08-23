webpackHotUpdate(0,{

/***/ 454:
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

	var _reactRouter = __webpack_require__(19);

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
	  filename: '/home/wisechimp/projects/service-gsm-1.0.3/app/components/public/DeviceRow.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	  filename: '/home/wisechimp/projects/service-gsm-1.0.3/app/components/public/DeviceRow.js',
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

	  function DeviceRow() {
	    _classCallCheck(this, DeviceRow);

	    return _possibleConstructorReturn(this, (DeviceRow.__proto__ || Object.getPrototypeOf(DeviceRow)).apply(this, arguments));
	  }

	  _createClass(DeviceRow, [{
	    key: 'render',
	    value: function render() {
	      var deviceStatus = void 0;
	      try {
	        status = typeof this.props.device.notes[this.props.device.notes.length - 1].status !== 'undefined' ? true : false;
	        if (status) {
	          console.log(this.props.device.notes[this.props.device.notes.length - 1].status);
	          deviceStatus = this.props.device.notes[this.props.device.notes.length - 1].status;
	        }
	      } catch (err) {
	        deviceStatus = this.props.device.status;
	      }
	      return _react3.default.createElement(
	        'tr',
	        null,
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ })

})