webpackHotUpdate(0,{

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = getRoutes;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(18);\n\nvar _App = __webpack_require__(428);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _NotFound = __webpack_require__(429);\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _Login = __webpack_require__(426);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Signup = __webpack_require__(427);\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _CustomerList = __webpack_require__(431);\n\nvar _CustomerList2 = _interopRequireDefault(_CustomerList);\n\nvar _CustomerPage = __webpack_require__(432);\n\nvar _CustomerPage2 = _interopRequireDefault(_CustomerPage);\n\nvar _DevicePage = __webpack_require__(438);\n\nvar _DevicePage2 = _interopRequireDefault(_DevicePage);\n\nvar _CustomerPublic = __webpack_require__(448);\n\nvar _CustomerPublic2 = _interopRequireDefault(_CustomerPublic);\n\nvar _DevicePublic = __webpack_require__(449);\n\nvar _DevicePublic2 = _interopRequireDefault(_DevicePublic);\n\nvar _PrintPage = __webpack_require__(447);\n\nvar _PrintPage2 = _interopRequireDefault(_PrintPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getRoutes(store) {\n    var ensureAuthenticated = function ensureAuthenticated(nextState, replace) {\n        if (!store.getState().auth.token) {\n            replace('/login');\n        }\n    };\n    var skipIfAuthenticated = function skipIfAuthenticated(nextState, replace) {\n        if (store.getState().auth.token) {\n            replace('/');\n        }\n    };\n    var clearMessages = function clearMessages() {\n        store.dispatch({ type: 'CLEAR_MESSAGES' });\n    };\n    return _react2.default.createElement(\n        _reactRouter.Route,\n        { path: '/', component: _App2.default },\n        _react2.default.createElement(_reactRouter.IndexRoute, { component: _CustomerList2.default, onEnter: ensureAuthenticated, onLeave: clearMessages }),\n        '// Public Front-End',\n        _react2.default.createElement(_reactRouter.Route, { path: '/customer/:id', component: _CustomerPublic2.default, onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n        _react2.default.createElement(_reactRouter.Route, { path: '/customer/:id/devices/:did', component: _DevicePublic2.default, onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n        '// Logged-User Front-End',\n        _react2.default.createElement(_reactRouter.Route, { path: '/customers/:id', component: _CustomerPage2.default, onEnter: ensureAuthenticated, onLeave: clearMessages }),\n        _react2.default.createElement(_reactRouter.Route, { path: '/customers/:id/print', component: _PrintPage2.default, onEnter: ensureAuthenticated, onLeave: clearMessages }),\n        _react2.default.createElement(_reactRouter.Route, { path: '/customers/:id/devices/:did', component: _DevicePage2.default, onEnter: ensureAuthenticated, onLeave: clearMessages }),\n        _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _Signup2.default, onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n        _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default, onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n        _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default, onLeave: clearMessages })\n    );\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9yb3V0ZXMuanM/NmRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJbmRleFJvdXRlLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvQWNjb3VudC9Mb2dpbic7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vY29tcG9uZW50cy9BY2NvdW50L1NpZ251cCc7XG5pbXBvcnQgQ3VzdG9tZXJMaXN0IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21lcnMvQ3VzdG9tZXJMaXN0JztcbmltcG9ydCBDdXN0b21lclBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbWVycy9DdXN0b21lclBhZ2UnO1xuaW1wb3J0IERldmljZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2RldmljZXMvRGV2aWNlUGFnZSc7XG5pbXBvcnQgQ3VzdG9tZXJQdWJsaWMgZnJvbSAnLi9jb21wb25lbnRzL3B1YmxpYy9DdXN0b21lclB1YmxpYyc7XG5pbXBvcnQgRGV2aWNlUHVibGljIGZyb20gJy4vY29tcG9uZW50cy9wdWJsaWMvRGV2aWNlUHVibGljJztcbmltcG9ydCBQcmludFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3ByaW50L1ByaW50UGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvdXRlcyhzdG9yZSkge1xuICAgIGNvbnN0IGVuc3VyZUF1dGhlbnRpY2F0ZWQgPSAobmV4dFN0YXRlLCByZXBsYWNlKSA9PiB7XG4gICAgICAgIGlmICghc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuKSB7XG4gICAgICAgICAgICByZXBsYWNlKCcvbG9naW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2tpcElmQXV0aGVudGljYXRlZCA9IChuZXh0U3RhdGUsIHJlcGxhY2UpID0+IHtcbiAgICAgICAgaWYgKHN0b3JlLmdldFN0YXRlKCkuYXV0aC50b2tlbikge1xuICAgICAgICAgICAgcmVwbGFjZSgnLycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0NMRUFSX01FU1NBR0VTJ30pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtDdXN0b21lckxpc3R9IG9uRW50ZXI9e2Vuc3VyZUF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgICAgICAgIC8vIFB1YmxpYyBGcm9udC1FbmRcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWVyLzppZFwiIGNvbXBvbmVudD17Q3VzdG9tZXJQdWJsaWN9IG9uRW50ZXI9e3NraXBJZkF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWVyLzppZC9kZXZpY2VzLzpkaWRcIiBjb21wb25lbnQ9e0RldmljZVB1YmxpY30gb25FbnRlcj17c2tpcElmQXV0aGVudGljYXRlZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgICAgICAgICAgLy8gTG9nZ2VkLVVzZXIgRnJvbnQtRW5kXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jdXN0b21lcnMvOmlkXCIgY29tcG9uZW50PXtDdXN0b21lclBhZ2V9IG9uRW50ZXI9e2Vuc3VyZUF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWVycy86aWQvcHJpbnRcIiBjb21wb25lbnQ9e1ByaW50UGFnZX0gb25FbnRlcj17ZW5zdXJlQXV0aGVudGljYXRlZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY3VzdG9tZXJzLzppZC9kZXZpY2VzLzpkaWRcIiBjb21wb25lbnQ9e0RldmljZVBhZ2V9IG9uRW50ZXI9e2Vuc3VyZUF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cblxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXB9IG9uRW50ZXI9e3NraXBJZkF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gb25FbnRlcj17c2tpcElmQXV0aGVudGljYXRlZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgICAgICA8L1JvdXRlPlxuICAgICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3JvdXRlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFhQTtBQUNBO0FBZEE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFaQTtBQWVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})