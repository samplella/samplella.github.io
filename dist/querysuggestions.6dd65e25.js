// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRef = createRef;

function createRef(initialValue) {
  return {
    current: initialValue
  };
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;

function debounce(fn, time) {
  var timerId = undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      return fn.apply(void 0, args);
    }, time);
  };
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decycle = decycle;

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */


function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (!("development" !== 'production') || !obj || _typeof(obj) !== 'object') {
    return obj;
  }

  if (seen.has(obj)) {
    return '[Circular]';
  }

  var newSeen = seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }

  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key, decycle(value, newSeen)];
  }));
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = flatten;

function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAutocompleteId = generateAutocompleteId;
var autocompleteId = 0;

function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAttributeValueByPath = getAttributeValueByPath;

function getAttributeValueByPath(record, path) {
  return path.reduce(function (current, key) {
    return current && current[key];
  }, record);
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemsCount = getItemsCount;

function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }

  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invariant = invariant;

/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (!("development" !== 'production')) {
    return;
  }

  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqual = isEqual;

function isPrimitive(obj) {
  return obj !== Object(obj);
}

function isEqual(first, second) {
  if (first === second) {
    return true;
  }

  if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
    return first === second;
  }

  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }

  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (!(key in second)) {
      return false;
    }

    if (!isEqual(first[key], second[key])) {
      return false;
    }
  }

  return true;
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/MaybePromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = void 0;

var noop = function noop() {};

exports.noop = noop;
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/UserAgent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/version.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
var version = '1.5.0';
exports.version = version;
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAgents = void 0;

var _version = require("./version");

var userAgents = [{
  segment: 'autocomplete-core',
  version: _version.version
}];
exports.userAgents = userAgents;
},{"./version":"node_modules/@algolia/autocomplete-shared/dist/esm/version.js"}],"node_modules/@algolia/autocomplete-shared/dist/esm/warn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnCache = void 0;
var warnCache = {
  current: {}
};
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */

exports.warnCache = warnCache;

function warn(condition, message) {
  if (!("development" !== 'production')) {
    return;
  }

  if (condition) {
    return;
  }

  var sanitizedMessage = message.trim();
  var hasAlreadyPrinted = warnCache.current[sanitizedMessage];

  if (!hasAlreadyPrinted) {
    warnCache.current[sanitizedMessage] = true; // eslint-disable-next-line no-console

    console.warn("[Autocomplete] ".concat(sanitizedMessage));
  }
}
},{}],"node_modules/@algolia/autocomplete-shared/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRef = require("./createRef");

Object.keys(_createRef).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createRef[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createRef[key];
    }
  });
});

var _debounce = require("./debounce");

Object.keys(_debounce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _debounce[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _debounce[key];
    }
  });
});

var _decycle = require("./decycle");

Object.keys(_decycle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _decycle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _decycle[key];
    }
  });
});

var _flatten = require("./flatten");

Object.keys(_flatten).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _flatten[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flatten[key];
    }
  });
});

var _generateAutocompleteId = require("./generateAutocompleteId");

Object.keys(_generateAutocompleteId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _generateAutocompleteId[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generateAutocompleteId[key];
    }
  });
});

var _getAttributeValueByPath = require("./getAttributeValueByPath");

Object.keys(_getAttributeValueByPath).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAttributeValueByPath[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAttributeValueByPath[key];
    }
  });
});

var _getItemsCount = require("./getItemsCount");

Object.keys(_getItemsCount).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getItemsCount[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getItemsCount[key];
    }
  });
});

var _invariant = require("./invariant");

Object.keys(_invariant).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _invariant[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invariant[key];
    }
  });
});

var _isEqual = require("./isEqual");

Object.keys(_isEqual).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isEqual[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isEqual[key];
    }
  });
});

var _MaybePromise = require("./MaybePromise");

Object.keys(_MaybePromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MaybePromise[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MaybePromise[key];
    }
  });
});

var _noop = require("./noop");

Object.keys(_noop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _noop[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _noop[key];
    }
  });
});

var _UserAgent = require("./UserAgent");

Object.keys(_UserAgent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UserAgent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _UserAgent[key];
    }
  });
});

var _userAgents = require("./userAgents");

Object.keys(_userAgents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userAgents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _userAgents[key];
    }
  });
});

var _version = require("./version");

Object.keys(_version).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _version[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _version[key];
    }
  });
});

var _warn = require("./warn");

Object.keys(_warn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _warn[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _warn[key];
    }
  });
});
},{"./createRef":"node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js","./debounce":"node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js","./decycle":"node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js","./flatten":"node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js","./generateAutocompleteId":"node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js","./getAttributeValueByPath":"node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js","./getItemsCount":"node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js","./invariant":"node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js","./isEqual":"node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js","./MaybePromise":"node_modules/@algolia/autocomplete-shared/dist/esm/MaybePromise.js","./noop":"node_modules/@algolia/autocomplete-shared/dist/esm/noop.js","./UserAgent":"node_modules/@algolia/autocomplete-shared/dist/esm/UserAgent.js","./userAgents":"node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js","./version":"node_modules/@algolia/autocomplete-shared/dist/esm/version.js","./warn":"node_modules/@algolia/autocomplete-shared/dist/esm/warn.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOptions = checkOptions;

var _autocompleteShared = require("@algolia/autocomplete-shared");

function checkOptions(options) {
  "development" !== 'production' ? (0, _autocompleteShared.warn)(!options.debug, 'The `debug` option is meant for development debugging and should not be used in production.') : void 0;
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/createStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = _objectSpread({}, state);

      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    }
  };
}
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAutocompleteSetters = getAutocompleteSetters;

var _autocompleteShared = require("@algolia/autocomplete-shared");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function getAutocompleteSetters(_ref) {
  var store = _ref.store;

  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };

  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };

  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: (0, _autocompleteShared.flatten)(collection.items).map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };

  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };

  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };

  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };

  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConcurrentSafePromise = createConcurrentSafePromise;

/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }

      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextActiveItemId = getNextActiveItemId;

/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }

  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }

  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;

  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }

  return numericIndex;
}
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNormalizedSources = getNormalizedSources;

var _autocompleteShared = require("@algolia/autocomplete-shared");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    (0, _autocompleteShared.invariant)(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(_typeof(sources)), ":\n\n").concat(JSON.stringify((0, _autocompleteShared.decycle)(sources), null, 2));
    });
    return Promise.all(sources // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      (0, _autocompleteShared.invariant)(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');

      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }

      seenSourceIds.push(source.sourceId);

      var normalizedSource = _objectSpread({
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: _autocompleteShared.noop
      }, source);

      return Promise.resolve(normalizedSource);
    }));
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveItem = getActiveItem;

// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []); // Based on the accumulated counts, we can infer the index of the suggestion.

  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }

    return acc;
  }, 0);
  return state.collections[collectionIndex];
}
/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */


function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
      collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;

  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];

    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }

    previousItemsOffset += currentCollection.items.length;
    counter++;
  }

  return state.activeItemId - previousItemsOffset;
}

function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);

  if (!collection) {
    return null;
  }

  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOrContainsNode = isOrContainsNode;

function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToAlgoliaResponse = mapToAlgoliaResponse;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function mapToAlgoliaResponse(rawResults) {
  var results = rawResults.map(function (result) {
    var _hits;

    return _objectSpread(_objectSpread({}, result), {}, {
      hits: (_hits = result.hits) === null || _hits === void 0 ? void 0 : _hits.map(function (hit) {
        // Bring support for the Insights plugin.
        return _objectSpread(_objectSpread({}, hit), {}, {
          __autocomplete_indexName: result.index,
          __autocomplete_queryID: result.queryID
        });
      })
    });
  });
  return {
    results: results,
    hits: results.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: results.map(function (result) {
      var _facetHits;

      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createConcurrentSafePromise = require("./createConcurrentSafePromise");

Object.keys(_createConcurrentSafePromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createConcurrentSafePromise[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createConcurrentSafePromise[key];
    }
  });
});

var _getNextActiveItemId = require("./getNextActiveItemId");

Object.keys(_getNextActiveItemId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getNextActiveItemId[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getNextActiveItemId[key];
    }
  });
});

var _getNormalizedSources = require("./getNormalizedSources");

Object.keys(_getNormalizedSources).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getNormalizedSources[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getNormalizedSources[key];
    }
  });
});

var _getActiveItem = require("./getActiveItem");

Object.keys(_getActiveItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getActiveItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getActiveItem[key];
    }
  });
});

var _isOrContainsNode = require("./isOrContainsNode");

Object.keys(_isOrContainsNode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isOrContainsNode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isOrContainsNode[key];
    }
  });
});

var _mapToAlgoliaResponse = require("./mapToAlgoliaResponse");

Object.keys(_mapToAlgoliaResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mapToAlgoliaResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapToAlgoliaResponse[key];
    }
  });
});
},{"./createConcurrentSafePromise":"node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js","./getNextActiveItemId":"node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js","./getNormalizedSources":"node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js","./getActiveItem":"node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js","./isOrContainsNode":"node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js","./mapToAlgoliaResponse":"node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultProps = getDefaultProps;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _utils = require("./utils");

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function getDefaultProps(props, pluginSubscribers) {
  var _props$id;
  /* eslint-disable no-restricted-globals */


  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var plugins = props.plugins || [];
  return _objectSpread(_objectSpread({
    debug: false,
    openOnFocus: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return (0, _autocompleteShared.getItemsCount)(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : (0, _autocompleteShared.generateAutocompleteId)(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: _objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;

      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;

        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;

      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;

        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;

      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;

        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return (0, _utils.getNormalizedSources)(getSources, params);
      })).then(function (nested) {
        return (0, _autocompleteShared.flatten)(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return _objectSpread(_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;

                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;

                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: _objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/reshape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reshape = reshape;

var _autocompleteShared = require("@algolia/autocomplete-shared");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function reshape(_ref) {
  var collections = _ref.collections,
      props = _ref.props,
      state = _ref.state; // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`

  var sourcesBySourceId = collections.reduce(function (acc, collection) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, collection.source.sourceId, _objectSpread(_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return (0, _autocompleteShared.flatten)(collection.items);
      }
    })));
  }, {});
  var reshapeSources = props.reshape({
    sources: Object.values(sourcesBySourceId),
    sourcesBySourceId: sourcesBySourceId,
    state: state
  }); // We reconstruct the collections with the items modified by the `reshape` prop.

  return (0, _autocompleteShared.flatten)(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/resolve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preResolve = preResolve;
exports.resolve = resolve;
exports.postResolve = postResolve;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _utils = require("./utils");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function isDescription(item) {
  return Boolean(item.execute);
}

function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}

function preResolve(itemsOrDescription, sourceId) {
  if (isRequesterDescription(itemsOrDescription)) {
    return _objectSpread(_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }

  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}

function resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }

    var searchClient = current.searchClient,
        execute = current.execute,
        requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && item.execute === execute;
    });

    if (container) {
      var _container$items;

      (_container$items = container.items).push.apply(_container$items, _toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }

    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }

    var _ref = maybeDescription,
        execute = _ref.execute,
        items = _ref.items,
        searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return (0, _autocompleteShared.flatten)(responses);
  });
}

