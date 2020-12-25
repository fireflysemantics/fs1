/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js?!./node_modules/@ngtools/webpack/src/index.js!./src/app/shared/forecast.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js?!./node_modules/@ngtools/webpack/src/index.js!./src/app/shared/forecast.worker.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-optimizer/src/build-optimizer/webpack-loader.js??ref--16-0!./node_modules/@ngtools/webpack/src!./src/app/shared/forecast.worker.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/shared/model.ts");
/* harmony import */ var _fireflysemantics_forecasting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/forecasting */ "./node_modules/@fireflysemantics/forecasting/__ivy_ngcc__/fesm2015/fireflysemantics-forecasting.js");
/// <reference lib="webworker" />


addEventListener('message', ({ data }) => {
    const forecastProgress = {};
    const HFD = data;
    const recordLength = HFD.forecastInOutArray.length;
    HFD.forecastInOutArray.forEach((record, i) => {
        const metrics = {};
        HFD.metricData.push(metrics);
        //    console.log("THE FORECAST LENGTH IS: ", HFD.forecastLength)
        //  console.log("THE FORECAST M IS: ", HFD.m)
        //console.log("THE RECORD HISTORY IS: ", record.history)
        record.forecast = Object(_fireflysemantics_forecasting__WEBPACK_IMPORTED_MODULE_1__["forecast"])(record.history, HFD.m, HFD.forecastLength);
        const { type, MAD, RMSE } = record.forecast.optimal;
        metrics.location = record.keys[0];
        metrics.sku = record.keys[1];
        metrics.type = type;
        metrics.mad = MAD.toFixed(2);
        metrics.rmse = RMSE.toFixed(2);
        const { alpha, beta, gamma } = record.forecast.optimal.config;
        metrics.alpha = alpha ? alpha.toFixed(2) : '0.00';
        metrics.beta = beta ? beta.toFixed(2) : '0.00';
        metrics.gamma = gamma ? gamma.toFixed(2) : '0.00s';
        const roundedForecast = record.forecast.optimal.forecast.map(f => f.toFixed(HFD.precision));
        const keyedTimeseries = Object(_fireflysemantics_forecasting__WEBPACK_IMPORTED_MODULE_1__["stringArrayToObject"])(HFD.forecastTimeHeaders, roundedForecast);
        const keyedColumns = Object(_fireflysemantics_forecasting__WEBPACK_IMPORTED_MODULE_1__["stringArrayToObject"])(_model__WEBPACK_IMPORTED_MODULE_0__["DIMENSION_KEY_HEADERS"], record.keys);
        const keyedForecast = Object.assign(Object.assign({}, keyedColumns), keyedTimeseries);
        HFD.forecastData.push(keyedForecast);
        forecastProgress.percentage = Math.floor((i / recordLength) * 100);
        forecastProgress.complete = i == (recordLength - 1) ? true : false;
        if (forecastProgress.complete) {
            forecastProgress.HFD = HFD;
            postMessage(forecastProgress);
        }
        else {
            postMessage(forecastProgress);
        }
    });
});


/***/ }),

/***/ "./node_modules/@fireflysemantics/forecasting/__ivy_ngcc__/fesm2015/fireflysemantics-forecasting.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@fireflysemantics/forecasting/__ivy_ngcc__/fesm2015/fireflysemantics-forecasting.js ***!
  \**********************************************************************************************************/
