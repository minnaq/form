webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(371);


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

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(224);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.createForm = _createForm2["default"]; // export this package's api

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mixin = undefined;
	
	var _createBaseForm = __webpack_require__(225);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var mixin = exports.mixin = {
	  getForm: function getForm() {
	    return {
	      getFieldsValue: this.getFieldsValue,
	      getFieldValue: this.getFieldValue,
	      getFieldInstance: this.getFieldInstance,
	      setFieldsValue: this.setFieldsValue,
	      setFields: this.setFields,
	      setFieldsInitialValue: this.setFieldsInitialValue,
	      getFieldProps: this.getFieldProps,
	      getFieldError: this.getFieldError,
	      isFieldValidating: this.isFieldValidating,
	      isFieldsValidating: this.isFieldsValidating,
	      isSubmitting: this.isSubmitting,
	      submit: this.submit,
	      validateFields: this.validateFields,
	      resetFields: this.resetFields
	    };
	  }
	};
	
	function createForm(options) {
	  return (0, _createBaseForm2["default"])(options, [mixin]);
	}
	
	exports["default"] = createForm;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(226);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _defineProperty2 = __webpack_require__(230);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(234);
	
	var _asyncValidator = __webpack_require__(236);
	
	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultValidateTrigger = 'onChange';
	var defaultTrigger = defaultValidateTrigger;
	var atom = {};
	
	function createBaseForm() {
	  var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var mixins = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var mapPropsToFields = option.mapPropsToFields;
	  var onFieldsChange = option.onFieldsChange;
	  var fieldNameProp = option.fieldNameProp;
	  var fieldMetaProp = option.fieldMetaProp;
	  var validateMessages = option.validateMessages;
	  var _option$mapProps = option.mapProps;
	  var mapProps = _option$mapProps === undefined ? _utils.mirror : _option$mapProps;
	  var _option$formPropName = option.formPropName;
	  var formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName;
	  var withRef = option.withRef;
	
	
	  function decorate(WrappedComponent) {
	    var Form = _react2["default"].createClass({
	      displayName: 'Form',
	
	      mixins: mixins,
	
	      getInitialState: function getInitialState() {
	        var fields = void 0;
	        if (mapPropsToFields) {
	          fields = mapPropsToFields(this.props);
	        }
	        this.fields = fields || {};
	        this.instances = {};
	        this.fieldsMeta = {};
	        this.cachedBind = {};
	        return {
	          submitting: false
	        };
	      },
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (mapPropsToFields) {
	          this.fields = mapPropsToFields(nextProps);
	        }
	      },
	      onChange: function onChange(name_, action) {
	        var name = name_;
	        var fieldMeta = this.getFieldMeta(name);
	        var validate = fieldMeta.validate;
	
	        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          args[_key - 2] = arguments[_key];
	        }
	
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, args);
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, args) : _utils.getValueFromEvent.apply(undefined, args);
	        var fieldContent = void 0;
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.getField(name);
	        fieldContent = (0, _extends3["default"])({}, field, {
	          value: value,
	          dirty: (0, _utils.hasRules)(validate)
	        });
	        this.setFields((0, _defineProperty3["default"])({}, name, fieldContent));
	      },
	      onChangeValidate: function onChangeValidate(name_, action) {
	        var name = name_;
	        var fieldMeta = this.getFieldMeta(name);
	
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, args);
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, args) : _utils.getValueFromEvent.apply(undefined, args);
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.getField(name);
	        field.value = value;
	        field.dirty = true;
	        this.validateFieldsInternal([field], {
	          action: action,
	          options: {
	            firstFields: !!fieldMeta.validateFirst
	          }
	        });
	      },
	      getCacheBind: function getCacheBind(name, action, fn) {
	        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
	        if (!cache[action]) {
	          cache[action] = fn.bind(this, name, action);
	        }
	        return cache[action];
	      },
	      getFieldMeta: function getFieldMeta(name) {
	        return this.fieldsMeta[name];
	      },
	      getField: function getField(name) {
	        var fields = this.fields;
	
	        return (0, _extends3["default"])({}, fields[name], {
	          name: name
	        });
	      },
	      getFieldProps: function getFieldProps(name) {
	        var _this = this;
	
	        var fieldOption = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        if (!name) {
	          throw new Error('must call getFieldProps with valid name string!');
	        }
	
	        var rules = fieldOption.rules;
	        var _fieldOption$trigger = fieldOption.trigger;
	        var trigger = _fieldOption$trigger === undefined ? defaultTrigger : _fieldOption$trigger;
	        var _fieldOption$valuePro = fieldOption.valuePropName;
	        var valuePropName = _fieldOption$valuePro === undefined ? 'value' : _fieldOption$valuePro;
	        var getValueProps = fieldOption.getValueProps;
	        var exclusive = fieldOption.exclusive;
	        var _fieldOption$validate = fieldOption.validateTrigger;
	        var validateTrigger = _fieldOption$validate === undefined ? defaultValidateTrigger : _fieldOption$validate;
	        var _fieldOption$validate2 = fieldOption.validate;
	        var validate = _fieldOption$validate2 === undefined ? [] : _fieldOption$validate2;
	
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        var leadingName = nameKeyObj.name;
	        var key = nameKeyObj.key;
	        var fieldsMeta = this.fieldsMeta;
	
	        var fieldMeta = void 0;
	        var leadingFieldMeta = fieldsMeta[leadingName];
	
	        if (key) {
	          leadingFieldMeta = fieldsMeta[leadingName] = fieldsMeta[leadingName] || {};
	          leadingFieldMeta.virtual = !exclusive;
	          // exclusive allow getFieldProps('x', {initialValue})
	          // non-exclusive does not allow getFieldProps('x', {initialValue})
	          leadingFieldMeta.hidden = !exclusive;
	          leadingFieldMeta.exclusive = exclusive;
	          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
	        } else {
	          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
	        }
	
	        if ('initialValue' in fieldOption) {
	          fieldMeta.initialValue = fieldOption.initialValue;
	        }
	
	        var inputProps = {};
	
	        if (key) {
	          inputProps.key = key;
	        }
	
	        if (fieldNameProp) {
	          inputProps[fieldNameProp] = name;
	        }
	
	        var validateRules = validate.map(function (item) {
	          var newItem = (0, _extends3["default"])({}, item, {
	            trigger: item.trigger || []
	          });
	          if (typeof newItem.trigger === 'string') {
	            newItem.trigger = [newItem.trigger];
	          }
	          return newItem;
	        });
	
	        if (rules) {
	          validateRules.push({
	            trigger: validateTrigger ? [].concat(validateTrigger) : [],
	            rules: rules
	          });
	        }
	
	        validateRules.filter(function (item) {
	          return !!item.rules && item.rules.length;
	        }).map(function (item) {
	          return item.trigger;
	        }).reduce(function (pre, curr) {
	          return pre.concat(curr);
	        }, []).forEach(function (action) {
	          inputProps[action] = _this.getCacheBind(name, action, _this.onChangeValidate);
	        });
	
	        function checkRule(item) {
	          return item.trigger.indexOf(trigger) === -1 || !item.rules || !item.rules.length;
	        }
	
	        if (trigger && validateRules.every(checkRule)) {
	          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
	        }
	        var field = exclusive ? this.getField(leadingName) : this.getField(name);
	        var fieldValue = atom;
	        if (field && 'value' in field) {
	          fieldValue = field.value;
	        }
	        if (fieldValue === atom) {
	          fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
	        }
	        if (getValueProps) {
	          inputProps = (0, _extends3["default"])({}, inputProps, getValueProps(fieldValue));
	        } else {
	          inputProps[valuePropName] = fieldValue;
	        }
	
	        inputProps.ref = this.getCacheBind(name, name + '__ref', this.saveRef);
	
	        var meta = (0, _extends3["default"])({}, fieldMeta, fieldOption, {
	          validate: validateRules
	        });
	
	        fieldsMeta[name] = meta;
	
	        if (fieldMetaProp) {
	          inputProps[fieldMetaProp] = meta;
	        }
	
	        return inputProps;
	      },
	      getFieldMember: function getFieldMember(name, member) {
	        var field = this.getField(name);
	        return field && field[member];
	      },
	      getFieldError: function getFieldError(name) {
	        return (0, _utils.getErrorStrs)(this.getFieldMember(name, 'errors'));
	      },
	      getValidFieldsName: function getValidFieldsName() {
	        var fieldsMeta = this.fieldsMeta;
	        return fieldsMeta ? (0, _keys2["default"])(fieldsMeta).filter(function (name) {
	          return !fieldsMeta[name].hidden;
	        }) : [];
	      },
	      getFieldsValue: function getFieldsValue(names) {
	        var _this2 = this;
	
	        var fields = names || (0, _utils.flatFieldNames)(this.getValidFieldsName());
	        var allValues = {};
	        fields.forEach(function (f) {
	          allValues[f] = _this2.getFieldValue(f);
	        });
	        return allValues;
	      },
	      getFieldValue: function getFieldValue(name) {
	        var fields = this.fields;
	
	        return this.getValueFromFields(name, fields);
	      },
	      getFieldInstance: function getFieldInstance(name) {
	        return this.instances[name];
	      },
	      getValueFromFieldsInternal: function getValueFromFieldsInternal(name, fields) {
	        var field = fields[name];
	        if (field && 'value' in field) {
	          return field.value;
	        }
	        var fieldMeta = this.fieldsMeta[name];
	        return fieldMeta && fieldMeta.initialValue;
	      },
	      getValueFromFields: function getValueFromFields(name, fields) {
	        var fieldsMeta = this.fieldsMeta;
	
	        if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	          var ret = {};
	          for (var fieldKey in fieldsMeta) {
	            if (fieldsMeta.hasOwnProperty(fieldKey)) {
	              var nameKeyObj = (0, _utils.getNameKeyObj)(fieldKey);
	              if (nameKeyObj.name === name && nameKeyObj.key) {
	                ret[nameKeyObj.key] = this.getValueFromFieldsInternal(fieldKey, fields);
	              }
	            }
	          }
	          return ret;
	        }
	        return this.getValueFromFieldsInternal(name, fields);
	      },
	      getRules: function getRules(fieldMeta, action) {
	        var actionRules = fieldMeta.validate.filter(function (item) {
	          return !action || item.trigger.indexOf(action) >= 0;
	        }).map(function (item) {
	          return item.rules;
	        });
	        return (0, _utils.flattenArray)(actionRules);
	      },
	      setFields: function setFields(fields_) {
	        var _this3 = this;
	
	        var fieldsMeta = this.fieldsMeta;
	        var fields = fields_;
	        var nowFields = (0, _extends3["default"])({}, this.fields, fields);
	        var nowValues = {};
	        (0, _keys2["default"])(fieldsMeta).forEach(function (f) {
	          var _getNameKeyObj = (0, _utils.getNameKeyObj)(f);
	
	          var name = _getNameKeyObj.name;
	          var key = _getNameKeyObj.key;
	
	          if (key && fieldsMeta[name].exclusive) {
	            return;
	          }
	          nowValues[f] = _this3.getValueFromFields(f, nowFields);
	        });
	        var changedFieldsName = (0, _keys2["default"])(fields);
	        (0, _keys2["default"])(nowValues).forEach(function (f) {
	          var value = nowValues[f];
	          var fieldMeta = fieldsMeta[f];
	          if (fieldMeta && fieldMeta.normalize) {
	            var nowValue = fieldMeta.normalize(value, _this3.getValueFromFields(f, _this3.fields), nowValues);
	            if (nowValue !== value) {
	              nowFields[f] = (0, _extends3["default"])({}, nowFields[f], {
	                value: nowValue
	              });
	            }
	          }
	        });
	        this.fields = nowFields;
	        if (onFieldsChange) {
	          (function () {
	            var changedFields = {};
	            changedFieldsName.forEach(function (f) {
	              changedFields[f] = _this3.getField(f);
	            });
	            onFieldsChange(_this3.props, changedFields);
	          })();
	        }
	        this.forceUpdate();
	      },
	      setFieldsValue: function setFieldsValue(fieldsValue) {
	        var newFields = {};
	        var fieldsMeta = this.fieldsMeta;
	        var fields = this.fields;
	
	        for (var name in fieldsValue) {
	          if (fieldsValue.hasOwnProperty(name)) {
	            var value = fieldsValue[name];
	            if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	              (0, _utils.clearVirtualField)(name, fields, fieldsMeta);
	              for (var key in value) {
	                if (value.hasOwnProperty(key)) {
	                  newFields[(0, _utils.getNameKeyStr)(name, key)] = value[key];
	                }
	              }
	            } else {
	              newFields[name] = {
	                name: name,
	                value: value
	              };
	            }
	          }
	        }
	        this.setFields(newFields);
	      },
	      setFieldsInitialValue: function setFieldsInitialValue(initialValues) {
	        var fieldsMeta = this.fieldsMeta;
	        for (var name in initialValues) {
	          if (initialValues.hasOwnProperty(name)) {
	            var fieldMeta = fieldsMeta[name];
	            fieldsMeta[name] = (0, _extends3["default"])({}, fieldMeta, {
	              initialValue: initialValues[name]
	            });
	          }
	        }
	      },
	      saveRef: function saveRef(name, _, component) {
	        if (!component) {
	          // after destroy, delete data
	          delete this.fieldsMeta[name];
	          delete this.fields[name];
	          delete this.instances[name];
	          delete this.cachedBind[name];
	          return;
	        }
	        var fieldMeta = this.getFieldMeta(name);
	        if (fieldMeta && fieldMeta.ref) {
	          if (typeof fieldMeta.ref === 'string') {
	            throw new Error('can not set ref string for ' + name);
	          }
	          fieldMeta.ref(component);
	        }
	        this.instances[name] = component;
	      },
	      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
	        var _this4 = this;
	
	        var fieldNames = _ref.fieldNames;
	        var action = _ref.action;
	        var _ref$options = _ref.options;
	        var options = _ref$options === undefined ? {} : _ref$options;
	
	        var allRules = {};
	        var allValues = {};
	        var allFields = {};
	        var alreadyErrors = {};
	        fields.forEach(function (field) {
	          var name = field.name;
	          if (options.force !== true && field.dirty === false) {
	            if (field.errors) {
	              alreadyErrors[name] = {
	                errors: field.errors
	              };
	            }
	            return;
	          }
	          var fieldMeta = _this4.getFieldMeta(name);
	          var newField = (0, _extends3["default"])({}, field);
	          newField.errors = undefined;
	          newField.validating = true;
	          newField.dirty = true;
	          allRules[name] = _this4.getRules(fieldMeta, action);
	          allValues[name] = newField.value;
	          allFields[name] = newField;
	        });
	        this.setFields(allFields);
	        // in case normalize
	        (0, _keys2["default"])(allValues).forEach(function (f) {
	          allValues[f] = _this4.getFieldValue(f);
	        });
	        if (callback && (0, _utils.isEmptyObject)(allFields)) {
	          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          return;
	        }
	        var validator = new _asyncValidator2["default"](allRules);
	        if (validateMessages) {
	          validator.messages(validateMessages);
	        }
	        validator.validate(allValues, options, function (errors) {
	          var errorsGroup = (0, _extends3["default"])({}, alreadyErrors);
	          if (errors && errors.length) {
	            errors.forEach(function (e) {
	              var fieldName = e.field;
	              if (!errorsGroup[fieldName]) {
	                errorsGroup[fieldName] = {
	                  errors: []
	                };
	              }
	              var fieldErrors = errorsGroup[fieldName].errors;
	              fieldErrors.push(e);
	            });
	          }
	          var expired = [];
	          var nowAllFields = {};
	          (0, _keys2["default"])(allRules).forEach(function (name) {
	            var fieldErrors = errorsGroup[name];
	            var nowField = _this4.getField(name);
	            // avoid concurrency problems
	            if (nowField.value !== allValues[name]) {
	              expired.push({
	                name: name
	              });
	            } else {
	              nowField.errors = fieldErrors && fieldErrors.errors;
	              nowField.value = allValues[name];
	              nowField.validating = false;
	              nowField.dirty = false;
	              nowAllFields[name] = nowField;
	            }
	          });
	          _this4.setFields(nowAllFields);
	          if (callback) {
	            if (expired.length) {
	              expired.forEach(function (_ref2) {
	                var name = _ref2.name;
	
	                var fieldErrors = [{
	                  message: name + ' need to revalidate',
	                  field: name
	                }];
	                errorsGroup[name] = {
	                  expired: true,
	                  errors: fieldErrors
	                };
	              });
	            }
	            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this4.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	        });
	      },
	      validateFields: function validateFields(ns, opt, cb) {
	        var _this5 = this;
	
	        var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	        var names = _getParams.names;
	        var callback = _getParams.callback;
	        var options = _getParams.options;
	
	        var fieldNames = names || this.getValidFieldsName();
	        var fields = fieldNames.map(function (name) {
	          var fieldMeta = _this5.getFieldMeta(name);
	          if (!(0, _utils.hasRules)(fieldMeta.validate)) {
	            return null;
	          }
	          var field = _this5.getField(name);
	          field.value = _this5.getFieldValue(name);
	          return field;
	        }).filter(function (f) {
	          return !!f;
	        });
	        if (!fields.length) {
	          if (callback) {
	            callback(null, this.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	          return;
	        }
	        if (!('firstFields' in options)) {
	          options.firstFields = fieldNames.filter(function (name) {
	            var fieldMeta = _this5.getFieldMeta(name);
	            return !!fieldMeta.validateFirst;
	          });
	        }
	        this.validateFieldsInternal(fields, {
	          fieldNames: fieldNames,
	          options: options
	        }, callback);
	      },
	      isFieldValidating: function isFieldValidating(name) {
	        return this.getFieldMember(name, 'validating');
	      },
	      isFieldsValidating: function isFieldsValidating(ns) {
	        var _this6 = this;
	
	        var names = ns || this.getValidFieldsName();
	        return names.some(function (n) {
	          return _this6.isFieldValidating(n);
	        });
	      },
	      isSubmitting: function isSubmitting() {
	        return this.state.submitting;
	      },
	      submit: function submit(callback) {
	        var _this7 = this;
	
	        var fn = function fn() {
	          _this7.setState({
	            submitting: false
	          });
	        };
	        this.setState({
	          submitting: true
	        });
	        callback(fn);
	      },
	      resetFields: function resetFields(ns) {
	        var newFields = {};
	        var fields = this.fields;
	
	        var changed = false;
	        var names = ns || (0, _keys2["default"])(fields);
	        names.forEach(function (name) {
	          var field = fields[name];
	          if (field && 'value' in field) {
	            changed = true;
	            newFields[name] = {};
	          }
	        });
	        if (changed) {
	          this.setFields(newFields);
	        }
	      },
	      render: function render() {
	        var formProps = (0, _defineProperty3["default"])({}, formPropName, this.getForm());
	        if (withRef) {
	          formProps.ref = 'wrappedComponent';
	        }
	        var props = mapProps.call(this, (0, _extends3["default"])({}, formProps, this.props));
	        return _react2["default"].createElement(WrappedComponent, props);
	      }
	    });
	
	    return (0, _utils.argumentContainer)(Form, WrappedComponent);
	  }
	
	  return decorate;
	}
	
	exports["default"] = createBaseForm;
	module.exports = exports['default'];

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(227), __esModule: true };

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(228);
	module.exports = __webpack_require__(8).Object.keys;


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(39);
	var $keys = __webpack_require__(22);
	
	__webpack_require__(229)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6);
	var core = __webpack_require__(8);
	var fails = __webpack_require__(17);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(231);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(232), __esModule: true };

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(233);
	var $Object = __webpack_require__(8).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(226);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.argumentContainer = argumentContainer;
	exports.getValueFromEvent = getValueFromEvent;
	exports.getErrorStrs = getErrorStrs;
	exports.isEmptyObject = isEmptyObject;
	exports.flattenArray = flattenArray;
	exports.mirror = mirror;
	exports.hasRules = hasRules;
	exports.startsWith = startsWith;
	exports.getParams = getParams;
	exports.getNameKeyStr = getNameKeyStr;
	exports.getNameKeyObj = getNameKeyObj;
	exports.flatFields = flatFields;
	exports.flatFieldNames = flatFieldNames;
	exports.clearVirtualField = clearVirtualField;
	
	var _hoistNonReactStatics = __webpack_require__(235);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
	}
	
	function argumentContainer(Container, WrappedComponent) {
	  /* eslint no-param-reassign:0 */
	  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
	  Container.WrappedComponent = WrappedComponent;
	  return (0, _hoistNonReactStatics2["default"])(Container, WrappedComponent);
	}
	
	function getValueFromEvent(e) {
	  // support custom element
	  if (!e || !e.target) {
	    return e;
	  }
	  var target = e.target;
	
	  return target.type === 'checkbox' ? target.checked : target.value;
	}
	
	function getErrorStrs(errors) {
	  if (errors) {
	    return errors.map(function (e) {
	      if (e && e.message) {
	        return e.message;
	      }
	      return e;
	    });
	  }
	  return errors;
	}
	
	function isEmptyObject(obj) {
	  return (0, _keys2["default"])(obj).length === 0;
	}
	
	function flattenArray(arr) {
	  return Array.prototype.concat.apply([], arr);
	}
	
	function mirror(obj) {
	  return obj;
	}
	
	function hasRules(validate) {
	  if (validate) {
	    return validate.some(function (item) {
	      return !!item.rules && item.rules.length;
	    });
	  }
	  return false;
	}
	
	function startsWith(str, prefix) {
	  return str.lastIndexOf(prefix, 0) === 0;
	}
	
	function getParams(ns, opt, cb) {
	  var names = ns;
	  var callback = cb;
	  var options = opt;
	  if (cb === undefined) {
	    if (typeof names === 'function') {
	      callback = names;
	      options = {};
	      names = undefined;
	    } else if (Array.isArray(ns)) {
	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      } else {
	        options = options || {};
	      }
	    } else {
	      callback = options;
	      options = names || {};
	      names = undefined;
	    }
	  }
	  return {
	    names: names,
	    callback: callback,
	    options: options
	  };
	}
	
	var NAME_KEY_SEP = '.';
	
	function getNameKeyStr(name, key) {
	  if (key) {
	    return '' + name + NAME_KEY_SEP + key;
	  }
	  return name;
	}
	
	function getNameKeyObj(str) {
	  var index = str.indexOf(NAME_KEY_SEP);
	  if (str.indexOf(NAME_KEY_SEP) !== -1) {
	    var name = str.slice(0, index);
	    var key = str.slice(index + NAME_KEY_SEP.length);
	    return {
	      name: name,
	      key: key
	    };
	  }
	  return {
	    name: str
	  };
	}
	
	function flatFields(fields_, fieldsMeta) {
	  var fields = (0, _extends3["default"])({}, fields_);
	  (0, _keys2["default"])(fields).forEach(function (k) {
	    if (fieldsMeta[k] && fieldsMeta[k].virtual) {
	      var value = fields[k];
	      // flatten
	      for (var k2 in value) {
	        if (value.hasOwnProperty(k2)) {
	          fields[getNameKeyStr(k, k2)] = value[k2];
	        }
	      }
	      delete fields[k];
	    }
	  });
	  return fields;
	}
	
	function flatFieldNames(names) {
	  var ret = {};
	  names.forEach(function (n) {
	    ret[getNameKeyObj(n).name] = 1;
	  });
	  return (0, _keys2["default"])(ret);
	}
	
	function clearVirtualField(name, fields, fieldsMeta) {
	  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	    /* eslint no-loop-func:0 */
	    (0, _keys2["default"])(fields).forEach(function (ok) {
	      if (getNameKeyObj(ok).name === name) {
	        delete fields[ok];
	      }
	    });
	  }
	}

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(237);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(271);
	
	var _validator = __webpack_require__(272);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _messages2 = __webpack_require__(294);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}
	
	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : (0, _typeof3['default'])(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;
	
	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];
	
	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};
	
	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }
	
	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }
	
	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = (0, _extends3['default'])({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = (0, _extends3['default'])({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof3['default'])(rule.fields) === 'object' || (0, _typeof3['default'])(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return (0, _extends3['default'])({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }
	
	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }
	
	        errors = errors.map((0, _util.complementError)(rule));
	
	        if (options.first && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else if (options.error) {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            } else {
	              errors = [];
	            }
	            return doIt(errors);
	          }
	
	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = (0, _extends3['default'])({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }
	
	      var res = rule.validator(rule, data.value, cb, data.source, options);
	      if (res && res.then) {
	        res.then(function () {
	          return cb();
	        }, function (e) {
	          return cb(e);
	        });
	      }
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2['default'].required;
	    }
	    return _validator2['default'][this.getType(rule)] || false;
	  }
	};
	
	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2['default'][type] = validator;
	};
	
	Schema.messages = _messages2.messages;
	
	exports['default'] = Schema;
	module.exports = exports['default'];

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warning = undefined;
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(237);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var formatRegExp = /%[sdj%]/g;
	
	var warning = exports.warning = function warning() {};
	
	// don't print warning message when in production env or node runtime
	if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
	  exports.warning = warning = function warning(type, errors) {
	    if (typeof console !== 'undefined' && console.warn) {
	      if (errors.every(function (e) {
	        return typeof e === 'string';
	      })) {
	        console.warn(type, errors);
	      }
	    }
	  };
	}
	
	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}
	
	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}
	
	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}
	
	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}
	
	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;
	
	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }
	
	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}
	
	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;
	
	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }
	
	  next([]);
	}
	
	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}
	
	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}
	
	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}
	
	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && (0, _typeof3['default'])(target[s]) === 'object') {
	          target[s] = (0, _extends3['default'])({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _string = __webpack_require__(273);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _method = __webpack_require__(281);
	
	var _method2 = _interopRequireDefault(_method);
	
	var _number = __webpack_require__(282);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _boolean = __webpack_require__(283);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _regexp = __webpack_require__(284);
	
	var _regexp2 = _interopRequireDefault(_regexp);
	
	var _integer = __webpack_require__(285);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	var _float = __webpack_require__(286);
	
	var _float2 = _interopRequireDefault(_float);
	
	var _array = __webpack_require__(287);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _object = __webpack_require__(288);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _enum = __webpack_require__(289);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(290);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	var _date = __webpack_require__(291);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _required = __webpack_require__(292);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _type = __webpack_require__(293);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  string: _string2['default'],
	  method: _method2['default'],
	  number: _number2['default'],
	  boolean: _boolean2['default'],
	  regexp: _regexp2['default'],
	  integer: _integer2['default'],
	  float: _float2['default'],
	  array: _array2['default'],
	  object: _object2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default'],
	  date: _date2['default'],
	  url: _type2['default'],
	  hex: _type2['default'],
	  email: _type2['default'],
	  required: _required2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	      _rule2['default'].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2['default'].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = string;
	module.exports = exports['default'];

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _required = __webpack_require__(275);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _whitespace = __webpack_require__(276);
	
	var _whitespace2 = _interopRequireDefault(_whitespace);
	
	var _type = __webpack_require__(277);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _range = __webpack_require__(278);
	
	var _range2 = _interopRequireDefault(_range);
	
	var _enum = __webpack_require__(279);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(280);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  required: _required2['default'],
	  whitespace: _whitespace2['default'],
	  type: _type2['default'],
	  range: _range2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(271);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(271);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}
	
	exports['default'] = whitespace;
	module.exports = exports['default'];

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(237);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(271);
	
	var util = _interopRequireWildcard(_util);
	
	var _required = __webpack_require__(275);
	
	var _required2 = _interopRequireDefault(_required);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint max-len:0 */
	
	var pattern = {
	  // http://emailregex.com/
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};
	
	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  float: function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};
	
	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2['default'])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(271);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}
	
	exports['default'] = range;
	module.exports = exports['default'];

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(271);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var ENUM = 'enum';
	
	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(271);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern) {
	    if (rule.pattern instanceof RegExp) {
	      if (!rule.pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    } else if (typeof rule.pattern === 'string') {
	      var _pattern = new RegExp(rule.pattern);
	      if (!_pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    }
	  }
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = method;
	module.exports = exports['default'];

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = number;
	module.exports = exports['default'];

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(271);
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = boolean;
	module.exports = exports['default'];

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = regexp;
	module.exports = exports['default'];

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = integer;
	module.exports = exports['default'];

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = floatFn;
	module.exports = exports['default'];

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = array;
	module.exports = exports['default'];

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = object;
	module.exports = exports['default'];

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ENUM = 'enum';
	
	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2['default'][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2['default'].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = date;
	module.exports = exports['default'];

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(237);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value);
	  _rule2['default'].required(rule, value, source, errors, options, type);
	  callback(errors);
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(274);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(271);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    'default': 'Validation error on field %s',
	    required: '%s is required',
	    'enum': '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      boolean: '%s is not a %s',
	      integer: '%s is not an %s',
	      float: '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}
	
	var messages = exports.messages = newMessages();

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

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createContainer = __webpack_require__(358);
	
	var _createRootContainer = __webpack_require__(369);
	
	var _Store = __webpack_require__(370);
	
	exports.createContainer = _createContainer.createContainer;
	exports.createRootContainer = _createRootContainer.createRootContainer;
	exports.Store = _Store.Store;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.createContainer = createContainer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _shallowequal = __webpack_require__(359);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reselect = __webpack_require__(364);
	
	var _utils = __webpack_require__(365);
	
	var _createEmptyContainer = __webpack_require__(368);
	
	function createSelectGetter(s) {
	  return function (state) {
	    return state[s];
	  };
	}
	
	function defaultMapStoreProps(store) {
	  return {
	    getStoreState: store.getState,
	    setStoreState: store.setState,
	    batchStore: store.batch
	  };
	}
	
	function createContainer(selector_) {
	  var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var _option$pure = option.pure;
	  var pure = _option$pure === undefined ? true : _option$pure;
	  var _option$mapStoreProps = option.mapStoreProps;
	  var mapStoreProps = _option$mapStoreProps === undefined ? defaultMapStoreProps : _option$mapStoreProps;
	  var ref = option.ref;
	  var _option$storeName = option.storeName;
	  var storeName = _option$storeName === undefined ? 'store' : _option$storeName;
	
	  if (!selector_) {
	    return (0, _createEmptyContainer.createEmptyContainer)(mapStoreProps, storeName);
	  }
	
	  var selector = selector_;
	
	  if (typeof selector === 'object') {
	    var selectMap = {};
	    for (var s in selector) {
	      if (selector.hasOwnProperty(s)) {
	        selectMap[s] = createSelectGetter(selector[s]);
	      }
	    }
	    selector = (0, _reselect.createStructuredSelector)(selectMap);
	  }
	
	  var shouldUpdateStateProps = selector.length > 1;
	
	  return function create(WrappedComponent) {
	    var Container = (function (_Component) {
	      _inherits(Container, _Component);
	
	      function Container(props, context) {
	        _classCallCheck(this, Container);
	
	        _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).call(this, props, context);
	        this.onChange = this.onChange.bind(this);
	        this.state = {
	          appState: this.getAppState() || {}
	        };
	      }
	
	      // use componentWillMount instead of componentDidMount to support setState inside WrappedComponent's componentDidMount and componentWillMount
	
	      _createClass(Container, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          if (!this.unsubscribe) {
	            this.unsubscribe = this.context[storeName].subscribe(this.onChange);
	          }
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          var appState = undefined;
	          if (pure) {
	            var propsChanged = false;
	            if (shouldUpdateStateProps) {
	              propsChanged = !(0, _shallowequal2['default'])(nextProps, this.props);
	            }
	            if (propsChanged) {
	              appState = this.getAppState(nextProps);
	            }
	          } else if (shouldUpdateStateProps) {
	            appState = this.getAppState(nextProps);
	          }
	          if (appState) {
	            this.setState({
	              appState: appState
	            });
	          }
	        }
	      }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	          if (pure) {
	            var propsChanged = !(0, _shallowequal2['default'])(nextProps, this.props);
	            if (propsChanged) {
	              return true;
	            }
	            return !(0, _shallowequal2['default'])(nextState.appState, this.state.appState);
	          }
	          return true;
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        }
	      }, {
	        key: 'onChange',
	        value: function onChange() {
	          this.setState({
	            appState: this.getAppState()
	          });
	        }
	      }, {
	        key: 'getAppState',
	        value: function getAppState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	          var store = this.context[storeName];
	          var state = store.getState();
	          return shouldUpdateStateProps ? selector(state, props) : selector(state);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var appState = this.state.appState;
	
	          var store = this.context[storeName];
	          return _react2['default'].createElement(WrappedComponent, _extends({}, appState, mapStoreProps(store), this.props, {
	            ref: ref }));
	        }
	      }]);
	
	      return Container;
	    })(_react.Component);
	
	    return (0, _utils.argumentContainer)(Container, WrappedComponent, storeName);
	  };
	}

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var fetchKeys = __webpack_require__(360);
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if (ret !== void 0) {
	        return !!ret;
	    }
	
	    if (objA === objB) {
	        return true;
	    }
	
	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }
	
	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);
	
	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }
	
	    compareContext = compareContext || null;
	
	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }
	
	    return true;
	};

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(361),
	    isArguments = __webpack_require__(362),
	    isArray = __webpack_require__(363);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ }),

