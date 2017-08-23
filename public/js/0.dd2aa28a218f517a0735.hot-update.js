webpackHotUpdate(0,{

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(14);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(1);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(15);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactBootstrap = __webpack_require__(47);\n\nvar _reactModal = __webpack_require__(170);\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nvar _style = __webpack_require__(27);\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n    ModalNoteAdd: {\n        displayName: 'ModalNoteAdd'\n    }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/notes/ModalNoteAdd.js',\n    components: _components,\n    locals: [module],\n    imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n    filename: '/home/wisechimp/projects/app-redux/app/components/notes/ModalNoteAdd.js',\n    components: _components,\n    locals: [],\n    imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n    return function (Component) {\n        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n    };\n}\n\nvar ModalNoteAdd = _wrapComponent('ModalNoteAdd')(function (_React$Component) {\n    _inherits(ModalNoteAdd, _React$Component);\n\n    function ModalNoteAdd() {\n        _classCallCheck(this, ModalNoteAdd);\n\n        var _this = _possibleConstructorReturn(this, (ModalNoteAdd.__proto__ || Object.getPrototypeOf(ModalNoteAdd)).call(this));\n\n        _this.state = {\n            showModal: false\n        };\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\n        _this.handleOpenModal = _this.handleOpenModal.bind(_this);\n        _this.handleCloseModal = _this.handleCloseModal.bind(_this);\n        return _this;\n    }\n\n    _createClass(ModalNoteAdd, [{\n        key: 'handleSubmit',\n        value: function handleSubmit(e) {\n            console.log('Got submit:', e);\n            e.preventDefault();\n            var form = document.forms.noteAdd;\n            this.props.addNote({ note: form.note.value, status: form.status.value });\n            form.note.value = '';\n            this.setState({ showModal: false });\n        }\n    }, {\n        key: 'handleCloseModal',\n        value: function handleCloseModal() {\n            this.setState({ showModal: false });\n        }\n    }, {\n        key: 'handleOpenModal',\n        value: function handleOpenModal() {\n            this.setState({ showModal: true });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react3.default.createElement(\n                'div',\n                null,\n                _react3.default.createElement(\n                    _reactModal2.default,\n                    { isOpen: this.state.showModal, contentLabel: 'onRequestClose Example', onRequestClose: this.handleCloseModal },\n                    _react3.default.createElement(\n                        'button',\n                        { className: 'btn btn-danger', onClick: this.handleCloseModal },\n                        'X'\n                    ),\n                    _react3.default.createElement(\n                        'h2',\n                        { style: _style2.default.fix },\n                        'Add Note'\n                    ),\n                    _react3.default.createElement(\n                        'form',\n                        { name: 'noteAdd' },\n                        _react3.default.createElement(\n                            _reactBootstrap.FormGroup,\n                            { className: 'col-md-8' },\n                            _react3.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'note', placeholder: 'Note' })\n                        ),\n                        _react3.default.createElement(\n                            _reactBootstrap.FormGroup,\n                            { className: 'col-md-4' },\n                            _react3.default.createElement(\n                                _reactBootstrap.FormControl,\n                                { componentClass: 'select', name: 'status' },\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'Primit in service'\n                                ),\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'Acceptat'\n                                ),\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'Refuzat'\n                                ),\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'Asteptand piese'\n                                ),\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'In lucru'\n                                ),\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'Reparat'\n                                ),\n                                _react3.default.createElement(\n                                    'option',\n                                    null,\n                                    'Predat'\n                                )\n                            )\n                        ),\n                        _react3.default.createElement(\n                            _reactBootstrap.Button,\n                            { bsStyle: 'primary', onClick: this.handleSubmit },\n                            'Add'\n                        )\n                    )\n                ),\n                _react3.default.createElement(\n                    'button',\n                    { type: 'button', onClick: this.handleOpenModal, style: _style2.default.table, className: 'btn btn-primary' },\n                    'Add Note'\n                )\n            );\n        }\n    }]);\n\n    return ModalNoteAdd;\n}(_react3.default.Component));\n\nexports.default = ModalNoteAdd;\n\nModalNoteAdd.propTypes = {\n    addNote: _react3.default.PropTypes.func.isRequired\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL25vdGVzL01vZGFsTm90ZUFkZC5qcz8xNDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBGb3JtQ29udHJvbCwgQnV0dG9uLCBDaGVja2JveH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE5vdGVBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3Blbk1vZGFsID0gdGhpcy5oYW5kbGVPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZU1vZGFsID0gdGhpcy5oYW5kbGVDbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHb3Qgc3VibWl0OicsIGUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtcy5ub3RlQWRkO1xuICAgICAgICB0aGlzLnByb3BzLmFkZE5vdGUoe25vdGU6IGZvcm0ubm90ZS52YWx1ZSwgc3RhdHVzOiBmb3JtLnN0YXR1cy52YWx1ZX0pO1xuICAgICAgICBmb3JtLm5vdGUudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZX0pO1xuICAgIH1cbiAgICBoYW5kbGVDbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlfSk7XG4gICAgfVxuICAgIGhhbmRsZU9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiB0cnVlfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IGNvbnRlbnRMYWJlbD1cIm9uUmVxdWVzdENsb3NlIEV4YW1wbGVcIiBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VNb2RhbH0+WDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlLmZpeH0+QWRkIE5vdGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwibm90ZUFkZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIG5hbWU9XCJub3RlXCIgcGxhY2Vob2xkZXI9XCJOb3RlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudENsYXNzPVwic2VsZWN0XCIgbmFtZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlByaW1pdCBpbiBzZXJ2aWNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QWNjZXB0YXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5SZWZ1emF0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QXN0ZXB0YW5kIHBpZXNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW4gbHVjcnU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5SZXBhcmF0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UHJlZGF0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5BZGQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVuTW9kYWx9IHN0eWxlPXtzdHlsZS50YWJsZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWRkIE5vdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbk1vZGFsTm90ZUFkZC5wcm9wVHlwZXMgPSB7XG4gICAgYWRkTm90ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9ub3Rlcy9Nb2RhbE5vdGVBZGQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVBBO0FBUUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFIQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJBO0FBeUJBOzs7O0FBbkRBO0FBQ0E7OztBQW9EQTtBQUNBO0FBREE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})