function postResolve(responses, sources) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform((0, _utils.mapToAlgoliaResponse)(results)) : results;
    (0, _autocompleteShared.invariant)(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(_typeof(items)), ":\n\n").concat(JSON.stringify((0, _autocompleteShared.decycle)(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    (0, _autocompleteShared.invariant)(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/onInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onInput = onInput;

var _reshape = require("./reshape");

var _resolve = require("./resolve");

var _utils = require("./utils");

var _excluded = ["event", "nextState", "props", "query", "refresh", "store"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var lastStalledId = null;
var runConcurrentSafePromise = (0, _utils.createConcurrentSafePromise)();

function onInput(_ref) {
  var event = _ref.event,
      _ref$nextState = _ref.nextState,
      nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
      props = _ref.props,
      query = _ref.query,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }

  var setCollections = setters.setCollections,
      setIsOpen = setters.setIsOpen,
      setQuery = setters.setQuery,
      setActiveItemId = setters.setActiveItemId,
      setStatus = setters.setStatus;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);

  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;

    var collections = store.getState().collections.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    })); // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.

    return runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    });
  }

  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold); // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.

  return runConcurrentSafePromise(props.getSources(_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return (0, _resolve.preResolve)(itemsOrDescription, source.sourceId);
      });
    })).then(_resolve.resolve).then(function (responses) {
      return (0, _resolve.postResolve)(responses, sources);
    }).then(function (collections) {
      return (0, _reshape.reshape)({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  })).then(function (collections) {
    var _nextState$isOpen2;

    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = (0, _utils.getActiveItem)(store.getState());

    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
      source.onActive(_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
}
},{"./reshape":"node_modules/@algolia/autocomplete-core/dist/esm/reshape.js","./resolve":"node_modules/@algolia/autocomplete-core/dist/esm/resolve.js","./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyDown = onKeyDown;

var _onInput = require("./onInput");

var _utils = require("./utils");

var _excluded = ["event", "props", "refresh", "store"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function onKeyDown(_ref) {
  var event = _ref.event,
      props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var nodeItem = props.environment.document.getElementById("".concat(props.id, "-item-").concat(store.getState().activeItemId));

      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations


    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = (0, _utils.getActiveItem)(store.getState());

      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
            itemInputValue = highlightedItem.itemInputValue,
            itemUrl = highlightedItem.itemUrl,
            source = highlightedItem.source;
        source.onActive(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.


    event.preventDefault(); // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.

    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      (0, _onInput.onInput)(_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive(); // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.

        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null);
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      return;
    } // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.


    event.preventDefault();

    var _ref2 = (0, _utils.getActiveItem)(store.getState()),
        item = _ref2.item,
        itemInputValue = _ref2.itemInputValue,
        itemUrl = _ref2.itemUrl,
        source = _ref2.source;

    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {// Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }

      (0, _onInput.onInput)(_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}
},{"./onInput":"node_modules/@algolia/autocomplete-core/dist/esm/onInput.js","./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropGetters = getPropGetters;

var _onInput = require("./onInput");

var _onKeyDown2 = require("./onKeyDown");

var _utils = require("./utils");

var _excluded = ["props", "refresh", "store"],
    _excluded2 = ["inputElement", "formElement", "panelElement"],
    _excluded3 = ["inputElement"],
    _excluded4 = ["inputElement", "maxLength"],
    _excluded5 = ["item", "source"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function getPropGetters(_ref) {
  var props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
        formElement = providedProps.formElement,
        panelElement = providedProps.panelElement,
        rest = _objectWithoutProperties(providedProps, _excluded2);

    return _objectSpread({
      // On touch devices, we do not rely on the native `blur` event of the
      // input to close the panel, but rather on a custom `touchstart` event
      // outside of the autocomplete elements.
      // This ensures a working experience on mobile because we blur the input
      // on touch devices when the user starts scrolling (`touchmove`).
      // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.
      onTouchStart: function onTouchStart(event) {
        if (store.getState().isOpen === false || event.target === inputElement) {
          return;
        }

        var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
          return (0, _utils.isOrContainsNode)(contextNode, event.target);
        });

        if (isTargetWithinAutocomplete === false) {
          store.dispatch('blur', null);
        }
      },
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }

        inputElement.blur();
      }
    }, rest);
  };

  var getRootProps = function getRootProps(rest) {
    return _objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-owns': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label")
    }, rest);
  };

  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
        rest = _objectWithoutProperties(providedProps, _excluded3);

    return _objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;

        event.preventDefault();
        props.onSubmit(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;

        event.preventDefault();
        props.onReset(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };

  var getInputProps = function getInputProps(providedProps) {
    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        (0, _onInput.onInput)(_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }

      store.dispatch('focus', null);
    }

    var isTouchDevice = ('ontouchstart' in props.environment);

    var _ref2 = providedProps || {},
        inputElement = _ref2.inputElement,
        _ref2$maxLength = _ref2.maxLength,
        maxLength = _ref2$maxLength === void 0 ? 512 : _ref2$maxLength,
        rest = _objectWithoutProperties(_ref2, _excluded4);

    var activeItem = (0, _utils.getActiveItem)(store.getState());
    return _objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? "".concat(props.id, "-item-").concat(store.getState().activeItemId) : undefined,
      'aria-controls': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label"),
      value: store.getState().completion || store.getState().query,
      id: "".concat(props.id, "-input"),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: activeItem !== null && activeItem !== void 0 && activeItem.itemUrl ? 'go' : 'search',
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        (0, _onInput.onInput)(_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        (0, _onKeyDown2.onKeyDown)(_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      onBlur: function onBlur() {
        // We do rely on the `blur` event on touch devices.
        // See explanation in `onTouchStart`.
        if (!isTouchDevice) {
          store.dispatch('blur', null);
        }
      },
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };

  var getLabelProps = function getLabelProps(rest) {
    return _objectSpread({
      htmlFor: "".concat(props.id, "-input"),
      id: "".concat(props.id, "-label")
    }, rest);
  };

  var getListProps = function getListProps(rest) {
    return _objectSpread({
      role: 'listbox',
      'aria-labelledby': "".concat(props.id, "-label"),
      id: "".concat(props.id, "-list")
    }, rest);
  };

  var getPanelProps = function getPanelProps(rest) {
    return _objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };

  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
        source = providedProps.source,
        rest = _objectWithoutProperties(providedProps, _excluded5);

    return _objectSpread({
      id: "".concat(props.id, "-item-").concat(item.__autocomplete_id),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }

        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = (0, _utils.getActiveItem)(store.getState());

        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
              itemInputValue = activeItem.itemInputValue,
              itemUrl = activeItem.itemUrl,
              _source = activeItem.source;

          _source.onActive(_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        }); // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.

        var runPreCommand = itemUrl ? Promise.resolve() : (0, _onInput.onInput)(_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };

  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}
},{"./onInput":"node_modules/@algolia/autocomplete-core/dist/esm/onInput.js","./onKeyDown":"node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js","./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/metadata.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadata = getMetadata;
exports.injectMetadata = injectMetadata;

var _autocompleteShared = require("@algolia/autocomplete-shared");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;

  var plugins = _ref.plugins,
      options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? _defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: _objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: _autocompleteShared.userAgents.concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}

function injectMetadata(_ref3) {
  var _environment$navigato;

  var metadata = _ref3.metadata,
      environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : _environment$navigato.userAgent.includes('Algolia Crawler');

  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompletion = getCompletion;

var _utils = require("./utils");

function getCompletion(_ref) {
  var _getActiveItem;

  var state = _ref.state;

  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }

  return ((_getActiveItem = (0, _utils.getActiveItem)(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}
},{"./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateReducer = void 0;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _getCompletion = require("./getCompletion");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'setQuery':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }

    case 'setCollections':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }

    case 'setIsOpen':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }

    case 'setStatus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.payload
        });
      }

    case 'setContext':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          context: _objectSpread(_objectSpread({}, state.context), action.payload)
        });
      }

    case 'ArrowDown':
      {
        var nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : (0, _utils.getNextActiveItemId)(1, state.activeItemId, (0, _autocompleteShared.getItemsCount)(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, nextState), {}, {
          completion: (0, _getCompletion.getCompletion)({
            state: nextState
          })
        });
      }

    case 'ArrowUp':
      {
        var _nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: (0, _utils.getNextActiveItemId)(-1, state.activeItemId, (0, _autocompleteShared.getItemsCount)(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, _nextState), {}, {
          completion: (0, _getCompletion.getCompletion)({
            state: _nextState
          })
        });
      }

    case 'Escape':
      {
        if (state.isOpen) {
          return _objectSpread(_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }

    case 'submit':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }

    case 'reset':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          query: ''
        });
      }

    case 'focus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }

    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }

    case 'mousemove':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'mouseleave':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }

    default:
      (0, _autocompleteShared.invariant)(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};

exports.stateReducer = stateReducer;
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./getCompletion":"node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js","./utils":"node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAutocomplete = createAutocomplete;

var _checkOptions = require("./checkOptions");

var _createStore = require("./createStore");

var _getAutocompleteSetters = require("./getAutocompleteSetters");

var _getDefaultProps = require("./getDefaultProps");

var _getPropGetters = require("./getPropGetters");

var _metadata = require("./metadata");

var _onInput = require("./onInput");

var _stateReducer = require("./stateReducer");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function createAutocomplete(options) {
  (0, _checkOptions.checkOptions)(options);
  var subscribers = [];
  var props = (0, _getDefaultProps.getDefaultProps)(options, subscribers);
  var store = (0, _createStore.createStore)(_stateReducer.stateReducer, props, onStoreStateChange);
  var setters = (0, _getAutocompleteSetters.getAutocompleteSetters)({
    store: store
  });
  var propGetters = (0, _getPropGetters.getPropGetters)(_objectSpread({
    props: props,
    refresh: refresh,
    store: store
  }, setters));

  function onStoreStateChange(_ref) {
    var prevState = _ref.prevState,
        state = _ref.state;
    props.onStateChange(_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh
    }, setters));
  }

  function refresh() {
    return (0, _onInput.onInput)(_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }

  props.plugins.forEach(function (plugin) {
    var _plugin$subscribe;

    return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, _objectSpread(_objectSpread({}, setters), {}, {
      refresh: refresh,
      onSelect: function onSelect(fn) {
        subscribers.push({
          onSelect: fn
        });
      },
      onActive: function onActive(fn) {
        subscribers.push({
          onActive: fn
        });
      }
    }));
  });
  (0, _metadata.injectMetadata)({
    metadata: (0, _metadata.getMetadata)({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return _objectSpread(_objectSpread({
    refresh: refresh
  }, propGetters), setters);
}
},{"./checkOptions":"node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js","./createStore":"node_modules/@algolia/autocomplete-core/dist/esm/createStore.js","./getAutocompleteSetters":"node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js","./getDefaultProps":"node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js","./getPropGetters":"node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js","./metadata":"node_modules/@algolia/autocomplete-core/dist/esm/metadata.js","./onInput":"node_modules/@algolia/autocomplete-core/dist/esm/onInput.js","./stateReducer":"node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteCollection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteEnvironment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePropGetters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePlugin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteReshape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSetters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSubscribers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-core/dist/esm/types/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AutocompleteApi = require("./AutocompleteApi");

Object.keys(_AutocompleteApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteApi[key];
    }
  });
});

var _AutocompleteCollection = require("./AutocompleteCollection");

Object.keys(_AutocompleteCollection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteCollection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteCollection[key];
    }
  });
});

var _AutocompleteContext = require("./AutocompleteContext");

Object.keys(_AutocompleteContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteContext[key];
    }
  });
});

var _AutocompleteEnvironment = require("./AutocompleteEnvironment");

Object.keys(_AutocompleteEnvironment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteEnvironment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteEnvironment[key];
    }
  });
});

var _AutocompleteOptions = require("./AutocompleteOptions");

Object.keys(_AutocompleteOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteOptions[key];
    }
  });
});

var _AutocompleteSource = require("./AutocompleteSource");

Object.keys(_AutocompleteSource).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteSource[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteSource[key];
    }
  });
});

var _AutocompletePropGetters = require("./AutocompletePropGetters");

Object.keys(_AutocompletePropGetters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompletePropGetters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompletePropGetters[key];
    }
  });
});

var _AutocompletePlugin = require("./AutocompletePlugin");

Object.keys(_AutocompletePlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompletePlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompletePlugin[key];
    }
  });
});

var _AutocompleteReshape = require("./AutocompleteReshape");

Object.keys(_AutocompleteReshape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteReshape[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteReshape[key];
    }
  });
});

var _AutocompleteSetters = require("./AutocompleteSetters");

Object.keys(_AutocompleteSetters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteSetters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteSetters[key];
    }
  });
});

var _AutocompleteState = require("./AutocompleteState");

Object.keys(_AutocompleteState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteState[key];
    }
  });
});

var _AutocompleteStore = require("./AutocompleteStore");

Object.keys(_AutocompleteStore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteStore[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteStore[key];
    }
  });
});

var _AutocompleteSubscribers = require("./AutocompleteSubscribers");

Object.keys(_AutocompleteSubscribers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteSubscribers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteSubscribers[key];
    }
  });
});
},{"./AutocompleteApi":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteApi.js","./AutocompleteCollection":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteCollection.js","./AutocompleteContext":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteContext.js","./AutocompleteEnvironment":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteEnvironment.js","./AutocompleteOptions":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteOptions.js","./AutocompleteSource":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSource.js","./AutocompletePropGetters":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePropGetters.js","./AutocompletePlugin":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePlugin.js","./AutocompleteReshape":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteReshape.js","./AutocompleteSetters":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSetters.js","./AutocompleteState":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteState.js","./AutocompleteStore":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteStore.js","./AutocompleteSubscribers":"node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSubscribers.js"}],"node_modules/@algolia/autocomplete-core/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createAutocomplete = require("./createAutocomplete");

Object.keys(_createAutocomplete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createAutocomplete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createAutocomplete[key];
    }
  });
});

var _getDefaultProps = require("./getDefaultProps");

Object.keys(_getDefaultProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDefaultProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDefaultProps[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
},{"./createAutocomplete":"node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js","./getDefaultProps":"node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js","./types":"node_modules/@algolia/autocomplete-core/dist/esm/types/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearIcon = void 0;

var ClearIcon = function ClearIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-ClearIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '18');
  element.setAttribute('height', '18');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z');
  element.appendChild(path);
  return element;
};

exports.ClearIcon = ClearIcon;
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHTMLElement = getHTMLElement;

var _autocompleteShared = require("@algolia/autocomplete-shared");

function getHTMLElement(environment, value) {
  if (typeof value === 'string') {
    var element = environment.document.querySelector(value);
    (0, _autocompleteShared.invariant)(element !== null, "The element ".concat(JSON.stringify(value), " is not in the document."));
    return element;
  }

  return value;
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClassNames = mergeClassNames;

function mergeClassNames() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];

      if (accValue !== currentValue) {
        acc[key] = [accValue, currentValue].filter(Boolean).join(' ');
      }
    });
    return acc;
  }, {});
}
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeDeep = mergeDeep;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var isPlainObject = function isPlainObject(value) {
  return value && _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};

function mergeDeep() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];

      if (Array.isArray(accValue) && Array.isArray(currentValue)) {
        acc[key] = accValue.concat.apply(accValue, _toConsumableArray(currentValue));
      } else if (isPlainObject(accValue) && isPlainObject(currentValue)) {
        acc[key] = mergeDeep(accValue, currentValue);
      } else {
        acc[key] = currentValue;
      }
    });
    return acc;
  }, {});
}
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProperty = setProperty;
exports.setProperties = setProperties;
exports.setPropertiesWithoutEvents = setPropertiesWithoutEvents;

/* eslint-disable */

/*
 * Taken from Preact
 *
 * See https://github.com/preactjs/preact/blob/6ab49d9020740127577bf4af66bf63f4af7f9fee/src/diff/props.js#L58-L151
 */
function setStyle(style, key, value) {
  if (value === null) {
    style[key] = '';
  } else if (typeof value !== 'number') {
    style[key] = value;
  } else {
    style[key] = value + 'px';
  }
}
/**
 * Proxy an event to hooked event handlers
 */


function eventProxy(event) {
  this._listeners[event.type](event);
}
/**
 * Set a property value on a DOM node
 */


