webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(355);


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(3);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(21) });


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(22);
	var gOPS = __webpack_require__(37);
	var pIE = __webpack_require__(38);
	var toObject = __webpack_require__(39);
	var IObject = __webpack_require__(26);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(17)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),

/***/ 343:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regionStyle = exports.regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	var errorStyle = exports.errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(237);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(348);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(352);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(237);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(349), __esModule: true };

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(350);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(351).set });


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14);
	var anObject = __webpack_require__(13);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(267).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(353), __esModule: true };

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(354);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(247) });


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(345);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(346);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(347);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _createDOMForm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-form/src/createDOMForm\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _createDOMForm2 = _interopRequireDefault(_createDOMForm);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(76);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(343);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint react/no-multi-comp:0, no-console:0 */
	
	var Form = function (_Component) {
	  (0, _inherits3.default)(Form, _Component);
	
	  function Form() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      console.log('submit');
	      e.preventDefault();
	      _this.props.form.validateFieldsAndScroll({ scroll: { offsetTop: 20 } }, function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    }, _this.reset = function (e) {
	      e.preventDefault();
	      _this.props.form.resetFields();
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  Form.prototype.render = function render() {
	    var form = this.props.form;
	    var getFieldProps = form.getFieldProps;
	
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: 20 } },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'checkbox-group'
	      ),
	      _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmit },
	        _react2.default.createElement(
	          'div',
	          { style: _styles.regionStyle },
	          _react2.default.createElement(
	            'div',
	            null,
	            'checkbox-group'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'label',
	              null,
	              'a:',
	              _react2.default.createElement('input', (0, _extends3.default)({
	                type: 'checkbox'
	              }, getFieldProps('normal.a', {
	                initialValue: false,
	                valuePropName: 'checked'
	              })))
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              'b:',
	              _react2.default.createElement('input', (0, _extends3.default)({
	                type: 'checkbox'
	              }, getFieldProps('normal.b', {
	                initialValue: 'b',
	                getValueFromEvent: function getValueFromEvent(e) {
	                  return e.target.checked ? 'b' : '';
	                },
	                getValueProps: function getValueProps(value) {
	                  return {
	                    checked: !!value
	                  };
	                }
	              })))
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _styles.regionStyle },
	          _react2.default.createElement(
	            'button',
	            { onClick: this.reset },
	            'reset'
	          ),
	          '\xA0',
	          _react2.default.createElement('input', { type: 'submit', value: 'submit' })
	        )
	      )
	    );
	  };
	
	  return Form;
	}(_react.Component);
	
	Form.propTypes = {
	  form: _react.PropTypes.object
	};
	
	
	var NewForm = (0, _createDOMForm2.default)()(Form);
	
	_reactDom2.default.render(_react2.default.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=checkbox-group.js.map