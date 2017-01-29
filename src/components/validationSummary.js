/* eslint-disable */

module.exports = {
  Summary: function (a, b, c) {
    var _self = this;
    var _isValid = true;
    var _validationData = _self.$v;
    var _componentData = _self._data;
    var _validationGroupEnabled = false;
    var _fieldsChecked = [];

    var isformValid = true;
    var messages = [];

    var _getMessages = function (obj, name) {
      var __isDirtyField = obj['$dirty'];
      var __isErrorField = obj['$error'];
      var __isInvalidField = obj['$invalid'];
      var __properName = name ? name.charAt(0).toUpperCase() + name.substring(1) : null;
      var __msg = '';

      for (var prop in obj) {
        var __val = obj[prop];
        var __type = typeof __val;

        if (__type === 'object') {
          _getMessages(__val, prop);
        } else {
          var __isBuiltInProp = prop.includes('$') && __type === 'boolean';

          if (!__val && !__isBuiltInProp && __isErrorField) {
            isformValid = false;

            switch (prop) {
              case 'required':
                __msg = '-field is required.';
                break;
              case 'alphaNum':
                __msg = '-field can only contain alpha-numeric characters.';
                break;
              case 'sameAs':
                __msg = '-field must be same as Password.';
                break;
              case 'minLength':
                __msg = '-field is too short.';
                break;
              case 'maxLength':
                __msg = '-field is too long.';
                break;
              case 'email':
                __msg = '-field is not a valid email address.';
                break;
              default:
                __msg = '-field is not valid.';
                break;
            }

            messages.push(__properName + __msg);
          }
        }
      }
    };

    _getMessages(_validationData);

    return {
      messages: isformValid ? [] : messages
    }
  }
}