function setProperty(dom, name, value) {
  var useCapture;
  var nameLower;
  var oldValue = dom[name];

  if (name === 'style') {
    if (typeof value == 'string') {
      dom.style = value;
    } else {
      if (value === null) {
        dom.style = '';
      } else {
        for (name in value) {
          if (!oldValue || value[name] !== oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  } // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
      useCapture = name !== (name = name.replace(/Capture$/, ''));
      nameLower = name.toLowerCase();
      if (nameLower in dom) name = nameLower;
      name = name.slice(2);
      if (!dom._listeners) dom._listeners = {};
      dom._listeners[name] = value;

      if (value) {
        if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
      } else {
        dom.removeEventListener(name, eventProxy, useCapture);
      }
    } else if (name !== 'list' && name !== 'tagName' && // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
    // setAttribute
    name !== 'form' && name !== 'type' && name !== 'size' && name !== 'download' && name !== 'href' && name in dom) {
      dom[name] = value == null ? '' : value;
    } else if (typeof value != 'function' && name !== 'dangerouslySetInnerHTML') {
      if (value == null || value === false && // ARIA-attributes have a different notion of boolean values.
      // The value `false` is different from the attribute not
      // existing on the DOM, so we can't remove it. For non-boolean
      // ARIA-attributes we could treat false as a removal, but the
      // amount of exceptions would cost us too many bytes. On top of
      // that other VDOM frameworks also always stringify `false`.
      !/^ar/.test(name)) {
        dom.removeAttribute(name);
      } else {
        dom.setAttribute(name, value);
      }
    }
}

function getNormalizedName(name) {
  switch (name) {
    case 'onChange':
      return 'onInput';

    default:
      return name;
  }
}

function setProperties(dom, props) {
  for (var name in props) {
    setProperty(dom, getNormalizedName(name), props[name]);
  }
}

function setPropertiesWithoutEvents(dom, props) {
  for (var name in props) {
    if (!(name[0] === 'o' && name[1] === 'n')) {
      setProperty(dom, getNormalizedName(name), props[name]);
    }
  }
}
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getHTMLElement = require("./getHTMLElement");

Object.keys(_getHTMLElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getHTMLElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getHTMLElement[key];
    }
  });
});

var _mergeClassNames = require("./mergeClassNames");

Object.keys(_mergeClassNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mergeClassNames[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mergeClassNames[key];
    }
  });
});

var _mergeDeep = require("./mergeDeep");

Object.keys(_mergeDeep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mergeDeep[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mergeDeep[key];
    }
  });
});

var _setProperties = require("./setProperties");

Object.keys(_setProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setProperties[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setProperties[key];
    }
  });
});
},{"./getHTMLElement":"node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js","./mergeClassNames":"node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js","./mergeDeep":"node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js","./setProperties":"node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreateDomElement = getCreateDomElement;

var _utils = require("./utils");

var _excluded = ["children"];

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function getCreateDomElement(environment) {
  return function createDomElement(tagName, _ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children,
        props = _objectWithoutProperties(_ref, _excluded);

    var element = environment.document.createElement(tagName);
    (0, _utils.setProperties)(element, props);
    element.append.apply(element, _toConsumableArray(children));
    return element;
  };
}
},{"./utils":"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _getCreateDomElement = require("../getCreateDomElement");

var _utils = require("../utils");

var _excluded = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "onDetachedEscape", "state"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Input = function Input(_ref) {
  var autocompleteScopeApi = _ref.autocompleteScopeApi,
      environment = _ref.environment,
      classNames = _ref.classNames,
      getInputProps = _ref.getInputProps,
      getInputPropsCore = _ref.getInputPropsCore,
      onDetachedEscape = _ref.onDetachedEscape,
      state = _ref.state,
      props = _objectWithoutProperties(_ref, _excluded);

  var createDomElement = (0, _getCreateDomElement.getCreateDomElement)(environment);
  var element = createDomElement('input', props);
  var inputProps = getInputProps(_objectSpread({
    state: state,
    props: getInputPropsCore({
      inputElement: element
    }),
    inputElement: element
  }, autocompleteScopeApi));
  (0, _utils.setProperties)(element, _objectSpread(_objectSpread({}, inputProps), {}, {
    onKeyDown: function onKeyDown(event) {
      if (onDetachedEscape && event.key === 'Escape') {
        event.preventDefault();
        onDetachedEscape();
        return;
      }

      inputProps.onKeyDown(event);
    }
  }));
  return element;
};

exports.Input = Input;
},{"../getCreateDomElement":"node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js","../utils":"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIcon = void 0;

var LoadingIcon = function LoadingIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-LoadingIcon');
  element.setAttribute('viewBox', '0 0 100 100');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.innerHTML = "<circle\n  cx=\"50\"\n  cy=\"50\"\n  fill=\"none\"\n  r=\"35\"\n  stroke=\"currentColor\"\n  stroke-dasharray=\"164.93361431346415 56.97787143782138\"\n  stroke-width=\"6\"\n>\n  <animateTransform\n    attributeName=\"transform\"\n    type=\"rotate\"\n    repeatCount=\"indefinite\"\n    dur=\"1s\"\n    values=\"0 50 50;90 50 50;180 50 50;360 50 50\"\n    keyTimes=\"0;0.40;0.65;1\"\n  />\n</circle>";
  return element;
};

exports.LoadingIcon = LoadingIcon;
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = void 0;

var SearchIcon = function SearchIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-SubmitIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z');
  element.appendChild(path);
  return element;
};

exports.SearchIcon = SearchIcon;
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/elements/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClearIcon = require("./ClearIcon");

Object.keys(_ClearIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ClearIcon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ClearIcon[key];
    }
  });
});

var _Input = require("./Input");

Object.keys(_Input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Input[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Input[key];
    }
  });
});

var _LoadingIcon = require("./LoadingIcon");

Object.keys(_LoadingIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LoadingIcon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LoadingIcon[key];
    }
  });
});

var _SearchIcon = require("./SearchIcon");

Object.keys(_SearchIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SearchIcon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SearchIcon[key];
    }
  });
});
},{"./ClearIcon":"node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js","./Input":"node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js","./LoadingIcon":"node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js","./SearchIcon":"node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAutocompleteDom = createAutocompleteDom;

var _elements = require("./elements");

var _getCreateDomElement = require("./getCreateDomElement");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function createAutocompleteDom(_ref) {
  var autocomplete = _ref.autocomplete,
      autocompleteScopeApi = _ref.autocompleteScopeApi,
      classNames = _ref.classNames,
      environment = _ref.environment,
      isDetached = _ref.isDetached,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
      propGetters = _ref.propGetters,
      setIsModalOpen = _ref.setIsModalOpen,
      state = _ref.state,
      translations = _ref.translations;
  var createDomElement = (0, _getCreateDomElement.getCreateDomElement)(environment);
  var rootProps = propGetters.getRootProps(_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi));
  var root = createDomElement('div', _objectSpread({
    class: classNames.root
  }, rootProps));
  var detachedContainer = createDomElement('div', {
    class: classNames.detachedContainer,
    onMouseDown: function onMouseDown(event) {
      event.stopPropagation();
    }
  });
  var detachedOverlay = createDomElement('div', {
    class: classNames.detachedOverlay,
    children: [detachedContainer],
    onMouseDown: function onMouseDown() {
      setIsModalOpen(false);
      autocomplete.setIsOpen(false);
    }
  });
  var labelProps = propGetters.getLabelProps(_objectSpread({
    state: state,
    props: autocomplete.getLabelProps({})
  }, autocompleteScopeApi));
  var submitButton = createDomElement('button', {
    class: classNames.submitButton,
    type: 'submit',
    title: translations.submitButtonTitle,
    children: [(0, _elements.SearchIcon)({
      environment: environment
    })]
  });
  var label = createDomElement('label', _objectSpread({
    class: classNames.label,
    children: [submitButton]
  }, labelProps));
  var clearButton = createDomElement('button', {
    class: classNames.clearButton,
    type: 'reset',
    title: translations.clearButtonTitle,
    children: [(0, _elements.ClearIcon)({
      environment: environment
    })]
  });
  var loadingIndicator = createDomElement('div', {
    class: classNames.loadingIndicator,
    children: [(0, _elements.LoadingIcon)({
      environment: environment
    })]
  });
  var input = (0, _elements.Input)({
    class: classNames.input,
    environment: environment,
    state: state,
    getInputProps: propGetters.getInputProps,
    getInputPropsCore: autocomplete.getInputProps,
    autocompleteScopeApi: autocompleteScopeApi,
    onDetachedEscape: isDetached ? function () {
      autocomplete.setIsOpen(false);
      setIsModalOpen(false);
    } : undefined
  });
  var inputWrapperPrefix = createDomElement('div', {
    class: classNames.inputWrapperPrefix,
    children: [label, loadingIndicator]
  });
  var inputWrapperSuffix = createDomElement('div', {
    class: classNames.inputWrapperSuffix,
    children: [clearButton]
  });
  var inputWrapper = createDomElement('div', {
    class: classNames.inputWrapper,
    children: [input]
  });
  var formProps = propGetters.getFormProps(_objectSpread({
    state: state,
    props: autocomplete.getFormProps({
      inputElement: input
    })
  }, autocompleteScopeApi));
  var form = createDomElement('form', _objectSpread({
    class: classNames.form,
    children: [inputWrapperPrefix, inputWrapper, inputWrapperSuffix]
  }, formProps));
  var panelProps = propGetters.getPanelProps(_objectSpread({
    state: state,
    props: autocomplete.getPanelProps({})
  }, autocompleteScopeApi));
  var panel = createDomElement('div', _objectSpread({
    class: classNames.panel
  }, panelProps));

  if ("development" === 'test') {
    (0, _utils.setProperties)(panel, {
      'data-testid': 'panel'
    });
  }

  if (isDetached) {
    var detachedSearchButtonIcon = createDomElement('div', {
      class: classNames.detachedSearchButtonIcon,
      children: [(0, _elements.SearchIcon)({
        environment: environment
      })]
    });
    var detachedSearchButtonPlaceholder = createDomElement('div', {
      class: classNames.detachedSearchButtonPlaceholder,
      textContent: placeholder
    });
    var detachedSearchButton = createDomElement('button', {
      class: classNames.detachedSearchButton,
      onClick: function onClick(event) {
        event.preventDefault();
        setIsModalOpen(true);
      },
      children: [detachedSearchButtonIcon, detachedSearchButtonPlaceholder]
    });
    var detachedCancelButton = createDomElement('button', {
      class: classNames.detachedCancelButton,
      textContent: translations.detachedCancelButtonText,
      onClick: function onClick() {
        autocomplete.setIsOpen(false);
        setIsModalOpen(false);
      }
    });
    var detachedFormContainer = createDomElement('div', {
      class: classNames.detachedFormContainer,
      children: [form, detachedCancelButton]
    });
    detachedContainer.appendChild(detachedFormContainer);
    root.appendChild(detachedSearchButton);
  } else {
    root.appendChild(form);
  }

  return {
    detachedContainer: detachedContainer,
    detachedOverlay: detachedOverlay,
    inputWrapper: inputWrapper,
    input: input,
    root: root,
    form: form,
    label: label,
    submitButton: submitButton,
    clearButton: clearButton,
    loadingIndicator: loadingIndicator,
    panel: panel
  };
}
},{"./elements":"node_modules/@algolia/autocomplete-js/dist/esm/elements/index.js","./getCreateDomElement":"node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js","./utils":"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEffectWrapper = createEffectWrapper;

function createEffectWrapper() {
  var effects = [];
  var cleanups = [];

  function runEffect(fn) {
    effects.push(fn);
    var effectCleanup = fn();
    cleanups.push(effectCleanup);
  }

  return {
    runEffect: runEffect,
    cleanupEffects: function cleanupEffects() {
      var currentCleanups = cleanups;
      cleanups = [];
      currentCleanups.forEach(function (cleanup) {
        cleanup();
      });
    },
    runEffects: function runEffects() {
      var currentEffects = effects;
      effects = [];
      currentEffects.forEach(function (effect) {
        runEffect(effect);
      });
    }
  };
}
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReactiveWrapper = createReactiveWrapper;

function createReactiveWrapper() {
  var reactives = [];
  return {
    reactive: function reactive(value) {
      var current = value();
      var reactive = {
        _fn: value,
        _ref: {
          current: current
        },

        get value() {
          return this._ref.current;
        },

        set value(value) {
          this._ref.current = value;
        }

      };
      reactives.push(reactive);
      return reactive;
    },
    runReactives: function runReactives() {
      reactives.forEach(function (value) {
        value._ref.current = value._fn();
      });
    }
  };
}
},{}],"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = O;
exports.hydrate = S;
exports.h = exports.createElement = v;
exports.Fragment = p;
exports.createRef = y;
exports.Component = d;
exports.cloneElement = q;
exports.createContext = B;
exports.toChildArray = b;
exports.__u = L;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = {};

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return h(n, f, i, t, null);
}

function h(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++n.__v : o
  };
  return null != n.vnode && n.vnode(r), r;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
}

function g() {
  for (var n; g.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r, f;
    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = o.__v + 1, t = $(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null != o.__h ? [r] : null, u, null == r ? _(o) : r, o.__h), j(u, o), t != r && w(o)));
  });
}