/***/ 361:
/***/ (function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ }),

/***/ 362:
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;


/***/ }),

/***/ 363:
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ }),

/***/ 364:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createSelector = createSelector;
	exports.createStructuredSelector = createStructuredSelector;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}
	
	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];
	
	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      return lastResult;
	    }
	    lastArgs = args;
	    lastResult = func.apply(undefined, args);
	    return lastResult;
	  };
	}
	
	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
	
	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }
	
	  return dependencies;
	}
	
	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }
	
	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }
	
	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);
	
	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));
	
	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }
	
	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };
	
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    return selector;
	  };
	}
	
	function createSelector() {
	  return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
	}
	
	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];
	
	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }
	
	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.argumentContainer = argumentContainer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _hoistNonReactStatics = __webpack_require__(366);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _constants = __webpack_require__(367);
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
	}
	
	function argumentContainer(Container, WrappedComponent, storeName) {
	  Container.displayName = 'Container(' + getDisplayName(WrappedComponent) + ')';
	  Container.WrappedComponent = WrappedComponent;
	  Container.contextTypes = _defineProperty({}, storeName, _constants.storeShape);
	
	  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
	}

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	        for (var i=0; i<keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(40);
	
	var storeShape = _react.PropTypes.object.isRequired;
	exports.storeShape = storeShape;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.createEmptyContainer = createEmptyContainer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(365);
	
	function createEmptyContainer(mapStoreProps, storeName) {
	  return function create(WrappedComponent) {
	    var Container = (function (_Component) {
	      _inherits(Container, _Component);
	
	      function Container() {
	        _classCallCheck(this, Container);
	
	        _get(Object.getPrototypeOf(Container.prototype), 'constructor', this).apply(this, arguments);
	      }
	
	      _createClass(Container, [{
	        key: 'render',
	        value: function render() {
	          return _react2['default'].createElement(WrappedComponent, _extends({}, mapStoreProps(this.context[storeName]), this.props, {
	            ref: 'wrappedInstance' }));
	        }
	      }]);
	
	      return Container;
	    })(_react.Component);
	
	    return (0, _utils.argumentContainer)(Container, WrappedComponent, storeName);
	  };
	}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.createRootContainer = createRootContainer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Store = __webpack_require__(370);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(367);
	
	function createRootContainerWrapper(WrappedComponent, store, storeName) {
	  var RootContainer = (function (_Component) {
	    _inherits(RootContainer, _Component);
	
	    function RootContainer() {
	      _classCallCheck(this, RootContainer);
	
	      _get(Object.getPrototypeOf(RootContainer.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(RootContainer, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return _defineProperty({}, storeName, store);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(WrappedComponent, this.props);
	      }
	    }]);
	
	    return RootContainer;
	  })(_react.Component);
	
	  RootContainer.childContextTypes = _defineProperty({}, storeName, _constants.storeShape);
	  return RootContainer;
	}
	
	function createRootContainer() {
	  var initialStore = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var store = typeof initialStore.getState === 'function' ? initialStore : new _Store.Store(initialStore);
	  var _option$storeName = option.storeName;
	  var storeName = _option$storeName === undefined ? 'store' : _option$storeName;
	
	  return function (WrappedComponent) {
	    return createRootContainerWrapper(WrappedComponent, store, storeName);
	  };
	}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _reactDom = __webpack_require__(76);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var Store = (function () {
	  function Store(initialData) {
	    _classCallCheck(this, Store);
	
	    this.state = initialData;
	    this.batching = false;
	    this.listeners = [];
	    this.fireChange = this.fireChange.bind(this);
	    this.batch = this.batch.bind(this);
	    this.getState = this.getState.bind(this);
	    this.setState = this.setState.bind(this);
	  }
	
	  _createClass(Store, [{
	    key: 'setState',
	    value: function setState(state) {
	      this.state = _extends({}, this.state, state);
	      if (!this.batching) {
	        this.batchFireChange();
	      }
	    }
	  }, {
	    key: 'batch',
	    value: function batch(callback) {
	      var _this = this;
	
	      return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        if (_this.batching) {
	          callback.apply(null, args);
	          return;
	        }
	        _this.batching = true;
	        var originalState = _this.state;
	        callback.apply(null, args);
	        _this.batching = false;
	        if (originalState !== _this.state) {
	          _this.batchFireChange();
	        }
	      };
	    }
	  }, {
	    key: 'batchFireChange',
	    value: function batchFireChange() {
	      // TODO debounce ?
	      _reactDom2['default'].unstable_batchedUpdates(this.fireChange);
	    }
	  }, {
	    key: 'fireChange',
	    value: function fireChange() {
	      this.listeners.slice().forEach(function (listener) {
	        return listener();
	      });
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe(listener) {
	      var listeners = this.listeners;
	      listeners.push(listener);
	      var isSubscribed = true;
	
	      return function unsubscribe() {
	        if (!isSubscribed) {
	          return;
	        }
	        isSubscribed = false;
	        var index = listeners.indexOf(listener);
	        listeners.splice(index, 1);
	      };
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }
	  }]);
	
	  return Store;
	})();
	
	exports.Store = Store;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(345);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(346);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(347);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(2);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _rcForm = __webpack_require__(223);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDataBinding = __webpack_require__(357);
	
	var _reactDom = __webpack_require__(76);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(343);
	
	var _switch = __webpack_require__(372);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	__webpack_require__(378);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFormContainer = (0, _reactDataBinding.createContainer)(function (state) {
	  return {
	    on: ((state.formState || {}).on || {}).value || false
	  };
	}); /* eslint react/no-multi-comp:0, no-console:0 */
	
	var TopForm = _react2.default.createClass({
	  displayName: 'TopForm',
	
	  propTypes: {
	    form: _react.PropTypes.object,
	    on: _react.PropTypes.bool
	  },
	
	  render: function render() {
	    var _props = this.props,
	        form = _props.form,
	        on = _props.on;
	    var getFieldProps = form.getFieldProps;
	
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'has email? '
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_switch2.default, getFieldProps('on', {
	          initialValue: on,
	          valuePropName: 'checked'
	        }))
	      )
	    );
	  }
	});
	TopForm = createFormContainer(TopForm);
	
	var BottomForm = _react2.default.createClass({
	  displayName: 'BottomForm',
	
	  propTypes: {
	    form: _react.PropTypes.object,
	    on: _react.PropTypes.bool
	  },
	
	  render: function render() {
	    var _props2 = this.props,
	        form = _props2.form,
	        on = _props2.on;
	
	    var style = (0, _extends3.default)({}, _styles.regionStyle, {
	      display: on ? 'block' : 'none'
	    });
	    return _react2.default.createElement(
	      'div',
	      { style: style },
	      _react2.default.createElement(
	        'div',
	        null,
	        'email: '
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', form.getFieldProps('email', {
	          rules: [{
	            type: 'email'
	          }],
	          hidden: !on
	        }))
	      )
	    );
	  }
	});
	
	BottomForm = createFormContainer(BottomForm);
	
	var Form = _react2.default.createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	    console.log(this.props.form.getFieldsValue());
	  },
	  render: function render() {
	    var form = this.props.form;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(TopForm, { form: form }),
	      _react2.default.createElement(BottomForm, { form: form }),
	      _react2.default.createElement(
	        'div',
	        { style: _styles.regionStyle },
	        _react2.default.createElement(
	          'button',
	          { onClick: this.onSubmit },
	          'submit'
	        )
	      )
	    );
	  }
	});
	
	Form = (0, _rcForm.createForm)({
	  mapPropsToFields: function mapPropsToFields(props) {
	    console.log('mapPropsToFields', props);
	    return props.formState;
	  },
	  onFieldsChange: function onFieldsChange(props, fields) {
	    console.log('onFieldsChange', fields);
	    props.setStoreState({
	      formState: (0, _extends3.default)({}, props.formState, fields)
	    });
	  }
	})(Form);
	
	Form = (0, _reactDataBinding.createContainer)(function (state) {
	  return {
	    formState: state.formState
	  };
	})(Form);
	
	var App = function (_React$Component) {
	  (0, _inherits3.default)(App, _React$Component);
	
	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'integrate with react-data-binding'
	      ),
	      _react2.default.createElement(Form, null)
	    );
	  };
	
	  return App;
	}(_react2.default.Component);
	
	var NewApp = (0, _reactDataBinding.createRootContainer)({
	  formState: {
	    on: { value: true }
	  }
	})(App);
	
	_reactDom2.default.render(_react2.default.createElement(NewApp, null), document.getElementById('__react-content'));

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _rcSwitch = __webpack_require__(373);
	
	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(377);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Switch = (_temp = _class = function (_React$Component) {
	  _inherits(Switch, _React$Component);
	
	  function Switch() {
	    _classCallCheck(this, Switch);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        size = _props.size,
	        className = _props.className;
	
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-small', size === 'small'), _classNames));
	    return _react2["default"].createElement(_rcSwitch2["default"], _extends({ className: cls }, this.props));
	  };
	
	  return Switch;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-switch'
	}, _temp);
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(374);

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(375);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var classNames = __webpack_require__(377);
	
	function noop() {}
	
	var Switch = function (_Component) {
	  _inherits(Switch, _Component);
	
	  function Switch(props) {
	    _classCallCheck(this, Switch);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    _this.state = { checked: checked };
	    return _this;
	  }
	
	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  };
	
	  Switch.prototype.setChecked = function setChecked(checked) {
	    if (!('checked' in this.props)) {
	      this.setState({
	        checked: checked
	      });
	    }
	    this.props.onChange(checked);
	  };
	
	  Switch.prototype.toggle = function toggle() {
	    var checked = !this.state.checked;
	    this.setChecked(checked);
	  };
	
	  Switch.prototype.handleKeyDown = function handleKeyDown(e) {
	    if (e.keyCode === 37) {
	      this.setChecked(false);
	    }
	    if (e.keyCode === 39) {
	      this.setChecked(true);
	    }
	  };
	
	  // Handle auto focus when click switch in Chrome
	
	
	  Switch.prototype.handleMouseUp = function handleMouseUp(e) {
	    if (this.refs.node) {
	      this.refs.node.blur();
	    }
	    if (this.props.onMouseUp) {
	      this.props.onMouseUp(e);
	    }
	  };
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        className = _props.className,
	        prefixCls = _props.prefixCls,
	        disabled = _props.disabled,
	        checkedChildren = _props.checkedChildren,
	        unCheckedChildren = _props.unCheckedChildren,
	        restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'unCheckedChildren']);
	
	    var checked = this.state.checked;
	    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	    return _react2["default"].createElement(
	      'span',
	      _extends({}, restProps, {
	        className: switchClassName,
	        tabIndex: disabled ? -1 : 0,
	        ref: 'node',
	        onKeyDown: this.handleKeyDown.bind(this),
	        onClick: disabled ? noop : this.toggle.bind(this),
	        onMouseUp: this.handleMouseUp.bind(this)
	      }),
	      _react2["default"].createElement(
	        'span',
	        { className: prefixCls + '-inner' },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  };
	
	  return Switch;
	}(_react.Component);
	
	Switch.propTypes = {
	  className: _propTypes2["default"].string,
	  prefixCls: _propTypes2["default"].string,
	  disabled: _propTypes2["default"].bool,
	  checkedChildren: _propTypes2["default"].any,
	  unCheckedChildren: _propTypes2["default"].any,
	  onChange: _propTypes2["default"].func,
	  onMouseUp: _propTypes2["default"].func,
	  checked: _propTypes2["default"].bool,
	  defaultChecked: _propTypes2["default"].bool
	};
	
	Switch.defaultProps = {
	  prefixCls: 'rc-switch',
	  checkedChildren: null,
	  unCheckedChildren: null,
	  className: '',
	  defaultChecked: false,
	  onChange: noop
	};
	
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(69)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(376)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(48);
	var invariant = __webpack_require__(51);
	var ReactPropTypesSecret = __webpack_require__(70);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),

/***/ 378:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=data-binding-form.js.map