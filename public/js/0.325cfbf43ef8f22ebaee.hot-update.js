webpackHotUpdate(0,{

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _DeviceRow = __webpack_require__(445);\n\nvar _DeviceRow2 = _interopRequireDefault(_DeviceRow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    DeviceTable: {\n        displayName: 'DeviceTable'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/DeviceTable.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/print/DeviceTable.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar DeviceTable = _wrapComponent('DeviceTable')(function (_React$Component) {\n    _inherits(DeviceTable, _React$Component);\n\n    function DeviceTable() {\n        _classCallCheck(this, DeviceTable);\n\n        return _possibleConstructorReturn(this, (DeviceTable.__proto__ || Object.getPrototypeOf(DeviceTable)).apply(this, arguments));\n    }\n\n    _createClass(DeviceTable, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            console.log('Device Table has: ' + this.props.devices);\n            var Devices = this.props.devices.filter(function (devices) {\n                return devices.printable == 1;\n            });\n            var Row = Devices.map(function (device, i) {\n                return _react3.default.createElement(_DeviceRow2.default, { device: device, params: _this2.props.params, key: i });\n            });\n            return _react3.default.createElement(\n                'table',\n                { className: 'table table-striped table-bordered table-condensed' },\n                _react3.default.createElement(\n                    'thead',\n                    null,\n                    _react3.default.createElement(\n                        'tr',\n                        null,\n                        _react3.default.createElement(\n                            'th',\n                            null,\n                            'Dispozitiv'\n                        ),\n                        _react3.default.createElement(\n                            'th',\n                            null,\n                            'Model'\n                        ),\n                        _react3.default.createElement(\n                            'th',\n                            null,\n                            'Imei'\n                        ),\n                        _react3.default.createElement(\n                            'th',\n                            null,\n                            'Defect'\n                        ),\n                        _react3.default.createElement(\n                            'th',\n                            null,\n                            'Statut'\n                        )\n                    )\n                ),\n                _react3.default.createElement(\n                    'tbody',\n                    null,\n                    Row\n                )\n            );\n        }\n    }]);\n\n    return DeviceTable;\n}(_react3.default.Component));\n\nexports.default = DeviceTable;\n;\n\nDeviceTable.propTypes = {\n    customers: _react3.default.PropTypes.array\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3ByaW50L0RldmljZVRhYmxlLmpzP2Q0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBEZXZpY2VSb3cgZnJvbSAnLi9EZXZpY2VSb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc29sZS5sb2coYERldmljZSBUYWJsZSBoYXM6ICR7dGhpcy5wcm9wcy5kZXZpY2VzfWApO1xuICAgICAgbGV0IERldmljZXMgPSB0aGlzLnByb3BzLmRldmljZXMuZmlsdGVyKGRldmljZXMgPT4gZGV2aWNlcy5wcmludGFibGUgPT0gMSk7XG4gICAgICBsZXQgUm93ID0gRGV2aWNlcy5tYXAoKGRldmljZSwgaSkgPT4gICAoIDxEZXZpY2VSb3cgZGV2aWNlPXtkZXZpY2V9IHBhcmFtcz17dGhpcy5wcm9wcy5wYXJhbXN9IGtleT17aX0vPiApICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1jb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNwb3ppdGl2PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+SW1laTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVmZWN0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PntSb3d9PC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfTtcbn07XG5cbkRldmljZVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBjdXN0b21lcnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9wcmludC9EZXZpY2VUYWJsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBYUE7Ozs7QUFuQkE7QUFDQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})