function m(n, l, u, i, t, o, r, c, s, v) {
  var y,
      d,
      w,
      k,
      g,
      m,
      b,
      A = i && i.__k || e,
      P = A.length;

  for (s == f && (s = null != r ? r[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(p, {
    children: k
  }, null, null, null) : null != k.__e || null != k.__c ? h(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (w = A[y]) || w && k.key == w.key && k.type === w.type) A[y] = void 0;else for (d = 0; d < P; d++) {
      if ((w = A[d]) && k.key == w.key && k.type === w.type) {
        A[d] = void 0;
        break;
      }

      w = null;
    }
    g = $(n, k, w = w || f, t, o, r, c, s, v), (d = k.ref) && w.ref != d && (b || (b = []), w.ref && b.push(w.ref, null, k), b.push(d, k.__c || g, k)), null != g ? (null == m && (m = g), s = x(n, k, w, A, r, g, s), v || "option" != u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
  }

  if (u.__e = m, null != r && "function" != typeof u.type) for (y = r.length; y--;) null != r[y] && a(r[y]);

  for (y = P; y--;) null != A[y] && L(A[y], A[y]);

  if (b) for (y = 0; y < b.length; y++) I(b[y], b[++y], b[++y]);
}

function b(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    b(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, o, r) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;

    n.insertBefore(o, r), f = r;
  }
  return void 0 !== f ? f : o.nextSibling;
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var o, r, f;
  if (t && "className" == l && (l = "class"), "style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, f = o ? N : z, u ? i || n.addEventListener(l, f, o) : n.removeEventListener(l, f, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function z(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function N(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function T(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && T(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
}

function $(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      _,
      w,
      k,
      g,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new d(g, x), v.constructor = P, v.render = M), b && b.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(g, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), T(u, e, l);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, _, w);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = H(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), n.__e(l, u, i);
  }

  return u.__e;
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function H(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, c = !1;
  }

  if (null === l.type) p === d || c && n.data === d || (n.data = d);else {
    if (null != o && (o = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, m(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && (s !== n.value || "progress" === l.type && !s) && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
  null != o && a(o);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function O(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], $(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), j(c, l);
}

function S(n, l) {
  O(n, l, o);
}

function q(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = s({}, n.props);

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return null != u && (f.children = u), h(n.type, f, i || n.key, t || n.ref, null);
}

function B(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n, u, i) {
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i, t, o = l.__h; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return l.__h = o, u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;
},{}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/HighlightedHit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIGHLIGHT_POST_TAG = exports.HIGHLIGHT_PRE_TAG = void 0;
var HIGHLIGHT_PRE_TAG = '__aa-highlight__';
exports.HIGHLIGHT_PRE_TAG = HIGHLIGHT_PRE_TAG;
var HIGHLIGHT_POST_TAG = '__/aa-highlight__';
exports.HIGHLIGHT_POST_TAG = HIGHLIGHT_POST_TAG;
},{}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAttribute = parseAttribute;

var _constants = require("../constants");

/**
 * Creates a data structure that allows to concatenate similar highlighting
 * parts in a single value.
 */
function createAttributeSet() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = initialValue;
  return {
    get: function get() {
      return value;
    },
    add: function add(part) {
      var lastPart = value[value.length - 1];

      if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.isHighlighted) === part.isHighlighted) {
        value[value.length - 1] = {
          value: lastPart.value + part.value,
          isHighlighted: lastPart.isHighlighted
        };
      } else {
        value.push(part);
      }
    }
  };
}

function parseAttribute(_ref) {
  var highlightedValue = _ref.highlightedValue;
  var preTagParts = highlightedValue.split(_constants.HIGHLIGHT_PRE_TAG);
  var firstValue = preTagParts.shift();
  var parts = createAttributeSet(firstValue ? [{
    value: firstValue,
    isHighlighted: false
  }] : []);
  preTagParts.forEach(function (part) {
    var postTagParts = part.split(_constants.HIGHLIGHT_POST_TAG);
    parts.add({
      value: postTagParts[0],
      isHighlighted: true
    });

    if (postTagParts[1] !== '') {
      parts.add({
        value: postTagParts[1],
        isHighlighted: false
      });
    }
  });
  return parts.get();
}
},{"../constants":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAlgoliaHitHighlight = parseAlgoliaHitHighlight;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _parseAttribute = require("./parseAttribute");

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function parseAlgoliaHitHighlight(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, ['_highlightResult'].concat(_toConsumableArray(path), ['value']));

  if (typeof highlightedValue !== 'string') {
    "development" !== 'production' ? (0, _autocompleteShared.warn)(false, "The attribute \"".concat(path.join('.'), "\" described by the path ").concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToHighlight`?") + '\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/') : void 0;
    highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, path) || '';
  }

  return (0, _parseAttribute.parseAttribute)({
    highlightedValue: highlightedValue
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./parseAttribute":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPartHighlighted = isPartHighlighted;
var htmlEscapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};
var hasAlphanumeric = new RegExp(/\w/i);
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);

function unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}

function isPartHighlighted(parts, i) {
  var _parts, _parts2;

  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;

  if (!hasAlphanumeric.test(unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }

  return current.isHighlighted;
}
},{}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseHighlightedParts = reverseHighlightedParts;

var _isPartHighlighted = require("./isPartHighlighted");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function reverseHighlightedParts(parts) {
  // We don't want to highlight the whole word when no parts match.
  if (!parts.some(function (part) {
    return part.isHighlighted;
  })) {
    return parts.map(function (part) {
      return _objectSpread(_objectSpread({}, part), {}, {
        isHighlighted: false
      });
    });
  }

  return parts.map(function (part, i) {
    return _objectSpread(_objectSpread({}, part), {}, {
      isHighlighted: !(0, _isPartHighlighted.isPartHighlighted)(parts, i)
    });
  });
}
},{"./isPartHighlighted":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAlgoliaHitReverseHighlight = parseAlgoliaHitReverseHighlight;

var _parseAlgoliaHitHighlight = require("./parseAlgoliaHitHighlight");

var _reverseHighlightedParts = require("./reverseHighlightedParts");

function parseAlgoliaHitReverseHighlight(props) {
  return (0, _reverseHighlightedParts.reverseHighlightedParts)((0, _parseAlgoliaHitHighlight.parseAlgoliaHitHighlight)(props));
}
},{"./parseAlgoliaHitHighlight":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js","./reverseHighlightedParts":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAlgoliaHitSnippet = parseAlgoliaHitSnippet;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _parseAttribute = require("./parseAttribute");

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function parseAlgoliaHitSnippet(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, ['_snippetResult'].concat(_toConsumableArray(path), ['value']));

  if (typeof highlightedValue !== 'string') {
    "development" !== 'production' ? (0, _autocompleteShared.warn)(false, "The attribute \"".concat(path.join('.'), "\" described by the path ").concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToSnippet`?") + '\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/') : void 0;
    highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, path) || '';
  }

  return (0, _parseAttribute.parseAttribute)({
    highlightedValue: highlightedValue
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./parseAttribute":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAlgoliaHitReverseSnippet = parseAlgoliaHitReverseSnippet;

var _parseAlgoliaHitSnippet = require("./parseAlgoliaHitSnippet");

var _reverseHighlightedParts = require("./reverseHighlightedParts");

function parseAlgoliaHitReverseSnippet(props) {
  return (0, _reverseHighlightedParts.reverseHighlightedParts)((0, _parseAlgoliaHitSnippet.parseAlgoliaHitSnippet)(props));
}
},{"./parseAlgoliaHitSnippet":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js","./reverseHighlightedParts":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/SnippetedHit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HighlightedHit = require("./HighlightedHit");

Object.keys(_HighlightedHit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HighlightedHit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HighlightedHit[key];
    }
  });
});

var _parseAlgoliaHitHighlight = require("./parseAlgoliaHitHighlight");

Object.keys(_parseAlgoliaHitHighlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseAlgoliaHitHighlight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseAlgoliaHitHighlight[key];
    }
  });
});

var _parseAlgoliaHitReverseHighlight = require("./parseAlgoliaHitReverseHighlight");

Object.keys(_parseAlgoliaHitReverseHighlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseAlgoliaHitReverseHighlight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseAlgoliaHitReverseHighlight[key];
    }
  });
});

var _parseAlgoliaHitReverseSnippet = require("./parseAlgoliaHitReverseSnippet");

Object.keys(_parseAlgoliaHitReverseSnippet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseAlgoliaHitReverseSnippet[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseAlgoliaHitReverseSnippet[key];
    }
  });
});

var _parseAlgoliaHitSnippet = require("./parseAlgoliaHitSnippet");

Object.keys(_parseAlgoliaHitSnippet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseAlgoliaHitSnippet[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseAlgoliaHitSnippet[key];
    }
  });
});

var _SnippetedHit = require("./SnippetedHit");

Object.keys(_SnippetedHit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SnippetedHit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SnippetedHit[key];
    }
  });
});
},{"./HighlightedHit":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/HighlightedHit.js","./parseAlgoliaHitHighlight":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js","./parseAlgoliaHitReverseHighlight":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js","./parseAlgoliaHitReverseSnippet":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js","./parseAlgoliaHitSnippet":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js","./SnippetedHit":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/SnippetedHit.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRequester = createRequester;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function createRequester(fetcher) {
  function execute(fetcherParams) {
    return fetcher({
      searchClient: fetcherParams.searchClient,
      queries: fetcherParams.requests.map(function (x) {
        return x.query;
      })
    }).then(function (responses) {
      return responses.map(function (response, index) {
        var _fetcherParams$reques = fetcherParams.requests[index],
            sourceId = _fetcherParams$reques.sourceId,
            transformResponse = _fetcherParams$reques.transformResponse;
        return {
          items: response,
          sourceId: sourceId,
          transformResponse: transformResponse
        };
      });
    });
  }

  return function createSpecifiedRequester(requesterParams) {
    return function requester(requestParams) {
      return _objectSpread(_objectSpread({
        execute: execute
      }, requesterParams), requestParams);
    };
  };
}
},{}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/fetchAlgoliaResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAlgoliaResults = fetchAlgoliaResults;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _constants = require("../constants");

var _excluded = ["params"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function fetchAlgoliaResults(_ref) {
  var searchClient = _ref.searchClient,
      queries = _ref.queries,
      _ref$userAgents = _ref.userAgents,
      userAgents = _ref$userAgents === void 0 ? [] : _ref$userAgents;

  if (typeof searchClient.addAlgoliaAgent === 'function') {
    var algoliaAgents = [].concat(_toConsumableArray(_autocompleteShared.userAgents), _toConsumableArray(userAgents));
    algoliaAgents.forEach(function (_ref2) {
      var segment = _ref2.segment,
          version = _ref2.version;
      searchClient.addAlgoliaAgent(segment, version);
    });
  }

  return searchClient.search(queries.map(function (searchParameters) {
    var params = searchParameters.params,
        headers = _objectWithoutProperties(searchParameters, _excluded);

    return _objectSpread(_objectSpread({}, headers), {}, {
      params: _objectSpread({
        hitsPerPage: 5,
        highlightPreTag: _constants.HIGHLIGHT_PRE_TAG,
        highlightPostTag: _constants.HIGHLIGHT_POST_TAG
      }, params)
    });
  })).then(function (response) {
    return response.results;
  });
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","../constants":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchAlgoliaResults = require("./fetchAlgoliaResults");

Object.keys(_fetchAlgoliaResults).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fetchAlgoliaResults[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fetchAlgoliaResults[key];
    }
  });
});
},{"./fetchAlgoliaResults":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/fetchAlgoliaResults.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlgoliaRequester = void 0;

var _search = require("../search");

var _createRequester = require("./createRequester");

var createAlgoliaRequester = (0, _createRequester.createRequester)(_search.fetchAlgoliaResults);
exports.createAlgoliaRequester = createAlgoliaRequester;
},{"../search":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js","./createRequester":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaFacets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlgoliaFacets = getAlgoliaFacets;

var _createAlgoliaRequester = require("./createAlgoliaRequester");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Retrieves Algolia facet hits from multiple indices.
 */
function getAlgoliaFacets(requestParams) {
  var requester = (0, _createAlgoliaRequester.createAlgoliaRequester)({
    transformResponse: function transformResponse(response) {
      return response.facetHits;
    }
  });
  var queries = requestParams.queries.map(function (query) {
    return _objectSpread(_objectSpread({}, query), {}, {
      type: 'facet'
    });
  });
  return requester(_objectSpread(_objectSpread({}, requestParams), {}, {
    queries: queries
  }));
}
},{"./createAlgoliaRequester":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlgoliaResults = void 0;

var _createAlgoliaRequester = require("./createAlgoliaRequester");

/**
 * Retrieves Algolia results from multiple indices.
 */
var getAlgoliaResults = (0, _createAlgoliaRequester.createAlgoliaRequester)({
  transformResponse: function transformResponse(response) {
    return response.hits;
  }
});
exports.getAlgoliaResults = getAlgoliaResults;
},{"./createAlgoliaRequester":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRequester = require("./createRequester");

Object.keys(_createRequester).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createRequester[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createRequester[key];
    }
  });
});

var _getAlgoliaFacets = require("./getAlgoliaFacets");

Object.keys(_getAlgoliaFacets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAlgoliaFacets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAlgoliaFacets[key];
    }
  });
});

var _getAlgoliaResults = require("./getAlgoliaResults");

Object.keys(_getAlgoliaResults).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAlgoliaResults[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAlgoliaResults[key];
    }
  });
});
},{"./createRequester":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js","./getAlgoliaFacets":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaFacets.js","./getAlgoliaResults":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaResults.js"}],"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _highlight = require("./highlight");

Object.keys(_highlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _highlight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _highlight[key];
    }
  });
});

var _requester = require("./requester");

Object.keys(_requester).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _requester[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _requester[key];
    }
  });
});

var _search = require("./search");

Object.keys(_search).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _search[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _search[key];
    }
  });
});
},{"./highlight":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/index.js","./requester":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/index.js","./search":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHighlightComponent = createHighlightComponent;

var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");

function createHighlightComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;
  return function Highlight(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitHighlight)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  };
}
},{"@algolia/autocomplete-preset-algolia":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReverseHighlightComponent = createReverseHighlightComponent;

var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");

function createReverseHighlightComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;
  return function ReverseHighlight(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitReverseHighlight)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  };
}
},{"@algolia/autocomplete-preset-algolia":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReverseSnippetComponent = createReverseSnippetComponent;

var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");

function createReverseSnippetComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;
  return function ReverseSnippet(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitReverseSnippet)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  };
}
},{"@algolia/autocomplete-preset-algolia":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSnippetComponent = createSnippetComponent;

var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");

function createSnippetComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;
  return function Snippet(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitSnippet)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  };
}
},{"@algolia/autocomplete-preset-algolia":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Highlight = require("./Highlight");

Object.keys(_Highlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Highlight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Highlight[key];
    }
  });
});

var _ReverseHighlight = require("./ReverseHighlight");

