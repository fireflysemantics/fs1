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

  return __webpack_require__(__webpack_require__.s = "./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js?!./node_modules/@ngtools/webpack/src/index.js!./src/app/shared/csv-history-load.worker.ts");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js?!./node_modules/@ngtools/webpack/src/index.js!./src/app/shared/csv-history-load.worker.ts":
  /*!***************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js??ref--16-0!./node_modules/@ngtools/webpack/src!./src/app/shared/csv-history-load.worker.ts ***!
    \***************************************************************************************************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAngularDevkitBuildOptimizerSrcBuildOptimizerWebpackLoaderJsNode_modulesNgtoolsWebpackSrcIndexJsSrcAppSharedCsvHistoryLoadWorkerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @fireflysemantics/csv */
    "./node_modules/@fireflysemantics/csv/__ivy_ngcc__/fesm2015/fireflysemantics-csv.js"); /// <reference lib="webworker" />


    addEventListener('message', function (_ref) {
      var data = _ref.data;
      var result = Object(_fireflysemantics_csv__WEBPACK_IMPORTED_MODULE_0__["readCSV"])(data);
      postMessage(result);
    });
    /***/
  },

  /***/
  "./node_modules/@fireflysemantics/csv/__ivy_ngcc__/fesm2015/fireflysemantics-csv.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/@fireflysemantics/csv/__ivy_ngcc__/fesm2015/fireflysemantics-csv.js ***!
    \******************************************************************************************/

  /*! exports provided: CSV_DEFAULT_CONFIG, ErrorCodes, readCSV, writeCSV, ɵ0 */

  /***/
  function node_modulesFireflysemanticsCsv__ivy_ngcc__Fesm2015FireflysemanticsCsvJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSV_DEFAULT_CONFIG", function () {
      return CSV_DEFAULT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorCodes", function () {
      return ErrorCodes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "readCSV", function () {
      return readCSV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "writeCSV", function () {
      return writeCSV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! papaparse */
    "./node_modules/papaparse/papaparse.min.js");
    /* harmony import */


    var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);

    var ɵ0 = function ɵ0(h) {
      return h.trim();
    };
    /**
     * Default configuration
     * commonly used when we parse
     * CSV.
     *
     * It maps the rows to javascript
     * objects and uses commas as the delimiter.
     */


    var CSV_DEFAULT_CONFIG = {
      delimiter: ",",
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: ɵ0
    };
    /**
     * Unparse the array of entities of type E.
     *
     * @param config Optional, uses the CSV_DEFAULT_CONFIG if none is provided
     * @param entities The array of objects
     */

    function writeCSV(entities) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSV_DEFAULT_CONFIG;
      return Object(papaparse__WEBPACK_IMPORTED_MODULE_0__["unparse"])(entities, config);
    }
    /**
     * Load the CSV File
     *
     * @param csv The file containing the CSV data
     * @return An {@link ParseResult}.
     *
     * @example
    ```
    let pocsv = `sku, quantity, purchaseCost, purchaseDate, receiptDate
    "sk22",2,30000,12/23/2017,2/15/2019
    "sk33",2,30000,2/23/2017,4/15/2019`;
    
    let result:ParseResult = load(csv);
    
    console.log(result);
    
          {
            data: [
              {
                id: "''",
                sku: ' "sk22"',
                quantity: 2,
                purchaseCost: 30000,
                purchaseDate: '12/23/2017',
                receiptDate: '2/15/2019 '
              },
              {
                id: "''",
                sku: ' "sk33"',
                quantity: 2,
                purchaseCost: 30000,
                purchaseDate: '2/23/2017',
                receiptDate: '4/15/2019'
              }
            ],
            errors: [],
            meta: {
              delimiter: ',',
              linebreak: '\n',
              aborted: false,
              truncated: false,
              cursor: 138,
              fields: [
                'id',
                'sku',
                'quantity',
                'purchaseCost',
                'purchaseDate',
                'receiptDate'
              ]
            }
          }
    
    
     ```
     */


    function readCSV(csv) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSV_DEFAULT_CONFIG;
      return Object(papaparse__WEBPACK_IMPORTED_MODULE_0__["parse"])(csv.trim(), config);
    }
    /**
     * These can be found by searching the Papaparse code base
     * for `addError`.
     */


    var ErrorCodes = /*@__PURE__*/function (ErrorCodes) {
      /**
       * Results when the CSV record has too few fields WRT Headers.
       * @example
      ```
      {
      type: 'FieldMismatch',
      code: 'TooFewFields',
      message: 'Too few fields: expected 10 fields but parsed 1',
      row: 0
      }
      ```
       */
      ErrorCodes["TOO_FEW_FIELDS"] = "TooFewFields";
      /** Results when the CSV record has too many fields WRT Headers.
       * @example
      ```
      {
      type: 'FieldMismatch',
      code: 'TooManyFields',
      message: 'Too many fields: expected 6 fields but parsed 8',
      row: 1
      }
      ```
      */

      ErrorCodes["TOO_MANY_FIELDS"] = "TooManyFields";
      /** Results when the CSV record contains invalid / malformed quote character.
       *
       * @example
      ```
      errors: [
      {
        type: 'Quotes',
        code: 'InvalidQuotes',
        message: 'Trailing quote on quoted field is malformed',
        row: 0,
        index: 59
      }
      ```
       */

      ErrorCodes["INVALID_QUOTES"] = "InvalidQuotes";
      /** Results when the quoted field is unterminated.
       * @example
      ```
      {
      type: 'Quotes',
      code: 'MissingQuotes',
      message: 'Quoted field unterminated',
      row: 1,
      index: 60
      }
      ```
      */

      ErrorCodes["MISSING_QUOTES"] = "MissingQuotes";
      /**
       * Results when the delimiter cannot be detected.
       * We have the delimiter configured to a comma
       * so we don't have to worry about this.
       *
       */

      ErrorCodes["UNDETECTABLE_DELIMITER"] = "UndetectableDelimiter";
      return ErrorCodes;
    }({});
    /*
     * Public API Surface of csv
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=fireflysemantics-csv.js.map

    /***/

  },

  /***/
  "./node_modules/papaparse/papaparse.min.js":
  /*!*************************************************!*\
    !*** ./node_modules/papaparse/papaparse.min.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPapaparsePapaparseMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /* @license
    Papa Parse
    v5.2.0
    https://github.com/mholt/PapaParse
    License: MIT
    */


    !function (e, t) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = t, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    }(this, function s() {
      "use strict";

      var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
      var n = !f.document && !!f.postMessage,
          o = n && /blob:/i.test((f.location || {}).protocol),
          a = {},
          h = 0,
          b = {
        parse: function parse(e, t) {
          var i = (t = t || {}).dynamicTyping || !1;
          U(i) && (t.dynamicTypingFunction = i, i = {});

          if (t.dynamicTyping = i, t.transform = !!U(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
            var r = function () {
              if (!b.WORKERS_SUPPORTED) return !1;
              var e = (i = f.URL || f.webkitURL || null, r = s.toString(), b.BLOB_URL || (b.BLOB_URL = i.createObjectURL(new Blob(["(", r, ")();"], {
                type: "text/javascript"
              })))),
                  t = new f.Worker(e);
              var i, r;
              return t.onmessage = _, t.id = h++, a[t.id] = t;
            }();

            return r.userStep = t.step, r.userChunk = t.chunk, r.userComplete = t.complete, r.userError = t.error, t.step = U(t.step), t.chunk = U(t.chunk), t.complete = U(t.complete), t.error = U(t.error), delete t.worker, void r.postMessage({
              input: e,
              config: t,
              workerId: r.id
            });
          }

          var n = null;
          b.NODE_STREAM_INPUT, "string" == typeof e ? n = t.download ? new l(t) : new p(t) : !0 === e.readable && U(e.read) && U(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
          return n.stream(e);
        },
        unparse: function unparse(e, t) {
          var n = !1,
              _ = !0,
              m = ",",
              v = "\r\n",
              s = '"',
              a = s + s,
              i = !1,
              r = null;

          !function () {
            if ("object" != typeof t) return;
            "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function (e) {
              return -1 !== t.delimiter.indexOf(e);
            }).length || (m = t.delimiter);
            ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
            "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines);
            "string" == typeof t.newline && (v = t.newline);
            "string" == typeof t.quoteChar && (s = t.quoteChar);
            "boolean" == typeof t.header && (_ = t.header);

            if (Array.isArray(t.columns)) {
              if (0 === t.columns.length) throw new Error("Option columns is empty");
              r = t.columns;
            }

            void 0 !== t.escapeChar && (a = t.escapeChar + s);
          }();
          var o = new RegExp(q(s), "g");
          "string" == typeof e && (e = JSON.parse(e));

          if (Array.isArray(e)) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, i);
            if ("object" == typeof e[0]) return u(r || h(e[0]), e, i);
          } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : h(e.data[0])), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])), u(e.fields || [], e.data || [], i);

          throw new Error("Unable to serialize unrecognized input");

          function h(e) {
            if ("object" != typeof e) return [];
            var t = [];

            for (var i in e) {
              t.push(i);
            }

            return t;
          }

          function u(e, t, i) {
            var r = "";
            "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
            var n = Array.isArray(e) && 0 < e.length,
                s = !Array.isArray(t[0]);

            if (n && _) {
              for (var a = 0; a < e.length; a++) {
                0 < a && (r += m), r += y(e[a], a);
              }

              0 < t.length && (r += v);
            }

            for (var o = 0; o < t.length; o++) {
              var h = n ? e.length : t[o].length,
                  u = !1,
                  f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;

              if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                for (var d = [], l = 0; l < h; l++) {
                  var c = s ? e[l] : l;
                  d.push(t[o][c]);
                }

                u = "" === d.join("").trim();
              }

              if (!u) {
                for (var p = 0; p < h; p++) {
                  0 < p && !f && (r += m);
                  var g = n && s ? e[p] : p;
                  r += y(t[o][g], p);
                }

                o < t.length - 1 && (!i || 0 < h && !f) && (r += v);
              }
            }

            return r;
          }

          function y(e, t) {
            if (null == e) return "";
            if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);

            var i = e.toString().replace(o, a),
                r = "boolean" == typeof n && n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function (e, t) {
              for (var i = 0; i < t.length; i++) {
                if (-1 < e.indexOf(t[i])) return !0;
              }

              return !1;
            }(i, b.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1);

            return r ? s + i + s : i;
          }
        }
      };

      if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", "\n", '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = w, b.ParserHandle = i, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
        var d = f.jQuery;

        d.fn.parse = function (o) {
          var i = o.config || {},
              h = [];
          return this.each(function (e) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;

            for (var t = 0; t < this.files.length; t++) {
              h.push({
                file: this.files[t],
                inputElem: this,
                instanceConfig: d.extend({}, i)
              });
            }
          }), e(), this;

          function e() {
            if (0 !== h.length) {
              var e,
                  t,
                  i,
                  r,
                  n = h[0];

              if (U(o.before)) {
                var s = o.before(n.file, n.inputElem);

                if ("object" == typeof s) {
                  if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (U(o.error) && o.error({
                    name: e
                  }, t, i, r));
                  if ("skip" === s.action) return void u();
                  "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                } else if ("skip" === s) return void u();
              }

              var a = n.instanceConfig.complete;
              n.instanceConfig.complete = function (e) {
                U(a) && a(e, n.file, n.inputElem), u();
              }, b.parse(n.file, n.instanceConfig);
            } else U(o.complete) && o.complete();
          }

          function u() {
            h.splice(0, 1), e();
          }
        };
      }

      function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
          data: [],
          errors: [],
          meta: {}
        }, function (e) {
          var t = E(e);
          t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
          this._handle = new i(t), (this._handle.streamer = this)._config = t;
        }.call(this, e), this.parseChunk = function (e, t) {
          if (this.isFirstChunk && U(this._config.beforeFirstChunk)) {
            var i = this._config.beforeFirstChunk(e);

            void 0 !== i && (e = i);
          }

          this.isFirstChunk = !1, this._halted = !1;
          var r = this._partialLine + e;
          this._partialLine = "";

          var n = this._handle.parse(r, this._baseIndex, !this._finished);

          if (!this._handle.paused() && !this._handle.aborted()) {
            var s = n.meta.cursor;
            this._finished || (this._partialLine = r.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
            var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (o) f.postMessage({
              results: n,
              workerId: b.WORKER_ID,
              finished: a
            });else if (U(this._config.chunk) && !t) {
              if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              n = void 0, this._completeResults = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !U(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
          }

          this._halted = !0;
        }, this._sendError = function (e) {
          U(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
            workerId: b.WORKER_ID,
            error: e,
            finished: !1
          });
        };
      }

      function l(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), u.call(this, e), this._nextChunk = n ? function () {
          this._readChunk(), this._chunkLoaded();
        } : function () {
          this._readChunk();
        }, this.stream = function (e) {
          this._input = e, this._nextChunk();
        }, this._readChunk = function () {
          if (this._finished) this._chunkLoaded();else {
            if (r = new XMLHttpRequest(), this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
              var e = this._config.downloadRequestHeaders;

              for (var t in e) {
                r.setRequestHeader(t, e[t]);
              }
            }

            if (this._config.chunkSize) {
              var i = this._start + this._config.chunkSize - 1;
              r.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
            }

            try {
              r.send(this._config.downloadRequestBody);
            } catch (e) {
              this._chunkError(e.message);
            }

            n && 0 === r.status && this._chunkError();
          }
        }, this._chunkLoaded = function () {
          4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function (e) {
            var t = e.getResponseHeader("Content-Range");
            if (null === t) return -1;
            return parseInt(t.substring(t.lastIndexOf("/") + 1));
          }(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function (e) {
          var t = r.statusText || e;

          this._sendError(new Error(t));
        };
      }

      function c(e) {
        var r, n;
        (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), u.call(this, e);
        var s = "undefined" != typeof FileReader;
        this.stream = function (e) {
          this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((r = new FileReader()).onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)) : r = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function () {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function () {
          var e = this._input;

          if (this._config.chunkSize) {
            var t = Math.min(this._start + this._config.chunkSize, this._input.size);
            e = n.call(e, this._start, t);
          }

          var i = r.readAsText(e, this._config.encoding);
          s || this._chunkLoaded({
            target: {
              result: i
            }
          });
        }, this._chunkLoaded = function (e) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function () {
          this._sendError(r.error);
        };
      }

      function p(e) {
        var i;
        u.call(this, e = e || {}), this.stream = function (e) {
          return i = e, this._nextChunk();
        }, this._nextChunk = function () {
          if (!this._finished) {
            var e,
                t = this._config.chunkSize;
            return t ? (e = i.substring(0, t), i = i.substring(t)) : (e = i, i = ""), this._finished = !i, this.parseChunk(e);
          }
        };
      }

      function g(e) {
        u.call(this, e = e || {});
        var t = [],
            i = !0,
            r = !1;
        this.pause = function () {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function () {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function (e) {
          this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function () {
          r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function () {
          this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = y(function (e) {
          try {
            t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
          } catch (e) {
            this._streamError(e);
          }
        }, this), this._streamError = y(function (e) {
          this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = y(function () {
          this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = y(function () {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }

      function i(m) {
        var a,
            o,
            h,
            r = Math.pow(2, 53),
            n = -r,
            s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
            u = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
            t = this,
            i = 0,
            f = 0,
            d = !1,
            e = !1,
            l = [],
            c = {
          data: [],
          errors: [],
          meta: {}
        };

        if (U(m.step)) {
          var p = m.step;

          m.step = function (e) {
            if (c = e, _()) g();else {
              if (g(), 0 === c.data.length) return;
              i += e.data.length, m.preview && i > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
            }
          };
        }

        function v(e) {
          return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }

        function g() {
          if (c && h && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), h = !1), m.skipEmptyLines) for (var e = 0; e < c.data.length; e++) {
            v(c.data[e]) && c.data.splice(e--, 1);
          }
          return _() && function () {
            if (!c) return;

            function e(e) {
              U(m.transformHeader) && (e = m.transformHeader(e)), l.push(e);
            }

            if (Array.isArray(c.data[0])) {
              for (var t = 0; _() && t < c.data.length; t++) {
                c.data[t].forEach(e);
              }

              c.data.splice(0, 1);
            } else c.data.forEach(e);
          }(), function () {
            if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;

            function e(e, t) {
              var i,
                  r = m.header ? {} : [];

              for (i = 0; i < e.length; i++) {
                var n = i,
                    s = e[i];
                m.header && (n = i >= l.length ? "__parsed_extra" : l[i]), m.transform && (s = m.transform(s, n)), s = y(n, s), "__parsed_extra" === n ? (r[n] = r[n] || [], r[n].push(s)) : r[n] = s;
              }

              return m.header && (i > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + i, f + t) : i < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + i, f + t)), r;
            }

            var t = 1;
            !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
            m.header && c.meta && (c.meta.fields = l);
            return f += t, c;
          }();
        }

        function _() {
          return m.header && 0 === l.length;
        }

        function y(e, t) {
          return i = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[i] && (m.dynamicTyping[i] = m.dynamicTypingFunction(i)), !0 === (m.dynamicTyping[i] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function (e) {
            if (s.test(e)) {
              var t = parseFloat(e);
              if (n < t && t < r) return !0;
            }

            return !1;
          }(t) ? parseFloat(t) : u.test(t) ? new Date(t) : "" === t ? null : t) : t;
          var i;
        }

        function k(e, t, i, r) {
          var n = {
            type: e,
            code: t,
            message: i
          };
          void 0 !== r && (n.row = r), c.errors.push(n);
        }

        this.parse = function (e, t, i) {
          var r = m.quoteChar || '"';
          if (m.newline || (m.newline = function (e, t) {
            e = e.substring(0, 1048576);
            var i = new RegExp(q(t) + "([^]*?)" + q(t), "gm"),
                r = (e = e.replace(i, "")).split("\r"),
                n = e.split("\n"),
                s = 1 < n.length && n[0].length < r[0].length;
            if (1 === r.length || s) return "\n";

            for (var a = 0, o = 0; o < r.length; o++) {
              "\n" === r[o][0] && a++;
            }

            return a >= r.length / 2 ? "\r\n" : "\r";
          }(e, r)), h = !1, m.delimiter) U(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);else {
            var n = function (e, t, i, r, n) {
              var s, a, o, h;
              n = n || [",", "\t", "|", ";", b.RECORD_SEP, b.UNIT_SEP];

              for (var u = 0; u < n.length; u++) {
                var f = n[u],
                    d = 0,
                    l = 0,
                    c = 0;
                o = void 0;

                for (var p = new w({
                  comments: r,
                  delimiter: f,
                  newline: t,
                  preview: 10
                }).parse(e), g = 0; g < p.data.length; g++) {
                  if (i && v(p.data[g])) c++;else {
                    var _ = p.data[g].length;
                    l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
                  }
                }

                0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === h || h < l) && 1.99 < l && (a = d, s = f, h = l);
              }

              return {
                successful: !!(m.delimiter = s),
                bestDelimiter: s
              };
            }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);

            n.successful ? m.delimiter = n.bestDelimiter : (h = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
          }
          var s = E(m);
          return m.preview && m.header && s.preview++, a = e, o = new w(s), c = o.parse(a, t, i), g(), d ? {
            meta: {
              paused: !0
            }
          } : c || {
            meta: {
              paused: !1
            }
          };
        }, this.paused = function () {
          return d;
        }, this.pause = function () {
          d = !0, o.abort(), a = U(m.chunk) ? "" : a.substring(o.getCharIndex());
        }, this.resume = function () {
          t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
        }, this.aborted = function () {
          return e;
        }, this.abort = function () {
          e = !0, o.abort(), c.meta.aborted = !0, U(m.complete) && m.complete(c), a = "";
        };
      }

      function q(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }

      function w(e) {
        var O,
            D = (e = e || {}).delimiter,
            I = e.newline,
            T = e.comments,
            A = e.step,
            L = e.preview,
            F = e.fastMode,
            z = O = void 0 === e.quoteChar ? '"' : e.quoteChar;
        if (void 0 !== e.escapeChar && (z = e.escapeChar), ("string" != typeof D || -1 < b.BAD_DELIMITERS.indexOf(D)) && (D = ","), T === D) throw new Error("Comment character same as delimiter");
        !0 === T ? T = "#" : ("string" != typeof T || -1 < b.BAD_DELIMITERS.indexOf(T)) && (T = !1), "\n" !== I && "\r" !== I && "\r\n" !== I && (I = "\n");
        var M = 0,
            j = !1;
        this.parse = function (a, t, i) {
          if ("string" != typeof a) throw new Error("Input must be a string");
          var r = a.length,
              e = D.length,
              n = I.length,
              s = T.length,
              o = U(A),
              h = [],
              u = [],
              f = [],
              d = M = 0;
          if (!a) return R();

          if (F || !1 !== F && -1 === a.indexOf(O)) {
            for (var l = a.split(I), c = 0; c < l.length; c++) {
              if (f = l[c], M += f.length, c !== l.length - 1) M += I.length;else if (i) return R();

              if (!T || f.substring(0, s) !== T) {
                if (o) {
                  if (h = [], b(f.split(D)), S(), j) return R();
                } else b(f.split(D));

                if (L && L <= c) return h = h.slice(0, L), R(!0);
              }
            }

            return R();
          }

          for (var p = a.indexOf(D, M), g = a.indexOf(I, M), _ = new RegExp(q(z) + q(O), "g"), m = a.indexOf(O, M);;) {
            if (a[M] !== O) {
              if (T && 0 === f.length && a.substring(M, M + s) === T) {
                if (-1 === g) return R();
                M = g + n, g = a.indexOf(I, M), p = a.indexOf(D, M);
              } else {
                if (-1 !== p && (p < g || -1 === g)) {
                  if (!(p < m)) {
                    f.push(a.substring(M, p)), M = p + e, p = a.indexOf(D, M);
                    continue;
                  }

                  var v = x(p, m, g);

                  if (v && void 0 !== v.nextDelim) {
                    p = v.nextDelim, m = v.quoteSearch, f.push(a.substring(M, p)), M = p + e, p = a.indexOf(D, M);
                    continue;
                  }
                }

                if (-1 === g) break;
                if (f.push(a.substring(M, g)), C(g + n), o && (S(), j)) return R();
                if (L && h.length >= L) return R(!0);
              }
            } else for (m = M, M++;;) {
              if (-1 === (m = a.indexOf(O, m + 1))) return i || u.push({
                type: "Quotes",
                code: "MissingQuotes",
                message: "Quoted field unterminated",
                row: h.length,
                index: M
              }), E();
              if (m === r - 1) return E(a.substring(M, m).replace(_, O));

              if (O !== z || a[m + 1] !== z) {
                if (O === z || 0 === m || a[m - 1] !== z) {
                  -1 !== p && p < m + 1 && (p = a.indexOf(D, m + 1)), -1 !== g && g < m + 1 && (g = a.indexOf(I, m + 1));
                  var y = w(-1 === g ? p : Math.min(p, g));

                  if (a[m + 1 + y] === D) {
                    f.push(a.substring(M, m).replace(_, O)), a[M = m + 1 + y + e] !== O && (m = a.indexOf(O, M)), p = a.indexOf(D, M), g = a.indexOf(I, M);
                    break;
                  }

                  var k = w(g);

                  if (a.substring(m + 1 + k, m + 1 + k + n) === I) {
                    if (f.push(a.substring(M, m).replace(_, O)), C(m + 1 + k + n), p = a.indexOf(D, M), m = a.indexOf(O, M), o && (S(), j)) return R();
                    if (L && h.length >= L) return R(!0);
                    break;
                  }

                  u.push({
                    type: "Quotes",
                    code: "InvalidQuotes",
                    message: "Trailing quote on quoted field is malformed",
                    row: h.length,
                    index: M
                  }), m++;
                }
              } else m++;
            }
          }

          return E();

          function b(e) {
            h.push(e), d = M;
          }

          function w(e) {
            var t = 0;

            if (-1 !== e) {
              var i = a.substring(m + 1, e);
              i && "" === i.trim() && (t = i.length);
            }

            return t;
          }

          function E(e) {
            return i || (void 0 === e && (e = a.substring(M)), f.push(e), M = r, b(f), o && S()), R();
          }

          function C(e) {
            M = e, b(f), f = [], g = a.indexOf(I, M);
          }

          function R(e) {
            return {
              data: h,
              errors: u,
              meta: {
                delimiter: D,
                linebreak: I,
                aborted: j,
                truncated: !!e,
                cursor: d + (t || 0)
              }
            };
          }

          function S() {
            A(R()), h = [], u = [];
          }

          function x(e, t, i) {
            var r = {
              nextDelim: void 0,
              quoteSearch: void 0
            },
                n = a.indexOf(O, t + 1);

            if (t < e && e < n && (n < i || -1 === i)) {
              var s = a.indexOf(D, n);
              if (-1 === s) return r;
              n < s && (n = a.indexOf(O, n + 1)), r = x(s, n, i);
            } else r = {
              nextDelim: e,
              quoteSearch: t
            };

            return r;
          }
        }, this.abort = function () {
          j = !0;
        }, this.getCharIndex = function () {
          return M;
        };
      }

      function _(e) {
        var t = e.data,
            i = a[t.workerId],
            r = !1;
        if (t.error) i.userError(t.error, t.file);else if (t.results && t.results.data) {
          var n = {
            abort: function abort() {
              r = !0, m(t.workerId, {
                data: [],
                errors: [],
                meta: {
                  aborted: !0
                }
              });
            },
            pause: v,
            resume: v
          };

          if (U(i.userStep)) {
            for (var s = 0; s < t.results.data.length && (i.userStep({
              data: t.results.data[s],
              errors: t.results.errors,
              meta: t.results.meta
            }, n), !r); s++) {
              ;
            }

            delete t.results;
          } else U(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && m(t.workerId, t.results);
      }

      function m(e, t) {
        var i = a[e];
        U(i.userComplete) && i.userComplete(t), i.terminate(), delete a[e];
      }

      function v() {
        throw new Error("Not implemented.");
      }

      function E(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};

        for (var i in e) {
          t[i] = E(e[i]);
        }

        return t;
      }

      function y(e, t) {
        return function () {
          e.apply(t, arguments);
        };
      }

      function U(e) {
        return "function" == typeof e;
      }

      return o && (f.onmessage = function (e) {
        var t = e.data;
        void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
        if ("string" == typeof t.input) f.postMessage({
          workerId: b.WORKER_ID,
          results: b.parse(t.input, t.config),
          finished: !0
        });else if (f.File && t.input instanceof File || t.input instanceof Object) {
          var i = b.parse(t.input, t.config);
          i && f.postMessage({
            workerId: b.WORKER_ID,
            results: i,
            finished: !0
          });
        }
      }), (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(u.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(u.prototype)).constructor = g, b;
    });
    /***/
  }
  /******/

});