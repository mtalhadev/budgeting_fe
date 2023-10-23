exports.id = 2168;
exports.ids = [2168];
exports.modules = {

/***/ 67929:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _regeneratorRuntime = __webpack_require__(23984);
var _asyncToGenerator = __webpack_require__(82510);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);

/**
 * Applies a function to the value at the given index of an array

 * @param {number} index
 * @param {function} fn
 * @param {array} collection
 * @returns copy of the array with the element at the given index replaced with the result of the function application.
 */
var adjust = function adjust(index, fn, collection) {
  var _Object$assign;
  if (index >= 0 && index >= collection.length) return collection;
  if (index < 0 && Math.abs(index) > collection.length) return collection;
  var i = index < 0 ? collection.length + index : index;
  return Object.assign([], collection, (_Object$assign = {}, _Object$assign[i] = fn(collection[i]), _Object$assign));
};

var reverse = function reverse(list) {
  return Array.prototype.slice.call(list, 0).reverse();
};

/**
 * Performs right-to-left function composition with async functions support
 *
 * @param  {...any} functions
 */
var asyncCompose = function asyncCompose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(value) {
      var result,
        reversedFns,
        _len2,
        args,
        _key2,
        i,
        fn,
        _args = arguments;
      return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = value;
            reversedFns = reverse(fns);
            for (_len2 = _args.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = _args[_key2];
            }
            i = 0;
          case 4:
            if (!(i < reversedFns.length)) {
              _context.next = 12;
              break;
            }
            fn = reversedFns[i];
            _context.next = 8;
            return fn.apply(void 0, [result].concat(args));
          case 8:
            result = _context.sent;
          case 9:
            i += 1;
            _context.next = 4;
            break;
          case 12:
            return _context.abrupt("return", result);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/**
 * Capitalize first letter of each word
 *
 * @param {String} string
 * @returns {String} capitalized string
 */
var capitalize = function capitalize(value) {
  if (!value) return value;
  return value.replace(/(^|\s)\S/g, function (l) {
    return l.toUpperCase();
  });
};

/**
 * Casts value to array
 *
 * @param {any} value
 * @returns {Array} casted value
 */
var castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};

/* eslint-disable no-await-in-loop */

/**
 * Performs right-to-left function composition
 *
 * @param  {...any} functions
 */
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (value) {
    var result = value;
    var reversedFns = reverse(fns);
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    for (var i = 0; i < reversedFns.length; i += 1) {
      var fn = reversedFns[i];
      result = fn.apply(void 0, [result].concat(args));
    }
    return result;
  };
};

var dropLast = function dropLast(array) {
  return array.slice(0, array.length - 1);
};

var evolve = function evolve(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    var transformation = transformations[key];
    var type = typeof transformation;
    if (type === 'function') {
      result[key] = transformation(object[key]);
    } else if (transformation && type === 'object') {
      result[key] = evolve(transformation, object[key]);
    } else result[key] = object[key];
  }
  return result;
};

var isNil = function isNil(value) {
  return value === null || value === undefined;
};

var get = function get(target, path, defaultValue) {
  if (isNil(target)) return defaultValue;
  var _path = castArray(path);
  var result = target;
  for (var i = 0; i < _path.length; i += 1) {
    if (isNil(result)) return undefined;
    result = result[_path[i]];
  }
  return isNil(result) ? defaultValue : result;
};

var last = function last(value) {
  return value === '' ? '' : value[value.length - 1];
};

var mapValues = function mapValues(object, fn) {
  var entries = Object.entries(object);
  return entries.reduce(function (acc, _ref, index) {
    var key = _ref[0],
      value = _ref[1];
    acc[key] = fn(value, key, index);
    return acc;
  }, {});
};

var isPercent = function isPercent(value) {
  return /((-)?\d+\.?\d*)%/g.exec(value);
};

/**
 * Get percentage value of input
 *
 * @param {String} value
 * @returns {Object} percent value (if matches)
 */
var matchPercent = function matchPercent(value) {
  var match = isPercent(value);
  if (match) {
    var f = parseFloat(match[1], 10);
    var percent = f / 100;
    return {
      percent: percent,
      value: f
    };
  }
  return null;
};

var omit = function omit(keys, object) {
  var _keys = castArray(keys);
  var copy = Object.assign({}, object);
  _keys.forEach(function (key) {
    delete copy[key];
  });
  return copy;
};

var pick = function pick(keys, obj) {
  var result = {};
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    if (key in obj) result[key] = obj[key];
  }
  return result;
};

/**
 * Capitalize first letter of string
 *
 * @param {String} string
 * @returns {String} capitalized string
 */
var upperFirst = function upperFirst(value) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

exports.adjust = adjust;
exports.asyncCompose = asyncCompose;
exports.capitalize = capitalize;
exports.castArray = castArray;
exports.compose = compose;
exports.dropLast = dropLast;
exports.evolve = evolve;
exports.get = get;
exports.isNil = isNil;
exports.last = last;
exports.mapValues = mapValues;
exports.matchPercent = matchPercent;
exports.omit = omit;
exports.pick = pick;
exports.reverse = reverse;
exports.upperFirst = upperFirst;


/***/ }),

/***/ 90051:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _regeneratorRuntime = __webpack_require__(23984);
var _asyncToGenerator = __webpack_require__(82510);
var _extends = __webpack_require__(43259);
var _objectWithoutPropertiesLoose = __webpack_require__(54845);
var isUrl = __webpack_require__(1598);
var fetch = __webpack_require__(94691);
var fontkit = __webpack_require__(26489);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var isUrl__default = /*#__PURE__*/_interopDefaultLegacy(isUrl);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
var fontkit__namespace = /*#__PURE__*/_interopNamespace(fontkit);

var _excluded = ["src", "fontWeight", "fontStyle"];
var FONT_WEIGHTS = {
  thin: 100,
  hairline: 100,
  ultralight: 200,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  demibold: 600,
  bold: 700,
  ultrabold: 800,
  extrabold: 800,
  heavy: 900,
  black: 900
};
var fetchFont = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(src, options) {
    var response, data;
    return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch__default["default"](src, options);
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.arrayBuffer();
        case 5:
          data = _context.sent;
          return _context.abrupt("return", new Uint8Array(data));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchFont(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var isDataUrl = function isDataUrl(dataUrl) {
  var header = dataUrl.split(',')[0];
  var hasDataPrefix = header.substring(0, 5) === 'data:';
  var hasBase64Prefix = header.split(';')[1] === 'base64';
  return hasDataPrefix && hasBase64Prefix;
};
var resolveFontWeight = function resolveFontWeight(value) {
  return typeof value === 'string' ? FONT_WEIGHTS[value] : value;
};
var sortByFontWeight = function sortByFontWeight(a, b) {
  return a.fontWeight - b.fontWeight;
};
var FontSource = /*#__PURE__*/function () {
  function FontSource(src, fontFamily, fontStyle, fontWeight, options) {
    this.src = src;
    this.fontFamily = fontFamily;
    this.fontStyle = fontStyle || 'normal';
    this.fontWeight = fontWeight || 400;
    this.data = null;
    this.options = options;
    this.loadResultPromise = null;
  }
  var _proto = FontSource.prototype;
  _proto._load = /*#__PURE__*/function () {
    var _load2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee2() {
      var postscriptName, raw, uint8Array, _this$options, headers, body, _this$options$method, method, data;
      return _regeneratorRuntime__default["default"]().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            postscriptName = this.options.postscriptName;
            if (!isDataUrl(this.src)) {
              _context2.next = 7;
              break;
            }
            raw = this.src.split(',')[1];
            uint8Array = new Uint8Array(atob(raw).split('').map(function (c) {
              return c.charCodeAt(0);
            }));
            this.data = fontkit__namespace.create(uint8Array, postscriptName);
            _context2.next = 19;
            break;
          case 7:
            if (!(isUrl__default["default"](this.src))) {
              _context2.next = 15;
              break;
            }
            _this$options = this.options, headers = _this$options.headers, body = _this$options.body, _this$options$method = _this$options.method, method = _this$options$method === void 0 ? 'GET' : _this$options$method;
            _context2.next = 11;
            return fetchFont(this.src, {
              method: method,
              body: body,
              headers: headers
            });
          case 11:
            data = _context2.sent;
            this.data = fontkit__namespace.create(data, postscriptName);
            _context2.next = 19;
            break;
          case 15:
            _context2.next = 18;
            return fontkit__namespace.open(this.src, postscriptName);
          case 18:
            this.data = _context2.sent;
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function _load() {
      return _load2.apply(this, arguments);
    }
    return _load;
  }();
  _proto.load = /*#__PURE__*/function () {
    var _load3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee3() {
      return _regeneratorRuntime__default["default"]().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (this.loadResultPromise === null) {
              this.loadResultPromise = this._load();
            }
            return _context3.abrupt("return", this.loadResultPromise);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function load() {
      return _load3.apply(this, arguments);
    }
    return load;
  }();
  return FontSource;
}();
var Font = /*#__PURE__*/function () {
  Font.create = function create(family) {
    return new Font(family);
  };
  function Font(family) {
    this.family = family;
    this.sources = [];
  }
  var _proto2 = Font.prototype;
  _proto2.register = function register(_ref2) {
    var src = _ref2.src,
      fontWeight = _ref2.fontWeight,
      fontStyle = _ref2.fontStyle,
      options = _objectWithoutPropertiesLoose__default["default"](_ref2, _excluded);
    var numericFontWeight = resolveFontWeight(fontWeight);
    this.sources.push(new FontSource(src, this.family, fontStyle, numericFontWeight, options));
  };
  _proto2.resolve = function resolve(descriptor) {
    var _descriptor$fontWeigh = descriptor.fontWeight,
      fontWeight = _descriptor$fontWeigh === void 0 ? 400 : _descriptor$fontWeigh,
      _descriptor$fontStyle = descriptor.fontStyle,
      fontStyle = _descriptor$fontStyle === void 0 ? 'normal' : _descriptor$fontStyle;
    var styleSources = this.sources.filter(function (s) {
      return s.fontStyle === fontStyle;
    });

    // Weight resolution. https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights
    var exactFit = styleSources.find(function (s) {
      return s.fontWeight === fontWeight;
    });
    if (exactFit) return exactFit;
    var res;
    if (fontWeight >= 400 && fontWeight <= 500) {
      var leftOffset = styleSources.filter(function (s) {
        return s.fontWeight <= fontWeight;
      });
      var rightOffset = styleSources.filter(function (s) {
        return s.fontWeight > 500;
      });
      var fit = styleSources.filter(function (s) {
        return s.fontWeight >= fontWeight && s.fontWeight < 500;
      });
      res = fit[0] || leftOffset[leftOffset.length - 1] || rightOffset[0];
    }
    var lt = styleSources.filter(function (s) {
      return s.fontWeight < fontWeight;
    }).sort(sortByFontWeight);
    var gt = styleSources.filter(function (s) {
      return s.fontWeight > fontWeight;
    }).sort(sortByFontWeight);
    if (fontWeight < 400) {
      res = lt[lt.length - 1] || gt[0];
    }
    if (fontWeight > 500) {
      res = gt[0] || lt[lt.length - 1];
    }
    if (!res) {
      throw new Error("Could not resolve font for " + this.family + ", fontWeight " + fontWeight);
    }
    return res;
  };
  return Font;
}();

var standard = ['Courier', 'Courier-Bold', 'Courier-Oblique', 'Courier-BoldOblique', 'Helvetica', 'Helvetica-Bold', 'Helvetica-Oblique', 'Helvetica-BoldOblique', 'Times-Roman', 'Times-Bold', 'Times-Italic', 'Times-BoldItalic'];

function FontStore() {
  var _this = this;
  var fonts = {};
  var emojiSource = null;
  var hyphenationCallback = null;
  this.register = function (data) {
    var family = data.family;
    if (!fonts[family]) {
      fonts[family] = Font.create(family);
    }

    // Bulk loading
    if (data.fonts) {
      for (var i = 0; i < data.fonts.length; i += 1) {
        fonts[family].register(_extends__default["default"]({
          family: family
        }, data.fonts[i]));
      }
    } else {
      fonts[family].register(data);
    }
  };
  this.registerEmojiSource = function (_ref) {
    var url = _ref.url,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'png' : _ref$format,
      builder = _ref.builder;
    emojiSource = {
      url: url,
      format: format,
      builder: builder
    };
  };
  this.registerHyphenationCallback = function (callback) {
    hyphenationCallback = callback;
  };
  this.getFont = function (descriptor) {
    var fontFamily = descriptor.fontFamily;
    var isStandard = standard.includes(fontFamily);
    if (isStandard) return null;
    if (!fonts[fontFamily]) {
      throw new Error("Font family not registered: " + fontFamily + ". Please register it calling Font.register() method.");
    }
    return fonts[fontFamily].resolve(descriptor);
  };
  this.load = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(descriptor) {
      var fontFamily, isStandard, f;
      return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fontFamily = descriptor.fontFamily;
            isStandard = standard.includes(fontFamily);
            if (!isStandard) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            f = _this.getFont(descriptor); // We cache the font to avoid fetching it many times
            _context.next = 7;
            return f.load();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  this.reset = function () {
    var keys = Object.keys(fonts);
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      fonts[key].data = null;
    }
  };
  this.clear = function () {
    fonts = {};
  };
  this.getRegisteredFonts = function () {
    return fonts;
  };
  this.getEmojiSource = function () {
    return emojiSource;
  };
  this.getHyphenationCallback = function () {
    return hyphenationCallback;
  };
  this.getRegisteredFontFamilies = function () {
    return Object.keys(fonts);
  };
}

exports["default"] = FontStore;


/***/ }),

/***/ 78170:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _regeneratorRuntime = __webpack_require__(23984);
var _asyncToGenerator = __webpack_require__(82510);
var fs = __webpack_require__(57147);
var url = __webpack_require__(57310);
var path = __webpack_require__(71017);
var fetch = __webpack_require__(94691);
var PNG = __webpack_require__(32914);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var url__default = /*#__PURE__*/_interopDefaultLegacy(url);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
var PNG__default = /*#__PURE__*/_interopDefaultLegacy(PNG);

PNG__default["default"].isValid = function (data) {
  try {
    return !!new PNG__default["default"](data);
  } catch (e) {
    return false;
  }
};

// Extracted from https://github.com/devongovett/pdfkit/blob/master/lib/image/jpeg.coffee

var MARKERS = [0xffc0, 0xffc1, 0xffc2, 0xffc3, 0xffc5, 0xffc6, 0xffc7, 0xffc8, 0xffc9, 0xffca, 0xffcb, 0xffcc, 0xffcd, 0xffce, 0xffcf];
var JPEG = function JPEG(data) {
  this.data = null;
  this.width = null;
  this.height = null;
  this.data = data;
  if (data.readUInt16BE(0) !== 0xffd8) {
    throw new Error('SOI not found in JPEG');
  }
  var marker;
  var pos = 2;
  while (pos < data.length) {
    marker = data.readUInt16BE(pos);
    pos += 2;
    if (MARKERS.includes(marker)) {
      break;
    }
    pos += data.readUInt16BE(pos);
  }
  if (!MARKERS.includes(marker)) {
    throw new Error('Invalid JPEG.');
  }
  pos += 3;
  this.height = data.readUInt16BE(pos);
  pos += 2;
  this.width = data.readUInt16BE(pos);
};
JPEG.isValid = function (data) {
  if (!data || !Buffer.isBuffer(data) || data.readUInt16BE(0) !== 0xffd8) {
    return false;
  }
  var marker;
  var pos = 2;
  while (pos < data.length) {
    marker = data.readUInt16BE(pos);
    pos += 2;
    if (MARKERS.includes(marker)) {
      break;
    }
    pos += data.readUInt16BE(pos);
  }
  if (!MARKERS.includes(marker)) {
    return false;
  }
  return true;
};

var createCache = function createCache(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? 100 : _ref$limit;
  var cache = {};
  var keys = [];
  return {
    get: function get(key) {
      return cache[key];
    },
    set: function set(key, value) {
      keys.push(key);
      if (keys.length > limit) {
        delete cache[keys.shift()];
      }
      cache[key] = value;
    },
    reset: function reset() {
      cache = {};
      keys = [];
    },
    length: function length() {
      return keys.length;
    }
  };
};

var IMAGE_CACHE = createCache({
  limit: 30
});
var getAbsoluteLocalPath = function getAbsoluteLocalPath(src) {
  var _url$parse = url__default["default"].parse(src),
    protocol = _url$parse.protocol,
    auth = _url$parse.auth,
    host = _url$parse.host,
    port = _url$parse.port,
    hostname = _url$parse.hostname,
    pathname = _url$parse.path;
  var absolutePath = path__default["default"].resolve(pathname);
  if (protocol && protocol !== 'file:' || auth || host || port || hostname) {
    return undefined;
  }
  return absolutePath;
};
var fetchLocalFile = function fetchLocalFile(src) {
  return new Promise(function (resolve, reject) {
    try {
      if (false) {}
      var absolutePath = getAbsoluteLocalPath(src);
      if (!absolutePath) {
        reject(new Error("Cannot fetch non-local path: " + src));
        return;
      }
      fs__default["default"].readFile(absolutePath, function (err, data) {
        return err ? reject(err) : resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};
var fetchRemoteFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(uri, options) {
    var response, buffer;
    return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch__default["default"](uri, options);
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.buffer ? response.buffer() : response.arrayBuffer();
        case 5:
          buffer = _context.sent;
          return _context.abrupt("return", buffer.constructor.name === 'Buffer' ? buffer : Buffer.from(buffer));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchRemoteFile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var isValidFormat = function isValidFormat(format) {
  var lower = format.toLowerCase();
  return lower === 'jpg' || lower === 'jpeg' || lower === 'png';
};
var guessFormat = function guessFormat(buffer) {
  var format;
  if (JPEG.isValid(buffer)) {
    format = 'jpg';
  } else if (PNG__default["default"].isValid(buffer)) {
    format = 'png';
  }
  return format;
};
var isCompatibleBase64 = function isCompatibleBase64(_ref2) {
  var uri = _ref2.uri;
  return /^data:image\/[a-zA-Z]*;base64,[^"]*/g.test(uri);
};
function getImage(body, extension) {
  switch (extension.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
      return new JPEG(body);
    case 'png':
      return new PNG__default["default"](body);
    default:
      return null;
  }
}
var resolveBase64Image = function resolveBase64Image(_ref3) {
  var uri = _ref3.uri;
  var match = /^data:image\/([a-zA-Z]*);base64,([^"]*)/g.exec(uri);
  var format = match[1];
  var data = match[2];
  if (!isValidFormat(format)) {
    throw new Error("Base64 image invalid format: " + format);
  }
  return new Promise(function (resolve) {
    return resolve(getImage(Buffer.from(data, 'base64'), format));
  });
};
var resolveImageFromData = function resolveImageFromData(src) {
  if (src.data && src.format) {
    return new Promise(function (resolve) {
      return resolve(getImage(src.data, src.format));
    });
  }
  throw new Error("Invalid data given for local file: " + JSON.stringify(src));
};
var resolveBufferImage = function resolveBufferImage(buffer) {
  var format = guessFormat(buffer);
  if (format) {
    return new Promise(function (resolve) {
      return resolve(getImage(buffer, format));
    });
  }
  return Promise.resolve();
};
var getImageFormat = function getImageFormat(body) {
  var isPng = body[0] === 137 && body[1] === 80 && body[2] === 78 && body[3] === 71 && body[4] === 13 && body[5] === 10 && body[6] === 26 && body[7] === 10;
  var isJpg = body[0] === 255 && body[1] === 216 && body[2] === 255;
  var extension = '';
  if (isPng) {
    extension = 'png';
  } else if (isJpg) {
    extension = 'jpg';
  } else {
    throw new Error('Not valid image extension');
  }
  return extension;
};
var resolveImageFromUrl = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee2(src) {
    var uri, body, headers, _src$method, method, data, extension;
    return _regeneratorRuntime__default["default"]().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          uri = src.uri, body = src.body, headers = src.headers, _src$method = src.method, method = _src$method === void 0 ? 'GET' : _src$method;
          if (!(getAbsoluteLocalPath(uri))) {
            _context2.next = 7;
            break;
          }
          _context2.next = 4;
          return fetchLocalFile(uri);
        case 4:
          _context2.t0 = _context2.sent;
          _context2.next = 10;
          break;
        case 7:
          _context2.next = 9;
          return fetchRemoteFile(uri, {
            body: body,
            headers: headers,
            method: method
          });
        case 9:
          _context2.t0 = _context2.sent;
        case 10:
          data = _context2.t0;
          extension = getImageFormat(data);
          return _context2.abrupt("return", getImage(data, extension));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function resolveImageFromUrl(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
var resolveImage = function resolveImage(src, _temp) {
  var _ref5 = _temp === void 0 ? {} : _temp,
    _ref5$cache = _ref5.cache,
    cache = _ref5$cache === void 0 ? true : _ref5$cache;
  var image;
  var cacheKey = src.data ? src.data.toString() : src.uri;
  if (Buffer.isBuffer(src)) {
    image = resolveBufferImage(src);
  } else if (cache && IMAGE_CACHE.get(cacheKey)) {
    return IMAGE_CACHE.get(cacheKey);
  } else if (isCompatibleBase64(src)) {
    image = resolveBase64Image(src);
  } else if (typeof src === 'object' && src.data) {
    image = resolveImageFromData(src);
  } else {
    image = resolveImageFromUrl(src);
  }
  if (!image) {
    throw new Error('Cannot resolve image');
  }
  if (cache) {
    IMAGE_CACHE.set(cacheKey, image);
  }
  return image;
};

exports["default"] = resolveImage;


/***/ }),

/***/ 3644:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var fns = __webpack_require__(67929);
var P = __webpack_require__(80921);
var stylesheet = __webpack_require__(95886);
var layoutEngine = __webpack_require__(74573);
var _createClass = __webpack_require__(43977);
var pdfkit = __webpack_require__(36756);
var _regeneratorRuntime = __webpack_require__(23984);
var _asyncToGenerator = __webpack_require__(82510);
var _extends = __webpack_require__(43259);
var emojiRegex = __webpack_require__(60474);
var resolveImage = __webpack_require__(78170);
var Yoga = __webpack_require__(28326);
var _objectWithoutPropertiesLoose = __webpack_require__(54845);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var P__namespace = /*#__PURE__*/_interopNamespace(P);
var stylesheet__default = /*#__PURE__*/_interopDefaultLegacy(stylesheet);
var layoutEngine__default = /*#__PURE__*/_interopDefaultLegacy(layoutEngine);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var emojiRegex__default = /*#__PURE__*/_interopDefaultLegacy(emojiRegex);
var resolveImage__default = /*#__PURE__*/_interopDefaultLegacy(resolveImage);
var Yoga__default = /*#__PURE__*/_interopDefaultLegacy(Yoga);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);

/**
 * Create attributed string from text fragments
 *
 * @param  {Array}  fragments
 * @return {Object} attributed string
 */
var fromFragments = function fromFragments(fragments) {
  var offset = 0;
  var string = '';
  var runs = [];
  fragments.forEach(function (fragment) {
    string += fragment.string;
    runs.push({
      start: offset,
      end: offset + fragment.string.length,
      attributes: fragment.attributes || {}
    });
    offset += fragment.string.length;
  });
  return {
    string: string,
    runs: runs
  };
};

/**
 * Apply transformation to text string
 *
 * @param {String} text
 * @param {String} transformation type
 * @returns {String} transformed text
 */
var transformText = function transformText(text, transformation) {
  switch (transformation) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return fns.capitalize(text);
    case 'upperfirst':
      return fns.upperFirst(text);
    default:
      return text;
  }
};

var StandardFont = /*#__PURE__*/function () {
  function StandardFont(src) {
    this.name = src;
    this.src = pdfkit.PDFFont.open(null, src);
  }
  var _proto = StandardFont.prototype;
  _proto.encode = function encode(str) {
    return this.src.encode(str);
  };
  _proto.layout = function layout(str) {
    var _this = this;
    var _this$encode = this.encode(str),
      encoded = _this$encode[0],
      positions = _this$encode[1];
    return {
      positions: positions,
      stringIndices: positions.map(function (_, i) {
        return i;
      }),
      glyphs: encoded.map(function (g, i) {
        var glyph = _this.getGlyph(parseInt(g, 16));
        glyph.advanceWidth = positions[i].advanceWidth;
        return glyph;
      })
    };
  };
  _proto.glyphForCodePoint = function glyphForCodePoint(codePoint) {
    var glyph = this.getGlyph(codePoint);
    glyph.advanceWidth = 400;
    return glyph;
  };
  _proto.getGlyph = function getGlyph(id) {
    return {
      id: id,
      _font: this.src,
      codePoints: [id],
      isLigature: false,
      name: this.src.font.characterToGlyph(id)
    };
  };
  _proto.hasGlyphForCodePoint = function hasGlyphForCodePoint(codePoint) {
    return this.src.font.characterToGlyph(codePoint) !== '.notdef';
  }

  // Based on empirical observation
  ;
  _createClass__default["default"](StandardFont, [{
    key: "ascent",
    get: function get() {
      return 900;
    }

    // Based on empirical observation
  }, {
    key: "capHeight",
    get: function get() {
      switch (this.name) {
        case 'Times-Roman':
        case 'Times-Bold':
        case 'Times-Italic':
        case 'Times-BoldItalic':
          return 650;
        case 'Courier':
        case 'Courier-Bold':
        case 'Courier-Oblique':
        case 'Courier-BoldOblique':
          return 550;
        default:
          return 690;
      }
    }

    // Based on empirical observation
  }, {
    key: "xHeight",
    get: function get() {
      switch (this.name) {
        case 'Times-Roman':
        case 'Times-Bold':
        case 'Times-Italic':
        case 'Times-BoldItalic':
          return 440;
        case 'Courier':
        case 'Courier-Bold':
        case 'Courier-Oblique':
        case 'Courier-BoldOblique':
          return 390;
        default:
          return 490;
      }
    }

    // Based on empirical observation
  }, {
    key: "descent",
    get: function get() {
      switch (this.name) {
        case 'Times-Roman':
        case 'Times-Bold':
        case 'Times-Italic':
        case 'Times-BoldItalic':
          return -220;
        case 'Courier':
        case 'Courier-Bold':
        case 'Courier-Oblique':
        case 'Courier-BoldOblique':
          return -230;
        default:
          return -200;
      }
    }
  }, {
    key: "lineGap",
    get: function get() {
      return 0;
    }
  }, {
    key: "unitsPerEm",
    get: function get() {
      return 1000;
    }
  }]);
  return StandardFont;
}();

var fontCache = {};
var IGNORED_CODE_POINTS = [173];
var getFontSize = function getFontSize(node) {
  return node.attributes.fontSize || 12;
};
var getOrCreateFont = function getOrCreateFont(name) {
  if (fontCache[name]) return fontCache[name];
  var font = new StandardFont(name);
  fontCache[name] = font;
  return font;
};
var getFallbackFont = function getFallbackFont() {
  return getOrCreateFont('Helvetica');
};
var shouldFallbackToFont = function shouldFallbackToFont(codePoint, font) {
  return !font || !IGNORED_CODE_POINTS.includes(codePoint) && !font.hasGlyphForCodePoint(codePoint) && getFallbackFont().hasGlyphForCodePoint(codePoint);
};
var fontSubstitution = function fontSubstitution() {
  return function (_ref) {
    var string = _ref.string,
      runs = _ref.runs;
    var lastFont = null;
    var lastFontSize = null;
    var lastIndex = 0;
    var index = 0;
    var res = [];
    for (var i = 0; i < runs.length; i += 1) {
      var run = runs[i];
      var defaultFont = typeof run.attributes.font === 'string' ? getOrCreateFont(run.attributes.font) : run.attributes.font;
      if (string.length === 0) {
        res.push({
          start: 0,
          end: 0,
          attributes: {
            font: defaultFont
          }
        });
        break;
      }
      var chars = string.slice(run.start, run.end);
      for (var j = 0; j < chars.length; j += 1) {
        var char = chars[j];
        var codePoint = char.codePointAt();
        var shouldFallback = shouldFallbackToFont(codePoint, defaultFont);
        // If the default font does not have a glyph and the fallback font does, we use it
        var font = shouldFallback ? getFallbackFont() : defaultFont;
        var fontSize = getFontSize(run);

        // If anything that would impact res has changed, update it
        if (font !== lastFont || fontSize !== lastFontSize || font.unitsPerEm !== lastFont.unitsPerEm) {
          if (lastFont) {
            res.push({
              start: lastIndex,
              end: index,
              attributes: {
                font: lastFont,
                scale: lastFontSize / lastFont.unitsPerEm
              }
            });
          }
          lastFont = font;
          lastFontSize = fontSize;
          lastIndex = index;
        }
        index += char.length;
      }
    }
    if (lastIndex < string.length) {
      var _fontSize = getFontSize(fns.last(runs));
      res.push({
        start: lastIndex,
        end: string.length,
        attributes: {
          font: lastFont,
          scale: _fontSize / lastFont.unitsPerEm
        }
      });
    }
    return {
      string: string,
      runs: res
    };
  };
};

var isTextInstance$4 = function isTextInstance(node) {
  return node.type === P__namespace.TextInstance;
};
var engines$1 = {
  linebreaker: layoutEngine.linebreaker,
  justification: layoutEngine.justification,
  textDecoration: layoutEngine.textDecoration,
  scriptItemizer: layoutEngine.scriptItemizer,
  wordHyphenation: layoutEngine.wordHyphenation,
  fontSubstitution: fontSubstitution
};
var engine$1 = layoutEngine__default["default"](engines$1);
var getFragments$1 = function getFragments(fontStore, instance) {
  if (!instance) return [{
    string: ''
  }];
  var fragments = [];
  var _instance$props = instance.props,
    _instance$props$fill = _instance$props.fill,
    fill = _instance$props$fill === void 0 ? 'black' : _instance$props$fill,
    _instance$props$fontF = _instance$props.fontFamily,
    fontFamily = _instance$props$fontF === void 0 ? 'Helvetica' : _instance$props$fontF,
    fontWeight = _instance$props.fontWeight,
    fontStyle = _instance$props.fontStyle,
    _instance$props$fontS = _instance$props.fontSize,
    fontSize = _instance$props$fontS === void 0 ? 18 : _instance$props$fontS,
    textDecorationColor = _instance$props.textDecorationColor,
    textDecorationStyle = _instance$props.textDecorationStyle,
    textTransform = _instance$props.textTransform,
    opacity = _instance$props.opacity;
  var _textDecoration = instance.props.textDecoration;
  var obj = fontStore ? fontStore.getFont({
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle
  }) : null;
  var font = obj ? obj.data : fontFamily;
  var attributes = {
    font: font,
    opacity: opacity,
    fontSize: fontSize,
    color: fill,
    underlineStyle: textDecorationStyle,
    underline: _textDecoration === 'underline' || _textDecoration === 'underline line-through' || _textDecoration === 'line-through underline',
    underlineColor: textDecorationColor || fill,
    strike: _textDecoration === 'line-through' || _textDecoration === 'underline line-through' || _textDecoration === 'line-through underline',
    strikeStyle: textDecorationStyle,
    strikeColor: textDecorationColor || fill
  };
  for (var i = 0; i < instance.children.length; i += 1) {
    var child = instance.children[i];
    if (isTextInstance$4(child)) {
      fragments.push({
        string: transformText(child.value, textTransform),
        attributes: attributes
      });
    } else if (child) {
      fragments.push.apply(fragments, getFragments(child));
    }
  }
  return fragments;
};
var getAttributedString$1 = function getAttributedString(fontStore, instance) {
  return fromFragments(getFragments$1(fontStore, instance));
};
var AlmostInfinity = 999999999999;
var shrinkWhitespaceFactor = {
  before: -0.5,
  after: -0.5
};
var layoutTspan = function layoutTspan(fontStore) {
  return function (node) {
    var _node$props, _node$props2;
    var attributedString = getAttributedString$1(fontStore, node);
    var x = ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.x) || 0;
    var y = ((_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.y) || 0;
    var container = {
      x: x,
      y: y,
      width: AlmostInfinity,
      height: AlmostInfinity
    };
    var hyphenationCallback = node.props.hyphenationCallback || (fontStore === null || fontStore === void 0 ? void 0 : fontStore.getHyphenationCallback()) || null;
    var layoutOptions = {
      hyphenationCallback: hyphenationCallback,
      shrinkWhitespaceFactor: shrinkWhitespaceFactor
    };
    var lines = engine$1(attributedString, container, layoutOptions).flat();
    return Object.assign({}, node, {
      lines: lines
    });
  };
};
var layoutText$1 = function layoutText(fontStore, node) {
  if (!node.children) return node;
  var children = node.children.map(layoutTspan(fontStore));
  return Object.assign({}, node, {
    children: children
  });
};

var isDefs = function isDefs(node) {
  return node.type === P__namespace.Defs;
};
var getDefs = function getDefs(node) {
  var children = node.children || [];
  var defs = children.find(isDefs) || {};
  var values = defs.children || [];
  return values.reduce(function (acc, value) {
    var _value$props;
    var id = (_value$props = value.props) === null || _value$props === void 0 ? void 0 : _value$props.id;
    if (id) acc[id] = value;
    return acc;
  }, {});
};

var isNotDefs = function isNotDefs(node) {
  return node.type !== P__namespace.Defs;
};
var detachDefs = function detachDefs(node) {
  if (!node.children) return node;
  var children = node.children.filter(isNotDefs);
  return Object.assign({}, node, {
    children: children
  });
};
var URL_REGEX = /url\(['"]?#([^'"]+)['"]?\)/;
var replaceDef = function replaceDef(defs, value) {
  if (!value) return undefined;
  if (!URL_REGEX.test(value)) return value;
  var match = value.match(URL_REGEX);
  return defs[match[1]];
};
var parseNodeDefs = function parseNodeDefs(defs) {
  return function (node) {
    var _node$props, _node$props2;
    var fill = replaceDef(defs, (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.fill);
    var clipPath = replaceDef(defs, (_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.clipPath);
    var props = Object.assign({}, node.props, {
      fill: fill,
      clipPath: clipPath
    });
    var children = node.children ? node.children.map(parseNodeDefs(defs)) : undefined;
    return Object.assign({}, node, {
      props: props,
      children: children
    });
  };
};
var parseDefs = function parseDefs(root) {
  if (!root.children) return root;
  var defs = getDefs(root);
  var children = root.children.map(parseNodeDefs(defs));
  return Object.assign({}, root, {
    children: children
  });
};
var replaceDefs = function replaceDefs(node) {
  return detachDefs(parseDefs(node));
};

var parseViewbox = function parseViewbox(value) {
  if (!value) return null;
  var values = value.split(/[,\s]+/).map(parseFloat);
  if (values.length !== 4) return null;
  return {
    minX: values[0],
    minY: values[1],
    maxX: values[2],
    maxY: values[3]
  };
};

var getContainer$1 = function getContainer(node) {
  var viewbox = parseViewbox(node.props.viewBox);
  if (viewbox) {
    return {
      width: viewbox.maxX,
      height: viewbox.maxY
    };
  }
  if (node.props.width && node.props.height) {
    return {
      width: parseFloat(node.props.width),
      height: parseFloat(node.props.height)
    };
  }
  return {
    width: 0,
    height: 0
  };
};

var SVG_INHERITED_PROPS = ['x', 'y', 'clipPath', 'clipRule', 'opacity', 'fill', 'fillOpacity', 'fillRule', 'stroke', 'strokeLinecap', 'strokeLinejoin', 'strokeOpacity', 'strokeWidth', 'textAnchor', 'dominantBaseline', 'color', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'opacity', 'textDecoration', 'lineHeight', 'textAlign', 'visibility', 'wordSpacing'];
var getInheritProps = function getInheritProps(node) {
  var props = node.props || {};
  return fns.pick(SVG_INHERITED_PROPS, props);
};
var inheritProps = function inheritProps(node) {
  if (!node.children) return node;
  var inheritedProps = getInheritProps(node);
  var children = node.children.map(function (child) {
    var props = Object.assign({}, inheritedProps, child.props || {});
    var newChild = Object.assign({}, child, {
      props: props
    });
    return inheritProps(newChild);
  });
  return Object.assign({}, node, {
    children: children
  });
};

var parseAspectRatio = function parseAspectRatio(value) {
  var match = value.replace(/[\s\r\t\n]+/gm, ' ').replace(/^defer\s/, '').split(' ');
  var align = match[0] || 'xMidYMid';
  var meetOrSlice = match[1] || 'meet';
  return {
    align: align,
    meetOrSlice: meetOrSlice
  };
};

var STYLE_PROPS = ['width', 'height', 'color', 'stroke', 'strokeWidth', 'opacity', 'fillOpacity', 'strokeOpacity', 'fill', 'fillRule', 'clipPath', 'offset', 'transform', 'strokeLinejoin', 'strokeLinecap', 'strokeDasharray'];
var VERTICAL_PROPS = ['y', 'y1', 'y2', 'height', 'cy', 'ry'];
var HORIZONTAL_PROPS = ['x', 'x1', 'x2', 'width', 'cx', 'rx'];
var isType$3 = function isType(type) {
  return function (node) {
    return node.type === type;
  };
};
var isSvg$3 = isType$3(P__namespace.Svg);
var isText$4 = isType$3(P__namespace.Text);
var isTextInstance$3 = isType$3(P__namespace.TextInstance);
var transformPercent = function transformPercent(container) {
  return function (props) {
    return fns.mapValues(props, function (value, key) {
      var match = fns.matchPercent(value);
      if (match && VERTICAL_PROPS.includes(key)) {
        return match.percent * container.height;
      }
      if (match && HORIZONTAL_PROPS.includes(key)) {
        return match.percent * container.width;
      }
      return value;
    });
  };
};
var parsePercent = function parsePercent(value) {
  var match = fns.matchPercent(value);
  return match ? match.percent : parseFloat(value);
};
var parseProps = function parseProps(container) {
  return function (node) {
    var props = transformPercent(container)(node.props);
    props = fns.evolve({
      x: parseFloat,
      x1: parseFloat,
      x2: parseFloat,
      y: parseFloat,
      y1: parseFloat,
      y2: parseFloat,
      r: parseFloat,
      rx: parseFloat,
      ry: parseFloat,
      cx: parseFloat,
      cy: parseFloat,
      width: parseFloat,
      height: parseFloat,
      offset: parsePercent,
      fill: stylesheet.transformColor,
      opacity: parsePercent,
      stroke: stylesheet.transformColor,
      stopOpacity: parsePercent,
      stopColor: stylesheet.transformColor,
      transform: stylesheet.processTransform
    }, props);
    return Object.assign({}, node, {
      props: props
    });
  };
};
var mergeStyles$1 = function mergeStyles(node) {
  var style = node.style || {};
  var props = Object.assign({}, style, node.props);
  return Object.assign({}, node, {
    props: props
  });
};
var removeNoneValues = function removeNoneValues(node) {
  var removeNone = function removeNone(value) {
    return value === 'none' ? null : value;
  };
  var props = fns.mapValues(node.props, removeNone);
  return Object.assign({}, node, {
    props: props
  });
};
var pickStyleProps = function pickStyleProps(node) {
  var props = node.props || {};
  var styleProps = fns.pick(STYLE_PROPS, props);
  var style = Object.assign({}, styleProps, node.style || {});
  return Object.assign({}, node, {
    style: style
  });
};
var parseSvgProps = function parseSvgProps(node) {
  var props = fns.evolve({
    width: parseFloat,
    height: parseFloat,
    viewBox: parseViewbox,
    preserveAspectRatio: parseAspectRatio
  }, node.props);
  return Object.assign({}, node, {
    props: props
  });
};
var wrapBetweenTspan = function wrapBetweenTspan(node) {
  return {
    type: P__namespace.Tspan,
    props: {},
    children: [node]
  };
};
var addMissingTspan = function addMissingTspan(node) {
  if (!isText$4(node)) return node;
  if (!node.children) return node;
  var resolveChild = function resolveChild(child) {
    return isTextInstance$3(child) ? wrapBetweenTspan(child) : child;
  };
  var children = node.children.map(resolveChild);
  return Object.assign({}, node, {
    children: children
  });
};
var parseText = function parseText(fontStore) {
  return function (node) {
    if (isText$4(node)) return layoutText$1(fontStore, node);
    if (!node.children) return node;
    var children = node.children.map(parseText(fontStore));
    return Object.assign({}, node, {
      children: children
    });
  };
};
var resolveSvgNode = function resolveSvgNode(container) {
  return fns.compose(parseProps(container), addMissingTspan, removeNoneValues, mergeStyles$1);
};
var resolveChildren = function resolveChildren(container) {
  return function (node) {
    if (!node.children) return node;
    var resolveChild = fns.compose(resolveChildren(container), resolveSvgNode(container));
    var children = node.children.map(resolveChild);
    return Object.assign({}, node, {
      children: children
    });
  };
};
var resolveSvgRoot = function resolveSvgRoot(node, fontStore) {
  var container = getContainer$1(node);
  return fns.compose(replaceDefs, parseText(fontStore), parseSvgProps, pickStyleProps, inheritProps, resolveChildren(container))(node);
};

/**
 * Pre-process SVG nodes so they can be rendered in the next steps
 *
 * @param {Object} root node
 * @param {Object} fontStore font store
 * @returns {Object} root node
 */
var resolveSvg = function resolveSvg(node, fontStore) {
  if (!node.children) return node;
  var resolveChild = function resolveChild(child) {
    return resolveSvg(child, fontStore);
  };
  var root = isSvg$3(node) ? resolveSvgRoot(node, fontStore) : node;
  var children = root.children.map(resolveChild);
  return Object.assign({}, root, {
    children: children
  });
};

var getZIndex = function getZIndex(node) {
  return node.style.zIndex;
};
var shouldSort = function shouldSort(node) {
  return node.type !== P__namespace.Document && node.type !== P__namespace.Svg;
};
var sortZIndex = function sortZIndex(a, b) {
  var za = getZIndex(a);
  var zb = getZIndex(b);
  if (!za && !zb) return 0;
  if (!za) return 1;
  if (!zb) return -1;
  return zb - za;
};

/**
 * Sort children by zIndex value
 *
 * @param {Object} node
 * @returns {Object} node
 */
var resolveZIndex = function resolveZIndex(node) {
  if (!node.children) return node;
  var sortedChildren = shouldSort(node) ? node.children.sort(sortZIndex) : node.children;
  var children = sortedChildren.map(resolveZIndex);
  return Object.assign({}, node, {
    children: children
  });
};

// Caches emoji images data
var emojis = {};
var regex = emojiRegex__default["default"]();
var reflect = function reflect(promise) {
  return function () {
    return promise.apply(void 0, arguments).then(function (v) {
      return v;
    }, function (e) {
      return e;
    });
  };
};

// Returns a function to be able to mock resolveImage.
var makeFetchEmojiImage = function makeFetchEmojiImage() {
  return reflect(resolveImage__default["default"]);
};

/**
 * When an emoji as no color, it might still have 2 parts,
 * the canonical emoji and an empty string.
 * ex.
 *   (no color) Array.from('❤️') => ["❤", "️"]
 *   (w/ color) Array.from('👍🏿') => ["👍", "🏿"]
 *
 * The empty string needs to be removed otherwise the generated
 * url will be incorect.
 */
var _removeNoColor = function _removeNoColor(x) {
  return x !== '️';
};
var getCodePoints = function getCodePoints(string) {
  return Array.from(string).filter(_removeNoColor).map(function (char) {
    return char.codePointAt(0).toString(16);
  }).join('-');
};
var buildEmojiUrl = function buildEmojiUrl(emoji, source) {
  var url = source.url,
    format = source.format,
    builder = source.builder;
  if (typeof builder === 'function') {
    return builder(getCodePoints(emoji));
  }
  return "" + url + getCodePoints(emoji) + "." + format;
};
var fetchEmojis = function fetchEmojis(string, source) {
  if (!source || !source.url && !source.builder) return [];
  var promises = [];
  Array.from(string.matchAll(regex)).forEach(function (match) {
    var emoji = match[0];
    if (!emojis[emoji] || emojis[emoji].loading) {
      var emojiUrl = buildEmojiUrl(emoji, source);
      emojis[emoji] = {
        loading: true
      };
      var fetchEmojiImage = makeFetchEmojiImage();
      promises.push(fetchEmojiImage({
        uri: emojiUrl
      }).then(function (image) {
        emojis[emoji].loading = false;
        emojis[emoji].data = image.data;
      }));
    }
  });
  return promises;
};
var embedEmojis = function embedEmojis(fragments) {
  var result = [];
  var _loop = function _loop() {
    var fragment = fragments[i];
    var lastIndex = 0;
    Array.from(fragment.string.matchAll(regex)).forEach(function (match) {
      var index = match.index;
      var emoji = match[0];
      var emojiSize = fragment.attributes.fontSize;
      var chunk = fragment.string.slice(lastIndex, index + match[0].length);

      // If emoji image was found, we create a new fragment with the
      // correct attachment and object substitution character;
      if (emojis[emoji] && emojis[emoji].data) {
        result.push({
          string: chunk.replace(match, String.fromCharCode(0xfffc)),
          attributes: _extends__default["default"]({}, fragment.attributes, {
            attachment: {
              width: emojiSize,
              height: emojiSize,
              yOffset: Math.floor(emojiSize * 0.1),
              image: emojis[emoji].data
            }
          })
        });
      } else {
        // If no emoji data, we just replace the emoji with a nodef char
        result.push({
          string: chunk.replace(match, String.fromCharCode(0)),
          attributes: fragment.attributes
        });
      }
      lastIndex = index + emoji.length;
    });
    if (lastIndex < fragment.string.length) {
      result.push({
        string: fragment.string.slice(lastIndex),
        attributes: fragment.attributes
      });
    }
  };
  for (var i = 0; i < fragments.length; i += 1) {
    _loop();
  }
  return result;
};

/**
 * Get image source
 *
 * @param {Object} image node
 * @returns {String | Object} image src
 */
var getSource = function getSource(node) {
  var _node$props, _node$props2, _node$props3;
  return ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.src) || ((_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.source) || ((_node$props3 = node.props) === null || _node$props3 === void 0 ? void 0 : _node$props3.href);
};

/**
 * Resolves `src` to `@react-pdf/image` interface.
 *
 * Also it handles factories and async sources.
 *
 * @param {string | Object | Function} src
 * @returns {object} resolved src
 */
var resolveSource = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(src) {
    var source;
    return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof src === 'function')) {
            _context.next = 6;
            break;
          }
          _context.next = 3;
          return src();
        case 3:
          _context.t0 = _context.sent;
          _context.next = 9;
          break;
        case 6:
          _context.next = 8;
          return src;
        case 8:
          _context.t0 = _context.sent;
        case 9:
          source = _context.t0;
          return _context.abrupt("return", typeof source === 'string' ? {
            uri: source
          } : source);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function resolveSource(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Fetches image and append data to node
 * Ideally this fn should be immutable.
 *
 * @param {Object} node
 */
var fetchImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(node) {
    var src, cache, source;
    return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          src = getSource(node);
          cache = node.props.cache;
          if (src) {
            _context.next = 5;
            break;
          }
          console.warn(false, 'Image should receive either a "src" or "source" prop');
          return _context.abrupt("return");
        case 5:
          _context.prev = 5;
          _context.next = 8;
          return resolveSource(src);
        case 8:
          source = _context.sent;
          if (source) {
            _context.next = 11;
            break;
          }
          throw new Error("Image's \"src\" or \"source\" prop returned " + source);
        case 11:
          _context.next = 13;
          return resolveImage__default["default"](source, {
            cache: cache
          });
        case 13:
          node.image = _context.sent;
          node.image.key = source.data ? source.data.toString() : source.uri;
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);
          node.image = {
            width: 0,
            height: 0,
            key: null
          };
          console.warn(_context.t0.message);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 17]]);
  }));
  return function fetchImage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var isImage$2 = function isImage(node) {
  return node.type === P__namespace.Image;
};

/**
 * Get all asset promises that need to be resolved
 *
 * @param {Object} root node
 * @returns {Array} asset promises
 */
var fetchAssets = function fetchAssets(fontStore, node) {
  var _node$children;
  var promises = [];
  var listToExplore = ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.slice(0)) || [];
  var emojiSource = fontStore ? fontStore.getEmojiSource() : null;
  while (listToExplore.length > 0) {
    var _n$style;
    var n = listToExplore.shift();
    if (isImage$2(n)) {
      promises.push(fetchImage(n));
    }
    if (fontStore && (_n$style = n.style) !== null && _n$style !== void 0 && _n$style.fontFamily) {
      promises.push(fontStore.load(n.style));
    }
    if (typeof n === 'string') {
      promises.push.apply(promises, fetchEmojis(n, emojiSource));
    }
    if (typeof n.value === 'string') {
      promises.push.apply(promises, fetchEmojis(n.value, emojiSource));
    }
    if (n.children) {
      n.children.forEach(function (childNode) {
        listToExplore.push(childNode);
      });
    }
  }
  return promises;
};

/**
 * Fetch image, font and emoji assets in parallel.
 * Layout process will not be resumed until promise resolves.
 *
 * @param {Object} root node
 * @param {Object} fontStore font store
 * @returns {Object} root node
 */
var resolveAssets = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(node, fontStore) {
    var promises;
    return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          promises = fetchAssets(fontStore, node);
          _context.next = 3;
          return Promise.all(promises);
        case 3:
          return _context.abrupt("return", node);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function resolveAssets(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var isLink$1 = function isLink(node) {
  return node.type === P__namespace.Link;
};
var DEFAULT_LINK_STYLES = {
  color: 'blue',
  textDecoration: 'underline'
};

/**
 * Computes styles using stylesheet
 *
 * @param {Object} container
 * @param {Object} document node
 * @returns {Object} computed styles
 */
var computeStyle = function computeStyle(container, node) {
  var baseStyle = node.style;
  if (isLink$1(node)) {
    baseStyle = Array.isArray(node.style) ? [DEFAULT_LINK_STYLES].concat(node.style) : [DEFAULT_LINK_STYLES, node.style];
  }
  return stylesheet__default["default"](container, baseStyle);
};

/**
 * Resolves node styles
 *
 * @param {Object} container
 * @param {Object} document node
 * @returns {Object} node (and subnodes) with resolved styles
 */
var resolveNodeStyles = function resolveNodeStyles(container) {
  return function (node) {
    var style = computeStyle(container, node);
    if (!node.children) return Object.assign({}, node, {
      style: style
    });
    var children = node.children.map(resolveNodeStyles(container));
    return Object.assign({}, node, {
      style: style,
      children: children
    });
  };
};

/**
 * Resolves page styles
 *
 * @param {Object} document page
 * @returns {Object} document page with resolved styles
 */
var resolvePageStyles = function resolvePageStyles(page) {
  var _page$props, _page$box, _page$box2, _page$props2;
  var dpi = ((_page$props = page.props) === null || _page$props === void 0 ? void 0 : _page$props.dpi) || 72;
  var width = ((_page$box = page.box) === null || _page$box === void 0 ? void 0 : _page$box.width) || page.style.width;
  var height = ((_page$box2 = page.box) === null || _page$box2 === void 0 ? void 0 : _page$box2.height) || page.style.height;
  var orientation = ((_page$props2 = page.props) === null || _page$props2 === void 0 ? void 0 : _page$props2.orientation) || 'portrait';
  var container = {
    width: width,
    height: height,
    orientation: orientation,
    dpi: dpi
  };
  return resolveNodeStyles(container)(page);
};

/**
 * Resolves document styles
 *
 * @param {Object} document root
 * @returns {Object} document root with resolved styles
 */
var resolveStyles = function resolveStyles(root) {
  if (!root.children) return root;
  var children = root.children.map(resolvePageStyles);
  return Object.assign({}, root, {
    children: children
  });
};

var getTransformStyle = function getTransformStyle(s) {
  return function (node) {
    var _node$style, _node$style2;
    return fns.isNil((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style[s]) ? '50%' : (_node$style2 = node.style) === null || _node$style2 === void 0 ? void 0 : _node$style2[s];
  };
};

/**
 * Get node origin
 *
 * @param {Object} node
 * @returns {Object} node origin
 */
var getOrigin = function getOrigin(node) {
  if (!node.box) return {};
  var _node$box = node.box,
    left = _node$box.left,
    top = _node$box.top,
    width = _node$box.width,
    height = _node$box.height;
  var transformOriginX = getTransformStyle('transformOriginX')(node);
  var transformOriginY = getTransformStyle('transformOriginY')(node);
  var percentX = fns.matchPercent(transformOriginX);
  var percentY = fns.matchPercent(transformOriginY);
  var offsetX = percentX ? width * percentX.percent : transformOriginX;
  var offsetY = percentY ? height * percentY.percent : transformOriginY;
  return {
    left: left + offsetX,
    top: top + offsetY
  };
};

/**
 * Resolve node origin
 *
 * @param {Object} node
 * @returns {Object} node with origin attribute
 */
var resolveNodeOrigin = function resolveNodeOrigin(node) {
  var origin = getOrigin(node);
  var newNode = Object.assign({}, node, {
    origin: origin
  });
  if (!node.children) return newNode;
  var children = node.children.map(resolveNodeOrigin);
  return Object.assign({}, newNode, {
    children: children
  });
};

/**
 * Resolve document origins
 *
 * @param {Object} document root
 * @returns {Object} documrnt root
 */

var resolveOrigin = function resolveOrigin(root) {
  if (!root.children) return root;
  var children = root.children.map(resolveNodeOrigin);
  return Object.assign({}, root, {
    children: children
  });
};

/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable prefer-destructuring */

var getBookmarkValue = function getBookmarkValue(title) {
  return typeof title === 'string' ? {
    title: title,
    fit: false,
    expanded: false
  } : title;
};
var resolveBookmarks = function resolveBookmarks(node) {
  var refs = 0;
  var children = (node.children || []).slice(0);
  var listToExplore = children.map(function (value) {
    return {
      value: value,
      parent: null
    };
  });
  var _loop = function _loop() {
    var _child$props;
    var element = listToExplore.shift();
    var child = element.value;
    var parent = element.parent;
    if ((_child$props = child.props) !== null && _child$props !== void 0 && _child$props.bookmark) {
      var _parent;
      var bookmark = getBookmarkValue(child.props.bookmark);
      var ref = refs++;
      var newHierarchy = _extends__default["default"]({
        ref: ref,
        parent: (_parent = parent) === null || _parent === void 0 ? void 0 : _parent.ref
      }, bookmark);
      child.props.bookmark = newHierarchy;
      parent = newHierarchy;
    }
    if (child.children) {
      child.children.forEach(function (childNode) {
        listToExplore.push({
          value: childNode,
          parent: parent
        });
      });
    }
  };
  while (listToExplore.length > 0) {
    _loop();
  }
  return node;
};

var VALID_ORIENTATIONS = ['portrait', 'landscape'];

/**
 * Get page orientation. Defaults to portrait
 *
 * @param { Object } page object
 * @returns { String } page orientation
 */
var getOrientation = function getOrientation(page) {
  var _page$props;
  var value = ((_page$props = page.props) === null || _page$props === void 0 ? void 0 : _page$props.orientation) || 'portrait';
  return VALID_ORIENTATIONS.includes(value) ? value : 'portrait';
};

/**
 * Return true if page is landscape
 *
 * @param {Object} page instance
 * @returns {Boolean} is page landscape
 */
var isLandscape = function isLandscape(page) {
  return getOrientation(page) === 'landscape';
};

var PAGE_SIZES = {
  '4A0': [4767.87, 6740.79],
  '2A0': [3370.39, 4767.87],
  A0: [2383.94, 3370.39],
  A1: [1683.78, 2383.94],
  A2: [1190.55, 1683.78],
  A3: [841.89, 1190.55],
  A4: [595.28, 841.89],
  A5: [419.53, 595.28],
  A6: [297.64, 419.53],
  A7: [209.76, 297.64],
  A8: [147.4, 209.76],
  A9: [104.88, 147.4],
  A10: [73.7, 104.88],
  B0: [2834.65, 4008.19],
  B1: [2004.09, 2834.65],
  B2: [1417.32, 2004.09],
  B3: [1000.63, 1417.32],
  B4: [708.66, 1000.63],
  B5: [498.9, 708.66],
  B6: [354.33, 498.9],
  B7: [249.45, 354.33],
  B8: [175.75, 249.45],
  B9: [124.72, 175.75],
  B10: [87.87, 124.72],
  C0: [2599.37, 3676.54],
  C1: [1836.85, 2599.37],
  C2: [1298.27, 1836.85],
  C3: [918.43, 1298.27],
  C4: [649.13, 918.43],
  C5: [459.21, 649.13],
  C6: [323.15, 459.21],
  C7: [229.61, 323.15],
  C8: [161.57, 229.61],
  C9: [113.39, 161.57],
  C10: [79.37, 113.39],
  RA0: [2437.8, 3458.27],
  RA1: [1729.13, 2437.8],
  RA2: [1218.9, 1729.13],
  RA3: [864.57, 1218.9],
  RA4: [609.45, 864.57],
  SRA0: [2551.18, 3628.35],
  SRA1: [1814.17, 2551.18],
  SRA2: [1275.59, 1814.17],
  SRA3: [907.09, 1275.59],
  SRA4: [637.8, 907.09],
  EXECUTIVE: [521.86, 756.0],
  FOLIO: [612.0, 936.0],
  LEGAL: [612.0, 1008.0],
  LETTER: [612.0, 792.0],
  TABLOID: [792.0, 1224.0],
  ID1: [153, 243]
};

/**
 * Transforms array into size object
 *
 * @param {Array} array
 * @returns {Object} size object with width and height
 */
var toSizeObject = function toSizeObject(v) {
  return {
    width: v[0],
    height: v[1]
  };
};

/**
 * Flip size object
 *
 * @param {Object} size object
 * @returns {Object} flipped size object
 */
var flipSizeObject = function flipSizeObject(v) {
  return {
    width: v.height,
    height: v.width
  };
};

/**
 * Adjust page size to passed DPI
 *
 * @param {Object} size object
 * @param {number} dpi
 * @returns {Object} adjusted size object
 */
var adjustDpi = function adjustDpi(v, dpi) {
  return {
    width: v.width ? v.width * dpi : v.width,
    height: v.height ? v.height * dpi : v.height
  };
};

/**
 * Returns size object from a given string
 *
 * @param {String} page size string
 * @returns {Object} size object with width and height
 */
var getStringSize = function getStringSize(v) {
  return toSizeObject(PAGE_SIZES[v.toUpperCase()]);
};

/**
 * Returns size object from a single number
 *
 * @param {Number} page size number
 * @returns {Object} size object with width and height
 */
var getNumberSize = function getNumberSize(n) {
  return toSizeObject([n]);
};

/**
 * Return page size in an object { width, height }
 *
 * @param {Object} page instance
 * @returns {Object} size object with width and height
 */
var getSize = function getSize(page) {
  var _page$props, _page$props2;
  var value = ((_page$props = page.props) === null || _page$props === void 0 ? void 0 : _page$props.size) || 'A4';
  var dpi = parseFloat(((_page$props2 = page.props) === null || _page$props2 === void 0 ? void 0 : _page$props2.dpi) || 72);
  var type = typeof value;
  var size = value;
  if (type === 'string') {
    size = getStringSize(value);
  } else if (Array.isArray(value)) {
    size = toSizeObject(value);
  } else if (type === 'number') {
    size = getNumberSize(value);
  }
  size = adjustDpi(size, dpi / 72);
  return isLandscape(page) ? flipSizeObject(size) : size;
};

/**
 * Resolves page size
 *
 * @param {Object} page
 * @returns {Object} page with resolved size in style attribute
 */
var resolvePageSize = function resolvePageSize(page) {
  var size = getSize(page);
  var style = stylesheet.flatten(page.style || {});
  return _extends__default["default"]({}, page, {
    style: _extends__default["default"]({}, style, size)
  });
};

/**
 * Resolves page sizes
 *
 * @param {Object} document root
 * @returns {Object} document root with resolved page sizes
 */
var resolvePageSizes = function resolvePageSizes(root) {
  if (!root.children) return root;
  var children = root.children.map(resolvePageSize);
  return Object.assign({}, root, {
    children: children
  });
};

var isFixed = function isFixed(node) {
  var _node$props;
  return ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.fixed) === true;
};

/**
 * Get line index at given height
 *
 * @param {Object} node
 * @param {Number} height
 */
var lineIndexAtHeight = function lineIndexAtHeight(node, height) {
  var y = 0;
  if (!node.lines) return 0;
  for (var i = 0; i < node.lines.length; i += 1) {
    var line = node.lines[i];
    if (y + line.box.height > height) return i;
    y += line.box.height;
  }
  return node.lines.length;
};

/**
 * Get height for given text line index
 *
 * @param {Object} node
 * @param {Number} index
 */
var heightAtLineIndex = function heightAtLineIndex(node, index) {
  var counter = 0;
  if (!node.lines) return counter;
  for (var i = 0; i < index; i += 1) {
    var line = node.lines[i];
    if (!line) break;
    counter += line.box.height;
  }
  return counter;
};

var getLineBreak = function getLineBreak(node, height) {
  var top = fns.get(node, ['box', 'top'], 0);
  var widows = fns.get(node, ['props', 'widows'], 2);
  var orphans = fns.get(node, ['props', 'orphans'], 2);
  var linesQuantity = node.lines.length;
  var slicedLine = lineIndexAtHeight(node, height - top);
  if (slicedLine === 0) {
    return 0;
  }
  if (linesQuantity < orphans) {
    return linesQuantity;
  }
  if (slicedLine < orphans || linesQuantity < orphans + widows) {
    return 0;
  }
  if (linesQuantity === orphans + widows) {
    return orphans;
  }
  if (linesQuantity - slicedLine < widows) {
    return linesQuantity - widows;
  }
  return slicedLine;
};

// Also receives contentArea in case it's needed
var splitText = function splitText(node, height) {
  var slicedLineIndex = getLineBreak(node, height);
  var currentHeight = heightAtLineIndex(node, slicedLineIndex);
  var nextHeight = node.box.height - currentHeight;
  var current = Object.assign({}, node, {
    box: _extends__default["default"]({}, node.box, {
      height: currentHeight,
      borderBottomWidth: 0
    }),
    style: _extends__default["default"]({}, node.style, {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottomWidth: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }),
    lines: node.lines.slice(0, slicedLineIndex)
  });
  var next = Object.assign({}, node, {
    box: _extends__default["default"]({}, node.box, {
      top: 0,
      height: nextHeight,
      borderTopWidth: 0
    }),
    style: _extends__default["default"]({}, node.style, {
      marginTop: 0,
      paddingTop: 0,
      borderTopWidth: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }),
    lines: node.lines.slice(slicedLineIndex)
  });
  return [current, next];
};

var getTop$1 = function getTop(node) {
  var _node$box;
  return ((_node$box = node.box) === null || _node$box === void 0 ? void 0 : _node$box.top) || 0;
};
var hasFixedHeight = function hasFixedHeight(node) {
  var _node$style;
  return !fns.isNil((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.height);
};
var splitNode = function splitNode(node, height) {
  if (!node) return [null, null];
  var nodeTop = getTop$1(node);
  var current = Object.assign({}, node, {
    box: _extends__default["default"]({}, node.box, {
      borderBottomWidth: 0
    }),
    style: _extends__default["default"]({}, node.style, {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottomWidth: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    })
  });
  current.style.height = height - nodeTop;
  var nextHeight = hasFixedHeight(node) ? node.box.height - (height - nodeTop) : null;
  var next = Object.assign({}, node, {
    box: _extends__default["default"]({}, node.box, {
      top: 0,
      borderTopWidth: 0
    }),
    style: _extends__default["default"]({}, node.style, {
      marginTop: 0,
      paddingTop: 0,
      borderTopWidth: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    })
  });
  if (nextHeight) {
    next.style.height = nextHeight;
  }
  return [current, next];
};

var NON_WRAP_TYPES = [P__namespace.Svg, P__namespace.Note, P__namespace.Image, P__namespace.Canvas];
var getWrap = function getWrap(node) {
  var _node$props;
  if (NON_WRAP_TYPES.includes(node.type)) return false;
  return fns.isNil((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.wrap) ? true : node.props.wrap;
};

var getComputedPadding = function getComputedPadding(node, edge) {
  var yogaNode = node.yogaNode;
  return yogaNode ? yogaNode.getComputedPadding(edge) : null;
};

/**
 * Get Yoga computed paddings. Zero otherwise
 *
 * @param {Object} node
 * @return {Object} paddings
 */
var getPadding = function getPadding(node) {
  var style = node.style,
    box = node.box;
  var paddingTop = getComputedPadding(node, Yoga__default["default"].EDGE_TOP) || (box === null || box === void 0 ? void 0 : box.paddingTop) || (style === null || style === void 0 ? void 0 : style.paddingTop) || (style === null || style === void 0 ? void 0 : style.paddingVertical) || (style === null || style === void 0 ? void 0 : style.padding) || 0;
  var paddingRight = getComputedPadding(node, Yoga__default["default"].EDGE_RIGHT) || (box === null || box === void 0 ? void 0 : box.paddingRight) || (style === null || style === void 0 ? void 0 : style.paddingRight) || (style === null || style === void 0 ? void 0 : style.paddingHorizontal) || (style === null || style === void 0 ? void 0 : style.padding) || 0;
  var paddingBottom = getComputedPadding(node, Yoga__default["default"].EDGE_BOTTOM) || (box === null || box === void 0 ? void 0 : box.paddingBottom) || (style === null || style === void 0 ? void 0 : style.paddingBottom) || (style === null || style === void 0 ? void 0 : style.paddingVertical) || (style === null || style === void 0 ? void 0 : style.padding) || 0;
  var paddingLeft = getComputedPadding(node, Yoga__default["default"].EDGE_LEFT) || (box === null || box === void 0 ? void 0 : box.paddingLeft) || (style === null || style === void 0 ? void 0 : style.paddingLeft) || (style === null || style === void 0 ? void 0 : style.paddingHorizontal) || (style === null || style === void 0 ? void 0 : style.padding) || 0;
  return {
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft
  };
};

var getWrapArea = function getWrapArea(page) {
  var _page$style;
  var _getPadding = getPadding(page),
    paddingBottom = _getPadding.paddingBottom;
  var height = (_page$style = page.style) === null || _page$style === void 0 ? void 0 : _page$style.height;
  return height - paddingBottom;
};

var getContentArea = function getContentArea(page) {
  var _page$style;
  var height = (_page$style = page.style) === null || _page$style === void 0 ? void 0 : _page$style.height;
  var _getPadding = getPadding(page),
    paddingTop = _getPadding.paddingTop,
    paddingBottom = _getPadding.paddingBottom;
  return height - paddingBottom - paddingTop;
};

var _excluded = ["style", "children"];
var isString = function isString(value) {
  return typeof value === 'string';
};
var isNumber = function isNumber(value) {
  return typeof value === 'number';
};
var isFragment = function isFragment(value) {
  return value && value.type === Symbol.for('react.fragment');
};

/**
 * Transforms a react element instance to internal element format.
 *
 * Can return multiple instances in the case of arrays or fragments.
 *
 * @param {Object} React element
 * @returns {Array} parsed react elements
 */
var createInstances = function createInstances(element) {
  if (!element) return [];
  if (isString(element) || isNumber(element)) {
    return [{
      type: P.TextInstance,
      value: "" + element
    }];
  }
  if (isFragment(element)) {
    return createInstances(element.props.children);
  }
  if (Array.isArray(element)) {
    return element.reduce(function (acc, el) {
      return acc.concat(createInstances(el));
    }, []);
  }
  if (!isString(element.type)) {
    return createInstances(element.type(element.props));
  }
  var type = element.type,
    _element$props = element.props,
    _element$props$style = _element$props.style,
    style = _element$props$style === void 0 ? {} : _element$props$style,
    _element$props$childr = _element$props.children,
    children = _element$props$childr === void 0 ? [] : _element$props$childr,
    props = _objectWithoutPropertiesLoose__default["default"](_element$props, _excluded);
  var nextChildren = fns.castArray(children).reduce(function (acc, child) {
    return acc.concat(createInstances(child));
  }, []);
  return [{
    type: type,
    style: style,
    props: props,
    box: {},
    children: nextChildren
  }];
};

/**
 * Get many nodes height
 *
 * @param {Array} nodes
 * @return {number} nodes height
 */
var getNodesHeight = function getNodesHeight(nodes) {
  var max = 0;
  var min = Infinity;
  if (!nodes || nodes.length === 0) return 0;
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];
    min = Math.min(min, node.box.top);
    max = Math.max(max, node.box.top + node.box.height);
  }
  return max - min;
};

/* eslint-disable no-continue */
var getBreak = function getBreak(node) {
  var _node$props;
  return ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.break) || false;
};
var getMinPresenceAhead = function getMinPresenceAhead(node) {
  var _node$props2;
  return (_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.minPresenceAhead;
};
var defaultPresenceAhead = function defaultPresenceAhead(element) {
  return function (height) {
    return Math.min(element.box.height, height);
  };
};
var getPresenceAhead = function getPresenceAhead(elements, height) {
  var result = 0;
  for (var i = 0; i < elements.length; i += 1) {
    var element = elements[i];
    if (!element.box) continue;
    var isElementInside = height > element.box.top;
    var presenceAhead = element.props.presenceAhead || defaultPresenceAhead(element);
    if (element && isElementInside) {
      result += presenceAhead(height - element.box.top);
    }
  }
  return result;
};
var shouldBreak = function shouldBreak(child, futureElements, height) {
  var minPresenceAhead = getMinPresenceAhead(child);
  var presenceAhead = getPresenceAhead(futureElements, height);
  var futureHeight = getNodesHeight(futureElements);
  var shouldSplit = height < child.box.top + child.box.height;
  var shouldWrap = getWrap(child);
  return getBreak(child) || !shouldWrap && shouldSplit || minPresenceAhead < futureHeight && presenceAhead < minPresenceAhead;
};

var IGNORABLE_CODEPOINTS = [8232,
// LINE_SEPARATOR
8233 // PARAGRAPH_SEPARATOR
];

var buildSubsetForFont = function buildSubsetForFont(font) {
  return IGNORABLE_CODEPOINTS.reduce(function (acc, codePoint) {
    if (font && font.hasGlyphForCodePoint && font.hasGlyphForCodePoint(codePoint)) {
      return acc;
    }
    return [].concat(acc, [String.fromCharCode(codePoint)]);
  }, []);
};
var ignoreChars = function ignoreChars(fragments) {
  return fragments.map(function (fragment) {
    var charSubset = buildSubsetForFont(fragment.attributes.font);
    var subsetRegex = new RegExp(charSubset.join('|'));
    return {
      string: fragment.string.replace(subsetRegex, ''),
      attributes: fragment.attributes
    };
  });
};

var PREPROCESSORS = [ignoreChars, embedEmojis];
var isImage$1 = function isImage(node) {
  return node.type === P__namespace.Image;
};
var isTextInstance$2 = function isTextInstance(node) {
  return node.type === P__namespace.TextInstance;
};

/**
 * Get textkit fragments of given node object
 *
 * @param {Object} font store
 * @param {Object} instance node
 * @returns {Array} text fragments
 */
var getFragments = function getFragments(fontStore, instance, parentLink, level) {
  var _instance$props, _instance$props2;
  if (level === void 0) {
    level = 0;
  }
  if (!instance) return [{
    string: ''
  }];
  var fragments = [];
  var _instance$style = instance.style,
    _instance$style$color = _instance$style.color,
    color = _instance$style$color === void 0 ? 'black' : _instance$style$color,
    _instance$style$fontF = _instance$style.fontFamily,
    fontFamily = _instance$style$fontF === void 0 ? 'Helvetica' : _instance$style$fontF,
    fontWeight = _instance$style.fontWeight,
    fontStyle = _instance$style.fontStyle,
    _instance$style$fontS = _instance$style.fontSize,
    fontSize = _instance$style$fontS === void 0 ? 18 : _instance$style$fontS,
    _instance$style$textA = _instance$style.textAlign,
    textAlign = _instance$style$textA === void 0 ? 'left' : _instance$style$textA,
    lineHeight = _instance$style.lineHeight,
    textDecoration = _instance$style.textDecoration,
    textDecorationColor = _instance$style.textDecorationColor,
    textDecorationStyle = _instance$style.textDecorationStyle,
    textTransform = _instance$style.textTransform,
    letterSpacing = _instance$style.letterSpacing,
    textIndent = _instance$style.textIndent,
    opacity = _instance$style.opacity,
    verticalAlign = _instance$style.verticalAlign;
  var opts = {
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle
  };
  var obj = fontStore ? fontStore.getFont(opts) : null;
  var font = obj ? obj.data : fontFamily;

  // Don't pass main background color to textkit. Will be rendered by the render package instead
  var backgroundColor = level === 0 ? null : instance.style.backgroundColor;
  var attributes = {
    font: font,
    color: color,
    opacity: opacity,
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    align: textAlign,
    indent: textIndent,
    characterSpacing: letterSpacing,
    strikeStyle: textDecorationStyle,
    underlineStyle: textDecorationStyle,
    underline: textDecoration === 'underline' || textDecoration === 'underline line-through' || textDecoration === 'line-through underline',
    strike: textDecoration === 'line-through' || textDecoration === 'underline line-through' || textDecoration === 'line-through underline',
    strikeColor: textDecorationColor || color,
    underlineColor: textDecorationColor || color,
    link: parentLink || ((_instance$props = instance.props) === null || _instance$props === void 0 ? void 0 : _instance$props.src) || ((_instance$props2 = instance.props) === null || _instance$props2 === void 0 ? void 0 : _instance$props2.href),
    lineHeight: lineHeight ? lineHeight * fontSize : null,
    verticalAlign: verticalAlign
  };
  for (var i = 0; i < instance.children.length; i += 1) {
    var child = instance.children[i];
    if (isImage$1(child)) {
      fragments.push({
        string: String.fromCharCode(0xfffc),
        attributes: _extends__default["default"]({}, attributes, {
          attachment: {
            width: child.style.width || fontSize,
            height: child.style.height || fontSize,
            image: child.image.data
          }
        })
      });
    } else if (isTextInstance$2(child)) {
      fragments.push({
        string: transformText(child.value, textTransform),
        attributes: attributes
      });
    } else if (child) {
      var _fragments;
      (_fragments = fragments).push.apply(_fragments, getFragments(fontStore, child, attributes.link, level + 1));
    }
  }
  for (var _i = 0; _i < PREPROCESSORS.length; _i += 1) {
    var preprocessor = PREPROCESSORS[_i];
    fragments = preprocessor(fragments);
  }
  return fragments;
};

/**
 * Get textkit attributed string from text node
 *
 * @param {Object} font store
 * @param {Object} instance node
 * @returns {Object} attributed string
 */
var getAttributedString = function getAttributedString(fontStore, instance) {
  var fragments = getFragments(fontStore, instance);
  return fromFragments(fragments);
};

var engines = {
  linebreaker: layoutEngine.linebreaker,
  justification: layoutEngine.justification,
  textDecoration: layoutEngine.textDecoration,
  scriptItemizer: layoutEngine.scriptItemizer,
  wordHyphenation: layoutEngine.wordHyphenation,
  fontSubstitution: fontSubstitution
};
var engine = layoutEngine__default["default"](engines);
var getMaxLines = function getMaxLines(node) {
  var _node$style;
  return (_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.maxLines;
};
var getTextOverflow = function getTextOverflow(node) {
  var _node$style2;
  return (_node$style2 = node.style) === null || _node$style2 === void 0 ? void 0 : _node$style2.textOverflow;
};

/**
 * Get layout container for specific text node
 *
 * @param {Number} width
 * @param {Number} height
 * @param {Object} node
 * @returns {Object} layout container
 */
var getContainer = function getContainer(width, height, node) {
  var maxLines = getMaxLines(node);
  var textOverflow = getTextOverflow(node);
  return {
    x: 0,
    y: 0,
    width: width,
    maxLines: maxLines,
    height: height || Infinity,
    truncateMode: textOverflow
  };
};

/**
 * Get text layout options for specific text node
 *
 * @param {Object} node instance
 * @returns {Object} layout options
 */
var getLayoutOptions = function getLayoutOptions(fontStore, node) {
  return {
    hyphenationPenalty: node.props.hyphenationPenalty,
    shrinkWhitespaceFactor: {
      before: -0.5,
      after: -0.5
    },
    hyphenationCallback: node.props.hyphenationCallback || (fontStore === null || fontStore === void 0 ? void 0 : fontStore.getHyphenationCallback()) || null
  };
};

/**
 * Get text lines for given node
 *
 * @param {Object} node
 * @param {Number} container width
 * @param {Number} container height
 * @param {Number} fontStore font store
 * @returns {Array} layout lines
 */
var layoutText = function layoutText(node, width, height, fontStore) {
  var attributedString = getAttributedString(fontStore, node);
  var container = getContainer(width, height, node);
  var options = getLayoutOptions(fontStore, node);
  var lines = engine(attributedString, container, options);
  return lines.reduce(function (acc, line) {
    return [].concat(acc, line);
  }, []);
};

var isType$2 = function isType(type) {
  return function (node) {
    return node.type === type;
  };
};
var isSvg$2 = isType$2(P__namespace.Svg);
var isText$3 = isType$2(P__namespace.Text);
var shouldIterate = function shouldIterate(node) {
  return !isSvg$2(node) && !isText$3(node);
};
var shouldLayoutText = function shouldLayoutText(node) {
  return isText$3(node) && !node.lines;
};

/**
 * Performs text layout on text node if wasn't calculated before.
 * Text layout is usually performed on Yoga's layout process (via setMeasureFunc),
 * but we need to layout those nodes with fixed width and height.
 *
 * @param {Object} node
 * @returns {Object} layout node
 */
var resolveTextLayout = function resolveTextLayout(node, fontStore) {
  if (shouldLayoutText(node)) {
    var width = node.box.width - (node.box.paddingRight + node.box.paddingLeft);
    var height = node.box.height - (node.box.paddingTop + node.box.paddingBottom);

    // eslint-disable-next-line no-param-reassign
    node.lines = layoutText(node, width, height, fontStore);
  }
  if (shouldIterate(node)) {
    if (!node.children) return node;
    var mapChild = function mapChild(child) {
      return resolveTextLayout(child, fontStore);
    };
    var children = node.children.map(mapChild);
    return Object.assign({}, node, {
      children: children
    });
  }
  return node;
};

var INHERITED_PROPERTIES = ['color', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'opacity', 'textDecoration', 'textTransform', 'lineHeight', 'textAlign', 'visibility', 'wordSpacing'];
var isSvg$1 = function isSvg(node) {
  return node.type === P__namespace.Svg;
};

// Merge style values
var mergeValues = function mergeValues(styleName, value, inheritedValue) {
  switch (styleName) {
    case 'textDecoration':
      {
        // merge not none and not false textDecoration values to one rule
        return [inheritedValue, value].filter(function (v) {
          return v && v !== 'none';
        }).join(' ');
      }
    default:
      return value;
  }
};

// Merge inherited and node styles
var merge = function merge(inheritedStyles, style) {
  var mergedStyles = _extends__default["default"]({}, inheritedStyles);
  Object.entries(style).forEach(function (_ref) {
    var styleName = _ref[0],
      value = _ref[1];
    mergedStyles[styleName] = mergeValues(styleName, value, inheritedStyles[styleName]);
  });
  return mergedStyles;
};

/**
 * Merges styles with node
 *
 * @param {Object} style object
 * @param {Object} node
 * @returns {Object} node with styles merged
 */
var mergeStyles = function mergeStyles(inheritedStyles) {
  return function (node) {
    var style = merge(inheritedStyles, node.style || {});
    return Object.assign({}, node, {
      style: style
    });
  };
};

/**
 * Inherit style values from the root to the leafs
 *
 * @param {Object} document root
 * @returns {Object} document root with inheritance
 *
 */
var resolveInheritance = function resolveInheritance(node) {
  if (isSvg$1(node)) return node;
  if (!node.children) return node;
  var inheritStyles = fns.pick(INHERITED_PROPERTIES, node.style || {});
  var resolveChild = fns.compose(resolveInheritance, mergeStyles(inheritStyles));
  var children = node.children.map(resolveChild);
  return Object.assign({}, node, {
    children: children
  });
};

var getComputedMargin = function getComputedMargin(node, edge) {
  var yogaNode = node.yogaNode;
  return yogaNode ? yogaNode.getComputedMargin(edge) : null;
};

/**
 * Get Yoga computed magins. Zero otherwise
 *
 * @param {Object} node
 * @return {Object} margins
 */
var getMargin = function getMargin(node) {
  var style = node.style,
    box = node.box;
  var marginTop = getComputedMargin(node, Yoga__default["default"].EDGE_TOP) || (box === null || box === void 0 ? void 0 : box.marginTop) || (style === null || style === void 0 ? void 0 : style.marginTop) || (style === null || style === void 0 ? void 0 : style.marginVertical) || (style === null || style === void 0 ? void 0 : style.margin) || 0;
  var marginRight = getComputedMargin(node, Yoga__default["default"].EDGE_RIGHT) || (box === null || box === void 0 ? void 0 : box.marginRight) || (style === null || style === void 0 ? void 0 : style.marginRight) || (style === null || style === void 0 ? void 0 : style.marginHorizontal) || (style === null || style === void 0 ? void 0 : style.margin) || 0;
  var marginBottom = getComputedMargin(node, Yoga__default["default"].EDGE_BOTTOM) || (box === null || box === void 0 ? void 0 : box.marginBottom) || (style === null || style === void 0 ? void 0 : style.marginBottom) || (style === null || style === void 0 ? void 0 : style.marginVertical) || (style === null || style === void 0 ? void 0 : style.margin) || 0;
  var marginLeft = getComputedMargin(node, Yoga__default["default"].EDGE_LEFT) || (box === null || box === void 0 ? void 0 : box.marginLeft) || (style === null || style === void 0 ? void 0 : style.marginLeft) || (style === null || style === void 0 ? void 0 : style.marginHorizontal) || (style === null || style === void 0 ? void 0 : style.margin) || 0;
  return {
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft
  };
};

/**
 * Get Yoga computed position. Zero otherwise
 *
 * @param {Object} node
 * @return {Object} position
 */
var getPosition = function getPosition(node) {
  var yogaNode = node.yogaNode;
  return {
    top: (yogaNode === null || yogaNode === void 0 ? void 0 : yogaNode.getComputedTop()) || 0,
    right: (yogaNode === null || yogaNode === void 0 ? void 0 : yogaNode.getComputedRight()) || 0,
    bottom: (yogaNode === null || yogaNode === void 0 ? void 0 : yogaNode.getComputedBottom()) || 0,
    left: (yogaNode === null || yogaNode === void 0 ? void 0 : yogaNode.getComputedLeft()) || 0
  };
};

var DEFAULT_DIMENSION = {
  width: 0,
  height: 0
};

/**
 * Get Yoga computed dimensions. Zero otherwise
 *
 * @param {Object} node
 * @return {Object} dimensions
 */
var getDimension = function getDimension(node) {
  var yogaNode = node.yogaNode;
  if (!yogaNode) return DEFAULT_DIMENSION;
  return {
    width: yogaNode.getComputedWidth(),
    height: yogaNode.getComputedHeight()
  };
};

var getComputedBorder = function getComputedBorder(yogaNode, edge) {
  return yogaNode ? yogaNode.getComputedBorder(edge) : 0;
};

/**
 * Get Yoga computed border width. Zero otherwise
 *
 * @param {Object} node
 * @return {Object} border widths
 */
var getBorderWidth = function getBorderWidth(node) {
  var yogaNode = node.yogaNode;
  return {
    borderTopWidth: getComputedBorder(yogaNode, Yoga__default["default"].EDGE_TOP),
    borderRightWidth: getComputedBorder(yogaNode, Yoga__default["default"].EDGE_RIGHT),
    borderBottomWidth: getComputedBorder(yogaNode, Yoga__default["default"].EDGE_BOTTOM),
    borderLeftWidth: getComputedBorder(yogaNode, Yoga__default["default"].EDGE_LEFT)
  };
};

/**
 * Set display attribute to node's Yoga instance
 *
 * @param {String} display
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setDisplay = function setDisplay(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (yogaNode) {
      yogaNode.setDisplay(value === 'none' ? Yoga__default["default"].DISPLAY_NONE : Yoga__default["default"].DISPLAY_FLEX);
    }
    return node;
  };
};

var OVERFLOW = {
  hidden: Yoga__default["default"].OVERFLOW_HIDDEN,
  scroll: Yoga__default["default"].OVERFLOW_SCROLL
};

/**
 * Set overflow attribute to node's Yoga instance
 *
 * @param {String} overflow value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setOverflow = function setOverflow(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (!fns.isNil(value) && yogaNode) {
      var overflow = OVERFLOW[value] || Yoga__default["default"].OVERFLOW_VISIBLE;
      yogaNode.setOverflow(overflow);
    }
    return node;
  };
};

var FLEX_WRAP = {
  wrap: Yoga__default["default"].WRAP_WRAP,
  'wrap-reverse': Yoga__default["default"].WRAP_WRAP_REVERSE
};

/**
 * Set flex wrap attribute to node's Yoga instance
 *
 * @param {String} flex wrap value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setFlexWrap = function setFlexWrap(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (yogaNode) {
      var flexWrap = FLEX_WRAP[value] || Yoga__default["default"].WRAP_NO_WRAP;
      yogaNode.setFlexWrap(flexWrap);
    }
    return node;
  };
};

/* eslint-disable no-unused-expressions */

/**
 * Set generic yoga attribute to node's Yoga instance, handing `auto`, edges and percentage cases
 *
 * @param {String} property
 * @param {Number} edge
 * @param {any} value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setYogaValue = function setYogaValue(attr, edge) {
  return function (value) {
    return function (node) {
      var yogaNode = node.yogaNode;
      if (!fns.isNil(value) && yogaNode) {
        var hasEdge = !fns.isNil(edge);
        var fixedMethod = "set" + fns.upperFirst(attr);
        var autoMethod = fixedMethod + "Auto";
        var percentMethod = fixedMethod + "Percent";
        var percent = fns.matchPercent(value);
        if (percent && !yogaNode[percentMethod]) {
          throw new Error("You can't pass percentage values to " + attr + " property");
        }
        if (percent) {
          if (hasEdge) {
            var _yogaNode$percentMeth;
            (_yogaNode$percentMeth = yogaNode[percentMethod]) === null || _yogaNode$percentMeth === void 0 ? void 0 : _yogaNode$percentMeth.call(yogaNode, edge, percent.value);
          } else {
            var _yogaNode$percentMeth2;
            (_yogaNode$percentMeth2 = yogaNode[percentMethod]) === null || _yogaNode$percentMeth2 === void 0 ? void 0 : _yogaNode$percentMeth2.call(yogaNode, percent.value);
          }
        } else if (value === 'auto') {
          if (hasEdge) {
            var _yogaNode$autoMethod;
            (_yogaNode$autoMethod = yogaNode[autoMethod]) === null || _yogaNode$autoMethod === void 0 ? void 0 : _yogaNode$autoMethod.call(yogaNode, edge);
          } else {
            var _yogaNode$autoMethod2;
            (_yogaNode$autoMethod2 = yogaNode[autoMethod]) === null || _yogaNode$autoMethod2 === void 0 ? void 0 : _yogaNode$autoMethod2.call(yogaNode);
          }
        } else if (hasEdge) {
          var _yogaNode$fixedMethod;
          (_yogaNode$fixedMethod = yogaNode[fixedMethod]) === null || _yogaNode$fixedMethod === void 0 ? void 0 : _yogaNode$fixedMethod.call(yogaNode, edge, value);
        } else {
          var _yogaNode$fixedMethod2;
          (_yogaNode$fixedMethod2 = yogaNode[fixedMethod]) === null || _yogaNode$fixedMethod2 === void 0 ? void 0 : _yogaNode$fixedMethod2.call(yogaNode, value);
        }
      }
      return node;
    };
  };
};

/**
 * Set flex grow attribute to node's Yoga instance
 *
 * @param {Number} flex grow value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setFlexGrow = function setFlexGrow(value) {
  return function (node) {
    return setYogaValue('flexGrow')(value || 0)(node);
  };
};

/**
 * Set flex basis attribute to node's Yoga instance
 *
 * @param {Number} flex basis value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setFlexBasis = setYogaValue('flexBasis');

var ALIGN = {
  'flex-start': Yoga__default["default"].ALIGN_FLEX_START,
  center: Yoga__default["default"].ALIGN_CENTER,
  'flex-end': Yoga__default["default"].ALIGN_FLEX_END,
  stretch: Yoga__default["default"].ALIGN_STRETCH,
  baseline: Yoga__default["default"].ALIGN_BASELINE,
  'space-between': Yoga__default["default"].ALIGN_SPACE_BETWEEN,
  'space-around': Yoga__default["default"].ALIGN_SPACE_AROUND
};

/**
 * Set generic align attribute to node's Yoga instance
 *
 * @param {String} specific align property
 * @param {String} align value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setAlign = function setAlign(attr) {
  return function (value) {
    return function (node) {
      var yogaNode = node.yogaNode;
      var defaultValue = attr === 'items' ? Yoga__default["default"].ALIGN_STRETCH : Yoga__default["default"].ALIGN_AUTO;
      if (yogaNode) {
        var align = ALIGN[value] || defaultValue;
        yogaNode["setAlign" + fns.upperFirst(attr)](align);
      }
      return node;
    };
  };
};

/**
 * Set align self attribute to node's Yoga instance
 *
 * @param {String} align value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setAlignSelf = setAlign('self');

/**
 * Set align items attribute to node's Yoga instance
 *
 * @param {String} align value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setAlignItems = setAlign('items');

/**
 * Set flex shrink attribute to node's Yoga instance
 *
 * @param {Number} flex shrink value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setFlexShrink = function setFlexShrink(value) {
  return function (node) {
    return setYogaValue('flexShrink')(value || 1)(node);
  };
};

/**
 * Set aspect ratio attribute to node's Yoga instance
 *
 * @param {Number} ratio
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setAspectRatio = function setAspectRatio(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (!fns.isNil(value) && yogaNode) {
      yogaNode.setAspectRatio(value);
    }
    return node;
  };
};

/**
 * Set align content attribute to node's Yoga instance
 *
 * @param {String} align value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setAlignContent = setAlign('content');

/**
 * Set position type attribute to node's Yoga instance
 *
 * @param {String} position type
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPositionType = function setPositionType(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (!fns.isNil(value) && yogaNode) {
      yogaNode.setPositionType(value === 'absolute' ? Yoga__default["default"].POSITION_TYPE_ABSOLUTE : Yoga__default["default"].POSITION_TYPE_RELATIVE);
    }
    return node;
  };
};

var FLEX_DIRECTIONS = {
  row: Yoga__default["default"].FLEX_DIRECTION_ROW,
  'row-reverse': Yoga__default["default"].FLEX_DIRECTION_ROW_REVERSE,
  'column-reverse': Yoga__default["default"].FLEX_DIRECTION_COLUMN_REVERSE
};

/**
 * Set flex direction attribute to node's Yoga instance
 *
 * @param {String} flex direction value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setFlexDirection = function setFlexDirection(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (yogaNode) {
      var flexDirection = FLEX_DIRECTIONS[value] || Yoga__default["default"].FLEX_DIRECTION_COLUMN;
      yogaNode.setFlexDirection(flexDirection);
    }
    return node;
  };
};

var JUSTIFY_CONTENT = {
  center: Yoga__default["default"].JUSTIFY_CENTER,
  'flex-end': Yoga__default["default"].JUSTIFY_FLEX_END,
  'space-between': Yoga__default["default"].JUSTIFY_SPACE_BETWEEN,
  'space-around': Yoga__default["default"].JUSTIFY_SPACE_AROUND,
  'space-evenly': Yoga__default["default"].JUSTIFY_SPACE_EVENLY
};

/**
 * Set justify content attribute to node's Yoga instance
 *
 * @param {String} justify content value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setJustifyContent = function setJustifyContent(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (!fns.isNil(value) && yogaNode) {
      var justifyContent = JUSTIFY_CONTENT[value] || Yoga__default["default"].JUSTIFY_FLEX_START;
      yogaNode.setJustifyContent(justifyContent);
    }
    return node;
  };
};

/**
 * Set margin top attribute to node's Yoga instance
 *
 * @param {Number} margin top
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMarginTop = setYogaValue('margin', Yoga__default["default"].EDGE_TOP);

/**
 * Set margin right attribute to node's Yoga instance
 *
 * @param {Number} margin right
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMarginRight = setYogaValue('margin', Yoga__default["default"].EDGE_RIGHT);

/**
 * Set margin bottom attribute to node's Yoga instance
 *
 * @param {Number} margin bottom
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMarginBottom = setYogaValue('margin', Yoga__default["default"].EDGE_BOTTOM);

/**
 * Set margin left attribute to node's Yoga instance
 *
 * @param {Number} margin left
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMarginLeft = setYogaValue('margin', Yoga__default["default"].EDGE_LEFT);

/**
 * Set padding top attribute to node's Yoga instance
 *
 * @param {Number} padding top
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPaddingTop = setYogaValue('padding', Yoga__default["default"].EDGE_TOP);

/**
 * Set padding right attribute to node's Yoga instance
 *
 * @param {Number} padding right
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPaddingRight = setYogaValue('padding', Yoga__default["default"].EDGE_RIGHT);

/**
 * Set padding bottom attribute to node's Yoga instance
 *
 * @param {Number} padding bottom
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPaddingBottom = setYogaValue('padding', Yoga__default["default"].EDGE_BOTTOM);

/**
 * Set padding left attribute to node's Yoga instance
 *
 * @param {Number} padding left
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPaddingLeft = setYogaValue('padding', Yoga__default["default"].EDGE_LEFT);

/**
 * Set border top attribute to node's Yoga instance
 *
 * @param {Number} border top width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setBorderTop = setYogaValue('border', Yoga__default["default"].EDGE_TOP);

/**
 * Set border right attribute to node's Yoga instance
 *
 * @param {Number} border right width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setBorderRight = setYogaValue('border', Yoga__default["default"].EDGE_RIGHT);

/**
 * Set border bottom attribute to node's Yoga instance
 *
 * @param {Number} border bottom width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setBorderBottom = setYogaValue('border', Yoga__default["default"].EDGE_BOTTOM);

/**
 * Set border left attribute to node's Yoga instance
 *
 * @param {Number} border left width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setBorderLeft = setYogaValue('border', Yoga__default["default"].EDGE_LEFT);

/**
 * Set position top attribute to node's Yoga instance
 *
 * @param {Number} position top
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPositionTop = setYogaValue('position', Yoga__default["default"].EDGE_TOP);

/**
 * Set position right attribute to node's Yoga instance
 *
 * @param {Number} position right
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPositionRight = setYogaValue('position', Yoga__default["default"].EDGE_RIGHT);

/**
 * Set position bottom attribute to node's Yoga instance
 *
 * @param {Number} position bottom
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPositionBottom = setYogaValue('position', Yoga__default["default"].EDGE_BOTTOM);

/**
 * Set position left attribute to node's Yoga instance
 *
 * @param {Number} position left
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setPositionLeft = setYogaValue('position', Yoga__default["default"].EDGE_LEFT);

/**
 * Set width to node's Yoga instance
 *
 * @param {Number} width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setWidth = setYogaValue('width');

/**
 * Set min width to node's Yoga instance
 *
 * @param {Number} min width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMinWidth = setYogaValue('minWidth');

/**
 * Set max width to node's Yoga instance
 *
 * @param {Number} max width
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMaxWidth = setYogaValue('maxWidth');

/**
 * Set height to node's Yoga instance
 *
 * @param {Number} height
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setHeight = setYogaValue('height');

/**
 * Set min height to node's Yoga instance
 *
 * @param {Number} min height
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMinHeight = setYogaValue('minHeight');

/**
 * Set max height to node's Yoga instance
 *
 * @param {Number} max height
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setMaxHeight = setYogaValue('maxHeight');

var checkPercents = function checkPercents(attr, value) {
  var percent = fns.matchPercent(value);
  if (percent) {
    throw new Error("You can't pass percentage values to " + attr + " property");
  }
};

/**
 * Set rowGap value to node's Yoga instance
 *
 * @param {Number} gap value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setRowGap = function setRowGap(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (!fns.isNil(value) && yogaNode) {
      checkPercents('rowGap', value);
      yogaNode.setGap(Yoga__default["default"].GUTTER_ROW, value);
    }
    return node;
  };
};

/**
 * Set columnGap value to node's Yoga instance
 *
 * @param {Number} gap value
 * @param {Object} node instance
 * @return {Object} node instance
 */
var setColumnGap = function setColumnGap(value) {
  return function (node) {
    var yogaNode = node.yogaNode;
    if (!fns.isNil(value) && yogaNode) {
      checkPercents('columnGap', value);
      yogaNode.setGap(Yoga__default["default"].GUTTER_COLUMN, value);
    }
    return node;
  };
};

var getAspectRatio = function getAspectRatio(viewbox) {
  if (!viewbox) return null;
  return (viewbox.maxX - viewbox.minX) / (viewbox.maxY - viewbox.minY);
};

/**
 * Yoga svg measure function
 *
 * @param {Object} page
 * @param {Object} node
 * @param {Number} width
 * @param {Number} widthMode
 * @param {Number} height
 * @param {Number} heightMode
 * @returns {Object} canvas width and height
 */
var measureCanvas$1 = function measureCanvas(page, node) {
  return function (width, widthMode, height, heightMode) {
    var aspectRatio = getAspectRatio(node.props.viewBox) || 1;
    if (widthMode === Yoga__default["default"].MEASURE_MODE_EXACTLY || widthMode === Yoga__default["default"].MEASURE_MODE_AT_MOST) {
      return {
        width: width,
        height: width / aspectRatio
      };
    }
    if (heightMode === Yoga__default["default"].MEASURE_MODE_EXACTLY) {
      return {
        width: height * aspectRatio
      };
    }
    return {};
  };
};

/**
 * Get lines width (if any)
 *
 * @param {Object} node
 * @returns {Number} lines width
 */
var linesWidth = function linesWidth(node) {
  if (!node.lines) return 0;
  return Math.max.apply(Math, [0].concat(node.lines.map(function (line) {
    return line.xAdvance;
  })));
};

/**
 * Get lines height (if any)
 *
 * @param {Object} node
 * @returns {Number} lines height
 */
var linesHeight = function linesHeight(node) {
  if (!node.lines) return -1;
  return node.lines.reduce(function (acc, line) {
    return acc + line.box.height;
  }, 0);
};

/* eslint-disable no-param-reassign */
var ALIGNMENT_FACTORS = {
  center: 0.5,
  right: 1
};

/**
 * Yoga text measure function
 *
 * @param {Object} page
 * @param {Object} node
 * @param {Number} width
 * @param {Number} widthMode
 * @param {Number} height
 * @param {Number} heightMode
 * @returns {Object} text width and height
 */
var measureText = function measureText(page, node, fontStore) {
  return function (width, widthMode, height) {
    if (widthMode === Yoga__default["default"].MEASURE_MODE_EXACTLY) {
      if (!node.lines) node.lines = layoutText(node, width, height, fontStore);
      return {
        height: linesHeight(node)
      };
    }
    if (widthMode === Yoga__default["default"].MEASURE_MODE_AT_MOST) {
      var _node$style;
      var alignFactor = ALIGNMENT_FACTORS[(_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.textAlign] || 0;
      if (!node.lines) {
        node.lines = layoutText(node, width, height, fontStore);
        node.alignOffset = (width - linesWidth(node)) * alignFactor; // Compensate align in variable width containers
      }

      return {
        height: linesHeight(node),
        width: Math.min(width, linesWidth(node))
      };
    }
    return {};
  };
};

/**
 * Get image ratio
 *
 * @param {Object} image node
 * @returns {Number} image ratio
 */
var getRatio = function getRatio(node) {
  var _node$image;
  return (_node$image = node.image) !== null && _node$image !== void 0 && _node$image.data ? node.image.width / node.image.height : 1;
};

/**
 * Checks if page has auto height
 *
 * @param {Object} page
 * @returns {Boolean} is page height auto
 */
var isHeightAuto = function isHeightAuto(page) {
  var _page$box;
  return fns.isNil((_page$box = page.box) === null || _page$box === void 0 ? void 0 : _page$box.height);
};

var SAFETY_HEIGHT$1 = 10;

/**
 * Yoga image measure function
 *
 * @param {Object} page
 * @param {Object} node
 * @param {Number} width
 * @param {Number} widthMode
 * @param {Number} height
 * @param {Number} heightMode
 * @returns {Object} image width and height
 */
var measureImage = function measureImage(page, node) {
  return function (width, widthMode, height, heightMode) {
    var imageRatio = getRatio(node);
    var imageMargin = getMargin(node);
    var pagePadding = getPadding(page);
    var pageArea = isHeightAuto(page) ? Infinity : page.box.height - pagePadding.paddingTop - pagePadding.paddingBottom - imageMargin.marginTop - imageMargin.marginBottom - SAFETY_HEIGHT$1;

    // Skip measure if image data not present yet
    if (!node.image) return {
      width: 0,
      height: 0
    };
    if (widthMode === Yoga__default["default"].MEASURE_MODE_EXACTLY && heightMode === Yoga__default["default"].MEASURE_MODE_UNDEFINED) {
      var scaledHeight = width / imageRatio;
      return {
        height: Math.min(pageArea, scaledHeight)
      };
    }
    if (heightMode === Yoga__default["default"].MEASURE_MODE_EXACTLY && (widthMode === Yoga__default["default"].MEASURE_MODE_AT_MOST || widthMode === Yoga__default["default"].MEASURE_MODE_UNDEFINED)) {
      return {
        width: Math.min(height * imageRatio, width)
      };
    }
    if (widthMode === Yoga__default["default"].MEASURE_MODE_EXACTLY && heightMode === Yoga__default["default"].MEASURE_MODE_AT_MOST) {
      var _scaledHeight = width / imageRatio;
      return {
        height: Math.min(height, pageArea, _scaledHeight)
      };
    }
    if (widthMode === Yoga__default["default"].MEASURE_MODE_AT_MOST && heightMode === Yoga__default["default"].MEASURE_MODE_AT_MOST) {
      if (imageRatio > 1) {
        return {
          width: width,
          height: Math.min(width / imageRatio, height)
        };
      }
      return {
        height: height,
        width: Math.min(height * imageRatio, width)
      };
    }
    return {
      height: height,
      width: width
    };
  };
};

/* eslint-disable no-param-reassign */
var SAFETY_HEIGHT = 10;
var getMax = function getMax(values) {
  return Math.max.apply(Math, [-Infinity].concat(values));
};

/**
 * Helper object to predict canvas size
 * TODO: Implement remaining functions (as close as possible);
 */
var measureCtx = function measureCtx() {
  var ctx = {};
  var points = [];
  var nil = function nil() {
    return ctx;
  };
  var addPoint = function addPoint(x, y) {
    return points.push([x, y]);
  };
  var moveTo = function moveTo() {
    addPoint.apply(void 0, arguments);
    return ctx;
  };
  var rect = function rect(x, y, w, h) {
    addPoint(x, y);
    addPoint(x + w, y);
    addPoint(x, y + h);
    addPoint(x + w, y + h);
    return ctx;
  };
  var ellipse = function ellipse(x, y, rx, ry) {
    ry = ry || rx;
    addPoint(x - rx, y - ry);
    addPoint(x + rx, y - ry);
    addPoint(x + rx, y + ry);
    addPoint(x - rx, y + ry);
    return ctx;
  };
  var polygon = function polygon() {
    points.push.apply(points, arguments);
    return ctx;
  };

  // Change dimensions
  ctx.rect = rect;
  ctx.moveTo = moveTo;
  ctx.lineTo = moveTo;
  ctx.circle = ellipse;
  ctx.polygon = polygon;
  ctx.ellipse = ellipse;
  ctx.roundedRect = rect;

  // To be implemented
  ctx.text = nil;
  ctx.path = nil;
  ctx.lineWidth = nil;
  ctx.bezierCurveTo = nil;
  ctx.quadraticCurveTo = nil;
  ctx.scale = nil;
  ctx.rotate = nil;
  ctx.translate = nil;

  // These don't change dimensions
  ctx.dash = nil;
  ctx.clip = nil;
  ctx.save = nil;
  ctx.fill = nil;
  ctx.font = nil;
  ctx.stroke = nil;
  ctx.lineCap = nil;
  ctx.opacity = nil;
  ctx.restore = nil;
  ctx.lineJoin = nil;
  ctx.fontSize = nil;
  ctx.fillColor = nil;
  ctx.miterLimit = nil;
  ctx.strokeColor = nil;
  ctx.fillOpacity = nil;
  ctx.strokeOpacity = nil;
  ctx.linearGradient = nil;
  ctx.radialGradient = nil;
  ctx.getWidth = function () {
    return getMax(points.map(function (p) {
      return p[0];
    }));
  };
  ctx.getHeight = function () {
    return getMax(points.map(function (p) {
      return p[1];
    }));
  };
  return ctx;
};

/**
 * Yoga canvas measure function
 *
 * @param {Object} page
 * @param {Object} node
 * @param {Number} width
 * @param {Number} widthMode
 * @param {Number} height
 * @param {Number} heightMode
 * @returns {Object} canvas width and height
 */
var measureCanvas = function measureCanvas(page, node) {
  return function () {
    var imageMargin = getMargin(node);
    var pagePadding = getPadding(page);
    var pageArea = isHeightAuto(page) ? Infinity : page.box.height - pagePadding.paddingTop - pagePadding.paddingBottom - imageMargin.marginTop - imageMargin.marginBottom - SAFETY_HEIGHT;
    var ctx = measureCtx();
    node.props.paint(ctx);
    var width = ctx.getWidth();
    var height = Math.min(pageArea, ctx.getHeight());
    return {
      height: height,
      width: width
    };
  };
};

var YOGA_CONFIG = Yoga__default["default"].Config.create();
YOGA_CONFIG.setPointScaleFactor(0);
var isType$1 = function isType(type) {
  return function (node) {
    return node.type === type;
  };
};
var isSvg = isType$1(P__namespace.Svg);
var isText$2 = isType$1(P__namespace.Text);
var isNote = isType$1(P__namespace.Note);
var isPage = isType$1(P__namespace.Page);
var isImage = isType$1(P__namespace.Image);
var isCanvas = isType$1(P__namespace.Canvas);
var isTextInstance$1 = isType$1(P__namespace.TextInstance);
var setNodeHeight = function setNodeHeight(node) {
  var value = isPage(node) ? node.box.height : node.style.height;
  return setHeight(value);
};

/**
 * Set styles valeus into yoga node before layout calculation
 *
 * @param {Object} node
 * @returns {Object} node
 */
var setYogaValues = function setYogaValues(node) {
  fns.compose(setNodeHeight(node), setWidth(node.style.width), setMinWidth(node.style.minWidth), setMaxWidth(node.style.maxWidth), setMinHeight(node.style.minHeight), setMaxHeight(node.style.maxHeight), setMarginTop(node.style.marginTop), setMarginRight(node.style.marginRight), setMarginBottom(node.style.marginBottom), setMarginLeft(node.style.marginLeft), setPaddingTop(node.style.paddingTop), setPaddingRight(node.style.paddingRight), setPaddingBottom(node.style.paddingBottom), setPaddingLeft(node.style.paddingLeft), setPositionType(node.style.position), setPositionTop(node.style.top), setPositionRight(node.style.right), setPositionBottom(node.style.bottom), setPositionLeft(node.style.left), setBorderTop(node.style.borderTopWidth), setBorderRight(node.style.borderRightWidth), setBorderBottom(node.style.borderBottomWidth), setBorderLeft(node.style.borderLeftWidth), setDisplay(node.style.display), setFlexDirection(node.style.flexDirection), setAlignSelf(node.style.alignSelf), setAlignContent(node.style.alignContent), setAlignItems(node.style.alignItems), setJustifyContent(node.style.justifyContent), setFlexWrap(node.style.flexWrap), setOverflow(node.style.overflow), setAspectRatio(node.style.aspectRatio), setFlexBasis(node.style.flexBasis), setFlexGrow(node.style.flexGrow), setFlexShrink(node.style.flexShrink), setRowGap(node.style.rowGap), setColumnGap(node.style.columnGap))(node);
};

/**
 * Inserts child into parent' yoga node
 *
 * @param {Object} parent
 * @param {Object} node
 * @param {Object} node
 */
var insertYogaNodes = function insertYogaNodes(parent) {
  return function (child) {
    parent.insertChild(child.yogaNode, parent.getChildCount());
    return child;
  };
};
var setMeasureFunc = function setMeasureFunc(node, page, fontStore) {
  var yogaNode = node.yogaNode;
  if (isText$2(node)) {
    yogaNode.setMeasureFunc(measureText(page, node, fontStore));
  }
  if (isImage(node)) {
    yogaNode.setMeasureFunc(measureImage(page, node));
  }
  if (isCanvas(node)) {
    yogaNode.setMeasureFunc(measureCanvas(page, node));
  }
  if (isSvg(node)) {
    yogaNode.setMeasureFunc(measureCanvas$1(page, node));
  }
  return node;
};
var isLayoutElement = function isLayoutElement(node) {
  return !isText$2(node) && !isNote(node) && !isSvg(node);
};

/**
 * Creates and add yoga node to document tree
 * Handles measure function for text and image nodes
 *
 * @param {Object} node
 * @returns {Object} node with appended yoga node
 */
var createYogaNodes = function createYogaNodes(page, fontStore) {
  return function (node) {
    var yogaNode = Yoga__default["default"].Node.createWithConfig(YOGA_CONFIG);
    var result = Object.assign({}, node, {
      yogaNode: yogaNode
    });
    setYogaValues(result);
    if (isLayoutElement(node) && node.children) {
      var resolveChild = fns.compose(insertYogaNodes(yogaNode), createYogaNodes(page, fontStore));
      result.children = node.children.map(resolveChild);
    }
    setMeasureFunc(result, page, fontStore);
    return result;
  };
};

/**
 * Performs yoga calculation
 *
 * @param {Object} node
 * @returns {Object} node
 */
var calculateLayout = function calculateLayout(page) {
  page.yogaNode.calculateLayout();
  return page;
};

/**
 * Saves Yoga layout result into 'box' attribute of node
 *
 * @param {Object} node
 * @returns {Object} node with box data
 */
var persistDimensions = function persistDimensions(node) {
  if (isTextInstance$1(node)) return node;
  var box = Object.assign(getPadding(node), getMargin(node), getBorderWidth(node), getPosition(node), getDimension(node));
  var newNode = Object.assign({}, node, {
    box: box
  });
  if (!node.children) return newNode;
  var children = node.children.map(persistDimensions);
  return Object.assign({}, newNode, {
    children: children
  });
};

/**
 * Removes yoga node from document tree
 *
 * @param {Object} node
 * @returns {Object} node without yoga node
 */
var destroyYogaNodes = function destroyYogaNodes(node) {
  var newNode = Object.assign({}, node);
  delete newNode.yogaNode;
  if (!node.children) return newNode;
  var children = node.children.map(destroyYogaNodes);
  return Object.assign({}, newNode, {
    children: children
  });
};

/**
 * Free yoga node from document tree
 *
 * @param {Object} node
 * @returns {Object} node without yoga node
 */
var freeYogaNodes = function freeYogaNodes(node) {
  if (node.yogaNode) node.yogaNode.freeRecursive();
  return node;
};

/**
 * Calculates page object layout using Yoga.
 * Takes node values from 'box' and 'style' attributes, and persist them back into 'box'
 * Destroy yoga values at the end.
 *
 * @param {Object} page object
 * @returns {Object} page object with correct 'box' layout attributes
 */
var resolvePageDimensions = function resolvePageDimensions(page, fontStore) {
  if (fns.isNil(page)) return null;
  return fns.compose(destroyYogaNodes, freeYogaNodes, persistDimensions, calculateLayout, createYogaNodes(page, fontStore))(page);
};

/**
 * Calculates root object layout using Yoga.
 *
 * @param {Object} root object
 * @returns {Object} root object with correct 'box' layout attributes
 */
var resolveDimensions = function resolveDimensions(node, fontStore) {
  if (!node.children) return node;
  var resolveChild = function resolveChild(child) {
    return resolvePageDimensions(child, fontStore);
  };
  var children = node.children.map(resolveChild);
  return Object.assign({}, node, {
    children: children
  });
};

var isText$1 = function isText(node) {
  return node.type === P__namespace.Text;
};

// Prevent splitting elements by low decimal numbers
var SAFTY_THRESHOLD = 0.001;
var assingChildren = function assingChildren(children, node) {
  return Object.assign({}, node, {
    children: children
  });
};
var getTop = function getTop(node) {
  var _node$box;
  return ((_node$box = node.box) === null || _node$box === void 0 ? void 0 : _node$box.top) || 0;
};
var allFixed = function allFixed(nodes) {
  return nodes.every(isFixed);
};
var isDynamic = function isDynamic(node) {
  var _node$props;
  return !fns.isNil((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.render);
};
var relayoutPage = fns.compose(resolveTextLayout, resolveInheritance, resolvePageDimensions);
var warnUnavailableSpace = function warnUnavailableSpace(node) {
  console.warn("Node of type " + node.type + " can't wrap between pages and it's bigger than available page height");
};
var splitNodes = function splitNodes(height, contentArea, nodes) {
  var currentChildren = [];
  var nextChildren = [];
  for (var i = 0; i < nodes.length; i += 1) {
    var child = nodes[i];
    var futureNodes = nodes.slice(i + 1);
    var futureFixedNodes = futureNodes.filter(isFixed);
    var nodeTop = getTop(child);
    var nodeHeight = child.box.height;
    var isOutside = height <= nodeTop;
    var shouldBreak$1 = shouldBreak(child, futureNodes, height);
    var shouldSplit = height + SAFTY_THRESHOLD < nodeTop + nodeHeight;
    var canWrap = getWrap(child);
    var fitsInsidePage = nodeHeight <= contentArea;
    if (isFixed(child)) {
      nextChildren.push(child);
      currentChildren.push(child);
      continue;
    }
    if (isOutside) {
      var box = Object.assign({}, child.box, {
        top: child.box.top - height
      });
      var next = Object.assign({}, child, {
        box: box
      });
      nextChildren.push(next);
      continue;
    }
    if (!fitsInsidePage && !canWrap) {
      currentChildren.push(child);
      nextChildren.push.apply(nextChildren, futureNodes);
      warnUnavailableSpace(child);
      break;
    }
    if (shouldBreak$1) {
      var _box = Object.assign({}, child.box, {
        top: child.box.top - height
      });
      var props = Object.assign({}, child.props, {
        wrap: true,
        break: false
      });
      var _next = Object.assign({}, child, {
        box: _box,
        props: props
      });
      currentChildren.push.apply(currentChildren, futureFixedNodes);
      nextChildren.push.apply(nextChildren, [_next].concat(futureNodes));
      break;
    }
    if (shouldSplit) {
      var _split = split(child, height, contentArea),
        currentChild = _split[0],
        nextChild = _split[1];

      // All children are moved to the next page, it doesn't make sense to show the parent on the current page
      if (child.children.length > 0 && currentChild.children.length === 0) {
        var _box2 = Object.assign({}, child.box, {
          top: child.box.top - height
        });
        var _next2 = Object.assign({}, child, {
          box: _box2
        });
        currentChildren.push.apply(currentChildren, futureFixedNodes);
        nextChildren.push.apply(nextChildren, [_next2].concat(futureNodes));
        break;
      }
      if (currentChild) currentChildren.push(currentChild);
      if (nextChild) nextChildren.push(nextChild);
      continue;
    }
    currentChildren.push(child);
  }
  return [currentChildren, nextChildren];
};
var splitChildren = function splitChildren(height, contentArea, node) {
  var children = node.children || [];
  var availableHeight = height - getTop(node);
  return splitNodes(availableHeight, contentArea, children);
};
var splitView = function splitView(node, height, contentArea) {
  var _splitNode = splitNode(node, height),
    currentNode = _splitNode[0],
    nextNode = _splitNode[1];
  var _splitChildren = splitChildren(height, contentArea, node),
    currentChilds = _splitChildren[0],
    nextChildren = _splitChildren[1];
  return [assingChildren(currentChilds, currentNode), assingChildren(nextChildren, nextNode)];
};
var split = function split(node, height, contentArea) {
  return isText$1(node) ? splitText(node, height) : splitView(node, height, contentArea);
};
var shouldResolveDynamicNodes = function shouldResolveDynamicNodes(node) {
  var children = node.children || [];
  return isDynamic(node) || children.some(shouldResolveDynamicNodes);
};
var resolveDynamicNodes = function resolveDynamicNodes(props, node) {
  var isNodeDynamic = isDynamic(node);

  // Call render prop on dynamic nodes and append result to children
  var resolveChildren = function resolveChildren(children) {
    if (children === void 0) {
      children = [];
    }
    if (isNodeDynamic) {
      var res = node.props.render(props);
      return createInstances(res).filter(Boolean).map(function (n) {
        return resolveDynamicNodes(props, n);
      });
    }
    return children.map(function (c) {
      return resolveDynamicNodes(props, c);
    });
  };

  // We reset dynamic text box so it can be computed again later on
  var resetHeight = isNodeDynamic && isText$1(node);
  var box = resetHeight ? _extends__default["default"]({}, node.box, {
    height: 0
  }) : node.box;
  var children = resolveChildren(node.children);
  var lines = isNodeDynamic ? null : node.lines;
  return Object.assign({}, node, {
    box: box,
    lines: lines,
    children: children
  });
};
var resolveDynamicPage = function resolveDynamicPage(props, page, fontStore) {
  if (shouldResolveDynamicNodes(page)) {
    var resolvedPage = resolveDynamicNodes(props, page);
    return relayoutPage(resolvedPage, fontStore);
  }
  return page;
};
var splitPage = function splitPage(page, pageNumber, fontStore) {
  var wrapArea = getWrapArea(page);
  var contentArea = getContentArea(page);
  var dynamicPage = resolveDynamicPage({
    pageNumber: pageNumber
  }, page, fontStore);
  var height = page.style.height;
  var _splitNodes = splitNodes(wrapArea, contentArea, dynamicPage.children),
    currentChilds = _splitNodes[0],
    nextChilds = _splitNodes[1];
  var relayout = function relayout(node) {
    return relayoutPage(node, fontStore);
  };
  var currentBox = _extends__default["default"]({}, page.box, {
    height: height
  });
  var currentPage = relayout(Object.assign({}, page, {
    box: currentBox,
    children: currentChilds
  }));
  if (nextChilds.length === 0 || allFixed(nextChilds)) return [currentPage, null];
  var nextBox = fns.omit('height', page.box);
  var nextProps = fns.omit('bookmark', page.props);
  var nextPage = relayout(Object.assign({}, page, {
    props: nextProps,
    box: nextBox,
    children: nextChilds
  }));
  return [currentPage, nextPage];
};
var resolvePageIndices = function resolvePageIndices(fontStore, page, pageNumber, pages) {
  var totalPages = pages.length;
  var props = {
    totalPages: totalPages,
    pageNumber: pageNumber + 1,
    subPageNumber: page.subPageNumber + 1,
    subPageTotalPages: page.subPageTotalPages
  };
  return resolveDynamicPage(props, page, fontStore);
};
var assocSubPageData = function assocSubPageData(subpages) {
  return subpages.map(function (page, i) {
    return _extends__default["default"]({}, page, {
      subPageNumber: i,
      subPageTotalPages: subpages.length
    });
  });
};
var dissocSubPageData = function dissocSubPageData(page) {
  return fns.omit(['subPageNumber', 'subPageTotalPages'], page);
};
var paginate = function paginate(page, pageNumber, fontStore) {
  var _page$props;
  if (!page) return [];
  if (((_page$props = page.props) === null || _page$props === void 0 ? void 0 : _page$props.wrap) === false) return [page];
  var splittedPage = splitPage(page, pageNumber, fontStore);
  var pages = [splittedPage[0]];
  var nextPage = splittedPage[1];
  while (nextPage !== null) {
    splittedPage = splitPage(nextPage, pageNumber + pages.length, fontStore);
    pages.push(splittedPage[0]);
    nextPage = splittedPage[1];
  }
  return pages;
};

/**
 * Performs pagination. This is the step responsible of breaking the whole document
 * into pages following pagiation rules, such as `fixed`, `break` and dynamic nodes.
 *
 * @param {Object} node
 * @param {Object} fontStore font store
 * @returns {Object} layout node
 */
var resolvePagination = function resolvePagination(doc, fontStore) {
  var pages = [];
  var pageNumber = 1;
  for (var i = 0; i < doc.children.length; i += 1) {
    var page = doc.children[i];
    var subpages = paginate(page, pageNumber, fontStore);
    subpages = assocSubPageData(subpages);
    pageNumber += subpages.length;
    pages = pages.concat(subpages);
  }
  pages = pages.map(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return dissocSubPageData(resolvePageIndices.apply(void 0, [fontStore].concat(args)));
  });
  return assingChildren(pages, doc);
};

/*
 * Translates page percentage horizontal paddings in fixed ones
 *
 * @param {Object} page container
 * @param {String} padding value
 * @returns {Object} translated padding value
 */
var resolvePageHorizontalPadding = function resolvePageHorizontalPadding(container) {
  return function (value) {
    var match = fns.matchPercent(value);
    return match ? match.percent * container.width : value;
  };
};

/**
 * Translates page percentage vertical paddings in fixed ones
 *
 * @param {Object} page container
 * @param {String} padding value
 * @returns {Object} translated padding value
 */
var resolvePageVerticalPadding = function resolvePageVerticalPadding(container) {
  return function (value) {
    var match = fns.matchPercent(value);
    return match ? match.percent * container.height : value;
  };
};

/**
 * Translates page percentage paddings in fixed ones
 *
 * @param {Object} page
 * @returns {Object} page with fixed paddings
 */
var resolvePagePaddings = function resolvePagePaddings(page) {
  var container = page.style;
  var style = fns.evolve({
    paddingTop: resolvePageVerticalPadding(container),
    paddingLeft: resolvePageHorizontalPadding(container),
    paddingRight: resolvePageHorizontalPadding(container),
    paddingBottom: resolvePageVerticalPadding(container)
  }, page.style);
  return Object.assign({}, page, {
    style: style
  });
};

/**
 * Translates all pages percentage paddings in fixed ones
 * This has to be computed from pages calculated size and not by Yoga
 * because at this point we didn't performed pagination yet.
 *
 * @param {Object} document root
 * @returns {Object} document root with translated page paddings
 */
var resolvePagesPaddings = function resolvePagesPaddings(root) {
  if (!root.children) return root;
  var children = root.children.map(resolvePagePaddings);
  return Object.assign({}, root, {
    children: children
  });
};

/**
 *
 * @param {Object} container width and height
 * @param {String | Number} value border radius value
 * @returns {Number} fixed border radius value
 */
var resolveRadius = function resolveRadius(container) {
  return function (value) {
    if (!value) return undefined;
    var match = fns.matchPercent(value);
    return match ? match.percent * Math.min(container.width, container.height) : value;
  };
};

/**
 * Transforms percent border radius into fixed values
 *
 * @param {Object} node
 * @returns {Object} node
 */
var resolvePercentRadius = function resolvePercentRadius(node) {
  var style = fns.evolve({
    borderTopLeftRadius: resolveRadius(node.box),
    borderTopRightRadius: resolveRadius(node.box),
    borderBottomRightRadius: resolveRadius(node.box),
    borderBottomLeftRadius: resolveRadius(node.box)
  }, node.style || {});
  var newNode = Object.assign({}, node, {
    style: style
  });
  if (!node.children) return newNode;
  var children = node.children.map(resolvePercentRadius);
  return Object.assign({}, newNode, {
    children: children
  });
};

/**
 * Transform percent height into fixed
 *
 * @param {String | number} height
 * @return {number} height
 */
var transformHeight = function transformHeight(pageArea, height) {
  var match = fns.matchPercent(height);
  return match ? match.percent * pageArea : height;
};

/**
 * Get page area (height minus paddings)
 *
 * @param {Object} page
 * @return {number} page area
 */
var getPageArea = function getPageArea(page) {
  var _page$style, _page$style2;
  var pageHeight = page.style.height;
  var pagePaddingTop = ((_page$style = page.style) === null || _page$style === void 0 ? void 0 : _page$style.paddingTop) || 0;
  var pagePaddingBottom = ((_page$style2 = page.style) === null || _page$style2 === void 0 ? void 0 : _page$style2.paddingBottom) || 0;
  return pageHeight - pagePaddingTop - pagePaddingBottom;
};

/**
 * Transform node percent height to fixed
 *
 * @param {Object} page
 * @param {Object} node
 * @return {Object} transformed node
 */
var resolveNodePercentHeight = function resolveNodePercentHeight(page, node) {
  var _page$style3, _node$style;
  if (fns.isNil((_page$style3 = page.style) === null || _page$style3 === void 0 ? void 0 : _page$style3.height)) return node;
  if (fns.isNil((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.height)) return node;
  var pageArea = getPageArea(page);
  var height = transformHeight(pageArea, node.style.height);
  var style = Object.assign({}, node.style, {
    height: height
  });
  return Object.assign({}, node, {
    style: style
  });
};

/**
 * Transform page immediate children with percent height to fixed
 *
 * @param {Object} page
 * @return {Object} transformed page
 */
var resolvePagePercentHeight = function resolvePagePercentHeight(page) {
  if (!page.children) return page;
  var resolveChild = function resolveChild(child) {
    return resolveNodePercentHeight(page, child);
  };
  var children = page.children.map(resolveChild);
  return Object.assign({}, page, {
    children: children
  });
};

/**
 * Transform all page immediate children with percent height to fixed.
 * This is needed for computing correct dimensions on pre-pagination layout.
 *
 * @param {Object} document root
 * @return {Object} transformed document root
 */
var resolvePercentHeight = function resolvePercentHeight(root) {
  if (!root.children) return root;
  var children = root.children.map(resolvePagePercentHeight);
  return Object.assign({}, root, {
    children: children
  });
};

var isType = function isType(type) {
  return function (node) {
    return node.type === type;
  };
};
var isLink = isType(P__namespace.Link);
var isText = isType(P__namespace.Text);
var isTextInstance = isType(P__namespace.TextInstance);

/**
 * Checks if node has render prop
 *
 * @param {Object} node
 * @returns {Boolean} has render prop?
 */
var hasRenderProp = function hasRenderProp(node) {
  var _node$props;
  return !!((_node$props = node.props) !== null && _node$props !== void 0 && _node$props.render);
};

/**
 * Checks if node is text type (Text or TextInstance)
 *
 * @param {Object} node
 * @returns {Boolean} are all children text instances?
 */
var isTextType = function isTextType(node) {
  return isText(node) || isTextInstance(node);
};

/**
 * Checks if is tet link that needs to be wrapped in Text
 *
 * @param {Object} node
 * @returns {Boolean} are all children text instances?
 */
var isTextLink = function isTextLink(node) {
  var children = node.children || [];

  // Text string inside a Link
  if (children.every(isTextInstance)) return true;

  // Text node inside a Link
  if (children.every(isText)) return false;
  return children.every(isTextType);
};

/**
 * Wraps node children inside Text node
 *
 * @param {Object} node
 * @returns {Boolean} node with intermediate Text child
 */
var wrapText = function wrapText(node) {
  var textElement = {
    type: P__namespace.Text,
    props: {},
    style: {},
    box: {},
    children: node.children
  };
  return Object.assign({}, node, {
    children: [textElement]
  });
};
var transformLink = function transformLink(node) {
  if (!isLink(node)) return node;

  // If has render prop substitute the instance by a Text, that will
  // ultimately render the inline Link via the textkit PDF renderer.
  if (hasRenderProp(node)) return Object.assign({}, node, {
    type: P__namespace.Text
  });

  // If is a text link (either contains Text or TextInstalce), wrap it
  // inside a Text element so styles are applied correctly

  if (isTextLink(node)) return wrapText(node);
  return node;
};

/**
 * Transforms Link layout to correctly render text and dynamic rendered links
 *
 * @param {Object} node
 * @returns {Object} node with link substitution
 */
var resolveLinkSubstitution = function resolveLinkSubstitution(node) {
  if (!node.children) return node;
  var resolveChild = fns.compose(transformLink, resolveLinkSubstitution);
  var children = node.children.map(resolveChild);
  return Object.assign({}, node, {
    children: children
  });
};

var layout = fns.asyncCompose(resolveZIndex, resolveOrigin, resolvePagination, resolveTextLayout, resolvePercentRadius, resolveDimensions, resolveSvg, resolveAssets, resolveInheritance, resolvePercentHeight, resolvePagesPaddings, resolveStyles, resolveLinkSubstitution, resolveBookmarks, resolvePageSizes);

exports["default"] = layout;


/***/ }),

/***/ 36756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _inheritsLoose = __webpack_require__(1847);
var stream = __webpack_require__(12781);
var _assertThisInitialized = __webpack_require__(49687);
var zlib = __webpack_require__(59796);
var _createForOfIteratorHelperLoose = __webpack_require__(12631);
var _createClass = __webpack_require__(43977);
var MD5 = __webpack_require__(5262);
var fontkit = __webpack_require__(26489);
var fs = __webpack_require__(57147);
var PNG = __webpack_require__(32914);
var _extends = __webpack_require__(43259);
var CryptoJS = __webpack_require__(35879);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _inheritsLoose__default = /*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);
var stream__default = /*#__PURE__*/_interopDefaultLegacy(stream);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
var _createForOfIteratorHelperLoose__default = /*#__PURE__*/_interopDefaultLegacy(_createForOfIteratorHelperLoose);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var MD5__default = /*#__PURE__*/_interopDefaultLegacy(MD5);
var fontkit__namespace = /*#__PURE__*/_interopNamespace(fontkit);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var PNG__default = /*#__PURE__*/_interopDefaultLegacy(PNG);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var CryptoJS__namespace = /*#__PURE__*/_interopNamespace(CryptoJS);

var PDFReference = /*#__PURE__*/function (_stream$Writable) {
  _inheritsLoose__default["default"](PDFReference, _stream$Writable);
  function PDFReference(document, id, data) {
    var _this;
    _this = _stream$Writable.call(this, {
      decodeStrings: false
    }) || this;
    _this.finalize = _this.finalize.bind(_assertThisInitialized__default["default"](_this));
    _this.document = document;
    _this.id = id;
    if (data == null) {
      data = {};
    }
    _this.data = data;
    _this.gen = 0;
    _this.deflate = null;
    _this.compress = _this.document.compress && !_this.data.Filter;
    _this.uncompressedLength = 0;
    _this.chunks = [];
    return _this;
  }
  var _proto = PDFReference.prototype;
  _proto.initDeflate = function initDeflate() {
    var _this2 = this;
    this.data.Filter = 'FlateDecode';
    this.deflate = zlib__default["default"].createDeflate();
    this.deflate.on('data', function (chunk) {
      _this2.chunks.push(chunk);
      return _this2.data.Length += chunk.length;
    });
    return this.deflate.on('end', this.finalize);
  };
  _proto._write = function _write(chunk, encoding, callback) {
    if (!(chunk instanceof Uint8Array)) {
      chunk = Buffer.from(chunk + '\n', 'binary');
    }
    this.uncompressedLength += chunk.length;
    if (this.data.Length == null) {
      this.data.Length = 0;
    }
    if (this.compress) {
      if (!this.deflate) {
        this.initDeflate();
      }
      this.deflate.write(chunk);
    } else {
      this.chunks.push(chunk);
      this.data.Length += chunk.length;
    }
    return callback();
  };
  _proto.end = function end() {
    _stream$Writable.prototype.end.apply(this, arguments);
    if (this.deflate) {
      return this.deflate.end();
    }
    return this.finalize();
  };
  _proto.finalize = function finalize() {
    this.offset = this.document._offset;
    this.document._write(this.id + " " + this.gen + " obj");
    this.document._write(PDFObject$1.convert(this.data));
    if (this.chunks.length) {
      this.document._write('stream');
      for (var _i = 0, _Array$from = Array.from(this.chunks); _i < _Array$from.length; _i++) {
        var chunk = _Array$from[_i];
        this.document._write(chunk);
      }
      this.chunks.length = 0; // free up memory
      this.document._write('\nendstream');
    }
    this.document._write('endobj');
    return this.document._refEnd(this);
  };
  _proto.toString = function toString() {
    return this.id + " " + this.gen + " R";
  };
  return PDFReference;
}(stream__default["default"].Writable);

var PDFTree = /*#__PURE__*/function () {
  function PDFTree(options) {
    if (options === void 0) {
      options = {};
    }
    this._items = {};
    // disable /Limits output for this tree
    this.limits = typeof options.limits === 'boolean' ? options.limits : true;
  }
  var _proto = PDFTree.prototype;
  _proto.add = function add(key, val) {
    return this._items[key] = val;
  };
  _proto.get = function get(key) {
    return this._items[key];
  };
  _proto.toString = function toString() {
    var _this = this;
    // Needs to be sorted by key
    var sortedKeys = Object.keys(this._items).sort(function (a, b) {
      return _this._compareKeys(a, b);
    });
    var out = ['<<'];
    if (this.limits && sortedKeys.length > 1) {
      var first = sortedKeys[0];
      var last = sortedKeys[sortedKeys.length - 1];
      out.push("  /Limits " + PDFObject$1.convert([this._dataForKey(first), this._dataForKey(last)]));
    }
    out.push("  /" + this._keysName() + " [");
    for (var _iterator = _createForOfIteratorHelperLoose__default["default"](sortedKeys), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      out.push("    " + PDFObject$1.convert(this._dataForKey(key)) + " " + PDFObject$1.convert(this._items[key]));
    }
    out.push(']');
    out.push('>>');
    return out.join('\n');
  };
  _proto._compareKeys = function _compareKeys() {
    throw new Error('Must be implemented by subclasses');
  };
  _proto._keysName = function _keysName() {
    throw new Error('Must be implemented by subclasses');
  };
  _proto._dataForKey = function _dataForKey() {
    throw new Error('Must be implemented by subclasses');
  };
  return PDFTree;
}();

var PDFNameTree = /*#__PURE__*/function (_PDFTree) {
  _inheritsLoose__default["default"](PDFNameTree, _PDFTree);
  function PDFNameTree() {
    return _PDFTree.apply(this, arguments) || this;
  }
  var _proto = PDFNameTree.prototype;
  _proto._compareKeys = function _compareKeys(a, b) {
    return a.localeCompare(b);
  };
  _proto._keysName = function _keysName() {
    return 'Names';
  };
  _proto._dataForKey = function _dataForKey(k) {
    return new String(k);
  };
  return PDFNameTree;
}(PDFTree);

var escapableRe = /[\n\r\t\b\f\(\)\\]/g;
var escapable = {
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\b': '\\b',
  '\f': '\\f',
  '\\': '\\\\',
  '(': '\\(',
  ')': '\\)'
};
var pad = function pad(str, length) {
  return (Array(length + 1).join('0') + str).slice(-length);
};

// Convert little endian UTF-16 to big endian
var swapBytes = function swapBytes(buff) {
  var l = buff.length;
  if (l & 0x01) {
    throw new Error('Buffer length must be even');
  } else {
    for (var i = 0, end = l - 1; i < end; i += 2) {
      var a = buff[i];
      buff[i] = buff[i + 1];
      buff[i + 1] = a;
    }
  }
  return buff;
};
var PDFObject = /*#__PURE__*/function () {
  function PDFObject() {}
  PDFObject.convert = function convert(object) {
    // String literals are converted to the PDF name type
    if (typeof object === 'string') {
      return "/" + object;
    }

    // String objects are converted to PDF strings (UTF-16)
    if (object instanceof String) {
      var string = object;
      // Detect if this is a unicode string
      var isUnicode = false;
      for (var i = 0, end = string.length; i < end; i++) {
        if (string.charCodeAt(i) > 0x7f) {
          isUnicode = true;
          break;
        }
      }

      // If so, encode it as big endian UTF-16
      if (isUnicode) {
        string = swapBytes(Buffer.from("\uFEFF" + string, 'utf16le')).toString('binary');
      }

      // Escape characters as required by the spec
      string = string.replace(escapableRe, function (c) {
        return escapable[c];
      });
      return "(" + string + ")";

      // Buffers are converted to PDF hex strings
    }

    if (Buffer.isBuffer(object)) {
      return "<" + object.toString('hex') + ">";
    }
    if (object instanceof PDFReference || object instanceof PDFNameTree) {
      return object.toString();
    }
    if (object instanceof Date) {
      return "(D:" + pad(object.getUTCFullYear(), 4) + pad(object.getUTCMonth() + 1, 2) + pad(object.getUTCDate(), 2) + pad(object.getUTCHours(), 2) + pad(object.getUTCMinutes(), 2) + pad(object.getUTCSeconds(), 2) + 'Z)';
    }
    if (Array.isArray(object)) {
      var items = Array.from(object).map(function (e) {
        return PDFObject.convert(e);
      }).join(' ');
      return "[" + items + "]";
    }
    if ({}.toString.call(object) === '[object Object]') {
      var out = ['<<'];
      for (var key in object) {
        var val = object[key];
        out.push("/" + key + " " + PDFObject.convert(val));
      }
      out.push('>>');
      return out.join('\n');
    }
    if (typeof object === 'number') {
      return PDFObject.number(object);
    }
    return "" + object;
  };
  PDFObject.number = function number(n) {
    if (n > -1e21 && n < 1e21) {
      return Math.round(n * 1e6) / 1e6;
    }
    throw new Error("unsupported number: " + n);
  };
  return PDFObject;
}();
var PDFObject$1 = PDFObject;

var DEFAULT_MARGINS = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
var SIZES = {
  '4A0': [4767.87, 6740.79],
  '2A0': [3370.39, 4767.87],
  A0: [2383.94, 3370.39],
  A1: [1683.78, 2383.94],
  A2: [1190.55, 1683.78],
  A3: [841.89, 1190.55],
  A4: [595.28, 841.89],
  A5: [419.53, 595.28],
  A6: [297.64, 419.53],
  A7: [209.76, 297.64],
  A8: [147.4, 209.76],
  A9: [104.88, 147.4],
  A10: [73.7, 104.88],
  B0: [2834.65, 4008.19],
  B1: [2004.09, 2834.65],
  B2: [1417.32, 2004.09],
  B3: [1000.63, 1417.32],
  B4: [708.66, 1000.63],
  B5: [498.9, 708.66],
  B6: [354.33, 498.9],
  B7: [249.45, 354.33],
  B8: [175.75, 249.45],
  B9: [124.72, 175.75],
  B10: [87.87, 124.72],
  C0: [2599.37, 3676.54],
  C1: [1836.85, 2599.37],
  C2: [1298.27, 1836.85],
  C3: [918.43, 1298.27],
  C4: [649.13, 918.43],
  C5: [459.21, 649.13],
  C6: [323.15, 459.21],
  C7: [229.61, 323.15],
  C8: [161.57, 229.61],
  C9: [113.39, 161.57],
  C10: [79.37, 113.39],
  RA0: [2437.8, 3458.27],
  RA1: [1729.13, 2437.8],
  RA2: [1218.9, 1729.13],
  RA3: [864.57, 1218.9],
  RA4: [609.45, 864.57],
  SRA0: [2551.18, 3628.35],
  SRA1: [1814.17, 2551.18],
  SRA2: [1275.59, 1814.17],
  SRA3: [907.09, 1275.59],
  SRA4: [637.8, 907.09],
  EXECUTIVE: [521.86, 756.0],
  FOLIO: [612.0, 936.0],
  LEGAL: [612.0, 1008.0],
  LETTER: [612.0, 792.0],
  TABLOID: [792.0, 1224.0]
};
var PDFPage = /*#__PURE__*/function () {
  function PDFPage(document, options) {
    if (options === void 0) {
      options = {};
    }
    this.document = document;
    this.size = options.size || 'letter';
    this.layout = options.layout || 'portrait';
    this.userUnit = options.userUnit || 1.0;
    this.margins = DEFAULT_MARGINS;

    // calculate page dimensions
    var dimensions = Array.isArray(this.size) ? this.size : SIZES[this.size.toUpperCase()];
    this.width = dimensions[this.layout === 'portrait' ? 0 : 1];
    this.height = dimensions[this.layout === 'portrait' ? 1 : 0];
    this.content = this.document.ref();

    // Initialize the Font, XObject, and ExtGState dictionaries
    this.resources = this.document.ref({
      ProcSet: ['PDF', 'Text', 'ImageB', 'ImageC', 'ImageI']
    });

    // The page dictionary
    this.dictionary = this.document.ref({
      Type: 'Page',
      Parent: this.document._root.data.Pages,
      MediaBox: [0, 0, this.width, this.height],
      Contents: this.content,
      Resources: this.resources,
      UserUnit: this.userUnit
    });
  }

  // Lazily create these objects
  var _proto = PDFPage.prototype;
  _proto.maxY = function maxY() {
    return this.height;
  };
  _proto.write = function write(chunk) {
    return this.content.write(chunk);
  };
  _proto.end = function end() {
    this.dictionary.end();
    this.resources.end();
    return this.content.end();
  };
  _createClass__default["default"](PDFPage, [{
    key: "fonts",
    get: function get() {
      var data = this.resources.data;
      return data.Font != null ? data.Font : data.Font = {};
    }
  }, {
    key: "xobjects",
    get: function get() {
      var data = this.resources.data;
      return data.XObject != null ? data.XObject : data.XObject = {};
    }
  }, {
    key: "ext_gstates",
    get: function get() {
      var data = this.resources.data;
      return data.ExtGState != null ? data.ExtGState : data.ExtGState = {};
    }
  }, {
    key: "patterns",
    get: function get() {
      var data = this.resources.data;
      return data.Pattern != null ? data.Pattern : data.Pattern = {};
    }
  }, {
    key: "colorSpaces",
    get: function get() {
      var data = this.resources.data;
      return data.ColorSpace || (data.ColorSpace = {});
    }
  }, {
    key: "annotations",
    get: function get() {
      var data = this.dictionary.data;
      return data.Annots != null ? data.Annots : data.Annots = [];
    }
  }, {
    key: "structParentTreeKey",
    get: function get() {
      var data = this.dictionary.data;
      return data.StructParents != null ? data.StructParents : data.StructParents = this.document.createStructParentTreeNextKey();
    }
  }]);
  return PDFPage;
}();

/* eslint-disable no-prototype-builtins */
var wordArrayToBuffer = function wordArrayToBuffer(wordArray) {
  var byteArray = [];
  for (var i = 0; i < wordArray.sigBytes; i++) {
    byteArray.push(wordArray.words[Math.floor(i / 4)] >> 8 * (3 - i % 4) & 0xff);
  }
  return Buffer.from(byteArray);
};
var PDFSecurity = /*#__PURE__*/function () {
  function PDFSecurity() {}
  PDFSecurity.generateFileID = function generateFileID(info) {
    if (info === void 0) {
      info = {};
    }
    var infoStr = info.CreationDate.getTime() + "\n";
    for (var key in info) {
      if (!info.hasOwnProperty(key)) continue;
      infoStr += key + ": " + info[key].valueOf() + "\n";
    }
    return wordArrayToBuffer(MD5__default["default"](infoStr));
  };
  return PDFSecurity;
}();

var number$2 = PDFObject$1.number;
var PDFGradient$1 = /*#__PURE__*/function () {
  function PDFGradient(doc) {
    this.doc = doc;
    this.stops = [];
    this.embedded = false;
    this.transform = [1, 0, 0, 1, 0, 0];
  }
  var _proto = PDFGradient.prototype;
  _proto.stop = function stop(pos, color, opacity) {
    if (opacity == null) {
      opacity = 1;
    }
    color = this.doc._normalizeColor(color);
    if (this.stops.length === 0) {
      if (color.length === 3) {
        this._colorSpace = 'DeviceRGB';
      } else if (color.length === 4) {
        this._colorSpace = 'DeviceCMYK';
      } else if (color.length === 1) {
        this._colorSpace = 'DeviceGray';
      } else {
        throw new Error('Unknown color space');
      }
    } else if (this._colorSpace === 'DeviceRGB' && color.length !== 3 || this._colorSpace === 'DeviceCMYK' && color.length !== 4 || this._colorSpace === 'DeviceGray' && color.length !== 1) {
      throw new Error('All gradient stops must use the same color space');
    }
    opacity = Math.max(0, Math.min(1, opacity));
    this.stops.push([pos, color, opacity]);
    return this;
  };
  _proto.setTransform = function setTransform(m11, m12, m21, m22, dx, dy) {
    this.transform = [m11, m12, m21, m22, dx, dy];
    return this;
  };
  _proto.embed = function embed(m) {
    var fn;
    var stopsLength = this.stops.length;
    if (stopsLength === 0) {
      return;
    }
    this.embedded = true;
    this.matrix = m;

    // if the last stop comes before 100%, add a copy at 100%
    var last = this.stops[stopsLength - 1];
    if (last[0] < 1) {
      this.stops.push([1, last[1], last[2]]);
    }
    var bounds = [];
    var encode = [];
    var stops = [];
    for (var i = 0; i < stopsLength - 1; i++) {
      encode.push(0, 1);
      if (i + 2 !== stopsLength) {
        bounds.push(this.stops[i + 1][0]);
      }
      fn = this.doc.ref({
        FunctionType: 2,
        Domain: [0, 1],
        C0: this.stops[i + 0][1],
        C1: this.stops[i + 1][1],
        N: 1
      });
      stops.push(fn);
      fn.end();
    }

    // if there are only two stops, we don't need a stitching function
    if (stopsLength === 1) {
      fn = stops[0];
    } else {
      fn = this.doc.ref({
        FunctionType: 3,
        // stitching function
        Domain: [0, 1],
        Functions: stops,
        Bounds: bounds,
        Encode: encode
      });
      fn.end();
    }
    this.id = "Sh" + ++this.doc._gradCount;
    var shader = this.shader(fn);
    shader.end();
    var pattern = this.doc.ref({
      Type: 'Pattern',
      PatternType: 2,
      Shading: shader,
      Matrix: this.matrix.map(number$2)
    });
    pattern.end();
    if (this.stops.some(function (stop) {
      return stop[2] < 1;
    })) {
      var grad = this.opacityGradient();
      grad._colorSpace = 'DeviceGray';
      for (var _iterator = _createForOfIteratorHelperLoose__default["default"](this.stops), _step; !(_step = _iterator()).done;) {
        var stop = _step.value;
        grad.stop(stop[0], [stop[2]]);
      }
      grad = grad.embed(this.matrix);
      var pageBBox = [0, 0, this.doc.page.width, this.doc.page.height];
      var form = this.doc.ref({
        Type: 'XObject',
        Subtype: 'Form',
        FormType: 1,
        BBox: pageBBox,
        Group: {
          Type: 'Group',
          S: 'Transparency',
          CS: 'DeviceGray'
        },
        Resources: {
          ProcSet: ['PDF', 'Text', 'ImageB', 'ImageC', 'ImageI'],
          Pattern: {
            Sh1: grad
          }
        }
      });
      form.write('/Pattern cs /Sh1 scn');
      form.end(pageBBox.join(' ') + " re f");
      var gstate = this.doc.ref({
        Type: 'ExtGState',
        SMask: {
          Type: 'Mask',
          S: 'Luminosity',
          G: form
        }
      });
      gstate.end();
      var opacityPattern = this.doc.ref({
        Type: 'Pattern',
        PatternType: 1,
        PaintType: 1,
        TilingType: 2,
        BBox: pageBBox,
        XStep: pageBBox[2],
        YStep: pageBBox[3],
        Resources: {
          ProcSet: ['PDF', 'Text', 'ImageB', 'ImageC', 'ImageI'],
          Pattern: {
            Sh1: pattern
          },
          ExtGState: {
            Gs1: gstate
          }
        }
      });
      opacityPattern.write('/Gs1 gs /Pattern cs /Sh1 scn');
      opacityPattern.end(pageBBox.join(' ') + " re f");
      this.doc.page.patterns[this.id] = opacityPattern;
    } else {
      this.doc.page.patterns[this.id] = pattern;
    }
    return pattern;
  };
  _proto.apply = function apply(op) {
    // apply gradient transform to existing document ctm
    var _this$doc$_ctm = this.doc._ctm,
      m0 = _this$doc$_ctm[0],
      m1 = _this$doc$_ctm[1],
      m2 = _this$doc$_ctm[2],
      m3 = _this$doc$_ctm[3],
      m4 = _this$doc$_ctm[4],
      m5 = _this$doc$_ctm[5];
    var _this$transform = this.transform,
      m11 = _this$transform[0],
      m12 = _this$transform[1],
      m21 = _this$transform[2],
      m22 = _this$transform[3],
      dx = _this$transform[4],
      dy = _this$transform[5];
    var m = [m0 * m11 + m2 * m12, m1 * m11 + m3 * m12, m0 * m21 + m2 * m22, m1 * m21 + m3 * m22, m0 * dx + m2 * dy + m4, m1 * dx + m3 * dy + m5];
    if (!this.embedded || m.join(' ') !== this.matrix.join(' ')) {
      this.embed(m);
    }
    return this.doc.addContent("/" + this.id + " " + op);
  };
  return PDFGradient;
}();
var PDFLinearGradient$1 = /*#__PURE__*/function (_PDFGradient) {
  _inheritsLoose__default["default"](PDFLinearGradient, _PDFGradient);
  function PDFLinearGradient(doc, x1, y1, x2, y2) {
    var _this;
    _this = _PDFGradient.call(this, doc) || this;
    _this.x1 = x1;
    _this.y1 = y1;
    _this.x2 = x2;
    _this.y2 = y2;
    return _this;
  }
  var _proto2 = PDFLinearGradient.prototype;
  _proto2.shader = function shader(fn) {
    return this.doc.ref({
      ShadingType: 2,
      ColorSpace: this._colorSpace,
      Coords: [this.x1, this.y1, this.x2, this.y2],
      Function: fn,
      Extend: [true, true]
    });
  };
  _proto2.opacityGradient = function opacityGradient() {
    return new PDFLinearGradient(this.doc, this.x1, this.y1, this.x2, this.y2);
  };
  return PDFLinearGradient;
}(PDFGradient$1);
var PDFRadialGradient$1 = /*#__PURE__*/function (_PDFGradient2) {
  _inheritsLoose__default["default"](PDFRadialGradient, _PDFGradient2);
  function PDFRadialGradient(doc, x1, y1, r1, x2, y2, r2) {
    var _this2;
    _this2 = _PDFGradient2.call(this, doc) || this;
    _this2.doc = doc;
    _this2.x1 = x1;
    _this2.y1 = y1;
    _this2.r1 = r1;
    _this2.x2 = x2;
    _this2.y2 = y2;
    _this2.r2 = r2;
    return _this2;
  }
  var _proto3 = PDFRadialGradient.prototype;
  _proto3.shader = function shader(fn) {
    return this.doc.ref({
      ShadingType: 3,
      ColorSpace: this._colorSpace,
      Coords: [this.x1, this.y1, this.r1, this.x2, this.y2, this.r2],
      Function: fn,
      Extend: [true, true]
    });
  };
  _proto3.opacityGradient = function opacityGradient() {
    return new PDFRadialGradient(this.doc, this.x1, this.y1, this.r1, this.x2, this.y2, this.r2);
  };
  return PDFRadialGradient;
}(PDFGradient$1);
var Gradient = {
  PDFGradient: PDFGradient$1,
  PDFLinearGradient: PDFLinearGradient$1,
  PDFRadialGradient: PDFRadialGradient$1
};

var PDFGradient = Gradient.PDFGradient,
  PDFLinearGradient = Gradient.PDFLinearGradient,
  PDFRadialGradient = Gradient.PDFRadialGradient;
var ColorMixin = {
  initColor: function initColor() {
    // The opacity dictionaries
    this._opacityRegistry = {};
    this._opacityCount = 0;
    return this._gradCount = 0;
  },
  _normalizeColor: function _normalizeColor(color) {
    if (color instanceof PDFGradient) {
      return color;
    }
    var part;
    if (typeof color === 'string') {
      if (color.charAt(0) === '#') {
        if (color.length === 4) {
          color = color.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i, '#$1$1$2$2$3$3');
        }
        var hex = parseInt(color.slice(1), 16);
        color = [hex >> 16, hex >> 8 & 0xff, hex & 0xff];
      } else if (namedColors[color]) {
        color = namedColors[color];
      }
    }
    if (Array.isArray(color)) {
      // RGB
      if (color.length === 3) {
        color = function () {
          var result = [];
          for (var _i = 0, _Array$from = Array.from(color); _i < _Array$from.length; _i++) {
            part = _Array$from[_i];
            result.push(part / 255);
          }
          return result;
        }();

        // CMYK
      } else if (color.length === 4) {
        color = function () {
          var result1 = [];
          for (var _i2 = 0, _Array$from2 = Array.from(color); _i2 < _Array$from2.length; _i2++) {
            part = _Array$from2[_i2];
            result1.push(part / 100);
          }
          return result1;
        }();
      }
      return color;
    }
    return null;
  },
  _setColor: function _setColor(color, stroke) {
    color = this._normalizeColor(color);
    if (!color) {
      return false;
    }
    var op = stroke ? 'SCN' : 'scn';
    if (color instanceof PDFGradient) {
      this._setColorSpace('Pattern', stroke);
      color.apply(op);
    } else {
      var space = color.length === 4 ? 'DeviceCMYK' : 'DeviceRGB';
      this._setColorSpace(space, stroke);
      color = color.join(' ');
      this.addContent(color + " " + op);
    }
    return true;
  },
  _setColorSpace: function _setColorSpace(space, stroke) {
    var op = stroke ? 'CS' : 'cs';
    return this.addContent("/" + space + " " + op);
  },
  fillColor: function fillColor(color, opacity) {
    var set = this._setColor(color, false);
    if (set) {
      this.fillOpacity(opacity);
    }

    // save this for text wrapper, which needs to reset
    // the fill color on new pages
    this._fillColor = [color, opacity];
    return this;
  },
  strokeColor: function strokeColor(color, opacity) {
    var set = this._setColor(color, true);
    if (set) {
      this.strokeOpacity(opacity);
    }
    return this;
  },
  opacity: function opacity(_opacity) {
    this._doOpacity(_opacity, _opacity);
    return this;
  },
  fillOpacity: function fillOpacity(opacity) {
    this._doOpacity(opacity, null);
    return this;
  },
  strokeOpacity: function strokeOpacity(opacity) {
    this._doOpacity(null, opacity);
    return this;
  },
  _doOpacity: function _doOpacity(fillOpacity, strokeOpacity) {
    var dictionary, name;
    if (fillOpacity == null && strokeOpacity == null) {
      return;
    }
    if (fillOpacity != null) {
      fillOpacity = Math.max(0, Math.min(1, fillOpacity));
    }
    if (strokeOpacity != null) {
      strokeOpacity = Math.max(0, Math.min(1, strokeOpacity));
    }
    var key = fillOpacity + "_" + strokeOpacity;
    if (this._opacityRegistry[key]) {
      var _Array$from3 = Array.from(this._opacityRegistry[key]);
      dictionary = _Array$from3[0];
      name = _Array$from3[1];
    } else {
      dictionary = {
        Type: 'ExtGState'
      };
      if (fillOpacity != null) {
        dictionary.ca = fillOpacity;
      }
      if (strokeOpacity != null) {
        dictionary.CA = strokeOpacity;
      }
      dictionary = this.ref(dictionary);
      dictionary.end();
      var id = ++this._opacityCount;
      name = "Gs" + id;
      this._opacityRegistry[key] = [dictionary, name];
    }
    this.page.ext_gstates[name] = dictionary;
    return this.addContent("/" + name + " gs");
  },
  linearGradient: function linearGradient(x1, y1, x2, y2) {
    return new PDFLinearGradient(this, x1, y1, x2, y2);
  },
  radialGradient: function radialGradient(x1, y1, r1, x2, y2, r2) {
    return new PDFRadialGradient(this, x1, y1, r1, x2, y2, r2);
  }
};
var namedColors = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};

/* eslint-disable no-lonely-if */
var cx, cy, px, py, sx, sy;
cx = cy = px = py = sx = sy = 0;

// parseDataPath copy pasted from svgo
// https://github.com/svg/svgo/blob/e4918ccdd1a2b5831defe0f00c1286744b479448/lib/path.js

var argsCountPerCommand = {
  M: 2,
  m: 2,
  Z: 0,
  z: 0,
  L: 2,
  l: 2,
  H: 1,
  h: 1,
  V: 1,
  v: 1,
  C: 6,
  c: 6,
  S: 4,
  s: 4,
  Q: 4,
  q: 4,
  T: 2,
  t: 2,
  A: 7,
  a: 7
};

/**
 * @type {(c: string) => c is PathDataCommand}
 */
var isCommand = function isCommand(c) {
  return c in argsCountPerCommand;
};

/**
 * @type {(c: string) => boolean}
 */
var isWsp = function isWsp(c) {
  var codePoint = c.codePointAt(0);
  return codePoint === 0x20 || codePoint === 0x9 || codePoint === 0xd || codePoint === 0xa;
};

/**
 * @type {(c: string) => boolean}
 */
var isDigit = function isDigit(c) {
  var codePoint = c.codePointAt(0);
  if (codePoint == null) {
    return false;
  }
  return 48 <= codePoint && codePoint <= 57;
};

/**
 * @typedef {'none' | 'sign' | 'whole' | 'decimal_point' | 'decimal' | 'e' | 'exponent_sign' | 'exponent'} ReadNumberState
 */

/**
 * @type {(string: string, cursor: number) => [number, number | null]}
 */
var readNumber = function readNumber(string, cursor) {
  var i = cursor;
  var value = '';
  var state = /** @type {ReadNumberState} */'none';
  for (; i < string.length; i += 1) {
    var c = string[i];
    if (c === '+' || c === '-') {
      if (state === 'none') {
        state = 'sign';
        value += c;
        continue;
      }
      if (state === 'e') {
        state = 'exponent_sign';
        value += c;
        continue;
      }
    }
    if (isDigit(c)) {
      if (state === 'none' || state === 'sign' || state === 'whole') {
        state = 'whole';
        value += c;
        continue;
      }
      if (state === 'decimal_point' || state === 'decimal') {
        state = 'decimal';
        value += c;
        continue;
      }
      if (state === 'e' || state === 'exponent_sign' || state === 'exponent') {
        state = 'exponent';
        value += c;
        continue;
      }
    }
    if (c === '.') {
      if (state === 'none' || state === 'sign' || state === 'whole') {
        state = 'decimal_point';
        value += c;
        continue;
      }
    }
    if (c === 'E' || c === 'e') {
      if (state === 'whole' || state === 'decimal_point' || state === 'decimal') {
        state = 'e';
        value += c;
        continue;
      }
    }
    break;
  }
  var number = Number.parseFloat(value);
  if (Number.isNaN(number)) {
    return [cursor, null];
  } else {
    // step back to delegate iteration to parent loop
    return [i - 1, number];
  }
};

/**
 * @type {(string: string) => Array<PathDataItem>}
 */
var parsePathData = function parsePathData(string) {
  /**
   * @type {Array<PathDataItem>}
   */
  var pathData = [];
  /**
   * @type {null | PathDataCommand}
   */
  var command = null;
  var args = /** @type {number[]} */[];
  var argsCount = 0;
  var canHaveComma = false;
  var hadComma = false;
  for (var i = 0; i < string.length; i += 1) {
    var c = string.charAt(i);
    if (isWsp(c)) {
      continue;
    }
    // allow comma only between arguments
    if (canHaveComma && c === ',') {
      if (hadComma) {
        break;
      }
      hadComma = true;
      continue;
    }
    if (isCommand(c)) {
      if (hadComma) {
        return pathData;
      }
      if (command == null) {
        // moveto should be leading command
        if (c !== 'M' && c !== 'm') {
          return pathData;
        }
      } else {
        // stop if previous command arguments are not flushed
        if (args.length !== 0) {
          return pathData;
        }
      }
      command = c;
      args = [];
      argsCount = argsCountPerCommand[command];
      canHaveComma = false;
      // flush command without arguments
      if (argsCount === 0) {
        pathData.push({
          command: command,
          args: args
        });
      }
      continue;
    }
    // avoid parsing arguments if no command detected
    if (command == null) {
      return pathData;
    }
    // read next argument
    var newCursor = i;
    var number = null;
    if (command === 'A' || command === 'a') {
      var position = args.length;
      if (position === 0 || position === 1) {
        // allow only positive number without sign as first two arguments
        if (c !== '+' && c !== '-') {
          var _readNumber = readNumber(string, i);
          newCursor = _readNumber[0];
          number = _readNumber[1];
        }
      }
      if (position === 2 || position === 5 || position === 6) {
        var _readNumber2 = readNumber(string, i);
        newCursor = _readNumber2[0];
        number = _readNumber2[1];
      }
      if (position === 3 || position === 4) {
        // read flags
        if (c === '0') {
          number = 0;
        }
        if (c === '1') {
          number = 1;
        }
      }
    } else {
      var _readNumber3 = readNumber(string, i);
      newCursor = _readNumber3[0];
      number = _readNumber3[1];
    }
    if (number == null) {
      return pathData;
    }
    args.push(number);
    canHaveComma = true;
    hadComma = false;
    i = newCursor;
    // flush arguments when necessary count is reached
    if (args.length === argsCount) {
      pathData.push({
        command: command,
        args: args
      });
      // subsequent moveto coordinates are threated as implicit lineto commands
      if (command === 'M') {
        command = 'L';
      }
      if (command === 'm') {
        command = 'l';
      }
      args = [];
    }
  }
  return pathData;
};
var _apply = function apply(commands, doc) {
  // current point, control point, and subpath starting point
  cx = cy = px = py = sx = sy = 0;

  // run the commands
  for (var i = 0; i < commands.length; i++) {
    var _commands$i = commands[i],
      command = _commands$i.command,
      args = _commands$i.args;
    if (typeof runners[command] === 'function') {
      runners[command](doc, args);
    }
  }
};
var runners = {
  M: function M(doc, a) {
    cx = a[0];
    cy = a[1];
    px = py = null;
    sx = cx;
    sy = cy;
    return doc.moveTo(cx, cy);
  },
  m: function m(doc, a) {
    cx += a[0];
    cy += a[1];
    px = py = null;
    sx = cx;
    sy = cy;
    return doc.moveTo(cx, cy);
  },
  C: function C(doc, a) {
    cx = a[4];
    cy = a[5];
    px = a[2];
    py = a[3];
    return doc.bezierCurveTo.apply(doc, a);
  },
  c: function c(doc, a) {
    doc.bezierCurveTo(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy, a[4] + cx, a[5] + cy);
    px = cx + a[2];
    py = cy + a[3];
    cx += a[4];
    return cy += a[5];
  },
  S: function S(doc, a) {
    if (px === null) {
      px = cx;
      py = cy;
    }
    doc.bezierCurveTo(cx - (px - cx), cy - (py - cy), a[0], a[1], a[2], a[3]);
    px = a[0];
    py = a[1];
    cx = a[2];
    return cy = a[3];
  },
  s: function s(doc, a) {
    if (px === null) {
      px = cx;
      py = cy;
    }
    doc.bezierCurveTo(cx - (px - cx), cy - (py - cy), cx + a[0], cy + a[1], cx + a[2], cy + a[3]);
    px = cx + a[0];
    py = cy + a[1];
    cx += a[2];
    return cy += a[3];
  },
  Q: function Q(doc, a) {
    px = a[0];
    py = a[1];
    cx = a[2];
    cy = a[3];
    return doc.quadraticCurveTo(a[0], a[1], cx, cy);
  },
  q: function q(doc, a) {
    doc.quadraticCurveTo(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy);
    px = cx + a[0];
    py = cy + a[1];
    cx += a[2];
    return cy += a[3];
  },
  T: function T(doc, a) {
    if (px === null) {
      px = cx;
      py = cy;
    } else {
      px = cx - (px - cx);
      py = cy - (py - cy);
    }
    doc.quadraticCurveTo(px, py, a[0], a[1]);
    px = cx - (px - cx);
    py = cy - (py - cy);
    cx = a[0];
    return cy = a[1];
  },
  t: function t(doc, a) {
    if (px === null) {
      px = cx;
      py = cy;
    } else {
      px = cx - (px - cx);
      py = cy - (py - cy);
    }
    doc.quadraticCurveTo(px, py, cx + a[0], cy + a[1]);
    cx += a[0];
    return cy += a[1];
  },
  A: function A(doc, a) {
    solveArc(doc, cx, cy, a);
    cx = a[5];
    return cy = a[6];
  },
  a: function a(doc, _a) {
    _a[5] += cx;
    _a[6] += cy;
    solveArc(doc, cx, cy, _a);
    cx = _a[5];
    return cy = _a[6];
  },
  L: function L(doc, a) {
    cx = a[0];
    cy = a[1];
    px = py = null;
    return doc.lineTo(cx, cy);
  },
  l: function l(doc, a) {
    cx += a[0];
    cy += a[1];
    px = py = null;
    return doc.lineTo(cx, cy);
  },
  H: function H(doc, a) {
    cx = a[0];
    px = py = null;
    return doc.lineTo(cx, cy);
  },
  h: function h(doc, a) {
    cx += a[0];
    px = py = null;
    return doc.lineTo(cx, cy);
  },
  V: function V(doc, a) {
    cy = a[0];
    px = py = null;
    return doc.lineTo(cx, cy);
  },
  v: function v(doc, a) {
    cy += a[0];
    px = py = null;
    return doc.lineTo(cx, cy);
  },
  Z: function Z(doc) {
    doc.closePath();
    cx = sx;
    return cy = sy;
  },
  z: function z(doc) {
    doc.closePath();
    cx = sx;
    return cy = sy;
  }
};
var solveArc = function solveArc(doc, x, y, coords) {
  var rx = coords[0],
    ry = coords[1],
    rot = coords[2],
    large = coords[3],
    sweep = coords[4],
    ex = coords[5],
    ey = coords[6];
  var segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
  for (var _iterator = _createForOfIteratorHelperLoose__default["default"](segs), _step; !(_step = _iterator()).done;) {
    var seg = _step.value;
    var bez = segmentToBezier.apply(void 0, seg);
    doc.bezierCurveTo.apply(doc, bez);
  }
};

// from Inkscape svgtopdf, thanks!
var arcToSegments = function arcToSegments(x, y, rx, ry, large, sweep, rotateX, ox, oy) {
  var th = rotateX * (Math.PI / 180);
  var sin_th = Math.sin(th);
  var cos_th = Math.cos(th);
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  px = cos_th * (ox - x) * 0.5 + sin_th * (oy - y) * 0.5;
  py = cos_th * (oy - y) * 0.5 - sin_th * (ox - x) * 0.5;
  var pl = px * px / (rx * rx) + py * py / (ry * ry);
  if (pl > 1) {
    pl = Math.sqrt(pl);
    rx *= pl;
    ry *= pl;
  }
  var a00 = cos_th / rx;
  var a01 = sin_th / rx;
  var a10 = -sin_th / ry;
  var a11 = cos_th / ry;
  var x0 = a00 * ox + a01 * oy;
  var y0 = a10 * ox + a11 * oy;
  var x1 = a00 * x + a01 * y;
  var y1 = a10 * x + a11 * y;
  var d = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);
  var sfactor_sq = 1 / d - 0.25;
  if (sfactor_sq < 0) {
    sfactor_sq = 0;
  }
  var sfactor = Math.sqrt(sfactor_sq);
  if (sweep === large) {
    sfactor = -sfactor;
  }
  var xc = 0.5 * (x0 + x1) - sfactor * (y1 - y0);
  var yc = 0.5 * (y0 + y1) + sfactor * (x1 - x0);
  var th0 = Math.atan2(y0 - yc, x0 - xc);
  var th1 = Math.atan2(y1 - yc, x1 - xc);
  var th_arc = th1 - th0;
  if (th_arc < 0 && sweep === 1) {
    th_arc += 2 * Math.PI;
  } else if (th_arc > 0 && sweep === 0) {
    th_arc -= 2 * Math.PI;
  }
  var segments = Math.ceil(Math.abs(th_arc / (Math.PI * 0.5 + 0.001)));
  var result = [];
  for (var i = 0; i < segments; i++) {
    var th2 = th0 + i * th_arc / segments;
    var th3 = th0 + (i + 1) * th_arc / segments;
    result[i] = [xc, yc, th2, th3, rx, ry, sin_th, cos_th];
  }
  return result;
};
var segmentToBezier = function segmentToBezier(cx, cy, th0, th1, rx, ry, sin_th, cos_th) {
  var a00 = cos_th * rx;
  var a01 = -sin_th * ry;
  var a10 = sin_th * rx;
  var a11 = cos_th * ry;
  var th_half = 0.5 * (th1 - th0);
  var t = 8 / 3 * Math.sin(th_half * 0.5) * Math.sin(th_half * 0.5) / Math.sin(th_half);
  var x1 = cx + Math.cos(th0) - t * Math.sin(th0);
  var y1 = cy + Math.sin(th0) + t * Math.cos(th0);
  var x3 = cx + Math.cos(th1);
  var y3 = cy + Math.sin(th1);
  var x2 = x3 + t * Math.sin(th1);
  var y2 = y3 - t * Math.cos(th1);
  return [a00 * x1 + a01 * y1, a10 * x1 + a11 * y1, a00 * x2 + a01 * y2, a10 * x2 + a11 * y2, a00 * x3 + a01 * y3, a10 * x3 + a11 * y3];
};
var SVGPath = /*#__PURE__*/function () {
  function SVGPath() {}
  SVGPath.apply = function apply(doc, path) {
    var commands = parsePathData(path);
    _apply(commands, doc);
  };
  return SVGPath;
}();

var number$1 = PDFObject$1.number;

// This constant is used to approximate a symmetrical arc using a cubic
// Bezier curve.
var KAPPA = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);
var VectorMixin = {
  initVector: function initVector() {
    this._ctm = [1, 0, 0, 1, 0, 0]; // current transformation matrix
    return this._ctmStack = [];
  },
  save: function save() {
    this._ctmStack.push(this._ctm.slice());
    // TODO: save/restore colorspace and styles so not setting it unnessesarily all the time?
    return this.addContent('q');
  },
  restore: function restore() {
    this._ctm = this._ctmStack.pop() || [1, 0, 0, 1, 0, 0];
    return this.addContent('Q');
  },
  closePath: function closePath() {
    return this.addContent('h');
  },
  lineWidth: function lineWidth(w) {
    return this.addContent(number$1(w) + " w");
  },
  _CAP_STYLES: {
    BUTT: 0,
    ROUND: 1,
    SQUARE: 2
  },
  lineCap: function lineCap(c) {
    if (typeof c === 'string') {
      c = this._CAP_STYLES[c.toUpperCase()];
    }
    return this.addContent(c + " J");
  },
  _JOIN_STYLES: {
    MITER: 0,
    ROUND: 1,
    BEVEL: 2
  },
  lineJoin: function lineJoin(j) {
    if (typeof j === 'string') {
      j = this._JOIN_STYLES[j.toUpperCase()];
    }
    return this.addContent(j + " j");
  },
  miterLimit: function miterLimit(m) {
    return this.addContent(number$1(m) + " M");
  },
  dash: function dash(length, options) {
    var phase;
    if (options == null) {
      options = {};
    }
    if (length == null) {
      return this;
    }
    if (Array.isArray(length)) {
      length = Array.from(length).map(function (v) {
        return PDFObject$1.number(v);
      }).join(' ');
      phase = options.phase || 0;
      return this.addContent("[" + length + "] " + PDFObject$1.number(phase) + " d");
    }
    var space = options.space != null ? options.space : length;
    phase = options.phase || 0;
    return this.addContent("[" + PDFObject$1.number(length) + " " + PDFObject$1.number(space) + "] " + PDFObject$1.number(phase) + " d");
  },
  undash: function undash() {
    return this.addContent('[] 0 d');
  },
  moveTo: function moveTo(x, y) {
    return this.addContent(number$1(x) + " " + number$1(y) + " m");
  },
  lineTo: function lineTo(x, y) {
    return this.addContent(number$1(x) + " " + number$1(y) + " l");
  },
  bezierCurveTo: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.addContent(number$1(cp1x) + " " + number$1(cp1y) + " " + number$1(cp2x) + " " + number$1(cp2y) + " " + number$1(x) + " " + number$1(y) + " c");
  },
  quadraticCurveTo: function quadraticCurveTo(cpx, cpy, x, y) {
    return this.addContent(number$1(cpx) + " " + number$1(cpy) + " " + number$1(x) + " " + number$1(y) + " v");
  },
  rect: function rect(x, y, w, h) {
    return this.addContent(number$1(x) + " " + number$1(y) + " " + number$1(w) + " " + number$1(h) + " re");
  },
  roundedRect: function roundedRect(x, y, w, h, r) {
    if (r == null) {
      r = 0;
    }
    r = Math.min(r, 0.5 * w, 0.5 * h);

    // amount to inset control points from corners (see `ellipse`)
    var c = r * (1.0 - KAPPA);
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.bezierCurveTo(x + w - c, y, x + w, y + c, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.bezierCurveTo(x + w, y + h - c, x + w - c, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.bezierCurveTo(x + c, y + h, x, y + h - c, x, y + h - r);
    this.lineTo(x, y + r);
    this.bezierCurveTo(x, y + c, x + c, y, x + r, y);
    return this.closePath();
  },
  ellipse: function ellipse(x, y, r1, r2) {
    // based on http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas/2173084#2173084
    if (r2 == null) {
      r2 = r1;
    }
    x -= r1;
    y -= r2;
    var ox = r1 * KAPPA;
    var oy = r2 * KAPPA;
    var xe = x + r1 * 2;
    var ye = y + r2 * 2;
    var xm = x + r1;
    var ym = y + r2;
    this.moveTo(x, ym);
    this.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    this.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    this.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    return this.closePath();
  },
  circle: function circle(x, y, radius) {
    return this.ellipse(x, y, radius);
  },
  arc: function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    if (anticlockwise == null) {
      anticlockwise = false;
    }
    var TWO_PI = 2.0 * Math.PI;
    var HALF_PI = 0.5 * Math.PI;
    var deltaAng = endAngle - startAngle;
    if (Math.abs(deltaAng) > TWO_PI) {
      // draw only full circle if more than that is specified
      deltaAng = TWO_PI;
    } else if (deltaAng !== 0 && anticlockwise !== deltaAng < 0) {
      // necessary to flip direction of rendering
      var dir = anticlockwise ? -1 : 1;
      deltaAng = dir * TWO_PI + deltaAng;
    }
    var numSegs = Math.ceil(Math.abs(deltaAng) / HALF_PI);
    var segAng = deltaAng / numSegs;
    var handleLen = segAng / HALF_PI * KAPPA * radius;
    var curAng = startAngle;

    // component distances between anchor point and control point
    var deltaCx = -Math.sin(curAng) * handleLen;
    var deltaCy = Math.cos(curAng) * handleLen;

    // anchor point
    var ax = x + Math.cos(curAng) * radius;
    var ay = y + Math.sin(curAng) * radius;

    // calculate and render segments
    this.moveTo(ax, ay);
    for (var segIdx = 0, end = numSegs, asc = 0 <= end; asc ? segIdx < end : segIdx > end; asc ? segIdx++ : segIdx--) {
      // starting control point
      var cp1x = ax + deltaCx;
      var cp1y = ay + deltaCy;

      // step angle
      curAng += segAng;

      // next anchor point
      ax = x + Math.cos(curAng) * radius;
      ay = y + Math.sin(curAng) * radius;

      // next control point delta
      deltaCx = -Math.sin(curAng) * handleLen;
      deltaCy = Math.cos(curAng) * handleLen;

      // ending control point
      var cp2x = ax - deltaCx;
      var cp2y = ay - deltaCy;

      // render segment
      this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ax, ay);
    }
    return this;
  },
  polygon: function polygon() {
    for (var _len = arguments.length, points = new Array(_len), _key = 0; _key < _len; _key++) {
      points[_key] = arguments[_key];
    }
    this.moveTo.apply(this, Array.from(points.shift() || []));
    for (var _i = 0, _Array$from = Array.from(points); _i < _Array$from.length; _i++) {
      var point = _Array$from[_i];
      this.lineTo.apply(this, Array.from(point || []));
    }
    return this.closePath();
  },
  path: function path(_path) {
    SVGPath.apply(this, _path);
    return this;
  },
  _windingRule: function _windingRule(rule) {
    if (/even-?odd/.test(rule)) {
      return '*';
    }
    return '';
  },
  fill: function fill(color, rule) {
    if (/(even-?odd)|(non-?zero)/.test(color)) {
      rule = color;
      color = null;
    }
    if (color) {
      this.fillColor(color);
    }
    return this.addContent("f" + this._windingRule(rule));
  },
  stroke: function stroke(color) {
    if (color) {
      this.strokeColor(color);
    }
    return this.addContent('S');
  },
  fillAndStroke: function fillAndStroke(fillColor, strokeColor, rule) {
    if (strokeColor == null) {
      strokeColor = fillColor;
    }
    var isFillRule = /(even-?odd)|(non-?zero)/;
    if (isFillRule.test(fillColor)) {
      rule = fillColor;
      fillColor = null;
    }
    if (isFillRule.test(strokeColor)) {
      rule = strokeColor;
      strokeColor = fillColor;
    }
    if (fillColor) {
      this.fillColor(fillColor);
      this.strokeColor(strokeColor);
    }
    return this.addContent("B" + this._windingRule(rule));
  },
  clip: function clip(rule) {
    return this.addContent("W" + this._windingRule(rule) + " n");
  },
  transform: function transform(m11, m12, m21, m22, dx, dy) {
    // keep track of the current transformation matrix
    var m = this._ctm;
    var _Array$from2 = Array.from(m),
      m0 = _Array$from2[0],
      m1 = _Array$from2[1],
      m2 = _Array$from2[2],
      m3 = _Array$from2[3],
      m4 = _Array$from2[4],
      m5 = _Array$from2[5];
    m[0] = m0 * m11 + m2 * m12;
    m[1] = m1 * m11 + m3 * m12;
    m[2] = m0 * m21 + m2 * m22;
    m[3] = m1 * m21 + m3 * m22;
    m[4] = m0 * dx + m2 * dy + m4;
    m[5] = m1 * dx + m3 * dy + m5;
    var values = [m11, m12, m21, m22, dx, dy].map(function (v) {
      return PDFObject$1.number(v);
    }).join(' ');
    return this.addContent(values + " cm");
  },
  translate: function translate(x, y) {
    return this.transform(1, 0, 0, 1, x, y);
  },
  rotate: function rotate(angle, options) {
    if (options === void 0) {
      options = {};
    }
    var rad = angle * Math.PI / 180;
    var cos = Math.cos(rad);
    var sin = Math.sin(rad);
    var x = 0;
    var y = 0;
    if (options.origin != null) {
      var _Array$from3 = Array.from(options.origin);
      x = _Array$from3[0];
      y = _Array$from3[1];
      var x1 = x * cos - y * sin;
      var y1 = x * sin + y * cos;
      x -= x1;
      y -= y1;
    }
    return this.transform(cos, sin, -sin, cos, x, y);
  },
  scale: function scale(xFactor, yFactor, options) {
    if (options === void 0) {
      options = {};
    }
    if (yFactor == null) {
      yFactor = xFactor;
    }
    if (typeof yFactor === 'object') {
      options = yFactor;
      yFactor = xFactor;
    }
    var x = 0;
    var y = 0;
    if (options.origin != null) {
      var _Array$from4 = Array.from(options.origin);
      x = _Array$from4[0];
      y = _Array$from4[1];
      x -= xFactor * x;
      y -= yFactor * y;
    }
    return this.transform(xFactor, 0, 0, yFactor, x, y);
  },
  skew: function skew(xAngle, yAngle, options) {
    if (xAngle === void 0) {
      xAngle = 0;
    }
    if (yAngle === void 0) {
      yAngle = 0;
    }
    var radx = xAngle * Math.PI / 180;
    var rady = yAngle * Math.PI / 180;
    var tanx = Math.tan(radx);
    var tany = Math.tan(rady);
    var x = 0;
    var y = 0;
    if (options.origin != null) {
      var _Array$from5 = Array.from(options.origin);
      x = _Array$from5[0];
      y = _Array$from5[1];
      var x1 = x + tanx * y;
      var y1 = y + tany * x;
      x -= x1;
      y -= y1;
    }
    return this.transform(1, tany, tanx, 1, x, y);
  }
};

var range = function range(left, right, inclusive) {
  var range = [];
  var ascending = left < right;
  var end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
};

var WIN_ANSI_MAP = {
  402: 131,
  8211: 150,
  8212: 151,
  8216: 145,
  8217: 146,
  8218: 130,
  8220: 147,
  8221: 148,
  8222: 132,
  8224: 134,
  8225: 135,
  8226: 149,
  8230: 133,
  8364: 128,
  8240: 137,
  8249: 139,
  8250: 155,
  710: 136,
  8482: 153,
  338: 140,
  339: 156,
  732: 152,
  352: 138,
  353: 154,
  376: 159,
  381: 142,
  382: 158
};
var characters = ".notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n\nspace         exclam         quotedbl       numbersign\ndollar        percent        ampersand      quotesingle\nparenleft     parenright     asterisk       plus\ncomma         hyphen         period         slash\nzero          one            two            three\nfour          five           six            seven\neight         nine           colon          semicolon\nless          equal          greater        question\n\nat            A              B              C\nD             E              F              G\nH             I              J              K\nL             M              N              O\nP             Q              R              S\nT             U              V              W\nX             Y              Z              bracketleft\nbackslash     bracketright   asciicircum    underscore\n\ngrave         a              b              c\nd             e              f              g\nh             i              j              k\nl             m              n              o\np             q              r              s\nt             u              v              w\nx             y              z              braceleft\nbar           braceright     asciitilde     .notdef\n\nEuro          .notdef        quotesinglbase florin\nquotedblbase  ellipsis       dagger         daggerdbl\ncircumflex    perthousand    Scaron         guilsinglleft\nOE            .notdef        Zcaron         .notdef\n.notdef       quoteleft      quoteright     quotedblleft\nquotedblright bullet         endash         emdash\ntilde         trademark      scaron         guilsinglright\noe            .notdef        zcaron         ydieresis\n\nspace         exclamdown     cent           sterling\ncurrency      yen            brokenbar      section\ndieresis      copyright      ordfeminine    guillemotleft\nlogicalnot    hyphen         registered     macron\ndegree        plusminus      twosuperior    threesuperior\nacute         mu             paragraph      periodcentered\ncedilla       onesuperior    ordmasculine   guillemotright\nonequarter    onehalf        threequarters  questiondown\n\nAgrave        Aacute         Acircumflex    Atilde\nAdieresis     Aring          AE             Ccedilla\nEgrave        Eacute         Ecircumflex    Edieresis\nIgrave        Iacute         Icircumflex    Idieresis\nEth           Ntilde         Ograve         Oacute\nOcircumflex   Otilde         Odieresis      multiply\nOslash        Ugrave         Uacute         Ucircumflex\nUdieresis     Yacute         Thorn          germandbls\n\nagrave        aacute         acircumflex    atilde\nadieresis     aring          ae             ccedilla\negrave        eacute         ecircumflex    edieresis\nigrave        iacute         icircumflex    idieresis\neth           ntilde         ograve         oacute\nocircumflex   otilde         odieresis      divide\noslash        ugrave         uacute         ucircumflex\nudieresis     yacute         thorn          ydieresis".split(/\s+/);
function _parse(contents) {
  var obj = {
    attributes: {},
    glyphWidths: {},
    kernPairs: {}
  };
  var section = '';
  for (var _iterator = _createForOfIteratorHelperLoose__default["default"](contents.split('\n')), _step; !(_step = _iterator()).done;) {
    var line = _step.value;
    var match;
    var a;
    if (match = line.match(/^Start(\w+)/)) {
      section = match[1];
      continue;
    } else if (match = line.match(/^End(\w+)/)) {
      section = '';
      continue;
    }
    switch (section) {
      case 'FontMetrics':
        match = line.match(/(^\w+)\s+(.*)/);
        var key = match[1];
        var value = match[2];
        if (a = obj.attributes[key]) {
          if (!Array.isArray(a)) {
            a = obj.attributes[key] = [a];
          }
          a.push(value);
        } else {
          obj.attributes[key] = value;
        }
        break;
      case 'CharMetrics':
        if (!/^CH?\s/.test(line)) {
          continue;
        }
        var name = line.match(/\bN\s+(\.?\w+)\s*;/)[1];
        obj.glyphWidths[name] = +line.match(/\bWX\s+(\d+)\s*;/)[1];
        break;
      case 'KernPairs':
        match = line.match(/^KPX\s+(\.?\w+)\s+(\.?\w+)\s+(-?\d+)/);
        if (match) {
          obj.kernPairs[match[1] + match[2]] = parseInt(match[3]);
        }
        break;
    }
  }
  return obj;
}
var AFMFont = /*#__PURE__*/function () {
  AFMFont.open = function open(filename) {
    return new AFMFont(fs__default["default"].readFileSync(filename, 'utf8'));
  };
  AFMFont.fromJson = function fromJson(json) {
    return new AFMFont(json);
  };
  function AFMFont(contents) {
    var _this = this;
    if (typeof contents === 'string') {
      this.contents = contents;
      this.parse();
    } else {
      this.attributes = contents.attributes;
      this.glyphWidths = contents.glyphWidths;
      this.kernPairs = contents.kernPairs;
    }
    this.charWidths = range(0, 255, true).map(function (i) {
      return _this.glyphWidths[characters[i]];
    });
    this.bbox = Array.from(this.attributes.FontBBox.split(/\s+/)).map(function (e) {
      return +e;
    });
    this.ascender = +(this.attributes.Ascender || 0);
    this.descender = +(this.attributes.Descender || 0);
    this.xHeight = +(this.attributes.XHeight || 0);
    this.capHeight = +(this.attributes.CapHeight || 0);
    this.lineGap = this.bbox[3] - this.bbox[1] - (this.ascender - this.descender);
  }
  var _proto = AFMFont.prototype;
  _proto.parse = function parse() {
    var parsed = _parse(this.contents);
    this.attributes = parsed.attributes;
    this.glyphWidths = parsed.glyphWidths;
    this.kernPairs = parsed.kernPairs;
  };
  _proto.encodeText = function encodeText(text) {
    var res = [];
    for (var i = 0, end = text.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
      var char = text.charCodeAt(i);
      char = WIN_ANSI_MAP[char] || char;
      res.push(char.toString(16));
    }
    return res;
  };
  _proto.glyphsForString = function glyphsForString(string) {
    var glyphs = [];
    for (var i = 0, end = string.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
      var charCode = string.charCodeAt(i);
      glyphs.push(this.characterToGlyph(charCode));
    }
    return glyphs;
  };
  _proto.characterToGlyph = function characterToGlyph(character) {
    return characters[WIN_ANSI_MAP[character] || character] || '.notdef';
  };
  _proto.widthOfGlyph = function widthOfGlyph(glyph) {
    return this.glyphWidths[glyph] || 0;
  };
  _proto.getKernPair = function getKernPair(left, right) {
    return this.kernPairs[left + right] || 0;
  };
  _proto.advancesForGlyphs = function advancesForGlyphs(glyphs) {
    var advances = [];
    for (var index = 0; index < glyphs.length; index++) {
      var left = glyphs[index];
      var right = glyphs[index + 1];
      advances.push(this.widthOfGlyph(left) + this.getKernPair(left, right));
    }
    return advances;
  };
  return AFMFont;
}();

var attributes = [
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:43:52 1997",
			"UniqueID 43052",
			"VMusage 37169 48194"
		],
		FontName: "Helvetica-Bold",
		FullName: "Helvetica Bold",
		FamilyName: "Helvetica",
		Weight: "Bold",
		ItalicAngle: "0",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-170 -228 1003 962 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "718",
		XHeight: "532",
		Ascender: "718",
		Descender: "-207",
		StdHW: "118",
		StdVW: "140"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:45:12 1997",
			"UniqueID 43053",
			"VMusage 14482 68586"
		],
		FontName: "Helvetica-BoldOblique",
		FullName: "Helvetica Bold Oblique",
		FamilyName: "Helvetica",
		Weight: "Bold",
		ItalicAngle: "-12",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-174 -228 1114 962",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "718",
		XHeight: "532",
		Ascender: "718",
		Descender: "-207",
		StdHW: "118",
		StdVW: "140"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:44:31 1997",
			"UniqueID 43055",
			"VMusage 14960 69346"
		],
		FontName: "Helvetica-Oblique",
		FullName: "Helvetica Oblique",
		FamilyName: "Helvetica",
		Weight: "Medium",
		ItalicAngle: "-12",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-170 -225 1116 931 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "718",
		XHeight: "523",
		Ascender: "718",
		Descender: "-207",
		StdHW: "76",
		StdVW: "88"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:38:23 1997",
			"UniqueID 43054",
			"VMusage 37069 48094"
		],
		FontName: "Helvetica",
		FullName: "Helvetica",
		FamilyName: "Helvetica",
		Weight: "Medium",
		ItalicAngle: "0",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-166 -225 1000 931 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "718",
		XHeight: "523",
		Ascender: "718",
		Descender: "-207",
		StdHW: "76",
		StdVW: "88"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:52:56 1997",
			"UniqueID 43065",
			"VMusage 41636 52661"
		],
		FontName: "Times-Bold",
		FullName: "Times Bold",
		FamilyName: "Times",
		Weight: "Bold",
		ItalicAngle: "0",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-168 -218 1000 935 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "676",
		XHeight: "461",
		Ascender: "683",
		Descender: "-217",
		StdHW: "44",
		StdVW: "139"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 13:04:06 1997",
			"UniqueID 43066",
			"VMusage 45874 56899"
		],
		FontName: "Times-BoldItalic",
		FullName: "Times Bold Italic",
		FamilyName: "Times",
		Weight: "Bold",
		ItalicAngle: "-15",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-200 -218 996 921",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "669",
		XHeight: "462",
		Ascender: "683",
		Descender: "-217",
		StdHW: "42",
		StdVW: "121"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:56:55 1997",
			"UniqueID 43067",
			"VMusage 47727 58752"
		],
		FontName: "Times-Italic",
		FullName: "Times Italic",
		FamilyName: "Times",
		Weight: "Medium",
		ItalicAngle: "-15.5",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-169 -217 1010 883 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "653",
		XHeight: "441",
		Ascender: "683",
		Descender: "-217",
		StdHW: "32",
		StdVW: "76"
	},
	{
		Comment: [
			"Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 12:49:17 1997",
			"UniqueID 43068",
			"VMusage 43909 54934"
		],
		FontName: "Times-Roman",
		FullName: "Times Roman",
		FamilyName: "Times",
		Weight: "Roman",
		ItalicAngle: "0",
		IsFixedPitch: "false",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-168 -218 1000 898 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "002.000",
		Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "662",
		XHeight: "450",
		Ascender: "683",
		Descender: "-217",
		StdHW: "28",
		StdVW: "84"
	},
	{
		Comment: [
			"Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Mon Jun 23 16:28:00 1997",
			"UniqueID 43048",
			"VMusage 41139 52164"
		],
		FontName: "Courier-Bold",
		FullName: "Courier Bold",
		FamilyName: "Courier",
		Weight: "Bold",
		ItalicAngle: "0",
		IsFixedPitch: "true",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-113 -250 749 801 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "003.000",
		Notice: "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "562",
		XHeight: "439",
		Ascender: "629",
		Descender: "-157",
		StdHW: "84",
		StdVW: "106"
	},
	{
		Comment: [
			"Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Mon Jun 23 16:28:46 1997",
			"UniqueID 43049",
			"VMusage 17529 79244"
		],
		FontName: "Courier-BoldOblique",
		FullName: "Courier Bold Oblique",
		FamilyName: "Courier",
		Weight: "Bold",
		ItalicAngle: "-12",
		IsFixedPitch: "true",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-57 -250 869 801",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "003.000",
		Notice: "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "562",
		XHeight: "439",
		Ascender: "629",
		Descender: "-157",
		StdHW: "84",
		StdVW: "106"
	},
	{
		Comment: [
			"Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 17:37:52 1997",
			"UniqueID 43051",
			"VMusage 16248 75829"
		],
		FontName: "Courier-Oblique",
		FullName: "Courier Oblique",
		FamilyName: "Courier",
		Weight: "Medium",
		ItalicAngle: "-12",
		IsFixedPitch: "true",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-27 -250 849 805 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "003.000",
		Notice: "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "562",
		XHeight: "426",
		Ascender: "629",
		Descender: "-157",
		StdHW: "51",
		StdVW: "51"
	},
	{
		Comment: [
			"Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
			"Creation Date: Thu May  1 17:27:09 1997",
			"UniqueID 43050",
			"VMusage 39754 50779"
		],
		FontName: "Courier",
		FullName: "Courier",
		FamilyName: "Courier",
		Weight: "Medium",
		ItalicAngle: "0",
		IsFixedPitch: "true",
		CharacterSet: "ExtendedRoman",
		FontBBox: "-23 -250 715 805 ",
		UnderlinePosition: "-100",
		UnderlineThickness: "50",
		Version: "003.000",
		Notice: "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
		EncodingScheme: "AdobeStandardEncoding",
		CapHeight: "562",
		XHeight: "426",
		Ascender: "629",
		Descender: "-157",
		StdHW: "51",
		StdVW: "51"
	}
];
var glyphWidths = {
	space: [
		278,
		278,
		278,
		278,
		250,
		250,
		250,
		250,
		600,
		600,
		600,
		600
	],
	exclam: [
		333,
		333,
		278,
		278,
		333,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	quotedbl: [
		474,
		474,
		355,
		355,
		555,
		555,
		420,
		408,
		600,
		600,
		600,
		600
	],
	numbersign: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	dollar: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	percent: [
		889,
		889,
		889,
		889,
		1000,
		833,
		833,
		833,
		600,
		600,
		600,
		600
	],
	ampersand: [
		722,
		722,
		667,
		667,
		833,
		778,
		778,
		778,
		600,
		600,
		600,
		600
	],
	quoteright: [
		278,
		278,
		222,
		222,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	parenleft: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	parenright: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	asterisk: [
		389,
		389,
		389,
		389,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	plus: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	comma: [
		278,
		278,
		278,
		278,
		250,
		250,
		250,
		250,
		600,
		600,
		600,
		600
	],
	hyphen: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	period: [
		278,
		278,
		278,
		278,
		250,
		250,
		250,
		250,
		600,
		600,
		600,
		600
	],
	slash: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	zero: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	one: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	two: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	three: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	four: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	five: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	six: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	seven: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	eight: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	nine: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	colon: [
		333,
		333,
		278,
		278,
		333,
		333,
		333,
		278,
		600,
		600,
		600,
		600
	],
	semicolon: [
		333,
		333,
		278,
		278,
		333,
		333,
		333,
		278,
		600,
		600,
		600,
		600
	],
	less: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	equal: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	greater: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	question: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	at: [
		975,
		975,
		1015,
		1015,
		930,
		832,
		920,
		921,
		600,
		600,
		600,
		600
	],
	A: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	B: [
		722,
		722,
		667,
		667,
		667,
		667,
		611,
		667,
		600,
		600,
		600,
		600
	],
	C: [
		722,
		722,
		722,
		722,
		722,
		667,
		667,
		667,
		600,
		600,
		600,
		600
	],
	D: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	E: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	F: [
		611,
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		600,
		600,
		600,
		600
	],
	G: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	H: [
		722,
		722,
		722,
		722,
		778,
		778,
		722,
		722,
		600,
		600,
		600,
		600
	],
	I: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	J: [
		556,
		556,
		500,
		500,
		500,
		500,
		444,
		389,
		600,
		600,
		600,
		600
	],
	K: [
		722,
		722,
		667,
		667,
		778,
		667,
		667,
		722,
		600,
		600,
		600,
		600
	],
	L: [
		611,
		611,
		556,
		556,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	M: [
		833,
		833,
		833,
		833,
		944,
		889,
		833,
		889,
		600,
		600,
		600,
		600
	],
	N: [
		722,
		722,
		722,
		722,
		722,
		722,
		667,
		722,
		600,
		600,
		600,
		600
	],
	O: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	P: [
		667,
		667,
		667,
		667,
		611,
		611,
		611,
		556,
		600,
		600,
		600,
		600
	],
	Q: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	R: [
		722,
		722,
		722,
		722,
		722,
		667,
		611,
		667,
		600,
		600,
		600,
		600
	],
	S: [
		667,
		667,
		667,
		667,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	T: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	U: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	V: [
		667,
		667,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	W: [
		944,
		944,
		944,
		944,
		1000,
		889,
		833,
		944,
		600,
		600,
		600,
		600
	],
	X: [
		667,
		667,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	Y: [
		667,
		667,
		667,
		667,
		722,
		611,
		556,
		722,
		600,
		600,
		600,
		600
	],
	Z: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	bracketleft: [
		333,
		333,
		278,
		278,
		333,
		333,
		389,
		333,
		600,
		600,
		600,
		600
	],
	backslash: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	bracketright: [
		333,
		333,
		278,
		278,
		333,
		333,
		389,
		333,
		600,
		600,
		600,
		600
	],
	asciicircum: [
		584,
		584,
		469,
		469,
		581,
		570,
		422,
		469,
		600,
		600,
		600,
		600
	],
	underscore: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	quoteleft: [
		278,
		278,
		222,
		222,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	a: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	b: [
		611,
		611,
		556,
		556,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	c: [
		556,
		556,
		500,
		500,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	d: [
		611,
		611,
		556,
		556,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	e: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	f: [
		333,
		333,
		278,
		278,
		333,
		333,
		278,
		333,
		600,
		600,
		600,
		600
	],
	g: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	h: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	i: [
		278,
		278,
		222,
		222,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	j: [
		278,
		278,
		222,
		222,
		333,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	k: [
		556,
		556,
		500,
		500,
		556,
		500,
		444,
		500,
		600,
		600,
		600,
		600
	],
	l: [
		278,
		278,
		222,
		222,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	m: [
		889,
		889,
		833,
		833,
		833,
		778,
		722,
		778,
		600,
		600,
		600,
		600
	],
	n: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	o: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	p: [
		611,
		611,
		556,
		556,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	q: [
		611,
		611,
		556,
		556,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	r: [
		389,
		389,
		333,
		333,
		444,
		389,
		389,
		333,
		600,
		600,
		600,
		600
	],
	s: [
		556,
		556,
		500,
		500,
		389,
		389,
		389,
		389,
		600,
		600,
		600,
		600
	],
	t: [
		333,
		333,
		278,
		278,
		333,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	u: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	v: [
		556,
		556,
		500,
		500,
		500,
		444,
		444,
		500,
		600,
		600,
		600,
		600
	],
	w: [
		778,
		778,
		722,
		722,
		722,
		667,
		667,
		722,
		600,
		600,
		600,
		600
	],
	x: [
		556,
		556,
		500,
		500,
		500,
		500,
		444,
		500,
		600,
		600,
		600,
		600
	],
	y: [
		556,
		556,
		500,
		500,
		500,
		444,
		444,
		500,
		600,
		600,
		600,
		600
	],
	z: [
		500,
		500,
		500,
		500,
		444,
		389,
		389,
		444,
		600,
		600,
		600,
		600
	],
	braceleft: [
		389,
		389,
		334,
		334,
		394,
		348,
		400,
		480,
		600,
		600,
		600,
		600
	],
	bar: [
		280,
		280,
		260,
		260,
		220,
		220,
		275,
		200,
		600,
		600,
		600,
		600
	],
	braceright: [
		389,
		389,
		334,
		334,
		394,
		348,
		400,
		480,
		600,
		600,
		600,
		600
	],
	asciitilde: [
		584,
		584,
		584,
		584,
		520,
		570,
		541,
		541,
		600,
		600,
		600,
		600
	],
	exclamdown: [
		333,
		333,
		333,
		333,
		333,
		389,
		389,
		333,
		600,
		600,
		600,
		600
	],
	cent: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	sterling: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	fraction: [
		167,
		167,
		167,
		167,
		167,
		167,
		167,
		167,
		600,
		600,
		600,
		600
	],
	yen: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	florin: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	section: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	currency: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	quotesingle: [
		238,
		238,
		191,
		191,
		278,
		278,
		214,
		180,
		600,
		600,
		600,
		600
	],
	quotedblleft: [
		500,
		500,
		333,
		333,
		500,
		500,
		556,
		444,
		600,
		600,
		600,
		600
	],
	guillemotleft: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	guilsinglleft: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	guilsinglright: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	fi: [
		611,
		611,
		500,
		500,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	fl: [
		611,
		611,
		500,
		500,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	endash: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	dagger: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	daggerdbl: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	periodcentered: [
		278,
		278,
		278,
		278,
		250,
		250,
		250,
		250,
		600,
		600,
		600,
		600
	],
	paragraph: [
		556,
		556,
		537,
		537,
		540,
		500,
		523,
		453,
		600,
		600,
		600,
		600
	],
	bullet: [
		350,
		350,
		350,
		350,
		350,
		350,
		350,
		350,
		600,
		600,
		600,
		600
	],
	quotesinglbase: [
		278,
		278,
		222,
		222,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	quotedblbase: [
		500,
		500,
		333,
		333,
		500,
		500,
		556,
		444,
		600,
		600,
		600,
		600
	],
	quotedblright: [
		500,
		500,
		333,
		333,
		500,
		500,
		556,
		444,
		600,
		600,
		600,
		600
	],
	guillemotright: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	ellipsis: [
		1000,
		1000,
		1000,
		1000,
		1000,
		1000,
		889,
		1000,
		600,
		600,
		600,
		600
	],
	perthousand: [
		1000,
		1000,
		1000,
		1000,
		1000,
		1000,
		1000,
		1000,
		600,
		600,
		600,
		600
	],
	questiondown: [
		611,
		611,
		611,
		611,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	grave: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	acute: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	circumflex: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	tilde: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	macron: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	breve: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	dotaccent: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	dieresis: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	ring: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	cedilla: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	hungarumlaut: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	ogonek: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	caron: [
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		333,
		600,
		600,
		600,
		600
	],
	emdash: [
		1000,
		1000,
		1000,
		1000,
		1000,
		1000,
		889,
		1000,
		600,
		600,
		600,
		600
	],
	AE: [
		1000,
		1000,
		1000,
		1000,
		1000,
		944,
		889,
		889,
		600,
		600,
		600,
		600
	],
	ordfeminine: [
		370,
		370,
		370,
		370,
		300,
		266,
		276,
		276,
		600,
		600,
		600,
		600
	],
	Lslash: [
		611,
		611,
		556,
		556,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	Oslash: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	OE: [
		1000,
		1000,
		1000,
		1000,
		1000,
		944,
		944,
		889,
		600,
		600,
		600,
		600
	],
	ordmasculine: [
		365,
		365,
		365,
		365,
		330,
		300,
		310,
		310,
		600,
		600,
		600,
		600
	],
	ae: [
		889,
		889,
		889,
		889,
		722,
		722,
		667,
		667,
		600,
		600,
		600,
		600
	],
	dotlessi: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	lslash: [
		278,
		278,
		222,
		222,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	oslash: [
		611,
		611,
		611,
		611,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	oe: [
		944,
		944,
		944,
		944,
		722,
		722,
		667,
		722,
		600,
		600,
		600,
		600
	],
	germandbls: [
		611,
		611,
		611,
		611,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Idieresis: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	eacute: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	abreve: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	uhungarumlaut: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	ecaron: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	Ydieresis: [
		667,
		667,
		667,
		667,
		722,
		611,
		556,
		722,
		600,
		600,
		600,
		600
	],
	divide: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	Yacute: [
		667,
		667,
		667,
		667,
		722,
		611,
		556,
		722,
		600,
		600,
		600,
		600
	],
	Acircumflex: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	aacute: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	Ucircumflex: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	yacute: [
		556,
		556,
		500,
		500,
		500,
		444,
		444,
		500,
		600,
		600,
		600,
		600
	],
	scommaaccent: [
		556,
		556,
		500,
		500,
		389,
		389,
		389,
		389,
		600,
		600,
		600,
		600
	],
	ecircumflex: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	Uring: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Udieresis: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	aogonek: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	Uacute: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	uogonek: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Edieresis: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	Dcroat: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	commaaccent: [
		250,
		250,
		250,
		250,
		250,
		250,
		250,
		250,
		600,
		600,
		600,
		600
	],
	copyright: [
		737,
		737,
		737,
		737,
		747,
		747,
		760,
		760,
		600,
		600,
		600,
		600
	],
	Emacron: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	ccaron: [
		556,
		556,
		500,
		500,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	aring: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	Ncommaaccent: [
		722,
		722,
		722,
		722,
		722,
		722,
		667,
		722,
		600,
		600,
		600,
		600
	],
	lacute: [
		278,
		278,
		222,
		222,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	agrave: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	Tcommaaccent: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	Cacute: [
		722,
		722,
		722,
		722,
		722,
		667,
		667,
		667,
		600,
		600,
		600,
		600
	],
	atilde: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	Edotaccent: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	scaron: [
		556,
		556,
		500,
		500,
		389,
		389,
		389,
		389,
		600,
		600,
		600,
		600
	],
	scedilla: [
		556,
		556,
		500,
		500,
		389,
		389,
		389,
		389,
		600,
		600,
		600,
		600
	],
	iacute: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	lozenge: [
		494,
		494,
		471,
		471,
		494,
		494,
		471,
		471,
		600,
		600,
		600,
		600
	],
	Rcaron: [
		722,
		722,
		722,
		722,
		722,
		667,
		611,
		667,
		600,
		600,
		600,
		600
	],
	Gcommaaccent: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	ucircumflex: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	acircumflex: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	Amacron: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	rcaron: [
		389,
		389,
		333,
		333,
		444,
		389,
		389,
		333,
		600,
		600,
		600,
		600
	],
	ccedilla: [
		556,
		556,
		500,
		500,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	Zdotaccent: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	Thorn: [
		667,
		667,
		667,
		667,
		611,
		611,
		611,
		556,
		600,
		600,
		600,
		600
	],
	Omacron: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Racute: [
		722,
		722,
		722,
		722,
		722,
		667,
		611,
		667,
		600,
		600,
		600,
		600
	],
	Sacute: [
		667,
		667,
		667,
		667,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	dcaron: [
		743,
		743,
		643,
		643,
		672,
		608,
		544,
		588,
		600,
		600,
		600,
		600
	],
	Umacron: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	uring: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	threesuperior: [
		333,
		333,
		333,
		333,
		300,
		300,
		300,
		300,
		600,
		600,
		600,
		600
	],
	Ograve: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Agrave: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	Abreve: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	multiply: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	uacute: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Tcaron: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	partialdiff: [
		494,
		494,
		476,
		476,
		494,
		494,
		476,
		476,
		600,
		600,
		600,
		600
	],
	ydieresis: [
		556,
		556,
		500,
		500,
		500,
		444,
		444,
		500,
		600,
		600,
		600,
		600
	],
	Nacute: [
		722,
		722,
		722,
		722,
		722,
		722,
		667,
		722,
		600,
		600,
		600,
		600
	],
	icircumflex: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	Ecircumflex: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	adieresis: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	edieresis: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	cacute: [
		556,
		556,
		500,
		500,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	nacute: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	umacron: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Ncaron: [
		722,
		722,
		722,
		722,
		722,
		722,
		667,
		722,
		600,
		600,
		600,
		600
	],
	Iacute: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	plusminus: [
		584,
		584,
		584,
		584,
		570,
		570,
		675,
		564,
		600,
		600,
		600,
		600
	],
	brokenbar: [
		280,
		280,
		260,
		260,
		220,
		220,
		275,
		200,
		600,
		600,
		600,
		600
	],
	registered: [
		737,
		737,
		737,
		737,
		747,
		747,
		760,
		760,
		600,
		600,
		600,
		600
	],
	Gbreve: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Idotaccent: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	summation: [
		600,
		600,
		600,
		600,
		600,
		600,
		600,
		600,
		600,
		600,
		600,
		600
	],
	Egrave: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	racute: [
		389,
		389,
		333,
		333,
		444,
		389,
		389,
		333,
		600,
		600,
		600,
		600
	],
	omacron: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Zacute: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	Zcaron: [
		611,
		611,
		611,
		611,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	greaterequal: [
		549,
		549,
		549,
		549,
		549,
		549,
		549,
		549,
		600,
		600,
		600,
		600
	],
	Eth: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Ccedilla: [
		722,
		722,
		722,
		722,
		722,
		667,
		667,
		667,
		600,
		600,
		600,
		600
	],
	lcommaaccent: [
		278,
		278,
		222,
		222,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	tcaron: [
		389,
		389,
		317,
		317,
		416,
		366,
		300,
		326,
		600,
		600,
		600,
		600
	],
	eogonek: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	Uogonek: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Aacute: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	Adieresis: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	egrave: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	zacute: [
		500,
		500,
		500,
		500,
		444,
		389,
		389,
		444,
		600,
		600,
		600,
		600
	],
	iogonek: [
		278,
		278,
		222,
		222,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	Oacute: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	oacute: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	amacron: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		444,
		600,
		600,
		600,
		600
	],
	sacute: [
		556,
		556,
		500,
		500,
		389,
		389,
		389,
		389,
		600,
		600,
		600,
		600
	],
	idieresis: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	Ocircumflex: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Ugrave: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Delta: [
		612,
		612,
		612,
		612,
		612,
		612,
		612,
		612,
		600,
		600,
		600,
		600
	],
	thorn: [
		611,
		611,
		556,
		556,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	twosuperior: [
		333,
		333,
		333,
		333,
		300,
		300,
		300,
		300,
		600,
		600,
		600,
		600
	],
	Odieresis: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	mu: [
		611,
		611,
		556,
		556,
		556,
		576,
		500,
		500,
		600,
		600,
		600,
		600
	],
	igrave: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	ohungarumlaut: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Eogonek: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	dcroat: [
		611,
		611,
		556,
		556,
		556,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	threequarters: [
		834,
		834,
		834,
		834,
		750,
		750,
		750,
		750,
		600,
		600,
		600,
		600
	],
	Scedilla: [
		667,
		667,
		667,
		667,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	lcaron: [
		400,
		400,
		299,
		299,
		394,
		382,
		300,
		344,
		600,
		600,
		600,
		600
	],
	Kcommaaccent: [
		722,
		722,
		667,
		667,
		778,
		667,
		667,
		722,
		600,
		600,
		600,
		600
	],
	Lacute: [
		611,
		611,
		556,
		556,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	trademark: [
		1000,
		1000,
		1000,
		1000,
		1000,
		1000,
		980,
		980,
		600,
		600,
		600,
		600
	],
	edotaccent: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	Igrave: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	Imacron: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	Lcaron: [
		611,
		611,
		556,
		556,
		667,
		611,
		611,
		611,
		600,
		600,
		600,
		600
	],
	onehalf: [
		834,
		834,
		834,
		834,
		750,
		750,
		750,
		750,
		600,
		600,
		600,
		600
	],
	lessequal: [
		549,
		549,
		549,
		549,
		549,
		549,
		549,
		549,
		600,
		600,
		600,
		600
	],
	ocircumflex: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	ntilde: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Uhungarumlaut: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	Eacute: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	emacron: [
		556,
		556,
		556,
		556,
		444,
		444,
		444,
		444,
		600,
		600,
		600,
		600
	],
	gbreve: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	onequarter: [
		834,
		834,
		834,
		834,
		750,
		750,
		750,
		750,
		600,
		600,
		600,
		600
	],
	Scaron: [
		667,
		667,
		667,
		667,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	Scommaaccent: [
		667,
		667,
		667,
		667,
		556,
		556,
		500,
		556,
		600,
		600,
		600,
		600
	],
	Ohungarumlaut: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	degree: [
		400,
		400,
		400,
		400,
		400,
		400,
		400,
		400,
		600,
		600,
		600,
		600
	],
	ograve: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Ccaron: [
		722,
		722,
		722,
		722,
		722,
		667,
		667,
		667,
		600,
		600,
		600,
		600
	],
	ugrave: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	radical: [
		549,
		549,
		453,
		453,
		549,
		549,
		453,
		453,
		600,
		600,
		600,
		600
	],
	Dcaron: [
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	rcommaaccent: [
		389,
		389,
		333,
		333,
		444,
		389,
		389,
		333,
		600,
		600,
		600,
		600
	],
	Ntilde: [
		722,
		722,
		722,
		722,
		722,
		722,
		667,
		722,
		600,
		600,
		600,
		600
	],
	otilde: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	Rcommaaccent: [
		722,
		722,
		722,
		722,
		722,
		667,
		611,
		667,
		600,
		600,
		600,
		600
	],
	Lcommaaccent: [
		611,
		611,
		556,
		556,
		667,
		611,
		556,
		611,
		600,
		600,
		600,
		600
	],
	Atilde: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	Aogonek: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	Aring: [
		722,
		722,
		667,
		667,
		722,
		667,
		611,
		722,
		600,
		600,
		600,
		600
	],
	Otilde: [
		778,
		778,
		778,
		778,
		778,
		722,
		722,
		722,
		600,
		600,
		600,
		600
	],
	zdotaccent: [
		500,
		500,
		500,
		500,
		444,
		389,
		389,
		444,
		600,
		600,
		600,
		600
	],
	Ecaron: [
		667,
		667,
		667,
		667,
		667,
		667,
		611,
		611,
		600,
		600,
		600,
		600
	],
	Iogonek: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	kcommaaccent: [
		556,
		556,
		500,
		500,
		556,
		500,
		444,
		500,
		600,
		600,
		600,
		600
	],
	minus: [
		584,
		584,
		584,
		584,
		570,
		606,
		675,
		564,
		600,
		600,
		600,
		600
	],
	Icircumflex: [
		278,
		278,
		278,
		278,
		389,
		389,
		333,
		333,
		600,
		600,
		600,
		600
	],
	ncaron: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	tcommaaccent: [
		333,
		333,
		278,
		278,
		333,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	logicalnot: [
		584,
		584,
		584,
		584,
		570,
		606,
		675,
		564,
		600,
		600,
		600,
		600
	],
	odieresis: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	udieresis: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	notequal: [
		549,
		549,
		549,
		549,
		549,
		549,
		549,
		549,
		600,
		600,
		600,
		600
	],
	gcommaaccent: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	eth: [
		611,
		611,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	],
	zcaron: [
		500,
		500,
		500,
		500,
		444,
		389,
		389,
		444,
		600,
		600,
		600,
		600
	],
	ncommaaccent: [
		611,
		611,
		556,
		556,
		556,
		556,
		500,
		500,
		600,
		600,
		600,
		600
	],
	onesuperior: [
		333,
		333,
		333,
		333,
		300,
		300,
		300,
		300,
		600,
		600,
		600,
		600
	],
	imacron: [
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		278,
		600,
		600,
		600,
		600
	],
	Euro: [
		556,
		556,
		556,
		556,
		500,
		500,
		500,
		500,
		600,
		600,
		600,
		600
	]
};
var kernPairs = {
	AC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	ACacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	ACcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	ACcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	ATcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	ATcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Au: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Auacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Audieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Augrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Auhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Auogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Auring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Av: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Aw: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Ay: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Ayacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Aydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AacuteC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AacuteCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AacuteCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AacuteCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AacuteG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AacuteGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AacuteGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AacuteO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AacuteQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AacuteT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AacuteTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AacuteTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AacuteU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AacuteV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AacuteW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AacuteY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AacuteYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AacuteYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Aacuteu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacuteuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aacutev: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Aacutew: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Aacutey: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Aacuteyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Aacuteydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AbreveC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AbreveCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AbreveCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AbreveCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AbreveG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AbreveGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AbreveGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AbreveO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AbreveQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AbreveT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AbreveTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AbreveTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AbreveU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AbreveV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AbreveW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AbreveY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AbreveYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AbreveYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Abreveu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abreveuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Abrevev: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Abrevew: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Abrevey: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Abreveyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Abreveydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AcircumflexC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AcircumflexCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AcircumflexCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AcircumflexCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AcircumflexG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AcircumflexGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AcircumflexGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AcircumflexO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AcircumflexQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AcircumflexT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AcircumflexTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AcircumflexTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AcircumflexU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AcircumflexV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AcircumflexW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AcircumflexY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AcircumflexYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AcircumflexYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Acircumflexu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Acircumflexv: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Acircumflexw: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Acircumflexy: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Acircumflexyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Acircumflexydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AdieresisC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AdieresisCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AdieresisCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AdieresisCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AdieresisG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AdieresisGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AdieresisGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AdieresisO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AdieresisQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AdieresisT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AdieresisTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AdieresisTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AdieresisU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AdieresisV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AdieresisW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AdieresisY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AdieresisYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AdieresisYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Adieresisu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Adieresisv: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Adieresisw: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Adieresisy: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Adieresisyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Adieresisydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AgraveC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AgraveCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AgraveCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AgraveCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AgraveG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AgraveGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AgraveGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AgraveO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AgraveQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AgraveT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AgraveTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AgraveTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AgraveU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AgraveV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AgraveW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AgraveY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AgraveYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AgraveYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Agraveu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agraveuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Agravev: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Agravew: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Agravey: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Agraveyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Agraveydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AmacronC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AmacronCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AmacronCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AmacronCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AmacronG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AmacronGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AmacronGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AmacronO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AmacronQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AmacronT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AmacronTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AmacronTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AmacronU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AmacronV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AmacronW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AmacronY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AmacronYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AmacronYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Amacronu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Amacronv: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Amacronw: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Amacrony: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Amacronyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Amacronydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AogonekC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AogonekCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AogonekCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AogonekCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AogonekG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AogonekGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AogonekGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AogonekO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AogonekQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AogonekT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AogonekTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AogonekTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AogonekU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AogonekV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AogonekW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AogonekY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AogonekYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AogonekYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Aogoneku: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aogonekv: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Aogonekw: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-52
	],
	Aogoneky: [
		-30,
		-30,
		-40,
		-40,
		-34,
		-34,
		-55,
		-52
	],
	Aogonekyacute: [
		-30,
		-30,
		-40,
		-40,
		-34,
		-34,
		-55,
		-52
	],
	Aogonekydieresis: [
		-30,
		-30,
		-40,
		-40,
		-34,
		-34,
		-55,
		-52
	],
	AringC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AringCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AringCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AringCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AringG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AringGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AringGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AringO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AringQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AringT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AringTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AringTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AringU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AringV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AringW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AringY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AringYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AringYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Aringu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Aringv: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Aringw: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Aringy: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Aringyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Aringydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	AtildeC: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AtildeCacute: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AtildeCcaron: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AtildeCcedilla: [
		-40,
		-40,
		-30,
		-30,
		-55,
		-65,
		-30,
		-40
	],
	AtildeG: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AtildeGbreve: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AtildeGcommaaccent: [
		-50,
		-50,
		-30,
		-30,
		-55,
		-60,
		-35,
		-40
	],
	AtildeO: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOacute: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOcircumflex: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOdieresis: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOgrave: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOhungarumlaut: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOmacron: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOslash: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeOtilde: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-50,
		-40,
		-55
	],
	AtildeQ: [
		-40,
		-40,
		-30,
		-30,
		-45,
		-55,
		-40,
		-55
	],
	AtildeT: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AtildeTcaron: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AtildeTcommaaccent: [
		-90,
		-90,
		-120,
		-120,
		-95,
		-55,
		-37,
		-111
	],
	AtildeU: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUacute: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUcircumflex: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUdieresis: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUgrave: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUhungarumlaut: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUmacron: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUogonek: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeUring: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-55
	],
	AtildeV: [
		-80,
		-80,
		-70,
		-70,
		-145,
		-95,
		-105,
		-135
	],
	AtildeW: [
		-60,
		-60,
		-50,
		-50,
		-130,
		-100,
		-95,
		-90
	],
	AtildeY: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AtildeYacute: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	AtildeYdieresis: [
		-110,
		-110,
		-100,
		-100,
		-100,
		-70,
		-55,
		-105
	],
	Atildeu: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeuacute: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeudieresis: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeugrave: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeumacron: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeuogonek: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildeuring: [
		-30,
		-30,
		-30,
		-30,
		-50,
		-30,
		-20
	],
	Atildev: [
		-40,
		-40,
		-40,
		-40,
		-100,
		-74,
		-55,
		-74
	],
	Atildew: [
		-30,
		-30,
		-40,
		-40,
		-90,
		-74,
		-55,
		-92
	],
	Atildey: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Atildeyacute: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	Atildeydieresis: [
		-30,
		-30,
		-40,
		-40,
		-74,
		-74,
		-55,
		-92
	],
	BA: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAacute: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAbreve: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAcircumflex: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAdieresis: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAgrave: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAmacron: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAogonek: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAring: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BAtilde: [
		-30,
		-30,
		0,
		0,
		-30,
		-25,
		-25,
		-35
	],
	BU: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUacute: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUcircumflex: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUdieresis: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUgrave: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUhungarumlaut: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUmacron: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUogonek: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	BUring: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	DA: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAacute: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAbreve: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAcircumflex: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAdieresis: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAgrave: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAmacron: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAogonek: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAring: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DAtilde: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DV: [
		-40,
		-40,
		-70,
		-70,
		-40,
		-50,
		-40,
		-40
	],
	DW: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-30
	],
	DY: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	DYacute: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	DYdieresis: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	Dcomma: [
		-30,
		-30,
		-70,
		-70
	],
	Dperiod: [
		-30,
		-30,
		-70,
		-70,
		-20
	],
	DcaronA: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAacute: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAbreve: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAcircumflex: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAdieresis: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAgrave: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAmacron: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAogonek: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAring: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronAtilde: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcaronV: [
		-40,
		-40,
		-70,
		-70,
		-40,
		-50,
		-40,
		-40
	],
	DcaronW: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-30
	],
	DcaronY: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	DcaronYacute: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	DcaronYdieresis: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	Dcaroncomma: [
		-30,
		-30,
		-70,
		-70
	],
	Dcaronperiod: [
		-30,
		-30,
		-70,
		-70,
		-20
	],
	DcroatA: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAacute: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAbreve: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAcircumflex: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAdieresis: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAgrave: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAmacron: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAogonek: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAring: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatAtilde: [
		-40,
		-40,
		-40,
		-40,
		-35,
		-25,
		-35,
		-40
	],
	DcroatV: [
		-40,
		-40,
		-70,
		-70,
		-40,
		-50,
		-40,
		-40
	],
	DcroatW: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-30
	],
	DcroatY: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	DcroatYacute: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	DcroatYdieresis: [
		-70,
		-70,
		-90,
		-90,
		-40,
		-50,
		-40,
		-55
	],
	Dcroatcomma: [
		-30,
		-30,
		-70,
		-70
	],
	Dcroatperiod: [
		-30,
		-30,
		-70,
		-70,
		-20
	],
	FA: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAacute: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAbreve: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAcircumflex: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAdieresis: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAgrave: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAmacron: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAogonek: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAring: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	FAtilde: [
		-80,
		-80,
		-80,
		-80,
		-90,
		-100,
		-115,
		-74
	],
	Fa: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Faacute: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Fabreve: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Facircumflex: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Fadieresis: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Fagrave: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Famacron: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Faogonek: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Faring: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Fatilde: [
		-20,
		-20,
		-50,
		-50,
		-25,
		-95,
		-75,
		-15
	],
	Fcomma: [
		-100,
		-100,
		-150,
		-150,
		-92,
		-129,
		-135,
		-80
	],
	Fperiod: [
		-100,
		-100,
		-150,
		-150,
		-110,
		-129,
		-135,
		-80
	],
	JA: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAacute: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAbreve: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAcircumflex: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAdieresis: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAgrave: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAmacron: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAogonek: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAring: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	JAtilde: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-25,
		-40,
		-60
	],
	Jcomma: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		-25
	],
	Jperiod: [
		-20,
		-20,
		-30,
		-30,
		-20,
		-10,
		-25
	],
	Ju: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Juacute: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jucircumflex: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Judieresis: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jugrave: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Juhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jumacron: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Juogonek: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Juring: [
		-20,
		-20,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	KO: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOacute: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOcircumflex: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOdieresis: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOgrave: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOhungarumlaut: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOmacron: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOslash: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KOtilde: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	Ke: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Keacute: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kecaron: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kecircumflex: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kedieresis: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kedotaccent: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kegrave: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kemacron: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Keogonek: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Ko: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Koacute: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kocircumflex: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kodieresis: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kograve: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kohungarumlaut: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Komacron: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Koslash: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kotilde: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Ku: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kuacute: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kudieresis: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kugrave: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kumacron: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kuogonek: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kuring: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Ky: [
		-40,
		-40,
		-50,
		-50,
		-45,
		-20,
		-40,
		-25
	],
	Kyacute: [
		-40,
		-40,
		-50,
		-50,
		-45,
		-20,
		-40,
		-25
	],
	Kydieresis: [
		-40,
		-40,
		-50,
		-50,
		-45,
		-20,
		-40,
		-25
	],
	KcommaaccentO: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOacute: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOcircumflex: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOdieresis: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOgrave: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOhungarumlaut: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOmacron: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOslash: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	KcommaaccentOtilde: [
		-30,
		-30,
		-50,
		-50,
		-30,
		-30,
		-50,
		-30
	],
	Kcommaaccente: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccenteacute: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccentecaron: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccentecircumflex: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccentedieresis: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccentedotaccent: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccentegrave: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccentemacron: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccenteogonek: [
		-15,
		-15,
		-40,
		-40,
		-25,
		-25,
		-35,
		-25
	],
	Kcommaaccento: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentoacute: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentocircumflex: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentodieresis: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentograve: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentohungarumlaut: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentomacron: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentoslash: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentotilde: [
		-35,
		-35,
		-40,
		-40,
		-25,
		-25,
		-40,
		-35
	],
	Kcommaaccentu: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentuacute: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentucircumflex: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentudieresis: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentugrave: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentuhungarumlaut: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentumacron: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccentuogonek: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccenturing: [
		-30,
		-30,
		-30,
		-30,
		-15,
		-20,
		-40,
		-15
	],
	Kcommaaccenty: [
		-40,
		-40,
		-50,
		-50,
		-45,
		-20,
		-40,
		-25
	],
	Kcommaaccentyacute: [
		-40,
		-40,
		-50,
		-50,
		-45,
		-20,
		-40,
		-25
	],
	Kcommaaccentydieresis: [
		-40,
		-40,
		-50,
		-50,
		-45,
		-20,
		-40,
		-25
	],
	LT: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LTcaron: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LTcommaaccent: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LV: [
		-110,
		-110,
		-110,
		-110,
		-92,
		-37,
		-55,
		-100
	],
	LW: [
		-80,
		-80,
		-70,
		-70,
		-92,
		-37,
		-55,
		-74
	],
	LY: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LYacute: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LYdieresis: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	Lquotedblright: [
		-140,
		-140,
		-140,
		-140,
		-20
	],
	Lquoteright: [
		-140,
		-140,
		-160,
		-160,
		-110,
		-55,
		-37,
		-92
	],
	Ly: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lyacute: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lydieresis: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	LacuteT: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LacuteTcaron: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LacuteTcommaaccent: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LacuteV: [
		-110,
		-110,
		-110,
		-110,
		-92,
		-37,
		-55,
		-100
	],
	LacuteW: [
		-80,
		-80,
		-70,
		-70,
		-92,
		-37,
		-55,
		-74
	],
	LacuteY: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LacuteYacute: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LacuteYdieresis: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	Lacutequotedblright: [
		-140,
		-140,
		-140,
		-140,
		-20
	],
	Lacutequoteright: [
		-140,
		-140,
		-160,
		-160,
		-110,
		-55,
		-37,
		-92
	],
	Lacutey: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lacuteyacute: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lacuteydieresis: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	LcommaaccentT: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LcommaaccentTcaron: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LcommaaccentTcommaaccent: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LcommaaccentV: [
		-110,
		-110,
		-110,
		-110,
		-92,
		-37,
		-55,
		-100
	],
	LcommaaccentW: [
		-80,
		-80,
		-70,
		-70,
		-92,
		-37,
		-55,
		-74
	],
	LcommaaccentY: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LcommaaccentYacute: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LcommaaccentYdieresis: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	Lcommaaccentquotedblright: [
		-140,
		-140,
		-140,
		-140,
		-20
	],
	Lcommaaccentquoteright: [
		-140,
		-140,
		-160,
		-160,
		-110,
		-55,
		-37,
		-92
	],
	Lcommaaccenty: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lcommaaccentyacute: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lcommaaccentydieresis: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	LslashT: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LslashTcaron: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LslashTcommaaccent: [
		-90,
		-90,
		-110,
		-110,
		-92,
		-18,
		-20,
		-92
	],
	LslashV: [
		-110,
		-110,
		-110,
		-110,
		-92,
		-37,
		-55,
		-100
	],
	LslashW: [
		-80,
		-80,
		-70,
		-70,
		-92,
		-37,
		-55,
		-74
	],
	LslashY: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LslashYacute: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	LslashYdieresis: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-37,
		-20,
		-100
	],
	Lslashquotedblright: [
		-140,
		-140,
		-140,
		-140,
		-20
	],
	Lslashquoteright: [
		-140,
		-140,
		-160,
		-160,
		-110,
		-55,
		-37,
		-92
	],
	Lslashy: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lslashyacute: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	Lslashydieresis: [
		-30,
		-30,
		-30,
		-30,
		-55,
		-37,
		-30,
		-55
	],
	OA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Ocomma: [
		-40,
		-40,
		-40,
		-40
	],
	Operiod: [
		-40,
		-40,
		-40,
		-40
	],
	OacuteA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OacuteT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OacuteTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OacuteTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OacuteV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OacuteW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OacuteX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OacuteY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OacuteYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OacuteYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Oacutecomma: [
		-40,
		-40,
		-40,
		-40
	],
	Oacuteperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OcircumflexA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OcircumflexT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OcircumflexTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OcircumflexTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OcircumflexV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OcircumflexW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OcircumflexX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OcircumflexY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OcircumflexYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OcircumflexYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Ocircumflexcomma: [
		-40,
		-40,
		-40,
		-40
	],
	Ocircumflexperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OdieresisA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OdieresisT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OdieresisTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OdieresisTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OdieresisV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OdieresisW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OdieresisX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OdieresisY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OdieresisYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OdieresisYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Odieresiscomma: [
		-40,
		-40,
		-40,
		-40
	],
	Odieresisperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OgraveA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OgraveT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OgraveTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OgraveTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OgraveV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OgraveW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OgraveX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OgraveY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OgraveYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OgraveYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Ogravecomma: [
		-40,
		-40,
		-40,
		-40
	],
	Ograveperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OhungarumlautA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OhungarumlautT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OhungarumlautTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OhungarumlautTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OhungarumlautV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OhungarumlautW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OhungarumlautX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OhungarumlautY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OhungarumlautYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OhungarumlautYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Ohungarumlautcomma: [
		-40,
		-40,
		-40,
		-40
	],
	Ohungarumlautperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OmacronA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OmacronT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OmacronTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OmacronTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OmacronV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OmacronW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OmacronX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OmacronY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OmacronYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OmacronYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Omacroncomma: [
		-40,
		-40,
		-40,
		-40
	],
	Omacronperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OslashA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OslashT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OslashTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OslashTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OslashV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OslashW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OslashX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OslashY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OslashYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OslashYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Oslashcomma: [
		-40,
		-40,
		-40,
		-40
	],
	Oslashperiod: [
		-40,
		-40,
		-40,
		-40
	],
	OtildeA: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAacute: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAbreve: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAcircumflex: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAdieresis: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAgrave: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAmacron: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAogonek: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAring: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeAtilde: [
		-50,
		-50,
		-20,
		-20,
		-40,
		-40,
		-55,
		-35
	],
	OtildeT: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OtildeTcaron: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OtildeTcommaaccent: [
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	OtildeV: [
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50,
		-50
	],
	OtildeW: [
		-50,
		-50,
		-30,
		-30,
		-50,
		-50,
		-50,
		-35
	],
	OtildeX: [
		-50,
		-50,
		-60,
		-60,
		-40,
		-40,
		-40,
		-40
	],
	OtildeY: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OtildeYacute: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	OtildeYdieresis: [
		-70,
		-70,
		-70,
		-70,
		-50,
		-50,
		-50,
		-50
	],
	Otildecomma: [
		-40,
		-40,
		-40,
		-40
	],
	Otildeperiod: [
		-40,
		-40,
		-40,
		-40
	],
	PA: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAacute: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAbreve: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAcircumflex: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAdieresis: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAgrave: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAmacron: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAogonek: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAring: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	PAtilde: [
		-100,
		-100,
		-120,
		-120,
		-74,
		-85,
		-90,
		-92
	],
	Pa: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Paacute: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Pabreve: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Pacircumflex: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Padieresis: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Pagrave: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Pamacron: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Paogonek: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Paring: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Patilde: [
		-30,
		-30,
		-40,
		-40,
		-10,
		-40,
		-80,
		-15
	],
	Pcomma: [
		-120,
		-120,
		-180,
		-180,
		-92,
		-129,
		-135,
		-111
	],
	Pe: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Peacute: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Pecaron: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Pecircumflex: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Pedieresis: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Pedotaccent: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Pegrave: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Pemacron: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Peogonek: [
		-30,
		-30,
		-50,
		-50,
		-20,
		-50,
		-80
	],
	Po: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Poacute: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Pocircumflex: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Podieresis: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Pograve: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Pohungarumlaut: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Pomacron: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Poslash: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Potilde: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-55,
		-80
	],
	Pperiod: [
		-120,
		-120,
		-180,
		-180,
		-110,
		-129,
		-135,
		-111
	],
	QU: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUacute: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUcircumflex: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUdieresis: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUgrave: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUhungarumlaut: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUmacron: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUogonek: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	QUring: [
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10,
		-10
	],
	Qcomma: [
		20,
		20
	],
	Qperiod: [
		20,
		20,
		0,
		0,
		-20
	],
	RO: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROacute: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROcircumflex: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROdieresis: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROgrave: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROmacron: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROslash: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	ROtilde: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RT: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RTcaron: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RTcommaaccent: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RU: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUacute: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUcircumflex: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUdieresis: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUgrave: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUhungarumlaut: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUmacron: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUogonek: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RUring: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RV: [
		-50,
		-50,
		-50,
		-50,
		-55,
		-18,
		-18,
		-80
	],
	RW: [
		-40,
		-40,
		-30,
		-30,
		-35,
		-18,
		-18,
		-55
	],
	RY: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RYacute: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RYdieresis: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RacuteO: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOacute: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOcircumflex: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOdieresis: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOgrave: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOmacron: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOslash: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteOtilde: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RacuteT: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RacuteTcaron: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RacuteTcommaaccent: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RacuteU: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUacute: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUcircumflex: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUdieresis: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUgrave: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUhungarumlaut: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUmacron: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUogonek: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteUring: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RacuteV: [
		-50,
		-50,
		-50,
		-50,
		-55,
		-18,
		-18,
		-80
	],
	RacuteW: [
		-40,
		-40,
		-30,
		-30,
		-35,
		-18,
		-18,
		-55
	],
	RacuteY: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RacuteYacute: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RacuteYdieresis: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RcaronO: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOacute: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOcircumflex: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOdieresis: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOgrave: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOmacron: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOslash: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronOtilde: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcaronT: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RcaronTcaron: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RcaronTcommaaccent: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RcaronU: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUacute: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUcircumflex: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUdieresis: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUgrave: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUhungarumlaut: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUmacron: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUogonek: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronUring: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcaronV: [
		-50,
		-50,
		-50,
		-50,
		-55,
		-18,
		-18,
		-80
	],
	RcaronW: [
		-40,
		-40,
		-30,
		-30,
		-35,
		-18,
		-18,
		-55
	],
	RcaronY: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RcaronYacute: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RcaronYdieresis: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RcommaaccentO: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOacute: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOcircumflex: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOdieresis: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOgrave: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOmacron: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOslash: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentOtilde: [
		-20,
		-20,
		-20,
		-20,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentT: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RcommaaccentTcaron: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RcommaaccentTcommaaccent: [
		-20,
		-20,
		-30,
		-30,
		-40,
		-30,
		0,
		-60
	],
	RcommaaccentU: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUacute: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUcircumflex: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUdieresis: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUgrave: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUhungarumlaut: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUmacron: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUogonek: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentUring: [
		-20,
		-20,
		-40,
		-40,
		-30,
		-40,
		-40,
		-40
	],
	RcommaaccentV: [
		-50,
		-50,
		-50,
		-50,
		-55,
		-18,
		-18,
		-80
	],
	RcommaaccentW: [
		-40,
		-40,
		-30,
		-30,
		-35,
		-18,
		-18,
		-55
	],
	RcommaaccentY: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RcommaaccentYacute: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	RcommaaccentYdieresis: [
		-50,
		-50,
		-50,
		-50,
		-35,
		-18,
		-18,
		-65
	],
	TA: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAacute: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAbreve: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAcircumflex: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAdieresis: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAgrave: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAmacron: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAogonek: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAring: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TAtilde: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TO: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOacute: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOcircumflex: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOdieresis: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOgrave: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOhungarumlaut: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOmacron: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOslash: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TOtilde: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	Ta: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Taacute: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tabreve: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-80
	],
	Tacircumflex: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-80
	],
	Tadieresis: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-40
	],
	Tagrave: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-40
	],
	Tamacron: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-40
	],
	Taogonek: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Taring: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tatilde: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-40
	],
	Tcolon: [
		-40,
		-40,
		-20,
		-20,
		-74,
		-74,
		-55,
		-50
	],
	Tcomma: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-92,
		-74,
		-74
	],
	Te: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Teacute: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tecaron: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tecircumflex: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-52,
		-70
	],
	Tedieresis: [
		-60,
		-60,
		-120,
		-120,
		-52,
		-52,
		-52,
		-30
	],
	Tedotaccent: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tegrave: [
		-60,
		-60,
		-60,
		-60,
		-52,
		-52,
		-52,
		-70
	],
	Temacron: [
		-60,
		-60,
		-60,
		-60,
		-52,
		-52,
		-52,
		-30
	],
	Teogonek: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Thyphen: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-92,
		-74,
		-92
	],
	To: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Toacute: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tocircumflex: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Todieresis: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tograve: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tohungarumlaut: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tomacron: [
		-80,
		-80,
		-60,
		-60,
		-92,
		-95,
		-92,
		-80
	],
	Toslash: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Totilde: [
		-80,
		-80,
		-60,
		-60,
		-92,
		-95,
		-92,
		-80
	],
	Tperiod: [
		-80,
		-80,
		-120,
		-120,
		-90,
		-92,
		-74,
		-74
	],
	Tr: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tracute: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Trcommaaccent: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tsemicolon: [
		-40,
		-40,
		-20,
		-20,
		-74,
		-74,
		-65,
		-55
	],
	Tu: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tuacute: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tucircumflex: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tudieresis: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tugrave: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tuhungarumlaut: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tumacron: [
		-90,
		-90,
		-60,
		-60,
		-92,
		-37,
		-55,
		-45
	],
	Tuogonek: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Turing: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tw: [
		-60,
		-60,
		-120,
		-120,
		-74,
		-37,
		-74,
		-80
	],
	Ty: [
		-60,
		-60,
		-120,
		-120,
		-34,
		-37,
		-74,
		-80
	],
	Tyacute: [
		-60,
		-60,
		-120,
		-120,
		-34,
		-37,
		-74,
		-80
	],
	Tydieresis: [
		-60,
		-60,
		-60,
		-60,
		-34,
		-37,
		-34,
		-80
	],
	TcaronA: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAacute: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAbreve: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAcircumflex: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAdieresis: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAgrave: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAmacron: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAogonek: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAring: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronAtilde: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcaronO: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOacute: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOcircumflex: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOdieresis: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOgrave: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOhungarumlaut: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOmacron: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOslash: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcaronOtilde: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	Tcarona: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcaronaacute: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcaronabreve: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-80
	],
	Tcaronacircumflex: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-80
	],
	Tcaronadieresis: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-40
	],
	Tcaronagrave: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-40
	],
	Tcaronamacron: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-40
	],
	Tcaronaogonek: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcaronaring: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcaronatilde: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-40
	],
	Tcaroncolon: [
		-40,
		-40,
		-20,
		-20,
		-74,
		-74,
		-55,
		-50
	],
	Tcaroncomma: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-92,
		-74,
		-74
	],
	Tcarone: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcaroneacute: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcaronecaron: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcaronecircumflex: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-52,
		-30
	],
	Tcaronedieresis: [
		-60,
		-60,
		-120,
		-120,
		-52,
		-52,
		-52,
		-30
	],
	Tcaronedotaccent: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcaronegrave: [
		-60,
		-60,
		-60,
		-60,
		-52,
		-52,
		-52,
		-70
	],
	Tcaronemacron: [
		-60,
		-60,
		-60,
		-60,
		-52,
		-52,
		-52,
		-30
	],
	Tcaroneogonek: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcaronhyphen: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-92,
		-74,
		-92
	],
	Tcarono: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronoacute: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronocircumflex: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronodieresis: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronograve: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronohungarumlaut: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronomacron: [
		-80,
		-80,
		-60,
		-60,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronoslash: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronotilde: [
		-80,
		-80,
		-60,
		-60,
		-92,
		-95,
		-92,
		-80
	],
	Tcaronperiod: [
		-80,
		-80,
		-120,
		-120,
		-90,
		-92,
		-74,
		-74
	],
	Tcaronr: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcaronracute: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcaronrcommaaccent: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcaronsemicolon: [
		-40,
		-40,
		-20,
		-20,
		-74,
		-74,
		-65,
		-55
	],
	Tcaronu: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronuacute: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronucircumflex: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronudieresis: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronugrave: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronuhungarumlaut: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronumacron: [
		-90,
		-90,
		-60,
		-60,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronuogonek: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronuring: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcaronw: [
		-60,
		-60,
		-120,
		-120,
		-74,
		-37,
		-74,
		-80
	],
	Tcarony: [
		-60,
		-60,
		-120,
		-120,
		-34,
		-37,
		-74,
		-80
	],
	Tcaronyacute: [
		-60,
		-60,
		-120,
		-120,
		-34,
		-37,
		-74,
		-80
	],
	Tcaronydieresis: [
		-60,
		-60,
		-60,
		-60,
		-34,
		-37,
		-34,
		-80
	],
	TcommaaccentA: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAacute: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAbreve: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAcircumflex: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAdieresis: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAgrave: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAmacron: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAogonek: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAring: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentAtilde: [
		-90,
		-90,
		-120,
		-120,
		-90,
		-55,
		-50,
		-93
	],
	TcommaaccentO: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOacute: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOcircumflex: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOdieresis: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOgrave: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOhungarumlaut: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOmacron: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOslash: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	TcommaaccentOtilde: [
		-40,
		-40,
		-40,
		-40,
		-18,
		-18,
		-18,
		-18
	],
	Tcommaaccenta: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcommaaccentaacute: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcommaaccentabreve: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-80
	],
	Tcommaaccentacircumflex: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-80
	],
	Tcommaaccentadieresis: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-40
	],
	Tcommaaccentagrave: [
		-80,
		-80,
		-120,
		-120,
		-52,
		-92,
		-92,
		-40
	],
	Tcommaaccentamacron: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-40
	],
	Tcommaaccentaogonek: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcommaaccentaring: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-92,
		-92,
		-80
	],
	Tcommaaccentatilde: [
		-80,
		-80,
		-60,
		-60,
		-52,
		-92,
		-92,
		-40
	],
	Tcommaaccentcolon: [
		-40,
		-40,
		-20,
		-20,
		-74,
		-74,
		-55,
		-50
	],
	Tcommaaccentcomma: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-92,
		-74,
		-74
	],
	Tcommaaccente: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcommaaccenteacute: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcommaaccentecaron: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcommaaccentecircumflex: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-52,
		-30
	],
	Tcommaaccentedieresis: [
		-60,
		-60,
		-120,
		-120,
		-52,
		-52,
		-52,
		-30
	],
	Tcommaaccentedotaccent: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcommaaccentegrave: [
		-60,
		-60,
		-60,
		-60,
		-52,
		-52,
		-52,
		-30
	],
	Tcommaaccentemacron: [
		-60,
		-60,
		-60,
		-60,
		-52,
		-52,
		-52,
		-70
	],
	Tcommaaccenteogonek: [
		-60,
		-60,
		-120,
		-120,
		-92,
		-92,
		-92,
		-70
	],
	Tcommaaccenthyphen: [
		-120,
		-120,
		-140,
		-140,
		-92,
		-92,
		-74,
		-92
	],
	Tcommaaccento: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentoacute: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentocircumflex: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentodieresis: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentograve: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentohungarumlaut: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentomacron: [
		-80,
		-80,
		-60,
		-60,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentoslash: [
		-80,
		-80,
		-120,
		-120,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentotilde: [
		-80,
		-80,
		-60,
		-60,
		-92,
		-95,
		-92,
		-80
	],
	Tcommaaccentperiod: [
		-80,
		-80,
		-120,
		-120,
		-90,
		-92,
		-74,
		-74
	],
	Tcommaaccentr: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcommaaccentracute: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcommaaccentrcommaaccent: [
		-80,
		-80,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcommaaccentsemicolon: [
		-40,
		-40,
		-20,
		-20,
		-74,
		-74,
		-65,
		-55
	],
	Tcommaaccentu: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentuacute: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentucircumflex: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentudieresis: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentugrave: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentuhungarumlaut: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentumacron: [
		-90,
		-90,
		-60,
		-60,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentuogonek: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccenturing: [
		-90,
		-90,
		-120,
		-120,
		-92,
		-37,
		-55,
		-45
	],
	Tcommaaccentw: [
		-60,
		-60,
		-120,
		-120,
		-74,
		-37,
		-74,
		-80
	],
	Tcommaaccenty: [
		-60,
		-60,
		-120,
		-120,
		-34,
		-37,
		-74,
		-80
	],
	Tcommaaccentyacute: [
		-60,
		-60,
		-120,
		-120,
		-34,
		-37,
		-74,
		-80
	],
	Tcommaaccentydieresis: [
		-60,
		-60,
		-60,
		-60,
		-34,
		-37,
		-34,
		-80
	],
	UA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Ucomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Uperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UacuteA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UacuteAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Uacutecomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Uacuteperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UcircumflexA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UcircumflexAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Ucircumflexcomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Ucircumflexperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UdieresisA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UdieresisAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Udieresiscomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Udieresisperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UgraveA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UgraveAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Ugravecomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Ugraveperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UhungarumlautA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UhungarumlautAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Uhungarumlautcomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Uhungarumlautperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UmacronA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UmacronAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Umacroncomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Umacronperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UogonekA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UogonekAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Uogonekcomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Uogonekperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	UringA: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAacute: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAbreve: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAdieresis: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAgrave: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAmacron: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAogonek: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAring: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	UringAtilde: [
		-50,
		-50,
		-40,
		-40,
		-60,
		-45,
		-40,
		-40
	],
	Uringcomma: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	Uringperiod: [
		-30,
		-30,
		-40,
		-40,
		-50,
		0,
		-25
	],
	VA: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAacute: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAbreve: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAcircumflex: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAdieresis: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAgrave: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAmacron: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAogonek: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAring: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VAtilde: [
		-80,
		-80,
		-80,
		-80,
		-135,
		-85,
		-60,
		-135
	],
	VG: [
		-50,
		-50,
		-40,
		-40,
		-30,
		-10,
		0,
		-15
	],
	VGbreve: [
		-50,
		-50,
		-40,
		-40,
		-30,
		-10,
		0,
		-15
	],
	VGcommaaccent: [
		-50,
		-50,
		-40,
		-40,
		-30,
		-10,
		0,
		-15
	],
	VO: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOacute: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOcircumflex: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOdieresis: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOgrave: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOhungarumlaut: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOmacron: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOslash: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	VOtilde: [
		-50,
		-50,
		-40,
		-40,
		-45,
		-30,
		-30,
		-40
	],
	Va: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-111
	],
	Vaacute: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-111
	],
	Vabreve: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-111
	],
	Vacircumflex: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-71
	],
	Vadieresis: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-71
	],
	Vagrave: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-71
	],
	Vamacron: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-71
	],
	Vaogonek: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-111
	],
	Varing: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-111
	],
	Vatilde: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-111,
		-111,
		-71
	],
	Vcolon: [
		-40,
		-40,
		-40,
		-40,
		-92,
		-74,
		-65,
		-74
	],
	Vcomma: [
		-120,
		-120,
		-125,
		-125,
		-129,
		-129,
		-129,
		-129
	],
	Ve: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-111,
		-111,
		-111
	],
	Veacute: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-111,
		-111,
		-111
	],
	Vecaron: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-111,
		-111,
		-71
	],
	Vecircumflex: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-111,
		-111,
		-71
	],
	Vedieresis: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-71,
		-71,
		-71
	],
	Vedotaccent: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-111,
		-111,
		-111
	],
	Vegrave: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-71,
		-71,
		-71
	],
	Vemacron: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-71,
		-71,
		-71
	],
	Veogonek: [
		-50,
		-50,
		-80,
		-80,
		-100,
		-111,
		-111,
		-111
	],
	Vhyphen: [
		-80,
		-80,
		-80,
		-80,
		-74,
		-70,
		-55,
		-100
	],
	Vo: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-129
	],
	Voacute: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-129
	],
	Vocircumflex: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-129
	],
	Vodieresis: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-89
	],
	Vograve: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-89
	],
	Vohungarumlaut: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-129
	],
	Vomacron: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-89
	],
	Voslash: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-129
	],
	Votilde: [
		-90,
		-90,
		-80,
		-80,
		-100,
		-111,
		-111,
		-89
	],
	Vperiod: [
		-120,
		-120,
		-125,
		-125,
		-145,
		-129,
		-129,
		-129
	],
	Vsemicolon: [
		-40,
		-40,
		-40,
		-40,
		-92,
		-74,
		-74,
		-74
	],
	Vu: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vuacute: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vucircumflex: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vudieresis: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vugrave: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vuhungarumlaut: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vumacron: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vuogonek: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	Vuring: [
		-60,
		-60,
		-70,
		-70,
		-92,
		-55,
		-74,
		-75
	],
	WA: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAacute: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAbreve: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAcircumflex: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAdieresis: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAgrave: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAmacron: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAogonek: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAring: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WAtilde: [
		-60,
		-60,
		-50,
		-50,
		-120,
		-74,
		-60,
		-120
	],
	WO: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOacute: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOcircumflex: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOdieresis: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOgrave: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOmacron: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOslash: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	WOtilde: [
		-20,
		-20,
		-20,
		-20,
		-10,
		-15,
		-25,
		-10
	],
	Wa: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Waacute: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Wabreve: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Wacircumflex: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Wadieresis: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Wagrave: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Wamacron: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Waogonek: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Waring: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Watilde: [
		-40,
		-40,
		-40,
		-40,
		-65,
		-85,
		-92,
		-80
	],
	Wcolon: [
		-10,
		-10,
		0,
		0,
		-55,
		-55,
		-65,
		-37
	],
	Wcomma: [
		-80,
		-80,
		-80,
		-80,
		-92,
		-74,
		-92,
		-92
	],
	We: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-90,
		-92,
		-80
	],
	Weacute: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-90,
		-92,
		-80
	],
	Wecaron: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-90,
		-92,
		-80
	],
	Wecircumflex: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-90,
		-92,
		-80
	],
	Wedieresis: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-50,
		-52,
		-40
	],
	Wedotaccent: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-90,
		-92,
		-80
	],
	Wegrave: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-50,
		-52,
		-40
	],
	Wemacron: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-50,
		-52,
		-40
	],
	Weogonek: [
		-35,
		-35,
		-30,
		-30,
		-65,
		-90,
		-92,
		-80
	],
	Whyphen: [
		-40,
		-40,
		-40,
		-40,
		-37,
		-50,
		-37,
		-65
	],
	Wo: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Woacute: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Wocircumflex: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Wodieresis: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Wograve: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Wohungarumlaut: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Womacron: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Woslash: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Wotilde: [
		-60,
		-60,
		-30,
		-30,
		-75,
		-80,
		-92,
		-80
	],
	Wperiod: [
		-80,
		-80,
		-80,
		-80,
		-92,
		-74,
		-92,
		-92
	],
	Wsemicolon: [
		-10,
		-10,
		0,
		0,
		-55,
		-55,
		-65,
		-37
	],
	Wu: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wuacute: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wucircumflex: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wudieresis: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wugrave: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wuhungarumlaut: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wumacron: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wuogonek: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wuring: [
		-45,
		-45,
		-30,
		-30,
		-50,
		-55,
		-55,
		-50
	],
	Wy: [
		-20,
		-20,
		-20,
		-20,
		-60,
		-55,
		-70,
		-73
	],
	Wyacute: [
		-20,
		-20,
		-20,
		-20,
		-60,
		-55,
		-70,
		-73
	],
	Wydieresis: [
		-20,
		-20,
		-20,
		-20,
		-60,
		-55,
		-70,
		-73
	],
	YA: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAacute: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAbreve: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAcircumflex: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAdieresis: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAgrave: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAmacron: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAogonek: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAring: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YAtilde: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YO: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOacute: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOcircumflex: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOdieresis: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOgrave: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOhungarumlaut: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOmacron: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOslash: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YOtilde: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	Ya: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yaacute: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yabreve: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-100
	],
	Yacircumflex: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yadieresis: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Yagrave: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Yamacron: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-60
	],
	Yaogonek: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yaring: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yatilde: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Ycolon: [
		-50,
		-50,
		-60,
		-60,
		-92,
		-92,
		-65,
		-92
	],
	Ycomma: [
		-100,
		-100,
		-140,
		-140,
		-92,
		-92,
		-92,
		-129
	],
	Ye: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yeacute: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yecaron: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yecircumflex: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-71,
		-92,
		-100
	],
	Yedieresis: [
		-80,
		-80,
		-140,
		-140,
		-71,
		-71,
		-52,
		-60
	],
	Yedotaccent: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yegrave: [
		-80,
		-80,
		-140,
		-140,
		-71,
		-71,
		-52,
		-60
	],
	Yemacron: [
		-80,
		-80,
		-70,
		-70,
		-71,
		-71,
		-52,
		-60
	],
	Yeogonek: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yo: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yoacute: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yocircumflex: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yodieresis: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yograve: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yohungarumlaut: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yomacron: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yoslash: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yotilde: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yperiod: [
		-100,
		-100,
		-140,
		-140,
		-92,
		-74,
		-92,
		-129
	],
	Ysemicolon: [
		-50,
		-50,
		-60,
		-60,
		-92,
		-92,
		-65,
		-92
	],
	Yu: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yuacute: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yucircumflex: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yudieresis: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Yugrave: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Yuhungarumlaut: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yumacron: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Yuogonek: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yuring: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	YacuteA: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAacute: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAbreve: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAcircumflex: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAdieresis: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAgrave: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAmacron: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAogonek: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAring: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteAtilde: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YacuteO: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOacute: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOcircumflex: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOdieresis: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOgrave: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOhungarumlaut: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOmacron: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOslash: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YacuteOtilde: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	Yacutea: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yacuteaacute: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yacuteabreve: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-100
	],
	Yacuteacircumflex: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yacuteadieresis: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Yacuteagrave: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Yacuteamacron: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-60
	],
	Yacuteaogonek: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yacutearing: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Yacuteatilde: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-60
	],
	Yacutecolon: [
		-50,
		-50,
		-60,
		-60,
		-92,
		-92,
		-65,
		-92
	],
	Yacutecomma: [
		-100,
		-100,
		-140,
		-140,
		-92,
		-92,
		-92,
		-129
	],
	Yacutee: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yacuteeacute: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yacuteecaron: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yacuteecircumflex: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-71,
		-92,
		-100
	],
	Yacuteedieresis: [
		-80,
		-80,
		-140,
		-140,
		-71,
		-71,
		-52,
		-60
	],
	Yacuteedotaccent: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yacuteegrave: [
		-80,
		-80,
		-140,
		-140,
		-71,
		-71,
		-52,
		-60
	],
	Yacuteemacron: [
		-80,
		-80,
		-70,
		-70,
		-71,
		-71,
		-52,
		-60
	],
	Yacuteeogonek: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Yacuteo: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yacuteoacute: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yacuteocircumflex: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yacuteodieresis: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yacuteograve: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yacuteohungarumlaut: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yacuteomacron: [
		-100,
		-100,
		-70,
		-70,
		-111,
		-111,
		-92,
		-70
	],
	Yacuteoslash: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Yacuteotilde: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Yacuteperiod: [
		-100,
		-100,
		-140,
		-140,
		-92,
		-74,
		-92,
		-129
	],
	Yacutesemicolon: [
		-50,
		-50,
		-60,
		-60,
		-92,
		-92,
		-65,
		-92
	],
	Yacuteu: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yacuteuacute: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yacuteucircumflex: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yacuteudieresis: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Yacuteugrave: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Yacuteuhungarumlaut: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yacuteumacron: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Yacuteuogonek: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Yacuteuring: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	YdieresisA: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAacute: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAbreve: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAcircumflex: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAdieresis: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAgrave: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAmacron: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAogonek: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAring: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisAtilde: [
		-110,
		-110,
		-110,
		-110,
		-110,
		-74,
		-50,
		-120
	],
	YdieresisO: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOacute: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOcircumflex: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOdieresis: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOgrave: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOhungarumlaut: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOmacron: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOslash: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	YdieresisOtilde: [
		-70,
		-70,
		-85,
		-85,
		-35,
		-25,
		-15,
		-30
	],
	Ydieresisa: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresisaacute: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresisabreve: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresisacircumflex: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresisadieresis: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Ydieresisagrave: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-60
	],
	Ydieresisamacron: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-60
	],
	Ydieresisaogonek: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresisaring: [
		-90,
		-90,
		-140,
		-140,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresisatilde: [
		-90,
		-90,
		-70,
		-70,
		-85,
		-92,
		-92,
		-100
	],
	Ydieresiscolon: [
		-50,
		-50,
		-60,
		-60,
		-92,
		-92,
		-65,
		-92
	],
	Ydieresiscomma: [
		-100,
		-100,
		-140,
		-140,
		-92,
		-92,
		-92,
		-129
	],
	Ydieresise: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Ydieresiseacute: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Ydieresisecaron: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Ydieresisecircumflex: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-71,
		-92,
		-100
	],
	Ydieresisedieresis: [
		-80,
		-80,
		-140,
		-140,
		-71,
		-71,
		-52,
		-60
	],
	Ydieresisedotaccent: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Ydieresisegrave: [
		-80,
		-80,
		-140,
		-140,
		-71,
		-71,
		-52,
		-60
	],
	Ydieresisemacron: [
		-80,
		-80,
		-70,
		-70,
		-71,
		-71,
		-52,
		-60
	],
	Ydieresiseogonek: [
		-80,
		-80,
		-140,
		-140,
		-111,
		-111,
		-92,
		-100
	],
	Ydieresiso: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Ydieresisoacute: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Ydieresisocircumflex: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Ydieresisodieresis: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Ydieresisograve: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Ydieresisohungarumlaut: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Ydieresisomacron: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Ydieresisoslash: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-110
	],
	Ydieresisotilde: [
		-100,
		-100,
		-140,
		-140,
		-111,
		-111,
		-92,
		-70
	],
	Ydieresisperiod: [
		-100,
		-100,
		-140,
		-140,
		-92,
		-74,
		-92,
		-129
	],
	Ydieresissemicolon: [
		-50,
		-50,
		-60,
		-60,
		-92,
		-92,
		-65,
		-92
	],
	Ydieresisu: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Ydieresisuacute: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Ydieresisucircumflex: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Ydieresisudieresis: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Ydieresisugrave: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Ydieresisuhungarumlaut: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Ydieresisumacron: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-71
	],
	Ydieresisuogonek: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	Ydieresisuring: [
		-100,
		-100,
		-110,
		-110,
		-92,
		-92,
		-92,
		-111
	],
	ag: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	agbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	agcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	av: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	aw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	ay: [
		-20,
		-20,
		-30,
		-30
	],
	ayacute: [
		-20,
		-20,
		-30,
		-30
	],
	aydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	aacuteg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aacutegbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aacutegcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aacutev: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	aacutew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	aacutey: [
		-20,
		-20,
		-30,
		-30
	],
	aacuteyacute: [
		-20,
		-20,
		-30,
		-30
	],
	aacuteydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	abreveg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	abrevegbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	abrevegcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	abrevev: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	abrevew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	abrevey: [
		-20,
		-20,
		-30,
		-30
	],
	abreveyacute: [
		-20,
		-20,
		-30,
		-30
	],
	abreveydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	acircumflexg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	acircumflexgbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	acircumflexgcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	acircumflexv: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	acircumflexw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	acircumflexy: [
		-20,
		-20,
		-30,
		-30
	],
	acircumflexyacute: [
		-20,
		-20,
		-30,
		-30
	],
	acircumflexydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	adieresisg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	adieresisgbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	adieresisgcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	adieresisv: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	adieresisw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	adieresisy: [
		-20,
		-20,
		-30,
		-30
	],
	adieresisyacute: [
		-20,
		-20,
		-30,
		-30
	],
	adieresisydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	agraveg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	agravegbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	agravegcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	agravev: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	agravew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	agravey: [
		-20,
		-20,
		-30,
		-30
	],
	agraveyacute: [
		-20,
		-20,
		-30,
		-30
	],
	agraveydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	amacrong: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	amacrongbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	amacrongcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	amacronv: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	amacronw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	amacrony: [
		-20,
		-20,
		-30,
		-30
	],
	amacronyacute: [
		-20,
		-20,
		-30,
		-30
	],
	amacronydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	aogonekg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aogonekgbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aogonekgcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aogonekv: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	aogonekw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	aogoneky: [
		-20,
		-20,
		-30,
		-30
	],
	aogonekyacute: [
		-20,
		-20,
		-30,
		-30
	],
	aogonekydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	aringg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aringgbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aringgcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	aringv: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	aringw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	aringy: [
		-20,
		-20,
		-30,
		-30
	],
	aringyacute: [
		-20,
		-20,
		-30,
		-30
	],
	aringydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	atildeg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	atildegbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	atildegcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	atildev: [
		-15,
		-15,
		-20,
		-20,
		-25,
		0,
		0,
		-20
	],
	atildew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		0,
		-15
	],
	atildey: [
		-20,
		-20,
		-30,
		-30
	],
	atildeyacute: [
		-20,
		-20,
		-30,
		-30
	],
	atildeydieresis: [
		-20,
		-20,
		-30,
		-30
	],
	bl: [
		-10,
		-10,
		-20,
		-20
	],
	blacute: [
		-10,
		-10,
		-20,
		-20
	],
	blcommaaccent: [
		-10,
		-10,
		-20,
		-20
	],
	blslash: [
		-10,
		-10,
		-20,
		-20
	],
	bu: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	buacute: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	bucircumflex: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	budieresis: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	bugrave: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	buhungarumlaut: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	bumacron: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	buogonek: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	buring: [
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20,
		-20
	],
	bv: [
		-20,
		-20,
		-20,
		-20,
		-15,
		0,
		0,
		-15
	],
	by: [
		-20,
		-20,
		-20,
		-20
	],
	byacute: [
		-20,
		-20,
		-20,
		-20
	],
	bydieresis: [
		-20,
		-20,
		-20,
		-20
	],
	ch: [
		-10,
		-10,
		0,
		0,
		0,
		-10,
		-15
	],
	ck: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	ckcommaaccent: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	cl: [
		-20,
		-20
	],
	clacute: [
		-20,
		-20
	],
	clcommaaccent: [
		-20,
		-20
	],
	clslash: [
		-20,
		-20
	],
	cy: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	cyacute: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	cydieresis: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	cacuteh: [
		-10,
		-10,
		0,
		0,
		0,
		-10,
		-15
	],
	cacutek: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	cacutekcommaaccent: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	cacutel: [
		-20,
		-20
	],
	cacutelacute: [
		-20,
		-20
	],
	cacutelcommaaccent: [
		-20,
		-20
	],
	cacutelslash: [
		-20,
		-20
	],
	cacutey: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	cacuteyacute: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	cacuteydieresis: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	ccaronh: [
		-10,
		-10,
		0,
		0,
		0,
		-10,
		-15
	],
	ccaronk: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	ccaronkcommaaccent: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	ccaronl: [
		-20,
		-20
	],
	ccaronlacute: [
		-20,
		-20
	],
	ccaronlcommaaccent: [
		-20,
		-20
	],
	ccaronlslash: [
		-20,
		-20
	],
	ccarony: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	ccaronyacute: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	ccaronydieresis: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	ccedillah: [
		-10,
		-10,
		0,
		0,
		0,
		-10,
		-15
	],
	ccedillak: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	ccedillakcommaaccent: [
		-20,
		-20,
		-20,
		-20,
		0,
		-10,
		-20
	],
	ccedillal: [
		-20,
		-20
	],
	ccedillalacute: [
		-20,
		-20
	],
	ccedillalcommaaccent: [
		-20,
		-20
	],
	ccedillalslash: [
		-20,
		-20
	],
	ccedillay: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	ccedillayacute: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	ccedillaydieresis: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		0,
		-15
	],
	colonspace: [
		-40,
		-40,
		-50,
		-50
	],
	commaquotedblright: [
		-120,
		-120,
		-100,
		-100,
		-45,
		-95,
		-140,
		-70
	],
	commaquoteright: [
		-120,
		-120,
		-100,
		-100,
		-55,
		-95,
		-140,
		-70
	],
	commaspace: [
		-40,
		-40
	],
	dd: [
		-10,
		-10
	],
	ddcroat: [
		-10,
		-10
	],
	dv: [
		-15,
		-15
	],
	dw: [
		-15,
		-15,
		0,
		0,
		-15
	],
	dy: [
		-15,
		-15
	],
	dyacute: [
		-15,
		-15
	],
	dydieresis: [
		-15,
		-15
	],
	dcroatd: [
		-10,
		-10
	],
	dcroatdcroat: [
		-10,
		-10
	],
	dcroatv: [
		-15,
		-15
	],
	dcroatw: [
		-15,
		-15,
		0,
		0,
		-15
	],
	dcroaty: [
		-15,
		-15
	],
	dcroatyacute: [
		-15,
		-15
	],
	dcroatydieresis: [
		-15,
		-15
	],
	ecomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	eperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	ev: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	ew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	ex: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	ey: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eacutecomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	eacuteperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	eacutev: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	eacutew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	eacutex: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	eacutey: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eacuteyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eacuteydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	ecaroncomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	ecaronperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	ecaronv: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	ecaronw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	ecaronx: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	ecarony: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	ecaronyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	ecaronydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	ecircumflexcomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	ecircumflexperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	ecircumflexv: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	ecircumflexw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	ecircumflexx: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	ecircumflexy: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	ecircumflexyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	ecircumflexydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	edieresiscomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	edieresisperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	edieresisv: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	edieresisw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	edieresisx: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	edieresisy: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	edieresisyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	edieresisydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	edotaccentcomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	edotaccentperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	edotaccentv: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	edotaccentw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	edotaccentx: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	edotaccenty: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	edotaccentyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	edotaccentydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	egravecomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	egraveperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	egravev: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	egravew: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	egravex: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	egravey: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	egraveyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	egraveydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	emacroncomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	emacronperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	emacronv: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	emacronw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	emacronx: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	emacrony: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	emacronyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	emacronydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eogonekcomma: [
		10,
		10,
		-15,
		-15,
		0,
		0,
		-10
	],
	eogonekperiod: [
		20,
		20,
		-15,
		-15,
		0,
		0,
		-15
	],
	eogonekv: [
		-15,
		-15,
		-30,
		-30,
		-15,
		0,
		-15,
		-25
	],
	eogonekw: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-15,
		-25
	],
	eogonekx: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		-20,
		-15
	],
	eogoneky: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eogonekyacute: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	eogonekydieresis: [
		-15,
		-15,
		-20,
		-20,
		0,
		0,
		-30,
		-15
	],
	fcomma: [
		-10,
		-10,
		-30,
		-30,
		-15,
		-10,
		-10
	],
	fe: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10
	],
	feacute: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10
	],
	fecaron: [
		-10,
		-10,
		-30,
		-30
	],
	fecircumflex: [
		-10,
		-10,
		-30,
		-30
	],
	fedieresis: [
		-10,
		-10,
		-30,
		-30
	],
	fedotaccent: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10
	],
	fegrave: [
		-10,
		-10,
		-30,
		-30
	],
	femacron: [
		-10,
		-10,
		-30,
		-30
	],
	feogonek: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10
	],
	fo: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	foacute: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	focircumflex: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	fodieresis: [
		-20,
		-20,
		-30,
		-30,
		-25
	],
	fograve: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	fohungarumlaut: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	fomacron: [
		-20,
		-20,
		-30,
		-30,
		-25
	],
	foslash: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	fotilde: [
		-20,
		-20,
		-30,
		-30,
		-25,
		-10
	],
	fperiod: [
		-10,
		-10,
		-30,
		-30,
		-15,
		-10,
		-15
	],
	fquotedblright: [
		30,
		30,
		60,
		60,
		50
	],
	fquoteright: [
		30,
		30,
		50,
		50,
		55,
		55,
		92,
		55
	],
	ge: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	geacute: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gecaron: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gecircumflex: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gedieresis: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gedotaccent: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gegrave: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gemacron: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	geogonek: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	ggbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	ggcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	gbrevee: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveeacute: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveecaron: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveecircumflex: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveedieresis: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveedotaccent: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveegrave: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveemacron: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveeogonek: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gbreveg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	gbrevegbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	gbrevegcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccente: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccenteacute: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentecaron: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentecircumflex: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentedieresis: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentedotaccent: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentegrave: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentemacron: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccenteogonek: [
		10,
		10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentg: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentgbreve: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentgcommaaccent: [
		-10,
		-10,
		0,
		0,
		0,
		0,
		-10
	],
	hy: [
		-20,
		-20,
		-30,
		-30,
		-15,
		0,
		0,
		-5
	],
	hyacute: [
		-20,
		-20,
		-30,
		-30,
		-15,
		0,
		0,
		-5
	],
	hydieresis: [
		-20,
		-20,
		-30,
		-30,
		-15,
		0,
		0,
		-5
	],
	ko: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	koacute: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kocircumflex: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kodieresis: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kograve: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kohungarumlaut: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	komacron: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	koslash: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kotilde: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccento: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentoacute: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentocircumflex: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentodieresis: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentograve: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentohungarumlaut: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentomacron: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentoslash: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	kcommaaccentotilde: [
		-15,
		-15,
		-20,
		-20,
		-15,
		-10,
		-10,
		-10
	],
	lw: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ly: [
		-15,
		-15
	],
	lyacute: [
		-15,
		-15
	],
	lydieresis: [
		-15,
		-15
	],
	lacutew: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	lacutey: [
		-15,
		-15
	],
	lacuteyacute: [
		-15,
		-15
	],
	lacuteydieresis: [
		-15,
		-15
	],
	lcommaaccentw: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	lcommaaccenty: [
		-15,
		-15
	],
	lcommaaccentyacute: [
		-15,
		-15
	],
	lcommaaccentydieresis: [
		-15,
		-15
	],
	lslashw: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	lslashy: [
		-15,
		-15
	],
	lslashyacute: [
		-15,
		-15
	],
	lslashydieresis: [
		-15,
		-15
	],
	mu: [
		-20,
		-20,
		-10,
		-10
	],
	muacute: [
		-20,
		-20,
		-10,
		-10
	],
	mucircumflex: [
		-20,
		-20,
		-10,
		-10
	],
	mudieresis: [
		-20,
		-20,
		-10,
		-10
	],
	mugrave: [
		-20,
		-20,
		-10,
		-10
	],
	muhungarumlaut: [
		-20,
		-20,
		-10,
		-10
	],
	mumacron: [
		-20,
		-20,
		-10,
		-10
	],
	muogonek: [
		-20,
		-20,
		-10,
		-10
	],
	muring: [
		-20,
		-20,
		-10,
		-10
	],
	my: [
		-30,
		-30,
		-15,
		-15
	],
	myacute: [
		-30,
		-30,
		-15,
		-15
	],
	mydieresis: [
		-30,
		-30,
		-15,
		-15
	],
	nu: [
		-10,
		-10,
		-10,
		-10
	],
	nuacute: [
		-10,
		-10,
		-10,
		-10
	],
	nucircumflex: [
		-10,
		-10,
		-10,
		-10
	],
	nudieresis: [
		-10,
		-10,
		-10,
		-10
	],
	nugrave: [
		-10,
		-10,
		-10,
		-10
	],
	nuhungarumlaut: [
		-10,
		-10,
		-10,
		-10
	],
	numacron: [
		-10,
		-10,
		-10,
		-10
	],
	nuogonek: [
		-10,
		-10,
		-10,
		-10
	],
	nuring: [
		-10,
		-10,
		-10,
		-10
	],
	nv: [
		-40,
		-40,
		-20,
		-20,
		-40,
		-40,
		-40,
		-40
	],
	ny: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	nyacute: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	nydieresis: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	nacuteu: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteuacute: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteucircumflex: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteudieresis: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteugrave: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteuhungarumlaut: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteumacron: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteuogonek: [
		-10,
		-10,
		-10,
		-10
	],
	nacuteuring: [
		-10,
		-10,
		-10,
		-10
	],
	nacutev: [
		-40,
		-40,
		-20,
		-20,
		-40,
		-40,
		-40,
		-40
	],
	nacutey: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	nacuteyacute: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	nacuteydieresis: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ncaronu: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronuacute: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronucircumflex: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronudieresis: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronugrave: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronuhungarumlaut: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronumacron: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronuogonek: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronuring: [
		-10,
		-10,
		-10,
		-10
	],
	ncaronv: [
		-40,
		-40,
		-20,
		-20,
		-40,
		-40,
		-40,
		-40
	],
	ncarony: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ncaronyacute: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ncaronydieresis: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ncommaaccentu: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentuacute: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentucircumflex: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentudieresis: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentugrave: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentuhungarumlaut: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentumacron: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentuogonek: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccenturing: [
		-10,
		-10,
		-10,
		-10
	],
	ncommaaccentv: [
		-40,
		-40,
		-20,
		-20,
		-40,
		-40,
		-40,
		-40
	],
	ncommaaccenty: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ncommaaccentyacute: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ncommaaccentydieresis: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ntildeu: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeuacute: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeucircumflex: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeudieresis: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeugrave: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeuhungarumlaut: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeumacron: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeuogonek: [
		-10,
		-10,
		-10,
		-10
	],
	ntildeuring: [
		-10,
		-10,
		-10,
		-10
	],
	ntildev: [
		-40,
		-40,
		-20,
		-20,
		-40,
		-40,
		-40,
		-40
	],
	ntildey: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ntildeyacute: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ntildeydieresis: [
		-20,
		-20,
		-15,
		-15,
		0,
		0,
		0,
		-15
	],
	ov: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	ow: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	ox: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	oy: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	oyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	oydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	oacutev: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	oacutew: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	oacutex: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	oacutey: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	oacuteyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	oacuteydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ocircumflexv: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	ocircumflexw: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	ocircumflexx: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	ocircumflexy: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ocircumflexyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ocircumflexydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	odieresisv: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	odieresisw: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	odieresisx: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	odieresisy: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	odieresisyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	odieresisydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ogravev: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	ogravew: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	ogravex: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	ogravey: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ograveyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ograveydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ohungarumlautv: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	ohungarumlautw: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	ohungarumlautx: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	ohungarumlauty: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ohungarumlautyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	ohungarumlautydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	omacronv: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	omacronw: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	omacronx: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	omacrony: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	omacronyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	omacronydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	oslashv: [
		-20,
		-20,
		-70,
		-70,
		-10,
		-15,
		-10,
		-15
	],
	oslashw: [
		-15,
		-15,
		-70,
		-70,
		-10,
		-25,
		0,
		-25
	],
	oslashx: [
		-30,
		-30,
		-85,
		-85,
		0,
		-10
	],
	oslashy: [
		-20,
		-20,
		-70,
		-70,
		0,
		-10,
		0,
		-10
	],
	oslashyacute: [
		-20,
		-20,
		-70,
		-70,
		0,
		-10,
		0,
		-10
	],
	oslashydieresis: [
		-20,
		-20,
		-70,
		-70,
		0,
		-10,
		0,
		-10
	],
	otildev: [
		-20,
		-20,
		-15,
		-15,
		-10,
		-15,
		-10,
		-15
	],
	otildew: [
		-15,
		-15,
		-15,
		-15,
		-10,
		-25,
		0,
		-25
	],
	otildex: [
		-30,
		-30,
		-30,
		-30,
		0,
		-10
	],
	otildey: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	otildeyacute: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	otildeydieresis: [
		-20,
		-20,
		-30,
		-30,
		0,
		-10,
		0,
		-10
	],
	py: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	pyacute: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	pydieresis: [
		-15,
		-15,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	periodquotedblright: [
		-120,
		-120,
		-100,
		-100,
		-55,
		-95,
		-140,
		-70
	],
	periodquoteright: [
		-120,
		-120,
		-100,
		-100,
		-55,
		-95,
		-140,
		-70
	],
	periodspace: [
		-40,
		-40,
		-60,
		-60
	],
	quotedblrightspace: [
		-80,
		-80,
		-40,
		-40
	],
	quoteleftquoteleft: [
		-46,
		-46,
		-57,
		-57,
		-63,
		-74,
		-111,
		-74
	],
	quoterightd: [
		-80,
		-80,
		-50,
		-50,
		-20,
		-15,
		-25,
		-50
	],
	quoterightdcroat: [
		-80,
		-80,
		-50,
		-50,
		-20,
		-15,
		-25,
		-50
	],
	quoterightl: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	quoterightlacute: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	quoterightlcommaaccent: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	quoterightlslash: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	quoterightquoteright: [
		-46,
		-46,
		-57,
		-57,
		-63,
		-74,
		-111,
		-74
	],
	quoterightr: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-15,
		-25,
		-50
	],
	quoterightracute: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-15,
		-25,
		-50
	],
	quoterightrcaron: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-15,
		-25,
		-50
	],
	quoterightrcommaaccent: [
		-40,
		-40,
		-50,
		-50,
		-20,
		-15,
		-25,
		-50
	],
	quoterights: [
		-60,
		-60,
		-50,
		-50,
		-37,
		-74,
		-40,
		-55
	],
	quoterightsacute: [
		-60,
		-60,
		-50,
		-50,
		-37,
		-74,
		-40,
		-55
	],
	quoterightscaron: [
		-60,
		-60,
		-50,
		-50,
		-37,
		-74,
		-40,
		-55
	],
	quoterightscedilla: [
		-60,
		-60,
		-50,
		-50,
		-37,
		-74,
		-40,
		-55
	],
	quoterightscommaaccent: [
		-60,
		-60,
		-50,
		-50,
		-37,
		-74,
		-40,
		-55
	],
	quoterightspace: [
		-80,
		-80,
		-70,
		-70,
		-74,
		-74,
		-111,
		-74
	],
	quoterightv: [
		-20,
		-20,
		0,
		0,
		-20,
		-15,
		-10,
		-50
	],
	rc: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rccaron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rccedilla: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcomma: [
		-60,
		-60,
		-50,
		-50,
		-92,
		-65,
		-111,
		-40
	],
	rd: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	rdcroat: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	rg: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rgbreve: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rgcommaaccent: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rhyphen: [
		-20,
		-20,
		0,
		0,
		-37,
		0,
		-20,
		-20
	],
	ro: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	roacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rocircumflex: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rodieresis: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rograve: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rohungarumlaut: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	romacron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	roslash: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rotilde: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rperiod: [
		-60,
		-60,
		-50,
		-50,
		-100,
		-65,
		-111,
		-55
	],
	rq: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rs: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rsacute: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rscaron: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rscedilla: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rscommaaccent: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rt: [
		20,
		20,
		40,
		40
	],
	rtcommaaccent: [
		20,
		20,
		40,
		40
	],
	rv: [
		10,
		10,
		30,
		30,
		-10
	],
	ry: [
		10,
		10,
		30,
		30
	],
	ryacute: [
		10,
		10,
		30,
		30
	],
	rydieresis: [
		10,
		10,
		30,
		30
	],
	racutec: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	racutecacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteccaron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteccedilla: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	racutecomma: [
		-60,
		-60,
		-50,
		-50,
		-92,
		-65,
		-111,
		-40
	],
	racuted: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	racutedcroat: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	racuteg: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	racutegbreve: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	racutegcommaaccent: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	racutehyphen: [
		-20,
		-20,
		0,
		0,
		-37,
		0,
		-20,
		-20
	],
	racuteo: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteoacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteocircumflex: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteodieresis: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteograve: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteohungarumlaut: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteomacron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteoslash: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteotilde: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	racuteperiod: [
		-60,
		-60,
		-50,
		-50,
		-100,
		-65,
		-111,
		-55
	],
	racuteq: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	racutes: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	racutesacute: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	racutescaron: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	racutescedilla: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	racutescommaaccent: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	racutet: [
		20,
		20,
		40,
		40
	],
	racutetcommaaccent: [
		20,
		20,
		40,
		40
	],
	racutev: [
		10,
		10,
		30,
		30,
		-10
	],
	racutey: [
		10,
		10,
		30,
		30
	],
	racuteyacute: [
		10,
		10,
		30,
		30
	],
	racuteydieresis: [
		10,
		10,
		30,
		30
	],
	rcaronc: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaroncacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronccaron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronccedilla: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaroncomma: [
		-60,
		-60,
		-50,
		-50,
		-92,
		-65,
		-111,
		-40
	],
	rcarond: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	rcarondcroat: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	rcarong: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rcarongbreve: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rcarongcommaaccent: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rcaronhyphen: [
		-20,
		-20,
		0,
		0,
		-37,
		0,
		-20,
		-20
	],
	rcarono: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronoacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronocircumflex: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronodieresis: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronograve: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronohungarumlaut: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronomacron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronoslash: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronotilde: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcaronperiod: [
		-60,
		-60,
		-50,
		-50,
		-100,
		-65,
		-111,
		-55
	],
	rcaronq: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcarons: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcaronsacute: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcaronscaron: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcaronscedilla: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcaronscommaaccent: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcaront: [
		20,
		20,
		40,
		40
	],
	rcarontcommaaccent: [
		20,
		20,
		40,
		40
	],
	rcaronv: [
		10,
		10,
		30,
		30,
		-10
	],
	rcarony: [
		10,
		10,
		30,
		30
	],
	rcaronyacute: [
		10,
		10,
		30,
		30
	],
	rcaronydieresis: [
		10,
		10,
		30,
		30
	],
	rcommaaccentc: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentcacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentccaron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentccedilla: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentcomma: [
		-60,
		-60,
		-50,
		-50,
		-92,
		-65,
		-111,
		-40
	],
	rcommaaccentd: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	rcommaaccentdcroat: [
		-20,
		-20,
		0,
		0,
		0,
		0,
		-37
	],
	rcommaaccentg: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rcommaaccentgbreve: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rcommaaccentgcommaaccent: [
		-15,
		-15,
		0,
		0,
		-10,
		0,
		-37,
		-18
	],
	rcommaaccenthyphen: [
		-20,
		-20,
		0,
		0,
		-37,
		0,
		-20,
		-20
	],
	rcommaaccento: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentoacute: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentocircumflex: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentodieresis: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentograve: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentohungarumlaut: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentomacron: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentoslash: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentotilde: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-45
	],
	rcommaaccentperiod: [
		-60,
		-60,
		-50,
		-50,
		-100,
		-65,
		-111,
		-55
	],
	rcommaaccentq: [
		-20,
		-20,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccents: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcommaaccentsacute: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcommaaccentscaron: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcommaaccentscedilla: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcommaaccentscommaaccent: [
		-15,
		-15,
		0,
		0,
		0,
		0,
		-10
	],
	rcommaaccentt: [
		20,
		20,
		40,
		40
	],
	rcommaaccenttcommaaccent: [
		20,
		20,
		40,
		40
	],
	rcommaaccentv: [
		10,
		10,
		30,
		30,
		-10
	],
	rcommaaccenty: [
		10,
		10,
		30,
		30
	],
	rcommaaccentyacute: [
		10,
		10,
		30,
		30
	],
	rcommaaccentydieresis: [
		10,
		10,
		30,
		30
	],
	sw: [
		-15,
		-15,
		-30,
		-30
	],
	sacutew: [
		-15,
		-15,
		-30,
		-30
	],
	scaronw: [
		-15,
		-15,
		-30,
		-30
	],
	scedillaw: [
		-15,
		-15,
		-30,
		-30
	],
	scommaaccentw: [
		-15,
		-15,
		-30,
		-30
	],
	semicolonspace: [
		-40,
		-40,
		-50,
		-50
	],
	spaceT: [
		-100,
		-100,
		-50,
		-50,
		-30,
		0,
		-18,
		-18
	],
	spaceTcaron: [
		-100,
		-100,
		-50,
		-50,
		-30,
		0,
		-18,
		-18
	],
	spaceTcommaaccent: [
		-100,
		-100,
		-50,
		-50,
		-30,
		0,
		-18,
		-18
	],
	spaceV: [
		-80,
		-80,
		-50,
		-50,
		-45,
		-70,
		-35,
		-50
	],
	spaceW: [
		-80,
		-80,
		-40,
		-40,
		-30,
		-70,
		-40,
		-30
	],
	spaceY: [
		-120,
		-120,
		-90,
		-90,
		-55,
		-70,
		-75,
		-90
	],
	spaceYacute: [
		-120,
		-120,
		-90,
		-90,
		-55,
		-70,
		-75,
		-90
	],
	spaceYdieresis: [
		-120,
		-120,
		-90,
		-90,
		-55,
		-70,
		-75,
		-90
	],
	spacequotedblleft: [
		-80,
		-80,
		-30,
		-30
	],
	spacequoteleft: [
		-60,
		-60,
		-60,
		-60
	],
	va: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vaacute: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vabreve: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vacircumflex: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vadieresis: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vagrave: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vamacron: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vaogonek: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	varing: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vatilde: [
		-20,
		-20,
		-25,
		-25,
		-10,
		0,
		0,
		-25
	],
	vcomma: [
		-80,
		-80,
		-80,
		-80,
		-55,
		-37,
		-74,
		-65
	],
	vo: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	voacute: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	vocircumflex: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	vodieresis: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	vograve: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	vohungarumlaut: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	vomacron: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	voslash: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	votilde: [
		-30,
		-30,
		-25,
		-25,
		-10,
		-15,
		0,
		-20
	],
	vperiod: [
		-80,
		-80,
		-80,
		-80,
		-70,
		-37,
		-74,
		-65
	],
	wcomma: [
		-40,
		-40,
		-60,
		-60,
		-55,
		-37,
		-74,
		-65
	],
	wo: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	woacute: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	wocircumflex: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	wodieresis: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	wograve: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	wohungarumlaut: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	womacron: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	woslash: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	wotilde: [
		-20,
		-20,
		-10,
		-10,
		-10,
		-15,
		0,
		-10
	],
	wperiod: [
		-40,
		-40,
		-60,
		-60,
		-70,
		-37,
		-74,
		-65
	],
	xe: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xeacute: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xecaron: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xecircumflex: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xedieresis: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xedotaccent: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xegrave: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xemacron: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	xeogonek: [
		-10,
		-10,
		-30,
		-30,
		0,
		-10,
		0,
		-15
	],
	ya: [
		-30,
		-30,
		-20,
		-20
	],
	yaacute: [
		-30,
		-30,
		-20,
		-20
	],
	yabreve: [
		-30,
		-30,
		-20,
		-20
	],
	yacircumflex: [
		-30,
		-30,
		-20,
		-20
	],
	yadieresis: [
		-30,
		-30,
		-20,
		-20
	],
	yagrave: [
		-30,
		-30,
		-20,
		-20
	],
	yamacron: [
		-30,
		-30,
		-20,
		-20
	],
	yaogonek: [
		-30,
		-30,
		-20,
		-20
	],
	yaring: [
		-30,
		-30,
		-20,
		-20
	],
	yatilde: [
		-30,
		-30,
		-20,
		-20
	],
	ycomma: [
		-80,
		-80,
		-100,
		-100,
		-55,
		-37,
		-55,
		-65
	],
	ye: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yeacute: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yecaron: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yecircumflex: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yedieresis: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yedotaccent: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yegrave: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yemacron: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yeogonek: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yo: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yoacute: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yocircumflex: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yodieresis: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yograve: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yohungarumlaut: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yomacron: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yoslash: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yotilde: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yperiod: [
		-80,
		-80,
		-100,
		-100,
		-70,
		-37,
		-55,
		-65
	],
	yacutea: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteaacute: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteabreve: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteacircumflex: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteadieresis: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteagrave: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteamacron: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteaogonek: [
		-30,
		-30,
		-20,
		-20
	],
	yacutearing: [
		-30,
		-30,
		-20,
		-20
	],
	yacuteatilde: [
		-30,
		-30,
		-20,
		-20
	],
	yacutecomma: [
		-80,
		-80,
		-100,
		-100,
		-55,
		-37,
		-55,
		-65
	],
	yacutee: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteeacute: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteecaron: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteecircumflex: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteedieresis: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteedotaccent: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteegrave: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteemacron: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteeogonek: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	yacuteo: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteoacute: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteocircumflex: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteodieresis: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteograve: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteohungarumlaut: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteomacron: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteoslash: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteotilde: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	yacuteperiod: [
		-80,
		-80,
		-100,
		-100,
		-70,
		-37,
		-55,
		-65
	],
	ydieresisa: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisaacute: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisabreve: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisacircumflex: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisadieresis: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisagrave: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisamacron: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisaogonek: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisaring: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresisatilde: [
		-30,
		-30,
		-20,
		-20
	],
	ydieresiscomma: [
		-80,
		-80,
		-100,
		-100,
		-55,
		-37,
		-55,
		-65
	],
	ydieresise: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresiseacute: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresisecaron: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresisecircumflex: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresisedieresis: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresisedotaccent: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresisegrave: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresisemacron: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresiseogonek: [
		-10,
		-10,
		-20,
		-20,
		-10
	],
	ydieresiso: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisoacute: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisocircumflex: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisodieresis: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisograve: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisohungarumlaut: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisomacron: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisoslash: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisotilde: [
		-25,
		-25,
		-20,
		-20,
		-25
	],
	ydieresisperiod: [
		-80,
		-80,
		-100,
		-100,
		-70,
		-37,
		-55,
		-65
	],
	ze: [
		10,
		10,
		-15,
		-15
	],
	zeacute: [
		10,
		10,
		-15,
		-15
	],
	zecaron: [
		10,
		10,
		-15,
		-15
	],
	zecircumflex: [
		10,
		10,
		-15,
		-15
	],
	zedieresis: [
		10,
		10,
		-15,
		-15
	],
	zedotaccent: [
		10,
		10,
		-15,
		-15
	],
	zegrave: [
		10,
		10,
		-15,
		-15
	],
	zemacron: [
		10,
		10,
		-15,
		-15
	],
	zeogonek: [
		10,
		10,
		-15,
		-15
	],
	zacutee: [
		10,
		10,
		-15,
		-15
	],
	zacuteeacute: [
		10,
		10,
		-15,
		-15
	],
	zacuteecaron: [
		10,
		10,
		-15,
		-15
	],
	zacuteecircumflex: [
		10,
		10,
		-15,
		-15
	],
	zacuteedieresis: [
		10,
		10,
		-15,
		-15
	],
	zacuteedotaccent: [
		10,
		10,
		-15,
		-15
	],
	zacuteegrave: [
		10,
		10,
		-15,
		-15
	],
	zacuteemacron: [
		10,
		10,
		-15,
		-15
	],
	zacuteeogonek: [
		10,
		10,
		-15,
		-15
	],
	zcarone: [
		10,
		10,
		-15,
		-15
	],
	zcaroneacute: [
		10,
		10,
		-15,
		-15
	],
	zcaronecaron: [
		10,
		10,
		-15,
		-15
	],
	zcaronecircumflex: [
		10,
		10,
		-15,
		-15
	],
	zcaronedieresis: [
		10,
		10,
		-15,
		-15
	],
	zcaronedotaccent: [
		10,
		10,
		-15,
		-15
	],
	zcaronegrave: [
		10,
		10,
		-15,
		-15
	],
	zcaronemacron: [
		10,
		10,
		-15,
		-15
	],
	zcaroneogonek: [
		10,
		10,
		-15,
		-15
	],
	zdotaccente: [
		10,
		10,
		-15,
		-15
	],
	zdotaccenteacute: [
		10,
		10,
		-15,
		-15
	],
	zdotaccentecaron: [
		10,
		10,
		-15,
		-15
	],
	zdotaccentecircumflex: [
		10,
		10,
		-15,
		-15
	],
	zdotaccentedieresis: [
		10,
		10,
		-15,
		-15
	],
	zdotaccentedotaccent: [
		10,
		10,
		-15,
		-15
	],
	zdotaccentegrave: [
		10,
		10,
		-15,
		-15
	],
	zdotaccentemacron: [
		10,
		10,
		-15,
		-15
	],
	zdotaccenteogonek: [
		10,
		10,
		-15,
		-15
	],
	Bcomma: [
		0,
		0,
		-20,
		-20
	],
	Bperiod: [
		0,
		0,
		-20,
		-20
	],
	Ccomma: [
		0,
		0,
		-30,
		-30
	],
	Cperiod: [
		0,
		0,
		-30,
		-30
	],
	Cacutecomma: [
		0,
		0,
		-30,
		-30
	],
	Cacuteperiod: [
		0,
		0,
		-30,
		-30
	],
	Ccaroncomma: [
		0,
		0,
		-30,
		-30
	],
	Ccaronperiod: [
		0,
		0,
		-30,
		-30
	],
	Ccedillacomma: [
		0,
		0,
		-30,
		-30
	],
	Ccedillaperiod: [
		0,
		0,
		-30,
		-30
	],
	Fe: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Feacute: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Fecaron: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Fecircumflex: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Fedieresis: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Fedotaccent: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Fegrave: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Femacron: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Feogonek: [
		0,
		0,
		-30,
		-30,
		-25,
		-100,
		-75
	],
	Fo: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Foacute: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Focircumflex: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Fodieresis: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Fograve: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Fohungarumlaut: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Fomacron: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Foslash: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Fotilde: [
		0,
		0,
		-30,
		-30,
		-25,
		-70,
		-105,
		-15
	],
	Fr: [
		0,
		0,
		-45,
		-45,
		0,
		-50,
		-55
	],
	Fracute: [
		0,
		0,
		-45,
		-45,
		0,
		-50,
		-55
	],
	Frcaron: [
		0,
		0,
		-45,
		-45,
		0,
		-50,
		-55
	],
	Frcommaaccent: [
		0,
		0,
		-45,
		-45,
		0,
		-50,
		-55
	],
	Ja: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jaacute: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jabreve: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jacircumflex: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jadieresis: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jagrave: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jamacron: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jaogonek: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jaring: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	Jatilde: [
		0,
		0,
		-20,
		-20,
		-15,
		-40,
		-35
	],
	LcaronT: [
		0,
		0,
		-110,
		-110
	],
	LcaronTcaron: [
		0,
		0,
		-110,
		-110
	],
	LcaronTcommaaccent: [
		0,
		0,
		-110,
		-110
	],
	LcaronV: [
		0,
		0,
		-110,
		-110
	],
	LcaronW: [
		0,
		0,
		-70,
		-70
	],
	LcaronY: [
		0,
		0,
		-140,
		-140
	],
	LcaronYacute: [
		0,
		0,
		-140,
		-140
	],
	LcaronYdieresis: [
		0,
		0,
		-140,
		-140
	],
	Lcaronquotedblright: [
		0,
		0,
		-140,
		-140
	],
	Lcaronquoteright: [
		0,
		0,
		-160,
		-160,
		0,
		0,
		0,
		-92
	],
	Lcarony: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-55
	],
	Lcaronyacute: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-55
	],
	Lcaronydieresis: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-55
	],
	Scomma: [
		0,
		0,
		-20,
		-20
	],
	Speriod: [
		0,
		0,
		-20,
		-20
	],
	Sacutecomma: [
		0,
		0,
		-20,
		-20
	],
	Sacuteperiod: [
		0,
		0,
		-20,
		-20
	],
	Scaroncomma: [
		0,
		0,
		-20,
		-20
	],
	Scaronperiod: [
		0,
		0,
		-20,
		-20
	],
	Scedillacomma: [
		0,
		0,
		-20,
		-20
	],
	Scedillaperiod: [
		0,
		0,
		-20,
		-20
	],
	Scommaaccentcomma: [
		0,
		0,
		-20,
		-20
	],
	Scommaaccentperiod: [
		0,
		0,
		-20,
		-20
	],
	Trcaron: [
		0,
		0,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcaronrcaron: [
		0,
		0,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Tcommaaccentrcaron: [
		0,
		0,
		-120,
		-120,
		-74,
		-37,
		-55,
		-35
	],
	Yhyphen: [
		0,
		0,
		-140,
		-140,
		-92,
		-92,
		-74,
		-111
	],
	Yi: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Yiacute: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Yiogonek: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Yacutehyphen: [
		0,
		0,
		-140,
		-140,
		-92,
		-92,
		-74,
		-111
	],
	Yacutei: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Yacuteiacute: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Yacuteiogonek: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Ydieresishyphen: [
		0,
		0,
		-140,
		-140,
		-92,
		-92,
		-74,
		-111
	],
	Ydieresisi: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Ydieresisiacute: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	Ydieresisiogonek: [
		0,
		0,
		-20,
		-20,
		-37,
		-55,
		-74,
		-55
	],
	bb: [
		0,
		0,
		-10,
		-10,
		-10,
		-10
	],
	bcomma: [
		0,
		0,
		-40,
		-40
	],
	bperiod: [
		0,
		0,
		-40,
		-40,
		-40,
		-40,
		-40,
		-40
	],
	ccomma: [
		0,
		0,
		-15,
		-15
	],
	cacutecomma: [
		0,
		0,
		-15,
		-15
	],
	ccaroncomma: [
		0,
		0,
		-15,
		-15
	],
	ccedillacomma: [
		0,
		0,
		-15,
		-15
	],
	fa: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	faacute: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	fabreve: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	facircumflex: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	fadieresis: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	fagrave: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	famacron: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	faogonek: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	faring: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	fatilde: [
		0,
		0,
		-30,
		-30,
		0,
		0,
		0,
		-10
	],
	fdotlessi: [
		0,
		0,
		-28,
		-28,
		-35,
		-30,
		-60,
		-50
	],
	gr: [
		0,
		0,
		-10,
		-10
	],
	gracute: [
		0,
		0,
		-10,
		-10
	],
	grcaron: [
		0,
		0,
		-10,
		-10
	],
	grcommaaccent: [
		0,
		0,
		-10,
		-10
	],
	gbrever: [
		0,
		0,
		-10,
		-10
	],
	gbreveracute: [
		0,
		0,
		-10,
		-10
	],
	gbrevercaron: [
		0,
		0,
		-10,
		-10
	],
	gbrevercommaaccent: [
		0,
		0,
		-10,
		-10
	],
	gcommaaccentr: [
		0,
		0,
		-10,
		-10
	],
	gcommaaccentracute: [
		0,
		0,
		-10,
		-10
	],
	gcommaaccentrcaron: [
		0,
		0,
		-10,
		-10
	],
	gcommaaccentrcommaaccent: [
		0,
		0,
		-10,
		-10
	],
	ke: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	keacute: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kecaron: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kecircumflex: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kedieresis: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kedotaccent: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kegrave: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kemacron: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	keogonek: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccente: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccenteacute: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccentecaron: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccentecircumflex: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccentedieresis: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccentedotaccent: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccentegrave: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccentemacron: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	kcommaaccenteogonek: [
		0,
		0,
		-20,
		-20,
		-10,
		-30,
		-10,
		-10
	],
	ocomma: [
		0,
		0,
		-40,
		-40
	],
	operiod: [
		0,
		0,
		-40,
		-40
	],
	oacutecomma: [
		0,
		0,
		-40,
		-40
	],
	oacuteperiod: [
		0,
		0,
		-40,
		-40
	],
	ocircumflexcomma: [
		0,
		0,
		-40,
		-40
	],
	ocircumflexperiod: [
		0,
		0,
		-40,
		-40
	],
	odieresiscomma: [
		0,
		0,
		-40,
		-40
	],
	odieresisperiod: [
		0,
		0,
		-40,
		-40
	],
	ogravecomma: [
		0,
		0,
		-40,
		-40
	],
	ograveperiod: [
		0,
		0,
		-40,
		-40
	],
	ohungarumlautcomma: [
		0,
		0,
		-40,
		-40
	],
	ohungarumlautperiod: [
		0,
		0,
		-40,
		-40
	],
	omacroncomma: [
		0,
		0,
		-40,
		-40
	],
	omacronperiod: [
		0,
		0,
		-40,
		-40
	],
	oslasha: [
		0,
		0,
		-55,
		-55
	],
	oslashaacute: [
		0,
		0,
		-55,
		-55
	],
	oslashabreve: [
		0,
		0,
		-55,
		-55
	],
	oslashacircumflex: [
		0,
		0,
		-55,
		-55
	],
	oslashadieresis: [
		0,
		0,
		-55,
		-55
	],
	oslashagrave: [
		0,
		0,
		-55,
		-55
	],
	oslashamacron: [
		0,
		0,
		-55,
		-55
	],
	oslashaogonek: [
		0,
		0,
		-55,
		-55
	],
	oslasharing: [
		0,
		0,
		-55,
		-55
	],
	oslashatilde: [
		0,
		0,
		-55,
		-55
	],
	oslashb: [
		0,
		0,
		-55,
		-55
	],
	oslashc: [
		0,
		0,
		-55,
		-55
	],
	oslashcacute: [
		0,
		0,
		-55,
		-55
	],
	oslashccaron: [
		0,
		0,
		-55,
		-55
	],
	oslashccedilla: [
		0,
		0,
		-55,
		-55
	],
	oslashcomma: [
		0,
		0,
		-95,
		-95
	],
	oslashd: [
		0,
		0,
		-55,
		-55
	],
	oslashdcroat: [
		0,
		0,
		-55,
		-55
	],
	oslashe: [
		0,
		0,
		-55,
		-55
	],
	oslasheacute: [
		0,
		0,
		-55,
		-55
	],
	oslashecaron: [
		0,
		0,
		-55,
		-55
	],
	oslashecircumflex: [
		0,
		0,
		-55,
		-55
	],
	oslashedieresis: [
		0,
		0,
		-55,
		-55
	],
	oslashedotaccent: [
		0,
		0,
		-55,
		-55
	],
	oslashegrave: [
		0,
		0,
		-55,
		-55
	],
	oslashemacron: [
		0,
		0,
		-55,
		-55
	],
	oslasheogonek: [
		0,
		0,
		-55,
		-55
	],
	oslashf: [
		0,
		0,
		-55,
		-55
	],
	oslashg: [
		0,
		0,
		-55,
		-55,
		0,
		0,
		-10
	],
	oslashgbreve: [
		0,
		0,
		-55,
		-55,
		0,
		0,
		-10
	],
	oslashgcommaaccent: [
		0,
		0,
		-55,
		-55,
		0,
		0,
		-10
	],
	oslashh: [
		0,
		0,
		-55,
		-55
	],
	oslashi: [
		0,
		0,
		-55,
		-55
	],
	oslashiacute: [
		0,
		0,
		-55,
		-55
	],
	oslashicircumflex: [
		0,
		0,
		-55,
		-55
	],
	oslashidieresis: [
		0,
		0,
		-55,
		-55
	],
	oslashigrave: [
		0,
		0,
		-55,
		-55
	],
	oslashimacron: [
		0,
		0,
		-55,
		-55
	],
	oslashiogonek: [
		0,
		0,
		-55,
		-55
	],
	oslashj: [
		0,
		0,
		-55,
		-55
	],
	oslashk: [
		0,
		0,
		-55,
		-55
	],
	oslashkcommaaccent: [
		0,
		0,
		-55,
		-55
	],
	oslashl: [
		0,
		0,
		-55,
		-55
	],
	oslashlacute: [
		0,
		0,
		-55,
		-55
	],
	oslashlcommaaccent: [
		0,
		0,
		-55,
		-55
	],
	oslashlslash: [
		0,
		0,
		-55,
		-55
	],
	oslashm: [
		0,
		0,
		-55,
		-55
	],
	oslashn: [
		0,
		0,
		-55,
		-55
	],
	oslashnacute: [
		0,
		0,
		-55,
		-55
	],
	oslashncaron: [
		0,
		0,
		-55,
		-55
	],
	oslashncommaaccent: [
		0,
		0,
		-55,
		-55
	],
	oslashntilde: [
		0,
		0,
		-55,
		-55
	],
	oslasho: [
		0,
		0,
		-55,
		-55
	],
	oslashoacute: [
		0,
		0,
		-55,
		-55
	],
	oslashocircumflex: [
		0,
		0,
		-55,
		-55
	],
	oslashodieresis: [
		0,
		0,
		-55,
		-55
	],
	oslashograve: [
		0,
		0,
		-55,
		-55
	],
	oslashohungarumlaut: [
		0,
		0,
		-55,
		-55
	],
	oslashomacron: [
		0,
		0,
		-55,
		-55
	],
	oslashoslash: [
		0,
		0,
		-55,
		-55
	],
	oslashotilde: [
		0,
		0,
		-55,
		-55
	],
	oslashp: [
		0,
		0,
		-55,
		-55
	],
	oslashperiod: [
		0,
		0,
		-95,
		-95
	],
	oslashq: [
		0,
		0,
		-55,
		-55
	],
	oslashr: [
		0,
		0,
		-55,
		-55
	],
	oslashracute: [
		0,
		0,
		-55,
		-55
	],
	oslashrcaron: [
		0,
		0,
		-55,
		-55
	],
	oslashrcommaaccent: [
		0,
		0,
		-55,
		-55
	],
	oslashs: [
		0,
		0,
		-55,
		-55
	],
	oslashsacute: [
		0,
		0,
		-55,
		-55
	],
	oslashscaron: [
		0,
		0,
		-55,
		-55
	],
	oslashscedilla: [
		0,
		0,
		-55,
		-55
	],
	oslashscommaaccent: [
		0,
		0,
		-55,
		-55
	],
	oslasht: [
		0,
		0,
		-55,
		-55
	],
	oslashtcommaaccent: [
		0,
		0,
		-55,
		-55
	],
	oslashu: [
		0,
		0,
		-55,
		-55
	],
	oslashuacute: [
		0,
		0,
		-55,
		-55
	],
	oslashucircumflex: [
		0,
		0,
		-55,
		-55
	],
	oslashudieresis: [
		0,
		0,
		-55,
		-55
	],
	oslashugrave: [
		0,
		0,
		-55,
		-55
	],
	oslashuhungarumlaut: [
		0,
		0,
		-55,
		-55
	],
	oslashumacron: [
		0,
		0,
		-55,
		-55
	],
	oslashuogonek: [
		0,
		0,
		-55,
		-55
	],
	oslashuring: [
		0,
		0,
		-55,
		-55
	],
	oslashz: [
		0,
		0,
		-55,
		-55
	],
	oslashzacute: [
		0,
		0,
		-55,
		-55
	],
	oslashzcaron: [
		0,
		0,
		-55,
		-55
	],
	oslashzdotaccent: [
		0,
		0,
		-55,
		-55
	],
	otildecomma: [
		0,
		0,
		-40,
		-40
	],
	otildeperiod: [
		0,
		0,
		-40,
		-40
	],
	pcomma: [
		0,
		0,
		-35,
		-35
	],
	pperiod: [
		0,
		0,
		-35,
		-35
	],
	ra: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	raacute: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rabreve: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racircumflex: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	radieresis: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	ragrave: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	ramacron: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	raogonek: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	raring: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	ratilde: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcolon: [
		0,
		0,
		30,
		30
	],
	ri: [
		0,
		0,
		15,
		15
	],
	riacute: [
		0,
		0,
		15,
		15
	],
	ricircumflex: [
		0,
		0,
		15,
		15
	],
	ridieresis: [
		0,
		0,
		15,
		15
	],
	rigrave: [
		0,
		0,
		15,
		15
	],
	rimacron: [
		0,
		0,
		15,
		15
	],
	riogonek: [
		0,
		0,
		15,
		15
	],
	rk: [
		0,
		0,
		15,
		15
	],
	rkcommaaccent: [
		0,
		0,
		15,
		15
	],
	rl: [
		0,
		0,
		15,
		15
	],
	rlacute: [
		0,
		0,
		15,
		15
	],
	rlcommaaccent: [
		0,
		0,
		15,
		15
	],
	rlslash: [
		0,
		0,
		15,
		15
	],
	rm: [
		0,
		0,
		25,
		25
	],
	rn: [
		0,
		0,
		25,
		25,
		-15
	],
	rnacute: [
		0,
		0,
		25,
		25,
		-15
	],
	rncaron: [
		0,
		0,
		25,
		25,
		-15
	],
	rncommaaccent: [
		0,
		0,
		25,
		25,
		-15
	],
	rntilde: [
		0,
		0,
		25,
		25,
		-15
	],
	rp: [
		0,
		0,
		30,
		30,
		-10
	],
	rsemicolon: [
		0,
		0,
		30,
		30
	],
	ru: [
		0,
		0,
		15,
		15
	],
	ruacute: [
		0,
		0,
		15,
		15
	],
	rucircumflex: [
		0,
		0,
		15,
		15
	],
	rudieresis: [
		0,
		0,
		15,
		15
	],
	rugrave: [
		0,
		0,
		15,
		15
	],
	ruhungarumlaut: [
		0,
		0,
		15,
		15
	],
	rumacron: [
		0,
		0,
		15,
		15
	],
	ruogonek: [
		0,
		0,
		15,
		15
	],
	ruring: [
		0,
		0,
		15,
		15
	],
	racutea: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteaacute: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteabreve: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteacircumflex: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteadieresis: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteagrave: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteamacron: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteaogonek: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racutearing: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racuteatilde: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	racutecolon: [
		0,
		0,
		30,
		30
	],
	racutei: [
		0,
		0,
		15,
		15
	],
	racuteiacute: [
		0,
		0,
		15,
		15
	],
	racuteicircumflex: [
		0,
		0,
		15,
		15
	],
	racuteidieresis: [
		0,
		0,
		15,
		15
	],
	racuteigrave: [
		0,
		0,
		15,
		15
	],
	racuteimacron: [
		0,
		0,
		15,
		15
	],
	racuteiogonek: [
		0,
		0,
		15,
		15
	],
	racutek: [
		0,
		0,
		15,
		15
	],
	racutekcommaaccent: [
		0,
		0,
		15,
		15
	],
	racutel: [
		0,
		0,
		15,
		15
	],
	racutelacute: [
		0,
		0,
		15,
		15
	],
	racutelcommaaccent: [
		0,
		0,
		15,
		15
	],
	racutelslash: [
		0,
		0,
		15,
		15
	],
	racutem: [
		0,
		0,
		25,
		25
	],
	racuten: [
		0,
		0,
		25,
		25,
		-15
	],
	racutenacute: [
		0,
		0,
		25,
		25,
		-15
	],
	racutencaron: [
		0,
		0,
		25,
		25,
		-15
	],
	racutencommaaccent: [
		0,
		0,
		25,
		25,
		-15
	],
	racutentilde: [
		0,
		0,
		25,
		25,
		-15
	],
	racutep: [
		0,
		0,
		30,
		30,
		-10
	],
	racutesemicolon: [
		0,
		0,
		30,
		30
	],
	racuteu: [
		0,
		0,
		15,
		15
	],
	racuteuacute: [
		0,
		0,
		15,
		15
	],
	racuteucircumflex: [
		0,
		0,
		15,
		15
	],
	racuteudieresis: [
		0,
		0,
		15,
		15
	],
	racuteugrave: [
		0,
		0,
		15,
		15
	],
	racuteuhungarumlaut: [
		0,
		0,
		15,
		15
	],
	racuteumacron: [
		0,
		0,
		15,
		15
	],
	racuteuogonek: [
		0,
		0,
		15,
		15
	],
	racuteuring: [
		0,
		0,
		15,
		15
	],
	rcarona: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronaacute: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronabreve: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronacircumflex: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronadieresis: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronagrave: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronamacron: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronaogonek: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronaring: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaronatilde: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcaroncolon: [
		0,
		0,
		30,
		30
	],
	rcaroni: [
		0,
		0,
		15,
		15
	],
	rcaroniacute: [
		0,
		0,
		15,
		15
	],
	rcaronicircumflex: [
		0,
		0,
		15,
		15
	],
	rcaronidieresis: [
		0,
		0,
		15,
		15
	],
	rcaronigrave: [
		0,
		0,
		15,
		15
	],
	rcaronimacron: [
		0,
		0,
		15,
		15
	],
	rcaroniogonek: [
		0,
		0,
		15,
		15
	],
	rcaronk: [
		0,
		0,
		15,
		15
	],
	rcaronkcommaaccent: [
		0,
		0,
		15,
		15
	],
	rcaronl: [
		0,
		0,
		15,
		15
	],
	rcaronlacute: [
		0,
		0,
		15,
		15
	],
	rcaronlcommaaccent: [
		0,
		0,
		15,
		15
	],
	rcaronlslash: [
		0,
		0,
		15,
		15
	],
	rcaronm: [
		0,
		0,
		25,
		25
	],
	rcaronn: [
		0,
		0,
		25,
		25,
		-15
	],
	rcaronnacute: [
		0,
		0,
		25,
		25,
		-15
	],
	rcaronncaron: [
		0,
		0,
		25,
		25,
		-15
	],
	rcaronncommaaccent: [
		0,
		0,
		25,
		25,
		-15
	],
	rcaronntilde: [
		0,
		0,
		25,
		25,
		-15
	],
	rcaronp: [
		0,
		0,
		30,
		30,
		-10
	],
	rcaronsemicolon: [
		0,
		0,
		30,
		30
	],
	rcaronu: [
		0,
		0,
		15,
		15
	],
	rcaronuacute: [
		0,
		0,
		15,
		15
	],
	rcaronucircumflex: [
		0,
		0,
		15,
		15
	],
	rcaronudieresis: [
		0,
		0,
		15,
		15
	],
	rcaronugrave: [
		0,
		0,
		15,
		15
	],
	rcaronuhungarumlaut: [
		0,
		0,
		15,
		15
	],
	rcaronumacron: [
		0,
		0,
		15,
		15
	],
	rcaronuogonek: [
		0,
		0,
		15,
		15
	],
	rcaronuring: [
		0,
		0,
		15,
		15
	],
	rcommaaccenta: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentaacute: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentabreve: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentacircumflex: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentadieresis: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentagrave: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentamacron: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentaogonek: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentaring: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentatilde: [
		0,
		0,
		-10,
		-10,
		0,
		0,
		-15
	],
	rcommaaccentcolon: [
		0,
		0,
		30,
		30
	],
	rcommaaccenti: [
		0,
		0,
		15,
		15
	],
	rcommaaccentiacute: [
		0,
		0,
		15,
		15
	],
	rcommaaccenticircumflex: [
		0,
		0,
		15,
		15
	],
	rcommaaccentidieresis: [
		0,
		0,
		15,
		15
	],
	rcommaaccentigrave: [
		0,
		0,
		15,
		15
	],
	rcommaaccentimacron: [
		0,
		0,
		15,
		15
	],
	rcommaaccentiogonek: [
		0,
		0,
		15,
		15
	],
	rcommaaccentk: [
		0,
		0,
		15,
		15
	],
	rcommaaccentkcommaaccent: [
		0,
		0,
		15,
		15
	],
	rcommaaccentl: [
		0,
		0,
		15,
		15
	],
	rcommaaccentlacute: [
		0,
		0,
		15,
		15
	],
	rcommaaccentlcommaaccent: [
		0,
		0,
		15,
		15
	],
	rcommaaccentlslash: [
		0,
		0,
		15,
		15
	],
	rcommaaccentm: [
		0,
		0,
		25,
		25
	],
	rcommaaccentn: [
		0,
		0,
		25,
		25,
		-15
	],
	rcommaaccentnacute: [
		0,
		0,
		25,
		25,
		-15
	],
	rcommaaccentncaron: [
		0,
		0,
		25,
		25,
		-15
	],
	rcommaaccentncommaaccent: [
		0,
		0,
		25,
		25,
		-15
	],
	rcommaaccentntilde: [
		0,
		0,
		25,
		25,
		-15
	],
	rcommaaccentp: [
		0,
		0,
		30,
		30,
		-10
	],
	rcommaaccentsemicolon: [
		0,
		0,
		30,
		30
	],
	rcommaaccentu: [
		0,
		0,
		15,
		15
	],
	rcommaaccentuacute: [
		0,
		0,
		15,
		15
	],
	rcommaaccentucircumflex: [
		0,
		0,
		15,
		15
	],
	rcommaaccentudieresis: [
		0,
		0,
		15,
		15
	],
	rcommaaccentugrave: [
		0,
		0,
		15,
		15
	],
	rcommaaccentuhungarumlaut: [
		0,
		0,
		15,
		15
	],
	rcommaaccentumacron: [
		0,
		0,
		15,
		15
	],
	rcommaaccentuogonek: [
		0,
		0,
		15,
		15
	],
	rcommaaccenturing: [
		0,
		0,
		15,
		15
	],
	scomma: [
		0,
		0,
		-15,
		-15
	],
	speriod: [
		0,
		0,
		-15,
		-15
	],
	sacutecomma: [
		0,
		0,
		-15,
		-15
	],
	sacuteperiod: [
		0,
		0,
		-15,
		-15
	],
	scaroncomma: [
		0,
		0,
		-15,
		-15
	],
	scaronperiod: [
		0,
		0,
		-15,
		-15
	],
	scedillacomma: [
		0,
		0,
		-15,
		-15
	],
	scedillaperiod: [
		0,
		0,
		-15,
		-15
	],
	scommaaccentcomma: [
		0,
		0,
		-15,
		-15
	],
	scommaaccentperiod: [
		0,
		0,
		-15,
		-15
	],
	ve: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	veacute: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	vecaron: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	vecircumflex: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	vedieresis: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	vedotaccent: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	vegrave: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	vemacron: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	veogonek: [
		0,
		0,
		-25,
		-25,
		-10,
		-15,
		0,
		-15
	],
	wa: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	waacute: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	wabreve: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	wacircumflex: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	wadieresis: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	wagrave: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	wamacron: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	waogonek: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	waring: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	watilde: [
		0,
		0,
		-15,
		-15,
		0,
		-10,
		0,
		-10
	],
	we: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	weacute: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	wecaron: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	wecircumflex: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	wedieresis: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	wedotaccent: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	wegrave: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	wemacron: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	weogonek: [
		0,
		0,
		-10,
		-10,
		0,
		-10
	],
	zo: [
		0,
		0,
		-15,
		-15
	],
	zoacute: [
		0,
		0,
		-15,
		-15
	],
	zocircumflex: [
		0,
		0,
		-15,
		-15
	],
	zodieresis: [
		0,
		0,
		-15,
		-15
	],
	zograve: [
		0,
		0,
		-15,
		-15
	],
	zohungarumlaut: [
		0,
		0,
		-15,
		-15
	],
	zomacron: [
		0,
		0,
		-15,
		-15
	],
	zoslash: [
		0,
		0,
		-15,
		-15
	],
	zotilde: [
		0,
		0,
		-15,
		-15
	],
	zacuteo: [
		0,
		0,
		-15,
		-15
	],
	zacuteoacute: [
		0,
		0,
		-15,
		-15
	],
	zacuteocircumflex: [
		0,
		0,
		-15,
		-15
	],
	zacuteodieresis: [
		0,
		0,
		-15,
		-15
	],
	zacuteograve: [
		0,
		0,
		-15,
		-15
	],
	zacuteohungarumlaut: [
		0,
		0,
		-15,
		-15
	],
	zacuteomacron: [
		0,
		0,
		-15,
		-15
	],
	zacuteoslash: [
		0,
		0,
		-15,
		-15
	],
	zacuteotilde: [
		0,
		0,
		-15,
		-15
	],
	zcarono: [
		0,
		0,
		-15,
		-15
	],
	zcaronoacute: [
		0,
		0,
		-15,
		-15
	],
	zcaronocircumflex: [
		0,
		0,
		-15,
		-15
	],
	zcaronodieresis: [
		0,
		0,
		-15,
		-15
	],
	zcaronograve: [
		0,
		0,
		-15,
		-15
	],
	zcaronohungarumlaut: [
		0,
		0,
		-15,
		-15
	],
	zcaronomacron: [
		0,
		0,
		-15,
		-15
	],
	zcaronoslash: [
		0,
		0,
		-15,
		-15
	],
	zcaronotilde: [
		0,
		0,
		-15,
		-15
	],
	zdotaccento: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentoacute: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentocircumflex: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentodieresis: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentograve: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentohungarumlaut: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentomacron: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentoslash: [
		0,
		0,
		-15,
		-15
	],
	zdotaccentotilde: [
		0,
		0,
		-15,
		-15
	],
	Ap: [
		0,
		0,
		0,
		0,
		-25
	],
	Aquoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Aacutep: [
		0,
		0,
		0,
		0,
		-25
	],
	Aacutequoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Abrevep: [
		0,
		0,
		0,
		0,
		-25
	],
	Abrevequoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Acircumflexp: [
		0,
		0,
		0,
		0,
		-25
	],
	Acircumflexquoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Adieresisp: [
		0,
		0,
		0,
		0,
		-25
	],
	Adieresisquoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Agravep: [
		0,
		0,
		0,
		0,
		-25
	],
	Agravequoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Amacronp: [
		0,
		0,
		0,
		0,
		-25
	],
	Amacronquoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Aogonekp: [
		0,
		0,
		0,
		0,
		-25
	],
	Aogonekquoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Aringp: [
		0,
		0,
		0,
		0,
		-25
	],
	Aringquoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Atildep: [
		0,
		0,
		0,
		0,
		-25
	],
	Atildequoteright: [
		0,
		0,
		0,
		0,
		-74,
		-74,
		-37,
		-111
	],
	Je: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jeacute: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jecaron: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jecircumflex: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jedieresis: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jedotaccent: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jegrave: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jemacron: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jeogonek: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jo: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Joacute: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jocircumflex: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jodieresis: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jograve: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Johungarumlaut: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jomacron: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Joslash: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	Jotilde: [
		0,
		0,
		0,
		0,
		-15,
		-40,
		-25
	],
	NA: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAacute: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAbreve: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAcircumflex: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAdieresis: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAgrave: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAmacron: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAogonek: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAring: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NAtilde: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteA: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAacute: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAbreve: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAcircumflex: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAdieresis: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAgrave: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAmacron: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAogonek: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAring: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NacuteAtilde: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronA: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAacute: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAbreve: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAcircumflex: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAdieresis: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAgrave: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAmacron: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAogonek: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAring: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcaronAtilde: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentA: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAacute: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAbreve: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAcircumflex: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAdieresis: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAgrave: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAmacron: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAogonek: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAring: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NcommaaccentAtilde: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeA: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAacute: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAbreve: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAcircumflex: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAdieresis: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAgrave: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAmacron: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAogonek: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAring: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	NtildeAtilde: [
		0,
		0,
		0,
		0,
		-20,
		-30,
		-27,
		-35
	],
	Ti: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tiacute: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tiogonek: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tcaroni: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tcaroniacute: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tcaroniogonek: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tcommaaccenti: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tcommaaccentiacute: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Tcommaaccentiogonek: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-35
	],
	Vi: [
		0,
		0,
		0,
		0,
		-37,
		-55,
		-74,
		-60
	],
	Viacute: [
		0,
		0,
		0,
		0,
		-37,
		-55,
		-74,
		-60
	],
	Vicircumflex: [
		0,
		0,
		0,
		0,
		-37,
		0,
		-34,
		-20
	],
	Vidieresis: [
		0,
		0,
		0,
		0,
		-37,
		0,
		-34,
		-20
	],
	Vigrave: [
		0,
		0,
		0,
		0,
		-37,
		0,
		-34,
		-20
	],
	Vimacron: [
		0,
		0,
		0,
		0,
		-37,
		0,
		-34,
		-20
	],
	Viogonek: [
		0,
		0,
		0,
		0,
		-37,
		-55,
		-74,
		-60
	],
	Wi: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-40
	],
	Wiacute: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-40
	],
	Wiogonek: [
		0,
		0,
		0,
		0,
		-18,
		-37,
		-55,
		-40
	],
	fi: [
		0,
		0,
		0,
		0,
		-25,
		0,
		-20,
		-20
	],
	gperiod: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-15
	],
	gbreveperiod: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-15
	],
	gcommaaccentperiod: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-15
	],
	iv: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	iacutev: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	icircumflexv: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	idieresisv: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	igravev: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	imacronv: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	iogonekv: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-25
	],
	ky: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-10,
		-15
	],
	kyacute: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-10,
		-15
	],
	kydieresis: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-10,
		-15
	],
	kcommaaccenty: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-10,
		-15
	],
	kcommaaccentyacute: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-10,
		-15
	],
	kcommaaccentydieresis: [
		0,
		0,
		0,
		0,
		-15,
		0,
		-10,
		-15
	],
	quotedblleftA: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAacute: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAbreve: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAcircumflex: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAdieresis: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAgrave: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAmacron: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAogonek: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAring: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quotedblleftAtilde: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftA: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAacute: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAbreve: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAcircumflex: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAdieresis: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAgrave: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAmacron: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAogonek: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAring: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	quoteleftAtilde: [
		0,
		0,
		0,
		0,
		-10,
		0,
		0,
		-80
	],
	re: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	reacute: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	recaron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	recircumflex: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	redieresis: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	redotaccent: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	regrave: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	remacron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	reogonek: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racutee: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteeacute: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteecaron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteecircumflex: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteedieresis: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteedotaccent: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteegrave: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteemacron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	racuteeogonek: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcarone: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaroneacute: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronecaron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronecircumflex: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronedieresis: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronedotaccent: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronegrave: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaronemacron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcaroneogonek: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccente: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccenteacute: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentecaron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentecircumflex: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentedieresis: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentedotaccent: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentegrave: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccentemacron: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	rcommaaccenteogonek: [
		0,
		0,
		0,
		0,
		-18,
		0,
		-37
	],
	spaceA: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAacute: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAbreve: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAcircumflex: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAdieresis: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAgrave: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAmacron: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAogonek: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAring: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	spaceAtilde: [
		0,
		0,
		0,
		0,
		-55,
		-37,
		-18,
		-55
	],
	Fi: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	Fiacute: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	Ficircumflex: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	Fidieresis: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	Figrave: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	Fimacron: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	Fiogonek: [
		0,
		0,
		0,
		0,
		0,
		-40,
		-45
	],
	eb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	eacuteb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ecaronb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ecircumflexb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	edieresisb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	edotaccentb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	egraveb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	emacronb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	eogonekb: [
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ff: [
		0,
		0,
		0,
		0,
		0,
		-18,
		-18,
		-25
	],
	quoterightt: [
		0,
		0,
		0,
		0,
		0,
		-37,
		-30,
		-18
	],
	quoterighttcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		-37,
		-30,
		-18
	],
	Yicircumflex: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yidieresis: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yigrave: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yimacron: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yacuteicircumflex: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yacuteidieresis: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yacuteigrave: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Yacuteimacron: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Ydieresisicircumflex: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Ydieresisidieresis: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Ydieresisigrave: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	Ydieresisimacron: [
		0,
		0,
		0,
		0,
		0,
		0,
		-34
	],
	eg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	egbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	egcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	eacuteg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	eacutegbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	eacutegcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	ecarong: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	ecarongbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	ecarongcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	ecircumflexg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	ecircumflexgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	ecircumflexgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	edieresisg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	edieresisgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	edieresisgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	edotaccentg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	edotaccentgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	edotaccentgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	egraveg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	egravegbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	egravegcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	emacrong: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	emacrongbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	emacrongcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	eogonekg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	eogonekgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	eogonekgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-40,
		-15
	],
	fiogonek: [
		0,
		0,
		0,
		0,
		0,
		0,
		-20
	],
	gcomma: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	gbrevecomma: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	gcommaaccentcomma: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	og: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ogbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ogcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	oacuteg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	oacutegbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	oacutegcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ocircumflexg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ocircumflexgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ocircumflexgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	odieresisg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	odieresisgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	odieresisgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ograveg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ogravegbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ogravegcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ohungarumlautg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ohungarumlautgbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	ohungarumlautgcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	omacrong: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	omacrongbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	omacrongcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	otildeg: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	otildegbreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	otildegcommaaccent: [
		0,
		0,
		0,
		0,
		0,
		0,
		-10
	],
	fiacute: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-20
	],
	ga: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gaacute: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gabreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gacircumflex: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gadieresis: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gagrave: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gamacron: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gaogonek: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	garing: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gatilde: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbrevea: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveaacute: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveabreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveacircumflex: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveadieresis: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveagrave: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveamacron: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveaogonek: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbrevearing: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gbreveatilde: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccenta: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentaacute: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentabreve: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentacircumflex: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentadieresis: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentagrave: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentamacron: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentaogonek: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentaring: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	],
	gcommaaccentatilde: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		-5
	]
};
var data = {
	attributes: attributes,
	glyphWidths: glyphWidths,
	kernPairs: kernPairs
};

var initFont = function initFont(font) {
  return [font.FontName, {
    attributes: font,
    glyphWidths: {},
    kernPairs: {}
  }];
};
var expandData = function expandData(data) {
  var attributes = data.attributes,
    glyphWidths = data.glyphWidths,
    kernPairs = data.kernPairs;
  var fonts = attributes.map(initFont);
  Object.keys(glyphWidths).forEach(function (key) {
    glyphWidths[key].forEach(function (value, index) {
      if (value) fonts[index][1].glyphWidths[key] = value;
    });
  });
  Object.keys(kernPairs).forEach(function (key) {
    kernPairs[key].forEach(function (value, index) {
      if (value) fonts[index][1].kernPairs[key] = value;
    });
  });
  return Object.fromEntries(fonts);
};

var STANDARD_FONTS = expandData(data);
var createStandardFont = function createStandardFont(PDFFont) {
  return /*#__PURE__*/function (_PDFFont) {
    _inheritsLoose__default["default"](StandardFont, _PDFFont);
    function StandardFont(document, name, id) {
      var _this;
      _this = _PDFFont.call(this) || this;
      _this.document = document;
      _this.name = name;
      _this.id = id;
      _this.font = AFMFont.fromJson(STANDARD_FONTS[_this.name]);
      _this.ascender = _this.font.ascender;
      _this.descender = _this.font.descender;
      _this.bbox = _this.font.bbox;
      _this.lineGap = _this.font.lineGap;
      return _this;
    }
    var _proto = StandardFont.prototype;
    _proto.embed = function embed() {
      this.dictionary.data = {
        Type: 'Font',
        BaseFont: this.name,
        Subtype: 'Type1',
        Encoding: 'WinAnsiEncoding'
      };
      return this.dictionary.end();
    };
    _proto.encode = function encode(text) {
      var encoded = this.font.encodeText(text);
      var glyphs = this.font.glyphsForString("" + text);
      var advances = this.font.advancesForGlyphs(glyphs);
      var positions = [];
      for (var i = 0; i < glyphs.length; i++) {
        var glyph = glyphs[i];
        positions.push({
          xAdvance: advances[i],
          yAdvance: 0,
          xOffset: 0,
          yOffset: 0,
          advanceWidth: this.font.widthOfGlyph(glyph)
        });
      }
      return [encoded, positions];
    };
    _proto.encodeGlyphs = function encodeGlyphs(glyphs) {
      var res = [];
      for (var _i = 0, _Array$from = Array.from(glyphs); _i < _Array$from.length; _i++) {
        var glyph = _Array$from[_i];
        res.push(("00" + glyph.id.toString(16)).slice(-2));
      }
      return res;
    };
    _proto.widthOfString = function widthOfString(string, size) {
      var glyphs = this.font.glyphsForString("" + string);
      var advances = this.font.advancesForGlyphs(glyphs);
      var width = 0;
      for (var _i2 = 0, _Array$from2 = Array.from(advances); _i2 < _Array$from2.length; _i2++) {
        var advance = _Array$from2[_i2];
        width += advance;
      }
      var scale = size / 1000;
      return width * scale;
    };
    StandardFont.isStandardFont = function isStandardFont(name) {
      return name in STANDARD_FONTS;
    };
    return StandardFont;
  }(PDFFont);
};

var toHex = function toHex() {
  for (var _len = arguments.length, codePoints = new Array(_len), _key = 0; _key < _len; _key++) {
    codePoints[_key] = arguments[_key];
  }
  var codes = Array.from(codePoints).map(function (code) {
    return ("0000" + code.toString(16)).slice(-4);
  });
  return codes.join('');
};
var createEmbeddedFont = function createEmbeddedFont(PDFFont) {
  return /*#__PURE__*/function (_PDFFont) {
    _inheritsLoose__default["default"](EmbeddedFont, _PDFFont);
    function EmbeddedFont(document, font, id) {
      var _this;
      _this = _PDFFont.call(this) || this;
      _this.document = document;
      _this.font = font;
      _this.id = id;
      _this.subset = _this.font.createSubset();
      _this.unicode = [[0]];
      _this.widths = [_this.font.getGlyph(0).advanceWidth];
      _this.name = _this.font.postscriptName;
      _this.scale = 1000 / _this.font.unitsPerEm;
      _this.ascender = _this.font.ascent * _this.scale;
      _this.descender = _this.font.descent * _this.scale;
      _this.xHeight = _this.font.xHeight * _this.scale;
      _this.capHeight = _this.font.capHeight * _this.scale;
      _this.lineGap = _this.font.lineGap * _this.scale;
      _this.bbox = _this.font.bbox;
      _this.layoutCache = Object.create(null);
      return _this;
    }
    var _proto = EmbeddedFont.prototype;
    _proto.layoutRun = function layoutRun(text, features) {
      var run = this.font.layout(text, features);

      // Normalize position values
      for (var i = 0; i < run.positions.length; i++) {
        var position = run.positions[i];
        for (var key in position) {
          position[key] *= this.scale;
        }
        position.advanceWidth = run.glyphs[i].advanceWidth * this.scale;
      }
      return run;
    };
    _proto.layoutCached = function layoutCached(text) {
      var cached;
      if (cached = this.layoutCache[text]) {
        return cached;
      }
      var run = this.layoutRun(text);
      this.layoutCache[text] = run;
      return run;
    };
    _proto.layout = function layout(text, features, onlyWidth) {
      // Skip the cache if any user defined features are applied
      if (onlyWidth == null) {
        onlyWidth = false;
      }
      if (features) {
        return this.layoutRun(text, features);
      }
      var glyphs = onlyWidth ? null : [];
      var positions = onlyWidth ? null : [];
      var advanceWidth = 0;

      // Split the string by words to increase cache efficiency.
      // For this purpose, spaces and tabs are a good enough delimeter.
      var last = 0;
      var index = 0;
      while (index <= text.length) {
        var needle;
        if (index === text.length && last < index || (needle = text.charAt(index), [' ', '\t'].includes(needle))) {
          var run = this.layoutCached(text.slice(last, ++index));
          if (!onlyWidth) {
            glyphs.push.apply(glyphs, Array.from(run.glyphs || []));
            positions.push.apply(positions, Array.from(run.positions || []));
          }
          advanceWidth += run.advanceWidth;
          last = index;
        } else {
          index++;
        }
      }
      return {
        glyphs: glyphs,
        positions: positions,
        advanceWidth: advanceWidth
      };
    };
    _proto.encode = function encode(text, features) {
      var _this$layout = this.layout(text, features),
        glyphs = _this$layout.glyphs,
        positions = _this$layout.positions;
      var res = [];
      for (var i = 0; i < glyphs.length; i++) {
        var glyph = glyphs[i];
        var gid = this.subset.includeGlyph(glyph.id);
        res.push(("0000" + gid.toString(16)).slice(-4));
        if (this.widths[gid] == null) {
          this.widths[gid] = glyph.advanceWidth * this.scale;
        }
        if (this.unicode[gid] == null) {
          this.unicode[gid] = this.font._cmapProcessor.codePointsForGlyph(glyph.id);
        }
      }
      return [res, positions];
    };
    _proto.encodeGlyphs = function encodeGlyphs(glyphs) {
      var res = [];
      for (var i = 0; i < glyphs.length; i++) {
        var glyph = glyphs[i];
        var gid = this.subset.includeGlyph(glyph.id);
        res.push(("0000" + gid.toString(16)).slice(-4));
        if (this.widths[gid] == null) {
          this.widths[gid] = glyph.advanceWidth * this.scale;
        }
        if (this.unicode[gid] == null) {
          this.unicode[gid] = this.font._cmapProcessor.codePointsForGlyph(glyph.id);
        }
      }
      return res;
    };
    _proto.widthOfString = function widthOfString(string, size, features) {
      var width = this.layout(string, features, true).advanceWidth;
      var scale = size / 1000;
      return width * scale;
    };
    _proto.embed = function embed() {
      var isCFF = this.subset.cff != null;
      var fontFile = this.document.ref();
      if (isCFF) {
        fontFile.data.Subtype = 'CIDFontType0C';
      }
      fontFile.end(this.subset.encode());
      var familyClass = ((this.font['OS/2'] != null ? this.font['OS/2'].sFamilyClass : undefined) || 0) >> 8;
      var flags = 0;
      if (this.font.post.isFixedPitch) {
        flags |= 1 << 0;
      }
      if (1 <= familyClass && familyClass <= 7) {
        flags |= 1 << 1;
      }
      flags |= 1 << 2; // assume the font uses non-latin characters
      if (familyClass === 10) {
        flags |= 1 << 3;
      }
      if (this.font.head.macStyle.italic) {
        flags |= 1 << 6;
      }

      // generate a random tag (6 uppercase letters. 65 is the char code for 'A')
      var tag = [0, 1, 2, 3, 4, 5].map(function (i) {
        return String.fromCharCode(Math.random() * 26 + 65);
      }).join('');
      var name = tag + '+' + this.font.postscriptName;
      var bbox = this.font.bbox;
      var descriptor = this.document.ref({
        Type: 'FontDescriptor',
        FontName: name,
        Flags: flags,
        FontBBox: [bbox.minX * this.scale, bbox.minY * this.scale, bbox.maxX * this.scale, bbox.maxY * this.scale],
        ItalicAngle: this.font.italicAngle,
        Ascent: this.ascender,
        Descent: this.descender,
        CapHeight: (this.font.capHeight || this.font.ascent) * this.scale,
        XHeight: (this.font.xHeight || 0) * this.scale,
        StemV: 0
      }); // not sure how to calculate this

      if (isCFF) {
        descriptor.data.FontFile3 = fontFile;
      } else {
        descriptor.data.FontFile2 = fontFile;
      }
      descriptor.end();
      var descendantFont = this.document.ref({
        Type: 'Font',
        Subtype: isCFF ? 'CIDFontType0' : 'CIDFontType2',
        BaseFont: name,
        CIDSystemInfo: {
          Registry: new String('Adobe'),
          Ordering: new String('Identity'),
          Supplement: 0
        },
        FontDescriptor: descriptor,
        W: [0, this.widths]
      });
      descendantFont.end();
      this.dictionary.data = {
        Type: 'Font',
        Subtype: 'Type0',
        BaseFont: name,
        Encoding: 'Identity-H',
        DescendantFonts: [descendantFont],
        ToUnicode: this.toUnicodeCmap()
      };
      return this.dictionary.end();
    }

    // Maps the glyph ids encoded in the PDF back to unicode strings
    // Because of ligature substitutions and the like, there may be one or more
    // unicode characters represented by each glyph.
    ;
    _proto.toUnicodeCmap = function toUnicodeCmap() {
      var cmap = this.document.ref();
      var entries = [];
      for (var _i = 0, _Array$from = Array.from(this.unicode); _i < _Array$from.length; _i++) {
        var codePoints = _Array$from[_i];
        var encoded = [];
        for (var _i2 = 0, _Array$from2 = Array.from(codePoints); _i2 < _Array$from2.length; _i2++) {
          var value = _Array$from2[_i2];
          if (value > 0xffff) {
            value -= 0x10000;
            encoded.push(toHex(value >>> 10 & 0x3ff | 0xd800));
            value = 0xdc00 | value & 0x3ff;
          }
          encoded.push(toHex(value));
          entries.push("<" + encoded.join(' ') + ">");
        }
      }
      cmap.end("  /CIDInit /ProcSet findresource begin\n  12 dict begin\n  begincmap\n  /CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n  >> def\n  /CMapName /Adobe-Identity-UCS def\n  /CMapType 2 def\n  1 begincodespacerange\n  <0000><ffff>\n  endcodespacerange\n  1 beginbfrange\n  <0000> <" + toHex(entries.length - 1) + "> [" + entries.join(' ') + "]\n  endbfrange\n  endcmap\n  CMapName currentdict /CMap defineresource pop\n  end\n  end  ");
      return cmap;
    };
    return EmbeddedFont;
  }(PDFFont);
};

var PDFFont = /*#__PURE__*/function () {
  function PDFFont() {}
  PDFFont.open = function open(document, src, family, id) {
    var font;
    if (typeof src === 'string') {
      if (StandardFont.isStandardFont(src)) {
        return new StandardFont(document, src, id);
      }
      {
        font = fontkit__namespace.openSync(src, family);
      }
    } else if (src instanceof Uint8Array) {
      font = fontkit__namespace.create(src, family);
    } else if (src instanceof ArrayBuffer) {
      font = fontkit__namespace.create(new Uint8Array(src), family);
    } else if (typeof src === 'object') {
      font = src;
    }
    if (font == null) {
      throw new Error('Not a supported font format or standard PDF font.');
    }
    return new EmbeddedFont(document, font, id);
  };
  var _proto = PDFFont.prototype;
  _proto.encode = function encode() {
    throw new Error('Must be implemented by subclasses');
  };
  _proto.widthOfString = function widthOfString() {
    throw new Error('Must be implemented by subclasses');
  };
  _proto.ref = function ref() {
    return this.dictionary != null ? this.dictionary : this.dictionary = this.document.ref();
  };
  _proto.finalize = function finalize() {
    if (this.embedded || this.dictionary == null) {
      return;
    }
    this.embed();
    return this.embedded = true;
  };
  _proto.embed = function embed() {
    throw new Error('Must be implemented by subclasses');
  };
  _proto.lineHeight = function lineHeight(size, includeGap) {
    if (includeGap == null) {
      includeGap = false;
    }
    var gap = includeGap ? this.lineGap : 0;
    return (this.ascender + gap - this.descender) / 1000 * size;
  };
  return PDFFont;
}();
var StandardFont = createStandardFont(PDFFont);
var EmbeddedFont = createEmbeddedFont(PDFFont);

var FontsMixin = {
  initFonts: function initFonts() {
    // Lookup table for embedded fonts
    this._fontFamilies = {};
    this._fontCount = 0;

    // Font state
    this._fontSize = 12;
    this._font = null;
    this._registeredFonts = {};

    // Set the default font
    return this.font('Helvetica');
  },
  font: function font(src, family, size) {
    var cacheKey, font;
    if (typeof family === 'number') {
      size = family;
      family = null;
    }

    // check registered fonts if src is a string
    if (typeof src === 'string' && this._registeredFonts[src]) {
      cacheKey = src;
      var _this$_registeredFont = this._registeredFonts[src];
      src = _this$_registeredFont.src;
      family = _this$_registeredFont.family;
    } else {
      cacheKey = family || src;
      if (typeof cacheKey !== 'string') {
        cacheKey = null;
      }
    }
    if (size != null) {
      this.fontSize(size);
    }

    // fast path: check if the font is already in the PDF
    if (font = this._fontFamilies[cacheKey]) {
      this._font = font;
      return this;
    }

    // load the font
    var id = "F" + ++this._fontCount;
    this._font = PDFFont.open(this, src, family, id);

    // check for existing font familes with the same name already in the PDF
    // useful if the font was passed as a buffer
    if (font = this._fontFamilies[this._font.name]) {
      this._font = font;
      return this;
    }

    // save the font for reuse later
    if (cacheKey) {
      this._fontFamilies[cacheKey] = this._font;
    }
    if (this._font.name) {
      this._fontFamilies[this._font.name] = this._font;
    }
    return this;
  },
  fontSize: function fontSize(_fontSize) {
    this._fontSize = _fontSize;
    return this;
  },
  currentLineHeight: function currentLineHeight(includeGap) {
    if (includeGap == null) {
      includeGap = false;
    }
    return this._font.lineHeight(this._fontSize, includeGap);
  },
  registerFont: function registerFont(name, src, family) {
    this._registeredFonts[name] = {
      src: src,
      family: family
    };
    return this;
  }
};

var number = PDFObject$1.number;
var TextMixin = {
  initText: function initText() {
    this._line = this._line.bind(this);

    // Current coordinates
    this.x = 0;
    this.y = 0;
    return this._lineGap = 0;
  },
  _text: function _text(text, x, y, options, lineCallback) {
    var _this = this;
    options = this._initOptions(x, y, options);

    // Convert text to a string
    text = text == null ? '' : "" + text;

    // if the wordSpacing option is specified, remove multiple consecutive spaces
    if (options.wordSpacing) {
      text = text.replace(/\s{2,}/g, ' ');
    }
    var addStructure = function addStructure() {
      if (options.structParent) {
        options.structParent.add(_this.struct(options.structType || 'P', [_this.markStructureContent(options.structType || 'P')]));
      }
    };
    for (var _iterator = _createForOfIteratorHelperLoose__default["default"](text.split('\n')), _step; !(_step = _iterator()).done;) {
      var line = _step.value;
      addStructure();
      lineCallback(line, options);
    }
    return this;
  },
  text: function text(_text2, x, y, options) {
    return this._text(_text2, x, y, options, this._line);
  },
  widthOfString: function widthOfString(string, options) {
    if (options === void 0) {
      options = {};
    }
    return this._font.widthOfString(string, this._fontSize, options.features) + (options.characterSpacing || 0) * (string.length - 1);
  },
  _initOptions: function _initOptions(x, y, options) {
    if (x === void 0) {
      x = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof x === 'object') {
      options = x;
      x = null;
    }

    // clone options object
    var result = Object.assign({}, options);

    // extend options with previous values for continued text
    if (this._textOptions) {
      for (var key in this._textOptions) {
        var val = this._textOptions[key];
        if (key !== 'continued') {
          if (result[key] === undefined) {
            result[key] = val;
          }
        }
      }
    }

    // Update the current position
    if (x != null) {
      this.x = x;
    }
    if (y != null) {
      this.y = y;
    }

    // wrap to margins if no x or y position passed
    if (result.lineBreak !== false) {
      if (result.width == null) {
        result.width = this.page.width - this.x - this.page.margins.right;
      }
      result.width = Math.max(result.width, 0);
    }
    if (!result.columns) {
      result.columns = 0;
    }
    if (result.columnGap == null) {
      result.columnGap = 18;
    } // 1/4 inch

    return result;
  },
  _line: function _line(text, options) {
    if (options === void 0) {
      options = {};
    }
    this._fragment(text, this.x, this.y, options);
    return this.x += this.widthOfString(text);
  },
  _fragment: function _fragment(text, x, y, options) {
    text = ("" + text).replace(/\n/g, '');
    if (text.length === 0) return;
    var _this$_font$encode = this._font.encode(text, options.features),
      encoded = _this$_font$encode[0],
      positions = _this$_font$encode[1];
    var dy = this._font.ascender / 1000 * this._fontSize;
    this._glyphs(encoded, positions, x, y + dy, options);
  },
  _glyphs: function _glyphs(encoded, positions, x, y, options) {
    var _this2 = this;
    var commands = [];
    var scale = this._fontSize / 1000;
    var i;
    var last = 0;
    var hadOffset = false;
    this.save();

    // flip coordinate system
    this.transform(1, 0, 0, -1, 0, this.page.height);
    y = this.page.height - y;

    // add current font to page if necessary
    if (this.page.fonts[this._font.id] == null) {
      this.page.fonts[this._font.id] = this._font.ref();
    }

    // begin the text object
    this.addContent('BT');

    // text position
    this.addContent("1 0 0 1 " + number(x) + " " + number(y) + " Tm");

    // font and font size
    this.addContent("/" + this._font.id + " " + number(this._fontSize) + " Tf");

    // rendering mode
    var mode = options.fill && options.stroke ? 2 : options.stroke ? 1 : 0;
    if (mode) {
      this.addContent(mode + " Tr");
    }

    // Adds a segment of text to the TJ command buffer
    var addSegment = function addSegment(cur) {
      if (last < cur) {
        var hex = encoded.slice(last, cur).join('');
        var advance = positions[cur - 1].xAdvance - positions[cur - 1].advanceWidth;
        commands.push("<" + hex + "> " + number(-advance));
      }
      return last = cur;
    };

    // Flushes the current TJ commands to the output stream
    var flush = function flush(i) {
      addSegment(i);
      if (commands.length > 0) {
        _this2.addContent("[" + commands.join(' ') + "] TJ");
        return commands.length = 0;
      }
    };
    for (i = 0; i < positions.length; i++) {
      // If we have an x or y offset, we have to break out of the current TJ command
      // so we can move the text position.
      var pos = positions[i];
      if (pos.xOffset || pos.yOffset) {
        // Flush the current buffer
        flush(i);

        // Move the text position and flush just the current character
        this.addContent("1 0 0 1 " + number(x + pos.xOffset * scale) + " " + number(y + pos.yOffset * scale) + " Tm");
        flush(i + 1);
        hadOffset = true;
      } else {
        // If the last character had an offset, reset the text position
        if (hadOffset) {
          this.addContent("1 0 0 1 " + number(x) + " " + number(y) + " Tm");
          hadOffset = false;
        }

        // Group segments that don't have any advance adjustments
        if (pos.xAdvance - pos.advanceWidth !== 0) {
          addSegment(i + 1);
        }
      }
      x += pos.xAdvance * scale;
    }

    // Flush any remaining commands
    flush(i);

    // end the text object
    this.addContent('ET');

    // restore flipped coordinate system
    return this.restore();
  }
};

var MARKERS = [0xffc0, 0xffc1, 0xffc2, 0xffc3, 0xffc5, 0xffc6, 0xffc7, 0xffc8, 0xffc9, 0xffca, 0xffcb, 0xffcc, 0xffcd, 0xffce, 0xffcf];
var JPEG = /*#__PURE__*/function () {
  function JPEG(data, label) {
    var marker;
    this.data = data;
    this.label = label;
    if (this.data.readUInt16BE(0) !== 0xffd8) {
      throw 'SOI not found in JPEG';
    }
    var pos = 2;
    while (pos < this.data.length) {
      marker = this.data.readUInt16BE(pos);
      pos += 2;
      if (Array.from(MARKERS).includes(marker)) {
        break;
      }
      pos += this.data.readUInt16BE(pos);
    }
    if (!Array.from(MARKERS).includes(marker)) {
      throw 'Invalid JPEG.';
    }
    pos += 2;
    this.bits = this.data[pos++];
    this.height = this.data.readUInt16BE(pos);
    pos += 2;
    this.width = this.data.readUInt16BE(pos);
    pos += 2;
    var channels = this.data[pos++];
    this.colorSpace = function () {
      switch (channels) {
        case 1:
          return 'DeviceGray';
        case 3:
          return 'DeviceRGB';
        case 4:
          return 'DeviceCMYK';
      }
    }();
    this.obj = null;
  }
  var _proto = JPEG.prototype;
  _proto.embed = function embed(document) {
    if (this.obj) {
      return;
    }
    this.obj = document.ref({
      Type: 'XObject',
      Subtype: 'Image',
      BitsPerComponent: this.bits,
      Width: this.width,
      Height: this.height,
      ColorSpace: this.colorSpace,
      Filter: 'DCTDecode'
    });

    // add extra decode params for CMYK images. By swapping the
    // min and max values from the default, we invert the colors. See
    // section 4.8.4 of the spec.
    if (this.colorSpace === 'DeviceCMYK') {
      this.obj.data['Decode'] = [1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0];
    }
    this.obj.end(this.data);

    // free memory
    this.data = null;
  };
  return JPEG;
}();

var PNGImage = /*#__PURE__*/function () {
  function PNGImage(data, label) {
    this.label = label;
    this.image = new PNG__default["default"](data);
    this.width = this.image.width;
    this.height = this.image.height;
    this.imgData = this.image.imgData;
    this.obj = null;
  }
  var _proto = PNGImage.prototype;
  _proto.embed = function embed(document) {
    var dataDecoded = false;
    this.document = document;
    if (this.obj) return;
    var hasAlphaChannel = this.image.hasAlphaChannel;
    var isInterlaced = this.image.interlaceMethod === 1;
    this.obj = this.document.ref({
      Type: 'XObject',
      Subtype: 'Image',
      BitsPerComponent: hasAlphaChannel ? 8 : this.image.bits,
      Width: this.width,
      Height: this.height,
      Filter: 'FlateDecode'
    });
    if (!hasAlphaChannel) {
      var params = this.document.ref({
        Predictor: isInterlaced ? 1 : 15,
        Colors: this.image.colors,
        BitsPerComponent: this.image.bits,
        Columns: this.width
      });
      this.obj.data['DecodeParms'] = params;
      params.end();
    }
    if (this.image.palette.length === 0) {
      this.obj.data['ColorSpace'] = this.image.colorSpace;
    } else {
      // embed the color palette in the PDF as an object stream
      var palette = this.document.ref();
      palette.end(Buffer.from(this.image.palette));

      // build the color space array for the image
      this.obj.data['ColorSpace'] = ['Indexed', 'DeviceRGB', this.image.palette.length / 3 - 1, palette];
    }

    // For PNG color types 0, 2 and 3, the transparency data is stored in
    // a dedicated PNG chunk.
    if (this.image.transparency.grayscale != null) {
      // Use Color Key Masking (spec section 4.8.5)
      // An array with N elements, where N is two times the number of color components.
      var val = this.image.transparency.grayscale;
      this.obj.data['Mask'] = [val, val];
    } else if (this.image.transparency.rgb) {
      // Use Color Key Masking (spec section 4.8.5)
      // An array with N elements, where N is two times the number of color components.
      var rgb = this.image.transparency.rgb;
      var mask = [];
      for (var _iterator = _createForOfIteratorHelperLoose__default["default"](rgb), _step; !(_step = _iterator()).done;) {
        var x = _step.value;
        mask.push(x, x);
      }
      this.obj.data['Mask'] = mask;
    } else if (this.image.transparency.indexed) {
      // Create a transparency SMask for the image based on the data
      // in the PLTE and tRNS sections. See below for details on SMasks.
      dataDecoded = true;
      return this.loadIndexedAlphaChannel();
    } else if (hasAlphaChannel) {
      // For PNG color types 4 and 6, the transparency data is stored as a alpha
      // channel mixed in with the main image data. Separate this data out into an
      // SMask object and store it separately in the PDF.
      dataDecoded = true;
      return this.splitAlphaChannel();
    }
    if (isInterlaced && !dataDecoded) {
      return this.decodeData();
    }
    this.finalize();
  };
  _proto.finalize = function finalize() {
    if (this.alphaChannel) {
      var sMask = this.document.ref({
        Type: 'XObject',
        Subtype: 'Image',
        Height: this.height,
        Width: this.width,
        BitsPerComponent: 8,
        Filter: 'FlateDecode',
        ColorSpace: 'DeviceGray',
        Decode: [0, 1]
      });
      sMask.end(this.alphaChannel);
      this.obj.data['SMask'] = sMask;
    }

    // add the actual image data
    this.obj.end(this.imgData);

    // free memory
    this.image = null;
    this.imgData = null;
  };
  _proto.splitAlphaChannel = function splitAlphaChannel() {
    var _this = this;
    return this.image.decodePixels(function (pixels) {
      var a;
      var p;
      var colorCount = _this.image.colors;
      var pixelCount = _this.width * _this.height;
      var imgData = Buffer.alloc(pixelCount * colorCount);
      var alphaChannel = Buffer.alloc(pixelCount);
      var i = p = a = 0;
      var len = pixels.length;
      // For 16bit images copy only most significant byte (MSB) - PNG data is always stored in network byte order (MSB first)
      var skipByteCount = _this.image.bits === 16 ? 1 : 0;
      while (i < len) {
        for (var colorIndex = 0; colorIndex < colorCount; colorIndex++) {
          imgData[p++] = pixels[i++];
          i += skipByteCount;
        }
        alphaChannel[a++] = pixels[i++];
        i += skipByteCount;
      }
      _this.imgData = zlib__default["default"].deflateSync(imgData);
      _this.alphaChannel = zlib__default["default"].deflateSync(alphaChannel);
      return _this.finalize();
    });
  };
  _proto.loadIndexedAlphaChannel = function loadIndexedAlphaChannel() {
    var _this2 = this;
    var transparency = this.image.transparency.indexed;
    return this.image.decodePixels(function (pixels) {
      var alphaChannel = Buffer.alloc(_this2.width * _this2.height);
      var i = 0;
      for (var j = 0, end = pixels.length; j < end; j++) {
        alphaChannel[i++] = transparency[pixels[j]];
      }
      _this2.alphaChannel = zlib__default["default"].deflateSync(alphaChannel);
      return _this2.finalize();
    });
  };
  _proto.decodeData = function decodeData() {
    var _this3 = this;
    this.image.decodePixels(function (pixels) {
      _this3.imgData = zlib__default["default"].deflateSync(pixels);
      _this3.finalize();
    });
  };
  return PNGImage;
}();

var PDFImage = /*#__PURE__*/function () {
  function PDFImage() {}
  PDFImage.open = function open(src, label) {
    var data;
    if (Buffer.isBuffer(src)) {
      data = src;
    } else if (src instanceof ArrayBuffer) {
      data = Buffer.from(new Uint8Array(src));
    } else {
      var match = /^data:.+;base64,(.*)$/.exec(src);
      if (match) {
        data = Buffer.from(match[1], 'base64');
      } else {
        data = fs__default["default"].readFileSync(src);
        if (!data) return;
      }
    }
    if (data[0] === 0xff && data[1] === 0xd8) {
      return new JPEG(data, label);
    }
    if (data[0] === 0x89 && data.toString('ascii', 1, 4) === 'PNG') {
      return new PNGImage(data, label);
    }
    throw new Error('Unknown image format.');
  };
  return PDFImage;
}();

var ImagesMixin = {
  initImages: function initImages() {
    this._imageRegistry = {};
    this._imageCount = 0;
  },
  embedImage: function embedImage(src) {
    var image;
    if (typeof src === 'string') {
      image = this._imageRegistry[src];
    }
    if (!image) {
      if (src.width && src.height) {
        image = src;
      } else {
        image = this.openImage(src);
      }
    }
    if (!image.obj) {
      image.embed(this);
    }
    return image;
  },
  image: function image(src, x, y, options) {
    if (options === void 0) {
      options = {};
    }
    var bh;
    var bp;
    var bw;
    var ip;
    var left;
    var left1;
    if (typeof x === 'object') {
      options = x;
      x = null;
    }
    var image = src instanceof PDFImage ? src : this.embedImage(src);
    x = (left = x != null ? x : options.x) != null ? left : this.x;
    y = (left1 = y != null ? y : options.y) != null ? left1 : this.y;
    if (this.page.xobjects[image.label] == null) {
      this.page.xobjects[image.label] = image.obj;
    }
    var w = options.width || image.width;
    var h = options.height || image.height;
    if (options.width && !options.height) {
      var wp = w / image.width;
      w = image.width * wp;
      h = image.height * wp;
    } else if (options.height && !options.width) {
      var hp = h / image.height;
      w = image.width * hp;
      h = image.height * hp;
    } else if (options.scale) {
      w = image.width * options.scale;
      h = image.height * options.scale;
    } else if (options.fit) {
      var _Array$from = Array.from(options.fit);
      bw = _Array$from[0];
      bh = _Array$from[1];
      bp = bw / bh;
      ip = image.width / image.height;
      if (ip > bp) {
        w = bw;
        h = bw / ip;
      } else {
        h = bh;
        w = bh * ip;
      }
    }

    // Set the current y position to below the image if it is in the document flow
    if (this.y === y) {
      this.y += h;
    }
    this.save();
    this.transform(w, 0, 0, -h, x, y + h);
    this.addContent("/" + image.label + " Do");
    this.restore();
    return this;
  },
  openImage: function openImage(src) {
    var image;
    if (typeof src === 'string') {
      image = this._imageRegistry[src];
    }
    if (!image) {
      image = PDFImage.open(src, "I" + ++this._imageCount);
      if (typeof src === 'string') {
        this._imageRegistry[src] = image;
      }
    }
    return image;
  }
};

var AnnotationsMixin = {
  annotate: function annotate(x, y, w, h, options) {
    options.Type = 'Annot';
    options.Rect = this._convertRect(x, y, w, h);
    options.Border = [0, 0, 0];
    if (options.Subtype === 'Link' && typeof options.F === 'undefined') {
      options.F = 1 << 2; // Print Annotation Flag
    }

    if (options.Subtype !== 'Link') {
      if (options.C == null) {
        options.C = this._normalizeColor(options.color || [0, 0, 0]);
      }
    } // convert colors
    delete options.color;
    if (typeof options.Dest === 'string') {
      options.Dest = new String(options.Dest);
    }

    // Capitalize keys
    for (var key in options) {
      var val = options[key];
      options[key[0].toUpperCase() + key.slice(1)] = val;
    }
    var ref = this.ref(options);
    this.page.annotations.push(ref);
    ref.end();
    return this;
  },
  note: function note(x, y, w, h, contents, options) {
    if (options === void 0) {
      options = {};
    }
    options.Subtype = 'Text';
    options.Contents = new String(contents);
    options.Name = 'Comment';
    if (options.color == null) {
      options.color = [243, 223, 92];
    }
    options.Border = [0, 0, options.borderWidth || 0];
    delete options.borderWidth;
    return this.annotate(x, y, w, h, options);
  },
  goTo: function goTo(x, y, w, h, name, options) {
    if (options === void 0) {
      options = {};
    }
    options.Subtype = 'Link';
    options.A = this.ref({
      S: 'GoTo',
      D: new String(name)
    });
    options.A.end();
    return this.annotate(x, y, w, h, options);
  },
  link: function link(x, y, w, h, url, options) {
    if (options === void 0) {
      options = {};
    }
    options.Subtype = 'Link';
    if (typeof url === 'number') {
      // Link to a page in the document (the page must already exist)
      var pages = this._root.data.Pages.data;
      if (url >= 0 && url < pages.Kids.length) {
        options.A = this.ref({
          S: 'GoTo',
          D: [pages.Kids[url], 'XYZ', null, null, null]
        });
        options.A.end();
      } else {
        throw new Error("The document has no page " + url);
      }
    } else {
      // Link to an external url
      options.A = this.ref({
        S: 'URI',
        URI: new String(url)
      });
      options.A.end();
    }
    return this.annotate(x, y, w, h, options);
  },
  _markup: function _markup(x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    var _this$_convertRect = this._convertRect(x, y, w, h),
      x1 = _this$_convertRect[0],
      y1 = _this$_convertRect[1],
      x2 = _this$_convertRect[2],
      y2 = _this$_convertRect[3];
    options.QuadPoints = [x1, y2, x2, y2, x1, y1, x2, y1];
    options.Contents = new String();
    return this.annotate(x, y, w, h, options);
  },
  highlight: function highlight(x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    options.Subtype = 'Highlight';
    if (options.color == null) {
      options.color = [241, 238, 148];
    }
    return this._markup(x, y, w, h, options);
  },
  fileAnnotation: function fileAnnotation(x, y, w, h, file, options) {
    if (file === void 0) {
      file = {};
    }
    if (options === void 0) {
      options = {};
    }
    // create hidden file
    var filespec = this.file(file.src, Object.assign({
      hidden: true
    }, file));
    options.Subtype = 'FileAttachment';
    options.FS = filespec;

    // add description from filespec unless description (Contents) has already been set
    if (options.Contents) {
      options.Contents = new String(options.Contents);
    } else if (filespec.data.Desc) {
      options.Contents = filespec.data.Desc;
    }
    return this.annotate(x, y, w, h, options);
  },
  _convertRect: function _convertRect(x1, y1, w, h) {
    // flip y1 and y2
    var y2 = y1;
    y1 += h;

    // make x2
    var x2 = x1 + w;

    // apply current transformation matrix to points
    var _this$_ctm = this._ctm,
      m0 = _this$_ctm[0],
      m1 = _this$_ctm[1],
      m2 = _this$_ctm[2],
      m3 = _this$_ctm[3],
      m4 = _this$_ctm[4],
      m5 = _this$_ctm[5];
    x1 = m0 * x1 + m2 * y1 + m4;
    y1 = m1 * x1 + m3 * y1 + m5;
    x2 = m0 * x2 + m2 * y2 + m4;
    y2 = m1 * x2 + m3 * y2 + m5;
    return [x1, y1, x2, y2];
  }
};

var DEFAULT_OPTIONS = {
  top: 0,
  left: 0,
  zoom: 0,
  fit: false,
  pageNumber: null,
  expanded: false
};
var PDFOutline = /*#__PURE__*/function () {
  function PDFOutline(document, parent, title, dest, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }
    this.document = document;
    this.options = options;
    this.outlineData = {};
    if (dest !== null) {
      var destWidth = dest.data.MediaBox[2];
      var destHeight = dest.data.MediaBox[3];
      var top = destHeight - (options.top || 0);
      var left = destWidth - (options.left || 0);
      var zoom = options.zoom || 0;
      this.outlineData.Dest = options.fit ? [dest, 'Fit'] : [dest, 'XYZ', left, top, zoom];
    }
    if (parent !== null) {
      this.outlineData.Parent = parent;
    }
    if (title !== null) {
      this.outlineData.Title = new String(title);
    }
    this.dictionary = this.document.ref(this.outlineData);
    this.children = [];
  }
  var _proto = PDFOutline.prototype;
  _proto.addItem = function addItem(title, options) {
    if (options === void 0) {
      options = DEFAULT_OPTIONS;
    }
    var pages = this.document._root.data.Pages.data.Kids;
    var dest = options.pageNumber !== null ? pages[options.pageNumber] : this.document.page.dictionary;
    var result = new PDFOutline(this.document, this.dictionary, title, dest, options);
    this.children.push(result);
    return result;
  };
  _proto.endOutline = function endOutline() {
    if (this.children.length > 0) {
      if (this.options.expanded) {
        this.outlineData.Count = this.children.length;
      }
      var first = this.children[0];
      var last = this.children[this.children.length - 1];
      this.outlineData.First = first.dictionary;
      this.outlineData.Last = last.dictionary;
      for (var i = 0, len = this.children.length; i < len; i++) {
        var child = this.children[i];
        if (i > 0) {
          child.outlineData.Prev = this.children[i - 1].dictionary;
        }
        if (i < this.children.length - 1) {
          child.outlineData.Next = this.children[i + 1].dictionary;
        }
        child.endOutline();
      }
    }
    return this.dictionary.end();
  };
  return PDFOutline;
}();

var OutlineMixin = {
  initOutline: function initOutline() {
    this.outline = new PDFOutline(this, null, null, null);
  },
  endOutline: function endOutline() {
    this.outline.endOutline();
    if (this.outline.children.length > 0) {
      this._root.data.Outlines = this.outline.dictionary;
      this._root.data.PageMode = this._root.data.PageMode || 'UseOutlines';
    }
  }
};

var FIELD_FLAGS = {
  readOnly: 1,
  required: 2,
  noExport: 4,
  multiline: 0x1000,
  password: 0x2000,
  toggleToOffButton: 0x4000,
  radioButton: 0x8000,
  pushButton: 0x10000,
  combo: 0x20000,
  edit: 0x40000,
  sort: 0x80000,
  multiSelect: 0x200000,
  noSpell: 0x400000
};
var FIELD_JUSTIFY = {
  left: 0,
  center: 1,
  right: 2
};
var VALUE_MAP = {
  value: 'V',
  defaultValue: 'DV'
};
var FORMAT_SPECIAL = {
  zip: '0',
  zipPlus4: '1',
  zip4: '1',
  phone: '2',
  ssn: '3'
};
var FORMAT_DEFAULT = {
  number: {
    nDec: 0,
    sepComma: false,
    negStyle: 'MinusBlack',
    currency: '',
    currencyPrepend: true
  },
  percent: {
    nDec: 0,
    sepComma: false
  }
};
var AcroFormMixin = {
  /**
   * Must call if adding AcroForms to a document. Must also call font() before
   * this method to set the default font.
   */
  initForm: function initForm() {
    if (!this._font) {
      throw new Error('Must set a font before calling initForm method');
    }
    this._acroform = {
      fonts: {},
      defaultFont: this._font.name
    };
    this._acroform.fonts[this._font.id] = this._font.ref();
    var data = {
      Fields: [],
      NeedAppearances: true,
      DA: new String("/" + this._font.id + " 0 Tf 0 g"),
      DR: {
        Font: {}
      }
    };
    data.DR.Font[this._font.id] = this._font.ref();
    var AcroForm = this.ref(data);
    this._root.data.AcroForm = AcroForm;
    return this;
  },
  /**
   * Called automatically by document.js
   */
  endAcroForm: function endAcroForm() {
    var _this = this;
    if (this._root.data.AcroForm) {
      if (!Object.keys(this._acroform.fonts).length && !this._acroform.defaultFont) {
        throw new Error('No fonts specified for PDF form');
      }
      var fontDict = this._root.data.AcroForm.data.DR.Font;
      Object.keys(this._acroform.fonts).forEach(function (name) {
        fontDict[name] = _this._acroform.fonts[name];
      });
      this._root.data.AcroForm.data.Fields.forEach(function (fieldRef) {
        _this._endChild(fieldRef);
      });
      this._root.data.AcroForm.end();
    }
    return this;
  },
  _endChild: function _endChild(ref) {
    var _this2 = this;
    if (Array.isArray(ref.data.Kids)) {
      ref.data.Kids.forEach(function (childRef) {
        _this2._endChild(childRef);
      });
      ref.end();
    }
    return this;
  },
  /**
   * Creates and adds a form field to the document. Form fields are intermediate
   * nodes in a PDF form that are used to specify form name heirarchy and form
   * value defaults.
   * @param {string} name - field name (T attribute in field dictionary)
   * @param {object} options  - other attributes to include in field dictionary
   */
  formField: function formField(name, options) {
    if (options === void 0) {
      options = {};
    }
    var fieldDict = this._fieldDict(name, null, options);
    var fieldRef = this.ref(fieldDict);
    this._addToParent(fieldRef);
    return fieldRef;
  },
  /**
   * Creates and adds a Form Annotation to the document. Form annotations are
   * called Widget annotations internally within a PDF file.
   * @param {string} name - form field name (T attribute of widget annotation
   * dictionary)
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {object} options
   */
  formAnnotation: function formAnnotation(name, type, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    var fieldDict = this._fieldDict(name, type, options);
    fieldDict.Subtype = 'Widget';
    if (fieldDict.F === undefined) {
      fieldDict.F = 4; // print the annotation
    }

    // Add Field annot to page, and get it's ref
    this.annotate(x, y, w, h, fieldDict);
    var annotRef = this.page.annotations[this.page.annotations.length - 1];
    return this._addToParent(annotRef);
  },
  formText: function formText(name, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    return this.formAnnotation(name, 'text', x, y, w, h, options);
  },
  formPushButton: function formPushButton(name, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    return this.formAnnotation(name, 'pushButton', x, y, w, h, options);
  },
  formCombo: function formCombo(name, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    return this.formAnnotation(name, 'combo', x, y, w, h, options);
  },
  formList: function formList(name, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    return this.formAnnotation(name, 'list', x, y, w, h, options);
  },
  formRadioButton: function formRadioButton(name, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    return this.formAnnotation(name, 'radioButton', x, y, w, h, options);
  },
  formCheckbox: function formCheckbox(name, x, y, w, h, options) {
    if (options === void 0) {
      options = {};
    }
    return this.formAnnotation(name, 'checkbox', x, y, w, h, options);
  },
  _addToParent: function _addToParent(fieldRef) {
    var parent = fieldRef.data.Parent;
    if (parent) {
      if (!parent.data.Kids) {
        parent.data.Kids = [];
      }
      parent.data.Kids.push(fieldRef);
    } else {
      this._root.data.AcroForm.data.Fields.push(fieldRef);
    }
    return this;
  },
  _fieldDict: function _fieldDict(name, type, options) {
    if (options === void 0) {
      options = {};
    }
    if (!this._acroform) {
      throw new Error('Call document.initForms() method before adding form elements to document');
    }
    var opts = Object.assign({}, options);
    if (type !== null) {
      opts = this._resolveType(type, options);
    }
    opts = this._resolveFlags(opts);
    opts = this._resolveJustify(opts);
    opts = this._resolveFont(opts);
    opts = this._resolveStrings(opts);
    opts = this._resolveColors(opts);
    opts = this._resolveFormat(opts);
    opts.T = new String(name);
    if (opts.parent) {
      opts.Parent = opts.parent;
      delete opts.parent;
    }
    return opts;
  },
  _resolveType: function _resolveType(type, opts) {
    if (type === 'text') {
      opts.FT = 'Tx';
    } else if (type === 'pushButton') {
      opts.FT = 'Btn';
      opts.pushButton = true;
    } else if (type === 'radioButton') {
      opts.FT = 'Btn';
      opts.radioButton = true;
    } else if (type === 'checkbox') {
      opts.FT = 'Btn';
    } else if (type === 'combo') {
      opts.FT = 'Ch';
      opts.combo = true;
    } else if (type === 'list') {
      opts.FT = 'Ch';
    } else {
      throw new Error("Invalid form annotation type '" + type + "'");
    }
    return opts;
  },
  _resolveFormat: function _resolveFormat(opts) {
    var f = opts.format;
    if (f && f.type) {
      var fnKeystroke;
      var fnFormat;
      var params = '';
      if (FORMAT_SPECIAL[f.type] !== undefined) {
        fnKeystroke = "AFSpecial_Keystroke";
        fnFormat = "AFSpecial_Format";
        params = FORMAT_SPECIAL[f.type];
      } else {
        var format = f.type.charAt(0).toUpperCase() + f.type.slice(1);
        fnKeystroke = "AF" + format + "_Keystroke";
        fnFormat = "AF" + format + "_Format";
        if (f.type === 'date') {
          fnKeystroke += 'Ex';
          params = String(f.param);
        } else if (f.type === 'time') {
          params = String(f.param);
        } else if (f.type === 'number') {
          var p = Object.assign({}, FORMAT_DEFAULT.number, f);
          params = String([String(p.nDec), p.sepComma ? '0' : '1', '"' + p.negStyle + '"', 'null', '"' + p.currency + '"', String(p.currencyPrepend)].join(','));
        } else if (f.type === 'percent') {
          var _p = Object.assign({}, FORMAT_DEFAULT.percent, f);
          params = String([String(_p.nDec), _p.sepComma ? '0' : '1'].join(','));
        }
      }
      opts.AA = opts.AA ? opts.AA : {};
      opts.AA.K = {
        S: 'JavaScript',
        JS: new String(fnKeystroke + "(" + params + ");")
      };
      opts.AA.F = {
        S: 'JavaScript',
        JS: new String(fnFormat + "(" + params + ");")
      };
    }
    delete opts.format;
    return opts;
  },
  _resolveColors: function _resolveColors(opts) {
    var color = this._normalizeColor(opts.backgroundColor);
    if (color) {
      if (!opts.MK) {
        opts.MK = {};
      }
      opts.MK.BG = color;
    }
    color = this._normalizeColor(opts.borderColor);
    if (color) {
      if (!opts.MK) {
        opts.MK = {};
      }
      opts.MK.BC = color;
    }
    delete opts.backgroundColor;
    delete opts.borderColor;
    return opts;
  },
  _resolveFlags: function _resolveFlags(options) {
    var result = 0;
    Object.keys(options).forEach(function (key) {
      if (FIELD_FLAGS[key]) {
        result |= FIELD_FLAGS[key];
        delete options[key];
      }
    });
    if (result !== 0) {
      options.Ff = options.Ff ? options.Ff : 0;
      options.Ff |= result;
    }
    return options;
  },
  _resolveJustify: function _resolveJustify(options) {
    var result = 0;
    if (options.align !== undefined) {
      if (typeof FIELD_JUSTIFY[options.align] === 'number') {
        result = FIELD_JUSTIFY[options.align];
      }
      delete options.align;
    }
    if (result !== 0) {
      options.Q = result; // default
    }

    return options;
  },
  _resolveFont: function _resolveFont(options) {
    // add current font to document-level AcroForm dict if necessary
    if (this._acroform.fonts[this._font.id] === null) {
      this._acroform.fonts[this._font.id] = this._font.ref();
    }

    // add current font to field's resource dict (RD) if not the default acroform font
    if (this._acroform.defaultFont !== this._font.name) {
      options.DR = {
        Font: {}
      };

      // Get the fontSize option. If not set use auto sizing
      var fontSize = options.fontSize || 0;
      options.DR.Font[this._font.id] = this._font.ref();
      options.DA = new String("/" + this._font.id + " " + fontSize + " Tf 0 g");
    }
    return options;
  },
  _resolveStrings: function _resolveStrings(options) {
    var select = [];
    function appendChoices(a) {
      if (Array.isArray(a)) {
        for (var idx = 0; idx < a.length; idx++) {
          if (typeof a[idx] === 'string') {
            select.push(new String(a[idx]));
          } else {
            select.push(a[idx]);
          }
        }
      }
    }
    appendChoices(options.Opt);
    if (options.select) {
      appendChoices(options.select);
      delete options.select;
    }
    if (select.length) {
      options.Opt = select;
    }
    Object.keys(VALUE_MAP).forEach(function (key) {
      if (options[key] !== undefined) {
        options[VALUE_MAP[key]] = options[key];
        delete options[key];
      }
    });
    ['V', 'DV'].forEach(function (key) {
      if (typeof options[key] === 'string') {
        options[key] = new String(options[key]);
      }
    });
    if (options.MK && options.MK.CA) {
      options.MK.CA = new String(options.MK.CA);
    }
    if (options.label) {
      options.MK = options.MK ? options.MK : {};
      options.MK.CA = new String(options.label);
      delete options.label;
    }
    return options;
  }
};

var AttachmentsMixin = {
  /**
   * Embed contents of `src` in PDF
   * @param {Buffer | ArrayBuffer | string} src input Buffer, ArrayBuffer, base64 encoded string or path to file
   * @param {object} options
   *  * options.name: filename to be shown in PDF, will use `src` if none set
   *  * options.type: filetype to be shown in PDF
   *  * options.description: description to be shown in PDF
   *  * options.hidden: if true, do not add attachment to EmbeddedFiles dictionary. Useful for file attachment annotations
   *  * options.creationDate: override creation date
   *  * options.modifiedDate: override modified date
   * @returns filespec reference
   */
  file: function file(src, options) {
    if (options === void 0) {
      options = {};
    }
    options.name = options.name || src;
    var refBody = {
      Type: 'EmbeddedFile',
      Params: {}
    };
    var data;
    if (!src) {
      throw new Error('No src specified');
    }
    if (Buffer.isBuffer(src)) {
      data = src;
    } else if (src instanceof ArrayBuffer) {
      data = Buffer.from(new Uint8Array(src));
    } else {
      var match;
      if (match = /^data:(.*);base64,(.*)$/.exec(src)) {
        if (match[1]) {
          refBody.Subtype = match[1].replace('/', '#2F');
        }
        data = Buffer.from(match[2], 'base64');
      } else {
        data = fs__default["default"].readFileSync(src);
        if (!data) {
          throw new Error("Could not read contents of file at filepath " + src);
        }

        // update CreationDate and ModDate
        var _fs$statSync = fs__default["default"].statSync(src),
          birthtime = _fs$statSync.birthtime,
          ctime = _fs$statSync.ctime;
        refBody.Params.CreationDate = birthtime;
        refBody.Params.ModDate = ctime;
      }
    }

    // override creation date and modified date
    if (options.creationDate instanceof Date) {
      refBody.Params.CreationDate = options.creationDate;
    }
    if (options.modifiedDate instanceof Date) {
      refBody.Params.ModDate = options.modifiedDate;
    }
    // add optional subtype
    if (options.type) {
      refBody.Subtype = options.type.replace('/', '#2F');
    }

    // add checksum and size information
    var checksum = MD5__default["default"](CryptoJS__namespace.lib.WordArray.create(new Uint8Array(data)));
    refBody.Params.CheckSum = new String(checksum);
    refBody.Params.Size = data.byteLength;

    // save some space when embedding the same file again
    // if a file with the same name and metadata exists, reuse its reference
    var ref;
    if (!this._fileRegistry) this._fileRegistry = {};
    var file = this._fileRegistry[options.name];
    if (file && isEqual(refBody, file)) {
      ref = file.ref;
    } else {
      ref = this.ref(refBody);
      ref.end(data);
      this._fileRegistry[options.name] = _extends__default["default"]({}, refBody, {
        ref: ref
      });
    }
    // add filespec for embedded file
    var fileSpecBody = {
      Type: 'Filespec',
      F: new String(options.name),
      EF: {
        F: ref
      },
      UF: new String(options.name)
    };
    if (options.description) {
      fileSpecBody.Desc = new String(options.description);
    }
    var filespec = this.ref(fileSpecBody);
    filespec.end();
    if (!options.hidden) {
      this.addNamedEmbeddedFile(options.name, filespec);
    }
    return filespec;
  }
};

/** check two embedded file metadata objects for equality */
function isEqual(a, b) {
  return a.Subtype === b.Subtype && a.Params.CheckSum.toString() === b.Params.CheckSum.toString() && a.Params.Size === b.Params.Size && a.Params.CreationDate === b.Params.CreationDate && a.Params.ModDate === b.Params.ModDate;
}

var capitalize = function capitalize(v) {
  return v[0].toUpperCase() + v.slice(1);
};

var PDFDocument = /*#__PURE__*/function (_stream$Readable) {
  _inheritsLoose__default["default"](PDFDocument, _stream$Readable);
  function PDFDocument(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _stream$Readable.call(this) || this;
    _this.options = options;

    // PDF version
    switch (options.pdfVersion) {
      case '1.4':
        _this.version = 1.4;
        break;
      case '1.5':
        _this.version = 1.5;
        break;
      case '1.6':
        _this.version = 1.6;
        break;
      case '1.7':
      case '1.7ext3':
        _this.version = 1.7;
        break;
      default:
        _this.version = 1.3;
        break;
    }

    // Whether streams should be compressed
    _this.compress = _this.options.compress != null ? _this.options.compress : true;
    _this._pageBuffer = [];
    _this._pageBufferStart = 0;

    // The PDF object store
    _this._offsets = [];
    _this._waiting = 0;
    _this._ended = false;
    _this._offset = 0;
    var Pages = _this.ref({
      Type: 'Pages',
      Count: 0,
      Kids: []
    });
    var Names = _this.ref({
      Dests: new PDFNameTree()
    });
    _this._root = _this.ref({
      Type: 'Catalog',
      Pages: Pages,
      Names: Names
    });
    if (_this.options.lang) {
      _this._root.data.Lang = new String(_this.options.lang);
    }
    if (_this.options.pageLayout) {
      _this._root.data.PageLayout = capitalize(_this.options.pageLayout);
    }
    if (_this.options.pageMode) {
      _this._root.data.PageMode = capitalize(_this.options.pageMode);
    }

    // The current page
    _this.page = null;

    // Initialize mixins
    _this.initColor();
    _this.initVector();
    _this.initFonts();
    _this.initText();
    _this.initImages();
    _this.initOutline();
    // this.initMarkings(options)

    // Initialize the metadata
    _this.info = {
      Producer: 'PDFKit',
      Creator: 'PDFKit',
      CreationDate: new Date()
    };
    if (_this.options.info) {
      for (var key in _this.options.info) {
        var val = _this.options.info[key];
        _this.info[key] = val;
      }
    }
    if (_this.options.displayTitle) {
      _this._root.data.ViewerPreferences = _this.ref({
        DisplayDocTitle: true
      });
    }

    // Generate file ID
    _this._id = PDFSecurity.generateFileID(_this.info);

    // Initialize security settings
    // this._security = PDFSecurity.create(this, options);

    // Write the header PDF version
    _this._write("%PDF-" + _this.version);

    // 4 binary chars, as recommended by the spec
    _this._write('%\xFF\xFF\xFF\xFF');

    // Add the first page
    if (_this.options.autoFirstPage !== false) {
      _this.addPage();
    }
    return _this;
  }
  var _proto = PDFDocument.prototype;
  _proto.addPage = function addPage(options) {
    // end the current page if needed
    if (options == null) {
      options = this.options;
    }

    // end the current page if needed
    if (!this.options.bufferPages) {
      this.flushPages();
    }

    // create a page object
    this.page = new PDFPage(this, options);
    this._pageBuffer.push(this.page);

    // add the page to the object store
    var pages = this._root.data.Pages.data;
    pages.Kids.push(this.page.dictionary);
    pages.Count++;

    // flip PDF coordinate system so that the origin is in
    // the top left rather than the bottom left
    this._ctm = [1, 0, 0, 1, 0, 0];
    this.transform(1, 0, 0, -1, 0, this.page.height);

    // this.emit('pageAdded');

    return this;
  };
  _proto.flushPages = function flushPages() {
    // this local variable exists so we're future-proof against
    // reentrant calls to flushPages.
    var pages = this._pageBuffer;
    this._pageBuffer = [];
    this._pageBufferStart += pages.length;
    for (var _i = 0, _Array$from = Array.from(pages); _i < _Array$from.length; _i++) {
      var page = _Array$from[_i];
      // this.endPageMarkings(page);
      page.end();
    }
  };
  _proto.addNamedDestination = function addNamedDestination(name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (args.length === 0) {
      args = ['XYZ', null, null, null];
    }
    if (args[0] === 'XYZ' && args[2] !== null) {
      args[2] = this.page.height - args[2];
    }
    args.unshift(this.page.dictionary);
    this._root.data.Names.data.Dests.add(name, args);
  };
  _proto.addNamedEmbeddedFile = function addNamedEmbeddedFile(name, ref) {
    if (!this._root.data.Names.data.EmbeddedFiles) {
      // disabling /Limits for this tree fixes attachments not showing in Adobe Reader
      this._root.data.Names.data.EmbeddedFiles = new PDFNameTree({
        limits: false
      });
    }

    // add filespec to EmbeddedFiles
    this._root.data.Names.data.EmbeddedFiles.add(name, ref);
  };
  _proto.addNamedJavaScript = function addNamedJavaScript(name, js) {
    if (!this._root.data.Names.data.JavaScript) {
      this._root.data.Names.data.JavaScript = new PDFNameTree();
    }
    var data = {
      JS: new String(js),
      S: 'JavaScript'
    };
    this._root.data.Names.data.JavaScript.add(name, data);
  };
  _proto.ref = function ref(data) {
    var ref = new PDFReference(this, this._offsets.length + 1, data);
    this._offsets.push(null); // placeholder for this object's offset once it is finalized
    this._waiting++;
    return ref;
  };
  _proto._read = function _read() {
    // do nothing, but this method is required by node
  };
  _proto._write = function _write(data) {
    if (!Buffer.isBuffer(data)) {
      data = Buffer.from(data + '\n', 'binary');
    }
    this.push(data);
    return this._offset += data.length;
  };
  _proto.addContent = function addContent(data) {
    this.page.write(data);
    return this;
  };
  _proto._refEnd = function _refEnd(ref) {
    this._offsets[ref.id - 1] = ref.offset;
    if (--this._waiting === 0 && this._ended) {
      this._finalize();
      return this._ended = false;
    }
  };
  _proto.end = function end() {
    this.flushPages();
    this._info = this.ref();
    for (var key in this.info) {
      var val = this.info[key];
      if (typeof val === 'string') {
        val = new String(val);
      }
      var entry = this.ref(val);
      entry.end();
      this._info.data[key] = entry;
    }
    this._info.end();
    for (var name in this._fontFamilies) {
      var font = this._fontFamilies[name];
      font.finalize();
    }
    this.endOutline();
    // this.endMarkings();

    this._root.end();
    this._root.data.Pages.end();
    this._root.data.Names.end();
    this.endAcroForm();
    if (this._root.data.ViewerPreferences) {
      this._root.data.ViewerPreferences.end();
    }

    // if (this._security) {
    //   this._security.end();
    // }

    if (this._waiting === 0) {
      return this._finalize();
    }
    this._ended = true;
  };
  _proto._finalize = function _finalize() {
    // generate xref
    var xRefOffset = this._offset;
    this._write('xref');
    this._write("0 " + (this._offsets.length + 1));
    this._write('0000000000 65535 f ');
    for (var _i2 = 0, _Array$from2 = Array.from(this._offsets); _i2 < _Array$from2.length; _i2++) {
      var offset = _Array$from2[_i2];
      offset = ("0000000000" + offset).slice(-10);
      this._write(offset + ' 00000 n ');
    }

    // trailer
    var trailer = {
      Size: this._offsets.length + 1,
      Root: this._root,
      Info: this._info,
      ID: [this._id, this._id]
    };

    // if (this._security) {
    //   trailer.Encrypt = this._security.dictionary;
    // }

    this._write('trailer');
    this._write(PDFObject$1.convert(trailer));
    this._write('startxref');
    this._write("" + xRefOffset);
    this._write('%%EOF');

    // end the stream
    return this.push(null);
  };
  _proto.toString = function toString() {
    return '[object PDFDocument]';
  };
  return PDFDocument;
}(stream__default["default"].Readable);
var mixin = function mixin(methods) {
  Object.assign(PDFDocument.prototype, methods);
};

// Load mixins
mixin(ColorMixin);
mixin(VectorMixin);
mixin(FontsMixin);
mixin(TextMixin);
mixin(ImagesMixin);
mixin(AnnotationsMixin);
mixin(OutlineMixin);
// mixin(MarkingsMixin);
mixin(AcroFormMixin);
mixin(AttachmentsMixin);

exports.EmbeddedFont = EmbeddedFont;
exports.PDFFont = PDFFont;
exports.StandardFont = StandardFont;
exports["default"] = PDFDocument;


/***/ }),

/***/ 32914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var fs = __webpack_require__(57147);
var zlib = __webpack_require__(59796);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

var PNG = /*#__PURE__*/function () {
  PNG.decode = function decode(path, fn) {
    {
      return fs__default["default"].readFile(path, function (err, file) {
        var png = new PNG(file);
        return png.decode(function (pixels) {
          return fn(pixels);
        });
      });
    }
  };

  PNG.load = function load(path) {
    {
      var file = fs__default["default"].readFileSync(path);
      return new PNG(file);
    }
  };

  function PNG(data) {
    var i;
    this.data = data;
    this.pos = 8; // Skip the default header

    this.palette = [];
    this.imgData = [];
    this.transparency = {};
    this.text = {};

    while (true) {
      var chunkSize = this.readUInt32();
      var section = '';

      for (i = 0; i < 4; i++) {
        section += String.fromCharCode(this.data[this.pos++]);
      }

      switch (section) {
        case 'IHDR':
          // we can grab  interesting values from here (like width, height, etc)
          this.width = this.readUInt32();
          this.height = this.readUInt32();
          this.bits = this.data[this.pos++];
          this.colorType = this.data[this.pos++];
          this.compressionMethod = this.data[this.pos++];
          this.filterMethod = this.data[this.pos++];
          this.interlaceMethod = this.data[this.pos++];
          break;

        case 'PLTE':
          this.palette = this.read(chunkSize);
          break;

        case 'IDAT':
          for (i = 0; i < chunkSize; i++) {
            this.imgData.push(this.data[this.pos++]);
          }

          break;

        case 'tRNS':
          // This chunk can only occur once and it must occur after the
          // PLTE chunk and before the IDAT chunk.
          this.transparency = {};

          switch (this.colorType) {
            case 3:
              // Indexed color, RGB. Each byte in this chunk is an alpha for
              // the palette index in the PLTE ("palette") chunk up until the
              // last non-opaque entry. Set up an array, stretching over all
              // palette entries which will be 0 (opaque) or 1 (transparent).
              this.transparency.indexed = this.read(chunkSize);
              var short = 255 - this.transparency.indexed.length;

              if (short > 0) {
                for (i = 0; i < short; i++) {
                  this.transparency.indexed.push(255);
                }
              }

              break;

            case 0:
              // Greyscale. Corresponding to entries in the PLTE chunk.
              // Grey is two bytes, range 0 .. (2 ^ bit-depth) - 1
              this.transparency.grayscale = this.read(chunkSize)[0];
              break;

            case 2:
              // True color with proper alpha channel.
              this.transparency.rgb = this.read(chunkSize);
              break;
          }

          break;

        case 'tEXt':
          var text = this.read(chunkSize);
          var index = text.indexOf(0);
          var key = String.fromCharCode.apply(String, text.slice(0, index));
          this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
          break;

        case 'IEND':
          // we've got everything we need!
          switch (this.colorType) {
            case 0:
            case 3:
            case 4:
              this.colors = 1;
              break;

            case 2:
            case 6:
              this.colors = 3;
              break;
          }

          this.hasAlphaChannel = [4, 6].includes(this.colorType);
          var colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
          this.pixelBitlength = this.bits * colors;

          switch (this.colors) {
            case 1:
              this.colorSpace = 'DeviceGray';
              break;

            case 3:
              this.colorSpace = 'DeviceRGB';
              break;
          }

          this.imgData = Buffer.from(this.imgData);
          return;

        default:
          // unknown (or unimportant) section, skip it
          this.pos += chunkSize;
      }

      this.pos += 4; // Skip the CRC

      if (this.pos > this.data.length) {
        throw new Error('Incomplete or corrupt PNG file');
      }
    }
  }

  var _proto = PNG.prototype;

  _proto.read = function read(bytes) {
    var result = new Array(bytes);

    for (var i = 0; i < bytes; i++) {
      result[i] = this.data[this.pos++];
    }

    return result;
  };

  _proto.readUInt32 = function readUInt32() {
    var b1 = this.data[this.pos++] << 24;
    var b2 = this.data[this.pos++] << 16;
    var b3 = this.data[this.pos++] << 8;
    var b4 = this.data[this.pos++];
    return b1 | b2 | b3 | b4;
  };

  _proto.readUInt16 = function readUInt16() {
    var b1 = this.data[this.pos++] << 8;
    var b2 = this.data[this.pos++];
    return b1 | b2;
  };

  _proto.decodePixels = function decodePixels(fn) {
    var _this = this;

    return zlib__default["default"].inflate(this.imgData, function (err, data) {
      if (err) throw err;
      var pos = 0;
      var width = _this.width,
          height = _this.height;
      var pixelBytes = _this.pixelBitlength / 8;
      var pixels = Buffer.alloc(width * height * pixelBytes);

      function pass(x0, y0, dx, dy, singlePass) {
        if (singlePass === void 0) {
          singlePass = false;
        }

        var w = Math.ceil((width - x0) / dx);
        var h = Math.ceil((height - y0) / dy);
        var scanlineLength = pixelBytes * w;
        var buffer = singlePass ? pixels : Buffer.alloc(scanlineLength * h);
        var row = 0;
        var c = 0;

        while (row < h && pos < data.length) {
          var byte;
          var col;
          var i;
          var left;
          var upper;

          switch (data[pos++]) {
            case 0:
              // None
              for (i = 0; i < scanlineLength; i++) {
                buffer[c++] = data[pos++];
              }

              break;

            case 1:
              // Sub
              for (i = 0; i < scanlineLength; i++) {
                byte = data[pos++];
                left = i < pixelBytes ? 0 : buffer[c - pixelBytes];
                buffer[c++] = (byte + left) % 256;
              }

              break;

            case 2:
              // Up
              for (i = 0; i < scanlineLength; i++) {
                byte = data[pos++];
                col = (i - i % pixelBytes) / pixelBytes;
                upper = row && buffer[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                buffer[c++] = (upper + byte) % 256;
              }

              break;

            case 3:
              // Average
              for (i = 0; i < scanlineLength; i++) {
                byte = data[pos++];
                col = (i - i % pixelBytes) / pixelBytes;
                left = i < pixelBytes ? 0 : buffer[c - pixelBytes];
                upper = row && buffer[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                buffer[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
              }

              break;

            case 4:
              // Paeth
              for (i = 0; i < scanlineLength; i++) {
                var paeth;
                var upperLeft;
                byte = data[pos++];
                col = (i - i % pixelBytes) / pixelBytes;
                left = i < pixelBytes ? 0 : buffer[c - pixelBytes];

                if (row === 0) {
                  upper = upperLeft = 0;
                } else {
                  upper = buffer[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                  upperLeft = col && buffer[(row - 1) * scanlineLength + (col - 1) * pixelBytes + i % pixelBytes];
                }

                var p = left + upper - upperLeft;
                var pa = Math.abs(p - left);
                var pb = Math.abs(p - upper);
                var pc = Math.abs(p - upperLeft);

                if (pa <= pb && pa <= pc) {
                  paeth = left;
                } else if (pb <= pc) {
                  paeth = upper;
                } else {
                  paeth = upperLeft;
                }

                buffer[c++] = (byte + paeth) % 256;
              }

              break;

            default:
              throw new Error("Invalid filter algorithm: " + data[pos - 1]);
          }

          if (!singlePass) {
            var pixelsPos = ((y0 + row * dy) * width + x0) * pixelBytes;
            var bufferPos = row * scanlineLength;

            for (i = 0; i < w; i++) {
              for (var j = 0; j < pixelBytes; j++) {
                pixels[pixelsPos++] = buffer[bufferPos++];
              }

              pixelsPos += (dx - 1) * pixelBytes;
            }
          }

          row++;
        }
      }

      if (_this.interlaceMethod === 1) {
        /*
          1 6 4 6 2 6 4 6
          7 7 7 7 7 7 7 7
          5 6 5 6 5 6 5 6
          7 7 7 7 7 7 7 7
          3 6 4 6 3 6 4 6
          7 7 7 7 7 7 7 7
          5 6 5 6 5 6 5 6
          7 7 7 7 7 7 7 7
        */
        pass(0, 0, 8, 8); // 1

        pass(4, 0, 8, 8); // 2

        pass(0, 4, 4, 8); // 3

        pass(2, 0, 4, 4); // 4

        pass(0, 2, 2, 4); // 5

        pass(1, 0, 2, 2); // 6

        pass(0, 1, 1, 2); // 7
      } else {
        pass(0, 0, 1, 1, true);
      }

      return fn(pixels);
    });
  };

  _proto.decodePalette = function decodePalette() {
    var palette = this.palette;
    var length = palette.length;
    var transparency = this.transparency.indexed || [];
    var ret = Buffer.alloc(transparency.length + length);
    var pos = 0;
    var c = 0;

    for (var i = 0; i < length; i += 3) {
      var left;
      ret[pos++] = palette[i];
      ret[pos++] = palette[i + 1];
      ret[pos++] = palette[i + 2];
      ret[pos++] = (left = transparency[c++]) != null ? left : 255;
    }

    return ret;
  };

  _proto.copyToImageData = function copyToImageData(imageData, pixels) {
    var j;
    var k;
    var colors = this.colors;
    var palette = null;
    var alpha = this.hasAlphaChannel;

    if (this.palette.length) {
      palette = this._decodedPalette || (this._decodedPalette = this.decodePalette());
      colors = 4;
      alpha = true;
    }

    var data = imageData.data || imageData;
    var length = data.length;
    var input = palette || pixels;
    var i = j = 0;

    if (colors === 1) {
      while (i < length) {
        k = palette ? pixels[i / 4] * 4 : j;
        var v = input[k++];
        data[i++] = v;
        data[i++] = v;
        data[i++] = v;
        data[i++] = alpha ? input[k++] : 255;
        j = k;
      }
    } else {
      while (i < length) {
        k = palette ? pixels[i / 4] * 4 : j;
        data[i++] = input[k++];
        data[i++] = input[k++];
        data[i++] = input[k++];
        data[i++] = alpha ? input[k++] : 255;
        j = k;
      }
    }
  };

  _proto.decode = function decode(fn) {
    var _this2 = this;

    var ret = Buffer.alloc(this.width * this.height * 4);
    return this.decodePixels(function (pixels) {
      _this2.copyToImageData(ret, pixels);

      return fn(ret);
    });
  };

  return PNG;
}();

exports["default"] = PNG;


/***/ }),

/***/ 80921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.View = exports.Tspan = exports.TextInstance = exports.Text = exports.Svg = exports.Stop = exports.Rect = exports.RadialGradient = exports.Polyline = exports.Polygon = exports.Path = exports.Page = exports.Note = exports.Link = exports.LinearGradient = exports.Line = exports.Image = exports.G = exports.Ellipse = exports.Document = exports.Defs = exports.ClipPath = exports.Circle = exports.Canvas = void 0;
var G = 'G';
exports.G = G;
var Svg = 'SVG';
exports.Svg = Svg;
var View = 'VIEW';
exports.View = View;
var Text = 'TEXT';
exports.Text = Text;
var Link = 'LINK';
exports.Link = Link;
var Page = 'PAGE';
exports.Page = Page;
var Note = 'NOTE';
exports.Note = Note;
var Path = 'PATH';
exports.Path = Path;
var Rect = 'RECT';
exports.Rect = Rect;
var Line = 'LINE';
exports.Line = Line;
var Stop = 'STOP';
exports.Stop = Stop;
var Defs = 'DEFS';
exports.Defs = Defs;
var Image = 'IMAGE';
exports.Image = Image;
var Tspan = 'TSPAN';
exports.Tspan = Tspan;
var Canvas = 'CANVAS';
exports.Canvas = Canvas;
var Circle = 'CIRCLE';
exports.Circle = Circle;
var Ellipse = 'ELLIPSE';
exports.Ellipse = Ellipse;
var Polygon = 'POLYGON';
exports.Polygon = Polygon;
var Document = 'DOCUMENT';
exports.Document = Document;
var Polyline = 'POLYLINE';
exports.Polyline = Polyline;
var ClipPath = 'CLIP_PATH';
exports.ClipPath = ClipPath;
var TextInstance = 'TEXT_INSTANCE';
exports.TextInstance = TextInstance;
var LinearGradient = 'LINEAR_GRADIENT';
exports.LinearGradient = LinearGradient;
var RadialGradient = 'RADIAL_GRADIENT';
exports.RadialGradient = RadialGradient;

/***/ }),

/***/ 56856:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var P = __webpack_require__(80921);
var fns = __webpack_require__(67929);
var absPath = __webpack_require__(20730);
var parsePath = __webpack_require__(84189);
var normalizePath = __webpack_require__(86914);
var colorString = __webpack_require__(13559);
var _extends = __webpack_require__(43259);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var P__namespace = /*#__PURE__*/_interopNamespace(P);
var absPath__default = /*#__PURE__*/_interopDefaultLegacy(absPath);
var parsePath__default = /*#__PURE__*/_interopDefaultLegacy(parsePath);
var normalizePath__default = /*#__PURE__*/_interopDefaultLegacy(normalizePath);
var colorString__default = /*#__PURE__*/_interopDefaultLegacy(colorString);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);

var renderPath = function renderPath(ctx, node) {
  var _node$props;
  var d = (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.d;
  if (d) ctx.path(node.props.d);
};

var KAPPA$3 = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);
var renderRect = function renderRect(ctx, node) {
  var _node$props, _node$props2, _node$props3, _node$props4, _node$props5, _node$props6;
  var x = ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.x) || 0;
  var y = ((_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.y) || 0;
  var rx = ((_node$props3 = node.props) === null || _node$props3 === void 0 ? void 0 : _node$props3.rx) || 0;
  var ry = ((_node$props4 = node.props) === null || _node$props4 === void 0 ? void 0 : _node$props4.ry) || 0;
  var width = ((_node$props5 = node.props) === null || _node$props5 === void 0 ? void 0 : _node$props5.width) || 0;
  var height = ((_node$props6 = node.props) === null || _node$props6 === void 0 ? void 0 : _node$props6.height) || 0;
  if (!width || !height) return;
  if (rx && ry) {
    var krx = rx * KAPPA$3;
    var kry = ry * KAPPA$3;
    ctx.moveTo(x + rx, y);
    ctx.lineTo(x - rx + width, y);
    ctx.bezierCurveTo(x - rx + width + krx, y, x + width, y + ry - kry, x + width, y + ry);
    ctx.lineTo(x + width, y + height - ry);
    ctx.bezierCurveTo(x + width, y + height - ry + kry, x - rx + width + krx, y + height, x - rx + width, y + height);
    ctx.lineTo(x + rx, y + height);
    ctx.bezierCurveTo(x + rx - krx, y + height, x, y + height - ry + kry, x, y + height - ry);
    ctx.lineTo(x, y + ry);
    ctx.bezierCurveTo(x, y + ry - kry, x + rx - krx, y, x + rx, y);
  } else {
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
  }
  ctx.closePath();
};

var renderLine$1 = function renderLine(ctx, node) {
  var _ref = node.props || {},
    x1 = _ref.x1,
    x2 = _ref.x2,
    y1 = _ref.y1,
    y2 = _ref.y2;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
};

var renderGroup = function renderGroup() {
  // noop
};

var KAPPA$2 = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);
var drawEllipse = function drawEllipse(ctx, cx, cy, rx, ry) {
  if (cx === void 0) {
    cx = 0;
  }
  if (cy === void 0) {
    cy = 0;
  }
  var x = cx - rx;
  var y = cy - ry;
  var ox = rx * KAPPA$2;
  var oy = ry * KAPPA$2;
  var xe = x + rx * 2;
  var ye = y + ry * 2;
  var xm = x + rx;
  var ym = y + ry;
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  ctx.closePath();
};
var renderEllipse = function renderEllipse(ctx, node) {
  var _ref = node.props || {},
    cx = _ref.cx,
    cy = _ref.cy,
    rx = _ref.rx,
    ry = _ref.ry;
  drawEllipse(ctx, cx, cy, rx, ry);
};

var renderCircle = function renderCircle(ctx, node) {
  var _node$props, _node$props2, _node$props3;
  var cx = (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.cx;
  var cy = (_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.cy;
  var r = (_node$props3 = node.props) === null || _node$props3 === void 0 ? void 0 : _node$props3.r;
  drawEllipse(ctx, cx, cy, r, r);
};

var renderGlyphs = function renderGlyphs(ctx, glyphs, positions, x, y, options) {
  if (options === void 0) {
    options = {};
  }
  var scale = 1000 / ctx._fontSize;
  var unitsPerEm = ctx._font.font.unitsPerEm || 1000;
  var advanceWidthScale = 1000 / unitsPerEm;

  // Glyph encoding and positioning
  var encodedGlyphs = ctx._font.encodeGlyphs(glyphs);
  var encodedPositions = positions.map(function (pos, i) {
    return {
      xAdvance: pos.xAdvance * scale,
      yAdvance: pos.yAdvance * scale,
      xOffset: pos.xOffset,
      yOffset: pos.yOffset,
      advanceWidth: glyphs[i].advanceWidth * advanceWidthScale
    };
  });
  return ctx._glyphs(encodedGlyphs, encodedPositions, x, y, options);
};

var renderRun$1 = function renderRun(ctx, run) {
  var runAdvanceWidth = run.xAdvance;
  var _run$attributes = run.attributes,
    font = _run$attributes.font,
    fontSize = _run$attributes.fontSize,
    color = _run$attributes.color,
    opacity = _run$attributes.opacity;
  ctx.fillColor(color);
  ctx.fillOpacity(opacity);
  if (font.sbix || font.COLR && font.CPAL) {
    ctx.save();
    ctx.translate(0, -run.ascent);
    for (var i = 0; i < run.glyphs.length; i += 1) {
      var position = run.positions[i];
      var glyph = run.glyphs[i];
      ctx.save();
      ctx.translate(position.xOffset, position.yOffset);
      glyph.render(ctx, fontSize);
      ctx.restore();
      ctx.translate(position.xAdvance, position.yAdvance);
    }
    ctx.restore();
  } else {
    ctx.font(typeof font.name === 'string' ? font.name : font, fontSize);
    try {
      renderGlyphs(ctx, run.glyphs, run.positions, 0, 0);
    } catch (error) {
      console.log(error);
    }
  }
  ctx.translate(runAdvanceWidth, 0);
};
var renderSpan = function renderSpan(ctx, line, textAnchor, dominantBaseline) {
  var _line$box, _line$box2, _line$runs$, _line$runs$2, _line$runs$2$attribut;
  ctx.save();
  var x = ((_line$box = line.box) === null || _line$box === void 0 ? void 0 : _line$box.x) || 0;
  var y = ((_line$box2 = line.box) === null || _line$box2 === void 0 ? void 0 : _line$box2.y) || 0;
  var font = (_line$runs$ = line.runs[0]) === null || _line$runs$ === void 0 ? void 0 : _line$runs$.attributes.font;
  var scale = ((_line$runs$2 = line.runs[0]) === null || _line$runs$2 === void 0 ? void 0 : (_line$runs$2$attribut = _line$runs$2.attributes) === null || _line$runs$2$attribut === void 0 ? void 0 : _line$runs$2$attribut.scale) || 1;
  var width = line.xAdvance;
  var ascent = font.ascent * scale;
  var xHeight = font.xHeight * scale;
  var descent = font.descent * scale;
  var capHeight = font.capHeight * scale;
  var xTranslate = x;
  var yTranslate = y;
  switch (textAnchor) {
    case 'middle':
      xTranslate = x - width / 2;
      break;
    case 'end':
      xTranslate = x - width;
      break;
    default:
      xTranslate = x;
      break;
  }
  switch (dominantBaseline) {
    case 'middle':
    case 'central':
      yTranslate = y + capHeight / 2;
      break;
    case 'hanging':
      yTranslate = y + capHeight;
      break;
    case 'mathematical':
      yTranslate = y + xHeight;
      break;
    case 'text-after-edge':
      yTranslate = y + descent;
      break;
    case 'text-before-edge':
      yTranslate = y + ascent;
      break;
    default:
      yTranslate = y;
      break;
  }
  ctx.translate(xTranslate, yTranslate);
  line.runs.forEach(function (run) {
    return renderRun$1(ctx, run);
  });
  ctx.restore();
};
var renderSvgText = function renderSvgText(ctx, node) {
  node.children.forEach(function (span) {
    return renderSpan(ctx, span.lines[0], span.props.textAnchor, span.props.dominantBaseline);
  });
};

var pairs = function pairs(values) {
  var result = [];
  for (var i = 0; i < values.length; i += 2) {
    result.push([values[i], values[i + 1]]);
  }
  return result;
};

/**
 * Parse svg-like points into number arrays
 *
 * @param {String} points string ex. "20,30 50,60"
 * @return {Array} points array ex. [[20, 30], [50, 60]]
 */
var parsePoints = function parsePoints(points) {
  var values = (points || '').trim().replace(/,/g, ' ').replace(/(\d)-(\d)/g, '$1 -$2').split(/\s+/);
  if (values.length % 2 !== 0) {
    values = values.slice(0, -1);
  }
  values = values.map(parseFloat);
  return pairs(values);
};

var drawPolyline = function drawPolyline(ctx, points) {
  if (points.length > 0) {
    ctx.moveTo(points[0][0], points[0][1]);
    points.slice(1).forEach(function (p) {
      return ctx.lineTo(p[0], p[1]);
    });
  }
};
var renderPolyline = function renderPolyline(ctx, node) {
  var points = parsePoints(node.props.points || '');
  drawPolyline(ctx, points);
};

var renderPolygon = function renderPolygon(ctx, node) {
  renderPolyline(ctx, node);
  ctx.closePath();
};

var renderImage$1 = function renderImage(ctx, node) {
  if (!node.image.data) return;
  var _node$props = node.props,
    x = _node$props.x,
    y = _node$props.y;
  var _node$style = node.style,
    width = _node$style.width,
    height = _node$style.height,
    opacity = _node$style.opacity;
  var paddingTop = node.box.paddingLeft || 0;
  var paddingLeft = node.box.paddingLeft || 0;
  if (width === 0 || height === 0) {
    console.warn("Image with src '" + node.props.href + "' skipped due to invalid dimensions");
    return;
  }
  ctx.save();
  ctx.fillOpacity(opacity || 1).image(node.image.data, x + paddingLeft, y + paddingTop, {
    width: width,
    height: height
  });
  ctx.restore();
};

// This constant is used to approximate a symmetrical arc using a cubic
// Bezier curve.
var KAPPA$1 = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);
var clipNode = function clipNode(ctx, node) {
  if (!node.style) return;
  var _node$box = node.box,
    top = _node$box.top,
    left = _node$box.left,
    width = _node$box.width,
    height = _node$box.height;
  var _node$style = node.style,
    _node$style$borderTop = _node$style.borderTopLeftRadius,
    borderTopLeftRadius = _node$style$borderTop === void 0 ? 0 : _node$style$borderTop,
    _node$style$borderTop2 = _node$style.borderTopRightRadius,
    borderTopRightRadius = _node$style$borderTop2 === void 0 ? 0 : _node$style$borderTop2,
    _node$style$borderBot = _node$style.borderBottomRightRadius,
    borderBottomRightRadius = _node$style$borderBot === void 0 ? 0 : _node$style$borderBot,
    _node$style$borderBot2 = _node$style.borderBottomLeftRadius,
    borderBottomLeftRadius = _node$style$borderBot2 === void 0 ? 0 : _node$style$borderBot2;

  // Border top
  var rtr = Math.min(borderTopRightRadius, 0.5 * width, 0.5 * height);
  var ctr = rtr * (1.0 - KAPPA$1);
  ctx.moveTo(left + rtr, top);
  ctx.lineTo(left + width - rtr, top);
  ctx.bezierCurveTo(left + width - ctr, top, left + width, top + ctr, left + width, top + rtr);

  // Border right
  var rbr = Math.min(borderBottomRightRadius, 0.5 * width, 0.5 * height);
  var cbr = rbr * (1.0 - KAPPA$1);
  ctx.lineTo(left + width, top + height - rbr);
  ctx.bezierCurveTo(left + width, top + height - cbr, left + width - cbr, top + height, left + width - rbr, top + height);

  // Border bottom
  var rbl = Math.min(borderBottomLeftRadius, 0.5 * width, 0.5 * height);
  var cbl = rbl * (1.0 - KAPPA$1);
  ctx.lineTo(left + rbl, top + height);
  ctx.bezierCurveTo(left + cbl, top + height, left, top + height - cbl, left, top + height - rbl);

  // Border left
  var rtl = Math.min(borderTopLeftRadius, 0.5 * width, 0.5 * height);
  var ctl = rtl * (1.0 - KAPPA$1);
  ctx.lineTo(left, top + rtl);
  ctx.bezierCurveTo(left, top + ctl, left + ctl, top, left + rtl, top);
  ctx.closePath();
  ctx.clip();
};

var applySingleTransformation = function applySingleTransformation(ctx, transform, origin) {
  var operation = transform.operation,
    value = transform.value;
  switch (operation) {
    case 'scale':
      {
        var scaleX = value[0],
          scaleY = value[1];
        ctx.scale(scaleX, scaleY, {
          origin: origin
        });
        break;
      }
    case 'rotate':
      {
        var angle = value[0];
        ctx.rotate(angle, {
          origin: origin
        });
        break;
      }
    case 'translate':
      {
        var x = value[0],
          _value$ = value[1],
          y = _value$ === void 0 ? 0 : _value$;
        ctx.translate(x, y, {
          origin: origin
        });
        break;
      }
    case 'skew':
      {
        var xAngle = value[0],
          yAngle = value[1];
        ctx.skew(xAngle, yAngle, {
          origin: origin
        });
        break;
      }
    case 'matrix':
      {
        ctx.transform.apply(ctx, value);
        break;
      }
    default:
      {
        console.error("Transform operation: '" + operation + "' doesn't supported");
      }
  }
};
var applyTransformations = function applyTransformations(ctx, node) {
  var _node$style, _node$props;
  if (!node.origin) return;
  var origin = [node.origin.left, node.origin.top];
  var operations = ((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.transform) || ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.transform) || [];
  operations.forEach(function (operation) {
    applySingleTransformation(ctx, operation, origin);
  });
};

var _boundingBoxFns;

// From https://github.com/dy/svg-path-bounds/blob/master/index.js
var getPathBoundingBox = function getPathBoundingBox(node) {
  var _node$props;
  var path = normalizePath__default["default"](absPath__default["default"](parsePath__default["default"](((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.d) || '')));
  if (!path.length) return [0, 0, 0, 0];
  var bounds = [Infinity, Infinity, -Infinity, -Infinity];
  for (var i = 0, l = path.length; i < l; i += 1) {
    var points = path[i].slice(1);
    for (var j = 0; j < points.length; j += 2) {
      if (points[j + 0] < bounds[0]) bounds[0] = points[j + 0];
      if (points[j + 1] < bounds[1]) bounds[1] = points[j + 1];
      if (points[j + 0] > bounds[2]) bounds[2] = points[j + 0];
      if (points[j + 1] > bounds[3]) bounds[3] = points[j + 1];
    }
  }
  return bounds;
};
var getCircleBoundingBox = function getCircleBoundingBox(node) {
  var _node$props2, _node$props3, _node$props4;
  var r = ((_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.r) || 0;
  var cx = ((_node$props3 = node.props) === null || _node$props3 === void 0 ? void 0 : _node$props3.cx) || 0;
  var cy = ((_node$props4 = node.props) === null || _node$props4 === void 0 ? void 0 : _node$props4.cy) || 0;
  return [cx - r, cy - r, cx + r, cy + r];
};
var getEllipseBoundingBox = function getEllipseBoundingBox(node) {
  var _node$props5, _node$props6, _node$props7, _node$props8;
  var cx = ((_node$props5 = node.props) === null || _node$props5 === void 0 ? void 0 : _node$props5.cx) || 0;
  var cy = ((_node$props6 = node.props) === null || _node$props6 === void 0 ? void 0 : _node$props6.cy) || 0;
  var rx = ((_node$props7 = node.props) === null || _node$props7 === void 0 ? void 0 : _node$props7.rx) || 0;
  var ry = ((_node$props8 = node.props) === null || _node$props8 === void 0 ? void 0 : _node$props8.ry) || 0;
  return [cx - rx, cy - ry, cx + rx, cy + ry];
};
var getLineBoundingBox = function getLineBoundingBox(node) {
  var _node$props9, _node$props10, _node$props11, _node$props12;
  var x1 = ((_node$props9 = node.props) === null || _node$props9 === void 0 ? void 0 : _node$props9.x1) || 0;
  var y1 = ((_node$props10 = node.props) === null || _node$props10 === void 0 ? void 0 : _node$props10.y1) || 0;
  var x2 = ((_node$props11 = node.props) === null || _node$props11 === void 0 ? void 0 : _node$props11.x2) || 0;
  var y2 = ((_node$props12 = node.props) === null || _node$props12 === void 0 ? void 0 : _node$props12.y2) || 0;
  return [Math.min(x1, x2), Math.min(y1, y2), Math.max(x1, x2), Math.max(y1, y2)];
};
var getRectBoundingBox = function getRectBoundingBox(node) {
  var _node$props13, _node$props14, _node$props15, _node$props16;
  var x = ((_node$props13 = node.props) === null || _node$props13 === void 0 ? void 0 : _node$props13.x) || 0;
  var y = ((_node$props14 = node.props) === null || _node$props14 === void 0 ? void 0 : _node$props14.y) || 0;
  var width = ((_node$props15 = node.props) === null || _node$props15 === void 0 ? void 0 : _node$props15.width) || 0;
  var height = ((_node$props16 = node.props) === null || _node$props16 === void 0 ? void 0 : _node$props16.height) || 0;
  return [x, y, x + width, y + height];
};
var max = function max(values) {
  return Math.max.apply(Math, [-Infinity].concat(values));
};
var min = function min(values) {
  return Math.min.apply(Math, [Infinity].concat(values));
};
var getPolylineBoundingBox = function getPolylineBoundingBox(node) {
  var _node$props17;
  var points = parsePoints(((_node$props17 = node.props) === null || _node$props17 === void 0 ? void 0 : _node$props17.points) || []);
  var xValues = points.map(function (p) {
    return p[0];
  });
  var yValues = points.map(function (p) {
    return p[1];
  });
  return [min(xValues), min(yValues), max(xValues), max(yValues)];
};
var boundingBoxFns = (_boundingBoxFns = {}, _boundingBoxFns[P__namespace.Rect] = getRectBoundingBox, _boundingBoxFns[P__namespace.Line] = getLineBoundingBox, _boundingBoxFns[P__namespace.Path] = getPathBoundingBox, _boundingBoxFns[P__namespace.Circle] = getCircleBoundingBox, _boundingBoxFns[P__namespace.Ellipse] = getEllipseBoundingBox, _boundingBoxFns[P__namespace.Polygon] = getPolylineBoundingBox, _boundingBoxFns[P__namespace.Polyline] = getPolylineBoundingBox, _boundingBoxFns);
var getBoundingBox = function getBoundingBox(node) {
  var boundingBoxFn = boundingBoxFns[node.type];
  return boundingBoxFn ? boundingBoxFn(node) : [0, 0, 0, 0];
};

var _renderFns$1;
var setStrokeWidth = function setStrokeWidth(ctx, node) {
  var _node$props;
  var lineWidth = ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.strokeWidth) || 0;
  if (lineWidth) ctx.lineWidth(lineWidth);
};
var setStrokeColor = function setStrokeColor(ctx, node) {
  var _node$props2;
  var strokeColor = ((_node$props2 = node.props) === null || _node$props2 === void 0 ? void 0 : _node$props2.stroke) || null;
  if (strokeColor) ctx.strokeColor(strokeColor);
};
var setOpacity = function setOpacity(ctx, node) {
  var _node$props3;
  var opacity = ((_node$props3 = node.props) === null || _node$props3 === void 0 ? void 0 : _node$props3.opacity) || null;
  if (!fns.isNil(opacity)) ctx.opacity(opacity);
};
var setFillOpacity = function setFillOpacity(ctx, node) {
  var _node$props4;
  var fillOpacity = ((_node$props4 = node.props) === null || _node$props4 === void 0 ? void 0 : _node$props4.fillOpacity) || null;
  if (!fns.isNil(fillOpacity)) ctx.fillOpacity(fillOpacity);
};
var setStrokeOpacity = function setStrokeOpacity(ctx, node) {
  var _node$props5;
  var strokeOpacity = ((_node$props5 = node.props) === null || _node$props5 === void 0 ? void 0 : _node$props5.strokeOpacity) || null;
  if (!fns.isNil(strokeOpacity)) ctx.strokeOpacity(strokeOpacity);
};
var setLineJoin = function setLineJoin(ctx, node) {
  var _node$props6;
  var lineJoin = ((_node$props6 = node.props) === null || _node$props6 === void 0 ? void 0 : _node$props6.strokeLinejoin) || null;
  if (lineJoin) ctx.lineJoin(lineJoin);
};
var setLineCap = function setLineCap(ctx, node) {
  var _node$props7;
  var lineCap = ((_node$props7 = node.props) === null || _node$props7 === void 0 ? void 0 : _node$props7.strokeLinecap) || null;
  if (lineCap) ctx.lineCap(lineCap);
};
var setLineDash = function setLineDash(ctx, node) {
  var _node$props8;
  var value = ((_node$props8 = node.props) === null || _node$props8 === void 0 ? void 0 : _node$props8.strokeDasharray) || null;
  if (value) ctx.dash(value.split(','));
};
var hasLinearGradientFill = function hasLinearGradientFill(node) {
  var _node$props9, _node$props9$fill;
  return ((_node$props9 = node.props) === null || _node$props9 === void 0 ? void 0 : (_node$props9$fill = _node$props9.fill) === null || _node$props9$fill === void 0 ? void 0 : _node$props9$fill.type) === P__namespace.LinearGradient;
};
var hasRadialGradientFill = function hasRadialGradientFill(node) {
  var _node$props10, _node$props10$fill;
  return ((_node$props10 = node.props) === null || _node$props10 === void 0 ? void 0 : (_node$props10$fill = _node$props10.fill) === null || _node$props10$fill === void 0 ? void 0 : _node$props10$fill.type) === P__namespace.RadialGradient;
};

// Math simplified from https://github.com/devongovett/svgkit/blob/master/src/elements/SVGGradient.js#L104
var setLinearGradientFill = function setLinearGradientFill(ctx, node) {
  var _node$props11;
  var bbox = getBoundingBox(node);
  var gradient = ((_node$props11 = node.props) === null || _node$props11 === void 0 ? void 0 : _node$props11.fill) || null;
  var x1 = gradient.props.x1 || 0;
  var y1 = gradient.props.y1 || 0;
  var x2 = gradient.props.x2 || 1;
  var y2 = gradient.props.y2 || 0;
  var m0 = bbox[2] - bbox[0];
  var m3 = bbox[3] - bbox[1];
  var m4 = bbox[0];
  var m5 = bbox[1];
  var gx1 = m0 * x1 + m4;
  var gy1 = m3 * y1 + m5;
  var gx2 = m0 * x2 + m4;
  var gy2 = m3 * y2 + m5;
  var grad = ctx.linearGradient(gx1, gy1, gx2, gy2);
  gradient.children.forEach(function (stop) {
    grad.stop(stop.props.offset, stop.props.stopColor, stop.props.stopOpacity);
  });
  ctx.fill(grad);
};

// Math simplified from https://github.com/devongovett/svgkit/blob/master/src/elements/SVGGradient.js#L155
var setRadialGradientFill = function setRadialGradientFill(ctx, node) {
  var _node$props12;
  var bbox = getBoundingBox(node);
  var gradient = ((_node$props12 = node.props) === null || _node$props12 === void 0 ? void 0 : _node$props12.fill) || null;
  var cx = gradient.props.cx || 0.5;
  var cy = gradient.props.cy || 0.5;
  var fx = gradient.props.fx || cx;
  var fy = gradient.props.fy || cy;
  var r = gradient.props.r || 0.5;
  var m0 = bbox[2] - bbox[0];
  var m3 = bbox[3] - bbox[1];
  var m4 = bbox[0];
  var m5 = bbox[1];
  var gr = r * m0;
  var gcx = m0 * cx + m4;
  var gcy = m3 * cy + m5;
  var gfx = m0 * fx + m4;
  var gfy = m3 * fy + m5;
  var grad = ctx.radialGradient(gfx, gfy, 0, gcx, gcy, gr);
  gradient.children.forEach(function (stop) {
    grad.stop(stop.props.offset, stop.props.stopColor, stop.props.stopOpacity);
  });
  ctx.fill(grad);
};
var setFillColor = function setFillColor(ctx, node) {
  var _node$props13;
  var fillColor = ((_node$props13 = node.props) === null || _node$props13 === void 0 ? void 0 : _node$props13.fill) || null;
  if (fillColor) ctx.fillColor(fillColor);
};
var setFill = function setFill(ctx, node) {
  if (hasLinearGradientFill(node)) return setLinearGradientFill(ctx, node);
  if (hasRadialGradientFill(node)) return setRadialGradientFill(ctx, node);
  return setFillColor(ctx, node);
};
var draw = function draw(ctx, node) {
  var props = node.props || {};
  if (props.fill && props.stroke) {
    ctx.fillAndStroke(props.fillRule);
  } else if (props.fill) {
    ctx.fill(props.fillRule);
  } else if (props.stroke) {
    ctx.stroke();
  } else {
    ctx.save();
    ctx.opacity(0);
    ctx.fill(null);
    ctx.restore();
  }
};
var noop = function noop() {};
var renderFns$1 = (_renderFns$1 = {}, _renderFns$1[P__namespace.Tspan] = noop, _renderFns$1[P__namespace.TextInstance] = noop, _renderFns$1[P__namespace.Path] = renderPath, _renderFns$1[P__namespace.Rect] = renderRect, _renderFns$1[P__namespace.Line] = renderLine$1, _renderFns$1[P__namespace.G] = renderGroup, _renderFns$1[P__namespace.Text] = renderSvgText, _renderFns$1[P__namespace.Circle] = renderCircle, _renderFns$1[P__namespace.Image] = renderImage$1, _renderFns$1[P__namespace.Ellipse] = renderEllipse, _renderFns$1[P__namespace.Polygon] = renderPolygon, _renderFns$1[P__namespace.Polyline] = renderPolyline, _renderFns$1);
var renderNode$1 = function renderNode(ctx, node) {
  var renderFn = renderFns$1[node.type];
  if (renderFns$1) {
    renderFn(ctx, node);
  } else {
    console.warn("SVG node of type " + node.type + " is not currenty supported");
  }
};
var drawNode = function drawNode(ctx, node) {
  setLineCap(ctx, node);
  setLineDash(ctx, node);
  setLineJoin(ctx, node);
  setStrokeWidth(ctx, node);
  setStrokeColor(ctx, node);
  setFill(ctx, node);
  setStrokeOpacity(ctx, node);
  setFillOpacity(ctx, node);
  setOpacity(ctx, node);
  applyTransformations(ctx, node);
  renderNode$1(ctx, node);
  draw(ctx, node);
};
var clipPath = function clipPath(ctx, node) {
  var _node$props14;
  var value = (_node$props14 = node.props) === null || _node$props14 === void 0 ? void 0 : _node$props14.clipPath;
  if (value) {
    var children = value.children || [];
    children.forEach(function (child) {
      return renderNode$1(ctx, child);
    });
    ctx.clip();
  }
};
var drawChildren = function drawChildren(ctx, node) {
  var children = node.children || [];
  children.forEach(function (child) {
    ctx.save();
    clipPath(ctx, child);
    drawNode(ctx, child);
    drawChildren(ctx, child);
    ctx.restore();
  });
};
var resolveAspectRatio = function resolveAspectRatio(ctx, node) {
  var _node$box = node.box,
    width = _node$box.width,
    height = _node$box.height;
  var _node$props15 = node.props,
    viewBox = _node$props15.viewBox,
    _node$props15$preserv = _node$props15.preserveAspectRatio,
    preserveAspectRatio = _node$props15$preserv === void 0 ? {} : _node$props15$preserv;
  var _preserveAspectRatio$ = preserveAspectRatio.meetOrSlice,
    meetOrSlice = _preserveAspectRatio$ === void 0 ? 'meet' : _preserveAspectRatio$,
    _preserveAspectRatio$2 = preserveAspectRatio.align,
    align = _preserveAspectRatio$2 === void 0 ? 'xMidYMid' : _preserveAspectRatio$2;
  if (viewBox == null || width == null || height == null) return;
  var x = (viewBox === null || viewBox === void 0 ? void 0 : viewBox.minX) || 0;
  var y = (viewBox === null || viewBox === void 0 ? void 0 : viewBox.minY) || 0;
  var logicalWidth = (viewBox === null || viewBox === void 0 ? void 0 : viewBox.maxX) || width;
  var logicalHeight = (viewBox === null || viewBox === void 0 ? void 0 : viewBox.maxY) || height;
  var logicalRatio = logicalWidth / logicalHeight;
  var physicalRatio = width / height;
  var scaleX = width / logicalWidth;
  var scaleY = height / logicalHeight;
  if (align === 'none') {
    ctx.scale(scaleX, scaleY);
    ctx.translate(-x, -y);
    return;
  }
  if (logicalRatio < physicalRatio && meetOrSlice === 'meet' || logicalRatio >= physicalRatio && meetOrSlice === 'slice') {
    ctx.scale(scaleY, scaleY);
    switch (align) {
      case 'xMinYMin':
      case 'xMinYMid':
      case 'xMinYMax':
        ctx.translate(-x, -y);
        break;
      case 'xMidYMin':
      case 'xMidYMid':
      case 'xMidYMax':
        ctx.translate(-x - (logicalWidth - width * logicalHeight / height) / 2, -y);
        break;
      default:
        ctx.translate(-x - (logicalWidth - width * logicalHeight / height), -y);
    }
  } else {
    ctx.scale(scaleX, scaleX);
    switch (align) {
      case 'xMinYMin':
      case 'xMidYMin':
      case 'xMaxYMin':
        ctx.translate(-x, -y);
        break;
      case 'xMinYMid':
      case 'xMidYMid':
      case 'xMaxYMid':
        ctx.translate(-x, -y - (logicalHeight - height * logicalWidth / width) / 2);
        break;
      default:
        ctx.translate(-x, -y - (logicalHeight - height * logicalWidth / width));
    }
  }
};
var moveToOrigin = function moveToOrigin(ctx, node) {
  var _node$box2 = node.box,
    top = _node$box2.top,
    left = _node$box2.left;
  var paddingLeft = node.box.paddingLeft || 0;
  var paddingTop = node.box.paddingTop || 0;
  ctx.translate(left + paddingLeft, top + paddingTop);
};
var renderSvg = function renderSvg(ctx, node) {
  ctx.save();
  clipNode(ctx, node);
  moveToOrigin(ctx, node);
  resolveAspectRatio(ctx, node);
  drawChildren(ctx, node);
  ctx.restore();
};

var parseColor = function parseColor(hex) {
  var parsed = colorString__default["default"].get(hex);
  var value = colorString__default["default"].to.hex(parsed.value.slice(0, 3));
  var opacity = parsed.value[3];
  return {
    value: value,
    opacity: opacity
  };
};

/* eslint-disable no-param-reassign */
var DEST_REGEXP = /^#.+/;
var isSrcId$1 = function isSrcId(src) {
  return src.match(DEST_REGEXP);
};
var renderAttachment = function renderAttachment(ctx, attachment) {
  var _attachment$xOffset = attachment.xOffset,
    xOffset = _attachment$xOffset === void 0 ? 0 : _attachment$xOffset,
    _attachment$yOffset = attachment.yOffset,
    yOffset = _attachment$yOffset === void 0 ? 0 : _attachment$yOffset,
    width = attachment.width,
    height = attachment.height,
    image = attachment.image;
  ctx.translate(-width + xOffset, -height + yOffset);
  ctx.image(image, 0, 0, {
    fit: [width, height],
    align: 'center',
    valign: 'bottom'
  });
};
var renderAttachments = function renderAttachments(ctx, run) {
  ctx.save();
  var font = run.attributes.font;
  var space = font.glyphForCodePoint(0x20);
  var objectReplacement = font.glyphForCodePoint(0xfffc);
  var attachmentAdvance = 0;
  for (var i = 0; i < run.glyphs.length; i += 1) {
    var position = run.positions[i];
    var glyph = run.glyphs[i];
    attachmentAdvance += position.xAdvance || 0;
    if (glyph.id === objectReplacement.id && run.attributes.attachment) {
      ctx.translate(attachmentAdvance, position.yOffset || 0);
      renderAttachment(ctx, run.attributes.attachment);
      run.glyphs[i] = space;
      attachmentAdvance = 0;
    }
  }
  ctx.restore();
};
var renderRun = function renderRun(ctx, run, options) {
  var _run$attributes = run.attributes,
    font = _run$attributes.font,
    fontSize = _run$attributes.fontSize,
    link = _run$attributes.link;
  var color = parseColor(run.attributes.color);
  var opacity = fns.isNil(run.attributes.opacity) ? color.opacity : run.attributes.opacity;
  var height = run.height,
    descent = run.descent,
    xAdvance = run.xAdvance;
  if (options.outlineRuns) {
    ctx.rect(0, -height, xAdvance, height).stroke();
  }
  ctx.fillColor(color.value);
  ctx.fillOpacity(opacity);
  if (link) {
    if (isSrcId$1(link)) {
      ctx.goTo(0, -height - descent, xAdvance, height, link.slice(1));
    } else {
      ctx.link(0, -height - descent, xAdvance, height, link);
    }
  }
  renderAttachments(ctx, run);
  if (font.sbix || font.COLR && font.CPAL) {
    ctx.save();
    ctx.translate(0, -run.ascent);
    for (var i = 0; i < run.glyphs.length; i += 1) {
      var position = run.positions[i];
      var glyph = run.glyphs[i];
      ctx.save();
      ctx.translate(position.xOffset, position.yOffset);
      glyph.render(ctx, fontSize);
      ctx.restore();
      ctx.translate(position.xAdvance, position.yAdvance);
    }
    ctx.restore();
  } else {
    ctx.font(typeof font.name === 'string' ? font.name : font, fontSize);
    try {
      renderGlyphs(ctx, run.glyphs, run.positions, 0, 0);
    } catch (error) {
      console.log(error);
    }
  }
  ctx.translate(xAdvance, 0);
};
var renderBackground$1 = function renderBackground(ctx, rect, backgroundColor) {
  var color = parseColor(backgroundColor);
  ctx.save();
  ctx.fillOpacity(color.opacity);
  ctx.rect(rect.x, rect.y, rect.width, rect.height);
  ctx.fill(color.value);
  ctx.restore();
};
var renderDecorationLine = function renderDecorationLine(ctx, line) {
  ctx.save();
  ctx.lineWidth(line.rect.height);
  ctx.strokeOpacity(line.opacity);
  if (/dashed/.test(line.style)) {
    ctx.dash(3 * line.rect.height);
  } else if (/dotted/.test(line.style)) {
    ctx.dash(line.rect.height);
  }
  if (/wavy/.test(line.style)) {
    var dist = Math.max(2, line.rect.height);
    var step = 1.1 * dist;
    var stepCount = Math.floor(line.rect.width / (2 * step));

    // Adjust step to fill entire width
    var remainingWidth = line.rect.width - stepCount * 2 * step;
    var adjustment = remainingWidth / stepCount / 2;
    step += adjustment;
    var cp1y = line.rect.y + dist;
    var cp2y = line.rect.y - dist;
    var x = line.rect.x;
    ctx.moveTo(line.rect.x, line.rect.y);
    for (var i = 0; i < stepCount; i += 1) {
      ctx.bezierCurveTo(x + step, cp1y, x + step, cp2y, x + 2 * step, line.rect.y);
      x += 2 * step;
    }
  } else {
    ctx.moveTo(line.rect.x, line.rect.y);
    ctx.lineTo(line.rect.x + line.rect.width, line.rect.y);
    if (/double/.test(line.style)) {
      ctx.moveTo(line.rect.x, line.rect.y + line.rect.height * 2);
      ctx.lineTo(line.rect.x + line.rect.width, line.rect.y + line.rect.height * 2);
    }
  }
  ctx.stroke(line.color);
  ctx.restore();
};
var renderLine = function renderLine(ctx, line, options) {
  var lineAscent = line.ascent;
  if (options.outlineLines) {
    ctx.rect(line.box.x, line.box.y, line.box.width, line.box.height).stroke();
  }
  ctx.save();
  ctx.translate(line.box.x, line.box.y + lineAscent);
  for (var i = 0; i < line.runs.length; i += 1) {
    var run = line.runs[i];
    var isLastRun = i === line.runs.length - 1;
    if (run.attributes.backgroundColor) {
      var overflowRight = isLastRun ? line.overflowRight : 0;
      var backgroundRect = {
        x: 0,
        y: -lineAscent,
        height: line.box.height,
        width: run.xAdvance - overflowRight
      };
      renderBackground$1(ctx, backgroundRect, run.attributes.backgroundColor);
    }
    renderRun(ctx, run, options);
  }
  ctx.restore();
  ctx.save();
  ctx.translate(line.box.x, line.box.y);
  for (var _i = 0; _i < line.decorationLines.length; _i += 1) {
    var decorationLine = line.decorationLines[_i];
    renderDecorationLine(ctx, decorationLine);
  }
  ctx.restore();
};
var renderBlock = function renderBlock(ctx, block, options) {
  block.forEach(function (line) {
    renderLine(ctx, line, options);
  });
};
var renderText = function renderText(ctx, node) {
  var _node$box2, _node$box3;
  var _node$box = node.box,
    top = _node$box.top,
    left = _node$box.left;
  var blocks = [node.lines];
  var paddingTop = ((_node$box2 = node.box) === null || _node$box2 === void 0 ? void 0 : _node$box2.paddingTop) || 0;
  var paddingLeft = ((_node$box3 = node.box) === null || _node$box3 === void 0 ? void 0 : _node$box3.paddingLeft) || 0;
  var initialY = node.lines[0] ? node.lines[0].box.y : 0;
  var offsetX = node.alignOffset || 0;
  ctx.save();
  ctx.translate(left + paddingLeft - offsetX, top + paddingTop - initialY);
  blocks.forEach(function (block) {
    renderBlock(ctx, block, {});
  });
  ctx.restore();
};

var renderPage = function renderPage(ctx, node) {
  var _node$props;
  var _node$box = node.box,
    width = _node$box.width,
    height = _node$box.height;
  var dpi = ((_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.dpi) || 72;
  var userUnit = dpi / 72;
  ctx.addPage({
    size: [width, height],
    margin: 0,
    userUnit: userUnit
  });
};

var renderNote = function renderNote(ctx, node) {
  var _node$children, _node$style, _node$style2;
  var _node$box = node.box,
    top = _node$box.top,
    left = _node$box.left;
  var value = (node === null || node === void 0 ? void 0 : (_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children[0].value) || '';
  var color = ((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.backgroundColor) || null;
  var borderWidth = ((_node$style2 = node.style) === null || _node$style2 === void 0 ? void 0 : _node$style2.borderWidth) || null;
  ctx.note(left, top, 0, 0, value, {
    color: color,
    borderWidth: borderWidth
  });
};

var isNumeric = function isNumeric(n) {
  return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
};
var applyContainObjectFit = function applyContainObjectFit(cw, ch, iw, ih, px, py) {
  var cr = cw / ch;
  var ir = iw / ih;
  var pxp = fns.matchPercent(px);
  var pyp = fns.matchPercent(py);
  var pxv = pxp ? pxp.percent : 0.5;
  var pyv = pyp ? pyp.percent : 0.5;
  if (cr > ir) {
    var _height = ch;
    var _width = _height * ir;
    var _yOffset = isNumeric(py) ? py : 0;
    var _xOffset = isNumeric(px) ? px : (cw - _width) * pxv;
    return {
      width: _width,
      height: _height,
      xOffset: _xOffset,
      yOffset: _yOffset
    };
  }
  var width = cw;
  var height = width / ir;
  var xOffset = isNumeric(px) ? px : 0;
  var yOffset = isNumeric(py) ? py : (ch - height) * pyv;
  return {
    width: width,
    height: height,
    yOffset: yOffset,
    xOffset: xOffset
  };
};
var applyNoneObjectFit = function applyNoneObjectFit(cw, ch, iw, ih, px, py) {
  var width = iw;
  var height = ih;
  var pxp = fns.matchPercent(px);
  var pyp = fns.matchPercent(py);
  var pxv = pxp ? pxp.percent : 0.5;
  var pyv = pyp ? pyp.percent : 0.5;
  var xOffset = isNumeric(px) ? px : (cw - width) * pxv;
  var yOffset = isNumeric(py) ? py : (ch - height) * pyv;
  return {
    width: width,
    height: height,
    xOffset: xOffset,
    yOffset: yOffset
  };
};
var applyCoverObjectFit = function applyCoverObjectFit(cw, ch, iw, ih, px, py) {
  var ir = iw / ih;
  var cr = cw / ch;
  var pxp = fns.matchPercent(px);
  var pyp = fns.matchPercent(py);
  var pxv = pxp ? pxp.percent : 0.5;
  var pyv = pyp ? pyp.percent : 0.5;
  if (cr > ir) {
    var _width2 = cw;
    var _height2 = _width2 / ir;
    var _xOffset2 = isNumeric(px) ? px : 0;
    var _yOffset2 = isNumeric(py) ? py : (ch - _height2) * pyv;
    return {
      width: _width2,
      height: _height2,
      yOffset: _yOffset2,
      xOffset: _xOffset2
    };
  }
  var height = ch;
  var width = height * ir;
  var xOffset = isNumeric(px) ? px : (cw - width) * pxv;
  var yOffset = isNumeric(py) ? py : 0;
  return {
    width: width,
    height: height,
    xOffset: xOffset,
    yOffset: yOffset
  };
};
var applyScaleDownObjectFit = function applyScaleDownObjectFit(cw, ch, iw, ih, px, py) {
  var containDimension = applyContainObjectFit(cw, ch, iw, ih, px, py);
  var noneDimension = applyNoneObjectFit(cw, ch, iw, ih, px, py);
  return containDimension.width < noneDimension.width ? containDimension : noneDimension;
};
var applyFillObjectFit = function applyFillObjectFit(cw, ch, px, py) {
  return {
    width: cw,
    height: ch,
    xOffset: fns.matchPercent(px) ? 0 : px || 0,
    yOffset: fns.matchPercent(py) ? 0 : py || 0
  };
};
var resolveObjectFit = function resolveObjectFit(type, cw, ch, iw, ih, px, py) {
  if (type === void 0) {
    type = 'fill';
  }
  switch (type) {
    case 'contain':
      return applyContainObjectFit(cw, ch, iw, ih, px, py);
    case 'cover':
      return applyCoverObjectFit(cw, ch, iw, ih, px, py);
    case 'none':
      return applyNoneObjectFit(cw, ch, iw, ih, px, py);
    case 'scale-down':
      return applyScaleDownObjectFit(cw, ch, iw, ih, px, py);
    default:
      return applyFillObjectFit(cw, ch, px, py);
  }
};

var drawImage = function drawImage(ctx, node, options) {
  var _node$style, _node$style2, _node$style3, _node$style4;
  if (options === void 0) {
    options = {};
  }
  var _node$box = node.box,
    left = _node$box.left,
    top = _node$box.top;
  var opacity = (_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.opacity;
  var objectFit = (_node$style2 = node.style) === null || _node$style2 === void 0 ? void 0 : _node$style2.objectFit;
  var objectPositionX = (_node$style3 = node.style) === null || _node$style3 === void 0 ? void 0 : _node$style3.objectPositionX;
  var objectPositionY = (_node$style4 = node.style) === null || _node$style4 === void 0 ? void 0 : _node$style4.objectPositionY;
  var paddingTop = node.box.paddingTop || 0;
  var paddingRight = node.box.paddingRight || 0;
  var paddingBottom = node.box.paddingBottom || 0;
  var paddingLeft = node.box.paddingLeft || 0;
  var imageCache = options.imageCache || new Map();
  var _resolveObjectFit = resolveObjectFit(objectFit, node.box.width - paddingLeft - paddingRight, node.box.height - paddingTop - paddingBottom, node.image.width, node.image.height, objectPositionX, objectPositionY),
    width = _resolveObjectFit.width,
    height = _resolveObjectFit.height,
    xOffset = _resolveObjectFit.xOffset,
    yOffset = _resolveObjectFit.yOffset;
  if (node.image.data) {
    if (width !== 0 && height !== 0) {
      var cacheKey = node.image.key;
      var image = imageCache.get(cacheKey) || ctx.embedImage(node.image.data);
      if (cacheKey) imageCache.set(cacheKey, image);
      var imageOpacity = fns.isNil(opacity) ? 1 : opacity;
      ctx.fillOpacity(imageOpacity).image(image, left + paddingLeft + xOffset, top + paddingTop + yOffset, {
        width: width,
        height: height
      });
    } else {
      console.warn("Image with src '" + JSON.stringify(node.props.src) + "' skipped due to invalid dimensions");
    }
  }
};
var renderImage = function renderImage(ctx, node, options) {
  ctx.save();
  clipNode(ctx, node);
  drawImage(ctx, node, options);
  ctx.restore();
};

var CONTENT_COLOR = '#a1c6e7';
var PADDING_COLOR = '#c4deb9';
var MARGIN_COLOR = '#f8cca1';

// TODO: Draw debug boxes using clipping to enhance quality

var debugContent = function debugContent(ctx, node) {
  var _node$box = node.box,
    left = _node$box.left,
    top = _node$box.top,
    width = _node$box.width,
    height = _node$box.height,
    _node$box$paddingLeft = _node$box.paddingLeft,
    paddingLeft = _node$box$paddingLeft === void 0 ? 0 : _node$box$paddingLeft,
    _node$box$paddingTop = _node$box.paddingTop,
    paddingTop = _node$box$paddingTop === void 0 ? 0 : _node$box$paddingTop,
    _node$box$paddingRigh = _node$box.paddingRight,
    paddingRight = _node$box$paddingRigh === void 0 ? 0 : _node$box$paddingRigh,
    _node$box$paddingBott = _node$box.paddingBottom,
    paddingBottom = _node$box$paddingBott === void 0 ? 0 : _node$box$paddingBott,
    _node$box$borderLeftW = _node$box.borderLeftWidth,
    borderLeftWidth = _node$box$borderLeftW === void 0 ? 0 : _node$box$borderLeftW,
    _node$box$borderTopWi = _node$box.borderTopWidth,
    borderTopWidth = _node$box$borderTopWi === void 0 ? 0 : _node$box$borderTopWi,
    _node$box$borderRight = _node$box.borderRightWidth,
    borderRightWidth = _node$box$borderRight === void 0 ? 0 : _node$box$borderRight,
    _node$box$borderBotto = _node$box.borderBottomWidth,
    borderBottomWidth = _node$box$borderBotto === void 0 ? 0 : _node$box$borderBotto;
  ctx.fillColor(CONTENT_COLOR).opacity(0.5).rect(left + paddingLeft + borderLeftWidth, top + paddingTop + borderTopWidth, width - paddingLeft - paddingRight - borderRightWidth - borderLeftWidth, height - paddingTop - paddingBottom - borderTopWidth - borderBottomWidth).fill();
};
var debugPadding = function debugPadding(ctx, node) {
  var _node$box2 = node.box,
    left = _node$box2.left,
    top = _node$box2.top,
    width = _node$box2.width,
    height = _node$box2.height,
    _node$box2$paddingLef = _node$box2.paddingLeft,
    paddingLeft = _node$box2$paddingLef === void 0 ? 0 : _node$box2$paddingLef,
    _node$box2$paddingTop = _node$box2.paddingTop,
    paddingTop = _node$box2$paddingTop === void 0 ? 0 : _node$box2$paddingTop,
    _node$box2$paddingRig = _node$box2.paddingRight,
    paddingRight = _node$box2$paddingRig === void 0 ? 0 : _node$box2$paddingRig,
    _node$box2$paddingBot = _node$box2.paddingBottom,
    paddingBottom = _node$box2$paddingBot === void 0 ? 0 : _node$box2$paddingBot,
    _node$box2$borderLeft = _node$box2.borderLeftWidth,
    borderLeftWidth = _node$box2$borderLeft === void 0 ? 0 : _node$box2$borderLeft,
    _node$box2$borderTopW = _node$box2.borderTopWidth,
    borderTopWidth = _node$box2$borderTopW === void 0 ? 0 : _node$box2$borderTopW,
    _node$box2$borderRigh = _node$box2.borderRightWidth,
    borderRightWidth = _node$box2$borderRigh === void 0 ? 0 : _node$box2$borderRigh,
    _node$box2$borderBott = _node$box2.borderBottomWidth,
    borderBottomWidth = _node$box2$borderBott === void 0 ? 0 : _node$box2$borderBott;
  ctx.fillColor(PADDING_COLOR).opacity(0.5);

  // Padding top
  ctx.rect(left + paddingLeft + borderLeftWidth, top + borderTopWidth, width - paddingRight - paddingLeft - borderLeftWidth - borderRightWidth, paddingTop).fill();

  // Padding left
  ctx.rect(left + borderLeftWidth, top + borderTopWidth, paddingLeft, height - borderTopWidth - borderBottomWidth).fill();

  // Padding right
  ctx.rect(left + width - paddingRight - borderRightWidth, top + borderTopWidth, paddingRight, height - borderTopWidth - borderBottomWidth).fill();

  // Padding bottom
  ctx.rect(left + paddingLeft + borderLeftWidth, top + height - paddingBottom - borderBottomWidth, width - paddingRight - paddingLeft - borderLeftWidth - borderRightWidth, paddingBottom).fill();
};
var getMargin = function getMargin(box) {
  var marginLeft = box.marginLeft === 'auto' ? 0 : box.marginLeft;
  var marginTop = box.marginTop === 'auto' ? 0 : box.marginTop;
  var marginRight = box.marginRight === 'auto' ? 0 : box.marginRight;
  var marginBottom = box.marginBottom === 'auto' ? 0 : box.marginBottom;
  return {
    marginLeft: marginLeft,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom
  };
};
var debugMargin = function debugMargin(ctx, node) {
  var _node$box3 = node.box,
    left = _node$box3.left,
    top = _node$box3.top,
    width = _node$box3.width,
    height = _node$box3.height;
  var _getMargin = getMargin(node.box),
    _getMargin$marginLeft = _getMargin.marginLeft,
    marginLeft = _getMargin$marginLeft === void 0 ? 0 : _getMargin$marginLeft,
    _getMargin$marginTop = _getMargin.marginTop,
    marginTop = _getMargin$marginTop === void 0 ? 0 : _getMargin$marginTop,
    _getMargin$marginRigh = _getMargin.marginRight,
    marginRight = _getMargin$marginRigh === void 0 ? 0 : _getMargin$marginRigh,
    _getMargin$marginBott = _getMargin.marginBottom,
    marginBottom = _getMargin$marginBott === void 0 ? 0 : _getMargin$marginBott;
  ctx.fillColor(MARGIN_COLOR).opacity(0.5);

  // Margin top
  ctx.rect(left, top - marginTop, width, marginTop).fill();

  // Margin left
  ctx.rect(left - marginLeft, top - marginTop, marginLeft, height + marginTop + marginBottom).fill();

  // Margin right
  ctx.rect(left + width, top - marginTop, marginRight, height + marginTop + marginBottom).fill();

  // Margin bottom
  ctx.rect(left, top + height, width, marginBottom).fill();
};
var debugText = function debugText(ctx, node) {
  var _node$box4 = node.box,
    left = _node$box4.left,
    top = _node$box4.top,
    width = _node$box4.width,
    height = _node$box4.height;
  var _getMargin2 = getMargin(node.box),
    _getMargin2$marginLef = _getMargin2.marginLeft,
    marginLeft = _getMargin2$marginLef === void 0 ? 0 : _getMargin2$marginLef,
    _getMargin2$marginTop = _getMargin2.marginTop,
    marginTop = _getMargin2$marginTop === void 0 ? 0 : _getMargin2$marginTop,
    _getMargin2$marginRig = _getMargin2.marginRight,
    marginRight = _getMargin2$marginRig === void 0 ? 0 : _getMargin2$marginRig,
    _getMargin2$marginBot = _getMargin2.marginBottom,
    marginBottom = _getMargin2$marginBot === void 0 ? 0 : _getMargin2$marginBot;
  var roundedWidth = Math.round(width + marginLeft + marginRight);
  var roundedHeight = Math.round(height + marginTop + marginBottom);
  ctx.fontSize(6).opacity(1).fillColor('black').text(roundedWidth + " x " + roundedHeight, left - marginLeft, Math.max(top - marginTop - 4, 1));
};
var debugOrigin = function debugOrigin(ctx, node) {
  if (node.origin) {
    ctx.circle(node.origin.left, node.origin.top, 3).fill('red').circle(node.origin.left, node.origin.top, 5).stroke('red');
  }
};
var renderDebug = function renderDebug(ctx, node) {
  var _node$props;
  if (!((_node$props = node.props) !== null && _node$props !== void 0 && _node$props.debug)) return;
  ctx.save();
  debugContent(ctx, node);
  debugPadding(ctx, node);
  debugMargin(ctx, node);
  debugText(ctx, node);
  debugOrigin(ctx, node);
  ctx.restore();
};

var availableMethods = ['dash', 'clip', 'save', 'path', 'fill', 'font', 'text', 'rect', 'scale', 'moveTo', 'lineTo', 'stroke', 'rotate', 'circle', 'lineCap', 'opacity', 'ellipse', 'polygon', 'restore', 'lineJoin', 'fontSize', 'fillColor', 'lineWidth', 'translate', 'miterLimit', 'strokeColor', 'fillOpacity', 'roundedRect', 'fillAndStroke', 'strokeOpacity', 'bezierCurveTo', 'quadraticCurveTo', 'linearGradient', 'radialGradient'];
var painter = function painter(ctx) {
  var p = availableMethods.reduce(function (acc, prop) {
    var _extends2;
    return _extends__default["default"]({}, acc, (_extends2 = {}, _extends2[prop] = function () {
      ctx[prop].apply(ctx, arguments);
      return p;
    }, _extends2));
  }, {});
  return p;
};
var renderCanvas = function renderCanvas(ctx, node) {
  var _node$box = node.box,
    top = _node$box.top,
    left = _node$box.left,
    width = _node$box.width,
    height = _node$box.height;
  var paddingTop = node.box.paddingTop || 0;
  var paddingLeft = node.box.paddingLeft || 0;
  var paddingRight = node.box.paddingRight || 0;
  var paddingBottom = node.box.paddingBottom || 0;
  var availableWidth = width - paddingLeft - paddingRight;
  var availableHeight = height - paddingTop - paddingBottom;
  if (!availableWidth || !availableHeight) {
    console.warn('Canvas element has null width or height. Please provide valid values via the `style` prop in order to correctly render it.');
  }
  ctx.save().translate(left + paddingLeft, top + paddingTop);
  if (node.props.paint) {
    node.props.paint(painter(ctx), availableWidth, availableHeight);
  }
  ctx.restore();
};

// Ref: https://www.w3.org/TR/css-backgrounds-3/#borders

// This constant is used to approximate a symmetrical arc using a cubic Bezier curve.
var KAPPA = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);
var clipBorderTop = function clipBorderTop(ctx, layout, style, rtr, rtl) {
  var top = layout.top,
    left = layout.left,
    width = layout.width,
    height = layout.height;
  var borderTopWidth = style.borderTopWidth,
    borderRightWidth = style.borderRightWidth,
    borderLeftWidth = style.borderLeftWidth;

  // Clip outer top border edge
  ctx.moveTo(left + rtl, top);
  ctx.lineTo(left + width - rtr, top);

  // Ellipse coefficients outer top right cap
  var c0 = rtr * (1.0 - KAPPA);

  // Clip outer top right cap
  ctx.bezierCurveTo(left + width - c0, top, left + width, top + c0, left + width, top + rtr);

  // Move down in case the margin exceedes the radius
  var topRightYCoord = top + Math.max(borderTopWidth, rtr);
  ctx.lineTo(left + width, topRightYCoord);

  // Clip inner top right cap
  ctx.lineTo(left + width - borderRightWidth, topRightYCoord);

  // Ellipse coefficients inner top right cap
  var innerTopRightRadiusX = Math.max(rtr - borderRightWidth, 0);
  var innerTopRightRadiusY = Math.max(rtr - borderTopWidth, 0);
  var c1 = innerTopRightRadiusX * (1.0 - KAPPA);
  var c2 = innerTopRightRadiusY * (1.0 - KAPPA);

  // Clip inner top right cap
  ctx.bezierCurveTo(left + width - borderRightWidth, top + borderTopWidth + c2, left + width - borderRightWidth - c1, top + borderTopWidth, left + width - borderRightWidth - innerTopRightRadiusX, top + borderTopWidth);

  // Clip inner top border edge
  ctx.lineTo(left + Math.max(rtl, borderLeftWidth), top + borderTopWidth);

  // Ellipse coefficients inner top left cap
  var innerTopLeftRadiusX = Math.max(rtl - borderLeftWidth, 0);
  var innerTopLeftRadiusY = Math.max(rtl - borderTopWidth, 0);
  var c3 = innerTopLeftRadiusX * (1.0 - KAPPA);
  var c4 = innerTopLeftRadiusY * (1.0 - KAPPA);
  var topLeftYCoord = top + Math.max(borderTopWidth, rtl);

  // Clip inner top left cap
  ctx.bezierCurveTo(left + borderLeftWidth + c3, top + borderTopWidth, left + borderLeftWidth, top + borderTopWidth + c4, left + borderLeftWidth, topLeftYCoord);
  ctx.lineTo(left, topLeftYCoord);

  // Move down in case the margin exceedes the radius
  ctx.lineTo(left, top + rtl);

  // Ellipse coefficients outer top left cap
  var c5 = rtl * (1.0 - KAPPA);

  // Clip outer top left cap
  ctx.bezierCurveTo(left, top + c5, left + c5, top, left + rtl, top);
  ctx.closePath();
  ctx.clip();

  // Clip border top cap joins
  if (borderRightWidth) {
    var trSlope = -borderTopWidth / borderRightWidth;
    ctx.moveTo(left + width / 2, trSlope * (-width / 2) + top);
    ctx.lineTo(left + width, top);
    ctx.lineTo(left, top);
    ctx.lineTo(left, top + height);
    ctx.closePath();
    ctx.clip();
  }
  if (borderLeftWidth) {
    var _trSlope = -borderTopWidth / borderLeftWidth;
    ctx.moveTo(left + width / 2, _trSlope * (-width / 2) + top);
    ctx.lineTo(left, top);
    ctx.lineTo(left + width, top);
    ctx.lineTo(left + width, top + height);
    ctx.closePath();
    ctx.clip();
  }
};
var fillBorderTop = function fillBorderTop(ctx, layout, style, rtr, rtl) {
  var top = layout.top,
    left = layout.left,
    width = layout.width;
  var borderTopColor = style.borderTopColor,
    borderTopWidth = style.borderTopWidth,
    borderTopStyle = style.borderTopStyle,
    borderRightWidth = style.borderRightWidth,
    borderLeftWidth = style.borderLeftWidth;
  var c0 = rtl * (1.0 - KAPPA);
  var c1 = rtr * (1.0 - KAPPA);
  ctx.moveTo(left, top + Math.max(rtl, borderTopWidth));
  ctx.bezierCurveTo(left, top + c0, left + c0, top, left + rtl, top);
  ctx.lineTo(left + width - rtr, top);
  ctx.bezierCurveTo(left + width - c1, top, left + width, top + c1, left + width, top + rtr);
  ctx.strokeColor(borderTopColor);
  ctx.lineWidth(Math.max(borderRightWidth, borderTopWidth, borderLeftWidth) * 2);
  if (borderTopStyle === 'dashed') {
    ctx.dash(borderTopWidth * 2, {
      space: borderTopWidth * 1.2
    });
  } else if (borderTopStyle === 'dotted') {
    ctx.dash(borderTopWidth, {
      space: borderTopWidth * 1.2
    });
  }
  ctx.stroke();
  ctx.undash();
};
var clipBorderRight = function clipBorderRight(ctx, layout, style, rtr, rbr) {
  var top = layout.top,
    left = layout.left,
    width = layout.width,
    height = layout.height;
  var borderTopWidth = style.borderTopWidth,
    borderRightWidth = style.borderRightWidth,
    borderBottomWidth = style.borderBottomWidth;

  // Clip outer right border edge
  ctx.moveTo(left + width, top + rtr);
  ctx.lineTo(left + width, top + height - rbr);

  // Ellipse coefficients outer bottom right cap
  var c0 = rbr * (1.0 - KAPPA);

  // Clip outer top right cap
  ctx.bezierCurveTo(left + width, top + height - c0, left + width - c0, top + height, left + width - rbr, top + height);

  // Move left in case the margin exceedes the radius
  var topBottomXCoord = left + width - Math.max(borderRightWidth, rbr);
  ctx.lineTo(topBottomXCoord, top + height);

  // Clip inner bottom right cap
  ctx.lineTo(topBottomXCoord, top + height - borderBottomWidth);

  // Ellipse coefficients inner bottom right cap
  var innerBottomRightRadiusX = Math.max(rbr - borderRightWidth, 0);
  var innerBottomRightRadiusY = Math.max(rbr - borderBottomWidth, 0);
  var c1 = innerBottomRightRadiusX * (1.0 - KAPPA);
  var c2 = innerBottomRightRadiusY * (1.0 - KAPPA);

  // Clip inner top right cap
  ctx.bezierCurveTo(left + width - borderRightWidth - c1, top + height - borderBottomWidth, left + width - borderRightWidth, top + height - borderBottomWidth - c2, left + width - borderRightWidth, top + height - Math.max(rbr, borderBottomWidth));

  // Clip inner right border edge
  ctx.lineTo(left + width - borderRightWidth, top + Math.max(rtr, borderTopWidth));

  // Ellipse coefficients inner top right cap
  var innerTopRightRadiusX = Math.max(rtr - borderRightWidth, 0);
  var innerTopRightRadiusY = Math.max(rtr - borderTopWidth, 0);
  var c3 = innerTopRightRadiusX * (1.0 - KAPPA);
  var c4 = innerTopRightRadiusY * (1.0 - KAPPA);
  var topRightXCoord = left + width - Math.max(rtr, borderRightWidth);

  // Clip inner top left cap
  ctx.bezierCurveTo(left + width - borderRightWidth, top + borderTopWidth + c4, left + width - borderRightWidth - c3, top + borderTopWidth, topRightXCoord, top + borderTopWidth);
  ctx.lineTo(topRightXCoord, top);

  // Move right in case the margin exceedes the radius
  ctx.lineTo(left + width - rtr, top);

  // Ellipse coefficients outer top right cap
  var c5 = rtr * (1.0 - KAPPA);

  // Clip outer top right cap
  ctx.bezierCurveTo(left + width - c5, top, left + width, top + c5, left + width, top + rtr);
  ctx.closePath();
  ctx.clip();

  // Clip border right cap joins
  if (borderTopWidth) {
    var trSlope = -borderTopWidth / borderRightWidth;
    ctx.moveTo(left + width / 2, trSlope * (-width / 2) + top);
    ctx.lineTo(left + width, top);
    ctx.lineTo(left + width, top + height);
    ctx.lineTo(left, top + height);
    ctx.closePath();
    ctx.clip();
  }
  if (borderBottomWidth) {
    var brSlope = borderBottomWidth / borderRightWidth;
    ctx.moveTo(left + width / 2, brSlope * (-width / 2) + top + height);
    ctx.lineTo(left + width, top + height);
    ctx.lineTo(left + width, top);
    ctx.lineTo(left, top);
    ctx.closePath();
    ctx.clip();
  }
};
var fillBorderRight = function fillBorderRight(ctx, layout, style, rtr, rbr) {
  var top = layout.top,
    left = layout.left,
    width = layout.width,
    height = layout.height;
  var borderRightColor = style.borderRightColor,
    borderRightStyle = style.borderRightStyle,
    borderRightWidth = style.borderRightWidth,
    borderTopWidth = style.borderTopWidth,
    borderBottomWidth = style.borderBottomWidth;
  var c0 = rbr * (1.0 - KAPPA);
  var c1 = rtr * (1.0 - KAPPA);
  ctx.moveTo(left + width - rtr, top);
  ctx.bezierCurveTo(left + width - c1, top, left + width, top + c1, left + width, top + rtr);
  ctx.lineTo(left + width, top + height - rbr);
  ctx.bezierCurveTo(left + width, top + height - c0, left + width - c0, top + height, left + width - rbr, top + height);
  ctx.strokeColor(borderRightColor);
  ctx.lineWidth(Math.max(borderRightWidth, borderTopWidth, borderBottomWidth) * 2);
  if (borderRightStyle === 'dashed') {
    ctx.dash(borderRightWidth * 2, {
      space: borderRightWidth * 1.2
    });
  } else if (borderRightStyle === 'dotted') {
    ctx.dash(borderRightWidth, {
      space: borderRightWidth * 1.2
    });
  }
  ctx.stroke();
  ctx.undash();
};
var clipBorderBottom = function clipBorderBottom(ctx, layout, style, rbl, rbr) {
  var top = layout.top,
    left = layout.left,
    width = layout.width,
    height = layout.height;
  var borderBottomWidth = style.borderBottomWidth,
    borderRightWidth = style.borderRightWidth,
    borderLeftWidth = style.borderLeftWidth;

  // Clip outer top border edge
  ctx.moveTo(left + width - rbr, top + height);
  ctx.lineTo(left + rbl, top + height);

  // Ellipse coefficients outer top right cap
  var c0 = rbl * (1.0 - KAPPA);

  // Clip outer top right cap
  ctx.bezierCurveTo(left + c0, top + height, left, top + height - c0, left, top + height - rbl);

  // Move up in case the margin exceedes the radius
  var bottomLeftYCoord = top + height - Math.max(borderBottomWidth, rbl);
  ctx.lineTo(left, bottomLeftYCoord);

  // Clip inner bottom left cap
  ctx.lineTo(left + borderLeftWidth, bottomLeftYCoord);

  // Ellipse coefficients inner top right cap
  var innerBottomLeftRadiusX = Math.max(rbl - borderLeftWidth, 0);
  var innerBottomLeftRadiusY = Math.max(rbl - borderBottomWidth, 0);
  var c1 = innerBottomLeftRadiusX * (1.0 - KAPPA);
  var c2 = innerBottomLeftRadiusY * (1.0 - KAPPA);

  // Clip inner bottom left cap
  ctx.bezierCurveTo(left + borderLeftWidth, top + height - borderBottomWidth - c2, left + borderLeftWidth + c1, top + height - borderBottomWidth, left + borderLeftWidth + innerBottomLeftRadiusX, top + height - borderBottomWidth);

  // Clip inner bottom border edge
  ctx.lineTo(left + width - Math.max(rbr, borderRightWidth), top + height - borderBottomWidth);

  // Ellipse coefficients inner top left cap
  var innerBottomRightRadiusX = Math.max(rbr - borderRightWidth, 0);
  var innerBottomRightRadiusY = Math.max(rbr - borderBottomWidth, 0);
  var c3 = innerBottomRightRadiusX * (1.0 - KAPPA);
  var c4 = innerBottomRightRadiusY * (1.0 - KAPPA);
  var bottomRightYCoord = top + height - Math.max(borderBottomWidth, rbr);

  // Clip inner top left cap
  ctx.bezierCurveTo(left + width - borderRightWidth - c3, top + height - borderBottomWidth, left + width - borderRightWidth, top + height - borderBottomWidth - c4, left + width - borderRightWidth, bottomRightYCoord);
  ctx.lineTo(left + width, bottomRightYCoord);

  // Move down in case the margin exceedes the radius
  ctx.lineTo(left + width, top + height - rbr);

  // Ellipse coefficients outer top left cap
  var c5 = rbr * (1.0 - KAPPA);

  // Clip outer top left cap
  ctx.bezierCurveTo(left + width, top + height - c5, left + width - c5, top + height, left + width - rbr, top + height);
  ctx.closePath();
  ctx.clip();

  // Clip border bottom cap joins
  if (borderRightWidth) {
    var brSlope = borderBottomWidth / borderRightWidth;
    ctx.moveTo(left + width / 2, brSlope * (-width / 2) + top + height);
    ctx.lineTo(left + width, top + height);
    ctx.lineTo(left, top + height);
    ctx.lineTo(left, top);
    ctx.closePath();
    ctx.clip();
  }
  if (borderLeftWidth) {
    var trSlope = -borderBottomWidth / borderLeftWidth;
    ctx.moveTo(left + width / 2, trSlope * (width / 2) + top + height);
    ctx.lineTo(left, top + height);
    ctx.lineTo(left + width, top + height);
    ctx.lineTo(left + width, top);
    ctx.closePath();
    ctx.clip();
  }
};
var fillBorderBottom = function fillBorderBottom(ctx, layout, style, rbl, rbr) {
  var top = layout.top,
    left = layout.left,
    width = layout.width,
    height = layout.height;
  var borderBottomColor = style.borderBottomColor,
    borderBottomStyle = style.borderBottomStyle,
    borderBottomWidth = style.borderBottomWidth,
    borderRightWidth = style.borderRightWidth,
    borderLeftWidth = style.borderLeftWidth;
  var c0 = rbl * (1.0 - KAPPA);
  var c1 = rbr * (1.0 - KAPPA);
  ctx.moveTo(left + width, top + height - rbr);
  ctx.bezierCurveTo(left + width, top + height - c1, left + width - c1, top + height, left + width - rbr, top + height);
  ctx.lineTo(left + rbl, top + height);
  ctx.bezierCurveTo(left + c0, top + height, left, top + height - c0, left, top + height - rbl);
  ctx.strokeColor(borderBottomColor);
  ctx.lineWidth(Math.max(borderBottomWidth, borderRightWidth, borderLeftWidth) * 2);
  if (borderBottomStyle === 'dashed') {
    ctx.dash(borderBottomWidth * 2, {
      space: borderBottomWidth * 1.2
    });
  } else if (borderBottomStyle === 'dotted') {
    ctx.dash(borderBottomWidth, {
      space: borderBottomWidth * 1.2
    });
  }
  ctx.stroke();
  ctx.undash();
};
var clipBorderLeft = function clipBorderLeft(ctx, layout, style, rbl, rtl) {
  var top = layout.top,
    left = layout.left,
    width = layout.width,
    height = layout.height;
  var borderTopWidth = style.borderTopWidth,
    borderLeftWidth = style.borderLeftWidth,
    borderBottomWidth = style.borderBottomWidth;

  // Clip outer left border edge
  ctx.moveTo(left, top + height - rbl);
  ctx.lineTo(left, top + rtl);

  // Ellipse coefficients outer top left cap
  var c0 = rtl * (1.0 - KAPPA);

  // Clip outer top left cap
  ctx.bezierCurveTo(left, top + c0, left + c0, top, left + rtl, top);

  // Move right in case the margin exceedes the radius
  var topLeftCoordX = left + Math.max(borderLeftWidth, rtl);
  ctx.lineTo(topLeftCoordX, top);

  // Clip inner top left cap
  ctx.lineTo(topLeftCoordX, top + borderTopWidth);

  // Ellipse coefficients inner top left cap
  var innerTopLeftRadiusX = Math.max(rtl - borderLeftWidth, 0);
  var innerTopLeftRadiusY = Math.max(rtl - borderTopWidth, 0);
  var c1 = innerTopLeftRadiusX * (1.0 - KAPPA);
  var c2 = innerTopLeftRadiusY * (1.0 - KAPPA);

  // Clip inner top right cap
  ctx.bezierCurveTo(left + borderLeftWidth + c1, top + borderTopWidth, left + borderLeftWidth, top + borderTopWidth + c2, left + borderLeftWidth, top + Math.max(rtl, borderTopWidth));

  // Clip inner left border edge
  ctx.lineTo(left + borderLeftWidth, top + height - Math.max(rbl, borderBottomWidth));

  // Ellipse coefficients inner bottom left cap
  var innerBottomLeftRadiusX = Math.max(rbl - borderLeftWidth, 0);
  var innerBottomLeftRadiusY = Math.max(rbl - borderBottomWidth, 0);
  var c3 = innerBottomLeftRadiusX * (1.0 - KAPPA);
  var c4 = innerBottomLeftRadiusY * (1.0 - KAPPA);
  var bottomLeftXCoord = left + Math.max(rbl, borderLeftWidth);

  // Clip inner top left cap
  ctx.bezierCurveTo(left + borderLeftWidth, top + height - borderBottomWidth - c4, left + borderLeftWidth + c3, top + height - borderBottomWidth, bottomLeftXCoord, top + height - borderBottomWidth);
  ctx.lineTo(bottomLeftXCoord, top + height);

  // Move left in case the margin exceedes the radius
  ctx.lineTo(left + rbl, top + height);

  // Ellipse coefficients outer top right cap
  var c5 = rbl * (1.0 - KAPPA);

  // Clip outer top right cap
  ctx.bezierCurveTo(left + c5, top + height, left, top + height - c5, left, top + height - rbl);
  ctx.closePath();
  ctx.clip();

  // Clip border right cap joins
  if (borderBottomWidth) {
    var trSlope = -borderBottomWidth / borderLeftWidth;
    ctx.moveTo(left + width / 2, trSlope * (width / 2) + top + height);
    ctx.lineTo(left, top + height);
    ctx.lineTo(left, top);
    ctx.lineTo(left + width, top);
    ctx.closePath();
    ctx.clip();
  }
  if (borderBottomWidth) {
    var _trSlope2 = -borderTopWidth / borderLeftWidth;
    ctx.moveTo(left + width / 2, _trSlope2 * (-width / 2) + top);
    ctx.lineTo(left, top);
    ctx.lineTo(left, top + height);
    ctx.lineTo(left + width, top + height);
    ctx.closePath();
    ctx.clip();
  }
};
var fillBorderLeft = function fillBorderLeft(ctx, layout, style, rbl, rtl) {
  var top = layout.top,
    left = layout.left,
    height = layout.height;
  var borderLeftColor = style.borderLeftColor,
    borderLeftStyle = style.borderLeftStyle,
    borderLeftWidth = style.borderLeftWidth,
    borderTopWidth = style.borderTopWidth,
    borderBottomWidth = style.borderBottomWidth;
  var c0 = rbl * (1.0 - KAPPA);
  var c1 = rtl * (1.0 - KAPPA);
  ctx.moveTo(left + rbl, top + height);
  ctx.bezierCurveTo(left + c0, top + height, left, top + height - c0, left, top + height - rbl);
  ctx.lineTo(left, top + rtl);
  ctx.bezierCurveTo(left, top + c1, left + c1, top, left + rtl, top);
  ctx.strokeColor(borderLeftColor);
  ctx.lineWidth(Math.max(borderLeftWidth, borderTopWidth, borderBottomWidth) * 2);
  if (borderLeftStyle === 'dashed') {
    ctx.dash(borderLeftWidth * 2, {
      space: borderLeftWidth * 1.2
    });
  } else if (borderLeftStyle === 'dotted') {
    ctx.dash(borderLeftWidth, {
      space: borderLeftWidth * 1.2
    });
  }
  ctx.stroke();
  ctx.undash();
};
var shouldRenderBorders = function shouldRenderBorders(node) {
  return node.box && (node.box.borderTopWidth || node.box.borderRightWidth || node.box.borderBottomWidth || node.box.borderLeftWidth);
};
var renderBorders = function renderBorders(ctx, node) {
  if (!shouldRenderBorders(node)) return;
  var _node$box = node.box,
    width = _node$box.width,
    height = _node$box.height,
    borderTopWidth = _node$box.borderTopWidth,
    borderLeftWidth = _node$box.borderLeftWidth,
    borderRightWidth = _node$box.borderRightWidth,
    borderBottomWidth = _node$box.borderBottomWidth;
  var _node$style = node.style,
    opacity = _node$style.opacity,
    _node$style$borderTop = _node$style.borderTopLeftRadius,
    borderTopLeftRadius = _node$style$borderTop === void 0 ? 0 : _node$style$borderTop,
    _node$style$borderTop2 = _node$style.borderTopRightRadius,
    borderTopRightRadius = _node$style$borderTop2 === void 0 ? 0 : _node$style$borderTop2,
    _node$style$borderBot = _node$style.borderBottomLeftRadius,
    borderBottomLeftRadius = _node$style$borderBot === void 0 ? 0 : _node$style$borderBot,
    _node$style$borderBot2 = _node$style.borderBottomRightRadius,
    borderBottomRightRadius = _node$style$borderBot2 === void 0 ? 0 : _node$style$borderBot2,
    _node$style$borderTop3 = _node$style.borderTopColor,
    borderTopColor = _node$style$borderTop3 === void 0 ? 'black' : _node$style$borderTop3,
    _node$style$borderTop4 = _node$style.borderTopStyle,
    borderTopStyle = _node$style$borderTop4 === void 0 ? 'solid' : _node$style$borderTop4,
    _node$style$borderLef = _node$style.borderLeftColor,
    borderLeftColor = _node$style$borderLef === void 0 ? 'black' : _node$style$borderLef,
    _node$style$borderLef2 = _node$style.borderLeftStyle,
    borderLeftStyle = _node$style$borderLef2 === void 0 ? 'solid' : _node$style$borderLef2,
    _node$style$borderRig = _node$style.borderRightColor,
    borderRightColor = _node$style$borderRig === void 0 ? 'black' : _node$style$borderRig,
    _node$style$borderRig2 = _node$style.borderRightStyle,
    borderRightStyle = _node$style$borderRig2 === void 0 ? 'solid' : _node$style$borderRig2,
    _node$style$borderBot3 = _node$style.borderBottomColor,
    borderBottomColor = _node$style$borderBot3 === void 0 ? 'black' : _node$style$borderBot3,
    _node$style$borderBot4 = _node$style.borderBottomStyle,
    borderBottomStyle = _node$style$borderBot4 === void 0 ? 'solid' : _node$style$borderBot4;
  var style = {
    borderTopColor: borderTopColor,
    borderTopWidth: borderTopWidth,
    borderTopStyle: borderTopStyle,
    borderLeftColor: borderLeftColor,
    borderLeftWidth: borderLeftWidth,
    borderLeftStyle: borderLeftStyle,
    borderRightColor: borderRightColor,
    borderRightWidth: borderRightWidth,
    borderRightStyle: borderRightStyle,
    borderBottomColor: borderBottomColor,
    borderBottomWidth: borderBottomWidth,
    borderBottomStyle: borderBottomStyle,
    borderTopLeftRadius: borderTopLeftRadius,
    borderTopRightRadius: borderTopRightRadius,
    borderBottomLeftRadius: borderBottomLeftRadius,
    borderBottomRightRadius: borderBottomRightRadius
  };
  var rtr = Math.min(borderTopRightRadius, 0.5 * width, 0.5 * height);
  var rtl = Math.min(borderTopLeftRadius, 0.5 * width, 0.5 * height);
  var rbr = Math.min(borderBottomRightRadius, 0.5 * width, 0.5 * height);
  var rbl = Math.min(borderBottomLeftRadius, 0.5 * width, 0.5 * height);
  ctx.save();
  ctx.strokeOpacity(opacity);
  if (borderTopWidth) {
    ctx.save();
    clipBorderTop(ctx, node.box, style, rtr, rtl);
    fillBorderTop(ctx, node.box, style, rtr, rtl);
    ctx.restore();
  }
  if (borderRightWidth) {
    ctx.save();
    clipBorderRight(ctx, node.box, style, rtr, rbr);
    fillBorderRight(ctx, node.box, style, rtr, rbr);
    ctx.restore();
  }
  if (borderBottomWidth) {
    ctx.save();
    clipBorderBottom(ctx, node.box, style, rbl, rbr);
    fillBorderBottom(ctx, node.box, style, rbl, rbr);
    ctx.restore();
  }
  if (borderLeftWidth) {
    ctx.save();
    clipBorderLeft(ctx, node.box, style, rbl, rtl);
    fillBorderLeft(ctx, node.box, style, rbl, rtl);
    ctx.restore();
  }
  ctx.restore();
};

var drawBackground = function drawBackground(ctx, node) {
  var _node$style;
  var _node$box = node.box,
    top = _node$box.top,
    left = _node$box.left,
    width = _node$box.width,
    height = _node$box.height;
  var color = parseColor(node.style.backgroundColor);
  var nodeOpacity = fns.isNil((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.opacity) ? 1 : node.style.opacity;
  var opacity = Math.min(color.opacity, nodeOpacity);
  ctx.fillOpacity(opacity).fillColor(color.value).rect(left, top, width, height).fill();
};
var renderBackground = function renderBackground(ctx, node) {
  var _node$style2;
  var hasBackground = !!node.box && !!((_node$style2 = node.style) !== null && _node$style2 !== void 0 && _node$style2.backgroundColor);
  if (hasBackground) {
    ctx.save();
    clipNode(ctx, node);
    drawBackground(ctx, node);
    ctx.restore();
  }
};

var isSrcId = function isSrcId(value) {
  return /^#.+/.test(value);
};
var setLink = function setLink(ctx, node) {
  var props = node.props || {};
  var _node$box = node.box,
    top = _node$box.top,
    left = _node$box.left,
    width = _node$box.width,
    height = _node$box.height;
  var src = props.src || props.href;
  if (src) {
    var isId = isSrcId(src);
    var method = isId ? 'goTo' : 'link';
    var value = isId ? src.slice(1) : src;
    ctx[method](left, top, width, height, value);
  }
};

var setDestination = function setDestination(ctx, node) {
  var _node$props;
  if ((_node$props = node.props) !== null && _node$props !== void 0 && _node$props.id) {
    ctx.addNamedDestination(node.props.id, 'XYZ', null, node.box.top, null);
  }
};

var _renderFns;
var isRecursiveNode = function isRecursiveNode(node) {
  return node.type !== P__namespace.Text && node.type !== P__namespace.Svg;
};
var renderChildren = function renderChildren(ctx, node, options) {
  ctx.save();
  if (node.box) {
    ctx.translate(node.box.left, node.box.top);
  }
  var children = node.children || [];
  var renderChild = function renderChild(child) {
    return renderNode(ctx, child, options);
  };
  children.forEach(renderChild);
  ctx.restore();
};
var renderFns = (_renderFns = {}, _renderFns[P__namespace.Text] = renderText, _renderFns[P__namespace.Note] = renderNote, _renderFns[P__namespace.Image] = renderImage, _renderFns[P__namespace.Canvas] = renderCanvas, _renderFns[P__namespace.Svg] = renderSvg, _renderFns[P__namespace.Link] = setLink, _renderFns);
var renderNode = function renderNode(ctx, node, options) {
  var _node$style;
  var overflowHidden = ((_node$style = node.style) === null || _node$style === void 0 ? void 0 : _node$style.overflow) === 'hidden';
  var shouldRenderChildren = isRecursiveNode(node);
  if (node.type === P__namespace.Page) renderPage(ctx, node);
  ctx.save();
  if (overflowHidden) clipNode(ctx, node);
  applyTransformations(ctx, node);
  renderBackground(ctx, node);
  renderBorders(ctx, node);
  var renderFn = renderFns[node.type];
  if (renderFn) renderFn(ctx, node, options);
  if (shouldRenderChildren) renderChildren(ctx, node, options);
  setDestination(ctx, node);
  renderDebug(ctx, node);
  ctx.restore();
};

/* eslint-disable no-param-reassign */

var setPDFMetadata = function setPDFMetadata(target) {
  return function (key, value) {
    if (value) target.info[key] = value;
  };
};

/**
 * Set document instance metadata
 *
 * @param {Object} ctx document instance
 * @param {Object} doc document root
 */
var addMetadata = function addMetadata(ctx, doc) {
  var _props$creator, _props$producer;
  var setProp = setPDFMetadata(ctx);
  var props = doc.props || {};
  var title = props.title || null;
  var author = props.author || null;
  var subject = props.subject || null;
  var keywords = props.keywords || null;
  var creator = (_props$creator = props.creator) != null ? _props$creator : 'react-pdf';
  var producer = (_props$producer = props.producer) != null ? _props$producer : 'react-pdf';
  setProp('Title', title);
  setProp('Author', author);
  setProp('Subject', subject);
  setProp('Keywords', keywords);
  setProp('Creator', creator);
  setProp('Producer', producer);
};

/* eslint-disable no-param-reassign */

var addNodeBookmark = function addNodeBookmark(ctx, node, pageNumber, registry) {
  var _node$props;
  var bookmark = (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.bookmark;
  if (bookmark) {
    var title = bookmark.title,
      parent = bookmark.parent,
      expanded = bookmark.expanded,
      zoom = bookmark.zoom,
      fit = bookmark.fit;
    var outline = registry[parent] || ctx.outline;
    var top = bookmark.top || node.box.top;
    var left = bookmark.left || node.box.left;
    var instance = outline.addItem(title, {
      pageNumber: pageNumber,
      expanded: expanded,
      top: top,
      left: left,
      zoom: zoom,
      fit: fit
    });
    registry[bookmark.ref] = instance;
  }
  if (!node.children) return;
  node.children.forEach(function (child) {
    return addNodeBookmark(ctx, child, pageNumber, registry);
  });
};
var addBookmarks = function addBookmarks(ctx, root) {
  var registry = {};
  var pages = root.children || [];
  pages.forEach(function (page, i) {
    addNodeBookmark(ctx, page, i, registry);
  });
};

var render = function render(ctx, doc) {
  var pages = doc.children || [];
  var options = {
    imageCache: new Map()
  };
  addMetadata(ctx, doc);
  pages.forEach(function (page) {
    return renderNode(ctx, page, options);
  });
  addBookmarks(ctx, doc);
  ctx.end();
  return ctx;
};

exports["default"] = render;


/***/ }),

/***/ 63409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _extends = __webpack_require__(43259);
var primitives = __webpack_require__(80921);
var _regeneratorRuntime = __webpack_require__(23984);
var _asyncToGenerator = __webpack_require__(82510);
var fs = __webpack_require__(57147);
var buffer = __webpack_require__(14300);
var FontStore = __webpack_require__(90051);
var renderPDF = __webpack_require__(56856);
var PDFDocument = __webpack_require__(36756);
var layoutDocument = __webpack_require__(3644);
var _objectWithoutPropertiesLoose = __webpack_require__(54845);
var require$$0 = __webpack_require__(89891);
var require$$1 = __webpack_require__(18038);
var scheduler = __webpack_require__(47138);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var primitives__namespace = /*#__PURE__*/_interopNamespace(primitives);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var FontStore__default = /*#__PURE__*/_interopDefaultLegacy(FontStore);
var renderPDF__default = /*#__PURE__*/_interopDefaultLegacy(renderPDF);
var PDFDocument__default = /*#__PURE__*/_interopDefaultLegacy(PDFDocument);
var layoutDocument__default = /*#__PURE__*/_interopDefaultLegacy(layoutDocument);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var scheduler__namespace = /*#__PURE__*/_interopNamespace(scheduler);

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var reactReconciler_production_min = {exports: {}};

var require$$2 = /*@__PURE__*/getAugmentedNamespace(scheduler__namespace);

/** @license React v0.23.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
module.exports = function $$$reconciler($$$hostConfig) {

  var aa = require$$0__default["default"],
    ba = require$$1__default["default"],
    m = require$$2;
  function n(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var q = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  q.hasOwnProperty("ReactCurrentDispatcher") || (q.ReactCurrentDispatcher = {
    current: null
  });
  q.hasOwnProperty("ReactCurrentBatchConfig") || (q.ReactCurrentBatchConfig = {
    suspense: null
  });
  var u = "function" === typeof Symbol && Symbol.for,
    ca = u ? Symbol.for("react.element") : 60103,
    da = u ? Symbol.for("react.portal") : 60106,
    ea = u ? Symbol.for("react.fragment") : 60107,
    fa = u ? Symbol.for("react.strict_mode") : 60108,
    ha = u ? Symbol.for("react.profiler") : 60114,
    ia = u ? Symbol.for("react.provider") : 60109,
    ja = u ? Symbol.for("react.context") : 60110,
    ka = u ? Symbol.for("react.concurrent_mode") : 60111,
    la = u ? Symbol.for("react.forward_ref") : 60112,
    ma = u ? Symbol.for("react.suspense") : 60113,
    na = u ? Symbol.for("react.suspense_list") : 60120,
    oa = u ? Symbol.for("react.memo") : 60115,
    pa = u ? Symbol.for("react.lazy") : 60116;
  var qa = "function" === typeof Symbol && Symbol.iterator;
  function ra(a) {
    if (null === a || "object" !== typeof a) return null;
    a = qa && a[qa] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function sa(a) {
    if (-1 === a._status) {
      a._status = 0;
      var b = a._ctor;
      b = b();
      a._result = b;
      b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });
    }
  }
  function ta(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ea:
        return "Fragment";
      case da:
        return "Portal";
      case ha:
        return "Profiler";
      case fa:
        return "StrictMode";
      case ma:
        return "Suspense";
      case na:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case ja:
        return "Context.Consumer";
      case ia:
        return "Context.Provider";
      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
      case oa:
        return ta(a.type);
      case pa:
        if (a = 1 === a._status ? a._result : null) return ta(a);
    }
    return null;
  }
  function ua(a) {
    var b = a,
      c = a;
    if (a.alternate) for (; b.return;) b = b.return;else {
      a = b;
      do b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return; while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function va(a) {
    if (ua(a) !== a) throw Error(n(188));
  }
  function wa(a) {
    var b = a.alternate;
    if (!b) {
      b = ua(a);
      if (null === b) throw Error(n(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return va(e), a;
          if (f === d) return va(e), b;
          f = f.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, l = e.child; l;) {
          if (l === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }
          if (l === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }
          l = l.sibling;
        }
        if (!g) {
          for (l = f.child; l;) {
            if (l === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }
            if (l === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }
            l = l.sibling;
          }
          if (!g) throw Error(n(189));
        }
      }
      if (c.alternate !== d) throw Error(n(190));
    }
    if (3 !== c.tag) throw Error(n(188));
    return c.stateNode.current === c ? a : b;
  }
  function xa(a) {
    a = wa(a);
    if (!a) return null;
    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;
        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function ya(a) {
    a = wa(a);
    if (!a) return null;
    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;
        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  var za = $$$hostConfig.getPublicInstance,
    Aa = $$$hostConfig.getRootHostContext,
    Ba = $$$hostConfig.getChildHostContext,
    Ca = $$$hostConfig.prepareForCommit,
    Da = $$$hostConfig.resetAfterCommit,
    Ea = $$$hostConfig.createInstance,
    Fa = $$$hostConfig.appendInitialChild,
    Ga = $$$hostConfig.finalizeInitialChildren,
    Ia = $$$hostConfig.prepareUpdate,
    Ja = $$$hostConfig.shouldSetTextContent,
    Ka = $$$hostConfig.shouldDeprioritizeSubtree,
    La = $$$hostConfig.createTextInstance,
    Ma = $$$hostConfig.setTimeout,
    Na = $$$hostConfig.clearTimeout,
    Oa = $$$hostConfig.noTimeout,
    Pa = $$$hostConfig.isPrimaryRenderer,
    Qa = $$$hostConfig.supportsMutation,
    Ra = $$$hostConfig.supportsPersistence,
    Sa = $$$hostConfig.supportsHydration,
    Ta = $$$hostConfig.appendChild,
    Ua = $$$hostConfig.appendChildToContainer,
    Va = $$$hostConfig.commitTextUpdate,
    Wa = $$$hostConfig.commitMount,
    Xa = $$$hostConfig.commitUpdate,
    Ya = $$$hostConfig.insertBefore,
    Za = $$$hostConfig.insertInContainerBefore,
    $a = $$$hostConfig.removeChild,
    ab = $$$hostConfig.removeChildFromContainer,
    bb = $$$hostConfig.resetTextContent,
    cb = $$$hostConfig.hideInstance,
    db = $$$hostConfig.hideTextInstance,
    eb = $$$hostConfig.unhideInstance,
    fb = $$$hostConfig.unhideTextInstance,
    gb = $$$hostConfig.cloneInstance,
    hb = $$$hostConfig.createContainerChildSet,
    ib = $$$hostConfig.appendChildToContainerChildSet,
    kb = $$$hostConfig.finalizeContainerChildren,
    lb = $$$hostConfig.replaceContainerChildren,
    mb = $$$hostConfig.cloneHiddenInstance,
    nb = $$$hostConfig.cloneHiddenTextInstance,
    ob = $$$hostConfig.canHydrateInstance,
    pb = $$$hostConfig.canHydrateTextInstance,
    qb = $$$hostConfig.isSuspenseInstancePending,
    rb = $$$hostConfig.isSuspenseInstanceFallback,
    sb = $$$hostConfig.getNextHydratableSibling,
    tb = $$$hostConfig.getFirstHydratableChild,
    ub = $$$hostConfig.hydrateInstance,
    vb = $$$hostConfig.hydrateTextInstance,
    wb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
    xb = $$$hostConfig.commitHydratedContainer,
    yb = $$$hostConfig.commitHydratedSuspenseInstance,
    zb = /^(.*)[\\\/]/;
  function Ab(a) {
    var b = "";
    do {
      a: switch (a.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c = "";
          break a;
        default:
          var d = a._debugOwner,
            e = a._debugSource,
            f = ta(a.type);
          c = null;
          d && (c = ta(d.type));
          d = f;
          f = "";
          e ? f = " (at " + e.fileName.replace(zb, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
          c = "\n    in " + (d || "Unknown") + f;
      }
      b += c;
      a = a.return;
    } while (a);
    return b;
  }
  var Bb = [],
    Cb = -1;
  function y(a) {
    0 > Cb || (a.current = Bb[Cb], Bb[Cb] = null, Cb--);
  }
  function z(a, b) {
    Cb++;
    Bb[Cb] = a.current;
    a.current = b;
  }
  var Db = {},
    A = {
      current: Db
    },
    B = {
      current: !1
    },
    Eb = Db;
  function Fb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Db;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function C(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function Gb(a) {
    y(B);
    y(A);
  }
  function Hb(a) {
    y(B);
    y(A);
  }
  function Ib(a, b, c) {
    if (A.current !== Db) throw Error(n(168));
    z(A, b);
    z(B, c);
  }
  function Jb(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in a)) throw Error(n(108, ta(b) || "Unknown", e));
    return aa({}, c, {}, d);
  }
  function Kb(a) {
    var b = a.stateNode;
    b = b && b.__reactInternalMemoizedMergedChildContext || Db;
    Eb = A.current;
    z(A, b);
    z(B, B.current);
    return !0;
  }
  function Lb(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (b = Jb(a, b, Eb), d.__reactInternalMemoizedMergedChildContext = b, y(B), y(A), z(A, b)) : y(B);
    z(B, c);
  }
  var Mb = m.unstable_runWithPriority,
    Nb = m.unstable_scheduleCallback,
    Ob = m.unstable_cancelCallback,
    Pb = m.unstable_shouldYield,
    Qb = m.unstable_requestPaint,
    Tb = m.unstable_now,
    Ub = m.unstable_getCurrentPriorityLevel,
    Vb = m.unstable_ImmediatePriority,
    Wb = m.unstable_UserBlockingPriority,
    Xb = m.unstable_NormalPriority,
    Yb = m.unstable_LowPriority,
    Zb = m.unstable_IdlePriority,
    $b = {},
    ac = void 0 !== Qb ? Qb : function () {},
    bc = null,
    cc = null,
    dc = !1,
    ec = Tb(),
    E = 1E4 > ec ? Tb : function () {
      return Tb() - ec;
    };
  function fc() {
    switch (Ub()) {
      case Vb:
        return 99;
      case Wb:
        return 98;
      case Xb:
        return 97;
      case Yb:
        return 96;
      case Zb:
        return 95;
      default:
        throw Error(n(332));
    }
  }
  function gc(a) {
    switch (a) {
      case 99:
        return Vb;
      case 98:
        return Wb;
      case 97:
        return Xb;
      case 96:
        return Yb;
      case 95:
        return Zb;
      default:
        throw Error(n(332));
    }
  }
  function hc(a, b) {
    a = gc(a);
    return Mb(a, b);
  }
  function ic(a, b, c) {
    a = gc(a);
    return Nb(a, b, c);
  }
  function jc(a) {
    null === bc ? (bc = [a], cc = Nb(Vb, kc)) : bc.push(a);
    return $b;
  }
  function F() {
    if (null !== cc) {
      var a = cc;
      cc = null;
      Ob(a);
    }
    kc();
  }
  function kc() {
    if (!dc && null !== bc) {
      dc = !0;
      var a = 0;
      try {
        var b = bc;
        hc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];
            do c = c(!0); while (null !== c);
          }
        });
        bc = null;
      } catch (c) {
        throw null !== bc && (bc = bc.slice(a + 1)), Nb(Vb, F), c;
      } finally {
        dc = !1;
      }
    }
  }
  var lc = 3;
  function mc(a, b, c) {
    c /= 10;
    return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
  }
  function nc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var oc = "function" === typeof Object.is ? Object.is : nc,
    pc = Object.prototype.hasOwnProperty;
  function qc(a, b) {
    if (oc(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++) if (!pc.call(b, c[d]) || !oc(a[c[d]], b[c[d]])) return !1;
    return !0;
  }
  function rc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    }
    return b;
  }
  var sc = {
      current: null
    },
    tc = null,
    uc = null,
    vc = null;
  function wc() {
    vc = uc = tc = null;
  }
  function xc(a, b) {
    var c = a.type._context;
    Pa ? (z(sc, c._currentValue), c._currentValue = b) : (z(sc, c._currentValue2), c._currentValue2 = b);
  }
  function yc(a) {
    var b = sc.current;
    y(sc);
    a = a.type._context;
    Pa ? a._currentValue = b : a._currentValue2 = b;
  }
  function zc(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
      a = a.return;
    }
  }
  function Ac(a, b) {
    tc = a;
    vc = uc = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (a.expirationTime >= b && (Bc = !0), a.firstContext = null);
  }
  function Cc(a, b) {
    if (vc !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) vc = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };
      if (null === uc) {
        if (null === tc) throw Error(n(308));
        uc = b;
        tc.dependencies = {
          expirationTime: 0,
          firstContext: b,
          responders: null
        };
      } else uc = uc.next = b;
    }
    return Pa ? a._currentValue : a._currentValue2;
  }
  var Dc = !1;
  function Ec(a) {
    return {
      baseState: a,
      firstUpdate: null,
      lastUpdate: null,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    };
  }
  function Fc(a) {
    return {
      baseState: a.baseState,
      firstUpdate: a.firstUpdate,
      lastUpdate: a.lastUpdate,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    };
  }
  function Gc(a, b) {
    return {
      expirationTime: a,
      suspenseConfig: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
      nextEffect: null
    };
  }
  function Hc(a, b) {
    null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
  }
  function Ic(a, b) {
    var c = a.alternate;
    if (null === c) {
      var d = a.updateQueue;
      var e = null;
      null === d && (d = a.updateQueue = Ec(a.memoizedState));
    } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = Ec(a.memoizedState), e = c.updateQueue = Ec(c.memoizedState)) : d = a.updateQueue = Fc(e) : null === e && (e = c.updateQueue = Fc(d));
    null === e || d === e ? Hc(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (Hc(d, b), Hc(e, b)) : (Hc(d, b), e.lastUpdate = b);
  }
  function Jc(a, b) {
    var c = a.updateQueue;
    c = null === c ? a.updateQueue = Ec(a.memoizedState) : Kc(a, c);
    null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
  }
  function Kc(a, b) {
    var c = a.alternate;
    null !== c && b === c.updateQueue && (b = a.updateQueue = Fc(b));
    return b;
  }
  function Lc(a, b, c, d, e, f) {
    switch (c.tag) {
      case 1:
        return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;
      case 3:
        a.effectTag = a.effectTag & -4097 | 64;
      case 0:
        a = c.payload;
        e = "function" === typeof a ? a.call(f, d, e) : a;
        if (null === e || void 0 === e) break;
        return aa({}, d, e);
      case 2:
        Dc = !0;
    }
    return d;
  }
  function Nc(a, b, c, d, e) {
    Dc = !1;
    b = Kc(a, b);
    for (var f = b.baseState, g = null, l = 0, h = b.firstUpdate, k = f; null !== h;) {
      var p = h.expirationTime;
      p < e ? (null === g && (g = h, f = k), l < p && (l = p)) : (Oc(p, h.suspenseConfig), k = Lc(a, b, h, k, c, d), null !== h.callback && (a.effectTag |= 32, h.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = h : (b.lastEffect.nextEffect = h, b.lastEffect = h)));
      h = h.next;
    }
    p = null;
    for (h = b.firstCapturedUpdate; null !== h;) {
      var D = h.expirationTime;
      D < e ? (null === p && (p = h, null === g && (f = k)), l < D && (l = D)) : (k = Lc(a, b, h, k, c, d), null !== h.callback && (a.effectTag |= 32, h.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = h : (b.lastCapturedEffect.nextEffect = h, b.lastCapturedEffect = h)));
      h = h.next;
    }
    null === g && (b.lastUpdate = null);
    null === p ? b.lastCapturedUpdate = null : a.effectTag |= 32;
    null === g && null === p && (f = k);
    b.baseState = f;
    b.firstUpdate = g;
    b.firstCapturedUpdate = p;
    Pc(l);
    a.expirationTime = l;
    a.memoizedState = k;
  }
  function Qc(a, b, c) {
    null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
    Rc(b.firstEffect, c);
    b.firstEffect = b.lastEffect = null;
    Rc(b.firstCapturedEffect, c);
    b.firstCapturedEffect = b.lastCapturedEffect = null;
  }
  function Rc(a, b) {
    for (; null !== a;) {
      var c = a.callback;
      if (null !== c) {
        a.callback = null;
        var d = b;
        if ("function" !== typeof c) throw Error(n(191, c));
        c.call(d);
      }
      a = a.nextEffect;
    }
  }
  var Sc = q.ReactCurrentBatchConfig,
    Tc = new ba.Component().refs;
  function Uc(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    d = a.updateQueue;
    null !== d && 0 === a.expirationTime && (d.baseState = c);
  }
  var Xc = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternalFiber) ? ua(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternalFiber;
      var d = G(),
        e = Sc.suspense;
      d = Vc(d, a, e);
      e = Gc(d, e);
      e.payload = b;
      void 0 !== c && null !== c && (e.callback = c);
      Ic(a, e);
      Wc(a, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternalFiber;
      var d = G(),
        e = Sc.suspense;
      d = Vc(d, a, e);
      e = Gc(d, e);
      e.tag = 1;
      e.payload = b;
      void 0 !== c && null !== c && (e.callback = c);
      Ic(a, e);
      Wc(a, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternalFiber;
      var c = G(),
        d = Sc.suspense;
      c = Vc(c, a, d);
      d = Gc(c, d);
      d.tag = 2;
      void 0 !== b && null !== b && (d.callback = b);
      Ic(a, d);
      Wc(a, c);
    }
  };
  function Yc(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !qc(c, d) || !qc(e, f) : !0;
  }
  function Zc(a, b, c) {
    var d = !1,
      e = Db;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = Cc(f) : (e = C(b) ? Eb : A.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Fb(a, e) : Db);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Xc;
    a.stateNode = b;
    b._reactInternalFiber = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function $c(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Xc.enqueueReplaceState(b, b.state, null);
  }
  function ad(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Tc;
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = Cc(f) : (f = C(b) ? Eb : A.current, e.context = Fb(a, f));
    f = a.updateQueue;
    null !== f && (Nc(a, f, c, e, d), e.state = a.memoizedState);
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Uc(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Xc.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (Nc(a, f, c, e, d), e.state = a.memoizedState));
    "function" === typeof e.componentDidMount && (a.effectTag |= 4);
  }
  var bd = Array.isArray;
  function cd(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(n(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(n(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
        b = function b(_b) {
          var a = d.refs;
          a === Tc && (a = d.refs = {});
          null === _b ? delete a[e] : a[e] = _b;
        };
        b._stringRef = e;
        return b;
      }
      if ("string" !== typeof a) throw Error(n(284));
      if (!c._owner) throw Error(n(290, a));
    }
    return a;
  }
  function dd(a, b) {
    if ("textarea" !== a.type) throw Error(n(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
  }
  function ed(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.effectTag = 8;
      }
    }
    function c(c, d) {
      if (!a) return null;
      for (; null !== d;) b(c, d), d = d.sibling;
      return null;
    }
    function d(b, a) {
      for (b = new Map(); null !== a;) null !== a.key ? b.set(a.key, a) : b.set(a.index, a), a = a.sibling;
      return b;
    }
    function e(b, a, c) {
      b = fd(b, a);
      b.index = 0;
      b.sibling = null;
      return b;
    }
    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
      b.effectTag = 2;
      return c;
    }
    function g(b) {
      a && null === b.alternate && (b.effectTag = 2);
      return b;
    }
    function l(b, a, c, d) {
      if (null === a || 6 !== a.tag) return a = gd(c, b.mode, d), a.return = b, a;
      a = e(a, c);
      a.return = b;
      return a;
    }
    function h(b, a, c, d) {
      if (null !== a && a.elementType === c.type) return d = e(a, c.props), d.ref = cd(b, a, c), d.return = b, d;
      d = hd(c.type, c.key, c.props, null, b.mode, d);
      d.ref = cd(b, a, c);
      d.return = b;
      return d;
    }
    function k(b, a, c, d) {
      if (null === a || 4 !== a.tag || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation) return a = id(c, b.mode, d), a.return = b, a;
      a = e(a, c.children || []);
      a.return = b;
      return a;
    }
    function p(b, a, c, d, f) {
      if (null === a || 7 !== a.tag) return a = jd(c, b.mode, d, f), a.return = b, a;
      a = e(a, c);
      a.return = b;
      return a;
    }
    function D(b, a, c) {
      if ("string" === typeof a || "number" === typeof a) return a = gd("" + a, b.mode, c), a.return = b, a;
      if ("object" === typeof a && null !== a) {
        switch (a.$$typeof) {
          case ca:
            return c = hd(a.type, a.key, a.props, null, b.mode, c), c.ref = cd(b, null, a), c.return = b, c;
          case da:
            return a = id(a, b.mode, c), a.return = b, a;
        }
        if (bd(a) || ra(a)) return a = jd(a, b.mode, c, null), a.return = b, a;
        dd(b, a);
      }
      return null;
    }
    function x(b, a, c, d) {
      var e = null !== a ? a.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : l(b, a, "" + c, d);
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case ca:
            return c.key === e ? c.type === ea ? p(b, a, c.props.children, d, e) : h(b, a, c, d) : null;
          case da:
            return c.key === e ? k(b, a, c, d) : null;
        }
        if (bd(c) || ra(c)) return null !== e ? null : p(b, a, c, d, null);
        dd(b, c);
      }
      return null;
    }
    function K(b, a, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return b = b.get(c) || null, l(a, b, "" + d, e);
      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case ca:
            return b = b.get(null === d.key ? c : d.key) || null, d.type === ea ? p(a, b, d.props.children, e, d.key) : h(a, b, d, e);
          case da:
            return b = b.get(null === d.key ? c : d.key) || null, k(a, b, d, e);
        }
        if (bd(d) || ra(d)) return b = b.get(c) || null, p(a, b, d, e, null);
        dd(a, d);
      }
      return null;
    }
    function Ha(e, g, h, l) {
      for (var k = null, w = null, t = g, r = g = 0, p = null; null !== t && r < h.length; r++) {
        t.index > r ? (p = t, t = null) : p = t.sibling;
        var v = x(e, t, h[r], l);
        if (null === v) {
          null === t && (t = p);
          break;
        }
        a && t && null === v.alternate && b(e, t);
        g = f(v, g, r);
        null === w ? k = v : w.sibling = v;
        w = v;
        t = p;
      }
      if (r === h.length) return c(e, t), k;
      if (null === t) {
        for (; r < h.length; r++) t = D(e, h[r], l), null !== t && (g = f(t, g, r), null === w ? k = t : w.sibling = t, w = t);
        return k;
      }
      for (t = d(e, t); r < h.length; r++) p = K(t, e, r, h[r], l), null !== p && (a && null !== p.alternate && t.delete(null === p.key ? r : p.key), g = f(p, g, r), null === w ? k = p : w.sibling = p, w = p);
      a && t.forEach(function (a) {
        return b(e, a);
      });
      return k;
    }
    function O(e, g, h, l) {
      var k = ra(h);
      if ("function" !== typeof k) throw Error(n(150));
      h = k.call(h);
      if (null == h) throw Error(n(151));
      for (var t = k = null, r = g, w = g = 0, p = null, v = h.next(); null !== r && !v.done; w++, v = h.next()) {
        r.index > w ? (p = r, r = null) : p = r.sibling;
        var N = x(e, r, v.value, l);
        if (null === N) {
          null === r && (r = p);
          break;
        }
        a && r && null === N.alternate && b(e, r);
        g = f(N, g, w);
        null === t ? k = N : t.sibling = N;
        t = N;
        r = p;
      }
      if (v.done) return c(e, r), k;
      if (null === r) {
        for (; !v.done; w++, v = h.next()) v = D(e, v.value, l), null !== v && (g = f(v, g, w), null === t ? k = v : t.sibling = v, t = v);
        return k;
      }
      for (r = d(e, r); !v.done; w++, v = h.next()) v = K(r, e, w, v.value, l), null !== v && (a && null !== v.alternate && r.delete(null === v.key ? w : v.key), g = f(v, g, w), null === t ? k = v : t.sibling = v, t = v);
      a && r.forEach(function (a) {
        return b(e, a);
      });
      return k;
    }
    return function (a, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === ea && null === f.key;
      k && (f = f.props.children);
      var l = "object" === typeof f && null !== f;
      if (l) switch (f.$$typeof) {
        case ca:
          a: {
            l = f.key;
            for (k = d; null !== k;) {
              if (k.key === l) {
                if (7 === k.tag ? f.type === ea : k.elementType === f.type) {
                  c(a, k.sibling);
                  d = e(k, f.type === ea ? f.props.children : f.props);
                  d.ref = cd(a, k, f);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, k);
                  break;
                }
              } else b(a, k);
              k = k.sibling;
            }
            f.type === ea ? (d = jd(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = hd(f.type, f.key, f.props, null, a.mode, h), h.ref = cd(a, d, f), h.return = a, a = h);
          }
          return g(a);
        case da:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }
            d = id(f, a.mode, h);
            d.return = a;
            a = d;
          }
          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = gd(f, a.mode, h), d.return = a, a = d), g(a);
      if (bd(f)) return Ha(a, d, f, h);
      if (ra(f)) return O(a, d, f, h);
      l && dd(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 0:
          throw a = a.type, Error(n(152, a.displayName || a.name || "Component"));
      }
      return c(a, d);
    };
  }
  var kd = ed(!0),
    ld = ed(!1),
    md = {},
    H = {
      current: md
    },
    nd = {
      current: md
    },
    od = {
      current: md
    };
  function pd(a) {
    if (a === md) throw Error(n(174));
    return a;
  }
  function qd(a, b) {
    z(od, b);
    z(nd, a);
    z(H, md);
    b = Aa(b);
    y(H);
    z(H, b);
  }
  function rd(a) {
    y(H);
    y(nd);
    y(od);
  }
  function sd(a) {
    var b = pd(od.current),
      c = pd(H.current);
    b = Ba(c, a.type, b);
    c !== b && (z(nd, a), z(H, b));
  }
  function td(a) {
    nd.current === a && (y(H), y(nd));
  }
  var I = {
    current: 0
  };
  function ud(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || qb(c) || rb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.effectTag & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  function vd(a, b) {
    return {
      responder: a,
      props: b
    };
  }
  var wd = q.ReactCurrentDispatcher,
    J = q.ReactCurrentBatchConfig,
    xd = 0,
    yd = null,
    L = null,
    zd = null,
    Ad = null,
    M = null,
    Bd = null,
    Cd = 0,
    Dd = null,
    Ed = 0,
    Fd = !1,
    Gd = null,
    Hd = 0;
  function P() {
    throw Error(n(321));
  }
  function Id(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++) if (!oc(a[c], b[c])) return !1;
    return !0;
  }
  function Jd(a, b, c, d, e, f) {
    xd = f;
    yd = b;
    zd = null !== a ? a.memoizedState : null;
    wd.current = null === zd ? Kd : Ld;
    b = c(d, e);
    if (Fd) {
      do Fd = !1, Hd += 1, zd = null !== a ? a.memoizedState : null, Bd = Ad, Dd = M = L = null, wd.current = Ld, b = c(d, e); while (Fd);
      Gd = null;
      Hd = 0;
    }
    wd.current = Md;
    a = yd;
    a.memoizedState = Ad;
    a.expirationTime = Cd;
    a.updateQueue = Dd;
    a.effectTag |= Ed;
    a = null !== L && null !== L.next;
    xd = 0;
    Bd = M = Ad = zd = L = yd = null;
    Cd = 0;
    Dd = null;
    Ed = 0;
    if (a) throw Error(n(300));
    return b;
  }
  function Nd() {
    wd.current = Md;
    xd = 0;
    Bd = M = Ad = zd = L = yd = null;
    Cd = 0;
    Dd = null;
    Ed = 0;
    Fd = !1;
    Gd = null;
    Hd = 0;
  }
  function Od() {
    var a = {
      memoizedState: null,
      baseState: null,
      queue: null,
      baseUpdate: null,
      next: null
    };
    null === M ? Ad = M = a : M = M.next = a;
    return M;
  }
  function Pd() {
    if (null !== Bd) M = Bd, Bd = M.next, L = zd, zd = null !== L ? L.next : null;else {
      if (null === zd) throw Error(n(310));
      L = zd;
      var a = {
        memoizedState: L.memoizedState,
        baseState: L.baseState,
        queue: L.queue,
        baseUpdate: L.baseUpdate,
        next: null
      };
      M = null === M ? Ad = a : M.next = a;
      zd = L.next;
    }
    return M;
  }
  function Qd(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Rd(a) {
    var b = Pd(),
      c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    if (0 < Hd) {
      var d = c.dispatch;
      if (null !== Gd) {
        var e = Gd.get(c);
        if (void 0 !== e) {
          Gd.delete(c);
          var f = b.memoizedState;
          do f = a(f, e.action), e = e.next; while (null !== e);
          oc(f, b.memoizedState) || (Bc = !0);
          b.memoizedState = f;
          b.baseUpdate === c.last && (b.baseState = f);
          c.lastRenderedState = f;
          return [f, d];
        }
      }
      return [b.memoizedState, d];
    }
    d = c.last;
    var g = b.baseUpdate;
    f = b.baseState;
    null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;
    if (null !== d) {
      var l = e = null,
        h = d,
        k = !1;
      do {
        var p = h.expirationTime;
        p < xd ? (k || (k = !0, l = g, e = f), p > Cd && (Cd = p, Pc(Cd))) : (Oc(p, h.suspenseConfig), f = h.eagerReducer === a ? h.eagerState : a(f, h.action));
        g = h;
        h = h.next;
      } while (null !== h && h !== d);
      k || (l = g, e = f);
      oc(f, b.memoizedState) || (Bc = !0);
      b.memoizedState = f;
      b.baseUpdate = l;
      b.baseState = e;
      c.lastRenderedState = f;
    }
    return [b.memoizedState, c.dispatch];
  }
  function Sd(a) {
    var b = Od();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: Qd,
      lastRenderedState: a
    };
    a = a.dispatch = Td.bind(null, yd, a);
    return [b.memoizedState, a];
  }
  function Ud(a) {
    return Rd(Qd);
  }
  function Vd(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    null === Dd ? (Dd = {
      lastEffect: null
    }, Dd.lastEffect = a.next = a) : (b = Dd.lastEffect, null === b ? Dd.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, Dd.lastEffect = a));
    return a;
  }
  function Wd(a, b, c, d) {
    var e = Od();
    Ed |= a;
    e.memoizedState = Vd(b, c, void 0, void 0 === d ? null : d);
  }
  function Xd(a, b, c, d) {
    var e = Pd();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== L) {
      var g = L.memoizedState;
      f = g.destroy;
      if (null !== d && Id(d, g.deps)) {
        Vd(0, c, f, d);
        return;
      }
    }
    Ed |= a;
    e.memoizedState = Vd(b, c, f, d);
  }
  function Yd(a, b) {
    return Wd(516, 192, a, b);
  }
  function Zd(a, b) {
    return Xd(516, 192, a, b);
  }
  function $d(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }
  function ae() {}
  function be(a, b) {
    Od().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }
  function ce(a, b) {
    var c = Pd();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Id(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function Td(a, b, c) {
    if (!(25 > Hd)) throw Error(n(301));
    var d = a.alternate;
    if (a === yd || null !== d && d === yd) {
      if (Fd = !0, a = {
        expirationTime: xd,
        suspenseConfig: null,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, null === Gd && (Gd = new Map()), c = Gd.get(b), void 0 === c) Gd.set(b, a);else {
        for (b = c; null !== b.next;) b = b.next;
        b.next = a;
      }
    } else {
      var e = G(),
        f = Sc.suspense;
      e = Vc(e, a, f);
      f = {
        expirationTime: e,
        suspenseConfig: f,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      var g = b.last;
      if (null === g) f.next = f;else {
        var l = g.next;
        null !== l && (f.next = l);
        g.next = f;
      }
      b.last = f;
      if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
        var h = b.lastRenderedState,
          k = d(h, c);
        f.eagerReducer = d;
        f.eagerState = k;
        if (oc(k, h)) return;
      } catch (p) {} finally {}
      Wc(a, e);
    }
  }
  var Md = {
      readContext: Cc,
      useCallback: P,
      useContext: P,
      useEffect: P,
      useImperativeHandle: P,
      useLayoutEffect: P,
      useMemo: P,
      useReducer: P,
      useRef: P,
      useState: P,
      useDebugValue: P,
      useResponder: P,
      useDeferredValue: P,
      useTransition: P
    },
    Kd = {
      readContext: Cc,
      useCallback: be,
      useContext: Cc,
      useEffect: Yd,
      useImperativeHandle: function useImperativeHandle(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Wd(4, 36, $d.bind(null, b, a), c);
      },
      useLayoutEffect: function useLayoutEffect(a, b) {
        return Wd(4, 36, a, b);
      },
      useMemo: function useMemo(a, b) {
        var c = Od();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function useReducer(a, b, c) {
        var d = Od();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b
        };
        a = a.dispatch = Td.bind(null, yd, a);
        return [d.memoizedState, a];
      },
      useRef: function useRef(a) {
        var b = Od();
        a = {
          current: a
        };
        return b.memoizedState = a;
      },
      useState: Sd,
      useDebugValue: ae,
      useResponder: vd,
      useDeferredValue: function useDeferredValue(a, b) {
        var c = Sd(a),
          d = c[0],
          e = c[1];
        Yd(function () {
          m.unstable_next(function () {
            var c = J.suspense;
            J.suspense = void 0 === b ? null : b;
            try {
              e(a);
            } finally {
              J.suspense = c;
            }
          });
        }, [a, b]);
        return d;
      },
      useTransition: function useTransition(a) {
        var b = Sd(!1),
          c = b[0],
          d = b[1];
        return [be(function (b) {
          d(!0);
          m.unstable_next(function () {
            var c = J.suspense;
            J.suspense = void 0 === a ? null : a;
            try {
              d(!1), b();
            } finally {
              J.suspense = c;
            }
          });
        }, [a, c]), c];
      }
    },
    Ld = {
      readContext: Cc,
      useCallback: ce,
      useContext: Cc,
      useEffect: Zd,
      useImperativeHandle: function useImperativeHandle(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Xd(4, 36, $d.bind(null, b, a), c);
      },
      useLayoutEffect: function useLayoutEffect(a, b) {
        return Xd(4, 36, a, b);
      },
      useMemo: function useMemo(a, b) {
        var c = Pd();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Id(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: Rd,
      useRef: function useRef() {
        return Pd().memoizedState;
      },
      useState: Ud,
      useDebugValue: ae,
      useResponder: vd,
      useDeferredValue: function useDeferredValue(a, b) {
        var c = Ud(),
          d = c[0],
          e = c[1];
        Zd(function () {
          m.unstable_next(function () {
            var c = J.suspense;
            J.suspense = void 0 === b ? null : b;
            try {
              e(a);
            } finally {
              J.suspense = c;
            }
          });
        }, [a, b]);
        return d;
      },
      useTransition: function useTransition(a) {
        var b = Ud(),
          c = b[0],
          d = b[1];
        return [ce(function (b) {
          d(!0);
          m.unstable_next(function () {
            var c = J.suspense;
            J.suspense = void 0 === a ? null : a;
            try {
              d(!1), b();
            } finally {
              J.suspense = c;
            }
          });
        }, [a, c]), c];
      }
    },
    de = null,
    ee = null,
    fe = !1;
  function ge(a, b) {
    var c = he(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.effectTag = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }
  function ie(a, b) {
    switch (a.tag) {
      case 5:
        return b = ob(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;
      case 6:
        return b = pb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function je(a) {
    if (fe) {
      var b = ee;
      if (b) {
        var c = b;
        if (!ie(a, b)) {
          b = sb(c);
          if (!b || !ie(a, b)) {
            a.effectTag = a.effectTag & -1025 | 2;
            fe = !1;
            de = a;
            return;
          }
          ge(de, c);
        }
        de = a;
        ee = tb(b);
      } else a.effectTag = a.effectTag & -1025 | 2, fe = !1, de = a;
    }
  }
  function ke(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
    de = a;
  }
  function ne(a) {
    if (!Sa || a !== de) return !1;
    if (!fe) return ke(a), fe = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ja(b, a.memoizedProps)) for (b = ee; b;) ge(a, b), b = sb(b);
    ke(a);
    if (13 === a.tag) {
      if (!Sa) throw Error(n(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n(317));
      ee = wb(a);
    } else ee = de ? sb(a.stateNode) : null;
    return !0;
  }
  function oe() {
    Sa && (ee = de = null, fe = !1);
  }
  var pe = q.ReactCurrentOwner,
    Bc = !1;
  function Q(a, b, c, d) {
    b.child = null === a ? ld(b, null, c, d) : kd(b, a.child, c, d);
  }
  function qe(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Ac(b, e);
    d = Jd(a, b, c, d, f, e);
    if (null !== a && !Bc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), re(a, b, e);
    b.effectTag |= 1;
    Q(a, b, d, e);
    return b.child;
  }
  function se(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ue(a, b, g, d, e, f);
      a = hd(c.type, null, d, null, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    g = a.child;
    if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : qc, c(e, d) && a.ref === b.ref)) return re(a, b, f);
    b.effectTag |= 1;
    a = fd(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function ue(a, b, c, d, e, f) {
    return null !== a && qc(a.memoizedProps, d) && a.ref === b.ref && (Bc = !1, e < f) ? re(a, b, f) : ve(a, b, c, d, f);
  }
  function we(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
  }
  function ve(a, b, c, d, e) {
    var f = C(c) ? Eb : A.current;
    f = Fb(b, f);
    Ac(b, e);
    c = Jd(a, b, c, d, f, e);
    if (null !== a && !Bc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), re(a, b, e);
    b.effectTag |= 1;
    Q(a, b, c, e);
    return b.child;
  }
  function xe(a, b, c, d, e) {
    if (C(c)) {
      var f = !0;
      Kb(b);
    } else f = !1;
    Ac(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Zc(b, c, d), ad(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
        l = b.memoizedProps;
      g.props = l;
      var h = g.context,
        k = c.contextType;
      "object" === typeof k && null !== k ? k = Cc(k) : (k = C(c) ? Eb : A.current, k = Fb(b, k));
      var p = c.getDerivedStateFromProps,
        D = "function" === typeof p || "function" === typeof g.getSnapshotBeforeUpdate;
      D || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (l !== d || h !== k) && $c(b, g, d, k);
      Dc = !1;
      var x = b.memoizedState;
      h = g.state = x;
      var K = b.updateQueue;
      null !== K && (Nc(b, K, d, g, e), h = b.memoizedState);
      l !== d || x !== h || B.current || Dc ? ("function" === typeof p && (Uc(b, c, p, d), h = b.memoizedState), (l = Dc || Yc(b, c, l, d, x, h, k)) ? (D || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = h), g.props = d, g.state = h, g.context = k, d = l) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
    } else g = b.stateNode, l = b.memoizedProps, g.props = b.type === b.elementType ? l : rc(b.type, l), h = g.context, k = c.contextType, "object" === typeof k && null !== k ? k = Cc(k) : (k = C(c) ? Eb : A.current, k = Fb(b, k)), p = c.getDerivedStateFromProps, (D = "function" === typeof p || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (l !== d || h !== k) && $c(b, g, d, k), Dc = !1, h = b.memoizedState, x = g.state = h, K = b.updateQueue, null !== K && (Nc(b, K, d, g, e), x = b.memoizedState), l !== d || h !== x || B.current || Dc ? ("function" === typeof p && (Uc(b, c, p, d), x = b.memoizedState), (p = Dc || Yc(b, c, l, d, h, x, k)) ? (D || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = p) : ("function" !== typeof g.componentDidUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || l === a.memoizedProps && h === a.memoizedState || (b.effectTag |= 256), d = !1);
    return ye(a, b, c, d, f, e);
  }
  function ye(a, b, c, d, e, f) {
    we(a, b);
    var g = 0 !== (b.effectTag & 64);
    if (!d && !g) return e && Lb(b, c, !1), re(a, b, f);
    d = b.stateNode;
    pe.current = b;
    var l = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.effectTag |= 1;
    null !== a && g ? (b.child = kd(b, a.child, null, f), b.child = kd(b, null, l, f)) : Q(a, b, l, f);
    b.memoizedState = d.state;
    e && Lb(b, c, !0);
    return b.child;
  }
  function ze(a) {
    var b = a.stateNode;
    b.pendingContext ? Ib(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ib(a, b.context, !1);
    qd(a, b.containerInfo);
  }
  var Ae = {
    dehydrated: null,
    retryTime: 0
  };
  function Be(a, b, c) {
    var d = b.mode,
      e = b.pendingProps,
      f = I.current,
      g = !1,
      l;
    (l = 0 !== (b.effectTag & 64)) || (l = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
    l ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
    z(I, f & 1);
    if (null === a) {
      void 0 !== e.fallback && je(b);
      if (g) {
        g = e.fallback;
        e = jd(null, d, 0, null);
        e.return = b;
        if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
        c = jd(g, d, c, null);
        c.return = b;
        e.sibling = c;
        b.memoizedState = Ae;
        b.child = e;
        return c;
      }
      d = e.children;
      b.memoizedState = null;
      return b.child = ld(b, null, d, c);
    }
    if (null !== a.memoizedState) {
      a = a.child;
      d = a.sibling;
      if (g) {
        e = e.fallback;
        c = fd(a, a.pendingProps);
        c.return = b;
        if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) g.return = c, g = g.sibling;
        d = fd(d, e, d.expirationTime);
        d.return = b;
        c.sibling = d;
        c.childExpirationTime = 0;
        b.memoizedState = Ae;
        b.child = c;
        return d;
      }
      c = kd(b, a.child, e.children, c);
      b.memoizedState = null;
      return b.child = c;
    }
    a = a.child;
    if (g) {
      g = e.fallback;
      e = jd(null, d, 0, null);
      e.return = b;
      e.child = a;
      null !== a && (a.return = e);
      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
      c = jd(g, d, c, null);
      c.return = b;
      e.sibling = c;
      c.effectTag |= 2;
      e.childExpirationTime = 0;
      b.memoizedState = Ae;
      b.child = e;
      return c;
    }
    b.memoizedState = null;
    return b.child = kd(b, a, e.children, c);
  }
  function Ce(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    zc(a.return, b);
  }
  function De(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      last: d,
      tail: c,
      tailExpiration: 0,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
  }
  function Ee(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    Q(a, b, d.children, c);
    d = I.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
      if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && Ce(a, c);else if (19 === a.tag) Ce(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    z(I, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c;) a = c.alternate, null !== a && null === ud(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        De(b, !1, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e;) {
          a = e.alternate;
          if (null !== a && null === ud(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        De(b, !0, c, null, f, b.lastEffect);
        break;
      case "together":
        De(b, !1, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function re(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    var d = b.expirationTime;
    0 !== d && Pc(d);
    if (b.childExpirationTime < c) return null;
    if (null !== a && b.child !== a.child) throw Error(n(153));
    if (null !== b.child) {
      a = b.child;
      c = fd(a, a.pendingProps, a.expirationTime);
      b.child = c;
      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = fd(a, a.pendingProps, a.expirationTime), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function Fe(a) {
    a.effectTag |= 4;
  }
  var _Ge, He, Ie, Je;
  if (Qa) _Ge = function Ge(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Fa(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, He = function He() {}, Ie = function Ie(a, b, c, d, e) {
    a = a.memoizedProps;
    if (a !== d) {
      var f = b.stateNode,
        g = pd(H.current);
      c = Ia(f, c, a, d, e, g);
      (b.updateQueue = c) && Fe(b);
    }
  }, Je = function Je(a, b, c, d) {
    c !== d && Fe(b);
  };else if (Ra) {
    _Ge = function Ge(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = mb(f, e.type, e.memoizedProps, e));
          Fa(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = nb(f, e.memoizedProps, e)), Fa(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;
            if (null !== g && (null !== g.child && (g.child.return = g, _Ge(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }
          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    var Ke = function Ke(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = mb(f, e.type, e.memoizedProps, e));
          ib(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = nb(f, e.memoizedProps, e)), ib(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;
            if (null !== g && (null !== g.child && (g.child.return = g, Ke(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }
          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    He = function He(a) {
      var b = a.stateNode;
      if (null !== a.firstEffect) {
        var c = b.containerInfo,
          d = hb(c);
        Ke(d, a, !1, !1);
        b.pendingChildren = d;
        Fe(a);
        kb(c, d);
      }
    };
    Ie = function Ie(a, b, c, d, e) {
      var f = a.stateNode,
        g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var l = b.stateNode,
          h = pd(H.current),
          k = null;
        g !== d && (k = Ia(l, c, g, d, e, h));
        a && null === k ? b.stateNode = f : (f = gb(f, k, c, g, d, b, a, l), Ga(f, c, d, e, h) && Fe(b), b.stateNode = f, a ? Fe(b) : _Ge(f, b, !1, !1));
      }
    };
    Je = function Je(a, b, c, d) {
      c !== d && (a = pd(od.current), c = pd(H.current), b.stateNode = La(d, a, c, b), Fe(b));
    };
  } else He = function He() {}, Ie = function Ie() {}, Je = function Je() {};
  function Le(a, b) {
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function Me(a) {
    switch (a.tag) {
      case 1:
        C(a.type) && Gb();
        var b = a.effectTag;
        return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
      case 3:
        rd();
        Hb();
        b = a.effectTag;
        if (0 !== (b & 64)) throw Error(n(285));
        a.effectTag = b & -4097 | 64;
        return a;
      case 5:
        return td(a), null;
      case 13:
        return y(I), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
      case 19:
        return y(I), null;
      case 4:
        return rd(), null;
      case 10:
        return yc(a), null;
      default:
        return null;
    }
  }
  function Ne(a, b) {
    return {
      value: a,
      source: b,
      stack: Ab(b)
    };
  }
  var Oe = "function" === typeof WeakSet ? WeakSet : Set;
  function Pe(a, b) {
    var c = b.source,
      d = b.stack;
    null === d && null !== c && (d = Ab(c));
    null !== c && ta(c.type);
    b = b.value;
    null !== a && 1 === a.tag && ta(a.type);
    try {
      console.error(b);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Qe(a, b) {
    try {
      b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
    } catch (c) {
      Re(a, c);
    }
  }
  function Se(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      Re(a, c);
    } else b.current = null;
  }
  function Te(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
        Ue(2, 0, b);
        break;
      case 1:
        if (b.effectTag & 256 && null !== a) {
          var c = a.memoizedProps,
            d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : rc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }
        break;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        break;
      default:
        throw Error(n(163));
    }
  }
  function Ue(a, b, c) {
    c = c.updateQueue;
    c = null !== c ? c.lastEffect : null;
    if (null !== c) {
      var d = c = c.next;
      do {
        if (0 !== (d.tag & a)) {
          var e = d.destroy;
          d.destroy = void 0;
          void 0 !== e && e();
        }
        0 !== (d.tag & b) && (e = d.create, d.destroy = e());
        d = d.next;
      } while (d !== c);
    }
  }
  function Ve(a, b, c) {
    "function" === typeof We && We(b);
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        a = b.updateQueue;
        if (null !== a && (a = a.lastEffect, null !== a)) {
          var d = a.next;
          hc(97 < c ? 97 : c, function () {
            var a = d;
            do {
              var c = a.destroy;
              if (void 0 !== c) {
                var g = b;
                try {
                  c();
                } catch (l) {
                  Re(g, l);
                }
              }
              a = a.next;
            } while (a !== d);
          });
        }
        break;
      case 1:
        Se(b);
        c = b.stateNode;
        "function" === typeof c.componentWillUnmount && Qe(b, c);
        break;
      case 5:
        Se(b);
        break;
      case 4:
        Qa ? Xe(a, b, c) : Ra && Ye(b);
    }
  }
  function Ze(a, b, c) {
    for (var d = b;;) if (Ve(a, d, c), null === d.child || Qa && 4 === d.tag) {
      if (d === b) break;
      for (; null === d.sibling;) {
        if (null === d.return || d.return === b) return;
        d = d.return;
      }
      d.sibling.return = d.return;
      d = d.sibling;
    } else d.child.return = d, d = d.child;
  }
  function $e(a) {
    var b = a.alternate;
    a.return = null;
    a.child = null;
    a.memoizedState = null;
    a.updateQueue = null;
    a.dependencies = null;
    a.alternate = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.pendingProps = null;
    a.memoizedProps = null;
    null !== b && $e(b);
  }
  function Ye(a) {
    if (Ra) {
      a = a.stateNode.containerInfo;
      var b = hb(a);
      lb(a, b);
    }
  }
  function af(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function bf(a) {
    if (Qa) {
      a: {
        for (var b = a.return; null !== b;) {
          if (af(b)) {
            var c = b;
            break a;
          }
          b = b.return;
        }
        throw Error(n(160));
      }
      b = c.stateNode;
      switch (c.tag) {
        case 5:
          var d = !1;
          break;
        case 3:
          b = b.containerInfo;
          d = !0;
          break;
        case 4:
          b = b.containerInfo;
          d = !0;
          break;
        default:
          throw Error(n(161));
      }
      c.effectTag & 16 && (bb(b), c.effectTag &= -17);
      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || af(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.effectTag & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }
        if (!(c.effectTag & 2)) {
          c = c.stateNode;
          break a;
        }
      }
      for (var e = a;;) {
        var f = 5 === e.tag || 6 === e.tag;
        if (f) f = f ? e.stateNode : e.stateNode.instance, c ? d ? Za(b, f, c) : Ya(b, f, c) : d ? Ua(b, f) : Ta(b, f);else if (4 !== e.tag && null !== e.child) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === a) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === a) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    }
  }
  function Xe(a, b, c) {
    for (var d = b, e = !1, f, g;;) {
      if (!e) {
        e = d.return;
        a: for (;;) {
          if (null === e) throw Error(n(160));
          f = e.stateNode;
          switch (e.tag) {
            case 5:
              g = !1;
              break a;
            case 3:
              f = f.containerInfo;
              g = !0;
              break a;
            case 4:
              f = f.containerInfo;
              g = !0;
              break a;
          }
          e = e.return;
        }
        e = !0;
      }
      if (5 === d.tag || 6 === d.tag) Ze(a, d, c), g ? ab(f, d.stateNode) : $a(f, d.stateNode);else if (4 === d.tag) {
        if (null !== d.child) {
          f = d.stateNode.containerInfo;
          g = !0;
          d.child.return = d;
          d = d.child;
          continue;
        }
      } else if (Ve(a, d, c), null !== d.child) {
        d.child.return = d;
        d = d.child;
        continue;
      }
      if (d === b) break;
      for (; null === d.sibling;) {
        if (null === d.return || d.return === b) return;
        d = d.return;
        4 === d.tag && (e = !1);
      }
      d.sibling.return = d.return;
      d = d.sibling;
    }
  }
  function cf(a, b) {
    if (Qa) switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ue(4, 8, b);
        break;
      case 1:
        break;
      case 5:
        var c = b.stateNode;
        if (null != c) {
          var d = b.memoizedProps;
          a = null !== a ? a.memoizedProps : d;
          var e = b.type,
            f = b.updateQueue;
          b.updateQueue = null;
          null !== f && Xa(c, f, e, a, d, b);
        }
        break;
      case 6:
        if (null === b.stateNode) throw Error(n(162));
        c = b.memoizedProps;
        Va(b.stateNode, null !== a ? a.memoizedProps : c, c);
        break;
      case 3:
        Sa && (b = b.stateNode, b.hydrate && (b.hydrate = !1, xb(b.containerInfo)));
        break;
      case 12:
        break;
      case 13:
        df(b);
        ef(b);
        break;
      case 19:
        ef(b);
        break;
      case 17:
        break;
      case 20:
        break;
      case 21:
        break;
      default:
        throw Error(n(163));
    } else {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ue(4, 8, b);
          return;
        case 12:
          return;
        case 13:
          df(b);
          ef(b);
          return;
        case 19:
          ef(b);
          return;
        case 3:
          Sa && (c = b.stateNode, c.hydrate && (c.hydrate = !1, xb(c.containerInfo)));
      }
      a: if (Ra) switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;
        case 3:
        case 4:
          b = b.stateNode;
          lb(b.containerInfo, b.pendingChildren);
          break a;
        default:
          throw Error(n(163));
      }
    }
  }
  function df(a) {
    var b = a;
    if (null === a.memoizedState) var c = !1;else c = !0, b = a.child, ff = E();
    if (Qa && null !== b) a: if (a = b, Qa) for (b = a;;) {
      if (5 === b.tag) {
        var d = b.stateNode;
        c ? cb(d) : eb(b.stateNode, b.memoizedProps);
      } else if (6 === b.tag) d = b.stateNode, c ? db(d) : fb(d, b.memoizedProps);else if (13 === b.tag && null !== b.memoizedState && null === b.memoizedState.dehydrated) {
        d = b.child.sibling;
        d.return = b;
        b = d;
        continue;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break a;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) break a;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  function ef(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Oe());
      b.forEach(function (b) {
        var d = gf.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }
  var hf = "function" === typeof WeakMap ? WeakMap : Map;
  function jf(a, b, c) {
    c = Gc(c, null);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;
    c.callback = function () {
      kf || (kf = !0, lf = d);
      Pe(a, b);
    };
    return c;
  }
  function mf(a, b, c) {
    c = Gc(c, null);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function () {
        Pe(a, b);
        return d(e);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === nf ? nf = new Set([this]) : nf.add(this), Pe(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }
  var of = Math.ceil,
    pf = q.ReactCurrentDispatcher,
    qf = q.ReactCurrentOwner,
    R = 0,
    rf = 8,
    S = 16,
    sf = 32,
    tf = 0,
    uf = 1,
    vf = 2,
    wf = 3,
    xf = 4,
    yf = 5,
    T = R,
    U = null,
    V = null,
    W = 0,
    X = tf,
    zf = null,
    Af = 1073741823,
    Bf = 1073741823,
    Cf = null,
    Df = 0,
    Ef = !1,
    ff = 0,
    Ff = 500,
    Y = null,
    kf = !1,
    lf = null,
    nf = null,
    Gf = !1,
    Hf = null,
    If = 90,
    Jf = null,
    Kf = 0,
    Lf = null,
    Mf = 0;
  function G() {
    return (T & (S | sf)) !== R ? 1073741821 - (E() / 10 | 0) : 0 !== Mf ? Mf : Mf = 1073741821 - (E() / 10 | 0);
  }
  function Vc(a, b, c) {
    b = b.mode;
    if (0 === (b & 2)) return 1073741823;
    var d = fc();
    if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
    if ((T & S) !== R) return W;
    if (null !== c) a = mc(a, c.timeoutMs | 0 || 5E3, 250);else switch (d) {
      case 99:
        a = 1073741823;
        break;
      case 98:
        a = mc(a, 150, 100);
        break;
      case 97:
      case 96:
        a = mc(a, 5E3, 250);
        break;
      case 95:
        a = 2;
        break;
      default:
        throw Error(n(326));
    }
    null !== U && a === W && --a;
    return a;
  }
  function Wc(a, b) {
    if (50 < Kf) throw Kf = 0, Lf = null, Error(n(185));
    a = Nf(a, b);
    if (null !== a) {
      var c = fc();
      1073741823 === b ? (T & rf) !== R && (T & (S | sf)) === R ? Of(a) : (Z(a), T === R && F()) : Z(a);
      (T & 4) === R || 98 !== c && 99 !== c || (null === Jf ? Jf = new Map([[a, b]]) : (c = Jf.get(a), (void 0 === c || c > b) && Jf.set(a, b)));
    }
  }
  function Nf(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    var d = a.return,
      e = null;
    if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
      c = d.alternate;
      d.childExpirationTime < b && (d.childExpirationTime = b);
      null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
      if (null === d.return && 3 === d.tag) {
        e = d.stateNode;
        break;
      }
      d = d.return;
    }
    null !== e && (U === e && (Pc(b), X === xf && Pf(e, W)), Qf(e, b));
    return e;
  }
  function Rf(a) {
    var b = a.lastExpiredTime;
    if (0 !== b) return b;
    b = a.firstPendingTime;
    if (!Sf(a, b)) return b;
    b = a.lastPingedTime;
    a = a.nextKnownPendingLevel;
    return b > a ? b : a;
  }
  function Z(a) {
    if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = jc(Of.bind(null, a));else {
      var b = Rf(a),
        c = a.callbackNode;
      if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
        var d = G();
        1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
        if (null !== c) {
          var e = a.callbackPriority;
          if (a.callbackExpirationTime === b && e >= d) return;
          c !== $b && Ob(c);
        }
        a.callbackExpirationTime = b;
        a.callbackPriority = d;
        b = 1073741823 === b ? jc(Of.bind(null, a)) : ic(d, Tf.bind(null, a), {
          timeout: 10 * (1073741821 - b) - E()
        });
        a.callbackNode = b;
      }
    }
  }
  function Tf(a, b) {
    Mf = 0;
    if (b) return b = G(), Uf(a, b), Z(a), null;
    var c = Rf(a);
    if (0 !== c) {
      b = a.callbackNode;
      if ((T & (S | sf)) !== R) throw Error(n(327));
      Vf();
      a === U && c === W || Wf(a, c);
      if (null !== V) {
        var d = T;
        T |= S;
        var e = Xf();
        do try {
          Yf();
          break;
        } catch (l) {
          Zf(a, l);
        } while (1);
        wc();
        T = d;
        pf.current = e;
        if (X === uf) throw b = zf, Wf(a, c), Pf(a, c), Z(a), b;
        if (null === V) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = X, U = null, d) {
          case tf:
          case uf:
            throw Error(n(345));
          case vf:
            Uf(a, 2 < c ? 2 : c);
            break;
          case wf:
            Pf(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = $f(e));
            if (1073741823 === Af && (e = ff + Ff - E(), 10 < e)) {
              if (Ef) {
                var f = a.lastPingedTime;
                if (0 === f || f >= c) {
                  a.lastPingedTime = c;
                  Wf(a, c);
                  break;
                }
              }
              f = Rf(a);
              if (0 !== f && f !== c) break;
              if (0 !== d && d !== c) {
                a.lastPingedTime = d;
                break;
              }
              a.timeoutHandle = Ma(ag.bind(null, a), e);
              break;
            }
            ag(a);
            break;
          case xf:
            Pf(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = $f(e));
            if (Ef && (e = a.lastPingedTime, 0 === e || e >= c)) {
              a.lastPingedTime = c;
              Wf(a, c);
              break;
            }
            e = Rf(a);
            if (0 !== e && e !== c) break;
            if (0 !== d && d !== c) {
              a.lastPingedTime = d;
              break;
            }
            1073741823 !== Bf ? d = 10 * (1073741821 - Bf) - E() : 1073741823 === Af ? d = 0 : (d = 10 * (1073741821 - Af) - 5E3, e = E(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * of(d / 1960)) - d, c < d && (d = c));
            if (10 < d) {
              a.timeoutHandle = Ma(ag.bind(null, a), d);
              break;
            }
            ag(a);
            break;
          case yf:
            if (1073741823 !== Af && null !== Cf) {
              f = Af;
              var g = Cf;
              d = g.busyMinDurationMs | 0;
              0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = E() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);
              if (10 < d) {
                Pf(a, c);
                a.timeoutHandle = Ma(ag.bind(null, a), d);
                break;
              }
            }
            ag(a);
            break;
          default:
            throw Error(n(329));
        }
        Z(a);
        if (a.callbackNode === b) return Tf.bind(null, a);
      }
    }
    return null;
  }
  function Of(a) {
    var b = a.lastExpiredTime;
    b = 0 !== b ? b : 1073741823;
    if (a.finishedExpirationTime === b) ag(a);else {
      if ((T & (S | sf)) !== R) throw Error(n(327));
      Vf();
      a === U && b === W || Wf(a, b);
      if (null !== V) {
        var c = T;
        T |= S;
        var d = Xf();
        do try {
          bg();
          break;
        } catch (e) {
          Zf(a, e);
        } while (1);
        wc();
        T = c;
        pf.current = d;
        if (X === uf) throw c = zf, Wf(a, b), Pf(a, b), Z(a), c;
        if (null !== V) throw Error(n(261));
        a.finishedWork = a.current.alternate;
        a.finishedExpirationTime = b;
        U = null;
        ag(a);
        Z(a);
      }
    }
    return null;
  }
  function cg(a, b) {
    Uf(a, b);
    Z(a);
    (T & (S | sf)) === R && F();
  }
  function dg() {
    if (null !== Jf) {
      var a = Jf;
      Jf = null;
      a.forEach(function (a, c) {
        Uf(c, a);
        Z(c);
      });
      F();
    }
  }
  function eg(a, b) {
    if ((T & (S | sf)) !== R) throw Error(n(187));
    var c = T;
    T |= 1;
    try {
      return hc(99, a.bind(null, b));
    } finally {
      T = c, F();
    }
  }
  function Wf(a, b) {
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    var c = a.timeoutHandle;
    c !== Oa && (a.timeoutHandle = Oa, Na(c));
    if (null !== V) for (c = V.return; null !== c;) {
      var d = c;
      switch (d.tag) {
        case 1:
          var e = d.type.childContextTypes;
          null !== e && void 0 !== e && Gb();
          break;
        case 3:
          rd();
          Hb();
          break;
        case 5:
          td(d);
          break;
        case 4:
          rd();
          break;
        case 13:
          y(I);
          break;
        case 19:
          y(I);
          break;
        case 10:
          yc(d);
      }
      c = c.return;
    }
    U = a;
    V = fd(a.current, null);
    W = b;
    X = tf;
    zf = null;
    Bf = Af = 1073741823;
    Cf = null;
    Df = 0;
    Ef = !1;
  }
  function Zf(a, b) {
    do {
      try {
        wc();
        Nd();
        if (null === V || null === V.return) return X = uf, zf = b, null;
        a: {
          var c = a,
            d = V.return,
            e = V,
            f = b;
          b = W;
          e.effectTag |= 2048;
          e.firstEffect = e.lastEffect = null;
          if (null !== f && "object" === typeof f && "function" === typeof f.then) {
            var g = f,
              l = 0 !== (I.current & 1),
              h = d;
            do {
              var k;
              if (k = 13 === h.tag) {
                var p = h.memoizedState;
                if (null !== p) k = null !== p.dehydrated ? !0 : !1;else {
                  var D = h.memoizedProps;
                  k = void 0 === D.fallback ? !1 : !0 !== D.unstable_avoidThisFallback ? !0 : l ? !1 : !0;
                }
              }
              if (k) {
                var x = h.updateQueue;
                if (null === x) {
                  var K = new Set();
                  K.add(g);
                  h.updateQueue = K;
                } else x.add(g);
                if (0 === (h.mode & 2)) {
                  h.effectTag |= 64;
                  e.effectTag &= -2981;
                  if (1 === e.tag) if (null === e.alternate) e.tag = 17;else {
                    var Ha = Gc(1073741823, null);
                    Ha.tag = 2;
                    Ic(e, Ha);
                  }
                  e.expirationTime = 1073741823;
                  break a;
                }
                f = void 0;
                e = b;
                var O = c.pingCache;
                null === O ? (O = c.pingCache = new hf(), f = new Set(), O.set(g, f)) : (f = O.get(g), void 0 === f && (f = new Set(), O.set(g, f)));
                if (!f.has(e)) {
                  f.add(e);
                  var w = fg.bind(null, c, g, e);
                  g.then(w, w);
                }
                h.effectTag |= 4096;
                h.expirationTime = b;
                break a;
              }
              h = h.return;
            } while (null !== h);
            f = Error((ta(e.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Ab(e));
          }
          X !== yf && (X = vf);
          f = Ne(f, e);
          h = d;
          do {
            switch (h.tag) {
              case 3:
                g = f;
                h.effectTag |= 4096;
                h.expirationTime = b;
                var r = jf(h, g, b);
                Jc(h, r);
                break a;
              case 1:
                g = f;
                var t = h.type,
                  N = h.stateNode;
                if (0 === (h.effectTag & 64) && ("function" === typeof t.getDerivedStateFromError || null !== N && "function" === typeof N.componentDidCatch && (null === nf || !nf.has(N)))) {
                  h.effectTag |= 4096;
                  h.expirationTime = b;
                  var Mc = mf(h, g, b);
                  Jc(h, Mc);
                  break a;
                }
            }
            h = h.return;
          } while (null !== h);
        }
        V = gg(V);
      } catch (Rb) {
        b = Rb;
        continue;
      }
      break;
    } while (1);
  }
  function Xf() {
    var a = pf.current;
    pf.current = Md;
    return null === a ? Md : a;
  }
  function Oc(a, b) {
    a < Af && 2 < a && (Af = a);
    null !== b && a < Bf && 2 < a && (Bf = a, Cf = b);
  }
  function Pc(a) {
    a > Df && (Df = a);
  }
  function bg() {
    for (; null !== V;) V = hg(V);
  }
  function Yf() {
    for (; null !== V && !Pb();) V = hg(V);
  }
  function hg(a) {
    var b = ig(a.alternate, a, W);
    a.memoizedProps = a.pendingProps;
    null === b && (b = gg(a));
    qf.current = null;
    return b;
  }
  function gg(a) {
    V = a;
    do {
      var b = V.alternate;
      a = V.return;
      if (0 === (V.effectTag & 2048)) {
        a: {
          var c = b;
          b = V;
          var d = W,
            e = b.pendingProps;
          switch (b.tag) {
            case 2:
              break;
            case 16:
              break;
            case 15:
            case 0:
              break;
            case 1:
              C(b.type) && Gb();
              break;
            case 3:
              rd();
              Hb();
              e = b.stateNode;
              e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null);
              (null === c || null === c.child) && ne(b) && Fe(b);
              He(b);
              break;
            case 5:
              td(b);
              var f = pd(od.current);
              d = b.type;
              if (null !== c && null != b.stateNode) Ie(c, b, d, e, f), c.ref !== b.ref && (b.effectTag |= 128);else if (e) {
                c = pd(H.current);
                if (ne(b)) {
                  e = b;
                  if (!Sa) throw Error(n(175));
                  c = ub(e.stateNode, e.type, e.memoizedProps, f, c, e);
                  e.updateQueue = c;
                  c = null !== c ? !0 : !1;
                  c && Fe(b);
                } else {
                  var g = Ea(d, e, f, c, b);
                  _Ge(g, b, !1, !1);
                  b.stateNode = g;
                  Ga(g, d, e, f, c) && Fe(b);
                }
                null !== b.ref && (b.effectTag |= 128);
              } else if (null === b.stateNode) throw Error(n(166));
              break;
            case 6:
              if (c && null != b.stateNode) Je(c, b, c.memoizedProps, e);else {
                if ("string" !== typeof e && null === b.stateNode) throw Error(n(166));
                c = pd(od.current);
                f = pd(H.current);
                if (ne(b)) {
                  c = b;
                  if (!Sa) throw Error(n(176));
                  (c = vb(c.stateNode, c.memoizedProps, c)) && Fe(b);
                } else b.stateNode = La(e, c, f, b);
              }
              break;
            case 11:
              break;
            case 13:
              y(I);
              e = b.memoizedState;
              if (0 !== (b.effectTag & 64)) {
                b.expirationTime = d;
                break a;
              }
              e = null !== e;
              f = !1;
              null === c ? void 0 !== b.memoizedProps.fallback && ne(b) : (d = c.memoizedState, f = null !== d, e || null === d || (d = c.child.sibling, null !== d && (g = b.firstEffect, null !== g ? (b.firstEffect = d, d.nextEffect = g) : (b.firstEffect = b.lastEffect = d, d.nextEffect = null), d.effectTag = 8)));
              if (e && !f && 0 !== (b.mode & 2)) if (null === c && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (I.current & 1)) X === tf && (X = wf);else {
                if (X === tf || X === wf) X = xf;
                0 !== Df && null !== U && (Pf(U, W), Qf(U, Df));
              }
              Ra && e && (b.effectTag |= 4);
              Qa && (e || f) && (b.effectTag |= 4);
              break;
            case 7:
              break;
            case 8:
              break;
            case 12:
              break;
            case 4:
              rd();
              He(b);
              break;
            case 10:
              yc(b);
              break;
            case 9:
              break;
            case 14:
              break;
            case 17:
              C(b.type) && Gb();
              break;
            case 19:
              y(I);
              e = b.memoizedState;
              if (null === e) break;
              f = 0 !== (b.effectTag & 64);
              g = e.rendering;
              if (null === g) {
                if (f) Le(e, !1);else {
                  if (X !== tf || null !== c && 0 !== (c.effectTag & 64)) for (c = b.child; null !== c;) {
                    g = ud(c);
                    if (null !== g) {
                      b.effectTag |= 64;
                      Le(e, !1);
                      c = g.updateQueue;
                      null !== c && (b.updateQueue = c, b.effectTag |= 4);
                      null === e.lastEffect && (b.firstEffect = null);
                      b.lastEffect = e.lastEffect;
                      c = d;
                      for (e = b.child; null !== e;) f = e, d = c, f.effectTag &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childExpirationTime = 0, f.expirationTime = d, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null) : (f.childExpirationTime = g.childExpirationTime, f.expirationTime = g.expirationTime, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, d = g.dependencies, f.dependencies = null === d ? null : {
                        expirationTime: d.expirationTime,
                        firstContext: d.firstContext,
                        responders: d.responders
                      }), e = e.sibling;
                      z(I, I.current & 1 | 2);
                      b = b.child;
                      break a;
                    }
                    c = c.sibling;
                  }
                }
              } else {
                if (!f) if (c = ud(g), null !== c) {
                  if (b.effectTag |= 64, f = !0, c = c.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), Le(e, !0), null === e.tail && "hidden" === e.tailMode) {
                    b = b.lastEffect = e.lastEffect;
                    null !== b && (b.nextEffect = null);
                    break;
                  }
                } else E() > e.tailExpiration && 1 < d && (b.effectTag |= 64, f = !0, Le(e, !1), b.expirationTime = b.childExpirationTime = d - 1);
                e.isBackwards ? (g.sibling = b.child, b.child = g) : (c = e.last, null !== c ? c.sibling = g : b.child = g, e.last = g);
              }
              if (null !== e.tail) {
                0 === e.tailExpiration && (e.tailExpiration = E() + 500);
                c = e.tail;
                e.rendering = c;
                e.tail = c.sibling;
                e.lastEffect = b.lastEffect;
                c.sibling = null;
                e = I.current;
                e = f ? e & 1 | 2 : e & 1;
                z(I, e);
                b = c;
                break a;
              }
              break;
            case 20:
              break;
            case 21:
              break;
            default:
              throw Error(n(156, b.tag));
          }
          b = null;
        }
        c = V;
        if (1 === W || 1 !== c.childExpirationTime) {
          e = 0;
          for (f = c.child; null !== f;) d = f.expirationTime, g = f.childExpirationTime, d > e && (e = d), g > e && (e = g), f = f.sibling;
          c.childExpirationTime = e;
        }
        if (null !== b) return b;
        null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = V.firstEffect), a.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = V : a.firstEffect = V, a.lastEffect = V));
      } else {
        b = Me(V);
        if (null !== b) return b.effectTag &= 2047, b;
        null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
      }
      b = V.sibling;
      if (null !== b) return b;
      V = a;
    } while (null !== V);
    X === tf && (X = yf);
    return null;
  }
  function $f(a) {
    var b = a.expirationTime;
    a = a.childExpirationTime;
    return b > a ? b : a;
  }
  function ag(a) {
    var b = fc();
    hc(99, jg.bind(null, a, b));
    return null;
  }
  function jg(a, b) {
    Vf();
    if ((T & (S | sf)) !== R) throw Error(n(327));
    var c = a.finishedWork,
      d = a.finishedExpirationTime;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    if (c === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackExpirationTime = 0;
    a.callbackPriority = 90;
    a.nextKnownPendingLevel = 0;
    var e = $f(c);
    a.firstPendingTime = e;
    d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
    d <= a.lastPingedTime && (a.lastPingedTime = 0);
    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    a === U && (V = U = null, W = 0);
    1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
    if (null !== e) {
      var f = T;
      T |= sf;
      qf.current = null;
      Ca(a.containerInfo);
      Y = e;
      do try {
        kg();
      } catch (jb) {
        if (null === Y) throw Error(n(330));
        Re(Y, jb);
        Y = Y.nextEffect;
      } while (null !== Y);
      Y = e;
      do try {
        for (var g = a, l = b; null !== Y;) {
          var h = Y.effectTag;
          h & 16 && Qa && bb(Y.stateNode);
          if (h & 128) {
            var k = Y.alternate;
            if (null !== k) {
              var p = k.ref;
              null !== p && ("function" === typeof p ? p(null) : p.current = null);
            }
          }
          switch (h & 1038) {
            case 2:
              bf(Y);
              Y.effectTag &= -3;
              break;
            case 6:
              bf(Y);
              Y.effectTag &= -3;
              cf(Y.alternate, Y);
              break;
            case 1024:
              Y.effectTag &= -1025;
              break;
            case 1028:
              Y.effectTag &= -1025;
              cf(Y.alternate, Y);
              break;
            case 4:
              cf(Y.alternate, Y);
              break;
            case 8:
              var D = g,
                x = Y,
                K = l;
              Qa ? Xe(D, x, K) : Ze(D, x, K);
              $e(x);
          }
          Y = Y.nextEffect;
        }
      } catch (jb) {
        if (null === Y) throw Error(n(330));
        Re(Y, jb);
        Y = Y.nextEffect;
      } while (null !== Y);
      Da(a.containerInfo);
      a.current = c;
      Y = e;
      do try {
        for (h = d; null !== Y;) {
          var Ha = Y.effectTag;
          if (Ha & 36) {
            var O = Y.alternate;
            k = Y;
            p = h;
            switch (k.tag) {
              case 0:
              case 11:
              case 15:
                Ue(16, 32, k);
                break;
              case 1:
                var w = k.stateNode;
                if (k.effectTag & 4) if (null === O) w.componentDidMount();else {
                  var r = k.elementType === k.type ? O.memoizedProps : rc(k.type, O.memoizedProps);
                  w.componentDidUpdate(r, O.memoizedState, w.__reactInternalSnapshotBeforeUpdate);
                }
                var t = k.updateQueue;
                null !== t && Qc(k, t, w, p);
                break;
              case 3:
                var N = k.updateQueue;
                if (null !== N) {
                  g = null;
                  if (null !== k.child) switch (k.child.tag) {
                    case 5:
                      g = za(k.child.stateNode);
                      break;
                    case 1:
                      g = k.child.stateNode;
                  }
                  Qc(k, N, g, p);
                }
                break;
              case 5:
                var Mc = k.stateNode;
                null === O && k.effectTag & 4 && Wa(Mc, k.type, k.memoizedProps, k);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (Sa && null === k.memoizedState) {
                  var Rb = k.alternate;
                  if (null !== Rb) {
                    var le = Rb.memoizedState;
                    if (null !== le) {
                      var me = le.dehydrated;
                      null !== me && yb(me);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 20:
              case 21:
                break;
              default:
                throw Error(n(163));
            }
          }
          if (Ha & 128) {
            k = void 0;
            var Sb = Y.ref;
            if (null !== Sb) {
              var v = Y.stateNode;
              switch (Y.tag) {
                case 5:
                  k = za(v);
                  break;
                default:
                  k = v;
              }
              "function" === typeof Sb ? Sb(k) : Sb.current = k;
            }
          }
          Y = Y.nextEffect;
        }
      } catch (jb) {
        if (null === Y) throw Error(n(330));
        Re(Y, jb);
        Y = Y.nextEffect;
      } while (null !== Y);
      Y = null;
      ac();
      T = f;
    } else a.current = c;
    if (Gf) Gf = !1, Hf = a, If = b;else for (Y = e; null !== Y;) b = Y.nextEffect, Y.nextEffect = null, Y = b;
    b = a.firstPendingTime;
    0 === b && (nf = null);
    1073741823 === b ? a === Lf ? Kf++ : (Kf = 0, Lf = a) : Kf = 0;
    "function" === typeof lg && lg(c.stateNode, d);
    Z(a);
    if (kf) throw kf = !1, a = lf, lf = null, a;
    if ((T & rf) !== R) return null;
    F();
    return null;
  }
  function kg() {
    for (; null !== Y;) {
      var a = Y.effectTag;
      0 !== (a & 256) && Te(Y.alternate, Y);
      0 === (a & 512) || Gf || (Gf = !0, ic(97, function () {
        Vf();
        return null;
      }));
      Y = Y.nextEffect;
    }
  }
  function Vf() {
    if (90 !== If) {
      var a = 97 < If ? 97 : If;
      If = 90;
      return hc(a, mg);
    }
  }
  function mg() {
    if (null === Hf) return !1;
    var a = Hf;
    Hf = null;
    if ((T & (S | sf)) !== R) throw Error(n(331));
    var b = T;
    T |= sf;
    for (a = a.current.firstEffect; null !== a;) {
      try {
        var c = a;
        if (0 !== (c.effectTag & 512)) switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Ue(128, 0, c), Ue(0, 64, c);
        }
      } catch (d) {
        if (null === a) throw Error(n(330));
        Re(a, d);
      }
      c = a.nextEffect;
      a.nextEffect = null;
      a = c;
    }
    T = b;
    F();
    return !0;
  }
  function ng(a, b, c) {
    b = Ne(c, b);
    b = jf(a, b, 1073741823);
    Ic(a, b);
    a = Nf(a, 1073741823);
    null !== a && Z(a);
  }
  function Re(a, b) {
    if (3 === a.tag) ng(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        ng(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;
        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === nf || !nf.has(d))) {
          a = Ne(b, a);
          a = mf(c, a, 1073741823);
          Ic(c, a);
          c = Nf(c, 1073741823);
          null !== c && Z(c);
          break;
        }
      }
      c = c.return;
    }
  }
  function fg(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    U === a && W === c ? X === xf || X === wf && 1073741823 === Af && E() - ff < Ff ? Wf(a, W) : Ef = !0 : Sf(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, a.finishedExpirationTime === c && (a.finishedExpirationTime = 0, a.finishedWork = null), Z(a)));
  }
  function gf(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = G(), b = Vc(b, a, null));
    a = Nf(a, b);
    null !== a && Z(a);
  }
  var ig;
  ig = function ig(a, b, c) {
    var d = b.expirationTime;
    if (null !== a) {
      var e = b.pendingProps;
      if (a.memoizedProps !== e || B.current) Bc = !0;else {
        if (d < c) {
          Bc = !1;
          switch (b.tag) {
            case 3:
              ze(b);
              oe();
              break;
            case 5:
              sd(b);
              if (b.mode & 4 && 1 !== c && Ka(b.type, e)) return b.expirationTime = b.childExpirationTime = 1, null;
              break;
            case 1:
              C(b.type) && Kb(b);
              break;
            case 4:
              qd(b, b.stateNode.containerInfo);
              break;
            case 10:
              xc(b, b.memoizedProps.value);
              break;
            case 13:
              if (null !== b.memoizedState) {
                d = b.child.childExpirationTime;
                if (0 !== d && d >= c) return Be(a, b, c);
                z(I, I.current & 1);
                b = re(a, b, c);
                return null !== b ? b.sibling : null;
              }
              z(I, I.current & 1);
              break;
            case 19:
              d = b.childExpirationTime >= c;
              if (0 !== (a.effectTag & 64)) {
                if (d) return Ee(a, b, c);
                b.effectTag |= 64;
              }
              e = b.memoizedState;
              null !== e && (e.rendering = null, e.tail = null);
              z(I, I.current);
              if (!d) return null;
          }
          return re(a, b, c);
        }
        Bc = !1;
      }
    } else Bc = !1;
    b.expirationTime = 0;
    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        e = Fb(b, A.current);
        Ac(b, c);
        e = Jd(null, b, d, a, e, c);
        b.effectTag |= 1;
        if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          Nd();
          if (C(d)) {
            var f = !0;
            Kb(b);
          } else f = !1;
          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && Uc(b, d, g, a);
          e.updater = Xc;
          b.stateNode = e;
          e._reactInternalFiber = b;
          ad(b, d, a, c);
          b = ye(null, b, d, !0, f, c);
        } else b.tag = 0, Q(null, b, e, c), b = b.child;
        return b;
      case 16:
        e = b.elementType;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        sa(e);
        if (1 !== e._status) throw e._result;
        e = e._result;
        b.type = e;
        f = b.tag = og(e);
        a = rc(e, a);
        switch (f) {
          case 0:
            b = ve(null, b, e, a, c);
            break;
          case 1:
            b = xe(null, b, e, a, c);
            break;
          case 11:
            b = qe(null, b, e, a, c);
            break;
          case 14:
            b = se(null, b, e, rc(e.type, a), d, c);
            break;
          default:
            throw Error(n(306, e, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), ve(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), xe(a, b, d, e, c);
      case 3:
        ze(b);
        d = b.updateQueue;
        if (null === d) throw Error(n(282));
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        Nc(b, d, b.pendingProps, null, c);
        d = b.memoizedState.element;
        if (d === e) oe(), b = re(a, b, c);else {
          if (e = b.stateNode.hydrate) Sa ? (ee = tb(b.stateNode.containerInfo), de = b, e = fe = !0) : e = !1;
          if (e) for (c = ld(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;else Q(a, b, d, c), oe();
          b = b.child;
        }
        return b;
      case 5:
        return sd(b), null === a && je(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ja(d, e) ? g = null : null !== f && Ja(d, f) && (b.effectTag |= 16), we(a, b), b.mode & 4 && 1 !== c && Ka(d, e) ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (Q(a, b, g, c), b = b.child), b;
      case 6:
        return null === a && je(b), null;
      case 13:
        return Be(a, b, c);
      case 4:
        return qd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = kd(b, null, d, c) : Q(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), qe(a, b, d, e, c);
      case 7:
        return Q(a, b, b.pendingProps, c), b.child;
      case 8:
        return Q(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Q(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          xc(b, f);
          if (null !== g) {
            var l = g.value;
            f = oc(l, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(l, f) : 1073741823) | 0;
            if (0 === f) {
              if (g.children === e.children && !B.current) {
                b = re(a, b, c);
                break a;
              }
            } else for (l = b.child, null !== l && (l.return = b); null !== l;) {
              var h = l.dependencies;
              if (null !== h) {
                g = l.child;
                for (var k = h.firstContext; null !== k;) {
                  if (k.context === d && 0 !== (k.observedBits & f)) {
                    1 === l.tag && (k = Gc(c, null), k.tag = 2, Ic(l, k));
                    l.expirationTime < c && (l.expirationTime = c);
                    k = l.alternate;
                    null !== k && k.expirationTime < c && (k.expirationTime = c);
                    zc(l.return, c);
                    h.expirationTime < c && (h.expirationTime = c);
                    break;
                  }
                  k = k.next;
                }
              } else g = 10 === l.tag ? l.type === b.type ? null : l.child : l.child;
              if (null !== g) g.return = l;else for (g = l; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }
                l = g.sibling;
                if (null !== l) {
                  l.return = g.return;
                  g = l;
                  break;
                }
                g = g.return;
              }
              l = g;
            }
          }
          Q(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, Ac(b, c), e = Cc(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, Q(a, b, d, c), b.child;
      case 14:
        return e = b.type, f = rc(e, b.pendingProps), f = rc(e.type, f), se(a, b, e, f, d, c);
      case 15:
        return ue(a, b, b.type, b.pendingProps, d, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : rc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, C(d) ? (a = !0, Kb(b)) : a = !1, Ac(b, c), Zc(b, d, e), ad(b, d, e, c), ye(null, b, d, !0, a, c);
      case 19:
        return Ee(a, b, c);
    }
    throw Error(n(156, b.tag));
  };
  var lg = null,
    We = null;
  function pg(a) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (b.isDisabled || !b.supportsFiber) return !0;
    try {
      var c = b.inject(a);
      lg = function lg(a) {
        try {
          b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
        } catch (e) {}
      };
      We = function We(a) {
        try {
          b.onCommitFiberUnmount(c, a);
        } catch (e) {}
      };
    } catch (d) {}
    return !0;
  }
  function qg(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
  }
  function he(a, b, c, d) {
    return new qg(a, b, c, d);
  }
  function te(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function og(a) {
    if ("function" === typeof a) return te(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }
    return 2;
  }
  function fd(a, b) {
    var c = a.alternate;
    null === c ? (c = he(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childExpirationTime = a.childExpirationTime;
    c.expirationTime = a.expirationTime;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      expirationTime: b.expirationTime,
      firstContext: b.firstContext,
      responders: b.responders
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function hd(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ea:
        return jd(c.children, e, f, b);
      case ka:
        g = 8;
        e |= 7;
        break;
      case fa:
        g = 8;
        e |= 1;
        break;
      case ha:
        return a = he(12, c, b, e | 8), a.elementType = ha, a.type = ha, a.expirationTime = f, a;
      case ma:
        return a = he(13, c, b, e), a.type = ma, a.elementType = ma, a.expirationTime = f, a;
      case na:
        return a = he(19, c, b, e), a.elementType = na, a.expirationTime = f, a;
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ia:
            g = 10;
            break a;
          case ja:
            g = 9;
            break a;
          case la:
            g = 11;
            break a;
          case oa:
            g = 14;
            break a;
          case pa:
            g = 16;
            d = null;
            break a;
        }
        throw Error(n(130, null == a ? a : typeof a, ""));
    }
    b = he(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.expirationTime = f;
    return b;
  }
  function jd(a, b, c, d) {
    a = he(7, a, d, b);
    a.expirationTime = c;
    return a;
  }
  function gd(a, b, c) {
    a = he(6, a, null, b);
    a.expirationTime = c;
    return a;
  }
  function id(a, b, c) {
    b = he(4, null !== a.children ? a.children : [], a.key, b);
    b.expirationTime = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }
  function rg(a, b, c) {
    this.tag = b;
    this.current = null;
    this.containerInfo = a;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = Oa;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 90;
    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }
  function Sf(a, b) {
    var c = a.firstSuspendedTime;
    a = a.lastSuspendedTime;
    return 0 !== c && c >= b && a <= b;
  }
  function Pf(a, b) {
    var c = a.firstSuspendedTime,
      d = a.lastSuspendedTime;
    c < b && (a.firstSuspendedTime = b);
    if (d > b || 0 === c) a.lastSuspendedTime = b;
    b <= a.lastPingedTime && (a.lastPingedTime = 0);
    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  }
  function Qf(a, b) {
    b > a.firstPendingTime && (a.firstPendingTime = b);
    var c = a.firstSuspendedTime;
    0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
  }
  function Uf(a, b) {
    var c = a.lastExpiredTime;
    if (0 === c || c > b) a.lastExpiredTime = b;
  }
  function sg(a) {
    var b = a._reactInternalFiber;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n(188));
      throw Error(n(268, Object.keys(a)));
    }
    a = xa(b);
    return null === a ? null : a.stateNode;
  }
  function tg(a, b) {
    a = a.memoizedState;
    null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
  }
  function ug(a, b) {
    tg(a, b);
    (a = a.alternate) && tg(a, b);
  }
  var vg = {
    createContainer: function createContainer(a, b, c) {
      a = new rg(a, b, c);
      b = he(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
      a.current = b;
      return b.stateNode = a;
    },
    updateContainer: function updateContainer(a, b, c, d) {
      var e = b.current,
        f = G(),
        g = Sc.suspense;
      f = Vc(f, e, g);
      a: if (c) {
        c = c._reactInternalFiber;
        b: {
          if (ua(c) !== c || 1 !== c.tag) throw Error(n(170));
          var l = c;
          do {
            switch (l.tag) {
              case 3:
                l = l.stateNode.context;
                break b;
              case 1:
                if (C(l.type)) {
                  l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }
            }
            l = l.return;
          } while (null !== l);
          throw Error(n(171));
        }
        if (1 === c.tag) {
          var h = c.type;
          if (C(h)) {
            c = Jb(c, h, l);
            break a;
          }
        }
        c = l;
      } else c = Db;
      null === b.context ? b.context = c : b.pendingContext = c;
      b = Gc(f, g);
      b.payload = {
        element: a
      };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      Ic(e, b);
      Wc(e, f);
      return f;
    },
    batchedEventUpdates: function batchedEventUpdates(a, b) {
      var c = T;
      T |= 2;
      try {
        return a(b);
      } finally {
        T = c, T === R && F();
      }
    },
    batchedUpdates: function batchedUpdates(a, b) {
      var c = T;
      T |= 1;
      try {
        return a(b);
      } finally {
        T = c, T === R && F();
      }
    },
    unbatchedUpdates: function unbatchedUpdates(a, b) {
      var c = T;
      T &= -2;
      T |= rf;
      try {
        return a(b);
      } finally {
        T = c, T === R && F();
      }
    },
    deferredUpdates: function deferredUpdates(a) {
      return hc(97, a);
    },
    syncUpdates: function syncUpdates(a, b, c, d) {
      return hc(99, a.bind(null, b, c, d));
    },
    discreteUpdates: function discreteUpdates(a, b, c, d) {
      var e = T;
      T |= 4;
      try {
        return hc(98, a.bind(null, b, c, d));
      } finally {
        T = e, T === R && F();
      }
    },
    flushDiscreteUpdates: function flushDiscreteUpdates() {
      (T & (1 | S | sf)) === R && (dg(), Vf());
    },
    flushControlled: function flushControlled(a) {
      var b = T;
      T |= 1;
      try {
        hc(99, a);
      } finally {
        T = b, T === R && F();
      }
    },
    flushSync: eg,
    flushPassiveEffects: Vf,
    IsThisRendererActing: {
      current: !1
    },
    getPublicRootInstance: function getPublicRootInstance(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return za(a.child.stateNode);
        default:
          return a.child.stateNode;
      }
    },
    attemptSynchronousHydration: function attemptSynchronousHydration(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          b.hydrate && cg(b, b.firstPendingTime);
          break;
        case 13:
          eg(function () {
            return Wc(a, 1073741823);
          }), b = mc(G(), 150, 100), ug(a, b);
      }
    },
    attemptUserBlockingHydration: function attemptUserBlockingHydration(a) {
      if (13 === a.tag) {
        var b = mc(G(), 150, 100);
        Wc(a, b);
        ug(a, b);
      }
    },
    attemptContinuousHydration: function attemptContinuousHydration(a) {
      if (13 === a.tag) {
        G();
        var b = lc++;
        Wc(a, b);
        ug(a, b);
      }
    },
    attemptHydrationAtCurrentPriority: function attemptHydrationAtCurrentPriority(a) {
      if (13 === a.tag) {
        var b = G();
        b = Vc(b, a, null);
        Wc(a, b);
        ug(a, b);
      }
    },
    findHostInstance: sg,
    findHostInstanceWithWarning: function findHostInstanceWithWarning(a) {
      return sg(a);
    },
    findHostInstanceWithNoPortals: function findHostInstanceWithNoPortals(a) {
      a = ya(a);
      return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
    },
    shouldSuspend: function shouldSuspend() {
      return !1;
    },
    injectIntoDevTools: function injectIntoDevTools(a) {
      var b = a.findFiberByHostInstance;
      return pg(aa({}, a, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: q.ReactCurrentDispatcher,
        findHostInstanceByFiber: function findHostInstanceByFiber(a) {
          a = xa(a);
          return null === a ? null : a.stateNode;
        },
        findFiberByHostInstance: function findFiberByHostInstance(a) {
          return b ? b(a) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      }));
    }
  };
  module.exports = vg.default || vg;
  var $$$renderer = module.exports;
  module.exports = $$$reconciler;
  return $$$renderer;
};
}(reactReconciler_production_min));

var ReactFiberReconciler = reactReconciler_production_min.exports;

/* eslint-disable no-continue */

/**
 * Checks if two sets of props are equal (recursively)
 *
 * @param {Object} props A
 * @param {Object} props B
 * @returns {Boolean} props equals?
 *
 */
var propsEqual = function propsEqual(a, b) {
  var oldPropsKeys = Object.keys(a);
  var newPropsKeys = Object.keys(b);
  if (oldPropsKeys.length !== newPropsKeys.length) {
    return false;
  }
  for (var i = 0; i < oldPropsKeys.length; i += 1) {
    var propName = oldPropsKeys[i];
    if (propName === 'render' && !a[propName] !== !b[propName]) {
      return false;
    }
    if (propName !== 'children' && a[propName] !== b[propName]) {
      if (typeof a[propName] === 'object' && typeof b[propName] === 'object' && propsEqual(a[propName], b[propName])) {
        continue;
      }
      return false;
    }
    if (propName === 'children' && (typeof a[propName] === 'string' || typeof b[propName] === 'string')) {
      return a[propName] === b[propName];
    }
  }
  return true;
};

var _excluded = ["style", "children"],
  _excluded2 = ["style"];
var emptyObject = {};
var appendChild = function appendChild(parentInstance, child) {
  var isParentText = parentInstance.type === 'TEXT' || parentInstance.type === 'LINK' || parentInstance.type === 'TSPAN';
  var isChildTextInstance = child.type === 'TEXT_INSTANCE';
  var isOrphanTextInstance = isChildTextInstance && !isParentText;

  // Ignore orphan text instances.
  // Caused by cases such as <>{name && <Text>{name}</Text>}</>
  if (isOrphanTextInstance) {
    console.warn("Invalid '" + child.value + "' string child outside <Text> component");
    return;
  }
  parentInstance.children.push(child);
};
var createRenderer = function createRenderer(_ref) {
  var _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  return ReactFiberReconciler({
    schedulePassiveEffects: scheduler__namespace.unstable_scheduleCallback,
    cancelPassiveEffects: scheduler__namespace.unstable_cancelCallback,
    supportsMutation: true,
    isPrimaryRenderer: false,
    warnsIfNotActing: false,
    appendInitialChild: appendChild,
    createInstance: function createInstance(type, _ref2) {
      var style = _ref2.style;
        _ref2.children;
        var props = _objectWithoutPropertiesLoose__default["default"](_ref2, _excluded);
      return {
        type: type,
        box: {},
        style: style || {},
        props: props || {},
        children: []
      };
    },
    createTextInstance: function createTextInstance(text, rootContainerInstance) {
      return {
        type: 'TEXT_INSTANCE',
        value: text
      };
    },
    finalizeInitialChildren: function finalizeInitialChildren(element, type, props) {
      return false;
    },
    getPublicInstance: function getPublicInstance(instance) {
      return instance;
    },
    prepareForCommit: function prepareForCommit() {
      // Noop
    },
    clearContainer: function clearContainer() {
      // Noop
    },
    prepareUpdate: function prepareUpdate(element, type, oldProps, newProps) {
      return !propsEqual(oldProps, newProps);
    },
    resetAfterCommit: onChange,
    resetTextContent: function resetTextContent(element) {
      // Noop
    },
    getRootHostContext: function getRootHostContext() {
      return emptyObject;
    },
    getChildHostContext: function getChildHostContext() {
      return emptyObject;
    },
    shouldSetTextContent: function shouldSetTextContent(type, props) {
      return false;
    },
    now: Date.now,
    useSyncScheduling: true,
    appendChild: appendChild,
    appendChildToContainer: function appendChildToContainer(parentInstance, child) {
      if (parentInstance.type === 'ROOT') {
        parentInstance.document = child;
      } else {
        appendChild(parentInstance, child);
      }
    },
    insertBefore: function insertBefore(parentInstance, child, beforeChild) {
      var _parentInstance$child;
      var index = (_parentInstance$child = parentInstance.children) === null || _parentInstance$child === void 0 ? void 0 : _parentInstance$child.indexOf(beforeChild);
      if (index === undefined) return;
      if (index !== -1 && child) parentInstance.children.splice(index, 0, child);
    },
    removeChild: function removeChild(parentInstance, child) {
      var _parentInstance$child2;
      var index = (_parentInstance$child2 = parentInstance.children) === null || _parentInstance$child2 === void 0 ? void 0 : _parentInstance$child2.indexOf(child);
      if (index === undefined) return;
      if (index !== -1) parentInstance.children.splice(index, 1);
    },
    removeChildFromContainer: function removeChildFromContainer(parentInstance, child) {
      var _parentInstance$child3;
      var index = (_parentInstance$child3 = parentInstance.children) === null || _parentInstance$child3 === void 0 ? void 0 : _parentInstance$child3.indexOf(child);
      if (index === undefined) return;
      if (index !== -1) parentInstance.children.splice(index, 1);
    },
    commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
      textInstance.value = newText;
    },
    commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      var style = newProps.style,
        props = _objectWithoutPropertiesLoose__default["default"](newProps, _excluded2);
      instance.props = props;
      instance.style = style;
    }
  });
};

var version = "3.1.12";

var fontStore = new FontStore__default["default"]();

// We must keep a single renderer instance, otherwise React will complain
var renderer;

// The pdf instance acts as an event emitter for DOM usage.
// We only want to trigger an update when PDF content changes
var events = {};
var pdf = function pdf(initialValue) {
  var onChange = function onChange() {
    var _events$change;
    var listeners = ((_events$change = events.change) === null || _events$change === void 0 ? void 0 : _events$change.slice()) || [];
    for (var i = 0; i < listeners.length; i += 1) listeners[i]();
  };
  var container = {
    type: 'ROOT',
    document: null
  };
  renderer = renderer || createRenderer({
    onChange: onChange
  });
  var mountNode = renderer.createContainer(container);
  var updateContainer = function updateContainer(doc) {
    renderer.updateContainer(doc, mountNode, null);
  };
  if (initialValue) updateContainer(initialValue);
  var render = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(compress) {
      var props, pdfVersion, language, pageLayout, pageMode, ctx, layout, fileStream;
      return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (compress === void 0) {
              compress = true;
            }
            props = container.document.props || {};
            pdfVersion = props.pdfVersion, language = props.language, pageLayout = props.pageLayout, pageMode = props.pageMode;
            ctx = new PDFDocument__default["default"]({
              compress: compress,
              pdfVersion: pdfVersion,
              lang: language,
              displayTitle: true,
              autoFirstPage: false,
              pageLayout: pageLayout,
              pageMode: pageMode
            });
            _context.next = 6;
            return layoutDocument__default["default"](container.document, fontStore);
          case 6:
            layout = _context.sent;
            fileStream = renderPDF__default["default"](ctx, layout);
            return _context.abrupt("return", {
              layout: layout,
              fileStream: fileStream
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function render(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var callOnRender = function callOnRender(params) {
    if (params === void 0) {
      params = {};
    }
    if (container.document.props.onRender) {
      container.document.props.onRender(params);
    }
  };
  var toBlob = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee2() {
      var chunks, _yield$render, _INTERNAL__LAYOUT__DATA_, instance;
      return _regeneratorRuntime__default["default"]().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            chunks = [];
            _context2.next = 3;
            return render();
          case 3:
            _yield$render = _context2.sent;
            _INTERNAL__LAYOUT__DATA_ = _yield$render.layout;
            instance = _yield$render.fileStream;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              instance.on('data', function (chunk) {
                chunks.push(chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk));
              });
              instance.on('end', function () {
                try {
                  var blob = new Blob(chunks, {
                    type: 'application/pdf'
                  });
                  callOnRender({
                    blob: blob,
                    _INTERNAL__LAYOUT__DATA_: _INTERNAL__LAYOUT__DATA_
                  });
                  resolve(blob);
                } catch (error) {
                  reject(error);
                }
              });
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function toBlob() {
      return _ref2.apply(this, arguments);
    };
  }();

  // TODO: rename this method to `toStream` in next major release, because it return stream not a buffer
  var toBuffer = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee3() {
      return _regeneratorRuntime__default["default"]().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            callOnRender();
            _context3.next = 3;
            return render();
          case 3:
            return _context3.abrupt("return", _context3.sent.fileStream);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function toBuffer() {
      return _ref3.apply(this, arguments);
    };
  }();

  /*
   * TODO: remove this method in next major release. it is buggy
   * see
   * - https://github.com/diegomura/react-pdf/issues/2112
   * - https://github.com/diegomura/react-pdf/issues/2095
   */
  var toString = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee4() {
      var result, _yield$render2, instance;
      return _regeneratorRuntime__default["default"]().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (false) {}
            result = '';
            _context4.next = 4;
            return render(false);
          case 4:
            _yield$render2 = _context4.sent;
            instance = _yield$render2.fileStream;
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              try {
                instance.on('data', function (buffer) {
                  result += buffer;
                });
                instance.on('end', function () {
                  callOnRender();
                  resolve(result);
                });
              } catch (error) {
                reject(error);
              }
            }));
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function toString() {
      return _ref4.apply(this, arguments);
    };
  }();
  var on = function on(event, listener) {
    if (!events[event]) events[event] = [];
    events[event].push(listener);
  };
  var removeListener = function removeListener(event, listener) {
    if (!events[event]) return;
    var idx = events[event].indexOf(listener);
    if (idx > -1) events[event].splice(idx, 1);
  };
  return {
    on: on,
    container: container,
    toBlob: toBlob,
    toBuffer: toBuffer,
    toString: toString,
    removeListener: removeListener,
    updateContainer: updateContainer
  };
};
var Font = fontStore;
var StyleSheet = {
  create: function create(s) {
    return s;
  }
};

var renderToStream = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee(element) {
    var instance, stream;
    return _regeneratorRuntime__default["default"]().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          instance = pdf(element);
          _context.next = 3;
          return instance.toBuffer();
        case 3:
          stream = _context.sent;
          return _context.abrupt("return", stream);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderToStream(_x) {
    return _ref.apply(this, arguments);
  };
}();
var renderToFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"]().mark(function _callee2(element, filePath, callback) {
    var output, stream;
    return _regeneratorRuntime__default["default"]().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return renderToStream(element);
        case 2:
          output = _context2.sent;
          stream = fs__default["default"].createWriteStream(filePath);
          output.pipe(stream);
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            stream.on('finish', function () {
              if (callback) callback(output, filePath);
              resolve(output);
            });
            stream.on('error', reject);
          }));
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function renderToFile(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var renderToBuffer = function renderToBuffer(element) {
  return renderToStream(element).then(function (stream) {
    return new Promise(function (resolve, reject) {
      var chunks = [];
      stream.on('data', function (chunk) {
        return chunks.push(chunk);
      });
      stream.on('end', function () {
        return resolve(buffer.Buffer.concat(chunks));
      });
      stream.on('error', function (error) {
        return reject(error);
      });
    });
  });
};
var renderToString = function renderToString(element) {
  if (false) {}
  return renderToBuffer(element).then(function (buffer) {
    return buffer.toString();
  });
};

var throwEnvironmentError = function throwEnvironmentError(name) {
  throw new Error(name + " is a web specific API. You're either using this component on Node, or your bundler is not loading react-pdf from the appropriate web build.");
};
var usePDF = function usePDF() {
  throwEnvironmentError('usePDF');
};
var PDFViewer = function PDFViewer() {
  throwEnvironmentError('PDFViewer');
};
var PDFDownloadLink = function PDFDownloadLink() {
  throwEnvironmentError('PDFDownloadLink');
};
var BlobProvider = function BlobProvider() {
  throwEnvironmentError('BlobProvider');
};
var render = renderToFile;

// TODO: remove this default export in next major release because it breaks tree-shacking
var index = _extends__default["default"]({
  pdf: pdf,
  Font: Font,
  version: version,
  StyleSheet: StyleSheet,
  usePDF: usePDF,
  PDFViewer: PDFViewer,
  BlobProvider: BlobProvider,
  PDFDownloadLink: PDFDownloadLink,
  renderToStream: renderToStream,
  renderToString: renderToString,
  renderToFile: renderToFile,
  render: render
}, primitives__namespace);

exports.BlobProvider = BlobProvider;
exports.Font = Font;
exports.PDFDownloadLink = PDFDownloadLink;
exports.PDFViewer = PDFViewer;
exports.StyleSheet = StyleSheet;
exports.createRenderer = createRenderer;
exports["default"] = index;
exports.pdf = pdf;
exports.render = render;
exports.renderToBuffer = renderToBuffer;
exports.renderToFile = renderToFile;
exports.renderToStream = renderToStream;
exports.renderToString = renderToString;
exports.usePDF = usePDF;
exports.version = version;
Object.keys(primitives).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return primitives[k]; }
	});
});
//# sourceMappingURL=react-pdf.cjs.js.map


/***/ }),

/***/ 95886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var fns = __webpack_require__(67929);
var parse$1 = __webpack_require__(12779);
var parseUnit = __webpack_require__(95210);
var hlsToHex = __webpack_require__(89128);
var colorString = __webpack_require__(13559);
var _extends = __webpack_require__(43259);
var matchMedia = __webpack_require__(63748);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse$1);
var parseUnit__default = /*#__PURE__*/_interopDefaultLegacy(parseUnit);
var hlsToHex__default = /*#__PURE__*/_interopDefaultLegacy(hlsToHex);
var colorString__default = /*#__PURE__*/_interopDefaultLegacy(colorString);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var matchMedia__default = /*#__PURE__*/_interopDefaultLegacy(matchMedia);

// https://developer.mozilla.org/en-US/docs/Web/CSS/flex#values

// TODO: change flex defaults to [0, 1, 'auto'] as in spec in next major release
var flexDefaults = [1, 1, 0];
var flexAuto = [1, 1, 'auto'];
var expandFlex = function expandFlex(key, value) {
  var defaults = flexDefaults;
  var matches = [];
  if (value === 'auto') {
    defaults = flexAuto;
  } else {
    matches = ("" + value).split(' ');
  }
  var flexGrow = matches[0] || defaults[0];
  var flexShrink = matches[1] || defaults[1];
  var flexBasis = matches[2] || defaults[2];
  return {
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    flexBasis: flexBasis
  };
};

/* eslint-disable no-plusplus */
var BOX_MODEL_UNITS = 'px,in,mm,cm,pt,%,vw,vh';
var logError = function logError(style, value) {
  console.error("\n    @react-pdf/stylesheet parsing error:\n\n    " + style + ": " + value + ",\n    " + ' '.repeat(style.length + 2) + "^\n    Unsupported " + style + " value format\n  ");
};
var expandBoxModel = function expandBoxModel(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    expandsTo = _ref.expandsTo,
    _ref$maxValues = _ref.maxValues,
    maxValues = _ref$maxValues === void 0 ? 1 : _ref$maxValues,
    _ref$autoSupported = _ref.autoSupported,
    autoSupported = _ref$autoSupported === void 0 ? false : _ref$autoSupported;
  return function (model, value) {
    var _ref2;
    var nodes = parse__default["default"]("" + value);
    var parts = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      // value contains `calc`, `url` or other css function
      // `,`, `/` or strings that unsupported by margin and padding
      if (node.type === 'function' || node.type === 'string' || node.type === 'div') {
        logError(model, value);
        return {};
      }
      if (node.type === 'word') {
        if (node.value === 'auto' && autoSupported) {
          parts.push(node.value);
        } else {
          var result = parseUnit__default["default"](node.value);

          // when unit isn't specified this condition is true
          if (result && BOX_MODEL_UNITS.includes(result.unit)) {
            parts.push(node.value);
          } else {
            logError(model, value);
            return {};
          }
        }
      }
    }

    // checks that we have enough parsed values
    if (parts.length > maxValues) {
      logError(model, value);
      return {};
    }
    var first = parts[0];
    if (expandsTo) {
      var second = parts[1] || parts[0];
      var third = parts[2] || parts[0];
      var fourth = parts[3] || parts[1] || parts[0];
      return expandsTo({
        first: first,
        second: second,
        third: third,
        fourth: fourth
      });
    }
    return _ref2 = {}, _ref2[model] = first, _ref2;
  };
};

var processMargin = expandBoxModel({
  expandsTo: function expandsTo(_ref) {
    var first = _ref.first,
      second = _ref.second,
      third = _ref.third,
      fourth = _ref.fourth;
    return {
      marginTop: first,
      marginRight: second,
      marginBottom: third,
      marginLeft: fourth
    };
  },
  maxValues: 4,
  autoSupported: true
});
var processMarginVertical = expandBoxModel({
  expandsTo: function expandsTo(_ref2) {
    var first = _ref2.first,
      second = _ref2.second;
    return {
      marginTop: first,
      marginBottom: second
    };
  },
  maxValues: 2,
  autoSupported: true
});
var processMarginHorizontal = expandBoxModel({
  expandsTo: function expandsTo(_ref3) {
    var first = _ref3.first,
      second = _ref3.second;
    return {
      marginRight: first,
      marginLeft: second
    };
  },
  maxValues: 2,
  autoSupported: true
});
var processMarginSingle = expandBoxModel({
  autoSupported: true
});

var BORDER_SHORTHAND_REGEX = /(-?\d+(\.\d+)?(px|in|mm|cm|pt|vw|vh|px)?)\s(\S+)\s(.+)/;
var matchBorderShorthand = function matchBorderShorthand(value) {
  return value.match(BORDER_SHORTHAND_REGEX) || [];
};
var expandBorders = function expandBorders(key, value) {
  var match = matchBorderShorthand("" + value);
  if (match) {
    var color = match[5] || value;
    var style = match[4] || value;
    var width = match[1] || value;
    if (key.match(/(Top|Right|Bottom|Left)$/)) {
      var _ref;
      return _ref = {}, _ref[key + "Color"] = color, _ref[key + "Style"] = style, _ref[key + "Width"] = width, _ref;
    }
    if (key.match(/Color$/)) {
      return {
        borderTopColor: color,
        borderRightColor: color,
        borderBottomColor: color,
        borderLeftColor: color
      };
    }
    if (key.match(/Style$/)) {
      return {
        borderTopStyle: style,
        borderRightStyle: style,
        borderBottomStyle: style,
        borderLeftStyle: style
      };
    }
    if (key.match(/Width$/)) {
      return {
        borderTopWidth: width,
        borderRightWidth: width,
        borderBottomWidth: width,
        borderLeftWidth: width
      };
    }
    if (key.match(/Radius$/)) {
      return {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
        borderBottomLeftRadius: value
      };
    }
    return {
      borderTopColor: color,
      borderTopStyle: style,
      borderTopWidth: width,
      borderRightColor: color,
      borderRightStyle: style,
      borderRightWidth: width,
      borderBottomColor: color,
      borderBottomStyle: style,
      borderBottomWidth: width,
      borderLeftColor: color,
      borderLeftStyle: style,
      borderLeftWidth: width
    };
  }
  return value;
};

var processPadding = expandBoxModel({
  expandsTo: function expandsTo(_ref) {
    var first = _ref.first,
      second = _ref.second,
      third = _ref.third,
      fourth = _ref.fourth;
    return {
      paddingTop: first,
      paddingRight: second,
      paddingBottom: third,
      paddingLeft: fourth
    };
  },
  maxValues: 4
});
var processPaddingVertical = expandBoxModel({
  expandsTo: function expandsTo(_ref2) {
    var first = _ref2.first,
      second = _ref2.second;
    return {
      paddingTop: first,
      paddingBottom: second
    };
  },
  maxValues: 2
});
var processPaddingHorizontal = expandBoxModel({
  expandsTo: function expandsTo(_ref3) {
    var first = _ref3.first,
      second = _ref3.second;
    return {
      paddingRight: first,
      paddingLeft: second
    };
  },
  maxValues: 2
});
var processPaddingSingle = expandBoxModel();

var expandObjectPosition = function expandObjectPosition(key, value) {
  var match = ("" + value).split(' ');
  return {
    objectPositionX: (match === null || match === void 0 ? void 0 : match[0]) || value,
    objectPositionY: (match === null || match === void 0 ? void 0 : match[1]) || value
  };
};

var Y_AXIS_SHORTHANDS = {
  top: true,
  bottom: true
};
var sortTransformOriginPair = function sortTransformOriginPair(a, b) {
  if (Y_AXIS_SHORTHANDS[a]) return 1;
  if (Y_AXIS_SHORTHANDS[b]) return -1;
  return 0;
};
var getTransformOriginPair = function getTransformOriginPair(values) {
  if (!values || values.length === 0) return ['center', 'center'];
  var pair = values.length === 1 ? [values[0], 'center'] : values;
  return pair.sort(sortTransformOriginPair);
};

// Transforms shorthand transformOrigin values
var expandTransformOrigin = function expandTransformOrigin(key, value) {
  var match = ("" + value).split(' ');
  var pair = getTransformOriginPair(match);
  return {
    transformOriginX: pair[0],
    transformOriginY: pair[1]
  };
};

var expandGap = function expandGap(key, value) {
  var match = ("" + value).split(' ');
  return {
    rowGap: (match === null || match === void 0 ? void 0 : match[0]) || value,
    columnGap: (match === null || match === void 0 ? void 0 : match[1]) || value
  };
};

var shorthands = {
  flex: expandFlex,
  gap: expandGap,
  margin: processMargin,
  marginHorizontal: processMarginHorizontal,
  marginVertical: processMarginVertical,
  marginTop: processMarginSingle,
  marginRight: processMarginSingle,
  marginBottom: processMarginSingle,
  marginLeft: processMarginSingle,
  padding: processPadding,
  paddingHorizontal: processPaddingHorizontal,
  paddingVertical: processPaddingVertical,
  paddingTop: processPaddingSingle,
  paddingRight: processPaddingSingle,
  paddingBottom: processPaddingSingle,
  paddingLeft: processPaddingSingle,
  border: expandBorders,
  borderTop: expandBorders,
  borderRight: expandBorders,
  borderBottom: expandBorders,
  borderLeft: expandBorders,
  borderColor: expandBorders,
  borderRadius: expandBorders,
  borderStyle: expandBorders,
  borderWidth: expandBorders,
  objectPosition: expandObjectPosition,
  transformOrigin: expandTransformOrigin
};

/**
 * Transforms style key-value
 *
 * @param {String} key style key
 * @param {String} value style value
 * @returns {String | Number} transformed style values
 */
var expandStyle = function expandStyle(key, value) {
  var _ref;
  return shorthands[key] ? shorthands[key](key, value) : (_ref = {}, _ref[key] = value, _ref);
};

/**
 * Expand the shorthand properties.
 *
 * @param { Object } style object
 * @returns { Object } expanded style object
 */
var expand = function expand(style) {
  if (!style) return style;
  var propsArray = Object.keys(style);
  var resolvedStyle = {};
  for (var i = 0; i < propsArray.length; i += 1) {
    var key = propsArray[i];
    var value = style[key];
    var extended = expandStyle(key, value);
    var keys = Object.keys(extended);
    for (var j = 0; j < keys.length; j += 1) {
      var propName = keys[j];
      var propValue = extended[propName];
      resolvedStyle[propName] = propValue;
    }
  }
  return resolvedStyle;
};

/**
 * Remove nil values from array
 *
 * @param {Array} array
 * @returns {Array} array without nils
 */
var compact = function compact(array) {
  return array.filter(Boolean);
};

/**
 * Merges style objects array
 *
 * @param {Array} style objects array
 * @returns {Object} merged style object
 */
var mergeStyles = function mergeStyles(styles) {
  return styles.reduce(function (acc, style) {
    var s = Array.isArray(style) ? flatten(style) : style;
    Object.keys(s).forEach(function (key) {
      if (s[key] !== null && s[key] !== undefined) {
        acc[key] = s[key];
      }
    });
    return acc;
  }, {});
};

/**
 * Flattens an array of style objects, into one aggregated style object.
 *
 * @param {Array} style objects array
 * @returns {Object} flatted style object
 */
var flatten = fns.compose(mergeStyles, compact, fns.castArray);

/**
 * Parses scalar value in value and unit pairs
 *
 * @param {String} scalar value
 * @returns {Object} parsed value
 */
var parseValue = function parseValue(value) {
  var match = /^(-?\d*\.?\d+)(in|mm|cm|pt|vh|vw|px)?$/g.exec(value);
  return match ? {
    value: parseFloat(match[1], 10),
    unit: match[2] || 'pt'
  } : {
    value: value,
    unit: undefined
  };
};

/**
 * Transform given scalar value
 *
 * @param {Object} container
 * @param {String} styles value
 * @returns {Object} transformed value
 */
var transformUnit = function transformUnit(container, value) {
  var scalar = parseValue(value);
  var dpi = container.dpi || 72;
  var mmFactor = 1 / 25.4 * dpi;
  var cmFactor = 1 / 2.54 * dpi;
  switch (scalar.unit) {
    case 'in':
      return scalar.value * dpi;
    case 'mm':
      return scalar.value * mmFactor;
    case 'cm':
      return scalar.value * cmFactor;
    case 'vh':
      return scalar.value * (container.height / 100);
    case 'vw':
      return scalar.value * (container.width / 100);
    default:
      return scalar.value;
  }
};

var isRgb = function isRgb(value) {
  return /rgba?/g.test(value);
};
var isHsl = function isHsl(value) {
  return /hsla?/g.test(value);
};

/**
 * Transform rgb color to hexa
 *
 * @param {String} styles value
 * @returns {Object} transformed value
 */
var parseRgb = function parseRgb(value) {
  var rgb = colorString__default["default"].get.rgb(value);
  return colorString__default["default"].to.hex(rgb);
};

/**
 * Transform Hsl color to hexa
 *
 * @param {String} styles value
 * @returns {Object} transformed value
 */
var parseHsl = function parseHsl(value) {
  var hsl = colorString__default["default"].get.hsl(value).map(Math.round);
  var hex = hlsToHex__default["default"].apply(void 0, hsl);
  return hex.toUpperCase();
};

/**
 * Transform given color to hexa
 *
 * @param {String} styles value
 * @returns {Object} transformed value
 */
var transformColor = function transformColor(value) {
  if (isRgb(value)) return parseRgb(value);
  if (isHsl(value)) return parseHsl(value);
  return value;
};

var parse = function parse(transformString) {
  var transforms = transformString.trim().split(/\) |\)/);

  // Handle "initial", "inherit", "unset".
  if (transforms.length === 1) {
    return [[transforms[0], true]];
  }
  var parsed = [];
  for (var i = 0; i < transforms.length; i += 1) {
    var transform = transforms[i];
    if (transform) {
      var _transform$split = transform.split('('),
        name = _transform$split[0],
        rawValue = _transform$split[1];
      var splitChar = rawValue.indexOf(',') >= 0 ? ',' : ' ';
      var value = rawValue.split(splitChar).map(function (val) {
        return val.trim();
      });
      parsed.push({
        operation: name,
        value: value
      });
    }
  }
  return parsed;
};
var parseAngle = function parseAngle(value) {
  var unitsRegexp = /(-?\d*\.?\d*)(\w*)?/i;
  var _unitsRegexp$exec = unitsRegexp.exec(value),
    angle = _unitsRegexp$exec[1],
    unit = _unitsRegexp$exec[2];
  var number = Number.parseFloat(angle);
  return unit === 'rad' ? number * 180 / Math.PI : number;
};
var normalizeTransformOperation = function normalizeTransformOperation(_ref) {
  var operation = _ref.operation,
    value = _ref.value;
  switch (operation) {
    case 'scale':
      {
        var _value$map = value.map(function (num) {
            return Number.parseFloat(num);
          }),
          scaleX = _value$map[0],
          _value$map$ = _value$map[1],
          scaleY = _value$map$ === void 0 ? scaleX : _value$map$;
        return {
          operation: 'scale',
          value: [scaleX, scaleY]
        };
      }
    case 'scaleX':
      {
        return {
          operation: 'scale',
          value: [Number.parseFloat(value), 1]
        };
      }
    case 'scaleY':
      {
        return {
          operation: 'scale',
          value: [1, Number.parseFloat(value)]
        };
      }
    case 'rotate':
      {
        return {
          operation: 'rotate',
          value: [parseAngle(value)]
        };
      }
    case 'translate':
      {
        return {
          operation: 'translate',
          value: value.map(function (num) {
            return Number.parseFloat(num);
          })
        };
      }
    case 'translateX':
      {
        return {
          operation: 'translate',
          value: [Number.parseFloat(value), 0]
        };
      }
    case 'translateY':
      {
        return {
          operation: 'translate',
          value: [0, Number.parseFloat(value)]
        };
      }
    case 'skew':
      {
        return {
          operation: 'skew',
          value: value.map(parseAngle)
        };
      }
    case 'skewX':
      {
        return {
          operation: 'skew',
          value: [parseAngle(value), 0]
        };
      }
    case 'skewY':
      {
        return {
          operation: 'skew',
          value: [0, parseAngle(value)]
        };
      }
    default:
      {
        return {
          operation: operation,
          value: value.map(function (num) {
            return Number.parseFloat(num);
          })
        };
      }
  }
};
var normalize = function normalize(operations) {
  return operations.map(function (operation) {
    return normalizeTransformOperation(operation);
  });
};
var processTransform = function processTransform(value) {
  if (typeof value !== 'string') return value;
  return normalize(parse(value));
};

var FONT_WEIGHTS = {
  thin: 100,
  hairline: 100,
  ultralight: 200,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  demibold: 600,
  bold: 700,
  ultrabold: 800,
  extrabold: 800,
  heavy: 900,
  black: 900
};
var processFontWeight = function processFontWeight(value) {
  if (!value) return FONT_WEIGHTS.normal;
  if (typeof value === 'number') return value;
  var lv = value.toLowerCase();
  if (FONT_WEIGHTS[lv]) return FONT_WEIGHTS[lv];
  return value;
};

var matchNumber = function matchNumber(value) {
  return typeof value === 'string' && /^-?\d*\.?\d*$/.test(value);
};
var castFloat = function castFloat(value) {
  if (typeof value !== 'string') return value;
  if (matchNumber(value)) return parseFloat(value, 10);
  return value;
};

var offsetKeyword = function offsetKeyword(value) {
  switch (value) {
    case 'top':
    case 'left':
      return '0%';
    case 'right':
    case 'bottom':
      return '100%';
    case 'center':
      return '50%';
    default:
      return null;
  }
};

var transformObjectPosition = function transformObjectPosition(value) {
  return offsetKeyword(value) || castFloat(value);
};

var transformTransformOrigin = function transformTransformOrigin(value) {
  return offsetKeyword(value) || castFloat(value);
};

var handlers = {
  transform: processTransform,
  fontWeight: processFontWeight,
  objectPositionX: transformObjectPosition,
  objectPositionY: transformObjectPosition,
  transformOriginX: transformTransformOrigin,
  transformOriginY: transformTransformOrigin
};
var transformStyle = function transformStyle(key, value, container) {
  var result = handlers[key] ? handlers[key](value) : value;
  return transformColor(transformUnit(container, castFloat(result)));
};

/**
 * Transform styles values
 *
 * @param {Object} styles object
 * @returns {Object} transformed styles
 */
var transform = function transform(container) {
  return function (style) {
    if (!style) return style;
    var propsArray = Object.keys(style);
    var resolvedStyle = {};
    for (var i = 0; i < propsArray.length; i += 1) {
      var key = propsArray[i];
      var value = style[key];
      var transformed = transformStyle(key, value, container);
      resolvedStyle[key] = transformed;
    }
    return resolvedStyle;
  };
};

/**
 * Resolves media queries in styles object
 *
 * @param {Object} container
 * @param {Object} styles object
 */
var resolveMediaQueries = function resolveMediaQueries(container, styles) {
  return Object.keys(styles).reduce(function (acc, key) {
    var _extends2;
    if (/@media/.test(key)) {
      var _matchMedia;
      return _extends__default["default"]({}, acc, matchMedia__default["default"]((_matchMedia = {}, _matchMedia[key] = styles[key], _matchMedia), container));
    }
    return _extends__default["default"]({}, acc, (_extends2 = {}, _extends2[key] = styles[key], _extends2));
  }, {});
};

/**
 * Resolves styles
 *
 * @param {Object} container
 * @param {Object} style object
 * @returns {Object} resolved style object
 */
var resolveStyles = function resolveStyles(container, style) {
  var computeMediaQueries = function computeMediaQueries(value) {
    return resolveMediaQueries(container, value);
  };
  return fns.compose(transform(container), expand, computeMediaQueries, flatten)(style);
};

exports["default"] = resolveStyles;
exports.flatten = flatten;
exports.processTransform = processTransform;
exports.transformColor = transformColor;


/***/ }),

/***/ 74573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var fns = __webpack_require__(67929);
var _extends = __webpack_require__(43259);
var _objectWithoutPropertiesLoose = __webpack_require__(54845);
var _createForOfIteratorHelperLoose = __webpack_require__(12631);
var unicode = __webpack_require__(70750);
var hyphen = __webpack_require__(39774);
var pattern = __webpack_require__(66874);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var _createForOfIteratorHelperLoose__default = /*#__PURE__*/_interopDefaultLegacy(_createForOfIteratorHelperLoose);
var unicode__default = /*#__PURE__*/_interopDefaultLegacy(unicode);
var hyphen__default = /*#__PURE__*/_interopDefaultLegacy(hyphen);
var pattern__default = /*#__PURE__*/_interopDefaultLegacy(pattern);

/**
 * Create attributed string from text fragments
 *
 * @param  {Array}  fragments
 * @return {Object} attributed string
 */
var fromFragments = function fromFragments(fragments) {
  var offset = 0;
  var string = '';
  var runs = [];
  fragments.forEach(function (fragment) {
    string += fragment.string;
    runs.push({
      start: offset,
      end: offset + fragment.string.length,
      attributes: fragment.attributes || {}
    });
    offset += fragment.string.length;
  });
  return {
    string: string,
    runs: runs
  };
};

/**
 * Default word hyphenation engine used when no one provided.
 * Does not perform word hyphenation at all
 *
 * @param  {String} word
 * @return {Array} same word
 */
var defaultHyphenationEngine = function defaultHyphenationEngine(word) {
  return [word];
};

/**
 * Wrap words of attribute string
 *
 * @param  {Object} layout engines
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @return {Object} attributed string including syllables
 */
var wrapWords = function wrapWords(engines, options) {
  if (engines === void 0) {
    engines = {};
  }
  if (options === void 0) {
    options = {};
  }
  return function (attributedString) {
    var _engines$wordHyphenat, _engines;
    var syllables = [];
    var fragments = [];
    var hyphenateWord = options.hyphenationCallback || ((_engines$wordHyphenat = (_engines = engines).wordHyphenation) === null || _engines$wordHyphenat === void 0 ? void 0 : _engines$wordHyphenat.call(_engines, options)) || defaultHyphenationEngine;
    for (var i = 0; i < attributedString.runs.length; i += 1) {
      var string = '';
      var run = attributedString.runs[i];
      var words = attributedString.string.slice(run.start, run.end).split(/([ ]+)/g).filter(Boolean);
      for (var j = 0; j < words.length; j += 1) {
        var word = words[j];
        var parts = hyphenateWord(word);
        syllables.push.apply(syllables, parts);
        string += parts.join('');
      }
      fragments.push({
        string: string,
        attributes: run.attributes
      });
    }
    return _extends__default["default"]({}, fromFragments(fragments), {
      syllables: syllables
    });
  };
};

/**
 * Clone rect
 *
 * @param  {Object}  rect
 * @return {Object} cloned rect
 */
var copy = function copy(rect) {
  return Object.assign({}, rect);
};

var partition = function partition(rect, height) {
  var a = Object.assign({}, rect, {
    height: height
  });
  var b = Object.assign({}, rect, {
    y: rect.y + height,
    height: rect.height - height
  });
  return [a, b];
};

/**
 * Crop upper section of rect
 *
 * @param  {Object}  rect
 * @return {Object} cropped rect
 */
var crop = function crop(height, rect) {
  var _partition = partition(rect, height),
    result = _partition[1];
  return result;
};

/**
 * Get paragraph block height
 *
 * @param  {Object}  paragraph block
 * @return {number} paragraph block height
 */
var height$2 = function height(paragraph) {
  return paragraph.reduce(function (acc, block) {
    return acc + block.box.height;
  }, 0);
};

/**
 * Calculate run scale
 *
 * @param  {Object}  run
 * @return {number} scale
 */
var calculateScale = function calculateScale(run) {
  var _attributes$font;
  var attributes = run.attributes || {};
  var fontSize = attributes.fontSize || 12;
  var unitsPerEm = (_attributes$font = attributes.font) === null || _attributes$font === void 0 ? void 0 : _attributes$font.unitsPerEm;
  return unitsPerEm ? fontSize / unitsPerEm : 0;
};

/**
 * Get run scale
 *
 * @param  {Object}  run
 * @return {number} scale
 */
var scale = function scale(run) {
  var _run$attributes;
  return ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : _run$attributes.scale) || calculateScale(run);
};

/**
 * Get ligature offset by index
 *
 * Ex. ffi ligature
 *
 *   glyphs:         l  o  f  f  i  m
 *   glyphIndices:   0  1  2  2  2  3
 *   offset:         0  0  0  1  2  0
 *
 * @param  {number}  index
 * @param  {Object}  run
 * @return {number} ligature offset
 */
var offset = function offset(index, run) {
  if (!run) return 0;
  var glyphIndices = run.glyphIndices || [];
  var value = glyphIndices[index];
  return glyphIndices.slice(0, index).filter(function (i) {
    return i === value;
  }).length;
};

/**
 * Get run font
 *
 * @param  {Object}  run
 * @return {Object} font
 */
var getFont = function getFont(run) {
  var _run$attributes;
  return ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : _run$attributes.font) || null;
};

/**
 * Slice glyph between codePoints range
 * Util for breaking ligatures
 *
 * @param  {number}  start code point index
 * @param  {number}  end code point index
 * @param  {Object}  font to generate new glyph
 * @param  {Object} glyph to be sliced
 * @return {Array} sliced glyph parts
 */
var slice$2 = function slice(start, end, font, glyph) {
  if (!glyph) return [];
  if (start === end) return [];
  if (start === 0 && end === glyph.codePoints.length) return [glyph];
  var codePoints = glyph.codePoints.slice(start, end);
  var string = String.fromCodePoint.apply(String, codePoints);
  return font ? font.layout(string).glyphs : [glyph];
};

/**
 * Return glyph index at string index, if glyph indices present.
 * Otherwise return string index
 *
 * @param  {number}  string index
 * @param  {Object}  run
 * @return {number}  glyph index
 */
var glyphIndexAt = function glyphIndexAt(index, run) {
  var _run$glyphIndices;
  var result = run === null || run === void 0 ? void 0 : (_run$glyphIndices = run.glyphIndices) === null || _run$glyphIndices === void 0 ? void 0 : _run$glyphIndices[index];
  return fns.isNil(result) ? index : result;
};

/**
 * Returns new array starting with zero, and keeping same relation between consecutive values
 *
 * @param  {Array[number]}  list
 * @return {boolean} normalized array
 */
var normalize = function normalize(array) {
  var head = array[0];
  return array.map(function (value) {
    return value - head;
  });
};

/**
 * Slice run between glyph indices range
 *
 * @param  {number}  start glyph index
 * @param  {number}  end glyph index
 * @param  {Object}  run
 * @return {Object} sliced run
 */
var slice$1 = function slice(start, end, run) {
  var _run$glyphs, _run$glyphs2;
  var runScale = scale(run);
  var font = getFont(run);

  // Get glyph start and end indices
  var startIndex = glyphIndexAt(start, run);
  var endIndex = glyphIndexAt(end, run);

  // Get start and end glyph
  var startGlyph = (_run$glyphs = run.glyphs) === null || _run$glyphs === void 0 ? void 0 : _run$glyphs[startIndex];
  var endGlyph = (_run$glyphs2 = run.glyphs) === null || _run$glyphs2 === void 0 ? void 0 : _run$glyphs2[endIndex];

  // Get start ligature chunks (if any)
  var startOffset = offset(start, run);
  var startGlyphs = startOffset > 0 ? slice$2(startOffset, Infinity, font, startGlyph) : [];

  // Get end ligature chunks (if any)
  var endOffset = offset(end, run);
  var endGlyphs = slice$2(0, endOffset, font, endGlyph);

  // Compute new glyphs
  var sliceStart = startIndex + Math.min(1, startOffset);
  var glyphs = (run.glyphs || []).slice(sliceStart, endIndex);

  // Compute new positions
  var glyphPosition = function glyphPosition(g) {
    return {
      xAdvance: g.advanceWidth * runScale
    };
  };
  var startPositions = startGlyphs.map(glyphPosition);
  var positions = (run.positions || []).slice(sliceStart, endIndex);
  var endPositions = endGlyphs.map(glyphPosition);
  return Object.assign({}, run, {
    start: run.start + start,
    end: Math.min(run.end, run.start + end),
    glyphIndices: normalize((run.glyphIndices || []).slice(start, end)),
    glyphs: [startGlyphs, glyphs, endGlyphs].flat(),
    positions: [startPositions, positions, endPositions].flat()
  });
};

/**
 * Get run index that contains passed index
 *
 * @param  {number}  char index
 * @param  {Array}  runs array
 * @return {Array} run index
 */
var runIndexAt$1 = function runIndexAt(n, runs) {
  if (!runs) return -1;
  return runs.findIndex(function (run) {
    return run.start <= n && n < run.end;
  });
};

/**
 * Filter runs contained between start and end
 *
 * @param  {number}  start
 * @param  {number}  end
 * @param  {Array}  runs
 * @return {boolean} filtered runs
 */
var filter = function filter(start, end, runs) {
  var startIndex = runIndexAt$1(start, runs);
  var endIndex = Math.max(runIndexAt$1(end - 1, runs), startIndex);
  return runs.slice(startIndex, endIndex + 1);
};

/**
 * Subtract scalar to run
 *
 * @param  {number}  scalar
 * @param  {Object}  run
 * @return {Object} subtracted run
 */
var subtract = function subtract(n, run) {
  var start = run.start - n;
  var end = run.end - n;
  return Object.assign({}, run, {
    start: start,
    end: end
  });
};

/**
 * Slice array of runs
 *
 * @param  {number}  start offset
 * @param  {number}  end offset
 * @param  {Array}  runs
 * @return {Array} sliced runs
 */
var sliceRuns = function sliceRuns(start, end, runs) {
  var sliceFirstRun = function sliceFirstRun(a) {
    return slice$1(start - a.start, end - a.start, a);
  };
  var sliceLastRun = function sliceLastRun(a) {
    return slice$1(0, end - a.start, a);
  };
  return runs.map(function (run, i) {
    var result = run;
    var isFirst = i === 0;
    var isLast = !isFirst && i === runs.length - 1;
    if (isFirst) result = sliceFirstRun(run);
    if (isLast) result = sliceLastRun(run);
    return subtract(start, result);
  });
};

/**
 * Slice attributed string between two indices
 *
 * @param  {number}  start offset
 * @param  {number}  end offset
 * @param  {Object}  attributedString
 * @return {Object} attributedString
 */
var slice = function slice(start, end, attributedString) {
  if (attributedString.string.length === 0) return attributedString;
  var string = attributedString.string.slice(start, end);
  var filteredRuns = filter(start, end, attributedString.runs);
  var slicedRuns = sliceRuns(start, end, filteredRuns);
  return Object.assign({}, attributedString, {
    string: string,
    runs: slicedRuns
  });
};

var findCharIndex = function findCharIndex(string) {
  return string.search(/\S/g);
};
var findLastCharIndex = function findLastCharIndex(string) {
  var match = string.match(/\S/g);
  return match ? string.lastIndexOf(match[match.length - 1]) : -1;
};

/**
 * Removes (strips) whitespace from both ends of the attributted string.
 *
 * @param  {Object}  attributedString
 * @return {Object} attributedString
 */
var trim = function trim(attributedString) {
  var start = findCharIndex(attributedString.string);
  var end = findLastCharIndex(attributedString.string);
  return slice(start, end + 1, attributedString);
};

/**
 * Returns empty run
 *
 * @return {Object} empty run
 */
var empty$1 = function empty() {
  return {
    start: 0,
    end: 0,
    glyphIndices: [],
    glyphs: [],
    positions: [],
    attributes: {}
  };
};

var isNumber = function isNumber(value) {
  return typeof value === 'number';
};

/**
 * Append glyph indices with given length
 *
 * Ex. appendIndices(3, [0, 1, 2, 2]) => [0, 1, 2, 2, 3, 3, 3]
 *
 * @param  {number}  length
 * @param  {Array}  glyph indices
 * @return {Array}  extended glyph indices
 */
var appendIndices = function appendIndices(length, indices) {
  var lastIndex = fns.last(indices);
  var value = fns.isNil(lastIndex) ? 0 : lastIndex + 1;
  var newIndices = Array(length).fill(value);
  return indices.concat(newIndices);
};

/**
 * Get glyph for a given code point
 *
 * @param  {number}  codePoint
 * @param  {Object}  font
 * @return {Object}  glyph
 * */
var fromCodePoint = function fromCodePoint(value, font) {
  return font && value ? font.glyphForCodePoint(value) : null;
};

/**
 * Append glyph to run
 *
 * @param  {Object}  glyph
 * @param  {Object}  run
 * @return {Object} run with glyph
 */
var appendGlyph = function appendGlyph(glyph, run) {
  var _glyph$codePoints;
  var glyphLength = ((_glyph$codePoints = glyph.codePoints) === null || _glyph$codePoints === void 0 ? void 0 : _glyph$codePoints.length) || 0;
  var end = run.end + glyphLength;
  var glyphs = run.glyphs.concat(glyph);
  var glyphIndices = appendIndices(glyphLength, run.glyphIndices);
  if (!run.positions) return Object.assign({}, run, {
    end: end,
    glyphs: glyphs,
    glyphIndices: glyphIndices
  });
  var positions = run.positions.concat({
    xAdvance: glyph.advanceWidth * scale(run)
  });
  return Object.assign({}, run, {
    end: end,
    glyphs: glyphs,
    glyphIndices: glyphIndices,
    positions: positions
  });
};

/**
 * Append glyph or code point to run
 *
 * @param  {Object | number}  glyph | codePoint
 * @param  {Object}  run
 * @return {Object} run with glyph
 */
var append$1 = function append(value, run) {
  if (!value) return run;
  var font = getFont(run);
  var glyph = isNumber(value) ? fromCodePoint(value, font) : value;
  return appendGlyph(glyph, run);
};

/**
 * Get string from array of code points
 *
 * @param {Array} code points
 * @return {String} string
 */
var stringFromCodePoints = function stringFromCodePoints(codePoints) {
  return String.fromCodePoint.apply(String, codePoints);
};

/**
 * Append glyph into last run of attributed string
 *
 * @param {Object} glyph
 * @param {Object} attributed string
 * @return {Object} attributed string with new glyph
 */
var append = function append(glyph, attributedString) {
  var codePoints = (glyph === null || glyph === void 0 ? void 0 : glyph.codePoints) || [];
  var codePointsString = stringFromCodePoints(codePoints);
  var string = attributedString.string + codePointsString;
  var firstRuns = attributedString.runs.slice(0, -1);
  var lastRun = fns.last(attributedString.runs) || empty$1();
  var runs = firstRuns.concat(append$1(glyph, lastRun));
  return Object.assign({}, attributedString, {
    string: string,
    runs: runs
  });
};

var ELLIPSIS_UNICODE = 8230;
var ELLIPSIS_STRING = String.fromCharCode(ELLIPSIS_UNICODE);

/**
 * Get ellipsis codepoint. This may be different in standard and embedded fonts
 *
 * @param  {number}  font
 * @return {Object} ellipsis codepoint
 */
var getEllipsisCodePoint = function getEllipsisCodePoint(font) {
  if (!font.encode) return ELLIPSIS_UNICODE;
  var _font$encode = font.encode(ELLIPSIS_STRING),
    codePoints = _font$encode[0];
  return parseInt(codePoints[0], 16);
};

/**
 * Trucante block with ellipsis
 *
 * @param  {number}  lines quantity
 * @param  {Object}  paragraph block
 * @return {Object} sliced paragraph block
 */
var truncate = function truncate(block) {
  var _last, _last2, _last2$attributes;
  var runs = ((_last = fns.last(block)) === null || _last === void 0 ? void 0 : _last.runs) || [];
  var font = (_last2 = fns.last(runs)) === null || _last2 === void 0 ? void 0 : (_last2$attributes = _last2.attributes) === null || _last2$attributes === void 0 ? void 0 : _last2$attributes.font;
  if (font) {
    var _Object$assign;
    var index = block.length - 1;
    var codePoint = getEllipsisCodePoint(font);
    var glyph = font.glyphForCodePoint(codePoint);
    var lastBlock = append(glyph, trim(block[index]));
    return Object.assign([], block, (_Object$assign = {}, _Object$assign[index] = lastBlock, _Object$assign));
  }
  return block;
};

/**
 * Omit attribute from run
 *
 * @param  {Object}  run
 * @return {Object} run without ommited attribute
 */
var omit = function omit(value, run) {
  var attributes = Object.assign({}, run.attributes);
  delete attributes[value];
  return Object.assign({}, run, {
    attributes: attributes
  });
};

/**
 * Get run ascent
 *
 * @param  {Object}  run
 * @return {boolean} ascent
 */
var ascent$1 = function ascent(run) {
  var _run$attributes, _run$attributes$attac, _run$attributes2, _run$attributes2$font;
  var attachmentHeight = ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : (_run$attributes$attac = _run$attributes.attachment) === null || _run$attributes$attac === void 0 ? void 0 : _run$attributes$attac.height) || 0;
  var fontAscent = ((_run$attributes2 = run.attributes) === null || _run$attributes2 === void 0 ? void 0 : (_run$attributes2$font = _run$attributes2.font) === null || _run$attributes2$font === void 0 ? void 0 : _run$attributes2$font.ascent) || 0;
  return Math.max(attachmentHeight, fontAscent * scale(run));
};

/**
 * Get run descent
 *
 * @param  {Object}  run
 * @return {number} descent
 */
var descent = function descent(run) {
  var _run$attributes, _run$attributes$font;
  var fontDescent = ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : (_run$attributes$font = _run$attributes.font) === null || _run$attributes$font === void 0 ? void 0 : _run$attributes$font.descent) || 0;
  return scale(run) * fontDescent;
};

/**
 * Get run lineGap
 *
 * @param  {Object}  run
 * @return {number} lineGap
 */
var lineGap = function lineGap(run) {
  var _run$attributes, _run$attributes$font;
  return (((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : (_run$attributes$font = _run$attributes.font) === null || _run$attributes$font === void 0 ? void 0 : _run$attributes$font.lineGap) || 0) * scale(run);
};

/**
 * Get run height
 *
 * @param  {Object}  run
 * @return {number} height
 */
var height$1 = function height(run) {
  var _run$attributes;
  var lineHeight = (_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : _run$attributes.lineHeight;
  return lineHeight || lineGap(run) + ascent$1(run) - descent(run);
};

/**
 * Returns attributed string height
 *
 * @param {Object} attributed string
 * @return {number} height
 */
var height = function height(attributeString) {
  var reducer = function reducer(acc, run) {
    return Math.max(acc, height$1(run));
  };
  return attributeString.runs.reduce(reducer, 0);
};

/**
 * Checks if two rects intersect each other
 *
 * @param {Rect} a
 * @param {Rect} b
 * @returns {Boolean} rects intersects
 */
var intersects = function intersects(a, b) {
  var x = Math.max(a.x, b.x);
  var num1 = Math.min(a.x + a.width, b.x + b.width);
  var y = Math.max(a.y, b.y);
  var num2 = Math.min(a.y + a.height, b.y + b.height);
  return num1 >= x && num2 >= y;
};

var _excluded = ["excludeRects"];
var getLineFragment = function getLineFragment(lineRect, excludeRect) {
  if (!intersects(excludeRect, lineRect)) return [lineRect];
  var eStart = excludeRect.x;
  var eEnd = excludeRect.x + excludeRect.width;
  var lStart = lineRect.x;
  var lEnd = lineRect.x + lineRect.width;
  var a = Object.assign({}, lineRect, {
    width: eStart - lStart
  });
  var b = Object.assign({}, lineRect, {
    x: eEnd,
    width: lEnd - eEnd
  });
  return [a, b].filter(function (r) {
    return r.width > 0;
  });
};
var getLineFragments = function getLineFragments(rect, excludeRects) {
  var fragments = [rect];
  var _loop = function _loop() {
    var excludeRect = excludeRects[i];
    fragments = fragments.reduce(function (acc, fragment) {
      var pieces = getLineFragment(fragment, excludeRect);
      return acc.concat(pieces);
    }, []);
  };
  for (var i = 0; i < excludeRects.length; i += 1) {
    _loop();
  }
  return fragments;
};
var generateLineRects = function generateLineRects(container, height) {
  var excludeRects = container.excludeRects,
    rect = _objectWithoutPropertiesLoose__default["default"](container, _excluded);
  if (!excludeRects) return [rect];
  var lineRects = [];
  var maxY = Math.max.apply(Math, excludeRects.map(function (r) {
    return r.y + r.height;
  }));
  var currentRect = rect;
  while (currentRect.y < maxY) {
    var _partition = partition(currentRect, height),
      lineRect = _partition[0],
      rest = _partition[1];
    var lineRectFragments = getLineFragments(lineRect, excludeRects);
    currentRect = rest;
    lineRects.push.apply(lineRects, lineRectFragments);
  }
  return [].concat(lineRects, [currentRect]);
};

var ATTACHMENT_CODE$1 = "\uFFFC"; // 65532

/**
 * Remove attachment attribute if no char present
 *
 * @param  {Object} attributed string
 * @return {Object} attributed string
 */
var purgeAttachments = function purgeAttachments(attributedString) {
  var shouldPurge = !attributedString.string.includes(ATTACHMENT_CODE$1);
  if (!shouldPurge) return attributedString;
  var runs = attributedString.runs.map(function (run) {
    return omit('attachment', run);
  });
  return Object.assign({}, attributedString, {
    runs: runs
  });
};

/**
 * Layout paragraphs inside rectangle
 *
 * @param  {Object} rect
 * @param  {Array} attributed strings
 * @return {Object} layout blocks
 */
var layoutLines = function layoutLines(rects, lines, indent) {
  var rect = rects.shift();
  var currentY = rect.y;
  return lines.map(function (line, i) {
    var _line$runs, _line$runs$;
    var lineIndent = i === 0 ? indent : 0;
    var style = ((_line$runs = line.runs) === null || _line$runs === void 0 ? void 0 : (_line$runs$ = _line$runs[0]) === null || _line$runs$ === void 0 ? void 0 : _line$runs$.attributes) || {};
    var height$1 = Math.max(height(line), style.lineHeight);
    if (currentY + height$1 > rect.y + rect.height && rects.length > 0) {
      rect = rects.shift();
      currentY = rect.y;
    }
    var newLine = Object.assign({}, line);
    delete newLine.syllables;
    newLine.box = {
      x: rect.x + lineIndent,
      y: currentY,
      width: rect.width - lineIndent,
      height: height$1
    };
    currentY += height$1;
    return purgeAttachments(newLine);
  });
};

/**
 * Performs line breaking and layout
 *
 * @param  {Object} engines
 * @param  {Object}  layout options
 * @param  {Object} rect
 * @param  {Object} attributed string
 * @return {Object} layout block
 */
var layoutParagraph = function layoutParagraph(engines, options) {
  return function (container, paragraph) {
    var _paragraph$runs, _paragraph$runs$, _paragraph$runs$$attr;
    var height$1 = height(paragraph);
    var indent = ((_paragraph$runs = paragraph.runs) === null || _paragraph$runs === void 0 ? void 0 : (_paragraph$runs$ = _paragraph$runs[0]) === null || _paragraph$runs$ === void 0 ? void 0 : (_paragraph$runs$$attr = _paragraph$runs$.attributes) === null || _paragraph$runs$$attr === void 0 ? void 0 : _paragraph$runs$$attr.indent) || 0;
    var rects = generateLineRects(container, height$1);
    var availableWidths = rects.map(function (r) {
      return r.width;
    });
    availableWidths[0] -= indent;
    var lines = engines.linebreaker(options)(paragraph, availableWidths);
    return layoutLines(rects, lines, indent);
  };
};

/**
 * Slice block at given height
 *
 * @param  {number}  height
 * @param  {Object}  paragraph block
 * @return {number} sliced paragraph block
 */
var sliceAtHeight = function sliceAtHeight(height, block) {
  var newBlock = [];
  var counter = 0;
  for (var i = 0; i < block.length; i += 1) {
    var line = block[i];
    counter += line.box.height;
    if (counter < height) {
      newBlock.push(line);
    } else {
      break;
    }
  }
  return newBlock;
};

/**
 * Layout paragraphs inside container until it does not
 * fit anymore, performing line wrapping in the process.
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {Object}  container rect
 * @param  {Object}  attributed strings (paragraphs)
 * @return {Array} paragraph blocks
 */
var typesetter = function typesetter(engines, options, container) {
  return function (attributedStrings) {
    var blocks = [];
    var paragraphs = [].concat(attributedStrings);
    var layoutBlock = layoutParagraph(engines, options);
    var maxLines = fns.isNil(container.maxLines) ? Infinity : container.maxLines;
    var truncateEllipsis = container.truncateMode === 'ellipsis';
    var linesCount = maxLines;
    var paragraphRect = copy(container);
    var nextParagraph = paragraphs.shift();
    while (linesCount > 0 && nextParagraph) {
      var block = layoutBlock(paragraphRect, nextParagraph);
      var slicedBlock = block.slice(0, linesCount);
      var linesHeight = height$2(slicedBlock);
      var shouldTruncate = truncateEllipsis && block.length !== slicedBlock.length;
      linesCount -= slicedBlock.length;
      if (paragraphRect.height >= linesHeight) {
        blocks.push(shouldTruncate ? truncate(slicedBlock) : slicedBlock);
        paragraphRect = crop(linesHeight, paragraphRect);
        nextParagraph = paragraphs.shift();
      } else {
        blocks.push(truncate(sliceAtHeight(paragraphRect.height, slicedBlock)));
        break;
      }
    }
    return blocks;
  };
};

var DUMMY_CODEPOINT = 123;

/**
 * Resolve string indices based on glyphs code points
 *
 * @param  {Array}  glyphs
 * @return {Array} glyph indices
 */
var resolve = function resolve(glyphs) {
  if (glyphs === void 0) {
    glyphs = [];
  }
  return glyphs.reduce(function (acc, glyph) {
    var codePoints = (glyph === null || glyph === void 0 ? void 0 : glyph.codePoints) || [DUMMY_CODEPOINT];
    if (acc.length === 0) return codePoints.map(function () {
      return 0;
    });
    var last = acc[acc.length - 1];
    var next = codePoints.map(function () {
      return last + 1;
    });
    return [].concat(acc, next);
  }, []);
};

var getCharacterSpacing = function getCharacterSpacing(run) {
  var _run$attributes;
  return ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : _run$attributes.characterSpacing) || 0;
};

/**
 * Scale run positions
 *
 * @param  {Object}  run
 * @param  {Array}  positions
 * @return {Array} scaled positions
 */
var scalePositions = function scalePositions(run, positions) {
  var runScale = scale(run);
  var characterSpacing = getCharacterSpacing(run);
  return positions.map(function (position, i) {
    var isLast = i === positions.length;
    var xSpacing = isLast ? 0 : characterSpacing;
    return Object.assign({}, position, {
      xAdvance: position.xAdvance * runScale + xSpacing,
      yAdvance: position.yAdvance * runScale,
      xOffset: position.xOffset * runScale,
      yOffset: position.yOffset * runScale
    });
  });
};

/**
 * Create glyph run
 *
 * @param  {String}  string
 * @param  {Object}  run
 * @return {Object}  glyph run
 */
var layoutRun = function layoutRun(string) {
  return function (run) {
    var start = run.start,
      end = run.end,
      _run$attributes2 = run.attributes,
      attributes = _run$attributes2 === void 0 ? {} : _run$attributes2;
    var font = attributes.font;
    if (!font) return _extends__default["default"]({}, run, {
      glyphs: [],
      glyphIndices: [],
      positions: []
    });
    var runString = string.slice(start, end);
    var glyphRun = font.layout(runString);
    var positions = scalePositions(run, glyphRun.positions);
    var glyphIndices = resolve(glyphRun.glyphs);
    return _extends__default["default"]({}, run, {
      positions: positions,
      glyphIndices: glyphIndices,
      glyphs: glyphRun.glyphs
    });
  };
};

/**
 * Generate glyphs for single attributed string
 *
 * @param  {Object}  layout engines
 * @param  {Object}  layout options
 * @param  {Array}  attributed strings
 * @return {Array} attributed string with glyphs
 */
var generateGlyphs = function generateGlyphs() {
  return function (attributedString) {
    var runs = attributedString.runs.map(layoutRun(attributedString.string));
    return Object.assign({}, attributedString, {
      runs: runs
    });
  };
};

/**
 * Resolves yOffset for run
 *
 * @param  {Object}  run
 * @return {Object} run
 */
var resolveRunYOffset = function resolveRunYOffset(run) {
  var _run$attributes, _run$attributes$font, _run$attributes2;
  if (!run.positions) return run;
  var unitsPerEm = ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : (_run$attributes$font = _run$attributes.font) === null || _run$attributes$font === void 0 ? void 0 : _run$attributes$font.unitsPerEm) || 0;
  var yOffset = (((_run$attributes2 = run.attributes) === null || _run$attributes2 === void 0 ? void 0 : _run$attributes2.yOffset) || 0) * unitsPerEm;
  var positions = run.positions.map(function (p) {
    return Object.assign({}, p, {
      yOffset: yOffset
    });
  });
  return Object.assign({}, run, {
    positions: positions
  });
};

/**
 * Resolves yOffset for multiple paragraphs
 *
 * @param  {Object} layout engines
 * @param  {Object}  layout options
 * @param  {Array}  attributed strings (paragraphs)
 * @return {Array} attributed strings (paragraphs)
 */
var resolveYOffset = function resolveYOffset() {
  return function (attributedString) {
    var runs = attributedString.runs.map(resolveRunYOffset);
    return Object.assign({}, attributedString, {
      runs: runs
    });
  };
};

/**
 * Sort runs in ascending order
 *
 * @param  {Array}  runs
 * @return {Array} sorted runs
 */
var sort = function sort(runs) {
  return runs.sort(function (a, b) {
    return a.start - b.start || a.end - b.end;
  });
};

/**
 * Is run empty (start === end)
 *
 * @param  {Object}  run
 * @return {Object} is run empty
 */
var isEmpty = function isEmpty(run) {
  return run.start === run.end;
};

var sortPoints = function sortPoints(a, b) {
  return a[1] - b[1] || a[3] - b[3];
};
var generatePoints = function generatePoints(runs) {
  var result = runs.reduce(function (acc, run, i) {
    return acc.concat([['start', run.start, run.attributes, i], ['end', run.end, run.attributes, i]]);
  }, []);
  return result.sort(sortPoints);
};
var mergeRuns = function mergeRuns(runs) {
  return runs.reduce(function (acc, run) {
    var attributes = Object.assign({}, acc.attributes, run.attributes);
    return Object.assign({}, run, {
      attributes: attributes
    });
  }, {});
};
var groupEmptyRuns = function groupEmptyRuns(runs) {
  var groups = runs.reduce(function (acc, run) {
    if (!acc[run.start]) acc[run.start] = [];
    acc[run.start].push(run);
    return acc;
  }, {});
  return Object.values(groups);
};
var flattenEmptyRuns = function flattenEmptyRuns(runs) {
  return groupEmptyRuns(runs).map(mergeRuns);
};
var flattenRegularRuns = function flattenRegularRuns(runs) {
  var res = [];
  var points = generatePoints(runs);
  var start = -1;
  var attrs = {};
  var stack = [];
  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
      type = _points$i[0],
      offset = _points$i[1],
      attributes = _points$i[2];
    if (start !== -1 && start < offset) {
      res.push({
        start: start,
        end: offset,
        attributes: attrs
      });
    }
    if (type === 'start') {
      stack.push(attributes);
      attrs = Object.assign({}, attrs, attributes);
    } else {
      attrs = {};
      for (var j = 0; j < stack.length; j += 1) {
        if (stack[j] === attributes) {
          // eslint-disable-next-line no-plusplus
          stack.splice(j--, 1);
        } else {
          attrs = Object.assign({}, attrs, stack[j]);
        }
      }
    }
    start = offset;
  }
  return res;
};

/**
 * Flatten many runs
 *
 * @param  {Array}  runs
 * @return {Array} flatten runs
 */
var flatten = function flatten(runs) {
  if (runs === void 0) {
    runs = [];
  }
  var emptyRuns = flattenEmptyRuns(runs.filter(function (run) {
    return isEmpty(run);
  }));
  var regularRuns = flattenRegularRuns(runs.filter(function (run) {
    return !isEmpty(run);
  }));
  return sort(emptyRuns.concat(regularRuns));
};

/**
 * Returns empty attributed string
 *
 * @return {Object} empty attributed string
 */
var empty = function empty() {
  return {
    string: '',
    runs: []
  };
};

var omitFont = function omitFont(attributedString) {
  var runs = attributedString.runs.map(function (run) {
    return omit('font', run);
  });
  return Object.assign({}, attributedString, {
    runs: runs
  });
};

/**
 * Performs font substitution and script itemization on attributed string
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @return {Object} processed attributed string
 */
var preprocessRuns = function preprocessRuns(engines, options) {
  return function (attributedString) {
    if (fns.isNil(attributedString)) return empty();
    var string = attributedString.string;
    var fontSubstitution = engines.fontSubstitution,
      scriptItemizer = engines.scriptItemizer;
    var _omitFont = omitFont(attributedString),
      omittedFontRuns = _omitFont.runs;
    var _fontSubstitution = fontSubstitution(options)(attributedString),
      substitutedRuns = _fontSubstitution.runs;
    var _scriptItemizer = scriptItemizer(options)(attributedString),
      itemizationRuns = _scriptItemizer.runs;
    var runs = substitutedRuns.concat(itemizationRuns).concat(omittedFontRuns);
    return {
      string: string,
      runs: flatten(runs)
    };
  };
};

/**
 * Get attributed string start value
 *
 * @param  {Object}  attributed string
 * @return {number} start
 */
var start = function start(attributedString) {
  var runs = attributedString.runs;
  return runs.length === 0 ? 0 : runs[0].start;
};

/**
 * Get attributed string end value
 *
 * @param  {Object}  attributed string
 * @return {number} end
 */
var end = function end(attributedString) {
  var runs = attributedString.runs;
  return runs.length === 0 ? 0 : fns.last(runs).end;
};

/**
 * Get attributed string length
 *
 * @param  {Object}  glyph string
 * @return {number} end
 */
var length$1 = function length(attributedString) {
  return end(attributedString) - start(attributedString);
};

/**
 * Breaks attributed string into paragraphs
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @return {Array} attributed string array
 */
var splitParagraphs = function splitParagraphs() {
  return function (attributedString) {
    var res = [];
    var start = 0;
    var breakPoint = attributedString.string.indexOf('\n') + 1;
    while (breakPoint > 0) {
      res.push(slice(start, breakPoint, attributedString));
      start = breakPoint;
      breakPoint = attributedString.string.indexOf('\n', breakPoint) + 1;
    }
    if (start === 0) {
      res.push(attributedString);
    } else if (start < attributedString.string.length) {
      res.push(slice(start, length$1(attributedString), attributedString));
    }
    return res;
  };
};

/**
 * Return positions advance width
 *
 * @param  {Object}  positions
 * @return {number} advance width
 */
var advanceWidth$2 = function advanceWidth(positions) {
  return positions.reduce(function (acc, pos) {
    return acc + (pos.xAdvance || 0);
  }, 0);
};

/**
 * Return run advance width
 *
 * @param  {Object}  run
 * @return {number} advance width
 */
var advanceWidth$1 = function advanceWidth(run) {
  return advanceWidth$2(run.positions || []);
};

/**
 * Returns attributed string advancewidth
 *
 * @param {Object} attributed string
 * @return {number} advance width
 */
var advanceWidth = function advanceWidth(attributeString) {
  var reducer = function reducer(acc, run) {
    return acc + advanceWidth$1(run);
  };
  return attributeString.runs.reduce(reducer, 0);
};

var WHITE_SPACES_CODE = 32;

/**
 * Check if glyph is white space
 *
 * @param  {Object}  glyph
 * @return {Boolean}  is white space
 * */
var isWhiteSpace = function isWhiteSpace(glyph) {
  var codePoints = (glyph === null || glyph === void 0 ? void 0 : glyph.codePoints) || [];
  return codePoints.includes(WHITE_SPACES_CODE);
};

/**
 * Get white space leading positions
 *
 * @param  {Object}  run
 * @return {Array} white space leading positions
 */
var leadingPositions = function leadingPositions(run) {
  var glyphs = run.glyphs || [];
  var positions = run.positions || [];
  var leadingWhitespaces = glyphs.findIndex(function (g) {
    return !isWhiteSpace(g);
  });
  return positions.slice(0, leadingWhitespaces);
};

/**
 * Get run leading white space offset
 *
 * @param  {Object}  run
 * @return {number} leading white space offset
 */
var leadingOffset$1 = function leadingOffset(run) {
  var positions = leadingPositions(run);
  return positions.reduce(function (acc, pos) {
    return acc + (pos.xAdvance || 0);
  }, 0);
};

/**
 * Get attributed string leading white space offset
 *
 * @param  {Object}  attributed string
 * @return {number} leading white space offset
 */
var leadingOffset = function leadingOffset(attributedString) {
  var runs = attributedString.runs || [];
  return leadingOffset$1(runs[0]);
};

var reverse = function reverse(array) {
  return [].concat(array).reverse();
};

/**
 * Get white space trailing positions
 *
 * @param  {Object}  run
 * @return {Array} white space trailing positions
 */
var trailingPositions = function trailingPositions(run) {
  var glyphs = reverse(run.glyphs || []);
  var positions = reverse(run.positions || []);
  var leadingWhitespaces = glyphs.findIndex(function (g) {
    return !isWhiteSpace(g);
  });
  return positions.slice(0, leadingWhitespaces);
};

/**
 * Get run trailing white space offset
 *
 * @param  {Object}  run
 * @return {number} trailing white space offset
 */
var trailingOffset$1 = function trailingOffset(run) {
  var positions = trailingPositions(run);
  return positions.reduce(function (acc, pos) {
    return acc + (pos.xAdvance || 0);
  }, 0);
};

/**
 * Get attributed string trailing white space offset
 *
 * @param  {Object}  attributed string
 * @return {number} trailing white space offset
 */
var trailingOffset = function trailingOffset(attributedString) {
  var runs = attributedString.runs || [];
  return trailingOffset$1(fns.last(runs));
};

/**
 * Drop last char of run
 *
 * @param  {Object}  run
 * @return {boolean} run without last char
 */
var dropLast$1 = function dropLast(run) {
  return slice$1(0, run.end - run.start - 1, run);
};

/**
 * Drop last glyph
 *
 * @param {Object} attributed string
 * @return {Object} attributed string with new glyph
 */
var dropLast = function dropLast(attributeString) {
  var string = fns.dropLast(attributeString.string);
  var runs = fns.adjust(-1, dropLast$1, attributeString.runs);
  return Object.assign({}, attributeString, {
    string: string,
    runs: runs
  });
};

var ALIGNMENT_FACTORS = {
  center: 0.5,
  right: 1
};

/**
 * Remove new line char at the end of line if present
 *
 * @param  {Object}  line
 * @return {Object} line
 */
var removeNewLine = function removeNewLine(line) {
  return fns.last(line.string) === '\n' ? dropLast(line) : line;
};
var getOverflowLeft = function getOverflowLeft(line) {
  return leadingOffset(line) + (line.overflowLeft || 0);
};
var getOverflowRight = function getOverflowRight(line) {
  return trailingOffset(line) + (line.overflowRight || 0);
};

/**
 * Ignore whitespace at the start and end of a line for alignment
 *
 * @param  {Object}  line
 * @return {Object} line
 */
var adjustOverflow = function adjustOverflow(line) {
  var overflowLeft = getOverflowLeft(line);
  var overflowRight = getOverflowRight(line);
  var x = line.box.x - overflowLeft;
  var width = line.box.width + overflowLeft + overflowRight;
  var box = Object.assign({}, line.box, {
    x: x,
    width: width
  });
  return Object.assign({}, line, {
    box: box,
    overflowLeft: overflowLeft,
    overflowRight: overflowRight
  });
};

/**
 * Performs line justification by calling appropiate engine
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {string}  text align
 * @param  {Object}  line
 * @return {Object} line
 */
var justifyLine$1 = function justifyLine(engines, options, align) {
  return function (line) {
    var lineWidth = advanceWidth(line);
    var alignFactor = ALIGNMENT_FACTORS[align] || 0;
    var remainingWidth = Math.max(0, line.box.width - lineWidth);
    var shouldJustify = align === 'justify' || lineWidth > line.box.width;
    var x = line.box.x + remainingWidth * alignFactor;
    var box = Object.assign({}, line.box, {
      x: x
    });
    var newLine = Object.assign({}, line, {
      box: box
    });
    return shouldJustify ? engines.justification(options)(newLine) : newLine;
  };
};
var finalizeLine = function finalizeLine(line) {
  var lineAscent = 0;
  var lineDescent = 0;
  var lineHeight = 0;
  var lineXAdvance = 0;
  var runs = line.runs.map(function (run) {
    var height = height$1(run);
    var ascent = ascent$1(run);
    var descent$1 = descent(run);
    var xAdvance = advanceWidth$1(run);
    lineHeight = Math.max(lineHeight, height);
    lineAscent = Math.max(lineAscent, ascent);
    lineDescent = Math.max(lineDescent, descent$1);
    lineXAdvance += xAdvance;
    return Object.assign({}, run, {
      height: height,
      ascent: ascent,
      descent: descent$1,
      xAdvance: xAdvance
    });
  });
  return Object.assign({}, line, {
    runs: runs,
    height: lineHeight,
    ascent: lineAscent,
    descent: lineDescent,
    xAdvance: lineXAdvance
  });
};

/**
 * Finalize line by performing line justification
 * and text decoration (using appropiate engines)
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {Object}  line
 * @param  {number}  line index
 * @param  {Array}  total lines
 * @return {Object} line
 */
var finalizeBlock = function finalizeBlock(engines, options) {
  if (engines === void 0) {
    engines = {};
  }
  return function (line, i, lines) {
    var _line$runs, _line$runs$;
    var isLastFragment = i === lines.length - 1;
    var style = ((_line$runs = line.runs) === null || _line$runs === void 0 ? void 0 : (_line$runs$ = _line$runs[0]) === null || _line$runs$ === void 0 ? void 0 : _line$runs$.attributes) || {};
    var align = isLastFragment ? style.alignLastLine : style.align;
    return fns.compose(finalizeLine, engines.textDecoration(options), justifyLine$1(engines, options, align), adjustOverflow, removeNewLine)(line);
  };
};

/**
 * Finalize line block by performing line justification
 * and text decoration (using appropiate engines)
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {Array}  line blocks
 * @return {Array} line blocks
 */
var finalizeFragments = function finalizeFragments(engines, options) {
  return function (blocks) {
    var blockFinalizer = finalizeBlock(engines, options);
    return blocks.map(function (block) {
      return block.map(blockFinalizer);
    });
  };
};

var ATTACHMENT_CODE = 0xfffc; // 65532

var isReplaceGlyph = function isReplaceGlyph(glyph) {
  return glyph.codePoints.includes(ATTACHMENT_CODE);
};

/**
 * Resolve attachments of run
 *
 * @param  {Object}  run
 * @return {Object} run
 */
var resolveRunAttachments = function resolveRunAttachments(run) {
  var _run$attributes;
  if (!run.positions) return run;
  var glyphs = run.glyphs || [];
  var attachment = ((_run$attributes = run.attributes) === null || _run$attributes === void 0 ? void 0 : _run$attributes.attachment) || {};
  var positions = run.positions.map(function (position, i) {
    var glyph = glyphs[i];
    if (attachment && attachment.width && isReplaceGlyph(glyph)) {
      return Object.assign({}, position, {
        xAdvance: attachment.width
      });
    }
    return Object.assign({}, position);
  });
  return Object.assign({}, run, {
    positions: positions
  });
};

/**
 * Resolve attachments for multiple paragraphs
 *
 * @param  {Object} layout engines
 * @param  {Object}  layout options
 * @param  {Array}  attributed strings (paragraphs)
 * @return {Array} attributed strings (paragraphs)
 */
var resolveAttachments = function resolveAttachments() {
  return function (attributedString) {
    var runs = attributedString.runs.map(resolveRunAttachments);
    return Object.assign({}, attributedString, {
      runs: runs
    });
  };
};

var applyAttributes = function applyAttributes(a) {
  return {
    align: a.align || 'left',
    alignLastLine: a.alignLastLine || (a.align === 'justify' ? 'left' : a.align || 'left'),
    attachment: a.attachment || null,
    backgroundColor: a.backgroundColor || null,
    bidiLevel: a.bidiLevel || null,
    bullet: a.bullet || null,
    characterSpacing: a.characterSpacing || 0,
    color: a.color || 'black',
    features: a.features || [],
    fill: a.fill !== false,
    font: a.font || null,
    fontSize: a.fontSize || 12,
    hangingPunctuation: a.hangingPunctuation || false,
    hyphenationFactor: a.hyphenationFactor || 0,
    indent: a.indent || 0,
    justificationFactor: a.justificationFactor || 1,
    lineHeight: a.lineHeight || null,
    lineSpacing: a.lineSpacing || 0,
    link: a.link || null,
    marginLeft: a.marginLeft || a.margin || 0,
    marginRight: a.marginRight || a.margin || 0,
    opacity: a.opacity,
    paddingTop: a.paddingTop || a.padding || 0,
    paragraphSpacing: a.paragraphSpacing || 0,
    underline: a.underline || false,
    underlineColor: a.underlineColor || a.color || 'black',
    underlineStyle: a.underlineStyle || 'solid',
    script: a.script || null,
    shrinkFactor: a.shrinkFactor || 0,
    strike: a.strike || false,
    strikeColor: a.strikeColor || a.color || 'black',
    strikeStyle: a.strikeStyle || 'solid',
    stroke: a.stroke || false,
    verticalAlign: a.verticalAlign || null,
    wordSpacing: a.wordSpacing || 0,
    yOffset: a.yOffset || 0
  };
};

/**
 * Apply default style to run
 *
 * @param  {Object}  run
 * @return {Object} run with styles
 */
var applyRunStyles = function applyRunStyles(run) {
  var attributes = applyAttributes(run.attributes);
  return Object.assign({}, run, {
    attributes: attributes
  });
};

/**
 * Apply default attributes for an attributed string
 *
 * @param  {Object}  engines
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @return {Object} attributed string
 */
var applyDefaultStyles = function applyDefaultStyles() {
  return function (attributedString) {
    var string = attributedString.string || '';
    var runs = (attributedString.runs || []).map(applyRunStyles);
    return {
      string: string,
      runs: runs
    };
  };
};

/* eslint-disable no-restricted-syntax */

/**
 * Apply scaling and yOffset for verticalAlign 'sub' and 'super'.
 *
 * @param  {Object} layout options
 * @param  {Object} attributed string
 * @return {Object} attributed string
 */
var verticalAlignment = function verticalAlignment() {
  return function (attributedString) {
    attributedString.runs.forEach(function (run) {
      var attributes = run.attributes;
      var verticalAlign = attributes.verticalAlign;
      if (verticalAlign === 'sub') {
        attributes.yOffset = -0.2;
      } else if (verticalAlign === 'super') {
        attributes.yOffset = 0.4;
      }
    });
    return attributedString;
  };
};

/**
 * A LayoutEngine is the main object that performs text layout.
 * It accepts an AttributedString and a Container object
 * to layout text into, and uses several helper objects to perform
 * various layout tasks. These objects can be overridden to customize
 * layout behavior.
 *
 * @param  {Object}  engines
 * @param  {Object}  attributed string
 * @param  {Object}  container rect
 * @param  {Object}  layout options
 * @return {Array} paragraph blocks
 */
var layoutEngine = function layoutEngine(engines) {
  return function (attributedString, container, options) {
    if (options === void 0) {
      options = {};
    }
    var processParagraph = fns.compose(resolveYOffset(), resolveAttachments(), generateGlyphs(), verticalAlignment(), wrapWords(engines, options));
    var processParagraphs = function processParagraphs(paragraphs) {
      return paragraphs.map(processParagraph);
    };
    return fns.compose(finalizeFragments(engines, options), typesetter(engines, options, container), processParagraphs, splitParagraphs(), preprocessRuns(engines, options), applyDefaultStyles())(attributedString);
  };
};

/* eslint-disable no-plusplus */
var INFINITY = 10000;
var getNextBreakpoint = function getNextBreakpoint(subnodes, widths, lineNumber) {
  var position = null;
  var minimumBadness = Infinity;
  var sum = {
    width: 0,
    stretch: 0,
    shrink: 0
  };
  var lineLength = widths[Math.min(lineNumber, widths.length - 1)];
  var calculateRatio = function calculateRatio(node) {
    if (sum.width < lineLength) {
      return sum.stretch - node.stretch > 0 ? (lineLength - sum.width) / sum.stretch : INFINITY;
    }
    if (sum.width > lineLength) {
      return sum.shrink - node.shrink > 0 ? (lineLength - sum.width) / sum.shrink : INFINITY;
    }
    return 0;
  };
  for (var i = 0; i < subnodes.length; i += 1) {
    var node = subnodes[i];
    if (node.type === 'box') {
      sum.width += node.width;
    } else if (node.type === 'glue') {
      sum.width += node.width;
      sum.stretch += node.stretch;
      sum.shrink += node.shrink;
    }
    if (sum.width - sum.shrink > lineLength) {
      if (position === null) {
        var j = i === 0 ? i + 1 : i;
        while (j < subnodes.length && (subnodes[j].type === 'glue' || subnodes[j].type === 'penalty')) {
          j++;
        }
        position = j - 1;
      }
      break;
    }
    if (node.type === 'penalty' || node.type === 'glue') {
      var ratio = calculateRatio(node);
      var penalty = node.type === 'penalty' ? node.penalty : 0;
      var badness = 100 * Math.pow(Math.abs(ratio), 3) + penalty;
      if (minimumBadness >= badness) {
        position = i;
        minimumBadness = badness;
      }
    }
  }
  return sum.width - sum.shrink > lineLength ? position : null;
};
var applyBestFit = function applyBestFit(nodes, widths) {
  var count = 0;
  var lineNumber = 0;
  var subnodes = nodes;
  var breakpoints = [{
    position: 0
  }];
  while (subnodes.length > 0) {
    var breakpoint = getNextBreakpoint(subnodes, widths, lineNumber);
    if (breakpoint !== null) {
      count += breakpoint;
      breakpoints.push({
        position: count
      });
      subnodes = subnodes.slice(breakpoint + 1, subnodes.length);
      count++;
      lineNumber++;
    } else {
      subnodes = [];
    }
  }
  return breakpoints;
};

/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
var Node = /*#__PURE__*/function () {
  function Node(data) {
    this.prev = null;
    this.next = null;
    this.data = data;
  }
  var _proto = Node.prototype;
  _proto.toString = function toString() {
    return this.data.toString();
  };
  return Node;
}();
var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    this.head = null;
    this.tail = null;
    this.listSize = 0;
  }
  var _proto2 = LinkedList.prototype;
  _proto2.isLinked = function isLinked(node) {
    return !(node && node.prev === null && node.next === null && this.tail !== node && this.head !== node || this.isEmpty());
  };
  _proto2.size = function size() {
    return this.listSize;
  };
  _proto2.isEmpty = function isEmpty() {
    return this.listSize === 0;
  };
  _proto2.first = function first() {
    return this.head;
  };
  _proto2.last = function last() {
    return this.last;
  };
  _proto2.toString = function toString() {
    return this.toArray().toString();
  };
  _proto2.toArray = function toArray() {
    var node = this.head;
    var result = [];
    while (node !== null) {
      result.push(node);
      node = node.next;
    }
    return result;
  };
  _proto2.forEach = function forEach(fun) {
    var node = this.head;
    while (node !== null) {
      fun(node);
      node = node.next;
    }
  };
  _proto2.contains = function contains(n) {
    var node = this.head;
    if (!this.isLinked(n)) {
      return false;
    }
    while (node !== null) {
      if (node === n) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  _proto2.at = function at(i) {
    var node = this.head;
    var index = 0;
    if (i >= this.listLength || i < 0) {
      return null;
    }
    while (node !== null) {
      if (i === index) {
        return node;
      }
      node = node.next;
      index += 1;
    }
    return null;
  };
  _proto2.insertAfter = function insertAfter(node, newNode) {
    if (!this.isLinked(node)) {
      return this;
    }
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next === null) {
      this.tail = newNode;
    } else {
      node.next.prev = newNode;
    }
    node.next = newNode;
    this.listSize += 1;
    return this;
  };
  _proto2.insertBefore = function insertBefore(node, newNode) {
    if (!this.isLinked(node)) {
      return this;
    }
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev === null) {
      this.head = newNode;
    } else {
      node.prev.next = newNode;
    }
    node.prev = newNode;
    this.listSize += 1;
    return this;
  };
  _proto2.push = function push(node) {
    if (this.head === null) {
      this.unshift(node);
    } else {
      this.insertAfter(this.tail, node);
    }
    return this;
  };
  _proto2.unshift = function unshift(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      node.prev = null;
      node.next = null;
      this.listSize += 1;
    } else {
      this.insertBefore(this.head, node);
    }
    return this;
  };
  _proto2.remove = function remove(node) {
    if (!this.isLinked(node)) {
      return this;
    }
    if (node.prev === null) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }
    if (node.next === null) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
    this.listSize -= 1;
    return this;
  };
  _proto2.pop = function pop() {
    var node = this.tail;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.listSize -= 1;
    node.prev = null;
    node.next = null;
    return node;
  };
  _proto2.shift = function shift() {
    var node = this.head;
    this.head.next.prev = null;
    this.head = this.head.next;
    this.listSize -= 1;
    node.prev = null;
    node.next = null;
    return node;
  };
  return LinkedList;
}();
LinkedList.Node = Node;

/* eslint-disable no-restricted-properties */

/**
 * @preserve Knuth and Plass line breaking algorithm in JavaScript
 *
 * Licensed under the new BSD License.
 * Copyright 2009-2010, Bram Stein
 * All rights reserved.
 */
var linebreak = function linebreak(nodes, lines, settings) {
  var options = {
    demerits: {
      line: settings && settings.demerits && settings.demerits.line || 10,
      flagged: settings && settings.demerits && settings.demerits.flagged || 100,
      fitness: settings && settings.demerits && settings.demerits.fitness || 3000
    },
    tolerance: settings && settings.tolerance || 3
  };
  var activeNodes = new LinkedList();
  var sum = {
    width: 0,
    stretch: 0,
    shrink: 0
  };
  var lineLengths = lines;
  var breaks = [];
  var tmp = {
    data: {
      demerits: Infinity
    }
  };
  function breakpoint(position, demerits, ratio, line, fitnessClass, totals, previous) {
    return {
      position: position,
      demerits: demerits,
      ratio: ratio,
      line: line,
      fitnessClass: fitnessClass,
      totals: totals || {
        width: 0,
        stretch: 0,
        shrink: 0
      },
      previous: previous
    };
  }
  function computeCost(start, end, active, currentLine) {
    var width = sum.width - active.totals.width;
    var stretch = 0;
    var shrink = 0;
    // If the current line index is within the list of linelengths, use it, otherwise use
    // the last line length of the list.
    var lineLength = currentLine < lineLengths.length ? lineLengths[currentLine - 1] : lineLengths[lineLengths.length - 1];
    if (nodes[end].type === 'penalty') {
      width += nodes[end].width;
    }
    if (width < lineLength) {
      // Calculate the stretch ratio
      stretch = sum.stretch - active.totals.stretch;
      if (stretch > 0) {
        return (lineLength - width) / stretch;
      }
      return linebreak.infinity;
    }
    if (width > lineLength) {
      // Calculate the shrink ratio
      shrink = sum.shrink - active.totals.shrink;
      if (shrink > 0) {
        return (lineLength - width) / shrink;
      }
      return linebreak.infinity;
    }

    // perfect match
    return 0;
  }

  // Add width, stretch and shrink values from the current
  // break point up to the next box or forced penalty.
  function computeSum(breakPointIndex) {
    var result = {
      width: sum.width,
      stretch: sum.stretch,
      shrink: sum.shrink
    };
    for (var i = breakPointIndex; i < nodes.length; i += 1) {
      if (nodes[i].type === 'glue') {
        result.width += nodes[i].width;
        result.stretch += nodes[i].stretch;
        result.shrink += nodes[i].shrink;
      } else if (nodes[i].type === 'box' || nodes[i].type === 'penalty' && nodes[i].penalty === -linebreak.infinity && i > breakPointIndex) {
        break;
      }
    }
    return result;
  }

  // The main loop of the algorithm
  // eslint-disable-next-line no-shadow
  function mainLoop(node, index, nodes) {
    var active = activeNodes.first();
    var next = null;
    var ratio = 0;
    var demerits = 0;
    var candidates = [];
    var badness;
    var currentLine = 0;
    var tmpSum;
    var currentClass = 0;
    var fitnessClass;
    var candidate;
    var newNode;

    // The inner loop iterates through all the active nodes with line < currentLine and then
    // breaks out to insert the new active node candidates before looking at the next active
    // nodes for the next lines. The result of this is that the active node list is always
    // sorted by line number.
    while (active !== null) {
      candidates = [{
        demerits: Infinity
      }, {
        demerits: Infinity
      }, {
        demerits: Infinity
      }, {
        demerits: Infinity
      }];

      // Iterate through the linked list of active nodes to find new potential active nodes
      // and deactivate current active nodes.
      while (active !== null) {
        next = active.next;
        currentLine = active.data.line + 1;
        ratio = computeCost(active.data.position, index, active.data, currentLine);

        // Deactive nodes when the distance between the current active node and the
        // current node becomes too large (i.e. it exceeds the stretch limit and the stretch
        // ratio becomes negative) or when the current node is a forced break (i.e. the end
        // of the paragraph when we want to remove all active nodes, but possibly have a final
        // candidate active node---if the paragraph can be set using the given tolerance value.)
        if (ratio < -1 || node.type === 'penalty' && node.penalty === -linebreak.infinity) {
          activeNodes.remove(active);
        }

        // If the ratio is within the valid range of -1 <= ratio <= tolerance calculate the
        // total demerits and record a candidate active node.
        if (ratio >= -1 && ratio <= options.tolerance) {
          badness = 100 * Math.pow(Math.abs(ratio), 3);

          // Positive penalty
          if (node.type === 'penalty' && node.penalty >= 0) {
            demerits = Math.pow(options.demerits.line + badness, 2) + Math.pow(node.penalty, 2);
            // Negative penalty but not a forced break
          } else if (node.type === 'penalty' && node.penalty !== -linebreak.infinity) {
            demerits = Math.pow(options.demerits.line + badness, 2) - Math.pow(node.penalty, 2);
            // All other cases
          } else {
            demerits = Math.pow(options.demerits.line + badness, 2);
          }
          if (node.type === 'penalty' && nodes[active.data.position].type === 'penalty') {
            demerits += options.demerits.flagged * node.flagged * nodes[active.data.position].flagged;
          }

          // Calculate the fitness class for this candidate active node.
          if (ratio < -0.5) {
            currentClass = 0;
          } else if (ratio <= 0.5) {
            currentClass = 1;
          } else if (ratio <= 1) {
            currentClass = 2;
          } else {
            currentClass = 3;
          }

          // Add a fitness penalty to the demerits if the fitness classes of two adjacent lines
          // differ too much.
          if (Math.abs(currentClass - active.data.fitnessClass) > 1) {
            demerits += options.demerits.fitness;
          }

          // Add the total demerits of the active node to get the total demerits of this candidate node.
          demerits += active.data.demerits;

          // Only store the best candidate for each fitness class
          if (demerits < candidates[currentClass].demerits) {
            candidates[currentClass] = {
              active: active,
              demerits: demerits,
              ratio: ratio
            };
          }
        }
        active = next;

        // Stop iterating through active nodes to insert new candidate active nodes in the active list
        // before moving on to the active nodes for the next line.
        // TODO: The Knuth and Plass paper suggests a conditional for currentLine < j0. This means paragraphs
        // with identical line lengths will not be sorted by line number. Find out if that is a desirable outcome.
        // For now I left this out, as it only adds minimal overhead to the algorithm and keeping the active node
        // list sorted has a higher priority.
        if (active !== null && active.data.line >= currentLine) {
          break;
        }
      }
      tmpSum = computeSum(index);
      for (fitnessClass = 0; fitnessClass < candidates.length; fitnessClass += 1) {
        candidate = candidates[fitnessClass];
        if (candidate.demerits < Infinity) {
          newNode = new LinkedList.Node(breakpoint(index, candidate.demerits, candidate.ratio, candidate.active.data.line + 1, fitnessClass, tmpSum, candidate.active));
          if (active !== null) {
            activeNodes.insertBefore(active, newNode);
          } else {
            activeNodes.push(newNode);
          }
        }
      }
    }
  }

  // Add an active node for the start of the paragraph.
  activeNodes.push(new LinkedList.Node(breakpoint(0, 0, 0, 0, 0, undefined, null)));

  // eslint-disable-next-line no-shadow
  nodes.forEach(function (node, index, nodes) {
    if (node.type === 'box') {
      sum.width += node.width;
    } else if (node.type === 'glue') {
      if (index > 0 && nodes[index - 1].type === 'box') {
        mainLoop(node, index, nodes);
      }
      sum.width += node.width;
      sum.stretch += node.stretch;
      sum.shrink += node.shrink;
    } else if (node.type === 'penalty' && node.penalty !== linebreak.infinity) {
      mainLoop(node, index, nodes);
    }
  });
  if (activeNodes.size() !== 0) {
    // Find the best active node (the one with the least total demerits.)
    activeNodes.forEach(function (node) {
      if (node.data.demerits < tmp.data.demerits) {
        tmp = node;
      }
    });
    while (tmp !== null) {
      breaks.push({
        position: tmp.data.position,
        ratio: tmp.data.ratio
      });
      tmp = tmp.data.previous;
    }
    return breaks.reverse();
  }
  return [];
};
linebreak.infinity = 10000;
linebreak.glue = function (width, value, stretch, shrink) {
  return {
    type: 'glue',
    value: value,
    width: width,
    stretch: stretch,
    shrink: shrink
  };
};
linebreak.box = function (width, value, hyphenated) {
  if (hyphenated === void 0) {
    hyphenated = false;
  }
  return {
    type: 'box',
    width: width,
    value: value,
    hyphenated: hyphenated
  };
};
linebreak.penalty = function (width, penalty, flagged) {
  return {
    type: 'penalty',
    width: width,
    penalty: penalty,
    flagged: flagged
  };
};

/**
 * Add scalar to run
 *
 * @param  {number}  scalar
 * @param  {Object}  run
 * @return {Object} added run
 */
var add = function add(n, run) {
  var start = run.start + n;
  var end = run.end + n;
  return Object.assign({}, run, {
    start: start,
    end: end
  });
};

/**
 * Get run length
 *
 * @param  {Object}  run
 * @return {number} length
 */
var length = function length(run) {
  return run.end - run.start;
};

/**
 * Concats two runs into one
 *
 * @param  {Object}  first run
 * @param  {Object}  second run
 * @return {Object}  concatenated run
 */
var concat = function concat(runA, runB) {
  var end = runA.end + length(runB);
  var glyphs = (runA.glyphs || []).concat(runB.glyphs || []);
  var positions = (runA.positions || []).concat(runB.positions || []);
  var attributes = Object.assign({}, runA.attributes, runB.attributes);
  var runAIndices = runA.glyphIndices || [];
  var runALastIndex = fns.last(runAIndices) || 0;
  var runBIndices = (runB.glyphIndices || []).map(function (i) {
    return i + runALastIndex + 1;
  });
  var glyphIndices = normalize(runAIndices.concat(runBIndices));
  return Object.assign({}, runA, {
    end: end,
    glyphs: glyphs,
    positions: positions,
    attributes: attributes,
    glyphIndices: glyphIndices
  });
};

/**
 * Insert glyph to run in the given index
 *
 * @param  {number}  string index
 * @param  {Object}  glyph
 * @param  {Object}  run
 * @return {Object}  run with glyph
 */
var insertGlyph$1 = function insertGlyph(index, glyph, run) {
  if (!glyph) return run;

  // Split resolves ligature splitting in case new glyph breaks some
  var leadingRun = slice$1(0, index, run);
  var trailingRun = slice$1(index, Infinity, run);
  return concat(append$1(glyph, leadingRun), trailingRun);
};

/**
 * Insert either glyph or code point to run in the given index
 *
 * @param  {number}  string index
 * @param  {Object | number}  glyph | codePoint
 * @param  {Object}  run
 * @return {Object}  run with glyph
 */
var insert = function insert(index, value, run) {
  var font = getFont(run);
  var glyph = isNumber(value) ? fromCodePoint(value, font) : value;
  return insertGlyph$1(index, glyph, run);
};

/**
 * Get run index at char index
 *
 * @param  {number}  char index
 * @param  {Object}  attributedString
 * @return {number} run index
 */
var runIndexAt = function runIndexAt(n, string) {
  return runIndexAt$1(n, string.runs);
};

/**
 * Insert glyph into attributed string
 *
 * @param {number} index
 * @param {Object} glyph
 * @param {Object} attributed string
 * @return {Object} attributed string with new glyph
 */
var insertGlyph = function insertGlyph(index, glyph, attributedString) {
  var runIndex = runIndexAt(index, attributedString);

  // Add glyph to the end if run index invalid
  if (runIndex === -1) return append(glyph, attributedString);
  var codePoints = (glyph === null || glyph === void 0 ? void 0 : glyph.codePoints) || [];
  var string = attributedString.string.slice(0, index) + stringFromCodePoints(codePoints) + attributedString.string.slice(index);
  var runs = attributedString.runs.map(function (run, i) {
    if (i === runIndex) return insert(index - run.start, glyph, run);
    if (i > runIndex) return add(codePoints.length, run);
    return run;
  });
  return Object.assign({}, attributedString, {
    string: string,
    runs: runs
  });
};

/**
 * Advance width between two string indices
 *
 * @param  {number}  start glyph index
 * @param  {number}  end glyph index
 * @param  {Object}  run
 * @return {Object} advanced width run
 */
var advanceWidthBetween$1 = function advanceWidthBetween(start, end, run) {
  var runStart = run.start || 0;
  var glyphStartIndex = Math.max(0, glyphIndexAt(start - runStart, run));
  var glyphEndIndex = Math.max(0, glyphIndexAt(end - runStart, run));
  var positions = (run.positions || []).slice(glyphStartIndex, glyphEndIndex);
  return advanceWidth$2(positions);
};

/**
 * Advance width between start and end
 * Does not consider ligature splitting for the moment.
 * Check performance impact on supporting this
 *
 * @param  {number}  start offset
 * @param  {number}  end offset
 * @param  {Object}  attributedString
 * @return {number} advance width
 */
var advanceWidthBetween = function advanceWidthBetween(start, end, attributedString) {
  var runs = filter(start, end, attributedString.runs);
  return runs.reduce(function (acc, run) {
    return acc + advanceWidthBetween$1(start, end, run);
  }, 0);
};

var HYPHEN = 0x002d;
var TOLERANCE_STEPS = 5;
var TOLERANCE_LIMIT = 50;
var opts = {
  width: 3,
  stretch: 6,
  shrink: 9
};

/**
 * Slice attributed string to many lines
 *
 * @param {Object} attributed string
 * @param  {Array}  nodes
 * @param  {Array}  breaks
 * @return {Array} attributed strings
 */
var breakLines = function breakLines(string, nodes, breaks) {
  var start = 0;
  var end = null;
  var lines = breaks.reduce(function (acc, breakPoint) {
    var node = nodes[breakPoint.position];
    var prevNode = nodes[breakPoint.position - 1];

    // Last breakpoint corresponds to K&P mandatory final glue
    if (breakPoint.position === nodes.length - 1) return acc;
    var line;
    if (node.type === 'penalty') {
      end = prevNode.value.end;
      line = slice(start, end, string);
      line = insertGlyph(line.length, HYPHEN, line);
    } else {
      end = node.value.end;
      line = slice(start, end, string);
    }
    start = end;
    return [].concat(acc, [line]);
  }, []);

  // Last line
  lines.push(slice(start, string.string.length, string));
  return lines;
};

/**
 * Return Knuth & Plass nodes based on line and previously calculated syllables
 *
 * @param {Object} attributed string
 * @param  {Object}  attributed string
 * @param  {Object}  layout options
 * @return {Array} attributed strings
 */
var getNodes = function getNodes(attributedString, _ref, options) {
  var align = _ref.align;
  var start = 0;
  var hyphenWidth = 5;
  var syllables = attributedString.syllables;
  var hyphenPenalty = options.hyphenationPenalty || (align === 'justify' ? 100 : 600);
  var result = syllables.reduce(function (acc, s, index) {
    var width = advanceWidthBetween(start, start + s.length, attributedString);
    if (s.trim() === '') {
      var stretch = width * opts.width / opts.stretch;
      var shrink = width * opts.width / opts.shrink;
      var value = {
        start: start,
        end: start + s.length
      };
      acc.push(linebreak.glue(width, value, stretch, shrink));
    } else {
      var hyphenated = syllables[index + 1] !== ' ';
      var _value = {
        start: start,
        end: start + s.length
      };
      acc.push(linebreak.box(width, _value, hyphenated));
      if (syllables[index + 1] && hyphenated) {
        acc.push(linebreak.penalty(hyphenWidth, hyphenPenalty, 1));
      }
    }
    start += s.length;
    return acc;
  }, []);
  result.push(linebreak.glue(0, null, linebreak.infinity, 0));
  result.push(linebreak.penalty(0, -linebreak.infinity, 1));
  return result;
};
var getStyles = function getStyles(attributedString) {
  var _attributedString$run, _attributedString$run2;
  return ((_attributedString$run = attributedString.runs) === null || _attributedString$run === void 0 ? void 0 : (_attributedString$run2 = _attributedString$run[0]) === null || _attributedString$run2 === void 0 ? void 0 : _attributedString$run2.attributes) || {};
};

/**
 * Performs Knuth & Plass line breaking algorithm
 * Fallbacks to best fit algorithm if latter not successful
 *
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @param {Object} attributed string
 * @return {Array} attributed strings
 */
var linebreaker = function linebreaker(options) {
  return function (attributedString, availableWidths) {
    var tolerance = options.tolerance || 4;
    var style = getStyles(attributedString);
    var nodes = getNodes(attributedString, style, options);
    var breaks = linebreak(nodes, availableWidths, {
      tolerance: tolerance
    });

    // Try again with a higher tolerance if the line breaking failed.
    while (breaks.length === 0 && tolerance < TOLERANCE_LIMIT) {
      tolerance += TOLERANCE_STEPS;
      breaks = linebreak(nodes, availableWidths, {
        tolerance: tolerance
      });
    }
    if (breaks.length === 0 || breaks.length === 1 && breaks[0].position === 0) {
      breaks = applyBestFit(nodes, availableWidths);
    }
    return breakLines(attributedString, nodes, breaks.slice(1));
  };
};

var WHITESPACE_PRIORITY = 1;
var LETTER_PRIORITY = 2;
var EXPAND_WHITESPACE_FACTOR = {
  before: 0.5,
  after: 0.5,
  priority: WHITESPACE_PRIORITY,
  unconstrained: false
};
var EXPAND_CHAR_FACTOR = {
  before: 0.14453125,
  // 37/256
  after: 0.14453125,
  priority: LETTER_PRIORITY,
  unconstrained: false
};
var SHRINK_WHITESPACE_FACTOR = {
  before: -0.04296875,
  // -11/256
  after: -0.04296875,
  priority: WHITESPACE_PRIORITY,
  unconstrained: false
};
var SHRINK_CHAR_FACTOR = {
  before: -0.04296875,
  after: -0.04296875,
  priority: LETTER_PRIORITY,
  unconstrained: false
};
var getCharFactor = function getCharFactor(direction, options) {
  var expandCharFactor = options.expandCharFactor || {};
  var shrinkCharFactor = options.shrinkCharFactor || {};
  return direction === 'GROW' ? Object.assign({}, EXPAND_CHAR_FACTOR, expandCharFactor) : Object.assign({}, SHRINK_CHAR_FACTOR, shrinkCharFactor);
};
var getWhitespaceFactor = function getWhitespaceFactor(direction, options) {
  var expandWhitespaceFactor = options.expandWhitespaceFactor || {};
  var shrinkWhitespaceFactor = options.shrinkWhitespaceFactor || {};
  return direction === 'GROW' ? Object.assign({}, EXPAND_WHITESPACE_FACTOR, expandWhitespaceFactor) : Object.assign({}, SHRINK_WHITESPACE_FACTOR, shrinkWhitespaceFactor);
};
var factor = function factor(direction, options) {
  return function (glyphs) {
    var charFactor = getCharFactor(direction, options);
    var whitespaceFactor = getWhitespaceFactor(direction, options);
    var factors = [];
    for (var index = 0; index < glyphs.length; index += 1) {
      var f = void 0;
      var glyph = glyphs[index];
      if (isWhiteSpace(glyph)) {
        f = Object.assign({}, whitespaceFactor);
        if (index === glyphs.length - 1) {
          f.before = 0;
          if (index > 0) {
            factors[index - 1].after = 0;
          }
        }
      } else if (glyph.isMark && index > 0) {
        f = Object.assign({}, factors[index - 1]);
        f.before = 0;
        factors[index - 1].after = 0;
      } else {
        f = Object.assign({}, charFactor);
      }
      factors.push(f);
    }
    return factors;
  };
};
var getFactors = function getFactors(gap, line, options) {
  var direction = gap > 0 ? 'GROW' : 'SHRINK';
  var getFactor = factor(direction, options);
  var factors = line.runs.reduce(function (acc, run) {
    return acc.concat(getFactor(run.glyphs));
  }, []);
  factors[0].before = 0;
  factors[factors.length - 1].after = 0;
  return factors;
};

/* eslint-disable no-multi-assign */
var KASHIDA_PRIORITY = 0;
var NULL_PRIORITY = 3;
var getDistances = function getDistances(gap, factors) {
  var total = 0;
  var priorities = [];
  var unconstrained = [];
  for (var _priority = KASHIDA_PRIORITY; _priority <= NULL_PRIORITY; _priority += 1) {
    priorities[_priority] = unconstrained[_priority] = 0;
  }

  // sum the factors at each priority
  for (var j = 0; j < factors.length; j += 1) {
    var f = factors[j];
    var sum = f.before + f.after;
    total += sum;
    priorities[f.priority] += sum;
    if (f.unconstrained) {
      unconstrained[f.priority] += sum;
    }
  }

  // choose the priorities that need to be applied
  var highestPriority = -1;
  var highestPrioritySum = 0;
  var remainingGap = gap;
  var priority;
  for (priority = KASHIDA_PRIORITY; priority <= NULL_PRIORITY; priority += 1) {
    var prioritySum = priorities[priority];
    if (prioritySum !== 0) {
      if (highestPriority === -1) {
        highestPriority = priority;
        highestPrioritySum = prioritySum;
      }

      // if this priority covers the remaining gap, we're done
      if (Math.abs(remainingGap) <= Math.abs(prioritySum)) {
        priorities[priority] = remainingGap / prioritySum;
        unconstrained[priority] = 0;
        remainingGap = 0;
        break;
      }

      // mark that we need to use 100% of the adjustment from
      // this priority, and subtract the space that it consumes
      priorities[priority] = 1;
      remainingGap -= prioritySum;

      // if this priority has unconstrained glyphs, let them consume the remaining space
      if (unconstrained[priority] !== 0) {
        unconstrained[priority] = remainingGap / unconstrained[priority];
        remainingGap = 0;
        break;
      }
    }
  }

  // zero out remaining priorities (if any)
  for (var p = priority + 1; p <= NULL_PRIORITY; p += 1) {
    priorities[p] = 0;
    unconstrained[p] = 0;
  }

  // if there is still space left over, assign it to the highest priority that we saw.
  // this violates their factors, but it only happens in extreme cases
  if (remainingGap > 0 && highestPriority > -1) {
    priorities[highestPriority] = (highestPrioritySum + (gap - total)) / highestPrioritySum;
  }

  // create and return an array of distances to add to each glyph's advance
  var distances = [];
  for (var index = 0; index < factors.length; index += 1) {
    // the distance to add to this glyph is the sum of the space to add
    // after this glyph, and the space to add before the next glyph
    var _f = factors[index];
    var next = factors[index + 1];
    var dist = _f.after * priorities[_f.priority];
    if (next) {
      dist += next.before * priorities[next.priority];
    }

    // if this glyph is unconstrained, add the unconstrained distance as well
    if (_f.unconstrained) {
      dist += _f.after * unconstrained[_f.priority];
      if (next) {
        dist += next.before * unconstrained[next.priority];
      }
    }
    distances.push(dist);
  }
  return distances;
};

/**
 * Adjust run positions by given distances
 *
 * @param {Array} distances
 * @param {Object} line
 * @returns {Object} line
 */
var justifyLine = function justifyLine(distances, line) {
  var index = 0;
  for (var _iterator = _createForOfIteratorHelperLoose__default["default"](line.runs), _step; !(_step = _iterator()).done;) {
    var run = _step.value;
    for (var _iterator2 = _createForOfIteratorHelperLoose__default["default"](run.positions), _step2; !(_step2 = _iterator2()).done;) {
      var position = _step2.value;
      position.xAdvance += distances[index++];
    }
  }
  return line;
};

/**
 * A JustificationEngine is used by a Typesetter to perform line fragment
 * justification. This implementation is based on a description of Apple's
 * justification algorithm from a PDF in the Apple Font Tools package.
 *
 * //TODO: Make it immutable
 *
 * @param {Object} layout options
 * @param {Object} line
 * @returns {Object} line
 */
var justification = function justification(options) {
  return function (line) {
    var gap = line.box.width - advanceWidth(line);
    if (gap === 0) return; // Exact fit

    var factors = getFactors(gap, line, options);
    var distances = getDistances(gap, factors);
    return justifyLine(distances, line);
  };
};

/**
 * Returns attributed string ascent
 *
 * @param {Object} attributed string
 * @return {number} ascent
 */
var ascent = function ascent(attributeString) {
  var reducer = function reducer(acc, run) {
    return Math.max(acc, ascent$1(run));
  };
  return attributeString.runs.reduce(reducer, 0);
};

/* eslint-disable no-param-reassign */

// The base font size used for calculating underline thickness.
var BASE_FONT_SIZE = 12;

/**
 * A TextDecorationEngine is used by a Typesetter to generate
 * DecorationLines for a line fragment, including underlines
 * and strikes.
 */
var textDecoration = function textDecoration() {
  return function (lineFragment) {
    var x = lineFragment.overflowLeft || 0;
    var overflowRight = lineFragment.overflowRight || 0;
    var maxX = advanceWidth(lineFragment) - overflowRight;
    lineFragment.decorationLines = [];
    for (var i = 0; i < lineFragment.runs.length; i += 1) {
      var run = lineFragment.runs[i];
      var width = Math.min(maxX - x, advanceWidth$1(run));
      var thickness = Math.max(0.5, Math.floor(run.attributes.fontSize / BASE_FONT_SIZE));
      if (run.attributes.underline) {
        var rect = {
          x: x,
          y: ascent(lineFragment) + thickness * 2,
          width: width,
          height: thickness
        };
        var line = {
          rect: rect,
          opacity: run.attributes.opacity,
          color: run.attributes.underlineColor || 'black',
          style: run.attributes.underlineStyle || 'solid'
        };
        lineFragment.decorationLines.push(line);
      }
      if (run.attributes.strike) {
        var y = ascent(lineFragment) - ascent$1(run) / 3;
        var _rect = {
          x: x,
          y: y,
          width: width,
          height: thickness
        };
        var _line = {
          rect: _rect,
          opacity: run.attributes.opacity,
          color: run.attributes.strikeColor || 'black',
          style: run.attributes.strikeStyle || 'solid'
        };
        lineFragment.decorationLines.push(_line);
      }
      x += width;
    }
    return lineFragment;
  };
};

var ignoredScripts = ['Common', 'Inherited', 'Unknown'];

/**
 * Resolves unicode script in runs, grouping equal runs together
 *
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @return {Object} attributed string
 */
var scriptItemizer = function scriptItemizer() {
  return function (attributedString) {
    var string = attributedString.string;
    var lastScript = 'Unknown';
    var lastIndex = 0;
    var index = 0;
    var res = [];
    if (!string) return empty();
    for (var i = 0; i < string.length; i += 1) {
      var char = string[i];
      var codePoint = char.codePointAt();
      var script = unicode__default["default"].getScript(codePoint);
      if (script !== lastScript && !ignoredScripts.includes(script)) {
        if (lastScript !== 'Unknown') {
          res.push({
            start: lastIndex,
            end: index,
            attributes: {
              script: lastScript
            }
          });
        }
        lastIndex = index;
        lastScript = script;
      }
      index += char.length;
    }
    if (lastIndex < string.length) {
      res.push({
        start: lastIndex,
        end: string.length,
        attributes: {
          script: lastScript
        }
      });
    }
    return {
      string: string,
      runs: res
    };
  };
};

var SOFT_HYPHEN = "\xAD";
var hyphenator = hyphen__default["default"](pattern__default["default"]);
var splitHyphen = function splitHyphen(word) {
  return word.split(SOFT_HYPHEN);
};
var cache = {};
var getParts = function getParts(word) {
  var base = word.includes(SOFT_HYPHEN) ? word : hyphenator(word);
  return splitHyphen(base);
};
var wordHyphenation = function wordHyphenation() {
  return function (word) {
    var cacheKey = "_" + word;
    if (fns.isNil(word)) return [];
    if (cache[cacheKey]) return cache[cacheKey];
    cache[cacheKey] = getParts(word);
    return cache[cacheKey];
  };
};

var getFontSize = function getFontSize(value) {
  return value.attributes.fontSize || 12;
};

/**
 * Resolve font runs in an AttributedString, grouping equal
 * runs and performing font substitution where necessary.
 *
 * @param  {Object}  layout options
 * @param  {Object}  attributed string
 * @return {Object} attributed string
 */
var fontSubstitution = function fontSubstitution() {
  return function (attributedString) {
    var string = attributedString.string,
      runs = attributedString.runs;
    var lastFont = null;
    var lastIndex = 0;
    var index = 0;
    var res = [];
    if (!string) return empty();
    for (var _iterator = _createForOfIteratorHelperLoose__default["default"](runs), _step; !(_step = _iterator()).done;) {
      var run = _step.value;
      var _fontSize = getFontSize(run);
      var defaultFont = run.attributes.font;
      if (string.length === 0) {
        res.push({
          start: 0,
          end: 0,
          attributes: {
            font: defaultFont
          }
        });
        break;
      }
      for (var _iterator2 = _createForOfIteratorHelperLoose__default["default"](string.slice(run.start, run.end)), _step2; !(_step2 = _iterator2()).done;) {
        var char = _step2.value;
        var font = defaultFont;
        if (font !== lastFont) {
          if (lastFont) {
            res.push({
              start: lastIndex,
              end: index,
              attributes: {
                font: lastFont,
                scale: lastFont ? _fontSize / lastFont.unitsPerEm : 0
              }
            });
          }
          lastFont = font;
          lastIndex = index;
        }
        index += char.length;
      }
    }
    if (lastIndex < string.length) {
      var fontSize = getFontSize(fns.last(runs));
      res.push({
        start: lastIndex,
        end: string.length,
        attributes: {
          font: lastFont,
          scale: lastFont ? fontSize / lastFont.unitsPerEm : 0
        }
      });
    }
    return {
      string: string,
      runs: res
    };
  };
};

exports["default"] = layoutEngine;
exports.fontSubstitution = fontSubstitution;
exports.justification = justification;
exports.linebreaker = linebreaker;
exports.scriptItemizer = scriptItemizer;
exports.textDecoration = textDecoration;
exports.wordHyphenation = wordHyphenation;


/***/ }),

/***/ 28326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(43259);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);

var E = {};
  E.ALIGN_AUTO = 0;
  E.ALIGN_FLEX_START = 1;
  E.ALIGN_CENTER = 2;
  E.ALIGN_FLEX_END = 3;
  E.ALIGN_STRETCH = 4;
  E.ALIGN_BASELINE = 5;
  E.ALIGN_SPACE_BETWEEN = 6;
  E.ALIGN_SPACE_AROUND = 7;
  E.DIMENSION_WIDTH = 0;
  E.DIMENSION_HEIGHT = 1;
  E.DIRECTION_INHERIT = 0;
  E.DIRECTION_LTR = 1;
  E.DIRECTION_RTL = 2;
  E.DISPLAY_FLEX = 0;
  E.DISPLAY_NONE = 1;
  E.EDGE_LEFT = 0;
  E.EDGE_TOP = 1;
  E.EDGE_RIGHT = 2;
  E.EDGE_BOTTOM = 3;
  E.EDGE_START = 4;
  E.EDGE_END = 5;
  E.EDGE_HORIZONTAL = 6;
  E.EDGE_VERTICAL = 7;
  E.EDGE_ALL = 8;
  E.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0;
  E.EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE = 1;
  E.EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN = 2;
  E.FLEX_DIRECTION_COLUMN = 0;
  E.FLEX_DIRECTION_COLUMN_REVERSE = 1;
  E.FLEX_DIRECTION_ROW = 2;
  E.FLEX_DIRECTION_ROW_REVERSE = 3;
  E.GUTTER_COLUMN = 0;
  E.GUTTER_ROW = 1;
  E.GUTTER_ALL = 2;
  E.JUSTIFY_FLEX_START = 0;
  E.JUSTIFY_CENTER = 1;
  E.JUSTIFY_FLEX_END = 2;
  E.JUSTIFY_SPACE_BETWEEN = 3;
  E.JUSTIFY_SPACE_AROUND = 4;
  E.JUSTIFY_SPACE_EVENLY = 5;
  E.LOG_LEVEL_ERROR = 0;
  E.LOG_LEVEL_WARN = 1;
  E.LOG_LEVEL_INFO = 2;
  E.LOG_LEVEL_DEBUG = 3;
  E.LOG_LEVEL_VERBOSE = 4;
  E.LOG_LEVEL_FATAL = 5;
  E.MEASURE_MODE_UNDEFINED = 0;
  E.MEASURE_MODE_EXACTLY = 1;
  E.MEASURE_MODE_AT_MOST = 2;
  E.NODE_TYPE_DEFAULT = 0;
  E.NODE_TYPE_TEXT = 1;
  E.OVERFLOW_VISIBLE = 0;
  E.OVERFLOW_HIDDEN = 1;
  E.OVERFLOW_SCROLL = 2;
  E.POSITION_TYPE_STATIC = 0;
  E.POSITION_TYPE_RELATIVE = 1;
  E.POSITION_TYPE_ABSOLUTE = 2;
  E.PRINT_OPTIONS_LAYOUT = 1;
  E.PRINT_OPTIONS_STYLE = 2;
  E.PRINT_OPTIONS_CHILDREN = 4;
  E.UNIT_UNDEFINED = 0;
  E.UNIT_POINT = 1;
  E.UNIT_PERCENT = 2;
  E.UNIT_AUTO = 3;
  E.WRAP_NO_WRAP = 0;
  E.WRAP_WRAP = 1;
  E.WRAP_WRAP_REVERSE = 2;
var rE = E;
var AE = function AE(E) {
  function a(E, a, _) {
    var s = E[a];
    E[a] = function () {
      for (var _len = arguments.length, E = new Array(_len), _key = 0; _key < _len; _key++) {
        E[_key] = arguments[_key];
      }
      return _.call.apply(_, [this, s].concat(E));
    };
  }
  var _loop = function _loop() {
    var _s;
    var _ = _arr[_i];
    var s = (_s = {}, _s[rE.UNIT_POINT] = E.Node.prototype[_], _s[rE.UNIT_PERCENT] = E.Node.prototype[_ + "Percent"], _s[rE.UNIT_AUTO] = E.Node.prototype[_ + "Auto"], _s);
    a(E.Node.prototype, _, function (E) {
      var _s$t, _s$t2;
      for (var _len2 = arguments.length, a = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        a[_key2 - 1] = arguments[_key2];
      }
      var e = a.pop();
      var t, N;
      if ("auto" === e) t = rE.UNIT_AUTO, N = void 0;else if ("object" == typeof e) t = e.unit, N = e.valueOf();else if (t = "string" == typeof e && e.endsWith("%") ? rE.UNIT_PERCENT : rE.UNIT_POINT, N = parseFloat(e), !Number.isNaN(e) && Number.isNaN(N)) throw new Error("Invalid value " + e + " for " + _);
      if (!s[t]) throw new Error("Failed to execute \"" + _ + "\": Unsupported unit '" + e + "'");
      return void 0 !== N ? (_s$t = s[t]).call.apply(_s$t, [this].concat(a, [N])) : (_s$t2 = s[t]).call.apply(_s$t2, [this].concat(a));
    });
  };
  for (var _i = 0, _arr = ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"]; _i < _arr.length; _i++) {
    _loop();
  }
  return a(E.Node.prototype, "setMeasureFunc", function (a, _) {
    return _ ? a.call(this, (s = _, E.MeasureCallback.implement({
      measure: function measure() {
        var _s2 = s.apply(void 0, arguments),
          a = _s2.width,
          _ = _s2.height;
        return {
          width: a != null ? a : NaN,
          height: _ != null ? _ : NaN
        };
      }
    }))) : this.unsetMeasureFunc();
    var s;
  }), a(E.Node.prototype, "setDirtiedFunc", function (a, _) {
    var s;
    a.call(this, (s = _, E.DirtiedCallback.implement({
      dirtied: s
    })));
  }), a(E.Config.prototype, "free", function () {
    E.Config.destroy(this);
  }), a(E.Node, "create", function (a, _) {
    return _ ? E.Node.createWithConfig(_) : E.Node.createDefault();
  }), a(E.Node.prototype, "free", function () {
    E.Node.destroy(this);
  }), a(E.Node.prototype, "freeRecursive", function () {
    for (var _E2 = 0, _a = this.getChildCount(); _E2 < _a; ++_E2) this.getChild(0).freeRecursive();
    this.free();
  }), a(E.Node.prototype, "calculateLayout", function (E, a, _, s) {
    if (a === void 0) {
      a = NaN;
    }
    if (_ === void 0) {
      _ = NaN;
    }
    if (s === void 0) {
      s = rE.DIRECTION_LTR;
    }
    return E.call(this, a, _, s);
  }), _extends__default["default"]({
    Config: E.Config,
    Node: E.Node
  }, rE);
};

var rr,
  er = (rr = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function (r) {
    if (r === void 0) {
      r = {};
    }
    var e, a, i;
    e || (e = void 0 !== r ? r : {}), e.ready = new Promise(function (r, e) {
      a = r, i = e;
    });
    var n = Object.assign({}, e),
      t = "";
    "undefined" != typeof document && document.currentScript && (t = document.currentScript.src), rr && (t = rr), t = 0 !== t.indexOf("blob:") ? t.substr(0, t.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
    var f,
      o = e.print || console.log.bind(console),
      c = e.printErr || console.warn.bind(console);
    function u() {}
    function b(r) {
      this.exports = function (r) {
        for (var e, a = new Uint8Array(123), i = 25; i >= 0; --i) a[48 + i] = 52 + i, a[65 + i] = i, a[97 + i] = 26 + i;
        function n(r, e, i) {
          for (var n, t, f = 0, o = e, c = i.length, u = e + (3 * c >> 2) - ("=" == i[c - 2]) - ("=" == i[c - 1]); f < c; f += 4) n = a[i.charCodeAt(f + 1)], t = a[i.charCodeAt(f + 2)], r[o++] = a[i.charCodeAt(f)] << 2 | n >> 4, o < u && (r[o++] = n << 4 | t >> 2), o < u && (r[o++] = t << 6 | a[i.charCodeAt(f + 3)]);
        }
        a[43] = 62, a[47] = 63;
        var t = new ArrayBuffer(16),
          f = new Int32Array(t),
          o = new Float32Array(t),
          c = new Float64Array(t);
        function u(r) {
          return f[r];
        }
        function b(r, e) {
          f[r] = e;
        }
        function s() {
          return c[0];
        }
        function A(r) {
          c[0] = r;
        }
        function k() {
          throw new Error("abort");
        }
        function l(r) {
          o[2] = r;
        }
        function d() {
          return o[2];
        }
        return function (r) {
          var a = r.a,
            i = a.a,
            t = i.buffer;
          i.grow = function (r) {
            r |= 0;
            var a = 0 | ia(),
              n = a + r | 0;
            if (a < n && n < 65536) {
              var u = new ArrayBuffer(w(n, 65536));
              new Int8Array(u).set(f), f = new Int8Array(u), o = new Int16Array(u), c = new Int32Array(u), v = new Uint8Array(u), h = new Uint16Array(u), p = new Uint32Array(u), m = new Float32Array(u), N = new Float64Array(u), t = u, i.buffer = t, e = v;
            }
            return a;
          };
          var f = new Int8Array(t),
            o = new Int16Array(t),
            c = new Int32Array(t),
            v = new Uint8Array(t),
            h = new Uint16Array(t),
            p = new Uint32Array(t),
            m = new Float32Array(t),
            N = new Float64Array(t),
            w = Math.imul,
            y = Math.fround,
            E = Math.abs,
            G = Math.clz32,
            R = Math.min,
            g = Math.max,
            Z = a.b,
            W = a.c,
            V = a.d,
            B = a.e,
            T = a.f,
            I = a.g,
            X = a.h,
            O = a.i,
            L = a.j,
            _ = a.k,
            F = a.l,
            C = a.m,
            S = a.n,
            P = a.o,
            Y = a.p,
            U = a.q,
            M = a.r,
            H = a.s,
            Q = a.t,
            z = a.u,
            j = a.v,
            D = a.w,
            x = a.x,
            J = a.y,
            K = a.z,
            q = a.A,
            $ = a.B,
            rr = a.C,
            er = a.D,
            ar = 73632,
            ir = 0;
          function nr(r, e, a, i, n, t, o, u, s, A, l, h, p, N) {
            var w,
              G = y(0),
              R = y(0),
              g = 0,
              Z = 0,
              W = 0,
              V = y(0),
              B = y(0),
              T = y(0),
              X = 0,
              O = 0,
              L = 0,
              _ = y(0),
              F = y(0),
              C = y(0),
              S = 0,
              P = y(0),
              Y = 0,
              U = y(0),
              M = y(0),
              H = 0,
              Q = 0,
              z = 0,
              j = 0,
              D = 0,
              x = y(0),
              J = 0,
              K = y(0),
              q = 0,
              $ = 0,
              rr = 0,
              er = 0,
              ir = y(0),
              nr = 0,
              tr = 0,
              fr = 0,
              cr = 0,
              br = y(0),
              lr = 0,
              dr = 0,
              vr = 0,
              hr = y(0),
              Nr = y(0),
              yr = 0,
              Er = y(0),
              Gr = y(0),
              Zr = y(0),
              _r = 0,
              Cr = 0,
              Sr = y(0),
              Pr = 0,
              Yr = y(0),
              Hr = y(0),
              jr = y(0),
              xr = y(0),
              Kr = 0,
              qr = 0,
              $r = 0,
              re = 0,
              ee = 0,
              ae = 0,
              ie = 0,
              ne = 0,
              te = 0,
              fe = y(0),
              oe = y(0);
            ar = w = ar - 384 | 0;
            r: {
              e: {
                a: {
                  if (!n || e == e) {
                    if (!t || a == a) {
                      if (c[(g = (s ? 0 : 4) + l | 0) >> 2] = c[g >> 2] + 1, Pr = (0 | i) <= 1 ? 1 : i, J = (g = 3 & c[r + 24 >> 2]) || Pr, f[r + 300 | 0] = 252 & v[r + 300 | 0] | 3 & J, g = r + 252 | 0, i = (1 != (0 | J)) << 3, B = Mr(r, lr = 2 == (0 | J) ? 3 : 2, o), m[g + i >> 2] = B, Z = g, g = (1 == (0 | J)) << 3, F = Ur(r, lr, o), m[Z + g >> 2] = F, _ = Mr(r, 0, o), m[r + 256 >> 2] = _, V = Ur(r, 0, o), m[r + 264 >> 2] = V, te = (W = r + 268 | 0) + i | 0, fe = zr(r, lr), m[te >> 2] = fe, te = g + W | 0, fe = Qr(r, lr), m[te >> 2] = fe, G = zr(r, 0), m[r + 272 >> 2] = G, T = Qr(r, 0), m[r + 280 >> 2] = T, te = (Z = i) + (i = r + 284 | 0) | 0, fe = Br(r, lr, o), m[te >> 2] = fe, te = i + g | 0, fe = Tr(r, lr, o), m[te >> 2] = fe, R = Br(r, 0, o), m[r + 288 >> 2] = R, P = Tr(r, 0, o), m[r + 296 >> 2] = P, B = y(B + F), F = y(_ + V), i = c[r + 8 >> 2]) {
                        if (_ = y(y(y(m[r + 284 >> 2] + m[r + 292 >> 2]) + m[r + 268 >> 2]) + m[r + 276 >> 2]), a = y(t ? a - F : NaN), G = y(y(R + P) + G), (e = R = y(n ? e - B : NaN)) == e && (e = (e = y(R - _)) == e ? Re(e, y(0)) : y(0)), B = y(G + T), G = a, a == a && (G = (G = y(a - B)) == G ? Re(G, y(0)) : y(0)), !(1 != (0 | n) | 1 != (0 | t))) {
                          e = (i = (e = ur(r, 2, R, o)) != e) | (G = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != G ? i ? G : e : Re(e, G), m[r + 516 >> 2] = e, e = (i = (e = ur(r, 0, a, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                          break r;
                        }
                        16 & v[r + 4 | 0] ? aa[0 | i](w + 24 | 0, r, e, n, G, t, 0) : aa[0 | i](w + 24 | 0, r, e, n, G, t), c[l + 20 >> 2] = c[l + 20 >> 2] + 1, c[24 + (i = (N << 2) + l | 0) >> 2] = c[i + 24 >> 2] + 1, e = y(_ + m[w + 24 >> 2]), e = (i = (e = ur(r, 2, n ? 2 == (0 | n) ? e : R : e, o)) != e) | (G = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != G ? i ? G : e : Re(e, G), m[r + 516 >> 2] = e, e = y(B + m[w + 28 >> 2]), e = (i = (e = ur(r, 0, t ? 2 == (0 | t) ? e : a : e, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                        break r;
                      }
                      if ((0 | (i = c[r + 556 >> 2])) == (0 | (N = c[r + 560 >> 2]))) {
                        F = y(a - F), e = (i = (e = ur(r, 2, y(-3 & n ? e - B : y(y(m[r + 284 >> 2] + m[r + 292 >> 2]) + m[r + 268 >> 2]) + m[r + 276 >> 2]), o)) != e) | (a = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != a ? i ? a : e : Re(e, a), m[r + 516 >> 2] = e, e = (i = (e = ur(r, 0, -3 & t ? F : y(y(y(R + P) + G) + T), u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                        break r;
                      }
                      if (!(s || (R = y(e - B), G = y(a - F), !(2 == (0 | n) & R <= y(0) | !(!(G <= y(0)) | 2 != (0 | t)) & G == G) & (1 != (0 | n) | 1 != (0 | t))))) {
                        e = (i = (e = ur(r, 2, R == R ? 2 == (0 | n) && R < y(0) ? y(0) : R : y(0), o)) != e) | (a = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != a ? i ? a : e : Re(e, a), m[r + 516 >> 2] = e, e = (i = (e = ur(r, 0, G != G || 2 == (0 | t) && G < y(0) ? y(0) : G, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                        break r;
                      }
                      for (er = (z = N - i | 0) >> 2; g = c[i >> 2], c[g + 552 >> 2] != (0 | r) && (W = c[r + 568 >> 2], g = Ir(c[W >> 2], v[W + 8 | 0], g, r, O, 0), c[i >> 2] = g, c[g + 552 >> 2] = r), O = O + 1 | 0, (0 | N) != (0 | (i = i + 4 | 0)););
                      f[r + 300 | 0] = 251 & v[r + 300 | 0], O = 3, i = (yr = c[r + 24 >> 2]) >>> 2 & 3;
                      i: {
                        n: {
                          t: {
                            if (2 == (0 | J)) {
                              N = 0;
                              f: switch (i - 2 | 0) {
                                case 0:
                                  break i;
                                case 1:
                                  break f;
                                default:
                                  break t;
                              }
                              O = 2;
                              break i;
                            }
                            if (O = 2, N = 0, i >>> 0 > 1) break n;
                          }
                          N = O;
                        }
                        O = i;
                      }
                      Yr = y(e - B), ir = y(y(Br(r, O, o) + zr(r, O)) + y(Tr(r, O, o) + Qr(r, O))), P = y(Br(r, N, o) + zr(r, N)), K = y(P + y(Tr(r, N, o) + Qr(r, N))), V = kr(r, 0, Yr, (q = O >>> 0 > 1) ? ir : K, o), U = kr(r, 1, Hr = y(a - F), q ? K : ir, u), M = q ? U : V, F = q ? V : U, nr = c[r + 560 >> 2], g = c[r + 556 >> 2];
                      i: if (1 == (0 | (Y = q ? n : t))) {
                        if ((0 | g) == (0 | nr)) break a;
                        for (i = 0, W = g;;) {
                          Z = i;
                          n: if (Dr(i = c[W >> 2])) {
                            if (X = 0, Z) break i;
                            if (!(Z = c[i + 552 >> 2])) break i;
                            t: {
                              if (!((a = m[i + 32 >> 2]) == a || (G = y(0), (a = m[i + 28 >> 2]) > y(0))) || (G = a, a == a)) {
                                if (y(E(G)) < y(9999999747378752e-20)) break i;
                                if (!Z) {
                                  a = y(0);
                                  break t;
                                }
                              }
                              if ((a = m[i + 36 >> 2]) != a) {
                                if (f[i + 4 | 0] < 0) {
                                  a = y(1);
                                  break t;
                                }
                                if (a = y(0), !((e = m[i + 28 >> 2]) < y(0))) break t;
                                a = y(-e);
                              }
                              if (a != a) break n;
                            }
                            if (y(E(a)) < y(9999999747378752e-20)) break i;
                          } else i = Z;
                          if (X = i, (0 | nr) == (0 | (W = W + 4 | 0))) break;
                        }
                      }
                      if ((0 | g) == (0 | nr)) break a;
                      for (j = (0 | J) <= 1 ? 1 : J, tr = (fr = V != V) | 1 != (0 | n), cr = U == U, dr = V == V, G = y(0);;) {
                        sr(L = c[g >> 2]);
                        i: if (4194304 & (W = c[L + 24 >> 2])) {
                          if (mr(L, 0), W = 1 | (i = v[L + 4 | 0]), f[L + 4 | 0] = W, !(4 & i)) break i;
                          f[L + 4 | 0] = 251 & W;
                        } else if (s && (Fr(L, (i = 3 & W) || j, F, M, V), W = c[L + 24 >> 2]), 131072 != (196608 & W)) {
                          if ((0 | X) != (0 | L)) {
                            Z = (vr = c[r + 24 >> 2]) >>> 2 & 3;
                            n: {
                              t: if (2 == (0 | J)) {
                                i = 3;
                                f: switch (Z - 2 | 0) {
                                  case 0:
                                    break n;
                                  case 1:
                                    break f;
                                  default:
                                    break t;
                                }
                                i = 2;
                                break n;
                              }
                              i = Z;
                            }
                            R = ($ = i >>> 0 > 1) ? V : U, a = y(0), e = m[L + 40 >> 2];
                            n: {
                              t: {
                                f: if (2139156720 != (0 | (Z = c[L + 40 >> 2]))) {
                                  if (2140081935 == (0 | Z)) break t;
                                  S = 4276;
                                  o: {
                                    if (2141891242 != (0 | Z)) {
                                      if (e == e) break o;
                                      S = 4268;
                                    }
                                    a = m[S >> 2];
                                    c: {
                                      u: switch (0 | (Z = c[S + 4 >> 2])) {
                                        case 0:
                                        case 3:
                                          break u;
                                        default:
                                          break c;
                                      }
                                      if (e = y(NaN), !(m[L + 28 >> 2] > y(0))) break n;
                                      Z = (S = f[L + 4 | 0] < 0) ? 3 : 1, b(2, D = S ? 2143289344 : 0), a = d();
                                    }
                                    switch (e = y(NaN), Z - 1 | 0) {
                                      case 0:
                                        break t;
                                      case 1:
                                        break f;
                                      default:
                                        break n;
                                    }
                                  }
                                  if (b(2, 536870912 + (-1073741825 & Z) | 0), a = d(), !(1073741824 & Z)) break t;
                                }
                                e = y(y(R * a) * y(.009999999776482582));
                                break n;
                              }
                              e = a;
                            }
                            a = m[L + 572 >> 2], Z = 0;
                            n: {
                              switch (0 | (Q = c[L + 576 >> 2])) {
                                case 0:
                                case 3:
                                  break n;
                              }
                              if (1 != (0 | Q) | (B = m[L + 572 >> 2]) != B) Z = 1, 2 != (0 | Q) | B != B || (Z = 0, a < y(0) || (Z = dr));else {
                                if (a < y(0)) break n;
                                Z = 1;
                              }
                            }
                            B = m[L + 580 >> 2], S = 0;
                            n: {
                              switch (0 | (H = c[L + 584 >> 2])) {
                                case 0:
                                case 3:
                                  break n;
                              }
                              if (1 != (0 | H) | (T = m[L + 580 >> 2]) != T) S = 1, 2 != (0 | H) | T != T || (S = 0, B < y(0) || (S = cr));else {
                                if (B < y(0)) break n;
                                S = 1;
                              }
                            }
                            n: {
                              t: if (e != e | R != R) {
                                if (Z & $) {
                                  switch (R = y(y(Br(L, 2, V) + zr(L, 2)) + y(Tr(L, 2, V) + Qr(L, 2))), e = y(NaN), Q - 1 | 0) {
                                    case 1:
                                      a = y(y(V * a) * y(.009999999776482582));
                                    case 0:
                                      if (R <= (e = a)) break t;
                                  }
                                  if (!(e == e | R == R)) {
                                    a = e;
                                    break t;
                                  }
                                  if (e < R) {
                                    a = R;
                                    break t;
                                  }
                                  a = e != e ? R : e;
                                } else if ($ | 1 ^ S) {
                                  if (c[w + 360 >> 2] = 2143289344, c[w + 24 >> 2] = 2143289344, D = 0, c[w + 356 >> 2] = 0, c[w + 352 >> 2] = 0, T = y(Mr(L, 2, V) + Ur(L, 2, V)), _ = Mr(L, 0, V), C = Ur(L, 0, V), R = y(NaN), rr = 0, e = y(NaN), Z) {
                                    f: {
                                      o: switch (Q - 1 | 0) {
                                        case 0:
                                          e = a;
                                          break f;
                                        case 1:
                                          break o;
                                        default:
                                          break f;
                                      }
                                      e = y(y(V * a) * y(.009999999776482582));
                                    }
                                    c[w + 356 >> 2] = 1, e = y(T + e), m[w + 24 >> 2] = e, rr = 1;
                                  }
                                  if (_ = y(_ + C), S) {
                                    a = y(NaN);
                                    f: {
                                      o: switch (H - 1 | 0) {
                                        case 0:
                                          a = B;
                                          break f;
                                        case 1:
                                          break o;
                                        default:
                                          break f;
                                      }
                                      a = y(y(U * B) * y(.009999999776482582));
                                    }
                                    c[w + 352 >> 2] = 1, R = y(_ + a), m[w + 360 >> 2] = R, D = 1;
                                  }
                                  Q = i >>> 0 < 2;
                                  f: {
                                    o: {
                                      c: {
                                        if (!(!$ & 2097152 == (0 | (H = 3145728 & vr)))) {
                                          if (fr | 2097152 == (0 | H)) break o;
                                          if (e != e) break c;
                                          break o;
                                        }
                                        if (fr | e == e) break f;
                                      }
                                      rr = 2, c[w + 356 >> 2] = 2, m[w + 24 >> 2] = V, e = V;
                                    }
                                    o: {
                                      if (!(!Q & 2097152 == (0 | H))) {
                                        if (2097152 == (0 | H) | U != U) break f;
                                        if (R != R) break o;
                                        break f;
                                      }
                                      if (R == R | U != U) break f;
                                    }
                                    D = 2, c[w + 352 >> 2] = 2, m[w + 360 >> 2] = U, R = U;
                                  }
                                  f: if (!(H = (a = m[L + 224 >> 2]) != a)) {
                                    if ($ | 1 != (0 | rr)) {
                                      if (Q | 1 != (0 | D)) break f;
                                      c[w + 356 >> 2] = 1, m[w + 24 >> 2] = y(y(R - _) * a) + T;
                                    } else c[w + 352 >> 2] = 1, m[w + 360 >> 2] = _ + y(y(e - T) / a);
                                    D = 1, rr = 1;
                                  }
                                  5 == (0 | (W = (W = W >>> 13 & 7) || vr >>> 10 & 7)) | 1 == (0 | rr) | $ | Z | tr | 4 != (0 | W) || (c[w + 356 >> 2] = 1, m[w + 24 >> 2] = V, H || (D = 1, c[w + 352 >> 2] = 1, m[w + 360 >> 2] = y(V - T) / a)), Q | 1 != (0 | t) | U != U | S | 4 != (0 | W) | 1 == (0 | D) || (c[w + 352 >> 2] = 1, m[w + 360 >> 2] = U, H || (c[w + 356 >> 2] = 1, m[w + 24 >> 2] = y(U - _) * a)), Vr(L, 2, V, V, w + 356 | 0, w + 24 | 0), Vr(L, 0, U, V, w + 352 | 0, w + 360 | 0), or(L, m[w + 24 >> 2], m[w + 360 >> 2], J, c[w + 356 >> 2], c[w + 352 >> 2], V, U, 0, 5, A, l, h, p), a = (W = (e = m[516 + (L + (c[4252 + (i << 2) >> 2] << 2) | 0) >> 2]) != e) | (a = y(y(Br(L, i, V) + zr(L, i)) + y(Tr(L, i, V) + Qr(L, i)))) != a ? W ? a : e : Re(e, a);
                                } else {
                                  switch (e = y(y(Br(L, 0, V) + zr(L, 0)) + y(Tr(L, 0, V) + Qr(L, 0))), a = y(NaN), H - 1 | 0) {
                                    case 1:
                                      B = y(y(U * B) * y(.009999999776482582));
                                    case 0:
                                      if (e <= (a = B)) break t;
                                  }
                                  if (a != a & e != e) break t;
                                  if (e > a) {
                                    a = e;
                                    break t;
                                  }
                                  a = a != a ? e : a;
                                }
                              } else {
                                if (a = m[L + 308 >> 2], (!v[c[L + 568 >> 2] + 20 | 0] | c[L + 304 >> 2] == (0 | p)) & a == a) break n;
                                if (!((a = y(y(Br(L, i, V) + zr(L, i)) + y(Tr(L, i, V) + Qr(L, i)))) <= e) & e < a) break t;
                                a = e;
                              }
                              m[L + 308 >> 2] = a;
                            }
                            c[L + 304 >> 2] = p;
                          } else c[X + 308 >> 2] = 0, c[X + 304 >> 2] = p, a = y(0);
                          G = y(G + y(a + y(Mr(L, O, V) + Ur(L, O, V))));
                        }
                        if ((0 | nr) == (0 | (g = g + 4 | 0))) break;
                      }
                      break e;
                    }
                    c[w >> 2] = 3023, Xr(r, w), De(), k();
                  }
                  c[w + 16 >> 2] = 3105, Xr(r, w + 16 | 0), De(), k();
                }
                G = y(0);
              }
              e = y(G + y(0)), Er = q ? u : o, hr = q ? o : u, z >>> 0 >= 5 && (e = y(y(pr(r, O, M) * y(er - 1 >>> 0)) + e)), i = e > F, nr = 786432 & yr, cr = 2 == (0 | Y) && nr && i ? 1 : Y, qr = (fr = 1 == (0 | (L = q ? t : n))) & (1 ^ s), q = O >>> 0 < 2, $r = -3 & L, vr = r + 208 | 0, H = 4220 + (t = N << 2) | 0, re = fr & !nr, ee = 1 != (0 | L) | s, $ = 4220 + (g = O << 2) | 0, dr = g + 4252 | 0, ae = (rr = M == M) << 1, Q = t + 4252 | 0, ie = !Y | !i, yr = w + 52 | 0, jr = pr(r, N, M), W = 0, i = 0, D = 0;
              e: {
                for (;;) {
                  if (S = i, Rr(w + 24 | 0, 0, 44), (0 | (i = c[r + 560 >> 2])) != (0 | (t = c[r + 556 >> 2]))) {
                    if ((0 | (i = i - t | 0)) < 0) break e;
                    g = pe(w + 360 | 0, i >> 2, 0, yr), i = c[w + 44 >> 2], t = c[w + 48 >> 2] - i | 0, t = wr(c[w + 364 >> 2] - t | 0, i, t), i = c[w + 44 >> 2], c[w + 364 >> 2] = i, c[w + 44 >> 2] = t, Z = c[w + 368 >> 2], X = c[w + 372 >> 2], t = c[w + 48 >> 2], c[w + 368 >> 2] = t, Y = c[w + 52 >> 2], c[w + 48 >> 2] = Z, c[w + 52 >> 2] = X, c[w + 372 >> 2] = Y, c[g >> 2] = i, (0 | i) != (0 | t) && (c[w + 368 >> 2] = t + (3 + (i - t | 0) & -4)), i && gr(i);
                  }
                  t = (X = c[r + 24 >> 2]) >>> 2 & 3;
                  a: {
                    i: if (2 == (0 | ((i = 3 & X) || Pr))) {
                      i = 3;
                      n: switch (t - 2 | 0) {
                        case 0:
                          break a;
                        case 1:
                          break n;
                        default:
                          break i;
                      }
                      i = 2;
                      break a;
                    }
                    i = t;
                  }
                  G = pr(r, i, V);
                  a: if (!((g = W) >>> 0 >= (Z = c[r + 560 >> 2]) - (t = c[r + 556 >> 2]) >> 2 >>> 0)) for (Y = 786432 & X, a = y(0);;) {
                    if (Z - t >> 2 >>> 0 <= g >>> 0) break e;
                    if (X = c[(g << 2) + t >> 2], !(4194304 & (z = c[X + 24 >> 2]) | 131072 == (196608 & z))) {
                      if (c[X + 548 >> 2] = S, e = Mr(X, i, V), R = Ur(X, i, V), t = c[w + 24 >> 2], B = (0 | g) == (0 | W) ? y(0) : G, e = y(e + R), T = ur(X, i, R = m[X + 308 >> 2], hr), t && !(!(y(B + y(e + y(a + T))) > F) | !Y)) break a;
                      if (c[w + 24 >> 2] = t + 1, B = y(B + y(e + T)), m[w + 28 >> 2] = B + m[w + 28 >> 2], Dr(X)) {
                        i: if (c[X + 552 >> 2]) {
                          if ((e = m[X + 32 >> 2]) != e && (e = (e = m[X + 28 >> 2]) > y(0) ? e : y(0)), m[w + 32 >> 2] = e + m[w + 32 >> 2], (e = m[X + 36 >> 2]) == e) break i;
                          if (f[X + 4 | 0] < 0) {
                            e = y(1);
                            break i;
                          }
                          if (e = y(0), !((T = m[X + 28 >> 2]) < y(0))) break i;
                          e = y(-T);
                        } else e = y(0), m[w + 32 >> 2] = m[w + 32 >> 2] + y(0);
                        m[w + 36 >> 2] = m[w + 36 >> 2] - y(e * R);
                      }
                      if ((0 | (t = c[w + 48 >> 2])) == c[w + 52 >> 2]) {
                        if ((Z = 1 + (z = (t = t - c[w + 44 >> 2] | 0) >> 2) | 0) >>> 0 >= 1073741824) break e;
                        j = t >>> 1 | 0, z = pe(w + 360 | 0, t >>> 0 >= 2147483644 ? 1073741823 : Z >>> 0 < j >>> 0 ? j : Z, z, yr), c[c[w + 368 >> 2] >> 2] = X, c[w + 368 >> 2] = c[w + 368 >> 2] + 4, t = c[w + 44 >> 2], Z = c[w + 48 >> 2] - t | 0, Z = wr(c[w + 364 >> 2] - Z | 0, t, Z), t = c[w + 44 >> 2], c[w + 364 >> 2] = t, c[w + 44 >> 2] = Z, X = c[w + 368 >> 2], j = c[w + 372 >> 2], Z = c[w + 48 >> 2], c[w + 368 >> 2] = Z, tr = c[w + 52 >> 2], c[w + 48 >> 2] = X, c[w + 52 >> 2] = j, c[w + 372 >> 2] = tr, c[z >> 2] = t, (0 | t) != (0 | Z) && (c[w + 368 >> 2] = Z + (3 + (t - Z | 0) & -4)), t && gr(t);
                      } else c[t >> 2] = X, c[w + 48 >> 2] = t + 4;
                      t = c[r + 556 >> 2], Z = c[r + 560 >> 2], a = y(a + B);
                    }
                    if (!((g = g + 1 | 0) >>> 0 < Z - t >> 2 >>> 0)) break;
                  }
                  !((C = m[w + 32 >> 2]) > y(0)) | !(C < y(1)) || (c[w + 32 >> 2] = 1065353216, C = y(1)), !((x = m[w + 36 >> 2]) > y(0)) | !(x < y(1)) || (c[w + 36 >> 2] = 1065353216, x = y(1)), c[w + 40 >> 2] = g, _ = m[w + 28 >> 2], Y = c[w + 24 >> 2], D && gr(D), B = m[w + 56 >> 2], z = c[w + 48 >> 2], D = c[w + 44 >> 2];
                  a: {
                    i: {
                      n: {
                        if (1 != (0 | cr)) {
                          a = y(0), e = m[vr >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[vr >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (e == e) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], e = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              e = y(y(a * o) * y(.009999999776482582));
                              break t;
                            }
                            e = a;
                          }
                          a = y(0), G = m[r + 216 >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[r + 216 >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (G == G) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], G = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              G = y(y(a * o) * y(.009999999776482582));
                              break t;
                            }
                            G = a;
                          }
                          a = y(0), R = m[r + 212 >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[r + 212 >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (R == R) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], T = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              T = y(y(a * u) * y(.009999999776482582));
                              break t;
                            }
                            T = a;
                          }
                          a = y(0), R = m[r + 220 >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[r + 220 >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (R == R) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], R = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              R = y(y(a * u) * y(.009999999776482582));
                              break t;
                            }
                            R = a;
                          }
                          if ((a = y(((i = O >>> 0 > 1) ? e : T) - ir)) == a & a > _) break n;
                          if ((a = y((i ? G : R) - ir)) == a & a < _) break n;
                          if (!v[c[r + 568 >> 2] + 11 | 0]) {
                            if (a = _, !c[r + 552 >> 2] | C == y(0)) break i;
                            t: {
                              if ((e = m[r + 32 >> 2]) != e) {
                                if (!((a = m[r + 28 >> 2]) > y(0))) break t;
                              } else a = e;
                              if (a != a) {
                                a = F;
                                break i;
                              }
                              e = m[r + 32 >> 2];
                            }
                            if (e != e && (a = _, !((e = m[r + 28 >> 2]) > y(0)))) break i;
                            if (a = F, e != y(0)) break i;
                            a = _;
                            break i;
                          }
                        }
                        a = F;
                      }
                      if (a == a) {
                        B = y(a - _);
                        break a;
                      }
                    }
                    _ < y(0) && (B = y(-_));
                  }
                  if (F = a, !qr) {
                    if ((0 | D) != (0 | z)) {
                      for (R = y(0), t = D;;) {
                        a = ur(i = c[t >> 2], O, _ = m[i + 308 >> 2], hr);
                        a: if (B < y(0)) {
                          if ((X = c[i + 552 >> 2]) ? (G = m[i + 36 >> 2]) != G && (f[i + 4 | 0] < 0 ? G = y(1) : (G = y(0), (e = m[i + 28 >> 2]) < y(0) && (G = y(-e)))) : G = y(0), !((e = y(a * y(-G))) > y(0) | e < y(0))) break a;
                          if ((G = y(y(y(B / x) * e) + a)) != G | (e = (Z = (e = ur(i, O, G, F)) != e) | (T = y(y(Br(i, O, V) + zr(i, O)) + y(Tr(i, O, V) + Qr(i, O)))) != T ? Z ? T : e : Re(e, T)) != e | e == G) break a;
                          e = y(e - a), X ? (a = m[i + 36 >> 2]) != a && (f[i + 4 | 0] < 0 ? a = y(1) : (a = y(0), (G = m[i + 28 >> 2]) < y(0) && (a = y(-G)))) : a = y(0), R = y(R + e), x = y(y(a * _) + x);
                        } else !(B > y(0)) | !c[i + 552 >> 2] || ((G = m[i + 32 >> 2]) == G || (G = m[i + 28 >> 2]) > y(0)) && G < y(0) | G > y(0) && ((T = y(y(y(B / C) * G) + a)) != T | (e = (Z = (e = ur(i, O, T, F)) != e) | (_ = y(y(Br(i, O, V) + zr(i, O)) + y(Tr(i, O, V) + Qr(i, O)))) != _ ? Z ? _ : e : Re(e, _)) != e | e == T || (C = y(C - G), R = y(R + y(e - a))));
                        if ((0 | z) == (0 | (t = t + 4 | 0))) break;
                      }
                      for (_ = y(B - R), Gr = y(_ / x), Zr = y(_ / C), Cr = !(j = fr & (!(12 & v[r + 26 | 0]) | ie)), tr = c[Q >> 2], T = y(0), Z = D;;) {
                        a = ur(t = c[Z >> 2], O, m[t + 308 >> 2], hr);
                        a: {
                          if (_ < y(0)) {
                            if (c[t + 552 >> 2] ? (e = m[t + 36 >> 2]) != e && (f[t + 4 | 0] < 0 ? e = y(1) : (e = y(0), (G = m[t + 28 >> 2]) < y(0) && (e = y(-G)))) : e = y(0), G = a, (e = y(a * y(-e))) == y(0)) break a;
                            e = x == y(0) ? y(a + e) : y(y(Gr * e) + a);
                          } else {
                            if (G = a, !(_ > y(0)) | !c[t + 552 >> 2]) break a;
                            if ((e = m[t + 32 >> 2]) != e && !((e = m[t + 28 >> 2]) > y(0))) break a;
                            if (!(e < y(0) | e > y(0))) break a;
                            e = y(y(Zr * e) + a);
                          }
                          G = (i = (e = ur(t, O, e, F)) != e) | (G = y(y(Br(t, O, V) + zr(t, O)) + y(Tr(t, O, V) + Qr(t, O)))) != G ? i ? G : e : Re(e, G);
                        }
                        if (e = Mr(t, O, V), R = Ur(t, O, V), C = Mr(t, N, V), Sr = Ur(t, N, V), R = y(e + R), xr = y(G + R), m[w + 352 >> 2] = xr, c[w + 344 >> 2] = 1, C = y(C + Sr), (e = m[t + 224 >> 2]) != e) {
                          e = m[572 + (X = t + (tr << 3) | 0) >> 2];
                          a: {
                            i: {
                              n: {
                                t: {
                                  f: {
                                    o: {
                                      c: {
                                        u: {
                                          if (rr) {
                                            R = m[X + 572 >> 2];
                                            b: {
                                              s: {
                                                A: {
                                                  switch (0 | (i = c[X + 576 >> 2])) {
                                                    case 0:
                                                    case 3:
                                                      break A;
                                                  }
                                                  if (!(1 != (0 | i) | e != e)) {
                                                    if (!(j & R < y(0))) break b;
                                                    break s;
                                                  }
                                                  if (!(Cr | !(R < y(0)) | 2 != (0 | i) | e != e)) break s;
                                                  break b;
                                                }
                                                if (!j) break b;
                                              }
                                              if ((X = c[t + 24 >> 2] >>> 13 & 7) || (X = c[r + 24 >> 2] >>> 10 & 7), 4 == (0 | X) && (ve(w + 24 | 0, t, N), 3 != c[w + 28 >> 2] && (de(w + 360 | 0, t, N), 3 != c[w + 364 >> 2]))) break u;
                                            }
                                            e = R;
                                          } else R = m[X + 572 >> 2], i = c[X + 576 >> 2];
                                          switch (0 | i) {
                                            case 0:
                                            case 3:
                                              break o;
                                            default:
                                              break c;
                                          }
                                        }
                                        c[w + 348 >> 2] = 1;
                                        break i;
                                      }
                                      if (!(1 != (0 | i) | e != e)) {
                                        if ((e = R) < y(0)) break o;
                                        break n;
                                      }
                                      if (2 != (0 | i) | e != e) break f;
                                      if (M == M && !(R < y(0))) break t;
                                    }
                                    c[w + 348 >> 2] = ae;
                                    break i;
                                  }
                                  e = y(NaN);
                                  f: switch (i - 1 | 0) {
                                    case 1:
                                      break t;
                                    case 0:
                                      break f;
                                    default:
                                      break n;
                                  }
                                  e = R;
                                  break n;
                                }
                                e = y(y(M * R) * y(.009999999776482582));
                              }
                              e = y(C + e), m[w + 356 >> 2] = e, c[w + 348 >> 2] = (fr | 2 != (0 | i)) & e == e;
                              break a;
                            }
                            m[w + 356 >> 2] = M;
                          }
                          e = R;
                        } else c[w + 348 >> 2] = 1, R = y(xr - R), m[w + 356 >> 2] = C + y(q ? R * e : R / e), R = m[572 + (X = t + (tr << 3) | 0) >> 2], i = c[X + 576 >> 2], e = m[X + 572 >> 2];
                        Vr(t, O, F, V, w + 344 | 0, w + 352 | 0), Vr(t, N, M, V, w + 348 | 0, w + 356 | 0);
                        a: {
                          i: {
                            n: {
                              switch (0 | i) {
                                case 0:
                                case 3:
                                  break n;
                              }
                              if (!(1 != (0 | i) | e != e)) {
                                if (R < y(0)) break n;
                                break i;
                              }
                              if (2 != (0 | i) | e != e) break i;
                              if (!(R < y(0)) && (X = 0, rr)) break a;
                            }
                            if (X = 0, (i = c[t + 24 >> 2] >>> 13 & 7) || (i = c[r + 24 >> 2] >>> 10 & 7), 4 != (0 | i)) break a;
                            if (ve(w + 24 | 0, t, N), 3 == c[w + 28 >> 2]) break a;
                            de(w + 360 | 0, t, N), X = 3 != c[w + 364 >> 2];
                            break a;
                          }
                          X = 0;
                        }
                        e = m[w + 352 >> 2], R = m[w + 356 >> 2], C = (i = O >>> 0 > 1) ? e : R, e = i ? R : e, _r = c[w + 344 >> 2], Kr = c[w + 348 >> 2], ne = i ? _r : Kr, _r = i ? Kr : _r, i = (1 ^ X) & s, or(t, C, e, 3 & v[r + 300 | 0], ne, _r, V, U, i, i ? 4 : 7, A, l, h, p), T = y(T + y(G - a));
                        a: {
                          if (4 & (i = v[r + 300 | 0])) X = 251 & i;else if (X = 251 & i, i = 0, !(4 & v[t + 300 | 0])) break a;
                          i = 4;
                        }
                        if (f[r + 300 | 0] = i | X, (0 | z) == (0 | (Z = Z + 4 | 0))) break;
                      }
                    } else T = y(0);
                    B = y(B - T);
                  }
                  i = v[r + 300 | 0], f[r + 300 | 0] = 251 & i | (B < y(0) ? 4 : 4 & i), R = y(Br(r, O, o) + zr(r, O)), Gr = y(Tr(r, O, o) + Qr(r, O)), _ = pr(r, O, o);
                  a: if (!(B > y(0)) | 2 != (0 | cr)) T = B;else {
                    T = y(0), a = y(0);
                    i: {
                      n: {
                        i = vr + (c[dr >> 2] << 2) | 0, e = m[i >> 2];
                        t: {
                          if (!(t = 2139156720 == (0 | (i = c[i >> 2])))) {
                            if (Z = 2140081935 == (0 | i)) break n;
                            if ((X = 2141891242 == (0 | i)) | e != e) break a;
                            if (Z) break n;
                            if (X) break a;
                            if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break t;
                          }
                          a = y(y(hr * a) * y(.009999999776482582));
                        }
                        if (a != a) break a;
                        a = y(0);
                        t: if (!t) {
                          if (2140081935 == (0 | i)) break n;
                          t = 4276;
                          f: {
                            if (2141891242 != (0 | i)) {
                              if (e == e) break f;
                              t = 4268;
                            }
                            switch (a = m[t >> 2], G = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                              case 0:
                                break n;
                              case 1:
                                break t;
                              default:
                                break i;
                            }
                          }
                          if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break n;
                        }
                        G = y(y(hr * a) * y(.009999999776482582));
                        break i;
                      }
                      G = a;
                    }
                    if ((e = y(y(y(G - R) - Gr) - y(F - B))) != e) break a;
                    T = Re(e, y(0));
                  }
                  a: {
                    if (!(X = g >>> 0 <= W >>> 0)) {
                      for (z = c[r + 556 >> 2], j = (i = c[r + 560 >> 2] - z >> 2) >>> 0 < W >>> 0 ? W : i, Z = 0, i = W;;) {
                        if ((0 | i) == (0 | j)) break e;
                        if (t = c[z + (i << 2) >> 2], 131072 != (196608 & c[t + 24 >> 2]) && (ve(tr = w + 24 | 0, t, O), Cr = c[w + 28 >> 2], de(tr, t, O), Z = ((3 == (0 | Cr)) + Z | 0) + (3 == c[w + 28 >> 2]) | 0), (0 | g) == (0 | (i = i + 1 | 0))) break;
                      }
                      if (C = y(0), a = _, Z) break a;
                    }
                    C = y(0), Z = 0, a = _;
                    i: switch ((c[r + 24 >> 2] >>> 4 & 7) - 1 | 0) {
                      case 0:
                        C = y(T * y(.5));
                        break a;
                      case 1:
                        C = T;
                        break a;
                      case 2:
                        if (Y >>> 0 < 2) break a;
                        a = y(_ + y((fe = y(0), oe = Re(T, y(0)), ((te = T != T) ? fe : oe) / y(Y - 1 >>> 0))));
                        break a;
                      case 4:
                        C = y(T / y(Y + 1 >>> 0)), a = y(_ + C);
                        break a;
                      case 3:
                        break i;
                      default:
                        break a;
                    }
                    C = y(y(T * y(.5)) / y(Y >>> 0)), a = y(y(C + C) + _);
                  }
                  if (e = y(R + C), B = y(0), Y = Jr(r), X) a = y(0);else {
                    for (z = g - 1 | 0, Zr = y(T / y(0 | Z)), R = y(0), G = y(0), i = W;;) {
                      if (t = c[r + 556 >> 2], c[r + 560 >> 2] - t >> 2 >>> 0 <= i >>> 0) break e;
                      Ar(w + 24 | 0, Z = (t = c[t + (i << 2) >> 2]) + 228 | 0, 320), a = y(a - ((0 | i) == (0 | z) ? _ : y(0)));
                      a: if (!(4194304 & (j = c[t + 24 >> 2]))) {
                        i: {
                          if (131072 == (196608 & j)) {
                            if (!se(t, O)) break i;
                            if (!s) break a;
                            T = Lr(t, O, F), x = zr(r, O), Sr = Mr(t, O, V), m[Z + (c[$ >> 2] << 2) >> 2] = Sr + y(T + x);
                            break a;
                          }
                          if (ve(w + 360 | 0, t, O), e = y(e + (3 == c[w + 364 >> 2] ? Zr : y(-0))), s && (j = Z, Z = c[$ >> 2] << 2, m[j + Z >> 2] = e + m[Z + (w + 24 | 0) >> 2]), de(w + 360 | 0, t, O), e = y(e + (3 == c[w + 364 >> 2] ? Zr : y(-0))), !ee) {
                            e = y(e + y(y(a + y(Mr(t, O, V) + Ur(t, O, V))) + m[w + 104 >> 2])), B = M;
                            break a;
                          }
                          if (e = y(e + y(a + y(m[(Z = t + 516 | 0) + (c[dr >> 2] << 2) >> 2] + y(Mr(t, O, V) + Ur(t, O, V))))), Y) {
                            if (T = Wr(t), x = Mr(t, 0, V), T = y(T + x), x = y(y(m[t + 520 >> 2] + y(Mr(t, 0, V) + Ur(t, 0, V))) - T), R = (t = R != R) | T != T ? t ? T : R : Re(R, T), !((t = G != G) | x != x)) {
                              G = Re(G, x);
                              break a;
                            }
                            G = t ? x : G;
                            break a;
                          }
                          if (!((T = y(m[Z + (c[Q >> 2] << 2) >> 2] + y(Mr(t, N, V) + Ur(t, N, V)))) != T | (t = B != B))) {
                            B = Re(B, T);
                            break a;
                          }
                          B = t ? T : B;
                          break a;
                        }
                        s && (t = c[$ >> 2] << 2, T = m[t + (w + 24 | 0) >> 2], te = t + Z | 0, fe = y(C + y(T + zr(r, O))), m[te >> 2] = fe);
                      }
                      if ((0 | g) == (0 | (i = i + 1 | 0))) break;
                    }
                    a = y(G + R);
                  }
                  if (R = Y ? a : B, T = M, $r || (a = (i = (a = ur(r, N, y(K + R), Er)) != a) | (G = y(y(Br(r, N, o) + zr(r, N)) + y(Tr(r, N, o) + Qr(r, N)))) != G ? i ? G : a : Re(a, G), T = y(a - K)), a = (i = (a = ur(r, N, y(K + (re ? M : R)), Er)) != a) | (G = y(y(Br(r, N, o) + zr(r, N)) + y(Tr(r, N, o) + Qr(r, N)))) != G ? i ? G : a : Re(a, G), G = y(a - K), !(X | !s)) for (;;) {
                    if (i = c[r + 556 >> 2], c[r + 560 >> 2] - i >> 2 >>> 0 <= W >>> 0) break e;
                    i = c[i + (W << 2) >> 2];
                    a: if (!(4194304 & (t = c[i + 24 >> 2]))) if (131072 != (196608 & t)) {
                      (t = t >>> 13 & 7) || (t = c[r + 24 >> 2] >>> 10 & 7);
                      i: {
                        n: {
                          if (5 != (0 | t)) {
                            if (4 == (0 | t) && (ve(w + 24 | 0, i, N), t = 4, 3 != c[w + 28 >> 2])) {
                              if (de(w + 360 | 0, i, N), Z = c[Q >> 2], 3 == c[w + 364 >> 2]) break n;
                              R = m[572 + (Z = i + (Z << 3) | 0) >> 2];
                              t: {
                                switch (0 | (t = c[Z + 576 >> 2])) {
                                  case 0:
                                  case 3:
                                    break t;
                                }
                                if (!(1 != (0 | t) | (B = m[Z + 572 >> 2]) != B)) {
                                  if (a = P, R < y(0)) break t;
                                  break i;
                                }
                                if (a = P, rr & !(R < y(0)) | 2 != (0 | t) | B != B) break i;
                              }
                              R = m[516 + (i + (c[dr >> 2] << 2) | 0) >> 2], a = (a = m[i + 224 >> 2]) == a ? y(y(Mr(i, N, V) + Ur(i, N, V)) + y(q ? R * a : R / a)) : G, m[w + 360 >> 2] = a, te = w, fe = y(R + y(Mr(i, O, V) + Ur(i, O, V))), m[te + 24 >> 2] = fe, c[w + 356 >> 2] = 1, c[w + 352 >> 2] = 1, Vr(i, O, F, V, w + 356 | 0, w + 24 | 0), Vr(i, N, M, V, w + 352 | 0, w + 360 | 0), R = m[w + 360 >> 2], B = m[w + 24 >> 2], a = (t = O >>> 0 > 1) ? R : B, or(i, R = t ? B : R, a, J, !((t = 0 != (0 | nr) & 512 != (896 & c[r + 24 >> 2])) & q | R != R), (q | !t) & a == a, V, U, 1, 2, A, l, h, p), a = P;
                              break i;
                            }
                          } else t = 8 & c[r + 24 >> 2] ? 5 : 1;
                          Z = c[Q >> 2];
                        }
                        if (a = m[516 + ((Z << 2) + i | 0) >> 2], R = Mr(i, N, V), B = Ur(i, N, V), ve(w + 24 | 0, i, N), R = y(T - y(a + y(R + B))), 3 != c[w + 28 >> 2] || (de(w + 360 | 0, i, N), 3 != c[w + 364 >> 2])) {
                          if (de(w + 24 | 0, i, N), a = P, 3 != c[w + 28 >> 2]) if (ve(w + 24 | 0, i, N), 3 != c[w + 28 >> 2]) {
                            switch (t - 1 | 0) {
                              case 1:
                                a = y(P + y(R * y(.5)));
                                break i;
                              case 0:
                                break i;
                            }
                            a = y(P + R);
                          } else a = y(P + (fe = y(0), oe = Re(R, y(0)), (te = R != R) ? fe : oe));
                        } else a = y(R * y(.5)), a = y(P + (fe = y(0), oe = Re(a, y(0)), (te = a != a) ? fe : oe));
                      }
                      i = i + (c[H >> 2] << 2) | 0, m[i + 228 >> 2] = a + y(br + m[i + 228 >> 2]);
                    } else {
                      if (t = c[H >> 2], se(i, N) && (a = y(y(Lr(i, N, M) + zr(r, N)) + Mr(i, N, V)), m[228 + (i + (t << 2) | 0) >> 2] = a, a == a)) break a;
                      te = i + (t << 2) | 0, fe = y(zr(r, N) + Mr(i, N, V)), m[te + 228 >> 2] = fe;
                    }
                    if ((0 | (W = W + 1 | 0)) == (0 | g)) break;
                  }
                  if (a = y((S ? jr : y(0)) + G), Nr = (i = Nr != Nr) | (e = y(Gr + e)) != e ? i ? e : Nr : Re(Nr, e), br = y(br + a), i = S + 1 | 0, W = g, !(g >>> 0 < er >>> 0)) break;
                }
                a: if (s && (nr || Jr(r))) {
                  R = y(0);
                  i: {
                    n: if (M == M) {
                      e = y(M - br);
                      t: switch ((c[r + 24 >> 2] >>> 7 & 7) - 2 | 0) {
                        case 0:
                          P = y(P + y(e * y(.5)));
                          break n;
                        case 2:
                          if (!(M > br)) break n;
                          R = y(e / y(i >>> 0));
                          break n;
                        case 5:
                          if (M > br) {
                            if (P = y(P + y(e / y(i << 1 >>> 0))), i >>> 0 < 2) break n;
                            R = y(e / y(i >>> 0));
                            break i;
                          }
                          P = y(P + y(e * y(.5)));
                          break n;
                        case 4:
                          if (!(M > br) | i >>> 0 < 2) break n;
                          R = y(e / y(S >>> 0));
                          break i;
                        case 1:
                          break t;
                        default:
                          break n;
                      }
                      P = y(P + e);
                    }
                    if (!i) break a;
                  }
                  for (Z = 0, i = 0, t = 0;;) {
                    if (B = y(0), a = y(0), e = y(0), G = y(0), g = i, i >>> 0 < er >>> 0) {
                      i: {
                        for (;;) {
                          if (t = c[r + 556 >> 2], c[r + 560 >> 2] - t >> 2 >>> 0 <= g >>> 0) break e;
                          if (W = c[t + (g << 2) >> 2], !(4194304 & (X = c[W + 24 >> 2]) | 131072 == (196608 & X))) {
                            if (t = g, c[W + 548 >> 2] != (0 | Z)) break i;
                            (e = m[516 + (W + (c[Q >> 2] << 2) | 0) >> 2]) >= y(0) && (a = (t = a != a) | (e = y(e + y(Mr(W, N, V) + Ur(W, N, V)))) != e ? t ? e : a : Re(a, e)), (t = X >>> 13 & 7) || (t = c[r + 24 >> 2] >>> 10 & 7), !(8 & v[r + 24 | 0]) | 5 != (0 | t) || (e = Wr(W), T = Mr(W, 0, V), e = y(e + T), T = y(y(m[W + 520 >> 2] + y(Mr(W, 0, V) + Ur(W, 0, V))) - e), t = a != a, G = (W = G != G) | e != e ? W ? e : G : Re(G, e), B = (W = B != B) | T != T ? W ? T : B : Re(B, T), a = t | (e = y(G + B)) != e ? t ? e : a : Re(a, e));
                          }
                          if ((0 | er) == (0 | (g = g + 1 | 0))) break;
                        }
                        t = er;
                      }
                      e = a;
                    }
                    if (T = y(P + (Z ? jr : y(0))), a = y(R + e), P = y(T + a), i >>> 0 < t >>> 0) for (_ = y(T + G);;) {
                      if (g = c[r + 556 >> 2], c[r + 560 >> 2] - g >> 2 >>> 0 <= i >>> 0) break e;
                      W = c[g + (i << 2) >> 2];
                      i: if (!(4194304 & (g = c[W + 24 >> 2]) | 131072 == (196608 & g))) {
                        (g = g >>> 13 & 7) || (g = c[r + 24 >> 2] >>> 10 & 7);
                        n: {
                          t: switch (g - 1 | 0) {
                            case 4:
                              if (8 & v[r + 24 | 0]) break n;
                            case 0:
                              e = Mr(W, N, V), m[228 + (W + (c[H >> 2] << 2) | 0) >> 2] = T + e;
                              break i;
                            case 2:
                              e = Ur(W, N, V), m[(g = W + 228 | 0) + (c[H >> 2] << 2) >> 2] = y(P - e) - m[288 + (g + (c[Q >> 2] << 2) | 0) >> 2];
                              break i;
                            case 1:
                              m[(g = W + 228 | 0) + (c[H >> 2] << 2) >> 2] = T + y(y(a - m[288 + (g + (c[Q >> 2] << 2) | 0) >> 2]) * y(.5));
                              break i;
                            case 3:
                              break t;
                            default:
                              break i;
                          }
                          e = Mr(W, N, V), m[228 + (W + (c[H >> 2] << 2) | 0) >> 2] = T + e, X = W + (c[Q >> 2] << 3) | 0, e = m[(g = X) + 572 >> 2];
                          t: {
                            switch (0 | (g = c[g + 576 >> 2])) {
                              case 0:
                              case 3:
                                break t;
                            }
                            if (!(1 != (0 | g) | (G = m[X + 572 >> 2]) != G)) {
                              if (e < y(0)) break t;
                              break i;
                            }
                            if (rr & !(e < y(0)) | 2 != (0 | g) | G != G) break i;
                          }
                          O >>> 0 >= 2 ? (B = a, e = m[W + 516 >> 2], G = y(e + y(Mr(W, O, V) + Ur(W, O, V)))) : (B = y(m[W + 520 >> 2] + y(Mr(W, N, V) + Ur(W, N, V))), e = m[W + 516 >> 2], G = a);
                          t: {
                            f: {
                              if (!(G != G | e != e)) {
                                if (y(E(y(G - e))) < y(9999999747378752e-20)) break f;
                                break t;
                              }
                              if (G == G | e == e) break t;
                            }
                            if (!((g = (e = m[W + 520 >> 2]) != e) | B != B)) {
                              if (!(y(E(y(B - e))) < y(9999999747378752e-20))) break t;
                              break i;
                            }
                            if (B != B && g) break i;
                          }
                          or(W, G, B, J, 1, 1, V, U, 1, 3, A, l, h, p);
                          break i;
                        }
                        te = W, fe = y(y(_ - Wr(W)) + Lr(W, 0, M)), m[te + 232 >> 2] = fe;
                      }
                      if ((0 | t) == (0 | (i = i + 1 | 0))) break;
                    }
                    if (g = (0 | Z) != (0 | S), Z = Z + 1 | 0, i = t, !g) break;
                  }
                }
                Z = r + 516 | 0, e = (i = (e = ur(r, 2, Yr, o)) != e) | (a = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != a ? i ? a : e : Re(e, a), m[Z >> 2] = e, e = (i = (e = ur(r, 0, Hr, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                a: {
                  i: if (cr && 2 == (0 | (i = c[r + 24 >> 2] >>> 20 & 3)) | 2 != (0 | cr)) {
                    if (2 != (0 | cr) | 2 != (0 | i)) break a;
                    e = (i = (e = (i = (a = y(ir + F)) != a) | (e = ur(r, O, Nr, hr)) != e ? i ? e : a : ge(a, e)) != e) | ir != ir ? i ? ir : e : Re(e, ir);
                  } else {
                    if (!((i = (e = ur(r, O, Nr, hr)) != e) | (a = y(y(Br(r, O, o) + zr(r, O)) + y(Tr(r, O, o) + Qr(r, O)))) != a)) {
                      e = Re(e, a);
                      break i;
                    }
                    e = i ? a : e;
                  }
                  m[Z + (c[dr >> 2] << 2) >> 2] = e;
                }
                a: {
                  i: if (L && (t = 2 != (0 | L)) | 2 == (0 | (i = c[r + 24 >> 2] >>> 20 & 3))) {
                    if (t | 2 != (0 | i)) break a;
                    e = (i = (e = (i = (a = y(K + M)) != a) | (e = ur(r, N, y(K + br), Er)) != e ? i ? e : a : ge(a, e)) != e) | K != K ? i ? K : e : Re(e, K);
                  } else {
                    if (!((i = (e = ur(r, N, y(K + br), Er)) != e) | (a = y(y(Br(r, N, o) + zr(r, N)) + y(Tr(r, N, o) + Qr(r, N)))) != a)) {
                      e = Re(e, a);
                      break i;
                    }
                    e = i ? a : e;
                  }
                  m[Z + (c[Q >> 2] << 2) >> 2] = e;
                }
                if (s) {
                  if (i = c[r + 560 >> 2], W = c[r + 556 >> 2], 524288 == (786432 & c[r + 24 >> 2])) {
                    for (t = er >>> 0 <= 1 ? 1 : er, s = i - W >> 2, i = 0; g = 0, g = i >>> 0 < s >>> 0 ? c[(i << 2) + W >> 2] : g, 131072 != (196608 & c[g + 24 >> 2]) && (X = (g = g + 228 | 0) + (c[H >> 2] << 2) | 0, S = c[Q >> 2] << 2, m[X >> 2] = y(m[S + Z >> 2] - m[X >> 2]) - m[288 + (g + S | 0) >> 2]), (0 | t) != (0 | (i = i + 1 | 0)););
                    W = c[r + 556 >> 2], i = c[r + 560 >> 2];
                  }
                  if ((0 | i) != (0 | W)) for (S = 0 != (0 | (O >>> 0 > 1 ? cr : n));;) {
                    s = c[W >> 2];
                    a: if (131072 == (4390912 & c[s + 24 >> 2])) {
                      a = V, F = U, v[c[r + 568 >> 2] + 21 | 0] && (F = m[r + 520 >> 2], a = m[r + 516 >> 2]), n = c[r + 24 >> 2] >>> 2 & 3;
                      i: {
                        n: {
                          if (2 == (0 | J)) {
                            t = 0, g = 3;
                            t: switch (n - 2 | 0) {
                              case 0:
                                break i;
                              case 1:
                                break t;
                              default:
                                break n;
                            }
                            g = 2;
                            break i;
                          }
                          if (t = 0, !(n >>> 0 <= 1)) {
                            g = n;
                            break i;
                          }
                        }
                        g = n, t = lr;
                      }
                      u = y(Mr(s, 2, a) + Ur(s, 2, a)), R = Mr(s, 0, a), B = Ur(s, 0, a), e = m[s + 572 >> 2];
                      i: {
                        n: {
                          switch (0 | (n = c[s + 576 >> 2])) {
                            case 0:
                            case 3:
                              break n;
                          }
                          t: {
                            if (!(1 != (0 | n) | (o = m[s + 572 >> 2]) != o)) {
                              if (G = e, !(e < y(0))) break t;
                              break n;
                            }
                            f: {
                              if (2 != (0 | n) | o != o) {
                                G = y(NaN);
                                o: switch (n - 1 | 0) {
                                  case 1:
                                    break f;
                                  case 0:
                                    break o;
                                  default:
                                    break t;
                                }
                                G = e;
                                break t;
                              }
                              if (a != a | e < y(0)) break n;
                            }
                            G = y(y(a * e) * y(.009999999776482582));
                          }
                          G = y(u + G);
                          break i;
                        }
                        G = y(NaN), se(s, 2) && be(s, 2) && (G = (n = (e = ur(s, 2, y(y(m[r + 516 >> 2] - y(zr(r, 2) + Qr(r, 2))) - y(Lr(s, 2, a) + Or(s, 2, a))), a)) != e) | (o = y(y(Br(s, 2, a) + zr(s, 2)) + y(Tr(s, 2, a) + Qr(s, 2)))) != o ? n ? o : e : Re(e, o));
                      }
                      B = y(R + B);
                      i: {
                        n: {
                          t: {
                            f: {
                              o: {
                                c: {
                                  u: {
                                    X = G != G, o = m[s + 580 >> 2];
                                    b: {
                                      s: {
                                        switch (0 | (n = c[s + 584 >> 2])) {
                                          case 0:
                                          case 3:
                                            break s;
                                        }
                                        A: {
                                          if (!(1 != (0 | n) | (e = m[s + 580 >> 2]) != e)) {
                                            if (!((e = o) < y(0))) break A;
                                            break s;
                                          }
                                          k: {
                                            if (2 != (0 | n) | e != e) {
                                              e = y(NaN);
                                              l: switch (n - 1 | 0) {
                                                case 1:
                                                  break k;
                                                case 0:
                                                  break l;
                                                default:
                                                  break A;
                                              }
                                              e = o;
                                              break A;
                                            }
                                            if (F != F | o < y(0)) break s;
                                          }
                                          e = y(y(F * o) * y(.009999999776482582));
                                        }
                                        e = y(B + e);
                                        break b;
                                      }
                                      if (!se(s, 0) || !be(s, 0)) {
                                        if (e = y(NaN), G == G) break u;
                                        break t;
                                      }
                                      e = (n = (e = ur(s, 0, y(y(m[r + 520 >> 2] - y(zr(r, 0) + Qr(r, 0))) - y(Lr(s, 0, F) + Or(s, 0, F))), F)) != e) | (o = y(y(Br(s, 0, a) + zr(s, 0)) + y(Tr(s, 0, a) + Qr(s, 0)))) != o ? n ? o : e : Re(e, o);
                                    }
                                    if ((0 | X) == (e != e | 0)) break o;
                                    if ((R = m[s + 224 >> 2]) != R) break o;
                                    if (G != G) {
                                      G = y(y(y(e - B) * R) + u);
                                      break o;
                                    }
                                    if (e == e) break o;
                                    break c;
                                  }
                                  if ((R = m[s + 224 >> 2]) != R) break f;
                                }
                                e = y(B + y(y(G - u) / R));
                              }
                              if (G != G) break t;
                              if (e == e) break i;
                            }
                            n = 0;
                            break n;
                          }
                          n = 1;
                        }
                        X = a > y(0), Y = n & S & g >>> 0 < 2, n ^= 1, or(s, o = Y && X ? a : G, e, J, Y && X ? 2 : n, e == e, o, e, 0, 6, A, l, h, p), G = y(m[s + 516 >> 2] + Ue(s, 2, a)), e = y(m[s + 520 >> 2] + Ue(s, 0, a));
                      }
                      or(s, G, e, J, 1, 1, G, e, 1, 1, A, l, h, p), u = (n = g >>> 0 < 2) ? a : F, X = c[r + 568 >> 2], o = v[X + 22 | 0] ? u : a;
                      i: {
                        if (!be(s, g) || se(s, g)) {
                          if (se(s, g) | 16 != (112 & c[r + 24 >> 2])) {
                            if (se(s, g) | 32 != (112 & c[r + 24 >> 2])) {
                              if (!v[X + 21 | 0]) break i;
                              if (!se(s, g)) break i;
                              e = m[Z + (c[4252 + (g << 2) >> 2] << 2) >> 2], e = y(y(Lr(s, g, e) + zr(r, g)) + Mr(s, g, e));
                            } else n = c[4252 + (g << 2) >> 2] << 2, e = y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]);
                          } else n = c[4252 + (g << 2) >> 2] << 2, e = y(y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]) * y(.5));
                        } else Y = c[4252 + (g << 2) >> 2] << 2, e = y(y(y(y(m[Y + Z >> 2] - m[516 + (s + Y | 0) >> 2]) - Qr(r, g)) - Ur(s, g, o)) - Or(s, g, n ? F : a));
                        m[228 + (s + (c[4220 + (g << 2) >> 2] << 2) | 0) >> 2] = e;
                      }
                      i: if (!be(s, t) || se(s, t)) {
                        if (se(s, t) || ((n = c[s + 24 >> 2] >>> 13 & 7) || (n = c[r + 24 >> 2] >>> 10 & 7), 2 != (0 | n))) {
                          n: if (!se(s, t)) {
                            g = c[s + 24 >> 2] >>> 13 & 7, n = c[r + 24 >> 2];
                            t: {
                              if (!(5 != (0 | (g = g || n >>> 10 & 7)) | 8 & n)) {
                                if (524288 == (786432 & n)) break t;
                                break n;
                              }
                              if ((524288 == (786432 & n) | 0) == (3 == (0 | g) | 0)) break n;
                            }
                            n = c[4252 + (t << 2) >> 2] << 2, e = y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]);
                            break i;
                          }
                          if (!v[X + 21 | 0]) break a;
                          if (!se(s, t)) break a;
                          e = m[Z + (c[4252 + (t << 2) >> 2] << 2) >> 2], e = y(y(Lr(s, t, e) + zr(r, t)) + Mr(s, t, e));
                        } else n = c[4252 + (t << 2) >> 2] << 2, e = y(y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]) * y(.5));
                      } else n = c[4252 + (t << 2) >> 2] << 2, e = y(y(y(y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]) - Qr(r, t)) - Ur(s, t, o)) - Or(s, t, u));
                      m[228 + (s + (c[4220 + (t << 2) >> 2] << 2) | 0) >> 2] = e;
                    }
                    if ((0 | (W = W + 4 | 0)) == (0 | i)) break;
                  }
                  if (1 & (N | O)) for (t = 1 & N, s = 1 & O, A = er >>> 0 <= 1 ? 1 : er, l = 4236 + (N << 2) | 0, h = 4236 + (O << 2) | 0, p = c[r + 556 >> 2], N = c[r + 560 >> 2] - p >> 2, i = 0;;) {
                    if ((0 | i) == (0 | N)) break e;
                    if (r = c[p + (i << 2) >> 2], 64 & v[r + 26 | 0] || (s && (n = r + 228 | 0, g = c[dr >> 2] << 2, m[n + (c[h >> 2] << 2) >> 2] = y(m[g + Z >> 2] - m[288 + (n + g | 0) >> 2]) - m[n + (c[$ >> 2] << 2) >> 2]), t && (r = r + 228 | 0, n = c[Q >> 2] << 2, m[r + (c[l >> 2] << 2) >> 2] = y(m[n + Z >> 2] - m[288 + (r + n | 0) >> 2]) - m[r + (c[H >> 2] << 2) >> 2])), (0 | A) == (0 | (i = i + 1 | 0))) break;
                  }
                }
                if (!D) break r;
                gr(D);
                break r;
              }
              I(), k();
            }
            ar = w + 384 | 0;
          }
          function tr() {
            var r = 0,
              e = 0;
            T(6952, 6953, 6954, 0, 4284, 17, 4287, 0, 4287, 0, 2528, 4289, 18), r = ye(8), c[r >> 2] = 8, c[r + 4 >> 2] = 1, Z(6952, 2873, 6, 4304, 4328, 19, 0 | r, 1), T(6956, 6957, 6958, 6952, 4284, 20, 4284, 21, 4284, 22, 2e3, 4289, 23), r = ye(4), c[r >> 2] = 24, Z(6956, 2358, 2, 4336, 4344, 25, 0 | r, 0), V(6952, 1397, 2, 4348, 4356, 26, 27), V(6952, 2978, 3, 4436, 4448, 28, 29), T(6976, 6977, 6978, 0, 4284, 30, 4287, 0, 4287, 0, 2544, 4289, 31), r = ye(8), c[r >> 2] = 8, c[r + 4 >> 2] = 1, Z(6976, 3244, 2, 4456, 4344, 32, 0 | r, 1), T(6979, 6980, 6981, 6976, 4284, 33, 4284, 34, 4284, 35, 2023, 4289, 36), r = ye(4), c[r >> 2] = 37, Z(6979, 2358, 2, 4464, 4344, 38, 0 | r, 0), V(6976, 1397, 2, 4472, 4356, 39, 40), V(6976, 2978, 3, 4436, 4448, 28, 41), T(6982, 6983, 6984, 0, 4284, 42, 4287, 0, 4287, 0, 2812, 4289, 43), Y(6982, 1, 4520, 4284, 44, 45), V(6982, 2866, 1, 4520, 4284, 44, 45), V(6982, 1128, 2, 4524, 4344, 46, 47), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 48, Z(6982, 3185, 4, 4544, 4560, 49, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 50, Z(6982, 1980, 3, 4568, 4580, 51, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 52, Z(6982, 1951, 3, 4588, 4600, 53, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 54, Z(6982, 1799, 3, 4588, 4600, 53, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 55, Z(6982, 3215, 3, 4608, 4448, 56, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 57, Z(6982, 1925, 2, 4620, 4356, 58, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 59, Z(6982, 1784, 2, 4620, 4356, 58, 0 | r, 0), F(6985, 1270, 4628, 60, 4289, 61), Be(1731, 0), Be(1611, 8), Be(2144, 16), Be(2454, 24), Be(2560, 32), Be(1617, 40), _(6985), F(6955, 2849, 4628, 62, 4289, 63), Ve(2560, 0), Ve(1617, 8), _(6955), F(6986, 2860, 4628, 64, 4289, 65), r = ye(4), c[r >> 2] = 8, e = ye(4), c[e >> 2] = 8, O(6986, 2854, 7018, 4630, 66, 0 | r, 7018, 4634, 67, 0 | e), r = ye(4), c[r >> 2] = 0, e = ye(4), c[e >> 2] = 0, O(6986, 1606, 7011, 4356, 68, 0 | r, 7011, 4600, 69, 0 | e), _(6986), T(6987, 6988, 6989, 0, 4284, 70, 4287, 0, 4287, 0, 2973, 4289, 71), Y(6987, 1, 4640, 4284, 72, 73), V(6987, 1592, 1, 4640, 4284, 72, 73), V(6987, 2802, 2, 4644, 4356, 74, 75), V(6987, 1128, 2, 4652, 4344, 76, 77), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 78, Z(6987, 1752, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 80, Z(6987, 2956, 3, 4660, 4600, 81, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 82, Z(6987, 2881, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 84, Z(6987, 2334, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 86, Z(6987, 1484, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 87, Z(6987, 1355, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 88, Z(6987, 1817, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 89, Z(6987, 2823, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 90, Z(6987, 2378, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 91, Z(6987, 2163, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 92, Z(6987, 1319, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 93, Z(6987, 2412, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 94, Z(6987, 1503, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 95, Z(6987, 2235, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 96, Z(6987, 1219, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 97, Z(6987, 1136, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 98, Z(6987, 1158, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 100, Z(6987, 1845, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 101, Z(6987, 1464, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 102, Z(6987, 2218, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 103, Z(6987, 1195, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 104, Z(6987, 2500, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 105, Z(6987, 2590, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 106, Z(6987, 1539, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 107, Z(6987, 2249, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 108, Z(6987, 1650, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 109, Z(6987, 1427, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 110, Z(6987, 2204, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 111, Z(6987, 2608, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 112, Z(6987, 1555, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 113, Z(6987, 1670, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 114, Z(6987, 1444, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 115, Z(6987, 2566, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 116, Z(6987, 1520, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 117, Z(6987, 1624, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 118, Z(6987, 1407, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 119, Z(6987, 2304, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 120, Z(6987, 2092, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 121, Z(6987, 2718, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 122, Z(6987, 1574, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 123, Z(6987, 2187, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 124, Z(6987, 2897, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 126, Z(6987, 2346, 3, 4732, 4448, 127, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 128, Z(6987, 1371, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 129, Z(6987, 1831, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 130, Z(6987, 2836, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 131, Z(6987, 2395, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 132, Z(6987, 2175, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 133, Z(6987, 1337, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 134, Z(6987, 2422, 3, 4732, 4448, 127, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 135, Z(6987, 1858, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 137, Z(6987, 1207, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 139, Z(6987, 2514, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 140, Z(6987, 2599, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 141, Z(6987, 1660, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 142, Z(6987, 2620, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 143, Z(6987, 1683, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 144, Z(6987, 2578, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 145, Z(6987, 1637, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 146, Z(6987, 2319, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 147, Z(6987, 2102, 3, 4760, 4772, 148, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 149, Z(6987, 1231, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 150, Z(6987, 1147, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 151, Z(6987, 2729, 3, 4732, 4448, 127, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 152, Z(6987, 2194, 3, 4780, 4792, 153, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 154, Z(6987, 2985, 4, 4800, 4560, 155, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 156, Z(6987, 3006, 3, 4816, 4600, 157, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 158, Z(6987, 1292, 2, 4828, 4356, 159, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 160, Z(6987, 1387, 2, 4836, 4356, 161, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 162, Z(6987, 2997, 3, 4844, 4448, 163, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 164, Z(6987, 2913, 2, 4856, 4356, 165, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 166, Z(6987, 2933, 3, 4864, 4600, 167, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 168, Z(6987, 3308, 3, 4876, 4600, 169, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 170, Z(6987, 3306, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 171, Z(6987, 3325, 3, 4888, 4600, 172, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 173, Z(6987, 3323, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 174, Z(6987, 1118, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 175, Z(6987, 1110, 2, 4900, 4356, 176, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 177, Z(6987, 1243, 5, 4912, 4932, 178, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 179, Z(6987, 1736, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 180, Z(6987, 1714, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 181, Z(6987, 2148, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 182, Z(6987, 2461, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 183, Z(6987, 2632, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 184, Z(6987, 1696, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 185, Z(6987, 1259, 2, 4940, 4356, 186, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 187, Z(6987, 2432, 3, 4760, 4772, 148, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 188, Z(6987, 2112, 3, 4760, 4772, 148, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 189, Z(6987, 2740, 3, 4760, 4772, 148, 0 | r, 0);
          }
          function fr(r, e, a, i, n, t, u) {
            var b,
              s,
              A,
              k = 0,
              l = 0,
              d = 0,
              h = 0,
              p = 0,
              m = 0,
              y = 0,
              E = 0,
              G = 0,
              R = 0,
              g = 0,
              Z = 0,
              W = 0,
              V = 0,
              B = 0,
              T = 0,
              I = 0;
            ar = b = ar - 80 | 0, c[b + 76 >> 2] = e, A = b + 55 | 0, s = b + 56 | 0;
            r: {
              e: {
                a: {
                  i: {
                    n: for (;;) {
                      if (d = e, (2147483647 ^ E) < (0 | k)) break i;
                      E = k + E | 0;
                      t: {
                        f: {
                          o: {
                            if (l = v[0 | (k = d)]) for (;;) {
                              c: {
                                u: if (e = 255 & l) {
                                  if (37 != (0 | e)) break c;
                                  for (l = k;;) {
                                    if (37 != v[l + 1 | 0]) {
                                      e = l;
                                      break u;
                                    }
                                    if (k = k + 1 | 0, h = v[l + 2 | 0], l = e = l + 2 | 0, 37 != (0 | h)) break;
                                  }
                                } else e = k;
                                if ((0 | (k = k - d | 0)) > (0 | (B = 2147483647 ^ E))) break i;
                                if (r && Pr(r, d, k), k) continue n;
                                c[b + 76 >> 2] = e, k = e + 1 | 0, R = -1, !xe(l = f[e + 1 | 0]) | 36 != v[e + 2 | 0] || (R = l - 48 | 0, Z = 1, k = e + 3 | 0), c[b + 76 >> 2] = k, y = 0;
                                u: if ((e = (l = f[0 | k]) - 32 | 0) >>> 0 > 31) h = k;else if (h = k, 75913 & (e = 1 << e)) for (;;) {
                                  if (h = k + 1 | 0, c[b + 76 >> 2] = h, y |= e, (e = (l = f[k + 1 | 0]) - 32 | 0) >>> 0 >= 32) break u;
                                  if (k = h, !(75913 & (e = 1 << e))) break;
                                }
                                u: if (42 != (0 | l)) {
                                  if ((0 | (G = he(b + 76 | 0))) < 0) break i;
                                  l = c[b + 76 >> 2];
                                } else {
                                  if (!xe(e = f[h + 1 | 0]) | 36 != v[h + 2 | 0]) {
                                    if (Z) break o;
                                    if (l = h + 1 | 0, !r) {
                                      c[b + 76 >> 2] = l, Z = 0, G = 0;
                                      break u;
                                    }
                                    e = c[a >> 2], c[a >> 2] = e + 4, Z = 0, G = c[e >> 2];
                                  } else c[((e << 2) + n | 0) - 192 >> 2] = 10, l = h + 3 | 0, Z = 1, G = c[((f[h + 1 | 0] << 3) + i | 0) - 384 >> 2];
                                  if (c[b + 76 >> 2] = l, (0 | G) >= 0) break u;
                                  G = 0 - G | 0, y |= 8192;
                                }
                                if (k = 0, m = -1, 46 == v[0 | l]) {
                                  if (42 != v[l + 1 | 0]) c[b + 76 >> 2] = l + 1, m = he(b + 76 | 0), e = c[b + 76 >> 2], g = 1;else {
                                    if (!xe(e = f[l + 2 | 0]) | 36 != v[l + 3 | 0]) {
                                      if (Z) break o;
                                      e = l + 2 | 0, m = 0, r && (l = c[a >> 2], c[a >> 2] = l + 4, m = c[l >> 2]);
                                    } else c[((e << 2) + n | 0) - 192 >> 2] = 10, e = l + 4 | 0, m = c[((f[l + 2 | 0] << 3) + i | 0) - 384 >> 2];
                                    c[b + 76 >> 2] = e, g = (-1 ^ m) >>> 31 | 0;
                                  }
                                } else e = l, g = 0;
                                for (;;) {
                                  if (p = k, h = 28, W = e, (k = f[0 | e]) - 123 >>> 0 < 4294967238) break a;
                                  if (e = W + 1 | 0, !((k = v[4895 + (k + w(p, 58) | 0) | 0]) - 1 >>> 0 < 8)) break;
                                }
                                c[b + 76 >> 2] = e;
                                u: {
                                  b: {
                                    if (27 != (0 | k)) {
                                      if (!k) break a;
                                      if ((0 | R) >= 0) {
                                        c[(R << 2) + n >> 2] = k, l = c[4 + (k = (R << 3) + i | 0) >> 2], c[b + 64 >> 2] = c[k >> 2], c[b + 68 >> 2] = l;
                                        break b;
                                      }
                                      if (!r) break t;
                                      yr(b - -64 | 0, k, a, u);
                                      break u;
                                    }
                                    if ((0 | R) >= 0) break a;
                                  }
                                  if (k = 0, !r) continue n;
                                }
                                l = -65537 & y, y = 8192 & y ? l : y, R = 0, V = 1166, h = s;
                                u: {
                                  b: {
                                    s: {
                                      A: {
                                        k: {
                                          l: {
                                            d: {
                                              v: {
                                                h: {
                                                  p: {
                                                    m: {
                                                      N: {
                                                        w: {
                                                          y: {
                                                            E: {
                                                              switch (k = f[0 | W], (k = p && 3 == (15 & k) ? -33 & k : k) - 88 | 0) {
                                                                case 11:
                                                                  break u;
                                                                case 9:
                                                                case 13:
                                                                case 14:
                                                                case 15:
                                                                  break b;
                                                                case 27:
                                                                  break d;
                                                                case 12:
                                                                case 17:
                                                                  break p;
                                                                case 23:
                                                                  break m;
                                                                case 0:
                                                                case 32:
                                                                  break N;
                                                                case 24:
                                                                  break w;
                                                                case 22:
                                                                  break y;
                                                                case 29:
                                                                  break E;
                                                                case 1:
                                                                case 2:
                                                                case 3:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                case 7:
                                                                case 8:
                                                                case 10:
                                                                case 16:
                                                                case 18:
                                                                case 19:
                                                                case 20:
                                                                case 21:
                                                                case 25:
                                                                case 26:
                                                                case 28:
                                                                case 30:
                                                                case 31:
                                                                  break f;
                                                              }
                                                              switch (k - 65 | 0) {
                                                                case 0:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                  break b;
                                                                case 2:
                                                                  break k;
                                                                case 1:
                                                                case 3:
                                                                  break f;
                                                              }
                                                              if (83 == (0 | k)) break l;
                                                              break f;
                                                            }
                                                            l = c[b + 64 >> 2], p = c[b + 68 >> 2], k = 1166;
                                                            break h;
                                                          }
                                                          k = 0;
                                                          y: switch (255 & p) {
                                                            case 0:
                                                            case 1:
                                                            case 6:
                                                              c[c[b + 64 >> 2] >> 2] = E;
                                                              continue n;
                                                            case 2:
                                                              d = c[b + 64 >> 2], c[d >> 2] = E, c[d + 4 >> 2] = E >> 31;
                                                              continue n;
                                                            case 3:
                                                              o[c[b + 64 >> 2] >> 1] = E;
                                                              continue n;
                                                            case 4:
                                                              f[c[b + 64 >> 2]] = E;
                                                              continue n;
                                                            case 7:
                                                              break y;
                                                            default:
                                                              continue n;
                                                          }
                                                          d = c[b + 64 >> 2], c[d >> 2] = E, c[d + 4 >> 2] = E >> 31;
                                                          continue n;
                                                        }
                                                        m = m >>> 0 <= 8 ? 8 : m, y |= 8, k = 120;
                                                      }
                                                      if (d = s, (l = c[b + 64 >> 2]) | (p = c[b + 68 >> 2])) for (T = 32 & k; f[0 | (d = d - 1 | 0)] = T | v[5424 + (15 & l) | 0], I = !p & l >>> 0 > 15 | 0 != (0 | p), W = p, p = p >>> 4 | 0, l = (15 & W) << 28 | l >>> 4, I;);
                                                      if (!(8 & y) | !(c[b + 64 >> 2] | c[b + 68 >> 2])) break v;
                                                      V = 1166 + (k >>> 4 | 0) | 0, R = 2;
                                                      break v;
                                                    }
                                                    if (k = s, p = d = c[b + 68 >> 2], d | (l = c[b + 64 >> 2])) for (; f[0 | (k = k - 1 | 0)] = 7 & l | 48, W = !p & l >>> 0 > 7 | 0 != (0 | p), p = (d = p) >>> 3 | 0, l = (7 & d) << 29 | l >>> 3, W;);
                                                    if (d = k, !(8 & y)) break v;
                                                    m = (0 | (k = s - d | 0)) < (0 | m) ? m : k + 1 | 0;
                                                    break v;
                                                  }
                                                  l = c[b + 64 >> 2], p = k = c[b + 68 >> 2], (0 | k) < 0 ? (p = d = 0 - (p + (0 != (0 | l)) | 0) | 0, l = 0 - l | 0, c[b + 64 >> 2] = l, c[b + 68 >> 2] = d, R = 1, k = 1166) : 2048 & y ? (R = 1, k = 1167) : k = (R = 1 & y) ? 1168 : 1166;
                                                }
                                                V = k, d = re(l, p, s);
                                              }
                                              if ((0 | m) < 0 && g) break i;
                                              if (y = g ? -65537 & y : y, !(0 != ((k = c[b + 64 >> 2]) | (l = c[b + 68 >> 2])) | m)) {
                                                d = s, m = 0;
                                                break f;
                                              }
                                              m = (0 | (k = !(k | l) + (s - d | 0) | 0)) < (0 | m) ? m : k;
                                              break f;
                                            }
                                            y = 0, h = 0 != (0 | (p = g = m >>> 0 >= 2147483647 ? 2147483647 : m));
                                            d: {
                                              v: {
                                                h: {
                                                  p: {
                                                    m: if (!(!(3 & (k = d = (k = c[b + 64 >> 2]) || 4208)) | !p)) for (;;) {
                                                      if (!(y = v[0 | k])) break p;
                                                      if (h = 0 != (0 | (p = p - 1 | 0)), !(3 & (k = k + 1 | 0))) break m;
                                                      if (!p) break;
                                                    }
                                                    if (!h) break v;
                                                    m: {
                                                      if (!(!v[0 | k] | p >>> 0 < 4)) for (;;) {
                                                        if ((-1 ^ (h = c[k >> 2])) & h - 16843009 & -2139062144) break m;
                                                        if (k = k + 4 | 0, !((p = p - 4 | 0) >>> 0 > 3)) break;
                                                      }
                                                      if (!p) break v;
                                                    }
                                                    h = 0;
                                                    break h;
                                                  }
                                                  h = 1;
                                                }
                                                for (;;) if (h) {
                                                  if (!y) break d;
                                                  if (k = k + 1 | 0, !(p = p - 1 | 0)) break v;
                                                  h = 0;
                                                } else y = v[0 | k], h = 1;
                                              }
                                              k = 0;
                                            }
                                            if (h = (k = k ? k - d | 0 : g) + d | 0, (0 | m) >= 0) {
                                              y = l, m = k;
                                              break f;
                                            }
                                            if (y = l, m = k, v[0 | h]) break i;
                                            break f;
                                          }
                                          if (m) {
                                            l = c[b + 64 >> 2];
                                            break A;
                                          }
                                          k = 0, le(r, 32, G, 0, y);
                                          break s;
                                        }
                                        c[b + 12 >> 2] = 0, c[b + 8 >> 2] = c[b + 64 >> 2], l = b + 8 | 0, c[b + 64 >> 2] = l, m = -1;
                                      }
                                      k = 0;
                                      A: {
                                        for (;;) {
                                          if (!(d = c[l >> 2])) break A;
                                          if (!((h = (0 | (d = We(b + 4 | 0, d))) < 0) | d >>> 0 > m - k >>> 0)) {
                                            if (l = l + 4 | 0, m >>> 0 > (k = k + d | 0) >>> 0) continue;
                                            break A;
                                          }
                                          break;
                                        }
                                        if (h) break e;
                                      }
                                      if (h = 61, (0 | k) < 0) break a;
                                      if (le(r, 32, G, k, y), k) for (h = 0, l = c[b + 64 >> 2];;) {
                                        if (!(d = c[l >> 2])) break s;
                                        if ((h = (d = We(b + 4 | 0, d)) + h | 0) >>> 0 > k >>> 0) break s;
                                        if (Pr(r, b + 4 | 0, d), l = l + 4 | 0, !(k >>> 0 > h >>> 0)) break;
                                      } else k = 0;
                                    }
                                    le(r, 32, G, k, 8192 ^ y), k = (0 | k) < (0 | G) ? G : k;
                                    continue n;
                                  }
                                  if ((0 | m) < 0 && g) break i;
                                  if (h = 61, (0 | (k = 0 | aa[0 | t](r, N[b + 64 >> 3], G, m, y, k))) >= 0) continue n;
                                  break a;
                                }
                                f[b + 55 | 0] = c[b + 64 >> 2], m = 1, d = A, y = l;
                                break f;
                              }
                              l = v[k + 1 | 0], k = k + 1 | 0;
                            }
                            if (r) break r;
                            if (!Z) break t;
                            for (k = 1;;) {
                              if (r = c[(k << 2) + n >> 2]) {
                                if (yr((k << 3) + i | 0, r, a, u), E = 1, 10 != (0 | (k = k + 1 | 0))) continue;
                                break r;
                              }
                              break;
                            }
                            if (E = 1, k >>> 0 >= 10) break r;
                            for (;;) {
                              if (c[(k << 2) + n >> 2]) break o;
                              if (10 == (0 | (k = k + 1 | 0))) break;
                            }
                            break r;
                          }
                          h = 28;
                          break a;
                        }
                        if ((0 | (m = (0 | m) > (0 | (p = h - d | 0)) ? m : p)) > (2147483647 ^ R)) break i;
                        if (h = 61, (0 | B) < (0 | (k = (0 | (l = m + R | 0)) < (0 | G) ? G : l))) break a;
                        le(r, 32, k, l, y), Pr(r, V, R), le(r, 48, k, l, 65536 ^ y), le(r, 48, m, p, 0), Pr(r, d, p), le(r, 32, k, l, 8192 ^ y);
                        continue;
                      }
                      break;
                    }
                    E = 0;
                    break r;
                  }
                  h = 61;
                }
                c[1761] = h;
              }
              E = -1;
            }
            return ar = b + 80 | 0, E;
          }
          function or(r, e, a, i, n, t, o, u, b, s, A, k, l, d) {
            var h,
              N = y(0),
              G = 0,
              R = 0,
              g = 0,
              Z = y(0),
              W = 0,
              V = 0,
              B = y(0);
            (c[r + 312 >> 2] != (0 | d) && 4 & v[r + 4 | 0] || (W = 0, c[r + 316 >> 2] != (0 | i))) && (c[r + 540 >> 2] = -1082130432, c[r + 544 >> 2] = -1082130432, c[r + 532 >> 2] = 0, c[r + 536 >> 2] = 0, c[r + 524 >> 2] = -1082130432, c[r + 528 >> 2] = -1082130432, c[r + 320 >> 2] = 0, W = 1), h = l + 1 | 0;
            r: {
              e: {
                a: {
                  i: if (c[r + 8 >> 2]) {
                    if (Z = Mr(r, 2, o), B = Ur(r, 2, o), N = y(Mr(r, 0, o) + Ur(r, 0, o)), l = r + 524 | 0, Z = y(Z + B), lr(n, e, t, a, c[r + 532 >> 2], m[l >> 2], c[r + 536 >> 2], m[r + 528 >> 2], m[r + 540 >> 2], m[r + 544 >> 2], Z, N, A)) break a;
                    if (!(R = c[r + 320 >> 2])) break i;
                    for (G = r + 324 | 0;;) {
                      if (l = G + w(g, 24) | 0, lr(n, e, t, a, c[l + 8 >> 2], m[l >> 2], c[l + 12 >> 2], m[l + 4 >> 2], m[l + 16 >> 2], m[l + 20 >> 2], Z, N, A)) break a;
                      if ((0 | R) == (0 | (g = g + 1 | 0))) break;
                    }
                  } else {
                    if (b) {
                      n: {
                        if (!((N = m[(l = r + 524 | 0) >> 2]) != N | e != e)) {
                          if (y(E(y(N - e))) < y(9999999747378752e-20)) break n;
                          break i;
                        }
                        if (N == N | e == e) break i;
                      }
                      G = c[r + 532 >> 2] == (0 | n) && c[r + 536 >> 2] == (0 | t) ? l : 0, (l = (N = m[r + 528 >> 2]) != N) | (R = a != a) ? l &= R : l = y(E(y(N - a))) < y(9999999747378752e-20), l = l ? G : 0;
                      break a;
                    }
                    if (!(V = c[r + 320 >> 2])) break i;
                    for (R = r + 324 | 0;;) {
                      G = w(g, 24);
                      n: {
                        t: {
                          if (!((N = m[(l = G + R | 0) >> 2]) != N | e != e)) {
                            if (y(E(y(N - e))) < y(9999999747378752e-20)) break t;
                            break n;
                          }
                          if (N == N | e == e) break n;
                        }
                        t: {
                          if (!((N = m[4 + (G = R + G | 0) >> 2]) != N | a != a)) {
                            if (y(E(y(N - a))) < y(9999999747378752e-20)) break t;
                            break n;
                          }
                          if (N == N | a == a) break n;
                        }
                        if (c[G + 8 >> 2] == (0 | n) && c[G + 12 >> 2] == (0 | t)) break a;
                      }
                      if ((0 | V) == (0 | (g = g + 1 | 0))) break;
                    }
                  }
                  nr(r, e, a, i, n, t, o, u, b, A, k, h, d, s), c[r + 316 >> 2] = i;
                  break e;
                }
                if (!(!l | W)) {
                  m[r + 516 >> 2] = m[l + 16 >> 2], m[r + 520 >> 2] = m[l + 20 >> 2], c[(i = (b ? 12 : 16) + k | 0) >> 2] = c[i >> 2] + 1, i = 0;
                  break r;
                }
                if (nr(r, e, a, i, n, t, o, u, b, A, k, h, d, s), c[r + 316 >> 2] = i, i = 1, l) break r;
              }
              (i = (l = c[r + 320 >> 2]) + 1 | 0) >>> 0 > p[k + 8 >> 2] && (c[k + 8 >> 2] = i), 8 == (0 | l) && (c[r + 320 >> 2] = 0, l = 0), b ? i = r + 524 | 0 : (c[r + 320 >> 2] = l + 1, i = 324 + (w(l, 24) + r | 0) | 0), c[i + 12 >> 2] = t, c[i + 8 >> 2] = n, m[i + 4 >> 2] = a, m[i >> 2] = e, m[i + 16 >> 2] = m[r + 516 >> 2], m[i + 20 >> 2] = m[r + 520 >> 2], i = 1;
            }
            return b && (n = c[r + 520 >> 2], c[r + 244 >> 2] = c[r + 516 >> 2], c[r + 248 >> 2] = n, t = 1 | (n = v[r + 4 | 0]), f[r + 4 | 0] = t, 4 & n && (f[r + 4 | 0] = 251 & t)), c[r + 312 >> 2] = d, i;
          }
          function cr(r) {
            var e = 0,
              a = 0,
              i = 0,
              n = 0,
              t = 0,
              f = 0,
              o = 0,
              u = 0,
              b = 0,
              s = 0,
              A = 0;
            o = 8;
            r: if (!((r |= 0) >>> 0 > 4294967239)) {
              e: {
                for (;;) {
                  if (o = o >>> 0 <= 8 ? 8 : o, t = e = c[1731], n = c[1730], (r = r >>> 0 <= 8 ? 8 : r + 3 & -4) >>> 0 <= 127 ? f = (r >>> 3 | 0) - 1 | 0 : (f = 110 + ((r >>> 29 - (i = G(r)) ^ 4) - (i << 2) | 0) | 0, r >>> 0 <= 4095 || (f = (i = 71 + ((r >>> 30 - i ^ 2) - (i << 1) | 0) | 0) >>> 0 >= 63 ? 63 : i)), a = 31 & f, (63 & f) >>> 0 >= 32 ? (i = 0, e = e >>> a | 0) : (i = e >>> a | 0, e = ((1 << a) - 1 & e) << 32 - a | n >>> a), e | i) {
                    for (;;) {
                      if (n = i, e | i ? (u = 1 + (a = i - 1 | 0) | 0, t = a, a = 63 - (i = 32 == (0 | (i = G(i ^ (t = -1 != (0 | (a = e - 1 | 0)) ? u : t)))) ? G(e ^ a) + 32 | 0 : i) | 0, ir = 0 - (i >>> 0 > 63) | 0) : (ir = 0, a = 64), a = 31 & (t = a), (63 & t) >>> 0 >= 32 ? (i = 0, e = n >>> a | 0) : (i = n >>> a | 0, e = ((1 << a) - 1 & n) << 32 - a | e >>> a), u = e, (0 | (e = c[5896 + (a = (f = t + f | 0) << 4) >> 2])) == (0 | (t = a + 5888 | 0))) b = c[1731], n = 31 & (e = t = 63 & f), e >>> 0 >= 32 ? (e = 0, a = -1 >>> n | 0) : a = (e = -1 >>> n | 0) | (1 << n) - 1 << 32 - n, a &= -2, n = 31 & t, t >>> 0 >= 32 ? (e = a << n, a = 0) : (e = (1 << n) - 1 & a >>> 32 - n | e << n, a <<= n), s = a, n = e, e = 31 & (a = t = 0 - f & 63), a >>> 0 >= 32 ? (e = -1 << e, a = 0) : e = (a = -1 << e) | (1 << e) - 1 & -1 >>> 32 - e, A = -2 & a, a = 31 & t, t >>> 0 >= 32 ? (t = 0, e = e >>> a | 0) : (t = e >>> a | 0, e = ((1 << a) - 1 & e) << 32 - a | A >>> a), e |= s, ir = n | t, c[1730] = c[1730] & e, c[1731] = ir & b, e = 1 ^ u;else {
                        if (n = Nr(e, o, r)) break r;
                        n = c[e + 4 >> 2], c[n + 8 >> 2] = c[e + 8 >> 2], c[c[e + 8 >> 2] + 4 >> 2] = n, c[e + 8 >> 2] = t, n = a + 5892 | 0, c[e + 4 >> 2] = c[n >> 2], c[n >> 2] = e, c[c[e + 4 >> 2] + 8 >> 2] = e, f = f + 1 | 0, e = (1 & i) << 31 | u >>> 1, i = i >>> 1 | 0;
                      }
                      if (!(e | i)) break;
                    }
                    t = c[1731], n = c[1730];
                  }
                  a: {
                    if (n | t) {
                      a = 63 - (32 == (0 | (i = G(t))) ? G(n) + 32 | 0 : i) | 0, i = c[5896 + (e = a << 4) >> 2];
                      i: if (!(!t & n >>> 0 < 1073741824) && (f = 99, (0 | (e = e + 5888 | 0)) != (0 | i))) {
                        for (;;) {
                          if (!f) break i;
                          if (n = Nr(i, o, r)) break r;
                          if (f = f - 1 | 0, (0 | e) == (0 | (i = c[i + 8 >> 2]))) break;
                        }
                        i = e;
                      }
                      if (vr(r + 48 | 0)) break a;
                      if (!i) break e;
                      if ((0 | (e = 5888 + (a << 4) | 0)) == (0 | i)) break e;
                      for (;;) {
                        if (n = Nr(i, o, r)) break r;
                        if ((0 | e) == (0 | (i = c[i + 8 >> 2]))) break;
                      }
                      break e;
                    }
                    if (!vr(r + 48 | 0)) break e;
                  }
                  if (n = 0, o - 1 & o) break r;
                  if (!(r >>> 0 <= 4294967239)) break;
                }
                break r;
              }
              n = 0;
            }
            return 0 | n;
          }
          function ur(r, e, a, i) {
            var n = y(0),
              t = y(0),
              f = 0,
              o = y(0);
            r: {
              e: {
                a: {
                  i: {
                    n: {
                      t: {
                        if (e >>> 0 <= 1) {
                          t = m[r + 212 >> 2];
                          f: if (2139156720 != (0 | (e = c[r + 212 >> 2]))) {
                            if (2140081935 == (0 | e)) break t;
                            f = 4276;
                            o: {
                              if (2141891242 != (0 | e)) {
                                if (t == t) break o;
                                f = 4268;
                              }
                              switch (n = m[f >> 2], t = y(NaN), c[f + 4 >> 2] - 1 | 0) {
                                case 0:
                                  break t;
                                case 1:
                                  break f;
                                default:
                                  break n;
                              }
                            }
                            if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break t;
                          }
                          t = y(y(n * i) * y(.009999999776482582));
                          break n;
                        }
                        t = m[r + 208 >> 2];
                        f: {
                          o: {
                            c: if (2139156720 != (0 | (e = c[r + 208 >> 2]))) {
                              if (2140081935 == (0 | e)) break o;
                              f = 4276;
                              u: {
                                if (2141891242 != (0 | e)) {
                                  if (t == t) break u;
                                  f = 4268;
                                }
                                switch (n = m[f >> 2], t = y(NaN), c[f + 4 >> 2] - 1 | 0) {
                                  case 0:
                                    break o;
                                  case 1:
                                    break c;
                                  default:
                                    break f;
                                }
                              }
                              if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break o;
                            }
                            t = y(y(n * i) * y(.009999999776482582));
                            break f;
                          }
                          t = n;
                        }
                        n = y(0), o = m[r + 216 >> 2];
                        f: if (2139156720 != (0 | (r = c[r + 216 >> 2]))) {
                          if (2140081935 == (0 | r)) break a;
                          e = 4276;
                          o: {
                            if (2141891242 != (0 | r)) {
                              if (o == o) break o;
                              e = 4268;
                            }
                            switch (n = m[e >> 2], c[e + 4 >> 2] - 1 | 0) {
                              case 1:
                                break f;
                              case 0:
                                break i;
                              default:
                                break e;
                            }
                          }
                          if (b(2, 536870912 + (-1073741825 & r) | 0), n = d(), !(1073741824 & r)) break i;
                        }
                        n = y(y(n * i) * y(.009999999776482582));
                        break i;
                      }
                      t = n;
                    }
                    n = y(0), o = m[r + 220 >> 2];
                    n: if (2139156720 != (0 | (r = c[r + 220 >> 2]))) {
                      if (2140081935 == (0 | r)) break a;
                      e = 4276;
                      t: {
                        if (2141891242 != (0 | r)) {
                          if (o == o) break t;
                          e = 4268;
                        }
                        switch (n = m[e >> 2], c[e + 4 >> 2] - 1 | 0) {
                          case 1:
                            break n;
                          case 0:
                            break i;
                          default:
                            break e;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & r) | 0), n = d(), !(1073741824 & r)) break i;
                    }
                    n = y(y(n * i) * y(.009999999776482582));
                  }
                  if (!(n >= y(0))) break e;
                }
                if (a > n) break r;
              }
              if (!(t >= y(0))) return a;
              n = a < t ? t : a;
            }
            return n;
          }
          function br(r, e) {
            var a = 0,
              i = 0;
            for (c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, o[r + 4 >> 1] = 1, c[r >> 2] = 0, c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, c[r + 24 >> 2] = 0, c[r + 36 >> 2] = 2143289344, c[r + 40 >> 2] = 2141891242, c[r + 28 >> 2] = 2143289344, c[r + 32 >> 2] = 2143289344, i = Rr(r + 44 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, i = Rr(r + 80 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, i = Rr(r + 116 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, i = Rr(r + 152 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, c[r + 196 >> 2] = 0, c[(i = r + 188 | 0) >> 2] = 0, c[i + 4 >> 2] = 0; c[i + (a << 2) >> 2] = 2143289344, 3 != (0 | (a = a + 1 | 0)););
            for (c[r + 24 >> 2] = 4224, c[r + 224 >> 2] = 2143289344, c[r + 216 >> 2] = 2143289344, c[r + 220 >> 2] = 2143289344, c[r + 208 >> 2] = 2143289344, c[r + 212 >> 2] = 2143289344, c[r + 200 >> 2] = 2141891242, c[r + 204 >> 2] = 2141891242, Rr(r + 228 | 0, 0, 288), c[r + 244 >> 2] = 2143289344, c[r + 248 >> 2] = 2143289344, Rr(r + 252 | 0, 0, 49), c[r + 308 >> 2] = 2143289344, i = r + 516 | 0, a = r + 324 | 0; c[a + 16 >> 2] = -1082130432, c[a + 20 >> 2] = -1082130432, c[a + 8 >> 2] = 0, c[a + 12 >> 2] = 0, c[a >> 2] = -1082130432, c[a + 4 >> 2] = -1082130432, (0 | i) != (0 | (a = a + 24 | 0)););
            return c[r + 548 >> 2] = 0, c[r + 552 >> 2] = 0, c[r + 516 >> 2] = 2143289344, c[r + 520 >> 2] = 2143289344, c[r + 572 >> 2] = 2143289344, c[r + 576 >> 2] = 0, c[r + 568 >> 2] = e, c[r + 540 >> 2] = -1082130432, c[r + 544 >> 2] = -1082130432, c[r + 532 >> 2] = 0, c[r + 536 >> 2] = 0, c[r + 524 >> 2] = -1082130432, c[r + 528 >> 2] = -1082130432, c[r + 556 >> 2] = 0, c[r + 560 >> 2] = 0, c[r + 564 >> 2] = 0, c[r + 580 >> 2] = 2143289344, c[r + 584 >> 2] = 0, v[e + 10 | 0] && (c[r + 24 >> 2] = 4616, f[r + 4 | 0] = 128 | v[r + 4 | 0]), r;
          }
          function sr(r) {
            var e,
              a,
              i,
              n,
              t,
              f = 0,
              o = 0,
              u = y(0),
              s = y(0),
              A = y(0),
              k = 0,
              l = 0,
              v = 0,
              h = 0;
            for (c[8 + (e = ar - 16 | 0) >> 2] = 0, c[e + 12 >> 2] = 1, a = r + 200 | 0, i = r + 572 | 0, n = r + 208 | 0, t = r + 216 | 0, r = 0;;) {
              h = r, v = c[(e + 8 | 0) + (r << 2) >> 2], u = m[(r = t + (k = v << 2) | 0) >> 2];
              r: {
                e: {
                  a: {
                    i: {
                      n: {
                        if (!(!((l = 2139156720 == (0 | (f = c[r >> 2]))) | 2140081935 == (0 | f) | 2141891242 == (0 | f)) & u != u)) {
                          s = m[(r = k + n | 0) >> 2];
                          t: {
                            f: {
                              if (2139156720 != (0 | (o = c[r >> 2]))) {
                                if (A = y(NaN), r = 3, 2141891242 == (0 | o)) break t;
                                if (2140081935 != (0 | o)) break f;
                                A = y(0), r = 1;
                                break t;
                              }
                              A = y(0), r = 2;
                              break t;
                            }
                            r = 0, s == s && (b(2, 536870912 + (-1073741825 & o) | 0), A = d(), r = 1073741824 & o ? 2 : 1);
                          }
                          o = r;
                          t: {
                            f: {
                              if (!l) {
                                if (s = y(NaN), r = 3, 2141891242 == (0 | f)) break t;
                                if (2140081935 != (0 | f)) break f;
                                s = y(0), r = 1;
                                break t;
                              }
                              s = y(0), r = 2;
                              break t;
                            }
                            r = 0, u == u && (b(2, 536870912 + (-1073741825 & f) | 0), s = d(), r = 1073741824 & f ? 2 : 1);
                          }
                          if (!((0 | o) != (0 | r) | !(!r | s != s & A != A | y(E(y(s - A))) < y(9999999747378752e-20)))) {
                            if (r = 0, l) break n;
                            if (2140081935 == (0 | f)) break e;
                            if (2141891242 == (0 | f)) break a;
                            if (u != u) break i;
                            r = 536870912 + (-1073741825 & f) | 0, f = 1073741824 & f ? 2 : 1;
                            break r;
                          }
                        }
                        if (r = 0, u = m[(f = k + a | 0) >> 2], 2139156720 != (0 | (f = c[f >> 2]))) {
                          if (2140081935 == (0 | f)) break e;
                          if (2141891242 == (0 | f)) break a;
                          if (u != u) break i;
                          r = 536870912 + (-1073741825 & f) | 0, f = 1073741824 & f ? 2 : 1;
                          break r;
                        }
                      }
                      f = 2;
                      break r;
                    }
                    r = 2143289344, f = 0;
                    break r;
                  }
                  r = 2143289344, f = 3;
                  break r;
                }
                f = 1;
              }
              if (c[4 + (o = (v << 3) + i | 0) >> 2] = f, c[o >> 2] = r, r = 1, 1 & h) break;
            }
          }
          function Ar(r, e, a) {
            var i,
              n = 0,
              t = 0;
            if (a >>> 0 >= 512) return J(0 | r, 0 | e, 0 | a), r;
            i = r + a | 0;
            r: if (3 & (r ^ e)) {
              if (i >>> 0 < 4) a = r;else if ((n = i - 4 | 0) >>> 0 < r >>> 0) a = r;else for (a = r; f[0 | a] = v[0 | e], f[a + 1 | 0] = v[e + 1 | 0], f[a + 2 | 0] = v[e + 2 | 0], f[a + 3 | 0] = v[e + 3 | 0], e = e + 4 | 0, n >>> 0 >= (a = a + 4 | 0) >>> 0;);
            } else {
              e: if (3 & r) {
                if (a) for (a = r;;) {
                  if (!(a >>> 0 < i >>> 0)) break;
            }
    }
}