Object.keys(_ReverseHighlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReverseHighlight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReverseHighlight[key];
    }
  });
});

var _ReverseSnippet = require("./ReverseSnippet");

Object.keys(_ReverseSnippet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReverseSnippet[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReverseSnippet[key];
    }
  });
});

var _Snippet = require("./Snippet");

Object.keys(_Snippet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Snippet[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Snippet[key];
    }
  });
});
},{"./Highlight":"node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js","./ReverseHighlight":"node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js","./ReverseSnippet":"node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js","./Snippet":"node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultOptions = getDefaultOptions;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _preact = require("preact");

var _components = require("./components");

var _utils = require("./utils");

var _excluded = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var defaultClassNames = {
  clearButton: 'aa-ClearButton',
  detachedCancelButton: 'aa-DetachedCancelButton',
  detachedContainer: 'aa-DetachedContainer',
  detachedFormContainer: 'aa-DetachedFormContainer',
  detachedOverlay: 'aa-DetachedOverlay',
  detachedSearchButton: 'aa-DetachedSearchButton',
  detachedSearchButtonIcon: 'aa-DetachedSearchButtonIcon',
  detachedSearchButtonPlaceholder: 'aa-DetachedSearchButtonPlaceholder',
  form: 'aa-Form',
  input: 'aa-Input',
  inputWrapper: 'aa-InputWrapper',
  inputWrapperPrefix: 'aa-InputWrapperPrefix',
  inputWrapperSuffix: 'aa-InputWrapperSuffix',
  item: 'aa-Item',
  label: 'aa-Label',
  list: 'aa-List',
  loadingIndicator: 'aa-LoadingIndicator',
  panel: 'aa-Panel',
  panelLayout: 'aa-PanelLayout aa-Panel--scrollable',
  root: 'aa-Autocomplete',
  source: 'aa-Source',
  sourceFooter: 'aa-SourceFooter',
  sourceHeader: 'aa-SourceHeader',
  sourceNoResults: 'aa-SourceNoResults',
  submitButton: 'aa-SubmitButton'
};

var defaultRender = function defaultRender(_ref, root) {
  var children = _ref.children;
  (0, _preact.render)(children, root);
};

var defaultRenderer = {
  createElement: _preact.createElement,
  Fragment: _preact.Fragment
};

function getDefaultOptions(options) {
  var _core$id;

  var classNames = options.classNames,
      container = options.container,
      getEnvironmentProps = options.getEnvironmentProps,
      getFormProps = options.getFormProps,
      getInputProps = options.getInputProps,
      getItemProps = options.getItemProps,
      getLabelProps = options.getLabelProps,
      getListProps = options.getListProps,
      getPanelProps = options.getPanelProps,
      getRootProps = options.getRootProps,
      panelContainer = options.panelContainer,
      panelPlacement = options.panelPlacement,
      render = options.render,
      renderNoResults = options.renderNoResults,
      renderer = options.renderer,
      detachedMediaQuery = options.detachedMediaQuery,
      components = options.components,
      translations = options.translations,
      core = _objectWithoutProperties(options, _excluded);
  /* eslint-disable no-restricted-globals */


  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var containerElement = (0, _utils.getHTMLElement)(environment, container);
  (0, _autocompleteShared.invariant)(containerElement.tagName !== 'INPUT', 'The `container` option does not support `input` elements. You need to change the container to a `div`.');
  var defaultedRenderer = renderer !== null && renderer !== void 0 ? renderer : defaultRenderer;
  var defaultComponents = {
    Highlight: (0, _components.createHighlightComponent)(defaultedRenderer),
    ReverseHighlight: (0, _components.createReverseHighlightComponent)(defaultedRenderer),
    ReverseSnippet: (0, _components.createReverseSnippetComponent)(defaultedRenderer),
    Snippet: (0, _components.createSnippetComponent)(defaultedRenderer)
  };
  var defaultTranslations = {
    clearButtonTitle: 'Clear',
    detachedCancelButtonText: 'Cancel',
    submitButtonTitle: 'Submit'
  };
  return {
    renderer: {
      classNames: (0, _utils.mergeClassNames)(defaultClassNames, classNames !== null && classNames !== void 0 ? classNames : {}),
      container: containerElement,
      getEnvironmentProps: getEnvironmentProps !== null && getEnvironmentProps !== void 0 ? getEnvironmentProps : function (_ref2) {
        var props = _ref2.props;
        return props;
      },
      getFormProps: getFormProps !== null && getFormProps !== void 0 ? getFormProps : function (_ref3) {
        var props = _ref3.props;
        return props;
      },
      getInputProps: getInputProps !== null && getInputProps !== void 0 ? getInputProps : function (_ref4) {
        var props = _ref4.props;
        return props;
      },
      getItemProps: getItemProps !== null && getItemProps !== void 0 ? getItemProps : function (_ref5) {
        var props = _ref5.props;
        return props;
      },
      getLabelProps: getLabelProps !== null && getLabelProps !== void 0 ? getLabelProps : function (_ref6) {
        var props = _ref6.props;
        return props;
      },
      getListProps: getListProps !== null && getListProps !== void 0 ? getListProps : function (_ref7) {
        var props = _ref7.props;
        return props;
      },
      getPanelProps: getPanelProps !== null && getPanelProps !== void 0 ? getPanelProps : function (_ref8) {
        var props = _ref8.props;
        return props;
      },
      getRootProps: getRootProps !== null && getRootProps !== void 0 ? getRootProps : function (_ref9) {
        var props = _ref9.props;
        return props;
      },
      panelContainer: panelContainer ? (0, _utils.getHTMLElement)(environment, panelContainer) : environment.document.body,
      panelPlacement: panelPlacement !== null && panelPlacement !== void 0 ? panelPlacement : 'input-wrapper-width',
      render: render !== null && render !== void 0 ? render : defaultRender,
      renderNoResults: renderNoResults,
      renderer: defaultedRenderer,
      detachedMediaQuery: detachedMediaQuery !== null && detachedMediaQuery !== void 0 ? detachedMediaQuery : getComputedStyle(environment.document.documentElement).getPropertyValue('--aa-detached-media-query'),
      components: _objectSpread(_objectSpread({}, defaultComponents), components),
      translations: _objectSpread(_objectSpread({}, defaultTranslations), translations)
    },
    core: _objectSpread(_objectSpread({}, core), {}, {
      id: (_core$id = core.id) !== null && _core$id !== void 0 ? _core$id : (0, _autocompleteShared.generateAutocompleteId)(),
      environment: environment
    })
  };
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","preact":"node_modules/preact/dist/preact.module.js","./components":"node_modules/@algolia/autocomplete-js/dist/esm/components/index.js","./utils":"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPanelPlacementStyle = getPanelPlacementStyle;

function getPanelPlacementStyle(_ref) {
  var panelPlacement = _ref.panelPlacement,
      container = _ref.container,
      form = _ref.form,
      environment = _ref.environment;
  var containerRect = container.getBoundingClientRect(); // Some browsers have specificities to retrieve the document scroll position.
  // See https://stackoverflow.com/a/28633515/9940315

  var scrollTop = environment.pageYOffset || environment.document.documentElement.scrollTop || environment.document.body.scrollTop || 0;
  var top = scrollTop + containerRect.top + containerRect.height;

  switch (panelPlacement) {
    case 'start':
      {
        return {
          top: top,
          left: containerRect.left
        };
      }

    case 'end':
      {
        return {
          top: top,
          right: environment.document.documentElement.clientWidth - (containerRect.left + containerRect.width)
        };
      }

    case 'full-width':
      {
        return {
          top: top,
          left: 0,
          right: 0,
          width: 'unset',
          maxWidth: 'unset'
        };
      }

    case 'input-wrapper-width':
      {
        var formRect = form.getBoundingClientRect();
        return {
          top: top,
          left: formRect.left,
          right: environment.document.documentElement.clientWidth - (formRect.left + formRect.width),
          width: 'unset',
          maxWidth: 'unset'
        };
      }

    default:
      {
        throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(panelPlacement), " is not valid."));
      }
  }
}
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSearchBox = renderSearchBox;
exports.renderPanel = renderPanel;

var _utils = require("./utils");

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/** @jsx createElement */


function renderSearchBox(_ref) {
  var autocomplete = _ref.autocomplete,
      autocompleteScopeApi = _ref.autocompleteScopeApi,
      dom = _ref.dom,
      propGetters = _ref.propGetters,
      state = _ref.state;
  (0, _utils.setPropertiesWithoutEvents)(dom.root, propGetters.getRootProps(_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi)));
  (0, _utils.setPropertiesWithoutEvents)(dom.input, propGetters.getInputProps(_objectSpread({
    state: state,
    props: autocomplete.getInputProps({
      inputElement: dom.input
    }),
    inputElement: dom.input
  }, autocompleteScopeApi)));
  (0, _utils.setProperties)(dom.label, {
    hidden: state.status === 'stalled'
  });
  (0, _utils.setProperties)(dom.loadingIndicator, {
    hidden: state.status !== 'stalled'
  });
  (0, _utils.setProperties)(dom.clearButton, {
    hidden: !state.query
  });
}

function renderPanel(render, _ref2) {
  var autocomplete = _ref2.autocomplete,
      autocompleteScopeApi = _ref2.autocompleteScopeApi,
      classNames = _ref2.classNames,
      createElement = _ref2.createElement,
      dom = _ref2.dom,
      Fragment = _ref2.Fragment,
      panelContainer = _ref2.panelContainer,
      propGetters = _ref2.propGetters,
      state = _ref2.state,
      components = _ref2.components;

  if (!state.isOpen) {
    if (panelContainer.contains(dom.panel)) {
      panelContainer.removeChild(dom.panel);
    }

    return;
  } // We add the panel element to the DOM when it's not yet appended and that the
  // items are fetched.


  if (!panelContainer.contains(dom.panel) && state.status !== 'loading') {
    panelContainer.appendChild(dom.panel);
  }

  dom.panel.classList.toggle('aa-Panel--stalled', state.status === 'stalled');
  var sections = state.collections.filter(function (_ref3) {
    var source = _ref3.source,
        items = _ref3.items;
    return source.templates.noResults || items.length > 0;
  }).map(function (_ref4, sourceIndex) {
    var source = _ref4.source,
        items = _ref4.items;
    return createElement("section", {
      key: sourceIndex,
      className: classNames.source,
      "data-autocomplete-source-id": source.sourceId
    }, source.templates.header && createElement("div", {
      className: classNames.sourceHeader
    }, source.templates.header({
      components: components,
      createElement: createElement,
      Fragment: Fragment,
      items: items,
      source: source,
      state: state
    })), source.templates.noResults && items.length === 0 ? createElement("div", {
      className: classNames.sourceNoResults
    }, source.templates.noResults({
      components: components,
      createElement: createElement,
      Fragment: Fragment,
      source: source,
      state: state
    })) : createElement("ul", _extends({
      className: classNames.list
    }, propGetters.getListProps(_objectSpread({
      state: state,
      props: autocomplete.getListProps({})
    }, autocompleteScopeApi))), items.map(function (item) {
      var itemProps = autocomplete.getItemProps({
        item: item,
        source: source
      });
      return createElement("li", _extends({
        key: itemProps.id,
        className: classNames.item
      }, propGetters.getItemProps(_objectSpread({
        state: state,
        props: itemProps
      }, autocompleteScopeApi))), source.templates.item({
        components: components,
        createElement: createElement,
        Fragment: Fragment,
        item: item,
        state: state
      }));
    })), source.templates.footer && createElement("div", {
      className: classNames.sourceFooter
    }, source.templates.footer({
      components: components,
      createElement: createElement,
      Fragment: Fragment,
      items: items,
      source: source,
      state: state
    })));
  });
  var children = createElement(Fragment, null, createElement("div", {
    className: classNames.panelLayout
  }, sections), createElement("div", {
    className: "aa-GradientBottom"
  }));
  var elements = sections.reduce(function (acc, current) {
    acc[current.props['data-autocomplete-source-id']] = current;
    return acc;
  }, {});
  render(_objectSpread({
    children: children,
    state: state,
    sections: sections,
    elements: elements,
    createElement: createElement,
    Fragment: Fragment,
    components: components
  }, autocompleteScopeApi), dom.panel);
}
},{"./utils":"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAgents = void 0;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var userAgents = [{
  segment: 'autocomplete-js',
  version: _autocompleteShared.version
}];
exports.userAgents = userAgents;
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autocomplete = autocomplete;

var _autocompleteCore = require("@algolia/autocomplete-core");

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _createAutocompleteDom = require("./createAutocompleteDom");

var _createEffectWrapper2 = require("./createEffectWrapper");

var _createReactiveWrapper = require("./createReactiveWrapper");

var _getDefaultOptions = require("./getDefaultOptions");

var _getPanelPlacementStyle = require("./getPanelPlacementStyle");

var _render = require("./render");