/*! exports provided: ALPHA_BETA_GAMMA_VALUES, BUCKET_TYPE, DESChiSquared, ForecastType, MAD, OptimizationType, RMSE, SESChiSquared, START_PARAMETER, STEP_SIZE, TESChiSquared, buckets, chiSquared, des, desPermutationOptimization, desPowellOptimization, forecast, getOptimalAlphaBetaGamma, getOptimalForecastErrorMeasures, lastTimeMeta, numberArrayToObject, numberOfPeriods, ses, sesOptimizer, stringArrayToObject, tes, tesPermutationOptimization, tesPowellOptimization, toArray, year */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHA_BETA_GAMMA_VALUES", function() { return ALPHA_BETA_GAMMA_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_TYPE", function() { return BUCKET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESChiSquared", function() { return DESChiSquared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastType", function() { return ForecastType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAD", function() { return MAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationType", function() { return OptimizationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMSE", function() { return RMSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESChiSquared", function() { return SESChiSquared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_PARAMETER", function() { return START_PARAMETER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_SIZE", function() { return STEP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESChiSquared", function() { return TESChiSquared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buckets", function() { return buckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chiSquared", function() { return chiSquared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "des", function() { return des; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desPermutationOptimization", function() { return desPermutationOptimization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desPowellOptimization", function() { return desPowellOptimization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forecast", function() { return forecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimalAlphaBetaGamma", function() { return getOptimalAlphaBetaGamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimalForecastErrorMeasures", function() { return getOptimalForecastErrorMeasures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastTimeMeta", function() { return lastTimeMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberArrayToObject", function() { return numberArrayToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfPeriods", function() { return numberOfPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ses", function() { return ses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sesOptimizer", function() { return sesOptimizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringArrayToObject", function() { return stringArrayToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tes", function() { return tes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tesPermutationOptimization", function() { return tesPermutationOptimization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tesPowellOptimization", function() { return tesPowellOptimization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony import */ var _fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fireflysemantics/optimization */ "./node_modules/@fireflysemantics/optimization/__ivy_ngcc__/fesm2015/fireflysemantics-optimization.js");

/**
 * =================================================
 * Generally we use M1 to denote current time Minus 1.
 * =================================================
 */
/**
 * Forecast bucket types
 */
var BUCKET_TYPE = /*@__PURE__*/ (function (BUCKET_TYPE) {
    BUCKET_TYPE["Y"] = "Y";
    BUCKET_TYPE["Q"] = "Q";
    BUCKET_TYPE["M"] = "M";
    BUCKET_TYPE["W"] = "W";
    return BUCKET_TYPE;
})({});
/** Step size for permutation searches */
const STEP_SIZE = 0.1;
/**
 * Start optimizations
 * with the START_STEP.
 *
 * That's why we are leaving it
 * out of the array.
 */
const START_PARAMETER = STEP_SIZE;
const ALPHA_BETA_GAMMA_VALUES = [];
for (let i = 0; i < 11; i++) {
    ALPHA_BETA_GAMMA_VALUES.push(i * STEP_SIZE);
}
var OptimizationType = /*@__PURE__*/ (function (OptimizationType) {
    OptimizationType["POWELL"] = "Powells Method";
    OptimizationType["PERMUTATION"] = "Permutations";
    return OptimizationType;
})({});
var ForecastType = /*@__PURE__*/ (function (ForecastType) {
    ForecastType["SES"] = "Simple";
    ForecastType["DES"] = "Double";
    ForecastType["TES"] = "Triple";
    return ForecastType;
})({});
/**
 * Square each error and add them together.
 *
 * @param errors The array of errors
 */
function chiSquared(errors) {
    return errors.
        map(e => Math.pow(e, 2)).
        reduce((a, b) => a + b);
}
/**
 * Mean Absolute Deviation or MAD
 * The average of the sum of the absolute value
 * of each error
 *
 * Calculates demand variability.

 * Square each error and add them together.

 * https://www.asprova.jp/mrp/glossary/en/cat256/post-777.html

 * @param errors The array of errors
 */
function MAD(errors) {
    return errors.
        map(e => Math.abs(e)).
        reduce((a, b) => a + b) / errors.length;
}
/**
 *
 * @param errors The residuals
 */
function RMSE(errors) {
    return Math.sqrt(chiSquared(errors) / errors.length);
}
/**
 * Note that there must be at least 3 historical
 * data points to start.
 *
 * @param alpha
 * @param history
 */
function ses(config, history) {
    const alpha = config.alpha;
    const result = {};
    const F1 = history[0];
    const e1 = history[1] - F1;
    const FI1 = { index: 1, forecast: F1, error: e1 };
    const FIS = [];
    FIS.push(FI1);
    for (let i = 2; i < history.length; i++) {
        const FI = {};
        const FM1 = FIS[i - 2];
        FI.index = i;
        FI.forecast = FM1.forecast + alpha * FM1.error;
        FI.actual = history[i];
        FI.error = history[i] - FI.forecast;
        FIS.push(FI);
    }
    const lastFI = FIS[FIS.length - 1];
    const forecast = lastFI.forecast + alpha * lastFI.error;
    result.iterations = FIS;
    result.config = config;
    const future = [];
    const futurePeriods = config.futurePeriods ? config.futurePeriods : 1;
    for (let i = 0; i < futurePeriods; i++) {
        future.push(forecast);
    }
    result.forecast = future;
    result.type = ForecastType.SES;
    result.errors = FIS.map(fi => fi.error);
    result.MAD = MAD(result.errors);
    result.RMSE = RMSE(result.errors);
    result.ChiSquared = chiSquared(result.errors);
    return result;
}
/**
 * Calculates the ChiSquare for a Simple
 * Exponential Smoothing with per the provided history array.
 *
 * @param history The history values array
 */
function SESChiSquared(history) {
    return function (config) {
        return ses(config, history).ChiSquared;
    };
}
/**
 * Returns the optimal alpha
 * @param history
 */
function sesOptimizer(history) {
    const CSF = SESChiSquared(history);
    const f = (alpha) => { return CSF({ alpha }); };
    return Object(_fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__["gss"])(f, 0, 1);
}
/**
 * Double exponential smoothing or Holts method.
 *
 * Note that there must be at least 3 historical
 * data points to start.
 *
 * @param history
 */
function des(config, history) {
    const alpha = config.alpha;
    const beta = config.beta;
    const L1 = history[1];
    const T1 = L1 - history[0];
    const FI2 = {};
    FI2.index = 2;
    FI2.forecast = L1 + T1;
    FI2.actual = history[2];
    FI2.error = FI2.actual - FI2.forecast;
    FI2.level = alpha * FI2.actual + (1 - alpha) * (T1 + L1);
    FI2.trend = beta * (FI2.level - L1) + (1 - beta) * T1;
    const FIS = [];
    FIS.push(FI2);
    for (let i = 3; i < history.length; i++) {
        const FI = {};
        const FIM1 = FIS[i - 3];
        FI.index = i;
        FI.forecast = FIM1.level + FIM1.trend;
        FI.actual = history[i];
        FI.error = FI.actual - FI.forecast;
        FI.level = alpha * FI.actual + (1 - alpha) * (FIM1.trend + FIM1.level);
        FI.trend = beta * (FI.level - FIM1.level) + (1 - beta) * (FIM1.trend);
        FIS.push(FI);
    }
    const lastFI = FIS[FIS.length - 1];
    const forecast = (k) => {
        return lastFI.level + k * lastFI.trend;
    };
    const result = {};
    result.type = ForecastType.DES;
    result.iterations = FIS;
    result.config = config;
    const future = [];
    const futurePeriods = config.futurePeriods ? config.futurePeriods : 1;
    for (let k = 1; k <= futurePeriods; k++) {
        future.push(forecast(k));
    }
    result.forecast = future;
    result.errors = FIS.map(fi => fi.error);
    result.MAD = MAD(result.errors);
    result.RMSE = RMSE(result.errors);
    result.ChiSquared = chiSquared(result.errors);
    return result;
}
/**
 * Calculates the ChiSquare for a Simple
 * Exponential Smoothing with per the provided history array.
 *
 * @param history The history values array
 */
function DESChiSquared(history) {
    return function (config) {
        return des(config, history).ChiSquared;
    };
}
function desPowellOptimization(history, MAX_ITERATIONS = 100) {
    const EPS = 1e-2;
    const CSF = DESChiSquared(history);
    let beta = 0.1;
    let alpha = 0.1;
    let previousCS = CSF({ alpha, beta });
    let CONVERGED = false;
    let EXCEEDED_ITERATIONS = false;
    const alphaFunction = (alpha) => { return CSF({ alpha, beta }); };
    const betaFunction = (beta) => { return CSF({ alpha, beta }); };
    const steps = [];
    let iteration = 0;
    let currentCS = null;
    while (!CONVERGED) {
        let step = {};
        alpha = Object(_fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__["gss"])(alphaFunction, 0, 1);
        beta = Object(_fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__["gss"])(betaFunction, 0, 1);
        currentCS = CSF({ alpha, beta });
        let delta = Math.abs(previousCS - currentCS);
        step.delta = delta;
        step.alpha = alpha;
        step.beta = beta;
        step.currentCS = currentCS;
        step.previousCS = previousCS;
        step.iteration = iteration;
        iteration++;
        steps.push(step);
        EXCEEDED_ITERATIONS = iteration > MAX_ITERATIONS;
        CONVERGED = (delta < EPS) || EXCEEDED_ITERATIONS;
        previousCS = currentCS;
    }
    if (EXCEEDED_ITERATIONS) {
        return {
            searchType: OptimizationType.POWELL,
            converged: false
        };
    }
    const result = {
        optimalCS: currentCS,
        converged: true,
        searchType: OptimizationType.POWELL,
        stepCount: steps.length,
        alpha,
        beta,
        steps,
        history
    };
    return result;
}
/**
 * Computes the optimal parameters via brute force permutation analysis.
 *
 * @param history The forecast history
 */
function desPermutationOptimization(history) {
    const CSF = DESChiSquared(history);
    let steps = [];
    let optimalStep = {};
    let iteration = 0;
    ALPHA_BETA_GAMMA_VALUES.forEach(alpha => {
        ALPHA_BETA_GAMMA_VALUES.forEach(beta => {
            let step = {};
            step.currentCS = CSF({ alpha, beta });
            step.alpha = alpha;
            step.beta = beta;
            step.iteration = iteration++;
            steps.push(step);
        });
    });
    let optimal = steps[0];
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].currentCS < optimal.currentCS) {
            optimal = steps[i];
        }
    }
    const result = {
        optimalIteration: optimal.iteration,
        optimalCS: optimal.currentCS,
        searchType: OptimizationType.PERMUTATION,
        stepCount: steps.length,
        alpha: optimal.alpha,
        beta: optimal.beta,
        steps,
        history
    };
    return result;
}
/**
 * We use MP1 to denote period M plus One. Also
 * note the computation of the seasonal index
 * for the forecast:
 *
0      1     2     3      4      5     6       7    8      9
                                                   F1      F2

                          S1   S2     S3      S4  S1       S2

                          k*M  i-k*m               8-4
                                                   i+k - M *( Math.floor(k/M))
                                                   7+1
*/
/**
 * In order to use this algorithm we must have at least
 * config.m plus one periods, such that we can establish the
 * seasonality factors and the first level and trend calculations.
 *
 *
 *
 * @param config
 * @param history
 */
function tes(config, history) {
    const M = config.m;
    const alpha = config.alpha;
    const beta = config.beta;
    const gamma = config.gamma;
    const denominator = history.slice(0, M).reduce((a, b) => a + b) / 4;
    const seasonalFactors = history.slice(0, M).map(s => s / denominator);
    const FIS = seasonalFactors.map(s => {
        const FI = {};
        FI.season = s;
        return FI;
    });
    const FI5 = {};
    FI5.actual = history[M];
    FI5.index = M;
    FI5.level = FI5.actual / seasonalFactors[0];
    FI5.trend = FI5.level - history[M - 1] / seasonalFactors[M - 1];
    FI5.season = gamma * (FI5.actual / FI5.level) + (1 - gamma) * seasonalFactors[0];
    FIS.push(FI5);
    for (let i = M + 1; i < history.length; i++) {
        const FI = {};
        FI.actual = history[i];
        FI.index = i;
        FI.level =
            alpha * (FI.actual / FIS[i - M].season) +
                (1 - alpha) * (FIS[i - 1].level + FIS[i - 1].trend);
        FI.trend =
            beta * (FI.level - FIS[i - 1].level) +
                (1 - beta) * FIS[i - 1].trend;
        FI.season =
            gamma * (FI.actual / FI.level) +
                (1 - gamma) * FIS[i - M].season;
        FI.forecast = (FIS[i - 1].level + FIS[i - 1].trend) * FIS[i - M].season;
        FI.error = FI.actual - FI.forecast;
        FIS.push(FI);
    }
    const lastFI = FIS[FIS.length - 1];
    const forecast = (i, k, m) => {
        const seasonIndex = i + k - m * (1 + Math.floor(k / m));
        const season = FIS[seasonIndex].season;
        return (lastFI.level + k * lastFI.trend) * season;
    };
    const result = {};
    result.type = ForecastType.TES;
    result.iterations = FIS;
    result.config = config;
    const future = [];
    const futurePeriods = config.futurePeriods ? config.futurePeriods : 1;
    let i = FIS.length - 1;
    for (let k = 1; k <= futurePeriods; k++) {
        future.push(forecast(i, k, M));
    }
    result.forecast = future;
    result.errors = FIS.filter(fi => fi.error).map(fi => fi.error);
    result.MAD = MAD(result.errors);
    result.RMSE = RMSE(result.errors);
    result.ChiSquared = chiSquared(result.errors);
    return result;
}
/**
 * Calculates the ChiSquare for a Simple
 * Exponential Smoothing with per the provided history array.
 *
 * @param history The history values array
 */
function TESChiSquared(history) {
    return function (config) {
        return tes(config, history).ChiSquared;
    };
}
function tesPowellOptimization(history, m, MAX_ITERATIONS = 300) {
    const EPS = 1e-1;
    const CSF = TESChiSquared(history);
    let beta = 0.1;
    let alpha = 0.1;
    let gamma = 0.1;
    let previousCS = CSF({ alpha, beta, gamma, m });
    let CONVERGED = false;
    let EXCEEDED_ITERATIONS = false;
    const alphaFunction = (alpha) => { return CSF({ alpha, beta, gamma, m }); };
    const betaFunction = (beta) => { return CSF({ alpha, beta, gamma, m }); };
    const gammaFunction = (gamma) => { return CSF({ alpha, beta, gamma, m }); };
    const steps = [];
    let iteration = 0;
    let currentCS = null;
    while (!CONVERGED) {
        let step = {};
        alpha = Object(_fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__["gss"])(alphaFunction, 0, 1);
        beta = Object(_fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__["gss"])(betaFunction, 0, 1);
        gamma = Object(_fireflysemantics_optimization__WEBPACK_IMPORTED_MODULE_0__["gss"])(gammaFunction, 0, 1);
        currentCS = CSF({ alpha, beta, gamma, m });
        let delta = Math.abs(previousCS - currentCS);
        step.delta = delta;
        step.alpha = alpha;
        step.beta = beta;
        step.gamma = gamma;
        step.currentCS = currentCS;
        step.previousCS = previousCS;
        step.iteration = iteration;
        iteration++;
        steps.push(step);
        EXCEEDED_ITERATIONS = iteration > MAX_ITERATIONS;
        CONVERGED = (delta < EPS) || EXCEEDED_ITERATIONS;
        previousCS = currentCS;
    }
    if (EXCEEDED_ITERATIONS) {
        return {
            searchType: OptimizationType.POWELL,
            converged: false
        };
    }
    const result = {
        converged: true,
        searchType: OptimizationType.POWELL,
        start: { alpha: 0.1, beta: 0.1, gamma: 0.1 },
        stepCount: steps.
            length,
        alpha,
        beta,
        gamma,
        steps,
        m
    };
    return result;
}
/**
 * Computes the optimal parameters via brute force permutation analysis.
 *
 * @param history The forecast history
 */
function tesPermutationOptimization(history, m) {
    const CSF = TESChiSquared(history);
    let steps = [];
    let iteration = 0;
    ALPHA_BETA_GAMMA_VALUES.forEach(alpha => {
        ALPHA_BETA_GAMMA_VALUES.forEach(beta => {
            ALPHA_BETA_GAMMA_VALUES.forEach(gamma => {
                let step = {};
                step.currentCS = CSF({ alpha, beta, gamma, m });
                step.alpha = alpha;
                step.beta = beta;
                step.gamma = gamma;
                step.iteration = iteration++;
                steps.push(step);
            });
        });
    });
    let optimal = steps[0];
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].currentCS < optimal.currentCS) {
            optimal = steps[i];
        }
    }
    const result = {
        optimalStepIteration: optimal.iteration,
        converged: true,
        optimalCS: optimal.currentCS,
        searchType: OptimizationType.PERMUTATION,
        stepCount: steps.length,
        alpha: optimal.alpha,
        beta: optimal.beta,
        gamma: optimal.gamma,
        steps,
        history,
        m
    };
    return result;
}
/**
 * Calculates the optimal forecasting configuration.
 *
 * Then runs all the forecasts.
 *
 * Compares the MAD of each forecast, and return the optimal
 * one.
 *
 * In order to perform triple exponential smoothing
 * we must have at least M plus one (Seasonal Periods plus one).
 *
 * @param history The history in either weekly, montly, quarterly or yearly buckets
 * @param M Number of seasons
 * @param periods The number of forecast periods
 */
function forecast(history, M, periods) {
    let ORS = {};
    let ORSA = [];
    let alphaConfig = {};
    alphaConfig.alpha = sesOptimizer(history);
    alphaConfig.futurePeriods = periods;
    ORS.ses = ses(alphaConfig, history);
    ORSA.push(ORS.ses);
    let desOptimizationResult = desPermutationOptimization(history);
    const desConfiguration = {};
    desConfiguration.alpha = desOptimizationResult.alpha,
        desConfiguration.beta = desOptimizationResult.beta,
        desConfiguration.futurePeriods = periods;
    ORS.des = des(desConfiguration, history);
    ORSA.push(ORS.des);
    if (history.length > M) {
        let tesOptimizationResult = tesPermutationOptimization(history, M);
        const alpha = tesOptimizationResult.alpha;
        const beta = tesOptimizationResult.beta;
        const gamma = tesOptimizationResult.gamma;
        ORS.tes = tes({ alpha, beta, gamma, m: M, futurePeriods: periods }, history);
        ORSA.push(ORS.tes);
    }
    {
        let optimalForecast = ORSA[0];
        ORSA.forEach(f => {
            if (f.MAD < optimalForecast.MAD) {
                optimalForecast = f;
            }
        });
        const OR = {};
        OR.optimal = optimalForecast;
        OR.results = ORS;
        return OR;
    }
}
/**
 * Creates n future time buckets.
 *
 * W01-2010
 * M01-2010
 * Q1-2010
 * YY-2010
 *
 * @param bucket The time bucket.
 * @param n The number of buckets to generate.
 *
 */
function year(bucket) {
    const firstCharacter = bucket.trim().charAt(0);
    switch (firstCharacter) {
        case BUCKET_TYPE.Y:
            return parseInt(bucket.trim().substr(3, 8));
        case BUCKET_TYPE.Q:
            return parseInt(bucket.trim().substr(3, 8));
        case BUCKET_TYPE.M:
            return parseInt(bucket.trim().substr(4, 9));
        case BUCKET_TYPE.W:
            return parseInt(bucket.trim().substr(4, 9));
    }
}
/**
 * Creates n future time buckets.
 *
 * W01-2010
 * M01-2010
 * Q1-2010
 * YY-2010
 *
 * @param type The BUCKET_TYPE
 * @param startperiod The first inclusive time period.  For example 52 for W52
 * @param startYear The year
 * @param n The number of buckets to generate
 */
function buckets(type, startYear, n, startPeriod) {
    let buckets = [];
    let firstYearIterations, remainingIterations, years, finalYear, remainder;
    switch (type) {
        case BUCKET_TYPE.Y:
            for (let i = 0; i < n; i++) {
                buckets.push(`YY-` + (startYear + i));
            }
            return buckets;
        case BUCKET_TYPE.Q:
            //==============================================
            // All buckets are in the first year
            //==============================================
            if ((startPeriod + n - 1) <= 4) {
                for (let q = startPeriod; q <= (startPeriod + n - 1); q++) {
                    buckets.push(`Q${q}-${startYear}`);
                }
                return buckets;
            }
            //==============================================
            // First years buckets starting at the start period
            //==============================================
            for (let q = startPeriod; q <= 4; q++) {
                buckets.push(`Q${q}-${startYear}`);
            }
            //==============================================
            // We deduct out the iterations for the first year
            // Suppose the start period is 2.  We include it so
            // 2,3,4.  We subtract these, or 3 from 4.
            //==============================================
            firstYearIterations = (4 + 1) - startPeriod;
            remainingIterations = n - firstYearIterations;
            years = Math.floor(remainingIterations / 4);
            for (let y = 1; y <= years; y++) {
                for (let q = 1; q <= 4; q++) {
                    const year = startYear + y;
                    buckets.push(`Q${q}-${year}`);
                }
            }
            //==============================================
            // If there is a remainder then we create one
            // year.
            //==============================================
            finalYear = startYear + years + 1;
            remainder = remainingIterations % 4;
            for (let q = 1; q <= remainder; q++) {
                buckets.push(`Q${q}-${finalYear}`);
            }
            return buckets;
        case BUCKET_TYPE.M:
            //==============================================
            // All buckets are in the first year
            //==============================================
            if ((startPeriod + n - 1) <= 12) {
                for (let m = startPeriod; m <= (startPeriod + n - 1); m++) {
                    const M = m < 10 ? '0' + m : m;
                    buckets.push(`M${M}-${startYear}`);
                }
                return buckets;
            }
            //==============================================
            // First years buckets starting at the start period
            //==============================================
            for (let m = startPeriod; m <= 12; m++) {
                const M = m < 10 ? '0' + m : m;
                buckets.push(`M${M}-${startYear}`);
            }
            //==============================================
            // We deduct out the iterations for the first year
            // Suppose the start period is 2.  We include it so
            // 2,3,4.  We subtract these, or 3 from 4.
            //==============================================
            firstYearIterations = (12 + 1) - startPeriod;
            remainingIterations = n - firstYearIterations;
            years = Math.floor(remainingIterations / 12);
            for (let y = 1; y <= years; y++) {
                for (let m = 1; m <= 12; m++) {
                    const year = startYear + y;
                    const M = m < 10 ? '0' + m : m;
                    buckets.push(`M${M}-${year}`);
                }
            }
            //==============================================
            // If there is a remainder then we create one
            // year.
            //==============================================
            finalYear = startYear + years + 1;
            remainder = remainingIterations % 12;
            for (let m = 1; m <= remainder; m++) {
                const M = m < 10 ? '0' + m : m;
                buckets.push(`M${M}-${finalYear}`);
            }
            return buckets;
        case BUCKET_TYPE.W:
            //==============================================
            // All buckets are in the first year
            //==============================================
            if ((startPeriod + n - 1) <= 52) {
                for (let w = startPeriod; w <= (startPeriod + n - 1); w++) {
                    const W = w < 10 ? '0' + w : w;
                    buckets.push(`W${W}-${startYear}`);
                }
                return buckets;
            }
            //==============================================
            // First years buckets starting at the start period
            //==============================================
            for (let w = startPeriod; w <= 52; w++) {
                const W = w < 10 ? '0' + w : w;
                buckets.push(`W${W}-${startYear}`);
            }
            //==============================================
            // We deduct out the iterations for the first year
            // Suppose the start period is 2.  We include it so
            // 2,3,4.  We subtract these, or 3 from 4.
            //==============================================
            firstYearIterations = (52 + 1) - startPeriod;
            remainingIterations = n - firstYearIterations;
            years = Math.floor(remainingIterations / 52);
            for (let y = 1; y <= years; y++) {
                for (let w = 1; w <= 52; w++) {
                    const year = startYear + y;
                    const W = w < 10 ? '0' + w : w;
                    buckets.push(`W${W}-${year}`);
                }
            }
            //==============================================
            // If there is a remainder then we create one
            // year.
            //==============================================
            finalYear = startYear + years + 1;
            remainder = remainingIterations % 52;
            for (let w = 1; w <= remainder; w++) {
                const W = w < 10 ? '0' + w : w;
                buckets.push(`W${w}-${finalYear}`);
            }
            return buckets;
    }
}
/**
 * @param type The Bucket Type (Q, M, W)
 * @returns The number of periods.  Null for year or if nothing matches.
 */
function numberOfPeriods(type) {
    switch (type) {
        case BUCKET_TYPE.Q:
            return 4;
        case BUCKET_TYPE.M:
            return 12;
        case BUCKET_TYPE.W:
            return 52;
        default:
            return null;
    }
}
/**
 * @param headers The history headers
 */
function lastTimeMeta(headers) {
    const firstChar = headers[0].trim().charAt(0);
    const header = headers[headers.length - 1];
    let timeMeta = {};
    switch (firstChar) {
        case BUCKET_TYPE.Y:
            timeMeta.year = parseInt(header.substr(3, 7));
            timeMeta.bucketType = BUCKET_TYPE.Y;
            timeMeta.isLastPeriod = true;
            return timeMeta;
        case BUCKET_TYPE.Q:
            timeMeta.year = parseInt(header.substr(3, 7));
            timeMeta.bucketType = BUCKET_TYPE.Q;
            timeMeta.m = 4;
            timeMeta.period = parseInt(header.substr(1, 2));
            timeMeta.isLastPeriod = timeMeta.period == 4 ? true : false;
            return timeMeta;
        case BUCKET_TYPE.M:
            timeMeta.year = parseInt(header.substr(4, 8));
            timeMeta.bucketType = BUCKET_TYPE.M;
            timeMeta.m = 12;
            timeMeta.period = parseInt(header.substr(1, 3));
            timeMeta.isLastPeriod = timeMeta.period == 12 ? true : false;
            return timeMeta;
        case BUCKET_TYPE.W:
            timeMeta.year = parseInt(header.substr(4, 8));
            timeMeta.bucketType = BUCKET_TYPE.W;
            timeMeta.m = 52;
            timeMeta.period = parseInt(header.substr(1, 3));
            timeMeta.isLastPeriod = timeMeta.period == 52 ? true : false;
            return timeMeta;
        default:
            return null;
    }
}
function getOptimalAlphaBetaGamma(result) {
    const { alpha, beta, gamma } = result.optimal.config;
    return { alpha, beta, gamma };
}
function getOptimalForecastErrorMeasures(result) {
    const { MAD, RMSE } = result.optimal;
    return { MAD, RMSE };
}
/**
 * Maps the string keys to their corresponding
 * number values
 * on an object.
 *
 * The function argument arrays should
 * be the same length.  It is the responsibility
 * of the caller to check this.
 *
 * @example
 * keys.length == values.length
 *
 * @param keys The keys
 * @param values The number values
 * @return The `KeyNumber` instance
 */
function numberArrayToObject(keys, values) {
    const o = {};
    keys.forEach((k, i) => {
        o[k] = values[i];
    });
    return o;
}
/**
 * Maps the string keys to their corresponding
 * number values
 * on an object.
 *
 * The function argument arrays should
 * be the same length.  It is the responsibility
 * of the caller to check this.
 *
 * @example
 * keys.length == values.length
 *
 * @param keys The keys
 * @param values The string values array
 * @return The `KeyString` instance
 */
function stringArrayToObject(keys, values) {
    const o = {};
    keys.forEach((k, i) => {
        o[k] = values[i];
    });
    return o;
}
/**
 * @param o The object containing the keys and values
 * @param keys The keys
 * @return The array of object values
 */
function toArray(o, keys) {
    const values = [];
    keys.forEach((b) => {
        values.push(o[b]);
    });
    return values;
}
/*
 * Public API Surface of forecasting
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=fireflysemantics-forecasting.js.map


/***/ }),

/***/ "./node_modules/@fireflysemantics/optimization/__ivy_ngcc__/fesm2015/fireflysemantics-optimization.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@fireflysemantics/optimization/__ivy_ngcc__/fesm2015/fireflysemantics-optimization.js ***!
  \************************************************************************************************************/
/*! exports provided: distance, gss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gss", function() { return gss; });
const GOLDEN_RATIO = (Math.sqrt(5) - 1) / 2;
/**
 * Calculates the distance.
 * @param lb The lower bound
 * @param ub The upper bound
 * @return The golden ratio distance
 */
function distance(lb, ub) {
    return GOLDEN_RATIO * (ub - lb);
}
function gss(f, lb, ub, iterations = 15) {
    let x1, x2, f1, f2;
    for (let i = 0; i < iterations; i++) {
        const d = distance(lb, ub);
        x1 = lb + d;
        x2 = ub - d;
        f1 = f(x1);
        f2 = f(x2);
        f1 < f2 ? lb = x2 : ub = x1;
    }
    const result = (ub + lb) / 2;
    return result;
}

/*
 * Public API Surface of optimization
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=fireflysemantics-optimization.js.map

/***/ }),

/***/ "./src/app/shared/model.ts":
/*!*********************************!*\
  !*** ./src/app/shared/model.ts ***!
  \*********************************/
/*! exports provided: METRIC_HEADERS, DataSamples, MenuItems, ROUTES, FOUR_QUARTERS, FORM_CONTROLS, APPLICATION_CONFIG_DEFAULT, LOCAL_STORAGE_KEYS, PRECISION_VALUES, VALID_FIRST_CHARACTERS, MINIMUM_NUM_HEADERS, LOCATION_HEADER_INDEX, SKU_HEADER_INDEX, LOCATION_STRING, SKU_STRING, DIMENSION_KEY_HEADERS, forecastHeaders, CSVHeaderValidationMessage, HistoryForecastData, CSVCellValidationMessage, HeaderValidatinError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METRIC_HEADERS", function() { return METRIC_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSamples", function() { return DataSamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR_QUARTERS", function() { return FOUR_QUARTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTROLS", function() { return FORM_CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_CONFIG_DEFAULT", function() { return APPLICATION_CONFIG_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return LOCAL_STORAGE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRECISION_VALUES", function() { return PRECISION_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_FIRST_CHARACTERS", function() { return VALID_FIRST_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_NUM_HEADERS", function() { return MINIMUM_NUM_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_HEADER_INDEX", function() { return LOCATION_HEADER_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU_HEADER_INDEX", function() { return SKU_HEADER_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_STRING", function() { return LOCATION_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKU_STRING", function() { return SKU_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIMENSION_KEY_HEADERS", function() { return DIMENSION_KEY_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forecastHeaders", function() { return forecastHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVHeaderValidationMessage", function() { return CSVHeaderValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryForecastData", function() { return HistoryForecastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVCellValidationMessage", function() { return CSVCellValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderValidatinError", function() { return HeaderValidatinError; });
const METRIC_HEADERS = ['LOCATION', 'SKU', 'TYPE', 'RMSE', 'MAD', 'ALPHA', 'BETA', 'GAMMA'];
class DataSamples {
    constructor() {
        this.dimensions = ['LOCATION', 'SKU'];
    }
}
/**
 * The model for menu items
 * has to live here so that we
 * don't get circular dependency
 * warnings.
 */
var MenuItems = /*@__PURE__*/ (function (MenuItems) {
    MenuItems["NONE"] = "none";
    MenuItems["FORECAST"] = "Forecast";
    MenuItems["WELCOME"] = "Welcome";
    MenuItems["LOGIN"] = "Login";
    MenuItems["LOGOUT"] = "Logout";
    MenuItems["TRANSACTIONS"] = "Transactions";
    MenuItems["FAQ"] = "FAQ";
    MenuItems["SUPPORT"] = "Support";
    MenuItems["SAVE"] = "Save";
    return MenuItems;
})({});
var ROUTES = /*@__PURE__*/ (function (ROUTES) {
    ROUTES["FORECAST"] = "/forecast";
    ROUTES["WELCOME"] = "/welcome";
    ROUTES["LOGIN"] = "/login";
    ROUTES["FAQ"] = "/faq";
    ROUTES["SAMPLES"] = "/samples";
    ROUTES["SUPPORT"] = "/support";
    ROUTES["TRANSACTIONS"] = "/transactions";
    return ROUTES;
})({});
const FOUR_QUARTERS = [
    'Q12010',
    'Q22010',
    'Q32010',
    'Q42010'
];
const FORM_CONTROLS = {
    ALPHA: 'alpha',
    BETA: 'beta',
    GAMMA: 'gamma',
    MAD: 'MAD',
    RMSE: 'RMSE',
    OPTIMAL_FORECAST_TOGGLE: 'OPTIMAL_FORECAST_TOGGLE'
};
const APPLICATION_CONFIG_DEFAULT = {
    periods: 10,
    precision: 2
};
const LOCAL_STORAGE_KEYS = {
    APPLICATION_CONFIG: 'APPLICATION_CONFIG',
    TOS_ACCEPTED: 'TOS_ACCEPTED'
};
const PRECISION_VALUES = [0, 1, 2];
/**
 * Valid first CSV History Header Characters
 */
const VALID_FIRST_CHARACTERS = ['Y', 'Q', 'M', 'W'];
const MINIMUM_NUM_HEADERS = 5;
const LOCATION_HEADER_INDEX = 0;
const SKU_HEADER_INDEX = 1;
const LOCATION_STRING = 'LOCATION';
const SKU_STRING = 'SKU';
const DIMENSION_KEY_HEADERS = [LOCATION_STRING, SKU_STRING];
/**
 * Combine the KEY_HEADERS with the time headers parameter
 * @param timeHeaders The forecast time headers.
 */
function forecastHeaders(timeHeaders) {
    return [...DIMENSION_KEY_HEADERS, ...timeHeaders];
}
/**
 * Rule Validation Messages
 */
var CSVHeaderValidationMessage = /*@__PURE__*/ (function (CSVHeaderValidationMessage) {
    CSVHeaderValidationMessage["LOCATION"] = "The location column must be set to LOCATION";
    CSVHeaderValidationMessage["SKU"] = "The sku column must be set to SKU";
    CSVHeaderValidationMessage["MIMIMUM_LENGTH"] = "The mimimum length of a header is 7 characters";
    CSVHeaderValidationMessage["LENGTH_YQ"] = "The length of the header beginning with Y or Q must be 7 characters";
    CSVHeaderValidationMessage["LENGTH_MW"] = "The length of the header beginning with M or W must be 8 characters";
    CSVHeaderValidationMessage["FIRST_CHARACTER"] = "The first header character must be either Y, Q, M, or W";
    CSVHeaderValidationMessage["FIRST_CHARACTER_Y"] = "The first header character must be Y";
    CSVHeaderValidationMessage["FIRST_CHARACTER_Q"] = "The first header character must be Q";
    CSVHeaderValidationMessage["FIRST_CHARACTER_M"] = "The first header character must be M";
    CSVHeaderValidationMessage["FIRST_CHARACTER_W"] = "The first header character must be W";
    CSVHeaderValidationMessage["SECOND_CHARACTER_Y"] = "The second header character must be a Y";
    CSVHeaderValidationMessage["SECOND_CHARACTER_NUMERIC"] = "The second header character must be numeric";
    CSVHeaderValidationMessage["THIRD_CHARACTER_NUMERIC"] = "The third header character must be numeric";
    CSVHeaderValidationMessage["THIRD_CHARACTER_DASH"] = "The third header character must be a -";
    CSVHeaderValidationMessage["FOURTH_CHARACTER_DASH"] = "The fourth header character must be a -";
    CSVHeaderValidationMessage["FOURTH_CHARACTER_NUMERIC"] = "The fourth header character must be numeric";
    CSVHeaderValidationMessage["HEADERS_MUST_END_YEAR"] = "The header must end in a valid year";
    return CSVHeaderValidationMessage;
})({});
/**
 * Contains the forecast headers and data
 */
class HistoryForecastData {
    constructor() {
        this.keyHeaders = DIMENSION_KEY_HEADERS;
    }
}
var CSVCellValidationMessage = /*@__PURE__*/ (function (CSVCellValidationMessage) {
    CSVCellValidationMessage["CELL_NUMERIC"] = "The cell value must be a valid number";
    CSVCellValidationMessage["CELL_POSITIVE_NUMERIC"] = "The cell value must be a valid positive number";
    return CSVCellValidationMessage;
})({});
class HeaderValidatinError {
    constructor(header, headerIndex, characterIndex, message) {
        this.header = header;
        this.headerIndex = headerIndex;
        this.characterIndex = characterIndex;
        this.message = message;
    }
}


/***/ })

/******/ });