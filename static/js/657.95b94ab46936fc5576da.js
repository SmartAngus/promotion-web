"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[657],{

/***/ 1474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_alert; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(5873);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(7119);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(8628);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(1627);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(8855);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(847);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(3061);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(444);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/getDataOrAriaProps.js
function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') && key.substr(0, 7) !== 'data-__') {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/ErrorBoundary.js







var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ErrorBoundary, _React$Component);

  var _super = (0,createSuper/* default */.Z)(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ErrorBoundary);

    _this = _super.apply(this, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          description = _this$props.description,
          children = _this$props.children;
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
      var componentStack = info && info.componentStack ? info.componentStack : null;
      var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      var errorDescription = typeof description === 'undefined' ? componentStack : description;

      if (error) {
        return /*#__PURE__*/react.createElement(es_alert, {
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/react.createElement("pre", null, errorDescription)
        });
      }

      return children;
    }
  }]);

  return ErrorBoundary;
}(react.Component);


// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/index.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















var iconMapFilled = {
  success: CheckCircleFilled/* default */.Z,
  info: InfoCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z
};
var iconMapOutlined = {
  success: CheckCircleOutlined/* default */.Z,
  info: InfoCircleOutlined/* default */.Z,
  error: CloseCircleOutlined/* default */.Z,
  warning: ExclamationCircleOutlined/* default */.Z
};

var Alert = function Alert(_a) {
  var _classNames2;

  var description = _a.description,
      customizePrefixCls = _a.prefixCls,
      message = _a.message,
      banner = _a.banner,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      onClick = _a.onClick,
      afterClose = _a.afterClose,
      showIcon = _a.showIcon,
      closable = _a.closable,
      closeText = _a.closeText,
      action = _a.action,
      props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "action"]);

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];

  var ref = react.useRef();

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('alert', customizePrefixCls);

  var handleClose = function handleClose(e) {
    var _a;

    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  var getType = function getType() {
    var type = props.type;

    if (type !== undefined) {
      return type;
    } // banner 模式默认为警告


    return banner ? 'warning' : 'info';
  }; // closeable when closeText is assigned


  var isClosable = closeText ? true : closable;
  var type = getType();

  var renderIconNode = function renderIconNode() {
    var icon = props.icon; // use outline icon in alert with description

    var iconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;

    if (icon) {
      return (0,reactNode/* replaceElement */.wm)(icon, /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon), function () {
        return {
          className: classnames_default()("".concat(prefixCls, "-icon"), (0,defineProperty/* default */.Z)({}, icon.props.className, icon.props.className))
        };
      });
    }

    return /*#__PURE__*/react.createElement(iconType, {
      className: "".concat(prefixCls, "-icon")
    });
  };

  var renderCloseIcon = function renderCloseIcon() {
    return isClosable ? /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: handleClose,
      className: "".concat(prefixCls, "-close-icon"),
      tabIndex: 0
    }, closeText ? /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-close-text")
    }, closeText) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null)) : null;
  }; // banner 模式默认有 Icon


  var isShowIcon = banner && showIcon === undefined ? true : showIcon;
  var alertCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-with-description"), !!description), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-no-icon"), !isShowIcon), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-banner"), !!banner), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
  var dataOrAriaProps = getDataOrAriaProps(props);
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: !closed,
    motionName: "".concat(prefixCls, "-motion"),
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: function onLeaveStart(node) {
      return {
        maxHeight: node.offsetHeight
      };
    },
    onLeaveEnd: afterClose
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      ref: ref,
      "data-show": !closed,
      className: classnames_default()(alertCls, motionClassName),
      style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, dataOrAriaProps), isShowIcon ? renderIconNode() : null, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, message), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description)), action ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-action")
    }, action) : null, renderCloseIcon());
  });
};

Alert.ErrorBoundary = ErrorBoundary;
/* harmony default export */ var es_alert = (Alert);

/***/ }),

/***/ 9485:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.js



/***/ }),

/***/ 4657:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ basis_promoDeduct; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/style/index.js + 1 modules
var style = __webpack_require__(9485);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 2 modules
var es_alert = __webpack_require__(1474);
;// CONCATENATED MODULE: ./src/components/container/promoDeduct/index.js




var PromotionDeduct = function PromotionDeduct() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_alert/* default */.Z, {
    message: "Informational Notes",
    description: "Additional description and information about copywriting.",
    type: "info",
    showIcon: true
  }));
};

/* harmony default export */ var promoDeduct = (PromotionDeduct);
;// CONCATENATED MODULE: ./src/pages/basis/promoDeduct/index.js



var PromDeduct = function PromDeduct() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(promoDeduct, null));
};

/* harmony default export */ var basis_promoDeduct = (PromDeduct);

/***/ })

}]);
//# sourceMappingURL=657.95b94ab46936fc5576da.js.map