var _userAgents = require("./userAgents");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function autocomplete(options) {
  var _createEffectWrapper = (0, _createEffectWrapper2.createEffectWrapper)(),
      runEffect = _createEffectWrapper.runEffect,
      cleanupEffects = _createEffectWrapper.cleanupEffects,
      runEffects = _createEffectWrapper.runEffects;

  var _createReactiveWrappe = (0, _createReactiveWrapper.createReactiveWrapper)(),
      reactive = _createReactiveWrappe.reactive,
      runReactives = _createReactiveWrappe.runReactives;

  var hasNoResultsSourceTemplateRef = (0, _autocompleteShared.createRef)(false);
  var optionsRef = (0, _autocompleteShared.createRef)(options);
  var onStateChangeRef = (0, _autocompleteShared.createRef)(undefined);
  var props = reactive(function () {
    return (0, _getDefaultOptions.getDefaultOptions)(optionsRef.current);
  });
  var isDetached = reactive(function () {
    return props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
  });
  var autocomplete = reactive(function () {
    return (0, _autocompleteCore.createAutocomplete)(_objectSpread(_objectSpread({}, props.value.core), {}, {
      onStateChange: function onStateChange(params) {
        var _onStateChangeRef$cur, _props$value$core$onS, _props$value$core;

        hasNoResultsSourceTemplateRef.current = params.state.collections.some(function (collection) {
          return collection.source.templates.noResults;
        });
        (_onStateChangeRef$cur = onStateChangeRef.current) === null || _onStateChangeRef$cur === void 0 ? void 0 : _onStateChangeRef$cur.call(onStateChangeRef, params);
        (_props$value$core$onS = (_props$value$core = props.value.core).onStateChange) === null || _props$value$core$onS === void 0 ? void 0 : _props$value$core$onS.call(_props$value$core, params);
      },
      shouldPanelOpen: optionsRef.current.shouldPanelOpen || function (_ref) {
        var state = _ref.state;

        if (isDetached.value) {
          return true;
        }

        var hasItems = (0, _autocompleteShared.getItemsCount)(state) > 0;

        if (!props.value.core.openOnFocus && !state.query) {
          return hasItems;
        }

        var hasNoResultsTemplate = Boolean(hasNoResultsSourceTemplateRef.current || props.value.renderer.renderNoResults);
        return !hasItems && hasNoResultsTemplate || hasItems;
      },
      __autocomplete_metadata: {
        userAgents: _userAgents.userAgents,
        options: options
      }
    }));
  });
  var lastStateRef = (0, _autocompleteShared.createRef)(_objectSpread({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle'
  }, props.value.core.initialState));
  var propGetters = {
    getEnvironmentProps: props.value.renderer.getEnvironmentProps,
    getFormProps: props.value.renderer.getFormProps,
    getInputProps: props.value.renderer.getInputProps,
    getItemProps: props.value.renderer.getItemProps,
    getLabelProps: props.value.renderer.getLabelProps,
    getListProps: props.value.renderer.getListProps,
    getPanelProps: props.value.renderer.getPanelProps,
    getRootProps: props.value.renderer.getRootProps
  };
  var autocompleteScopeApi = {
    setActiveItemId: autocomplete.value.setActiveItemId,
    setQuery: autocomplete.value.setQuery,
    setCollections: autocomplete.value.setCollections,
    setIsOpen: autocomplete.value.setIsOpen,
    setStatus: autocomplete.value.setStatus,
    setContext: autocomplete.value.setContext,
    refresh: autocomplete.value.refresh
  };
  var dom = reactive(function () {
    return (0, _createAutocompleteDom.createAutocompleteDom)({
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      environment: props.value.core.environment,
      isDetached: isDetached.value,
      placeholder: props.value.core.placeholder,
      propGetters: propGetters,
      setIsModalOpen: setIsModalOpen,
      state: lastStateRef.current,
      translations: props.value.renderer.translations
    });
  });

  function setPanelPosition() {
    (0, _utils.setProperties)(dom.value.panel, {
      style: isDetached.value ? {} : (0, _getPanelPlacementStyle.getPanelPlacementStyle)({
        panelPlacement: props.value.renderer.panelPlacement,
        container: dom.value.root,
        form: dom.value.form,
        environment: props.value.core.environment
      })
    });
  }

  function scheduleRender(state) {
    lastStateRef.current = state;
    var renderProps = {
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      components: props.value.renderer.components,
      container: props.value.renderer.container,
      createElement: props.value.renderer.renderer.createElement,
      dom: dom.value,
      Fragment: props.value.renderer.renderer.Fragment,
      panelContainer: isDetached.value ? dom.value.detachedContainer : props.value.renderer.panelContainer,
      propGetters: propGetters,
      state: lastStateRef.current
    };
    var render = !(0, _autocompleteShared.getItemsCount)(state) && !hasNoResultsSourceTemplateRef.current && props.value.renderer.renderNoResults || props.value.renderer.render;
    (0, _render.renderSearchBox)(renderProps);
    (0, _render.renderPanel)(render, renderProps);
  }

  runEffect(function () {
    var environmentProps = autocomplete.value.getEnvironmentProps({
      formElement: dom.value.form,
      panelElement: dom.value.panel,
      inputElement: dom.value.input
    });
    (0, _utils.setProperties)(props.value.core.environment, environmentProps);
    return function () {
      (0, _utils.setProperties)(props.value.core.environment, Object.keys(environmentProps).reduce(function (acc, key) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
      }, {}));
    };
  });
  runEffect(function () {
    var panelContainerElement = isDetached.value ? props.value.core.environment.document.body : props.value.renderer.panelContainer;
    var panelElement = isDetached.value ? dom.value.detachedOverlay : dom.value.panel;

    if (isDetached.value && lastStateRef.current.isOpen) {
      setIsModalOpen(true);
    }

    scheduleRender(lastStateRef.current);
    return function () {
      if (panelContainerElement.contains(panelElement)) {
        panelContainerElement.removeChild(panelElement);
      }
    };
  });
  runEffect(function () {
    var containerElement = props.value.renderer.container;
    containerElement.appendChild(dom.value.root);
    return function () {
      containerElement.removeChild(dom.value.root);
    };
  });
  runEffect(function () {
    var debouncedRender = (0, _autocompleteShared.debounce)(function (_ref2) {
      var state = _ref2.state;
      scheduleRender(state);
    }, 0);

    onStateChangeRef.current = function (_ref3) {
      var state = _ref3.state,
          prevState = _ref3.prevState;

      if (isDetached.value && prevState.isOpen !== state.isOpen) {
        setIsModalOpen(state.isOpen);
      } // The outer DOM might have changed since the last time the panel was
      // positioned. The layout might have shifted vertically for instance.
      // It's therefore safer to re-calculate the panel position before opening
      // it again.


      if (!isDetached.value && state.isOpen && !prevState.isOpen) {
        setPanelPosition();
      } // We scroll to the top of the panel whenever the query changes (i.e. new
      // results come in) so that users don't have to.


      if (state.query !== prevState.query) {
        var scrollablePanels = props.value.core.environment.document.querySelectorAll('.aa-Panel--scrollable');
        scrollablePanels.forEach(function (scrollablePanel) {
          if (scrollablePanel.scrollTop !== 0) {
            scrollablePanel.scrollTop = 0;
          }
        });
      }

      debouncedRender({
        state: state
      });
    };

    return function () {
      onStateChangeRef.current = undefined;
    };
  });
  runEffect(function () {
    var onResize = (0, _autocompleteShared.debounce)(function () {
      var previousIsDetached = isDetached.value;
      isDetached.value = props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;

      if (previousIsDetached !== isDetached.value) {
        update({});
      } else {
        requestAnimationFrame(setPanelPosition);
      }
    }, 20);
    props.value.core.environment.addEventListener('resize', onResize);
    return function () {
      props.value.core.environment.removeEventListener('resize', onResize);
    };
  });
  runEffect(function () {
    if (!isDetached.value) {
      return function () {};
    }

    function toggleModalClassname(isActive) {
      dom.value.detachedContainer.classList.toggle('aa-DetachedContainer--modal', isActive);
    }

    function onChange(event) {
      toggleModalClassname(event.matches);
    }

    var isModalDetachedMql = props.value.core.environment.matchMedia(getComputedStyle(props.value.core.environment.document.documentElement).getPropertyValue('--aa-detached-modal-media-query'));
    toggleModalClassname(isModalDetachedMql.matches); // Prior to Safari 14, `MediaQueryList` isn't based on `EventTarget`,
    // so we must use `addListener` and `removeListener` to observe media query lists.
    // See https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener

    var hasModernEventListener = Boolean(isModalDetachedMql.addEventListener);
    hasModernEventListener ? isModalDetachedMql.addEventListener('change', onChange) : isModalDetachedMql.addListener(onChange);
    return function () {
      hasModernEventListener ? isModalDetachedMql.removeEventListener('change', onChange) : isModalDetachedMql.removeListener(onChange);
    };
  });
  runEffect(function () {
    requestAnimationFrame(setPanelPosition);
    return function () {};
  });

  function destroy() {
    cleanupEffects();
  }

  function update() {
    var updatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    cleanupEffects();
    optionsRef.current = (0, _utils.mergeDeep)(props.value.renderer, props.value.core, {
      initialState: lastStateRef.current
    }, updatedOptions);
    runReactives();
    runEffects();
    autocomplete.value.refresh().then(function () {
      scheduleRender(lastStateRef.current);
    });
  }

  function setIsModalOpen(value) {
    requestAnimationFrame(function () {
      var prevValue = props.value.core.environment.document.body.contains(dom.value.detachedOverlay);

      if (value === prevValue) {
        return;
      }

      if (value) {
        props.value.core.environment.document.body.appendChild(dom.value.detachedOverlay);
        props.value.core.environment.document.body.classList.add('aa-Detached');
        dom.value.input.focus();
      } else {
        props.value.core.environment.document.body.removeChild(dom.value.detachedOverlay);
        props.value.core.environment.document.body.classList.remove('aa-Detached');
        autocomplete.value.setQuery('');
        autocomplete.value.refresh();
      }
    });
  }

  return _objectSpread(_objectSpread({}, autocompleteScopeApi), {}, {
    update: update,
    destroy: destroy
  });
}
},{"@algolia/autocomplete-core":"node_modules/@algolia/autocomplete-core/dist/esm/index.js","@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./createAutocompleteDom":"node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js","./createEffectWrapper":"node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js","./createReactiveWrapper":"node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js","./getDefaultOptions":"node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js","./getPanelPlacementStyle":"node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js","./render":"node_modules/@algolia/autocomplete-js/dist/esm/render.js","./userAgents":"node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js","./utils":"node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlgoliaRequester = void 0;

var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");

var _userAgents = require("../userAgents");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var createAlgoliaRequester = (0, _autocompletePresetAlgolia.createRequester)(function (params) {
  return (0, _autocompletePresetAlgolia.fetchAlgoliaResults)(_objectSpread(_objectSpread({}, params), {}, {
    userAgents: _userAgents.userAgents
  }));
});
exports.createAlgoliaRequester = createAlgoliaRequester;
},{"@algolia/autocomplete-preset-algolia":"node_modules/@algolia/autocomplete-js/node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js","../userAgents":"node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaFacets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlgoliaFacets = getAlgoliaFacets;

var _createAlgoliaRequester = require("./createAlgoliaRequester");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Retrieves Algolia facet hits from multiple indices.
 */
function getAlgoliaFacets(requestParams) {
  var requester = (0, _createAlgoliaRequester.createAlgoliaRequester)({
    transformResponse: function transformResponse(response) {
      return response.facetHits;
    }
  });
  var queries = requestParams.queries.map(function (query) {
    return _objectSpread(_objectSpread({}, query), {}, {
      type: 'facet'
    });
  });
  return requester(_objectSpread(_objectSpread({}, requestParams), {}, {
    queries: queries
  }));
}
},{"./createAlgoliaRequester":"node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlgoliaResults = void 0;

var _createAlgoliaRequester = require("./createAlgoliaRequester");

/**
 * Retrieves Algolia results from multiple indices.
 */
var getAlgoliaResults = (0, _createAlgoliaRequester.createAlgoliaRequester)({
  transformResponse: function transformResponse(response) {
    return response.hits;
  }
});
exports.getAlgoliaResults = getAlgoliaResults;
},{"./createAlgoliaRequester":"node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/requesters/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getAlgoliaFacets = require("./getAlgoliaFacets");

Object.keys(_getAlgoliaFacets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAlgoliaFacets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAlgoliaFacets[key];
    }
  });
});

var _getAlgoliaResults = require("./getAlgoliaResults");

Object.keys(_getAlgoliaResults).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAlgoliaResults[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAlgoliaResults[key];
    }
  });
});
},{"./getAlgoliaFacets":"node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaFacets.js","./getAlgoliaResults":"node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaResults.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteClassNames.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteCollection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteComponents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteDom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePlugin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePropGetters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRender.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRenderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteTranslations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/HighlightHitParams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"node_modules/@algolia/autocomplete-js/dist/esm/types/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AutocompleteApi = require("./AutocompleteApi");

Object.keys(_AutocompleteApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteApi[key];
    }
  });
});

var _AutocompleteClassNames = require("./AutocompleteClassNames");

Object.keys(_AutocompleteClassNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteClassNames[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteClassNames[key];
    }
  });
});

var _AutocompleteCollection = require("./AutocompleteCollection");

Object.keys(_AutocompleteCollection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteCollection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteCollection[key];
    }
  });
});

var _AutocompleteComponents = require("./AutocompleteComponents");

Object.keys(_AutocompleteComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteComponents[key];
    }
  });
});

var _AutocompleteDom = require("./AutocompleteDom");

Object.keys(_AutocompleteDom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteDom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteDom[key];
    }
  });
});

var _AutocompleteOptions = require("./AutocompleteOptions");

Object.keys(_AutocompleteOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteOptions[key];
    }
  });
});

var _AutocompletePlugin = require("./AutocompletePlugin");

Object.keys(_AutocompletePlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompletePlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompletePlugin[key];
    }
  });
});

var _AutocompletePropGetters = require("./AutocompletePropGetters");

Object.keys(_AutocompletePropGetters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompletePropGetters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompletePropGetters[key];
    }
  });
});

var _AutocompleteRender = require("./AutocompleteRender");

Object.keys(_AutocompleteRender).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteRender[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteRender[key];
    }
  });
});

var _AutocompleteRenderer = require("./AutocompleteRenderer");

Object.keys(_AutocompleteRenderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteRenderer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteRenderer[key];
    }
  });
});

var _AutocompleteSource = require("./AutocompleteSource");

Object.keys(_AutocompleteSource).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteSource[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteSource[key];
    }
  });
});

var _AutocompleteState = require("./AutocompleteState");

Object.keys(_AutocompleteState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteState[key];
    }
  });
});

var _AutocompleteTranslations = require("./AutocompleteTranslations");

Object.keys(_AutocompleteTranslations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutocompleteTranslations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AutocompleteTranslations[key];
    }
  });
});

var _HighlightHitParams = require("./HighlightHitParams");

