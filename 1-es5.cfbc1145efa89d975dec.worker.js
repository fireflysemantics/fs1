/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js?!./node_modules/@ngtools/webpack/src/index.js!./src/app/components/transactions/transaction.worker.ts");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js?!./node_modules/@ngtools/webpack/src/index.js!./src/app/components/transactions/transaction.worker.ts":
  /*!***************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js??ref--16-0!./node_modules/@ngtools/webpack/src!./src/app/components/transactions/transaction.worker.ts ***!
    \***************************************************************************************************************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAngularDevkitBuildOptimizerSrcBuildOptimizerWebpackLoaderJsNode_modulesNgtoolsWebpackSrcIndexJsSrcAppComponentsTransactionsTransactionWorkerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _fireflysemantics_cryptography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @fireflysemantics/cryptography */
    "./node_modules/@fireflysemantics/cryptography/__ivy_ngcc__/fesm2015/fireflysemantics-cryptography.js"); /// <reference lib="webworker" />


    addEventListener('message', function (_ref) {
      var data = _ref.data;
      var signature = Object(_fireflysemantics_cryptography__WEBPACK_IMPORTED_MODULE_0__["SHA1"])(data);
      postMessage(signature);
    });
    /***/
  },

  /***/
  "./node_modules/@fireflysemantics/cryptography/__ivy_ngcc__/fesm2015/fireflysemantics-cryptography.js":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/@fireflysemantics/cryptography/__ivy_ngcc__/fesm2015/fireflysemantics-cryptography.js ***!
    \************************************************************************************************************/

  /*! exports provided: SHA1 */

  /***/
  function node_modulesFireflysemanticsCryptography__ivy_ngcc__Fesm2015FireflysemanticsCryptographyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHA1", function () {
      return SHA1;
    });
    /* harmony import */


    var object_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! object-hash */
    "./node_modules/object-hash/dist/object_hash.js");
    /* harmony import */


    var object_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_0__);

    function SHA1(o) {
      return Object(object_hash__WEBPACK_IMPORTED_MODULE_0__["sha1"])(o);
    }
    /*
     * Public API Surface of cryptography
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=fireflysemantics-cryptography.js.map

    /***/

  },

  /***/
  "./node_modules/object-hash/dist/object_hash.js":
  /*!******************************************************!*\
    !*** ./node_modules/object-hash/dist/object_hash.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesObjectHashDistObject_hashJs(module, exports, __webpack_require__) {
    var require;

    var require;

    !function (e) {
      if (true) module.exports = e();else {
        var t;
      }
    }(function () {
      return function o(i, u, a) {
        function s(n, e) {
          if (!u[n]) {
            if (!i[n]) {
              var t = "function" == typeof require && require;
              if (!e && t) return require(n, !0);
              if (f) return f(n, !0);
              throw new Error("Cannot find module '" + n + "'");
            }

            var r = u[n] = {
              exports: {}
            };
            i[n][0].call(r.exports, function (e) {
              var t = i[n][1][e];
              return s(t || e);
            }, r, r.exports, o, i, u, a);
          }

          return u[n].exports;
        }

        for (var f = "function" == typeof require && require, e = 0; e < a.length; e++) {
          s(a[e]);
        }

        return s;
      }({
        1: [function (w, b, m) {
          (function (e, t, f, n, r, o, i, u, a) {
            "use strict";

            var s = w("crypto");

            function c(e, t) {
              return function (e, t) {
                var n;
                n = "passthrough" !== t.algorithm ? s.createHash(t.algorithm) : new y();
                void 0 === n.write && (n.write = n.update, n.end = n.update);
                g(t, n).dispatch(e), n.update || n.end("");
                if (n.digest) return n.digest("buffer" === t.encoding ? void 0 : t.encoding);
                var r = n.read();
                return "buffer" !== t.encoding ? r.toString(t.encoding) : r;
              }(e, t = h(e, t));
            }

            (m = b.exports = c).sha1 = function (e) {
              return c(e);
            }, m.keys = function (e) {
              return c(e, {
                excludeValues: !0,
                algorithm: "sha1",
                encoding: "hex"
              });
            }, m.MD5 = function (e) {
              return c(e, {
                algorithm: "md5",
                encoding: "hex"
              });
            }, m.keysMD5 = function (e) {
              return c(e, {
                algorithm: "md5",
                encoding: "hex",
                excludeValues: !0
              });
            };
            var l = s.getHashes ? s.getHashes().slice() : ["sha1", "md5"];
            l.push("passthrough");
            var d = ["buffer", "hex", "binary", "base64"];

            function h(e, t) {
              t = t || {};
              var n = {};
              if (n.algorithm = t.algorithm || "sha1", n.encoding = t.encoding || "hex", n.excludeValues = !!t.excludeValues, n.algorithm = n.algorithm.toLowerCase(), n.encoding = n.encoding.toLowerCase(), n.ignoreUnknown = !0 === t.ignoreUnknown, n.respectType = !1 !== t.respectType, n.respectFunctionNames = !1 !== t.respectFunctionNames, n.respectFunctionProperties = !1 !== t.respectFunctionProperties, n.unorderedArrays = !0 === t.unorderedArrays, n.unorderedSets = !1 !== t.unorderedSets, n.unorderedObjects = !1 !== t.unorderedObjects, n.replacer = t.replacer || void 0, n.excludeKeys = t.excludeKeys || void 0, void 0 === e) throw new Error("Object argument required.");

              for (var r = 0; r < l.length; ++r) {
                l[r].toLowerCase() === n.algorithm.toLowerCase() && (n.algorithm = l[r]);
              }

              if (-1 === l.indexOf(n.algorithm)) throw new Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + l.join(", "));
              if (-1 === d.indexOf(n.encoding) && "passthrough" !== n.algorithm) throw new Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + d.join(", "));
              return n;
            }

            function p(e) {
              if ("function" == typeof e) {
                return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e));
              }
            }

            function g(u, t, a) {
              a = a || [];

              function s(e) {
                return t.update ? t.update(e, "utf8") : t.write(e, "utf8");
              }

              return {
                dispatch: function dispatch(e) {
                  u.replacer && (e = u.replacer(e));
                  var t = typeof e;
                  return null === e && (t = "null"), this["_" + t](e);
                },
                _object: function _object(t) {
                  var e = Object.prototype.toString.call(t),
                      n = /\[object (.*)\]/i.exec(e);
                  n = (n = n ? n[1] : "unknown:[" + e + "]").toLowerCase();
                  var r;
                  if (0 <= (r = a.indexOf(t))) return this.dispatch("[CIRCULAR:" + r + "]");
                  if (a.push(t), void 0 !== f && f.isBuffer && f.isBuffer(t)) return s("buffer:"), s(t);

                  if ("object" === n || "function" === n || "asyncfunction" === n) {
                    var o = Object.keys(t);
                    u.unorderedObjects && (o = o.sort()), !1 === u.respectType || p(t) || o.splice(0, 0, "prototype", "__proto__", "constructor"), u.excludeKeys && (o = o.filter(function (e) {
                      return !u.excludeKeys(e);
                    })), s("object:" + o.length + ":");
                    var i = this;
                    return o.forEach(function (e) {
                      i.dispatch(e), s(":"), u.excludeValues || i.dispatch(t[e]), s(",");
                    });
                  }

                  if (!this["_" + n]) {
                    if (u.ignoreUnknown) return s("[" + n + "]");
                    throw new Error('Unknown object type "' + n + '"');
                  }

                  this["_" + n](t);
                },
                _array: function _array(e, t) {
                  t = void 0 !== t ? t : !1 !== u.unorderedArrays;
                  var n = this;
                  if (s("array:" + e.length + ":"), !t || e.length <= 1) return e.forEach(function (e) {
                    return n.dispatch(e);
                  });
                  var r = [],
                      o = e.map(function (e) {
                    var t = new y(),
                        n = a.slice();
                    return g(u, t, n).dispatch(e), r = r.concat(n.slice(a.length)), t.read().toString();
                  });
                  return a = a.concat(r), o.sort(), this._array(o, !1);
                },
                _date: function _date(e) {
                  return s("date:" + e.toJSON());
                },
                _symbol: function _symbol(e) {
                  return s("symbol:" + e.toString());
                },
                _error: function _error(e) {
                  return s("error:" + e.toString());
                },
                _boolean: function _boolean(e) {
                  return s("bool:" + e.toString());
                },
                _string: function _string(e) {
                  s("string:" + e.length + ":"), s(e.toString());
                },
                _function: function _function(e) {
                  s("fn:"), p(e) ? this.dispatch("[native]") : this.dispatch(e.toString()), !1 !== u.respectFunctionNames && this.dispatch("function-name:" + String(e.name)), u.respectFunctionProperties && this._object(e);
                },
                _number: function _number(e) {
                  return s("number:" + e.toString());
                },
                _xml: function _xml(e) {
                  return s("xml:" + e.toString());
                },
                _null: function _null() {
                  return s("Null");
                },
                _undefined: function _undefined() {
                  return s("Undefined");
                },
                _regexp: function _regexp(e) {
                  return s("regex:" + e.toString());
                },
                _uint8array: function _uint8array(e) {
                  return s("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _uint8clampedarray: function _uint8clampedarray(e) {
                  return s("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _int8array: function _int8array(e) {
                  return s("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _uint16array: function _uint16array(e) {
                  return s("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _int16array: function _int16array(e) {
                  return s("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _uint32array: function _uint32array(e) {
                  return s("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _int32array: function _int32array(e) {
                  return s("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _float32array: function _float32array(e) {
                  return s("float32array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _float64array: function _float64array(e) {
                  return s("float64array:"), this.dispatch(Array.prototype.slice.call(e));
                },
                _arraybuffer: function _arraybuffer(e) {
                  return s("arraybuffer:"), this.dispatch(new Uint8Array(e));
                },
                _url: function _url(e) {
                  return s("url:" + e.toString());
                },
                _map: function _map(e) {
                  s("map:");
                  var t = Array.from(e);
                  return this._array(t, !1 !== u.unorderedSets);
                },
                _set: function _set(e) {
                  s("set:");
                  var t = Array.from(e);
                  return this._array(t, !1 !== u.unorderedSets);
                },
                _blob: function _blob() {
                  if (u.ignoreUnknown) return s("[blob]");
                  throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
                },
                _domwindow: function _domwindow() {
                  return s("domwindow");
                },
                _process: function _process() {
                  return s("process");
                },
                _timer: function _timer() {
                  return s("timer");
                },
                _pipe: function _pipe() {
                  return s("pipe");
                },
                _tcp: function _tcp() {
                  return s("tcp");
                },
                _udp: function _udp() {
                  return s("udp");
                },
                _tty: function _tty() {
                  return s("tty");
                },
                _statwatcher: function _statwatcher() {
                  return s("statwatcher");
                },
                _securecontext: function _securecontext() {
                  return s("securecontext");
                },
                _connection: function _connection() {
                  return s("connection");
                },
                _zlib: function _zlib() {
                  return s("zlib");
                },
                _context: function _context() {
                  return s("context");
                },
                _nodescript: function _nodescript() {
                  return s("nodescript");
                },
                _httpparser: function _httpparser() {
                  return s("httpparser");
                },
                _dataview: function _dataview() {
                  return s("dataview");
                },
                _signal: function _signal() {
                  return s("signal");
                },
                _fsevent: function _fsevent() {
                  return s("fsevent");
                },
                _tlswrap: function _tlswrap() {
                  return s("tlswrap");
                }
              };
            }

            function y() {
              return {
                buf: "",
                write: function write(e) {
                  this.buf += e;
                },
                end: function end(e) {
                  this.buf += e;
                },
                read: function read() {
                  return this.buf;
                }
              };
            }

            m.writeToStream = function (e, t, n) {
              return void 0 === n && (n = t, t = {}), g(t = h(e, t), n).dispatch(e);
            };
          }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_794fcf4d.js", "/");
        }, {
          buffer: 3,
          crypto: 5,
          lYpoI2: 10
        }],
        2: [function (e, t, f) {
          (function (e, t, n, r, o, i, u, a, s) {
            !function (e) {
              "use strict";

              var f = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  n = "+".charCodeAt(0),
                  r = "/".charCodeAt(0),
                  o = "0".charCodeAt(0),
                  i = "a".charCodeAt(0),
                  u = "A".charCodeAt(0),
                  a = "-".charCodeAt(0),
                  s = "_".charCodeAt(0);

              function c(e) {
                var t = e.charCodeAt(0);
                return t === n || t === a ? 62 : t === r || t === s ? 63 : t < o ? -1 : t < o + 10 ? t - o + 26 + 26 : t < u + 26 ? t - u : t < i + 26 ? t - i + 26 : void 0;
              }

              e.toByteArray = function (e) {
                var t, n, r, o, i;
                if (0 < e.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                var u = e.length;
                o = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, i = new f(3 * e.length / 4 - o), n = 0 < o ? e.length - 4 : e.length;
                var a = 0;

                function s(e) {
                  i[a++] = e;
                }

                for (t = 0; t < n; t += 4, 0) {
                  s((16711680 & (r = c(e.charAt(t)) << 18 | c(e.charAt(t + 1)) << 12 | c(e.charAt(t + 2)) << 6 | c(e.charAt(t + 3)))) >> 16), s((65280 & r) >> 8), s(255 & r);
                }

                return 2 == o ? s(255 & (r = c(e.charAt(t)) << 2 | c(e.charAt(t + 1)) >> 4)) : 1 == o && (s((r = c(e.charAt(t)) << 10 | c(e.charAt(t + 1)) << 4 | c(e.charAt(t + 2)) >> 2) >> 8 & 255), s(255 & r)), i;
              }, e.fromByteArray = function (e) {
                var t,
                    n,
                    r,
                    o,
                    i = e.length % 3,
                    u = "";

                function a(e) {
                  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e);
                }

                for (t = 0, r = e.length - i; t < r; t += 3) {
                  n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2], u += a((o = n) >> 18 & 63) + a(o >> 12 & 63) + a(o >> 6 & 63) + a(63 & o);
                }

                switch (i) {
                  case 1:
                    u += a((n = e[e.length - 1]) >> 2), u += a(n << 4 & 63), u += "==";
                    break;

                  case 2:
                    u += a((n = (e[e.length - 2] << 8) + e[e.length - 1]) >> 10), u += a(n >> 4 & 63), u += a(n << 2 & 63), u += "=";
                }

                return u;
              };
            }(void 0 === f ? this.base64js = {} : f);
          }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
        }, {
          buffer: 3,
          lYpoI2: 10
        }],
        3: [function (O, e, H) {
          (function (e, t, h, n, r, o, i, u, a) {
            var s = O("base64-js"),
                f = O("ieee754");

            function h(e, t, n) {
              if (!(this instanceof h)) return new h(e, t, n);
              var r,
                  o,
                  i,
                  u,
                  a,
                  s = typeof e;
              if ("base64" === t && "string" == s) for (e = (r = e).trim ? r.trim() : r.replace(/^\s+|\s+$/g, ""); e.length % 4 != 0;) {
                e += "=";
              }
              if ("number" == s) o = x(e);else if ("string" == s) o = h.byteLength(e, t);else {
                if ("object" != s) throw new Error("First argument needs to be a number, array or string.");
                o = x(e.length);
              }
              if (h._useTypedArrays ? i = h._augment(new Uint8Array(o)) : ((i = this).length = o, i._isBuffer = !0), h._useTypedArrays && "number" == typeof e.byteLength) i._set(e);else if (S(a = e) || h.isBuffer(a) || a && "object" == typeof a && "number" == typeof a.length) for (u = 0; u < o; u++) {
                h.isBuffer(e) ? i[u] = e.readUInt8(u) : i[u] = e[u];
              } else if ("string" == s) i.write(e, 0, t);else if ("number" == s && !h._useTypedArrays && !n) for (u = 0; u < o; u++) {
                i[u] = 0;
              }
              return i;
            }

            function p(e, t, n, r) {
              return h._charsWritten = T(function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  t.push(255 & e.charCodeAt(n));
                }

                return t;
              }(t), e, n, r);
            }

            function g(e, t, n, r) {
              return h._charsWritten = T(function (e) {
                for (var t, n, r, o = [], i = 0; i < e.length; i++) {
                  t = e.charCodeAt(i), n = t >> 8, r = t % 256, o.push(r), o.push(n);
                }

                return o;
              }(t), e, n, r);
            }

            function c(e, t, n) {
              var r = "";
              n = Math.min(e.length, n);

              for (var o = t; o < n; o++) {
                r += String.fromCharCode(e[o]);
              }

              return r;
            }

            function l(e, t, n, r) {
              r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 1 < e.length, "Trying to read beyond buffer length"));
              var o,
                  i = e.length;
              if (!(i <= t)) return n ? (o = e[t], t + 1 < i && (o |= e[t + 1] << 8)) : (o = e[t] << 8, t + 1 < i && (o |= e[t + 1])), o;
            }

            function d(e, t, n, r) {
              r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 3 < e.length, "Trying to read beyond buffer length"));
              var o,
                  i = e.length;
              if (!(i <= t)) return n ? (t + 2 < i && (o = e[t + 2] << 16), t + 1 < i && (o |= e[t + 1] << 8), o |= e[t], t + 3 < i && (o += e[t + 3] << 24 >>> 0)) : (t + 1 < i && (o = e[t + 1] << 16), t + 2 < i && (o |= e[t + 2] << 8), t + 3 < i && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o;
            }

            function y(e, t, n, r) {
              if (r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 1 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) {
                var o = l(e, t, n, !0);
                return 32768 & o ? -1 * (65535 - o + 1) : o;
              }
            }

            function w(e, t, n, r) {
              if (r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 3 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) {
                var o = d(e, t, n, !0);
                return 2147483648 & o ? -1 * (4294967295 - o + 1) : o;
              }
            }

            function b(e, t, n, r) {
              return r || (D("boolean" == typeof n, "missing or invalid endian"), D(t + 3 < e.length, "Trying to read beyond buffer length")), f.read(e, t, n, 23, 4);
            }

            function m(e, t, n, r) {
              return r || (D("boolean" == typeof n, "missing or invalid endian"), D(t + 7 < e.length, "Trying to read beyond buffer length")), f.read(e, t, n, 52, 8);
            }

            function v(e, t, n, r, o) {
              o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 1 < e.length, "trying to write beyond buffer length"), N(t, 65535));
              var i = e.length;
              if (!(i <= n)) for (var u = 0, a = Math.min(i - n, 2); u < a; u++) {
                e[n + u] = (t & 255 << 8 * (r ? u : 1 - u)) >>> 8 * (r ? u : 1 - u);
              }
            }

            function _(e, t, n, r, o) {
              o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 3 < e.length, "trying to write beyond buffer length"), N(t, 4294967295));
              var i = e.length;
              if (!(i <= n)) for (var u = 0, a = Math.min(i - n, 4); u < a; u++) {
                e[n + u] = t >>> 8 * (r ? u : 3 - u) & 255;
              }
            }

            function E(e, t, n, r, o) {
              o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 1 < e.length, "Trying to write beyond buffer length"), Y(t, 32767, -32768)), e.length <= n || v(e, 0 <= t ? t : 65535 + t + 1, n, r, o);
            }

            function I(e, t, n, r, o) {
              o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 3 < e.length, "Trying to write beyond buffer length"), Y(t, 2147483647, -2147483648)), e.length <= n || _(e, 0 <= t ? t : 4294967295 + t + 1, n, r, o);
            }

            function A(e, t, n, r, o) {
              o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 3 < e.length, "Trying to write beyond buffer length"), F(t, 34028234663852886e22, -34028234663852886e22)), e.length <= n || f.write(e, t, n, r, 23, 4);
            }

            function B(e, t, n, r, o) {
              o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 7 < e.length, "Trying to write beyond buffer length"), F(t, 17976931348623157e292, -17976931348623157e292)), e.length <= n || f.write(e, t, n, r, 52, 8);
            }

            H.Buffer = h, H.SlowBuffer = h, H.INSPECT_MAX_BYTES = 50, h.poolSize = 8192, h._useTypedArrays = function () {
              try {
                var e = new ArrayBuffer(0),
                    t = new Uint8Array(e);
                return t.foo = function () {
                  return 42;
                }, 42 === t.foo() && "function" == typeof t.subarray;
              } catch (e) {
                return !1;
              }
            }(), h.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "raw":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;

                default:
                  return !1;
              }
            }, h.isBuffer = function (e) {
              return !(null == e || !e._isBuffer);
            }, h.byteLength = function (e, t) {
              var n;

              switch (e += "", t || "utf8") {
                case "hex":
                  n = e.length / 2;
                  break;

                case "utf8":
                case "utf-8":
                  n = C(e).length;
                  break;

                case "ascii":
                case "binary":
                case "raw":
                  n = e.length;
                  break;

                case "base64":
                  n = k(e).length;
                  break;

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  n = 2 * e.length;
                  break;

                default:
                  throw new Error("Unknown encoding");
              }

              return n;
            }, h.concat = function (e, t) {
              if (D(S(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new h(0);
              if (1 === e.length) return e[0];
              var n;
              if ("number" != typeof t) for (n = t = 0; n < e.length; n++) {
                t += e[n].length;
              }
              var r = new h(t),
                  o = 0;

              for (n = 0; n < e.length; n++) {
                var i = e[n];
                i.copy(r, o), o += i.length;
              }

              return r;
            }, h.prototype.write = function (e, t, n, r) {
              if (isFinite(t)) isFinite(n) || (r = n, n = void 0);else {
                var o = r;
                r = t, t = n, n = o;
              }
              t = Number(t) || 0;
              var i,
                  u,
                  a,
                  s,
                  f,
                  c,
                  l,
                  d = this.length - t;

              switch ((!n || d < (n = Number(n))) && (n = d), r = String(r || "utf8").toLowerCase()) {
                case "hex":
                  i = function (e, t, n, r) {
                    n = Number(n) || 0;
                    var o = e.length - n;
                    (!r || o < (r = Number(r))) && (r = o);
                    var i = t.length;
                    D(i % 2 == 0, "Invalid hex string"), i / 2 < r && (r = i / 2);

                    for (var u = 0; u < r; u++) {
                      var a = parseInt(t.substr(2 * u, 2), 16);
                      D(!isNaN(a), "Invalid hex string"), e[n + u] = a;
                    }

                    return h._charsWritten = 2 * u, u;
                  }(this, e, t, n);

                  break;

                case "utf8":
                case "utf-8":
                  f = this, c = t, l = n, i = h._charsWritten = T(C(e), f, c, l);
                  break;

                case "ascii":
                  i = p(this, e, t, n);
                  break;

                case "binary":
                  i = p(this, e, t, n);
                  break;

                case "base64":
                  u = this, a = t, s = n, i = h._charsWritten = T(k(e), u, a, s);
                  break;

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  i = g(this, e, t, n);
                  break;

                default:
                  throw new Error("Unknown encoding");
              }

              return i;
            }, h.prototype.toString = function (e, t, n) {
              var r,
                  o,
                  i,
                  u,
                  a = this;
              if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, (n = void 0 !== n ? Number(n) : n = a.length) === t) return "";

              switch (e) {
                case "hex":
                  r = function (e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0);
                    (!n || n < 0 || r < n) && (n = r);

                    for (var o = "", i = t; i < n; i++) {
                      o += j(e[i]);
                    }

                    return o;
                  }(a, t, n);

                  break;

                case "utf8":
                case "utf-8":
                  r = function (e, t, n) {
                    var r = "",
                        o = "";
                    n = Math.min(e.length, n);

                    for (var i = t; i < n; i++) {
                      e[i] <= 127 ? (r += M(o) + String.fromCharCode(e[i]), o = "") : o += "%" + e[i].toString(16);
                    }

                    return r + M(o);
                  }(a, t, n);

                  break;

                case "ascii":
                  r = c(a, t, n);
                  break;

                case "binary":
                  r = c(a, t, n);
                  break;

                case "base64":
                  o = a, u = n, r = 0 === (i = t) && u === o.length ? s.fromByteArray(o) : s.fromByteArray(o.slice(i, u));
                  break;

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  r = function (e, t, n) {
                    for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) {
                      o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                    }

                    return o;
                  }(a, t, n);

                  break;

                default:
                  throw new Error("Unknown encoding");
              }

              return r;
            }, h.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            }, h.prototype.copy = function (e, t, n, r) {
              if (n = n || 0, r || 0 === r || (r = this.length), t = t || 0, r !== n && 0 !== e.length && 0 !== this.length) {
                D(n <= r, "sourceEnd < sourceStart"), D(0 <= t && t < e.length, "targetStart out of bounds"), D(0 <= n && n < this.length, "sourceStart out of bounds"), D(0 <= r && r <= this.length, "sourceEnd out of bounds"), r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var o = r - n;
                if (o < 100 || !h._useTypedArrays) for (var i = 0; i < o; i++) {
                  e[i + t] = this[i + n];
                } else e._set(this.subarray(n, n + o), t);
              }
            }, h.prototype.slice = function (e, t) {
              var n = this.length;
              if (e = U(e, n, 0), t = U(t, n, n), h._useTypedArrays) return h._augment(this.subarray(e, t));

              for (var r = t - e, o = new h(r, void 0, !0), i = 0; i < r; i++) {
                o[i] = this[i + e];
              }

              return o;
            }, h.prototype.get = function (e) {
              return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e);
            }, h.prototype.set = function (e, t) {
              return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t);
            }, h.prototype.readUInt8 = function (e, t) {
              if (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e];
            }, h.prototype.readUInt16LE = function (e, t) {
              return l(this, e, !0, t);
            }, h.prototype.readUInt16BE = function (e, t) {
              return l(this, e, !1, t);
            }, h.prototype.readUInt32LE = function (e, t) {
              return d(this, e, !0, t);
            }, h.prototype.readUInt32BE = function (e, t) {
              return d(this, e, !1, t);
            }, h.prototype.readInt8 = function (e, t) {
              if (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
            }, h.prototype.readInt16LE = function (e, t) {
              return y(this, e, !0, t);
            }, h.prototype.readInt16BE = function (e, t) {
              return y(this, e, !1, t);
            }, h.prototype.readInt32LE = function (e, t) {
              return w(this, e, !0, t);
            }, h.prototype.readInt32BE = function (e, t) {
              return w(this, e, !1, t);
            }, h.prototype.readFloatLE = function (e, t) {
              return b(this, e, !0, t);
            }, h.prototype.readFloatBE = function (e, t) {
              return b(this, e, !1, t);
            }, h.prototype.readDoubleLE = function (e, t) {
              return m(this, e, !0, t);
            }, h.prototype.readDoubleBE = function (e, t) {
              return m(this, e, !1, t);
            }, h.prototype.writeUInt8 = function (e, t, n) {
              n || (D(null != e, "missing value"), D(null != t, "missing offset"), D(t < this.length, "trying to write beyond buffer length"), N(e, 255)), t >= this.length || (this[t] = e);
            }, h.prototype.writeUInt16LE = function (e, t, n) {
              v(this, e, t, !0, n);
            }, h.prototype.writeUInt16BE = function (e, t, n) {
              v(this, e, t, !1, n);
            }, h.prototype.writeUInt32LE = function (e, t, n) {
              _(this, e, t, !0, n);
            }, h.prototype.writeUInt32BE = function (e, t, n) {
              _(this, e, t, !1, n);
            }, h.prototype.writeInt8 = function (e, t, n) {
              n || (D(null != e, "missing value"), D(null != t, "missing offset"), D(t < this.length, "Trying to write beyond buffer length"), Y(e, 127, -128)), t >= this.length || (0 <= e ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n));
            }, h.prototype.writeInt16LE = function (e, t, n) {
              E(this, e, t, !0, n);
            }, h.prototype.writeInt16BE = function (e, t, n) {
              E(this, e, t, !1, n);
            }, h.prototype.writeInt32LE = function (e, t, n) {
              I(this, e, t, !0, n);
            }, h.prototype.writeInt32BE = function (e, t, n) {
              I(this, e, t, !1, n);
            }, h.prototype.writeFloatLE = function (e, t, n) {
              A(this, e, t, !0, n);
            }, h.prototype.writeFloatBE = function (e, t, n) {
              A(this, e, t, !1, n);
            }, h.prototype.writeDoubleLE = function (e, t, n) {
              B(this, e, t, !0, n);
            }, h.prototype.writeDoubleBE = function (e, t, n) {
              B(this, e, t, !1, n);
            }, h.prototype.fill = function (e, t, n) {
              if (e = e || 0, t = t || 0, n = n || this.length, "string" == typeof e && (e = e.charCodeAt(0)), D("number" == typeof e && !isNaN(e), "value is not a number"), D(t <= n, "end < start"), n !== t && 0 !== this.length) {
                D(0 <= t && t < this.length, "start out of bounds"), D(0 <= n && n <= this.length, "end out of bounds");

                for (var r = t; r < n; r++) {
                  this[r] = e;
                }
              }
            }, h.prototype.inspect = function () {
              for (var e = [], t = this.length, n = 0; n < t; n++) {
                if (e[n] = j(this[n]), n === H.INSPECT_MAX_BYTES) {
                  e[n + 1] = "...";
                  break;
                }
              }

              return "<Buffer " + e.join(" ") + ">";
            }, h.prototype.toArrayBuffer = function () {
              if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
              if (h._useTypedArrays) return new h(this).buffer;

              for (var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1) {
                e[t] = this[t];
              }

              return e.buffer;
            };
            var L = h.prototype;

            function U(e, t, n) {
              return "number" != typeof e ? n : t <= (e = ~~e) ? t : 0 <= e || 0 <= (e += t) ? e : 0;
            }

            function x(e) {
              return (e = ~~Math.ceil(+e)) < 0 ? 0 : e;
            }

            function S(e) {
              return (Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              })(e);
            }

            function j(e) {
              return e < 16 ? "0" + e.toString(16) : e.toString(16);
            }

            function C(e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r <= 127) t.push(e.charCodeAt(n));else {
                  var o = n;
                  55296 <= r && r <= 57343 && n++;

                  for (var i = encodeURIComponent(e.slice(o, n + 1)).substr(1).split("%"), u = 0; u < i.length; u++) {
                    t.push(parseInt(i[u], 16));
                  }
                }
              }

              return t;
            }

            function k(e) {
              return s.toByteArray(e);
            }

            function T(e, t, n, r) {
              for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); o++) {
                t[o + n] = e[o];
              }

              return o;
            }

            function M(e) {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                return String.fromCharCode(65533);
              }
            }

            function N(e, t) {
              D("number" == typeof e, "cannot write a non-number as a number"), D(0 <= e, "specified a negative value for writing an unsigned value"), D(e <= t, "value is larger than maximum value for type"), D(Math.floor(e) === e, "value has a fractional component");
            }

            function Y(e, t, n) {
              D("number" == typeof e, "cannot write a non-number as a number"), D(e <= t, "value larger than maximum allowed value"), D(n <= e, "value smaller than minimum allowed value"), D(Math.floor(e) === e, "value has a fractional component");
            }

            function F(e, t, n) {
              D("number" == typeof e, "cannot write a non-number as a number"), D(e <= t, "value larger than maximum allowed value"), D(n <= e, "value smaller than minimum allowed value");
            }

            function D(e, t) {
              if (!e) throw new Error(t || "Failed assertion");
            }

            h._augment = function (e) {
              return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = L.get, e.set = L.set, e.write = L.write, e.toString = L.toString, e.toLocaleString = L.toString, e.toJSON = L.toJSON, e.copy = L.copy, e.slice = L.slice, e.readUInt8 = L.readUInt8, e.readUInt16LE = L.readUInt16LE, e.readUInt16BE = L.readUInt16BE, e.readUInt32LE = L.readUInt32LE, e.readUInt32BE = L.readUInt32BE, e.readInt8 = L.readInt8, e.readInt16LE = L.readInt16LE, e.readInt16BE = L.readInt16BE, e.readInt32LE = L.readInt32LE, e.readInt32BE = L.readInt32BE, e.readFloatLE = L.readFloatLE, e.readFloatBE = L.readFloatBE, e.readDoubleLE = L.readDoubleLE, e.readDoubleBE = L.readDoubleBE, e.writeUInt8 = L.writeUInt8, e.writeUInt16LE = L.writeUInt16LE, e.writeUInt16BE = L.writeUInt16BE, e.writeUInt32LE = L.writeUInt32LE, e.writeUInt32BE = L.writeUInt32BE, e.writeInt8 = L.writeInt8, e.writeInt16LE = L.writeInt16LE, e.writeInt16BE = L.writeInt16BE, e.writeInt32LE = L.writeInt32LE, e.writeInt32BE = L.writeInt32BE, e.writeFloatLE = L.writeFloatLE, e.writeFloatBE = L.writeFloatBE, e.writeDoubleLE = L.writeDoubleLE, e.writeDoubleBE = L.writeDoubleBE, e.fill = L.fill, e.inspect = L.inspect, e.toArrayBuffer = L.toArrayBuffer, e;
            };
          }).call(this, O("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
        }, {
          "base64-js": 2,
          buffer: 3,
          ieee754: 11,
          lYpoI2: 10
        }],
        4: [function (l, d, e) {
          (function (e, t, u, n, r, o, i, a, s) {
            u = l("buffer").Buffer;
            var f = 4,
                c = new u(f);
            c.fill(0);
            d.exports = {
              hash: function hash(e, t, n, r) {
                return u.isBuffer(e) || (e = new u(e)), function (e, t, n) {
                  for (var r = new u(t), o = n ? r.writeInt32BE : r.writeInt32LE, i = 0; i < e.length; i++) {
                    o.call(r, e[i], 4 * i, !0);
                  }

                  return r;
                }(t(function (e, t) {
                  if (e.length % f != 0) {
                    var n = e.length + (f - e.length % f);
                    e = u.concat([e, c], n);
                  }

                  for (var r = [], o = t ? e.readInt32BE : e.readInt32LE, i = 0; i < e.length; i += f) {
                    r.push(o.call(e, i));
                  }

                  return r;
                }(e, r), 8 * e.length), n, r);
              }
            };
          }).call(this, l("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, {
          buffer: 3,
          lYpoI2: 10
        }],
        5: [function (w, e, b) {
          (function (e, t, a, n, r, o, i, u, s) {
            a = w("buffer").Buffer;
            var f = w("./sha"),
                c = w("./sha256"),
                l = w("./rng"),
                d = {
              sha1: f,
              sha256: c,
              md5: w("./md5")
            },
                h = 64,
                p = new a(h);

            function g(e, r) {
              var o = d[e = e || "sha1"],
                  i = [];
              return o || y("algorithm:", e, "is not yet supported"), {
                update: function update(e) {
                  return a.isBuffer(e) || (e = new a(e)), i.push(e), e.length, this;
                },
                digest: function digest(e) {
                  var t = a.concat(i),
                      n = r ? function (e, t, n) {
                    a.isBuffer(t) || (t = new a(t)), a.isBuffer(n) || (n = new a(n)), t.length > h ? t = e(t) : t.length < h && (t = a.concat([t, p], h));

                    for (var r = new a(h), o = new a(h), i = 0; i < h; i++) {
                      r[i] = 54 ^ t[i], o[i] = 92 ^ t[i];
                    }

                    var u = e(a.concat([r, n]));
                    return e(a.concat([o, u]));
                  }(o, r, t) : o(t);
                  return i = null, e ? n.toString(e) : n;
                }
              };
            }

            function y() {
              var e = [].slice.call(arguments).join(" ");
              throw new Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
            }

            p.fill(0), b.createHash = function (e) {
              return g(e);
            }, b.createHmac = function (e, t) {
              return g(e, t);
            }, b.randomBytes = function (e, t) {
              if (!t || !t.call) return new a(l(e));

              try {
                t.call(this, void 0, new a(l(e)));
              } catch (e) {
                t(e);
              }
            }, function (e, t) {
              for (var n in e) {
                t(e[n], n);
              }
            }(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], function (e) {
              b[e] = function () {
                y("sorry,", e, "is not implemented yet");
              };
            });
          }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, {
          "./md5": 6,
          "./rng": 7,
          "./sha": 8,
          "./sha256": 9,
          buffer: 3,
          lYpoI2: 10
        }],
        6: [function (w, b, e) {
          (function (e, t, n, r, o, i, u, a, s) {
            var f = w("./helpers");

            function c(e, t) {
              e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;

              for (var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, u = 0; u < e.length; u += 16) {
                var a = n,
                    s = r,
                    f = o,
                    c = i;
                n = d(n, r, o, i, e[u + 0], 7, -680876936), i = d(i, n, r, o, e[u + 1], 12, -389564586), o = d(o, i, n, r, e[u + 2], 17, 606105819), r = d(r, o, i, n, e[u + 3], 22, -1044525330), n = d(n, r, o, i, e[u + 4], 7, -176418897), i = d(i, n, r, o, e[u + 5], 12, 1200080426), o = d(o, i, n, r, e[u + 6], 17, -1473231341), r = d(r, o, i, n, e[u + 7], 22, -45705983), n = d(n, r, o, i, e[u + 8], 7, 1770035416), i = d(i, n, r, o, e[u + 9], 12, -1958414417), o = d(o, i, n, r, e[u + 10], 17, -42063), r = d(r, o, i, n, e[u + 11], 22, -1990404162), n = d(n, r, o, i, e[u + 12], 7, 1804603682), i = d(i, n, r, o, e[u + 13], 12, -40341101), o = d(o, i, n, r, e[u + 14], 17, -1502002290), n = h(n, r = d(r, o, i, n, e[u + 15], 22, 1236535329), o, i, e[u + 1], 5, -165796510), i = h(i, n, r, o, e[u + 6], 9, -1069501632), o = h(o, i, n, r, e[u + 11], 14, 643717713), r = h(r, o, i, n, e[u + 0], 20, -373897302), n = h(n, r, o, i, e[u + 5], 5, -701558691), i = h(i, n, r, o, e[u + 10], 9, 38016083), o = h(o, i, n, r, e[u + 15], 14, -660478335), r = h(r, o, i, n, e[u + 4], 20, -405537848), n = h(n, r, o, i, e[u + 9], 5, 568446438), i = h(i, n, r, o, e[u + 14], 9, -1019803690), o = h(o, i, n, r, e[u + 3], 14, -187363961), r = h(r, o, i, n, e[u + 8], 20, 1163531501), n = h(n, r, o, i, e[u + 13], 5, -1444681467), i = h(i, n, r, o, e[u + 2], 9, -51403784), o = h(o, i, n, r, e[u + 7], 14, 1735328473), n = p(n, r = h(r, o, i, n, e[u + 12], 20, -1926607734), o, i, e[u + 5], 4, -378558), i = p(i, n, r, o, e[u + 8], 11, -2022574463), o = p(o, i, n, r, e[u + 11], 16, 1839030562), r = p(r, o, i, n, e[u + 14], 23, -35309556), n = p(n, r, o, i, e[u + 1], 4, -1530992060), i = p(i, n, r, o, e[u + 4], 11, 1272893353), o = p(o, i, n, r, e[u + 7], 16, -155497632), r = p(r, o, i, n, e[u + 10], 23, -1094730640), n = p(n, r, o, i, e[u + 13], 4, 681279174), i = p(i, n, r, o, e[u + 0], 11, -358537222), o = p(o, i, n, r, e[u + 3], 16, -722521979), r = p(r, o, i, n, e[u + 6], 23, 76029189), n = p(n, r, o, i, e[u + 9], 4, -640364487), i = p(i, n, r, o, e[u + 12], 11, -421815835), o = p(o, i, n, r, e[u + 15], 16, 530742520), n = g(n, r = p(r, o, i, n, e[u + 2], 23, -995338651), o, i, e[u + 0], 6, -198630844), i = g(i, n, r, o, e[u + 7], 10, 1126891415), o = g(o, i, n, r, e[u + 14], 15, -1416354905), r = g(r, o, i, n, e[u + 5], 21, -57434055), n = g(n, r, o, i, e[u + 12], 6, 1700485571), i = g(i, n, r, o, e[u + 3], 10, -1894986606), o = g(o, i, n, r, e[u + 10], 15, -1051523), r = g(r, o, i, n, e[u + 1], 21, -2054922799), n = g(n, r, o, i, e[u + 8], 6, 1873313359), i = g(i, n, r, o, e[u + 15], 10, -30611744), o = g(o, i, n, r, e[u + 6], 15, -1560198380), r = g(r, o, i, n, e[u + 13], 21, 1309151649), n = g(n, r, o, i, e[u + 4], 6, -145523070), i = g(i, n, r, o, e[u + 11], 10, -1120210379), o = g(o, i, n, r, e[u + 2], 15, 718787259), r = g(r, o, i, n, e[u + 9], 21, -343485551), n = y(n, a), r = y(r, s), o = y(o, f), i = y(i, c);
              }

              return Array(n, r, o, i);
            }

            function l(e, t, n, r, o, i) {
              return y((u = y(y(t, e), y(r, i))) << (a = o) | u >>> 32 - a, n);
              var u, a;
            }

            function d(e, t, n, r, o, i, u) {
              return l(t & n | ~t & r, e, t, o, i, u);
            }

            function h(e, t, n, r, o, i, u) {
              return l(t & r | n & ~r, e, t, o, i, u);
            }

            function p(e, t, n, r, o, i, u) {
              return l(t ^ n ^ r, e, t, o, i, u);
            }

            function g(e, t, n, r, o, i, u) {
              return l(n ^ (t | ~r), e, t, o, i, u);
            }

            function y(e, t) {
              var n = (65535 & e) + (65535 & t);
              return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }

            b.exports = function (e) {
              return f.hash(e, c, 16);
            };
          }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, {
          "./helpers": 4,
          buffer: 3,
          lYpoI2: 10
        }],
        7: [function (e, l, t) {
          (function (e, t, n, r, o, i, u, a, s) {
            var f, c;
            f = function f(e) {
              for (var t, n = new Array(e), r = 0; r < e; r++) {
                0 == (3 & r) && (t = 4294967296 * Math.random()), n[r] = t >>> ((3 & r) << 3) & 255;
              }

              return n;
            }, l.exports = c || f;
          }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, {
          buffer: 3,
          lYpoI2: 10
        }],
        8: [function (l, d, e) {
          (function (e, t, n, r, o, i, u, a, s) {
            var f = l("./helpers");

            function c(e, t) {
              e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;

              for (var n, r = Array(80), o = 1732584193, i = -271733879, u = -1732584194, a = 271733878, s = -1009589776, f = 0; f < e.length; f += 16) {
                for (var c = o, l = i, d = u, h = a, p = s, g = 0; g < 80; g++) {
                  r[g] = g < 16 ? e[f + g] : m(r[g - 3] ^ r[g - 8] ^ r[g - 14] ^ r[g - 16], 1);
                  var y = b(b(m(o, 5), w(g, i, u, a)), b(b(s, r[g]), (n = g) < 20 ? 1518500249 : n < 40 ? 1859775393 : n < 60 ? -1894007588 : -899497514));
                  s = a, a = u, u = m(i, 30), i = o, o = y;
                }

                o = b(o, c), i = b(i, l), u = b(u, d), a = b(a, h), s = b(s, p);
              }

              return Array(o, i, u, a, s);
            }

            function w(e, t, n, r) {
              return e < 20 ? t & n | ~t & r : !(e < 40) && e < 60 ? t & n | t & r | n & r : t ^ n ^ r;
            }

            function b(e, t) {
              var n = (65535 & e) + (65535 & t);
              return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }

            function m(e, t) {
              return e << t | e >>> 32 - t;
            }

            d.exports = function (e) {
              return f.hash(e, c, 20, !0);
            };
          }).call(this, l("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, {
          "./helpers": 4,
          buffer: 3,
          lYpoI2: 10
        }],
        9: [function (l, d, e) {
          (function (e, t, n, r, o, i, u, a, s) {
            function B(e, t) {
              var n = (65535 & e) + (65535 & t);
              return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }

            function L(e, t) {
              return e >>> t | e << 32 - t;
            }

            function U(e, t) {
              return e >>> t;
            }

            function f(e, t) {
              var n,
                  r,
                  o,
                  i,
                  u,
                  a,
                  s,
                  f,
                  c,
                  l,
                  d,
                  h,
                  p,
                  g,
                  y,
                  w,
                  b,
                  m,
                  v = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
                  _ = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
                  E = new Array(64);

              e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;

              for (var I = 0; I < e.length; I += 16) {
                n = _[0], r = _[1], o = _[2], i = _[3], u = _[4], a = _[5], s = _[6], f = _[7];

                for (var A = 0; A < 64; A++) {
                  E[A] = A < 16 ? e[A + I] : B(B(B((m = E[A - 2], L(m, 17) ^ L(m, 19) ^ U(m, 10)), E[A - 7]), (b = E[A - 15], L(b, 7) ^ L(b, 18) ^ U(b, 3))), E[A - 16]), c = B(B(B(B(f, L(w = u, 6) ^ L(w, 11) ^ L(w, 25)), (y = u) & a ^ ~y & s), v[A]), E[A]), l = B(L(g = n, 2) ^ L(g, 13) ^ L(g, 22), (d = n) & (h = r) ^ d & (p = o) ^ h & p), f = s, s = a, a = u, u = B(i, c), i = o, o = r, r = n, n = B(c, l);
                }

                _[0] = B(n, _[0]), _[1] = B(r, _[1]), _[2] = B(o, _[2]), _[3] = B(i, _[3]), _[4] = B(u, _[4]), _[5] = B(a, _[5]), _[6] = B(s, _[6]), _[7] = B(f, _[7]);
              }

              return _;
            }

            var c = l("./helpers");

            d.exports = function (e) {
              return c.hash(e, f, 32, !0);
            };
          }).call(this, l("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, {
          "./helpers": 4,
          buffer: 3,
          lYpoI2: 10
        }],
        10: [function (e, c, t) {
          (function (e, t, n, r, o, i, u, a, s) {
            function f() {}

            (e = c.exports = {}).nextTick = function () {
              var e = "undefined" != typeof window && window.setImmediate,
                  t = "undefined" != typeof window && window.postMessage && window.addEventListener;
              if (e) return function (e) {
                return window.setImmediate(e);
              };

              if (t) {
                var n = [];
                return window.addEventListener("message", function (e) {
                  var t = e.source;
                  t !== window && null !== t || "process-tick" !== e.data || (e.stopPropagation(), 0 < n.length && n.shift()());
                }, !0), function (e) {
                  n.push(e), window.postMessage("process-tick", "*");
                };
              }

              return function (e) {
                setTimeout(e, 0);
              };
            }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = f, e.addListener = f, e.once = f, e.off = f, e.removeListener = f, e.removeAllListeners = f, e.emit = f, e.binding = function (e) {
              throw new Error("process.binding is not supported");
            }, e.cwd = function () {
              return "/";
            }, e.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            };
          }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
        }, {
          buffer: 3,
          lYpoI2: 10
        }],
        11: [function (e, t, f) {
          (function (e, t, n, r, o, i, u, a, s) {
            f.read = function (e, t, n, r, o) {
              var i,
                  u,
                  a = 8 * o - r - 1,
                  s = (1 << a) - 1,
                  f = s >> 1,
                  c = -7,
                  l = n ? o - 1 : 0,
                  d = n ? -1 : 1,
                  h = e[t + l];

              for (l += d, i = h & (1 << -c) - 1, h >>= -c, c += a; 0 < c; i = 256 * i + e[t + l], l += d, c -= 8) {
                ;
              }

              for (u = i & (1 << -c) - 1, i >>= -c, c += r; 0 < c; u = 256 * u + e[t + l], l += d, c -= 8) {
                ;
              }

              if (0 === i) i = 1 - f;else {
                if (i === s) return u ? NaN : 1 / 0 * (h ? -1 : 1);
                u += Math.pow(2, r), i -= f;
              }
              return (h ? -1 : 1) * u * Math.pow(2, i - r);
            }, f.write = function (e, t, n, r, o, i) {
              var u,
                  a,
                  s,
                  f = 8 * i - o - 1,
                  c = (1 << f) - 1,
                  l = c >> 1,
                  d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  h = r ? 0 : i - 1,
                  p = r ? 1 : -1,
                  g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

              for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, u = c) : (u = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), 2 <= (t += 1 <= u + l ? d / s : d * Math.pow(2, 1 - l)) * s && (u++, s /= 2), c <= u + l ? (a = 0, u = c) : 1 <= u + l ? (a = (t * s - 1) * Math.pow(2, o), u += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), u = 0)); 8 <= o; e[n + h] = 255 & a, h += p, a /= 256, o -= 8) {
                ;
              }

              for (u = u << o | a, f += o; 0 < f; e[n + h] = 255 & u, h += p, u /= 256, f -= 8) {
                ;
              }

              e[n + h - p] |= 128 * g;
            };
          }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754");
        }, {
          buffer: 3,
          lYpoI2: 10
        }]
      }, {}, [1])(1);
    });
    /***/
  }
  /******/

});