Object.keys(_HighlightHitParams).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HighlightHitParams[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HighlightHitParams[key];
    }
  });
});
},{"./AutocompleteApi":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteApi.js","./AutocompleteClassNames":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteClassNames.js","./AutocompleteCollection":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteCollection.js","./AutocompleteComponents":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteComponents.js","./AutocompleteDom":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteDom.js","./AutocompleteOptions":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteOptions.js","./AutocompletePlugin":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePlugin.js","./AutocompletePropGetters":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePropGetters.js","./AutocompleteRender":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRender.js","./AutocompleteRenderer":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRenderer.js","./AutocompleteSource":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteSource.js","./AutocompleteState":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteState.js","./AutocompleteTranslations":"node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteTranslations.js","./HighlightHitParams":"node_modules/@algolia/autocomplete-js/dist/esm/types/HighlightHitParams.js"}],"node_modules/@algolia/autocomplete-js/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autocomplete = require("./autocomplete");

Object.keys(_autocomplete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _autocomplete[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _autocomplete[key];
    }
  });
});

var _requesters = require("./requesters");

Object.keys(_requesters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _requesters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _requesters[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
},{"./autocomplete":"node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js","./requesters":"node_modules/@algolia/autocomplete-js/dist/esm/requesters/index.js","./types":"node_modules/@algolia/autocomplete-js/dist/esm/types/index.js"}],"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/getTemplates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemplates = getTemplates;

/** @jsx createElement */
function getTemplates(_ref) {
  var onTapAhead = _ref.onTapAhead;
  return {
    item: function item(_ref2) {
      var item = _ref2.item,
          createElement = _ref2.createElement,
          components = _ref2.components;

      if (item.__autocomplete_qsCategory) {
        return createElement("div", {
          className: "aa-ItemWrapper"
        }, createElement("div", {
          className: "aa-ItemContent aa-ItemContent--indented"
        }, createElement("div", {
          className: "aa-ItemContentSubtitle aa-ItemContentSubtitle--standalone"
        }, createElement("span", {
          className: "aa-ItemContentSubtitleIcon"
        }), createElement("span", null, "in", ' ', createElement("span", {
          className: "aa-ItemContentSubtitleCategory"
        }, item.__autocomplete_qsCategory)))));
      }

      return createElement("div", {
        className: "aa-ItemWrapper"
      }, createElement("div", {
        className: "aa-ItemContent"
      }, createElement("div", {
        className: "aa-ItemIcon aa-ItemIcon--noBorder"
      }, createElement("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, createElement("path", {
        d: "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
      }))), createElement("div", {
        className: "aa-ItemContentBody"
      }, createElement("div", {
        className: "aa-ItemContentTitle"
      }, createElement(components.ReverseHighlight, {
        hit: item,
        attribute: "query"
      })))), createElement("div", {
        className: "aa-ItemActions"
      }, createElement("button", {
        className: "aa-ItemActionButton",
        title: "Fill query with \"".concat(item.query, "\""),
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();
          onTapAhead(item);
        }
      }, createElement("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, createElement("path", {
        d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
      })))));
    }
  };
}
},{}],"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/createQuerySuggestionsPlugin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuerySuggestionsPlugin = createQuerySuggestionsPlugin;

var _autocompleteJs = require("@algolia/autocomplete-js");

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _getTemplates = require("./getTemplates");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function createQuerySuggestionsPlugin(options) {
  var _getOptions = getOptions(options),
      searchClient = _getOptions.searchClient,
      indexName = _getOptions.indexName,
      getSearchParams = _getOptions.getSearchParams,
      transformSource = _getOptions.transformSource,
      categoryAttribute = _getOptions.categoryAttribute,
      itemsWithCategories = _getOptions.itemsWithCategories,
      categoriesPerItem = _getOptions.categoriesPerItem;

  return {
    name: 'aa.querySuggestionsPlugin',
    getSources: function getSources(_ref) {
      var query = _ref.query,
          setQuery = _ref.setQuery,
          refresh = _ref.refresh,
          state = _ref.state;

      function onTapAhead(item) {
        setQuery("".concat(item.query, " "));
        refresh();
      }

      return [transformSource({
        source: {
          sourceId: 'querySuggestionsPlugin',
          getItemInputValue: function getItemInputValue(_ref2) {
            var item = _ref2.item;
            return item.query;
          },
          getItems: function getItems() {
            return (0, _autocompleteJs.getAlgoliaResults)({
              searchClient: searchClient,
              queries: [{
                indexName: indexName,
                query: query,
                params: getSearchParams({
                  state: state
                })
              }],
              transformResponse: function transformResponse(_ref3) {
                var hits = _ref3.hits;
                var querySuggestionsHits = hits[0];

                if (!query || !categoryAttribute) {
                  return querySuggestionsHits;
                }

                return querySuggestionsHits.reduce(function (acc, current, i) {
                  var items = [current];

                  if (i <= itemsWithCategories - 1) {
                    var categories = (0, _autocompleteShared.getAttributeValueByPath)(current, Array.isArray(categoryAttribute) ? categoryAttribute : [categoryAttribute]).map(function (x) {
                      return x.value;
                    }).slice(0, categoriesPerItem);

                    var _iterator = _createForOfIteratorHelper(categories),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var category = _step.value;
                        items.push(_objectSpread({
                          __autocomplete_qsCategory: category
                        }, current));
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  acc.push.apply(acc, items);
                  return acc;
                }, []);
              }
            });
          },
          templates: (0, _getTemplates.getTemplates)({
            onTapAhead: onTapAhead
          })
        },
        onTapAhead: onTapAhead,
        state: state
      })];
    },
    __autocomplete_pluginOptions: options
  };
}

function getOptions(options) {
  return _objectSpread({
    getSearchParams: function getSearchParams() {
      return {};
    },
    transformSource: function transformSource(_ref4) {
      var source = _ref4.source;
      return source;
    },
    itemsWithCategories: 1,
    categoriesPerItem: 1
  }, options);
}
},{"@algolia/autocomplete-js":"node_modules/@algolia/autocomplete-js/dist/esm/index.js","@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./getTemplates":"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/getTemplates.js"}],"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createQuerySuggestionsPlugin = require("./createQuerySuggestionsPlugin");

Object.keys(_createQuerySuggestionsPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createQuerySuggestionsPlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createQuerySuggestionsPlugin[key];
    }
  });
});

var _getTemplates = require("./getTemplates");

Object.keys(_getTemplates).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getTemplates[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getTemplates[key];
    }
  });
});
},{"./createQuerySuggestionsPlugin":"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/createQuerySuggestionsPlugin.js","./getTemplates":"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/getTemplates.js"}],"node_modules/search-insights/dist/search-insights-browser.cjs.min.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function objectAssignPolyfill() {
  "function" != typeof Object.assign && (Object.assign = function (e, t) {
    var n = arguments;
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");

    for (var i = Object(e), o = 1; o < arguments.length; o++) {
      var s = n[o];
      if (null != s) for (var r in s) {
        Object.prototype.hasOwnProperty.call(s, r) && (i[r] = s[r]);
      }
    }

    return i;
  });
}

function objectKeysPolyfill() {
  var e, t, n, i;
  Object.keys || (Object.keys = (e = Object.prototype.hasOwnProperty, t = !{
    toString: null
  }.propertyIsEnumerable("toString"), i = (n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (o) {
    if ("function" != typeof o && ("object" != _typeof(o) || null === o)) throw new TypeError("Object.keys called on non-object");
    var s,
        r,
        c = [];

    for (s in o) {
      e.call(o, s) && c.push(s);
    }

    if (t) for (r = 0; r < i; r++) {
      e.call(o, n[r]) && c.push(n[r]);
    }
    return c;
  }));
}

function makeSendEvent(e) {
  return function (t, n) {
    var i, o;

    if (!this._userHasOptedOut) {
      if (!this._hasCredentials) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters");
      var s = Object.assign(Object.assign({}, n), {
        eventType: t,
        userToken: (o = null === (i = n) || void 0 === i ? void 0 : i.userToken, null !== o && void 0 !== o ? o : this._userToken)
      });
      return bulkSendEvent(e, this._appId, this._apiKey, this._uaURIEncoded, this._endpointOrigin, [s]);
    }
  };
}

function bulkSendEvent(e, t, n, i, o, s) {
  return e(o + "/1/events?X-Algolia-Application-Id=" + t + "&X-Algolia-API-Key=" + n + "&X-Algolia-Agent=" + i, {
    events: s
  });
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var supportsCookies = function supportsCookies() {
  try {
    return Boolean(navigator.cookieEnabled);
  } catch (e) {
    return !1;
  }
},
    supportsSendBeacon = function supportsSendBeacon() {
  try {
    return Boolean(navigator.sendBeacon);
  } catch (e) {
    return !1;
  }
},
    supportsXMLHttpRequest = function supportsXMLHttpRequest() {
  try {
    return Boolean(XMLHttpRequest);
  } catch (e) {
    return !1;
  }
},
    isUndefined = function isUndefined(e) {
  return void 0 === e;
},
    isString = function isString(e) {
  return "string" == typeof e;
},
    isNumber = function isNumber(e) {
  return "number" == typeof e;
},
    isFunction = function isFunction(e) {
  return "function" == typeof e;
},
    version = "2.1.0",
    DEFAULT_ALGOLIA_AGENT = "insights-js (" + version + ")";

function addAlgoliaAgent(e) {
  -1 === this._ua.indexOf("; " + e) && (this._ua += "; " + e, this._uaURIEncoded = encodeURIComponent(this._ua));
}

var SUPPORTED_REGIONS = ["de", "us"],
    MONTH = 2592e6;

function init(e) {
  var t;
  if (!e) throw new Error("Init function should be called with an object argument containing your apiKey and appId");
  if (isUndefined(e.apiKey) || !isString(e.apiKey)) throw new Error("apiKey is missing, please provide it so we can authenticate the application");
  if (isUndefined(e.appId) || !isString(e.appId)) throw new Error("appId is missing, please provide it, so we can properly attribute data to your application");
  if (!isUndefined(e.region) && -1 === SUPPORTED_REGIONS.indexOf(e.region)) throw new Error("optional region is incorrect, please provide either one of: " + SUPPORTED_REGIONS.join(", ") + ".");
  if (!(isUndefined(e.cookieDuration) || isNumber(e.cookieDuration) && isFinite(e.cookieDuration) && Math.floor(e.cookieDuration) === e.cookieDuration)) throw new Error("optional cookieDuration is incorrect, expected an integer.");
  "development" === "development" && console.info("Since v2.0.4, search-insights no longer validates event payloads.\nYou can visit https://algolia.com/events/debugger instead."), this._apiKey = e.apiKey, this._appId = e.appId, this._userHasOptedOut = !!e.userHasOptedOut, this._region = e.region, this._endpointOrigin = e.region ? "https://insights." + e.region + ".algolia.io" : "https://insights.algolia.io", this._useCookie = null !== (t = e.useCookie) && void 0 !== t && t, this._cookieDuration = e.cookieDuration ? e.cookieDuration : 6 * MONTH, this._hasCredentials = !0, this._ua = DEFAULT_ALGOLIA_AGENT, this._uaURIEncoded = encodeURIComponent(DEFAULT_ALGOLIA_AGENT), e.userToken ? this.setUserToken(e.userToken) : this._userToken || this._userHasOptedOut || !this._useCookie || this.setAnonymousUserToken();
}

function getVersion(e) {
  isFunction(e) && e(this.version);
}

function clickedObjectIDsAfterSearch(e) {
  this.sendEvent("click", e);
}

function clickedObjectIDs(e) {
  this.sendEvent("click", e);
}

function clickedFilters(e) {
  this.sendEvent("click", e);
}

function convertedObjectIDsAfterSearch(e) {
  this.sendEvent("conversion", e);
}

function convertedObjectIDs(e) {
  this.sendEvent("conversion", e);
}

function convertedFilters(e) {
  this.sendEvent("conversion", e);
}

function viewedObjectIDs(e) {
  this.sendEvent("view", e);
}

function viewedFilters(e) {
  this.sendEvent("view", e);
}

var createUUID = function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0;
    return ("x" === e ? t : 3 & t | 8).toString(16);
  });
},
    COOKIE_KEY = "_ALGOLIA",
    setCookie = function setCookie(e, t, n) {
  var i = new Date();
  i.setTime(i.getTime() + n);
  var o = "expires=" + i.toUTCString();
  document.cookie = e + "=" + t + ";" + o + ";path=/";
},
    getCookie = function getCookie(e) {
  for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
    for (var o = n[i]; " " === o.charAt(0);) {
      o = o.substring(1);
    }

    if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
  }

  return "";
};

function setAnonymousUserToken() {
  if (supportsCookies()) {
    var e = getCookie(COOKIE_KEY);
    e && "" !== e && 0 === e.indexOf("anonymous-") ? this.setUserToken(e) : (this.setUserToken("anonymous-" + createUUID()), setCookie(COOKIE_KEY, this._userToken, this._cookieDuration));
  }
}

function setUserToken(e) {
  this._userToken = e, isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
}

function getUserToken(e, t) {
  return isFunction(t) && t(null, this._userToken), this._userToken;
}

function onUserTokenChange(e, t) {
  this._onUserTokenChangeCallback = e, t && t.immediate && isFunction(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken);
}

objectKeysPolyfill(), objectAssignPolyfill();

var AlgoliaAnalytics = function AlgoliaAnalytics(e) {
  var t = e.requestFn;
  this._ua = "", this._uaURIEncoded = "", this.version = version, this._hasCredentials = !1, this.sendEvent = makeSendEvent(t).bind(this), this.init = init.bind(this), this.addAlgoliaAgent = addAlgoliaAgent.bind(this), this.setUserToken = setUserToken.bind(this), this.setAnonymousUserToken = setAnonymousUserToken.bind(this), this.getUserToken = getUserToken.bind(this), this.onUserTokenChange = onUserTokenChange.bind(this), this.clickedObjectIDsAfterSearch = clickedObjectIDsAfterSearch.bind(this), this.clickedObjectIDs = clickedObjectIDs.bind(this), this.clickedFilters = clickedFilters.bind(this), this.convertedObjectIDsAfterSearch = convertedObjectIDsAfterSearch.bind(this), this.convertedObjectIDs = convertedObjectIDs.bind(this), this.convertedFilters = convertedFilters.bind(this), this.viewedObjectIDs = viewedObjectIDs.bind(this), this.viewedFilters = viewedFilters.bind(this), this.getVersion = getVersion.bind(this);
};

function getFunctionalInterface(e) {
  return function (t) {
    for (var n = [], i = arguments.length - 1; i-- > 0;) {
      n[i] = arguments[i + 1];
    }

    t && isFunction(e[t]) ? e[t].apply(e, n) : console.warn("The method `" + t + "` doesn't exist.");
  };
}

var requestWithSendBeacon = function requestWithSendBeacon(e, t) {
  var n = JSON.stringify(t);
  navigator.sendBeacon(e, n);
},
    requestWithXMLHttpRequest = function requestWithXMLHttpRequest(e, t) {
  var n = JSON.stringify(t),
      i = new XMLHttpRequest();
  i.open("POST", e), i.send(n);
};

function getRequesterForBrowser() {
  if (supportsSendBeacon()) return requestWithSendBeacon;
  if (supportsXMLHttpRequest()) return requestWithXMLHttpRequest;
  throw new Error("Could not find a supported HTTP request client in this environment.");
}

function processQueue(e) {
  var t = e.AlgoliaAnalyticsObject;

  if (t) {
    var n = getFunctionalInterface(this),
        i = e[t];
    i.queue = i.queue || [];
    var o = i.queue;
    o.forEach(function (e) {
      var t = [].slice.call(e),
          i = t[0],
          o = t.slice(1);
      n.apply(void 0, [i].concat(o));
    }), o.push = function (e) {
      var t = [].slice.call(e),
          i = t[0],
          o = t.slice(1);
      n.apply(void 0, [i].concat(o));
    };
  }
}

function createInsightsClient(e) {
  return getFunctionalInterface(new AlgoliaAnalytics({
    requestFn: e
  }));
}

var entryBrowserCjs = createInsightsClient(getRequesterForBrowser());
exports.AlgoliaAnalytics = AlgoliaAnalytics, exports.default = entryBrowserCjs, exports.getFunctionalInterface = getFunctionalInterface, exports.getRequesterForBrowser = getRequesterForBrowser, exports.processQueue = processQueue;
},{}],"node_modules/search-insights/index-browser.cjs.js":[function(require,module,exports) {
var aa = require("./dist/search-insights-browser.cjs.min.js");

module.exports = aa.default;
Object.keys(aa).forEach(function (key) {
  if (key !== "default") {
    module.exports[key] = aa[key];
  }
});
},{"./dist/search-insights-browser.cjs.min.js":"node_modules/search-insights/dist/search-insights-browser.cjs.min.js"}],"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createClickedEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClickedEvent = createClickedEvent;

function createClickedEvent(_ref) {
  var item = _ref.item,
      items = _ref.items;
  return {
    index: item.__autocomplete_indexName,
    objectIDs: [item.objectID],
    positions: [1 + items.findIndex(function (x) {
      return x.objectID === item.objectID;
    })],
    queryID: item.__autocomplete_queryID
  };
}
},{}],"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createSearchInsightsApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSearchInsightsApi = createSearchInsightsApi;

function createSearchInsightsApi(searchInsights) {
  return {
    /**
     * Initializes Insights with Algolia credentials.
     */
    init: function init(appId, apiKey) {
      searchInsights('init', {
        appId: appId,
        apiKey: apiKey
      });
    },

    /**
     * Sets the user token to attach to events.
     */
    setUserToken: function setUserToken(userToken) {
      searchInsights('setUserToken', userToken);
    },

    /**
     * Sends click events to capture a query and its clicked items and positions.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids-after-search/
     */
    clickedObjectIDsAfterSearch: function clickedObjectIDsAfterSearch() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['clickedObjectIDsAfterSearch'].concat(params));
      }
    },

    /**
     * Sends click events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-object-ids/
     */
    clickedObjectIDs: function clickedObjectIDs() {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['clickedObjectIDs'].concat(params));
      }
    },

    /**
     * Sends click events to capture the filters a user clicks on.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/clicked-filters/
     */
    clickedFilters: function clickedFilters() {
      for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['clickedFilters'].concat(params));
      }
    },

    /**
     * Sends conversion events to capture a query and its clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids-after-search/
     */
    convertedObjectIDsAfterSearch: function convertedObjectIDsAfterSearch() {
      for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['convertedObjectIDsAfterSearch'].concat(params));
      }
    },

    /**
     * Sends conversion events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-object-ids/
     */
    convertedObjectIDs: function convertedObjectIDs() {
      for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['convertedObjectIDs'].concat(params));
      }
    },

    /**
     * Sends conversion events to capture the filters a user uses when converting.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/converted-filters/
     */
    convertedFilters: function convertedFilters() {
      for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        params[_key6] = arguments[_key6];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['convertedFilters'].concat(params));
      }
    },

    /**
     * Sends view events to capture clicked items.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/viewed-object-ids/
     */
    viewedObjectIDs: function viewedObjectIDs() {
      for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        params[_key7] = arguments[_key7];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['viewedObjectIDs'].concat(params));
      }
    },

    /**
     * Sends view events to capture the filters a user uses when viewing.
     *
     * @link https://www.algolia.com/doc/api-reference/api-methods/viewed-filters/
     */
    viewedFilters: function viewedFilters() {
      for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        params[_key8] = arguments[_key8];
      }

      if (params.length > 0) {
        searchInsights.apply(void 0, ['viewedFilters'].concat(params));
      }
    }
  };
}
},{}],"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createViewedEvents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createViewedEvents = createViewedEvents;

function createViewedEvents(_ref) {
  var items = _ref.items;
  var objectIDsByIndexName = items.reduce(function (acc, current) {
    var _acc$current$__autoco;

    acc[current.__autocomplete_indexName] = ((_acc$current$__autoco = acc[current.__autocomplete_indexName]) !== null && _acc$current$__autoco !== void 0 ? _acc$current$__autoco : []).concat(current.objectID);
    return acc;
  }, {});
  return Object.keys(objectIDsByIndexName).map(function (indexName) {
    var objectIDs = objectIDsByIndexName[indexName];
    return {
      index: indexName,
      objectIDs: objectIDs
    };
  });
}
},{}],"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/isAlgoliaInsightsHit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAlgoliaInsightsHit = isAlgoliaInsightsHit;

function isAlgoliaInsightsHit(hit) {
  return hit.objectID && hit.__autocomplete_indexName && hit.__autocomplete_queryID;
}
},{}],"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createAlgoliaInsightsPlugin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlgoliaInsightsPlugin = createAlgoliaInsightsPlugin;

var _autocompleteShared = require("@algolia/autocomplete-shared");

var _createClickedEvent = require("./createClickedEvent");

var _createSearchInsightsApi = require("./createSearchInsightsApi");

var _createViewedEvents = require("./createViewedEvents");

var _isAlgoliaInsightsHit = require("./isAlgoliaInsightsHit");

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var VIEW_EVENT_DELAY = 400;
var sendViewedObjectIDs = (0, _autocompleteShared.debounce)(function (_ref) {
  var onItemsChange = _ref.onItemsChange,
      items = _ref.items,
      insights = _ref.insights,
      state = _ref.state;
  onItemsChange({
    insights: insights,
    insightsEvents: (0, _createViewedEvents.createViewedEvents)({
      items: items
    }).map(function (event) {
      return _objectSpread({
        eventName: 'Items Viewed'
      }, event);
    }),
    state: state
  });
}, VIEW_EVENT_DELAY);

function createAlgoliaInsightsPlugin(options) {
  var _getOptions = getOptions(options),
      insightsClient = _getOptions.insightsClient,
      onItemsChange = _getOptions.onItemsChange,
      onSelectEvent = _getOptions.onSelect,
      onActiveEvent = _getOptions.onActive;

  var insights = (0, _createSearchInsightsApi.createSearchInsightsApi)(insightsClient);
  var previousItems = (0, _autocompleteShared.createRef)([]);
  var debouncedOnStateChange = (0, _autocompleteShared.debounce)(function (_ref2) {
    var state = _ref2.state;

    if (!state.isOpen) {
      return;
    }

    var items = state.collections.reduce(function (acc, current) {
      return [].concat(_toConsumableArray(acc), _toConsumableArray(current.items));
    }, []).filter(_isAlgoliaInsightsHit.isAlgoliaInsightsHit);

    if (!(0, _autocompleteShared.isEqual)(previousItems.current.map(function (x) {
      return x.objectID;
    }), items.map(function (x) {
      return x.objectID;
    }))) {
      previousItems.current = items;

      if (items.length > 0) {
        sendViewedObjectIDs({
          onItemsChange: onItemsChange,
          items: items,
          insights: insights,
          state: state
        });
      }
    }
  }, 0);
  return {
    name: 'aa.algoliaInsightsPlugin',
    subscribe: function subscribe(_ref3) {
      var setContext = _ref3.setContext,
          onSelect = _ref3.onSelect,
          onActive = _ref3.onActive;
      setContext({
        algoliaInsightsPlugin: {
          insights: insights
        }
      });
      onSelect(function (_ref4) {
        var item = _ref4.item,
            state = _ref4.state,
            event = _ref4.event;

        if (!(0, _isAlgoliaInsightsHit.isAlgoliaInsightsHit)(item)) {
          return;
        }

        onSelectEvent({
          state: state,
          event: event,
          insights: insights,
          item: item,
          insightsEvents: [_objectSpread({
            eventName: 'Item Selected'
          }, (0, _createClickedEvent.createClickedEvent)({
            item: item,
            items: previousItems.current
          }))]
        });
      });
      onActive(function (_ref5) {
        var item = _ref5.item,
            state = _ref5.state,
            event = _ref5.event;

        if (!(0, _isAlgoliaInsightsHit.isAlgoliaInsightsHit)(item)) {
          return;
        }

        onActiveEvent({
          state: state,
          event: event,
          insights: insights,
          item: item,
          insightsEvents: [_objectSpread({
            eventName: 'Item Active'
          }, (0, _createClickedEvent.createClickedEvent)({
            item: item,
            items: previousItems.current
          }))]
        });
      });
    },
    onStateChange: function onStateChange(_ref6) {
      var state = _ref6.state;
      debouncedOnStateChange({
        state: state
      });
    },
    __autocomplete_pluginOptions: options
  };
}

function getOptions(options) {
  return _objectSpread({
    onItemsChange: function onItemsChange(_ref7) {
      var insights = _ref7.insights,
          insightsEvents = _ref7.insightsEvents;
      insights.viewedObjectIDs.apply(insights, _toConsumableArray(insightsEvents));
    },
    onSelect: function onSelect(_ref8) {
      var insights = _ref8.insights,
          insightsEvents = _ref8.insightsEvents;
      insights.clickedObjectIDsAfterSearch.apply(insights, _toConsumableArray(insightsEvents));
    },
    onActive: _autocompleteShared.noop
  }, options);
}
},{"@algolia/autocomplete-shared":"node_modules/@algolia/autocomplete-shared/dist/esm/index.js","./createClickedEvent":"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createClickedEvent.js","./createSearchInsightsApi":"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createSearchInsightsApi.js","./createViewedEvents":"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createViewedEvents.js","./isAlgoliaInsightsHit":"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/isAlgoliaInsightsHit.js"}],"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createAlgoliaInsightsPlugin = require("./createAlgoliaInsightsPlugin");

Object.keys(_createAlgoliaInsightsPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createAlgoliaInsightsPlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createAlgoliaInsightsPlugin[key];
    }
  });
});
},{"./createAlgoliaInsightsPlugin":"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/createAlgoliaInsightsPlugin.js"}],"src/components/querysuggestions.js":[function(require,module,exports) {
"use strict";

var _autocompletePluginQuerySuggestions = require("@algolia/autocomplete-plugin-query-suggestions");

var _searchInsights = _interopRequireDefault(require("search-insights"));

var _autocompletePluginAlgoliaInsights = require("@algolia/autocomplete-plugin-algolia-insights");

var _autocompleteJs = require("@algolia/autocomplete-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appId = 'YC29CWFP9Y';
var apiKey = 'da737da8bb556ef6e01f04538cc50f4d';
var searchClient = algoliasearch(appId, apiKey);
(0, _searchInsights.default)('init', {
  appId: appId,
  apiKey: apiKey
});
var algoliaInsightsPlugin = (0, _autocompletePluginAlgoliaInsights.createAlgoliaInsightsPlugin)({
  insightsClient: _searchInsights.default
});
var querySuggestionsPlugin = (0, _autocompletePluginQuerySuggestions.createQuerySuggestionsPlugin)({
  searchClient: searchClient,
  indexName: 'test_PRODUCTS_query_suggestions',
  getSearchParams: function getSearchParams(_ref) {
    var state = _ref.state;
    return {
      hitsPerPage: state.query ? 5 : 10
    };
  }
});
(0, _autocompleteJs.autocomplete)({
  container: '#autocomplete',
  plugins: [querySuggestionsPlugin],
  openOnFocus: true
});
},{"@algolia/autocomplete-plugin-query-suggestions":"node_modules/@algolia/autocomplete-plugin-query-suggestions/dist/esm/index.js","search-insights":"node_modules/search-insights/index-browser.cjs.js","@algolia/autocomplete-plugin-algolia-insights":"node_modules/@algolia/autocomplete-plugin-algolia-insights/dist/esm/index.js","@algolia/autocomplete-js":"node_modules/@algolia/autocomplete-js/dist/esm/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60881" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/components/querysuggestions.js"], null)
//# sourceMappingURL=/querysuggestions.6dd65e25.js.map