import { DayPicker, isMatch } from 'react-day-picker';
export { DayPicker } from 'react-day-picker';
import * as React from 'react';
import React__default, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import { space, color as color$1 } from 'styled-system';
import { createBreakpoint, createMap } from 'styled-components-breakpoint';
import ContentLoader from 'react-content-loader';
import { lighten, darken, getContrast, rgba } from 'polished';
import ReactSelect from 'react-select';
import { When, If, Then, Else } from 'react-if';
import { isMonday, previousMonday, isSameDay, format, addYears, addMonths, addWeeks, addDays, getHours, startOfDay, nextMonday } from 'date-fns';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React__default;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

const on = (object, ...args) => object.addEventListener(...args);
const off = (object, ...args) => object.removeEventListener(...args);

const defaultEvents = ["mousedown", "touchstart"];
const useClickOutside = ({ ref, active = true, onClickAway, events = defaultEvents, }) => {
    const savedCallback = React.useRef(onClickAway);
    React.useEffect(() => {
        savedCallback.current = onClickAway;
    });
    React.useEffect(() => {
        if (active) {
            const handler = (event) => {
                const { current: element } = ref;
                if (element instanceof Element && event.target instanceof Element) {
                    !element.contains(event.target) && savedCallback.current(event);
                }
            };
            // @ts-expect-error hard to properly type event listeners
            events.forEach((eventName) => on(document, eventName, handler));
            return () => {
                // @ts-expect-error hard to properly type event listeners
                events.forEach((eventName) => off(document, eventName, handler));
            };
        }
    }, [events, ref, active]);
};

function useEvent({ name, handler, target = window, }) {
    React.useEffect(() => {
        if (!handler || !target) {
            return;
        }
        target.addEventListener(name, handler);
        return () => {
            target.removeEventListener(name, handler);
        };
    }, [name, handler, target]);
}

function useDisclosure(isOpenDefault = false) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback((toSet) => {
        if (typeof toSet !== "boolean") {
            setIsOpen((state) => !state);
        }
        else {
            setIsOpen(toSet);
        }
    }, []);
    return { isOpen, open, close, toggle };
}

function getStyle({ wrapperDimensions, tooltipDimensions, viewportDimensions, placement, position, margin, adjustPositionToViewportSize, }) {
    if (wrapperDimensions != null && tooltipDimensions != null) {
        const top = getTop({
            wrapperDimensions,
            tooltipDimensions,
            viewportDimensions,
            placement,
            position,
            margin,
        });
        const left = getLeft({
            wrapperDimensions,
            tooltipDimensions,
            viewportDimensions,
            placement,
            position,
            margin,
        });
        if (adjustPositionToViewportSize) {
            const adjustToViewport = adjustPositionToViewportDimensions({ top, left }, tooltipDimensions, viewportDimensions);
            const adjustedTop = top + adjustToViewport.top;
            const adjustedLeft = left + adjustToViewport.left;
            return { top: adjustedTop, left: adjustedLeft };
        }
        return { top, left };
    }
    return {};
}
function getTop({ wrapperDimensions, tooltipDimensions, placement, position, margin, }) {
    if (placement === "top") {
        return (wrapperDimensions.top - tooltipDimensions.height - (margin?.top ?? 0));
    }
    if (placement === "bottom") {
        return (wrapperDimensions.top + wrapperDimensions.height + (margin?.bottom ?? 0));
    }
    if (position === "center") {
        return getVerticalAlignmentToCenter(wrapperDimensions, tooltipDimensions);
    }
    if (position === "end") {
        return getVerticalAlignmentToEnd(wrapperDimensions, tooltipDimensions);
    }
    return wrapperDimensions.top;
}
function getLeft({ wrapperDimensions, tooltipDimensions, placement, position, margin, }) {
    if (placement === "left") {
        return (wrapperDimensions.left - tooltipDimensions.width - (margin?.left ?? 0));
    }
    if (placement === "right") {
        return (wrapperDimensions.left + wrapperDimensions.width + (margin?.right ?? 0));
    }
    if (position === "center") {
        return getHorizontalAlignmentToCenter(wrapperDimensions, tooltipDimensions);
    }
    if (position === "end") {
        return getHorizontalAlignmentToEnd(wrapperDimensions, tooltipDimensions);
    }
    return wrapperDimensions.left;
}
function getHorizontalAlignmentToCenter(wrapperDimensions, tooltipDimensions) {
    const translation = wrapperDimensions.width - tooltipDimensions.width;
    const absoluteTranslation = Math.abs(translation);
    return translation > 0
        ? wrapperDimensions.left + absoluteTranslation / 2
        : wrapperDimensions.left - absoluteTranslation / 2;
}
function getHorizontalAlignmentToEnd(wrapperDimensions, tooltipDimensions) {
    return Math.abs(wrapperDimensions.left - tooltipDimensions.width + wrapperDimensions.width);
}
function getVerticalAlignmentToCenter(wrapperDimensions, tooltipDimensions) {
    const translation = wrapperDimensions.height - tooltipDimensions.height;
    const absoluteTranslation = Math.abs(translation);
    return translation > 0
        ? wrapperDimensions.top + absoluteTranslation / 2
        : wrapperDimensions.top - absoluteTranslation / 2;
}
function getVerticalAlignmentToEnd(wrapperDimensions, tooltipDimensions) {
    return Math.abs(wrapperDimensions.top - tooltipDimensions.height + wrapperDimensions.height);
}
function adjustPositionToViewportDimensions(style, tooltipDimensions, viewportDimensions) {
    const adjustTop = adjustTopToViewportDimensions(style, tooltipDimensions, viewportDimensions);
    const adjustLeft = adjustLeftToViewportDimensions(style, tooltipDimensions, viewportDimensions);
    return { top: adjustTop, left: adjustLeft };
}
function adjustTopToViewportDimensions(style, tooltipDimensions, viewportDimensions) {
    if (style.top < 0) {
        return 0 - style.top;
    }
    const tooltipBottom = style.top + tooltipDimensions.height;
    if (tooltipBottom > viewportDimensions.height) {
        return viewportDimensions.height - tooltipBottom;
    }
    return 0;
}
function adjustLeftToViewportDimensions(style, tooltipDimensions, viewportDimensions) {
    if (style.left < 0) {
        return 0 - style.left;
    }
    const tooltipRight = style.left + tooltipDimensions.width;
    if (tooltipRight > viewportDimensions.width) {
        return viewportDimensions.width - tooltipRight;
    }
    return 0;
}
function getViewportDimensions() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    };
}
const DEFAULT_MARGIN = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
};
const PaddingWrapper = styled.div `
  padding: ${(props) => getPaddingValue(props)};
`;
function getPaddingValue({ top = 0, bottom = 0, left = 0, right = 0, placement, }) {
    switch (placement) {
        case "bottom":
            return `${top}px 0 0 0`;
        case "top":
            return `0 0 ${bottom}px 0`;
        case "right":
            return `0 0 0 ${left}px`;
        case "left":
            return `0 ${right}px 0 0`;
        default:
            return "";
    }
}
const OUTSIDE_VIEWPORT_STYLE = {
    top: -5000,
    left: -5000,
};

function useViewportDimensions(addResizeListener) {
    const [viewportDimensions, setViewportDimensions] = useState(getViewportDimensions);
    useEffect(() => {
        function handleResize() {
            setViewportDimensions(getViewportDimensions());
        }
        if (addResizeListener) {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
        return () => { };
    }, [addResizeListener]);
    return viewportDimensions;
}

const color = {
    scheme: "var(--color-scheme)",
    background: {
        body: "var(--background-body)",
        ui01: "var(--background-ui01)",
        ui02: "var(--background-ui02)",
        ui03: "var(--background-ui03)",
        ui04: "var(--background-ui04)",
        ui05: "var(--background-ui05)",
        error: "var(--background-error)",
        warning: "var(--background-warning)",
        success: "var(--background-success)",
        info: "var(--background-info)",
        overlay: "var(--background-overlay)",
    },
    field: {
        default: "var(--field-default)",
        disabled: "var(--field-disabled)",
    },
    text: {
        text01: "var(--text-text01)",
        text02: "var(--text-text02)",
        text03: "var(--text-text03)",
        text04: "var(--text-text04)",
        error: "var(--text-error)",
        warning: "var(--text-warning)",
        success: "var(--text-success)",
        info: "var(--text-info)",
    },
    border: {
        border01: "var(--border-border01)",
        border02: "var(--border-border02)",
        input: "var(--border-input)",
        focus: "var(--border-focus)",
        error: "var(--border-error)",
        success: "var(--border-success)",
        info: "var(--border-info)",
        warning: "var(--border-warning)",
        discovery: "var(--border-discovery)",
    },
    interactive: {
        primary: "var(--interactive-primary)",
        primaryHover: "var(--interactive-primaryHover)",
        primaryActive: "var(--interactive-primaryActive)",
        secondary: "var(--interactive-secondary)",
        secondaryHover: "var(--interactive-secondaryHover)",
        secondaryActive: "var(--interactive-secondaryActive)",
        link: "var(--interactive-link)",
        linkInverse: "var(--interactive-linkInverse)",
        error: "var(--interactive-error)",
        errorHover: "var(--interactive-errorHover)",
        errorActive: "var(--interactive-errorActive)",
        success: "var(--interactive-success)",
        successHover: "var(--interactive-successHover)",
        successActive: "var(--interactive-successActive)",
        warning: "var(--interactive-warning)",
        warningHover: "var(--interactive-warningHover)",
        warningActive: "var(--interactive-warningActive)",
        info: "var(--interactive-info)",
        infoHover: "var(--interactive-infoHover)",
        infoActive: "var(--interactive-infoActive)",
        accent: "var(--interactive-accent)",
        accentHover: "var(--interactive-accentHover)",
        accentActive: "var(--interactive-accentActive)",
        disabled: "var(--interactive-disabled)",
    },
    support: {
        red: "var(--support-red)",
        redInverse: "var(--support-redInverse)",
        pink: "var(--support-pink)",
        purple: "var(--support-purple)",
        indigo: "var(--support-indigo)",
        blue: "var(--support-blue)",
        blueInverse: "var(--support-blueInverse)",
        grey: "var(--support-grey)",
        greyInverse: "var(--support-greyInverse)",
        cyan: "var(--support-cyan)",
        teal: "var(--support-teal)",
        green: "var(--support-green)",
        greenInverse: "var(--support-greenInverse)",
        lightGreen: "var(--support-lightGreen)",
        yellow: "var(--support-yellow)",
        orange: "var(--support-orange)",
        orangeInverse: "var(--support-orangeInverse)",
    },
};
const colors = {
    primary: "#161632",
    accent: "#FF2837",
    danger: "#e74c3c",
    success: "#27ae60",
    warning: "#f39c12",
    notification: "#3498db",
    black: "#212129",
    white: "#fcfcfd",
    snowWhite: "#ffffff",
    actions: ["#FF2837", "#e74c3c", "#27ae60", "#f39c12", "#3498db"],
    darks: ["#212129", "#32323f", "#444454", "#5e5e75", "#7a7a94"],
    lights: ["#fcfcfd", "#f1f1f4", "#e7e7eb", "#d1d1da", "#bbbbc9"],
    statusDanger: ["#F5B7B1", "#E74C3C", "#B03A2E", "#943126"],
    statusSuccess: ["#A9DFBF", "#27AE60", "#1E8449", "#196F3D"],
    statusWarning: ["#FAD7A0", "#F39C12", "#B9770E", "#9C640C"],
    statusNotification: ["#AED6F1", "#3498DB", "#2874A6", "#21618C"],
};
const typography = {
    fonts: {
        body: "IBM Plex Sans, sans-serif",
        heading: "IBM Plex Sans, sans-serif",
    },
    fontSizes: ["0.625rem", "0.75rem", "1rem", "1.25rem", "1.5rem", "2rem"],
    fontWeights: [400, 500, 700],
    lineHeight: "1.5em",
    titleCase: "capitalize",
};
const borders = {
    default: "1px solid #161632",
    medium: "2px solid #161632",
    bold: "4px solid #161632",
    grey: "1px solid #e7e7eb",
    disabled: "1px solid #d1d1da",
    darkenGrey: "1px solid #D1D1D8",
    dark: "1px solid #32323f",
    success: "1px solid #27ae60",
    danger: "1px solid #e74c3c",
    warning: "1px solid #f39c12",
    notification: "1px solid #3498db",
    transparent: "1px solid transparent",
};
const radius = {
    sm: "2px",
    md: "4px",
    lg: "6px",
    xl: "16px",
    xxl: "22px",
};
const shadow = {
    shadow00: "none",
    shadow01: "0 1px 3px rgba(31, 30, 47, 0.1)",
    shadow02: "0 3px 6px rgba(31, 30, 47, 0.1)",
    shadow03: "0 8px 20px rgba(31, 30, 47, 0.12)",
    shadow04: "0 12px 22px rgba(31, 30, 47, 0.18)",
};
const spacing = {
    spacing00: "0",
    spacing01: "0.25rem",
    spacing02: "0.5rem",
    spacing03: "0.75rem",
    spacing04: "1rem",
    spacing05: "1.25rem",
    spacing06: "1.5rem",
    spacing07: "2rem",
    spacing08: "2.5rem",
};
const zindex = {
    topoftheworld: 9999,
    popup: 9000,
    modal: 8000,
    overlay: 7000,
    dropdown: 6000,
    sticky: 2000,
    masked: 1000,
    default: 1,
    zero: 0,
    deep: -9999,
};
const transition = "all 0.26s ease-in-out";
const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
};
const iconSize = {
    sm: "0.875rem",
    smd: "1.2rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "5rem",
};
const opacity = 0.7;

const theme = {
    // Typograhpy
    fonts: typography.fonts,
    lineHeight: typography.lineHeight,
    fontWeights: {
        regular: typography.fontWeights[0],
        medium: typography.fontWeights[1],
        bold: typography.fontWeights[2],
    },
    fontSizes: {
        xs: typography.fontSizes[0],
        sm: typography.fontSizes[1],
        md: typography.fontSizes[2],
        lg: typography.fontSizes[3],
        xl: typography.fontSizes[4],
        xxl: typography.fontSizes[5],
    },
    typography,
    // Borders
    borderDefault: borders.default,
    borderInput: borders.darkenGrey,
    borders,
    // Radius
    radiusDefault: radius.md,
    radius,
    // Colors
    color,
    colors,
    shadow,
    transition,
    zindex,
    opacity,
    iconSize,
    breakpoints,
    spacing,
};
const bp = createBreakpoint(breakpoints);
const map = createMap(breakpoints);

const awsIcons = {
    ec2: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D86613" }), jsxRuntimeExports.jsx("path", { d: "M19.3571 12.96H17.7571V12.32H19.3571V4.64H11.6771V6.24H11.0371V4.64C11.0371 4.47026 11.1045 4.30748 11.2246 4.18745C11.3446 4.06743 11.5074 4 11.6771 4H19.3571C19.5268 4 19.6896 4.06743 19.8097 4.18745C19.9297 4.30748 19.9971 4.47026 19.9971 4.64V12.32C19.9971 12.4897 19.9297 12.6525 19.8097 12.7725C19.6896 12.8926 19.5268 12.96 19.3571 12.96Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3171 20H4.63707C4.46733 20 4.30455 19.9325 4.18452 19.8125C4.0645 19.6925 3.99707 19.5297 3.99707 19.36V11.68C3.99707 11.5102 4.0645 11.3475 4.18452 11.2274C4.30455 11.1074 4.46733 11.04 4.63707 11.04H6.23707V11.68H4.63707V19.36H12.3171V17.76H12.9571V19.36C12.9571 19.5297 12.8896 19.6925 12.7696 19.8125C12.6496 19.9325 12.4868 20 12.3171 20Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.1199 9.12V8.48H16.1599C16.1467 8.31466 16.0751 8.15941 15.9578 8.04212C15.8405 7.92483 15.6852 7.85318 15.5199 7.84V6.88H14.8799V7.84H13.9199V6.88H13.2799V7.84H12.3199V6.88H11.6799V7.84H10.7199V6.88H10.0799V7.84H9.11988V6.88H8.47988V7.84C8.31453 7.85318 8.15929 7.92483 8.042 8.04212C7.92471 8.15941 7.85305 8.31466 7.83988 8.48H6.87988V9.12H7.83988V10.08H6.87988V10.72H7.83988V11.68H6.87988V12.32H7.83988V13.28H6.87988V13.92H7.83988V14.88H6.87988V15.52H7.83988C7.85305 15.6854 7.92471 15.8406 8.042 15.9579C8.15929 16.0752 8.31453 16.1468 8.47988 16.16V17.12H9.11988V16.16H10.0799V17.12H10.7199V16.16H11.6799V17.12H12.3199V16.16H13.2799V17.12H13.9199V16.16H14.8799V17.12H15.5199V16.16C15.6852 16.1468 15.8405 16.0752 15.9578 15.9579C16.0751 15.8406 16.1467 15.6854 16.1599 15.52H17.1199V14.88H16.1599V13.92H17.1199V13.28H16.1599V12.32H17.1199V11.68H16.1599V10.72H17.1199V10.08H16.1599V9.12H17.1199ZM15.5199 15.4624C15.5199 15.4777 15.5138 15.4923 15.503 15.5031C15.4922 15.5139 15.4776 15.52 15.4623 15.52H8.53748C8.52221 15.52 8.50756 15.5139 8.49675 15.5031C8.48595 15.4923 8.47988 15.4777 8.47988 15.4624V8.5376C8.47988 8.52233 8.48595 8.50768 8.49675 8.49688C8.50756 8.48607 8.52221 8.48 8.53748 8.48H15.4623C15.4776 8.48 15.4922 8.48607 15.503 8.49688C15.5138 8.50768 15.5199 8.52233 15.5199 8.5376V15.4624Z", fill: "white" })] })),
    dynamodb: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3B48CC" }), jsxRuntimeExports.jsx("path", { d: "M16.0806 12.9536L13.9654 15.0656C14.346 14.9594 14.7131 14.8102 15.0598 14.6208C15.1611 14.6836 15.2476 14.7676 15.3133 14.8671C15.3791 14.9665 15.4225 15.079 15.4406 15.1968C15.4406 15.7824 14.199 16.4192 12.3558 16.6784C11.7873 16.7553 11.2144 16.7959 10.6406 16.8H10.3206C7.73503 16.7392 5.84063 15.9232 5.84063 15.2C5.85876 15.0822 5.90219 14.9697 5.96792 14.8703C6.03366 14.7708 6.12014 14.6868 6.22143 14.624C7.22623 15.184 8.85503 15.5168 10.6406 15.5168H10.6758L10.855 14.8768C10.7846 14.8768 10.7142 14.8768 10.6406 14.8768C8.88063 14.8768 7.24863 14.528 6.38143 13.9776C6.03583 13.7504 5.84383 13.504 5.84063 13.2896V11.808C6.81983 12.5568 8.77183 12.9472 10.6406 12.9472C10.8934 12.9472 11.1462 12.9472 11.3926 12.9248L11.575 12.2848C11.255 12.3072 10.9574 12.3168 10.6406 12.3168C7.89503 12.3168 5.84063 11.4752 5.84063 10.7168C5.85876 10.599 5.90219 10.4865 5.96792 10.3871C6.03366 10.2876 6.12014 10.2036 6.22143 10.1408C7.10463 10.6368 8.46143 10.9472 10.0006 11.0176L10.0166 10.3776C8.50303 10.304 7.13663 9.97758 6.38143 9.49438C6.03903 9.27358 5.84703 9.02398 5.84063 8.80638V7.32798C6.81983 8.07678 8.77183 8.46718 10.6406 8.46718H10.711L11.0502 7.82718H10.6406C7.89503 7.82718 5.84063 6.98558 5.84063 6.22718C5.84063 5.46878 7.89503 4.62718 10.6406 4.62718C11.5654 4.62327 12.4872 4.7307 13.3862 4.94718H15.143C14.183 4.36158 12.5254 3.98718 10.6406 3.98718C8.00383 3.98718 5.20063 4.76798 5.20063 6.22718V8.80318C5.21026 8.98566 5.25827 9.16406 5.34153 9.32673C5.42479 9.48939 5.54143 9.63266 5.68383 9.74718C5.53962 9.8636 5.42192 10.0095 5.33859 10.175C5.25526 10.3406 5.20823 10.522 5.20063 10.7072V13.2672C5.20802 13.4524 5.25497 13.6339 5.33831 13.7995C5.42165 13.9651 5.53947 14.1109 5.68383 14.2272C5.53962 14.3436 5.42192 14.4895 5.33859 14.655C5.25526 14.8206 5.20823 15.002 5.20063 15.1872V17.7472C5.19875 17.7695 5.19875 17.792 5.20063 17.8144C5.28703 19.2192 8.03903 19.9744 10.6406 19.9744C13.2422 19.9744 15.9942 19.2192 16.0806 17.808C16.0838 17.7857 16.0838 17.7631 16.0806 17.7408V15.1808C16.0745 14.9953 16.0281 14.8134 15.9447 14.6476C15.8612 14.4818 15.7428 14.3362 15.5974 14.2208C15.7418 14.1045 15.8596 13.9587 15.943 13.7931C16.0263 13.6275 16.0732 13.446 16.0806 13.2608V12.9536ZM15.4406 17.7536C15.4406 18.5088 13.3862 19.3536 10.6406 19.3536C7.89503 19.3536 5.84063 18.5184 5.84063 17.7536V16.2816C6.81983 17.024 8.77183 17.4144 10.6406 17.4144C12.5094 17.4144 14.4614 17.024 15.4406 16.2816V17.7536Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.80039 9.20637C7.02131 9.20637 7.20039 9.02729 7.20039 8.80637C7.20039 8.58546 7.02131 8.40637 6.80039 8.40637C6.57948 8.40637 6.40039 8.58546 6.40039 8.80637C6.40039 9.02729 6.57948 9.20637 6.80039 9.20637Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.80039 13.6864C7.02131 13.6864 7.20039 13.5073 7.20039 13.2864C7.20039 13.0655 7.02131 12.8864 6.80039 12.8864C6.57948 12.8864 6.40039 13.0655 6.40039 13.2864C6.40039 13.5073 6.57948 13.6864 6.80039 13.6864Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.80039 18.1664C7.02131 18.1664 7.20039 17.9873 7.20039 17.7664C7.20039 17.5455 7.02131 17.3664 6.80039 17.3664C6.57948 17.3664 6.40039 17.5455 6.40039 17.7664C6.40039 17.9873 6.57948 18.1664 6.80039 18.1664Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.441 16.4736C11.3846 16.473 11.3294 16.4575 11.281 16.4288C11.2186 16.3929 11.1702 16.337 11.1435 16.2703C11.1168 16.2035 11.1134 16.1297 11.1338 16.0608L12.9322 10.0736H11.121C11.0651 10.0743 11.01 10.0603 10.9611 10.0331C10.9123 10.0059 10.8714 9.96639 10.8426 9.91849C10.8138 9.87058 10.7981 9.81597 10.7969 9.76008C10.7958 9.7042 10.8093 9.64899 10.8362 9.59995L12.7562 5.75995C12.7828 5.70718 12.8234 5.6628 12.8737 5.63174C12.924 5.60067 12.9819 5.58413 13.041 5.58395H17.201C17.2528 5.58137 17.3045 5.59145 17.3516 5.6133C17.3987 5.63515 17.4397 5.66813 17.4712 5.70939C17.5027 5.75065 17.5237 5.79895 17.5324 5.85013C17.541 5.90131 17.5371 5.95382 17.521 6.00315L16.7018 8.46395H18.497C18.5595 8.46419 18.6206 8.48275 18.6727 8.51733C18.7248 8.55191 18.7656 8.60099 18.7901 8.65853C18.8147 8.71606 18.8218 8.77951 18.8106 8.84104C18.7995 8.90257 18.7705 8.95949 18.7274 9.00475L11.6874 16.3648C11.6567 16.3997 11.6187 16.4275 11.5762 16.4463C11.5336 16.4651 11.4875 16.4744 11.441 16.4736V16.4736ZM11.6394 9.43355H13.361C13.4106 9.43355 13.4596 9.44512 13.5041 9.46734C13.5485 9.48955 13.5872 9.52181 13.617 9.56155C13.6468 9.60129 13.6669 9.64743 13.6758 9.69631C13.6847 9.74519 13.6821 9.79546 13.6682 9.84315L12.129 14.9632L17.7322 9.10715H16.241C16.1887 9.10993 16.1366 9.09986 16.0892 9.07784C16.0418 9.05582 16.0005 9.02252 15.9689 8.98084C15.9373 8.93916 15.9165 8.89038 15.9081 8.83876C15.8997 8.78714 15.9042 8.73427 15.921 8.68475L16.7402 6.22715H13.2202L11.6394 9.43355Z", fill: "white" })] })),
    sqs: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#CC2264" }), jsxRuntimeExports.jsx("path", { d: "M6.94159 7.03996C7.7909 6.19223 8.84128 5.57367 9.99455 5.2421C11.1478 4.91053 12.3663 4.87677 13.5362 5.14399C14.706 5.4112 15.7891 5.97066 16.684 6.77007C17.5789 7.56949 18.2566 8.58275 18.6536 9.71516L19.2584 9.50396C18.7288 7.9892 17.7413 6.67658 16.4327 5.74784C15.1241 4.8191 13.5591 4.32019 11.9544 4.32019C10.3497 4.32019 8.78472 4.8191 7.47611 5.74784C6.16751 6.67658 5.18002 7.9892 4.65039 9.50396L5.25519 9.71516C5.60554 8.70629 6.18244 7.79113 6.94159 7.03996V7.03996Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.9612 16.9599C15.6298 18.2895 13.8251 19.0363 11.9436 19.0363C10.062 19.0363 8.25734 18.2895 6.92597 16.9599C6.16577 16.2021 5.58894 15.2805 5.23957 14.2655L4.63477 14.4767C5.06483 15.7145 5.80216 16.8227 6.77764 17.6975C7.75312 18.5724 8.93479 19.1852 10.2119 19.4784C11.4889 19.7717 12.8196 19.7359 14.079 19.3743C15.3384 19.0127 16.4854 18.3372 17.4124 17.4111C18.2489 16.5803 18.8819 15.5672 19.262 14.4511L18.6572 14.2463C18.3076 15.2691 17.7273 16.1976 16.9612 16.9599V16.9599Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.44854 11.9872C6.4492 11.5547 6.29984 11.1353 6.02592 10.8007C5.752 10.466 5.37047 10.2367 4.94639 10.1518C4.52231 10.0669 4.08192 10.1318 3.70031 10.3353C3.3187 10.5389 3.01949 10.8684 2.8537 11.2679C2.68791 11.6673 2.6658 12.1119 2.79113 12.5259C2.91647 12.9398 3.1815 13.2974 3.54103 13.5378C3.90056 13.7782 4.33234 13.8865 4.76275 13.8441C5.19316 13.8017 5.59556 13.6114 5.90134 13.3056C6.07533 13.133 6.21331 12.9276 6.30725 12.7013C6.40118 12.475 6.44921 12.2322 6.44854 11.9872V11.9872ZM5.44054 12.8544C5.20687 13.0761 4.89704 13.1997 4.57494 13.1997C4.25283 13.1997 3.943 13.0761 3.70934 12.8544C3.53899 12.683 3.4231 12.4651 3.37624 12.228C3.32938 11.991 3.35364 11.7454 3.44598 11.5221C3.53831 11.2987 3.69459 11.1077 3.89517 10.973C4.09576 10.8382 4.3317 10.7658 4.57334 10.7648C4.89829 10.7655 5.20987 10.8943 5.44054 11.1232C5.66975 11.3529 5.79848 11.6642 5.79848 11.9888C5.79848 12.3133 5.66975 12.6246 5.44054 12.8544V12.8544Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.7361 10.6912C20.4756 10.4307 20.1438 10.2533 19.7825 10.1814C19.4212 10.1095 19.0467 10.1464 18.7064 10.2873C18.3661 10.4283 18.0752 10.667 17.8705 10.9732C17.6659 11.2795 17.5566 11.6396 17.5566 12.008C17.5566 12.3763 17.6659 12.7364 17.8705 13.0427C18.0752 13.349 18.3661 13.5877 18.7064 13.7286C19.0467 13.8696 19.4212 13.9065 19.7825 13.8346C20.1438 13.7627 20.4756 13.5853 20.7361 13.3248C21.0853 12.9755 21.2814 12.5019 21.2814 12.008C21.2814 11.5141 21.0853 11.0404 20.7361 10.6912V10.6912ZM20.2817 12.8704C20.0525 13.0994 19.7417 13.228 19.4177 13.228C19.0937 13.228 18.7829 13.0994 18.5537 12.8704C18.4399 12.7571 18.3496 12.6224 18.288 12.4742C18.2264 12.3259 18.1947 12.1669 18.1947 12.0064C18.1947 11.8458 18.2264 11.6868 18.288 11.5386C18.3496 11.3903 18.4399 11.2557 18.5537 11.1424C18.6659 11.0234 18.8008 10.9282 18.9505 10.8623C19.1002 10.7965 19.2615 10.7613 19.4251 10.7589C19.5886 10.7565 19.7509 10.787 19.9024 10.8484C20.054 10.9099 20.1916 11.0012 20.3072 11.1168C20.4229 11.2324 20.5141 11.3701 20.5756 11.5216C20.6371 11.6732 20.6675 11.8355 20.6651 11.999C20.6628 12.1625 20.6276 12.3239 20.5617 12.4735C20.4959 12.6232 20.4006 12.7582 20.2817 12.8704V12.8704Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.3382 15.0975C10.6502 13.7855 13.3222 13.7855 14.6342 15.0975C14.6938 15.1567 14.7743 15.19 14.8582 15.1903C14.9431 15.1903 15.0245 15.1566 15.0845 15.0966C15.1445 15.0366 15.1782 14.9552 15.1782 14.8703C15.1784 14.8282 15.1704 14.7865 15.1544 14.7475C15.1385 14.7085 15.1151 14.673 15.0854 14.6431C14.4321 13.9202 14.0876 12.9704 14.1254 11.9967C14.0879 11.0232 14.4324 10.0735 15.0854 9.35034C15.145 9.29039 15.1785 9.20928 15.1785 9.12474C15.1785 9.04021 15.145 8.9591 15.0854 8.89914C15.0254 8.83954 14.9443 8.80609 14.8598 8.80609C14.7753 8.80609 14.6942 8.83954 14.6342 8.89914C13.3222 10.2079 10.6502 10.2079 9.3382 8.89914C9.27824 8.83954 9.19714 8.80609 9.1126 8.80609C9.02806 8.80609 8.94695 8.83954 8.887 8.89914C8.8274 8.9591 8.79395 9.04021 8.79395 9.12474C8.79395 9.20928 8.8274 9.29039 8.887 9.35034C9.54578 10.071 9.89613 11.0209 9.863 11.9967C9.89647 12.9726 9.54607 13.9227 8.887 14.6431C8.85734 14.673 8.83388 14.7085 8.81795 14.7475C8.80203 14.7865 8.79396 14.8282 8.7942 14.8703C8.79396 14.9125 8.80203 14.9542 8.81795 14.9932C8.83388 15.0322 8.85734 15.0676 8.887 15.0975C8.94695 15.1571 9.02806 15.1906 9.1126 15.1906C9.19714 15.1906 9.27824 15.1571 9.3382 15.0975V15.0975ZM10.167 10.1823C11.3366 10.6401 12.6358 10.6401 13.8054 10.1823C13.3574 11.3516 13.3574 12.6451 13.8054 13.8143C12.6358 13.3566 11.3366 13.3566 10.167 13.8143C10.615 12.6451 10.615 11.3516 10.167 10.1823V10.1823Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.8825 13.3088L16.9609 12.2176C17.0205 12.1576 17.0539 12.0765 17.0539 11.992C17.0539 11.9074 17.0205 11.8263 16.9609 11.7664L15.8761 10.6816L15.4217 11.1328L15.9689 11.6768H14.5225V12.3168H15.9689L15.4281 12.8576L15.8825 13.3088Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.1474 13.3152L9.2386 12.224C9.2982 12.164 9.33165 12.0829 9.33165 11.9984C9.33165 11.9138 9.2982 11.8327 9.2386 11.7728L8.1474 10.6816L7.6962 11.1328L8.2402 11.6768H6.8418V12.3168H8.2402L7.6962 12.864L8.1474 13.3152Z", fill: "white" })] })),
    lambda: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D86613" }), jsxRuntimeExports.jsx("path", { d: "M19.3602 20H15.4178C15.3574 19.9998 15.2984 19.9826 15.2474 19.9503C15.1965 19.9181 15.1557 19.8721 15.1298 19.8176L9.55535 8.16H7.19695C7.11208 8.16 7.03069 8.12629 6.97068 8.06627C6.91067 8.00626 6.87695 7.92487 6.87695 7.84V4.32C6.87695 4.23513 6.91067 4.15374 6.97068 4.09373C7.03069 4.03371 7.11208 4 7.19695 4H12.125C12.1853 4.00017 12.2443 4.01738 12.2953 4.04966C12.3462 4.08193 12.387 4.12794 12.413 4.1824L17.9618 15.84H19.3602C19.445 15.84 19.5264 15.8737 19.5864 15.9337C19.6464 15.9937 19.6802 16.0751 19.6802 16.16V19.68C19.6802 19.7649 19.6464 19.8463 19.5864 19.9063C19.5264 19.9663 19.445 20 19.3602 20ZM15.6194 19.36H19.0402V16.48H17.7602C17.6998 16.4798 17.6408 16.4626 17.5898 16.4303C17.5389 16.3981 17.4981 16.3521 17.4722 16.2976L11.9234 4.64H7.52015V7.52H9.76015C9.82047 7.52017 9.87951 7.53738 9.93046 7.56966C9.98142 7.60193 10.0222 7.64794 10.0482 7.7024L15.6194 19.36Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.79388 20H4.63388C4.5795 20.0001 4.52599 19.9863 4.47839 19.96C4.4308 19.9337 4.3907 19.8957 4.36188 19.8496C4.33132 19.8024 4.31376 19.7479 4.31095 19.6917C4.30814 19.6355 4.32019 19.5796 4.34588 19.5296L8.69788 10.4384C8.72381 10.3839 8.76461 10.3379 8.81557 10.3056C8.86652 10.2734 8.92556 10.2562 8.98588 10.256V10.256C9.04585 10.2559 9.10465 10.2726 9.15558 10.3043C9.2065 10.336 9.24749 10.3813 9.27388 10.4352L11.3571 14.72C11.378 14.7634 11.3889 14.811 11.3889 14.8592C11.3889 14.9074 11.378 14.955 11.3571 14.9984L9.08508 19.7984C9.06178 19.8569 9.02172 19.9073 8.96991 19.9431C8.91811 19.979 8.85687 19.9988 8.79388 20ZM5.14588 19.36H8.59228L10.7139 14.88L8.98908 11.312L5.14588 19.36Z", fill: "white" })] })),
    route53: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M8.73361 13.7408C9.13707 13.8838 9.56018 13.9637 9.98801 13.9776C10.2629 14 10.5366 13.9227 10.7592 13.76C10.8476 13.6792 10.9171 13.58 10.963 13.4695C11.0089 13.3589 11.03 13.2396 11.0248 13.12C11.0364 12.9955 11.0201 12.8699 10.9769 12.7525C10.9337 12.6351 10.8648 12.5289 10.7752 12.4416C10.534 12.2804 10.2451 12.2059 9.95601 12.2304C9.61378 12.2335 9.27196 12.2549 8.93201 12.2944V11.84L9.05681 9.8656H11.4664V10.4H9.60081L9.51441 11.7408C9.72537 11.7002 9.93958 11.6788 10.1544 11.6768C10.561 11.6527 10.9612 11.7869 11.2712 12.0512C11.4075 12.1859 11.5136 12.3479 11.5825 12.5267C11.6515 12.7054 11.6817 12.8967 11.6712 13.088C11.6783 13.2865 11.6399 13.484 11.5589 13.6653C11.4779 13.8467 11.3565 14.0072 11.204 14.1344C10.8544 14.4131 10.4154 14.5553 9.96881 14.5344C9.53442 14.5367 9.10456 14.4461 8.70801 14.2688L8.73361 13.7408Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.9619 11.8208H14.0291H14.0803C14.4608 11.7942 14.8369 11.9158 15.1299 12.16C15.26 12.2824 15.3617 12.4317 15.4281 12.5975C15.4944 12.7633 15.5237 12.9417 15.5139 13.12C15.5189 13.316 15.4788 13.5106 15.3967 13.6887C15.3146 13.8668 15.1926 14.0237 15.0403 14.1472C14.6815 14.4189 14.2386 14.556 13.7891 14.5344C13.3665 14.5319 12.9491 14.4415 12.5635 14.2688V13.7408C12.957 13.8839 13.3706 13.9638 13.7891 13.9776C14.0655 13.9961 14.3396 13.9168 14.5635 13.7536C14.6546 13.6749 14.7263 13.5761 14.7729 13.4651C14.8195 13.3541 14.8399 13.2338 14.8323 13.1136C14.8323 12.5824 14.4963 12.3168 13.8243 12.3168C13.6105 12.3156 13.3969 12.3263 13.1843 12.3488V11.9136L14.5699 10.4H12.6339V9.85919H15.3219V10.3808L13.9619 11.8208Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12 18.08C11.9437 18.0794 11.8885 18.064 11.84 18.0352C10.803 17.4212 9.66887 16.9884 8.48645 16.7552C7.81125 16.6336 5.60645 16.1152 5.60645 14.5152C5.60645 13.792 5.88485 13.312 6.24645 12.704C6.77632 11.927 7.07684 11.0166 7.11364 10.0768C7.11033 9.17511 6.84579 8.2937 6.35205 7.5392C6.31591 7.48238 6.29862 7.4156 6.30264 7.34838C6.30666 7.28116 6.33179 7.21692 6.37445 7.1648L6.88645 6.5248C6.93414 6.46598 7.00116 6.42599 7.07557 6.41193C7.14998 6.39786 7.22697 6.41065 7.29285 6.448C7.94939 6.82916 8.69371 7.03316 9.45285 7.04C10.2993 7.05229 11.1273 6.79201 11.8144 6.2976C11.8686 6.25902 11.9335 6.23828 12 6.23828C12.0666 6.23828 12.1314 6.25902 12.1856 6.2976C12.8728 6.79201 13.7008 7.05229 14.5472 7.04C15.3088 7.0333 16.0555 6.82815 16.7136 6.4448C16.7795 6.40745 16.8565 6.39466 16.9309 6.40873C17.0053 6.42279 17.0723 6.46278 17.12 6.5216L17.632 7.1616C17.6747 7.21372 17.6998 7.27796 17.7038 7.34518C17.7079 7.4124 17.6906 7.47918 17.6544 7.536C17.1604 8.29035 16.8958 9.17186 16.8928 10.0736C16.8928 11.2096 17.3536 11.9936 17.7568 12.7008C18.112 13.3088 18.3968 13.7888 18.3968 14.512C18.3968 16.112 16.1952 16.64 15.5168 16.752C14.3344 16.9852 13.2003 17.418 12.1632 18.032C12.1142 18.0624 12.0578 18.079 12 18.08ZM7.00805 7.36C7.49058 8.17136 7.7459 9.09761 7.74724 10.0416C7.74724 11.3504 7.21924 12.2592 6.78724 12.9888C6.46724 13.5552 6.24325 13.9296 6.24325 14.48C6.24325 15.6192 8.19845 16.0288 8.59205 16.0992C9.78823 16.3372 10.9373 16.7696 11.9936 17.3792C13.05 16.7696 14.1991 16.3372 15.3952 16.0992C15.7888 16.0288 17.744 15.6192 17.744 14.48C17.744 13.9296 17.5264 13.5552 17.2 12.9888C16.7744 12.2592 16.24 11.3504 16.24 10.0416C16.2453 9.09641 16.505 8.17008 16.992 7.36L16.7904 7.1104C16.0977 7.46803 15.3301 7.65664 14.5504 7.6608C13.6433 7.67227 12.753 7.41628 11.9904 6.9248C11.2279 7.41628 10.3375 7.67227 9.43044 7.6608C8.65081 7.65664 7.88323 7.46803 7.19044 7.1104L7.00805 7.36Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.0003 20C11.927 20.0003 11.8558 19.9755 11.7987 19.9296C10.7222 19.1532 9.49638 18.6084 8.19867 18.3296C5.56827 17.856 3.99707 16.4096 3.99707 14.4896C4.02292 13.5528 4.31725 12.6432 4.84507 11.8688C5.19387 11.2704 5.48507 10.752 5.48507 10.0512C5.46564 9.58673 5.35242 9.13096 5.15225 8.71136C4.95207 8.29176 4.66907 7.917 4.32027 7.60962C4.28425 7.58289 4.25425 7.54888 4.23223 7.50981C4.2102 7.47073 4.19663 7.42746 4.19241 7.3828C4.18818 7.33814 4.19339 7.2931 4.2077 7.25058C4.22201 7.20807 4.2451 7.16904 4.27547 7.13602C4.27547 7.11362 6.15387 4.86082 6.57947 4.27522C6.60796 4.23515 6.64529 4.20219 6.68858 4.17888C6.73186 4.15557 6.77994 4.14255 6.82907 4.14082C6.87772 4.13674 6.92666 4.14385 6.97214 4.1616C7.01763 4.17935 7.05844 4.20727 7.09147 4.24322C7.38276 4.58871 7.74172 4.87086 8.14623 5.07229C8.55075 5.27372 8.99223 5.39016 9.44347 5.41442C10.3363 5.41442 11.0435 5.01762 11.7251 4.13442C11.7575 4.09547 11.7981 4.06412 11.844 4.04261C11.8899 4.0211 11.94 4.00995 11.9907 4.00995C12.0414 4.00995 12.0914 4.0211 12.1373 4.04261C12.1832 4.06412 12.2238 4.09547 12.2563 4.13442C12.9411 5.03042 13.6451 5.41442 14.5379 5.41442C14.9891 5.39016 15.4306 5.27372 15.8351 5.07229C16.2396 4.87086 16.5986 4.58871 16.8899 4.24322C16.9229 4.20727 16.9637 4.17935 17.0092 4.1616C17.0547 4.14385 17.1036 4.13674 17.1523 4.14082C17.2014 4.14255 17.2495 4.15557 17.2928 4.17888C17.3361 4.20219 17.3734 4.23515 17.4019 4.27522C17.8275 4.86082 19.6899 7.11362 19.7059 7.13602C19.7351 7.16951 19.757 7.20872 19.7702 7.25114C19.7834 7.29356 19.7877 7.33827 19.7827 7.38242C19.7726 7.4709 19.7291 7.55219 19.6611 7.60962C19.3123 7.917 19.0293 8.29176 18.8291 8.71136C18.6289 9.13096 18.5157 9.58673 18.4963 10.0512C18.4963 10.752 18.7971 11.2704 19.1363 11.8688C19.6641 12.6432 19.9584 13.5528 19.9843 14.4896C19.9843 16.4096 18.4131 17.856 15.7827 18.3296C14.4852 18.6062 13.26 19.1512 12.1859 19.9296C12.133 19.9722 12.068 19.9968 12.0003 20ZM4.99547 7.32482C5.71911 8.05185 6.13606 9.02893 6.16027 10.0544C6.16027 10.9344 5.78587 11.5808 5.42427 12.2048C5.03387 12.88 4.66267 13.5136 4.66267 14.4928C4.66267 16.8352 7.45947 17.52 8.31707 17.6736C9.63867 17.9474 10.8914 18.485 12.0003 19.2544C13.1082 18.4854 14.3598 17.9478 15.6803 17.6736C16.5379 17.52 19.3347 16.8352 19.3347 14.4928C19.3347 13.5136 18.9635 12.8928 18.5731 12.2048C18.2115 11.5648 17.8371 10.9248 17.8371 10.0544C17.8613 9.02893 18.2782 8.05185 19.0019 7.32482C18.5827 6.81602 17.6131 5.63522 17.1043 4.97922C16.4213 5.65823 15.5068 6.05377 14.5443 6.08642C14.0519 6.08783 13.5656 5.97738 13.1221 5.76341C12.6787 5.54943 12.2896 5.23753 11.9843 4.85122C11.679 5.23753 11.2899 5.54943 10.8464 5.76341C10.4029 5.97738 9.91666 6.08783 9.42427 6.08642C8.46176 6.05377 7.54723 5.65823 6.86427 4.97922C6.40027 5.63522 5.41467 6.81602 4.99547 7.32482Z", fill: "white" })] })),
    s3: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3F8624" }), jsxRuntimeExports.jsx("path", { d: "M11.5523 4C8.12831 4 4.32031 5.056 4.32031 6.528V6.56L4.35231 6.688V6.72L5.88831 18.144C5.92031 19.456 9.37631 19.936 11.5523 19.936C12.2883 19.936 13.0563 19.904 13.7923 19.808L13.6963 19.168C12.9923 19.264 12.2883 19.296 11.5523 19.296C8.48031 19.296 6.52831 18.528 6.52831 18.112V18.08L5.12031 7.616C5.24831 7.712 5.40831 7.776 5.53631 7.84C5.60031 7.872 5.66431 7.904 5.72831 7.936C5.79231 7.968 5.85631 8 5.92031 8.032C5.98431 8.064 6.17631 8.128 6.30431 8.16C6.43231 8.192 6.56031 8.224 6.65631 8.256C6.75231 8.288 6.91231 8.32 7.04031 8.352L7.20031 8.384C7.93631 8.544 8.70431 8.672 9.47231 8.736C9.63231 8.736 9.82431 8.768 9.98431 8.768C10.4963 8.8 11.0083 8.832 11.5203 8.832C12.0323 8.832 12.5443 8.8 13.0563 8.768C13.2483 8.768 13.4083 8.736 13.6003 8.736C14.2403 8.672 14.8483 8.576 15.4243 8.48L15.6803 8.416L15.8723 8.384L16.0003 8.352C16.1923 8.32 16.3843 8.256 16.5763 8.192L16.7683 8.128C16.8963 8.096 17.0243 8.032 17.1523 8C17.2163 7.968 17.2803 7.936 17.3763 7.904C17.4403 7.872 17.5043 7.84 17.5683 7.808C17.6963 7.744 17.8563 7.68 17.9843 7.584L17.3123 12.608L17.6643 12.704L17.9203 12.8L18.0163 12.096C17.9203 12.032 17.7923 11.968 17.6643 11.872H17.6003L17.9203 11.328L17.9523 11.36L18.1123 11.456L18.7523 6.816V6.784V6.656V6.624C18.7523 5.056 14.9443 4 11.5523 4ZM17.7603 6.976C17.5683 7.104 17.3443 7.2 17.1203 7.296C17.0563 7.328 16.9923 7.36 16.9283 7.36C16.8323 7.392 16.7043 7.424 16.5763 7.488L16.3843 7.552C16.1923 7.616 15.9683 7.68 15.7443 7.712L15.4883 7.776L15.0723 7.872C14.8483 7.904 14.6243 7.936 14.3683 8C14.2403 8.032 14.1123 8.032 13.9523 8.032C13.7923 8.064 13.6003 8.064 13.4083 8.096C13.2163 8.128 13.1203 8.128 12.9603 8.128C12.5123 8.16 12.0323 8.16 11.5203 8.16C11.0083 8.16 10.5603 8.16 10.0803 8.128C9.92031 8.128 9.79231 8.096 9.63231 8.096C9.47231 8.096 9.28031 8.064 9.08831 8.032C8.89631 8 8.86431 8 8.73631 8C8.22431 7.936 7.77631 7.84 7.36031 7.744L6.91231 7.616C6.75231 7.584 6.62431 7.552 6.49631 7.488L6.30431 7.424C6.17631 7.392 6.08031 7.328 5.95231 7.296C5.69631 7.2 5.47231 7.072 5.24831 6.912C5.18431 6.88 5.12031 6.816 5.08831 6.752C5.05631 6.72 5.05631 6.72 5.02431 6.688C5.02431 6.656 4.99231 6.656 4.99231 6.624C4.99231 6.624 4.99231 6.592 4.96031 6.592V6.528C4.99231 5.856 7.71231 4.64 11.5523 4.64C15.3923 4.64 18.0803 5.856 18.1443 6.528V6.592C18.1443 6.624 18.1443 6.624 18.1123 6.624C18.1123 6.656 18.0803 6.656 18.0803 6.688C18.0803 6.72 18.0483 6.72 18.0163 6.752C17.9523 6.848 17.8883 6.944 17.7603 6.976Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M4.95996 6.59204C4.95996 6.62404 4.95996 6.62404 4.99196 6.65604C4.99196 6.65604 4.99196 6.62404 4.95996 6.59204Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M5.24805 6.94397C5.47205 7.10397 5.69605 7.23197 5.95205 7.32797C5.69605 7.23197 5.47205 7.10397 5.24805 6.94397Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.7441 7.74398C15.9681 7.67998 16.1921 7.61598 16.3841 7.58398C16.1921 7.64798 15.9681 7.71198 15.7441 7.74398Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.7601 6.97601C17.5681 7.10401 17.3441 7.20001 17.1201 7.29601C17.3441 7.23201 17.5681 7.13601 17.7601 6.97601Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.6643 12.736L17.9203 12.8L17.8243 13.44L17.7923 13.632L17.1523 13.536L17.1843 13.28L17.2803 12.64L17.6643 12.736Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.9526 11.328L18.1126 11.424L18.0166 12.096C17.9206 12.032 17.7926 11.968 17.6646 11.872H17.6006L17.9206 11.328H17.9526Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.1121 6.59204C18.1121 6.62404 18.1121 6.62404 18.0801 6.62404C18.1121 6.62404 18.1121 6.62404 18.1121 6.59204Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.5204 13.312C19.3284 13.504 19.0724 13.6 18.7844 13.568C18.4644 13.568 18.1444 13.504 17.8244 13.44L17.4724 13.344L17.2164 13.28C15.4244 12.672 13.6964 11.968 12.0004 11.136L11.7764 11.04L12.0644 10.464L12.2884 10.56C13.9204 11.36 15.6164 12.032 17.3124 12.64L17.6644 12.736L17.9204 12.8C18.7204 12.992 18.9444 12.928 19.0404 12.896C19.0084 12.832 18.8484 12.576 18.0164 12.064C17.9204 12 17.7924 11.936 17.6644 11.84L17.6004 11.872L17.9204 11.328L17.9524 11.36L18.1124 11.456C19.1044 12.032 19.5844 12.448 19.6804 12.864C19.6804 12.992 19.6484 13.184 19.5204 13.312Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.5517 11.296C11.1677 11.296 10.8477 10.976 10.8477 10.56C10.8477 10.176 11.1677 9.85602 11.5837 9.85602C11.9677 9.85602 12.2877 10.176 12.2877 10.56C12.2557 10.944 11.9357 11.296 11.5517 11.296ZM11.5517 10.496C11.5197 10.496 11.4877 10.528 11.4877 10.56C11.4877 10.656 11.6477 10.656 11.6477 10.56C11.6157 10.528 11.5837 10.496 11.5517 10.496Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.4644 17.344H17.1844L17.8244 18.432L18.8804 18.752L18.7204 19.36L17.8244 19.104L17.6004 20L16.9924 19.84L17.2804 18.784L16.6404 17.664L16.0004 18.752L16.2884 19.84L15.6484 20L15.4244 19.136L14.5604 19.36L14.4004 18.752L15.4564 18.464L16.0644 17.344H14.8164L14.0164 18.144L13.6004 17.664L14.2404 17.056L13.5684 16.384L14.0164 15.936L14.8164 16.704H16.0644L15.4564 15.648L14.3684 15.328L14.5604 14.72L15.4244 14.976L15.6484 14.08L16.2884 14.24L16.0004 15.296L16.6404 16.384L17.2484 15.328L16.9924 14.24L17.6004 14.08L17.8244 14.944L18.7204 14.72L18.8804 15.328L17.8244 15.616L17.1844 16.704H18.4324L19.2324 15.936L19.6804 16.384L19.0404 17.024L19.6804 17.664L19.2324 18.144L18.4644 17.344Z", fill: "white" })] })),
    codepipeline: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3B48CC" }), jsxRuntimeExports.jsx("path", { d: "M18.24 3.99997H5.76003C5.52854 3.99869 5.29911 4.04335 5.085 4.13134C4.87089 4.21934 4.67637 4.34893 4.51268 4.51262C4.349 4.6763 4.2194 4.87083 4.13141 5.08494C4.04341 5.29905 3.99875 5.52848 4.00003 5.75997V9.27997C3.99875 9.51145 4.04341 9.74089 4.13141 9.95499C4.2194 10.1691 4.349 10.3636 4.51268 10.5273C4.67637 10.691 4.87089 10.8206 5.085 10.9086C5.29911 10.9966 5.52854 11.0412 5.76003 11.04H6.24003V19.68C6.24003 19.7648 6.27374 19.8462 6.33375 19.9062C6.39376 19.9663 6.47516 20 6.56003 20H17.44C17.5249 20 17.6063 19.9663 17.6663 19.9062C17.7263 19.8462 17.76 19.7648 17.76 19.68V11.04H18.24C18.4715 11.0412 18.7009 10.9966 18.9151 10.9086C19.1292 10.8206 19.3237 10.691 19.4874 10.5273C19.6511 10.3636 19.7807 10.1691 19.8686 9.95499C19.9566 9.74089 20.0013 9.51145 20 9.27997V5.75997C20.0013 5.52848 19.9566 5.29905 19.8686 5.08494C19.7807 4.87083 19.6511 4.6763 19.4874 4.51262C19.3237 4.34893 19.1292 4.21934 18.9151 4.13134C18.7009 4.04335 18.4715 3.99869 18.24 3.99997V3.99997ZM17.1072 19.36H6.86723V11.04H17.1072V19.36ZM18.24 10.4H5.76003C5.49275 10.3992 5.23484 10.3014 5.03417 10.1249C4.8335 9.94831 4.70369 9.70496 4.66883 9.43997H10.1088V8.79997H4.66883V5.75997C4.66541 5.46686 4.77836 5.18436 4.98291 4.97441C5.18747 4.76445 5.46693 4.64418 5.76003 4.63997H18.24C18.3876 4.63825 18.534 4.66605 18.6707 4.72172C18.8073 4.7774 18.9315 4.85984 19.0358 4.96418C19.1402 5.06853 19.2226 5.19268 19.2783 5.32934C19.3339 5.466 19.3617 5.61241 19.36 5.75997V8.79997H13.28V9.43997H19.36C19.3246 9.70993 19.1906 9.95728 18.9839 10.1345C18.7772 10.3117 18.5122 10.4062 18.24 10.4Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.02509 15.152L9.85549 16.7296L10.2747 16.2464L8.71949 14.9056L10.2843 13.5264L9.85869 13.0464L8.02189 14.672C7.98775 14.702 7.9604 14.7389 7.94164 14.7803C7.92288 14.8216 7.91314 14.8666 7.91309 14.912C7.91354 14.9577 7.92377 15.0027 7.94309 15.0441C7.96241 15.0855 7.99037 15.1223 8.02509 15.152Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.1594 16.7424L16.0026 15.1424C16.0372 15.1121 16.0648 15.0746 16.0836 15.0327C16.1023 14.9907 16.1118 14.9452 16.1114 14.8992C16.1114 14.8538 16.1016 14.8089 16.0829 14.7675C16.0641 14.7261 16.0368 14.6892 16.0026 14.6592L14.1594 13.0592L13.7402 13.5424L15.305 14.8992L13.7402 16.272L14.1594 16.7424Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.9564 12.2474L10.7568 17.6159L11.3491 17.8586L13.5486 12.4901L12.9564 12.2474Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.32 8.79999H11.04V9.43999H12.32V8.79999Z", fill: "white" })] })),
    kms: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M7.84032 19.84C7.79488 19.8399 7.74998 19.8302 7.7086 19.8114C7.66722 19.7927 7.6303 19.7653 7.60032 19.7312L6.48032 18.4512C6.42887 18.3929 6.40043 18.3178 6.40032 18.24V17.4144L5.53312 16.5472C5.50312 16.5174 5.47932 16.4821 5.46307 16.4431C5.44683 16.4041 5.43846 16.3622 5.43846 16.32C5.43846 16.2778 5.44683 16.2359 5.46307 16.1969C5.47932 16.1579 5.50312 16.1225 5.53312 16.0928L6.40032 15.2288V14.8544L5.53312 13.9872C5.50312 13.9574 5.47932 13.9221 5.46307 13.8831C5.44683 13.8441 5.43846 13.8022 5.43846 13.76C5.43846 13.7178 5.44683 13.6759 5.46307 13.6369C5.47932 13.5979 5.50312 13.5625 5.53312 13.5328L6.40032 12.6688V11.8944C5.63727 11.6025 4.98242 11.083 4.5245 10.4065C4.06657 9.72988 3.82773 8.92888 3.84032 8.112C3.84668 7.05113 4.27421 6.03624 5.02886 5.2906C5.78351 4.54496 6.80345 4.12963 7.86432 4.136C8.92518 4.14236 9.94007 4.56989 10.6857 5.32454C11.4314 6.07919 11.8467 7.09913 11.8403 8.16C11.8433 8.96839 11.5999 9.75851 11.1426 10.4251C10.6852 11.0917 10.0356 11.6031 9.28032 11.8912V18.56C9.28032 18.6062 9.27031 18.6519 9.25098 18.6939C9.23164 18.7359 9.20344 18.7732 9.16832 18.8032L8.04832 19.7632C7.99035 19.8128 7.91659 19.84 7.84032 19.84V19.84ZM7.04032 18.1184L7.87232 19.0784L8.64032 18.4128V11.664C8.63709 11.5934 8.65731 11.5237 8.69783 11.4659C8.73835 11.408 8.79689 11.3651 8.86432 11.344C9.62585 11.0988 10.2748 10.5897 10.6942 9.90838C11.1135 9.22707 11.2758 8.41839 11.1517 7.62804C11.0276 6.83769 10.6253 6.11765 10.0173 5.59766C9.40928 5.07768 8.63555 4.79194 7.83552 4.79194C7.03548 4.79194 6.26175 5.07768 5.65375 5.59766C5.04575 6.11765 4.64345 6.83769 4.51935 7.62804C4.39525 8.41839 4.55751 9.22707 4.97688 9.90838C5.39626 10.5897 6.04518 11.0988 6.80672 11.344C6.87593 11.3634 6.93662 11.4054 6.979 11.4635C7.02137 11.5215 7.04297 11.5922 7.04032 11.664V12.8C7.04056 12.8421 7.03249 12.8839 7.01656 12.9228C7.00064 12.9618 6.97717 12.9973 6.94752 13.0272L6.21472 13.76L6.94752 14.4928C6.97717 14.5227 7.00064 14.5582 7.01656 14.5971C7.03249 14.6361 7.04056 14.6779 7.04032 14.72V15.36C7.03996 15.4439 7.00663 15.5244 6.94752 15.584L6.21472 16.32L6.94752 17.0528C6.97717 17.0827 7.00064 17.1182 7.01656 17.1571C7.03249 17.1961 7.04056 17.2379 7.04032 17.28V18.1184ZM7.84032 8.48C7.55551 8.48 7.2771 8.39554 7.0403 8.23731C6.80349 8.07908 6.61892 7.85419 6.50993 7.59106C6.40094 7.32794 6.37242 7.0384 6.42799 6.75907C6.48355 6.47973 6.6207 6.22315 6.82208 6.02176C7.02347 5.82038 7.28005 5.68323 7.55939 5.62767C7.83872 5.5721 8.12826 5.60062 8.39138 5.70961C8.65451 5.8186 8.8794 6.00317 9.03763 6.23998C9.19586 6.47678 9.28032 6.75519 9.28032 7.04C9.27947 7.42165 9.12749 7.78743 8.85762 8.0573C8.58775 8.32717 8.22197 8.47915 7.84032 8.48V8.48ZM7.84032 6.24C7.68209 6.24 7.52742 6.28692 7.39586 6.37482C7.2643 6.46273 7.16176 6.58767 7.10121 6.73385C7.04066 6.88003 7.02482 7.04089 7.05569 7.19607C7.08656 7.35125 7.16275 7.4938 7.27463 7.60568C7.38651 7.71756 7.52906 7.79376 7.68424 7.82463C7.83943 7.85549 8.00028 7.83965 8.14646 7.7791C8.29264 7.71855 8.41759 7.61601 8.50549 7.48445C8.5934 7.35289 8.64032 7.19822 8.64032 7.04C8.64032 6.82782 8.55603 6.62434 8.406 6.47431C8.25597 6.32428 8.05249 6.24 7.84032 6.24Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.5487 17.6H9.91992V16.96H19.5199V9.91998H12.4799V9.27998H19.5487C19.7089 9.27911 19.8629 9.34148 19.9773 9.45352C20.0918 9.56557 20.1574 9.71824 20.1599 9.87838V17.0016C20.1574 17.1617 20.0918 17.3144 19.9773 17.4264C19.8629 17.5385 19.7089 17.6008 19.5487 17.6V17.6Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.0398 14.56C10.7866 14.56 10.5391 14.4849 10.3286 14.3443C10.1181 14.2036 9.95408 14.0037 9.8572 13.7698C9.76032 13.5359 9.73497 13.2786 9.78436 13.0303C9.83375 12.782 9.95566 12.5539 10.1347 12.3749C10.3137 12.1959 10.5418 12.074 10.7901 12.0246C11.0383 11.9752 11.2957 12.0006 11.5296 12.0974C11.7635 12.1943 11.9634 12.3584 12.104 12.5689C12.2447 12.7794 12.3198 13.0268 12.3198 13.28C12.3198 13.6195 12.1849 13.9451 11.9449 14.1851C11.7048 14.4251 11.3792 14.56 11.0398 14.56ZM11.0398 12.64C10.9132 12.64 10.7894 12.6775 10.6842 12.7479C10.579 12.8182 10.4969 12.9181 10.4485 13.0351C10.4 13.152 10.3874 13.2807 10.4121 13.4049C10.4368 13.529 10.4977 13.643 10.5872 13.7326C10.6767 13.8221 10.7908 13.883 10.9149 13.9077C11.0391 13.9324 11.1677 13.9197 11.2847 13.8713C11.4016 13.8228 11.5016 13.7408 11.5719 13.6356C11.6422 13.5303 11.6798 13.4066 11.6798 13.28C11.6798 13.1103 11.6123 12.9475 11.4923 12.8275C11.3723 12.7074 11.2095 12.64 11.0398 12.64Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.24 14.56C13.9868 14.56 13.7393 14.4849 13.5288 14.3443C13.3183 14.2036 13.1543 14.0037 13.0574 13.7698C12.9605 13.5359 12.9352 13.2786 12.9846 13.0303C13.0339 12.782 13.1559 12.5539 13.3349 12.3749C13.5139 12.1959 13.7419 12.074 13.9902 12.0246C14.2385 11.9752 14.4959 12.0006 14.7298 12.0974C14.9637 12.1943 15.1636 12.3584 15.3042 12.5689C15.4449 12.7794 15.52 13.0268 15.52 13.28C15.52 13.6195 15.3851 13.9451 15.1451 14.1851C14.905 14.4251 14.5794 14.56 14.24 14.56ZM14.24 12.64C14.1134 12.64 13.9896 12.6775 13.8844 12.7479C13.7791 12.8182 13.6971 12.9181 13.6487 13.0351C13.6002 13.152 13.5876 13.2807 13.6123 13.4049C13.637 13.529 13.6979 13.643 13.7874 13.7326C13.8769 13.8221 13.991 13.883 14.1151 13.9077C14.2392 13.9324 14.3679 13.9197 14.4849 13.8713C14.6018 13.8228 14.7018 13.7408 14.7721 13.6356C14.8424 13.5303 14.88 13.4066 14.88 13.28C14.88 13.1103 14.8125 12.9475 14.6925 12.8275C14.5725 12.7074 14.4097 12.64 14.24 12.64Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.1599 15.36H9.91992V16H12.1599V15.36Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.3601 15.36H13.1201V16H15.3601V15.36Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.5603 15.36H16.3203V16H18.5603V15.36Z", fill: "white" })] })),
    rds: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3B48CC" }), jsxRuntimeExports.jsx("path", { d: "M15.504 9.03362C15.504 8.10562 13.6832 7.67682 11.984 7.67682C10.2848 7.67682 8.46402 8.10562 8.46402 9.03362C8.46285 9.08001 8.46824 9.12633 8.48002 9.17122V14.9472C8.46402 15.9072 10.288 16.3168 12 16.3168C13.712 16.3168 15.52 15.8944 15.52 14.9664V9.03362H15.504ZM11.9904 8.32002C13.856 8.32002 14.8704 8.82882 14.8704 9.03682C14.8704 9.24482 13.8624 9.75362 11.9904 9.75362C10.1184 9.75362 9.11042 9.24802 9.11042 9.03682C9.11042 8.82562 10.1248 8.32002 11.9904 8.32002ZM14.8704 14.9696C14.8704 15.1744 13.8592 15.68 11.9904 15.68C10.1216 15.68 9.11042 15.1744 9.11042 14.9696V13.9584C9.78562 14.3264 10.9184 14.5024 11.9904 14.5024C13.0624 14.5024 14.1856 14.3296 14.8704 13.968V14.9696ZM14.8704 13.1488C14.8704 13.3536 13.8624 13.8656 11.9904 13.8656C10.1184 13.8656 9.11042 13.3536 9.11042 13.1488V11.9264C9.78562 12.2912 10.9184 12.4672 11.9904 12.4672C13.0624 12.4672 14.1856 12.2944 14.8704 11.9328V13.1488ZM14.8704 11.1104C14.8704 11.3184 13.8624 11.8304 11.9904 11.8304C10.1184 11.8304 9.11042 11.3184 9.11042 11.1104V9.86242C9.79202 10.224 10.912 10.3904 11.9904 10.3904C13.0688 10.3904 14.2016 10.2176 14.8704 9.84962V11.1104Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M5.0912 19.3632H7.2V20.0033H4.32C4.23513 20.0033 4.15374 19.9695 4.09373 19.9095C4.03371 19.8495 4 19.7681 4 19.6833V16.8032H4.64V18.9057L7.04 16.5089L7.488 16.9601L5.0912 19.3632Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.9999 16.8032V19.6832C19.9999 19.7681 19.9662 19.8495 19.9062 19.9095C19.8462 19.9695 19.7648 20.0032 19.6799 20.0032H16.7999V19.3632H18.9087L16.5439 16.992L16.9951 16.544L19.3599 18.9056V16.8032H19.9999Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.9999 4.32324V7.20324H19.3599V5.09124L16.9951 7.45604L16.5439 7.00484L18.9055 4.64324H16.7999V4.00323H19.6799C19.7648 4.00323 19.8462 4.03695 19.9062 4.09696C19.9662 4.15697 19.9999 4.23837 19.9999 4.32324V4.32324Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.488 7.04003L7.04 7.48803L4.64 5.09123V7.19683H4V4.31683C4 4.23196 4.03371 4.15056 4.09373 4.09055C4.15374 4.03054 4.23513 3.99683 4.32 3.99683H7.2V4.63683H5.0912L7.488 7.04003Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.0918 14.8672C5.1366 14.1632 4.0166 13.088 4.0166 11.92C4.0166 10.752 5.1366 9.68004 7.0918 8.97284L7.3094 9.57444C5.6486 10.1728 4.6566 11.0496 4.6566 11.92C4.6566 12.7904 5.6486 13.6672 7.3094 14.2656L7.0918 14.8672Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.7302 14.9376L16.5254 14.3296C18.3014 13.7312 19.3606 12.8288 19.3606 11.92C19.3606 11.0112 18.3014 10.1088 16.5254 9.5072L16.7302 8.9024C18.807 9.6 20.0006 10.7072 20.0006 11.92C20.0006 13.1328 18.807 14.2336 16.7302 14.9376Z", fill: "white" })] })),
    ecs: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D86613" }), jsxRuntimeExports.jsx("path", { d: "M11.9329 20.6208C11.8733 20.622 11.8146 20.6065 11.7633 20.576L4.48015 16.3776C4.42849 16.3478 4.38561 16.3049 4.35583 16.2532C4.32605 16.2015 4.31043 16.1429 4.31055 16.0832V7.57761C4.31043 7.51796 4.32605 7.45933 4.35583 7.40765C4.38561 7.35596 4.42849 7.31304 4.48015 7.28321L11.1777 3.42401C11.2275 3.3892 11.2861 3.36927 11.3468 3.36653C11.4075 3.3638 11.4677 3.37839 11.5203 3.40859C11.573 3.43879 11.616 3.48336 11.6443 3.53709C11.6726 3.59081 11.685 3.65148 11.6801 3.71201V7.39521C11.6799 7.45237 11.6651 7.50853 11.6371 7.55836C11.6091 7.6082 11.5688 7.65007 11.5201 7.68001L8.16975 9.60001V14.0608L11.9425 16.24L15.2417 14.32C15.2904 14.2919 15.3456 14.2771 15.4017 14.2771C15.4579 14.2771 15.5131 14.2919 15.5617 14.32L18.7361 16.144C18.7878 16.1738 18.8307 16.2168 18.8605 16.2684C18.8902 16.3201 18.9059 16.3788 18.9057 16.4384C18.9074 16.4979 18.8923 16.5567 18.8624 16.6081C18.8324 16.6596 18.7887 16.7017 18.7361 16.7296L12.0961 20.5696C12.0474 20.6012 11.991 20.6189 11.9329 20.6208ZM4.96015 15.8528L12.1057 19.9776L18.2401 16.432L15.6801 14.9568L12.2785 16.9216C12.2253 16.9516 12.1652 16.9674 12.1041 16.9674C12.043 16.9674 11.983 16.9516 11.9297 16.9216L7.68015 14.4704C7.62874 14.4411 7.58598 14.3987 7.5562 14.3476C7.52642 14.2965 7.51067 14.2384 7.51055 14.1792V9.42721C7.50893 9.3677 7.52395 9.30892 7.55391 9.25748C7.58387 9.20603 7.62759 9.16397 7.68015 9.13601L11.0305 7.21601V4.27841L4.95055 7.79841L4.96015 15.8528Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.341 15.68C19.2817 15.6792 19.2234 15.6639 19.1714 15.6352L16.0002 13.8016C15.9477 13.7737 15.904 13.7316 15.874 13.6802C15.844 13.6287 15.829 13.5699 15.8306 13.5104V9.63523L12.4802 7.70243C12.4288 7.67312 12.3861 7.63076 12.3563 7.57963C12.3265 7.52849 12.3108 7.4704 12.3106 7.41123V3.72803C12.3093 3.66938 12.3241 3.6115 12.3535 3.56071C12.3828 3.50992 12.4256 3.46817 12.477 3.44003C12.5257 3.41194 12.5809 3.39716 12.637 3.39716C12.6932 3.39716 12.7484 3.41194 12.797 3.44003L19.5202 7.30243C19.5716 7.33173 19.6144 7.3741 19.6442 7.42523C19.674 7.47636 19.6897 7.53445 19.6898 7.59363V15.328C19.6899 15.3877 19.6743 15.4463 19.6445 15.498C19.6148 15.5497 19.5719 15.5926 19.5202 15.6224C19.4668 15.6575 19.4049 15.6775 19.341 15.68V15.68ZM16.4802 13.296L19.0402 14.768V7.80803L12.9602 4.28803V7.20963L16.3202 9.15523C16.3728 9.18319 16.4165 9.22525 16.4465 9.27669C16.4764 9.32814 16.4914 9.38692 16.4898 9.44643L16.4802 13.296Z", fill: "white" })] })),
    apigateway: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M15.5234 19.68C15.4556 19.6803 15.3895 19.659 15.3346 19.6192C15.2932 19.5898 15.2595 19.5509 15.2361 19.5059C15.2127 19.4608 15.2004 19.4108 15.2002 19.36V4.64004C15.2004 4.58536 15.2147 4.53165 15.2416 4.48403C15.2684 4.43641 15.3071 4.39648 15.3538 4.36804C15.401 4.33749 15.4555 4.31992 15.5116 4.31711C15.5678 4.3143 15.6238 4.32635 15.6738 4.35204L19.8338 6.38404C19.8872 6.41019 19.9322 6.45069 19.9639 6.50099C19.9955 6.55129 20.0125 6.60941 20.013 6.66884V17.9776C20.0164 18.0478 19.9967 18.1172 19.9568 18.175C19.9169 18.2329 19.859 18.2759 19.7922 18.2976L15.6322 19.68C15.5961 19.6853 15.5595 19.6853 15.5234 19.68ZM15.8434 5.15524V18.9152L19.3634 17.7472V6.86724L15.8434 5.15524Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.47946 19.68C8.44548 19.6847 8.41104 19.6847 8.37706 19.68L4.21706 18.2976C4.15082 18.2754 4.0937 18.232 4.05441 18.1743C4.01511 18.1165 3.99582 18.0474 3.99946 17.9776V6.66884C3.99993 6.60942 4.01695 6.55129 4.0486 6.50099C4.08025 6.45069 4.12529 6.41019 4.17866 6.38404L8.33866 4.35204C8.3887 4.32635 8.44462 4.3143 8.5008 4.31711C8.55698 4.31992 8.61143 4.33749 8.65866 4.36804C8.70477 4.39687 8.74278 4.43697 8.7691 4.48456C8.79541 4.53215 8.80917 4.58566 8.80906 4.64004V19.36C8.80882 19.4108 8.79651 19.4608 8.77314 19.5059C8.74977 19.5509 8.71602 19.5898 8.67466 19.6192C8.61869 19.6617 8.54963 19.6832 8.47946 19.68V19.68ZM4.63946 17.76L8.15946 18.928V5.16804L4.63946 6.88644V17.76Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.1995 8.80003H14.2395V8.16003H15.1995V8.80003ZM13.2795 8.80003H12.3195V8.16003H13.2795V8.80003ZM11.3595 8.80003H10.3995V8.16003H11.3595V8.80003ZM9.43949 8.80003H8.47949V8.16003H9.43949V8.80003Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.1995 15.84H14.2395V15.2H15.1995V15.84ZM13.2795 15.84H12.3195V15.2H13.2795V15.84ZM11.3595 15.84H10.3995V15.2H11.3595V15.84ZM9.43949 15.84H8.47949V15.2H9.43949V15.84Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M10.5945 13.1008L9.39132 12.0736C9.35619 12.0436 9.32799 12.0063 9.30865 11.9643C9.28931 11.9223 9.2793 11.8766 9.2793 11.8304C9.2793 11.7842 9.28931 11.7385 9.30865 11.6965C9.32799 11.6545 9.35619 11.6172 9.39132 11.5872L10.5913 10.56L11.0073 11.0464L10.0921 11.84L11.0073 12.624L10.5945 13.1008Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.4075 13.1008L12.9915 12.6144L13.9067 11.84L12.9883 11.0592L13.4043 10.56L14.6075 11.584C14.6426 11.614 14.6708 11.6513 14.6902 11.6933C14.7095 11.7353 14.7195 11.781 14.7195 11.8272C14.7195 11.8734 14.7095 11.9191 14.6902 11.9611C14.6708 12.0031 14.6426 12.0404 14.6075 12.0704L13.4075 13.1008Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3295 10.0136L11.0576 13.7756L11.6639 13.9806L12.9358 10.2185L12.3295 10.0136Z", fill: "white" })] })),
    ecr: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D86613" }), jsxRuntimeExports.jsx("path", { d: "M19.0404 9.61914V16.1631L13.2804 19.4911V17.0079L16.4804 15.1615C16.566 15.1134 16.6394 15.0463 16.6948 14.9653C16.7503 14.8842 16.7864 14.7915 16.8004 14.6943C16.8069 14.6113 16.8069 14.5278 16.8004 14.4447V10.8031L19.0404 9.52314V9.61914ZM19.4916 8.56314C19.4592 8.56253 19.4273 8.57024 19.3988 8.58554L16.3428 10.3519C16.2852 10.3839 16.1604 10.4415 16.1604 10.5151V14.4447C16.1638 14.4991 16.1638 14.5536 16.1604 14.6079L12.7364 16.5823C12.7082 16.5993 12.6849 16.6232 12.6686 16.6518C12.6524 16.6804 12.6438 16.7127 12.6436 16.7455V20.2655C12.6436 20.2903 12.6484 20.3149 12.6579 20.3378C12.6674 20.3607 12.6813 20.3815 12.6989 20.399C12.7164 20.4166 12.7372 20.4305 12.7601 20.44C12.783 20.4495 12.8076 20.4543 12.8324 20.4543C12.865 20.4538 12.8969 20.445 12.9252 20.4287L19.5908 16.5887C19.6189 16.5718 19.6422 16.5478 19.6585 16.5193C19.6747 16.4907 19.6834 16.4584 19.6836 16.4255V8.72634C19.6836 8.70169 19.6787 8.67729 19.6691 8.65456C19.6596 8.63184 19.6456 8.61123 19.6281 8.59395C19.6105 8.57668 19.5897 8.56307 19.5668 8.55394C19.5439 8.5448 19.5194 8.54031 19.4948 8.54074L19.4916 8.56314Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.4947 20.7808C11.406 20.7809 11.3188 20.7577 11.2419 20.7136L4.57311 16.8736C4.49617 16.8291 4.4323 16.7652 4.38792 16.6883C4.34354 16.6113 4.32022 16.524 4.32031 16.4352V7.95836C4.32022 7.86952 4.34354 7.78222 4.38792 7.70526C4.4323 7.62829 4.49617 7.56438 4.57311 7.51996L11.9075 3.28636C11.9845 3.24074 12.0724 3.21667 12.1619 3.21667C12.2514 3.21667 12.3393 3.24074 12.4163 3.28636L19.0819 7.12636C19.1586 7.17103 19.2223 7.23499 19.2667 7.3119C19.311 7.38881 19.3345 7.47598 19.3347 7.56476C19.3344 7.65395 19.311 7.74154 19.2666 7.81895C19.2223 7.89636 19.1587 7.96093 19.0819 8.00636L12.0003 12.1024V20.2752C12.0011 20.3641 11.978 20.4517 11.9336 20.5288C11.8891 20.6058 11.8249 20.6696 11.7475 20.7136C11.6706 20.7577 11.5834 20.7809 11.4947 20.7808V20.7808ZM4.96031 16.3488L11.3603 20.0416V12.0256C11.3603 11.9363 11.3836 11.8486 11.428 11.7711C11.4723 11.6937 11.5361 11.6291 11.6131 11.584L18.5603 7.57756L12.1603 3.88156L4.96351 8.04156L4.96031 16.3488Z", fill: "white" })] })),
    sns: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#CC2264" }), jsxRuntimeExports.jsx("path", { d: "M17.4658 16.2944V16.56C17.4658 16.528 17.4658 16.496 17.4658 16.464C17.4593 16.4077 17.4593 16.3508 17.4658 16.2944V16.2944Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.2634 9.92001L13.2314 9.98081C13.2443 9.96107 13.254 9.93949 13.2602 9.91681L13.2634 9.92001Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M10.4895 8.80962C10.2047 8.80962 7.68953 8.78722 7.68953 9.73762C7.68843 9.79782 7.69931 9.85765 7.72153 9.91362C7.73088 9.93662 7.74157 9.95906 7.75353 9.98082L9.49433 13.8208V15.808C9.49433 16.0096 9.57753 16.128 9.75353 16.128H9.83673C10.239 16.0227 10.6129 15.8293 10.9311 15.5616L11.1455 15.4112C11.1912 15.3827 11.2289 15.3431 11.2552 15.2961C11.2815 15.2491 11.2955 15.1963 11.2959 15.1424V13.8304L13.2319 9.99041C13.2447 9.97068 13.2545 9.94909 13.2607 9.92642C13.283 9.87045 13.2938 9.81062 13.2927 9.75041C13.2927 8.78722 10.7775 8.80962 10.4895 8.80962ZM10.4895 9.39842C11.6191 9.39842 12.3455 9.59682 12.5887 9.73762C12.3455 9.87842 11.6287 10.0768 10.4895 10.0768C9.35033 10.0768 8.63673 9.87842 8.39353 9.73762C8.63993 9.60002 9.35993 9.39842 10.4895 9.39842ZM10.7231 13.5584C10.7231 13.6032 10.7231 13.6832 10.7231 13.7664V15.0176L10.5983 15.0944C10.4159 15.2 10.2559 15.2736 10.0735 15.3696V13.76C10.0728 13.7162 10.0641 13.6728 10.0479 13.632L8.68473 10.5152C9.27725 10.6472 9.88248 10.7138 10.4895 10.7136C11.0789 10.7132 11.6667 10.651 12.2431 10.528L10.7231 13.5584Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.3199 17.6544C15.0673 18.561 13.559 19.0462 12.0127 19.04C8.53109 19.04 5.56149 16.7776 4.86389 13.44C5.17809 13.425 5.47881 13.3079 5.72026 13.1063C5.96172 12.9047 6.1307 12.6297 6.20149 12.3232H7.83349V11.7184H6.20789C6.14617 11.4037 5.98096 11.1188 5.73857 10.9089C5.49618 10.6989 5.19054 10.5761 4.87029 10.56C5.15557 9.40304 5.71749 8.33265 6.50777 7.44081C7.29806 6.54897 8.29307 5.86234 9.40729 5.43995C10.5215 5.01755 11.7217 4.872 12.9045 5.01582C14.0874 5.15963 15.2177 5.58851 16.1983 6.2656L16.5631 5.76C15.4777 5.01006 14.2238 4.54017 12.9129 4.39218C11.602 4.24418 10.2748 4.42267 9.04958 4.91175C7.82435 5.40082 6.73908 6.18531 5.89043 7.19534C5.04178 8.20538 4.45608 9.40961 4.18549 10.7008C3.93732 10.8158 3.72722 10.9993 3.57997 11.2298C3.43273 11.4603 3.35449 11.7281 3.35449 12.0016C3.35449 12.2751 3.43273 12.5429 3.57997 12.7734C3.72722 13.0039 3.93732 13.1874 4.18549 13.3024C4.55842 15.1031 5.54032 16.7203 6.96593 17.8819C8.39153 19.0435 10.1738 19.6785 12.0127 19.68C13.6881 19.6833 15.3215 19.1557 16.6783 18.1728L16.3199 17.6544ZM3.99989 12C3.99847 11.8035 4.06945 11.6133 4.1993 11.4657C4.32914 11.3182 4.50876 11.2236 4.70389 11.2H4.79989C4.95825 11.1994 5.11324 11.2457 5.24522 11.3333C5.3772 11.4208 5.48023 11.5455 5.54127 11.6916C5.60231 11.8377 5.61861 11.9987 5.58811 12.1541C5.5576 12.3095 5.48166 12.4523 5.36991 12.5645C5.25815 12.6767 5.11562 12.7533 4.96034 12.7844C4.80507 12.8155 4.64406 12.7999 4.49769 12.7394C4.35132 12.6789 4.22619 12.5764 4.13814 12.4448C4.05009 12.3132 4.00309 12.1584 4.00309 12H3.99989Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.1994 13.44C19.4715 13.4402 19.7381 13.3632 19.9682 13.2181C20.1984 13.073 20.3828 12.8657 20.4999 12.6201C20.6171 12.3746 20.6623 12.1008 20.6303 11.8306C20.5983 11.5604 20.4904 11.3048 20.3191 11.0934C20.1478 10.882 19.9201 10.7235 19.6624 10.6362C19.4047 10.5488 19.1276 10.5363 18.863 10.6001C18.5985 10.6638 18.3575 10.8011 18.1678 10.9962C17.9781 11.1913 17.8476 11.4362 17.7914 11.7024H16.1274V7.74399H16.9914C17.0381 8.10044 17.2165 8.4265 17.4915 8.65809C17.7665 8.88968 18.1181 9.01005 18.4773 8.99553C18.8365 8.98101 19.1773 8.83266 19.4327 8.57964C19.688 8.32662 19.8395 7.98722 19.8574 7.62817C19.8752 7.26912 19.7581 6.91637 19.5291 6.63928C19.3001 6.36219 18.9757 6.18078 18.6197 6.13073C18.2637 6.08068 17.9018 6.16559 17.6053 6.36878C17.3087 6.57197 17.0989 6.87874 17.017 7.22879L15.8394 7.21279C15.7989 7.20417 15.7569 7.20514 15.7169 7.21563C15.6768 7.22611 15.6397 7.24582 15.6086 7.27318C15.5775 7.30055 15.5533 7.3348 15.5378 7.37321C15.5223 7.41162 15.516 7.45312 15.5194 7.49439V11.6928H13.0586V12.2848H15.5194V16.4704C15.5194 16.5553 15.5531 16.6367 15.6131 16.6967C15.6731 16.7567 15.7545 16.7904 15.8394 16.7904H16.8442C16.9145 17.1407 17.1124 17.4524 17.3997 17.6648C17.6869 17.8773 18.0428 17.9755 18.3984 17.9401C18.7539 17.9048 19.0836 17.7386 19.3234 17.4738C19.5633 17.209 19.6961 16.8645 19.6961 16.5072C19.6961 16.1499 19.5633 15.8054 19.3234 15.5406C19.0836 15.2758 18.7539 15.1095 18.3984 15.0742C18.0428 15.0389 17.6869 15.1371 17.3997 15.3495C17.1124 15.562 16.9145 15.8737 16.8442 16.224H16.1466L16.1306 12.2816H17.7914C17.8569 12.6072 18.0328 12.9003 18.2893 13.1113C18.5458 13.3223 18.8672 13.4384 19.1994 13.44V13.44ZM19.1994 11.2C19.3576 11.2 19.5123 11.2469 19.6438 11.3348C19.7754 11.4227 19.8779 11.5477 19.9385 11.6938C19.999 11.84 20.0149 12.0009 19.984 12.1561C19.9532 12.3113 19.877 12.4538 19.7651 12.5657C19.6532 12.6776 19.5106 12.7538 19.3555 12.7846C19.2003 12.8155 19.0394 12.7996 18.8932 12.7391C18.7471 12.6785 18.6221 12.576 18.5342 12.4445C18.4463 12.3129 18.3994 12.1582 18.3994 12C18.3994 11.7878 18.4837 11.5843 18.6337 11.4343C18.7837 11.2843 18.9872 11.2 19.1994 11.2ZM18.3994 6.74879C18.5571 6.74943 18.7111 6.79687 18.8419 6.88509C18.9726 6.97332 19.0742 7.09836 19.1338 7.24438C19.1935 7.39041 19.2084 7.55084 19.1768 7.70536C19.1452 7.85989 19.0684 8.00155 18.9562 8.1124C18.844 8.22326 18.7014 8.29832 18.5465 8.32808C18.3916 8.35784 18.2314 8.34096 18.0861 8.27957C17.9408 8.21819 17.817 8.11507 17.7303 7.98327C17.6437 7.85147 17.5981 7.69692 17.5994 7.53919C17.5994 7.43402 17.6202 7.32988 17.6607 7.23279C17.7011 7.1357 17.7604 7.04757 17.835 6.9735C17.9097 6.89942 17.9983 6.84087 18.0957 6.8012C18.1931 6.76154 18.2974 6.74155 18.4026 6.74239L18.3994 6.74879ZM18.2394 15.68C18.3935 15.6793 18.5446 15.7232 18.6744 15.8064C18.8041 15.8895 18.9072 16.0084 18.971 16.1487C19.0348 16.289 19.0568 16.4447 19.0342 16.5972C19.0116 16.7497 18.9454 16.8924 18.8437 17.0082C18.7419 17.1239 18.6089 17.2078 18.4606 17.2498C18.3122 17.2917 18.155 17.29 18.0076 17.2446C17.8603 17.1993 17.7292 17.1124 17.6301 16.9944C17.531 16.8763 17.4681 16.7321 17.449 16.5792V16.5792C17.449 16.5472 17.449 16.5152 17.449 16.4832C17.4489 16.4261 17.4553 16.3692 17.4682 16.3136V16.3136C17.5064 16.1365 17.6034 15.9775 17.7434 15.8625C17.8834 15.7474 18.0582 15.6831 18.2394 15.68V15.68Z", fill: "white" })] })),
    redshift: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3B48CC" }), jsxRuntimeExports.jsx("path", { d: "M11.9996 20C9.36277 20 6.55957 19.2352 6.55957 17.8176V6.18237H7.19957V17.8176C7.19957 18.4576 9.02677 19.36 11.9996 19.36C14.9724 19.36 16.7996 18.464 16.7996 17.8176V6.18237H17.4396V17.8176C17.4396 19.2352 14.6364 20 11.9996 20Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.9996 20C9.36277 20 6.55957 19.2352 6.55957 17.8176V6.18237H7.19957V17.8176C7.19957 18.4576 9.02677 19.36 11.9996 19.36C14.9724 19.36 16.7996 18.464 16.7996 17.8176V6.18237H17.4396V17.8176C17.4396 19.2352 14.6364 20 11.9996 20Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.9996 8.3616C9.36277 8.3616 6.55957 7.5968 6.55957 6.1824C6.55957 4.768 9.36277 4 11.9996 4C14.6364 4 17.4396 4.7648 17.4396 6.1824C17.4396 7.6 14.6364 8.3616 11.9996 8.3616ZM11.9996 4.64C9.02677 4.64 7.19957 5.536 7.19957 6.1824C7.19957 6.8288 9.02677 7.7216 11.9996 7.7216C14.9724 7.7216 16.7996 6.8256 16.7996 6.1824C16.7996 5.5392 14.9724 4.64 11.9996 4.64V4.64Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.0931 12.6264L10.9512 13.2505L12.892 13.6918L13.0339 13.0677L11.0931 12.6264Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.5351 10.7146L13.7949 12.5898L14.3902 12.8248L15.1304 10.9496L14.5351 10.7146Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.63358 13.3776L8.98047 14.9081L9.56911 15.1593L10.2222 13.6288L9.63358 13.3776Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.95984 16.8864C8.73833 16.8864 8.52179 16.8207 8.33761 16.6976C8.15342 16.5745 8.00987 16.3996 7.9251 16.195C7.84033 15.9903 7.81815 15.7651 7.86136 15.5479C7.90458 15.3306 8.01125 15.131 8.16788 14.9744C8.32452 14.8178 8.52408 14.7111 8.74134 14.6679C8.9586 14.6247 9.1838 14.6468 9.38845 14.7316C9.5931 14.8164 9.76802 14.9599 9.89109 15.1441C10.0142 15.3283 10.0798 15.5448 10.0798 15.7664C10.0798 16.0634 9.96184 16.3483 9.7518 16.5583C9.54176 16.7684 9.25689 16.8864 8.95984 16.8864V16.8864ZM8.95984 15.2864C8.86491 15.2864 8.77211 15.3145 8.69317 15.3673C8.61423 15.42 8.55271 15.495 8.51638 15.5827C8.48005 15.6704 8.47055 15.7669 8.48907 15.86C8.50759 15.9531 8.5533 16.0386 8.62043 16.1058C8.68756 16.1729 8.77309 16.2186 8.8662 16.2371C8.95931 16.2557 9.05582 16.2462 9.14353 16.2098C9.23124 16.1735 9.3062 16.112 9.35895 16.033C9.41169 15.9541 9.43984 15.8613 9.43984 15.7664C9.43984 15.6391 9.38927 15.517 9.29925 15.427C9.20924 15.3369 9.08715 15.2864 8.95984 15.2864V15.2864Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M10.2391 13.8848C10.0176 13.8848 9.80109 13.8191 9.6169 13.696C9.43272 13.573 9.28917 13.398 9.2044 13.1934C9.11963 12.9887 9.09745 12.7635 9.14066 12.5463C9.18388 12.329 9.29055 12.1295 9.44718 11.9728C9.60382 11.8162 9.80338 11.7095 10.0206 11.6663C10.2379 11.6231 10.4631 11.6453 10.6677 11.73C10.8724 11.8148 11.0473 11.9584 11.1704 12.1425C11.2935 12.3267 11.3591 12.5433 11.3591 12.7648C11.3591 13.0618 11.2411 13.3467 11.0311 13.5567C10.8211 13.7668 10.5362 13.8848 10.2391 13.8848ZM10.2391 12.2848C10.1442 12.2848 10.0514 12.3129 9.97247 12.3657C9.89353 12.4184 9.83201 12.4934 9.79568 12.5811C9.75935 12.6688 9.74984 12.7653 9.76836 12.8584C9.78689 12.9515 9.8326 13.0371 9.89973 13.1042C9.96686 13.1713 10.0524 13.217 10.1455 13.2356C10.2386 13.2541 10.3351 13.2446 10.4228 13.2082C10.5105 13.1719 10.5855 13.1104 10.6382 13.0314C10.691 12.9525 10.7191 12.8597 10.7191 12.7648C10.7191 12.6375 10.6686 12.5154 10.5786 12.4254C10.4885 12.3353 10.3664 12.2848 10.2391 12.2848V12.2848Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.7596 14.56C13.5381 14.56 13.3216 14.4943 13.1374 14.3713C12.9532 14.2482 12.8097 14.0733 12.7249 13.8686C12.6401 13.664 12.618 13.4388 12.6612 13.2215C12.7044 13.0042 12.8111 12.8047 12.9677 12.648C13.1243 12.4914 13.3239 12.3847 13.5411 12.3415C13.7584 12.2983 13.9836 12.3205 14.1883 12.4053C14.3929 12.49 14.5678 12.6336 14.6909 12.8178C14.814 13.002 14.8796 13.2185 14.8796 13.44C14.8796 13.7371 14.7616 14.0219 14.5516 14.232C14.3416 14.442 14.0567 14.56 13.7596 14.56V14.56ZM13.7596 12.96C13.6647 12.96 13.5719 12.9882 13.493 13.0409C13.414 13.0936 13.3525 13.1686 13.3162 13.2563C13.2799 13.344 13.2704 13.4405 13.2889 13.5337C13.3074 13.6268 13.3531 13.7123 13.4202 13.7794C13.4874 13.8465 13.5729 13.8923 13.666 13.9108C13.7591 13.9293 13.8556 13.9198 13.9433 13.8835C14.031 13.8471 14.106 13.7856 14.1588 13.7067C14.2115 13.6277 14.2396 13.5349 14.2396 13.44C14.2396 13.3127 14.1891 13.1906 14.0991 13.1006C14.009 13.0106 13.887 12.96 13.7596 12.96Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.0399 11.2C14.8184 11.2 14.6019 11.1343 14.4177 11.0113C14.2335 10.8882 14.0899 10.7133 14.0052 10.5086C13.9204 10.304 13.8982 10.0788 13.9414 9.86152C13.9847 9.64426 14.0913 9.4447 14.248 9.28806C14.4046 9.13143 14.6042 9.02476 14.8214 8.98154C15.0387 8.93833 15.2639 8.96051 15.4685 9.04528C15.6732 9.13005 15.8481 9.2736 15.9712 9.45778C16.0942 9.64197 16.1599 9.85851 16.1599 10.08V10.096C16.1549 10.39 16.0348 10.6703 15.8254 10.8767C15.616 11.0832 15.334 11.1992 15.0399 11.2ZM15.0399 9.60002C14.9457 9.60007 14.8535 9.62787 14.775 9.67994C14.6964 9.73201 14.6349 9.80605 14.5982 9.89283C14.5614 9.97961 14.551 10.0753 14.5683 10.1679C14.5856 10.2606 14.6297 10.3461 14.6953 10.4138C14.7608 10.4815 14.8448 10.5285 14.9369 10.5488C15.0289 10.5691 15.1249 10.5618 15.2128 10.5279C15.3007 10.494 15.3767 10.435 15.4314 10.3582C15.486 10.2814 15.5168 10.1902 15.5199 10.096C15.5221 10.0317 15.5112 9.96751 15.4881 9.90742C15.4649 9.84732 15.4299 9.7925 15.3851 9.74622C15.3403 9.69994 15.2867 9.66314 15.2274 9.63803C15.1681 9.61291 15.1043 9.59999 15.0399 9.60002Z", fill: "white" })] })),
    appsync: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M12.0354 19.2736C10.8155 19.2731 9.61556 18.9638 8.54744 18.3744L8.86744 17.8144C10.1487 18.5157 11.626 18.7736 13.0691 18.5479C14.5122 18.3222 15.8402 17.6256 16.8462 16.5666C17.8523 15.5077 18.4799 14.1457 18.6313 12.6929C18.7827 11.2402 18.4495 9.77807 17.6834 8.5344L17.3634 10.1344L16.7234 10.0096L17.1874 7.68C17.2037 7.5969 17.2522 7.52363 17.3224 7.47625C17.3926 7.42886 17.4787 7.41122 17.5618 7.42719L19.9106 7.8912L19.7858 8.53119L18.2178 8.21119C18.8906 9.31177 19.2585 10.5715 19.2837 11.8612C19.3089 13.1509 18.9905 14.4241 18.3612 15.5501C17.7319 16.6761 16.8144 17.6144 15.7027 18.2688C14.5911 18.9231 13.3254 19.2699 12.0354 19.2736V19.2736ZM6.48984 16.4832C6.46327 16.4863 6.43642 16.4863 6.40984 16.4832L4.08984 15.9008L4.24664 15.28L5.73784 15.6544C4.93802 14.2837 4.60931 12.6887 4.80201 11.1134C4.99471 9.53819 5.6982 8.06945 6.80484 6.93196C7.91148 5.79447 9.36032 5.05087 10.9297 4.81494C12.499 4.57902 14.1025 4.86376 15.4946 5.6256L15.1746 6.1856C13.8982 5.49478 12.4302 5.24253 10.9964 5.46765C9.56257 5.69276 8.24246 6.38278 7.23917 7.43153C6.23587 8.48028 5.60499 9.82965 5.44358 11.272C5.28217 12.7144 5.59919 14.1698 6.34584 15.4144L6.76184 13.76L7.38264 13.9136L6.80024 16.2336C6.78433 16.3042 6.74498 16.3672 6.68861 16.4126C6.63224 16.4579 6.56218 16.4828 6.48984 16.4832ZM14.5666 15.104C14.283 15.1038 14.0075 15.0094 13.7834 14.8356C13.5592 14.6619 13.3991 14.4186 13.3282 14.144H10.6882C10.6284 14.3757 10.5048 14.586 10.3315 14.751C10.1582 14.916 9.9421 15.0292 9.70773 15.0775C9.47337 15.1259 9.23013 15.1077 9.00563 15.0248C8.78113 14.9419 8.58436 14.7978 8.43765 14.6087C8.29094 14.4197 8.20016 14.1933 8.17563 13.9552C8.1511 13.7172 8.19379 13.477 8.29886 13.262C8.40394 13.047 8.56718 12.8657 8.77006 12.7388C8.97294 12.6119 9.20734 12.5444 9.44664 12.544C9.5633 12.5439 9.67948 12.5589 9.79224 12.5888L11.1298 10.272C10.9438 10.0959 10.8149 9.86804 10.7598 9.6179C10.7047 9.36775 10.7259 9.10683 10.8207 8.86887C10.9155 8.6309 11.0795 8.42685 11.2915 8.28309C11.5034 8.13933 11.7537 8.06248 12.0098 8.06248C12.266 8.06248 12.5162 8.13933 12.7282 8.28309C12.9402 8.42685 13.1042 8.6309 13.199 8.86887C13.2938 9.10683 13.315 9.36775 13.2599 9.6179C13.2047 9.86804 13.0759 10.0959 12.8898 10.272L14.2274 12.5888C14.3381 12.5594 14.4521 12.5443 14.5666 12.544C14.9061 12.544 15.2317 12.6789 15.4717 12.9189C15.7118 13.1589 15.8466 13.4845 15.8466 13.824C15.8466 14.1635 15.7118 14.489 15.4717 14.7291C15.2317 14.9691 14.9061 15.104 14.5666 15.104ZM14.5666 13.184C14.4401 13.184 14.3163 13.2215 14.2111 13.2919C14.1058 13.3622 14.0238 13.4621 13.9754 13.5791C13.9269 13.696 13.9142 13.8247 13.9389 13.9489C13.9636 14.073 14.0246 14.187 14.1141 14.2765C14.2036 14.366 14.3176 14.427 14.4418 14.4517C14.5659 14.4764 14.6946 14.4637 14.8116 14.4153C14.9285 14.3668 15.0285 14.2848 15.0988 14.1796C15.1691 14.0743 15.2066 13.9506 15.2066 13.824C15.2066 13.6543 15.1392 13.4915 15.0192 13.3714C14.8992 13.2514 14.7364 13.184 14.5666 13.184ZM9.44664 13.184C9.32006 13.184 9.19633 13.2215 9.09108 13.2919C8.98583 13.3622 8.9038 13.4621 8.85536 13.5791C8.80692 13.696 8.79425 13.8247 8.81894 13.9489C8.84364 14.073 8.90459 14.187 8.9941 14.2765C9.0836 14.366 9.19764 14.427 9.32179 14.4517C9.44593 14.4764 9.57462 14.4637 9.69156 14.4153C9.80851 14.3668 9.90846 14.2848 9.97878 14.1796C10.0491 14.0743 10.0866 13.9506 10.0866 13.824C10.0866 13.7399 10.0701 13.6567 10.0379 13.5791C10.0058 13.5014 9.95862 13.4309 9.89919 13.3714C9.83976 13.312 9.76921 13.2649 9.69156 13.2327C9.61391 13.2005 9.53069 13.184 9.44664 13.184V13.184ZM10.6882 13.504H13.3282C13.3864 13.2766 13.506 13.0696 13.6738 12.9056L12.3298 10.5792C12.12 10.6334 11.8997 10.6334 11.6898 10.5792L10.349 12.9088C10.5146 13.0736 10.6319 13.2805 10.6882 13.5072V13.504ZM12.0066 8.704C11.8801 8.704 11.7563 8.74153 11.6511 8.81185C11.5458 8.88218 11.4638 8.98213 11.4154 9.09908C11.3669 9.21602 11.3542 9.34471 11.3789 9.46885C11.4036 9.593 11.4646 9.70704 11.5541 9.79654C11.6436 9.88605 11.7576 9.947 11.8818 9.9717C12.0059 9.99639 12.1346 9.98372 12.2516 9.93528C12.3685 9.88684 12.4685 9.80481 12.5388 9.69956C12.6091 9.59431 12.6466 9.47058 12.6466 9.344C12.6466 9.17426 12.5792 9.01147 12.4592 8.89145C12.3392 8.77142 12.1764 8.704 12.0066 8.704Z", fill: "white" })] })),
    waf: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M16.0805 15.6159L15.6279 16.0684L19.4542 19.8947L19.9068 19.4422L16.0805 15.6159Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M4.54825 4.08285L4.0957 4.5354L8.33608 8.77578L8.78863 8.32323L4.54825 4.08285Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.29578 16.2533L5.05566 18.4934L5.50821 18.946L7.74833 16.7058L7.29578 16.2533Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.495 5.05407L16.2549 7.29419L16.7074 7.74674L18.9475 5.50662L18.495 5.05407Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.0006 11.68V12.32H19.3606C19.3023 13.7616 18.8179 15.1536 17.9686 16.32L17.4502 15.9424C18.2185 14.8857 18.6572 13.6254 18.711 12.32H18.071V11.68H18.711C18.6553 10.3779 18.2167 9.12121 17.4502 8.06719L17.9686 7.67999C18.8156 8.84709 19.2978 10.239 19.3542 11.68H20.0006Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.3197 6.03201L15.9421 6.55041C14.8854 5.7821 13.6251 5.34344 12.3197 5.28961V5.92961H11.6797V5.28961C10.3776 5.34532 9.1209 5.78388 8.06689 6.55041L7.67969 6.03201C8.84679 5.18499 10.2387 4.70282 11.6797 4.64641V4.00641H12.3197V4.64641C13.7607 4.70282 15.1526 5.18499 16.3197 6.03201V6.03201Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.3197 17.968C15.1526 18.815 13.7607 19.2972 12.3197 19.3536V19.9936H11.6797V19.3536C10.2387 19.2972 8.84679 18.815 7.67969 17.968L8.05729 17.4496C9.11399 18.2179 10.3743 18.6565 11.6797 18.7104V18.0704H12.3197V18.7104C13.6218 18.6547 14.8785 18.2161 15.9325 17.4496L16.3197 17.968Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M5.29004 12.32C5.34574 13.6221 5.78431 14.8788 6.55084 15.9328L6.03244 16.32C5.18541 15.1529 4.70325 13.761 4.64684 12.32H4.00684V11.68H4.64684C4.70325 10.239 5.18541 8.84709 6.03244 7.67999L6.55084 8.05759C5.78253 9.1143 5.34387 10.3746 5.29004 11.68H5.93004V12.32H5.29004Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.8934 9.98082C14.8471 9.95617 14.7955 9.94327 14.743 9.94327C14.6906 9.94327 14.6389 9.95617 14.5926 9.98082C14.5454 10.0049 14.5049 10.0403 14.4748 10.0838C14.4446 10.1274 14.4257 10.1778 14.4198 10.2304C14.4002 10.4255 14.367 10.6191 14.3206 10.8096C14.2456 10.035 13.9701 9.29327 13.5212 8.65752C13.0723 8.02178 12.4655 7.51393 11.7606 7.18402C11.3282 6.85398 10.8219 6.63431 10.2854 6.54402C10.2163 6.53251 10.1453 6.544 10.0834 6.57675C10.0214 6.60949 9.9719 6.66166 9.94246 6.72526C9.91303 6.78886 9.90528 6.86036 9.92042 6.92878C9.93555 6.99721 9.97273 7.05877 10.0262 7.10402C10.3603 7.43077 10.6053 7.83746 10.738 8.28549C10.8708 8.73353 10.8868 9.20805 10.7846 9.66402C10.4134 9.17442 9.82464 8.58882 9.12704 8.58882C9.07545 8.58891 9.02464 8.60146 8.97896 8.62542C8.93327 8.64938 8.89405 8.68403 8.86464 8.72642C8.83493 8.76939 8.81619 8.81897 8.81005 8.87085C8.80391 8.92272 8.81057 8.97531 8.82944 9.02402C9.01504 9.50082 9.38304 10.9248 8.85824 11.7504C8.82304 11.8016 8.79424 11.8528 8.76224 11.9072C8.41272 12.545 8.31055 13.2893 8.47526 13.9977C8.63997 14.7061 9.06 15.329 9.65504 15.7472C10.2799 16.1703 10.9577 16.5092 11.671 16.7552C11.7059 16.7679 11.7427 16.7744 11.7798 16.7744H11.847C12.2726 16.736 15.1686 16.3616 15.7606 14.064C16.5798 10.944 14.9638 10.0192 14.8934 9.98082ZM11.3094 15.936C10.8611 15.7457 10.4324 15.512 10.0294 15.2384C9.56181 14.9113 9.23159 14.4229 9.10223 13.8671C8.97287 13.3112 9.05351 12.7272 9.32864 12.2272L9.40544 12.096C9.94624 11.2512 9.78944 10.0992 9.61984 9.40162C10.0386 9.72288 10.3852 10.1284 10.6374 10.592C10.665 10.6486 10.7087 10.6958 10.7629 10.7277C10.8172 10.7596 10.8796 10.7748 10.9425 10.7713C11.0053 10.7679 11.0657 10.7461 11.1162 10.7085C11.1667 10.6709 11.205 10.6192 11.2262 10.56C11.4222 10.0759 11.5144 9.55597 11.4967 9.03395C11.4791 8.51193 11.3521 7.99944 11.1238 7.52962C11.5303 7.76508 11.8551 8.11898 12.055 8.54402C12.5094 9.48482 12.407 10.784 11.7926 11.9072C11.1615 13.1511 10.9903 14.5781 11.3094 15.936ZM15.1494 13.9104C14.7302 15.5424 12.7302 16.0032 12.0134 16.1152C11.8406 15.4944 11.4982 13.76 12.3526 12.1984C12.9501 11.1575 13.1189 9.92482 12.823 8.76162C13.4022 9.44002 13.8886 10.512 13.6294 12.1184C13.6194 12.1824 13.629 12.248 13.657 12.3064C13.685 12.3648 13.7301 12.4133 13.7862 12.4456C13.8424 12.4778 13.9071 12.4923 13.9716 12.487C14.0362 12.4817 14.0976 12.457 14.1478 12.416C14.5648 12.0112 14.8455 11.4867 14.951 10.9152C15.2582 11.36 15.5782 12.2592 15.1526 13.9104H15.1494Z", fill: "white" })] })),
    secretsmanager: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M16.0785 15.6336L15.626 16.0861L19.4523 19.9124L19.9048 19.4599L16.0785 15.6336Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M4.54532 4.09738L4.09277 4.54993L8.33315 8.7903L8.7857 8.33776L4.54532 4.09738Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.29285 16.271L5.05273 18.5111L5.50528 18.9637L7.7454 16.7235L7.29285 16.271Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.493 5.0686L16.2529 7.30872L16.7055 7.76126L18.9456 5.52115L18.493 5.0686Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.3468 11.6864C19.2872 10.253 18.8076 8.86869 17.9676 7.70563L17.4492 8.08323C18.2101 9.13631 18.6472 10.3886 18.7068 11.6864H18.0668V12.3264H18.7068C18.6539 13.6315 18.2164 14.8918 17.4492 15.9488L17.9676 16.32C18.8137 15.1529 19.2938 13.7606 19.3468 12.32H19.9868V11.68L19.3468 11.6864Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.06689 6.56641C9.12189 5.80221 10.3782 5.3649 11.6797 5.30881V5.92641H12.3197V5.30881C13.6212 5.3649 14.8775 5.80221 15.9325 6.56641L16.3197 6.04801C15.1518 5.20344 13.7599 4.72354 12.3197 4.66881V4.00641H11.6797V4.66881C10.2394 4.72354 8.84761 5.20344 7.67969 6.04801L8.06689 6.56641Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.9325 17.4656C14.8775 18.2298 13.6212 18.6671 12.3197 18.7232V18.0832H11.6797V18.7232C10.3782 18.6671 9.12189 18.2298 8.06689 17.4656L7.67969 17.984C8.84761 18.8286 10.2394 19.3085 11.6797 19.3632V20.0032H12.3197V19.3632C13.7599 19.3085 15.1518 18.8286 16.3197 17.984L15.9325 17.4656Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.0319 16.32L6.5503 15.9424C5.78313 14.8853 5.3456 13.6251 5.2927 12.32H5.9327V11.68H5.2927C5.35231 10.3822 5.78937 9.12991 6.5503 8.07682L6.0319 7.69922C5.19191 8.86228 4.7123 10.2466 4.6527 11.68H4.0127V12.32H4.6527C4.70571 13.7606 5.18577 15.1529 6.0319 16.32V16.32Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.5646 7.75998C13.1255 7.39521 12.5707 7.19893 11.9998 7.20638V7.20638C10.7646 7.20638 9.75981 8.07998 9.75981 9.15518V10.7264H9.11981C9.03494 10.7264 8.95355 10.7601 8.89354 10.8201C8.83352 10.8801 8.79981 10.9615 8.79981 11.0464V15.5264C8.79957 15.5685 8.80764 15.6102 8.82356 15.6492C8.83949 15.6882 8.86295 15.7237 8.89261 15.7536C8.92251 15.7832 8.95797 15.8067 8.99696 15.8226C9.03595 15.8386 9.0777 15.8466 9.11981 15.8464H14.8798C14.9647 15.8464 15.0461 15.8127 15.1061 15.7527C15.1661 15.6926 15.1998 15.6112 15.1998 15.5264V11.0464C15.1995 10.9624 15.1661 10.882 15.107 10.8224C15.0774 10.7921 15.042 10.7681 15.003 10.7516C14.964 10.7351 14.9221 10.7266 14.8798 10.7264H14.2398V9.15838C14.2369 8.89001 14.1749 8.62558 14.0582 8.38388C13.9415 8.14219 13.7729 7.92918 13.5646 7.75998V7.75998ZM10.3998 9.15518C10.3998 8.43198 11.1198 7.84638 11.9998 7.84638C12.419 7.83957 12.8271 7.98126 13.1518 8.24638C13.2891 8.35621 13.4006 8.49477 13.4786 8.65234C13.5565 8.8099 13.599 8.98263 13.603 9.15838V10.7264H10.403L10.3998 9.15518ZM14.5598 12.3264H13.5998V12.9664H14.5598V13.6064H13.5998V14.2464H14.5598V15.2064H9.43981V11.3664H14.5598V12.3264Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.6801 13.6832V14.5664H12.3201V13.6832C12.5274 13.608 12.7015 13.4621 12.8118 13.2712C12.9222 13.0803 12.9617 12.8566 12.9235 12.6395C12.8853 12.4223 12.7718 12.2256 12.6029 12.0838C12.434 11.942 12.2206 11.8643 12.0001 11.8643C11.7796 11.8643 11.5662 11.942 11.3973 12.0838C11.2284 12.2256 11.1149 12.4223 11.0767 12.6395C11.0385 12.8566 11.078 13.0803 11.1884 13.2712C11.2987 13.4621 11.4728 13.608 11.6801 13.6832V13.6832ZM12.0001 12.4608C12.0689 12.4602 12.1362 12.4801 12.1936 12.518C12.251 12.5558 12.2958 12.61 12.3222 12.6734C12.3487 12.7369 12.3556 12.8068 12.3421 12.8743C12.3286 12.9417 12.2953 13.0035 12.2465 13.0519C12.1976 13.1003 12.1355 13.133 12.0679 13.1459C12.0004 13.1588 11.9305 13.1512 11.8673 13.1241C11.8041 13.0971 11.7504 13.0518 11.713 12.9941C11.6757 12.9363 11.6564 12.8688 11.6577 12.8C11.6585 12.7098 11.695 12.6235 11.7591 12.56C11.8232 12.4965 11.9098 12.4608 12.0001 12.4608V12.4608Z", fill: "white" })] })),
    amplify: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M12.9287 17.8816H4.58312C4.52731 17.8815 4.47249 17.8669 4.42411 17.839C4.37573 17.8112 4.33547 17.7712 4.30733 17.723C4.27919 17.6748 4.26414 17.6201 4.26368 17.5643C4.26322 17.5085 4.27737 17.4535 4.30472 17.4048L8.39432 10.0992C8.42129 10.0512 8.4602 10.0109 8.50729 9.98235C8.55438 9.95376 8.60806 9.93781 8.66312 9.93604C8.71798 9.93415 8.7724 9.9464 8.82116 9.97162C8.86991 9.99684 8.91136 10.0342 8.94152 10.08L10.0871 11.84C10.1177 11.8873 10.1352 11.9417 10.1381 11.9979C10.1409 12.0541 10.1288 12.11 10.1031 12.16L8.43912 15.36H12.0007C12.0607 15.3599 12.1195 15.3767 12.1704 15.4083C12.2213 15.44 12.2623 15.4854 12.2887 15.5392L13.2167 17.4592C13.2419 17.5096 13.2535 17.5656 13.2501 17.6218C13.2467 17.678 13.2286 17.7323 13.1975 17.7792C13.1638 17.8161 13.122 17.8446 13.0753 17.8623C13.0286 17.8801 12.9784 17.8867 12.9287 17.8816V17.8816ZM5.12072 17.2416H12.4167L11.7991 15.9616H7.91112C7.85589 15.962 7.80152 15.948 7.7533 15.9211C7.70508 15.8942 7.66464 15.8552 7.63592 15.808C7.60784 15.7594 7.59305 15.7042 7.59305 15.648C7.59305 15.5919 7.60784 15.5367 7.63592 15.488L9.45992 12.0032L8.69512 10.88L5.12072 17.2416Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.1443 17.8816H14.1283C14.0711 17.8821 14.0147 17.8672 13.9652 17.8385C13.9157 17.8098 13.8748 17.7683 13.8467 17.7184L9.21312 9.31841C9.19113 9.27416 9.17969 9.22542 9.17969 9.17601C9.17969 9.1266 9.19113 9.07786 9.21312 9.03361L9.96512 7.36001C9.98893 7.30673 10.0269 7.26097 10.0748 7.22769C10.1227 7.19442 10.1789 7.17488 10.2371 7.17121C10.2959 7.16775 10.3544 7.18055 10.4064 7.20822C10.4583 7.23588 10.5016 7.27733 10.5315 7.32801L16.4195 17.4176C16.4475 17.4661 16.4623 17.5211 16.4624 17.5771C16.4625 17.6331 16.4479 17.6882 16.42 17.7368C16.3921 17.7854 16.352 17.8258 16.3036 17.854C16.2553 17.8822 16.2003 17.8973 16.1443 17.8976V17.8816ZM14.3171 17.2416H15.5971L10.2915 8.16961L9.84992 9.14881L14.3171 17.2416Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.4182 17.8816H17.3446C17.2883 17.8818 17.2328 17.8672 17.1839 17.8391C17.135 17.811 17.0944 17.7704 17.0662 17.7216L10.6854 6.59841C10.6574 6.54976 10.6426 6.49458 10.6426 6.43841C10.6426 6.38224 10.6574 6.32705 10.6854 6.27841C10.7134 6.23004 10.7535 6.18983 10.8017 6.16176C10.85 6.13369 10.9048 6.11875 10.9606 6.11841H12.9286C12.9842 6.11842 13.0388 6.13288 13.087 6.16037C13.1353 6.18786 13.1755 6.22744 13.2038 6.27521L19.6934 17.4016C19.7215 17.4501 19.7362 17.5051 19.7363 17.5611C19.7364 17.6171 19.7218 17.6722 19.6939 17.7208C19.6661 17.7694 19.626 17.8098 19.5776 17.838C19.5292 17.8662 19.4743 17.8813 19.4182 17.8816ZM17.5302 17.2416H18.8582L12.743 6.75841H11.5206L17.5302 17.2416Z", fill: "white" })] })),
    athena: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M19.5584 17.4144L18.0928 15.9392C18.8633 14.783 19.3058 13.4395 19.3731 12.0517C19.4403 10.6639 19.1298 9.28388 18.4747 8.05863C17.8195 6.83337 16.8442 5.8088 15.6528 5.09407C14.4613 4.37934 13.0982 4.00122 11.7088 4C10.2645 4.00776 8.85129 4.42064 7.62996 5.19168C6.40862 5.96272 5.42814 7.06099 4.8 8.3616L5.376 8.6368C6.06659 7.19943 7.2247 6.0391 8.66075 5.34577C10.0968 4.65245 11.7257 4.46721 13.2808 4.82038C14.8358 5.17354 16.2249 6.0442 17.2206 7.2898C18.2163 8.5354 18.7596 10.0821 18.7616 11.6768C18.7653 13.0244 18.3773 14.344 17.6448 15.4752L16.432 14.2592C16.7476 13.6177 16.9295 12.9187 16.9667 12.2048C17.0039 11.4908 16.8957 10.7767 16.6485 10.1059C16.4014 9.43504 16.0205 8.82141 15.5289 8.30224C15.0374 7.78307 14.4455 7.3692 13.7892 7.08575C13.1329 6.80229 12.4258 6.65516 11.7109 6.65329C10.9959 6.65142 10.2881 6.79484 9.63027 7.07486C8.97246 7.35488 8.37841 7.76565 7.88419 8.28224C7.38996 8.79882 7.00586 9.41045 6.7552 10.08H4.64V10.72H6.576C6.50551 11.0354 6.46586 11.3569 6.4576 11.68H4V12.32H6.48C6.50556 12.6452 6.56454 12.9669 6.656 13.28H4.6752V13.92H6.8864C7.17699 14.5987 7.60701 15.2086 8.14854 15.7104C8.69008 16.2121 9.33104 16.5944 10.0298 16.8325C10.7287 17.0706 11.4697 17.1591 12.2049 17.0923C12.9402 17.0255 13.6531 16.8049 14.2976 16.4448L15.472 17.6192C13.918 18.6028 12.0408 18.9392 10.2419 18.5564C8.44306 18.1737 6.8654 17.1022 5.8464 15.5712L5.3152 15.9264C6.44052 17.6173 8.18982 18.7935 10.1803 19.1977C12.1707 19.6019 14.2403 19.2012 15.936 18.0832L17.4112 19.5584C17.6955 19.8431 18.0813 20.0033 18.4837 20.0036C18.886 20.0039 19.2721 19.8443 19.5568 19.56C19.8415 19.2757 20.0017 18.8899 20.002 18.4875C20.0023 18.0852 19.8427 17.6991 19.5584 17.4144V17.4144ZM11.7312 16.4736C10.814 16.4736 9.91739 16.2016 9.1548 15.6919C8.39221 15.1823 7.7979 14.4579 7.44705 13.6105C7.0962 12.763 7.00456 11.8306 7.18373 10.931C7.3629 10.0315 7.80483 9.2053 8.45362 8.55696C9.10241 7.90862 9.92891 7.46726 10.8286 7.28871C11.7282 7.11015 12.6606 7.20244 13.5078 7.55387C14.3551 7.90531 15.079 8.50012 15.5881 9.26306C16.0972 10.026 16.3686 10.9228 16.368 11.84C16.3655 13.0687 15.876 14.2463 15.0069 15.1148C14.1378 15.9833 12.9599 16.4719 11.7312 16.4736ZM19.0912 19.1008C18.9254 19.2607 18.704 19.3501 18.4736 19.3501C18.2432 19.3501 18.0218 19.2607 17.856 19.1008L14.8416 16.0864C15.3199 15.7324 15.7343 15.2996 16.0672 14.8064L19.0944 17.8496C19.1759 17.9305 19.2405 18.0267 19.2846 18.1327C19.3288 18.2387 19.3515 18.3524 19.3515 18.4672C19.3515 18.582 19.3288 18.6957 19.2846 18.8017C19.2405 18.9077 19.1759 19.0039 19.0944 19.0848L19.0912 19.1008Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.6816 12.304C14.5457 12.0175 14.3386 11.7707 14.08 11.5872L14.2912 10.0288V9.9872V9.94241C14.2912 9.92641 14.2912 9.91041 14.2912 9.89761C14.2912 9.13921 12.6208 8.8576 11.568 8.8576C10.5152 8.8576 8.84801 9.13921 8.84801 9.89761C8.84653 9.9125 8.84653 9.92751 8.84801 9.94241V9.9872C8.84624 10.001 8.84624 10.015 8.84801 10.0288C8.84801 10.0288 8.84801 10.0288 8.84801 10.0288L9.38241 14.0128C9.42401 14.8064 11.3376 14.8288 11.5584 14.8288C11.9736 14.8313 12.3878 14.7883 12.7936 14.7008C12.9285 14.6692 13.061 14.6286 13.1904 14.5792C13.5392 14.4416 13.7216 14.2592 13.7344 14.0128L13.9008 12.768C14.006 12.7908 14.1132 12.8026 14.2208 12.8032C14.3011 12.8148 14.383 12.8021 14.456 12.7667C14.529 12.7314 14.5897 12.675 14.6304 12.6048C14.6594 12.561 14.6789 12.5116 14.6877 12.4598C14.6966 12.408 14.6945 12.3549 14.6816 12.304V12.304ZM13.3824 11.936C12.9728 11.7792 12.4768 11.5648 12.0064 11.3376C11.9794 11.258 11.9309 11.1874 11.8664 11.1336C11.8019 11.0797 11.7238 11.0446 11.6407 11.0322C11.5575 11.0198 11.4726 11.0305 11.3952 11.0632C11.3177 11.0959 11.2508 11.1493 11.2017 11.2175C11.1526 11.2858 11.1233 11.3662 11.1169 11.45C11.1105 11.5338 11.1273 11.6177 11.1654 11.6926C11.2036 11.7675 11.2617 11.8304 11.3333 11.8745C11.4048 11.9186 11.4872 11.9421 11.5712 11.9424C11.6238 11.9428 11.6759 11.933 11.7248 11.9136C12.2356 12.1685 12.7602 12.395 13.296 12.592L13.12 13.9104C13.0739 13.9404 13.0245 13.9651 12.9728 13.984C12.8686 14.0227 12.7616 14.0537 12.6528 14.0768C12.2954 14.1543 11.9305 14.1918 11.5648 14.1888C11.0359 14.2198 10.5072 14.1243 10.0224 13.9104L9.57441 10.5792C10.8788 10.9333 12.254 10.9333 13.5584 10.5792L13.3824 11.936ZM11.5712 10.2048C10.8843 10.2388 10.1978 10.1298 9.55521 9.8848C10.1869 9.59685 10.8776 9.462 11.5712 9.4912C12.2648 9.462 12.9555 9.59685 13.5872 9.8848C12.9447 10.1302 12.2581 10.2392 11.5712 10.2048V10.2048Z", fill: "white" })] })),
    autoscaling: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#CC2264" }), jsxRuntimeExports.jsx("path", { d: "M11.6807 5.12V8.144H12.3207V5.12L13.8119 6.608L14.2631 6.1568L12.2279 4.1184C12.1981 4.08841 12.1627 4.0646 12.1237 4.04835C12.0847 4.03211 12.0429 4.02374 12.0007 4.02374C11.9584 4.02374 11.9166 4.03211 11.8776 4.04835C11.8386 4.0646 11.8032 4.08841 11.7735 4.1184L9.73828 6.1568L10.1895 6.608L11.6807 5.12Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3207 18.88V15.8176H11.6807V18.88L10.1895 17.3888L9.73828 17.8432L11.7735 19.8784C11.8032 19.9084 11.8386 19.9322 11.8776 19.9485C11.9166 19.9647 11.9584 19.9731 12.0007 19.9731C12.0429 19.9731 12.0847 19.9647 12.1237 19.9485C12.1627 19.9322 12.1981 19.9084 12.2279 19.8784L14.2631 17.8432L13.8119 17.3888L12.3207 18.88Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.0064 9.73438L5.5552 10.1888L7.04 11.6576H4V12.2976H7.0688L5.5552 13.808L6.0064 14.2592L8.0448 12.224C8.1044 12.164 8.13785 12.0829 8.13785 11.9984C8.13785 11.9138 8.1044 11.8327 8.0448 11.7728L6.0064 9.73438Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.0002 11.6576H16.9762L18.445 10.1888L17.9906 9.73438L15.9554 11.7728C15.8958 11.8327 15.8623 11.9138 15.8623 11.9984C15.8623 12.0829 15.8958 12.164 15.9554 12.224L17.9906 14.2592L18.445 13.808L16.9314 12.2976H20.0002V11.6576Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.7194 10.256L12.1594 8.816C12.1108 8.78792 12.0556 8.77313 11.9994 8.77313C11.9432 8.77313 11.8881 8.78792 11.8394 8.816L9.27941 10.256C9.22998 10.2838 9.18882 10.3242 9.16015 10.3731C9.13147 10.422 9.11631 10.4777 9.11621 10.5344V13.4144C9.11631 13.4711 9.13147 13.5268 9.16015 13.5757C9.18882 13.6246 9.22998 13.665 9.27941 13.6928L11.8394 15.1296C11.8859 15.157 11.939 15.1714 11.993 15.1712C12.0471 15.1719 12.1003 15.1575 12.1466 15.1296L14.7066 13.6928C14.756 13.665 14.7972 13.6246 14.8259 13.5757C14.8546 13.5268 14.8697 13.4711 14.8698 13.4144V10.5344C14.871 10.4789 14.8578 10.4241 14.8314 10.3753C14.8051 10.3265 14.7665 10.2854 14.7194 10.256ZM11.9994 9.4688L13.9194 10.5504L11.9994 11.664L10.0794 10.5504L11.9994 9.4688ZM9.75941 11.1072L11.6794 12.2176V14.2976L9.75941 13.2192V11.1072ZM12.3194 14.3072V12.2208L14.2394 11.1072V13.2192L12.3194 14.3072Z", fill: "white" })] })),
    cloudfront: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M14.7642 19.4144L14.1946 19.12C14.4981 18.5427 14.7415 17.9358 14.921 17.3088L15.5354 17.488C15.3443 18.1546 15.0859 18.8001 14.7642 19.4144V19.4144ZM15.3594 13.5552C15.2486 11.7634 14.6669 10.0325 13.673 8.53756L14.2074 8.18876C15.2637 9.77586 15.8819 11.6139 15.9994 13.5168L15.3594 13.5552ZM11.1386 5.83356C10.6741 5.48673 10.1793 5.18257 9.66016 4.92476L9.95136 4.35516C10.504 4.62707 11.031 4.94838 11.5258 5.31516L11.1386 5.83356Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.7599 14.368C12.7499 13.3648 11.5288 12.5995 10.1855 12.128L10.3839 11.52C11.8145 12.0221 13.1153 12.8364 14.1919 13.904L13.7599 14.368Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.3971 18.1887C16.2787 17.8687 16.1443 17.5743 15.9971 17.2767L16.5699 16.9919C16.7277 17.3046 16.8698 17.625 16.9955 17.9519L16.3971 18.1887Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.5827 19.568L14.3779 18.9632C15.1445 18.7048 15.8619 18.3186 16.4995 17.8208L16.8931 18.3264C16.1987 18.8678 15.4175 19.2876 14.5827 19.568V19.568Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M4.40892 11.8399L4.26172 11.2191C4.97128 11.0453 5.69775 10.9498 6.42812 10.9343L6.44412 11.5743C5.75806 11.5884 5.0756 11.6774 4.40892 11.8399V11.8399Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.65772 9.80476L9.12012 9.45596C9.58985 8.69305 10.1688 8.00306 10.8385 7.40796L11.2609 7.89116C10.6355 8.4469 10.0953 9.09168 9.65772 9.80476V9.80476Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.4158 6.0096L14.1982 5.408C14.6799 5.22743 15.1754 5.08616 15.6798 4.9856L15.7982 5.6256C15.3276 5.7149 14.8652 5.84335 14.4158 6.0096V6.0096Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.08021 18.88C7.55722 17.6662 7.27779 16.3615 7.25781 15.04C7.26841 14.5307 7.33494 14.0242 7.45621 13.5296C7.47861 13.4176 7.50421 13.3024 7.52661 13.184L8.16661 13.3088C8.14421 13.4304 8.11861 13.5456 8.09621 13.6608C7.9844 14.1124 7.92216 14.5748 7.91061 15.04C7.92512 16.2815 8.18391 17.508 8.67221 18.6496L8.08021 18.88Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12 20C9.87827 20 7.84344 19.1571 6.34315 17.6568C4.84285 16.1565 4 14.1217 4 12C4 11.8368 4 11.68 4.016 11.5168C4.1149 9.87947 4.71469 8.31215 5.73412 7.02714C6.75355 5.74212 8.14333 4.80152 9.7152 4.33276C10.7415 4.02751 11.8187 3.9314 12.8829 4.05013C13.9471 4.16886 14.9766 4.50001 15.9104 5.02396C17.063 5.67025 18.0376 6.592 18.7471 7.70686C19.4566 8.82172 19.8788 10.095 19.9761 11.4128C20.0734 12.7307 19.8427 14.0522 19.3047 15.2591C18.7667 16.4661 17.938 17.521 16.8928 18.3296C15.4894 19.4083 13.7701 19.9952 12 20V20ZM12 4.63996C11.2872 4.64226 10.5788 4.75009 9.8976 4.95996C8.45296 5.39105 7.17555 6.25537 6.23811 7.43605C5.30066 8.61673 4.7484 10.0568 4.656 11.5616C4.656 11.712 4.64 11.856 4.64 12C4.64 13.952 5.41543 15.824 6.79569 17.2043C8.17596 18.5845 10.048 19.36 12 19.36C12.8081 19.3612 13.6106 19.2271 14.3744 18.9632C15.1423 18.7056 15.8608 18.3193 16.4992 17.8208C17.7131 16.8815 18.6029 15.5862 19.0442 14.1162C19.4855 12.6461 19.4562 11.0749 18.9604 9.62236C18.4646 8.16981 17.527 6.90861 16.279 6.01524C15.031 5.12186 13.5348 4.64101 12 4.63996V4.63996Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.7779 8.2976C12.4974 8.2976 12.2232 8.21438 11.99 8.05847C11.7568 7.90256 11.5752 7.68097 11.468 7.42175C11.3608 7.16253 11.3329 6.87734 11.3878 6.60226C11.4428 6.32719 11.5781 6.0746 11.7767 5.87648C11.9753 5.67835 12.2282 5.54359 12.5034 5.48925C12.7786 5.43492 13.0637 5.46345 13.3227 5.57123C13.5816 5.67902 13.8028 5.86121 13.9582 6.09476C14.1136 6.3283 14.1962 6.60269 14.1955 6.8832C14.1955 7.06921 14.1589 7.2534 14.0876 7.42521C14.0163 7.59702 13.9118 7.75309 13.7801 7.88447C13.6485 8.01585 13.4922 8.11996 13.3202 8.19086C13.1482 8.26175 12.964 8.29802 12.7779 8.2976V8.2976ZM12.7779 6.1056C12.6242 6.1056 12.4738 6.15121 12.3459 6.23665C12.2181 6.3221 12.1184 6.44354 12.0595 6.58563C12.0007 6.72772 11.9853 6.88407 12.0153 7.0349C12.0453 7.18574 12.1194 7.3243 12.2281 7.43305C12.3369 7.5418 12.4754 7.61586 12.6262 7.64586C12.7771 7.67586 12.9334 7.66047 13.0755 7.60161C13.2176 7.54276 13.3391 7.44309 13.4245 7.31521C13.5099 7.18734 13.5555 7.037 13.5555 6.8832C13.5555 6.67697 13.4736 6.47918 13.3278 6.33336C13.182 6.18753 12.9842 6.1056 12.7779 6.1056V6.1056Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.41272 12.7616C8.13234 12.7616 7.85826 12.6784 7.62514 12.5227C7.39202 12.3669 7.21032 12.1455 7.10303 11.8865C6.99573 11.6274 6.96766 11.3424 7.02236 11.0674C7.07706 10.7924 7.21207 10.5399 7.41032 10.3416C7.60858 10.1433 7.86117 10.0083 8.13616 9.95363C8.41115 9.89893 8.69618 9.92701 8.95521 10.0343C9.21424 10.1416 9.43564 10.3233 9.59141 10.5564C9.74718 10.7895 9.83032 11.0636 9.83032 11.344C9.82947 11.7197 9.67985 12.0798 9.41418 12.3455C9.14851 12.6111 8.78843 12.7607 8.41272 12.7616ZM8.41272 10.5664C8.25892 10.5664 8.10858 10.612 7.98071 10.6974C7.85283 10.7829 7.75316 10.9043 7.69431 11.0464C7.63545 11.1885 7.62006 11.3449 7.65006 11.4957C7.68006 11.6465 7.75412 11.7851 7.86287 11.8938C7.97162 12.0026 8.11018 12.0766 8.26102 12.1066C8.41186 12.1367 8.5682 12.1213 8.71029 12.0624C8.85238 12.0035 8.97382 11.9039 9.05927 11.776C9.14471 11.6481 9.19032 11.4978 9.19032 11.344C9.19116 11.2413 9.17167 11.1395 9.13297 11.0445C9.09427 10.9494 9.03713 10.8629 8.96484 10.79C8.89255 10.7171 8.80654 10.6593 8.71178 10.6198C8.61702 10.5803 8.51537 10.56 8.41272 10.56V10.5664Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.4501 16.864C15.1694 16.8646 14.8949 16.7819 14.6613 16.6264C14.4277 16.4708 14.2455 16.2495 14.1378 15.9903C14.0301 15.7312 14.0018 15.4459 14.0564 15.1706C14.111 14.8953 14.2461 14.6424 14.4445 14.444C14.643 14.2455 14.8958 14.1104 15.1711 14.0558C15.4464 14.0012 15.7317 14.0296 15.9909 14.1373C16.25 14.245 16.4714 14.4272 16.6269 14.6608C16.7824 14.8944 16.8651 15.1689 16.8645 15.4495C16.8645 15.8247 16.7155 16.1844 16.4502 16.4497C16.185 16.7149 15.8252 16.864 15.4501 16.864V16.864ZM15.4501 14.6719C15.2962 14.6713 15.1455 14.7164 15.0172 14.8014C14.8889 14.8865 14.7888 15.0077 14.7294 15.1497C14.6701 15.2918 14.6542 15.4482 14.6838 15.5993C14.7135 15.7503 14.7873 15.8892 14.8959 15.9983C15.0045 16.1073 15.1431 16.1817 15.294 16.212C15.4449 16.2422 15.6015 16.227 15.7437 16.1683C15.886 16.1095 16.0076 16.0098 16.0932 15.8819C16.1788 15.7539 16.2245 15.6035 16.2245 15.4495C16.2245 15.2439 16.143 15.0466 15.9979 14.9008C15.8527 14.7551 15.6558 14.6728 15.4501 14.6719V14.6719Z", fill: "white" })] })),
    codebuild: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3B48CC" }), jsxRuntimeExports.jsx("path", { d: "M13.7345 15.44L14.1793 14.9824L13.2641 14.08L14.2881 13.3152L13.9041 12.8L12.5793 13.792C12.5421 13.8196 12.5113 13.8551 12.4892 13.8958C12.467 13.9365 12.4539 13.9815 12.4509 14.0278C12.4478 14.0741 12.4549 14.1204 12.4715 14.1637C12.4882 14.207 12.514 14.2461 12.5473 14.2784L13.7345 15.44Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.2965 14.352L16.2725 15.12L16.6565 15.632L17.9813 14.64C18.0185 14.6122 18.0493 14.5766 18.0714 14.5357C18.0935 14.4948 18.1064 14.4496 18.1093 14.4032C18.1122 14.3571 18.1052 14.311 18.0886 14.2679C18.072 14.2248 18.0463 14.1858 18.0133 14.1536L16.8261 13.0016L16.3813 13.4592L17.2965 14.352Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.8214 12.351L14.1318 16.1909L14.7176 16.4487L16.4072 12.6088L15.8214 12.351Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.2851 6.6336L19.3891 5.8912L17.9683 4.7136L17.5939 4.3936C17.5363 4.34589 17.4639 4.31985 17.3891 4.32H5.52352C5.52352 4.23513 5.4898 4.15374 5.42979 4.09373C5.36978 4.03371 5.28839 4 5.20352 4H3.92352C3.83865 4 3.75725 4.03371 3.69724 4.09373C3.63723 4.15374 3.60352 4.23513 3.60352 4.32V7.52C3.60352 7.60487 3.63723 7.68626 3.69724 7.74627C3.75725 7.80629 3.83865 7.84 3.92352 7.84H5.20352V19.68C5.20352 19.7649 5.23723 19.8463 5.29724 19.9063C5.35725 19.9663 5.43865 20 5.52352 20H9.04352C9.12839 20 9.20978 19.9663 9.26979 19.9063C9.3298 19.8463 9.36352 19.7649 9.36352 19.68V7.2H15.1235V9.5456L11.5363 11.04H11.2803C11.1954 11.04 11.1141 11.0737 11.054 11.1337C10.994 11.1937 10.9603 11.2751 10.9603 11.36V17.12C10.9603 17.2049 10.994 17.2863 11.054 17.3463C11.1141 17.4063 11.1954 17.44 11.2803 17.44H19.6003C19.6852 17.44 19.7666 17.4063 19.8266 17.3463C19.8866 17.2863 19.9203 17.2049 19.9203 17.12V11.36C19.9203 11.2751 19.8866 11.1937 19.8266 11.1337C19.7666 11.0737 19.6852 11.04 19.6003 11.04H19.3443L15.7603 9.5456V7.2H20.0803C20.1461 7.19997 20.2102 7.17968 20.2641 7.14189C20.3179 7.1041 20.3588 7.05065 20.3811 6.9888C20.4036 6.92691 20.4065 6.85959 20.3893 6.79602C20.3721 6.73245 20.3357 6.67573 20.2851 6.6336ZM17.2803 4.9728L15.6291 6.464L13.6515 4.9664H17.2803V4.9728ZM9.04672 6.5728H6.48672L8.06752 5.3728L9.63232 6.56L9.04672 6.5728ZM6.00352 13.12L8.72032 10.7104V15.5296L6.00352 13.12ZM8.56352 16.24L5.84672 18.6496V13.8304L8.56352 16.24ZM5.84672 12.4V7.5904L8.56352 10L5.84672 12.4ZM8.59232 4.9536H12.5827L10.5859 6.4704L8.59232 4.9536ZM13.1203 5.36L14.7011 6.56H11.5363L13.1203 5.36ZM7.52032 4.96L5.52032 6.48V4.96H7.52032ZM4.88032 7.2H4.24032V4.64H4.88032V7.2ZM6.00352 19.36L8.72032 16.96V19.36H6.00352ZM8.72032 9.28L6.36512 7.2H8.72032V9.28ZM19.2803 16.7904H11.6003V11.6704H19.2803V16.7904ZM13.2003 11.0304L15.4403 10.096L17.6803 11.0304H13.2003ZM16.4771 6.5504L17.7571 5.3728L19.2003 6.56L16.4771 6.5504Z", fill: "white" })] })),
    cognitoidp: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M17.5995 4.79999H5.26673C4.93562 4.81738 4.62486 4.96515 4.4024 5.21101C4.17993 5.45686 4.06385 5.78079 4.07953 6.11199V14.048C4.06385 14.3792 4.17993 14.7031 4.4024 14.949C4.62486 15.1948 4.93562 15.3426 5.26673 15.36H12.0795V14.72H5.26673C5.10787 14.697 4.96344 14.6152 4.86209 14.4907C4.76073 14.3662 4.70985 14.2082 4.71953 14.048V8.63999H10.4795V13.44C10.4795 13.5249 10.5132 13.6063 10.5733 13.6663C10.6333 13.7263 10.7147 13.76 10.7995 13.76H13.3595V13.12H11.2635V13.024C11.2627 12.4899 11.4345 11.9698 11.7534 11.5413C12.0724 11.1128 12.5212 10.7989 13.0331 10.6464C13.2802 10.7595 13.5486 10.818 13.8203 10.818C14.092 10.818 14.3605 10.7595 14.6075 10.6464C15.1977 10.8245 15.7014 11.2142 16.0219 11.7408L16.5659 11.4208C16.2365 10.8829 15.7525 10.4569 15.1771 10.1984C15.4397 9.88672 15.5836 9.4923 15.5835 9.08479C15.5835 8.61801 15.3981 8.17034 15.068 7.84028C14.738 7.51022 14.2903 7.32479 13.8235 7.32479C13.3567 7.32479 12.9091 7.51022 12.579 7.84028C12.249 8.17034 12.0635 8.61801 12.0635 9.08479C12.0719 9.48567 12.2189 9.87128 12.4795 10.176C11.9257 10.4216 11.4562 10.8244 11.1291 11.3344V7.03999H16.5691V11.424V11.52H17.2091V8.63999H18.1691V11.84H18.8091V6.11199C18.8169 5.94618 18.7916 5.78049 18.7348 5.62452C18.678 5.46855 18.5909 5.3254 18.4783 5.20336C18.3658 5.08133 18.2302 4.98283 18.0794 4.91359C17.9285 4.84435 17.7654 4.80574 17.5995 4.79999V4.79999ZM13.8235 7.95839C13.9698 7.95755 14.1147 7.98551 14.2502 8.0407C14.3856 8.09589 14.5088 8.17721 14.6128 8.28002C14.7168 8.38284 14.7996 8.50513 14.8563 8.63992C14.9131 8.7747 14.9427 8.91935 14.9435 9.06559C14.9422 9.26289 14.8877 9.45618 14.7858 9.62512C14.6838 9.79406 14.5382 9.9324 14.3643 10.0256C14.1977 10.1155 14.0113 10.1626 13.8219 10.1626C13.6326 10.1626 13.4462 10.1155 13.2795 10.0256C13.1064 9.93172 12.9617 9.79313 12.8604 9.62428C12.7591 9.45543 12.7049 9.26249 12.7035 9.06559C12.7044 8.91935 12.734 8.7747 12.7907 8.63992C12.8475 8.50513 12.9302 8.38284 13.0342 8.28002C13.1382 8.17721 13.2615 8.09589 13.3969 8.0407C13.5323 7.98551 13.6773 7.95755 13.8235 7.95839V7.95839ZM17.1995 7.99999V6.71999C17.1995 6.63512 17.1658 6.55372 17.1058 6.49371C17.0458 6.4337 16.9644 6.39999 16.8795 6.39999H10.7995C10.7147 6.39999 10.6333 6.4337 10.5733 6.49371C10.5132 6.55372 10.4795 6.63512 10.4795 6.71999V7.99999H4.71953V6.11199C4.70985 5.95176 4.76073 5.79375 4.86209 5.66928C4.96344 5.54481 5.10787 5.46297 5.26673 5.43999H17.5995C17.7596 5.46151 17.9055 5.54272 18.0082 5.66734C18.1109 5.79197 18.1626 5.9508 18.1531 6.11199V7.99999H17.1995Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.87981 10.224H5.36621V10.864H8.87981V10.224Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.59981 11.824H5.36621V12.464H7.59981V11.824Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.19969 11.824H8.24609V12.464H9.19969V11.824Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.6843 19.216C16.2417 19.2181 15.8033 19.1294 15.3963 18.9553C14.9894 18.7812 14.6225 18.5254 14.3183 18.2038C14.0142 17.8822 13.7793 17.5017 13.6281 17.0856C13.4769 16.6696 13.4127 16.227 13.4395 15.7852C13.4663 15.3434 13.5834 14.9117 13.7837 14.517C13.984 14.1223 14.2631 13.7728 14.6039 13.4903C14.9446 13.2078 15.3397 12.9982 15.7647 12.8745C16.1897 12.7508 16.6356 12.7156 17.0747 12.7712V12.7712C17.6551 12.8429 18.2053 13.0704 18.6668 13.4296C19.1283 13.7888 19.4839 14.2663 19.6959 14.8113C19.9079 15.3564 19.9683 15.9486 19.8708 16.5253C19.7732 17.1019 19.5213 17.6414 19.1419 18.0864C18.8422 18.4312 18.4753 18.711 18.0635 18.9088C17.6317 19.1107 17.1609 19.2156 16.6843 19.216V19.216ZM16.6843 13.3856C16.2733 13.3854 15.8683 13.4842 15.5035 13.6736C14.9011 13.9862 14.4451 14.5223 14.2333 15.1671C14.0215 15.8119 14.0707 16.514 14.3703 17.1229C14.67 17.7319 15.1963 18.1992 15.8364 18.4248C16.4765 18.6503 17.1795 18.6161 17.7947 18.3296C18.127 18.172 18.4224 17.9463 18.6619 17.6672C18.9669 17.3103 19.1693 16.8774 19.2477 16.4146C19.3261 15.9518 19.2775 15.4763 19.1071 15.0389C18.9367 14.6015 18.6508 14.2186 18.2799 13.9308C17.9091 13.643 17.4671 13.4612 17.0011 13.4048V13.4048C16.8938 13.3917 16.7859 13.3853 16.6779 13.3856H16.6843Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.1758 17.344C16.1337 17.3442 16.092 17.3362 16.053 17.3203C16.014 17.3043 15.9785 17.2809 15.9486 17.2512L14.915 16.2176L15.3598 15.7664L16.1662 16.5728L17.9902 14.7456L18.4446 15.2L16.3902 17.2512C16.333 17.3081 16.2564 17.3412 16.1758 17.344Z", fill: "white" })] })),
    datapipeline: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M18.9216 8.9056H18.192C17.9071 8.90644 17.6341 9.01999 17.4327 9.22145C17.2312 9.4229 17.1176 9.69589 17.1168 9.9808V10.08H13.2768V8.16H13.792C14.0029 8.36477 14.2852 8.47952 14.5792 8.48C14.9055 8.46668 15.2131 8.32439 15.4345 8.08438C15.6559 7.84437 15.773 7.52628 15.76 7.2C15.773 6.87372 15.6559 6.55562 15.4345 6.31561C15.2131 6.0756 14.9055 5.93331 14.5792 5.92C14.2924 5.92359 14.0183 6.03831 13.8144 6.24H13.2672C13.2698 5.88933 13.139 5.55079 12.9013 5.29293C12.6637 5.03507 12.3369 4.87716 11.9872 4.8512C11.6375 4.87716 11.3107 5.03507 11.0731 5.29293C10.8354 5.55079 10.7046 5.88933 10.7072 6.24H10.2144C10.0105 6.03831 9.73635 5.92359 9.4496 5.92C9.1239 5.93413 8.81708 6.07678 8.59635 6.3167C8.37563 6.55662 8.25899 6.87425 8.272 7.2C8.25899 7.52574 8.37563 7.84337 8.59635 8.08329C8.81708 8.32321 9.1239 8.46586 9.4496 8.48C9.74385 8.48088 10.0266 8.36593 10.2368 8.16H10.72V10.08H6.8576V9.9744C6.85675 9.69064 6.74344 9.41879 6.54249 9.21844C6.34154 9.0181 6.06936 8.90559 5.7856 8.9056H5.072C4.78824 8.90559 4.51606 9.0181 4.31511 9.21844C4.11416 9.41879 4.00085 9.69064 4 9.9744V18.0832C4 18.3675 4.11294 18.6402 4.31398 18.8412C4.51502 19.0423 4.78769 19.1552 5.072 19.1552H5.7856C6.06991 19.1552 6.34258 19.0423 6.54362 18.8412C6.74466 18.6402 6.8576 18.3675 6.8576 18.0832H17.1168C17.1176 18.3681 17.2312 18.6411 17.4327 18.8425C17.6341 19.044 17.9071 19.1576 18.192 19.1584H18.9216C19.2076 19.1584 19.4819 19.0448 19.6841 18.8425C19.8864 18.6403 20 18.366 20 18.08V9.9808C19.9992 9.69534 19.8852 9.42187 19.683 9.22032C19.4809 9.01877 19.2071 8.90559 18.9216 8.9056V8.9056ZM6.24 18.0832C6.23958 18.1403 6.22791 18.1969 6.20565 18.2495C6.18339 18.3021 6.15098 18.3499 6.11027 18.39C6.06956 18.4301 6.02135 18.4618 5.96839 18.4833C5.91543 18.5048 5.85875 18.5156 5.8016 18.5152H5.0752C5.0182 18.5156 4.96168 18.5048 4.9089 18.4832C4.85612 18.4617 4.80811 18.43 4.76766 18.3898C4.7272 18.3496 4.6951 18.3019 4.67319 18.2493C4.65128 18.1966 4.64 18.1402 4.64 18.0832V17.4432H6.24V18.0832ZM6.24 16.8032H4.64V11.3632H6.24V16.8032ZM6.24 10.7232H4.64V9.9744C4.64042 9.91766 4.65201 9.86157 4.67411 9.80932C4.6962 9.75707 4.72838 9.70968 4.76879 9.66986C4.8092 9.63004 4.85706 9.59857 4.90964 9.57725C4.96221 9.55593 5.01847 9.54517 5.0752 9.5456H5.8016C5.8586 9.54475 5.9152 9.55519 5.96815 9.57632C6.02109 9.59745 6.06933 9.62886 6.11008 9.66872C6.15083 9.70858 6.18329 9.75611 6.20559 9.80857C6.22789 9.86103 6.23958 9.91739 6.24 9.9744V10.7232ZM12 5.488C12.1809 5.51312 12.3462 5.60404 12.4642 5.74336C12.5823 5.88268 12.6449 6.06064 12.64 6.2432H11.36C11.3539 6.062 11.4143 5.88485 11.5299 5.74514C11.6454 5.60543 11.8081 5.51283 11.9872 5.4848L12 5.488ZM10.0928 7.52C10.0448 7.51467 9.99633 7.5219 9.95202 7.54097C9.9077 7.56005 9.8691 7.59031 9.84 7.6288C9.79562 7.69172 9.73729 7.74353 9.66956 7.78017C9.60184 7.81681 9.52655 7.83729 9.4496 7.84C9.2942 7.82456 9.15099 7.74899 9.05054 7.62941C8.9501 7.50983 8.90038 7.35573 8.912 7.2C8.90038 7.04426 8.9501 6.89016 9.05054 6.77058C9.15099 6.651 9.2942 6.57543 9.4496 6.56C9.52366 6.56182 9.59636 6.58031 9.66229 6.61411C9.72822 6.6479 9.78568 6.69613 9.8304 6.7552C9.86018 6.7919 9.89772 6.82156 9.94032 6.84203C9.98292 6.8625 10.0295 6.87328 10.0768 6.8736H13.9456C13.9934 6.87376 14.0406 6.86321 14.0838 6.84272C14.127 6.82223 14.1651 6.79232 14.1952 6.7552C14.2396 6.69654 14.2965 6.64857 14.3619 6.61479C14.4272 6.58101 14.4993 6.56229 14.5728 6.56C14.7288 6.57465 14.8728 6.64989 14.9739 6.76955C15.075 6.88921 15.1252 7.04376 15.1136 7.2C15.1252 7.35623 15.075 7.51078 14.9739 7.63044C14.8728 7.75011 14.7288 7.82534 14.5728 7.84C14.4958 7.83729 14.4206 7.81681 14.3528 7.78017C14.2851 7.74353 14.2268 7.69172 14.1824 7.6288C14.1533 7.59031 14.1147 7.56005 14.0704 7.54097C14.0261 7.5219 13.9776 7.51467 13.9296 7.52H10.0928ZM12.6528 8.16V10.08H11.3728V8.16H12.6528ZM17.1328 17.44H6.8928V16.48H17.1328V17.44ZM17.1328 15.84H6.8928V12H17.1328V15.84ZM17.1328 11.36H6.8928V10.72H17.1328V11.36ZM19.3728 18.08C19.3728 18.1954 19.3269 18.3061 19.2453 18.3877C19.1637 18.4693 19.053 18.5152 18.9376 18.5152H18.192C18.0766 18.5152 17.9659 18.4693 17.8843 18.3877C17.8027 18.3061 17.7568 18.1954 17.7568 18.08V17.44H19.3568L19.3728 18.08ZM19.3728 16.8H17.7728V11.36H19.3728V16.8ZM19.3728 10.72H17.7728V9.9808C17.7728 9.86537 17.8187 9.75468 17.9003 9.67306C17.9819 9.59145 18.0926 9.5456 18.208 9.5456H18.9408C19.0562 9.5456 19.1669 9.59145 19.2485 9.67306C19.3301 9.75468 19.376 9.86537 19.376 9.9808L19.3728 10.72Z", fill: "white" })] })),
    elasticache: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3B48CC" }), jsxRuntimeExports.jsx("path", { d: "M12.0061 8.64001C9.85889 8.64001 7.67969 9.20001 7.67969 10.272V17.568C7.67969 18.64 9.84929 19.2 11.9965 19.2C14.1437 19.2 16.3197 18.64 16.3197 17.568V10.272C16.3197 9.20001 14.1469 8.64001 12.0061 8.64001ZM12.0061 18.56C9.62529 18.56 8.31969 17.92 8.31969 17.568V16.0288C9.11969 16.5152 10.5597 16.768 11.9965 16.768C13.4333 16.768 14.8765 16.5152 15.6701 16.032V17.568C15.6797 17.92 14.3805 18.56 12.0061 18.56ZM12.0061 16.128C9.62529 16.128 8.32929 15.488 8.32929 15.136V13.6C9.12929 14.0832 10.5693 14.336 12.0061 14.336C13.4429 14.336 14.8861 14.0832 15.6797 13.6V15.136C15.6797 15.472 14.3805 16.128 12.0061 16.128ZM12.0061 13.696C9.62529 13.696 8.32929 13.056 8.32929 12.704V11.1648C9.12929 11.6512 10.5693 11.904 12.0061 11.904C13.4429 11.904 14.8861 11.6512 15.6797 11.1648V12.704C15.6797 13.04 14.3805 13.696 12.0061 13.696ZM12.0061 11.264C9.62529 11.264 8.31969 10.608 8.31969 10.272C8.31969 9.93601 9.59969 9.28001 11.9965 9.28001C14.3933 9.28001 15.6797 9.93601 15.6797 10.272C15.6797 10.608 14.3805 11.264 12.0061 11.264V11.264Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.8398 6.14079C19.9247 6.14079 20.0061 6.10707 20.0661 6.04706C20.1261 5.98705 20.1598 5.90566 20.1598 5.82079V5.11999C20.1598 5.03512 20.1261 4.95373 20.0661 4.89371C20.0061 4.8337 19.9247 4.79999 19.8398 4.79999H4.15984C4.07497 4.79999 3.99358 4.8337 3.93357 4.89371C3.87356 4.95373 3.83984 5.03512 3.83984 5.11999V5.81759C3.83984 5.90246 3.87356 5.98385 3.93357 6.04386C3.99358 6.10387 4.07497 6.13759 4.15984 6.13759C4.3358 6.15435 4.49918 6.23609 4.61809 6.36686C4.737 6.49764 4.80289 6.66804 4.80289 6.84479C4.80289 7.02154 4.737 7.19194 4.61809 7.32271C4.49918 7.45348 4.3358 7.53523 4.15984 7.55199C4.07497 7.55199 3.99358 7.5857 3.93357 7.64571C3.87356 7.70573 3.83984 7.78712 3.83984 7.87199V13.44C3.83984 13.5249 3.87356 13.6063 3.93357 13.6663C3.99358 13.7263 4.07497 13.76 4.15984 13.76H7.03984V13.12H5.75984V12.8H7.03984V12.16H5.43984C5.35497 12.16 5.27358 12.1937 5.21357 12.2537C5.15356 12.3137 5.11984 12.3951 5.11984 12.48V13.12H4.47984V8.15039C4.75932 8.06522 5.00403 7.89253 5.17793 7.65775C5.35182 7.42298 5.44568 7.13855 5.44568 6.84639C5.44568 6.55423 5.35182 6.2698 5.17793 6.03502C5.00403 5.80025 4.75932 5.62755 4.47984 5.54239V5.43999H19.5198V5.54559C19.2445 5.63414 19.0043 5.8078 18.8339 6.04156C18.6635 6.27532 18.5717 6.55712 18.5717 6.84639C18.5717 7.13565 18.6635 7.41745 18.8339 7.65122C19.0043 7.88498 19.2445 8.05864 19.5198 8.14719V13.12H19.1998V12.48C19.1998 12.3951 19.1661 12.3137 19.1061 12.2537C19.0461 12.1937 18.9647 12.16 18.8798 12.16H16.9598V12.8H18.5598V13.12H16.9598V13.76H19.8398C19.9247 13.76 20.0061 13.7263 20.0661 13.6663C20.1261 13.6063 20.1598 13.5249 20.1598 13.44V7.87199C20.1598 7.78712 20.1261 7.70573 20.0661 7.64571C20.0061 7.5857 19.9247 7.55199 19.8398 7.55199C19.6669 7.53178 19.5074 7.44875 19.3916 7.31867C19.2758 7.18859 19.2119 7.02052 19.2119 6.84639C19.2119 6.67225 19.2758 6.50419 19.3916 6.37411C19.5074 6.24403 19.6669 6.161 19.8398 6.14079V6.14079Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.84 8.00002V6.40002C11.84 6.31515 11.8062 6.23375 11.7462 6.17374C11.6862 6.11373 11.6048 6.08002 11.52 6.08002H9.27996C9.19509 6.08002 9.1137 6.11373 9.05369 6.17374C8.99367 6.23375 8.95996 6.31515 8.95996 6.40002V8.32002H9.59996V6.72002H11.2V8.00002H11.84Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.0402 8.32002V6.40002C15.0402 6.31515 15.0064 6.23375 14.9464 6.17374C14.8864 6.11373 14.805 6.08002 14.7202 6.08002H12.4802C12.3953 6.08002 12.3139 6.11373 12.2539 6.17374C12.1939 6.23375 12.1602 6.31515 12.1602 6.40002V8.00002H12.8002V6.72002H14.4002V8.32002H15.0402Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.9594 10.88V11.52H17.9194C18.0042 11.52 18.0856 11.4863 18.1456 11.4263C18.2057 11.3663 18.2394 11.2849 18.2394 11.2V6.40002C18.2394 6.31515 18.2057 6.23375 18.1456 6.17374C18.0856 6.11373 18.0042 6.08002 17.9194 6.08002H15.6794C15.5945 6.08002 15.5131 6.11373 15.4531 6.17374C15.3931 6.23375 15.3594 6.31515 15.3594 6.40002V8.64002H15.9994V6.72002H17.5994V10.88H16.9594Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.39977 6.72002H7.99976V8.64002H8.63976V6.40002C8.63976 6.31515 8.60605 6.23375 8.54604 6.17374C8.48603 6.11373 8.40463 6.08002 8.31976 6.08002H6.07977C5.9949 6.08002 5.9135 6.11373 5.85349 6.17374C5.79348 6.23375 5.75977 6.31515 5.75977 6.40002V11.2C5.75977 11.2849 5.79348 11.3663 5.85349 11.4263C5.9135 11.4863 5.9949 11.52 6.07977 11.52H7.03977V10.88H6.39977V6.72002Z", fill: "white" })] })),
    elasticfilesystem: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#3F8624" }), jsxRuntimeExports.jsx("path", { d: "M4.64 5.0912L6.9728 7.4272L7.4272 6.9728L5.0912 4.64H6.88V4H4.32C4.23513 4 4.15374 4.03371 4.09373 4.09373C4.03371 4.15374 4 4.23513 4 4.32V6.88H4.64V5.0912Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.6804 4H17.1204V4.64H18.9092L16.5732 6.9728L17.0276 7.4272L19.3604 5.0912V6.88H20.0004V4.32C20.0004 4.23513 19.9667 4.15374 19.9067 4.09373C19.8467 4.03371 19.7653 4 19.6804 4Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.9728 16.5728L4.64 18.9088V17.12H4V19.68C4 19.7649 4.03371 19.8463 4.09373 19.9063C4.15374 19.9663 4.23513 20 4.32 20H6.88V19.36H5.0912L7.4272 17.0272L6.9728 16.5728Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.3604 18.9088L17.0276 16.5728L16.5732 17.0272L18.9092 19.36H17.1204V20H19.6804C19.7653 20 19.8467 19.9663 19.9067 19.9063C19.9667 19.8463 20.0004 19.7649 20.0004 19.68V17.12H19.3604V18.9088Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.47164 7.43682C10.0377 7.18567 10.6673 7.11513 11.2749 7.23481C11.8825 7.35449 12.4384 7.65857 12.8668 8.10562C13.2486 8.49349 13.5374 8.96285 13.7116 9.47843C13.7313 9.53267 13.7652 9.5806 13.8099 9.61713C13.8545 9.65367 13.9082 9.67746 13.9652 9.68599C14.0223 9.69451 14.0806 9.68746 14.134 9.66557C14.1873 9.64367 14.2338 9.60776 14.2684 9.56162C14.3656 9.42603 14.4932 9.31515 14.6411 9.23789C14.7889 9.16064 14.9528 9.11917 15.1196 9.11683C15.6124 9.11683 16.2076 9.49443 16.2684 10.5568C16.2727 10.6273 16.3001 10.6943 16.3464 10.7475C16.3927 10.8008 16.4553 10.8372 16.5244 10.8512C17.7692 11.1136 18.3996 11.8112 18.3996 12.8992C18.3996 13.9296 17.9484 14.5408 17.0172 14.768L17.1676 15.3888C18.374 15.0976 19.0396 14.2112 19.0396 12.8992C19.0396 11.5872 18.278 10.6592 16.886 10.2784C16.7228 9.03682 15.9004 8.47682 15.1196 8.47682C14.7631 8.47359 14.4151 8.58585 14.1276 8.79683C13.9271 8.3666 13.6531 7.97461 13.318 7.63843C12.7991 7.10329 12.1291 6.73934 11.3977 6.59524C10.6664 6.45114 9.90841 6.53375 9.22524 6.83202C8.59031 7.13066 8.05105 7.60016 7.66786 8.18794C7.28468 8.77572 7.07269 9.45858 7.05564 10.16C7.05564 10.2176 7.05564 10.2752 7.05564 10.336C6.52239 10.5056 6.05939 10.8452 5.73749 11.303C5.41559 11.7607 5.25252 12.3112 5.27324 12.8704C5.27324 12.9312 5.27324 12.992 5.27324 13.0528C5.30686 13.5802 5.49722 14.0855 5.81991 14.504C6.14261 14.9225 6.58293 15.235 7.08444 15.4016L7.29564 14.7968C6.91367 14.6721 6.57769 14.4361 6.3308 14.1191C6.08391 13.8021 5.93739 13.4185 5.91004 13.0176C5.91004 12.9696 5.91004 12.9216 5.91004 12.8704C5.88528 12.4044 6.03113 11.9453 6.3203 11.5789C6.60947 11.2126 7.02218 10.9642 7.48124 10.88C7.55165 10.8619 7.61378 10.8203 7.6574 10.7621C7.70102 10.704 7.72354 10.6327 7.72124 10.56C7.70571 10.4358 7.69716 10.3108 7.69564 10.1856C7.71061 9.60851 7.88427 9.04668 8.19757 8.56178C8.51086 8.07688 8.95168 7.68766 9.47164 7.43682Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.1038 13.7024C17.1197 13.6543 17.1239 13.6031 17.1161 13.553C17.1083 13.5029 17.0888 13.4554 17.059 13.4144C17.0296 13.373 16.9907 13.3393 16.9457 13.3159C16.9006 13.2925 16.8506 13.2802 16.7998 13.28H15.8398C15.8059 13.0043 15.6796 12.7483 15.4814 12.5536C15.405 12.4767 15.3136 12.4163 15.2128 12.3761C15.1121 12.336 15.0042 12.3169 14.8958 12.32H11.6062C11.523 12.0608 11.363 11.7344 11.1166 11.68H11.0558H9.77584C9.49104 11.68 9.30224 12.0384 9.20624 12.32H8.81904C8.70785 12.3151 8.59683 12.333 8.49282 12.3727C8.38882 12.4123 8.29401 12.4728 8.21424 12.5504C8.0959 12.6664 8.00185 12.8048 7.93756 12.9575C7.87328 13.1103 7.84006 13.2743 7.83984 13.44V17.44C7.83984 17.5249 7.87356 17.6063 7.93357 17.6663C7.99358 17.7263 8.07497 17.76 8.15984 17.76H15.5198C15.5868 17.7593 15.6518 17.7376 15.7058 17.698C15.7597 17.6584 15.7999 17.6028 15.8206 17.5392L17.1038 13.7024ZM16.355 13.92L15.8398 15.4688V13.92H16.355ZM15.1998 17.12H8.47984V13.44C8.47645 13.2847 8.53387 13.1343 8.63984 13.0208C8.65833 13.0004 8.68113 12.9843 8.70659 12.9738C8.73205 12.9633 8.75953 12.9586 8.78704 12.96H9.42704C9.50869 12.9601 9.5873 12.9291 9.64679 12.8732C9.70628 12.8172 9.74214 12.7407 9.74704 12.6592C9.77865 12.5409 9.82487 12.4269 9.88464 12.32H10.9118C10.9629 12.4227 11.0047 12.5298 11.0366 12.64C11.0366 12.7249 11.0704 12.8063 11.1304 12.8663C11.1904 12.9263 11.2718 12.96 11.3566 12.96H14.9022C14.9261 12.9609 14.9495 12.9668 14.971 12.9773C14.9925 12.9878 15.0116 13.0026 15.027 13.0208C15.1371 13.1326 15.1991 13.2831 15.1998 13.44V17.12Z", fill: "white" })] })),
    elasticloadbalancing: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M15.8533 12.32C15.9337 12.8136 16.197 13.2588 16.5908 13.5671C16.9845 13.8754 17.4799 14.0242 17.9784 13.9839C18.4768 13.9436 18.9419 13.7171 19.2809 13.3495C19.62 12.9819 19.8082 12.5001 19.8082 12C19.8082 11.4999 19.62 11.0181 19.2809 10.6505C18.9419 10.2829 18.4768 10.0564 17.9784 10.0161C17.4799 9.97573 16.9845 10.1245 16.5908 10.4328C16.197 10.7411 15.9337 11.1864 15.8533 11.68H13.4661C13.4291 11.0908 13.2769 10.5146 13.0181 9.98398L15.8981 7.54878C16.2515 7.82847 16.6894 7.97994 17.1401 7.97841C17.5908 7.97688 18.0276 7.82243 18.3791 7.54034C18.7306 7.25825 18.976 6.86522 19.0751 6.42555C19.1741 5.98588 19.121 5.5256 18.9245 5.12002C18.728 4.71444 18.3996 4.38757 17.9931 4.19289C17.5866 3.99821 17.1261 3.94725 16.6869 4.04833C16.2477 4.14942 15.8558 4.39658 15.5753 4.74937C15.2948 5.10216 15.1424 5.53969 15.1429 5.99038C15.1392 6.37678 15.2506 6.75554 15.4629 7.07838L12.6789 9.42398C12.1262 8.59588 11.3217 7.96753 10.3844 7.63178C9.44711 7.29602 8.42666 7.27067 7.47383 7.55946C6.521 7.84825 5.68633 8.43586 5.09313 9.23549C4.49994 10.0351 4.17969 11.0043 4.17969 12C4.17969 12.9956 4.49994 13.9648 5.09313 14.7645C5.68633 15.5641 6.521 16.1517 7.47383 16.4405C8.42666 16.7293 9.44711 16.7039 10.3844 16.3682C11.3217 16.0324 12.1262 15.4041 12.6789 14.576L15.4629 16.9216C15.2506 17.2444 15.1392 17.6232 15.1429 18.0096C15.1428 18.4594 15.2952 18.896 15.5753 19.248C15.8555 19.5999 16.2468 19.8464 16.6852 19.9471C17.1236 20.0479 17.5832 19.9969 17.9889 19.8025C18.3945 19.6081 18.7223 19.2818 18.9184 18.877C19.1146 18.4722 19.1676 18.0128 19.0688 17.5739C18.97 17.1351 18.7252 16.7427 18.3745 16.4611C18.0238 16.1794 17.5879 16.025 17.1381 16.0232C16.6882 16.0214 16.2511 16.1723 15.8981 16.4512L13.0181 14.016C13.2769 13.4854 13.4291 12.9092 13.4661 12.32H15.8533ZM17.8117 10.6496C18.079 10.6489 18.3404 10.7276 18.5628 10.8756C18.7853 11.0236 18.9589 11.2343 19.0616 11.481C19.1643 11.7277 19.1915 11.9993 19.1398 12.2615C19.088 12.5236 18.9597 12.7645 18.7709 12.9537C18.5822 13.1429 18.3416 13.2718 18.0796 13.3242C17.8175 13.3766 17.5458 13.35 17.2989 13.2479C17.052 13.1458 16.8409 12.9727 16.6923 12.7506C16.5438 12.5284 16.4645 12.2672 16.4645 12C16.4645 11.6424 16.6064 11.2994 16.8589 11.0462C17.1115 10.7931 17.4541 10.6504 17.8117 10.6496V10.6496ZM17.1461 4.63998C17.4132 4.63998 17.6743 4.71918 17.8964 4.86757C18.1185 5.01595 18.2915 5.22685 18.3937 5.47361C18.496 5.72036 18.5227 5.99188 18.4706 6.25383C18.4185 6.51579 18.2899 6.7564 18.101 6.94526C17.9122 7.13412 17.6715 7.26273 17.4096 7.31484C17.1476 7.36694 16.8761 7.3402 16.6294 7.23799C16.3826 7.13578 16.1717 6.9627 16.0233 6.74062C15.8749 6.51855 15.7957 6.25747 15.7957 5.99038C15.7957 5.63223 15.938 5.28876 16.1913 5.03551C16.4445 4.78226 16.788 4.63998 17.1461 4.63998ZM17.1461 16.6624C17.4134 16.6624 17.6746 16.7417 17.8967 16.8902C18.1189 17.0387 18.2919 17.2498 18.394 17.4967C18.4962 17.7437 18.5227 18.0154 18.4704 18.2774C18.418 18.5395 18.2891 18.7801 18.0999 18.9688C17.9107 19.1575 17.6698 19.2859 17.4076 19.3376C17.1455 19.3894 16.8738 19.3622 16.6271 19.2595C16.3804 19.1568 16.1698 18.9832 16.0218 18.7607C15.8738 18.5382 15.7951 18.2768 15.7957 18.0096C15.7966 17.652 15.9392 17.3093 16.1924 17.0568C16.4455 16.8042 16.7885 16.6624 17.1461 16.6624ZM8.83894 16C8.04781 16 7.27445 15.7654 6.61666 15.3259C5.95886 14.8863 5.44617 14.2616 5.14342 13.5307C4.84067 12.7998 4.76146 11.9955 4.9158 11.2196C5.07014 10.4437 5.4511 9.73097 6.01051 9.17156C6.56992 8.61215 7.28265 8.23118 8.05858 8.07684C8.8345 7.9225 9.63877 8.00171 10.3697 8.30446C11.1006 8.60722 11.7253 9.11991 12.1648 9.7777C12.6043 10.4355 12.8389 11.2089 12.8389 12C12.8372 13.0603 12.4153 14.0768 11.6655 14.8265C10.9157 15.5763 9.89929 15.9983 8.83894 16V16Z", fill: "white" })] })),
    elasticmapreduce: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M18.119 13.2448C17.8577 13.2438 17.5996 13.3018 17.3638 13.4144L16.6406 12.0224L17.5366 10.3328C17.9129 10.4662 18.3233 10.4677 18.7006 10.3371C19.0778 10.2065 19.3995 9.95152 19.6127 9.614C19.8259 9.27648 19.9181 8.8765 19.874 8.47971C19.8299 8.08292 19.6523 7.7129 19.3702 7.4304C19.2067 7.26688 19.0127 7.13716 18.7991 7.04866C18.5855 6.96016 18.3566 6.91461 18.1254 6.91461C17.8942 6.91461 17.6653 6.96016 17.4517 7.04866C17.2381 7.13716 17.044 7.26688 16.8806 7.4304C16.6708 7.64131 16.5178 7.90177 16.4355 8.18762C16.3533 8.47348 16.3446 8.77547 16.4102 9.0656L15.2742 9.4176L14.0102 7.04L14.0326 7.0176C14.2707 6.77945 14.4355 6.47799 14.5074 6.149C14.5793 5.82 14.5553 5.47728 14.4383 5.16151C14.3212 4.84574 14.1161 4.57018 13.8471 4.36752C13.5781 4.16487 13.2567 4.04364 12.9209 4.01821C12.5851 3.99278 12.249 4.06423 11.9526 4.22407C11.6562 4.38391 11.4119 4.62544 11.2486 4.91998C11.0854 5.21453 11.01 5.54973 11.0316 5.8858C11.0531 6.22188 11.1707 6.54471 11.3702 6.816L10.0006 8.704C9.41357 8.34594 8.7418 8.15066 8.05432 8.13823C7.36684 8.1258 6.68845 8.29666 6.08887 8.63325C5.4893 8.96984 4.99017 9.46003 4.64279 10.0534C4.2954 10.6468 4.1123 11.322 4.1123 12.0096C4.1123 12.6972 4.2954 13.3724 4.64279 13.9658C4.99017 14.5592 5.4893 15.0493 6.08887 15.3859C6.68845 15.7225 7.36684 15.8934 8.05432 15.881C8.7418 15.8685 9.41357 15.6733 10.0006 15.3152L11.3638 17.2064C11.1634 17.4773 11.045 17.8001 11.0227 18.1364C11.0004 18.4726 11.0751 18.8082 11.2379 19.1032C11.4007 19.3983 11.6448 19.6404 11.9412 19.8008C12.2376 19.9612 12.5738 20.0331 12.9098 20.008C13.2459 19.9829 13.5677 19.8619 13.8369 19.6593C14.1062 19.4567 14.3117 19.1811 14.4289 18.8652C14.5462 18.5492 14.5702 18.2063 14.4983 17.8771C14.4263 17.5478 14.2613 17.2462 14.023 17.008L14.0038 16.9888L15.2454 14.6432L16.3494 14.992V15.0176C16.3494 15.3657 16.4526 15.706 16.646 15.9954C16.8394 16.2848 17.1143 16.5104 17.4359 16.6436C17.7575 16.7768 18.1113 16.8117 18.4527 16.7438C18.7942 16.6759 19.1078 16.5082 19.3539 16.2621C19.6 16.016 19.7677 15.7024 19.8356 15.361C19.9035 15.0196 19.8686 14.6657 19.7354 14.3441C19.6022 14.0225 19.3766 13.7476 19.0872 13.5542C18.7978 13.3608 18.4575 13.2576 18.1094 13.2576L18.119 13.2448ZM17.3286 7.8848C17.5429 7.67679 17.8299 7.56046 18.1286 7.56046C18.4273 7.56046 18.7142 7.67679 18.9286 7.8848C19.0829 8.04233 19.1873 8.24192 19.2287 8.45855C19.2701 8.67517 19.2466 8.89919 19.1611 9.10251C19.0757 9.30583 18.9321 9.47941 18.7484 9.60146C18.5648 9.72352 18.3491 9.78863 18.1286 9.78863C17.908 9.78863 17.6924 9.72352 17.5087 9.60146C17.325 9.47941 17.1815 9.30583 17.096 9.10251C17.0106 8.89919 16.9871 8.67517 17.0285 8.45855C17.0698 8.24192 17.1742 8.04233 17.3286 7.8848V7.8848ZM16.6598 9.6576C16.722 9.75224 16.7938 9.84017 16.8742 9.92L16.9766 10.0128L16.2758 11.3376L15.5686 9.9968L16.6598 9.6576ZM11.9942 4.9696C12.2038 4.75742 12.4891 4.63721 12.7874 4.63541C13.0857 4.63361 13.3724 4.75037 13.5846 4.96C13.7968 5.16962 13.917 5.45495 13.9188 5.75321C13.9206 6.05147 13.8038 6.33822 13.5942 6.5504C13.3802 6.75915 13.0931 6.876 12.7942 6.876C12.4953 6.876 12.2082 6.75915 11.9942 6.5504C11.7851 6.34048 11.6677 6.05628 11.6677 5.76C11.6677 5.46372 11.7851 5.17951 11.9942 4.9696V4.9696ZM11.8406 7.2448C12.1268 7.42832 12.4606 7.52399 12.8006 7.52C13.0347 7.51983 13.2664 7.47305 13.4822 7.3824L14.6534 9.6224L11.591 10.5824C11.3968 10.0921 11.1013 9.64827 10.7238 9.28C10.6566 9.2128 10.5894 9.1488 10.519 9.088L11.8406 7.2448ZM5.69979 14.2848C5.24762 13.8329 4.93964 13.257 4.81481 12.63C4.68997 12.003 4.75388 11.3531 4.99845 10.7624C5.24303 10.1717 5.65728 9.66687 6.18882 9.31166C6.72035 8.95645 7.34529 8.76686 7.98459 8.76686C8.62388 8.76686 9.24882 8.95645 9.78036 9.31166C10.3119 9.66687 10.7261 10.1717 10.9707 10.7624C11.2153 11.3531 11.2792 12.003 11.1544 12.63C11.0295 13.257 10.7216 13.8329 10.2694 14.2848C9.66262 14.888 8.84179 15.2266 7.98619 15.2266C7.13058 15.2266 6.30975 14.888 5.70299 14.2848H5.69979ZM13.5814 19.0304C13.3674 19.2392 13.0803 19.356 12.7814 19.356C12.4825 19.356 12.1954 19.2392 11.9814 19.0304C11.827 18.8729 11.7226 18.6733 11.6813 18.4566C11.6399 18.24 11.6634 18.016 11.7488 17.8127C11.8343 17.6094 11.9778 17.4358 12.1615 17.3137C12.3452 17.1917 12.5608 17.1266 12.7814 17.1266C13.0019 17.1266 13.2176 17.1917 13.4012 17.3137C13.5849 17.4358 13.7285 17.6094 13.8139 17.8127C13.8994 18.016 13.9229 18.24 13.8815 18.4566C13.8401 18.6733 13.7357 18.8729 13.5814 19.0304V19.0304ZM13.479 16.6208C13.216 16.5087 12.9297 16.4624 12.6448 16.4858C12.3599 16.5092 12.0849 16.6017 11.8438 16.7552L10.5254 14.9216C10.5958 14.8608 10.6598 14.8 10.7238 14.736C11.0897 14.3714 11.3772 13.9358 11.5686 13.456L14.6342 14.416L13.479 16.6208ZM14.9382 13.8624L11.7606 12.8576C11.8838 12.3022 11.8838 11.7266 11.7606 11.1712L14.9382 10.1888L15.8982 12.0256L14.9382 13.8624ZM16.487 14.3488L15.559 14.0576L16.2694 12.7104L16.8422 13.7984C16.6871 13.9554 16.5662 14.1428 16.487 14.3488V14.3488ZM18.9126 15.7952C18.6982 16.0032 18.4113 16.1195 18.1126 16.1195C17.8139 16.1195 17.5269 16.0032 17.3126 15.7952C17.1582 15.6377 17.0538 15.4381 17.0125 15.2214C16.9711 15.0048 16.9946 14.7808 17.08 14.5775C17.1655 14.3742 17.309 14.2006 17.4927 14.0785C17.6764 13.9565 17.892 13.8914 18.1126 13.8914C18.3331 13.8914 18.5488 13.9565 18.7324 14.0785C18.9161 14.2006 19.0597 14.3742 19.1451 14.5775C19.2306 14.7808 19.2541 15.0048 19.2127 15.2214C19.1713 15.4381 19.0669 15.6377 18.9126 15.7952V15.7952ZM9.60059 11.68V12.32H8.32059V13.6H7.68059V12.32H6.40059V11.68H7.68059V10.4H8.32059V11.68H9.60059Z", fill: "white" })] })),
    es: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M7.2 8.71997H4.32C4.23513 8.71997 4.15374 8.75368 4.09373 8.8137C4.03371 8.87371 4 8.9551 4 9.03997V19.28C4 19.3648 4.03371 19.4462 4.09373 19.5062C4.15374 19.5663 4.23513 19.6 4.32 19.6H7.2C7.28487 19.6 7.36626 19.5663 7.42627 19.5062C7.48629 19.4462 7.52 19.3648 7.52 19.28V9.03997C7.52 8.9551 7.48629 8.87371 7.42627 8.8137C7.36626 8.75368 7.28487 8.71997 7.2 8.71997ZM6.88 18.96H4.64V9.35997H6.88V18.96Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.6802 17.4944V19.28C11.6802 19.3649 11.6464 19.4463 11.5864 19.5063C11.5264 19.5663 11.445 19.6 11.3602 19.6H8.48016C8.39529 19.6 8.31389 19.5663 8.25388 19.5063C8.19387 19.4463 8.16016 19.3649 8.16016 19.28V13.76C8.2642 14.3548 8.48147 14.924 8.80016 15.4368V18.9568H11.0402V17.28C11.2476 17.368 11.4616 17.4397 11.6802 17.4944V17.4944Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.6802 7.11999V8.25279C11.4612 8.31167 11.2472 8.38764 11.0402 8.47999V7.43999H8.80016V10.32C8.48147 10.8328 8.2642 11.402 8.16016 11.9968V7.11999C8.16016 7.03512 8.19387 6.95373 8.25388 6.89371C8.31389 6.8337 8.39529 6.79999 8.48016 6.79999H11.3602C11.445 6.79999 11.5264 6.8337 11.5864 6.89371C11.6464 6.95373 11.6802 7.03512 11.6802 7.11999Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.2003 17.7504V18.96H12.9603V17.68C12.7463 17.6807 12.5325 17.6668 12.3203 17.6384V19.28C12.3203 19.3649 12.354 19.4463 12.414 19.5063C12.474 19.5663 12.5554 19.6 12.6403 19.6H15.5203C15.6052 19.6 15.6866 19.5663 15.7466 19.5063C15.8066 19.4463 15.8403 19.3649 15.8403 19.28V18.3904L15.2003 17.7504ZM15.5203 4.23999H12.6403C12.5554 4.23999 12.474 4.2737 12.414 4.33372C12.354 4.39373 12.3203 4.47512 12.3203 4.55999V8.12159C12.5324 8.0929 12.7463 8.079 12.9603 8.07999V8.07999V4.87999H15.2003V8.63999C15.4245 8.75872 15.6386 8.89572 15.8403 9.04959V4.56959C15.8416 4.52677 15.8343 4.48412 15.8188 4.44418C15.8033 4.40424 15.7799 4.36782 15.75 4.33708C15.7202 4.30635 15.6845 4.28191 15.645 4.26523C15.6056 4.24856 15.5632 4.23997 15.5203 4.23999Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.6805 5.83997H16.8005C16.7156 5.83997 16.6342 5.87368 16.5742 5.93369C16.5142 5.9937 16.4805 6.0751 16.4805 6.15997V9.62877C16.7272 9.89513 16.942 10.1894 17.1205 10.5056V6.47997H19.3605V16.32L20.0005 16.96V6.15997C20.0005 6.0751 19.9668 5.9937 19.9067 5.93369C19.8467 5.87368 19.7653 5.83997 19.6805 5.83997Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.6127 17.488L16.7327 14.608C17.144 13.712 17.2237 12.6991 16.9576 11.7498C16.6916 10.8005 16.097 9.97658 15.2799 9.42488C14.4629 8.87319 13.4764 8.6296 12.4965 8.73754C11.5166 8.84549 10.6068 9.29796 9.92942 10.0143C9.25204 10.7306 8.85108 11.6642 8.79802 12.6486C8.74497 13.6331 9.04326 14.6044 9.63972 15.3894C10.2362 16.1743 11.092 16.722 12.0547 16.9346C13.0174 17.1473 14.0243 17.0111 14.8959 16.5504L17.7279 19.3792C17.9774 19.6292 18.316 19.7697 18.6692 19.77C19.0223 19.7703 19.3612 19.6303 19.6111 19.3808C19.861 19.1313 20.0016 18.7927 20.0019 18.4396C20.0022 18.0864 19.8622 17.7476 19.6127 17.4976V17.488ZM9.43989 12.8736C9.43989 12.1774 9.64634 11.4969 10.0331 10.918C10.4199 10.3392 10.9697 9.88798 11.6128 9.62156C12.256 9.35514 12.9638 9.28544 13.6466 9.42126C14.3294 9.55708 14.9566 9.89232 15.4489 10.3846C15.9412 10.8769 16.2764 11.5041 16.4123 12.1869C16.5481 12.8697 16.4784 13.5775 16.2119 14.2207C15.9455 14.8639 15.4944 15.4136 14.9155 15.8004C14.3366 16.1872 13.6561 16.3936 12.9599 16.3936C12.0263 16.3936 11.131 16.0228 10.4709 15.3626C9.81075 14.7025 9.43989 13.8072 9.43989 12.8736ZM19.1583 18.9184C19.0282 19.0478 18.8522 19.1204 18.6687 19.1204C18.4852 19.1204 18.3092 19.0478 18.1791 18.9184L15.4527 16.192C15.8267 15.9095 16.1512 15.5666 16.4127 15.1776L19.1647 17.9424C19.293 18.0728 19.3644 18.2488 19.3632 18.4317C19.362 18.6147 19.2883 18.7897 19.1583 18.9184V18.9184Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.5421 14.4C11.319 14.2403 11.1298 14.0379 10.9858 13.8044C10.8417 13.5709 10.7455 13.3111 10.7029 13.0401C10.6602 12.7691 10.6719 12.4923 10.7374 12.2258C10.8028 11.9594 10.9206 11.7086 11.0839 11.4882C11.2472 11.2677 11.4528 11.082 11.6886 10.9418C11.9245 10.8016 12.1858 10.7098 12.4575 10.6716C12.7292 10.6335 13.0058 10.6498 13.2711 10.7196C13.5364 10.7895 13.7852 10.9114 14.0029 11.0784L13.6221 11.5936C13.4714 11.482 13.3003 11.4012 13.1184 11.3558C12.9365 11.3103 12.7475 11.3012 12.562 11.3288C12.3766 11.3564 12.1985 11.4203 12.0377 11.5168C11.877 11.6133 11.7368 11.7405 11.6253 11.8912C11.5137 12.0418 11.4329 12.213 11.3875 12.3948C11.342 12.5767 11.3329 12.7658 11.3605 12.9512C11.3882 13.1366 11.452 13.3148 11.5485 13.4755C11.645 13.6362 11.7722 13.7764 11.9229 13.888L11.5421 14.4Z", fill: "white" })] })),
    firehose: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M12.0001 8.78406H10.4001C10.3152 8.78406 10.2338 8.81777 10.1738 8.87778C10.1138 8.93779 10.0801 9.01919 10.0801 9.10406V14.8641C10.0801 14.9489 10.1138 15.0303 10.1738 15.0903C10.2338 15.1503 10.3152 15.1841 10.4001 15.1841H12.0001C12.0849 15.1841 12.1663 15.1503 12.2264 15.0903C12.2864 15.0303 12.3201 14.9489 12.3201 14.8641V9.10406C12.3201 9.01919 12.2864 8.93779 12.2264 8.87778C12.1663 8.81777 12.0849 8.78406 12.0001 8.78406V8.78406ZM11.6801 14.5441H10.7201V9.42406H11.6801V14.5441Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.9101 10.3904L12.3197 9.60002L12.0701 9.54882C12.0231 9.53778 11.9743 9.53752 11.9271 9.54805C11.88 9.55858 11.8359 9.57963 11.7981 9.60962C11.7614 9.6394 11.7318 9.67694 11.7113 9.71954C11.6908 9.76214 11.68 9.80875 11.6797 9.85602V14.1184C11.6791 14.1668 11.6894 14.2146 11.7099 14.2584C11.7304 14.3022 11.7606 14.3408 11.7981 14.3712C11.8566 14.4142 11.9271 14.4377 11.9997 14.4384H12.0701L12.3197 14.3808L15.9101 13.584C15.9823 13.5678 16.0466 13.527 16.0921 13.4686C16.1376 13.4103 16.1615 13.338 16.1597 13.264V10.704C16.16 10.6311 16.1355 10.5603 16.0901 10.5033C16.0447 10.4463 15.9812 10.4065 15.9101 10.3904ZM15.5197 13.0112L12.3197 13.7216V10.24L15.5197 10.9536V13.0112Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.9998 10.24V10.912C18.9588 11.2061 17.8815 11.3515 16.7998 11.344V10.704C17.8838 10.7123 18.9628 10.5558 19.9998 10.24V10.24Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.9998 11.488V12.128C18.9377 12.2509 17.869 12.3075 16.7998 12.2976V11.6576C17.869 11.6699 18.9379 11.6132 19.9998 11.488V11.488Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.9998 11.8912V12.5312C18.9404 12.3742 17.8707 12.2971 16.7998 12.3008V11.6608C17.8707 11.6573 18.9404 11.7343 19.9998 11.8912V11.8912Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M19.9998 13.072V13.76C18.9657 13.429 17.8856 13.2637 16.7998 13.2704V12.6304C17.8823 12.621 18.9603 12.7697 19.9998 13.072V13.072Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.44 10.384V11.024C7.53368 10.9234 5.67442 10.3952 4 9.47841V8.72961C5.4112 9.65121 7.2896 10.2048 9.44 10.384Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.44 11.6576V12.2976C8.512 12.256 7.456 12.1696 6.3936 12.016C5.58522 11.9063 4.78543 11.7405 4 11.52V10.8576C5.77494 11.3403 7.60125 11.6088 9.44 11.6576V11.6576Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.44 11.7376V12.3776C7.60139 12.428 5.77527 12.6965 4 13.1776V12.5152C4.78722 12.2939 5.58927 12.1292 6.4 12.0224C7.456 11.8656 8.512 11.7824 9.44 11.7376Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.4405 9.33122V9.97122C5.0277 9.45922 4.0293 7.19682 4.0293 5.27042C4.0293 5.19682 4.0293 3.99042 4.0293 3.99042H4.6693C4.6693 4.06082 4.6693 5.21282 4.6693 5.28642C4.6693 6.93122 5.5525 8.85442 9.4405 9.33122Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.44 12.9888V13.6288C7.2928 13.808 5.4144 14.3776 4 15.2928V14.5472C5.67436 13.6284 7.53311 13.0959 9.44 12.9888V12.9888Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M9.44051 14.0544V14.6944C6.95731 14.9984 4.66931 16.0096 4.66931 18.6944C4.66931 18.7136 4.66931 18.8128 4.66931 18.944C4.66931 19.2224 4.66931 19.872 4.66931 19.952L4.40691 19.9744L4.03251 20.0032C4.03083 19.9937 4.03083 19.9839 4.03251 19.9744C4.03251 19.8976 4.03251 19.6896 4.03251 18.9376C4.03251 18.8032 4.03251 18.7136 4.03251 18.6944C4.02931 16.7936 5.02771 14.5632 9.44051 14.0544Z", fill: "white" })] })),
    glue: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M12.019 20C11.9442 20.0001 11.8718 19.9741 11.8142 19.9264L9.87501 18.3264C9.8244 18.2843 9.78803 18.2275 9.77085 18.164C9.75367 18.1004 9.75652 18.0331 9.77901 17.9712C9.80137 17.9093 9.84224 17.8559 9.89606 17.8181C9.94988 17.7803 10.014 17.76 10.0798 17.76H11.0398V16.8H11.6798V18.08C11.6798 18.1649 11.6461 18.2462 11.5861 18.3063C11.5261 18.3663 11.4447 18.4 11.3598 18.4H10.9694L12.0158 19.264L13.043 18.4H12.6398C12.5549 18.4 12.4735 18.3663 12.4135 18.3063C12.3535 18.2462 12.3198 18.1649 12.3198 18.08V16.8H12.9598V17.76H13.9198C13.9849 17.7606 14.0483 17.7811 14.1015 17.8188C14.1547 17.8564 14.1951 17.9094 14.2174 17.9706C14.2396 18.0318 14.2427 18.0984 14.2261 18.1614C14.2095 18.2244 14.1741 18.2808 14.1246 18.3232L12.2238 19.9232C12.1667 19.972 12.0942 19.9992 12.019 20Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M14.8704 8.00003L14.7936 8.64003C15.3205 8.67872 15.8402 8.7863 16.3392 8.96003C15.7728 9.20643 14.176 9.44003 12 9.44003C9.75997 9.44003 8.15997 9.18403 7.65117 8.96003C8.11197 8.76483 9.43677 8.50243 11.68 8.48003V7.84003C7.32477 7.88483 6.87997 8.63683 6.87997 8.96003C6.87855 8.98134 6.87855 9.00272 6.87997 9.02403C6.88648 9.06323 6.89945 9.10108 6.91837 9.13603L6.98237 9.24803C6.99652 9.27349 7.01371 9.29713 7.03357 9.31843C7.06613 9.35031 7.10147 9.37923 7.13917 9.40483L10.72 14.9888V15.8432C10.7198 15.9086 10.7396 15.9725 10.7768 16.0263C10.814 16.08 10.8667 16.1211 10.928 16.144C11.2778 16.2766 11.6483 16.3459 12.0224 16.3488C12.3848 16.3477 12.7434 16.276 13.0784 16.1376C13.1374 16.1141 13.1881 16.0736 13.224 16.0211C13.2599 15.9687 13.2794 15.9068 13.28 15.8432V14.9856L16.8448 9.40803C16.9252 9.36316 16.9927 9.29841 17.0409 9.21996C17.0891 9.14152 17.1163 9.05202 17.12 8.96003C17.12 8.61763 16.8544 8.23683 14.8704 8.00003ZM12.6912 14.72C12.6579 14.7715 12.6401 14.8315 12.64 14.8928V15.616C12.2231 15.7455 11.7768 15.7455 11.36 15.616V14.8928C11.3598 14.8315 11.342 14.7715 11.3088 14.72L8.13117 9.75683C9.40733 9.98883 10.703 10.096 12 10.0768C13.2947 10.0929 14.588 9.98573 15.8624 9.75683L12.6912 14.72Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.9203 8.80001H12.6403C12.5554 8.80001 12.4741 8.76629 12.414 8.70628C12.354 8.64627 12.3203 8.56487 12.3203 8.48V7.2C12.3203 7.11514 12.354 7.03374 12.414 6.97373C12.4741 6.91372 12.5554 6.88 12.6403 6.88H13.9203C14.0052 6.88 14.0866 6.91372 14.1466 6.97373C14.2066 7.03374 14.2403 7.11514 14.2403 7.2V8.48C14.2403 8.56487 14.2066 8.64627 14.1466 8.70628C14.0866 8.76629 14.0052 8.80001 13.9203 8.80001ZM12.9603 8.16H13.6003V7.52H12.9603V8.16Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M13.2807 5.92H12.0007C11.9158 5.92 11.8344 5.88629 11.7744 5.82627C11.7144 5.76626 11.6807 5.68487 11.6807 5.6V4.32C11.6807 4.23513 11.7144 4.15374 11.7744 4.09373C11.8344 4.03371 11.9158 4 12.0007 4H13.2807C13.3655 4 13.4469 4.03371 13.5069 4.09373C13.567 4.15374 13.6007 4.23513 13.6007 4.32V5.6C13.6007 5.68487 13.567 5.76626 13.5069 5.82627C13.4469 5.88629 13.3655 5.92 13.2807 5.92ZM12.3207 5.28H12.9607V4.64H12.3207V5.28Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M10.7201 7.51998H9.44012C9.35525 7.51998 9.27385 7.48626 9.21384 7.42625C9.15383 7.36624 9.12012 7.28484 9.12012 7.19998V5.91998C9.12012 5.83511 9.15383 5.75371 9.21384 5.6937C9.27385 5.63369 9.35525 5.59998 9.44012 5.59998H10.7201C10.805 5.59998 10.8864 5.63369 10.9464 5.6937C11.0064 5.75371 11.0401 5.83511 11.0401 5.91998V7.19998C11.0401 7.28484 11.0064 7.36624 10.9464 7.42625C10.8864 7.48626 10.805 7.51998 10.7201 7.51998ZM9.76012 6.87998H10.4001V6.23998H9.76012V6.87998Z", fill: "white" })] })),
    iam: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M19.104 6.08002H4.896C4.65863 6.08086 4.43121 6.17553 4.26336 6.34338C4.09551 6.51123 4.00084 6.73864 4 6.97602V17.024C4.00084 17.2614 4.09551 17.4888 4.26336 17.6567C4.43121 17.8245 4.65863 17.9192 4.896 17.92H19.104C19.3414 17.9192 19.5688 17.8245 19.7366 17.6567C19.9045 17.4888 19.9992 17.2614 20 17.024V6.97602C19.9992 6.73864 19.9045 6.51123 19.7366 6.34338C19.5688 6.17553 19.3414 6.08086 19.104 6.08002V6.08002ZM19.36 17.024C19.36 17.0919 19.333 17.157 19.285 17.205C19.237 17.253 19.1719 17.28 19.104 17.28H4.896C4.8281 17.28 4.76299 17.253 4.71498 17.205C4.66697 17.157 4.64 17.0919 4.64 17.024V6.97602C4.64 6.90812 4.66697 6.84301 4.71498 6.795C4.76299 6.74699 4.8281 6.72002 4.896 6.72002H19.104C19.1719 6.72002 19.237 6.74699 19.285 6.795C19.333 6.84301 19.36 6.90812 19.36 6.97602V17.024Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.16 10.24H12.96V10.88H16.16V10.24Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.0804 10.24H17.4404V10.88H18.0804V10.24Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.5875 11.296C11.5578 11.2658 11.5225 11.2417 11.4835 11.2252C11.4445 11.2088 11.4026 11.2002 11.3603 11.2H6.88027V9.60002C6.88472 9.42132 6.93034 9.24605 7.01359 9.08787C7.09685 8.92969 7.21549 8.79285 7.36027 8.68802C7.68303 8.44562 8.07665 8.31629 8.48027 8.32002C8.89985 8.31411 9.30796 8.45695 9.63227 8.72322C9.76644 8.82779 9.87608 8.96048 9.95347 9.11195C10.0309 9.26343 10.0742 9.43002 10.0803 9.60002V11.2H10.7203V9.47202C10.7145 9.22096 10.6505 8.97468 10.5333 8.75256C10.4161 8.53045 10.249 8.33856 10.0451 8.19202C9.59499 7.85196 9.04432 7.67178 8.48027 7.68002C7.24507 7.68002 6.24027 8.48322 6.24027 9.46882V11.2H5.60027C5.5154 11.2 5.43401 11.2337 5.374 11.2937C5.31399 11.3538 5.28027 11.4351 5.28027 11.52V16C5.28027 16.0849 5.31399 16.1663 5.374 16.2263C5.43401 16.2863 5.5154 16.32 5.60027 16.32H11.3603C11.4451 16.32 11.5265 16.2863 11.5865 16.2263C11.6466 16.1663 11.6803 16.0849 11.6803 16V11.52C11.6799 11.4361 11.6466 11.3556 11.5875 11.296ZM11.0403 12.8H10.0803V13.44H11.0403V14.08H10.0803V14.72H11.0403V15.68H5.92027V11.84H11.0403V12.8Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.47996 12.3424C8.26009 12.3432 8.04751 12.4213 7.87937 12.563C7.71123 12.7046 7.59822 12.9009 7.5601 13.1174C7.52198 13.334 7.56117 13.557 7.67081 13.7476C7.78046 13.9382 7.95359 14.0841 8.15995 14.16V15.04H8.79996V14.16C9.00632 14.0841 9.17945 13.9382 9.2891 13.7476C9.39874 13.557 9.43793 13.334 9.39981 13.1174C9.36169 12.9009 9.24868 12.7046 9.08054 12.563C8.9124 12.4213 8.69982 12.3432 8.47996 12.3424V12.3424ZM8.47996 13.6864C8.39958 13.6864 8.321 13.6626 8.25417 13.6179C8.18734 13.5733 8.13525 13.5098 8.10449 13.4355C8.07373 13.3613 8.06568 13.2796 8.08136 13.2007C8.09704 13.1219 8.13575 13.0495 8.19259 12.9926C8.24942 12.9358 8.32184 12.8971 8.40067 12.8814C8.4795 12.8657 8.56122 12.8738 8.63548 12.9045C8.70974 12.9353 8.77321 12.9874 8.81787 13.0542C8.86252 13.1211 8.88636 13.1996 8.88636 13.28C8.88636 13.3334 8.87584 13.3862 8.85542 13.4355C8.835 13.4848 8.80506 13.5296 8.76732 13.5674C8.72959 13.6051 8.68478 13.635 8.63548 13.6555C8.58617 13.6759 8.53332 13.6864 8.47996 13.6864V13.6864Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.2 11.84H12.96V12.48H15.2V11.84Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.0805 11.84H16.4805V12.48H18.0805V11.84Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.12 13.44H12.96V14.08H17.12V13.44Z", fill: "white" })] })),
    kinesis: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#693CC5" }), jsxRuntimeExports.jsx("path", { d: "M20.0099 10.4V11.04H17.1875C9.79865 11.04 4.00985 8.128 4.00985 4.4032C4.00881 4.26836 4.01736 4.13362 4.03545 4H4.67545C4.65367 4.13329 4.64296 4.26815 4.64345 4.4032C4.64345 7.7088 10.2691 10.4 17.1875 10.4H20.0099Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.01 11.68V12.32H16.0932C9.83084 12.32 5.32844 13.3344 4.01004 15.0368V14.1792C5.40844 12.9568 8.00044 12.3232 10.5316 12C7.99404 11.68 5.41164 11.04 4.00684 9.84645V8.91205C5.30924 10.6208 9.72524 11.648 15.8788 11.68H20.01Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.0095 9.11683V9.75683H18.6847C12.2591 9.75683 7.59668 7.58083 7.59668 4.58243C7.59668 4.58243 7.59668 4.21443 7.59668 3.99683H8.27188C8.27188 4.15043 8.27188 4.46723 8.27188 4.58243C8.27188 7.14243 12.7519 9.11683 18.6879 9.11683H20.0095Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.0097 12.96V13.6H17.1873C10.2657 13.6 4.6369 16.3008 4.6369 19.6064C4.63682 19.7382 4.64645 19.8697 4.6657 20H4.0257C4.00752 19.8696 3.99896 19.7381 4.0001 19.6064C4.0001 15.8784 9.7953 12.96 17.1937 12.96H20.0097Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M20.0098 14.2401V14.8801H18.685C12.7394 14.8801 8.25621 16.8 8.25621 19.3824C8.25621 19.5072 8.25621 19.8688 8.25621 20H7.61621C7.61621 19.7888 7.61621 19.3888 7.61621 19.3824C7.61621 16.4001 12.2754 14.2401 18.6914 14.2401H20.0098Z", fill: "white" })] })),
    machinelearning: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#1C7B68" }), jsxRuntimeExports.jsx("path", { d: "M19.4631 13.3493C19.4292 13.3066 19.3834 13.2751 19.3314 13.2585L18.4534 12.9805C18.509 12.4414 18.4943 11.8973 18.4095 11.3619L19.267 11.0371C19.3043 11.023 19.3384 11.0015 19.3671 10.9738C19.3958 10.9461 19.4185 10.9129 19.4339 10.8761C19.4496 10.8396 19.4577 10.8002 19.4577 10.7605C19.4577 10.7207 19.4496 10.6814 19.4339 10.6449L18.2924 8.11609C18.2777 8.08049 18.2561 8.04815 18.2288 8.02093C18.2015 7.9937 18.1691 7.97213 18.1335 7.95745C18.0979 7.94276 18.0597 7.93526 18.0212 7.93536C17.9827 7.93546 17.9445 7.94317 17.909 7.95805H17.8885L17.0748 8.37951C16.7344 7.96049 16.3409 7.58759 15.9041 7.27024L16.2817 6.43317C16.2973 6.398 16.3058 6.36011 16.3067 6.32165C16.3076 6.2832 16.301 6.24494 16.2871 6.20906C16.2733 6.17317 16.2525 6.14038 16.2259 6.11254C16.1994 6.0847 16.1676 6.06237 16.1324 6.04683L13.6446 5.12195H13.2261C13.1805 5.15618 13.1459 5.20297 13.1266 5.25658L12.8339 6.13463H12.7197V6.72C12.8182 6.71323 12.9172 6.72312 13.0124 6.74927C13.0818 6.76018 13.1528 6.74578 13.2124 6.70871C13.272 6.67163 13.3164 6.61435 13.3373 6.54731L13.5948 5.73366L15.6114 6.51512L15.2602 7.28195C15.2351 7.34374 15.2319 7.41223 15.2511 7.4761C15.2702 7.53997 15.3106 7.59539 15.3656 7.63317C15.9007 7.98614 16.371 8.42872 16.7558 8.94146C16.797 8.99818 16.8572 9.03824 16.9254 9.05435C16.9936 9.07046 17.0653 9.06156 17.1275 9.02926L17.8973 8.63414L18.7753 10.5951L17.9792 10.8878C17.9148 10.9127 17.8613 10.9595 17.8281 11.02C17.7949 11.0806 17.7842 11.1509 17.7978 11.2185C17.9235 11.846 17.9414 12.4904 17.8505 13.1239C17.8388 13.1937 17.8528 13.2654 17.8899 13.3257C17.9271 13.386 17.9848 13.4307 18.0524 13.4517L18.8631 13.7063L18.0934 15.7171L17.3119 15.3805C17.2487 15.3523 17.1776 15.3475 17.1112 15.3667C17.0447 15.386 16.9873 15.4282 16.949 15.4859C16.5912 16.0191 16.1459 16.4882 15.6319 16.8732C15.5752 16.9143 15.5351 16.9745 15.519 17.0427C15.5029 17.1109 15.5118 17.1827 15.5441 17.2449L15.9509 18L13.9812 18.878L13.6885 18.0907C13.6616 18.0237 13.6108 17.9689 13.546 17.937C13.4812 17.9052 13.4068 17.8984 13.3373 17.918C13.1369 17.956 12.9347 17.9833 12.7314 18V18.5854C12.8898 18.5798 13.0474 18.5612 13.2027 18.5298L13.5275 19.3785C13.5419 19.4153 13.5636 19.4488 13.5913 19.4769C13.6189 19.5051 13.652 19.5274 13.6885 19.5424C13.7258 19.559 13.7662 19.5675 13.807 19.5675C13.8479 19.5675 13.8883 19.559 13.9256 19.5424L16.4602 18.4127C16.4981 18.3966 16.5321 18.3727 16.5601 18.3425C16.5881 18.3124 16.6094 18.2767 16.6226 18.2377C16.6359 18.1988 16.6408 18.1575 16.637 18.1165C16.6332 18.0756 16.6209 18.0359 16.6007 18L16.1822 17.1922C16.6033 16.8522 16.9781 16.4586 17.2973 16.0215L18.1314 16.3932C18.1672 16.4106 18.2061 16.4206 18.2459 16.4225C18.2856 16.4244 18.3253 16.4182 18.3626 16.4042C18.3998 16.3902 18.4338 16.3688 18.4625 16.3412C18.4912 16.3137 18.514 16.2806 18.5295 16.2439L19.4631 13.7971V13.3493Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.3656 12.2839C15.3628 11.5408 15.0967 10.8227 14.6144 10.2573C14.132 9.69194 13.4649 9.31592 12.7314 9.19611V9.78147C13.3141 9.89116 13.8402 10.201 14.2187 10.6574C14.5972 11.1138 14.8043 11.6881 14.8043 12.281C14.8043 12.8739 14.5972 13.4482 14.2187 13.9046C13.8402 14.361 13.3141 14.6708 12.7314 14.7805V15.3659C13.4649 15.2484 14.1326 14.8739 14.6152 14.3093C15.0978 13.7446 15.3638 13.0267 15.3656 12.2839V12.2839Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3013 6.08485L10.5452 5.00485C10.5007 4.97916 10.4503 4.96564 10.3989 4.96564C10.3475 4.96564 10.297 4.97916 10.2525 5.00485L6.74034 7.0829C6.69434 7.10668 6.65548 7.14224 6.62771 7.18594C6.59995 7.22965 6.58427 7.27994 6.58229 7.33168V9.40973L4.99009 10.2468C4.94083 10.2709 4.89935 10.3084 4.87037 10.355C4.84139 10.4016 4.82608 10.4554 4.82619 10.5102V14.0224C4.82564 14.0708 4.83711 14.1187 4.85959 14.1616C4.88206 14.2045 4.91484 14.2411 4.95497 14.2683L6.58522 15.3307V17.2419C6.58461 17.2922 6.59695 17.3417 6.62105 17.3858C6.64514 17.4299 6.68017 17.467 6.72278 17.4936L10.235 19.519C10.2801 19.5533 10.3337 19.5745 10.3901 19.5805C10.4426 19.5804 10.4942 19.5663 10.5394 19.5395L12.2955 18.5092C12.3397 18.4837 12.3765 18.447 12.4022 18.4029C12.4278 18.3587 12.4415 18.3086 12.4418 18.2575V6.33656C12.4421 6.28604 12.4293 6.23632 12.4047 6.19221C12.3801 6.1481 12.3445 6.11112 12.3013 6.08485ZM11.8535 18.0849L10.3901 18.9424L9.07595 18.1844L10.7208 17.198L10.4281 16.6975L8.50522 17.8507L7.17058 17.0839V15.3483L8.74522 14.4409L8.45253 13.9346L6.8779 14.8331L5.41448 13.8497V12.4595L6.954 11.5814L6.66131 11.0751L5.41448 11.7834V10.6829L6.8779 9.92485L8.34131 10.7444V12.1112L6.69643 13.0507L6.98912 13.5512L8.634 12.5941L10.0974 13.317V14.9853L8.22717 16.0595L8.51985 16.5717L11.8535 14.6019V18.0849ZM10.6828 14.6429V13.0244C10.6837 12.9704 10.6697 12.9173 10.6423 12.8708C10.615 12.8243 10.5753 12.7863 10.5277 12.7609L8.92668 11.9561V10.6273L10.5335 9.7229C10.5787 9.69749 10.6164 9.66052 10.6426 9.61578C10.6688 9.57103 10.6827 9.52013 10.6828 9.46826V7.1707H10.0974V9.28973L8.634 10.0975L7.17058 9.27802V7.37558L8.34131 6.67022V8.34143H8.92668V6.32485L10.3901 5.47022L11.8535 6.37461V11.4702L10.8379 10.8848L10.5452 11.3912L11.8535 12.1463V13.9785L10.6828 14.6429Z", fill: "white" })] })),
    sagemaker: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#1C7B68" }), jsxRuntimeExports.jsx("path", { d: "M13.9971 20.0832C13.9396 20.0832 13.8833 20.0677 13.8339 20.0384L12.0003 18.9408L10.1667 20.0384C10.118 20.0665 10.0628 20.0812 10.0067 20.0812C9.9505 20.0812 9.89532 20.0665 9.84667 20.0384L6.08027 17.7408C6.03415 17.7119 5.99614 17.6719 5.96983 17.6243C5.94351 17.5767 5.92976 17.5232 5.92987 17.4688V15.1648L4.16027 14.1696C4.11084 14.1418 4.06968 14.1014 4.04101 14.0525C4.01233 14.0035 3.99717 13.9479 3.99707 13.8912V10.1088C3.99717 10.0521 4.01233 9.99641 4.04101 9.94749C4.06968 9.89858 4.11084 9.85816 4.16027 9.83037L5.92027 8.83517V6.53117C5.91961 6.47625 5.9331 6.42208 5.95945 6.37389C5.98579 6.32569 6.02409 6.28508 6.07067 6.25597L9.83387 3.96157C9.88252 3.93349 9.9377 3.9187 9.99387 3.9187C10.05 3.9187 10.1052 3.93349 10.1539 3.96157L11.9875 5.05917L13.8211 3.96157C13.8697 3.93349 13.9249 3.9187 13.9811 3.9187C14.0372 3.9187 14.0924 3.93349 14.1411 3.96157L17.9203 6.25917C17.967 6.28761 18.0056 6.32754 18.0325 6.37516C18.0594 6.42277 18.0736 6.47649 18.0739 6.53117V8.83517L19.8403 9.83037C19.8897 9.85816 19.9309 9.89858 19.9595 9.94749C19.9882 9.99641 20.0034 10.0521 20.0035 10.1088V13.8912C20.0034 13.9479 19.9882 14.0035 19.9595 14.0525C19.9309 14.1014 19.8897 14.1418 19.8403 14.1696L18.0803 15.1648V17.4688C18.0806 17.524 18.0666 17.5784 18.0397 17.6266C18.0128 17.6748 17.9738 17.7153 17.9267 17.744L14.1635 20.0384C14.1127 20.0672 14.0554 20.0827 13.9971 20.0832V20.0832ZM12.3171 18.3872L13.9971 19.3888L17.4403 17.28V14.9792C17.4404 14.9225 17.4555 14.8668 17.4842 14.8179C17.5129 14.769 17.554 14.7286 17.6035 14.7008L19.0211 13.8944L17.8307 13.2384C17.6717 13.3749 17.4708 13.453 17.2613 13.4596C17.0518 13.4662 16.8463 13.401 16.679 13.2748C16.5117 13.1485 16.3927 12.9688 16.3416 12.7656C16.2905 12.5623 16.3105 12.3477 16.3982 12.1573C16.4859 11.967 16.6361 11.8123 16.8238 11.7191C17.0115 11.6259 17.2255 11.5997 17.4301 11.6449C17.6348 11.69 17.8179 11.8038 17.9489 11.9674C18.08 12.1309 18.1512 12.3344 18.1507 12.544C18.1538 12.5887 18.1538 12.6336 18.1507 12.6784L19.3731 13.3504V10.2944L17.6003 9.29917C17.5508 9.27139 17.5097 9.23097 17.481 9.18205C17.4523 9.13313 17.4372 9.07748 17.4371 9.02077V8.15997H16.5539C16.4788 8.36275 16.3348 8.53267 16.1471 8.64001C15.9594 8.74735 15.7399 8.78526 15.5271 8.74713C15.3142 8.70899 15.1216 8.59722 14.9828 8.43139C14.844 8.26555 14.768 8.0562 14.768 7.83997C14.768 7.62374 14.844 7.41439 14.9828 7.24856C15.1216 7.08272 15.3142 6.97096 15.5271 6.93282C15.7399 6.89468 15.9594 6.9326 16.1471 7.03994C16.3348 7.14727 16.4788 7.31719 16.5539 7.51997H17.4403V6.71997L13.9939 4.61117L12.3203 5.61277V9.13277L14.0995 10.1632C14.2642 10.0392 14.4659 9.97444 14.672 9.97944C14.8782 9.98444 15.0765 10.0589 15.2351 10.1907C15.3936 10.3225 15.5029 10.504 15.5454 10.7058C15.5879 10.9075 15.561 11.1177 15.4692 11.3022C15.3773 11.4868 15.2258 11.6349 15.0392 11.7226C14.8526 11.8103 14.6419 11.8325 14.4412 11.7855C14.2404 11.7384 14.0614 11.625 13.9332 11.4636C13.805 11.3021 13.735 11.1021 13.7347 10.896C13.7344 10.8315 13.7408 10.7671 13.7539 10.704L11.8403 9.59997C11.7919 9.57205 11.7517 9.53196 11.7236 9.48368C11.6956 9.4354 11.6806 9.38062 11.6803 9.32477V5.61277L10.0035 4.61117L8.47707 5.53917V7.79837H7.83707V5.92957L6.56027 6.71997V8.84477L8.16027 9.75037L9.76027 8.84477V7.19997H10.4003V9.02077C10.4002 9.07748 10.385 9.13313 10.3563 9.18205C10.3277 9.23097 10.2865 9.27139 10.2371 9.29917L8.47707 10.2944V11.8176L10.2403 12.9696C10.2853 12.9985 10.3224 13.0382 10.3481 13.0852C10.3739 13.1322 10.3874 13.1848 10.3875 13.2384V14.3136L11.6675 13.5584V12.2016L9.98747 11.2L10.3075 10.6496L12.1603 11.7408C12.2074 11.7695 12.2464 11.8099 12.2733 11.8582C12.3002 11.9064 12.3142 11.9607 12.3139 12.016V16.176H13.7827C13.8576 15.9749 14.0008 15.8065 14.1873 15.7003C14.3738 15.5941 14.5916 15.5568 14.8028 15.5949C15.014 15.633 15.2051 15.7441 15.3427 15.9088C15.4803 16.0735 15.5556 16.2814 15.5555 16.496C15.5421 16.7028 15.4599 16.8992 15.3219 17.0539C15.184 17.2086 14.9982 17.3126 14.7942 17.3494C14.5903 17.3862 14.3799 17.3537 14.1965 17.257C14.0132 17.1604 13.8675 17.0051 13.7827 16.816H12.3107L12.3171 18.3872ZM8.66587 18.56L10.0035 19.376L11.6835 18.3744V14.3008L8.10587 16.4064L7.78587 15.8528L9.76027 14.688V13.408L8.16027 12.3616L6.36827 13.3664L6.04827 12.8064L7.84667 11.7984V10.2944L6.24667 9.38877L4.64667 10.2944V11.4592L6.01627 10.656L6.33627 11.2064L4.64027 12.2016V13.7024L6.24027 14.608L7.85947 13.648L8.17947 14.1984L6.56027 15.1584V17.28L8.00027 18.1728L9.67067 17.1904L9.68987 17.2192L9.76667 17.1744L10.0867 17.7248L8.66587 18.56ZM14.6467 16.1888C14.5915 16.1881 14.5373 16.2039 14.4911 16.2341C14.4449 16.2643 14.4088 16.3076 14.3872 16.3584C14.3656 16.4092 14.3597 16.4653 14.37 16.5195C14.3804 16.5737 14.4067 16.6236 14.4455 16.6629C14.4843 16.7021 14.5339 16.729 14.588 16.74C14.6421 16.751 14.6982 16.7456 14.7493 16.7247C14.8003 16.7037 14.844 16.668 14.8747 16.6222C14.9055 16.5763 14.9219 16.5224 14.9219 16.4672C14.9194 16.3959 14.8893 16.3283 14.8379 16.2788C14.7866 16.2292 14.718 16.2015 14.6467 16.2016V16.1888ZM17.2323 12.2528C17.1772 12.2528 17.1234 12.2691 17.0776 12.2997C17.0318 12.3303 16.9961 12.3738 16.9751 12.4246C16.954 12.4755 16.9485 12.5315 16.9592 12.5855C16.97 12.6395 16.9965 12.6891 17.0354 12.728C17.0743 12.767 17.124 12.7935 17.178 12.8042C17.232 12.815 17.2879 12.8095 17.3388 12.7884C17.3897 12.7673 17.4332 12.7316 17.4638 12.6858C17.4943 12.6401 17.5107 12.5862 17.5107 12.5312C17.5074 12.4596 17.4766 12.392 17.4247 12.3425C17.3729 12.2931 17.3039 12.2655 17.2323 12.2656V12.2528ZM14.6467 10.6048C14.5915 10.6041 14.5373 10.6199 14.4911 10.6501C14.4449 10.6803 14.4088 10.7236 14.3872 10.7744C14.3656 10.8252 14.3597 10.8813 14.37 10.9355C14.3804 10.9897 14.4067 11.0396 14.4455 11.0789C14.4843 11.1181 14.5339 11.145 14.588 11.156C14.6421 11.167 14.6982 11.1616 14.7493 11.1407C14.8003 11.1197 14.844 11.084 14.8747 11.0382C14.9055 10.9923 14.9219 10.9384 14.9219 10.8832C14.9194 10.8119 14.8893 10.7443 14.8379 10.6948C14.7866 10.6452 14.718 10.6175 14.6467 10.6176V10.6048ZM15.6803 7.56157C15.6252 7.56157 15.5714 7.5779 15.5256 7.60849C15.4798 7.63908 15.4441 7.68256 15.4231 7.73343C15.402 7.7843 15.3965 7.84028 15.4072 7.89429C15.418 7.94829 15.4445 7.9979 15.4834 8.03683C15.5223 8.07577 15.572 8.10228 15.626 8.11302C15.68 8.12377 15.7359 8.11825 15.7868 8.09718C15.8377 8.07611 15.8812 8.04043 15.9118 7.99464C15.9423 7.94886 15.9587 7.89504 15.9587 7.83997C15.9591 7.80329 15.9522 7.7669 15.9384 7.73293C15.9245 7.69896 15.904 7.6681 15.8781 7.64216C15.8521 7.61622 15.8213 7.59573 15.7873 7.58189C15.7533 7.56805 15.7169 7.56114 15.6803 7.56157V7.56157Z", fill: "white" })] })),
    securityhub: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M24 0H0V24H24V0Z", fill: "#D6242D" }), jsxRuntimeExports.jsx("path", { d: "M11.9995 6.92801C11.7176 6.92865 11.4418 6.84559 11.2071 6.68936C10.9725 6.53313 10.7894 6.31077 10.6813 6.05044C10.5731 5.7901 10.5446 5.50352 10.5995 5.22699C10.6543 4.95047 10.79 4.69644 10.9893 4.4971C11.1887 4.29776 11.4427 4.16207 11.7192 4.10722C11.9958 4.05238 12.2824 4.08085 12.5427 4.18903C12.803 4.2972 13.0254 4.48021 13.1816 4.71488C13.3378 4.94955 13.4209 5.2253 13.4203 5.50721C13.4203 5.88403 13.2706 6.24542 13.0041 6.51187C12.7377 6.77832 12.3763 6.92801 11.9995 6.92801V6.92801ZM11.9995 4.72321C11.8443 4.72258 11.6924 4.76802 11.563 4.85378C11.4337 4.93954 11.3327 5.06177 11.2729 5.20497C11.213 5.34817 11.197 5.5059 11.2269 5.65819C11.2568 5.81049 11.3312 5.95048 11.4408 6.06044C11.5503 6.17041 11.69 6.2454 11.8421 6.27591C11.9943 6.30642 12.1521 6.29108 12.2955 6.23184C12.439 6.17259 12.5616 6.07211 12.6479 5.94311C12.7342 5.81411 12.7803 5.66241 12.7803 5.50721C12.7803 5.29984 12.6981 5.10091 12.5518 4.95397C12.4054 4.80703 12.2068 4.72406 11.9995 4.72321V4.72321Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.7181 9.40482C17.4355 9.40543 17.1591 9.32195 16.9241 9.165C16.6891 9.00805 16.5061 8.78473 16.3985 8.52346C16.2908 8.26219 16.2633 7.97479 16.3194 7.69784C16.3756 7.42089 16.5129 7.1669 16.7138 6.96822C16.9148 6.76953 17.1703 6.63513 17.4479 6.58211C17.7254 6.52909 18.0125 6.55986 18.2725 6.6705C18.5326 6.78113 18.7538 6.96663 18.9081 7.20339C19.0624 7.44015 19.1427 7.71746 19.1389 8.00002C19.1347 8.37406 18.9831 8.73135 18.7171 8.99435C18.4511 9.25735 18.0922 9.40484 17.7181 9.40482ZM17.7181 7.20002C17.5636 7.19942 17.4123 7.24449 17.2834 7.32957C17.1544 7.41464 17.0534 7.53593 16.9932 7.6782C16.9329 7.82047 16.916 7.97737 16.9446 8.12921C16.9732 8.28105 17.0461 8.42104 17.154 8.53161C17.2619 8.64219 17.4001 8.71841 17.5512 8.7507C17.7023 8.78299 17.8596 8.76992 18.0032 8.71312C18.1469 8.65633 18.2706 8.55834 18.3588 8.43147C18.447 8.3046 18.4957 8.1545 18.4989 8.00002C18.501 7.89599 18.4824 7.79259 18.4442 7.69582C18.4059 7.59906 18.3488 7.51088 18.2761 7.43642C18.2034 7.36196 18.1167 7.30271 18.0209 7.26212C17.9251 7.22153 17.8221 7.20042 17.7181 7.20002V7.20002Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.37736 17.0944C6.09518 17.095 5.81917 17.0118 5.58437 16.8553C5.34957 16.6988 5.16657 16.476 5.05858 16.2153C4.9506 15.9546 4.92251 15.6677 4.97787 15.391C5.03324 15.1143 5.16957 14.8603 5.36955 14.6612C5.56954 14.4621 5.82416 14.3269 6.10111 14.2728C6.37805 14.2187 6.66483 14.2481 6.92505 14.3573C7.18527 14.4664 7.40718 14.6504 7.56264 14.8859C7.71809 15.1214 7.80007 15.3978 7.79816 15.68C7.79647 16.0557 7.64603 16.4154 7.37977 16.6805C7.1135 16.9456 6.75308 17.0944 6.37736 17.0944V17.0944ZM6.37736 14.8896C6.22244 14.889 6.07081 14.9343 5.9416 15.0197C5.8124 15.1052 5.71141 15.2271 5.6514 15.3699C5.59139 15.5127 5.57504 15.6701 5.60441 15.8222C5.63378 15.9743 5.70757 16.1143 5.81644 16.2246C5.92532 16.3348 6.06441 16.4103 6.21615 16.4415C6.36789 16.4727 6.52548 16.4583 6.66903 16.4C6.81258 16.3418 6.93565 16.2423 7.02271 16.1141C7.10976 15.986 7.1569 15.8349 7.15816 15.68C7.15901 15.5768 7.13946 15.4744 7.10064 15.3787C7.06181 15.2831 7.00448 15.1961 6.93194 15.1226C6.85939 15.0492 6.77306 14.9908 6.67789 14.9508C6.58272 14.9108 6.48059 14.89 6.37736 14.8896V14.8896Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M11.9995 19.9168C11.7177 19.9175 11.4421 19.8345 11.2075 19.6784C10.9729 19.5223 10.7899 19.3002 10.6816 19.04C10.5733 18.7799 10.5447 18.4934 10.5992 18.217C10.6538 17.9406 10.7892 17.6865 10.9882 17.4871C11.1872 17.2876 11.441 17.1517 11.7173 17.0964C11.9936 17.0412 12.2801 17.0693 12.5405 17.1769C12.8009 17.2846 13.0234 17.4671 13.1801 17.7014C13.3367 17.9356 13.4203 18.2111 13.4203 18.4928C13.4203 18.87 13.2707 19.2317 13.0043 19.4986C12.738 19.7656 12.3766 19.916 11.9995 19.9168V19.9168ZM11.9995 17.712C11.8441 17.7114 11.6921 17.7569 11.5627 17.8428C11.4333 17.9287 11.3323 18.0512 11.2726 18.1945C11.2128 18.3379 11.197 18.4958 11.2272 18.6482C11.2573 18.8006 11.3321 18.9406 11.4419 19.0504C11.5517 19.1602 11.6917 19.235 11.8441 19.2651C11.9965 19.2953 12.1544 19.2795 12.2978 19.2197C12.4412 19.16 12.5636 19.059 12.6495 18.9296C12.7354 18.8002 12.7809 18.6482 12.7803 18.4928C12.7794 18.286 12.6969 18.0879 12.5506 17.9417C12.4044 17.7954 12.2063 17.7129 11.9995 17.712V17.712Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M6.28142 9.32481C5.99964 9.32481 5.7242 9.24121 5.48995 9.0846C5.25571 8.92798 5.0732 8.7054 4.96551 8.44501C4.85783 8.18462 4.82981 7.89814 4.88502 7.62182C4.94022 7.3455 5.07617 7.09178 5.27564 6.89276C5.47511 6.69373 5.72914 6.55836 6.00558 6.50378C6.28202 6.4492 6.56843 6.47785 6.82858 6.58612C7.08872 6.69439 7.3109 6.87741 7.46699 7.11201C7.62307 7.3466 7.70605 7.62223 7.70542 7.90401C7.70542 8.09086 7.66856 8.27588 7.59696 8.44846C7.52536 8.62105 7.42042 8.77782 7.28814 8.9098C7.15587 9.04177 6.99887 9.14636 6.82612 9.21758C6.65337 9.28879 6.46827 9.32523 6.28142 9.32481ZM6.28142 7.12001C6.12636 7.12001 5.97478 7.16599 5.84585 7.25214C5.71692 7.33828 5.61644 7.46073 5.5571 7.60398C5.49776 7.74724 5.48223 7.90488 5.51248 8.05696C5.54273 8.20904 5.6174 8.34874 5.72705 8.45838C5.83669 8.56802 5.97639 8.64269 6.12847 8.67294C6.28055 8.70319 6.43818 8.68767 6.58144 8.62833C6.7247 8.56899 6.84714 8.4685 6.93329 8.33958C7.01944 8.21065 7.06542 8.05907 7.06542 7.90401C7.06542 7.69608 6.98282 7.49666 6.83579 7.34964C6.68876 7.20261 6.48935 7.12001 6.28142 7.12001V7.12001Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.46716 8.27855L7.09961 8.80249L8.81812 10.008L9.18567 9.48411L7.46716 8.27855Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.7399 8.16939L14.8135 9.07343L15.0854 9.6528L17.0118 8.74876L16.7399 8.16939Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M8.73119 13.7609L7.20898 14.8228L7.57516 15.3477L9.09736 14.2858L8.73119 13.7609Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3197 6.87042H11.6797V8.18882H12.3197V6.87042Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3197 15.9456H11.6797V17.3024H12.3197V15.9456Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M17.7182 16.9056C17.4363 16.9062 17.1605 16.8232 16.9259 16.667C16.6912 16.5107 16.5082 16.2884 16.4 16.028C16.2918 15.7677 16.2634 15.4811 16.3182 15.2046C16.3731 14.9281 16.5088 14.674 16.7081 14.4747C16.9074 14.2754 17.1615 14.1397 17.438 14.0848C17.7145 14.03 18.0011 14.0585 18.2614 14.1666C18.5218 14.2748 18.7441 14.4578 18.9004 14.6925C19.0566 14.9271 19.1396 15.2029 19.139 15.4848C19.139 15.8616 18.9893 16.223 18.7229 16.4895C18.4564 16.7559 18.095 16.9056 17.7182 16.9056ZM17.7182 14.7008C17.563 14.7002 17.4111 14.7456 17.2818 14.8314C17.1524 14.9171 17.0514 15.0394 16.9916 15.1826C16.9318 15.3258 16.9158 15.4835 16.9457 15.6358C16.9756 15.7881 17.05 15.9281 17.1595 16.038C17.269 16.148 17.4087 16.223 17.5609 16.2535C17.713 16.284 17.8709 16.2687 18.0143 16.2094C18.1577 16.1502 18.2804 16.0497 18.3667 15.9207C18.453 15.7917 18.499 15.64 18.499 15.4848C18.499 15.2774 18.4169 15.0785 18.2705 14.9316C18.1242 14.7846 17.9256 14.7017 17.7182 14.7008Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M15.5138 13.6772L15.1475 14.202L16.5171 15.1582L16.8835 14.6334L15.5138 13.6772Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.0187 16.048C11.2181 16.048 10.4354 15.8106 9.76976 15.3658C9.10407 14.921 8.58522 14.2888 8.27884 13.5491C7.97246 12.8095 7.89229 11.9955 8.04849 11.2103C8.20468 10.4251 8.59021 9.70378 9.15634 9.13766C9.72246 8.57154 10.4437 8.186 11.229 8.02981C12.0142 7.87362 12.8281 7.95378 13.5678 8.26016C14.3075 8.56655 14.9397 9.08539 15.3845 9.75108C15.8293 10.4168 16.0667 11.1994 16.0667 12C16.0659 13.0734 15.6391 14.1025 14.8801 14.8615C14.1212 15.6204 13.092 16.0472 12.0187 16.048ZM12.0187 8.59203C11.3447 8.59203 10.6858 8.7919 10.1253 9.16638C9.56488 9.54086 9.12807 10.0731 8.87012 10.6958C8.61218 11.3186 8.54469 12.0038 8.67619 12.6649C8.80769 13.326 9.13227 13.9332 9.60888 14.4098C10.0855 14.8865 10.6927 15.211 11.3538 15.3425C12.0149 15.474 12.7002 15.4066 13.3229 15.1486C13.9456 14.8907 14.4779 14.4539 14.8524 13.8934C15.2268 13.333 15.4267 12.6741 15.4267 12C15.425 11.0967 15.0654 10.2308 14.4267 9.59208C13.7879 8.95332 12.922 8.59372 12.0187 8.59203V8.59203Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.0964 15.1392C10.1764 15.1392 9.64844 13.4464 9.64844 12.5504V10.0608C9.64875 9.99765 9.66776 9.93598 9.70307 9.88359C9.73837 9.8312 9.7884 9.79043 9.84684 9.76642L11.9716 8.88642C12.0107 8.87014 12.0525 8.86176 12.0948 8.86176C12.1371 8.86176 12.179 8.87014 12.218 8.88642L14.3428 9.76642C14.4013 9.79043 14.4513 9.8312 14.4866 9.88359C14.5219 9.93598 14.5409 9.99765 14.5412 10.0608V12.5568C14.5412 13.44 14.0292 15.1392 12.0964 15.1392ZM10.2884 10.2752V12.5504C10.2884 12.6304 10.3204 14.4992 12.0964 14.4992C13.8724 14.4992 13.9012 12.6368 13.9012 12.5568V10.2752L12.0964 9.52962L10.2884 10.2752Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.0959 14.08C10.9023 14.08 10.6175 12.6432 10.6047 12.5824C10.6031 12.5622 10.6031 12.5418 10.6047 12.5216V10.88C10.6046 10.8159 10.6238 10.7533 10.6598 10.7002C10.6957 10.6472 10.7468 10.6061 10.8063 10.5824L11.9807 10.1088C12.0577 10.0777 12.1437 10.0777 12.2207 10.1088L13.3887 10.56C13.4482 10.5837 13.4993 10.6248 13.5352 10.6778C13.5712 10.7309 13.5904 10.7935 13.5903 10.8576V12.5152C13.5919 12.5354 13.5919 12.5558 13.5903 12.576C13.5743 12.6432 13.2863 14.08 12.0959 14.08ZM11.2383 12.48C11.2767 12.6336 11.4943 13.44 12.0959 13.44C12.6975 13.44 12.9151 12.6432 12.9503 12.48V11.072L12.0959 10.7328L11.2383 11.0784V12.48Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.4193 10.6336H11.7793V14.0064H12.4193V10.6336Z", fill: "white" })] })),
};

const cloudIcons = {
    aws: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M20.41,15.91a14.28,14.28,0,0,1-8.1,2.48,14.68,14.68,0,0,1-9.89-3.77c-.21-.19,0-.44.23-.3A19.91,19.91,0,0,0,12.54,17a19.75,19.75,0,0,0,7.55-1.54C20.46,15.24,20.77,15.65,20.41,15.91Zm.92-1c-.28-.35-1.85-.17-2.57-.08-.21,0-.24-.16-.05-.3a3.93,3.93,0,0,1,3.55-.33c.24.29-.07,2.35-1.24,3.34-.18.15-.35.07-.27-.13.26-.66.85-2.14.58-2.5Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M8,10.77a2,2,0,0,0,.07.59,3.48,3.48,0,0,0,.21.48A.3.3,0,0,1,8.3,12a.24.24,0,0,1-.13.2l-.41.28a.32.32,0,0,1-.18.06.33.33,0,0,1-.2-.09,2.34,2.34,0,0,1-.24-.31c-.06-.12-.13-.24-.2-.4a2.44,2.44,0,0,1-2,.92,1.82,1.82,0,0,1-1.33-.48,1.72,1.72,0,0,1-.49-1.27,1.71,1.71,0,0,1,.6-1.37A2.42,2.42,0,0,1,5.39,9a5.52,5.52,0,0,1,.71.05,7.28,7.28,0,0,1,.76.15V8.72a1.44,1.44,0,0,0-.31-1.06,1.48,1.48,0,0,0-1.08-.31,2.9,2.9,0,0,0-.72.09A5.48,5.48,0,0,0,4,7.66a1.09,1.09,0,0,1-.23.09l-.11,0c-.09,0-.14-.07-.14-.21V7.24A.37.37,0,0,1,3.6,7a.4.4,0,0,1,.18-.14,3.25,3.25,0,0,1,.84-.3,4.06,4.06,0,0,1,1-.13A2.42,2.42,0,0,1,7.4,7,2.15,2.15,0,0,1,8,8.62v2.15Zm-2.7,1A2,2,0,0,0,6,11.66a1.43,1.43,0,0,0,.63-.42,1.06,1.06,0,0,0,.23-.43,2.25,2.25,0,0,0,.07-.58V10c-.2,0-.41-.08-.61-.11a4.44,4.44,0,0,0-.63,0,1.52,1.52,0,0,0-1,.27.91.91,0,0,0-.33.76.93.93,0,0,0,.25.71A1,1,0,0,0,5.27,11.78Zm5.34.72a.32.32,0,0,1-.25-.07.51.51,0,0,1-.14-.26L8.65,7a1.1,1.1,0,0,1-.06-.26.16.16,0,0,1,.13-.17h.69a.33.33,0,0,1,.25.07.55.55,0,0,1,.14.26l1.12,4.4,1-4.4a.51.51,0,0,1,.13-.26.42.42,0,0,1,.27-.07h.53a.37.37,0,0,1,.26.07.43.43,0,0,1,.13.26l1.05,4.45,1.15-4.45a.58.58,0,0,1,.13-.26.41.41,0,0,1,.26-.07h.62a.16.16,0,0,1,.17.13v0s0,.07,0,.1a1.09,1.09,0,0,1-.05.17L15,12.18a.55.55,0,0,1-.14.26.48.48,0,0,1-.26.07H14a.37.37,0,0,1-.26-.07.46.46,0,0,1-.13-.27l-1-4.29-1,4.29a.48.48,0,0,1-.12.26.38.38,0,0,1-.27.07Zm8.55.18a4.46,4.46,0,0,1-1-.12,3,3,0,0,1-.76-.27.46.46,0,0,1-.21-.18.58.58,0,0,1,0-.19v-.34c0-.14.05-.2.15-.2a.23.23,0,0,1,.12,0l.17.06a3.25,3.25,0,0,0,.73.23,3.53,3.53,0,0,0,.79.08,1.84,1.84,0,0,0,1-.21.71.71,0,0,0,.35-.64.61.61,0,0,0-.18-.46,1.63,1.63,0,0,0-.67-.35l-1-.3a2,2,0,0,1-1.06-.68,1.57,1.57,0,0,1-.33-1,1.38,1.38,0,0,1,.18-.74,1.66,1.66,0,0,1,.48-.54,2,2,0,0,1,.69-.35,2.62,2.62,0,0,1,.84-.11,3.24,3.24,0,0,1,.44,0l.43.08a2.11,2.11,0,0,1,.38.1,1.39,1.39,0,0,1,.28.12.55.55,0,0,1,.2.17.29.29,0,0,1,.06.22v.31q0,.21-.15.21a.53.53,0,0,1-.25-.08,3.33,3.33,0,0,0-1.28-.26,1.71,1.71,0,0,0-.89.19.66.66,0,0,0-.31.59.67.67,0,0,0,.2.48,2,2,0,0,0,.73.36l1,.3a2,2,0,0,1,1,.64,1.48,1.48,0,0,1,.3.93,1.58,1.58,0,0,1-.17.77,1.84,1.84,0,0,1-.48.59,2.24,2.24,0,0,1-.74.37A3.41,3.41,0,0,1,19.16,12.68Z", fill: "#828292" })] })),
    awsChina: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M6.46,11H8.29v.76H2.19V11H4V7.06H2.42V6.28H8.11v.77H6.47V10a12.39,12.39,0,0,0,.78-2.21L8,8l-.86,2.29L6.46,10ZM4.85,7.06V11h.72V7.06Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M18.66,8l.45-.13.09.37h.05l.16-1.11.65.1A12.38,12.38,0,0,1,19.45,10L18.9,9.7l.34-1.21a4.94,4.94,0,0,0-.5.19.29.29,0,0,0-.08.21c0,.4,0,.81,0,1.21,0,.75,0,.8-.8,1a5,5,0,0,0,2,.23c.66,0,1.31-.07,2-.11l-.19.71c-.42,0-.86.06-1.29.06-.65,0-1.3,0-1.95-.08a2.49,2.49,0,0,1-1.16-.46c-.27-.16-.36-.15-.6.05l-.61.52-.42-.59.73-.53a.28.28,0,0,0,.11-.16c0-.56,0-1.12,0-1.7h-.71V8.27h1.4v2.14c0,.34,0,.34.39.46l-.16-.46a2.28,2.28,0,0,0,.37,0c.06,0,.16-.1.16-.15,0-.42,0-.84,0-1.29l-.51.16-.21-.66c.21-.07.4-.12.59-.2s.09-.11.13-.18a.14.14,0,0,0,0-.11,1.16,1.16,0,0,1,.35-1.11.64.64,0,0,0,.06-.12h-1V6.12h.77a4,4,0,0,1,.77,0,1.92,1.92,0,0,1,.51.29,5.77,5.77,0,0,1-.54.68A.9.9,0,0,0,18.66,8Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M10.77,8.77H13L13.15,7H9.57V6.26H14l-.24,2.5H14.9c0,.37-.05.7-.1,1-.08.53-.16,1.05-.28,1.56a.84.84,0,0,1-.83.72c-.35,0-.71,0-1,0l-.23-.69h.84c.32,0,.45-.07.52-.37.11-.48.19-1,.29-1.48H9.9l.23-2.18.77,0Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M20.1,6h.7V7.21l.59-.11L22,9.68l-.64.16-.44-2.29H20.8v.22c0,.82,0,1.64,0,2.45,0,.64-.16.81-.8.84-.46,0-.46,0-.66-.4l-.07-.18h.56c.21,0,.28-.07.28-.29,0-1.3,0-2.61,0-3.92Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M9.11,10.11h4.3v.73H9.11Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M4,10l-.76.33L2.43,8l.69-.27Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M15.81,6.53l.56-.4,1.05,1-.63.48Z", fill: "#828292" }), jsxRuntimeExports.jsx("path", { d: "M19.79,15.53A14.4,14.4,0,0,1,11.69,18,14.68,14.68,0,0,1,1.8,14.23c-.21-.19,0-.44.23-.29a20,20,0,0,0,9.89,2.62A19.56,19.56,0,0,0,19.47,15C19.84,14.85,20.15,15.26,19.79,15.53Zm.91-1c-.28-.36-1.85-.18-2.56-.09-.21,0-.24-.16-.05-.3a4,4,0,0,1,3.55-.33,4,4,0,0,1-1.24,3.34c-.18.15-.35.07-.27-.13.26-.66.85-2.14.57-2.49Z", fill: "#f90" })] })),
    azure: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8.99996 3.33004H14.6L8.74996 20.55C8.68824 20.7268 8.5735 20.8802 8.42139 20.9894C8.26927 21.0986 8.08718 21.1582 7.89996 21.16H3.53996C3.42224 21.16 3.30568 21.1367 3.19704 21.0913C3.08841 21.046 2.98985 20.9795 2.90707 20.8958C2.8243 20.8121 2.75895 20.7128 2.71481 20.6037C2.67068 20.4946 2.64864 20.3778 2.64996 20.26C2.654 20.1714 2.67084 20.0838 2.69996 20L8.10996 4.00004C8.16312 3.80554 8.27937 3.63421 8.44046 3.51294C8.60154 3.39167 8.79835 3.32734 8.99996 3.33004Z", fill: "url(#paint0_linear)" }), jsxRuntimeExports.jsx("path", { d: "M17.0998 14.88H8.21978C8.11105 14.88 8.00676 14.9232 7.92987 15.0001C7.85298 15.077 7.80978 15.1813 7.80978 15.29C7.80624 15.3467 7.81617 15.4035 7.83876 15.4556C7.86136 15.5078 7.89598 15.5538 7.93978 15.59L13.6398 20.91C13.8042 21.0675 14.0222 21.1568 14.2498 21.16H19.2498L17.0998 14.88Z", fill: "#0078D4" }), jsxRuntimeExports.jsx("path", { d: "M8.99976 3.33006C8.81109 3.32579 8.62615 3.38298 8.47283 3.49301C8.3195 3.60304 8.20611 3.75995 8.14976 3.94006L2.69976 20.0001C2.62274 20.2216 2.63625 20.4645 2.73737 20.6761C2.83849 20.8877 3.01903 21.0508 3.23976 21.1301C3.33497 21.1692 3.43683 21.1895 3.53976 21.1901H7.99976C8.1665 21.1566 8.32196 21.0812 8.45144 20.971C8.58093 20.8608 8.68016 20.7193 8.73976 20.5601L9.81976 17.3801L13.6798 21.0001C13.8434 21.1275 14.0426 21.2009 14.2498 21.2101H19.2498L17.0498 14.9301H10.6498L14.5798 3.33006H8.99976Z", fill: "url(#paint1_linear)" }), jsxRuntimeExports.jsx("path", { d: "M16.11 3.92997C16.051 3.75424 15.9381 3.60161 15.7872 3.49387C15.6364 3.38613 15.4554 3.32877 15.27 3.32997H9C9.18536 3.32877 9.36638 3.38613 9.51722 3.49387C9.66806 3.60161 9.78102 3.75424 9.84 3.92997L15.29 20C15.3633 20.2241 15.3458 20.4681 15.241 20.6795C15.1363 20.8908 14.9528 21.0526 14.73 21.13C14.6363 21.1609 14.5386 21.1777 14.44 21.18H20.68C20.7977 21.18 20.9143 21.1566 21.0229 21.1113C21.1316 21.0659 21.2301 20.9995 21.3129 20.9158C21.3957 20.8321 21.461 20.7328 21.5051 20.6236C21.5493 20.5145 21.5713 20.3977 21.57 20.28C21.5846 20.1872 21.5846 20.0927 21.57 20L16.11 3.92997Z", fill: "url(#paint2_linear)" }), jsxRuntimeExports.jsxs("defs", { children: [jsxRuntimeExports.jsxs("linearGradient", { id: "paint0_linear", x1: "14.792", y1: "4.75964", x2: "8.98876", y2: "21.9196", gradientUnits: "userSpaceOnUse", children: [jsxRuntimeExports.jsx("stop", { stopColor: "#114A8B" }), jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#0669BC" })] }), jsxRuntimeExports.jsxs("linearGradient", { id: "paint1_linear", x1: "16.6014", y1: "12.7469", x2: "15.2598", y2: "13.2149", gradientUnits: "userSpaceOnUse", children: [jsxRuntimeExports.jsx("stop", { stopOpacity: "0.3" }), jsxRuntimeExports.jsx("stop", { offset: "0.07", stopOpacity: "0.2" }), jsxRuntimeExports.jsx("stop", { offset: "0.32", stopOpacity: "0.1" }), jsxRuntimeExports.jsx("stop", { offset: "0.62", stopOpacity: "0.05" }), jsxRuntimeExports.jsx("stop", { offset: "1", stopOpacity: "0" })] }), jsxRuntimeExports.jsxs("linearGradient", { id: "paint2_linear", x1: "15.9152", y1: "4.24477", x2: "22.28", y2: "21.2176", gradientUnits: "userSpaceOnUse", children: [jsxRuntimeExports.jsx("stop", { stopColor: "#3CCBF4" }), jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#2892DF" })] })] })] })),
    gcp: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M14.69,8.38h.61L17,6.64l.09-.73A7.82,7.82,0,0,0,4.41,9.72a1,1,0,0,1,.61,0L8.5,9.11s.18-.29.27-.27a4.32,4.32,0,0,1,5.93-.45Z", fill: "#ea4335" }), jsxRuntimeExports.jsx("path", { d: "M19.52,9.72a7.85,7.85,0,0,0-2.36-3.81L14.72,8.35a4.32,4.32,0,0,1,1.59,3.44v.44a2.17,2.17,0,1,1,0,4.34H12l-.43.44v2.61l.43.43h4.35A5.65,5.65,0,0,0,19.52,9.72Z", fill: "#4285f4" }), jsxRuntimeExports.jsx("path", { d: "M7.62,20H12V16.55H7.62a2.31,2.31,0,0,1-.9-.2l-.61.19L4.36,18.28l-.15.61A5.59,5.59,0,0,0,7.62,20Z", fill: "#34a853" }), jsxRuntimeExports.jsx("path", { d: "M7.62,8.74A5.65,5.65,0,0,0,4.21,18.87l2.52-2.52A2.17,2.17,0,1,1,9.6,13.48L12.12,11A5.67,5.67,0,0,0,7.62,8.74Z", fill: "#fbbc05" })] })),
    vmware: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M3.85,8.93a1.09,1.09,0,0,0-1.46-.54,1.06,1.06,0,0,0-.53,1.45l2.44,5.3c.38.83.78,1.26,1.54,1.26S7,15.93,7.39,15.14l2.14-4.68a.3.3,0,0,1,.31-.19.34.34,0,0,1,.34.34v4.52a1.13,1.13,0,0,0,1.13,1.27,1.14,1.14,0,0,0,1.14-1.27v-3.7a1.14,1.14,0,0,1,1.21-1.18,1.11,1.11,0,0,1,1.16,1.18v3.7a1.15,1.15,0,1,0,2.28,0v-3.7a1.14,1.14,0,0,1,1.21-1.18,1.11,1.11,0,0,1,1.16,1.18v3.7a1.15,1.15,0,1,0,2.28,0V10.92A2.64,2.64,0,0,0,19,8.29a3.54,3.54,0,0,0-2.44,1,2.7,2.7,0,0,0-2.35-1,3.9,3.9,0,0,0-2.3,1,2.74,2.74,0,0,0-2.05-1A2.5,2.5,0,0,0,7.4,10L5.84,13.64Z", fill: "#9b9b9b" })] })),
    kubernetes: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M11.93,2.3a1.28,1.28,0,0,0-.51.13L4.47,5.75a1.29,1.29,0,0,0-.72.89L2,14.11a1.34,1.34,0,0,0,.18,1l.08.1,4.81,6a1.34,1.34,0,0,0,1,.49h7.72a1.34,1.34,0,0,0,1-.49l4.81-6A1.31,1.31,0,0,0,22,14.11L20.25,6.64a1.32,1.32,0,0,0-.72-.89l-7-3.32A1.35,1.35,0,0,0,11.93,2.3Z", fill: "#326ce5" }), jsxRuntimeExports.jsx("path", { d: "M12,4.84a.45.45,0,0,0-.42.46h0v.11c0,.15,0,.26.06.39a4.31,4.31,0,0,1,0,.76.43.43,0,0,1-.14.21V7a4.88,4.88,0,0,0-.75.12A5.33,5.33,0,0,0,8.07,8.63l-.15-.11a.32.32,0,0,1-.25,0A4.89,4.89,0,0,1,7.11,8a3.58,3.58,0,0,0-.27-.29l-.09-.07a.5.5,0,0,0-.29-.11.38.38,0,0,0-.34.15.44.44,0,0,0,.11.61h0l.09.07a2.49,2.49,0,0,0,.34.2A4.37,4.37,0,0,1,7.28,9a.45.45,0,0,1,.09.24l.13.12a5.37,5.37,0,0,0-.85,3.75l-.17.05c-.05.06-.12.16-.18.18a3.76,3.76,0,0,1-.75.13,2.8,2.8,0,0,0-.4,0l-.11,0H5a.42.42,0,1,0,.19.81h0l.11,0c.14,0,.24-.09.37-.14a4.49,4.49,0,0,1,.73-.22.52.52,0,0,1,.24.09l.18,0a5.35,5.35,0,0,0,2.4,3l-.08.19a.38.38,0,0,1,0,.23,4,4,0,0,1-.38.68c-.07.11-.15.2-.22.33a.54.54,0,0,0,0,.11.44.44,0,0,0,.17.59.44.44,0,0,0,.58-.23h0a1.17,1.17,0,0,1,0-.11,2.78,2.78,0,0,0,.12-.38,2.91,2.91,0,0,1,.32-.75.27.27,0,0,1,.18-.08l.1-.18a5.32,5.32,0,0,0,3.12.23,5.48,5.48,0,0,0,.72-.22c0,.05.07.14.08.16a.39.39,0,0,1,.22.13,4.25,4.25,0,0,1,.28.7,2.78,2.78,0,0,0,.12.38l.06.11a.44.44,0,0,0,.57.24.44.44,0,0,0,.18-.59l-.06-.12a3.78,3.78,0,0,0-.22-.33,3.46,3.46,0,0,1-.37-.66.36.36,0,0,1,0-.24L14.75,17a5.44,5.44,0,0,0,2.4-3l.18,0a.37.37,0,0,1,.23-.09,4.49,4.49,0,0,1,.73.22c.13,0,.23.1.37.14l.11,0h0a.42.42,0,1,0,.19-.81l-.12,0a2.8,2.8,0,0,0-.4,0,3.76,3.76,0,0,1-.75-.13.44.44,0,0,1-.18-.18l-.16-.05a5.55,5.55,0,0,0-.09-1.94,5.29,5.29,0,0,0-.78-1.8l.15-.13A.32.32,0,0,1,16.71,9a4.15,4.15,0,0,1,.62-.43,3.24,3.24,0,0,0,.35-.21l.09-.07a.43.43,0,0,0,.1-.61.44.44,0,0,0-.62,0l-.09.07a3.58,3.58,0,0,0-.27.29,3.62,3.62,0,0,1-.57.51.45.45,0,0,1-.25,0l-.16.11A5.49,5.49,0,0,0,12.46,7a1.21,1.21,0,0,1,0-.18.33.33,0,0,1-.14-.21,3.53,3.53,0,0,1,0-.76c0-.13.05-.24.06-.39V5.3A.45.45,0,0,0,12,4.84Zm-.52,3.23-.13,2.18h0a.37.37,0,0,1-.37.36.35.35,0,0,1-.22-.08h0L9,9.27A4.34,4.34,0,0,1,11,8.14,3.5,3.5,0,0,1,11.48,8.07Zm1,0A4.24,4.24,0,0,1,15,9.27l-1.77,1.26h0a.37.37,0,0,1-.5-.07.34.34,0,0,1-.08-.21h0Zm-4.2,2L10,11.55h0a.37.37,0,0,1,.05.51.39.39,0,0,1-.19.12h0l-2.1.61a4.38,4.38,0,0,1,.61-2.72Zm7.35,0a4.56,4.56,0,0,1,.53,1.31,4.15,4.15,0,0,1,.09,1.4l-2.1-.61h0a.36.36,0,0,1-.26-.43.36.36,0,0,1,.11-.2h0l1.63-1.46Zm-4,1.58h.67l.42.52-.15.65-.6.29-.6-.29-.15-.65Zm2.15,1.78h.09l2.17.37A4.34,4.34,0,0,1,14.33,16l-.84-2h0a.38.38,0,0,1,.18-.48.35.35,0,0,1,.14,0Zm-3.64,0a.35.35,0,0,1,.35.28.36.36,0,0,1,0,.23h0l-.83,2A4.3,4.3,0,0,1,8,13.81l2.15-.36h.07Zm1.82.88.17,0a.41.41,0,0,1,.16.16h0l1.06,1.91a3.31,3.31,0,0,1-.42.12,4.24,4.24,0,0,1-2.35-.12l1.05-1.91h0A.34.34,0,0,1,12,14.33Z", fill: "#fff" })] })),
    openshift: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M20.85,7.76a8,8,0,0,0-.74-1.26l-3,1.1A6.43,6.43,0,0,1,18,8.8ZM7.46,11.11l-3,1.1a9.93,9.93,0,0,0,.24,1.43l2.88-1a6.19,6.19,0,0,1-.09-1.49", fill: "#c22133" }), jsxRuntimeExports.jsx("path", { d: "M14.19,6.9a5.49,5.49,0,0,1,1.63,1.16l3-1.1a8.55,8.55,0,0,0-3.38-2.81,8.67,8.67,0,0,0-12.3,8.52l3-1.1a5.47,5.47,0,0,1,.51-2A5.64,5.64,0,0,1,14.19,6.9m3.23,5.53a5.62,5.62,0,0,1-8,4.67,5.53,5.53,0,0,1-1.64-1.16l-3,1.1a8.49,8.49,0,0,0,3.38,2.81,8.67,8.67,0,0,0,11.51-4.19,8.47,8.47,0,0,0,.78-4.33Z", fill: "#db212e" })] })),
    hybridCloud: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "23.96", height: "23.96", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M20,10.72a5.19,5.19,0,0,0,.12-1.12A5.72,5.72,0,0,0,8.89,8a3,3,0,0,0-1.2-.27,2.85,2.85,0,0,0-2.81,2.47,5.23,5.23,0,0,0,2.34,9.92h9.52A5.23,5.23,0,0,0,20,10.72Z", fill: "#f7936f" }), jsxRuntimeExports.jsx("path", { d: "M4.25,16.83a.15.15,0,0,1-.1,0,.14.14,0,0,1,0-.11V12.91a.13.13,0,0,1,0-.1.12.12,0,0,1,.1,0H5a.15.15,0,0,1,.11,0,.18.18,0,0,1,0,.1v1.4H6.58v-1.4a.13.13,0,0,1,0-.1.12.12,0,0,1,.1,0h.75a.12.12,0,0,1,.1,0,.13.13,0,0,1,0,.1v3.77a.12.12,0,0,1,0,.1.12.12,0,0,1-.1,0H6.72a.12.12,0,0,1-.1,0,.12.12,0,0,1,0-.1V15.24H5.15v1.44a.15.15,0,0,1,0,.1.16.16,0,0,1-.11,0Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M8.57,16.83a.12.12,0,0,1-.1,0,.12.12,0,0,1,0-.1V12.91a.13.13,0,0,1,0-.1.12.12,0,0,1,.1,0h1.77a2,2,0,0,1,.82.14,1,1,0,0,1,.47.39,1.24,1.24,0,0,1,.15.62.8.8,0,0,1-.07.36,1,1,0,0,1-.2.27.69.69,0,0,1-.21.15,1,1,0,0,1,.39.34.91.91,0,0,1,.18.56,1.21,1.21,0,0,1-.18.66,1.13,1.13,0,0,1-.49.42,2,2,0,0,1-.81.15Zm.9-2.45h.75a.49.49,0,0,0,.36-.12A.45.45,0,0,0,10.7,14a.41.41,0,0,0-.12-.31.49.49,0,0,0-.36-.12H9.47Zm0,1.69h.81a.45.45,0,0,0,.37-.14.48.48,0,0,0,.13-.33.45.45,0,0,0-.13-.34.46.46,0,0,0-.37-.14H9.47Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M12.65,16.83a.14.14,0,0,1-.1,0,.12.12,0,0,1,0-.1V12.91a.14.14,0,0,1,.14-.14h1.58a1.82,1.82,0,0,1,1.18.34,1.18,1.18,0,0,1,.43,1,1.22,1.22,0,0,1-.19.7,1.25,1.25,0,0,1-.53.43l.8,1.42a.25.25,0,0,1,0,.07s0,.05,0,.08a.1.1,0,0,1-.08,0H15a.21.21,0,0,1-.16-.06.3.3,0,0,1-.07-.1l-.66-1.27h-.6v1.28a.12.12,0,0,1,0,.1.14.14,0,0,1-.11,0Zm.9-2.26h.67a.56.56,0,0,0,.41-.13.49.49,0,0,0,.14-.36.49.49,0,0,0-.55-.51h-.67Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M16.66,16.83a.12.12,0,0,1-.1,0,.12.12,0,0,1,0-.1V12.91a.13.13,0,0,1,0-.1.12.12,0,0,1,.1,0h1.51a2.37,2.37,0,0,1,1,.18,1.38,1.38,0,0,1,.61.53,1.81,1.81,0,0,1,.24.87v.89a2,2,0,0,1-.23.89,1.29,1.29,0,0,1-.6.53,2.46,2.46,0,0,1-1,.17Zm.9-.84h.61a.83.83,0,0,0,.41-.08.45.45,0,0,0,.25-.24.93.93,0,0,0,.09-.44c0-.12,0-.22,0-.3v-.27c0-.09,0-.19,0-.3a.74.74,0,0,0-.2-.57.78.78,0,0,0-.58-.19h-.58Z", fill: "#2b0076" })] })),
    ibmCloud: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsxs("linearGradient", { id: "ibmCloudGradient", x1: "6.78", y1: "22.6", x2: "17.04", y2: "2.83", gradientUnits: "userSpaceOnUse", children: [jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "#036afd" }), jsxRuntimeExports.jsx("stop", { offset: "0.14", stopColor: "#1186f5" }), jsxRuntimeExports.jsx("stop", { offset: "0.42", stopColor: "#2bb9e6" }), jsxRuntimeExports.jsx("stop", { offset: "0.67", stopColor: "#3edddc" }), jsxRuntimeExports.jsx("stop", { offset: "0.87", stopColor: "#4af4d5" }), jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#4efcd3" })] }) }), jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M6.73,16.05a5.95,5.95,0,1,1,10.59-5.41M6.06,13.2a3.94,3.94,0,0,0,.12,7.88H16.65a5.24,5.24,0,1,0-4-8.66M22,8.2,19.92,9.4M17.85,4,16.6,6M12,2.43v2.4M6.21,3.94,7.41,6M2,8.18l2.08,1.2", fill: "none", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "1.25px", stroke: "url(#ibmCloudGradient)" })] })),
    eks: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M11.93,2.3a1.28,1.28,0,0,0-.51.13L4.47,5.75a1.29,1.29,0,0,0-.72.89L2,14.11a1.34,1.34,0,0,0,.18,1l.08.1,4.81,6a1.34,1.34,0,0,0,1,.49h7.72a1.34,1.34,0,0,0,1-.49l4.81-6A1.31,1.31,0,0,0,22,14.11L20.25,6.64a1.32,1.32,0,0,0-.72-.89l-7-3.32A1.35,1.35,0,0,0,11.93,2.3Z", fill: "#326ce5" }), jsxRuntimeExports.jsx("path", { d: "M5,14.83a.17.17,0,0,1-.14-.06.2.2,0,0,1-.06-.14V9.43a.21.21,0,0,1,.2-.2H8.7a.18.18,0,0,1,.14.06.17.17,0,0,1,.06.14v.75a.2.2,0,0,1-.06.15.22.22,0,0,1-.14.05H6.15v1.08H8.52a.17.17,0,0,1,.14.06.2.2,0,0,1,.06.15v.7a.2.2,0,0,1-.06.14.17.17,0,0,1-.14.06H6.15v1.11H8.76a.18.18,0,0,1,.2.2v.75a.24.24,0,0,1-.05.14.2.2,0,0,1-.15.06Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M10.07,14.83a.18.18,0,0,1-.14-.06.2.2,0,0,1-.06-.14V9.43a.17.17,0,0,1,.06-.14.18.18,0,0,1,.14-.06h1a.2.2,0,0,1,.15.06.2.2,0,0,1,0,.14v1.78l1.48-1.83a.57.57,0,0,1,.11-.1.39.39,0,0,1,.2,0h1.16a.21.21,0,0,1,.12,0,.19.19,0,0,1,0,.12s0,.07,0,.09l-1.92,2.42,2.06,2.66a.13.13,0,0,1,0,.09.18.18,0,0,1-.05.12.17.17,0,0,1-.12.05H13.19a.34.34,0,0,1-.22-.06l-.11-.1-1.58-2v1.94a.24.24,0,0,1,0,.14.2.2,0,0,1-.15.06Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M17.11,14.91a3.45,3.45,0,0,1-1.33-.23,2,2,0,0,1-.8-.59,1.41,1.41,0,0,1-.28-.79.13.13,0,0,1,.05-.11.14.14,0,0,1,.12-.06h1a.39.39,0,0,1,.17,0l.11.11a.76.76,0,0,0,.18.23.73.73,0,0,0,.31.18,1.27,1.27,0,0,0,.46.07,1.3,1.3,0,0,0,.7-.15.43.43,0,0,0,.24-.39.35.35,0,0,0-.13-.29,1,1,0,0,0-.41-.21c-.19-.06-.44-.12-.76-.19a4.16,4.16,0,0,1-1-.33,1.54,1.54,0,0,1-.66-.53,1.45,1.45,0,0,1-.22-.83,1.39,1.39,0,0,1,.28-.87,1.73,1.73,0,0,1,.77-.6,2.81,2.81,0,0,1,1.17-.22,3.22,3.22,0,0,1,1,.14,2.24,2.24,0,0,1,.7.39,1.71,1.71,0,0,1,.44.51,1.2,1.2,0,0,1,.16.52.21.21,0,0,1-.05.12.17.17,0,0,1-.12.05H18.11a.33.33,0,0,1-.15,0,.29.29,0,0,1-.11-.11.6.6,0,0,0-.25-.31,1.08,1.08,0,0,0-.54-.13.94.94,0,0,0-.54.13.42.42,0,0,0-.2.38.43.43,0,0,0,.11.28.76.76,0,0,0,.36.2c.17.06.4.12.69.19a5,5,0,0,1,1.18.34,1.48,1.48,0,0,1,.66.53,1.43,1.43,0,0,1,.21.81,1.49,1.49,0,0,1-.31.93,2,2,0,0,1-.86.61A3.41,3.41,0,0,1,17.11,14.91Z", fill: "#fff" })] })),
    aks: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M12,2.3a1.28,1.28,0,0,0-.51.13L4.5,5.75a1.29,1.29,0,0,0-.72.89L2.06,14.11a1.34,1.34,0,0,0,.18,1l.08.1,4.81,6a1.34,1.34,0,0,0,1,.49h7.72a1.34,1.34,0,0,0,1-.49l4.81-6A1.31,1.31,0,0,0,22,14.11L20.28,6.64a1.32,1.32,0,0,0-.72-.89L12.61,2.43A1.35,1.35,0,0,0,12,2.3Z", fill: "#326ce5" }), jsxRuntimeExports.jsx("path", { d: "M4.15,14.83A.21.21,0,0,1,4,14.78.18.18,0,0,1,4,14.66a.17.17,0,0,1,0-.07L5.87,9.45A.29.29,0,0,1,6,9.3a.28.28,0,0,1,.21-.07H7.36a.29.29,0,0,1,.22.07.36.36,0,0,1,.1.15l1.87,5.14a.17.17,0,0,1,0,.07.15.15,0,0,1-.05.12.17.17,0,0,1-.12.05h-1a.24.24,0,0,1-.18-.06.28.28,0,0,1-.07-.11l-.31-.81H5.7l-.3.81a.33.33,0,0,1-.08.11.24.24,0,0,1-.19.06ZM6,12.69H7.52l-.75-2.11Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M10.4,14.83a.2.2,0,0,1-.15-.06.19.19,0,0,1-.05-.14V9.43a.16.16,0,0,1,.05-.14.2.2,0,0,1,.15-.06h1a.2.2,0,0,1,.15.06.16.16,0,0,1,0,.14v1.78l1.48-1.83.11-.1a.41.41,0,0,1,.21,0h1.15a.17.17,0,0,1,.12,0,.21.21,0,0,1,.05.12.12.12,0,0,1,0,.09l-1.92,2.42,2.07,2.66a.12.12,0,0,1,0,.09.18.18,0,0,1,0,.12.17.17,0,0,1-.12.05H13.51a.34.34,0,0,1-.22-.06l-.1-.1-1.59-2v1.94a.19.19,0,0,1,0,.14.2.2,0,0,1-.15.06Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M17.44,14.91a3.38,3.38,0,0,1-1.33-.23,1.86,1.86,0,0,1-.8-.59A1.42,1.42,0,0,1,15,13.3a.16.16,0,0,1,.05-.11.18.18,0,0,1,.13-.06h1a.4.4,0,0,1,.18,0,.52.52,0,0,1,.1.11,1.3,1.3,0,0,0,.18.23.73.73,0,0,0,.31.18,1.64,1.64,0,0,0,1.16-.08.43.43,0,0,0,.24-.39.35.35,0,0,0-.13-.29,1,1,0,0,0-.41-.21c-.19-.06-.44-.12-.75-.19a4.11,4.11,0,0,1-1-.33,1.51,1.51,0,0,1-.65-.53,1.45,1.45,0,0,1-.23-.83,1.39,1.39,0,0,1,.28-.87,1.73,1.73,0,0,1,.77-.6,2.83,2.83,0,0,1,1.18-.22,3.2,3.2,0,0,1,1,.14,2.29,2.29,0,0,1,.71.39,1.83,1.83,0,0,1,.43.51,1.2,1.2,0,0,1,.16.52.28.28,0,0,1,0,.12.19.19,0,0,1-.13.05h-1a.41.41,0,0,1-.16,0,.29.29,0,0,1-.11-.11.6.6,0,0,0-.25-.31,1,1,0,0,0-.53-.13,1,1,0,0,0-.55.13.42.42,0,0,0-.2.38.43.43,0,0,0,.11.28.76.76,0,0,0,.36.2c.17.06.4.12.69.19a5,5,0,0,1,1.18.34,1.5,1.5,0,0,1,.56,2.27,1.92,1.92,0,0,1-.85.61A3.45,3.45,0,0,1,17.44,14.91Z", fill: "#fff" })] })),
    gke: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M11.93,2.3a1.28,1.28,0,0,0-.51.13L4.47,5.75a1.29,1.29,0,0,0-.72.89L2,14.11a1.34,1.34,0,0,0,.18,1l.08.1,4.81,6a1.34,1.34,0,0,0,1,.49h7.72a1.34,1.34,0,0,0,1-.49l4.81-6A1.31,1.31,0,0,0,22,14.11L20.25,6.64a1.32,1.32,0,0,0-.72-.89l-7-3.32A1.35,1.35,0,0,0,11.93,2.3Z", fill: "#326ce5" }), jsxRuntimeExports.jsx("path", { d: "M6.77,14.91a3.09,3.09,0,0,1-1.31-.25,1.92,1.92,0,0,1-.85-.74,2.37,2.37,0,0,1-.33-1.18c0-.23,0-.47,0-.73s0-.5,0-.74a2.2,2.2,0,0,1,.34-1.15,1.88,1.88,0,0,1,.85-.72,3.08,3.08,0,0,1,1.3-.25,3.43,3.43,0,0,1,1.06.15,2.59,2.59,0,0,1,.78.39,1.93,1.93,0,0,1,.49.55,1.2,1.2,0,0,1,.17.58.13.13,0,0,1,0,.12A.17.17,0,0,1,9.1,11H7.93a.23.23,0,0,1-.13,0,.2.2,0,0,1-.08-.08,1.17,1.17,0,0,0-.16-.25.8.8,0,0,0-.3-.23,1,1,0,0,0-.49-.1,1,1,0,0,0-.71.24,1,1,0,0,0-.29.77c0,.46,0,.92,0,1.39a1,1,0,0,0,.3.81,1,1,0,0,0,.72.25,1.25,1.25,0,0,0,.53-.11.74.74,0,0,0,.38-.32,1.06,1.06,0,0,0,.13-.56v-.16H7.08a.17.17,0,0,1-.14-.06.18.18,0,0,1-.06-.14v-.6a.2.2,0,0,1,.06-.14.17.17,0,0,1,.14-.06h2a.18.18,0,0,1,.14.06.2.2,0,0,1,.06.14v.92A2.17,2.17,0,0,1,9,13.9a2,2,0,0,1-.89.75A3.22,3.22,0,0,1,6.77,14.91Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M10.42,14.83a.2.2,0,0,1-.15-.06.24.24,0,0,1,0-.14V9.43a.2.2,0,0,1,0-.14.2.2,0,0,1,.15-.06h1a.2.2,0,0,1,.15.06.16.16,0,0,1,0,.14v1.78l1.49-1.83.1-.1a.41.41,0,0,1,.21,0h1.15a.17.17,0,0,1,.12,0,.21.21,0,0,1,.05.12.12.12,0,0,1,0,.09l-1.92,2.42,2.07,2.66a.12.12,0,0,1,0,.09.18.18,0,0,1-.05.12.17.17,0,0,1-.12.05H13.53a.34.34,0,0,1-.22-.06l-.1-.1-1.59-2v1.94a.19.19,0,0,1,0,.14.2.2,0,0,1-.15.06Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M15.72,14.83a.17.17,0,0,1-.14-.06.2.2,0,0,1-.06-.14V9.43a.21.21,0,0,1,.2-.2h3.74a.18.18,0,0,1,.14.06.17.17,0,0,1,.06.14v.75a.2.2,0,0,1-.06.15.22.22,0,0,1-.14.05H16.91v1.08h2.37a.17.17,0,0,1,.14.06.2.2,0,0,1,.06.15v.7a.2.2,0,0,1-.06.14.17.17,0,0,1-.14.06H16.91v1.11h2.61a.2.2,0,0,1,.14.05.2.2,0,0,1,.06.15v.75a.2.2,0,0,1-.06.14.17.17,0,0,1-.14.06Z", fill: "#fff" })] })),
    alibaba: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M4.72,5.86a3.66,3.66,0,0,0-2.3,1.71C2,8.37,2,8.57,2,11.93c0,1.79,0,3.27.08,3.5a3.39,3.39,0,0,0,2.7,2.7c.41.08,5.81.12,5.81,0s-.46-1.86-.48-1.89L8,15.8c-2.7-.59-2.62-.57-2.85-.84l-.19-.23V9.26L5.13,9c.23-.27.15-.25,2.85-.83l2.13-.48s.48-1.82.48-1.88-5.51,0-5.87,0Zm8.73,0c0,.14.43,1.79.48,1.84s1,.26,2.28.52,2.33.53,2.43.59a.86.86,0,0,1,.32.31c.13.21.14.44.14,2.87s0,2.65-.14,2.86a1,1,0,0,1-.32.32c-.1.05-1.19.31-2.43.58l-2.28.53s-.47,1.7-.48,1.83.54.1,2.92.08c3.28,0,3.32,0,4.16-.6a3.48,3.48,0,0,0,1.3-1.7c.17-.5.17-.55.17-3.9s0-3.4-.17-3.9a3.48,3.48,0,0,0-1.3-1.7c-.84-.56-.87-.57-4.16-.6-2.38,0-2.92,0-2.92.07Zm-3.36,6a.53.53,0,0,0,0,.25c0,.12.16.14,1.93.16h1.9v-.52H12c-1.58,0-1.9,0-1.93.1Z", fill: "#ff6a00" })] })),
    exoscale: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,3.34L2,20.66h1.39L12,5.83v2.44l-7.18,12.39h1.44l5.74-9.9v2.49l-4.31,7.42h1.44l2.87-4.93v2.44l-1.44,2.49h11.44L12,3.34Z", fill: "#da291c" }) })),
};

const klarityIcons = {
    networking: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "M7.85872 8.33331H7.12956C6.96847 8.33331 6.83789 8.46389 6.83789 8.62498C6.83789 8.78607 6.96847 8.91664 7.12956 8.91664H7.85872C8.01981 8.91664 8.15039 8.78607 8.15039 8.62498C8.15039 8.46389 8.01981 8.33331 7.85872 8.33331Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.85872 9.8208H7.12956C6.96847 9.8208 6.83789 9.95138 6.83789 10.1125C6.83789 10.2736 6.96847 10.4041 7.12956 10.4041H7.85872C8.01981 10.4041 8.15039 10.2736 8.15039 10.1125C8.15039 9.95138 8.01981 9.8208 7.85872 9.8208Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M7.85872 11.3666H7.12956C6.96847 11.3666 6.83789 11.4972 6.83789 11.6583C6.83789 11.8194 6.96847 11.95 7.12956 11.95H7.85872C8.01981 11.95 8.15039 11.8194 8.15039 11.6583C8.15039 11.4972 8.01981 11.3666 7.85872 11.3666Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M18.1647 6.25039C17.7185 6.08893 17.1313 6 16.5112 6C15.891 6 15.2998 6.08893 14.8536 6.25039C14.4722 6.38847 14.0134 6.64569 14.0134 7.08715V9.47082H9.98846V7.08715C9.98846 6.64569 9.52972 6.38847 9.14825 6.25039C8.70221 6.08893 8.11284 6 7.4927 6C6.87256 6 6.2843 6.08893 5.83806 6.25039C5.4567 6.38847 5.00098 6.64569 5.00098 7.08715V11.6194C5.00098 12.061 5.45568 12.3183 5.83712 12.4563C6.2832 12.6177 6.87046 12.7066 7.49087 12.7066C7.62815 12.7066 7.76842 12.7022 7.90074 12.6938L9.52179 15.4989V18.9128C9.52179 19.3544 9.97119 19.6116 10.3526 19.7496C10.7987 19.911 11.3833 19.9999 12.0036 19.9999C12.3649 20.0016 12.7255 19.969 13.0806 19.9025C13.9742 19.731 14.4801 19.3703 14.4801 18.9128V15.499L16.105 12.6937C16.2363 12.702 16.3729 12.7065 16.5085 12.7065C16.8724 12.7082 17.2357 12.6756 17.5935 12.6091C18.4871 12.4377 19.0009 12.0769 19.0009 11.6194V7.08715C19.0009 6.64569 18.5462 6.38847 18.1647 6.25039ZM7.49072 6.58333C8.80613 6.58333 9.39719 6.98382 9.39719 7.08715C9.39719 7.19049 8.80601 7.59101 7.49072 7.59101C6.17543 7.59101 5.58431 7.19049 5.58431 7.08715C5.58431 6.98382 6.17548 6.58333 7.49072 6.58333ZM5.58431 7.81673C5.6665 7.85718 5.75094 7.89297 5.83718 7.92391C6.28343 8.08541 6.87061 8.17434 7.49072 8.17434C8.11083 8.17434 8.70207 8.08541 9.14825 7.92391C9.23091 7.89402 9.31763 7.85849 9.40512 7.81673V8.59442C9.40512 8.69776 8.81013 9.09827 7.49472 9.09827C6.17931 9.09827 5.58431 8.69791 5.58431 8.59442V7.81673V7.81673ZM5.58431 9.32414C5.6665 9.36457 5.75091 9.40035 5.83712 9.4313C6.2832 9.59271 6.87046 9.68161 7.49087 9.68161C8.11127 9.68161 8.70242 9.59271 9.14849 9.4313C9.23112 9.4014 9.31765 9.36588 9.40515 9.32414V10.1017C9.40515 10.205 8.81016 10.6055 7.49475 10.6055C6.17933 10.6055 5.58431 10.205 5.58431 10.1017V9.32414V9.32414ZM7.49273 12.1233C6.17747 12.1233 5.58431 11.7228 5.58431 11.6194V10.8314C5.6665 10.8718 5.75091 10.9076 5.83712 10.9386C6.2832 11.0999 6.87046 11.1888 7.49087 11.1888C8.11127 11.1888 8.70242 11.0999 9.14849 10.9386C9.23112 10.9087 9.31765 10.8731 9.40515 10.8314V11.6194C9.40515 11.6506 9.22724 11.8907 8.46841 12.0362C8.14659 12.0954 7.81995 12.1245 7.49273 12.1233ZM13.8968 18.9128C13.8968 18.9441 13.7282 19.184 12.9693 19.3296V19.3297C12.6508 19.3888 12.3275 19.4179 12.0036 19.4166C10.6885 19.4166 10.1051 19.0161 10.1051 18.9128V18.1248C10.1926 18.1665 10.27 18.202 10.3526 18.2319C10.7987 18.3933 11.3833 18.4822 12.0036 18.4822C12.6239 18.4822 13.2045 18.3933 13.6506 18.2319C13.7332 18.202 13.8093 18.1665 13.8968 18.1248V18.9128V18.9128ZM13.8968 17.395C13.8968 17.4984 13.3164 17.8989 12.0009 17.8989C10.6855 17.8989 10.1051 17.4984 10.1051 17.395V16.6175C10.1926 16.6592 10.27 16.6948 10.3526 16.7247C10.7987 16.8861 11.3833 16.975 12.0036 16.975C12.6239 16.975 13.2045 16.8861 13.6506 16.7247C13.7332 16.6948 13.8093 16.6592 13.8968 16.6175V17.395V17.395ZM13.8968 15.8878C13.8968 15.9911 13.3164 16.3916 12.0009 16.3916V16.3917C10.6857 16.3917 10.1051 15.9912 10.1051 15.8879V15.1101C10.1926 15.1518 10.27 15.1874 10.3527 15.2173C10.7989 15.3788 11.3835 15.4677 12.0035 15.4677C12.6236 15.4677 13.2042 15.3788 13.6504 15.2173C13.7332 15.1875 13.8093 15.1518 13.8968 15.1101V15.8878ZM12.0009 14.8843C10.6857 14.8843 10.0947 14.484 10.0945 14.3805C10.0947 14.2771 10.6859 13.8768 12.0009 13.8768C13.3162 13.8768 13.9074 14.2773 13.9074 14.3806C13.9074 14.4839 13.3164 14.8843 12.0009 14.8843ZM14.4889 14.3354C14.4591 13.9215 14.0227 13.677 13.6544 13.5438C13.2081 13.3823 12.6209 13.2934 12.0008 13.2934C11.3807 13.2934 10.7933 13.3823 10.3473 13.5438C9.97953 13.6768 9.5439 13.9208 9.51313 14.3336L8.52482 12.6179C8.5413 12.615 8.56195 12.6122 8.57831 12.6091C9.47197 12.4377 9.98846 12.0769 9.98846 11.6194V10.0541H14.0134V11.6194C14.0134 12.061 14.4721 12.3183 14.8534 12.4563C15.0568 12.5277 15.2657 12.582 15.478 12.6187L14.4889 14.3354ZM18.4176 11.6194C18.4176 11.6506 18.2437 11.8907 17.4849 12.0362H17.4848C17.1622 12.0954 16.835 12.1245 16.5071 12.1233C15.1917 12.1233 14.5967 11.7228 14.5967 11.6194V10.8314C14.6842 10.8731 14.7708 10.9087 14.8533 10.9386C15.2994 11.0999 15.8887 11.1888 16.509 11.1888C17.1292 11.1888 17.7176 11.0999 18.1638 10.9386C18.2504 10.9076 18.3351 10.8719 18.4176 10.8314V11.6194V11.6194ZM16.5072 10.6055C15.1918 10.6055 14.5968 10.205 14.5968 10.1017V9.32414C14.6843 9.36588 14.7709 9.4014 14.8534 9.4313C15.2995 9.59271 15.8888 9.68161 16.5091 9.68161C17.1293 9.68161 17.7176 9.59271 18.1638 9.4313C18.2504 9.40035 18.3351 9.36459 18.4176 9.32414V10.1017C18.4176 10.205 17.8226 10.6055 16.5072 10.6055ZM18.4176 8.59442C18.4176 8.69791 17.8226 9.09827 16.5072 9.09827V9.09836C15.1918 9.09836 14.5968 8.69785 14.5968 8.59451V7.81673C14.6843 7.85849 14.771 7.89402 14.8536 7.92391C15.2999 8.08541 15.8891 8.17434 16.5092 8.17434C17.1293 8.17434 17.7176 8.08541 18.1638 7.92391C18.2504 7.89297 18.3351 7.85718 18.4176 7.81673V8.59442ZM16.5112 7.59101V7.59109C15.1958 7.59109 14.6047 7.19058 14.6047 7.08724C14.6047 6.9839 15.1959 6.58333 16.5112 6.58333C17.8265 6.58333 18.4176 6.98382 18.4176 7.08715C18.4176 7.19049 17.8264 7.59101 16.5112 7.59101Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.8704 8.33331H16.1413C15.9802 8.33331 15.8496 8.46389 15.8496 8.62498C15.8496 8.78607 15.9802 8.91664 16.1413 8.91664H16.8704C17.0315 8.91664 17.1621 8.78607 17.1621 8.62498C17.1621 8.46389 17.0315 8.33331 16.8704 8.33331Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.8704 9.8208H16.1413C15.9802 9.8208 15.8496 9.95138 15.8496 10.1125C15.8496 10.2736 15.9802 10.4041 16.1413 10.4041H16.8704C17.0315 10.4041 17.1621 10.2736 17.1621 10.1125C17.1621 9.95138 17.0315 9.8208 16.8704 9.8208Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M16.8704 11.3666H16.1413C15.9802 11.3666 15.8496 11.4972 15.8496 11.6583C15.8496 11.8194 15.9802 11.95 16.1413 11.95H16.8704C17.0315 11.95 17.1621 11.8194 17.1621 11.6583C17.1621 11.4972 17.0315 11.3666 16.8704 11.3666Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3499 15.6249H11.6208C11.4597 15.6249 11.3291 15.7555 11.3291 15.9166C11.3291 16.0777 11.4597 16.2083 11.6208 16.2083H12.3499C12.511 16.2083 12.6416 16.0777 12.6416 15.9166C12.6416 15.7555 12.511 15.6249 12.3499 15.6249Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3499 17.1124H11.6208C11.4597 17.1124 11.3291 17.243 11.3291 17.4041C11.3291 17.5652 11.4597 17.6958 11.6208 17.6958H12.3499C12.511 17.6958 12.6416 17.5652 12.6416 17.4041C12.6416 17.243 12.511 17.1124 12.3499 17.1124Z", fill: "white" }), jsxRuntimeExports.jsx("path", { d: "M12.3499 18.6583H11.6208C11.4597 18.6583 11.3291 18.7888 11.3291 18.9499C11.3291 19.111 11.4597 19.2416 11.6208 19.2416H12.3499C12.511 19.2416 12.6416 19.111 12.6416 18.9499C12.6416 18.7888 12.511 18.6583 12.3499 18.6583Z", fill: "white" })] })),
    support: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "M14.3988 11.476L15.6223 10.2525C17.4332 10.7429 19.1518 9.27988 18.9894 7.43822C18.9296 6.75917 18.1066 6.46222 17.6276 6.9412L16.9408 7.62796C16.6969 7.87233 16.2639 7.713 16.2612 7.35349C16.2601 7.23949 16.3049 7.12847 16.3845 7.04893L17.06 6.37365C17.5402 5.89341 17.2401 5.07149 16.5633 5.01188C15.7633 4.9416 14.982 5.2295 14.4199 5.80225C13.7287 6.50635 13.5128 7.49545 13.7509 8.37677L13.1688 8.95881L12.4492 8.23923C12.4492 8.23923 12.4492 8.23923 12.4492 8.23896C12.1294 7.91936 11.6088 7.91936 11.2892 8.23896L10.0554 9.47279L8.90282 8.32017L9.50619 7.71653C9.66639 7.55632 9.66639 7.29658 9.50619 7.13665L8.31939 5.94985C8.28849 5.91868 8.25267 5.89297 8.21359 5.87331L6.69653 5.11111C6.53851 5.03181 6.34768 5.06271 6.22248 5.18767L5.18607 6.22411C5.06086 6.34959 5.03023 6.54124 5.11035 6.69953L5.87666 8.21222C5.89635 8.25077 5.92178 8.28604 5.9524 8.31664L7.1392 9.50344C7.29944 9.66368 7.55879 9.66398 7.71933 9.50344L8.32269 8.90008L9.47559 10.0527L8.24367 11.2846C7.92309 11.6052 7.9229 12.1238 8.24367 12.4446L8.96325 13.1645L5.39 16.7377C4.55196 17.5757 5.15697 18.9986 6.3269 18.9986C6.66618 18.9986 7.00519 18.8693 7.26353 18.6112L11.4798 14.395L15.4122 18.3285C16.2187 19.135 17.5245 19.1353 18.3312 18.3285C19.1361 17.5237 19.1361 16.2141 18.3312 15.4095L14.3988 11.476ZM7.42924 8.6335L6.57871 7.78297L5.97616 6.59399L6.5932 5.97695L7.78629 6.57649L8.63627 7.42647L7.42924 8.6335ZM16.4482 5.82549L15.8046 6.46905C15.5703 6.70336 15.4377 7.0287 15.441 7.36141C15.4509 8.44663 16.7673 8.96152 17.5209 8.20784L18.1757 7.55307C18.2731 9.06028 16.623 10.0371 15.3488 9.24592C13.7368 8.24809 14.5146 5.70873 16.4482 5.82549V5.82549ZM9.54337 12.5843L8.82352 11.8647C11.5621 9.12552 9.09767 11.5906 11.8688 8.81886C11.8688 8.81886 11.8688 8.81886 11.8691 8.81914L12.5889 9.53899C11.9506 10.1774 10.1606 11.967 9.54337 12.5843ZM6.68371 18.0311C6.5853 18.1295 6.45596 18.1787 6.32693 18.1787C5.88153 18.1787 5.65105 17.6366 5.97015 17.3175C7.65053 15.637 12.4378 10.8501 14.1148 9.17264C14.2969 9.44186 14.5393 9.69058 14.8286 9.88647C10.9863 13.7288 7.56631 17.1485 6.68371 18.0311V18.0311ZM17.7511 17.7486C17.2653 18.2345 16.4781 18.2346 15.9922 17.7486L12.0597 13.8151L12.6494 13.2257L16.5003 17.0766C16.6604 17.2367 16.9201 17.2367 17.0802 17.0766C17.2404 16.9164 17.2404 16.6568 17.0802 16.4966L13.2292 12.6456C13.2293 12.6455 13.8189 12.0559 13.819 12.0558L17.7512 15.9894C18.2364 16.4744 18.2364 17.2637 17.7511 17.7486V17.7486Z", fill: "white" })] })),
    other: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "M8.29991 9.64162V9.79411C8.29991 11.3839 9.64187 12.6774 11.2914 12.6774H12.3705C13.0787 12.6774 13.6549 13.2278 13.6549 13.9044V14.4405C13.6549 15.121 13.0787 15.6745 12.3705 15.6745H10.6167C10.1272 15.6745 9.71359 15.2609 9.71359 14.7713C9.71359 14.3178 9.32998 13.9502 8.8568 13.9502C8.38361 13.9502 8 14.3178 8 14.7713C8 16.1748 9.17387 17.3167 10.6167 17.3167H10.8274V18.1789C10.8274 18.6324 11.211 19 11.6842 19C12.1574 19 12.541 18.6324 12.541 18.1789V17.3117C14.115 17.2266 15.3684 15.9715 15.3684 14.4405V13.9044C15.3684 12.3223 14.0235 11.0352 12.3704 11.0352H11.2913C10.5867 11.0352 10.0135 10.4784 10.0135 9.79415V9.64166C10.0135 8.96119 10.5867 8.40766 11.2913 8.40766H12.3118C12.8161 8.40766 13.2265 8.79442 13.2265 9.26983C13.2265 9.72331 13.6101 10.0909 14.0832 10.0909C14.5564 10.0909 14.94 9.72331 14.94 9.26983C14.94 7.96253 13.8832 6.88666 12.541 6.77555V5.82111C12.541 5.36763 12.1574 5 11.6842 5C11.211 5 10.8274 5.36763 10.8274 5.82111V6.80011C9.3975 7.01509 8.29991 8.20737 8.29991 9.64162Z", fill: "white" })] })),
    reservedInstance: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.9399 21.3099V18.9099M16.9999 18.8999H6.85986C6.44082 18.8999 6.03894 18.7335 5.74263 18.4372C5.44633 18.1409 5.27986 17.739 5.27986 17.3199V7.18994C5.27986 6.76997 5.446 6.36706 5.74202 6.06916C6.03805 5.77127 6.4399 5.60258 6.85986 5.59994H16.9999C17.4207 5.60256 17.8237 5.77092 18.1213 6.06854C18.4189 6.36616 18.5872 6.76906 18.5899 7.18994V17.3199C18.5872 17.7399 18.4185 18.1418 18.1206 18.4378C17.8227 18.7338 17.4198 18.8999 16.9999 18.8999V18.8999ZM5.25986 15.5899H2.85986H5.25986ZM5.25986 8.93994H2.85986H5.25986ZM5.25986 12.2699H2.85986H5.25986ZM20.9999 15.5499H18.5799H20.9999ZM20.9999 8.90994H18.5799H20.9999ZM20.9999 12.2299H18.5799H20.9999ZM8.57986 5.58994V3.18994V5.58994ZM15.2199 5.58994V3.18994V5.58994ZM11.8999 5.58994V3.18994V5.58994ZM8.61986 21.3099V18.9099V21.3099ZM15.2599 21.3099V18.9099V21.3099Z", stroke: "#FF9900", fillOpacity: "0", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntimeExports.jsx("path", { d: "M14.4298 15.06C14.3996 15.0611 14.3695 15.0555 14.3418 15.0433C14.3141 15.0312 14.2895 15.013 14.2698 14.99C14.2499 14.9705 14.2343 14.9471 14.224 14.9213C14.2137 14.8955 14.2088 14.8678 14.2098 14.84V9.15996C14.208 9.13057 14.2125 9.10114 14.2228 9.07358C14.2331 9.04601 14.2492 9.02093 14.2698 8.99996C14.3135 8.96015 14.3708 8.93867 14.4298 8.93996H15.5998C15.6292 8.93818 15.6586 8.94261 15.6862 8.95295C15.7138 8.96328 15.7388 8.9793 15.7598 8.99996C15.7834 9.01908 15.8021 9.0436 15.8143 9.07144C15.8265 9.09928 15.8318 9.12963 15.8298 9.15996V14.84C15.831 14.8687 15.8253 14.8974 15.8131 14.9235C15.8009 14.9496 15.7826 14.9724 15.7598 14.99C15.7407 15.0136 15.7162 15.0322 15.6883 15.0444C15.6605 15.0566 15.6301 15.0619 15.5998 15.06H14.4298ZM8.42981 15.06C8.39419 15.0693 8.35665 15.0687 8.32136 15.0581C8.28607 15.0475 8.25439 15.0274 8.22981 15C8.20993 14.9805 8.19433 14.9571 8.18399 14.9313C8.17366 14.9055 8.16883 14.8778 8.16981 14.85V9.15996C8.16804 9.13057 8.17247 9.10114 8.1828 9.07358C8.19314 9.04601 8.20916 9.02093 8.22981 8.99996C8.27346 8.96015 8.33076 8.93867 8.38981 8.93996H10.7698C11.4055 8.90198 12.0346 9.08577 12.5498 9.45996C12.7653 9.63735 12.9362 9.86266 13.0491 10.1179C13.1619 10.3731 13.2136 10.6512 13.1998 10.93C13.218 11.3097 13.1127 11.685 12.8998 12C12.7024 12.2862 12.4287 12.5114 12.1098 12.65L13.3098 14.8C13.3175 14.8328 13.3175 14.8671 13.3098 14.9C13.3091 14.9231 13.3034 14.9458 13.293 14.9665C13.2826 14.9873 13.2679 15.0055 13.2498 15.02C13.2334 15.0383 13.2134 15.0531 13.191 15.0634C13.1687 15.0738 13.1444 15.0794 13.1198 15.08H11.9998C11.9565 15.0831 11.913 15.0776 11.8718 15.0639C11.8307 15.0501 11.7926 15.0284 11.7598 15C11.7128 14.9523 11.6724 14.8985 11.6398 14.84L10.6398 12.92H9.73981V14.86C9.74079 14.8878 9.73597 14.9155 9.72563 14.9413C9.7153 14.9671 9.6997 14.9905 9.67981 15.01C9.66018 15.033 9.63557 15.0512 9.60786 15.0633C9.58015 15.0755 9.55004 15.0811 9.51981 15.08L8.42981 15.06ZM9.77981 11.66H10.7798C11.0043 11.674 11.2259 11.6026 11.3998 11.46C11.5338 11.3126 11.6055 11.119 11.5998 10.92C11.6068 10.8194 11.5927 10.7185 11.5582 10.6237C11.5238 10.529 11.4698 10.4425 11.3998 10.37C11.3171 10.2932 11.2191 10.2348 11.1123 10.1986C11.0054 10.1624 10.8921 10.1493 10.7798 10.16H9.77981V11.66Z", fill: "#828292" })] })),
    externalIntegration: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M7.5,11.41l1.31,2.27a.88.88,0,0,1,0,.86L7.5,16.81a.89.89,0,0,1-.75.43H4.13a.86.86,0,0,1-.74-.43L2.08,14.54a.83.83,0,0,1,0-.86l1.31-2.27A.84.84,0,0,1,4.13,11H6.75A.86.86,0,0,1,7.5,11.41Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M13.27,14.15H10.65a.86.86,0,0,0-.75.43L8.6,16.85a.83.83,0,0,0,0,.86L9.9,20a.89.89,0,0,0,.75.43h2.62A.89.89,0,0,0,14,20l1.31-2.27a.88.88,0,0,0,0-.86L14,14.58A.86.86,0,0,0,13.27,14.15Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M19.79,11H17.17a.86.86,0,0,0-.75.43l-1.3,2.27a.83.83,0,0,0,0,.86l1.3,2.27a.89.89,0,0,0,.75.43h2.62a.89.89,0,0,0,.75-.43l1.31-2.27a.88.88,0,0,0,0-.86l-1.31-2.27A.86.86,0,0,0,19.79,11Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M13.27,3.59H10.65A.89.89,0,0,0,9.9,4L8.6,6.29a.83.83,0,0,0,0,.86L9.9,9.42a.86.86,0,0,0,.75.43h2.62A.86.86,0,0,0,14,9.42l1.31-2.27a.88.88,0,0,0,0-.86L14,4A.89.89,0,0,0,13.27,3.59Z", fill: "#387efa" })] })),
};

const menuIcons = {
    cloudAccounts: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M17.32,20.07H6.68A5.57,5.57,0,0,1,5,9.21.32.32,0,0,0,5.17,9,7.18,7.18,0,0,1,12,3.93h0a7.4,7.4,0,0,1,1.33.13A7.12,7.12,0,0,1,18.83,9a.32.32,0,0,0,.21.21,5.57,5.57,0,0,1-1.72,10.86ZM12,5.68A5.39,5.39,0,0,0,6.85,9.51,2.12,2.12,0,0,1,5.5,10.88a3.82,3.82,0,0,0,1.18,7.44H17.32a3.81,3.81,0,0,0,1.18-7.44,2.12,2.12,0,0,1-1.35-1.37A5.36,5.36,0,0,0,13,5.78a4.87,4.87,0,0,0-1-.1Z" }) })),
    organizationalStructure: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20,16.63V13.8a3.1,3.1,0,0,0-3.1-3.1h-4V7.37a3.2,3.2,0,1,0-1.75,0V10.7H7.07A3.1,3.1,0,0,0,4,13.8v2.83a3.19,3.19,0,1,0,1.75,0V13.8a1.35,1.35,0,0,1,1.35-1.35h4.06v4.18a3.19,3.19,0,1,0,1.75,0V12.45h4a1.35,1.35,0,0,1,1.35,1.35v2.83a3.2,3.2,0,1,0,1.75,0ZM6.3,19.68a1.45,1.45,0,1,1-1.46-1.44h0A1.44,1.44,0,0,1,6.3,19.68ZM10.56,4.32A1.45,1.45,0,1,1,12,5.76,1.45,1.45,0,0,1,10.56,4.32Zm2.9,15.36A1.45,1.45,0,1,1,12,18.24,1.44,1.44,0,0,1,13.46,19.68Zm5.68,1.44a1.44,1.44,0,0,1,0-2.88h0a1.44,1.44,0,1,1,0,2.88Z" }) })),
    users: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M16.92907,22.87524A3.53488,3.53488,0,0,1,13.3988,19.344V16.08813a1.69336,1.69336,0,0,1,1.69141-1.69141h3.67871a1.69335,1.69335,0,0,1,1.6914,1.69141V19.344A3.53509,3.53509,0,0,1,16.92907,22.87524Zm1.78125-6.78711-3.62011.05859L15.1488,19.344a1.78076,1.78076,0,1,0,3.56152,0Z" }), jsxRuntimeExports.jsx("path", { d: "M11.68005,21.48168H5.184a1.64563,1.64563,0,0,1-1.64453-1.64355V16.82348a5.10007,5.10007,0,0,1,5.09472-5.09473h5.53321a5.12221,5.12221,0,0,1,2.36425.58008.87537.87537,0,1,1-.8125,1.55078,3.30368,3.30368,0,0,0-1.55175-.38086H8.63415a3.348,3.348,0,0,0-3.34472,3.34473v2.9082h6.39062a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M11.392,11.31274a5.295,5.295,0,0,1-1.14746-.126A5.03567,5.03567,0,0,1,6.434,7.37621a5.105,5.105,0,0,1,6.123-6.123,5.03567,5.03567,0,0,1,3.81055,3.81054,5.09777,5.09777,0,0,1-4.97559,6.249Zm.002-8.43848a3.29987,3.29987,0,0,0-2.3584.98047,3.33624,3.33624,0,0,0-.89258,3.14258,3.276,3.276,0,0,0,2.48047,2.48047h0a3.354,3.354,0,0,0,4.03516-4.03516A3.276,3.276,0,0,0,12.1781,2.96215,3.61538,3.61538,0,0,0,11.39392,2.87426Z" })] })),
    costSplittingRules: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.41434,12.91884a.87481.87481,0,0,1-.875-.875A6.53421,6.53421,0,0,0,12.012,5.51649a.875.875,0,0,1,0-1.75,8.28633,8.28633,0,0,1,8.27735,8.27735A.87481.87481,0,0,1,19.41434,12.91884Z" }), jsxRuntimeExports.jsx("path", { d: "M12.012,20.32118a8.28632,8.28632,0,0,1-8.27734-8.27734.875.875,0,1,1,1.75,0A6.53419,6.53419,0,0,0,12.012,18.57118a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M12.26018,15.70819a.19564.19564,0,0,0,.14322-.05827.20789.20789,0,0,0,.05827-.15112v-.5793a3.10363,3.10363,0,0,0,1.03611-.30224,1.74664,1.74664,0,0,0,.68449-.6,1.54217,1.54217,0,0,0,.243-.8603,1.5153,1.5153,0,0,0-.21334-.83511,1.53192,1.53192,0,0,0-.6756-.54126,5.75948,5.75948,0,0,0-1.20007-.361q-.48743-.12594-.77239-.23063a1.03709,1.03709,0,0,1-.41187-.24347.486.486,0,0,1-.12544-.33977.50658.50658,0,0,1,.243-.46176,1.236,1.236,0,0,1,.65485-.15112,1.14839,1.14839,0,0,1,.63806.16347.60056.60056,0,0,1,.29335.38224.3007.3007,0,0,0,.11754.11754.32115.32115,0,0,0,.14322.03358h.9482a.16287.16287,0,0,0,.12544-.05482.17383.17383,0,0,0,.05037-.12149,1.2223,1.2223,0,0,0-.21334-.62522,1.97213,1.97213,0,0,0-.59658-.57929,2.44047,2.44047,0,0,0-.96895-.34817V8.36456a.20708.20708,0,0,0-.05827-.15112.196.196,0,0,0-.14322-.05877h-.59559a.20206.20206,0,0,0-.21038.20989v.57929a2.2376,2.2376,0,0,0-1.31366.5704,1.62347,1.62347,0,0,0-.25088,1.96851,1.60751,1.60751,0,0,0,.65881.55361,4.62653,4.62653,0,0,0,1.06574.34867c.35261.08346.63312.162.8435.23458a1.35271,1.35271,0,0,1,.46126.24347.4569.4569,0,0,1,.14717.35261.54406.54406,0,0,1-.27261.47855,1.53027,1.53027,0,0,1-.81881.1763,1.56049,1.56049,0,0,1-.562-.0884.97966.97966,0,0,1-.35656-.22223.89066.89066,0,0,1-.18964-.277.55253.55253,0,0,0-.10865-.1131.2645.2645,0,0,0-.16791-.04642H9.69213a.17807.17807,0,0,0-.13038.05482.16633.16633,0,0,0-.05432.12149,1.44265,1.44265,0,0,0,.23507.722,1.75647,1.75647,0,0,0,.646.58325,2.86977,2.86977,0,0,0,1.06574.31458v.5793a.20129.20129,0,0,0,.21038.20939Z" }), jsxRuntimeExports.jsx("path", { d: "M18.04324,22.96571a4.83154,4.83154,0,1,1,4.832-4.83105A4.83709,4.83709,0,0,1,18.04324,22.96571Zm0-7.91308a3.08154,3.08154,0,1,0,3.082,3.082A3.0858,3.0858,0,0,0,18.04324,15.05263Z" }), jsxRuntimeExports.jsx("rect", { x: "16.16294", y: "17.89941", width: "3.76079", height: "0.4701", rx: "0.23505" }), jsxRuntimeExports.jsx("path", { d: "M19.68875,18.744h-3.291a.60986.60986,0,0,1,0-1.21972h3.291a.60986.60986,0,1,1,0,1.21972Z" }), jsxRuntimeExports.jsx("path", { d: "M5.95633,10.69716a4.83155,4.83155,0,1,1,4.832-4.832A4.8371,4.8371,0,0,1,5.95633,10.69716Zm0-7.91309a3.08155,3.08155,0,1,0,3.082,3.08106A3.08414,3.08414,0,0,0,5.95633,2.78407Z" }), jsxRuntimeExports.jsx("path", { d: "M6.19171,5.39544V4.22019a.235.235,0,0,0-.235-.235h0a.235.235,0,0,0-.23505.235V5.39544a.235.235,0,0,1-.23505.23505H4.31132a.235.235,0,0,0-.23505.23505h0a.235.235,0,0,0,.23505.23505H5.48656a.235.235,0,0,1,.23505.235V7.51088a.235.235,0,0,0,.23505.23505h0a.235.235,0,0,0,.235-.23505V6.33564a.235.235,0,0,1,.23505-.235H7.602a.23506.23506,0,0,0,.23505-.23505h0A.23506.23506,0,0,0,7.602,5.63049H6.42676A.235.235,0,0,1,6.19171,5.39544Z" }), jsxRuntimeExports.jsx("path", { d: "M5.95633,8.121A.61037.61037,0,0,1,5.347,7.51063V6.47548H4.3118a.60987.60987,0,1,1,0-1.21973H5.347V4.2206a.60987.60987,0,1,1,1.21973,0V5.25575H7.60184a.60987.60987,0,1,1,0,1.21973H6.56668V7.51063A.61058.61058,0,0,1,5.95633,8.121ZM5.87527,5.8661a.714.714,0,0,1,.082.08106.636.636,0,0,1,.08106-.08106.714.714,0,0,1-.08106-.082A.8123.8123,0,0,1,5.87527,5.8661Z" })] })),
    actionLog: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.17,22.88H5.83a2.49,2.49,0,0,1-2.48-2.49V3.61A2.48,2.48,0,0,1,5.83,1.13H18.17a2.48,2.48,0,0,1,2.48,2.48V20.39A2.49,2.49,0,0,1,18.17,22.88ZM5.83,2.88a.73.73,0,0,0-.73.73V20.39a.74.74,0,0,0,.73.74H18.17a.74.74,0,0,0,.73-.74V3.61a.73.73,0,0,0-.73-.73Z" }), jsxRuntimeExports.jsx("path", { d: "M10.47,18.4a.89.89,0,0,1-.62-.26L8,16.28A.88.88,0,0,1,9.22,15l1.25,1.25L14.78,12A.88.88,0,0,1,16,13.22l-4.93,4.92A.89.89,0,0,1,10.47,18.4Z" }), jsxRuntimeExports.jsx("path", { d: "M12.24,11.15H8.42a.88.88,0,0,1,0-1.75h3.82a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M15.92,7.94H8.42a.88.88,0,0,1,0-1.75h7.5a.88.88,0,1,1,0,1.75Z" })] })),
    businessUnitType: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.4062 9.375H18.375V7.89844C18.375 7.2135 17.8178 6.65625 17.1328 6.65625H16.5039V4.59375H16.5028C16.5027 4.47178 16.4562 4.35192 16.3666 4.2623L12.2416 0.137297C12.1568 0.0524531 12.0396 0 11.9101 0H0.46875C0.209859 0 0 0.209906 0 0.46875V21C0 21.2588 0.209859 21.4688 0.46875 21.4688H4.6875V22.4062C4.6875 23.2851 5.40244 24 6.28125 24H12.2344C12.4933 24 12.7031 23.7901 12.7031 23.5312C12.7031 23.2724 12.4933 23.0625 12.2344 23.0625H6.28125C5.91937 23.0625 5.625 22.7681 5.625 22.4062V15.5308L12.375 17.4938V17.9531C12.375 19.0387 13.2582 19.9219 14.3438 19.9219C15.4293 19.9219 16.3125 19.0387 16.3125 17.9531V17.4938L23.0625 15.5308V22.4062C23.0625 22.7681 22.7681 23.0625 22.4062 23.0625H16.4531C16.1942 23.0625 15.9844 23.2724 15.9844 23.5312C15.9844 23.7901 16.1942 24 16.4531 24H22.4062C23.2851 24 24 23.2851 24 22.4062V10.9688C24 10.0899 23.2851 9.375 22.4062 9.375ZM17.4375 7.89844V9.375H11.25V7.89844C11.25 7.73044 11.3867 7.59375 11.5547 7.59375H17.1328C17.3008 7.59375 17.4375 7.73044 17.4375 7.89844ZM12.3789 1.60045L14.9035 4.125H12.3789V1.60045ZM0.9375 20.5312V0.9375H11.4414V4.59375C11.4414 4.85259 11.6512 5.0625 11.9101 5.0625H15.5664V6.65625H11.5547C10.8698 6.65625 10.3125 7.2135 10.3125 7.89844V9.375H6.28125C5.40244 9.375 4.6875 10.0899 4.6875 10.9688V20.5312H0.9375ZM14.3438 18.9844C13.7751 18.9844 13.3125 18.5218 13.3125 17.9531V16.5469H15.375V17.9531C15.375 18.5218 14.9124 18.9844 14.3438 18.9844ZM15.8438 15.6094H12.8438C12.5849 15.6094 12.375 15.8193 12.375 16.0781V16.5174L5.625 14.5544V10.9688C5.625 10.6069 5.91937 10.3125 6.28125 10.3125H22.4062C22.7681 10.3125 23.0625 10.6069 23.0625 10.9688V14.5544L16.3125 16.5174V16.0781C16.3125 15.8193 16.1026 15.6094 15.8438 15.6094Z" }), jsxRuntimeExports.jsx("path", { d: "M8.90581 7.21875C8.90581 6.95991 8.69595 6.75 8.43706 6.75H2.74512C2.48623 6.75 2.27637 6.95991 2.27637 7.21875C2.27637 7.47759 2.48623 7.6875 2.74512 7.6875H8.43706C8.69595 7.6875 8.90581 7.47759 8.90581 7.21875Z" }), jsxRuntimeExports.jsx("path", { d: "M2.74512 5.0625H8.43706C8.69595 5.0625 8.90581 4.85259 8.90581 4.59375C8.90581 4.33491 8.69595 4.125 8.43706 4.125H2.74512C2.48623 4.125 2.27637 4.33491 2.27637 4.59375C2.27637 4.85259 2.48623 5.0625 2.74512 5.0625Z" }), jsxRuntimeExports.jsx("path", { d: "M14.3438 23.0625C14.2205 23.0625 14.0995 23.1126 14.0123 23.1998C13.9252 23.287 13.875 23.408 13.875 23.5312C13.875 23.6545 13.9252 23.7755 14.0123 23.8626C14.0995 23.9498 14.2205 24 14.3438 24C14.467 24 14.588 23.9498 14.6752 23.8626C14.7623 23.7755 14.8125 23.6545 14.8125 23.5312C14.8125 23.408 14.7623 23.287 14.6752 23.1998C14.588 23.1127 14.467 23.0625 14.3438 23.0625Z" })] })),
    costAnalysis: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.25,21.03l-3.8-3.8c1.38-1.66,2.22-3.8,2.22-6.12,0-5.29-4.3-9.59-9.59-9.59S1.5,5.83,1.5,11.11s4.3,9.59,9.59,9.59c2.35,0,4.51-.86,6.18-2.27l3.79,3.79c.16,.16,.38,.25,.6,.25s.43-.08,.6-.25c.33-.33,.33-.86,0-1.19Zm-11.17-2.02c-4.36,0-7.9-3.54-7.9-7.9S6.73,3.21,11.09,3.21s7.9,3.55,7.9,7.9-3.55,7.9-7.9,7.9Z" }), jsxRuntimeExports.jsx("path", { d: "M10.8,16.26c-.08,0-.15-.03-.21-.08-.05-.05-.08-.12-.08-.21v-.8c-.59-.07-1.07-.21-1.47-.43-.39-.22-.69-.49-.89-.8s-.31-.65-.32-.99c0-.06,.02-.12,.08-.17,.05-.05,.11-.08,.18-.08h1.24c.1,0,.18,.02,.23,.06,.05,.04,.1,.09,.15,.16,.05,.13,.14,.26,.26,.38,.12,.12,.28,.23,.49,.31s.47,.12,.77,.12c.5,0,.88-.08,1.13-.24,.25-.16,.38-.38,.38-.66,0-.2-.07-.36-.2-.49-.14-.12-.35-.24-.64-.33-.29-.1-.68-.21-1.16-.32-.58-.12-1.07-.28-1.47-.48-.4-.2-.7-.45-.91-.76s-.31-.7-.31-1.16c0-.61,.22-1.12,.65-1.55,.43-.42,1.04-.68,1.81-.78v-.8c0-.08,.03-.15,.08-.21,.05-.05,.12-.08,.21-.08h.82c.08,0,.14,.03,.2,.08s.08,.12,.08,.21v.82c.53,.08,.98,.24,1.33,.48,.36,.24,.63,.5,.82,.8s.29,.58,.29,.86c0,.06-.02,.12-.07,.17-.05,.05-.1,.08-.17,.08h-1.31c-.07,0-.14-.02-.2-.05-.06-.03-.12-.08-.16-.16-.04-.2-.17-.38-.4-.53-.23-.15-.52-.22-.88-.22-.38,0-.68,.07-.9,.21-.22,.14-.33,.35-.33,.64,0,.18,.06,.34,.17,.47s.3,.24,.57,.33c.26,.1,.62,.2,1.06,.32,.68,.14,1.23,.3,1.65,.5,.42,.19,.73,.44,.93,.75,.2,.3,.3,.69,.3,1.15s-.11,.84-.34,1.18c-.22,.34-.54,.62-.94,.83s-.88,.35-1.43,.42v.8c0,.08-.03,.15-.08,.21-.05,.05-.12,.08-.2,.08h-.82Z" })] })),
};

const osComponentsIcons = {
    customCodeBuild: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22,4.19a1.2,1.2,0,0,0-1.27-1.27H3.27c-.65,0-1,.27-1.27,1V20.09a.15.15,0,0,1,0,.07,1.19,1.19,0,0,0,1.24.92c5.82,0,11.64,0,17.46,0A1.19,1.19,0,0,0,22,19.81Zm-4.82.72a.43.43,0,0,1,.45-.42h.45a.4.4,0,0,1,.41.38,3,3,0,0,1,0,.6.4.4,0,0,1-.41.39h-.49a.41.41,0,0,1-.41-.39A5.42,5.42,0,0,1,17.18,4.91Zm-2.07.27h0a2.08,2.08,0,0,1,0-.25.41.41,0,0,1,.43-.43H16a.42.42,0,0,1,.44.42,4.34,4.34,0,0,1,0,.51.43.43,0,0,1-.46.45h-.39a.44.44,0,0,1-.48-.48Zm5.43,14.45H3.45V7.23H20.54Zm0-14.21a.43.43,0,0,1-.45.46h-.43a.43.43,0,0,1-.44-.42,4.69,4.69,0,0,1,0-.53.44.44,0,0,1,.46-.43h.37a.45.45,0,0,1,.5.5v.19h0A1.93,1.93,0,0,1,20.56,5.42Z", fill: "#f7936f" }), jsxRuntimeExports.jsx("path", { d: "M13.7,10a2.21,2.21,0,0,1-.07.3q-1,3.2-2.06,6.4a.64.64,0,0,1-1,.42.66.66,0,0,1-.24-.83c.57-1.78,1.15-3.57,1.73-5.35.12-.38.24-.76.37-1.13a.63.63,0,0,1,1.13-.11A1.76,1.76,0,0,1,13.7,10Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M16,13.31l-1.62-.76-.4-.19a.63.63,0,0,1-.29-.83.62.62,0,0,1,.82-.31c1.08.49,2.15,1,3.22,1.5a.58.58,0,0,1,.36.59.59.59,0,0,1-.37.59l-3.2,1.49a.61.61,0,0,1-.83-.31.62.62,0,0,1,.31-.84l1.78-.83Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M8,13.31l2,.91a.64.64,0,0,1,.4.73.63.63,0,0,1-.9.43l-2.12-1-1-.49a.63.63,0,0,1-.4-.6.62.62,0,0,1,.39-.6l3.16-1.47a.62.62,0,0,1,.75.13.58.58,0,0,1,.08.73,1,1,0,0,1-.38.32c-.57.28-1.15.54-1.73.81Z", fill: "#2b0076" })] })),
    customCodeTest: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22,4.19a1.2,1.2,0,0,0-1.27-1.27H3.27c-.65,0-1,.27-1.27,1V20.09a.15.15,0,0,1,0,.07,1.19,1.19,0,0,0,1.24.92c5.82,0,11.64,0,17.46,0A1.19,1.19,0,0,0,22,19.81Zm-4.82.72a.43.43,0,0,1,.45-.42h.45a.4.4,0,0,1,.41.38,3,3,0,0,1,0,.6.4.4,0,0,1-.41.39h-.49a.41.41,0,0,1-.41-.39A5.42,5.42,0,0,1,17.18,4.91Zm-2.07.27h0a2.08,2.08,0,0,1,0-.25.41.41,0,0,1,.43-.43H16a.42.42,0,0,1,.44.42,4.34,4.34,0,0,1,0,.51.43.43,0,0,1-.46.45h-.39a.44.44,0,0,1-.48-.48Zm5.43,14.45H3.45V7.23H20.54Zm0-14.21a.43.43,0,0,1-.45.46h-.43a.43.43,0,0,1-.44-.42,4.69,4.69,0,0,1,0-.53.44.44,0,0,1,.46-.43h.37a.45.45,0,0,1,.5.5v.19h0A1.93,1.93,0,0,1,20.56,5.42Z", fill: "#f7936f" }), jsxRuntimeExports.jsx("path", { d: "M10.77,17.13h0a.82.82,0,0,1-.57-.24l-2.4-2.5a.84.84,0,0,1,0-1.16.79.79,0,0,1,1.13,0l1.84,1.91,4.82-5a.77.77,0,0,1,1.12,0,.85.85,0,0,1,0,1.17l-5.38,5.58A.8.8,0,0,1,10.77,17.13Z", fill: "#2b0076" })] })),
    datadog: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsx("mask", { id: "datadogMask", x: "2.03", y: "2", width: "20.22", height: "21.57", maskUnits: "userSpaceOnUse", children: jsxRuntimeExports.jsx("path", { d: "M22.25,2H2V23.57H22.25Z", fill: "#fff" }) }) }), jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("polygon", { points: "3.87 4.65 4.87 12.65 4.87 18.65 6.57 20.01 7.39 21.19 8.27 21.75 9.66 21.5 10.25 20.84 10.46 19.78 10.73 19.13 11.41 19.02 11.71 20.7 16.94 20.01 20.82 19.39 20.33 12.57 18.89 10.8 17.83 2.64 3.87 4.65", fill: "#fff" }), jsxRuntimeExports.jsx("g", { children: jsxRuntimeExports.jsx("path", { d: "M20,12.54l.5,6.28-8.72,1.56-.75-6.28,1.25-.17a4,4,0,0,0,.58.17A1.77,1.77,0,0,0,14.33,14a2.36,2.36,0,0,0,.58-.52ZM6.57,20a3.37,3.37,0,0,0-.81-.81,1.3,1.3,0,0,1,0-1.77c.44-.84,2.72-1.94,2.61-3.3a2.54,2.54,0,0,0-.58-1.59,1.19,1.19,0,0,0,0,.35,1.67,1.67,0,0,1-.29-.58A1.68,1.68,0,0,1,7.21,12a1.58,1.58,0,0,0-.06.4A3.23,3.23,0,0,1,7,11.7a1.17,1.17,0,0,0-.12.4,2.34,2.34,0,0,1-.14-.89,4,4,0,0,1-.29-2,1.61,1.61,0,0,0,2-.38c.15-.2.23-.78,0-1.91a17.29,17.29,0,0,0-.9-2.2l0,0c.12.32.32,1,.4,1.36a3.8,3.8,0,0,1,.21,1.83c-.09.4-.32.66-.93.95S5.76,8.42,5.73,8.4A3.3,3.3,0,0,1,4.66,6.84c-.06-.41.23-.64.38-1a3.32,3.32,0,0,0-.44.17,3.51,3.51,0,0,1,.61-.52,1.9,1.9,0,0,0,.37-.26H5.21A4.28,4.28,0,0,1,5.94,5H5.41l1.39-.6a.86.86,0,0,1,1.08.2,2,2,0,0,0,1.3.84A6.07,6.07,0,0,1,10.25,5a1.63,1.63,0,0,1,.84-.58.94.94,0,0,0-.29.49,6.08,6.08,0,0,1,.55-.37,1.34,1.34,0,0,0-.2.34l0,0a7,7,0,0,1,.66-.31,2.36,2.36,0,0,0-.23.28,8,8,0,0,1,.87,0c1.07,0,1.3-1.13,1.71-1.3s.75-.29,1.62.58,1.33,2.06,1,2.35-.72-.09-1.27-.76A3,3,0,0,1,15,4.43a1.18,1.18,0,0,0-.38-.7,2.37,2.37,0,0,1,.2.82,2.7,2.7,0,0,0,.35,1.39s-.06.31-.08.34a5.66,5.66,0,0,0-1.34-.89,7.32,7.32,0,0,1,1.91,2c.38.78.15,1.48.35,1.65a6.38,6.38,0,0,1,1,1.48,2.71,2.71,0,0,1-.32,2.23l-.93.14a1.23,1.23,0,0,1-.34-.11,3.82,3.82,0,0,0,.2-.47l-.06-.08a4.06,4.06,0,0,1-1.19,1,1.89,1.89,0,0,1-1.53.11,8,8,0,0,1-2.43-1.3.59.59,0,0,0,0,.2,8.47,8.47,0,0,0,1.56,1.31l-1.33.14.64,4.92a5.89,5.89,0,0,0-.64.12,3.23,3.23,0,0,0-1.36-1.94,2.47,2.47,0,0,0-1.85-.26l0,.06A2.38,2.38,0,0,1,8.92,17a3.71,3.71,0,0,1,1.16,1.77,2.33,2.33,0,0,1-.2,2.2,1.87,1.87,0,0,1-2.49.2,1.46,1.46,0,0,0,1,.78,2.12,2.12,0,0,0,1.77-.46,2.91,2.91,0,0,0,.52-2.06l.6-.08.21,1.53,9.86-1.18-.86-7.87-.5.08L19.05,2,2.61,3.91l2,16.39Z", fill: "#8956db" }) }), jsxRuntimeExports.jsx("path", { d: "M14.4,11.4a1.9,1.9,0,0,0,1.18.49c.23,0,.47-.41.61-.76s.12-.49-.06-.57a2.57,2.57,0,0,0-.69,0,3.15,3.15,0,0,0-1.1.31c-.18.12-.09.41.06.53M14.51,8V8l0,.05a1.12,1.12,0,0,0,.46.58l.18,0a1.11,1.11,0,0,1,.4.06V8.53c0-.29.06-.81-.52-1.1a.59.59,0,0,0-.64.06h.06c.15,0,.06.11,0,.17a.45.45,0,0,0,0,.35", fill: "#8956db" }), jsxRuntimeExports.jsx("path", { d: "M11.91,8.07c.14-.12-.67-.29-1.31.11a.86.86,0,0,0,0,1.36.27.27,0,0,1,.12.09,3.12,3.12,0,0,1,.44-.17,5,5,0,0,1,.72-.18A.78.78,0,0,0,12,8.67c0-.43-.37-.34-.11-.6m4.72,7-1.39,2.31-1.62-.49L12.2,19.09l.06.69L20,18.37l-.46-4.84-1.27,2.66Z", fill: "#8956db" })] })),
    hardening: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M16.74,8.83H15.49V6.07a3.5,3.5,0,0,0-4.14-3.43A3.67,3.67,0,0,0,8.51,6.31V8.83H7.26V6.31a4.88,4.88,0,0,1,3.87-4.9,4.75,4.75,0,0,1,5.61,4.66Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M9.05,10.75H7.3V6.35a4.88,4.88,0,1,1,9.75,0v4.38H15.3V6.35a3.13,3.13,0,1,0-6.25,0Z", fill: "#2b0076" }), jsxRuntimeExports.jsx("path", { d: "M16.18,22.62h-8A4.88,4.88,0,0,1,3.3,17.75v-3.1A4.89,4.89,0,0,1,8.18,9.77h8a4.88,4.88,0,0,1,4.87,4.88v3.1A4.87,4.87,0,0,1,16.18,22.62Zm-8-11.1a3.13,3.13,0,0,0-3.13,3.13v3.1a3.13,3.13,0,0,0,3.13,3.12h8a3.12,3.12,0,0,0,3.12-3.12v-3.1a3.13,3.13,0,0,0-3.12-3.13Z", fill: "#f7936f" }), jsxRuntimeExports.jsx("path", { d: "M14.38,18.42,13.59,16a1.84,1.84,0,0,0,.46-1.23A1.88,1.88,0,1,0,10.76,16L10,18.35a.82.82,0,0,0,0,.79.81.81,0,0,0,.69.38h2.89a.81.81,0,0,0,.69-.38A.76.76,0,0,0,14.38,18.42Z", fill: "#2b0076" })] })),
    ngnix: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M3.34,17a.93.93,0,0,0,.38.38l7.77,4.48h0a1,1,0,0,0,1,0l7.77-4.48a1,1,0,0,0,.51-.9v-9h0a1,1,0,0,0-.51-.9L12.52,2.14h0a1,1,0,0,0-1,0h0L3.72,6.62a1,1,0,0,0-.52.9h0v9a.94.94,0,0,0,.14.51", fill: "#009639" }), jsxRuntimeExports.jsx("path", { d: "M9.51,15.41a1,1,0,1,1-2,0h0V8.56a1,1,0,0,1,1.13-1A1.8,1.8,0,0,1,10,8.2l.3.36,4.18,5v-5h0a1,1,0,1,1,2,0h0v6.85a1,1,0,0,1-1.13,1A1.8,1.8,0,0,1,14,15.8L9.51,10.45v5Z", fill: "#fff" })] })),
    sumoLogic: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8.46,4.11l-1,1.2a3.14,3.14,0,0,0-2.16-.84c-.61,0-1,.19-1.18.51v.4a.85.85,0,0,0,.58.37c.2.06.55.14,1.06.26,1.58.35,2.39.73,2.67,1.51,0,.26,0,1.29,0,1.53-.35,1-1.41,1.61-3,1.61A4.72,4.72,0,0,1,2,9.29L3.06,8.11A5.73,5.73,0,0,0,4.36,9a2.91,2.91,0,0,0,1.17.22c.6,0,1-.18,1.2-.51V8.18a.94.94,0,0,0-.67-.45L5,7.49c-1.54-.34-2.26-.71-2.53-1.41V4.54A2.85,2.85,0,0,1,5.36,3a4.36,4.36,0,0,1,3.1,1.12", fill: "#009" }), jsxRuntimeExports.jsx("path", { d: "M21.73,3.23v7.21H20.05V9.67a2.28,2.28,0,0,1-2.11,1c-1.71,0-2.56-.89-2.56-2.28V3.23h1.84V7.87a1.09,1.09,0,0,0,1.2,1.2,1.36,1.36,0,0,0,1.48-1.5V3.23Z", fill: "#009" }), jsxRuntimeExports.jsx("path", { d: "M12.81,15.75v5H11V16.3c0-.86-.36-1.38-1.15-1.38a1.27,1.27,0,0,0-1.27,1.44v4.43H6.73V16.3q0-1.38-1.14-1.38a1.27,1.27,0,0,0-1.27,1.44v4.43H2.48V13.58H4.19v.8a2.23,2.23,0,0,1,2.06-1,2.18,2.18,0,0,1,2,1.05,2.49,2.49,0,0,1,2.16-1.05,2.21,2.21,0,0,1,2.4,2.41", fill: "#009" }), jsxRuntimeExports.jsx("path", { d: "M16.81,18.25a1.81,1.81,0,0,0,3.41,0V16.11a1.8,1.8,0,0,0-3.41,0Zm5.19.44A3.56,3.56,0,0,1,18.52,21,3.56,3.56,0,0,1,15,18.69v-3a3.57,3.57,0,0,1,3.49-2.31A3.56,3.56,0,0,1,22,15.65Z", fill: "#009" })] })),
    trendMicro: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M3.82,13.91v0l0-.11,0-.1,0,0a10.44,10.44,0,0,1,.71-1.42A2.4,2.4,0,0,1,4.75,12H3.55l.29-.64A9.43,9.43,0,0,0,8.06,9h.87L7.86,11.28H9.58L9.27,12H7.55a16,16,0,0,0-1.08,2.76C6.26,16,6.46,17,7.62,17.34a4.59,4.59,0,0,0,2.55-.1A14.45,14.45,0,0,0,16.52,13c2.87-3.33,2.93-6.74.13-7.61-1.79-.56-4.32.06-6.67,1.45C12.9,5,16.11,4.07,18.33,4.76a3.87,3.87,0,0,1,1.08.52A10,10,0,0,0,3.66,17.52a5.07,5.07,0,0,1,.16-3.61", fill: "#d71920" }), jsxRuntimeExports.jsx("path", { d: "M20.48,6.69c.67,1.82-.17,4.53-2.48,7.22-3.47,4-8.94,6.47-12.23,5.45a4.1,4.1,0,0,1-1.07-.52A10,10,0,0,0,20.48,6.69", fill: "#d71920" })] })),
    awsCloudWatch: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M4.93,5.87v9.74l1.5.45,3.51-5.38L6.43,5.29Z", fill: "#2d9c56" }), jsxRuntimeExports.jsx("path", { d: "M11.8,6.44V15.1L6.52,16V5.24Z", fill: "#37b43e" }), jsxRuntimeExports.jsx("path", { d: "M15.46,9.88,9.36,17l-2.07-.62V3L9.36,2Z", fill: "#2d9c56" }), jsxRuntimeExports.jsx("path", { d: "M16.42,4.75V15.32L9.36,17V2Z", fill: "#37b43e" }), jsxRuntimeExports.jsx("path", { d: "M12,22V18.9L3.16,15.77v1.81Z", fill: "#2d9c56" }), jsxRuntimeExports.jsx("path", { d: "M20.84,15.76v1.82L12,22V18.9Z", fill: "#37b43e" }), jsxRuntimeExports.jsx("path", { d: "M10.11,13.17v4l1.89.57V13.37Z", fill: "#2d9c56" }), jsxRuntimeExports.jsx("path", { d: "M18.35,15.84V12.75L12,13.37v4.38Z", fill: "#37b43e" })] })),
    awsInspector: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.74,16.35v1.51l-1.11.53L12,22V19.48", fill: "#37b43e" }), jsxRuntimeExports.jsx("path", { d: "M3.26,16.35v1.51l1.11.53L12,22V19.48", fill: "#2d9c56" }), jsxRuntimeExports.jsx("path", { d: "M15.69,17,12,18V15l3.7-.51Z", fill: "#37b43e" }), jsxRuntimeExports.jsx("path", { d: "M8.3,17,12,18V15L8.3,14.5Z", fill: "#2d9c56" }), jsxRuntimeExports.jsx("path", { d: "M15.69,3.76,12,2,8.46,8.37,12,13.28l3.7-.28Z", fill: "#37b43e" }), jsxRuntimeExports.jsx("path", { d: "M8.3,13l3.69.28V2L8.3,3.76Z", fill: "#2d9c56" })] })),
    stackDrive: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17,20.62,12,11.3,7,20.62Z", fill: "#009245" }), jsxRuntimeExports.jsx("path", { d: "M12,12,7,20.62,2,12Z", fill: "#006837" }), jsxRuntimeExports.jsx("path", { d: "M2,12,7,3.38H17L12,12Z", fill: "#39b54a" }), jsxRuntimeExports.jsx("path", { d: "M17,20.62,12,12l5-8.63L22,12Z", fill: "#8cc63f" })] })),
    vmwearTools: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M4.1,8.59A1.1,1.1,0,0,0,2.64,8,1.07,1.07,0,0,0,2.11,9.5l2.44,5.29c.38.83.78,1.27,1.54,1.27s1.16-.48,1.55-1.27l2.14-4.67a.32.32,0,0,1,.31-.2.34.34,0,0,1,.34.34v4.53a1.13,1.13,0,0,0,1.13,1.27,1.14,1.14,0,0,0,1.14-1.27v-3.7a1.14,1.14,0,0,1,1.21-1.18,1.11,1.11,0,0,1,1.16,1.18v3.7a1.15,1.15,0,1,0,2.28,0v-3.7a1.14,1.14,0,0,1,1.21-1.18,1.11,1.11,0,0,1,1.16,1.18v3.7a1.15,1.15,0,1,0,2.28,0V10.57a2.65,2.65,0,0,0-2.74-2.63,3.53,3.53,0,0,0-2.44,1,2.68,2.68,0,0,0-2.35-1,3.88,3.88,0,0,0-2.3,1,2.72,2.72,0,0,0-2.05-1A2.51,2.51,0,0,0,7.65,9.63L6.09,13.29Z", fill: "#9b9b9b" }) })),
};

const osProviderIcons = {
    linux: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.66,17.77a1.91,1.91,0,0,1-.28-.77,1.57,1.57,0,0,0-.41-.88L18.81,16l-.16-.08a4.54,4.54,0,0,0-.15-3.09,10.44,10.44,0,0,0-1.81-2.91,4.36,4.36,0,0,1-1.31-2.81c0-1.79.2-5.12-3-5.12A2.82,2.82,0,0,0,12,2c-3.53.29-2.59,4-2.64,5.26A4.56,4.56,0,0,1,8.5,9.81a12.25,12.25,0,0,0-2.27,3.77A4.56,4.56,0,0,0,6,15.66l-.09.09c-.22.23-.38.52-.56.71a1.85,1.85,0,0,1-.66.32,1.16,1.16,0,0,0-.72.57.89.89,0,0,0-.11.48,2.4,2.4,0,0,0,0,.46,2.07,2.07,0,0,1,0,.81,1.58,1.58,0,0,0-.09,1.24,1,1,0,0,0,.79.48,8.32,8.32,0,0,1,2.31.49L7,21.19l-.07.12a3.27,3.27,0,0,0,2.18.41,1.42,1.42,0,0,0,1-.79c.5,0,1-.21,1.89-.26.58-.05,1.31.21,2.15.16a1.22,1.22,0,0,0,.09.27h0a1.56,1.56,0,0,0,1.58.89,2.86,2.86,0,0,0,1.88-1.08l-.1-.09.1.08a6.69,6.69,0,0,1,2-1.25,1,1,0,0,0,.55-.72C20.28,18.61,20.09,18.25,19.66,17.77Z", fill: "#202020" }), jsxRuntimeExports.jsx("path", { d: "M20,18.91c0,.2-.15.34-.41.5a6.54,6.54,0,0,0-2,1.32,2.67,2.67,0,0,1-1.71,1A1.28,1.28,0,0,1,14.51,21a2.14,2.14,0,0,1,0-1.41A9.39,9.39,0,0,0,14.94,18a8.52,8.52,0,0,1,.16-1.51,1.16,1.16,0,0,1,.54-.82l0,0a1.19,1.19,0,0,0,.73,1.15,1.81,1.81,0,0,0,1.5-.64h.18a.91.91,0,0,1,.71.21,1.38,1.38,0,0,1,.32.73,2,2,0,0,0,.34.89C19.87,18.4,20,18.71,20,18.91Z", fill: "#ffcd00" }), jsxRuntimeExports.jsx("path", { d: "M10,20.36a1.11,1.11,0,0,1-.94,1.09,3.09,3.09,0,0,1-2-.38,7.85,7.85,0,0,0-2.38-.51.88.88,0,0,1-.61-.34,1.37,1.37,0,0,1,.11-1h0a2,2,0,0,0,0-.94,1.33,1.33,0,0,1,0-.78A.88.88,0,0,1,4.77,17a1.88,1.88,0,0,0,.77-.39c.21-.22.37-.51.56-.7a.7.7,0,0,1,.55-.28h.13a1.38,1.38,0,0,1,.86.62l.76,1.39a9.47,9.47,0,0,0,1,1.37A2.22,2.22,0,0,1,10,20.36Z", fill: "#ffcd00" }), jsxRuntimeExports.jsx("path", { d: "M13.81,7.4a.8.8,0,0,0-.4-.32,6.68,6.68,0,0,1-.88-.36,1.9,1.9,0,0,0-1-.35,1.13,1.13,0,0,0-.39.07,1.75,1.75,0,0,0-.7.49L10.28,7l-.41.3a.41.41,0,0,0-.16.47,1.17,1.17,0,0,0,.57.6,4.53,4.53,0,0,1,.52.42,1.13,1.13,0,0,0,.26.16,1.06,1.06,0,0,0,.38.09,1.46,1.46,0,0,0,.84-.22,3.58,3.58,0,0,1,.65-.37,1.38,1.38,0,0,0,.89-.7A.48.48,0,0,0,13.81,7.4Z", fill: "#ffcd00" }), jsxRuntimeExports.jsx("path", { d: "M12.65,8.08a2.82,2.82,0,0,1-1.24.42,1.71,1.71,0,0,1-1.07-.41A3.35,3.35,0,0,1,10,7.81c-.13-.1-.12-.26-.06-.25s.11.13.17.19l.3.27a1.55,1.55,0,0,0,1,.38A2.76,2.76,0,0,0,12.57,8c.16-.09.37-.26.54-.38s.13-.21.24-.2,0,.13-.13.26A4.11,4.11,0,0,1,12.65,8.08Z", fill: "#202020" }), jsxRuntimeExports.jsx("path", { d: "M18.23,15.85h-.17c.13-.39-.15-.68-.89-1s-1.44-.27-1.49.49c-1,.41-.92,1.61-1,2.63a6.73,6.73,0,0,1-.26,1.13,3.86,3.86,0,0,1-4.47.27,8.26,8.26,0,0,0-.56-.76.65.65,0,0,0,.65-.35c.19-.83-.9-1.68-1.78-2.24-1.95-1.15-.74-3.56.09-4.85.09-.07,0,.12-.34.81S7,14,7.89,15.18c0-2.39,1.88-4.25,2.08-6.8l.24.16c.45.3.65.7,1.31.69s1-.41,1.45-.59a1.63,1.63,0,0,0,.87-.59,20.86,20.86,0,0,0,1.45,3.74,8.42,8.42,0,0,1,.92,2.52,2.37,2.37,0,0,1,.43,0,3.41,3.41,0,0,0-.91-3.31c-.18-.17-.2-.25-.1-.25A4.24,4.24,0,0,1,17,14.5C17.84,14.83,18.44,15.34,18.23,15.85Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M13.85,6a1.52,1.52,0,0,1-.31.94,3.78,3.78,0,0,0-.49-.19.87.87,0,0,0,0-1.15c-.46-.38-.79.41-.68.8a2.28,2.28,0,0,0-.5-.17A1.38,1.38,0,0,1,12.35,5C13.08,4.38,13.9,5.26,13.85,6Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M11.14,6.27a1.27,1.27,0,0,0-.39.18c.07-1.15-.95-.86-.58.13.08.19.23.23,0,.34s-.45-.55-.47-.81C9.67,4.43,11.29,4.77,11.14,6.27Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M11.74,6.76s.09,0,.14.06.07.06.11.07.11,0,.12-.06S12,6.74,12,6.72a.22.22,0,0,0-.21,0S11.74,6.74,11.74,6.76Z", fill: "#202020" }), jsxRuntimeExports.jsx("path", { d: "M11.28,6.76s-.09,0-.14.06-.07.06-.11.07-.11,0-.12-.06.08-.09.13-.11a.24.24,0,0,1,.22,0A0,0,0,0,1,11.28,6.76Z", fill: "#202020" })] })),
    windows: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M2,4.83l8.15-1.11v7.86L2,11.63Zm8.15,7.66v7.86L2,19.23v-6.8Zm1-8.91L22,2v9.48l-10.81.09Zm10.81,9V22L11.16,20.48V12.54Z", fill: "#00adef" }) })),
    ubuntu: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M6.1,12a1.87,1.87,0,1,1-1.86-1.87A1.86,1.86,0,0,1,6.1,12Zm10.61,9.07a1.87,1.87,0,1,0,.69-2.55A1.87,1.87,0,0,0,16.71,21.07ZM19.94,4.8a1.87,1.87,0,1,0-2.54.68A1.86,1.86,0,0,0,19.94,4.8ZM13.63,6.68a5.32,5.32,0,0,1,5.3,4.85l2.7,0a8,8,0,0,0-2.36-5.18A2.59,2.59,0,0,1,17,6.14a2.63,2.63,0,0,1-1.29-1.87A8.06,8.06,0,0,0,13.63,4a8,8,0,0,0-3.55.83l1.31,2.36A5.25,5.25,0,0,1,13.63,6.68ZM8.31,12a5.32,5.32,0,0,1,2.26-4.35L9.19,5.33A8,8,0,0,0,5.88,10a2.61,2.61,0,0,1,0,4.08,8,8,0,0,0,3.31,4.63l1.38-2.32A5.32,5.32,0,0,1,8.31,12Zm5.32,5.32a5.25,5.25,0,0,1-2.24-.5l-1.31,2.36a8,8,0,0,0,3.55.83,7.66,7.66,0,0,0,2.1-.28,2.63,2.63,0,0,1,3.54-2,8,8,0,0,0,2.36-5.18l-2.7,0A5.32,5.32,0,0,1,13.63,17.32Z", fill: "#e95420" }) })),
    centOS: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M10.39,11.25l.74.74-.74.73H5.18v2.46L2,12,5.18,8.85v2.4Z", fill: "#932279" }), jsxRuntimeExports.jsx("path", { d: "M12.75,10.39l-.74.74-.73-.74V5.18H8.82L12,2l3.14,3.18h-2.4Z", fill: "#efa724" }), jsxRuntimeExports.jsx("path", { d: "M13.61,12.75,12.87,12l.74-.73h5.21V8.82L22,12l-3.18,3.14v-2.4Z", fill: "#262577" }), jsxRuntimeExports.jsx("path", { d: "M11.25,13.61l.74-.74.73.74v5.21h2.46L12,22,8.85,18.82h2.4Z", fill: "#9ccd2a" }), jsxRuntimeExports.jsx("path", { d: "M5,5h6.33v6.33H5Z", fill: "#9ccd2a" }), jsxRuntimeExports.jsx("path", { d: "M11.52,11.53H4.79V4.79h6.73Zm-6.33-.41h5.93V5.19H5.19Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M12.68,5H19v6.33H12.68Z", fill: "#932279" }), jsxRuntimeExports.jsx("path", { d: "M19.21,11.53H12.48V4.79h6.73Zm-6.33-.41h5.93V5.19H12.88Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M12.68,12.68H19V19H12.68Z", fill: "#efa724" }), jsxRuntimeExports.jsx("path", { d: "M19.21,19.21H12.48V12.48h6.73Zm-6.33-.4h5.93V12.88H12.88Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M5,12.68h6.33V19H5Z", fill: "#262577" }), jsxRuntimeExports.jsx("path", { d: "M11.52,19.21H4.79V12.48h6.73Zm-6.33-.4h5.93V12.88H5.19Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M6.56,16.76,1.8,12,6.56,7.24,11.33,12ZM2.37,12l4.19,4.19L10.75,12,6.56,7.81ZM12,11.33,7.24,6.56,12,1.8l4.76,4.76ZM7.81,6.56,12,10.75l4.19-4.19L12,2.37Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M17.44,16.76,12.67,12l4.77-4.76L22.2,12ZM13.25,12l4.19,4.19L21.63,12,17.44,7.81Z", fill: "#fff" }), jsxRuntimeExports.jsx("path", { d: "M12,22.2,7.24,17.44,12,12.67l4.76,4.77ZM7.81,17.44,12,21.63l4.19-4.19L12,13.25Z", fill: "#fff" })] })),
    amazonLinux: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { width: "24", height: "24", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M20.41,15.91a14.28,14.28,0,0,1-8.1,2.48,14.68,14.68,0,0,1-9.89-3.77c-.21-.19,0-.44.23-.3A19.91,19.91,0,0,0,12.54,17a19.75,19.75,0,0,0,7.55-1.54C20.46,15.24,20.77,15.65,20.41,15.91Zm.92-1c-.28-.35-1.85-.17-2.57-.08-.21,0-.24-.16-.05-.3a3.93,3.93,0,0,1,3.55-.33c.24.29-.07,2.35-1.24,3.34-.18.15-.35.07-.27-.13.26-.66.85-2.14.58-2.5Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M8,10.77a2,2,0,0,0,.07.59,3.48,3.48,0,0,0,.21.48A.3.3,0,0,1,8.3,12a.24.24,0,0,1-.13.2l-.41.28a.32.32,0,0,1-.18.06.33.33,0,0,1-.2-.09,2.34,2.34,0,0,1-.24-.31c-.06-.12-.13-.24-.2-.4a2.44,2.44,0,0,1-2,.92,1.82,1.82,0,0,1-1.33-.48,1.72,1.72,0,0,1-.49-1.27,1.71,1.71,0,0,1,.6-1.37A2.42,2.42,0,0,1,5.39,9a5.52,5.52,0,0,1,.71.05,7.28,7.28,0,0,1,.76.15V8.72a1.44,1.44,0,0,0-.31-1.06,1.48,1.48,0,0,0-1.08-.31,2.9,2.9,0,0,0-.72.09A5.48,5.48,0,0,0,4,7.66a1.09,1.09,0,0,1-.23.09l-.11,0c-.09,0-.14-.07-.14-.21V7.24A.37.37,0,0,1,3.6,7a.4.4,0,0,1,.18-.14,3.25,3.25,0,0,1,.84-.3,4.06,4.06,0,0,1,1-.13A2.42,2.42,0,0,1,7.4,7,2.15,2.15,0,0,1,8,8.62v2.15Zm-2.7,1A2,2,0,0,0,6,11.66a1.43,1.43,0,0,0,.63-.42,1.06,1.06,0,0,0,.23-.43,2.25,2.25,0,0,0,.07-.58V10c-.2,0-.41-.08-.61-.11a4.44,4.44,0,0,0-.63,0,1.52,1.52,0,0,0-1,.27.91.91,0,0,0-.33.76.93.93,0,0,0,.25.71A1,1,0,0,0,5.27,11.78Zm5.34.72a.32.32,0,0,1-.25-.07.51.51,0,0,1-.14-.26L8.65,7a1.1,1.1,0,0,1-.06-.26.16.16,0,0,1,.13-.17h.69a.33.33,0,0,1,.25.07.55.55,0,0,1,.14.26l1.12,4.4,1-4.4a.51.51,0,0,1,.13-.26.42.42,0,0,1,.27-.07h.53a.37.37,0,0,1,.26.07.43.43,0,0,1,.13.26l1.05,4.45,1.15-4.45a.58.58,0,0,1,.13-.26.41.41,0,0,1,.26-.07h.62a.16.16,0,0,1,.17.13v0s0,.07,0,.1a1.09,1.09,0,0,1-.05.17L15,12.18a.55.55,0,0,1-.14.26.48.48,0,0,1-.26.07H14a.37.37,0,0,1-.26-.07.46.46,0,0,1-.13-.27l-1-4.29-1,4.29a.48.48,0,0,1-.12.26.38.38,0,0,1-.27.07Zm8.55.18a4.46,4.46,0,0,1-1-.12,3,3,0,0,1-.76-.27.46.46,0,0,1-.21-.18.58.58,0,0,1,0-.19v-.34c0-.14.05-.2.15-.2a.23.23,0,0,1,.12,0l.17.06a3.25,3.25,0,0,0,.73.23,3.53,3.53,0,0,0,.79.08,1.84,1.84,0,0,0,1-.21.71.71,0,0,0,.35-.64.61.61,0,0,0-.18-.46,1.63,1.63,0,0,0-.67-.35l-1-.3a2,2,0,0,1-1.06-.68,1.57,1.57,0,0,1-.33-1,1.38,1.38,0,0,1,.18-.74,1.66,1.66,0,0,1,.48-.54,2,2,0,0,1,.69-.35,2.62,2.62,0,0,1,.84-.11,3.24,3.24,0,0,1,.44,0l.43.08a2.11,2.11,0,0,1,.38.1,1.39,1.39,0,0,1,.28.12.55.55,0,0,1,.2.17.29.29,0,0,1,.06.22v.31q0,.21-.15.21a.53.53,0,0,1-.25-.08,3.33,3.33,0,0,0-1.28-.26,1.71,1.71,0,0,0-.89.19.66.66,0,0,0-.31.59.67.67,0,0,0,.2.48,2,2,0,0,0,.73.36l1,.3a2,2,0,0,1,1,.64,1.48,1.48,0,0,1,.3.93,1.58,1.58,0,0,1-.17.77,1.84,1.84,0,0,1-.48.59,2.24,2.24,0,0,1-.74.37A3.41,3.41,0,0,1,19.16,12.68Z", fill: "#828292" })] })),
    redHat: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.76,12A5.43,5.43,0,0,1,18.94,13c0,1.47-1.65,2.29-3.83,2.29-4.91,0-9.21-2.88-9.21-4.78a2,2,0,0,1,.15-.77l.39-.95a.44.44,0,0,0,0,.2c0,1,3.81,4.14,8.92,4.14,1.32,0,3.22-.27,3.22-1.83a1.42,1.42,0,0,0,0-.36l.24,1Z" }), jsxRuntimeExports.jsx("path", { d: "M15.34,13.15c1.32,0,3.22-.27,3.22-1.83a1.47,1.47,0,0,0,0-.36l-.78-3.4c-.18-.75-.34-1.09-1.65-1.74a15.42,15.42,0,0,0-3.9-1.39c-.61,0-.79.79-1.52.79s-1.22-.59-1.88-.59S7.75,5.06,7.44,6c0,0-.89,2.49-1,2.85a.5.5,0,0,0,0,.21c0,1,3.81,4.14,8.92,4.14M18.76,12A5.43,5.43,0,0,1,18.94,13c0,1.47-1.65,2.29-3.83,2.29-4.91,0-9.21-2.88-9.21-4.78a2,2,0,0,1,.15-.77c-1.76.09-4,.4-4,2.42,0,3.31,7.84,7.39,14,7.39,4.76,0,6-2.16,6-3.86,0-1.33-1.16-2.85-3.24-3.76", fill: "#e00" })] })),
    suse: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20.91,10a.32.32,0,1,0-.41.5.33.33,0,0,0,.36,0,.33.33,0,0,0,.05-.5m-.42-1.1A1.2,1.2,0,0,0,19,10.34a1.23,1.23,0,0,0,.9.9,1.2,1.2,0,0,0,1.44-1.45,1.19,1.19,0,0,0-.89-.89m-5.74,4.89a3.29,3.29,0,0,0-1.51-.16c-.5,0-.52,0-1.09,0-.18,0-.24.85.4,1a1.7,1.7,0,0,1,.79.34c.09.1.15.24-.07.24H11.68a1.07,1.07,0,0,1-.75-.17,2.54,2.54,0,0,1-.63-1,10.79,10.79,0,0,0-.56-1.13A4.44,4.44,0,0,0,8,11.14a3.52,3.52,0,0,0-3.75.21,2.44,2.44,0,0,0,.11,3.83A2.38,2.38,0,0,0,6,15.66a1.69,1.69,0,0,0,1.77-1.93,1.3,1.3,0,0,0-.57-.86,1.5,1.5,0,0,0-.72-.17,1.09,1.09,0,0,0-.75.24.7.7,0,0,0-.08.88c.1.14.26.26.23.45a.31.31,0,0,1-.25.25.59.59,0,0,1-.55-.22,1.41,1.41,0,0,1-.28-1.48,1.77,1.77,0,0,1,1.7-1,2.46,2.46,0,0,1,2.11,1.44,2.66,2.66,0,0,1-.25,2.56c-1.13,1.64-3.9,1.45-5.2.06A4,4,0,0,1,2,12.63a4.53,4.53,0,0,1,1.5-3A10.21,10.21,0,0,1,8.36,7.17,11.07,11.07,0,0,1,11.66,7a14.88,14.88,0,0,1,2.87.57,11,11,0,0,1,1.35.51,4.29,4.29,0,0,1,1.2.68c0-.55,0-1.17,0-1.59A.23.23,0,0,1,17.38,7L20.5,8.42c1.34.61,1.43,2.05,1.48,3.33a.25.25,0,0,1,0,.08c0,.09-.27.06-.35.06h-.56c-.32,0-.63,0-.95,0a2.7,2.7,0,0,1-1.54-.61.2.2,0,0,0-.22,0,.15.15,0,0,0,0,.19,2.74,2.74,0,0,0,1.86.75,7.34,7.34,0,0,0,1.24,0c.35,0,.44-.06.1.19a3.5,3.5,0,0,1-1,.51,5.63,5.63,0,0,1-1.58.27,6.18,6.18,0,0,1-1-.05l-.5-.07a1.42,1.42,0,0,0-.41,0,.53.53,0,0,0-.31.19,1,1,0,0,0-.09.68,1.37,1.37,0,0,0,.65.67c.3.17.69.23.77.57,0,.07-.62.07-.69.07h-.84a2.79,2.79,0,0,1-.63-.05h0c-.09-.05-.13-.18-.17-.28a1.78,1.78,0,0,0-.23-.42,1.86,1.86,0,0,0-.78-.67m6.35-3.72a.89.89,0,1,1-.89-.89.89.89,0,0,1,.89.89", fill: "#30ba78" }) })),
    oracle: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M8.31,18.31a6.31,6.31,0,0,1,0-12.62h7.38a6.31,6.31,0,1,1,0,12.62Zm7.19-2.23a4.08,4.08,0,0,0,0-8.16h-7A4.07,4.07,0,0,0,4.42,12,4.11,4.11,0,0,0,8.5,16.08Z", fill: "#f80000" }) })),
    rocky: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m21.92,15.46c.38-1.08.58-2.25.58-3.46,0-5.8-4.7-10.5-10.5-10.5S1.5,6.2,1.5,12c0,2.87,1.15,5.47,3.02,7.37l10.65-10.65,2.63,2.63,4.12,4.12Zm-1.92,3.34l-4.83-4.83-7.56,7.56c1.34.62,2.83.96,4.4.96,3.2,0,6.07-1.43,8-3.7Z", fill: "#10b981" }) })),
    debian: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { fill: "#a80030", d: "m13.61,12.58c-.34,0,.06.17.51.24.12-.09.23-.19.33-.29-.28.07-.56.07-.84.04m1.82-.45c.2-.28.35-.58.4-.9-.05.23-.17.42-.28.62-.63.4-.06-.24,0-.48-.68.86-.09.52-.12.75m.67-1.75c.04-.61-.12-.42-.17-.18.06.03.11.43.17.18m-3.78-8.36c.18.03.39.06.36.1.2-.04.24-.08-.36-.1m.36.1l-.13.03h.12s0-.03,0-.03" }), jsxRuntimeExports.jsx("path", { fill: "#a80030", d: "m18.33,10.61c.02.55-.16.82-.32,1.29l-.29.15c-.24.47.02.3-.15.67-.37.33-1.14,1.04-1.38,1.11-.18,0,.12-.21.16-.29-.5.34-.4.52-1.17.73l-.02-.05c-1.89.89-4.52-.87-4.49-3.28-.02.15-.06.11-.1.18-.1-1.24.57-2.48,1.7-2.99,1.1-.55,2.4-.32,3.19.42-.43-.57-1.3-1.17-2.33-1.12-1,.02-1.94.65-2.26,1.35-.51.32-.57,1.25-.8,1.42-.3,2.22.57,3.18,2.04,4.3.23.16.07.18.1.3-.49-.23-.94-.57-1.3-1,.2.29.41.56.68.78-.46-.16-1.08-1.12-1.26-1.16.79,1.42,3.22,2.49,4.49,1.96-.59.02-1.34.01-2-.23-.28-.14-.65-.44-.59-.49,1.73.65,3.53.49,5.03-.71.38-.3.8-.8.92-.81-.18.27.03.13-.11.37.38-.61-.17-.25.39-1.06l.21.28c-.08-.51.63-1.13.56-1.93.16-.25.18.27,0,.83.24-.63.06-.73.12-1.25.07.17.15.36.2.54-.16-.61.16-1.02.24-1.38-.08-.03-.24.27-.28-.45,0-.31.09-.16.12-.24-.06-.04-.22-.27-.32-.73.07-.11.19.28.29.3-.06-.36-.17-.64-.17-.92-.28-.59-.1.08-.33-.25-.3-.93.25-.22.29-.64.45.66.71,1.68.83,2.1-.09-.52-.24-1.01-.42-1.5.14.06-.22-1.06.18-.32-.43-1.58-1.84-3.05-3.13-3.74.16.14.36.33.29.36-.64-.38-.53-.41-.62-.57-.52-.21-.56.02-.91,0-.99-.52-1.18-.47-2.09-.8l.04.19c-.65-.22-.76.08-1.47,0-.04-.03.23-.12.45-.15-.63.08-.6-.12-1.22.02.15-.11.31-.18.48-.27-.52.03-1.23.3-1.01.06-.84.38-2.34.9-3.18,1.69l-.03-.18c-.38.46-1.68,1.38-1.78,1.98l-.1.02c-.2.34-.33.72-.49,1.07-.26.45-.38.17-.35.24-.51,1.04-.77,1.92-.99,2.64.16.24,0,1.42.06,2.36-.26,4.67,3.28,9.2,7.14,10.25.57.2,1.41.19,2.12.22-.85-.24-.95-.13-1.78-.42-.59-.28-.72-.6-1.14-.96l.17.29c-.82-.29-.48-.36-1.15-.57l.18-.23c-.27-.02-.71-.45-.83-.69h-.29c-.35-.42-.54-.73-.52-.98l-.09.17c-.11-.18-1.29-1.63-.68-1.29-.11-.1-.27-.17-.43-.47l.13-.14c-.3-.38-.54-.87-.53-1.03.16.21.27.25.38.29-.75-1.85-.79-.1-1.36-1.89h.12c-.09-.15-.15-.3-.22-.45l.05-.52c-.54-.62-.15-2.65-.07-3.76.05-.45.45-.93.75-1.69l-.18-.03c.35-.61,2-2.45,2.76-2.36.37-.46-.07,0-.15-.12.81-.84,1.07-.59,1.62-.75.59-.35-.51.14-.23-.13,1.02-.26.72-.59,2.06-.73.14.08-.33.12-.44.23.85-.42,2.7-.32,3.9.23,1.39.65,2.95,2.57,3.01,4.38l.07.02c-.04.72.11,1.55-.14,2.31l.17-.36" }), jsxRuntimeExports.jsx("path", { fill: "#a80030", d: "m9.9,13.05l-.05.24c.22.3.4.63.69.87-.2-.4-.36-.57-.64-1.11m.53-.02c-.12-.13-.19-.29-.27-.44.07.28.23.51.37.75l-.1-.31m9.33-2.03l-.05.13c-.09.65-.29,1.29-.59,1.89.33-.63.55-1.32.64-2.01M12.39,1.86c.23-.08.56-.05.81-.1-.32.03-.63.04-.95.08l.14.02M4.33,6.14c.05.49-.37.68.09.36.25-.56-.1-.15-.09-.36m-.54,2.27c.11-.33.13-.52.17-.71-.29.38-.14.46-.17.71" })] })),
};

const NCIcons = {
    bulb: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.85,23.51H11.26a1,1,0,0,1-1-.73l-.11-.44a1.29,1.29,0,0,1-.93-1.25v-.64a.89.89,0,0,1,.89-.89H14a.89.89,0,0,1,.89.89v.65a1.31,1.31,0,0,1-.92,1.24l-.12.44A1,1,0,0,1,12.85,23.51ZM14,20.08H10.15a.37.37,0,0,0-.37.36h0v.64a.78.78,0,0,0,.66.77l.17,0,.2.76a.47.47,0,0,0,.45.35h1.59a.47.47,0,0,0,.45-.35l.21-.76.17,0a.76.76,0,0,0,.64-.76v-.65a.37.37,0,0,0-.36-.37Z" }), jsxRuntimeExports.jsx("path", { d: "M13.81,22.3H10.42a.26.26,0,0,1-.26-.26.26.26,0,0,1,.26-.26h3.39a.26.26,0,0,1,.26.26A.26.26,0,0,1,13.81,22.3Z" }), jsxRuntimeExports.jsx("path", { d: "M13.75,18.62H10.36a1.16,1.16,0,0,1-1.15-1,4.79,4.79,0,0,0-1.28-2.59,5.75,5.75,0,0,1,.16-8.12c.12-.11.23-.21.36-.31L8.78,7A5.21,5.21,0,0,0,8,14.37l.28.32a5.3,5.3,0,0,1,1.43,2.87.62.62,0,0,0,.63.53h3.39a.63.63,0,0,0,.64-.54,5.18,5.18,0,0,1,1.41-2.86,5.2,5.2,0,0,0-.13-7.36c-.1-.1-.21-.19-.32-.28l.34-.41a5.74,5.74,0,0,1,.8,8.06c-.1.12-.2.24-.31.35a4.71,4.71,0,0,0-1.27,2.58A1.17,1.17,0,0,1,13.75,18.62Z" }), jsxRuntimeExports.jsx("path", { d: "M11.52,18.56a.27.27,0,0,1-.27-.27h0V11.93a.27.27,0,1,1,.53,0v6.36a.27.27,0,0,1-.26.27Z" }), jsxRuntimeExports.jsx("path", { d: "M10.27,13.44a1.52,1.52,0,1,1,1.51-1.51.27.27,0,0,1-.53,0,1,1,0,1,0-1,1,.27.27,0,0,1,0,.53Z" }), jsxRuntimeExports.jsx("path", { d: "M13.8,13.44H10.19a.27.27,0,1,1,0-.53H13.8a.27.27,0,0,1,0,.53Z" }), jsxRuntimeExports.jsx("path", { d: "M12.47,18.55a.26.26,0,0,1-.27-.26h0V11.93a.27.27,0,1,1,.53,0v6.36a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M13.72,13.44a.27.27,0,0,1,0-.53h0a1,1,0,0,0,0-2,1,1,0,0,0-1,1,.27.27,0,0,1-.53,0,1.52,1.52,0,1,1,1.52,1.51Z" }), jsxRuntimeExports.jsx("path", { d: "M21.5,11.54H18.84a.26.26,0,0,1-.26-.26.26.26,0,0,1,.26-.26H21.5a.27.27,0,0,1,.27.26A.26.26,0,0,1,21.5,11.54Zm-16.2,0H2.64a.26.26,0,0,1-.26-.26A.26.26,0,0,1,2.64,11H5.3a.26.26,0,0,1,.26.26.25.25,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M3.89,16.32a.26.26,0,0,1-.26-.26.28.28,0,0,1,.13-.23l2.31-1.32a.27.27,0,0,1,.36.1.26.26,0,0,1-.1.35h0L4,16.29A.28.28,0,0,1,3.89,16.32ZM18,8.27A.26.26,0,0,1,17.69,8a.26.26,0,0,1,.13-.23l2.31-1.32a.25.25,0,0,1,.35.1.25.25,0,0,1-.09.35L18.08,8.24A.31.31,0,0,1,18,8.27Z" }), jsxRuntimeExports.jsx("path", { d: "M19.9,16.7a.2.2,0,0,1-.13,0l-2.28-1.37a.26.26,0,0,1,.27-.45L20,16.22a.27.27,0,0,1,.09.36A.29.29,0,0,1,19.9,16.7ZM6,8.32a.32.32,0,0,1-.14,0L3.62,6.91a.27.27,0,0,1-.09-.36.27.27,0,0,1,.36-.09h0L6.17,7.84A.26.26,0,0,1,6,8.32Z" }), jsxRuntimeExports.jsx("path", { d: "M6.8,6.06H6.72L2.28,4.69a.75.75,0,0,1,0-1.43L11.22.51a2.3,2.3,0,0,1,1.42,0l8.93,2.75a.74.74,0,0,1,0,1.42L17.14,6a.25.25,0,0,1-.33-.17A.27.27,0,0,1,17,5.51l4.43-1.33a.22.22,0,0,0,.15-.27.23.23,0,0,0-.15-.15L12.48,1a1.87,1.87,0,0,0-1.1,0l-9,2.75A.23.23,0,0,0,2.28,4a.28.28,0,0,0,.15.15L6.87,5.54a.27.27,0,0,1,.18.33.28.28,0,0,1-.25.19Z" }), jsxRuntimeExports.jsx("path", { d: "M6.8,7.37a.27.27,0,0,1-.26-.27V4a.26.26,0,0,1,.21-.26,28,28,0,0,1,10.32,0h0a.26.26,0,0,1,.21.26V7.1a.25.25,0,0,1-.09.2.29.29,0,0,1-.22.06h0a27.6,27.6,0,0,0-10.13,0Zm5.13-1a28.44,28.44,0,0,1,4.87.43V4.19a28,28,0,0,0-9.74,0v2.6A28.44,28.44,0,0,1,11.93,6.36Z" }), jsxRuntimeExports.jsx("path", { d: "M8.05,7.6H8c-.41,0-.83-.12-1.24-.2h0a.26.26,0,0,1,.1-.51h0c.4.08.81.15,1.21.2a.27.27,0,0,1,0,.53Z" }), jsxRuntimeExports.jsx("path", { d: "M16,7.56A.26.26,0,0,1,16,7l1-.17a.26.26,0,1,1,.09.51q-.51.11-1,.18Z" })] })),
    documentation: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M6,18.65H5.17A1.16,1.16,0,0,1,4,17.49V1.71A1.16,1.16,0,0,1,5.17.55h9.77A1.16,1.16,0,0,1,16.1,1.71v1.4h-.52V1.71a.64.64,0,0,0-.64-.64H5.17a.64.64,0,0,0-.64.64V17.49a.64.64,0,0,0,.64.64H6Z" }), jsxRuntimeExports.jsx("path", { d: "M8.14,21H7a1.16,1.16,0,0,1-1.16-1.16V4A1.17,1.17,0,0,1,7,2.87h9.77A1.17,1.17,0,0,1,17.9,4V5.72h-.52V4a.64.64,0,0,0-.64-.63H7A.64.64,0,0,0,6.33,4V19.82a.64.64,0,0,0,.64.63H8.14Z" }), jsxRuntimeExports.jsx("path", { d: "M18.82,23.54H9.05a1.16,1.16,0,0,1-1.16-1.16V6.59A1.16,1.16,0,0,1,9.05,5.43h9.77A1.16,1.16,0,0,1,20,6.59V22.38A1.16,1.16,0,0,1,18.82,23.54ZM9.05,6a.63.63,0,0,0-.63.63V22.38a.63.63,0,0,0,.63.63h9.77a.64.64,0,0,0,.64-.63V6.59A.64.64,0,0,0,18.82,6Z" }), jsxRuntimeExports.jsx("path", { d: "M17.77,19.7H13.49a.27.27,0,0,1,0-.53h4.28a.27.27,0,1,1,0,.53Zm0-.74H13.49a.26.26,0,0,1-.26-.26.26.26,0,0,1,.26-.26h4.28a.26.26,0,0,1,.27.26A.27.27,0,0,1,17.77,19Z" }), jsxRuntimeExports.jsx("path", { d: "M11.5,20.27H10.3a.61.61,0,0,1-.6-.6V18.46a.59.59,0,0,1,.6-.59h1.2a.59.59,0,0,1,.6.59v1.21A.61.61,0,0,1,11.5,20.27Zm-1.2-1.88a.07.07,0,0,0-.07.07v1.21a.07.07,0,0,0,.07.07h1.2a.07.07,0,0,0,.07-.07V18.46a.07.07,0,0,0-.07-.07Z" }), jsxRuntimeExports.jsx("path", { d: "M17.77,15.81H13.49a.26.26,0,0,1-.26-.26.26.26,0,0,1,.26-.26h4.28a.27.27,0,0,1,.27.26A.26.26,0,0,1,17.77,15.81Zm0-.73H13.49a.27.27,0,0,1,0-.53h4.28a.27.27,0,1,1,0,.53Z" }), jsxRuntimeExports.jsx("path", { d: "M11.5,16.38H10.3a.6.6,0,0,1-.6-.59V14.58a.6.6,0,0,1,.6-.6h1.2a.6.6,0,0,1,.6.6v1.21A.6.6,0,0,1,11.5,16.38Zm-1.2-1.87a.07.07,0,0,0-.07.07v1.21a.08.08,0,0,0,.07.07h1.2a.08.08,0,0,0,.07-.07V14.58a.07.07,0,0,0-.07-.07Z" }), jsxRuntimeExports.jsx("path", { d: "M17.69,11.75H13.41a.27.27,0,0,1,0-.53h4.28a.27.27,0,0,1,0,.53Zm0-.74H13.41a.26.26,0,0,1-.26-.26.26.26,0,0,1,.26-.26h4.28a.25.25,0,0,1,.26.26A.26.26,0,0,1,17.69,11Z" }), jsxRuntimeExports.jsx("path", { d: "M11.61,12.32H10.4a.6.6,0,0,1-.6-.6V10.51a.59.59,0,0,1,.6-.59h1.21a.6.6,0,0,1,.59.59v1.21A.61.61,0,0,1,11.61,12.32ZM10.4,10.44a.07.07,0,0,0-.07.07v1.21a.07.07,0,0,0,.07.07h1.21a.08.08,0,0,0,.07-.07V10.51a.08.08,0,0,0-.07-.07Z" }), jsxRuntimeExports.jsx("path", { d: "M16.56,8.38H11.32a.27.27,0,0,1,0-.53h5.24a.27.27,0,0,1,0,.53Z" })] })),
    rocket: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.76,23.66a.56.56,0,0,1-.48-.28c-.25-.47-1.51-2.85-1.51-3.75a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2,13.59,13.59,0,0,1-1.51,3.75.58.58,0,0,1-.1.12A.51.51,0,0,1,11.76,23.66Zm0-5.5a1.48,1.48,0,0,0-1.47,1.47,13.59,13.59,0,0,0,1.45,3.5h0a13.39,13.39,0,0,0,1.44-3.49,1.47,1.47,0,0,0-1.46-1.47Z" }), jsxRuntimeExports.jsx("path", { d: "M16.88,17.16a.44.44,0,0,1-.29-.11l-1.42-1.31a.94.94,0,0,1-.29-.68V10.21a.41.41,0,0,1,.4-.41.39.39,0,0,1,.28.11l1.6,1.48a.4.4,0,0,1,.13.31v5a.41.41,0,0,1-.41.42ZM15.4,10.48v4.58a.39.39,0,0,0,.13.29h0l1.24,1.15V11.75Z" }), jsxRuntimeExports.jsx("path", { d: "M6.54,17.16a.42.42,0,0,1-.42-.42v-5a.41.41,0,0,1,.14-.31L7.85,9.91a.42.42,0,0,1,.58,0,.43.43,0,0,1,.11.28v4.85a1,1,0,0,1-.3.68L6.83,17.05A.44.44,0,0,1,6.54,17.16Zm.11-5.41V16.5l1.24-1.15h0A.39.39,0,0,0,8,15.06V10.48Z" }), jsxRuntimeExports.jsx("path", { d: "M14.05,16.87H9.46a.6.6,0,0,1-.59-.6A.55.55,0,0,1,9,15.92l.39-.52a.59.59,0,0,1,.47-.24h3.81a.6.6,0,0,1,.48.24l.39.52a.6.6,0,0,1-.12.83.58.58,0,0,1-.36.12Zm-4.2-1.19a.05.05,0,0,0,0,0l-.39.52a.08.08,0,0,0,0,.1h4.63a.07.07,0,0,0,.07-.07.06.06,0,0,0,0,0l-.39-.52-.06,0Z" }), jsxRuntimeExports.jsx("path", { d: "M14.45,15.68H9a.94.94,0,0,1-1-.95v-9a2.4,2.4,0,0,1,.47-1.46L11,.71h0A.84.84,0,0,1,12.19.52a.85.85,0,0,1,.19.19l2.55,3.54a2.47,2.47,0,0,1,.47,1.46v9A1,1,0,0,1,14.45,15.68ZM11.71.89a.31.31,0,0,0-.25.13h0L8.91,4.56a2,2,0,0,0-.37,1.15v9a.43.43,0,0,0,.43.43h5.48a.43.43,0,0,0,.43-.43v-9a1.91,1.91,0,0,0-.38-1.15L12,1A.31.31,0,0,0,11.71.89Z" }), jsxRuntimeExports.jsx("path", { d: "M11.76,9.55a1.83,1.83,0,1,1,1.82-1.82h0A1.82,1.82,0,0,1,11.76,9.55Zm0-3.12a1.3,1.3,0,1,0,1.3,1.3h0A1.3,1.3,0,0,0,11.76,6.43Z" })] })),
    emptyData: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.25,23.48H5.76a1.41,1.41,0,0,1-1.41-1.41V1.9A1.41,1.41,0,0,1,5.76.49H18.25A1.41,1.41,0,0,1,19.66,1.9V12.39a.26.26,0,0,1-.26.27.27.27,0,0,1-.26-.27V1.9A.89.89,0,0,0,18.25,1H5.76a.88.88,0,0,0-.88.89V22.07a.88.88,0,0,0,.88.89H18.25a.89.89,0,0,0,.89-.89.26.26,0,0,1,.26-.26.26.26,0,0,1,.26.26A1.41,1.41,0,0,1,18.25,23.48Z" }), jsxRuntimeExports.jsx("path", { d: "M15.35,4.11H8.66a.27.27,0,0,1,0-.53h6.69a.27.27,0,1,1,0,.53Z" }), jsxRuntimeExports.jsx("path", { d: "M16.35,22.32a5.08,5.08,0,1,1,5.07-5.07h0A5.08,5.08,0,0,1,16.35,22.32Zm0-9.62a4.55,4.55,0,1,0,4.54,4.55h0A4.55,4.55,0,0,0,16.35,12.7Z" }), jsxRuntimeExports.jsx("path", { d: "M13.13,20.72a.27.27,0,0,1-.26-.27.25.25,0,0,1,.08-.18l6.53-6.54a.28.28,0,0,1,.38,0,.27.27,0,0,1,0,.37l-6.54,6.54A.27.27,0,0,1,13.13,20.72Z" }), jsxRuntimeExports.jsx("path", { d: "M10.44,18H6.69a.27.27,0,0,1,0-.53h3.75a.27.27,0,0,1,0,.53Z" }), jsxRuntimeExports.jsx("path", { d: "M17.43,11.71a.26.26,0,0,1-.26-.26h0V9.65a.27.27,0,0,1,.26-.27.26.26,0,0,1,.26.27v1.8a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M15.89,11.71a.26.26,0,0,1-.26-.26h0v-.68a.27.27,0,0,1,.53,0v.68a.27.27,0,0,1-.27.26Z" }), jsxRuntimeExports.jsx("path", { d: "M14.36,12a.26.26,0,0,1-.26-.26h0v-.38a.26.26,0,0,1,.26-.26.26.26,0,0,1,.26.26v.38a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M12.82,12.91a.26.26,0,0,1-.26-.26h0V10.5a.27.27,0,1,1,.53,0v2.15a.27.27,0,0,1-.27.26Z" }), jsxRuntimeExports.jsx("path", { d: "M11.29,14.41a.27.27,0,0,1-.27-.26h0V9.3a.27.27,0,1,1,.53,0v4.85a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M9.75,16.81a.26.26,0,0,1-.26-.26h0V11.07a.26.26,0,0,1,.26-.26.26.26,0,0,1,.26.26v5.48a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M8.22,16.81A.27.27,0,0,1,8,16.55H8V11.67a.27.27,0,0,1,.53,0v4.88a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M6.68,16.81a.26.26,0,0,1-.26-.26h0v-3.7a.26.26,0,0,1,.26-.26.26.26,0,0,1,.26.26v3.7a.26.26,0,0,1-.26.26Z" }), jsxRuntimeExports.jsx("path", { d: "M6.61,11.4a.26.26,0,0,1-.26-.26.25.25,0,0,1,.1-.21l4.2-3.3.07,0a1.63,1.63,0,0,1,1.5.14l1.59,1.12a1.09,1.09,0,0,0,1.13,0l2.25-1.53a.26.26,0,0,1,.37.06.27.27,0,0,1-.07.37h0L15.22,9.33a1.65,1.65,0,0,1-1.7,0L11.93,8.16a1.09,1.09,0,0,0-1-.09L6.77,11.34A.23.23,0,0,1,6.61,11.4Z" })] })),
    lmNeedsOptimization: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#f44336" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#ececf4" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#ececf4" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#ececf4" }), jsxRuntimeExports.jsx("path", { d: "m7.08,13.25c.27.03.54.05.81.08,1.25.14,2.51.29,3.76.44.22.03.45.06.66.13.5.15.75.75.56,1.3-.18.55-.74.89-1.22.69-.41-.17-.8-.38-1.18-.61-1.12-.65-2.23-1.31-3.35-1.96-.02-.01-.04-.03-.05-.04v-.03h.01Z", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#161632" })] })),
    lmPartiallyOptimized: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#ff9800" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#ececf4" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#ececf4" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#ff9800" }), jsxRuntimeExports.jsx("path", { d: "m9.99,10.2c.16.22.33.43.48.66.73,1.03,1.47,2.06,2.19,3.09.13.18.25.37.35.57.22.48-.05,1.06-.59,1.29-.53.23-1.15.04-1.33-.44-.15-.41-.25-.85-.34-1.28-.27-1.26-.52-2.53-.78-3.8v-.07s.02,0,.03-.01h-.01Z", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#161632" })] })),
    lmModerateOptimization: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#8bc34a" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#ececf4" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#8bc34a" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#8bc34a" }), jsxRuntimeExports.jsx("path", { d: "m13.98,10.27c-.06.26-.12.53-.19.79-.32,1.22-.64,2.44-.96,3.66-.06.22-.12.43-.22.63-.22.47-.84.64-1.37.37-.52-.26-.77-.86-.51-1.31.22-.38.49-.73.76-1.08.8-1.02,1.61-2.03,2.41-3.04.01-.02.03-.03.05-.05,0,0,.02,0,.03.01v.02Z", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#161632" })] })),
    lmFullyOptimized: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#4caf50" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#4caf50" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#4caf50" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#4caf50" }), jsxRuntimeExports.jsx("path", { d: "m16.99,13.43c-.24.13-.47.27-.71.4-1.11.61-2.21,1.21-3.32,1.82-.2.11-.4.21-.61.28-.5.16-1.04-.18-1.21-.74-.17-.55.09-1.15.6-1.27.43-.1.87-.15,1.31-.19,1.29-.12,2.58-.22,3.87-.33h.07s0,.02,0,.03Z", fill: "#161632" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#161632" })] })),
    dmNeedsOptimization: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#e57373" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#444452" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#444452" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#444452" }), jsxRuntimeExports.jsx("path", { d: "m7.08,13.25c.27.03.54.05.81.08,1.25.14,2.51.29,3.76.44.22.03.45.06.66.13.5.15.75.75.56,1.3-.18.55-.74.89-1.22.69-.41-.17-.8-.38-1.18-.61-1.12-.65-2.23-1.31-3.35-1.96-.02-.01-.04-.03-.05-.04v-.03h.01Z", fill: "#dbdbe7" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#dbdbe7" })] })),
    dmPartiallyOptimized: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#ffb74d" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#444452" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#444452" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#ffb74d" }), jsxRuntimeExports.jsx("path", { d: "m9.99,10.2c.16.22.33.43.48.66.73,1.03,1.47,2.06,2.19,3.09.13.18.25.37.35.57.22.48-.05,1.06-.59,1.29-.53.23-1.15.04-1.33-.44-.15-.41-.25-.85-.34-1.28-.27-1.26-.52-2.53-.78-3.8v-.07s.02,0,.03-.01h-.01Z", fill: "#dbdbe7" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#dbdbe7" })] })),
    dmModerateOptimization: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#9ccc65" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#444452" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#9ccc65" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#9ccc65" }), jsxRuntimeExports.jsx("path", { d: "m13.98,10.27c-.06.26-.12.53-.19.79-.32,1.22-.64,2.44-.96,3.66-.06.22-.12.43-.22.63-.22.47-.84.64-1.37.37-.52-.26-.77-.86-.51-1.31.22-.38.49-.73.76-1.08.8-1.02,1.61-2.03,2.41-3.04.01-.02.03-.03.05-.05,0,0,.02,0,.03.01v.02Z", fill: "#dbdbe7" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#dbdbe7" })] })),
    dmFullyOptimized: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m1.77,14.56c.07-.41.12-.83.2-1.23.36-1.73,1.13-3.26,2.28-4.59.03-.03.05-.06.06-.08.95.95,1.89,1.89,2.83,2.83-.78.97-1.25,2.09-1.39,3.36H1.77v-.28h0Z", fill: "#66bb6a" }), jsxRuntimeExports.jsx("path", { d: "m22.23,14.84h-3.99c-.14-1.26-.59-2.38-1.38-3.34.94-.94,1.88-1.88,2.83-2.83.46.51.88,1.1,1.24,1.74.7,1.25,1.13,2.59,1.27,4.02,0,.06.02.11.03.17,0,0,0,.24,0,.24Z", fill: "#66bb6a" }), jsxRuntimeExports.jsx("path", { d: "m18.79,7.76c-.95.95-1.88,1.88-2.83,2.83-.97-.78-2.09-1.25-3.35-1.38v-4c2.36.16,4.42,1.01,6.18,2.55Z", fill: "#66bb6a" }), jsxRuntimeExports.jsx("path", { d: "m11.39,9.2c-1.25.14-2.37.6-3.33,1.37-.94-.94-1.88-1.88-2.83-2.83,1.75-1.53,3.8-2.38,6.16-2.54v4Z", fill: "#66bb6a" }), jsxRuntimeExports.jsx("path", { d: "m16.99,13.43c-.24.13-.47.27-.71.4-1.11.61-2.21,1.21-3.32,1.82-.2.11-.4.21-.61.28-.5.16-1.04-.18-1.21-.74-.17-.55.09-1.15.6-1.27.43-.1.87-.15,1.31-.19,1.29-.12,2.58-.22,3.87-.33h.07s0,.02,0,.03Z", fill: "#dbdbe7" }), jsxRuntimeExports.jsx("path", { d: "m2.52,17.29h18.96c.41,0,.75.34.75.75h0c0,.41-.34.75-.75.75H2.52c-.41,0-.75-.34-.75-.75h0c0-.41.34-.75.75-.75Z", fill: "#dbdbe7" })] })),
};

const uiIcons = {
    budget: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.00923,22.8755a.875.875,0,0,1-.001-1.75,9.14327,9.14327,0,0,0,2.81934-.44629.8749.8749,0,0,1,.541,1.66406,10.853,10.853,0,0,1-3.3584.53223Zm-3.08887-.4834a.89617.89617,0,0,1-.26953-.042,10.84954,10.84954,0,0,1-3.03125-1.543.87472.87472,0,1,1,1.02734-1.416,9.08553,9.08553,0,0,0,2.543,1.293.87521.87521,0,0,1-.26953,1.708Zm8.96387-1.42969a.87491.87491,0,0,1-.51563-1.582,9.13611,9.13611,0,0,0,2.0166-2.01953.8753.8753,0,1,1,1.416,1.0293,10.89883,10.89883,0,0,1-2.40332,2.40429A.86816.86816,0,0,1,17.88423,20.96241ZM3.91938,18.76612a.87176.87176,0,0,1-.707-.35839A10.81875,10.81875,0,0,1,1.66059,15.3794a.8752.8752,0,0,1,1.66407-.543,9.05075,9.05075,0,0,0,1.2998,2.53808.875.875,0,0,1-.70508,1.3916Zm17.59473-2.80078a.87573.87573,0,0,1-.832-1.14453,9.15129,9.15129,0,0,0,.44336-2.82031.89236.89236,0,0,1,.874-.89551.85836.85836,0,0,1,.875.85547h-.875l.875.00684a10.89041,10.89041,0,0,1-.52832,3.39257A.87434.87434,0,0,1,21.51411,15.96534ZM2.00044,12.88526a.86652.86652,0,0,1-.875-.86523V12.0005a10.88161,10.88161,0,0,1,.52148-3.33887.87523.87523,0,0,1,1.666.53711,9.1228,9.1228,0,0,0-.4375,2.80176A.88319.88319,0,0,1,2.00044,12.88526ZM21.50239,9.74952a.87478.87478,0,0,1-.831-.60156,9.05679,9.05679,0,0,0-1.30567-2.53613.87466.87466,0,1,1,1.41016-1.03516,10.80031,10.80031,0,0,1,1.55762,3.02441.87435.87435,0,0,1-.55762,1.1045A.86092.86092,0,0,1,21.50239,9.74952ZM3.895,7.01612a.87508.87508,0,0,1-.707-1.38867A10.89035,10.89035,0,0,1,5.5854,3.21925.87487.87487,0,0,1,6.6186,4.63136,9.20862,9.20862,0,0,0,4.604,6.6548.8716.8716,0,0,1,3.895,7.01612Zm13.95508-2.251a.86908.86908,0,0,1-.51172-.166,9.06944,9.06944,0,0,0-2.54492-1.28808.87493.87493,0,0,1,.53515-1.666,10.83873,10.83873,0,0,1,3.03516,1.53613.875.875,0,0,1-.51367,1.584ZM8.88325,3.37062a.87484.87484,0,0,1-.27246-1.70606,10.85009,10.85009,0,0,1,3.3584-.53906h.002a.875.875,0,0,1,.00195,1.75,9.126,9.126,0,0,0-2.81738.45117A.85941.85941,0,0,1,8.88325,3.37062Z" }), jsxRuntimeExports.jsx("path", { d: "M12.00044,22.87452a10.875,10.875,0,0,1,0-21.75.875.875,0,0,1,0,1.75,9.125,9.125,0,1,0,9.125,9.125.875.875,0,0,1,1.75,0A10.88783,10.88783,0,0,1,12.00044,22.87452Z" }), jsxRuntimeExports.jsx("path", { d: "M11.79341,18.47315a.34456.34456,0,0,1-.35938-.35937v-.99414a4.92088,4.92088,0,0,1-1.8291-.53906,3.02837,3.02837,0,0,1-1.1084-1.001,2.49035,2.49035,0,0,1-.40332-1.23828.28891.28891,0,0,1,.09375-.209.30477.30477,0,0,1,.22363-.09375h1.54a.45775.45775,0,0,1,.28809.07911,1.07815,1.07815,0,0,1,.1875.19433,1.50215,1.50215,0,0,0,.32324.47559,1.71646,1.71646,0,0,0,.61231.38183,2.6816,2.6816,0,0,0,.96484.15137,2.61831,2.61831,0,0,0,1.40332-.30273.934.934,0,0,0,.46875-.82129.78537.78537,0,0,0-.25195-.60449,2.31988,2.31988,0,0,0-.792-.417q-.54053-.1875-1.44726-.40332a7.88751,7.88751,0,0,1-1.82813-.59765,2.7555,2.7555,0,0,1-1.13086-.9502,2.59257,2.59257,0,0,1-.38183-1.44726,2.59036,2.59036,0,0,1,.81347-1.92872A3.83945,3.83945,0,0,1,11.434,6.86866V5.8755a.34462.34462,0,0,1,.35938-.36035h1.02246a.3377.3377,0,0,1,.24511.10058.35179.35179,0,0,1,.10059.25977V6.897a4.23635,4.23635,0,0,1,1.66309.59766,3.37934,3.37934,0,0,1,1.02246.99414,2.11093,2.11093,0,0,1,.36718,1.07227.30109.30109,0,0,1-.08691.209.28042.28042,0,0,1-.21582.09375H14.28462a.548.548,0,0,1-.24512-.05762.50514.50514,0,0,1-.20117-.20215,1.03477,1.03477,0,0,0-.50391-.65527,1.97854,1.97854,0,0,0-1.09472-.28027,2.11507,2.11507,0,0,0-1.123.25879.86861.86861,0,0,0-.417.792.83619.83619,0,0,0,.21582.583,1.76381,1.76381,0,0,0,.70507.418q.49072.18016,1.3252.3955a9.86946,9.86946,0,0,1,2.05859.61914,2.61983,2.61983,0,0,1,1.15918.92871,2.59307,2.59307,0,0,1,.36719,1.43262,2.65411,2.65411,0,0,1-.417,1.47656,3.018,3.018,0,0,1-1.17383,1.0293,5.33036,5.33036,0,0,1-1.77832.51758v.99414a.34951.34951,0,0,1-.10059.25879.33385.33385,0,0,1-.24511.10058Z" })] })),
    budgetEuro: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.67,9.15a.88.88,0,0,0,.83.6.86.86,0,0,0,.27-.05.87.87,0,0,0,.56-1.1,10.44,10.44,0,0,0-1.56-3,.87.87,0,0,0-1.22-.19.88.88,0,0,0-.19,1.22A9,9,0,0,1,20.67,9.15Z" }), jsxRuntimeExports.jsx("path", { d: "M22.62,14.32l.06-.3c0-.24.08-.48.11-.72l0-.29c0-.34.05-.67.05-1v0A.86.86,0,0,0,22,11.1a.91.91,0,0,0-.88.9A10.69,10.69,0,0,1,21,13.27c0,.1,0,.2-.05.3a9.78,9.78,0,0,1-.28,1.19,9.42,9.42,0,0,1-1.46,2.77,8.34,8.34,0,0,1-.67.78,3,3,0,0,1-.25.25,8.34,8.34,0,0,1-.78.67,9,9,0,0,1-2.77,1.46,8.25,8.25,0,0,1-1.19.29l-.3.05a10.51,10.51,0,0,1-1.25.09h0a9.12,9.12,0,0,1-2.73-.42l-.09-.05a8.27,8.27,0,0,1-1.11-.44A9.12,9.12,0,0,1,3.8,16a7.54,7.54,0,0,1-.44-1.11.9.9,0,0,1,0-.09,9,9,0,0,1-.42-2.56,1.55,1.55,0,0,0,0-.21,9.92,9.92,0,0,1,.41-2.82.17.17,0,0,0,0-.07A9.16,9.16,0,0,1,9.07,3.36h.07A11.41,11.41,0,0,1,12,2.88h0A.87.87,0,0,0,12.87,2a.86.86,0,0,0-.57-.81l-.15,0-.15,0h-.1a10.83,10.83,0,0,0-6.11,2,1.07,1.07,0,0,0-.22.1A10.11,10.11,0,0,0,3.16,5.61a1.21,1.21,0,0,0-.09.2,10.78,10.78,0,0,0-1,10.61,10.87,10.87,0,0,0,1.11,2,.84.84,0,0,0,.18.15,11.2,11.2,0,0,0,2,2,.92.92,0,0,0,.22.22,10.4,10.4,0,0,0,2,1.11,10.8,10.8,0,0,0,4.37.93h0c.34,0,.67,0,1-.06l.29,0,.73-.11.28-.06c.27-.06.53-.12.79-.2l.17-.05.1,0s0,0,0,0a10.88,10.88,0,0,0,2.9-1.48l.09-.05c.07,0,.12-.11.19-.16a12.57,12.57,0,0,0,1-.82,2.37,2.37,0,0,0,.27-.28,9.11,9.11,0,0,0,.81-.94c.05-.07.12-.13.17-.2s0-.05,0-.07a10.94,10.94,0,0,0,1.48-2.91l0-.05s0-.06,0-.09,0-.12.05-.17C22.5,14.84,22.56,14.58,22.62,14.32Z" }), jsxRuntimeExports.jsx("path", { d: "M14.79,3.31A9.14,9.14,0,0,1,17.34,4.6a.86.86,0,0,0,1.22-.2.88.88,0,0,0-.2-1.22,10.83,10.83,0,0,0-3-1.54.88.88,0,0,0-1.1.57A.87.87,0,0,0,14.79,3.31Z" }), jsxRuntimeExports.jsx("path", { d: "M16.27,14.06h-.83a.33.33,0,0,0-.22.08.56.56,0,0,0-.15.27,2.09,2.09,0,0,1-1,1.36,3.39,3.39,0,0,1-1.74.41,2.63,2.63,0,0,1-1.94-.71,2.81,2.81,0,0,1-.68-1.74H12.7a.34.34,0,0,0,.34-.34v-.53a.33.33,0,0,0-.1-.25.32.32,0,0,0-.24-.09h-3V11.6h3a.34.34,0,0,0,.34-.34v-.53a.33.33,0,0,0-.1-.25.32.32,0,0,0-.24-.09H9.75a2.82,2.82,0,0,1,.68-1.76,2.62,2.62,0,0,1,1.94-.7,3.4,3.4,0,0,1,1.74.4,2.12,2.12,0,0,1,1,1.37.56.56,0,0,0,.15.27.32.32,0,0,0,.22.07h.83A.33.33,0,0,0,16.5,10a.23.23,0,0,0,.08-.22,2.68,2.68,0,0,0-.28-1.11,3.17,3.17,0,0,0-.79-1,4.08,4.08,0,0,0-1.31-.71,5.6,5.6,0,0,0-1.83-.27,4.59,4.59,0,0,0-2.31.53A3.28,3.28,0,0,0,8.69,8.64a5,5,0,0,0-.44,1.75h-1a.31.31,0,0,0-.34.34v.53A.32.32,0,0,0,7,11.5a.33.33,0,0,0,.25.1H8.2v.92H7.25a.31.31,0,0,0-.34.34v.53a.32.32,0,0,0,.09.24.33.33,0,0,0,.25.1h1a5.17,5.17,0,0,0,.43,1.73,3.3,3.3,0,0,0,1.37,1.47,4.63,4.63,0,0,0,2.32.52,5.6,5.6,0,0,0,1.83-.27,4.08,4.08,0,0,0,1.31-.71,3.06,3.06,0,0,0,.79-1,2.64,2.64,0,0,0,.28-1.1.25.25,0,0,0-.08-.23A.33.33,0,0,0,16.27,14.06Z" }), jsxRuntimeExports.jsx("path", { d: "M12.37,17.7a4.89,4.89,0,0,1-2.44-.56,3.48,3.48,0,0,1-1.48-1.58A4.78,4.78,0,0,1,8,14H7.25a.58.58,0,0,1-.59-.59v-.53a.58.58,0,0,1,.59-.59H8v-.42h-.7a.58.58,0,0,1-.59-.59v-.53a.58.58,0,0,1,.59-.59H8a5,5,0,0,1,.44-1.61A3.6,3.6,0,0,1,9.93,7a4.89,4.89,0,0,1,2.44-.56,5.92,5.92,0,0,1,1.92.29,4.14,4.14,0,0,1,1.38.75,3.41,3.41,0,0,1,.85,1.07,2.82,2.82,0,0,1,.31,1.21.5.5,0,0,1-.16.42.59.59,0,0,1-.4.15h-.83a.55.55,0,0,1-.38-.13.74.74,0,0,1-.23-.39A1.88,1.88,0,0,0,14,8.55a3.16,3.16,0,0,0-1.62-.37,2.33,2.33,0,0,0-1.76.63A2.35,2.35,0,0,0,10,10.14H12.7a.58.58,0,0,1,.59.59v.53a.58.58,0,0,1-.59.59H10v.42H12.7a.58.58,0,0,1,.59.59v.53a.58.58,0,0,1-.59.59H10a2.42,2.42,0,0,0,.58,1.32,2.37,2.37,0,0,0,1.76.63A3.26,3.26,0,0,0,14,15.56a1.9,1.9,0,0,0,.84-1.22.77.77,0,0,1,.23-.4.6.6,0,0,1,.38-.13h.83a.59.59,0,0,1,.4.16.5.5,0,0,1,.16.43,2.81,2.81,0,0,1-.31,1.19,3.41,3.41,0,0,1-.85,1.07,4.34,4.34,0,0,1-1.38.76A5.93,5.93,0,0,1,12.37,17.7ZM7.25,12.77a.1.1,0,0,0-.07,0,.12.12,0,0,0,0,.07v.53a.07.07,0,0,0,.09.09H8.48l0,.23a4.75,4.75,0,0,0,.4,1.64,3.09,3.09,0,0,0,1.27,1.36,4.42,4.42,0,0,0,2.2.49A5.43,5.43,0,0,0,14.12,17a3.78,3.78,0,0,0,1.23-.67,2.79,2.79,0,0,0,.72-.91,2.33,2.33,0,0,0,.26-1s0-.06-.06-.06h-.83s-.06,0-.06,0a.28.28,0,0,0-.07.15A2.37,2.37,0,0,1,14.24,16a3.7,3.7,0,0,1-1.87.44,2.83,2.83,0,0,1-2.11-.78,3,3,0,0,1-.76-1.89l0-.28H12.7a.07.07,0,0,0,.09-.09v-.53a.12.12,0,0,0,0-.07.1.1,0,0,0-.07,0H9.46V11.35H12.7a.1.1,0,0,0,.07,0,.12.12,0,0,0,0-.07v-.53a.12.12,0,0,0,0-.07.1.1,0,0,0-.07,0H9.47l0-.28a3,3,0,0,1,.76-1.9,2.83,2.83,0,0,1,2.11-.78,3.6,3.6,0,0,1,1.87.44,2.37,2.37,0,0,1,1.07,1.51.27.27,0,0,0,.07.14s0,0,.06,0h.83a.07.07,0,0,0,.06,0,2.35,2.35,0,0,0-.26-1,3,3,0,0,0-.72-.91,3.87,3.87,0,0,0-1.23-.66,5.42,5.42,0,0,0-1.75-.26,4.46,4.46,0,0,0-2.19.49A3.15,3.15,0,0,0,8.91,8.75a4.8,4.8,0,0,0-.41,1.66l0,.23H7.25a.1.1,0,0,0-.07,0,.12.12,0,0,0,0,.07v.53a.12.12,0,0,0,0,.07.1.1,0,0,0,.07,0h1.2v1.42Z" })] })),
    forecastUp: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.8589 12.4379C21.5757 13.1209 20.9147 13.562 20.1749 13.562H17.7417V15.8278C17.7417 16.2593 17.392 16.6091 16.9605 16.6091C16.529 16.6091 16.1791 16.2593 16.1791 15.8278V12.7808C16.1791 12.3493 16.529 11.9995 16.9605 11.9995H20.1749C20.3264 11.9995 20.3907 11.8993 20.4154 11.8395C20.4455 11.767 20.4601 11.6596 20.3595 11.5589L12.6009 3.79016C12.2957 3.4856 11.7983 3.4856 11.4924 3.79092L3.63667 11.5612C3.53841 11.6593 3.55306 11.7668 3.58296 11.8393C3.60783 11.8991 3.67192 11.9995 3.82375 11.9995H7.19441C7.62593 11.9995 7.97566 12.3494 7.97566 12.7808V15.8278C7.97566 16.2593 7.62593 16.6092 7.19441 16.6092C6.76289 16.6092 6.41301 16.2593 6.41301 15.8278V13.5622H3.82375C3.08324 13.5622 2.42207 13.1203 2.13918 12.4367C1.85658 11.7539 2.01207 10.9751 2.53529 10.4528L10.391 2.68268C11.3028 1.77203 12.791 1.77203 13.7056 2.68512L21.4652 10.4547C21.9872 10.9775 22.1416 11.7559 21.8589 12.4379V12.4379ZM7.19441 20.4375C6.76289 20.4375 6.41301 20.7872 6.41301 21.2188C6.41301 21.6503 6.76289 22 7.19441 22C7.62593 22 7.97566 21.6503 7.97566 21.2188C7.97566 20.7872 7.62593 20.4375 7.19441 20.4375ZM7.19441 17.703C6.76289 17.703 6.41301 18.0527 6.41301 18.4842C6.41301 18.9157 6.76289 19.2655 7.19441 19.2655C7.62593 19.2655 7.97566 18.9157 7.97566 18.4842C7.97566 18.0527 7.62593 17.703 7.19441 17.703ZM16.9603 20.4375C16.529 20.4375 16.1791 20.7872 16.1791 21.2188C16.1791 21.6503 16.529 22 16.9603 22C17.3919 22 17.7417 21.6503 17.7417 21.2188C17.7417 20.7872 17.3919 20.4375 16.9603 20.4375ZM16.9603 17.703C16.529 17.703 16.1791 18.0527 16.1791 18.4842C16.1791 18.9157 16.529 19.2655 16.9603 19.2655C17.3919 19.2655 17.7417 18.9157 17.7417 18.4842C17.7417 18.0527 17.3919 17.703 16.9603 17.703ZM12.4929 11.9605H11.7769C11.4327 11.9605 11.1419 11.6564 11.1419 11.2964V11.0115C11.1419 10.6617 11.4148 10.398 11.7769 10.398H12.4538C12.6529 10.398 12.8586 10.5312 12.8586 10.7541C12.8586 11.1855 13.2085 11.5354 13.6399 11.5354C14.0714 11.5354 14.4213 11.1855 14.4213 10.7541C14.4213 9.81769 13.7298 9.03644 12.8188 8.86905V8.36658C12.8188 7.93506 12.4691 7.58533 12.0376 7.58533C11.606 7.58533 11.2563 7.93506 11.2563 8.36658V8.89591C10.8696 8.98715 10.5153 9.17987 10.2282 9.46094C9.80977 9.87033 9.57936 10.421 9.57936 11.0115V11.2964C9.57936 12.5241 10.5651 13.5231 11.7769 13.5231H12.4929C12.8513 13.5231 13.1321 13.7949 13.1321 14.1419V14.6169C13.1321 15.0016 12.8106 15.2028 12.4929 15.2028H11.3292C11.1432 15.2028 10.9429 15.0959 10.9429 14.861C10.9429 14.4295 10.5932 14.0798 10.1616 14.0798C9.73012 14.0798 9.38039 14.4295 9.38039 14.861C9.38039 15.905 10.1986 16.7273 11.2563 16.7636V17.1952C11.2563 17.6267 11.606 17.9764 12.0376 17.9764C12.4691 17.9764 12.8188 17.6267 12.8188 17.1952V16.7427C13.8936 16.5932 14.6947 15.7132 14.6947 14.6169V14.1419C14.6947 13.5515 14.4637 13.0001 14.0441 12.589C13.6303 12.1837 13.0793 11.9605 12.4929 11.9605V11.9605Z" }) })),
    forecastDown: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M2.13917 11.5621C2.42238 10.8791 3.08339 10.438 3.82313 10.438L6.2563 10.438L6.2563 8.17218C6.2563 7.74066 6.60603 7.39093 7.03755 7.39093C7.46907 7.39093 7.81895 7.74066 7.81895 8.17218L7.81895 11.2192C7.81895 11.6507 7.46907 12.0005 7.03755 12.0005L3.82313 12.0005C3.67161 12.0005 3.60737 12.1007 3.58265 12.1605C3.55259 12.233 3.53795 12.3404 3.6385 12.4411L11.3971 20.2098C11.7023 20.5144 12.1998 20.5144 12.5057 20.2091L20.3614 12.4388C20.4596 12.3407 20.445 12.2332 20.4151 12.1607C20.3902 12.1009 20.3261 12.0005 20.1743 12.0005L16.8036 12.0005C16.3721 12.0005 16.0224 11.6506 16.0224 11.2192L16.0224 8.17218C16.0224 7.74066 16.3721 7.39078 16.8036 7.39078C17.2352 7.39078 17.585 7.74066 17.585 8.17218L17.585 10.4378L20.1743 10.4378C20.9148 10.4378 21.576 10.8797 21.8589 11.5633C22.1415 12.2461 21.986 13.0249 21.4628 13.5472L13.6071 21.3173C12.6952 22.228 11.207 22.228 10.2924 21.3149L2.53285 13.5453C2.01085 13.0225 1.85643 12.2441 2.13917 11.5621ZM16.8036 3.5625C17.2352 3.5625 17.585 3.21277 17.585 2.78125C17.585 2.34973 17.2352 2 16.8036 2C16.3721 2 16.0224 2.34973 16.0224 2.78125C16.0224 3.21277 16.3721 3.5625 16.8036 3.5625ZM16.8036 6.29703C17.2352 6.29703 17.585 5.9473 17.585 5.51578C17.585 5.08426 17.2352 4.73453 16.8036 4.73453C16.3721 4.73453 16.0224 5.08426 16.0224 5.51578C16.0224 5.9473 16.3721 6.29703 16.8036 6.29703ZM7.0377 3.5625C7.46907 3.5625 7.81895 3.21277 7.81895 2.78125C7.81895 2.34973 7.46907 2 7.0377 2C6.60618 2 6.2563 2.34973 6.2563 2.78125C6.2563 3.21277 6.60618 3.5625 7.0377 3.5625ZM7.0377 6.29703C7.46907 6.29703 7.81895 5.9473 7.81895 5.51578C7.81895 5.08426 7.46907 4.73453 7.0377 4.73453C6.60618 4.73453 6.2563 5.08426 6.2563 5.51578C6.2563 5.9473 6.60618 6.29703 7.0377 6.29703Z" }), jsxRuntimeExports.jsx("path", { d: "M11.7774 10.8752L12.4933 10.8752C13.0797 10.8752 13.6307 11.0984 14.0446 11.5037C14.4642 11.9147 14.6952 12.4662 14.6952 13.0565L14.6952 13.5316C14.6952 14.6279 13.8941 15.5079 12.8193 15.6574L12.8193 16.1098C12.8193 16.5414 12.4695 16.8911 12.038 16.8911C11.6065 16.8911 11.2568 16.5414 11.2568 16.1098L11.2568 15.6783C10.199 15.642 9.38086 14.8197 9.38086 13.7757C9.38086 13.3442 9.73059 12.9944 10.1621 12.9944C10.5936 12.9944 10.9434 13.3442 10.9434 13.7757C10.9434 14.0105 11.1437 14.1175 11.3297 14.1175L12.4933 14.1175C12.811 14.1175 13.1325 13.9162 13.1325 13.5316L13.1325 13.0565C13.1325 12.7096 12.8518 12.4378 12.4933 12.4378L11.7774 12.4378C10.5656 12.4378 9.57983 11.4388 9.57983 10.2111L9.57983 9.92621C9.57983 9.33569 9.81024 8.785 10.2286 8.37561C10.5158 8.09454 10.8701 7.90182 11.2568 7.81058L11.2568 7.28125C11.2568 6.84973 11.6065 6.5 12.038 6.5C12.4695 6.5 12.8193 6.84973 12.8193 7.28125L12.8193 7.78372C13.7302 7.95111 14.4218 8.73236 14.4218 9.66879C14.4218 10.1002 14.0719 10.45 13.6404 10.45C13.209 10.45 12.8591 10.1002 12.8591 9.66879C12.8591 9.44586 12.6534 9.31265 12.4543 9.31265L11.7774 9.31265C11.4153 9.31265 11.1423 9.57633 11.1423 9.92621L11.1423 10.2111C11.1423 10.571 11.4332 10.8752 11.7774 10.8752Z" })] })),
    down: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12.5463 15.7828L18.7763 9.72295C18.9206 9.5828 19 9.3957 19 9.1962C19 8.99671 18.9206 8.80961 18.7763 8.66945L18.3176 8.22319C18.0188 7.9328 17.533 7.9328 17.2345 8.22319L12.0029 13.3118L6.76547 8.21754C6.62126 8.07738 6.42901 8 6.22402 8C6.0188 8 5.82656 8.07738 5.68224 8.21754L5.22366 8.66381C5.07945 8.80407 5 8.99106 5 9.19056C5 9.39005 5.07945 9.57715 5.22366 9.71731L11.4594 15.7828C11.6041 15.9233 11.7972 16.0004 12.0026 16C12.2087 16.0004 12.4017 15.9233 12.5463 15.7828Z" }) })),
    cloudError: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.0095 12.527C9.28898 12.527 7.08356 14.7324 7.08356 17.4529C7.08356 20.1734 9.28898 22.3788 12.0095 22.3788C14.7299 22.3788 16.9354 20.1734 16.9354 17.4529C16.9354 14.7324 14.7299 12.527 12.0095 12.527ZM14.2587 18.7132L13.2644 19.7075L12 18.4431L10.7356 19.7075L9.74123 18.7132L11.0056 17.4488L9.74123 16.1844L10.7356 15.19L12 16.4544L13.2644 15.1899L14.2588 16.1843L12.9944 17.4487L14.2587 18.7132Z", fill: "#E74C3C" }), jsxRuntimeExports.jsx("path", { d: "M18.0187 6.56228C17.712 5.27922 17.0141 4.11372 16.013 3.23059C14.8365 2.19273 13.3237 1.62119 11.7532 1.62119C8.20144 1.62119 5.31187 4.51098 5.31187 8.06298C5.31187 8.11806 5.31258 8.17319 5.31398 8.22841C5.25952 8.22667 5.205 8.22578 5.15058 8.22578C2.31052 8.22573 0 10.5363 0 13.3764C0 16.2164 2.31052 18.527 5.15058 18.527H5.76291C5.70272 18.1743 5.67188 17.814 5.67188 17.4489C5.67188 15.7585 6.33009 14.1694 7.52536 12.9742C8.72063 11.779 10.3097 11.1207 12 11.1207C13.6903 11.1207 15.2794 11.779 16.4746 12.9742C17.6699 14.1694 18.3281 15.7586 18.3281 17.4489C18.3281 17.8124 18.2975 18.1713 18.2378 18.5225C21.4348 18.4064 24 15.7696 24 12.5444C24 9.24602 21.3171 6.56261 18.0187 6.56228Z" })] })),
    cloudSuccess: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.0095 12.527C9.28904 12.527 7.08362 14.7324 7.08362 17.4529C7.08362 20.1734 9.28904 22.3788 12.0095 22.3788C14.73 22.3788 16.9354 20.1734 16.9354 17.4529C16.9354 14.7324 14.73 12.527 12.0095 12.527ZM11.6208 19.6016L9.23579 17.2762L10.2175 16.2694L11.5825 17.6002L13.7638 15.3042L14.7833 16.2727L11.6208 19.6016Z", fill: "#27AE60" }), jsxRuntimeExports.jsx("path", { d: "M18.0188 6.56233C17.7121 5.27926 17.0142 4.11376 16.0131 3.23059C14.8366 2.19273 13.3238 1.62119 11.7532 1.62119C8.20148 1.62119 5.31192 4.51098 5.31192 8.06298C5.31192 8.11806 5.31262 8.17319 5.31403 8.2284C5.25956 8.22667 5.20505 8.22578 5.15062 8.22578C2.31052 8.22578 0 10.5363 0 13.3764C0 16.2165 2.31052 18.527 5.15058 18.527H5.76291C5.70272 18.1743 5.67188 17.814 5.67188 17.4489C5.67188 15.7586 6.33009 14.1695 7.52536 12.9743C8.72063 11.779 10.3097 11.1208 12 11.1208C13.6903 11.1208 15.2794 11.779 16.4746 12.9743C17.6699 14.1695 18.3281 15.7586 18.3281 17.4489C18.3281 17.8125 18.2975 18.1713 18.2378 18.5226C21.4348 18.4064 24 15.7696 24 12.5444C24 9.24606 21.3171 6.56261 18.0188 6.56233Z" })] })),
    gear: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12 9C10.346 9 9 10.346 9 12C9 13.654 10.346 15 12 15C13.654 15 15 13.654 15 12C15 10.346 13.654 9 12 9Z" }), jsxRuntimeExports.jsx("path", { d: "M23.189 9.96L21.865 9.705C21.272 9.59196 20.807 9.204 20.5861 8.64396C20.365 8.08098 20.443 7.47996 20.801 6.993L21.632 5.859C21.9241 5.46202 21.881 4.91002 21.5321 4.56202L19.7371 2.76703C19.3991 2.42803 18.8651 2.37802 18.4701 2.64605L17.3531 3.40106C16.8551 3.74006 16.2531 3.79505 15.6981 3.55505C15.1451 3.31303 14.7741 2.83303 14.6831 2.23603L14.4691 0.848016C14.394 0.36 13.974 0 13.48 0H10.942C10.463 0 10.051 0.339985 9.96 0.810984L9.63096 2.52098C9.51996 3.09998 9.144 3.56198 8.59896 3.78698C8.05398 4.014 7.45998 3.95297 6.972 3.62198L5.52998 2.646C5.13497 2.37802 4.60298 2.42798 4.263 2.76698L2.46802 4.56202C2.11903 4.91002 2.076 5.46202 2.36803 5.859L3.19903 6.99396C3.55702 7.47996 3.63502 8.08098 3.41405 8.64396C3.19303 9.204 2.72803 9.59196 2.13403 9.705L0.811032 9.96C0.339985 10.051 0 10.463 0 10.942V13.48C0 13.974 0.36 14.394 0.848016 14.469L2.23603 14.683C2.83303 14.774 3.31303 15.145 3.55505 15.698C3.79603 16.2509 3.74006 16.8539 3.40106 17.354L2.64605 18.47C2.37703 18.866 2.42803 19.3979 2.76703 19.7369L4.56202 21.532C4.911 21.8819 5.46202 21.922 5.859 21.6319L6.99396 20.8009C7.47996 20.4439 8.07996 20.3669 8.64396 20.5859C9.204 20.8069 9.59196 21.2719 9.705 21.8659L9.96 23.1889C10.051 23.66 10.463 24 10.942 24H13.48C13.974 24 14.394 23.64 14.469 23.152L14.619 22.176C14.713 21.565 15.094 21.08 15.664 20.845C16.23 20.609 16.845 20.682 17.344 21.048L18.141 21.632C18.536 21.922 19.089 21.882 19.438 21.532L21.233 19.7371C21.572 19.3981 21.623 18.866 21.3539 18.47L20.599 17.3531C20.26 16.8541 20.2039 16.2511 20.4449 15.698C20.687 15.1451 21.167 14.774 21.764 14.6831L23.152 14.4691C23.64 14.3941 24 13.9741 24 13.4801V10.9421C24 10.463 23.66 10.051 23.189 9.96ZM12 17C9.243 17 6.99996 14.757 6.99996 12C6.99996 9.243 9.243 6.99996 12 6.99996C14.757 6.99996 17 9.243 17 12C17 14.757 14.757 17 12 17Z" })] })),
    spinningGear: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M2.28906 12C2.28906 6.64536 6.64536 2.28906 12 2.28906C14.0138 2.28906 15.9343 2.89969 17.5514 4.03304H16.3021C15.9462 4.03304 15.6576 4.32161 15.6576 4.67757C15.6576 5.03352 15.9462 5.3221 16.3021 5.3221H19.3225C19.6784 5.3221 19.967 5.03352 19.967 4.67757V1.65721C19.967 1.30125 19.6784 1.01268 19.3225 1.01268C18.9665 1.01268 18.6779 1.30125 18.6779 1.65721V3.26162C16.769 1.79488 14.4454 1 12 1C9.0618 1 6.29947 2.14421 4.2218 4.2218C2.14421 6.29947 1 9.0618 1 12C1 13.9302 1.51008 15.832 2.47512 17.4999C2.59457 17.7064 2.81105 17.8218 3.03358 17.8218C3.14315 17.8218 3.25418 17.7938 3.3558 17.735C3.66389 17.5567 3.76912 17.1624 3.59089 16.8543C2.73925 15.3824 2.28906 13.7038 2.28906 12Z" }), jsxRuntimeExports.jsx("path", { d: "M21.5251 6.5001C21.3467 6.19197 20.9524 6.08679 20.6444 6.26506C20.3363 6.44334 20.231 6.83762 20.4093 7.14575C21.2609 8.61756 21.7111 10.2961 21.7111 12C21.7111 17.3547 17.3548 21.711 12.0002 21.711C9.98652 21.711 8.06634 21.1002 6.44946 19.967H7.69805C8.054 19.967 8.34258 19.6784 8.34258 19.3225C8.34258 18.9665 8.054 18.6779 7.69805 18.6779H4.67773C4.32178 18.6779 4.0332 18.9665 4.0332 19.3225V22.3428C4.0332 22.6988 4.32178 22.9873 4.67773 22.9873C5.03369 22.9873 5.32227 22.6988 5.32227 22.3428V20.7368C7.2312 22.204 9.55452 23 12.0002 23C14.9384 23 17.7007 21.8558 19.7784 19.7782C21.856 17.7006 23.0002 14.9382 23.0002 12C23.0002 10.0697 22.4901 8.16789 21.5251 6.5001Z" }), jsxRuntimeExports.jsx("path", { d: "M12 10.25C11.0352 10.25 10.25 11.0352 10.25 12C10.25 12.9648 11.0352 13.75 12 13.75C12.9648 13.75 13.75 12.9648 13.75 12C13.75 11.0352 12.9648 10.25 12 10.25Z", fill: "#E74C3C" }), jsxRuntimeExports.jsx("path", { d: "M18.5269 10.81L17.7546 10.6612C17.4087 10.5953 17.1374 10.369 17.0085 10.0423C16.8796 9.7139 16.9251 9.36331 17.1339 9.07925L17.6187 8.41775C17.789 8.18618 17.7639 7.86418 17.5604 7.66118L16.5133 6.6141C16.3161 6.41635 16.0046 6.38718 15.7742 6.54353L15.1227 6.98395C14.8322 7.1817 14.481 7.21378 14.1572 7.07378C13.8347 6.9326 13.6182 6.6526 13.5652 6.30435L13.4403 5.49468C13.3965 5.21 13.1515 5 12.8633 5H11.3828C11.1034 5 10.8631 5.19832 10.81 5.47307L10.6181 6.47057C10.5533 6.80832 10.334 7.07782 10.0161 7.20907C9.69815 7.3415 9.35166 7.3059 9.067 7.11282L8.22582 6.5435C7.9954 6.38718 7.68507 6.41632 7.48675 6.61407L6.43968 7.66118C6.2361 7.86418 6.211 8.18618 6.38135 8.41775L6.8661 9.07981C7.07493 9.36331 7.12043 9.7139 6.99153 10.0423C6.8626 10.369 6.59135 10.5953 6.24485 10.6612L5.4731 10.81C5.19832 10.8631 5 11.1034 5 11.3828V12.8633C5 13.1515 5.21 13.3965 5.49468 13.4402L6.30435 13.5651C6.6526 13.6182 6.9326 13.8346 7.07378 14.1572C7.21435 14.4797 7.1817 14.8315 6.98395 15.1232L6.54353 15.7742C6.3866 16.0052 6.41635 16.3155 6.6141 16.5132L7.66118 17.5603C7.86475 17.7645 8.18618 17.7878 8.41775 17.6186L9.07981 17.1339C9.36331 16.9256 9.71331 16.8807 10.0423 17.0084C10.369 17.1374 10.5953 17.4086 10.6612 17.7551L10.81 18.5269C10.8631 18.8017 11.1034 19 11.3828 19H12.8633C13.1515 19 13.3965 18.79 13.4402 18.5053L13.5278 17.936C13.5826 17.5796 13.8048 17.2967 14.1373 17.1596C14.4675 17.0219 14.8263 17.0645 15.1173 17.278L15.5822 17.6187C15.8127 17.7878 16.1352 17.7645 16.3388 17.5603L17.3859 16.5133C17.5837 16.3155 17.6134 16.0052 17.4565 15.7742L17.0161 15.1226C16.8183 14.8316 16.7856 14.4798 16.9262 14.1572C17.0674 13.8346 17.3474 13.6182 17.6957 13.5651L18.5053 13.4403C18.79 13.3966 19 13.1516 19 12.8634V11.3829C19 11.1034 18.8017 10.8631 18.5269 10.81ZM12 14.9167C10.3917 14.9167 9.08331 13.6082 9.08331 12C9.08331 10.3917 10.3917 9.08331 12 9.08331C13.6082 9.08331 14.9167 10.3917 14.9167 12C14.9167 13.6082 13.6082 14.9167 12 14.9167Z", fill: "#E74C3C" })] })),
    dollar: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.3276,19.67264H3.67233a2.54983,2.54983,0,0,1-2.54688-2.54688V6.87479A2.55,2.55,0,0,1,3.67233,4.32693H20.3276a2.55025,2.55025,0,0,1,2.54785,2.54786v10.251A2.55,2.55,0,0,1,20.3276,19.67264ZM3.67233,6.07693a.79855.79855,0,0,0-.79688.79786v10.251a.79771.79771,0,0,0,.79688.79688H20.3276a.79791.79791,0,0,0,.79785-.79688V6.87479a.79875.79875,0,0,0-.79785-.79786Z" }), jsxRuntimeExports.jsx("path", { d: "M5.13229,16.29163v.25185a.62963.62963,0,0,1-.62963.62963H4.25081a.62963.62963,0,0,1-.62963-.62963v-.25185a.62963.62963,0,0,1,.62963-.62962h.25185A.62963.62963,0,0,1,5.13229,16.29163Z" }), jsxRuntimeExports.jsx("path", { d: "M4.5024,17.54764H4.25045a1.00485,1.00485,0,0,1-1.00391-1.00391v-.252A1.00568,1.00568,0,0,1,4.25045,15.2869H4.5024a1.00652,1.00652,0,0,1,1.00489,1.00488v.252A1.00569,1.00569,0,0,1,4.5024,17.54764ZM4.25045,16.0369a.25486.25486,0,0,0-.25391.25488v.252a.25466.25466,0,0,0,.25391.25391H4.5024a.25487.25487,0,0,0,.25489-.25391v-.252a.25506.25506,0,0,0-.25489-.25488Z" }), jsxRuntimeExports.jsx("path", { d: "M5.13229,7.44163v.25185a.62963.62963,0,0,1-.62963.62963H4.25081a.62963.62963,0,0,1-.62963-.62963V7.44163A.62963.62963,0,0,1,4.25081,6.812h.25185A.62963.62963,0,0,1,5.13229,7.44163Z" }), jsxRuntimeExports.jsx("path", { d: "M4.5024,8.698H4.25045A1.00568,1.00568,0,0,1,3.24654,7.69315v-.252a1.00484,1.00484,0,0,1,1.00391-1.0039H4.5024a1.00568,1.00568,0,0,1,1.00489,1.0039v.252A1.00652,1.00652,0,0,1,4.5024,8.698ZM4.25045,7.18729a.25465.25465,0,0,0-.25391.2539v.252a.25486.25486,0,0,0,.25391.25488H4.5024a.25507.25507,0,0,0,.25489-.25488v-.252a.25486.25486,0,0,0-.25489-.2539Z" }), jsxRuntimeExports.jsx("path", { d: "M20.13229,16.29163v.25185a.62963.62963,0,0,1-.62963.62963h-.25185a.62963.62963,0,0,1-.62963-.62963v-.25185a.62963.62963,0,0,1,.62963-.62962h.25185A.62963.62963,0,0,1,20.13229,16.29163Z" }), jsxRuntimeExports.jsx("path", { d: "M19.5024,17.54764h-.252a1.00485,1.00485,0,0,1-1.00391-1.00391v-.252a1.00568,1.00568,0,0,1,1.00391-1.00488h.252a1.00652,1.00652,0,0,1,1.00489,1.00488v.252A1.00569,1.00569,0,0,1,19.5024,17.54764Zm-.252-1.51074a.25486.25486,0,0,0-.25391.25488v.252a.25466.25466,0,0,0,.25391.25391h.252a.25487.25487,0,0,0,.25489-.25391v-.252a.25506.25506,0,0,0-.25489-.25488Z" }), jsxRuntimeExports.jsx("path", { d: "M20.13229,7.44163v.25185a.62963.62963,0,0,1-.62963.62963h-.25185a.62963.62963,0,0,1-.62963-.62963V7.44163a.62963.62963,0,0,1,.62963-.62962h.25185A.62963.62963,0,0,1,20.13229,7.44163Z" }), jsxRuntimeExports.jsx("path", { d: "M19.5024,8.698h-.252a1.00568,1.00568,0,0,1-1.00391-1.00488v-.252a1.00484,1.00484,0,0,1,1.00391-1.0039h.252a1.00568,1.00568,0,0,1,1.00489,1.0039v.252A1.00652,1.00652,0,0,1,19.5024,8.698Zm-.252-1.51074a.25465.25465,0,0,0-.25391.2539v.252a.25486.25486,0,0,0,.25391.25488h.252a.25507.25507,0,0,0,.25489-.25488v-.252a.25486.25486,0,0,0-.25489-.2539Z" }), jsxRuntimeExports.jsx("path", { d: "M12.00045,17.659a5.65918,5.65918,0,1,1,5.6582-5.65918A5.66606,5.66606,0,0,1,12.00045,17.659Zm0-9.56836a3.90918,3.90918,0,1,0,3.9082,3.90918A3.91393,3.91393,0,0,0,12.00045,8.09061Z" }), jsxRuntimeExports.jsx("path", { d: "M11.77584,15.25565A.17167.17167,0,0,1,11.645,15.201a.18172.18172,0,0,1-.05078-.12793v-.51074a2.43313,2.43313,0,0,1-.9375-.28028,1.57664,1.57664,0,0,1-.56445-.51367,1.26691,1.26691,0,0,1-.2041-.63476.14571.14571,0,0,1,.04687-.10547.15742.15742,0,0,1,.11328-.04786h.919a.27986.27986,0,0,1,.15625.03711.39314.39314,0,0,1,.09863.09473.8639.8639,0,0,0,.16406.21094.76024.76024,0,0,0,.27735.16406,1.55834,1.55834,0,0,0,1.06445-.06934.40142.40142,0,0,0,.21484-.35644.34149.34149,0,0,0-.11718-.27051,1.099,1.099,0,0,0-.375-.18555,6.48549,6.48549,0,0,0-.68946-.17089,4.23725,4.23725,0,0,1-.94336-.30274,1.44992,1.44992,0,0,1-.59472-.48828A1.42744,1.42744,0,0,1,10.438,9.89725,2.00157,2.00157,0,0,1,11.5942,9.3865V8.87674A.17811.17811,0,0,1,11.645,8.7449a.17585.17585,0,0,1,.13086-.05078h.60547a.18172.18172,0,0,1,.12793.05078.1738.1738,0,0,1,.05469.13184v.52441a2.21463,2.21463,0,0,1,.84472.31348,1.71558,1.71558,0,0,1,.52149.51074,1.088,1.088,0,0,1,.18652.54688.15387.15387,0,0,1-.04394.10547.1433.1433,0,0,1-.10938.04687h-.96289a.30136.30136,0,0,1-.13769-.0293.26089.26089,0,0,1-.10254-.09472.49631.49631,0,0,0-.2334-.28028.88089.88089,0,0,0-.48047-.12011.92487.92487,0,0,0-.5.11328.38042.38042,0,0,0-.17871.3457.36789.36789,0,0,0,.09863.25488.77427.77427,0,0,0,.32813.18946,5.668,5.668,0,0,0,.63086.168,4.80522,4.80522,0,0,1,1.07128.30957,1.37305,1.37305,0,0,1,.57227,1.97949,1.58425,1.58425,0,0,1-.60156.53222,2.59925,2.59925,0,0,1-.90332.26954V15.073a.18689.18689,0,0,1-.18262.18262Z" })] })),
    euro: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.33,19.67H3.67a2.55,2.55,0,0,1-2.55-2.54V6.87A2.55,2.55,0,0,1,3.67,4.33H20.33a2.54,2.54,0,0,1,2.54,2.54V17.13A2.54,2.54,0,0,1,20.33,19.67ZM3.67,6.08a.8.8,0,0,0-.8.79V17.13a.79.79,0,0,0,.8.79H20.33a.79.79,0,0,0,.79-.79V6.87a.79.79,0,0,0-.79-.79Z" }), jsxRuntimeExports.jsx("path", { d: "M5.13,16.29v.25a.63.63,0,0,1-.63.63H4.25a.63.63,0,0,1-.63-.63v-.25a.63.63,0,0,1,.63-.63H4.5A.63.63,0,0,1,5.13,16.29Z" }), jsxRuntimeExports.jsx("path", { d: "M4.5,17.55H4.25a1,1,0,0,1-1-1v-.25a1,1,0,0,1,1-1H4.5a1,1,0,0,1,1,1v.25A1,1,0,0,1,4.5,17.55ZM4.25,16a.25.25,0,0,0-.25.25v.25a.26.26,0,0,0,.25.26H4.5a.26.26,0,0,0,.26-.26v-.25A.26.26,0,0,0,4.5,16Z" }), jsxRuntimeExports.jsx("path", { d: "M5.13,7.44v.25a.63.63,0,0,1-.63.63H4.25a.63.63,0,0,1-.63-.63V7.44a.63.63,0,0,1,.63-.63H4.5A.63.63,0,0,1,5.13,7.44Z" }), jsxRuntimeExports.jsx("path", { d: "M4.5,8.7H4.25a1,1,0,0,1-1-1V7.44a1,1,0,0,1,1-1H4.5a1,1,0,0,1,1,1v.25A1,1,0,0,1,4.5,8.7ZM4.25,7.19A.25.25,0,0,0,4,7.44v.25A.26.26,0,0,0,4.25,8H4.5a.26.26,0,0,0,.26-.26V7.44a.26.26,0,0,0-.26-.25Z" }), jsxRuntimeExports.jsx("path", { d: "M20.13,16.29v.25a.63.63,0,0,1-.63.63h-.25a.63.63,0,0,1-.63-.63v-.25a.63.63,0,0,1,.63-.63h.25A.63.63,0,0,1,20.13,16.29Z" }), jsxRuntimeExports.jsx("path", { d: "M19.5,17.55h-.25a1,1,0,0,1-1-1v-.25a1,1,0,0,1,1-1h.25a1,1,0,0,1,1,1v.25A1,1,0,0,1,19.5,17.55ZM19.25,16a.25.25,0,0,0-.25.25v.25a.26.26,0,0,0,.25.26h.25a.26.26,0,0,0,.26-.26v-.25A.26.26,0,0,0,19.5,16Z" }), jsxRuntimeExports.jsx("path", { d: "M20.13,7.44v.25a.63.63,0,0,1-.63.63h-.25a.63.63,0,0,1-.63-.63V7.44a.63.63,0,0,1,.63-.63h.25A.63.63,0,0,1,20.13,7.44Z" }), jsxRuntimeExports.jsx("path", { d: "M19.5,8.7h-.25a1,1,0,0,1-1-1V7.44a1,1,0,0,1,1-1h.25a1,1,0,0,1,1,1v.25A1,1,0,0,1,19.5,8.7Zm-.25-1.51a.25.25,0,0,0-.25.25v.25a.26.26,0,0,0,.25.26h.25a.26.26,0,0,0,.26-.26V7.44a.26.26,0,0,0-.26-.25Z" }), jsxRuntimeExports.jsx("path", { d: "M12,17.66A5.66,5.66,0,1,1,17.66,12,5.67,5.67,0,0,1,12,17.66Zm0-9.57A3.91,3.91,0,1,0,15.91,12,3.91,3.91,0,0,0,12,8.09Z" }), jsxRuntimeExports.jsx("path", { d: "M9.29,11.76a.17.17,0,0,1-.13,0,.18.18,0,0,1-.06-.13V11.3a.21.21,0,0,1,.19-.19h2.9a.21.21,0,0,1,.19.19v.28a.18.18,0,0,1-.06.13.17.17,0,0,1-.13,0Zm0,1.14a.17.17,0,0,1-.13-.05.18.18,0,0,1-.06-.14v-.28a.18.18,0,0,1,.06-.13.17.17,0,0,1,.13-.05h2.9a.17.17,0,0,1,.13.05.18.18,0,0,1,.06.13v.28a.18.18,0,0,1-.06.14.17.17,0,0,1-.13.05Zm2.73,2a2.45,2.45,0,0,1-1.24-.28,1.77,1.77,0,0,1-.73-.78,2.88,2.88,0,0,1-.26-1.17v-1.3a2.84,2.84,0,0,1,.26-1.17,1.89,1.89,0,0,1,.73-.78A2.45,2.45,0,0,1,12,9.12a2.93,2.93,0,0,1,1,.15,1.9,1.9,0,0,1,.69.38,1.46,1.46,0,0,1,.42.52,1.29,1.29,0,0,1,.15.59.13.13,0,0,1,0,.12.18.18,0,0,1-.12,0h-.44a.16.16,0,0,1-.12,0,.24.24,0,0,1-.08-.14A1.09,1.09,0,0,0,13,10,1.78,1.78,0,0,0,12,9.8a1.41,1.41,0,0,0-1,.38,1.7,1.7,0,0,0-.38,1.21v1.22A1.74,1.74,0,0,0,11,13.83a1.41,1.41,0,0,0,1,.37A1.88,1.88,0,0,0,13,14a1.14,1.14,0,0,0,.51-.73.27.27,0,0,1,.08-.15.21.21,0,0,1,.12,0h.44a.18.18,0,0,1,.12,0,.13.13,0,0,1,0,.12,1.29,1.29,0,0,1-.15.59,1.59,1.59,0,0,1-.42.53,2.26,2.26,0,0,1-.69.38A3.22,3.22,0,0,1,12,14.88Z" }), jsxRuntimeExports.jsx("path", { d: "M12,15.08a2.74,2.74,0,0,1-1.34-.3,2,2,0,0,1-.81-.88,2.57,2.57,0,0,1-.24-.8H9.29a.38.38,0,0,1-.39-.39v-.28A.36.36,0,0,1,9,12.16a.37.37,0,0,1,.27-.11h.3V12h-.3A.37.37,0,0,1,9,11.85a.36.36,0,0,1-.12-.27V11.3A.36.36,0,0,1,9,11a.37.37,0,0,1,.27-.11h.34a2.69,2.69,0,0,1,.24-.82,2,2,0,0,1,.82-.86A2.67,2.67,0,0,1,12,8.92a3,3,0,0,1,1,.16,2.29,2.29,0,0,1,.76.41,1.89,1.89,0,0,1,.47.6,1.45,1.45,0,0,1,.17.67.33.33,0,0,1-.1.27.44.44,0,0,1-.26.1h-.44A.4.4,0,0,1,13.4,11a.46.46,0,0,1-.13-.24,1,1,0,0,0-.42-.61A1.73,1.73,0,0,0,12,10a1.2,1.2,0,0,0-.89.32,1.05,1.05,0,0,0-.28.59h1.34a.38.38,0,0,1,.39.39v.28a.39.39,0,0,1-.11.27.41.41,0,0,1-.28.11H10.8v.09h1.39a.37.37,0,0,1,.27.11.37.37,0,0,1,.12.27v.28a.38.38,0,0,1-.39.39H10.85a1.06,1.06,0,0,0,.28.58A1.16,1.16,0,0,0,12,14a1.62,1.62,0,0,0,.83-.19.88.88,0,0,0,.41-.6.51.51,0,0,1,.15-.25.37.37,0,0,1,.25-.09h.44a.44.44,0,0,1,.26.1.35.35,0,0,1,.1.29,1.51,1.51,0,0,1-.17.66,1.75,1.75,0,0,1-.47.59,2.5,2.5,0,0,1-.76.42A3.3,3.3,0,0,1,12,15.08Zm-2-2a2.45,2.45,0,0,0,.2.63,1.57,1.57,0,0,0,.65.7,2.29,2.29,0,0,0,1.14.25,2.77,2.77,0,0,0,.91-.13,1.73,1.73,0,0,0,.63-.35,1.34,1.34,0,0,0,.37-.46,1.19,1.19,0,0,0,.13-.47h-.4s0,0,0,0a1.33,1.33,0,0,1-.6.85,2.06,2.06,0,0,1-1,.24,1.44,1.44,0,0,1-1.58-1.3Zm.77-.4h1.39v-.27H10.8v.26Zm-.81,0h.41v-.26H10v.25Zm-.69,0h.29v-.25h-.3Zm.69-.65h.41V12H10Zm.81-.49h1.39V11.3H10.8v.25Zm-.81,0h.41v-.25H10v.25Zm-.69,0h.29v-.25h-.3Zm.73-.65h.41a1.57,1.57,0,0,1,.4-.87A1.61,1.61,0,0,1,12,9.6a2.06,2.06,0,0,1,1,.24,1.36,1.36,0,0,1,.6.85.12.12,0,0,0,0,.05h.43a2.48,2.48,0,0,0-.17-.47,1.45,1.45,0,0,0-.37-.46,1.89,1.89,0,0,0-.63-.35A3.07,3.07,0,0,0,12,9.32a2.4,2.4,0,0,0-1.14.25,1.63,1.63,0,0,0-.65.7A2.52,2.52,0,0,0,10,10.91Z" })] })),
    adjustments: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21.51,20.2H20.44a.88.88,0,0,1,0-1.75h1.07a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M15.09,20.2H2.28a.88.88,0,0,1,0-1.75H15.09a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M17.77,22.88a3.55,3.55,0,1,1,3.55-3.55A3.56,3.56,0,0,1,17.77,22.88Zm0-5.35a1.8,1.8,0,1,0,1.8,1.8A1.8,1.8,0,0,0,17.77,17.53Z" }), jsxRuntimeExports.jsx("path", { d: "M3.35,12.88H2.28a.88.88,0,0,1,0-1.75H3.35a.88.88,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M21.51,12.88H8.69a.88.88,0,0,1,0-1.75H21.51a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M6,15.55A3.55,3.55,0,1,1,9.57,12,3.55,3.55,0,0,1,6,15.55ZM6,10.2A1.8,1.8,0,1,0,7.82,12,1.8,1.8,0,0,0,6,10.2Z" }), jsxRuntimeExports.jsx("path", { d: "M21.72,5.55H20.65a.88.88,0,0,1,0-1.75h1.07a.88.88,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M15.31,5.55H2.49a.88.88,0,1,1,0-1.75H15.31a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M18,8.22a3.55,3.55,0,1,1,3.54-3.55A3.55,3.55,0,0,1,18,8.22Zm0-5.34a1.8,1.8,0,1,0,1.79,1.79A1.8,1.8,0,0,0,18,2.88Z" })] })),
    dashboard: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20,22.58H16.27a2.93,2.93,0,0,1-2.92-2.93V16a2.93,2.93,0,0,1,2.92-2.93H20A2.93,2.93,0,0,1,22.88,16v3.67A2.94,2.94,0,0,1,20,22.58ZM16.27,14.8A1.18,1.18,0,0,0,15.1,16v3.67a1.18,1.18,0,0,0,1.17,1.18H20a1.18,1.18,0,0,0,1.18-1.18V16A1.18,1.18,0,0,0,20,14.8Z" }), jsxRuntimeExports.jsx("path", { d: "M7.73,22.58H4.05a2.93,2.93,0,0,1-2.92-2.93V16a2.93,2.93,0,0,1,2.92-2.93H7.73A2.93,2.93,0,0,1,10.65,16v3.67A2.93,2.93,0,0,1,7.73,22.58ZM4.05,14.8A1.17,1.17,0,0,0,2.88,16v3.67a1.17,1.17,0,0,0,1.17,1.18H7.73A1.18,1.18,0,0,0,8.9,19.65V16A1.18,1.18,0,0,0,7.73,14.8Z" }), jsxRuntimeExports.jsx("path", { d: "M19.94,11H4.05A2.93,2.93,0,0,1,1.13,8V4.35A2.93,2.93,0,0,1,4.05,1.42H19.94a2.94,2.94,0,0,1,2.93,2.93V8A2.93,2.93,0,0,1,19.94,11ZM4.05,3.17A1.17,1.17,0,0,0,2.88,4.35V8A1.17,1.17,0,0,0,4.05,9.2H19.94A1.18,1.18,0,0,0,21.12,8V4.35a1.18,1.18,0,0,0-1.18-1.18Z" })] })),
    settings: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.70654,3.75a.102.102,0,0,1,.10083.085l.14722.87244a1.74985,1.74985,0,0,0,1.14257,1.35888,6.33373,6.33373,0,0,1,.59253.24427,1.74977,1.74977,0,0,0,1.76294-.15674l.80274-.57373,1.1123,1.11218a.10069.10069,0,0,1,.0105.13025l-.52246.73108a1.75005,1.75005,0,0,0-.15991,1.762c.085.18091.16259.36841.23046.557a1.74949,1.74949,0,0,0,1.35425,1.13318l.96924.16967v1.57019a.09726.09726,0,0,1-.0813.09644l-.89062.14844a1.74976,1.74976,0,0,0-1.35913,1.134c-.06592.18335-.14356.36975-.23047.554a1.75021,1.75021,0,0,0,.15722,1.76184l.52613.73852a.09905.09905,0,0,1-.01074.12769l-1.11353,1.114-.801-.57251a1.75005,1.75005,0,0,0-1.76318-.15954c-.1792.08435-.36621.16174-.55591.23a1.75017,1.75017,0,0,0-1.13305,1.354l-.15162.8938a.10049.10049,0,0,1-.09912.08374H11.25024a.09721.09721,0,0,1-.09619-.0813l-.14844-.89172a1.74975,1.74975,0,0,0-1.13428-1.35938c-.17944-.06457-.35424-.13623-.52246-.21448a1.75006,1.75006,0,0,0-1.75244.16114l-.81665.58325L5.66137,17.32876a.08966.08966,0,0,1-.00952-.11608l.5188-.72156a1.74982,1.74982,0,0,0,.15674-1.77881c-.08618-.17957-.16406-.36438-.23145-.54919a1.74987,1.74987,0,0,0-1.34985-1.12549l-.9126-.15564A.10017.10017,0,0,1,3.75,12.783V11.29593a.1004.1004,0,0,1,.084-.09912l.87353-.14746A1.74979,1.74979,0,0,0,6.06713,9.9042C6.134,9.7139,6.21,9.527,6.293,9.34878a1.74951,1.74951,0,0,0-.16113-1.75244l-.53564-.75281a.097.097,0,0,1,.01025-.12536l1.11328-1.1189.792.57044a1.75,1.75,0,0,0,1.77979.15771c.17847-.08569.36352-.16369.55005-.23181a1.75029,1.75029,0,0,0,1.12451-1.34888l.15552-.91015A.10355.10355,0,0,1,11.22387,3.75h1.48267m0-1.75H11.22387A1.85388,1.85388,0,0,0,9.39648,3.542L9.241,4.45193c-.23926.08741-.47534.18677-.70654.29773l-.792-.57043a1.7479,1.7479,0,0,0-2.25635.18823l-1.115,1.11121a1.84747,1.84747,0,0,0-.20068,2.37964l.53564.75268c-.10767.23157-.20435.46973-.2898.71277l-.87353.14746A1.85056,1.85056,0,0,0,2,11.29593V12.783a1.8505,1.8505,0,0,0,1.5393,1.82409l.9126.15564c.0874.23963.187.47583.29785.70679l-.5188.72156a1.84012,1.84012,0,0,0,.19287,2.375l1.11841,1.11877a1.74273,1.74273,0,0,0,2.24878.18885l.82007-.58362c.21533.1001.43872.19177.66821.27429l.14844.89172A1.8478,1.8478,0,0,0,11.25024,22H12.7434a1.85055,1.85055,0,0,0,1.82447-1.54126l.15161-.89356c.2417-.08691.47876-.18493.70923-.29345l.801.57251a1.748,1.748,0,0,0,2.25537-.18689l1.11328-1.11353a1.84906,1.84906,0,0,0,.19849-2.38025l-.52588-.7384c.11133-.236.20972-.4729.29443-.7085l.89063-.14843a1.84771,1.84771,0,0,0,1.5437-1.82264V11.17544a1.7276,1.7276,0,0,0-1.45141-1.72961L19.573,9.28042c-.08691-.24169-.18506-.47876-.29345-.70935L19.802,7.84a1.85073,1.85073,0,0,0-.19678-2.385l-1.1123-1.11231A1.74212,1.74212,0,0,0,16.24414,4.154l-.80664.57446a8.04979,8.04979,0,0,0-.75733-.31213L14.533,3.54385A1.85225,1.85225,0,0,0,12.70654,2Z" }), jsxRuntimeExports.jsx("path", { d: "M12.06616,16.76565h-.06641A4.76611,4.76611,0,1,1,16.76635,12a4.72628,4.72628,0,0,1-4.67968,4.76562Zm-.06641-7.78222a3.01611,3.01611,0,0,0,0,6.03222l.03223.001-.03223.874.04492-.874a2.979,2.979,0,0,0,2.97168-3.00781A3.02224,3.02224,0,0,0,11.99975,8.98343Z" })] })),
    settingsRed: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.25,11.98v.77s-.03,.09-.08,.1l-.89,.15c-.62,.1-1.14,.54-1.36,1.13-.07,.18-.14,.37-.23,.55-.27,.57-.21,1.25,.16,1.76l.53,.74s.02,.09-.01,.13l-1.11,1.11-.8-.57c-.3-.22-.66-.33-1.02-.33-.25,0-.51,.05-.75,.17-.18,.08-.37,.16-.56,.23-.59,.21-1.03,.73-1.13,1.35l-.15,.89s-.05,.08-.1,.08h-1.49s-.09-.03-.1-.08l-.15-.89c-.1-.62-.54-1.14-1.13-1.36-.18-.06-.35-.14-.52-.22-.23-.11-.49-.16-.74-.16-.36,0-.71,.11-1.02,.32l-.82,.58-1.12-1.12s-.04-.08,0-.12l.52-.72c.37-.52,.43-1.2,.16-1.78-.09-.18-.16-.36-.23-.55-.22-.59-.73-1.02-1.35-1.13l-.91-.16s-.08-.05-.08-.1v-1.49s.04-.09,.08-.1l.87-.15c.63-.11,1.15-.54,1.36-1.15,.07-.19,.14-.38,.23-.56,.26-.57,.2-1.24-.16-1.75l-.54-.75s-.02-.09,.01-.13l1.11-1.12,.79,.57c.3,.22,.66,.33,1.02,.33,.26,0,.52-.06,.76-.17,.18-.09,.36-.16,.55-.23,.59-.22,1.02-.73,1.13-1.35l.16-.91c0-.05,.05-.09,.1-.09h.84c.36-.61,.81-1.15,1.36-1.6-.22-.09-.46-.15-.71-.15h-1.48c-.9,0-1.68,.65-1.83,1.54l-.16,.91c-.24,.09-.48,.19-.71,.3l-.79-.57c-.3-.21-.65-.33-1.02-.33-.47,0-.91,.18-1.24,.51l-1.11,1.11c-.64,.64-.72,1.64-.2,2.38l.54,.75c-.11,.23-.2,.47-.29,.71l-.87,.15c-.89,.15-1.54,.92-1.54,1.82v1.49c0,.9,.65,1.67,1.54,1.82l.91,.16c.09,.24,.19,.48,.3,.71l-.52,.72c-.53,.73-.44,1.74,.19,2.38l1.12,1.12c.33,.33,.77,.51,1.24,.51,.37,0,.72-.11,1.01-.32l.82-.58c.22,.1,.44,.19,.67,.27l.15,.89c.15,.89,.92,1.54,1.82,1.54h1.49c.9,0,1.67-.65,1.82-1.54l.15-.89c.24-.09,.48-.19,.71-.29l.8,.57c.3,.21,.65,.33,1.02,.33,.47,0,.91-.18,1.24-.51l1.11-1.11c.64-.64,.72-1.64,.2-2.38l-.53-.74c.11-.24,.21-.47,.29-.71l.89-.15c.89-.15,1.54-.92,1.54-1.82v-1.57c0-.21-.04-.41-.1-.6-.46,.56-1.02,1.03-1.65,1.4Z" }), jsxRuntimeExports.jsx("path", { d: "M14.99,12.35c-.16,1.48-1.39,2.65-2.91,2.67h-.08c-1.66,0-3.02-1.35-3.02-3.02,0-1.55,1.18-2.82,2.69-2.98-.22-.54-.36-1.11-.41-1.71-2.28,.36-4.03,2.32-4.03,4.69,0,2.63,2.14,4.77,4.77,4.77h.09c2.34-.02,4.26-1.76,4.61-4-.6-.05-1.18-.2-1.71-.41Z" }), jsxRuntimeExports.jsx("circle", { cx: "17.29", cy: "6.69", r: "4.26", fill: "#f44336" })] })),
    archive: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.4,22.87H5.6a2.46,2.46,0,0,1-2.46-2.46V10.06A2.46,2.46,0,0,1,5.6,7.6h.63A1.63,1.63,0,0,1,7.86,9.23V9.4a.36.36,0,0,0,.36.35h7.56a.36.36,0,0,0,.36-.35V9.23A1.63,1.63,0,0,1,17.77,7.6h.63a2.46,2.46,0,0,1,2.46,2.46V20.41A2.46,2.46,0,0,1,18.4,22.87ZM5.6,9.35a.71.71,0,0,0-.71.71V20.41a.71.71,0,0,0,.71.71H18.4a.71.71,0,0,0,.71-.71V10.06a.71.71,0,0,0-.71-.71l-.51.05a2.11,2.11,0,0,1-2.11,2.1H8.22A2.11,2.11,0,0,1,6.11,9.4V9.35Z" }), jsxRuntimeExports.jsx("path", { d: "M17,16.69H7.27a.88.88,0,1,1,0-1.75H17a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M18.15,7.29a.87.87,0,0,1-.87-.87.22.22,0,0,0-.21-.21H6.93a.22.22,0,0,0-.21.21A.88.88,0,0,1,5,6.42a2,2,0,0,1,2-2H17.07a2,2,0,0,1,2,2A.88.88,0,0,1,18.15,7.29Z" }), jsxRuntimeExports.jsx("path", { d: "M17,4a.87.87,0,0,1-.88-.88.22.22,0,0,0-.21-.21H8.11a.22.22,0,0,0-.21.21.88.88,0,1,1-1.75,0,2,2,0,0,1,2-2h7.78a2,2,0,0,1,2,2A.87.87,0,0,1,17,4Z" })] })),
    cloud: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M17.32,20.07H6.68A5.57,5.57,0,0,1,5,9.21.32.32,0,0,0,5.17,9,7.18,7.18,0,0,1,12,3.93h0a7.4,7.4,0,0,1,1.33.13A7.12,7.12,0,0,1,18.83,9a.32.32,0,0,0,.21.21,5.57,5.57,0,0,1-1.72,10.86ZM12,5.68A5.39,5.39,0,0,0,6.85,9.51,2.12,2.12,0,0,1,5.5,10.88a3.82,3.82,0,0,0,1.18,7.44H17.32a3.81,3.81,0,0,0,1.18-7.44,2.12,2.12,0,0,1-1.35-1.37A5.36,5.36,0,0,0,13,5.78a4.87,4.87,0,0,0-1-.1Z" }) })),
    cloudOffline: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.04,9.21c-.1-.03-.18-.11-.21-.21-.77-2.55-2.87-4.45-5.49-4.95-.43-.08-.88-.13-1.33-.13h-.01c-.84,0-1.65,.16-2.41,.44l.73,1.59c.53-.18,1.1-.27,1.67-.27h0c.34,0,.68,.03,1.01,.1,1.97,.38,3.56,1.81,4.14,3.73,.19,.64,.7,1.15,1.34,1.37,1.57,.51,2.62,1.97,2.63,3.62,0,2.1-1.71,3.82-3.81,3.83h-1.26l.81,1.75h.45c3.07,0,5.56-2.51,5.56-5.58,0-2.41-1.55-4.53-3.83-5.28Z" }), jsxRuntimeExports.jsx("path", { d: "M7.29,3.56c-.2-.44-.72-.63-1.16-.43s-.63,.72-.43,1.16l.97,2.09c-.67,.75-1.2,1.62-1.5,2.62-.03,.09-.11,.17-.21,.2-2.63,.86-4.24,3.56-3.74,6.28,.48,2.65,2.78,4.57,5.47,4.58h6.33l.89,1.93c.15,.32,.46,.51,.79,.51,.12,0,.25-.03,.37-.08,.44-.2,.63-.72,.43-1.16L7.29,3.56Zm-.61,14.76c-1.84,0-3.42-1.32-3.75-3.14-.34-1.87,.76-3.72,2.56-4.31,.65-.21,1.15-.72,1.35-1.37,.15-.49,.37-.94,.64-1.36l4.71,10.16H6.68Z" })] })),
    cloudWithDollar: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.32,20.07H6.68c-2.69,0-4.99-1.93-5.47-4.58-.49-2.72,1.12-5.42,3.74-6.28,.1-.03,.19-.11,.21-.2,.9-2.99,3.7-5.08,6.83-5.08h.01c.45,0,.89,.04,1.33,.13,2.62,.5,4.72,2.4,5.49,4.95,.03,.09,.11,.17,.21,.21,2.29,.75,3.83,2.87,3.83,5.28,0,3.07-2.49,5.57-5.56,5.58ZM12,5.68c-2.36,0-4.47,1.57-5.15,3.83-.19,.64-.7,1.15-1.35,1.37-1.8,.59-2.9,2.44-2.56,4.31,.33,1.81,1.91,3.13,3.75,3.14h10.63c2.1,0,3.81-1.72,3.81-3.83,0-1.65-1.06-3.11-2.63-3.62-.65-.21-1.15-.72-1.34-1.37-.58-1.92-2.17-3.35-4.14-3.73-.33-.06-.67-.09-1.01-.1h0Z" }), jsxRuntimeExports.jsx("path", { d: "M11.64,16.92c-.07,0-.14-.02-.18-.07-.05-.05-.07-.11-.07-.18v-.7c-.51-.06-.94-.19-1.29-.38-.35-.19-.61-.43-.78-.71s-.27-.57-.28-.87c0-.05,.02-.1,.07-.15,.04-.04,.1-.07,.16-.07h1.09c.09,0,.16,.02,.2,.06,.05,.04,.09,.08,.13,.14,.05,.12,.12,.23,.23,.34,.1,.11,.25,.2,.43,.27s.41,.11,.68,.11c.44,0,.77-.07,.99-.21,.22-.14,.33-.34,.33-.58,0-.18-.06-.32-.18-.43-.12-.11-.3-.21-.56-.29-.25-.09-.59-.18-1.02-.28-.51-.11-.94-.25-1.29-.42-.35-.17-.62-.4-.8-.67s-.27-.61-.27-1.02c0-.54,.19-.99,.57-1.36,.38-.37,.91-.6,1.59-.69v-.7c0-.07,.02-.14,.07-.18,.05-.05,.11-.07,.18-.07h.72c.07,0,.13,.02,.17,.07s.07,.11,.07,.18v.72c.47,.07,.86,.21,1.17,.42,.31,.21,.56,.44,.72,.7s.25,.51,.26,.76c0,.05-.02,.1-.06,.15-.04,.04-.09,.07-.15,.07h-1.15c-.06,0-.12-.01-.17-.04-.05-.03-.1-.07-.14-.14-.03-.18-.15-.33-.36-.46-.2-.13-.46-.2-.77-.2-.33,0-.6,.06-.79,.18-.2,.12-.29,.31-.29,.56,0,.16,.05,.3,.15,.41s.27,.21,.5,.29c.23,.08,.54,.18,.93,.28,.6,.12,1.08,.27,1.45,.44,.37,.17,.64,.39,.82,.66,.17,.27,.26,.6,.26,1.01s-.1,.74-.3,1.04c-.2,.3-.47,.54-.83,.73s-.77,.3-1.25,.37v.7c0,.07-.02,.14-.07,.18-.05,.05-.1,.07-.17,.07h-.72Z" })] })),
    cloudOnline: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.32,20.07H6.68c-2.69,0-4.99-1.93-5.47-4.58-.49-2.72,1.12-5.42,3.74-6.28,.1-.03,.19-.11,.21-.2,.9-2.99,3.7-5.08,6.83-5.08h.01c.45,0,.89,.04,1.33,.13,2.62,.5,4.72,2.4,5.49,4.95,.03,.09,.11,.17,.21,.21,2.29,.75,3.83,2.87,3.83,5.28,0,3.07-2.49,5.57-5.56,5.58ZM12,5.68c-2.36,0-4.47,1.57-5.15,3.83-.19,.64-.7,1.15-1.35,1.37-1.8,.59-2.9,2.44-2.56,4.31,.33,1.81,1.91,3.13,3.75,3.14h10.63c2.1,0,3.81-1.72,3.81-3.83,0-1.65-1.06-3.11-2.63-3.62-.65-.21-1.15-.72-1.34-1.37-.58-1.92-2.17-3.35-4.14-3.73-.33-.06-.67-.09-1.01-.1h0Z" }), jsxRuntimeExports.jsx("path", { d: "M10.46,16.24c-.22,0-.45-.08-.62-.26l-1.91-1.91c-.34-.34-.34-.9,0-1.24s.9-.34,1.24,0l1.29,1.29,3.66-3.66c.34-.34,.9-.34,1.24,0,.34,.34,.34,.9,0,1.24l-4.28,4.28c-.17,.17-.4,.26-.62,.26Z" })] })),
    addCloud: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.32,20.07H6.68c-2.69,0-4.99-1.93-5.47-4.58-.49-2.72,1.12-5.42,3.74-6.28,.1-.03,.19-.11,.21-.2,.9-2.99,3.7-5.08,6.83-5.08h.01c.45,0,.89,.04,1.33,.13,2.62,.5,4.72,2.4,5.49,4.95,.03,.09,.11,.17,.21,.21,2.29,.75,3.83,2.87,3.83,5.28,0,3.07-2.49,5.57-5.56,5.58ZM12,5.68c-2.36,0-4.47,1.57-5.15,3.83-.19,.64-.7,1.15-1.35,1.37-1.8,.59-2.9,2.44-2.56,4.31,.33,1.81,1.91,3.13,3.75,3.14h10.63c2.1,0,3.81-1.72,3.81-3.83,0-1.65-1.06-3.11-2.63-3.62-.65-.21-1.15-.72-1.34-1.37-.58-1.92-2.17-3.35-4.14-3.73-.33-.06-.67-.09-1.01-.1h0Z" }), jsxRuntimeExports.jsx("path", { d: "M14,11.97h-1.12v-1.12c0-.48-.39-.88-.88-.88s-.88,.39-.88,.88v1.12h-1.12c-.48,0-.88,.39-.88,.88s.39,.88,.88,.88h1.12v1.12c0,.48,.39,.88,.88,.88s.88-.39,.88-.88v-1.12h1.12c.48,0,.88-.39,.88-.88s-.39-.88-.88-.88Z" })] })),
    cloudQuestionMark: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.32,20.07H6.68c-2.69,0-4.99-1.93-5.47-4.58-.49-2.72,1.12-5.42,3.74-6.28,.1-.03,.19-.11,.21-.2,.9-2.99,3.7-5.08,6.83-5.08h.01c.45,0,.89,.04,1.33,.13,2.62,.5,4.72,2.4,5.49,4.95,.03,.09,.11,.17,.21,.21,2.29,.75,3.83,2.87,3.83,5.28,0,3.07-2.49,5.57-5.56,5.58ZM12,5.68c-2.36,0-4.47,1.57-5.15,3.83-.19,.64-.7,1.15-1.35,1.37-1.8,.59-2.9,2.44-2.56,4.31,.33,1.81,1.91,3.13,3.75,3.14h10.63c2.1,0,3.81-1.72,3.81-3.83,0-1.65-1.06-3.11-2.63-3.62-.65-.21-1.15-.72-1.34-1.37-.58-1.92-2.17-3.35-4.14-3.73-.33-.06-.67-.09-1.01-.1h0Z" }), jsxRuntimeExports.jsx("path", { d: "M11.25,14.12c-.05,0-.1-.02-.14-.05-.04-.04-.06-.08-.06-.14v-.23c.04-.23,.12-.45,.24-.64,.12-.19,.25-.36,.41-.52,.16-.16,.31-.31,.46-.45,.15-.14,.27-.28,.37-.41s.16-.28,.17-.42c.01-.15-.02-.27-.09-.37-.07-.1-.17-.18-.29-.23-.12-.05-.26-.08-.39-.08-.27,0-.48,.06-.63,.19s-.26,.31-.33,.56c-.02,.07-.05,.13-.1,.17-.05,.04-.12,.07-.21,.07h-1.22c-.07,0-.12-.03-.17-.08-.05-.05-.07-.11-.07-.19,0-.27,.07-.53,.2-.78,.12-.25,.3-.49,.54-.7,.24-.21,.53-.38,.89-.5s.76-.19,1.23-.19c.5,0,.92,.06,1.25,.18,.33,.12,.59,.28,.78,.47,.19,.19,.33,.4,.4,.62,.08,.22,.12,.42,.11,.61-.01,.24-.06,.46-.15,.65-.09,.19-.19,.37-.33,.54-.13,.16-.27,.32-.41,.47-.14,.15-.28,.3-.39,.45-.12,.15-.21,.31-.27,.47-.01,.05-.03,.09-.04,.14-.01,.04-.02,.09-.03,.13-.04,.09-.08,.15-.12,.2s-.1,.06-.19,.06h-1.4Zm.02,2.12c-.07,0-.13-.02-.18-.07-.05-.05-.07-.11-.07-.18v-1.14c0-.07,.02-.12,.07-.17,.05-.05,.11-.07,.18-.07h1.28c.07,0,.14,.02,.19,.07s.07,.11,.07,.17v1.14c0,.07-.02,.13-.07,.18s-.11,.07-.19,.07h-1.28Z" })] })),
    cloudSettings: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m12,22.32c-.57,0-1.14-.08-1.71-.24-.38-.1-.64-.45-.64-.84v-.66c-.2-.1-.4-.21-.59-.34l-.57.33c-.34.2-.77.14-1.05-.14-.82-.81-1.41-1.84-1.71-2.96-.1-.38.07-.78.41-.98l.57-.33c0-.12-.01-.23-.01-.34s0-.23.01-.34l-.57-.33c-.34-.2-.51-.6-.41-.98.3-1.13.89-2.15,1.71-2.96.28-.28.71-.33,1.05-.14l.57.33c.19-.13.39-.24.59-.34v-.66c0-.39.26-.74.64-.84,1.15-.31,2.29-.31,3.42,0,.38.1.64.45.64.84v.66c.21.1.4.21.59.34l.57-.33c.34-.2.77-.14,1.05.14.82.81,1.41,1.84,1.71,2.96.1.38-.07.78-.41.98l-.57.33c0,.12.01.23.01.34s0,.23-.01.34l.57.33c.34.2.51.6.41.98-.3,1.13-.89,2.15-1.71,2.96-.28.28-.71.33-1.05.14l-.57-.33c-.19.13-.39.24-.59.34v.66c0,.39-.26.74-.64.84-.57.16-1.15.24-1.71.24Zm-.61-1.79c.41.05.8.06,1.21,0v-.53c0-.37.23-.7.58-.83.42-.15.79-.36,1.12-.65.28-.24.69-.28,1.01-.09l.45.26c.25-.32.45-.67.6-1.05l-.45-.26c-.32-.19-.49-.55-.42-.92.04-.22.06-.44.06-.65s-.02-.43-.06-.65c-.07-.37.1-.73.42-.92l.45-.26c-.16-.37-.36-.73-.6-1.05l-.45.26c-.32.18-.72.15-1.01-.09-.33-.28-.71-.5-1.12-.65-.35-.12-.58-.45-.58-.83v-.53c-.41-.05-.8-.06-1.21,0v.53c0,.37-.23.7-.58.83-.42.15-.8.37-1.13.65-.28.24-.68.28-1.01.09l-.45-.26c-.24.32-.45.67-.6,1.05l.45.26c.32.19.49.55.42.92-.04.23-.06.44-.06.65s.02.43.06.65c.07.37-.1.73-.42.92l-.45.26c.16.37.36.73.6,1.05l.45-.26c.32-.18.72-.15,1.01.09.33.29.71.5,1.12.65.35.12.58.45.58.83v.53Z" }), jsxRuntimeExports.jsx("path", { d: "m12,18.34c-1.39,0-2.52-1.13-2.52-2.52s1.13-2.52,2.52-2.52,2.52,1.13,2.52,2.52-1.13,2.52-2.52,2.52Zm0-3.29c-.42,0-.77.34-.77.77s.34.77.77.77.77-.34.77-.77-.34-.77-.77-.77Z" }), jsxRuntimeExports.jsx("path", { d: "m20.12,15.87c-.23,0-.46-.09-.63-.27-.33-.35-.32-.9.03-1.24.72-.68,1.11-1.61,1.11-2.6,0-1.55-.99-2.92-2.47-3.4-.63-.21-1.12-.7-1.31-1.33-.55-1.81-2.04-3.16-3.9-3.51-.31-.06-.63-.09-.95-.09h0c-2.22,0-4.21,1.48-4.85,3.61-.19.62-.68,1.12-1.31,1.33-1.69.55-2.72,2.29-2.4,4.04.11.62.39,1.2.79,1.68.31.37.27.92-.1,1.23-.37.31-.92.27-1.23-.1-.61-.71-1.01-1.58-1.18-2.5-.47-2.61,1.07-5.19,3.58-6.02.09-.03.15-.09.18-.16.86-2.86,3.54-4.85,6.53-4.85.43-.02.86.04,1.28.12,2.5.48,4.51,2.29,5.25,4.73.02.08.09.14.17.17,2.19.72,3.67,2.75,3.67,5.06,0,1.47-.58,2.85-1.65,3.87-.17.16-.39.24-.6.24Z" })] })),
    compare: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M22.55,14.2l-3.92-9.25c-.05-.11-.1-.22-.17-.32-.09-.14-.23-.21-.32-.25-.12-.05-.26-.07-.42-.06l-3.31,.32c-.22,.02-.45,.04-.67,.06-.03,0-.06,0-.09,0-.42-.7-1.02-1.02-1.83-.98-.79,.1-1.33,.54-1.61,1.31l-3.3,.31c-.15,.01-.29,.03-.44,.04-.05,0-.09,0-.14,.01-.12,.01-.25,.02-.37,.05-.14,.04-.26,.11-.38,.23-.06,.07-.12,.16-.17,.26L1.51,14.99c-.05,.11-.1,.23-.12,.39,0,.04-.01,.08-.01,.13,0,.15,0,.3,.02,.45,.04,.43,.14,.86,.31,1.28,.69,1.73,2.33,2.92,4.19,3.02,.09,0,.18,0,.27,0,.4,0,.79-.05,1.17-.15,.81-.21,1.51-.6,2.09-1.15,.97-.93,1.48-2.09,1.51-3.43,0-.14-.03-.28-.08-.41L7.3,6.89l3.11-.3c.43,.63,1.02,.92,1.77,.87,.73-.1,1.25-.5,1.56-1.19l2.86-.27-3.48,8.21s-.03,.08-.04,.14c0,.04-.02,.07-.02,.13,0,.03-.01,.07,0,.11v.08c0,.13,.01,.26,.03,.39,.03,.35,.11,.71,.23,1.06,.32,.92,.88,1.68,1.65,2.26,.73,.56,1.58,.88,2.51,.95,.27,.02,.53,.02,.81,0,.34-.03,.66-.1,.97-.19,.86-.27,1.59-.74,2.17-1.41,.77-.88,1.17-1.93,1.2-3.11,0-.14-.02-.28-.08-.41Zm-7.54-.43l2.83-6.67,2.83,6.66c-.88,0-4.79,.01-5.65,0Zm5.95,1.57c-.28,1.23-1.44,2.45-3.12,2.45-.04,0-.08,0-.12,0-1.63-.06-2.75-1.28-3.01-2.44h6.25ZM11.68,5.6c0-.17,.14-.31,.32-.31h0c.18,0,.31,.14,.31,.31s-.14,.31-.31,.31h0c-.08,0-.16-.03-.22-.09s-.09-.14-.09-.22ZM3.04,16.26h6.25c-.27,1.21-1.46,2.43-3.09,2.45h-.03c-1.65,0-2.85-1.21-3.12-2.45Zm.31-1.57l2.82-6.51,2.82,6.51H3.34Z" }) })),
    upload: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m16.48,22.16H7.52c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h8.96c.48,0,.88.39.88.88s-.39.88-.88.88Zm-4.48-2.77c-.48,0-.88-.39-.88-.88v-7.66l-1.87,1.87c-.34.34-.9.34-1.24,0-.34-.34-.34-.9,0-1.24l3.36-3.36h0s0,0,0,0t0,0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0c0,0,0,0,0,0h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0t0,0s0,0,0,0c0,0,0,0,0,0h0s0,0,0,0h0s0,0,0,0c0,0,0,0,0,0h0c.17-.15.37-.22.58-.22h.02c.2,0,.4.08.56.21h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0h0l3.36,3.36c.34.34.34.9,0,1.24-.34.34-.9.34-1.24,0l-1.87-1.87v7.66c0,.48-.39.88-.88.88Zm5.03-2.2h-2.48c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h2.47c.95,0,1.84-.37,2.52-1.05.67-.67,1.04-1.57,1.04-2.52,0-1.54-.99-2.9-2.45-3.38-.63-.21-1.12-.7-1.3-1.32-.54-1.8-2.03-3.14-3.88-3.5-.31-.06-.63-.09-.95-.09h0c-2.21,0-4.19,1.48-4.83,3.59-.19.62-.68,1.12-1.3,1.32-1.68.55-2.71,2.28-2.39,4.02.31,1.69,1.78,2.93,3.5,2.93h2.6c.48,0,.88.39.88.88s-.39.88-.88.88h-2.61c-2.57,0-4.76-1.84-5.22-4.37-.47-2.6,1.07-5.18,3.57-6,.08-.03.15-.09.17-.16.85-2.85,3.53-4.84,6.51-4.84h0c.42,0,.85.04,1.27.12,2.5.48,4.5,2.28,5.23,4.71.02.07.09.14.17.17,2.18.71,3.65,2.74,3.66,5.04,0,1.42-.55,2.75-1.55,3.76-1,1-2.33,1.56-3.75,1.56Z" }) })),
    costs: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.41434,12.91884a.87481.87481,0,0,1-.875-.875A6.53421,6.53421,0,0,0,12.012,5.51649a.875.875,0,0,1,0-1.75,8.28633,8.28633,0,0,1,8.27735,8.27735A.87481.87481,0,0,1,19.41434,12.91884Z" }), jsxRuntimeExports.jsx("path", { d: "M12.012,20.32118a8.28632,8.28632,0,0,1-8.27734-8.27734.875.875,0,1,1,1.75,0A6.53419,6.53419,0,0,0,12.012,18.57118a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M12.26018,15.70819a.19564.19564,0,0,0,.14322-.05827.20789.20789,0,0,0,.05827-.15112v-.5793a3.10363,3.10363,0,0,0,1.03611-.30224,1.74664,1.74664,0,0,0,.68449-.6,1.54217,1.54217,0,0,0,.243-.8603,1.5153,1.5153,0,0,0-.21334-.83511,1.53192,1.53192,0,0,0-.6756-.54126,5.75948,5.75948,0,0,0-1.20007-.361q-.48743-.12594-.77239-.23063a1.03709,1.03709,0,0,1-.41187-.24347.486.486,0,0,1-.12544-.33977.50658.50658,0,0,1,.243-.46176,1.236,1.236,0,0,1,.65485-.15112,1.14839,1.14839,0,0,1,.63806.16347.60056.60056,0,0,1,.29335.38224.3007.3007,0,0,0,.11754.11754.32115.32115,0,0,0,.14322.03358h.9482a.16287.16287,0,0,0,.12544-.05482.17383.17383,0,0,0,.05037-.12149,1.2223,1.2223,0,0,0-.21334-.62522,1.97213,1.97213,0,0,0-.59658-.57929,2.44047,2.44047,0,0,0-.96895-.34817V8.36456a.20708.20708,0,0,0-.05827-.15112.196.196,0,0,0-.14322-.05877h-.59559a.20206.20206,0,0,0-.21038.20989v.57929a2.2376,2.2376,0,0,0-1.31366.5704,1.62347,1.62347,0,0,0-.25088,1.96851,1.60751,1.60751,0,0,0,.65881.55361,4.62653,4.62653,0,0,0,1.06574.34867c.35261.08346.63312.162.8435.23458a1.35271,1.35271,0,0,1,.46126.24347.4569.4569,0,0,1,.14717.35261.54406.54406,0,0,1-.27261.47855,1.53027,1.53027,0,0,1-.81881.1763,1.56049,1.56049,0,0,1-.562-.0884.97966.97966,0,0,1-.35656-.22223.89066.89066,0,0,1-.18964-.277.55253.55253,0,0,0-.10865-.1131.2645.2645,0,0,0-.16791-.04642H9.69213a.17807.17807,0,0,0-.13038.05482.16633.16633,0,0,0-.05432.12149,1.44265,1.44265,0,0,0,.23507.722,1.75647,1.75647,0,0,0,.646.58325,2.86977,2.86977,0,0,0,1.06574.31458v.5793a.20129.20129,0,0,0,.21038.20939Z" }), jsxRuntimeExports.jsx("path", { d: "M18.04324,22.96571a4.83154,4.83154,0,1,1,4.832-4.83105A4.83709,4.83709,0,0,1,18.04324,22.96571Zm0-7.91308a3.08154,3.08154,0,1,0,3.082,3.082A3.0858,3.0858,0,0,0,18.04324,15.05263Z" }), jsxRuntimeExports.jsx("rect", { x: "16.16294", y: "17.89941", width: "3.76079", height: "0.4701", rx: "0.23505" }), jsxRuntimeExports.jsx("path", { d: "M19.68875,18.744h-3.291a.60986.60986,0,0,1,0-1.21972h3.291a.60986.60986,0,1,1,0,1.21972Z" }), jsxRuntimeExports.jsx("path", { d: "M5.95633,10.69716a4.83155,4.83155,0,1,1,4.832-4.832A4.8371,4.8371,0,0,1,5.95633,10.69716Zm0-7.91309a3.08155,3.08155,0,1,0,3.082,3.08106A3.08414,3.08414,0,0,0,5.95633,2.78407Z" }), jsxRuntimeExports.jsx("path", { d: "M6.19171,5.39544V4.22019a.235.235,0,0,0-.235-.235h0a.235.235,0,0,0-.23505.235V5.39544a.235.235,0,0,1-.23505.23505H4.31132a.235.235,0,0,0-.23505.23505h0a.235.235,0,0,0,.23505.23505H5.48656a.235.235,0,0,1,.23505.235V7.51088a.235.235,0,0,0,.23505.23505h0a.235.235,0,0,0,.235-.23505V6.33564a.235.235,0,0,1,.23505-.235H7.602a.23506.23506,0,0,0,.23505-.23505h0A.23506.23506,0,0,0,7.602,5.63049H6.42676A.235.235,0,0,1,6.19171,5.39544Z" }), jsxRuntimeExports.jsx("path", { d: "M5.95633,8.121A.61037.61037,0,0,1,5.347,7.51063V6.47548H4.3118a.60987.60987,0,1,1,0-1.21973H5.347V4.2206a.60987.60987,0,1,1,1.21973,0V5.25575H7.60184a.60987.60987,0,1,1,0,1.21973H6.56668V7.51063A.61058.61058,0,0,1,5.95633,8.121ZM5.87527,5.8661a.714.714,0,0,1,.082.08106.636.636,0,0,1,.08106-.08106.714.714,0,0,1-.08106-.082A.8123.8123,0,0,1,5.87527,5.8661Z" })] })),
    costSetup: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.95047,20.07119h-7.96a.875.875,0,0,1,0-1.75h7.96a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M6.07352,20.07119H4.95047a.875.875,0,1,1,0-1.75H6.07352a.875.875,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M8.53152,22.5292a3.333,3.333,0,1,1,3.334-3.333A3.33669,3.33669,0,0,1,8.53152,22.5292Zm0-4.916a1.583,1.583,0,1,0,1.584,1.583A1.58457,1.58457,0,0,0,8.53152,17.61319Z" }), jsxRuntimeExports.jsx("path", { d: "M12.00027,15.00967a6.769,6.769,0,1,1,6.76856-6.76953A6.7776,6.7776,0,0,1,12.00027,15.00967Zm0-11.78808a5.019,5.019,0,1,0,5.01856,5.01855A5.02464,5.02464,0,0,0,12.00027,3.22159Z" }), jsxRuntimeExports.jsx("path", { d: "M11.61356,12.30557a.20889.20889,0,0,1-.16211-.06836A.22233.22233,0,0,1,11.388,12.08V11.4501a3.00461,3.00461,0,0,1-1.15625-.34668,1.94825,1.94825,0,0,1-.69727-.63379,1.56665,1.56665,0,0,1-.25195-.7832.1817.1817,0,0,1,.05859-.13086A.18966.18966,0,0,1,9.48074,9.497h1.13379a.35364.35364,0,0,1,.19336.04492.49064.49064,0,0,1,.1211.11719,1.08672,1.08672,0,0,0,.20312.26074.94894.94894,0,0,0,.3418.20312,1.56626,1.56626,0,0,0,.52636.07617,1.53616,1.53616,0,0,0,.78809-.16211.49442.49442,0,0,0,.26465-.44042.42046.42046,0,0,0-.14356-.333,1.33853,1.33853,0,0,0-.46386-.22949,8.05214,8.05214,0,0,0-.85059-.21192,5.24188,5.24188,0,0,1-1.165-.373,1.78383,1.78383,0,0,1-.7334-.60351A1.62943,1.62943,0,0,1,9.44461,6.914a1.64208,1.64208,0,0,1,.51758-1.22363A2.4646,2.4646,0,0,1,11.388,5.06045V4.43057a.2173.2173,0,0,1,.22559-.22559h.74707a.224.224,0,0,1,.15722.06348.21147.21147,0,0,1,.06739.16211V5.078a2.73747,2.73747,0,0,1,1.04394.38672,2.11387,2.11387,0,0,1,.64356.63086,1.33748,1.33748,0,0,1,.22949.6748.18427.18427,0,0,1-.05371.12989.17612.17612,0,0,1-.13477.05859H13.12527a.371.371,0,0,1-.17089-.03613.329.329,0,0,1-.126-.11621.61341.61341,0,0,0-.28809-.34668,1.084,1.084,0,0,0-.59375-.14844,1.14041,1.14041,0,0,0-.61621.13965.46915.46915,0,0,0-.2207.42676.456.456,0,0,0,.12109.31542.97743.97743,0,0,0,.40528.23438,6.95324,6.95324,0,0,0,.77832.206,5.914,5.914,0,0,1,1.32324.38282,1.67224,1.67224,0,0,1,.73828.59375,1.84017,1.84017,0,0,1-.03223,1.84961,1.95022,1.95022,0,0,1-.74218.65722,3.24568,3.24568,0,0,1-1.11621.333V12.08a.23209.23209,0,0,1-.22461.22559Z" })] })),
    feedback: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.92,21.69a2.26,2.26,0,0,1-1.74-.82L8.12,18.35a.5.5,0,0,0-.39-.18H5a3.85,3.85,0,0,1-3.84-3.85V6.16A3.84,3.84,0,0,1,5,2.31H19a3.85,3.85,0,0,1,3.85,3.85v8.16A3.86,3.86,0,0,1,19,18.17H16.12a.5.5,0,0,0-.4.18l-2.05,2.51a2.22,2.22,0,0,1-1.74.83ZM5,4.06a2.1,2.1,0,0,0-2.09,2.1v8.16A2.1,2.1,0,0,0,5,16.42H7.73a2.26,2.26,0,0,1,1.74.82l2.06,2.52a.5.5,0,0,0,.39.18h0a.52.52,0,0,0,.4-.18h0l2-2.51a2.24,2.24,0,0,1,1.75-.83H19a2.11,2.11,0,0,0,2.1-2.1V6.16A2.11,2.11,0,0,0,19,4.06Z" }), jsxRuntimeExports.jsx("path", { d: "M15.31,8.16H13.84a.51.51,0,0,1-.51-.52V6.17a1,1,0,0,0-1-1h-.71a.67.67,0,0,0-.65.57L10.7,7.59a.42.42,0,0,1-.08.21l-1,1.45a.51.51,0,0,1-.43.23H7.88a.52.52,0,0,0-.52.52v3.61a.51.51,0,0,0,.52.51h6.44a2.32,2.32,0,0,0,2.32-2.32V9.48A1.32,1.32,0,0,0,15.31,8.16Zm-6,4.65a.67.67,0,0,1-.66.66h0A.67.67,0,0,1,8,12.81v-2a.67.67,0,0,1,.66-.66h0a.67.67,0,0,1,.66.66Zm6.64-1a1.66,1.66,0,0,1-1.66,1.66H10.53a.52.52,0,0,1-.52-.52V10.07a.52.52,0,0,1,.09-.29L11.26,8a.49.49,0,0,0,.08-.21l.22-1.55a.52.52,0,0,1,.51-.44h.26a.33.33,0,0,1,.33.33V8.3a.52.52,0,0,0,.52.52h2.13a.67.67,0,0,1,.67.66Z" }), jsxRuntimeExports.jsx("path", { d: "M14.32,14.5H7.88a.89.89,0,0,1-.9-.89V10a.89.89,0,0,1,.9-.89H9.23A.14.14,0,0,0,9.34,9l1-1.45.29-1.9a1,1,0,0,1,1-.89h.71A1.37,1.37,0,0,1,13.7,6.17V7.64a.14.14,0,0,0,.14.14h1.48A1.72,1.72,0,0,1,17,9.48V11.8A2.71,2.71,0,0,1,14.32,14.5Zm-5.2-.75h1a.9.9,0,0,1-.48-.61A1.05,1.05,0,0,1,9.12,13.75Zm-1.39-.52v.38a.15.15,0,0,0,.15.14h.36A1.12,1.12,0,0,1,7.73,13.23Zm.95-2.73a.29.29,0,0,0-.29.29v2a.29.29,0,0,0,.29.29A.28.28,0,0,0,9,12.81v-2A.28.28,0,0,0,8.68,10.5Zm3.61-4.33-.22,0a.14.14,0,0,0-.14.12l-.22,1.55a.79.79,0,0,1-.14.37L10.41,10l0,2.95a.14.14,0,0,0,.14.14h3.79A1.28,1.28,0,0,0,15.6,11.8V9.48a.29.29,0,0,0-.29-.29H13.18a.89.89,0,0,1-.89-.89ZM9.13,9.86a1.05,1.05,0,0,1,.51.53v-.32a.92.92,0,0,1,.07-.36.83.83,0,0,1-.48.15Zm-1.25,0a.15.15,0,0,0-.15.14v.37a1,1,0,0,1,.5-.51ZM13,8V8.3a.14.14,0,0,0,.14.14h.28A.82.82,0,0,1,13,8ZM11.62,5.55a.29.29,0,0,0-.28.25v.06a.9.9,0,0,1,.36-.31Z" })] })),
    organization: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20,16.63V13.8a3.1,3.1,0,0,0-3.1-3.1h-4V7.37a3.2,3.2,0,1,0-1.75,0V10.7H7.07A3.1,3.1,0,0,0,4,13.8v2.83a3.19,3.19,0,1,0,1.75,0V13.8a1.35,1.35,0,0,1,1.35-1.35h4.06v4.18a3.19,3.19,0,1,0,1.75,0V12.45h4a1.35,1.35,0,0,1,1.35,1.35v2.83a3.2,3.2,0,1,0,1.75,0ZM6.3,19.68a1.45,1.45,0,1,1-1.46-1.44h0A1.44,1.44,0,0,1,6.3,19.68ZM10.56,4.32A1.45,1.45,0,1,1,12,5.76,1.45,1.45,0,0,1,10.56,4.32Zm2.9,15.36A1.45,1.45,0,1,1,12,18.24,1.44,1.44,0,0,1,13.46,19.68Zm5.68,1.44a1.44,1.44,0,0,1,0-2.88h0a1.44,1.44,0,1,1,0,2.88Z" }) })),
    equal: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.99955,22.7438A10.80957,10.80957,0,1,1,22.80912,11.93423,10.82156,10.82156,0,0,1,11.99955,22.7438Zm0-19.86914a9.05957,9.05957,0,1,0,9.05957,9.05957A9.06943,9.06943,0,0,0,11.99955,2.87466Z" }), jsxRuntimeExports.jsx("rect", { x: "11.10111", y: "17.09634", width: "1.75", height: "4.90332" }), jsxRuntimeExports.jsx("path", { d: "M11.99955,17.45962a5.45948,5.45948,0,1,1,5.46-5.46A5.4658,5.4658,0,0,1,11.99955,17.45962Zm0-9.16895a3.70948,3.70948,0,1,0,3.71,3.709A3.71347,3.71347,0,0,0,11.99955,8.29067Z" }), jsxRuntimeExports.jsx("rect", { x: "11.12455", y: "1.9479", width: "1.75", height: "5.14844" })] })),
    proportional: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.99621,22.88052a10.84185,10.84185,0,0,1-4.4541-.96192h0a10.806,10.806,0,1,1,4.4541.96192Zm.01758-20.00489A9.12477,9.12477,0,0,0,8.2589,20.3229h0A9.12541,9.12541,0,1,0,12.01379,2.87563Z" }), jsxRuntimeExports.jsx("rect", { x: "18.06638", y: "12.75944", width: "1.7493", height: "4.66696", transform: "translate(-2.58986 26.18253) rotate(-65.80013)" }), jsxRuntimeExports.jsx("rect", { x: "2.82154", y: "15.1616", width: "5.58566", height: "1.74937", transform: "translate(-7.78917 5.59461) rotate(-32.78519)" }), jsxRuntimeExports.jsx("rect", { x: "10.84522", y: "1.91459", width: "1.74923", height: "6.22776", transform: "translate(-0.17517 0.42969) rotate(-2.08485)" }), jsxRuntimeExports.jsx("path", { d: "M11.99816,17.46255a5.4712,5.4712,0,1,1,1.94043-.3584A5.44711,5.44711,0,0,1,11.99816,17.46255ZM12.006,8.29067a3.70661,3.70661,0,1,0,1.51465.3252A3.71562,3.71562,0,0,0,12.006,8.29067Z" })] })),
    report: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.17,22.87H5.83a2.48,2.48,0,0,1-2.48-2.48V3.61A2.49,2.49,0,0,1,5.83,1.12H18.17a2.49,2.49,0,0,1,2.48,2.49V20.39A2.48,2.48,0,0,1,18.17,22.87ZM5.83,2.87a.74.74,0,0,0-.73.74V20.39a.73.73,0,0,0,.73.73H18.17a.73.73,0,0,0,.73-.73V3.61a.74.74,0,0,0-.73-.74Z" }), jsxRuntimeExports.jsx("path", { d: "M16.46,20a.87.87,0,0,1-.87-.88V13.69a.88.88,0,1,1,1.75,0v5.39A.88.88,0,0,1,16.46,20Z" }), jsxRuntimeExports.jsx("path", { d: "M12.29,20a.87.87,0,0,1-.88-.88v-2.6a.88.88,0,0,1,1.75,0v2.6A.87.87,0,0,1,12.29,20Z" }), jsxRuntimeExports.jsx("path", { d: "M8.16,20a.87.87,0,0,1-.88-.88V13.69a.88.88,0,1,1,1.75,0v5.39A.87.87,0,0,1,8.16,20Z" }), jsxRuntimeExports.jsx("path", { d: "M12,13.08a4.64,4.64,0,1,1,4.64-4.63A4.64,4.64,0,0,1,12,13.08Zm.87-7.39V11.2a2.89,2.89,0,0,0,0-5.51Zm-1.75,0a2.88,2.88,0,0,0,0,5.49Z" })] })),
    chartAscending: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22,22.63H2a.88.88,0,0,1,0-1.75H22a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M20.63,18.36a.88.88,0,0,1-.88-.88V8A.88.88,0,1,1,21.5,8v9.47A.87.87,0,0,1,20.63,18.36Z" }), jsxRuntimeExports.jsx("path", { d: "M16.13,18.36a.87.87,0,0,1-.88-.88V10.2a.88.88,0,0,1,1.75,0v7.28A.87.87,0,0,1,16.13,18.36Z" }), jsxRuntimeExports.jsx("path", { d: "M11.63,18.36a.87.87,0,0,1-.88-.88V12.4a.88.88,0,1,1,1.75,0v5.08A.87.87,0,0,1,11.63,18.36Z" }), jsxRuntimeExports.jsx("path", { d: "M7.12,18.36a.87.87,0,0,1-.87-.88V10.2A.88.88,0,0,1,8,10.2v7.28A.87.87,0,0,1,7.12,18.36Z" }), jsxRuntimeExports.jsx("path", { d: "M2.62,18.36a.87.87,0,0,1-.87-.88v-4a.88.88,0,1,1,1.75,0v4A.88.88,0,0,1,2.62,18.36Z" }), jsxRuntimeExports.jsx("path", { d: "M2.84,8.61A.88.88,0,0,1,2.36,7L7.07,3.92a2.38,2.38,0,0,1,1.81-.63,2.41,2.41,0,0,1,1.77,1L11.8,5.78a.7.7,0,0,0,.49.27.71.71,0,0,0,.53-.2L13,5.73l6.58-4.22A.87.87,0,1,1,20.49,3L14,7.16a2.4,2.4,0,0,1-1.81.63,2.43,2.43,0,0,1-1.77-1L9.25,5.3A.68.68,0,0,0,8.76,5a.71.71,0,0,0-.53.2l-.14.11L3.32,8.47A.84.84,0,0,1,2.84,8.61Z" })] })),
    chartDescending: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22,22.6H2a.88.88,0,0,1,0-1.75H22a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M2.62,18.33a.88.88,0,0,1-.87-.88V8A.88.88,0,0,1,3.5,8v9.48A.89.89,0,0,1,2.62,18.33Z" }), jsxRuntimeExports.jsx("path", { d: "M7.12,18.33a.88.88,0,0,1-.87-.88V10.17a.88.88,0,1,1,1.75,0v7.28A.88.88,0,0,1,7.12,18.33Z" }), jsxRuntimeExports.jsx("path", { d: "M11.63,18.33a.88.88,0,0,1-.88-.88V12.36a.88.88,0,0,1,1.75,0v5.09A.88.88,0,0,1,11.63,18.33Z" }), jsxRuntimeExports.jsx("path", { d: "M16.13,18.33a.88.88,0,0,1-.88-.88V10.17a.88.88,0,1,1,1.75,0v7.28A.88.88,0,0,1,16.13,18.33Z" }), jsxRuntimeExports.jsx("path", { d: "M20.63,18.33a.89.89,0,0,1-.88-.88v-4a.88.88,0,0,1,1.75,0v4A.88.88,0,0,1,20.63,18.33Z" }), jsxRuntimeExports.jsx("path", { d: "M10.46,8.15A2.43,2.43,0,0,1,9,7.67L1.92,3A.87.87,0,0,1,1.67,1.8a.88.88,0,0,1,1.21-.25L10,6.24a.73.73,0,0,0,.59.15.69.69,0,0,0,.45-.34L12,4.38a2.43,2.43,0,0,1,3.5-.84l5.1,2.39a.87.87,0,1,1-.74,1.58L14.66,5.1,14.5,5A.67.67,0,0,0,14,4.88a.68.68,0,0,0-.46.34l-.91,1.67A2.44,2.44,0,0,1,11,8.1,2.21,2.21,0,0,1,10.46,8.15Z" })] })),
    cloudWaste: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.92,21.69a2.26,2.26,0,0,1-1.74-.82L8.12,18.35a.5.5,0,0,0-.39-.18H5a3.85,3.85,0,0,1-3.84-3.85V6.15A3.84,3.84,0,0,1,5,2.31H19a3.85,3.85,0,0,1,3.85,3.84v8.17A3.86,3.86,0,0,1,19,18.17H16.11a.5.5,0,0,0-.39.18l-2.05,2.51L13,20.31l.68.55a2.22,2.22,0,0,1-1.74.83ZM5,4.06A2.1,2.1,0,0,0,2.88,6.15v8.17A2.1,2.1,0,0,0,5,16.42H7.73a2.26,2.26,0,0,1,1.74.82l2.06,2.52a.49.49,0,0,0,.39.18h0a.49.49,0,0,0,.39-.18l2-2.52a2.25,2.25,0,0,1,1.74-.82H19a2.11,2.11,0,0,0,2.1-2.1V6.15A2.1,2.1,0,0,0,19,4.06Z" }), jsxRuntimeExports.jsx("path", { d: "M11.53,15.24a.25.25,0,0,1-.2-.09.27.27,0,0,1-.08-.19v-.77a3.72,3.72,0,0,1-1.41-.42A2.4,2.4,0,0,1,9,13a1.79,1.79,0,0,1-.31-1,.2.2,0,0,1,.07-.16.23.23,0,0,1,.17-.08h1.39a.37.37,0,0,1,.23.06.5.5,0,0,1,.15.14,1.21,1.21,0,0,0,.25.32,1.07,1.07,0,0,0,.42.25,1.93,1.93,0,0,0,.64.09,1.76,1.76,0,0,0,1-.2.6.6,0,0,0,.33-.53.51.51,0,0,0-.18-.41,1.67,1.67,0,0,0-.57-.28,8.65,8.65,0,0,0-1-.26,6.4,6.4,0,0,1-1.42-.46,2.2,2.2,0,0,1-.9-.73,2.06,2.06,0,0,1-.3-1.14,2,2,0,0,1,.63-1.5,3,3,0,0,1,1.74-.77V5.61a.28.28,0,0,1,.08-.2.27.27,0,0,1,.2-.07h.91a.26.26,0,0,1,.19.07.24.24,0,0,1,.08.2V6.4A3.29,3.29,0,0,1,14,6.88a2.43,2.43,0,0,1,.79.77,1.64,1.64,0,0,1,.28.82.21.21,0,0,1-.07.16.2.2,0,0,1-.16.07H13.37a.4.4,0,0,1-.2,0A.52.52,0,0,1,13,8.52a.72.72,0,0,0-.35-.43,1.34,1.34,0,0,0-.73-.18,1.44,1.44,0,0,0-.75.17.57.57,0,0,0-.27.52.56.56,0,0,0,.15.39,1.17,1.17,0,0,0,.49.28,9.34,9.34,0,0,0,1,.26,7.35,7.35,0,0,1,1.61.46,2,2,0,0,1,.9.73,2,2,0,0,1,.29,1.12A2.08,2.08,0,0,1,15,13a2.37,2.37,0,0,1-.91.8,3.79,3.79,0,0,1-1.37.41V15a.24.24,0,0,1-.08.19.25.25,0,0,1-.19.09Z" })] })),
    co2: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.12,11.21v-.06s0-.05,0-.08A4.44,4.44,0,0,0,20.35,8a.39.39,0,0,1-.18-.36,5.3,5.3,0,0,0-1.51-4A5.21,5.21,0,0,0,13.73,2,5.28,5.28,0,0,0,9.8,5.07a.54.54,0,0,1-.05.11l-.07,0A3.54,3.54,0,0,0,7.24,5a3.59,3.59,0,0,0-2.6,3.44V9l-.06,0A3.59,3.59,0,0,0,2.42,10.7,3.37,3.37,0,0,0,2,13a.84.84,0,0,0,.35.55.92.92,0,0,0,.68.15c.35-.06.76-.3.75-1.05A1.8,1.8,0,0,1,5.5,10.74a.91.91,0,0,0,1-1V8.44a1.77,1.77,0,0,1,1.1-1.65,1.73,1.73,0,0,1,2,.39,1.23,1.23,0,0,0,.33.26.85.85,0,0,0,.79,0,1,1,0,0,0,.54-.76,3.67,3.67,0,0,1,1.39-2.26,3.64,3.64,0,0,1,5.67,1.92A5.36,5.36,0,0,1,18.36,8,1.23,1.23,0,0,0,19,9.24a2.69,2.69,0,0,1,1.22,2.91,3.07,3.07,0,0,1-.86,1.46.88.88,0,0,0,0,1.25.93.93,0,0,0,.64.26.89.89,0,0,0,.61-.24A4.1,4.1,0,0,0,21.8,13.2a6.42,6.42,0,0,0,.23-.86l.09-.37v-.76Z" }), jsxRuntimeExports.jsx("path", { d: "M12.29,22a6,6,0,0,1-.93-.31A2.65,2.65,0,0,1,9.81,19.3c0-.95,0-1.91,0-2.86a2.8,2.8,0,0,1,5.57-.29,7.47,7.47,0,0,1,0,1v2A2.79,2.79,0,0,1,13,22a.15.15,0,0,0-.07,0Zm1.56-4.12c0-.45,0-.9,0-1.34a1.25,1.25,0,1,0-2.49,0c0,.89,0,1.79,0,2.69a1.14,1.14,0,0,0,.41.89,1.18,1.18,0,0,0,1.32.22,1.19,1.19,0,0,0,.76-1.13C13.86,18.76,13.85,18.32,13.85,17.88Z" }), jsxRuntimeExports.jsx("path", { d: "M5.63,22a5.75,5.75,0,0,1-.94-.31A2.65,2.65,0,0,1,3.14,19.3c0-1,0-1.92,0-2.88a2.81,2.81,0,0,1,5.54-.5.79.79,0,0,1-.57,1,.77.77,0,0,1-.93-.54,1.27,1.27,0,0,0-.8-1A1.24,1.24,0,0,0,4.7,16.45c0,.94,0,1.89,0,2.83a1.21,1.21,0,0,0,1.1,1.15,1.23,1.23,0,0,0,1.32-.87.86.86,0,0,1,.6-.65.76.76,0,0,1,1,.84,2.62,2.62,0,0,1-1.07,1.7A3.14,3.14,0,0,1,6.25,22Z" }), jsxRuntimeExports.jsx("path", { d: "M17.24,22a.8.8,0,0,1-.33-1.43c.49-.51,1-1,1.46-1.56a5.33,5.33,0,0,0,.5-.74.3.3,0,0,0,0-.4.39.39,0,0,0-.39-.15.37.37,0,0,0-.31.29l0,.17a.78.78,0,0,1-.82.7.8.8,0,0,1-.73-.8,2,2,0,0,1,2.48-1.85A1.93,1.93,0,0,1,20.5,18a2,2,0,0,1-.42,1.33c-.25.39-.54.75-.83,1.14h.43A.78.78,0,0,1,20,22l0,0Z" })] })),
    co2Down: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M5.48,10.59a3.76,3.76,0,0,1-1.57-.3,2.32,2.32,0,0,1-1-.88A3,3,0,0,1,2.49,8c0-.27,0-.55,0-.85s0-.6,0-.87A2.9,2.9,0,0,1,2.9,4.82a2.22,2.22,0,0,1,1-.89,3.74,3.74,0,0,1,1.56-.3,4.06,4.06,0,0,1,1.18.16,2.84,2.84,0,0,1,.94.46A2.34,2.34,0,0,1,8.24,5a2.11,2.11,0,0,1,.23,1,.16.16,0,0,1-.05.14.2.2,0,0,1-.15.06H7a.36.36,0,0,1-.19,0,.53.53,0,0,1-.11-.2,1.11,1.11,0,0,0-.44-.7A1.39,1.39,0,0,0,5.47,5a1.17,1.17,0,0,0-.84.29,1.4,1.4,0,0,0-.34,1c0,.53,0,1.07,0,1.63a1.38,1.38,0,0,0,.34,1,1.13,1.13,0,0,0,.84.29A1.39,1.39,0,0,0,6.22,9a1.1,1.1,0,0,0,.44-.69.29.29,0,0,1,.11-.2A.27.27,0,0,1,7,8.05H8.27a.2.2,0,0,1,.15.06.17.17,0,0,1,.05.15,2.07,2.07,0,0,1-.23,1A2.34,2.34,0,0,1,7.6,10a3.07,3.07,0,0,1-.94.47A4.43,4.43,0,0,1,5.48,10.59Z" }), jsxRuntimeExports.jsx("path", { d: "M12.25,10.59a3.81,3.81,0,0,1-1.54-.29,2.28,2.28,0,0,1-1-.88A3.06,3.06,0,0,1,9.27,8c0-.28,0-.56,0-.84s0-.56,0-.84a3,3,0,0,1,.42-1.46,2.24,2.24,0,0,1,1-.89,3.66,3.66,0,0,1,1.53-.3,3.68,3.68,0,0,1,1.54.3,2.29,2.29,0,0,1,1,.89,2.91,2.91,0,0,1,.41,1.46c0,.28,0,.56,0,.84s0,.56,0,.84a3,3,0,0,1-.4,1.46,2.33,2.33,0,0,1-1,.88A3.9,3.9,0,0,1,12.25,10.59Zm0-1.4a1.16,1.16,0,0,0,.84-.31,1.36,1.36,0,0,0,.34-1c0-.28,0-.55,0-.8s0-.52,0-.79a1.76,1.76,0,0,0-.17-.74,1,1,0,0,0-.41-.42,1.26,1.26,0,0,0-.6-.13,1.28,1.28,0,0,0-.59.13,1,1,0,0,0-.41.42,1.75,1.75,0,0,0-.18.74c0,.27,0,.54,0,.79s0,.52,0,.8a1.4,1.4,0,0,0,.35,1A1.16,1.16,0,0,0,12.25,9.19Z" }), jsxRuntimeExports.jsx("path", { d: "M16.34,10.49a.29.29,0,0,1-.18-.07.23.23,0,0,1-.07-.17V9.56a.8.8,0,0,1,0-.21.47.47,0,0,1,.2-.26l1-1c.52-.39.94-.72,1.28-1a4.52,4.52,0,0,0,.73-.73,1,1,0,0,0,.25-.6.85.85,0,0,0-.17-.54A.7.7,0,0,0,18.83,5a.83.83,0,0,0-.46.12.86.86,0,0,0-.29.31,2.12,2.12,0,0,0-.14.4.26.26,0,0,1-.13.17.33.33,0,0,1-.2,0h-1.2A.2.2,0,0,1,16.26,6a.17.17,0,0,1-.06-.14A2.4,2.4,0,0,1,16.4,5a2.17,2.17,0,0,1,.53-.71,2.53,2.53,0,0,1,.83-.49,3,3,0,0,1,1.07-.18,3.43,3.43,0,0,1,1.4.26,2.05,2.05,0,0,1,.87.74,2,2,0,0,1,.3,1.1,2,2,0,0,1-.2.88,3.21,3.21,0,0,1-.59.78,9.37,9.37,0,0,1-.91.77l-.89.9H21.3a.24.24,0,0,1,.25.24v1a.28.28,0,0,1-.07.17.29.29,0,0,1-.18.07Z" }), jsxRuntimeExports.jsx("path", { d: "M6.93,15.68l-.52.52V12.94a.88.88,0,0,0-1.75,0V16.2l-.52-.52A.88.88,0,0,0,2.9,16.92l2,2h0L5,19a.91.91,0,0,0,.23.15,1,1,0,0,0,.33.07,1,1,0,0,0,.34-.07A.91.91,0,0,0,6.1,19s0,0,.05,0l2-2a.88.88,0,0,0-1.24-1.24Z" }), jsxRuntimeExports.jsx("path", { d: "M13.39,19l-.51.51V16.24a.88.88,0,1,0-1.75,0V19.5L10.6,19a.86.86,0,0,0-1.23,0,.87.87,0,0,0,0,1.23l2,2h0l0,0a1,1,0,0,0,.24.16.92.92,0,0,0,.33.06,1,1,0,0,0,.34-.06,1.19,1.19,0,0,0,.23-.16l0,0,2-2A.87.87,0,1,0,13.39,19Z" }), jsxRuntimeExports.jsx("path", { d: "M21.1,15.68a.88.88,0,0,0-1.24,0l-.52.52V12.94a.88.88,0,0,0-1.75,0V16.2l-.52-.52a.88.88,0,0,0-1.24,1.24l2,2h0s0,0,0,0a.91.91,0,0,0,.23.15.84.84,0,0,0,.67,0A.91.91,0,0,0,19,19l.06,0,2-2A.88.88,0,0,0,21.1,15.68Z" })] })),
    co2Up: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M5.16,21.45a3.74,3.74,0,0,1-1.56-.3,2.32,2.32,0,0,1-1-.88,2.9,2.9,0,0,1-.4-1.44c0-.27,0-.55,0-.85s0-.59,0-.87a2.89,2.89,0,0,1,.4-1.43,2.35,2.35,0,0,1,1-.89,3.7,3.7,0,0,1,1.55-.3,4,4,0,0,1,1.18.16,3.11,3.11,0,0,1,1,.46,2.22,2.22,0,0,1,.63.74,2.17,2.17,0,0,1,.24,1,.14.14,0,0,1-.05.14A.24.24,0,0,1,8,17H6.65A.33.33,0,0,1,6.46,17a.46.46,0,0,1-.12-.2,1.1,1.1,0,0,0-.44-.7,1.35,1.35,0,0,0-.75-.19,1.17,1.17,0,0,0-.84.3,1.36,1.36,0,0,0-.33,1c0,.52,0,1.07,0,1.62a1.38,1.38,0,0,0,.33,1,1.17,1.17,0,0,0,.84.3,1.41,1.41,0,0,0,.76-.2,1.09,1.09,0,0,0,.43-.69.4.4,0,0,1,.11-.2.31.31,0,0,1,.2,0H8a.23.23,0,0,1,.15,0,.17.17,0,0,1,.05.15,2.21,2.21,0,0,1-.24,1,2.1,2.1,0,0,1-.63.73,2.91,2.91,0,0,1-1,.47A4.37,4.37,0,0,1,5.16,21.45Z" }), jsxRuntimeExports.jsx("path", { d: "M11.94,21.45a3.9,3.9,0,0,1-1.55-.29,2.25,2.25,0,0,1-1-.88A2.92,2.92,0,0,1,9,18.82c0-.28,0-.56,0-.84s0-.56,0-.83a3.13,3.13,0,0,1,.41-1.47,2.38,2.38,0,0,1,1-.89,3.66,3.66,0,0,1,1.53-.3,3.63,3.63,0,0,1,1.53.3,2.38,2.38,0,0,1,1,.89,2.92,2.92,0,0,1,.41,1.47c0,.27,0,.55,0,.83s0,.56,0,.84a2.82,2.82,0,0,1-.41,1.46,2.28,2.28,0,0,1-1,.88A3.81,3.81,0,0,1,11.94,21.45Zm0-1.39a1.17,1.17,0,0,0,.83-.31,1.4,1.4,0,0,0,.35-1c0-.28,0-.55,0-.8s0-.51,0-.78a1.84,1.84,0,0,0-.17-.74,1,1,0,0,0-.41-.42,1.33,1.33,0,0,0-.6-.14,1.25,1.25,0,0,0-.59.14,1.06,1.06,0,0,0-.42.42,1.68,1.68,0,0,0-.17.74c0,.27,0,.53,0,.78s0,.52,0,.8a1.45,1.45,0,0,0,.35,1A1.18,1.18,0,0,0,11.94,20.06Z" }), jsxRuntimeExports.jsx("path", { d: "M16,21.35a.24.24,0,0,1-.18-.07.23.23,0,0,1-.07-.17v-.69a1.06,1.06,0,0,1,0-.2A.53.53,0,0,1,16,20l1-1c.52-.39.94-.72,1.27-1a4.26,4.26,0,0,0,.74-.73,1,1,0,0,0,.24-.59.82.82,0,0,0-.17-.55.67.67,0,0,0-.58-.22.79.79,0,0,0-.75.44,1.4,1.4,0,0,0-.14.39.31.31,0,0,1-.13.18.46.46,0,0,1-.2.05H16.09a.2.2,0,0,1-.14-.06.2.2,0,0,1-.06-.15,2.13,2.13,0,0,1,.2-.87,2.11,2.11,0,0,1,.53-.72,2.49,2.49,0,0,1,.82-.49,3.06,3.06,0,0,1,1.08-.18,3.3,3.3,0,0,1,1.4.27,2,2,0,0,1,.87.73,2,2,0,0,1,.3,1.1,1.9,1.9,0,0,1-.21.88,2.68,2.68,0,0,1-.59.78,8.13,8.13,0,0,1-.9.77l-.89.9H21a.23.23,0,0,1,.18.07.21.21,0,0,1,.08.17v1a.25.25,0,0,1-.08.17.23.23,0,0,1-.18.07Z" }), jsxRuntimeExports.jsx("path", { d: "M21.13,8.09l-2-2-.06,0a.91.91,0,0,0-.23-.15.86.86,0,0,0-.67,0,1.07,1.07,0,0,0-.22.15l-.06,0h0l-2,2a.85.85,0,0,0,0,1.23.86.86,0,0,0,1.23,0l.52-.52v3.26a.88.88,0,0,0,1.75,0V8.81l.52.52a.88.88,0,0,0,1.24-1.24Z" }), jsxRuntimeExports.jsx("path", { d: "M12.65,2.79a.73.73,0,0,0-.28-.19.7.7,0,0,0-.25-.05l-.09,0h0l-.09,0a.64.64,0,0,0-.24.05.7.7,0,0,0-.29.19l-2,2A.87.87,0,0,0,9.4,6a.83.83,0,0,0,.62.26A.88.88,0,0,0,10.64,6l.52-.52V8.77a.88.88,0,1,0,1.75,0V5.52l.52.52a.86.86,0,0,0,.62.25A.83.83,0,0,0,14.66,6a.85.85,0,0,0,0-1.23Z" }), jsxRuntimeExports.jsx("path", { d: "M6.19,6.08h0s0,0,0,0a.91.91,0,0,0-.23-.15.87.87,0,0,0-.67,0A.86.86,0,0,0,5,6s0,0-.06,0l-2,2a.88.88,0,0,0,.62,1.5.87.87,0,0,0,.62-.26l.52-.52v3.26a.88.88,0,0,0,1.75,0V8.81L7,9.33a.87.87,0,0,0,.62.26.89.89,0,0,0,.62-.26.87.87,0,0,0,0-1.23Z" })] })),
    change: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15.43,19.61h-4a.88.88,0,0,1,0-1.75h4a1.13,1.13,0,0,0,1.13-1.12V11.6a.88.88,0,0,1,1.75,0v5.14A2.88,2.88,0,0,1,15.43,19.61Z" }), jsxRuntimeExports.jsx("path", { d: "M6.43,13.71a.87.87,0,0,1-.87-.88V7.74A2.88,2.88,0,0,1,8.43,4.86h4.1a.88.88,0,1,1,0,1.75H8.43A1.13,1.13,0,0,0,7.31,7.74v5.09A.88.88,0,0,1,6.43,13.71Z" }), jsxRuntimeExports.jsx("path", { d: "M6.38,14.06a.88.88,0,0,1-.62-.25l-2.5-2.5A.88.88,0,0,1,4.5,10.07L7,12.57a.87.87,0,0,1-.62,1.49Z" }), jsxRuntimeExports.jsx("path", { d: "M6.48,14.06a.87.87,0,0,1-.62-1.49l2.5-2.5A.88.88,0,0,1,9.6,11.31l-2.5,2.5A.88.88,0,0,1,6.48,14.06Z" }), jsxRuntimeExports.jsx("path", { d: "M20.07,14.06a.88.88,0,0,1-.62-.25L17,11.31a.88.88,0,0,1,1.24-1.24l2.5,2.5a.87.87,0,0,1-.62,1.49Z" }), jsxRuntimeExports.jsx("path", { d: "M15,14.06a.87.87,0,0,1-.62-1.49l2.5-2.5a.88.88,0,0,1,1.24,1.24l-2.5,2.5A.88.88,0,0,1,15,14.06Z" }), jsxRuntimeExports.jsx("path", { d: "M6.42,16.61A1.82,1.82,0,1,1,4.6,18.43a1.83,1.83,0,0,1,1.82-1.82m0-1.75A3.57,3.57,0,1,0,10,18.43a3.57,3.57,0,0,0-3.57-3.57Z" }), jsxRuntimeExports.jsx("path", { d: "M18.25,9.18H16.8A2.84,2.84,0,0,1,14,6.34V4.9A2.84,2.84,0,0,1,16.8,2.06h1.45A2.84,2.84,0,0,1,21.08,4.9V6.34A2.84,2.84,0,0,1,18.25,9.18ZM16.8,3.81A1.08,1.08,0,0,0,15.72,4.9V6.34A1.08,1.08,0,0,0,16.8,7.43h1.45a1.08,1.08,0,0,0,1.08-1.09V4.9a1.08,1.08,0,0,0-1.08-1.09Z" })] })),
    virtualHost: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18,20.27H6A.88.88,0,0,0,6,22H18a.88.88,0,1,0,0-1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M19.62,2H4.38A3.26,3.26,0,0,0,1.13,5.23V15.9a3.26,3.26,0,0,0,3.25,3.25H19.62a3.26,3.26,0,0,0,3.26-3.25V5.23A3.26,3.26,0,0,0,19.62,2ZM21.13,15.9a1.51,1.51,0,0,1-1.51,1.5H4.38a1.5,1.5,0,0,1-1.5-1.5V5.23a1.5,1.5,0,0,1,1.5-1.5H19.62a1.51,1.51,0,0,1,1.51,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M19.77,6.94a2.2,2.2,0,0,0-2.2-2.2H6.43a2.2,2.2,0,0,0-2.2,2.2V9.23a2.2,2.2,0,0,0,.45,1.33,2.17,2.17,0,0,0-.45,1.32v2.3a2.19,2.19,0,0,0,2.2,2.19H17.57a2.19,2.19,0,0,0,2.2-2.19v-2.3a2.17,2.17,0,0,0-.45-1.32,2.2,2.2,0,0,0,.45-1.33ZM18,14.18a.45.45,0,0,1-.45.44H6.43A.45.45,0,0,1,6,14.18v-2.3a.45.45,0,0,1,.45-.45H17.57a.45.45,0,0,1,.45.45Zm0-4.95a.45.45,0,0,1-.45.45H6.43A.45.45,0,0,1,6,9.23V6.94a.45.45,0,0,1,.45-.45H17.57a.45.45,0,0,1,.45.45Z" }), jsxRuntimeExports.jsx("rect", { x: "15.26", y: "11.96", width: "2.17", height: "2.17", rx: "0.97" }), jsxRuntimeExports.jsx("rect", { x: "6.81", y: "7.06", width: "2.17", height: "2.17", rx: "0.97" })] })),
    smartphone: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.76,4.64A2.49,2.49,0,0,0,16.2,2.07H7.8a3,3,0,0,0-.86.13,2.48,2.48,0,0,0-1.7,2.47v15.1a2.5,2.5,0,0,0,2.61,2.61h8.31a2.51,2.51,0,0,0,2.6-2.59ZM16.88,18.26c0,.56,0,1.12,0,1.68a.59.59,0,0,1-.64.56H7.89c-.55,0-.77-.21-.77-.77v-2h9.76Zm0-13.56V15.81H7.12V4.7c0-.52.23-.75.74-.75h8.27A.66.66,0,0,1,16.88,4.7Z" }), jsxRuntimeExports.jsx("path", { d: "M12,18.36a.78.78,0,1,1-.79.77A.78.78,0,0,1,12,18.36Z" })] })),
    cars: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M2,16.65a4.21,4.21,0,0,1,.38-1c.71-1.05,1.25-2.19,1.89-3.28A3.06,3.06,0,0,1,6.92,10.8c1.3,0,2.61,0,3.91,0a3.05,3.05,0,0,1,2.68,1.61c.47.83.92,1.67,1.38,2.49a2.11,2.11,0,0,0,.2.29A2.68,2.68,0,0,1,15.75,17c0,1.36,0,2.71,0,4.07a.9.9,0,0,1-.63,1H12.74c-.57-.19-.67-.64-.62-1.16H5.62A.93.93,0,0,1,5,22H2.63A.91.91,0,0,1,2,21.37Zm12.19,2.62V17a1.19,1.19,0,0,0-.44-.94,1.67,1.67,0,0,0-1.16-.39H5a1.43,1.43,0,0,0-1.44,1.49c0,.63,0,1.26,0,1.89v.22H6.38a.21.21,0,0,0,.16-.1c.2-.27.38-.55.57-.82A.78.78,0,0,1,7.8,18H10a.8.8,0,0,1,.7.35c.2.28.39.55.6.82a.23.23,0,0,0,.16.11ZM12.66,14.1l-.5-.89a1.52,1.52,0,0,0-1.4-.85q-1.89,0-3.78,0a1.53,1.53,0,0,0-1.39.84L5.17,14a.59.59,0,0,0-.06.14Z" }), jsxRuntimeExports.jsx("path", { d: "M22,16.22a.88.88,0,0,1-1,.63c-.59,0-1.19,0-1.79,0a.79.79,0,0,1-.86-.86v-.31h-.8a.79.79,0,1,1,0-1.56h2.84s0,0,0-.07c0-.86,0-1.73,0-2.59a1.32,1.32,0,0,0-1.13-1.2,3.91,3.91,0,0,0-.48-.05H13.41a.78.78,0,1,1,0-1.56h5.53c-.28-.44-.5-.87-.79-1.25A1.4,1.4,0,0,0,17,6.89c-1.26,0-2.52,0-3.77,0a1.54,1.54,0,0,0-1.4.85l-.47.85a2.45,2.45,0,0,1-.26.37.73.73,0,0,1-.93.17.7.7,0,0,1-.35-.86,5.65,5.65,0,0,1,1.41-2.22,3,3,0,0,1,2-.72c1.28,0,2.56,0,3.83,0A3.06,3.06,0,0,1,19.76,7c.37.65.73,1.32,1.1,2,.19.33.41.66.63,1A2.79,2.79,0,0,1,22,11.05s0,.09,0,.13Z" }), jsxRuntimeExports.jsx("path", { d: "M12.63,2a3.84,3.84,0,0,1,.67.16,6.71,6.71,0,0,1,1,.51.75.75,0,0,1,.16,1.09.77.77,0,0,1-1.08.16,1.85,1.85,0,0,0-1.15-.36H8.65a1.64,1.64,0,0,0-1.54.92c-.14.27-.3.54-.46.84H8.38a1.83,1.83,0,0,1,.33,0,.78.78,0,0,1-.14,1.54H6.63a1.6,1.6,0,0,0-1.1.43,1.18,1.18,0,0,0-.41.91c0,.4,0,.8,0,1.19a.78.78,0,1,1-1.56,0c0-.54,0-1.09,0-1.63a2.46,2.46,0,0,1,.57-1.31,2.71,2.71,0,0,0,.24-.35c.46-.81.91-1.63,1.36-2.44A3.11,3.11,0,0,1,8.18,2a.45.45,0,0,0,.11,0Z" }), jsxRuntimeExports.jsx("path", { d: "M6.93,7.94a.78.78,0,1,1-.79.77A.77.77,0,0,1,6.93,7.94Z" }), jsxRuntimeExports.jsx("path", { d: "M18.61,11.38a.77.77,0,0,1,.77.78.78.78,0,0,1-.78.78.8.8,0,0,1-.78-.79A.77.77,0,0,1,18.61,11.38Z" }), jsxRuntimeExports.jsx("path", { d: "M5.35,16.73a.77.77,0,0,1,.79.77.78.78,0,1,1-1.56,0A.77.77,0,0,1,5.35,16.73Z" }), jsxRuntimeExports.jsx("path", { d: "M12.35,16.73a.78.78,0,1,1-.78.78A.78.78,0,0,1,12.35,16.73Z" })] })),
    checkList: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.17,22.88H5.83a2.49,2.49,0,0,1-2.48-2.49V3.61A2.48,2.48,0,0,1,5.83,1.13H18.17a2.48,2.48,0,0,1,2.48,2.48V20.39A2.49,2.49,0,0,1,18.17,22.88ZM5.83,2.88a.73.73,0,0,0-.73.73V20.39a.74.74,0,0,0,.73.74H18.17a.74.74,0,0,0,.73-.74V3.61a.73.73,0,0,0-.73-.73Z" }), jsxRuntimeExports.jsx("path", { d: "M10.47,18.4a.89.89,0,0,1-.62-.26L8,16.28A.88.88,0,0,1,9.22,15l1.25,1.25L14.78,12A.88.88,0,0,1,16,13.22l-4.93,4.92A.89.89,0,0,1,10.47,18.4Z" }), jsxRuntimeExports.jsx("path", { d: "M12.24,11.15H8.42a.88.88,0,0,1,0-1.75h3.82a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M15.92,7.94H8.42a.88.88,0,0,1,0-1.75h7.5a.88.88,0,1,1,0,1.75Z" })] })),
    api: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.51,1.76H3.32A2.2,2.2,0,0,0,1.13,4V20a2.2,2.2,0,0,0,2.19,2.2H20.51A2.2,2.2,0,0,0,22.7,20V4A2.2,2.2,0,0,0,20.51,1.76ZM3.32,3.51H20.51A.45.45,0,0,1,21,4v2.2H2.88V4A.45.45,0,0,1,3.32,3.51Zm17.19,17H3.32A.45.45,0,0,1,2.88,20V7.91H21V20A.45.45,0,0,1,20.51,20.49Z" }), jsxRuntimeExports.jsx("path", { d: "M4.79,17.56a.21.21,0,0,1-.19-.19s0-.05,0-.08l2.07-5.65a.36.36,0,0,1,.12-.18A.32.32,0,0,1,7,11.39h1.3a.36.36,0,0,1,.24.07.42.42,0,0,1,.11.18l2.06,5.65a.24.24,0,0,1,0,.08.18.18,0,0,1-.06.13.18.18,0,0,1-.14.06H9.48a.24.24,0,0,1-.2-.07.28.28,0,0,1-.08-.12l-.35-.9H6.5l-.34.9a.25.25,0,0,1-.07.12.29.29,0,0,1-.22.07Zm2.07-2.35H8.5l-.82-2.33Z" }), jsxRuntimeExports.jsx("path", { d: "M11.67,17.56a.21.21,0,0,1-.16-.07.2.2,0,0,1-.06-.15V11.61a.21.21,0,0,1,.06-.16.25.25,0,0,1,.16-.06h2.47a3.28,3.28,0,0,1,1.27.22,1.86,1.86,0,0,1,.85.68,2,2,0,0,1,.3,1.13,1.92,1.92,0,0,1-.3,1.12,1.82,1.82,0,0,1-.85.66,3.48,3.48,0,0,1-1.27.21H13.09v1.93a.18.18,0,0,1-.07.15.19.19,0,0,1-.16.07Zm1.39-3.37h1a.88.88,0,0,0,.6-.19.74.74,0,0,0,.22-.59.85.85,0,0,0-.19-.57.79.79,0,0,0-.63-.23h-1Z" }), jsxRuntimeExports.jsx("path", { d: "M17.63,17.56a.19.19,0,0,1-.16-.07.2.2,0,0,1-.06-.15V11.61a.21.21,0,0,1,.22-.22h1.18a.21.21,0,0,1,.16.06.19.19,0,0,1,.07.16v5.73a.18.18,0,0,1-.07.15.19.19,0,0,1-.16.07Z" })] })),
    application: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20,22.38h-3.8a2.87,2.87,0,0,1-2.86-2.87v-3.8a2.86,2.86,0,0,1,2.86-2.86H20a2.87,2.87,0,0,1,2.87,2.86v3.8A2.88,2.88,0,0,1,20,22.38Zm-3.8-7.78a1.11,1.11,0,0,0-1.11,1.11v3.8a1.12,1.12,0,0,0,1.11,1.12H20a1.12,1.12,0,0,0,1.12-1.12v-3.8A1.12,1.12,0,0,0,20,14.6ZM7.79,22.38H4a2.87,2.87,0,0,1-2.86-2.87v-3.8A2.86,2.86,0,0,1,4,12.85h3.8a2.86,2.86,0,0,1,2.86,2.86v3.8A2.87,2.87,0,0,1,7.79,22.38ZM4,14.6a1.11,1.11,0,0,0-1.11,1.11v3.8A1.12,1.12,0,0,0,4,20.63h3.8A1.12,1.12,0,0,0,8.9,19.51v-3.8A1.11,1.11,0,0,0,7.79,14.6Zm16-3.45h-3.8a2.86,2.86,0,0,1-2.86-2.86V4.49a2.87,2.87,0,0,1,2.86-2.87H20a2.88,2.88,0,0,1,2.87,2.87v3.8A2.87,2.87,0,0,1,20,11.15Zm-3.8-7.78A1.12,1.12,0,0,0,15.1,4.49v3.8A1.11,1.11,0,0,0,16.21,9.4H20a1.12,1.12,0,0,0,1.12-1.11V4.49A1.12,1.12,0,0,0,20,3.37ZM7.79,11.15H4A2.86,2.86,0,0,1,1.13,8.29V4.49A2.87,2.87,0,0,1,4,1.62h3.8a2.87,2.87,0,0,1,2.86,2.87v3.8A2.86,2.86,0,0,1,7.79,11.15ZM4,3.37A1.12,1.12,0,0,0,2.88,4.49v3.8A1.11,1.11,0,0,0,4,9.4h3.8A1.11,1.11,0,0,0,8.9,8.29V4.49A1.12,1.12,0,0,0,7.79,3.37Z" }) })),
    copy: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.62,20.64h-.85V18.89h.85a.56.56,0,0,0,.55-.55V3.43a.54.54,0,0,0-.55-.55h-11a.55.55,0,0,0-.55.55v.78H5.36V3.43a2.3,2.3,0,0,1,2.3-2.3h11a2.3,2.3,0,0,1,2.3,2.3V18.34A2.3,2.3,0,0,1,18.62,20.64Z" }), jsxRuntimeExports.jsx("path", { d: "M16.34,22.88h-11a2.31,2.31,0,0,1-2.3-2.31V5.66a2.3,2.3,0,0,1,2.3-2.3h11a2.3,2.3,0,0,1,2.3,2.3V20.57A2.31,2.31,0,0,1,16.34,22.88ZM5.38,5.11a.56.56,0,0,0-.55.55V20.57a.56.56,0,0,0,.55.56h11a.56.56,0,0,0,.55-.56V5.66a.56.56,0,0,0-.55-.55Z" }), jsxRuntimeExports.jsx("path", { d: "M10.92,17.19H7.53a.88.88,0,1,1,0-1.75h3.39a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M14.19,14H7.53a.88.88,0,1,1,0-1.75h6.66a.88.88,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M14.19,10.79H7.53A.88.88,0,1,1,7.53,9h6.66a.88.88,0,0,1,0,1.75Z" })] })),
    database: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.08,21.44H3.92a2.8,2.8,0,0,1-2.8-2.79V16.77A2.8,2.8,0,0,1,3.92,14H20.08a2.79,2.79,0,0,1,2.79,2.79v1.88A2.79,2.79,0,0,1,20.08,21.44ZM3.92,15.73a1,1,0,0,0-1,1v1.88a1,1,0,0,0,1,1H20.08a1,1,0,0,0,1-1V16.77a1,1,0,0,0-1-1Z" }), jsxRuntimeExports.jsx("path", { d: "M20.08,15.73H3.92a2.8,2.8,0,0,1-2.8-2.79V11.06a2.8,2.8,0,0,1,2.8-2.79H20.08a2.79,2.79,0,0,1,2.79,2.79v1.88A2.79,2.79,0,0,1,20.08,15.73ZM3.92,10a1,1,0,0,0-1,1v1.88a1,1,0,0,0,1,1H20.08a1,1,0,0,0,1-1V11.06a1,1,0,0,0-1-1Z" }), jsxRuntimeExports.jsx("path", { d: "M20.08,10H3.92a2.8,2.8,0,0,1-2.8-2.79V5.35a2.8,2.8,0,0,1,2.8-2.79H20.08a2.79,2.79,0,0,1,2.79,2.79V7.23A2.79,2.79,0,0,1,20.08,10ZM3.92,4.31a1,1,0,0,0-1,1V7.23a1,1,0,0,0,1,1H20.08a1,1,0,0,0,1-1V5.35a1,1,0,0,0-1-1Z" }), jsxRuntimeExports.jsx("rect", { x: "17.68", y: "16.68", width: "2.06", height: "2.06", rx: "0.86" }), jsxRuntimeExports.jsx("path", { d: "M18.88,19.12h-.35a1.24,1.24,0,0,1-1.23-1.24v-.34a1.23,1.23,0,0,1,1.23-1.23h.35a1.23,1.23,0,0,1,1.23,1.23v.34A1.24,1.24,0,0,1,18.88,19.12Zm-.35-2.06a.48.48,0,0,0-.48.48v.34a.49.49,0,0,0,.48.49h.35a.48.48,0,0,0,.48-.49v-.34a.47.47,0,0,0-.48-.48Z" }), jsxRuntimeExports.jsx("rect", { x: "17.81", y: "10.97", width: "2.06", height: "2.06", rx: "0.86" }), jsxRuntimeExports.jsx("path", { d: "M19,13.41h-.34a1.25,1.25,0,0,1-1.24-1.24v-.34a1.24,1.24,0,0,1,1.24-1.23H19a1.24,1.24,0,0,1,1.24,1.23v.34A1.25,1.25,0,0,1,19,13.41Zm-.34-2.06a.48.48,0,0,0-.49.48v.34a.49.49,0,0,0,.49.49H19a.49.49,0,0,0,.49-.49v-.34a.48.48,0,0,0-.49-.48Z" }), jsxRuntimeExports.jsx("rect", { x: "17.68", y: "5.26", width: "2.06", height: "2.06", rx: "0.86" }), jsxRuntimeExports.jsx("path", { d: "M18.88,7.69h-.35A1.23,1.23,0,0,1,17.3,6.46V6.12a1.24,1.24,0,0,1,1.23-1.24h.35a1.24,1.24,0,0,1,1.23,1.24v.34A1.23,1.23,0,0,1,18.88,7.69Zm-.35-2.06a.49.49,0,0,0-.48.49v.34a.48.48,0,0,0,.48.48h.35a.47.47,0,0,0,.48-.48V6.12a.48.48,0,0,0-.48-.49Z" })] })),
    detailsView: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M16.7988,18.62076H7.20114a.87012.87012,0,0,1,0-1.74023H16.7988a.87012.87012,0,1,1,0,1.74023Z" }), jsxRuntimeExports.jsx("path", { d: "M19.52146,22.86979H4.47849a2.74364,2.74364,0,0,1-2.74024-2.74024V15.37076a2.74364,2.74364,0,0,1,2.74024-2.74023h15.043a2.74363,2.74363,0,0,1,2.74023,2.74023v4.75879A2.74363,2.74363,0,0,1,19.52146,22.86979Zm-15.043-8.499a1.00068,1.00068,0,0,0-1,1v4.75879a1.00067,1.00067,0,0,0,1,1h15.043a1.00068,1.00068,0,0,0,1-1V15.37076a1.00069,1.00069,0,0,0-1-1Z" }), jsxRuntimeExports.jsx("path", { d: "M19.52146,11.36979H4.47849A2.74364,2.74364,0,0,1,1.73825,8.62955V3.87076A2.74385,2.74385,0,0,1,4.47849,1.12955h15.043a2.74384,2.74384,0,0,1,2.74023,2.74121V8.62955A2.74363,2.74363,0,0,1,19.52146,11.36979Zm-15.043-8.5a1.00151,1.00151,0,0,0-1,1.001V8.62955a1.00067,1.00067,0,0,0,1,1h15.043a1.00068,1.00068,0,0,0,1-1V3.87076a1.00151,1.00151,0,0,0-1-1.001Z" })] })),
    listView: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.17,22.87H5.83a2.48,2.48,0,0,1-2.48-2.48V3.61A2.49,2.49,0,0,1,5.83,1.12H18.17a2.49,2.49,0,0,1,2.48,2.49V20.39A2.48,2.48,0,0,1,18.17,22.87ZM5.83,2.87a.74.74,0,0,0-.73.74V20.39a.73.73,0,0,0,.73.73H18.17a.73.73,0,0,0,.73-.73V3.61a.74.74,0,0,0-.73-.74Z" }), jsxRuntimeExports.jsx("path", { d: "M16.86,16.69H10.2a.88.88,0,0,1,0-1.75h6.66a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("rect", { x: "6.32", y: "14.91", width: "1.73", height: "1.74", rx: "0.87" }), jsxRuntimeExports.jsx("path", { d: "M7.18,17a1.25,1.25,0,0,1-1.24-1.24h0A1.25,1.25,0,1,1,7.18,17Zm0-1.74a.49.49,0,0,0-.49.49h0a.49.49,0,0,0,.49.49.5.5,0,1,0,0-1Z" }), jsxRuntimeExports.jsx("path", { d: "M16.86,12.79H10.2a.88.88,0,0,1,0-1.75h6.66a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("rect", { x: "6.32", y: "11.02", width: "1.73", height: "1.74", rx: "0.87" }), jsxRuntimeExports.jsx("path", { d: "M7.18,13.14a1.25,1.25,0,0,1-1.24-1.25h0a1.25,1.25,0,1,1,1.24,1.25Zm0-1.75a.49.49,0,0,0-.49.5h0a.5.5,0,0,0,.49.5.51.51,0,0,0,.5-.5A.5.5,0,0,0,7.18,11.39Z" }), jsxRuntimeExports.jsx("path", { d: "M16.86,8.89H10.2a.88.88,0,0,1,0-1.75h6.66a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("rect", { x: "6.32", y: "7.12", width: "1.73", height: "1.74", rx: "0.87" }), jsxRuntimeExports.jsx("path", { d: "M7.18,9.24A1.25,1.25,0,0,1,5.94,8h0A1.25,1.25,0,1,1,7.18,9.24Zm0-1.74A.49.49,0,0,0,6.69,8h0a.49.49,0,0,0,.49.49.5.5,0,1,0,0-1Z" })] })),
    wizardView: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.11,22.9a5.26,5.26,0,1,1,.1,0Zm0-8.86a3.56,3.56,0,0,0,0,7.11h.09a3.51,3.51,0,0,0,3.47-3.55A3.56,3.56,0,0,0,17.11,14Z" }), jsxRuntimeExports.jsx("path", { d: "M17.11,20.47a.87.87,0,0,1-.87-.87v-4a.88.88,0,1,1,1.75,0v4A.87.87,0,0,1,17.11,20.47Z" }), jsxRuntimeExports.jsx("path", { d: "M19.11,18.47h-4a.88.88,0,0,1,0-1.75h4a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M10,18.69H3a.88.88,0,1,1,0-1.75h7a.88.88,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M7.41,21.32a.88.88,0,0,1-.62-1.5L9.42,17.2a.88.88,0,0,1,1.24,1.24L8,21.06A.87.87,0,0,1,7.41,21.32Z" }), jsxRuntimeExports.jsx("path", { d: "M10,18.69a.86.86,0,0,1-.62-.25L6.79,15.81A.88.88,0,0,1,8,14.57l2.63,2.63A.87.87,0,0,1,10,18.69Z" }), jsxRuntimeExports.jsx("path", { d: "M19.72,10.4H4.23a2.81,2.81,0,0,1-2.8-2.8V3.93a2.81,2.81,0,0,1,2.8-2.81H19.72a2.81,2.81,0,0,1,2.81,2.81V7.6A2.81,2.81,0,0,1,19.72,10.4ZM4.23,2.87A1.06,1.06,0,0,0,3.18,3.93V7.6A1,1,0,0,0,4.23,8.65H19.72A1.06,1.06,0,0,0,20.78,7.6V3.93a1.07,1.07,0,0,0-1.06-1.06Z" })] })),
    brokenLink: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.31374,18.57327A4.603,4.603,0,0,1,9.05691,10.7139l1.915-1.91407a.87491.87491,0,0,1,1.23632,1.23829L10.29421,11.9512a2.85605,2.85605,0,0,0,4.04,4.03809l5.958-5.96a2.85536,2.85536,0,1,0-4.03809-4.03809A.87491.87491,0,0,1,15.01784,4.753a4.60587,4.60587,0,0,1,6.5127,6.51465l-5.959,5.96A4.599,4.599,0,0,1,12.31374,18.57327Z" }), jsxRuntimeExports.jsx("path", { d: "M5.7073,20.5928A4.60036,4.60036,0,0,1,2.47,12.74222l5.959-5.96a4.60586,4.60586,0,0,1,6.51367,6.51367l-2.53516,2.53515a.8749.8749,0,0,1-1.23828-1.23632l2.53516-2.53614a2.86458,2.86458,0,0,0,.001-4.03808,2.93274,2.93274,0,0,0-4.03808,0l-5.96,5.96a2.84508,2.84508,0,0,0,3.77734,4.24414.87545.87545,0,1,1,1.084,1.375A4.61811,4.61811,0,0,1,5.7073,20.5928Z" }), jsxRuntimeExports.jsx("path", { d: "M4.428,8.17093h-3a.875.875,0,1,1,0-1.75h3a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M5.23855,6.2012a.87314.87314,0,0,1-.61914-.25586L2.49831,3.82425A.8756.8756,0,0,1,3.73659,2.586l2.1211,2.12109A.875.875,0,0,1,5.23855,6.2012Z" }), jsxRuntimeExports.jsx("path", { d: "M7.18777,5.38089a.87481.87481,0,0,1-.875-.875v-3a.875.875,0,0,1,1.75,0v3A.87481.87481,0,0,1,7.18777,5.38089Z" }), jsxRuntimeExports.jsx("path", { d: "M22.468,17.64554h-3a.875.875,0,0,1,0-1.75h3a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M20.77859,21.73636a.87314.87314,0,0,1-.61914-.25586l-2.1211-2.1211a.8756.8756,0,0,1,1.23828-1.23828l2.1211,2.1211a.875.875,0,0,1-.61914,1.49414Z" }), jsxRuntimeExports.jsx("path", { d: "M16.70827,23.43558a.87481.87481,0,0,1-.875-.875v-3a.875.875,0,0,1,1.75,0v3A.87481.87481,0,0,1,16.70827,23.43558Z" })] })),
    edit: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.13,4,19.88,2.76a2.64,2.64,0,0,0-3.74,0L3.19,15.88a2.69,2.69,0,0,0-.77,1.59l-.33,2.87A1.5,1.5,0,0,0,3.57,22h.2l2.85-.37a2.79,2.79,0,0,0,1.58-.78l13-13.1A2.64,2.64,0,0,0,21.13,4ZM7,19.61a1,1,0,0,1-.55.27l-2.53.33.29-2.53a1,1,0,0,1,.27-.57l9-9.1,2.51,2.51Zm13-13.1L17.17,9.28,14.66,6.77,17.39,4A.85.85,0,0,1,18,3.75a.88.88,0,0,1,.63.26L19.9,5.24a.89.89,0,0,1,.27.63A.9.9,0,0,1,19.91,6.51Z" }) })),
    link: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.31354,18.57327A4.603,4.603,0,0,1,9.05671,10.7139l1.915-1.91407a.87491.87491,0,0,1,1.23633,1.23829L10.294,11.9512a2.85605,2.85605,0,0,0,4.04,4.03809l5.959-5.96A2.85571,2.85571,0,1,0,16.254,5.99124.8749.8749,0,0,1,15.01765,4.753a4.60586,4.60586,0,0,1,6.51367,6.51367l-5.96,5.96094A4.59908,4.59908,0,0,1,12.31354,18.57327Z" }), jsxRuntimeExports.jsx("path", { d: "M5.7071,20.5928a4.59423,4.59423,0,0,1-3.23828-7.85058l5.96-5.96A4.60586,4.60586,0,0,1,14.94343,13.295l-2.53614,2.53711A.8756.8756,0,0,1,11.169,14.59378l2.53614-2.53613a2.85746,2.85746,0,0,0,0-4.03711,2.93275,2.93275,0,0,0-4.03809,0l-5.96,5.96a2.845,2.845,0,0,0,3.77734,4.24414.87545.87545,0,1,1,1.084,1.375A4.61613,4.61613,0,0,1,5.7071,20.5928Z" })] })),
    trash: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.78219,22.875H6.21773a2.53441,2.53441,0,0,1-2.53125-2.53125V3.70022a.87481.87481,0,0,1,.875-.875H19.43941a.87481.87481,0,0,1,.875.875V20.34378A2.53461,2.53461,0,0,1,17.78219,22.875ZM5.43648,4.57522V20.34378a.78229.78229,0,0,0,.78125.78125H17.78219a.78249.78249,0,0,0,.78222-.78125V4.57522Z" }), jsxRuntimeExports.jsx("path", { d: "M8.47555,18.07913a.87481.87481,0,0,1-.875-.875v-8.708a.875.875,0,0,1,1.75,0v8.708A.87481.87481,0,0,1,8.47555,18.07913Z" }), jsxRuntimeExports.jsx("path", { d: "M12.01949,18.07913a.87481.87481,0,0,1-.875-.875v-8.708a.875.875,0,0,1,1.75,0v8.708A.87481.87481,0,0,1,12.01949,18.07913Z" }), jsxRuntimeExports.jsx("path", { d: "M15.56246,18.07913a.87481.87481,0,0,1-.875-.875v-8.708a.875.875,0,1,1,1.75,0v8.708A.87481.87481,0,0,1,15.56246,18.07913Z" }), jsxRuntimeExports.jsx("path", { d: "M21.167,4.57522H2.833a.875.875,0,1,1,0-1.75H21.167a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M14.46187,2.875H9.53805a.875.875,0,1,1,0-1.75h4.92382a.875.875,0,0,1,0,1.75Z" })] })),
    briefcase: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.19,22.11H3.81a2.69,2.69,0,0,1-2.69-2.68v-11A2.69,2.69,0,0,1,3.81,5.7H20.19a2.68,2.68,0,0,1,2.68,2.68v11A2.68,2.68,0,0,1,20.19,22.11ZM3.81,7.45a.93.93,0,0,0-.94.93v11a.94.94,0,0,0,.94.93H20.19a.93.93,0,0,0,.93-.93v-11a.92.92,0,0,0-.93-.93Z" }), jsxRuntimeExports.jsx("path", { d: "M16.31,7.42H7.69a.88.88,0,0,1-.87-.88V4A2.15,2.15,0,0,1,9,1.89H15A2.15,2.15,0,0,1,17.18,4v2.5A.88.88,0,0,1,16.31,7.42ZM8.57,5.67h6.86V4a.4.4,0,0,0-.4-.4H9a.4.4,0,0,0-.4.4Z" }), jsxRuntimeExports.jsx("path", { d: "M19.34,14.07H4.66a.88.88,0,0,1,0-1.75H19.34a.88.88,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M13.44,15.4H10.56a.88.88,0,1,1,0-1.75h2.88a.88.88,0,1,1,0,1.75Z" })] })),
    arrowDown: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,20.87a.88.88,0,0,1-.88-.87V4a.88.88,0,1,1,1.75,0V20A.87.87,0,0,1,12,20.87Z" }), jsxRuntimeExports.jsx("path", { d: "M12,20.87a.88.88,0,0,1-.62-.25l-6-6a.88.88,0,0,1,1.24-1.24l6,6A.87.87,0,0,1,12,20.87Z" }), jsxRuntimeExports.jsx("path", { d: "M12,20.87a.87.87,0,0,1-.62-1.49l6-6a.88.88,0,1,1,1.24,1.24l-6,6A.88.88,0,0,1,12,20.87Z" })] })),
    arrowLeft: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20,13H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" }), jsxRuntimeExports.jsx("path", { d: "M4,13a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6-6a1,1,0,1,1,1.42,1.42l-6,6A1,1,0,0,1,4,13Z" }), jsxRuntimeExports.jsx("path", { d: "M10,19a1,1,0,0,1-.71-.29l-6-6a1,1,0,0,1,1.42-1.42l6,6a1,1,0,0,1,0,1.42A1,1,0,0,1,10,19Z" })] })),
    arrowRight: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20,12.88H4a.88.88,0,0,1,0-1.76H20a.88.88,0,0,1,0,1.76Z" }), jsxRuntimeExports.jsx("path", { d: "M14,18.88a.88.88,0,0,1-.62-1.5l6-6a.88.88,0,1,1,1.24,1.24l-6,6A.89.89,0,0,1,14,18.88Z" }), jsxRuntimeExports.jsx("path", { d: "M20,12.88a.89.89,0,0,1-.62-.26l-6-6a.88.88,0,0,1,1.24-1.24l6,6a.88.88,0,0,1-.62,1.5Z" })] })),
    arrowUp: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,20.88a.89.89,0,0,1-.88-.88V4a.88.88,0,1,1,1.75,0V20A.88.88,0,0,1,12,20.88Z" }), jsxRuntimeExports.jsx("path", { d: "M18,10.88a.89.89,0,0,1-.62-.26l-6-6a.88.88,0,0,1,1.24-1.24l6,6a.88.88,0,0,1-.62,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M6,10.88a.88.88,0,0,1-.62-1.5l6-6a.88.88,0,0,1,1.24,1.24l-6,6A.89.89,0,0,1,6,10.88Z" })] })),
    chevronDown: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,16.88a.89.89,0,0,1-.62-.26l-8-8A.88.88,0,0,1,4.62,7.38l8,8a.88.88,0,0,1-.62,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M12,16.88a.88.88,0,0,1-.62-1.5l8-8a.88.88,0,0,1,1.24,1.24l-8,8A.89.89,0,0,1,12,16.88Z" })] })),
    chevronLeft: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8,12.88a.88.88,0,0,1-.62-1.5l8-8a.88.88,0,0,1,1.24,1.24l-8,8A.89.89,0,0,1,8,12.88Z" }), jsxRuntimeExports.jsx("path", { d: "M16,20.88a.89.89,0,0,1-.62-.26l-8-8a.88.88,0,0,1,1.24-1.24l8,8a.88.88,0,0,1-.62,1.5Z" })] })),
    chevronRight: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8,20.88a.88.88,0,0,1-.62-1.5l8-8a.88.88,0,0,1,1.24,1.24l-8,8A.89.89,0,0,1,8,20.88Z" }), jsxRuntimeExports.jsx("path", { d: "M16,12.88a.89.89,0,0,1-.62-.26l-8-8A.88.88,0,0,1,8.62,3.38l8,8a.88.88,0,0,1-.62,1.5Z" })] })),
    chevronUp: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20,16.88a.89.89,0,0,1-.62-.26l-8-8a.88.88,0,0,1,1.24-1.24l8,8a.88.88,0,0,1-.62,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M4,16.88a.88.88,0,0,1-.62-1.5l8-8a.88.88,0,0,1,1.24,1.24l-8,8A.89.89,0,0,1,4,16.88Z" })] })),
    close: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20,20.87a.88.88,0,0,1-.62-.25l-16-16A.88.88,0,0,1,4.62,3.38l16,16A.87.87,0,0,1,20,20.87Z" }), jsxRuntimeExports.jsx("path", { d: "M4,20.87a.87.87,0,0,1-.62-1.49l16-16a.88.88,0,1,1,1.24,1.24l-16,16A.88.88,0,0,1,4,20.87Z" })] })),
    doubleChevronLeft: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M10.32,12.88a.87.87,0,0,1-.62-.26.88.88,0,0,1,0-1.24l8-8a.88.88,0,1,1,1.24,1.24l-8,8A.91.91,0,0,1,10.32,12.88Z" }), jsxRuntimeExports.jsx("path", { d: "M18.32,20.88a.87.87,0,0,1-.62-.26l-8-8a.88.88,0,0,1,1.24-1.24l8,8a.88.88,0,0,1,0,1.24A.91.91,0,0,1,18.32,20.88Z" }), jsxRuntimeExports.jsx("path", { d: "M5.68,12.88a.91.91,0,0,1-.62-.26.88.88,0,0,1,0-1.24l8-8A.88.88,0,0,1,14.3,4.62l-8,8A.87.87,0,0,1,5.68,12.88Z" }), jsxRuntimeExports.jsx("path", { d: "M13.68,20.88a.91.91,0,0,1-.62-.26l-8-8A.88.88,0,0,1,6.3,11.38l8,8a.88.88,0,0,1,0,1.24A.87.87,0,0,1,13.68,20.88Z" })] })),
    doubleChevronRight: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M13.68,12.88a.91.91,0,0,1-.62-.26l-8-8A.88.88,0,0,1,6.3,3.38l8,8a.88.88,0,0,1,0,1.24A.87.87,0,0,1,13.68,12.88Z" }), jsxRuntimeExports.jsx("path", { d: "M5.68,20.88a.91.91,0,0,1-.62-.26.88.88,0,0,1,0-1.24l8-8a.88.88,0,0,1,1.24,1.24l-8,8A.87.87,0,0,1,5.68,20.88Z" }), jsxRuntimeExports.jsx("path", { d: "M18.32,12.88a.87.87,0,0,1-.62-.26l-8-8a.88.88,0,0,1,1.24-1.24l8,8a.88.88,0,0,1-.62,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M10.32,20.88a.87.87,0,0,1-.62-.26.88.88,0,0,1,0-1.24l8-8a.88.88,0,1,1,1.24,1.24l-8,8A.89.89,0,0,1,10.32,20.88Z" })] })),
    dragAndDrop: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { x: "13.15", y: "17.06", width: "3.31", height: "3.31", rx: "1.44" }), jsxRuntimeExports.jsx("rect", { x: "7.53", y: "17.06", width: "3.31", height: "3.31", rx: "1.44" }), jsxRuntimeExports.jsx("rect", { x: "13.15", y: "10.34", width: "3.31", height: "3.32", rx: "1.44" }), jsxRuntimeExports.jsx("rect", { x: "7.53", y: "10.34", width: "3.31", height: "3.32", rx: "1.44" }), jsxRuntimeExports.jsx("rect", { x: "13.15", y: "3.62", width: "3.31", height: "3.32", rx: "1.44" }), jsxRuntimeExports.jsx("rect", { x: "7.53", y: "3.62", width: "3.31", height: "3.32", rx: "1.44" })] })),
    externalLink: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M16.63,20.88H5.37a2.2,2.2,0,0,1-2.19-2.19V7.42A2.2,2.2,0,0,1,5.37,5.23H9.58A.88.88,0,1,1,9.58,7H5.37a.44.44,0,0,0-.44.44V18.69a.44.44,0,0,0,.44.44H16.63a.44.44,0,0,0,.44-.44V14.63a.88.88,0,1,1,1.75,0v4.06A2.2,2.2,0,0,1,16.63,20.88Z" }), jsxRuntimeExports.jsx("path", { d: "M11.39,13.43a.86.86,0,0,1-.62-.25.88.88,0,0,1,0-1.24l8.56-8.56a.87.87,0,1,1,1.23,1.24L12,13.18A.85.85,0,0,1,11.39,13.43Z" }), jsxRuntimeExports.jsx("path", { d: "M20,11.29a.87.87,0,0,1-.88-.87V4a.88.88,0,0,1,1.75,0v6.42A.87.87,0,0,1,20,11.29Z" }), jsxRuntimeExports.jsx("path", { d: "M20,4.88H13.53a.88.88,0,1,1,0-1.75H20a.88.88,0,0,1,0,1.75Z" })] })),
    firstPage: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M9.43359,12.875a.875.875,0,0,1-.61914-1.49414l8-8a.8756.8756,0,1,1,1.23828,1.23828l-8,8A.87314.87314,0,0,1,9.43359,12.875Z" }), jsxRuntimeExports.jsx("path", { d: "M17.43359,20.875a.87318.87318,0,0,1-.61914-.25586l-8-8a.8756.8756,0,0,1,1.23828-1.23828l8,8a.875.875,0,0,1-.61914,1.49414Z" }), jsxRuntimeExports.jsx("path", { d: "M6.56641,20.875a.87481.87481,0,0,1-.875-.875V4a.875.875,0,0,1,1.75,0V20A.87481.87481,0,0,1,6.56641,20.875Z" })] })),
    lastPage: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M6.56619,20.87522a.875.875,0,0,1-.61914-1.49414l8-8a.8756.8756,0,0,1,1.23828,1.23828l-8,8A.87318.87318,0,0,1,6.56619,20.87522Z" }), jsxRuntimeExports.jsx("path", { d: "M14.56619,12.87522a.87318.87318,0,0,1-.61914-.25586l-8-8A.8756.8756,0,0,1,7.18533,3.38108l8,8a.875.875,0,0,1-.61914,1.49414Z" }), jsxRuntimeExports.jsx("path", { d: "M17.43338,20.87522a.87481.87481,0,0,1-.875-.875v-16a.875.875,0,1,1,1.75,0v16A.87481.87481,0,0,1,17.43338,20.87522Z" })] })),
    minus: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20,12.87H4a.88.88,0,0,1,0-1.75H20a.88.88,0,1,1,0,1.75Z" }) })),
    menu: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { x: "10.42", y: "17.22", width: "3.16", height: "3.16", rx: "1.38" }), jsxRuntimeExports.jsx("rect", { x: "10.42", y: "10.42", width: "3.16", height: "3.16", rx: "1.38" }), jsxRuntimeExports.jsx("rect", { x: "10.42", y: "3.62", width: "3.16", height: "3.16", rx: "1.38" })] })),
    plus: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,20.87a.87.87,0,0,1-.87-.87V4a.88.88,0,1,1,1.75,0V20A.88.88,0,0,1,12,20.87Z" }), jsxRuntimeExports.jsx("path", { d: "M20,12.87H4a.88.88,0,0,1,0-1.75H20a.88.88,0,1,1,0,1.75Z" })] })),
    sidebar: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m20,19.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m20,12.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m20,5.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" })] })),
    slash: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M10.4,20.88l-.17,0a.88.88,0,0,1-.69-1l3.2-16a.88.88,0,0,1,1.72.34l-3.2,16A.88.88,0,0,1,10.4,20.88Z" }) })),
    sortDown: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.14a.88.88,0,0,1-.62-.25L5.54,16a.87.87,0,0,1,0-1.23.85.85,0,0,1,1.23,0l5.85,5.84A.87.87,0,0,1,12,22.14Z" }), jsxRuntimeExports.jsx("path", { d: "M12,22.14a.87.87,0,0,1-.62-1.49l5.85-5.84a.85.85,0,0,1,1.23,0,.87.87,0,0,1,0,1.23l-5.84,5.85A.88.88,0,0,1,12,22.14Z" })] })),
    sortUp: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.84,9.45a.83.83,0,0,1-.61-.26L11.38,3.35a.88.88,0,0,1,1.24-1.24L18.46,8a.87.87,0,0,1,0,1.23A.83.83,0,0,1,17.84,9.45Z" }), jsxRuntimeExports.jsx("path", { d: "M6.16,9.45a.83.83,0,0,1-.62-.26A.87.87,0,0,1,5.54,8l5.84-5.85a.88.88,0,0,1,1.24,1.24L6.77,9.19A.83.83,0,0,1,6.16,9.45Z" })] })),
    sort: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.46,13.54a.85.85,0,0,0-1.23,0L12,18.76,6.77,13.54a.85.85,0,0,0-1.23,0,.87.87,0,0,0,0,1.23l5.84,5.85a.87.87,0,0,0,1.24,0l5.84-5.85A.87.87,0,0,0,18.46,13.54Z" }), jsxRuntimeExports.jsx("path", { d: "M18.46,9.23,12.62,3.38a.88.88,0,0,0-1.24,0L5.54,9.23a.87.87,0,1,0,1.23,1.23L12,5.24l5.23,5.22a.87.87,0,0,0,1.23-1.23Z" })] })),
    expand: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.46,13.54a.85.85,0,0,0-1.23,0L12,18.76,6.77,13.54a.85.85,0,0,0-1.23,0,.87.87,0,0,0,0,1.23l5.84,5.85a.87.87,0,0,0,1.24,0l5.84-5.85A.87.87,0,0,0,18.46,13.54Z" }), jsxRuntimeExports.jsx("path", { d: "M18.46,9.23,12.62,3.38a.88.88,0,0,0-1.24,0L5.54,9.23a.87.87,0,1,0,1.23,1.23L12,5.24l5.23,5.22a.87.87,0,0,0,1.23-1.23Z" })] })),
    collapse: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M5.54,20.62a.87.87,0,0,0,1.23,0L12,15.39l5.23,5.23a.87.87,0,0,0,1.23,0,.88.88,0,0,0,0-1.24l-5.84-5.84a.87.87,0,0,0-1.24,0L5.54,19.38A.88.88,0,0,0,5.54,20.62Z" }), jsxRuntimeExports.jsx("path", { d: "M5.54,4.62l5.84,5.84a.86.86,0,0,0,1.24,0l5.84-5.84a.88.88,0,0,0,0-1.24.86.86,0,0,0-1.23,0L12,8.61,6.77,3.38a.86.86,0,0,0-1.23,0A.88.88,0,0,0,5.54,4.62Z" })] })),
    caretDown: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M4,9.25c0-.07,0-.14.08-.2a.72.72,0,0,1,.69-.43H19.09a1.58,1.58,0,0,1,.31,0,.76.76,0,0,1,.45,1.2,1.22,1.22,0,0,1-.15.17l-7.07,7.08a.79.79,0,0,1-1.25,0l-7-7A1.4,1.4,0,0,1,4,9.53Z" }) })),
    caretUp: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20,14.75c0,.07-.05.14-.08.2a.72.72,0,0,1-.69.43H4.91a1.58,1.58,0,0,1-.31,0,.76.76,0,0,1-.45-1.2A1.22,1.22,0,0,1,4.3,14l7.07-7.08a.79.79,0,0,1,1.25,0l7,7a1.4,1.4,0,0,1,.38.55Z" }) })),
    star: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M18.9,19.91A2,2,0,0,1,16,21.74c-1.25-.67-2.49-1.37-3.72-2.06a.41.41,0,0,0-.45,0q-1.86,1-3.72,2.07a2,2,0,0,1-2.8-.95,2,2,0,0,1-.14-1.17c.24-1.48.48-3,.73-4.44a.53.53,0,0,0-.15-.5c-1-1.07-2.1-2.14-3.13-3.23A2,2,0,0,1,3.24,8.2,4.42,4.42,0,0,1,4.13,8L8,7.41a.33.33,0,0,0,.3-.23l1.83-3.9a2,2,0,0,1,3.76,0c.6,1.3,1.21,2.59,1.81,3.89A.36.36,0,0,0,16,7.4l4.21.65a2,2,0,0,1,1.16,3.45l-3.12,3.2a.43.43,0,0,0-.13.4c.25,1.49.49,3,.73,4.48A2.63,2.63,0,0,1,18.9,19.91ZM7.09,20l.23-.11,3.61-2a2,2,0,0,1,2.12,0l3.58,2,.25.13c0-.1,0-.17,0-.24-.23-1.45-.46-2.91-.7-4.36a2.15,2.15,0,0,1,.63-2l3-3.09.18-.2-.22,0-4.14-.66a2.09,2.09,0,0,1-1.7-1.27c-.59-1.28-1.19-2.56-1.79-3.84L12,4l-.14.27c-.61,1.3-1.22,2.6-1.82,3.9a2,2,0,0,1-1.5,1.17c-.94.17-1.89.3-2.83.44L4,10l.24.25,3,3.16a2,2,0,0,1,.57,1.76c-.13.89-.29,1.78-.43,2.68C7.32,18.56,7.21,19.24,7.09,20Z" }) })),
    starFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.39,11.49a1.92,1.92,0,0,0,.49-2.09,2,2,0,0,0-1.65-1.35L16,7.4a.36.36,0,0,1-.33-.23c-.6-1.3-1.21-2.59-1.81-3.89a2,2,0,0,0-3.76,0L8.29,7.18a.33.33,0,0,1-.3.23L4.12,8a4.48,4.48,0,0,0-.88.2,2,2,0,0,0-.67,3.25c1,1.09,2.08,2.16,3.13,3.23a.53.53,0,0,1,.15.5c-.25,1.48-.49,3-.73,4.44a2,2,0,0,0,.14,1.17,2,2,0,0,0,2.8.95q1.86-1,3.72-2.07a.41.41,0,0,1,.45,0c1.23.69,2.47,1.39,3.72,2.06a2,2,0,0,0,2.95-1.83,2.63,2.63,0,0,0,0-.33c-.24-1.49-.48-3-.73-4.48a.41.41,0,0,1,.13-.4Q19.83,13.11,21.39,11.49Z" }) })),
    sparkles: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.09,3.36s-.1.16-.16.27c-.06.11-.14.27-.18.35-.05.08-.16.3-.26.49-.1.18-.2.38-.23.43-.03.05-.14.26-.25.46-.3.58-.37.7-.43.75-.03.03-.16.11-.29.18-.38.2-.39.21-.49.27-.05.03-.12.07-.15.09s-.26.14-.51.28c-.49.28-1.09.61-1.18.66-.1.06-.09.13.04.19.06.03.24.13.39.21.15.09.35.19.43.24.09.05.33.19.55.31.22.12.4.22.41.22,0,0,.11.06.23.13.12.07.28.16.34.19.19.1.33.25.48.56.14.26.27.52.53.99.07.13.19.36.28.52.46.89.49.93.54.87.03-.03.12-.2.42-.77.1-.19.22-.42.28-.52.15-.29.37-.68.52-.97.08-.14.17-.32.21-.4.06-.1.13-.16.33-.28.14-.08.26-.15.26-.15,0,0,.12-.06.25-.14.13-.08.24-.14.25-.14s.12-.06.25-.14c.13-.08.24-.14.24-.14s.08-.04.16-.09c.15-.09.36-.21.6-.34.54-.29.54-.3.21-.48-.13-.07-.32-.17-.42-.23-.2-.12-.23-.13-.58-.33-.14-.07-.3-.17-.36-.21-.06-.04-.12-.07-.13-.07s-.07-.03-.13-.07c-.06-.04-.22-.13-.36-.21-.31-.17-.45-.26-.49-.31-.02-.02-.1-.16-.17-.3-.13-.25-.25-.48-.51-.95-.06-.11-.19-.36-.29-.55s-.25-.48-.33-.63c-.08-.15-.15-.29-.15-.3,0-.06-.06-.05-.11.01Z" }), jsxRuntimeExports.jsx("path", { d: "M8.61,6.98c-.06.1-.47.9-.61,1.18-.07.14-.19.37-.27.52-.08.15-.31.59-.51.98-.39.76-.66,1.26-.71,1.34-.02.04-.7.46-.73.46,0,0-.22.12-.48.28-.26.15-.47.28-.48.28s-.18.1-.4.23c-.21.13-.39.23-.4.23s-.15.08-.32.18c-.17.1-.32.18-.33.18,0,0-.04.02-.07.04-.03.02-.13.09-.23.14-.28.15-.43.26-.44.31,0,.04.6.42,1.13.71.05.02.27.16.51.29s.47.27.53.31c.06.04.17.1.24.15.07.05.14.08.14.08,0,0,.13.07.27.15.14.08.31.18.38.22s.25.14.4.23l.28.16.25.5c.14.28.34.65.43.84.24.45.52,1.01.9,1.73.51.99.53,1.03.58,1.04.03,0,.12-.15.26-.41.12-.23.36-.7.53-1.04.41-.79.65-1.27,1.03-1.99.17-.32.33-.62.37-.66s.14-.12.23-.16c.09-.05.21-.11.25-.14.05-.03.11-.07.14-.08s.14-.08.26-.15c.12-.07.29-.17.37-.21.09-.05.31-.18.51-.29.19-.11.59-.34.87-.51,1.18-.69,1.24-.72,1.22-.77-.02-.03-.57-.38-.6-.38,0,0-.77-.44-.84-.49-.02-.02-.07-.04-.09-.05s-.22-.12-.43-.25c-.21-.12-.38-.22-.39-.22,0,0-.18-.1-.4-.23-.21-.13-.39-.23-.4-.23-.02,0-.65-.38-.7-.42-.03-.03-.09-.13-.14-.22-.14-.28-.56-1.08-.9-1.74-.41-.78-.64-1.23-.9-1.75-.12-.23-.23-.41-.25-.41-.02,0-.06.03-.08.07Z" }), jsxRuntimeExports.jsx("path", { d: "M15.83,15.14s-.04.09-.06.12c-.02.02-.1.18-.19.35-.68,1.27-.67,1.25-.86,1.34-.09.05-.29.16-.45.25-.16.08-.3.16-.32.17-.02.01-.14.08-.28.15-.52.28-.55.3-.55.36s.03.07.57.36c.12.06.28.15.35.19s.2.11.29.16c.49.26.58.33.65.46.04.08.09.16.1.19.02.03.1.19.2.36s.21.38.26.48c.05.09.15.27.21.39.14.27.2.29.3.09.04-.07.11-.21.16-.3.2-.37.23-.42.37-.69.33-.62.37-.67.54-.76.09-.05.24-.13.33-.18.09-.05.24-.13.33-.18.09-.05.23-.13.32-.18.09-.05.26-.14.37-.2.21-.12.27-.16.25-.21,0-.03-.08-.07-.99-.56-.12-.06-.29-.16-.38-.21-.1-.05-.22-.12-.29-.15-.12-.06-.15-.1-.33-.43-.06-.1-.14-.25-.18-.34-.18-.32-.41-.74-.5-.93-.1-.17-.18-.21-.23-.09Z" })] })),
    burgerMenu: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m20,19.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m20,12.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m20,5.87H4c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h16c.48,0,.88.39.88.88s-.39.88-.88.88Z" })] })),
    exchange: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M16.66211,11.30093a5.33783,5.33783,0,1,1-5.33789,5.33777,5.33783,5.33783,0,0,1,5.33789-5.33777m0-1.75A7.08783,7.08783,0,1,0,23.75,16.6387a7.09591,7.09591,0,0,0-7.08789-7.08777Z" }), jsxRuntimeExports.jsx("path", { d: "M13.69922,16.33206a.20042.20042,0,0,1-.207-.207V15.8096a.20042.20042,0,0,1,.207-.207H16.9668a.20044.20044,0,0,1,.207.207V16.125a.20044.20044,0,0,1-.207.207Zm0,1.27832a.20042.20042,0,0,1-.207-.207v-.31543a.20042.20042,0,0,1,.207-.207H16.9668a.20044.20044,0,0,1,.207.207v.31543a.20044.20044,0,0,1-.207.207Zm3.06933,2.23145a2.78262,2.78262,0,0,1-1.39062-.31446,1.9614,1.9614,0,0,1-.82324-.88281,3.1891,3.1891,0,0,1-.28809-1.31348v-1.458a3.15033,3.15033,0,0,1,.292-1.31836,2.01027,2.01027,0,0,1,.82422-.87793,2.75311,2.75311,0,0,1,1.38574-.31446,3.392,3.392,0,0,1,1.10254.16211,2.37668,2.37668,0,0,1,.78321.42676,1.87943,1.87943,0,0,1,.47265.59473,1.60139,1.60139,0,0,1,.1709.66113.15172.15172,0,0,1-.0498.13477.19876.19876,0,0,1-.13965.05371h-.49512a.2024.2024,0,0,1-.13476-.04492.3289.3289,0,0,1-.08985-.16211,1.27171,1.27171,0,0,0-.57129-.81836,2.063,2.063,0,0,0-1.04883-.24317,1.5683,1.5683,0,0,0-1.16113.42285,1.90343,1.90343,0,0,0-.43164,1.36817v1.36816a1.90343,1.90343,0,0,0,.43164,1.36817,1.5683,1.5683,0,0,0,1.16113.42285,2.063,2.063,0,0,0,1.04883-.24317,1.27136,1.27136,0,0,0,.57129-.81933.33831.33831,0,0,1,.08985-.16211.20761.20761,0,0,1,.13476-.04492h.49512a.19964.19964,0,0,1,.13965.05468.15172.15172,0,0,1,.0498.13477,1.60139,1.60139,0,0,1-.1709.66113,1.87943,1.87943,0,0,1-.47265.59473,2.37668,2.37668,0,0,1-.78321.42676A3.392,3.392,0,0,1,16.76855,19.84183Z" }), jsxRuntimeExports.jsx("path", { d: "M16.76855,20.09183a3.05052,3.05052,0,0,1-1.51464-.34668,2.2183,2.2183,0,0,1-.92481-.99317,3.16339,3.16339,0,0,1-.26758-.8916h-.3623a.45029.45029,0,0,1-.457-.457v-.31543a.45027.45027,0,0,1,.457-.457h.31738v-.04883h-.31738a.45029.45029,0,0,1-.457-.457V15.8096a.45027.45027,0,0,1,.457-.457h.36133a3.12364,3.12364,0,0,1,.27343-.90723,2.25923,2.25923,0,0,1,.92481-.98535,3.00531,3.00531,0,0,1,1.50976-.34766,3.66379,3.66379,0,0,1,1.1836.17579,2.64106,2.64106,0,0,1,.86426.47265,2.1621,2.1621,0,0,1,.53515.67481,1.85692,1.85692,0,0,1,.19629.76367.3898.3898,0,0,1-.12988.32617.45085.45085,0,0,1-.30957.12012h-.49512a.45236.45236,0,0,1-.29492-.10352.54617.54617,0,0,1-.16895-.28125,1.03158,1.03158,0,0,0-.458-.6748,1.83086,1.83086,0,0,0-.92286-.209,1.31991,1.31991,0,0,0-.98437.34961,1.21281,1.21281,0,0,0-.30273.626H16.9668a.45029.45029,0,0,1,.457.457V16.125a.4503.4503,0,0,1-.457.457h-1.541v.04883h1.541a.45029.45029,0,0,1,.457.457v.31543a.4503.4503,0,0,1-.457.457H15.4834a1.21509,1.21509,0,0,0,.30078.61719,1.31991,1.31991,0,0,0,.98437.34961,1.83086,1.83086,0,0,0,.92286-.209,1.027,1.027,0,0,0,.456-.668.568.568,0,0,1,.1709-.28906.45837.45837,0,0,1,.29492-.10351h.49512a.449.449,0,0,1,.30957.12109.39924.39924,0,0,1,.12793.3457,1.81489,1.81489,0,0,1-.19434.74414,2.15809,2.15809,0,0,1-.53418.67383,2.63956,2.63956,0,0,1-.86523.47363A3.66379,3.66379,0,0,1,16.76855,20.09183Zm-2.20019-2.23145a2.63768,2.63768,0,0,0,.21191.67676,1.70444,1.70444,0,0,0,.72168.77246,2.544,2.544,0,0,0,1.2666.28223A3.16548,3.16548,0,0,0,17.79,19.44339a2.13233,2.13233,0,0,0,.70215-.38086,1.60252,1.60252,0,0,0,.41015-.51465,1.362,1.362,0,0,0,.14258-.501l-.43164.01075a1.43725,1.43725,0,0,1-.66992.99218,2.31115,2.31115,0,0,1-1.17481.27735,1.81587,1.81587,0,0,1-1.33789-.4961,1.76318,1.76318,0,0,1-.456-.9707Zm4.47949.12891v0Zm-3.62109-.62891h1.54l-.043-.27246-1.498.01953v.17871C15.42578,17.31155,15.42676,17.336,15.42676,17.36038Zm-.90918,0h.40918c0-.02344-.001-.04785-.001-.07226v-.17383l-.40918.00586v.21093Zm-.78223,0h.28223l-.001-.02344v-.21l-.31738.00391Zm.78125-.72949h.40918v-.04883H14.5166Zm.90918-.54883h1.541l-.043-.27246-1.4961.01953c-.001.03027-.002.06055-.002.09082Zm-.90918,0h.40918V15.918c0-.02735.001-.05469.002-.082l-.41015.00586-.001.03711Zm-.78125,0h.28125v-.209l.001-.02442-.31836.00391Zm.83106-.72949h.40722a1.76572,1.76572,0,0,1,.457-.97949,1.81587,1.81587,0,0,1,1.33789-.4961,2.31115,2.31115,0,0,1,1.17481.27735,1.51348,1.51348,0,0,1,.68652.96972l.41309.01856a1.3963,1.3963,0,0,0-.14063-.48633,1.60644,1.60644,0,0,0-.41113-.51563,2.13385,2.13385,0,0,0-.70117-.37988,3.16548,3.16548,0,0,0-1.02149-.14844,2.51835,2.51835,0,0,0-1.26074.28125,1.74533,1.74533,0,0,0-.72461.77149A2.55377,2.55377,0,0,0,14.56641,15.35257Zm4.48242-.127.001.00878Z" }), jsxRuntimeExports.jsx("path", { d: "M7.33789,2.02347A5.33783,5.33783,0,1,1,2,7.36124,5.33783,5.33783,0,0,1,7.33789,2.02347m0-1.75a7.08783,7.08783,0,1,0,7.08789,7.08777A7.09591,7.09591,0,0,0,7.33789.27347Z" }), jsxRuntimeExports.jsx("path", { d: "M7.02051,11.252a.20889.20889,0,0,1-.16211-.06836.22236.22236,0,0,1-.06348-.15722v-.62989a3.00461,3.00461,0,0,1-1.15625-.34668A1.94813,1.94813,0,0,1,4.94141,9.416a1.56666,1.56666,0,0,1-.252-.7832.18167.18167,0,0,1,.0586-.13086.18963.18963,0,0,1,.13965-.05859H6.02148a.35364.35364,0,0,1,.19336.04492.49065.49065,0,0,1,.1211.11719,1.08678,1.08678,0,0,0,.20312.26074.94919.94919,0,0,0,.3418.20313,1.56633,1.56633,0,0,0,.52637.07617,1.53614,1.53614,0,0,0,.78808-.16211A.49444.49444,0,0,0,8.46,8.543a.4205.4205,0,0,0-.14355-.333,1.339,1.339,0,0,0-.46387-.22949A8.05151,8.05151,0,0,0,7.002,7.76858a5.24242,5.24242,0,0,1-1.165-.373A1.78376,1.78376,0,0,1,5.10352,6.792a1.62944,1.62944,0,0,1-.252-.93164,1.6421,1.6421,0,0,1,.51758-1.22363,2.46456,2.46456,0,0,1,1.42578-.62988V3.377a.21728.21728,0,0,1,.22559-.22558h.74707a.224.224,0,0,1,.15722.06347.21146.21146,0,0,1,.06739.16211v.64746a2.73757,2.73757,0,0,1,1.04394.38672,2.1141,2.1141,0,0,1,.64356.63086,1.33751,1.33751,0,0,1,.22949.67481.18425.18425,0,0,1-.05371.12988.1761.1761,0,0,1-.13477.05859H8.53223a.371.371,0,0,1-.1709-.03613.32909.32909,0,0,1-.126-.11621.61339.61339,0,0,0-.28808-.34668,1.084,1.084,0,0,0-.59375-.14844,1.14045,1.14045,0,0,0-.61622.13965.46915.46915,0,0,0-.2207.42676.456.456,0,0,0,.1211.31543.97738.97738,0,0,0,.40527.23437,6.95569,6.95569,0,0,0,.77832.20606,5.91454,5.91454,0,0,1,1.32324.38281,1.67224,1.67224,0,0,1,.73828.59375,1.66738,1.66738,0,0,1,.2334.91406,1.669,1.669,0,0,1-.26562.93555,1.95026,1.95026,0,0,1-.74219.65723,3.24589,3.24589,0,0,1-1.11621.333v.62989a.23209.23209,0,0,1-.22461.22558Z" })] })),
    filter: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12,22.37a4,4,0,0,1-4-4V14.56a.69.69,0,0,0-.21-.5l-5.4-5.4a2.5,2.5,0,0,1-.73-1.73V5.67a4.06,4.06,0,0,1,4.05-4H18.33a4.05,4.05,0,0,1,4,4.05V6.93a2.4,2.4,0,0,1-.72,1.73l-5.4,5.4a.69.69,0,0,0-.21.5v3.77A4,4,0,0,1,12,22.37Zm-6.33-19a2.3,2.3,0,0,0-2.3,2.3V6.93a.75.75,0,0,0,.21.49L9,12.83a2.45,2.45,0,0,1,.72,1.73v3.77a2.29,2.29,0,0,0,4.58,0V14.56A2.45,2.45,0,0,1,15,12.83l5.4-5.41a.67.67,0,0,0,.21-.5V5.67a2.29,2.29,0,0,0-2.29-2.3Z" }) })),
    filterMenu: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m22,5H2c-.48,0-.88.39-.88.88s.39.88.88.88h20c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m19.03,11.12H4.97c-.45,0-.82.39-.82.88s.37.88.82.88h14.07c.45,0,.82-.39.82-.88s-.37-.88-.82-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m15.71,17.25h-7.42c-.36,0-.65.39-.65.88s.29.88.65.88h7.42c.36,0,.65-.39.65-.88s-.29-.88-.65-.88Z" })] })),
    filterSelect: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.65,8.66a2.4,2.4,0,0,0,.72-1.73V5.67a4.05,4.05,0,0,0-4-4H5.67a4.06,4.06,0,0,0-4,4.05V6.93a2.5,2.5,0,0,0,.73,1.73l5.4,5.4a.69.69,0,0,1,.21.5v3.77a4,4,0,0,0,8.08,0v-.92a5.69,5.69,0,0,0,.83.07A5.48,5.48,0,0,0,21.4,8.91h0ZM12,20.62a2.29,2.29,0,0,1-2.29-2.29V14.56A2.49,2.49,0,0,0,9,12.82L3.58,7.42a.75.75,0,0,1-.21-.49V5.67a2.3,2.3,0,0,1,2.3-2.3H18.33a2.29,2.29,0,0,1,2.29,2.3V6.92a.67.67,0,0,1-.21.5l-.22.23a5.41,5.41,0,0,0-3.32-1.13,5.48,5.48,0,0,0-2.58,10.31v1.5A2.29,2.29,0,0,1,12,20.62Zm3.13-3.43h0Zm5.34-6.76-4.11,4.11a.6.6,0,0,1-.86,0l-1.84-1.83a.62.62,0,0,1,0-.87.61.61,0,0,1,.86,0l1.41,1.4,3.68-3.68a.61.61,0,0,1,.86.86Zm.37-2.21,0,0Z" }) })),
    filterClear: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.65,8.66a2.4,2.4,0,0,0,.72-1.73V5.67a4.05,4.05,0,0,0-4-4H5.67a4.06,4.06,0,0,0-4,4.05V6.93a2.5,2.5,0,0,0,.73,1.73l5.4,5.4a.69.69,0,0,1,.21.5v3.77a4,4,0,0,0,8.08,0v-.92a5.69,5.69,0,0,0,.83.07A5.48,5.48,0,0,0,21.4,8.91h0ZM19.46,14a.54.54,0,0,1,0,.78.51.51,0,0,1-.39.16.54.54,0,0,1-.39-.16l-1.93-1.93-1.93,1.93a.54.54,0,0,1-.39.16.53.53,0,0,1-.39-.16A.54.54,0,0,1,14,14L16,12.06,14,10.12a.54.54,0,0,1,0-.78.56.56,0,0,1,.78,0l1.93,1.94,1.93-1.94a.56.56,0,0,1,.78,0,.54.54,0,0,1,0,.78l-1.93,1.94Zm1.16-7.07a.67.67,0,0,1-.21.5l-.22.23a5.41,5.41,0,0,0-3.32-1.13,5.48,5.48,0,0,0-2.58,10.31v1.5a2.29,2.29,0,0,1-4.58,0V14.56A2.49,2.49,0,0,0,9,12.82L3.58,7.42a.75.75,0,0,1-.21-.49V5.67a2.3,2.3,0,0,1,2.3-2.3H18.33a2.29,2.29,0,0,1,2.29,2.3Z" }) })),
    logout: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M14.14,22.36H3.52A2.39,2.39,0,0,1,1.13,20V4a2.39,2.39,0,0,1,2.39-2.4H14.14A2.4,2.4,0,0,1,16.54,4V6.7a.88.88,0,0,1-1.75,0V4a.66.66,0,0,0-.65-.65H3.52A.65.65,0,0,0,2.88,4V20a.65.65,0,0,0,.64.65H14.14a.65.65,0,0,0,.65-.65V17.67a.88.88,0,1,1,1.75,0V20A2.4,2.4,0,0,1,14.14,22.36Z" }), jsxRuntimeExports.jsx("path", { d: "M22.81,12.33a.77.77,0,0,0,.06-.3V12a.77.77,0,0,0-.06-.3,1,1,0,0,0-.16-.24l0,0L19.33,8.09a.88.88,0,0,0-1.24,1.24l1.8,1.79H9.21a.88.88,0,0,0,0,1.75H19.89l-1.8,1.8a.88.88,0,0,0,0,1.24.87.87,0,0,0,.62.26.89.89,0,0,0,.62-.26l3.29-3.29,0,0A1,1,0,0,0,22.81,12.33Z" })] })),
    mappingRules: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12,22.87a2.45,2.45,0,0,1-.9-4.74V15.42a3.44,3.44,0,0,1-.93-.38l-1.9,1.9a2.49,2.49,0,0,1-.51,2.75,2.46,2.46,0,1,1-.73-4L9,13.8a3.46,3.46,0,0,1-.39-.93H5.88a2.46,2.46,0,1,1,0-1.75H8.57A3.46,3.46,0,0,1,9,10.19L7.06,8.3A2.46,2.46,0,1,1,8.5,6.06a2.55,2.55,0,0,1-.21,1L10.19,9a3.82,3.82,0,0,1,.93-.39V5.89a2.47,2.47,0,1,1,1.75,0V8.56A3.51,3.51,0,0,1,13.8,9l1.9-1.9a2.46,2.46,0,1,1,4,.73,2.53,2.53,0,0,1-2.75.51L15,10.19a3.33,3.33,0,0,1,.39.93h2.69a2.46,2.46,0,1,1,0,1.75H15.43a3.33,3.33,0,0,1-.39.93l1.9,1.9a2.46,2.46,0,1,1-1.44,2.24,2.55,2.55,0,0,1,.21-1L13.8,15a3.19,3.19,0,0,1-.93.38v2.69A2.46,2.46,0,0,1,12,22.87Zm0-3.16a.71.71,0,0,0-.71.71.71.71,0,1,0,.71-.71ZM6,17.24a.7.7,0,0,0-.5.21.71.71,0,0,0,1,1,.7.7,0,0,0,0-1A.67.67,0,0,0,6,17.24Zm11.92,0a.7.7,0,0,0-.5.21.72.72,0,0,0,0,1,.71.71,0,0,0,1-1A.69.69,0,0,0,18,17.23Zm-6-7A1.79,1.79,0,1,0,13.79,12,1.79,1.79,0,0,0,12,10.2Zm8.42,1.09a.7.7,0,0,0-.71.7.71.71,0,0,0,.71.71.7.7,0,0,0,.7-.71A.7.7,0,0,0,20.42,11.29Zm-16.84,0a.7.7,0,0,0-.71.7.71.71,0,0,0,1.42,0A.7.7,0,0,0,3.58,11.29ZM6,5.35a.69.69,0,0,0-.5.21.71.71,0,0,0,1,1A.71.71,0,0,0,6,5.35ZM18,5.34a.72.72,0,0,0-.5.2.71.71,0,0,0,1,1,.72.72,0,0,0,0-1A.74.74,0,0,0,18,5.34ZM12,2.87a.71.71,0,0,0,0,1.42.71.71,0,1,0,0-1.42Z" }) })),
    production: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M4.72727,21.60257A1.60417,1.60417,0,0,1,3.12473,20V4A1.60417,1.60417,0,0,1,4.72727,2.39749a1.62119,1.62119,0,0,1,.76953.19629l14.54785,8.00195a1.60251,1.60251,0,0,1,.00391,2.80664l-14.54883,8.001A1.599,1.599,0,0,1,4.72727,21.60257ZM4.87473,4.24905V19.75L18.96653,12Z" }) })),
    qa: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.0383,22.875a.87318.87318,0,0,1-.61914-.25586l-4.31152-4.31152a.8756.8756,0,0,1,1.23828-1.23828l4.31152,4.31152A.875.875,0,0,1,22.0383,22.875Z" }), jsxRuntimeExports.jsx("path", { d: "M11.12912,21.211a10.043,10.043,0,1,1,10.043-10.043A10.05387,10.05387,0,0,1,11.12912,21.211Zm0-18.33594a8.293,8.293,0,1,0,8.293,8.293A8.30174,8.30174,0,0,0,11.12912,2.875Z" }), jsxRuntimeExports.jsx("path", { d: "M9.53049,14.51761a.28588.28588,0,0,1-.209-.07227c-.04785-.04785-.08593-.08984-.11425-.123l-.29-.38378a2.41477,2.41477,0,0,1-.75879.11035A3.32029,3.32029,0,0,1,6.799,13.793a2.00789,2.00789,0,0,1-.90332-.77051,2.51748,2.51748,0,0,1-.35351-1.291c-.00586-.24511-.00879-.49023-.00879-.7373s.00293-.49316.00879-.7373a2.5272,2.5272,0,0,1,.35742-1.291,2.08118,2.08118,0,0,1,.91211-.78906,3.22346,3.22346,0,0,1,1.34668-.26367,3.24959,3.24959,0,0,1,1.35547.26367,2.1076,2.1076,0,0,1,.916.78906,2.44345,2.44345,0,0,1,.35352,1.291c.01172.24414.0166.49023.0166.7373s-.00488.49219-.0166.7373a2.3776,2.3776,0,0,1-.61328,1.63575l.62207.88672a.09846.09846,0,0,1,.0166.03418.15433.15433,0,0,1,.00879.05078.14961.14961,0,0,1-.043.124.16829.16829,0,0,1-.12793.05469ZM8.15842,12.82229a1.02147,1.02147,0,0,0,.7373-.27343,1.20739,1.20739,0,0,0,.30274-.86914q.01611-.375.0166-.707,0-.33252-.0166-.69043a1.4354,1.4354,0,0,0-.14551-.65235.87613.87613,0,0,0-.36133-.37012,1.1217,1.1217,0,0,0-.5332-.11914,1.104,1.104,0,0,0-.51953.11914.846.846,0,0,0-.36231.37012,1.55694,1.55694,0,0,0-.14941.65235q-.00879.35742-.00879.69043,0,.33252.00879.707a1.24748,1.24748,0,0,0,.30664.86914A.99576.99576,0,0,0,8.15842,12.82229Z" }), jsxRuntimeExports.jsx("path", { d: "M11.33811,13.9639a.17127.17127,0,0,1-.124-.05567.168.168,0,0,1-.05469-.123.31764.31764,0,0,1,.00782-.07715l2.00293-5.47168a.34973.34973,0,0,1,.10644-.166.3277.3277,0,0,1,.22559-.07226h1.26172a.32767.32767,0,0,1,.22558.07226.33572.33572,0,0,1,.10645.166L17.091,13.708a.18213.18213,0,0,1,.0166.07715.16918.16918,0,0,1-.05567.123.18018.18018,0,0,1-.13183.05567H15.87229a.264.264,0,0,1-.19239-.06348.33385.33385,0,0,1-.081-.11523l-.332-.86915H12.99143l-.32422.86915a.35234.35234,0,0,1-.07617.11523.27555.27555,0,0,1-.20508.06348ZM13.341,11.68851h1.585l-.793-2.25Z" })] })),
    recalculate: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M2.0009,17.99808a.95776.95776,0,0,1-.17285-.01661.87555.87555,0,0,1-.68653-1.03027l.50293-2.51562a1.718,1.718,0,0,1,2.00879-1.33985l2.5166.50293a.87544.87544,0,1,1-.34375,1.7168l-2.51562-.50293L2.85832,17.295A.87612.87612,0,0,1,2.0009,17.99808Z" }), jsxRuntimeExports.jsx("path", { d: "M12.12,22.07913a10.03609,10.03609,0,0,1-9.81055-7.76269.87478.87478,0,0,1,1.70313-.4004,8.33181,8.33181,0,0,0,16.209.02833.8745.8745,0,1,1,1.70117.40625A10.03974,10.03974,0,0,1,12.12,22.07913Z" }), jsxRuntimeExports.jsx("path", { d: "M20.68351,10.86624a1.71342,1.71342,0,0,1-.33691-.0332L17.83,10.33011a.87544.87544,0,0,1,.34375-1.7168l2.51562.50293.45215-2.48145a.87544.87544,0,0,1,1.7168.34375l-.50293,2.51465a1.709,1.709,0,0,1-1.67188,1.373Z" }), jsxRuntimeExports.jsx("path", { d: "M3.1718,10.71585a.87575.87575,0,0,1-.85157-1.0791A10.08165,10.08165,0,0,1,21.91789,9.626a.875.875,0,1,1-1.70117.41015A8.33206,8.33206,0,0,0,4.02141,10.045.87555.87555,0,0,1,3.1718,10.71585Z" }), jsxRuntimeExports.jsx("path", { d: "M10.13762,14.73147a2.61515,2.61515,0,0,1-.94336-.15527,1.79423,1.79423,0,0,1-1.06543-1.06543,2.6334,2.6334,0,0,1-.15918-.78027c-.00489-.13672-.00879-.292-.01074-.4668q-.00439-.26074,0-.53027c.00195-.17969.00585-.33985.01074-.48145a2.5097,2.5097,0,0,1,.16308-.77734,1.829,1.829,0,0,1,.40918-.62891,1.89432,1.89432,0,0,1,.667-.4209,2.61557,2.61557,0,0,1,.92871-.15136,2.63779,2.63779,0,0,1,.93652.15136,1.85139,1.85139,0,0,1,.66309.4209,1.88753,1.88753,0,0,1,.40918.62891,2.45738,2.45738,0,0,1,.167.77734c.00488.1416.00879.30176.01074.48145q.0044.26953,0,.53027c-.00195.17481-.00586.33008-.01074.4668a2.54672,2.54672,0,0,1-.16309.78027,1.90637,1.90637,0,0,1-.40137.63672,1.81584,1.81584,0,0,1-.66015.42871A2.63347,2.63347,0,0,1,10.13762,14.73147Zm0-1.0996a.64775.64775,0,0,0,.57226-.25391,1.20625,1.20625,0,0,0,.18555-.68555c.01074-.14648.0166-.30078.01953-.46289.00195-.16113.00195-.32324,0-.48535-.00293-.16113-.00879-.31055-.01953-.44629a1.19885,1.19885,0,0,0-.18555-.6748.66182.66182,0,0,0-.57226-.26563.65437.65437,0,0,0-.56446.26563,1.23976,1.23976,0,0,0-.19336.6748c0,.13574-.001.28516-.0039.44629-.002.16211-.002.32422,0,.48535.00293.16211.0039.31641.0039.46289a1.22955,1.22955,0,0,0,.19727.68555A.6407.6407,0,0,0,10.13762,13.63187Z", fill: "#f44336" }), jsxRuntimeExports.jsx("path", { d: "M14.83,14.6553a.19352.19352,0,0,1-.18945-.18945v-3.6084l-1.03809.7959a.16283.16283,0,0,1-.14062.03809.21311.21311,0,0,1-.125-.083l-.44727-.584a.20381.20381,0,0,1-.03418-.14746.17036.17036,0,0,1,.08691-.125l1.74414-1.34961a.2948.2948,0,0,1,.08692-.042.39488.39488,0,0,1,.09473-.01074h.94726a.18078.18078,0,0,1,.18945.18945v4.92676a.18916.18916,0,0,1-.05273.13281.17906.17906,0,0,1-.13672.05664Z", fill: "#f44336" })] })),
    save: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20.10517,22.875h-16.21A2.77405,2.77405,0,0,1,1.1247,20.10452V3.89554A2.77405,2.77405,0,0,1,3.89521,1.125H18.0788a.875.875,0,0,1,.61914.25586l3.9209,3.92285a.87277.87277,0,0,1,.25586.61816V20.10452A2.77322,2.77322,0,0,1,20.10517,22.875Zm-1.05371-1.75h1.05371a1.0211,1.0211,0,0,0,1.01953-1.02051V6.28421l-3.25-3.251V5.13772a2.77239,2.77239,0,0,1-2.76953,2.76954h-6.21A2.77322,2.77322,0,0,1,6.1247,5.13772V2.875H3.89521A1.02194,1.02194,0,0,0,2.8747,3.89554v16.209A1.02194,1.02194,0,0,0,3.89521,21.125H4.94892V16.24808a2.77405,2.77405,0,0,1,2.77051-2.77051H16.281a2.77406,2.77406,0,0,1,2.77051,2.77051Zm-12.35254,0H17.30146V16.24808A1.02194,1.02194,0,0,0,16.281,15.22757H7.71943a1.02194,1.02194,0,0,0-1.02051,1.02051ZM7.8747,2.875V5.13772A1.02111,1.02111,0,0,0,8.89521,6.15726h6.21A1.02027,1.02027,0,0,0,16.1247,5.13772V2.875Z" }) })),
    scan: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.02832,22.875a.87012.87012,0,0,1-.61914-.25684l-4.26953-4.2705a.87491.87491,0,1,1,1.23828-1.23633l4.26953,4.27051a.875.875,0,0,1-.61914,1.49316Z" }), jsxRuntimeExports.jsx("path", { d: "M11.05176,21.03616a9.95557,9.95557,0,1,1,9.95507-9.956A9.96655,9.96655,0,0,1,11.05176,21.03616Zm0-18.16113a8.20557,8.20557,0,1,0,8.20507,8.20508A8.21421,8.21421,0,0,0,11.05176,2.875Z" }), jsxRuntimeExports.jsx("path", { d: "M8.707,14.13382A2.88905,2.88905,0,0,1,7.65625,13.961,2.05645,2.05645,0,0,1,6.918,13.4844a2.02049,2.02049,0,0,1-.44727-.709A2.90331,2.90331,0,0,1,6.293,11.9053c-.00586-.15136-.00977-.32422-.0127-.51855s-.00293-.3916,0-.59082c.00293-.2002.00684-.37891.0127-.53614a2.76959,2.76959,0,0,1,.18164-.86523,2.00276,2.00276,0,0,1,.456-.70019,2.06978,2.06978,0,0,1,.74219-.46875A2.90635,2.90635,0,0,1,8.707,8.05667a2.934,2.934,0,0,1,1.043.16895,2.03641,2.03641,0,0,1,.73828.46875,2.088,2.088,0,0,1,.45605.70019,2.71762,2.71762,0,0,1,.18555.86523c.00586.15723.00977.33594.0127.53614q.00439.29883,0,.59082c-.00293.19433-.00684.36719-.0127.51855a2.81809,2.81809,0,0,1-.18164.87012,2.12308,2.12308,0,0,1-.44726.709,2.01495,2.01495,0,0,1-.73438.47657A2.91656,2.91656,0,0,1,8.707,14.13382Zm0-1.22363a.72455.72455,0,0,0,.6377-.28223,1.35723,1.35723,0,0,0,.207-.76465c.01074-.16309.01757-.335.0205-.51465s.00293-.36035,0-.54q-.00439-.271-.0205-.498a1.3445,1.3445,0,0,0-.207-.751.73991.73991,0,0,0-.6377-.2959.73059.73059,0,0,0-.62891.2959,1.38581,1.38581,0,0,0-.21484.751c0,.15136-.00195.31738-.00391.498-.00293.17969-.00293.36035,0,.54.002.17969.00391.35156.00391.51465A1.36485,1.36485,0,0,0,8.083,12.628.715.715,0,0,0,8.707,12.91019Z" }), jsxRuntimeExports.jsx("path", { d: "M13.93262,14.04983a.217.217,0,0,1-.21094-.21093V9.82034l-1.15625.88672a.18419.18419,0,0,1-.15625.042.23617.23617,0,0,1-.13965-.09277l-.49707-.64941a.22633.22633,0,0,1-.03809-.165.1879.1879,0,0,1,.09668-.13965l1.94141-1.502a.3636.3636,0,0,1,.09668-.04687.43586.43586,0,0,1,.10644-.0127h1.05469a.20994.20994,0,0,1,.15235.05957.20538.20538,0,0,1,.05859.15137V13.8389a.209.209,0,0,1-.05859.14746.20185.20185,0,0,1-.15235.06347Z" })] })),
    search: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M22.029,22.875a.87318.87318,0,0,1-.61914-.25586L17.4733,18.68265a9.97363,9.97363,0,1,1,1.23242-1.24317l3.94239,3.94141A.875.875,0,0,1,22.029,22.875Zm-10.97753-20a8.20557,8.20557,0,1,0,8.20605,8.20508A8.21421,8.21421,0,0,0,11.05143,2.875Z" }) })),
    sortAscending: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m18.82,21.7H5.18c-.55,0-1-.45-1-1s.45-1,1-1h13.63c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,15.9h-10.63c-.55,0-1-.45-1-1s.45-1,1-1h10.63c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,10.1h-7.63c-.55,0-1-.45-1-1s.45-1,1-1h7.63c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,4.3h-4.63c-.55,0-1-.45-1-1s.45-1,1-1h4.63c.55,0,1,.45,1,1s-.45,1-1,1Z" })] })),
    sortDescending: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m18.82,4.3H5.18c-.55,0-1-.45-1-1s.45-1,1-1h13.63c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,10.1h-10.63c-.55,0-1-.45-1-1s.45-1,1-1h10.63c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,15.9h-7.63c-.55,0-1-.45-1-1s.45-1,1-1h7.63c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,21.7h-4.63c-.55,0-1-.45-1-1s.45-1,1-1h4.63c.55,0,1,.45,1,1s-.45,1-1,1Z" })] })),
    sortInactive: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m18.82,21.7h-8.52c-.55,0-1-.45-1-1s.45-1,1-1h8.52c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,15.9H6.36c-.55,0-1-.45-1-1s.45-1,1-1h12.46c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,10.1h-8.52c-.55,0-1-.45-1-1s.45-1,1-1h8.52c.55,0,1,.45,1,1s-.45,1-1,1Z" }), jsxRuntimeExports.jsx("path", { d: "m18.82,4.3H6.36c-.55,0-1-.45-1-1s.45-1,1-1h12.46c.55,0,1,.45,1,1s-.45,1-1,1Z" })] })),
    test: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.17121,22.875H5.82844A2.4844,2.4844,0,0,1,3.347,20.39358V3.60647A2.4844,2.4844,0,0,1,5.82844,1.125H18.17121a2.48439,2.48439,0,0,1,2.48145,2.48144V20.39358A2.4844,2.4844,0,0,1,18.17121,22.875Zm-12.34277-20a.73227.73227,0,0,0-.73145.73144V20.39358a.73228.73228,0,0,0,.73145.73145H18.17121a.73228.73228,0,0,0,.73145-.73145V3.60647a.73227.73227,0,0,0-.73145-.73144Z" }), jsxRuntimeExports.jsx("path", { d: "M10.20637,15.56155h0a.87187.87187,0,0,1-.61914-.25683L7.31867,13.03519A.87491.87491,0,0,1,8.557,11.79886l1.64941,1.65039,5.36816-5.36914a.8756.8756,0,1,1,1.23829,1.23828l-5.98731,5.9873A.875.875,0,0,1,10.20637,15.56155Z" })] })),
    moon: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12.75,21.88a9.88,9.88,0,0,1,0-19.76,7,7,0,0,1,.81,0,.87.87,0,0,1,.79.68.89.89,0,0,1-.42.95,6.89,6.89,0,0,0,6,12.37.88.88,0,0,1,1,.26.86.86,0,0,1,0,1A9.86,9.86,0,0,1,12.75,21.88ZM10.84,4.1a8.12,8.12,0,1,0,6.9,14.31A8.64,8.64,0,0,1,10.84,4.1Z" }) })),
    sun: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.87a.87.87,0,0,1-.87-.87V19.54a.88.88,0,0,1,1.75,0V22A.88.88,0,0,1,12,22.87Z" }), jsxRuntimeExports.jsx("path", { d: "M22,12.87H19.54a.88.88,0,0,1,0-1.75H22a.88.88,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18ZM12,7.77A4.22,4.22,0,1,0,16.22,12,4.23,4.23,0,0,0,12,7.77Z" }), jsxRuntimeExports.jsx("path", { d: "M12,5.33a.87.87,0,0,1-.87-.87V2a.88.88,0,1,1,1.75,0V4.46A.88.88,0,0,1,12,5.33Z" }), jsxRuntimeExports.jsx("path", { d: "M4.46,12.87H2a.88.88,0,0,1,0-1.75H4.46a.88.88,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M19.07,20a.89.89,0,0,1-.62-.26L16.72,18A.87.87,0,0,1,18,16.72l1.74,1.73a.88.88,0,0,1-.62,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M17.33,7.54A.88.88,0,0,1,16.71,6L18.45,4.3a.87.87,0,0,1,1.23,1.24L18,7.28A.89.89,0,0,1,17.33,7.54Z" }), jsxRuntimeExports.jsx("path", { d: "M6.67,7.54a.87.87,0,0,1-.62-.26L4.31,5.55A.88.88,0,0,1,5.55,4.31L7.28,6.05a.85.85,0,0,1,0,1.23A.87.87,0,0,1,6.67,7.54Z" }), jsxRuntimeExports.jsx("path", { d: "M4.92,19.94a.85.85,0,0,1-.61-.25.86.86,0,0,1,0-1.24L6,16.71A.88.88,0,1,1,7.28,18L5.54,19.69A.86.86,0,0,1,4.92,19.94Z" })] })),
    eye: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.21,9.78C18.14,3.89,13.35,3.54,12,3.56c-.24,0-5.69-.39-10.26,6.32a3.88,3.88,0,0,0,.12,4.48c1.64,2.27,5.12,6.09,10,6.09,5.17,0,8.64-3.86,10.25-6.15A3.93,3.93,0,0,0,22.21,9.78Zm-1.53,3.51c-1.41,2-4.44,5.41-8.82,5.41-4.06,0-7.1-3.36-8.55-5.37h0A2.16,2.16,0,0,1,3.2,10.9c3.59-5.28,7.61-5.6,8.58-5.6H12c1.18,0,5.22.29,8.8,5.48A2.17,2.17,0,0,1,20.68,13.29Z" }), jsxRuntimeExports.jsx("path", { d: "M12,7.34A4.66,4.66,0,1,0,16.66,12,4.66,4.66,0,0,0,12,7.34Zm0,7.57A2.91,2.91,0,1,1,14.91,12,2.91,2.91,0,0,1,12,14.91Z" }), jsxRuntimeExports.jsx("path", { d: "M12,10.35A1.65,1.65,0,1,0,13.65,12,1.65,1.65,0,0,0,12,10.35Z" })] })),
    eyeClose: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8.1,17.71a14.86,14.86,0,0,1-4.79-4.38h0A2.16,2.16,0,0,1,3.2,10.9c3.59-5.28,7.61-5.6,8.58-5.6H12a8.68,8.68,0,0,1,4.75,1.46l1.08-1.38A10.65,10.65,0,0,0,12,3.56c-.24,0-5.69-.39-10.26,6.32a3.88,3.88,0,0,0,.12,4.48A16.67,16.67,0,0,0,7,19.11Z" }), jsxRuntimeExports.jsx("path", { d: "M22.21,9.78a17.24,17.24,0,0,0-3-3.34L18.14,7.81a15.61,15.61,0,0,1,2.64,3,2.17,2.17,0,0,1-.1,2.5c-1.41,2-4.44,5.41-8.82,5.41a7.34,7.34,0,0,1-2.07-.3L8.63,19.86a9.45,9.45,0,0,0,3.23.59c5.17,0,8.64-3.86,10.25-6.15A3.93,3.93,0,0,0,22.21,9.78Z" }), jsxRuntimeExports.jsx("path", { d: "M9.51,15.93l1.09-1.39A2.9,2.9,0,0,1,12,9.09a2.86,2.86,0,0,1,2.14,1l1.1-1.39a4.65,4.65,0,1,0-5.73,7.27Z" }), jsxRuntimeExports.jsx("path", { d: "M14.9,11.91s0,.06,0,.09a2.92,2.92,0,0,1-2.32,2.85l-1.37,1.73a4,4,0,0,0,.78.08A4.66,4.66,0,0,0,16.66,12a4.73,4.73,0,0,0-.38-1.84Z" }), jsxRuntimeExports.jsx("path", { d: "M3.74,22.75a.9.9,0,0,1-.54-.18.87.87,0,0,1-.14-1.23L18.64,1.58a.89.89,0,0,1,1.23-.15A.87.87,0,0,1,20,2.66L4.43,22.42A.87.87,0,0,1,3.74,22.75Z" })] })),
    download: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.86,22.3H4.14a3,3,0,0,1-3-3V17.19a3,3,0,0,1,3-3H19.86a3,3,0,0,1,3,3v2.09A3,3,0,0,1,19.86,22.3ZM4.14,15.93a1.26,1.26,0,0,0-1.26,1.26v2.09a1.26,1.26,0,0,0,1.26,1.27H19.86a1.27,1.27,0,0,0,1.27-1.27V17.19a1.27,1.27,0,0,0-1.27-1.26Z" }), jsxRuntimeExports.jsx("rect", { x: "16.67", y: "16.84", width: "2.8", height: "2.8", rx: "1.21" }), jsxRuntimeExports.jsx("path", { d: "M16.2,8.19a.88.88,0,0,0-1.24,0l-2.08,2.09V2.84a.88.88,0,1,0-1.75,0v7.44L9,8.19A.88.88,0,1,0,7.8,9.43L11.38,13s0,0,0,0a.89.89,0,0,0,.57.22.83.83,0,0,0,.57-.22s0,0,0,0L16.2,9.43A.88.88,0,0,0,16.2,8.19Z" })] })),
    send: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M22.71,2.58a.87.87,0,0,0-.86-.35l-20,3.48a.87.87,0,0,0-.3,1.61L9.33,12a.51.51,0,0,0,.16.13l1.92,9a.87.87,0,0,0,.73.68h.13a.87.87,0,0,0,.76-.45L22.61,3.8h0l.16-.29A.87.87,0,0,0,22.71,2.58ZM18.27,4.63l-8.2,5.75L4.47,7ZM12.63,18.42l-1.44-6.69,8.26-5.79Z" }) })),
    flowchart: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.68153,8.05471A3.1958,3.1958,0,1,1,22.87489,4.8594,3.19812,3.19812,0,0,1,19.68153,8.05471Zm0-4.6416A1.4458,1.4458,0,1,0,21.12489,4.8594,1.44621,1.44621,0,0,0,19.68153,3.41311Z" }), jsxRuntimeExports.jsx("path", { d: "M19.68153,15.17776a3.1958,3.1958,0,1,1,3.19336-3.19531A3.19812,3.19812,0,0,1,19.68153,15.17776Zm0-4.6416a1.4458,1.4458,0,1,0,1.44336,1.44629A1.44621,1.44621,0,0,0,19.68153,10.53616Z" }), jsxRuntimeExports.jsx("path", { d: "M19.68153,22.33694a3.1958,3.1958,0,1,1,3.19336-3.19629A3.19833,3.19833,0,0,1,19.68153,22.33694Zm0-4.6416a1.4458,1.4458,0,1,0,1.44336,1.44531A1.446,1.446,0,0,0,19.68153,17.69534Z" }), jsxRuntimeExports.jsx("path", { d: "M14.3661,20.02932h-.56934a3.10122,3.10122,0,0,1-3.09668-3.09863V7.083A3.10123,3.10123,0,0,1,13.79676,3.9844h.56934a.875.875,0,0,1,0,1.75h-.56934A1.34973,1.34973,0,0,0,12.45008,7.083v9.84765a1.34972,1.34972,0,0,0,1.34668,1.34863h.56934a.875.875,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M14.34071,12.87014H9.65809a.875.875,0,0,1,0-1.75h4.68262a.875.875,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M4.31825,15.19143a3.1958,3.1958,0,1,1,3.19336-3.19629A3.19833,3.19833,0,0,1,4.31825,15.19143Zm0-4.6416a1.4458,1.4458,0,1,0,1.44336,1.44531A1.446,1.446,0,0,0,4.31825,10.54983Z" })] })),
    cancel: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.88A10.88,10.88,0,1,1,22.87,12,10.89,10.89,0,0,1,12,22.88Zm0-20A9.13,9.13,0,1,0,21.12,12,9.14,9.14,0,0,0,12,2.88Z" }), jsxRuntimeExports.jsx("path", { d: "M15.69,17a.89.89,0,0,1-.62-.26L7.69,9.39A.88.88,0,1,1,8.93,8.15l7.38,7.38a.88.88,0,0,1-.62,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M8.31,17a.88.88,0,0,1-.62-1.5l7.38-7.38a.88.88,0,1,1,1.24,1.24L8.93,16.77A.89.89,0,0,1,8.31,17Z" })] })),
    danger: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21.17,22H2.83a1.7,1.7,0,0,1-1.7-1.71,1.67,1.67,0,0,1,.21-.82L10.5,2.84a1.65,1.65,0,0,1,1-.81,1.68,1.68,0,0,1,1.3.14,1.75,1.75,0,0,1,.68.67l9.16,16.67a1.68,1.68,0,0,1,.22.82A1.71,1.71,0,0,1,21.17,22ZM12,3.69,2.87,20.35l18.23-.06Z" }), jsxRuntimeExports.jsx("path", { d: "M11.18,18.77a.33.33,0,0,1-.23-.1.32.32,0,0,1-.1-.23V16.81a.33.33,0,0,1,.1-.25.33.33,0,0,1,.23-.1h1.63a.33.33,0,0,1,.23.1.33.33,0,0,1,.1.25v1.63a.32.32,0,0,1-.1.23.33.33,0,0,1-.23.1Zm.06-2.93a.3.3,0,0,1-.24-.1.33.33,0,0,1-.09-.23V9.83a.31.31,0,0,1,.33-.33h1.52a.31.31,0,0,1,.33.33v5.68a.33.33,0,0,1-.09.23.3.3,0,0,1-.24.1Z" })] })),
    success: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.00014,22.875A10.875,10.875,0,1,1,22.87514,12,10.88784,10.88784,0,0,1,12.00014,22.875Zm0-20A9.125,9.125,0,1,0,21.12514,12,9.13571,9.13571,0,0,0,12.00014,2.875Z" }), jsxRuntimeExports.jsx("path", { d: "M10.41518,15.65628a.87318.87318,0,0,1-.61914-.25586L7.15346,12.75784a.8756.8756,0,0,1,1.23828-1.23828L10.41518,13.544,15.713,8.24515a.8756.8756,0,0,1,1.23828,1.23828l-5.917,5.917A.87318.87318,0,0,1,10.41518,15.65628Z" })] })),
    play: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8.9,18a1.3,1.3,0,0,1-1.3-1.3V7.29A1.3,1.3,0,0,1,8.9,6a1.27,1.27,0,0,1,.63.17l8.55,4.7a1.31,1.31,0,0,1,0,2.28L9.53,17.85A1.4,1.4,0,0,1,8.9,18Zm.45-10V16L16.53,12Zm-.67-.36h0Z" }), jsxRuntimeExports.jsx("path", { d: "M12,22.87A10.88,10.88,0,1,1,22.87,12,10.88,10.88,0,0,1,12,22.87Zm0-20A9.13,9.13,0,1,0,21.12,12,9.15,9.15,0,0,0,12,2.87Z" })] })),
    pause: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.87A10.88,10.88,0,1,1,22.88,12,10.88,10.88,0,0,1,12,22.87Zm0-20A9.13,9.13,0,1,0,21.12,12,9.14,9.14,0,0,0,12,2.87Z" }), jsxRuntimeExports.jsx("rect", { x: "9.22", y: "6.5", width: "1.75", height: "11", rx: "0.87" }), jsxRuntimeExports.jsx("rect", { x: "13.03", y: "6.5", width: "1.75", height: "11", rx: "0.87" })] })),
    thunder: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M13.3,22.26v0l-.18-.07a1.07,1.07,0,0,1-.7-1.17c.13-1.15.63-5.17.63-5.17l.19-1.63-.93.2c-.43.1-.85.2-1.28.27l-.33,0a1.45,1.45,0,0,1-1.1-.44,1.35,1.35,0,0,1-.35-1,1.07,1.07,0,0,1,.2-.51q2.7-3.76,5.44-7.52l2.06-2.84a1.68,1.68,0,0,1,.87-.59l.45,0c.79.31,1,.6.86,1.52s-.27,2.09-.41,3.13l-.41,3.1v.43h.31l2-.51a1.22,1.22,0,0,1,.32,0,1.24,1.24,0,0,1,1,.45,1.28,1.28,0,0,1,.25,1,1.36,1.36,0,0,1-.18.43L14.63,21.67a1.6,1.6,0,0,1-.84.59Zm.34-9.91a1.22,1.22,0,0,1,.93.41,1.42,1.42,0,0,1,.33,1c-.12.88-.22,1.76-.33,2.64l-.24,2.12.37.12.15-.13,5.15-7-1.08.28c-.28.08-.54.15-.81.2l-.27,0a1.14,1.14,0,0,1-.87-.38,1.2,1.2,0,0,1-.3-1c.11-1.23.23-2.47.34-3.7l.1-1.14V5.7L17.05,5l-.4.49-5.11,7.12.86-.11,1-.15A1,1,0,0,1,13.64,12.35Z" }), jsxRuntimeExports.jsx("rect", { x: "3.61", y: "15.94", width: "7.93", height: "1.75", rx: "0.69" }), jsxRuntimeExports.jsx("rect", { x: "1.86", y: "12.46", width: "5.24", height: "1.75", rx: "0.69" }), jsxRuntimeExports.jsx("rect", { x: "3.6", y: "8.94", width: "6.11", height: "1.75", rx: "0.69" }), jsxRuntimeExports.jsx("rect", { x: "7.1", y: "5.44", width: "4.37", height: "1.75", rx: "0.69" })] })),
    statusError: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#f44336" }), jsxRuntimeExports.jsx("path", { d: "M13.49,12l3.7-3.7a1.07,1.07,0,0,0,0-1.5,1.06,1.06,0,0,0-1.49,0L12,10.49,8.3,6.79a1.06,1.06,0,0,0-1.49,0,1.07,1.07,0,0,0,0,1.5l3.7,3.7-3.7,3.7a1.06,1.06,0,0,0,.74,1.8,1.1,1.1,0,0,0,.75-.31l3.7-3.7,3.7,3.7a1.1,1.1,0,0,0,.75.31,1.06,1.06,0,0,0,.74-1.8Z", fill: "#fff" })] })),
    statusErrorDetailed: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m12.35,19.1c0-1.52.51-2.92,1.37-4.05l-1.72-1.72-3.7,3.7c-.21.21-.48.31-.75.31s-.54-.1-.75-.31c-.41-.41-.41-1.08,0-1.49l3.7-3.7-3.7-3.7c-.41-.41-.41-1.08,0-1.49.41-.41,1.08-.41,1.49,0l3.7,3.7,3.7-3.7c.41-.41,1.08-.41,1.49,0,.41.41.41,1.08,0,1.49l-3.7,3.7,1.75,1.75c1.09-.76,2.4-1.2,3.83-1.2s2.71.43,3.79,1.17c.09-.56.15-1.12.15-1.7C23,5.79,18.07.85,12,.85S1,5.79,1,11.85s4.93,11,11,11c.49,0,.96-.04,1.43-.1-.68-1.05-1.08-2.3-1.08-3.65Z" }), jsxRuntimeExports.jsx("path", { d: "m19.07,14.2c-2.7,0-4.9,2.2-4.9,4.9s2.2,4.9,4.9,4.9,4.9-2.2,4.9-4.9-2.2-4.9-4.9-4.9Zm-.52,2.61s.02-.08.04-.11c.03-.03.07-.04.11-.04h.73s.08.01.11.04c.03.03.04.07.04.11v2.73s-.02.08-.04.11c-.03.03-.07.05-.11.05h-.73s-.09-.02-.11-.05c-.03-.03-.04-.07-.04-.11v-2.73Zm1.07,4.58s-.02.08-.05.11c-.03.03-.07.05-.11.05h-.78s-.08-.02-.11-.05c-.03-.03-.04-.07-.04-.11v-.78s.01-.09.04-.12.07-.05.11-.05h.78s.08.02.11.05c.03.03.05.07.05.12v.78Z" })] })),
    statusSuccess: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#4caf50" }), jsxRuntimeExports.jsx("path", { d: "M10.06,16.51a1,1,0,0,1-.74-.31L6.15,13a1,1,0,1,1,1.48-1.48L10.06,14l6.35-6.36a1.06,1.06,0,0,1,1.49,0,1.08,1.08,0,0,1,0,1.49L10.8,16.2A1,1,0,0,1,10.06,16.51Z", fill: "#fff" })] })),
    statusSuccessDetailed: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.1198 18.8703C12.1198 15.1603 15.1298 12.1503 18.8398 12.1503C20.2598 12.1503 21.5698 12.5903 22.6498 13.3403C22.7198 12.8303 22.7698 12.3103 22.7698 11.7703C22.7798 5.71027 17.8398 0.780273 11.7798 0.780273C5.71979 0.780273 0.779785 5.71027 0.779785 11.7803C0.779785 17.8503 5.70978 22.7803 11.7798 22.7803C12.2998 22.7803 12.7998 22.7303 13.2998 22.6603C12.5344 21.5449 12.1263 20.223 12.1298 18.8703H12.1198ZM10.5698 15.9803C10.3598 16.1803 10.0998 16.2903 9.82979 16.2903C9.55979 16.2903 9.28979 16.1903 9.08979 15.9803L5.91979 12.8103C5.50979 12.4003 5.50979 11.7403 5.91979 11.3303C6.32979 10.9203 6.98979 10.9203 7.39979 11.3303L9.82979 13.7603L16.1798 7.41027C16.5898 7.00027 17.2498 7.00027 17.6598 7.41027C18.0698 7.82027 18.0698 8.48027 17.6598 8.89027L10.5698 15.9803Z" }), jsxRuntimeExports.jsx("path", { d: "M18.8399 13.9697C16.1399 13.9697 13.9399 16.1697 13.9399 18.8697C13.9399 21.5697 16.1399 23.7697 18.8399 23.7697C21.5399 23.7697 23.7399 21.5697 23.7399 18.8697C23.7399 16.1697 21.5399 13.9697 18.8399 13.9697ZM18.3199 16.5797C18.3199 16.5797 18.3399 16.4997 18.3599 16.4697C18.3747 16.456 18.392 16.4454 18.4109 16.4386C18.4298 16.4317 18.4499 16.4287 18.4699 16.4297H19.1999C19.1999 16.4297 19.2799 16.4397 19.3099 16.4697C19.3399 16.4997 19.3499 16.5397 19.3499 16.5797V19.3097C19.3499 19.3097 19.3299 19.3897 19.3099 19.4197C19.2812 19.4501 19.2417 19.4681 19.1999 19.4697H18.4699C18.4699 19.4697 18.3799 19.4497 18.3599 19.4197C18.3462 19.405 18.3356 19.3877 18.3288 19.3688C18.3219 19.3499 18.3189 19.3298 18.3199 19.3097V16.5797ZM19.3899 21.1597C19.3899 21.1597 19.3699 21.2397 19.3399 21.2697C19.3112 21.3001 19.2717 21.3181 19.2299 21.3197H18.4499C18.4499 21.3197 18.3699 21.2997 18.3399 21.2697C18.3262 21.255 18.3156 21.2377 18.3088 21.2188C18.3019 21.1999 18.2989 21.1798 18.2999 21.1597V20.3797C18.2999 20.3797 18.3099 20.2897 18.3399 20.2597C18.3687 20.2293 18.4082 20.2114 18.4499 20.2097H19.2299C19.2299 20.2097 19.3099 20.2297 19.3399 20.2597C19.3699 20.2897 19.3899 20.3297 19.3899 20.3797V21.1597Z", fill: "#ED991E" })] })),
    statusRunning: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "11", fill: "#1E88E5" }), jsxRuntimeExports.jsx("path", { d: "M8.6,18a1.31,1.31,0,0,1-1.31-1.3V7.28A1.31,1.31,0,0,1,8.6,6a1.35,1.35,0,0,1,.62.15l8.56,4.71a1.3,1.3,0,0,1,0,2.29l-8.55,4.7A1.26,1.26,0,0,1,8.6,18ZM8.38,16.3ZM9,8v7.89L16.23,12Z", fill: "#fff" })] })),
    statusWarning: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Z", fill: "#ff9800" }), jsxRuntimeExports.jsx("path", { d: "M11.12,17.5a.33.33,0,0,1-.25-.11.33.33,0,0,1-.1-.25V15.39a.34.34,0,0,1,.1-.26.3.3,0,0,1,.25-.11h1.76a.32.32,0,0,1,.25.11.34.34,0,0,1,.1.26v1.75a.33.33,0,0,1-.1.25.36.36,0,0,1-.25.11Zm.06-4.17a.36.36,0,0,1-.26-.11.37.37,0,0,1-.1-.25V6.86a.38.38,0,0,1,.1-.26.35.35,0,0,1,.26-.1h1.64a.35.35,0,0,1,.26.1.38.38,0,0,1,.1.26V13a.37.37,0,0,1-.1.25.36.36,0,0,1-.26.11Z", fill: "#fff" })] })),
    statusInProgress: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.0005 22.9998C9.8249 22.9998 7.69816 22.3546 5.88922 21.1459C4.08028 19.9372 2.67038 18.2193 1.83782 16.2093C1.00525 14.1993 0.787418 11.9876 1.21186 9.85377C1.63629 7.71998 2.68394 5.75996 4.22232 4.22159C5.7607 2.68321 7.72071 1.63556 9.8545 1.21112C11.9883 0.786685 14.2 1.00452 16.21 1.83709C18.22 2.66965 19.938 4.07955 21.1467 5.88849C22.3554 7.69743 23.0005 9.82417 23.0005 11.9998C22.9972 14.9161 21.8372 17.7121 19.775 19.7743C17.7128 21.8365 14.9169 22.9965 12.0005 22.9998V22.9998ZM12.0005 2.99976C10.2205 2.99976 8.4804 3.5276 7.00036 4.51653C5.52032 5.50547 4.36677 6.91107 3.68558 8.55561C3.00439 10.2001 2.82616 12.0097 3.17343 13.7556C3.52069 15.5014 4.37786 17.105 5.63653 18.3637C6.8952 19.6224 8.49885 20.4796 10.2447 20.8268C11.9905 21.1741 13.8001 20.9959 15.4446 20.3147C17.0892 19.6335 18.4948 18.4799 19.4837 16.9999C20.4727 15.5199 21.0005 13.7798 21.0005 11.9998C20.9979 9.61361 20.0488 7.32594 18.3616 5.63868C16.6743 3.95141 14.3866 3.00237 12.0005 2.99976V2.99976Z", fill: "#1E88E5" }), jsxRuntimeExports.jsx("path", { d: "M7.05025 16.9497C7.86424 17.7637 8.86642 18.3644 9.96801 18.6986C11.0696 19.0327 12.2366 19.0901 13.3656 18.8655C14.4947 18.6409 15.5509 18.1414 16.4408 17.4111C17.3306 16.6808 18.0266 15.7423 18.4672 14.6788C18.9077 13.6153 19.0791 12.4595 18.9663 11.3139C18.8535 10.1683 18.4598 9.06816 17.8203 8.11101C17.1807 7.15386 16.315 6.3692 15.2998 5.82655C14.2845 5.2839 13.1512 5 12 5L12 12L7.05025 16.9497Z", fill: "#1E88E5" })] })),
    statusOnHold: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#FF9800" }), jsxRuntimeExports.jsx("path", { d: "M12.0005 22.9998C9.8249 22.9998 7.69816 22.3546 5.88922 21.1459C4.08028 19.9372 2.67038 18.2193 1.83782 16.2093C1.00525 14.1993 0.787418 11.9876 1.21186 9.85377C1.63629 7.71998 2.68394 5.75996 4.22232 4.22159C5.7607 2.68321 7.72071 1.63556 9.8545 1.21112C11.9883 0.786685 14.2 1.00452 16.21 1.83709C18.22 2.66965 19.938 4.07955 21.1467 5.88849C22.3554 7.69743 23.0005 9.82417 23.0005 11.9998C22.9972 14.9161 21.8372 17.7121 19.775 19.7743C17.7128 21.8365 14.9169 22.9965 12.0005 22.9998ZM12.0005 2.99976C10.2205 2.99976 8.4804 3.5276 7.00036 4.51653C5.52032 5.50547 4.36677 6.91107 3.68558 8.55561C3.00439 10.2001 2.82616 12.0097 3.17343 13.7556C3.52069 15.5014 4.37786 17.105 5.63653 18.3637C6.89521 19.6224 8.49885 20.4796 10.2447 20.8268C11.9905 21.1741 13.8001 20.9959 15.4446 20.3147C17.0892 19.6335 18.4948 18.4799 19.4837 16.9999C20.4727 15.5199 21.0005 13.7798 21.0005 11.9998C20.9979 9.61361 20.0488 7.32594 18.3616 5.63868C16.6743 3.95141 14.3866 3.00237 12.0005 2.99976Z", fill: "#FF9800" }), jsxRuntimeExports.jsx("rect", { x: "9", y: "7", width: "2", height: "10", rx: "1", fill: "white" }), jsxRuntimeExports.jsx("rect", { x: "13", y: "7", width: "2", height: "10", rx: "1", fill: "white" })] })),
    helpCenter: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.87a1.74,1.74,0,0,1-1.33-.61L5.16,15.77l-.28-.37a8.92,8.92,0,1,1,14.24,0l0,0-.24.31-5.51,6.5a1.74,1.74,0,0,1-1.33.61ZM6.27,14.34s.19.25.24.3L12,21.12l5.5-6.49.23-.29,0-.05a7.17,7.17,0,1,0-11.49.05Z" }), jsxRuntimeExports.jsx("path", { d: "M11.17,13.15a.25.25,0,0,1-.18-.08.22.22,0,0,1-.08-.18v-.3a2.23,2.23,0,0,1,.31-.85,4.51,4.51,0,0,1,.54-.7l.61-.6a5,5,0,0,0,.5-.55,1,1,0,0,0,.22-.55A.71.71,0,0,0,13,8.85a.92.92,0,0,0-.39-.31,1.36,1.36,0,0,0-.53-.11,1.3,1.3,0,0,0-.84.26,1.35,1.35,0,0,0-.43.74.48.48,0,0,1-.14.23.38.38,0,0,1-.28.09H8.75a.29.29,0,0,1-.23-.1.37.37,0,0,1-.09-.26,2.62,2.62,0,0,1,.26-1,2.93,2.93,0,0,1,.72-.92,3.54,3.54,0,0,1,1.18-.67,5,5,0,0,1,1.63-.24,4.9,4.9,0,0,1,1.66.24,2.77,2.77,0,0,1,1,.62,2.43,2.43,0,0,1,.54.82A2.23,2.23,0,0,1,15.6,9a2.17,2.17,0,0,1-.2.86,3,3,0,0,1-.43.71,8.14,8.14,0,0,1-.54.63c-.19.2-.37.4-.53.6a2.22,2.22,0,0,0-.36.63,1.21,1.21,0,0,0,0,.18,1.16,1.16,0,0,0,0,.18,1.17,1.17,0,0,1-.17.26.32.32,0,0,1-.24.09Zm0,2.82a.33.33,0,0,1-.24-.1.36.36,0,0,1-.09-.24V14.12a.36.36,0,0,1,.09-.24.33.33,0,0,1,.24-.1h1.7a.37.37,0,0,1,.25.1.37.37,0,0,1,.1.24v1.51a.37.37,0,0,1-.1.24.37.37,0,0,1-.25.1Z" })] })),
    help: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.99981,22.875A10.875,10.875,0,1,1,22.87481,12,10.88784,10.88784,0,0,1,11.99981,22.875Zm0-20A9.125,9.125,0,1,0,21.12481,12,9.13571,9.13571,0,0,0,11.99981,2.875Z" }), jsxRuntimeExports.jsx("path", { d: "M11.116,13.98929a.27757.27757,0,0,1-.19239-.0752.24322.24322,0,0,1-.082-.18555v-.31445a2.42639,2.42639,0,0,1,.32227-.87109,4.02512,4.02512,0,0,1,.56152-.71875q.32226-.32959.624-.61719a4.78908,4.78908,0,0,0,.51368-.56836,1.02744,1.02744,0,0,0,.22656-.56933.74641.74641,0,0,0-.11719-.50684A.9182.9182,0,0,0,12.575,9.2471a1.36287,1.36287,0,0,0-.541-.10938,1.31447,1.31447,0,0,0-.86328.26075,1.45142,1.45142,0,0,0-.45215.76757.48712.48712,0,0,1-.13769.23926.40632.40632,0,0,1-.28711.08985H8.62189a.30912.30912,0,0,1-.2334-.10352.37648.37648,0,0,1-.09571-.2666,2.55187,2.55187,0,0,1,.26758-1.06934,3.07011,3.07011,0,0,1,.73926-.95215A3.57256,3.57256,0,0,1,10.51251,7.418a5.1119,5.1119,0,0,1,1.68555-.25391,5.06473,5.06473,0,0,1,1.707.24707,2.81507,2.81507,0,0,1,1.06836.64453,2.3769,2.3769,0,0,1,.55469.84278,2.16986,2.16986,0,0,1,.15136.8291,2.49881,2.49881,0,0,1-.20605.89062,3.397,3.397,0,0,1-.44531.7334q-.26661.33545-.56153.64356c-.19629.206-.37695.41113-.541.61718a2.244,2.244,0,0,0-.37012.65039c-.01856.06446-.03711.126-.05469.18555a1.26738,1.26738,0,0,0-.042.18457.924.924,0,0,1-.1709.26758.34223.34223,0,0,1-.25391.08887Zm.02734,2.90527a.32413.32413,0,0,1-.24707-.10254.34219.34219,0,0,1-.0957-.24023v-1.5625a.34158.34158,0,0,1,.0957-.23926.32413.32413,0,0,1,.24707-.10254h1.75391a.34535.34535,0,0,1,.2539.10254.32845.32845,0,0,1,.10254.23926v1.5625a.329.329,0,0,1-.10254.24023.34535.34535,0,0,1-.2539.10254Z" })] })),
    info: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.875A10.875,10.875,0,1,1,22.875,12,10.88784,10.88784,0,0,1,12,22.875Zm0-20A9.125,9.125,0,1,0,21.125,12,9.13571,9.13571,0,0,0,12,2.875Z" }), jsxRuntimeExports.jsx("path", { d: "M11.17774,8.74026a.33183.33183,0,0,1-.24707-.0957.33563.33563,0,0,1-.09571-.24707V7.16409a.34159.34159,0,0,1,.09571-.23926.32267.32267,0,0,1,.24707-.10254h1.64453a.35223.35223,0,0,1,.34277.3418v1.2334a.32346.32346,0,0,1-.10352.24707.33736.33736,0,0,1-.23925.0957Zm.01367,8.1543a.32413.32413,0,0,1-.24707-.10254.3422.3422,0,0,1-.09571-.24023V10.11136a.328.328,0,0,1,.34278-.34278H12.8086a.3294.3294,0,0,1,.34277.34278v6.44043a.339.339,0,0,1-.09668.24023.32058.32058,0,0,1-.24609.10254Z" })] })),
    infoFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm-1.18,5.86c0-.1.03-.19.1-.26.07-.07.15-.1.26-.1h1.64c.1,0,.19.03.26.1s.1.15.1.26v6.12c0,.1-.03.18-.1.25-.07.07-.15.11-.26.11h-1.64c-.11,0-.19-.04-.26-.11-.07-.07-.1-.15-.1-.25v-6.12Zm2.41,10.29c0,.09-.04.18-.11.25s-.15.11-.25.11h-1.75c-.1,0-.19-.04-.26-.11-.07-.07-.1-.15-.1-.25v-1.75c0-.1.03-.19.1-.26s.15-.11.26-.11h1.75c.09,0,.18.03.25.11.07.07.11.16.11.26v1.75Z", transform: "rotate(180, 12, 12)" }) })),
    countdown: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.48,22.65a11.09,11.09,0,0,1-1.15-.07.86.86,0,0,1-.77-1,.89.89,0,0,1,1-.78,8.35,8.35,0,0,0,1,.06,9.06,9.06,0,0,0,1.73-.17.86.86,0,0,1,1,.69.88.88,0,0,1-.69,1A13.68,13.68,0,0,1,11.48,22.65Zm-3.94-.84a.85.85,0,0,1-.35-.08A10.42,10.42,0,0,1,4.45,20a.88.88,0,0,1-.07-1.24.87.87,0,0,1,1.23-.07A8.94,8.94,0,0,0,7.9,20.13a.88.88,0,0,1-.36,1.68Zm8.68-.37a.87.87,0,0,1-.42-1.64A8.9,8.9,0,0,0,18,18.14a.87.87,0,0,1,1.27,1.2,10.6,10.6,0,0,1-2.58,2A.91.91,0,0,1,16.22,21.44ZM3.12,17.89a.89.89,0,0,1-.75-.42,10.7,10.7,0,0,1-1.22-3,.87.87,0,0,1,1.7-.4,8.9,8.9,0,0,0,1,2.52.87.87,0,0,1-.3,1.2A.89.89,0,0,1,3.12,17.89Zm17.17-.73a.85.85,0,0,1-.38-.09.88.88,0,0,1-.4-1.17,9,9,0,0,0,.65-1.82.89.89,0,0,1,1.06-.65.87.87,0,0,1,.65,1.05,10.4,10.4,0,0,1-.79,2.19A.87.87,0,0,1,20.29,17.16Z" }), jsxRuntimeExports.jsx("path", { d: "M22.17,5.63a.88.88,0,0,0-1,.68L21,7.12A10.65,10.65,0,0,0,1.16,9.5a.88.88,0,0,0,.65,1.06l.2,0a.87.87,0,0,0,.85-.67,8.89,8.89,0,0,1,17-1.07l-1.89-.38a.87.87,0,1,0-.35,1.71l2.67.54.35,0a1.81,1.81,0,0,0,1-.29,1.73,1.73,0,0,0,.74-1.12l.54-2.67A.87.87,0,0,0,22.17,5.63Z" }), jsxRuntimeExports.jsx("path", { d: "M14.38,16.66a.89.89,0,0,1-.62-.26l-2.9-2.9a.87.87,0,0,1-.26-.62V7.13a.88.88,0,0,1,1.75,0v5.39L15,15.16a.88.88,0,0,1-.62,1.5Z" })] })),
    export: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12,22.875a.87559.87559,0,0,1-.34375-.07031.86326.86326,0,0,1-.2539-.166h0l-.002-.001-.001-.001h0l-.02051-.02051L8.01949,19.25781a.8756.8756,0,1,1,1.23828-1.23829L11.125,19.88769V13.0371a.875.875,0,0,1,1.75,0v6.85059l1.86719-1.86817a.8756.8756,0,1,1,1.23828,1.23829L12.62105,22.6162l-.02051.02051h0l-.001.001-.002.001h0a.86331.86331,0,0,1-.25391.166A.87555.87555,0,0,1,12,22.875Zm5.03223-6.38964H14.55659a.875.875,0,0,1,0-1.75h2.47364a3.56348,3.56348,0,0,0,1.10156-6.94922A2.00723,2.00723,0,0,1,16.8271,6.46191a5.02742,5.02742,0,0,0-3.87793-3.4961,5.272,5.272,0,0,0-.94824-.09082H11.998A5.072,5.072,0,0,0,7.17183,6.46484,2.00458,2.00458,0,0,1,5.87007,7.78613a3.56341,3.56341,0,0,0,1.10254,6.94922H9.5771a.875.875,0,0,1,0,1.75H6.97066A5.31335,5.31335,0,0,1,5.32515,6.123a.25632.25632,0,0,0,.16992-.16016A6.83511,6.83511,0,0,1,12.00191,1.125h.00488a6.94081,6.94081,0,0,1,1.26953.12207A6.77071,6.77071,0,0,1,18.50288,5.958a.26089.26089,0,0,0,.1709.16406,5.31354,5.31354,0,0,1-1.6416,10.36329Z" }) })),
    mailInformation: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.24487,10.69628a2.56779,2.56779,0,0,1-1.41113-.42383L2.77222,4.99023a1.05962,1.05962,0,0,1,.58105-1.94629H20.59546a1.06928,1.06928,0,0,1,.61035,1.94726l-7.48438,5.23731A2.5723,2.5723,0,0,1,12.24487,10.69628ZM5.66479,4.79394l6.12793,4.01562a.82355.82355,0,0,0,.92481-.01464l5.71777-4.001Zm14.54-1.23828-.0039.00293ZM3.72925,3.52538l.00293.002Z" }), jsxRuntimeExports.jsx("path", { d: "M11.13452,18.79394h-8.042a1.97009,1.97009,0,0,1-1.96777-1.96777V5.01074a1.96926,1.96926,0,0,1,1.96777-1.9668H20.907a1.96926,1.96926,0,0,1,1.96778,1.9668v5.07421a.875.875,0,1,1-1.75,0V5.01074a.21778.21778,0,0,0-.21778-.2168H3.09253a.21777.21777,0,0,0-.21777.2168V16.82617a.218.218,0,0,0,.21777.21777h8.042a.875.875,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M18.04126,12.408a3.8368,3.8368,0,1,1-3.83667,3.83679A3.83682,3.83682,0,0,1,18.04126,12.408m0-1.75a5.5868,5.5868,0,1,0,5.58667,5.58679A5.593,5.593,0,0,0,18.04126,10.658Z" }), jsxRuntimeExports.jsx("path", { d: "M17.7312,14.41894a.1832.1832,0,0,1-.13574-.05274.18616.18616,0,0,1-.05371-.13671v-.68067a.19014.19014,0,0,1,.05371-.13281.17891.17891,0,0,1,.13574-.05664h.9082a.19352.19352,0,0,1,.18946.18945v.68067a.181.181,0,0,1-.05664.13671.18921.18921,0,0,1-.13282.05274Zm.00781,4.50293a.17911.17911,0,0,1-.13672-.05664.18922.18922,0,0,1-.05273-.13281V15.17577a.18325.18325,0,0,1,.05273-.13574.18782.18782,0,0,1,.13672-.05371h.89258a.18622.18622,0,0,1,.13672.05371.18321.18321,0,0,1,.05273.13574v3.55665a.18917.18917,0,0,1-.05273.13281.17764.17764,0,0,1-.13672.05664Z" })] })),
    otherType: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.32024,20.06933H6.68254A5.56717,5.56717,0,0,1,4.95891,9.21191a.32631.32631,0,0,0,.21387-.2041,7.17117,7.17117,0,0,1,6.82715-5.07715h.01074a7.263,7.263,0,0,1,1.3291.12793,7.10854,7.10854,0,0,1,5.48731,4.94629.32676.32676,0,0,0,.21386.206,5.5676,5.5676,0,0,1-1.7207,10.8584ZM11.99993,5.68066A5.411,5.411,0,0,0,6.84856,9.51074,2.07282,2.07282,0,0,1,5.50286,10.876,3.8169,3.8169,0,0,0,6.6845,18.31933H17.31829A3.81717,3.81717,0,0,0,18.497,10.875a2.07761,2.07761,0,0,1-1.34571-1.36425,5.3626,5.3626,0,0,0-4.13964-3.7334,5.56008,5.56008,0,0,0-1.00782-.09668Z" }), jsxRuntimeExports.jsx("path", { d: "M9.14642,13.99137v.36707a.91767.91767,0,0,1-.91767.91767H7.86168a.91767.91767,0,0,1-.91766-.91767v-.36707a.91766.91766,0,0,1,.91766-.91767h.36707A.91766.91766,0,0,1,9.14642,13.99137Zm4.03775,0v.36707a.91768.91768,0,0,1-.91767.91767h-.36707a.91768.91768,0,0,1-.91767-.91767v-.36707a.91767.91767,0,0,1,.91767-.91767h.36707A.91767.91767,0,0,1,13.18417,13.99137Zm4.03774,0v.36707a.91767.91767,0,0,1-.91767.91767h-.36706a.91767.91767,0,0,1-.91767-.91767v-.36707a.91766.91766,0,0,1,.91767-.91767h.36706A.91766.91766,0,0,1,17.22191,13.99137Z" }), jsxRuntimeExports.jsx("path", { d: "M16.30461,15.65136h-.36718a1.29451,1.29451,0,0,1-1.293-1.293V13.9912a1.2945,1.2945,0,0,1,1.293-1.293h.36718a1.29366,1.29366,0,0,1,1.292,1.293v.36719A1.29367,1.29367,0,0,1,16.30461,15.65136Zm-.36718-2.20312a.543.543,0,0,0-.543.543v.36719a.54305.54305,0,0,0,.543.543h.36718a.54285.54285,0,0,0,.542-.543V13.9912a.54285.54285,0,0,0-.542-.543Zm-3.6709,2.20312h-.36719a1.29451,1.29451,0,0,1-1.293-1.293V13.9912a1.2945,1.2945,0,0,1,1.293-1.293h.36719a1.2945,1.2945,0,0,1,1.293,1.293v.36719A1.29451,1.29451,0,0,1,12.26653,15.65136Zm-.36719-2.20312a.54306.54306,0,0,0-.543.543v.36719a.54306.54306,0,0,0,.543.543h.36719a.54306.54306,0,0,0,.543-.543V13.9912a.54306.54306,0,0,0-.543-.543Zm-3.6709,2.20312H7.86126a1.29367,1.29367,0,0,1-1.292-1.293V13.9912a1.29366,1.29366,0,0,1,1.292-1.293h.36718a1.2945,1.2945,0,0,1,1.293,1.293v.36719A1.29451,1.29451,0,0,1,8.22844,15.65136Zm-.36718-2.20312a.54285.54285,0,0,0-.542.543v.36719a.54285.54285,0,0,0,.542.543h.36718a.54305.54305,0,0,0,.543-.543V13.9912a.543.543,0,0,0-.543-.543Z" })] })),
    resource: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M15.69682,22.873a.87481.87481,0,0,1-.875-.875v-1.7793h-1.918V21.998a.875.875,0,0,1-1.75,0v-1.7793h-1.918V21.998a.875.875,0,0,1-1.75,0v-1.7793H6.41948a2.6261,2.6261,0,0,1-2.623-2.623V16.56152H1.99956a.875.875,0,0,1,0-1.75H3.79643v-1.918H1.99956a.875.875,0,0,1,0-1.75H3.79643v-1.918H1.99956a.875.875,0,0,1,0-1.75H3.79643V6.41113a2.6261,2.6261,0,0,1,2.62305-2.623h1.0664V2.002a.875.875,0,1,1,1.75,0V3.78808h1.918V2.002a.875.875,0,1,1,1.75,0V3.78808h1.918V2.002a.875.875,0,0,1,1.75,0V3.78808H17.605a2.62527,2.62527,0,0,1,2.62207,2.62305V7.43554h1.77247a.875.875,0,0,1,0,1.75H20.22709v1.918h1.77247a.875.875,0,1,1,0,1.75H20.22709v1.918h1.77247a.875.875,0,0,1,0,1.75H20.22709V17.5957a2.62526,2.62526,0,0,1-2.62207,2.623h-1.0332V21.998A.87481.87481,0,0,1,15.69682,22.873ZM6.41948,5.53808a.874.874,0,0,0-.87305.87305V17.5957a.874.874,0,0,0,.87305.873H17.605a.87377.87377,0,0,0,.87207-.873V6.41113a.87377.87377,0,0,0-.87207-.87305Z" }) })),
    integration: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M13.4,22.88H10.6A1.81,1.81,0,0,1,9,22l-1.4-2.42,0,0H4.76a1.8,1.8,0,0,1-1.56-.9L1.8,16.19a1.81,1.81,0,0,1,0-1.8L3.2,12a1.82,1.82,0,0,1,1.56-.9H7.57a1.83,1.83,0,0,1,1.56.9l1.4,2.43v0h2.92v0L14.88,12a1.8,1.8,0,0,1,1.55-.9h2.81a1.82,1.82,0,0,1,1.56.9l1.4,2.43a1.81,1.81,0,0,1,0,1.8l-1.4,2.43a1.8,1.8,0,0,1-1.56.9H16.38l0,0L15,22A1.82,1.82,0,0,1,13.4,22.88Zm-2.8-6.71L9.15,18.62l1.4,2.48,2.85,0,1.45-2.46-1.45-2.5Zm5.83-3.36L15,15.27l1.4,2.48,2.85,0,1.44-2.45-1.44-2.51Zm-11.67,0L3.32,15.27l1.4,2.48,2.85,0L9,15.32l-1.4-2.48a.05.05,0,0,0,0,0ZM13.4,9.58H10.6A1.8,1.8,0,0,1,9,8.68L7.64,6.25a1.81,1.81,0,0,1,0-1.8L9,2a1.81,1.81,0,0,1,1.56-.89h2.8A1.8,1.8,0,0,1,15,2l1.4,2.42a1.81,1.81,0,0,1,0,1.8L15,8.68A1.8,1.8,0,0,1,13.4,9.58Zm-2.8-6.7L9.15,5.33l1.4,2.48,2.85,0,1.45-2.45L13.4,2.88Z" }) })),
    reservedInstances: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15.7,22.87a.87.87,0,0,1-.88-.87V20.22H12.9V22a.88.88,0,0,1-1.75,0V20.22H9.23V22a.88.88,0,0,1-1.75,0V20.22H6.42A2.62,2.62,0,0,1,3.8,17.6v-1H2a.88.88,0,1,1,0-1.75H3.8V12.89H2a.88.88,0,1,1,0-1.75H3.8V9.22H2A.88.88,0,1,1,2,7.47H3.8V6.41A2.62,2.62,0,0,1,6.42,3.79H7.48V2A.88.88,0,1,1,9.23,2V3.79h1.92V2A.88.88,0,1,1,12.9,2V3.79h1.92V2a.88.88,0,1,1,1.75,0V3.79h1a2.62,2.62,0,0,1,2.62,2.62v1H22a.88.88,0,1,1,0,1.75H20.23V11.1H22a.88.88,0,1,1,0,1.75H20.23v1.92H22a.88.88,0,1,1,0,1.75H20.23V17.6a2.63,2.63,0,0,1-2.62,2.62h-1V22A.87.87,0,0,1,15.7,22.87ZM6.42,5.54a.87.87,0,0,0-.87.87V17.6a.87.87,0,0,0,.87.87H17.61a.87.87,0,0,0,.87-.87V6.41a.87.87,0,0,0-.87-.87Z" }), jsxRuntimeExports.jsx("path", { d: "M14.68,15.38a.22.22,0,0,1-.17-.07.28.28,0,0,1-.07-.17V8.86a.24.24,0,0,1,.07-.17.22.22,0,0,1,.17-.07H16a.24.24,0,0,1,.25.24v6.28a.28.28,0,0,1-.07.17.24.24,0,0,1-.18.07ZM8,15.38a.21.21,0,0,1-.17-.07.23.23,0,0,1-.07-.17V8.86A.24.24,0,0,1,8,8.62h2.63a3,3,0,0,1,2,.58,2,2,0,0,1,.71,1.62A2,2,0,0,1,13,12a2,2,0,0,1-.86.72l1.32,2.37a.23.23,0,0,1,0,.11.19.19,0,0,1-.07.14.18.18,0,0,1-.14.06H12a.37.37,0,0,1-.27-.09.86.86,0,0,1-.13-.17L10.49,13h-1v2.15a.23.23,0,0,1-.07.17.24.24,0,0,1-.18.07Zm1.5-3.76h1.11a.93.93,0,0,0,.68-.22.81.81,0,0,0,.23-.6.89.89,0,0,0-.22-.61.94.94,0,0,0-.69-.23H9.51Z" })] })),
    storage: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.17165,22.875H5.82888a2.48439,2.48439,0,0,1-2.48144-2.48144V3.60644A2.48439,2.48439,0,0,1,5.82888,1.125H18.17165A2.4844,2.4844,0,0,1,20.6531,3.60644V20.39355A2.48439,2.48439,0,0,1,18.17165,22.875Zm-12.34277-20a.73227.73227,0,0,0-.73144.73145V20.39355a.73227.73227,0,0,0,.73144.73144H18.17165a.73227.73227,0,0,0,.73145-.73144V3.60644a.73228.73228,0,0,0-.73145-.73145Z" }), jsxRuntimeExports.jsx("path", { d: "M8.4,18.51111V18.763a.62962.62962,0,0,1-.62962.62963H7.51852a.62962.62962,0,0,1-.62963-.62963v-.25185a.62962.62962,0,0,1,.62963-.62962h.25185A.62962.62962,0,0,1,8.4,18.51111Z" }), jsxRuntimeExports.jsx("path", { d: "M7.77029,19.76757h-.252a1.00651,1.00651,0,0,1-1.00488-1.00488v-.252a1.00567,1.00567,0,0,1,1.00488-1.00391h.252a1.00567,1.00567,0,0,1,1.00488,1.00391v.252A1.00651,1.00651,0,0,1,7.77029,19.76757Zm-.252-1.51074a.25486.25486,0,0,0-.25488.25391v.252a.25507.25507,0,0,0,.25488.25488h.252a.25507.25507,0,0,0,.25488-.25488v-.252a.25486.25486,0,0,0-.25488-.25391Z" }), jsxRuntimeExports.jsx("path", { d: "M11.99978,16.02538a5.55127,5.55127,0,1,1,5.55176-5.55175A5.55748,5.55748,0,0,1,11.99978,16.02538Zm0-9.35253a3.80127,3.80127,0,1,0,3.80176,3.80078A3.80515,3.80515,0,0,0,11.99978,6.67285Z" }), jsxRuntimeExports.jsx("path", { d: "M12.75555,10.348v.25185a.62962.62962,0,0,1-.62962.62962h-.25186a.62962.62962,0,0,1-.62962-.62962V10.348a.62962.62962,0,0,1,.62962-.62963h.25186A.62962.62962,0,0,1,12.75555,10.348Z" }), jsxRuntimeExports.jsx("path", { d: "M12.12576,11.60449h-.252a1.00568,1.00568,0,0,1-1.0039-1.00489v-.252a1.00484,1.00484,0,0,1,1.0039-1.00391h.252a1.00568,1.00568,0,0,1,1.00488,1.00391v.252A1.00652,1.00652,0,0,1,12.12576,11.60449Zm-.252-1.51075a.25465.25465,0,0,0-.2539.25391v.252a.25486.25486,0,0,0,.2539.25489h.252a.25507.25507,0,0,0,.25488-.25489v-.252a.25486.25486,0,0,0-.25488-.25391Z" }), jsxRuntimeExports.jsx("path", { d: "M15.22341,14.67577a.8742.8742,0,0,1-.61914-.25683l-1.06543-1.06641a.87491.87491,0,0,1,1.23828-1.23633l1.06543,1.06641a.875.875,0,0,1-.61914,1.49316Z" })] })),
    bell: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M14.65,22.89H9.37a.88.88,0,1,1,0-1.75h5.28a.88.88,0,0,1,0,1.75Zm1.24-3.5h0l-7.74,0A4,4,0,0,1,4.1,16a5,5,0,0,1,.06-1.75l1.1-6.77A8.53,8.53,0,0,1,6,4.92,6.66,6.66,0,0,1,11,1.2l.3-.06,1.6,0,.39.09a6.16,6.16,0,0,1,1,.28,6.6,6.6,0,0,1,4.35,5.29c.28,1.63.54,3.27.79,4.9.15,1,.31,1.92.46,2.88a4.1,4.1,0,0,1-4.05,4.78ZM11.47,2.89l-.1,0a4.92,4.92,0,0,0-3.84,2.8,6.8,6.8,0,0,0-.54,2L5.9,14.48a3.76,3.76,0,0,0-.08,1.21,2.29,2.29,0,0,0,2.33,1.93l7.74,0h0a2.35,2.35,0,0,0,1.8-.82,2.39,2.39,0,0,0,.52-1.93c-.15-1-.3-1.93-.46-2.89-.25-1.63-.51-3.25-.78-4.87a4.84,4.84,0,0,0-3.26-4A6.23,6.23,0,0,0,13,3l-.34-.07Zm-.24-.84h0Z" }) })),
    bellActive: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M14.36,22.89H9.08a.88.88,0,1,1,0-1.75h5.28a.89.89,0,0,1,.87.88A.87.87,0,0,1,14.36,22.89Zm1.24-3.5h0l-7.75,0a4,4,0,0,1-4-3.36,5,5,0,0,1,.06-1.75L5,7.49a8.53,8.53,0,0,1,.71-2.57A6.67,6.67,0,0,1,10.76,1.2l.3-.06,1.59,0,.39.09a5.66,5.66,0,0,1,1,.28,7,7,0,0,1,2.84,1.94.88.88,0,0,1-1.33,1.14,5.21,5.21,0,0,0-2.14-1.45,6.23,6.23,0,0,0-.75-.2l-.34-.07H11.19l-.11,0a4.92,4.92,0,0,0-3.84,2.8,6.8,6.8,0,0,0-.54,2L5.61,14.48a3.76,3.76,0,0,0-.08,1.21,2.29,2.29,0,0,0,2.33,1.93l7.74,0h0a2.35,2.35,0,0,0,1.8-.82,2.39,2.39,0,0,0,.53-1.93.87.87,0,1,1,1.72-.28,4.1,4.1,0,0,1-4,4.78Z" }), jsxRuntimeExports.jsx("circle", { cx: "17.15", cy: "9.54", r: "4.26" })] })),
    bellActiveRed: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M13.93,22.89H8.65a.88.88,0,1,1,0-1.75h5.28a.89.89,0,0,1,.87.88A.87.87,0,0,1,13.93,22.89Zm1.24-3.5h0l-7.75,0a4,4,0,0,1-4-3.36,5,5,0,0,1,.06-1.75l1.1-6.77a8.24,8.24,0,0,1,.71-2.57A6.66,6.66,0,0,1,10.32,1.2l.3-.06,1.6,0,.39.09a6.16,6.16,0,0,1,1,.28,7,7,0,0,1,2.84,1.94.88.88,0,0,1-1.33,1.14A5.21,5.21,0,0,0,13,3.17a6.23,6.23,0,0,0-.75-.2L11.9,2.9H10.76l-.11,0a4.92,4.92,0,0,0-3.84,2.8,6.8,6.8,0,0,0-.54,2L5.18,14.48a3.78,3.78,0,0,0-.08,1.21,2.28,2.28,0,0,0,2.32,1.93l7.75,0h0a2.35,2.35,0,0,0,1.8-.82,2.39,2.39,0,0,0,.52-1.93.88.88,0,0,1,1.73-.28,4.1,4.1,0,0,1-4,4.78Z" }), jsxRuntimeExports.jsx("circle", { cx: "16.72", cy: "9.54", r: "4.26", fill: "#f44336" })] })),
    bellSettings: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m21.11,9.12l-.6-.19c-.02-.11-.04-.22-.06-.32-.02-.11-.05-.21-.08-.31l.46-.42c.29-.27.37-.7.19-1.05-.53-1.01-1.31-1.87-2.26-2.48-.33-.21-.77-.18-1.06.09l-.46.43c-.2-.08-.4-.14-.61-.19l-.14-.62c-.08-.38-.41-.66-.8-.68-.54-.04-1.11,0-1.69.13-.53.11-1.07.3-1.6.58-.35.18-.53.58-.45.96l.14.62c-.17.13-.33.28-.47.43l-.6-.19c-.38-.12-.79.03-1,.36-.61.96-.96,2.06-1.01,3.2-.02.39.23.75.61.87l.61.2c.01.1.03.19.05.29.02.12.05.23.08.34l-.46.42c-.29.27-.37.7-.19,1.05.52,1.02,1.31,1.87,2.26,2.48.33.21.77.17,1.06-.1l.46-.43c.2.08.4.14.61.19l.14.62c.08.38.41.66.8.68.12,0,.25.01.37.01.43,0,.87-.05,1.32-.14.53-.11,1.07-.3,1.6-.58.35-.18.53-.58.45-.96l-.14-.62c.17-.13.33-.28.47-.43l.6.19c.38.12.79-.03,1-.36.61-.96.96-2.06,1.01-3.2.02-.39-.23-.75-.61-.87Zm-1.56,2.54l-.46-.15c-.35-.11-.74,0-.96.3-.26.34-.58.63-.94.86-.31.2-.47.57-.39.93l.11.48c-.18.07-.36.12-.54.15-.2.04-.39.07-.58.09l-.11-.49c-.08-.36-.38-.63-.74-.68-.43-.06-.84-.19-1.21-.39-.13-.07-.27-.1-.41-.1-.21,0-.43.08-.59.23l-.36.33c-.29-.25-.55-.53-.77-.84l.36-.33c.27-.25.36-.64.22-.98-.07-.16-.15-.37-.19-.58-.04-.23-.08-.45-.09-.67-.01-.37-.26-.69-.61-.8l-.47-.15c.07-.38.18-.74.34-1.09l.46.15c.35.11.74,0,.96-.3.26-.34.58-.63.94-.86.31-.2.47-.57.39-.93l-.11-.48c.18-.06.36-.12.54-.15.2-.04.39-.07.58-.09l.11.49c.08.36.38.63.74.68.43.06.84.19,1.21.39.33.17.73.12,1-.13l.36-.33c.29.25.55.53.77.84l-.36.33c-.27.25-.36.64-.22.98.08.2.15.4.19.61.04.21.07.41.08.63.01.37.26.69.61.8l.47.15c-.07.38-.18.74-.34,1.09Z" }), jsxRuntimeExports.jsx("path", { d: "m17.78,9.18c-.29-1.33-1.62-2.18-2.94-1.9-.65.13-1.2.52-1.56,1.08-.36.56-.49,1.23-.34,1.88.25,1.16,1.29,1.95,2.43,1.95.17,0,.34-.02.51-.05.65-.13,1.2-.52,1.56-1.08.36-.56.48-1.22.34-1.86,0,0,0,0,0,0Zm-2.26,1.24c-.39.08-.79-.18-.88-.56-.04-.19,0-.38.1-.55.11-.17.27-.28.45-.32.05-.01.1-.02.15-.02.34,0,.65.23.72.57.08.39-.17.79-.55.87Z" }), jsxRuntimeExports.jsx("path", { d: "m12.93,21.13h-5.28c-.48,0-.88.39-.88.88s.39.88.88.88h5.28c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m16.78,17.02c-.4.46-.63.6-2.63.6-2.58,0-5.17,0-7.74,0-1.19,0-2.1-.77-2.32-1.93-.06-.34,0-.71.08-1.22.36-2.2.72-4.4,1.08-6.69.12-.75.23-1.46.54-2.07.83-1.6,2.08-2.51,3.85-2.8.03,0,.06-.01.09-.02h1.17c.16.04.32.06.49.09.22.03.41.06.57.12.45.17.96-.05,1.13-.5.18-.45-.05-.96-.5-1.13-.34-.13-.66-.18-.94-.22-.14-.02-.29-.04-.43-.08l-1.61-.03c-.1,0-.19.02-.28.04-2.3.38-4.02,1.63-5.1,3.72-.44.86-.58,1.75-.73,2.68-.35,2.2-.71,4.4-1.08,6.67-.08.51-.18,1.09-.06,1.74.38,2,2,3.35,4.04,3.36,2.58,0,5.16,0,7.74,0,2.01,0,2.99-.11,3.95-1.2.32-.36.29-.92-.08-1.24-.36-.32-.91-.29-1.24.08Z" })] })),
    contactPersons: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.33485,22.87524H6.6659A3.25793,3.25793,0,0,1,3.412,19.62133V4.37914a3.25793,3.25793,0,0,1,3.2539-3.2539H17.33485a3.2571,3.2571,0,0,1,3.25293,3.2539V19.62133A3.2571,3.2571,0,0,1,17.33485,22.87524Zm-10.66895-20A1.5058,1.5058,0,0,0,5.162,4.37914V19.62133a1.50581,1.50581,0,0,0,1.5039,1.50391H17.33485a1.505,1.505,0,0,0,1.50293-1.50391V4.37914a1.505,1.505,0,0,0-1.50293-1.5039Z" }), jsxRuntimeExports.jsx("path", { d: "M15.8241,19.011H8.17567A1.3491,1.3491,0,0,1,6.828,17.66332V15.80883a3.474,3.474,0,0,1,3.46973-3.4707H13.702a3.47424,3.47424,0,0,1,3.47071,3.4707v1.85449A1.34994,1.34994,0,0,1,15.8241,19.011ZM8.578,17.261h6.84473V15.80883a1.72211,1.72211,0,0,0-1.72071-1.7207H10.29774A1.72191,1.72191,0,0,0,8.578,15.80883Zm3.41992-5.331a3.61209,3.61209,0,0,1-.84863-.10157h-.001a3.44361,3.44361,0,0,1-2.5166-2.51758,3.47834,3.47834,0,0,1,4.21875-4.21972,3.44175,3.44175,0,0,1,2.51758,2.51758,3.47351,3.47351,0,0,1-3.37012,4.32129Zm-.4375-1.80274a1.72056,1.72056,0,1,0-1.22754-1.22656,1.7178,1.7178,0,0,0,1.22754,1.22656Z" })] })),
    userList: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.86122,17.06732h-6a.875.875,0,0,1,0-1.75h6a.875.875,0,1,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M19.86122,20.06732h-6a.875.875,0,0,1,0-1.75h6a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M16.86122,23.06732h-3a.875.875,0,0,1,0-1.75h3a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M11.55067,21.621H4.92177a1.66044,1.66044,0,0,1-1.65821-1.65821V16.89544a5.17593,5.17593,0,0,1,5.16992-5.16992h5.63184a5.16471,5.16471,0,0,1,3.35742,1.23828A.87482.87482,0,0,1,16.286,14.29388a3.41979,3.41979,0,0,0-2.2207-.81836H8.43348a3.42381,3.42381,0,0,0-3.41992,3.41992V19.871h6.53711a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M11.24013,11.27142a5.38041,5.38041,0,0,1-1.16407-.12793h0A5.10915,5.10915,0,0,1,6.20985,7.2763a5.1802,5.1802,0,0,1,6.21289-6.21387,5.11458,5.11458,0,0,1,3.86719,3.86719,5.17415,5.17415,0,0,1-5.0498,6.3418ZM10.455,9.4345a3.43018,3.43018,0,0,0,4.126-4.126,3.35484,3.35484,0,0,0-2.53711-2.53711,3.42918,3.42918,0,0,0-4.125,4.126A3.3522,3.3522,0,0,0,10.455,9.4345Z" })] })),
    user: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.683,22.87524H5.31678a1.70335,1.70335,0,0,1-1.70117-1.70215V17.93285A5.416,5.416,0,0,1,9.02576,12.5227H14.974a5.416,5.416,0,0,1,5.41016,5.41015v3.24024A1.70336,1.70336,0,0,1,18.683,22.87524ZM9.02576,14.2727a3.66386,3.66386,0,0,0-3.66015,3.66015v3.24024L18.683,21.12524l-.04883-.417v-2.7754A3.66387,3.66387,0,0,0,14.974,14.2727Z" }), jsxRuntimeExports.jsx("path", { d: "M11.98963,11.94457a5.64021,5.64021,0,0,1-1.21875-.13379h0A5.35009,5.35009,0,0,1,6.725,7.76489,5.42276,5.42276,0,0,1,13.22889,1.261a5.35009,5.35009,0,0,1,4.04589,4.0459,5.415,5.415,0,0,1-5.28515,6.63769Zm-.83985-1.84277a3.67174,3.67174,0,0,0,4.416-4.416A3.59036,3.59036,0,0,0,12.85,2.97,3.67174,3.67174,0,0,0,8.434,7.386a3.59036,3.59036,0,0,0,2.71582,2.71582Z" })] })),
    users: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m18.07,12.34h-5.03c-2.6,0-4.71,2.12-4.71,4.73v2.76c0,.87.71,1.57,1.57,1.57h11.31c.87,0,1.58-.71,1.58-1.57v-2.76c0-2.61-2.12-4.73-4.71-4.73Zm2.96,7.32h-10.96v-2.58c0-1.65,1.33-2.98,2.96-2.98h5.03c1.63,0,2.96,1.34,2.96,2.98v2.58Z" }), jsxRuntimeExports.jsx("path", { d: "m12.91,11.31c.79.53,1.69.79,2.58.79,1.53,0,3.03-.74,3.95-2.11,1.46-2.17.9-5.11-1.25-6.55-2.14-1.44-5.08-.84-6.53,1.33-.71,1.05-.96,2.31-.73,3.54.23,1.24.94,2.31,1.98,3.01Zm.21-5.58c.58-.87,1.54-1.34,2.5-1.34.56,0,1.12.16,1.61.49,1.34.9,1.69,2.75.77,4.12s-2.76,1.75-4.11.85c-.65-.44-1.09-1.1-1.23-1.88-.15-.78.02-1.58.46-2.24Z" }), jsxRuntimeExports.jsx("path", { d: "m6.95,15.81h-3.95v-1.63c0-1.06.86-1.92,1.92-1.92h3.67c.31,0,.61.08.9.22.43.22.96.05,1.18-.38.22-.43.05-.96-.38-1.18-.54-.28-1.11-.42-1.7-.42h-3.67c-2.03,0-3.67,1.65-3.67,3.67v2c0,.76.62,1.38,1.38,1.38h4.31c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m6.72,10.26c.95,0,1.9-.36,2.62-1.09.7-.7,1.08-1.62,1.09-2.6,0-.98-.37-1.91-1.06-2.6-1.42-1.42-3.75-1.41-5.2.03h0c-1.44,1.44-1.45,3.77-.03,5.2.71.71,1.64,1.06,2.57,1.06Zm-1.31-5.02c.76-.76,1.98-.77,2.72-.03.36.36.55.84.55,1.35,0,.52-.21,1-.58,1.37-.37.37-.86.58-1.37.58h-.01c-.51,0-.98-.2-1.33-.55-.74-.74-.73-1.96.03-2.72Z" })] })),
    userAccess: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M16.92907,22.87524A3.53488,3.53488,0,0,1,13.3988,19.344V16.08813a1.69336,1.69336,0,0,1,1.69141-1.69141h3.67871a1.69335,1.69335,0,0,1,1.6914,1.69141V19.344A3.53509,3.53509,0,0,1,16.92907,22.87524Zm1.78125-6.78711-3.62011.05859L15.1488,19.344a1.78076,1.78076,0,1,0,3.56152,0Z" }), jsxRuntimeExports.jsx("path", { d: "M11.68005,21.48168H5.184a1.64563,1.64563,0,0,1-1.64453-1.64355V16.82348a5.10007,5.10007,0,0,1,5.09472-5.09473h5.53321a5.12221,5.12221,0,0,1,2.36425.58008.87537.87537,0,1,1-.8125,1.55078,3.30368,3.30368,0,0,0-1.55175-.38086H8.63415a3.348,3.348,0,0,0-3.34472,3.34473v2.9082h6.39062a.875.875,0,0,1,0,1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M11.392,11.31274a5.295,5.295,0,0,1-1.14746-.126A5.03567,5.03567,0,0,1,6.434,7.37621a5.105,5.105,0,0,1,6.123-6.123,5.03567,5.03567,0,0,1,3.81055,3.81054,5.09777,5.09777,0,0,1-4.97559,6.249Zm.002-8.43848a3.29987,3.29987,0,0,0-2.3584.98047,3.33624,3.33624,0,0,0-.89258,3.14258,3.276,3.276,0,0,0,2.48047,2.48047h0a3.354,3.354,0,0,0,4.03516-4.03516A3.276,3.276,0,0,0,12.1781,2.96215,3.61538,3.61538,0,0,0,11.39392,2.87426Z" })] })),
    userAssign: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.75,21.48h-6.5c-.48,0-.88-.39-.88-.88s.39-.88,.88-.88h6.39v-2.91c0-1.84-1.5-3.34-3.34-3.34h-5.53c-.55,0-1.07,.13-1.55,.38-.43,.22-.96,.06-1.18-.37-.22-.43-.06-.96,.37-1.18,.72-.38,1.54-.58,2.36-.58h5.53c2.81,0,5.09,2.29,5.09,5.09v3.01c0,.91-.74,1.64-1.64,1.64Z" }), jsxRuntimeExports.jsx("path", { d: "M12.31,11.31c-.38,0-.76-.04-1.15-.13-1.89-.42-3.39-1.92-3.81-3.81-.39-1.74,.12-3.52,1.36-4.76s3.02-1.75,4.76-1.36c1.89,.42,3.39,1.92,3.81,3.81,.39,1.74-.12,3.52-1.36,4.76-.97,.97-2.26,1.49-3.61,1.49Zm0-8.44c-.89,0-1.72,.34-2.36,.98-.83,.83-1.15,1.97-.89,3.14,.27,1.23,1.25,2.21,2.48,2.48h0c1.17,.26,2.32-.07,3.14-.89s1.15-1.97,.89-3.14c-.27-1.23-1.25-2.21-2.48-2.48-.26-.06-.53-.09-.78-.09Z" }), jsxRuntimeExports.jsx("path", { d: "M11.24,18.48c.04-.1,.06-.21,.06-.32h0c0-.08-.02-.15-.04-.22-.01-.04-.01-.09-.03-.13-.04-.09-.09-.16-.16-.23-.01-.02-.02-.04-.03-.05h0l-2.23-2.23c-.34-.34-.9-.34-1.24,0s-.34,.9,0,1.24l.74,.74h-3.83c-.48,0-.88,.39-.88,.88s.39,.88,.88,.88h3.83l-.74,.74c-.34,.34-.34,.9,0,1.24,.17,.17,.4,.26,.62,.26s.45-.08,.62-.26l2.23-2.23s.02-.03,.03-.05c.06-.07,.12-.15,.16-.23h0Z" })] })),
    usersSuccess: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M10.33,21.48H5.94c-.91,0-1.64-.74-1.64-1.64v-3.01c0-2.81,2.29-5.09,5.09-5.09h5.53c.82,0,1.64,.2,2.36,.58,.43,.22,.59,.75,.37,1.18-.23,.43-.75,.59-1.18,.37-.48-.25-1-.38-1.55-.38h-5.53c-1.84,0-3.34,1.5-3.34,3.34v2.91h4.29c.48,0,.88,.39,.88,.88s-.39,.88-.88,.88Z" }), jsxRuntimeExports.jsx("path", { d: "M12.15,11.31c-.38,0-.76-.04-1.15-.13h0c-1.89-.42-3.39-1.92-3.81-3.81-.39-1.74,.12-3.52,1.36-4.76,1.24-1.24,3.02-1.75,4.76-1.36,1.89,.42,3.39,1.92,3.81,3.81,.39,1.74-.12,3.52-1.36,4.76-.97,.97-2.26,1.49-3.61,1.49Zm-.77-1.83c1.17,.26,2.32-.07,3.14-.89s1.15-1.97,.89-3.14c-.27-1.23-1.25-2.21-2.48-2.48-1.17-.26-2.32,.07-3.14,.89-.83,.83-1.15,1.97-.89,3.14,.27,1.23,1.25,2.21,2.48,2.48h0Z" }), jsxRuntimeExports.jsx("path", { d: "M14.99,21.3c-.22,0-.44-.08-.6-.24l-2.36-2.21c-.35-.33-.37-.88-.04-1.24,.33-.35,.89-.37,1.24-.04l1.66,1.55,3.25-4.26c.29-.38,.84-.46,1.23-.17s.46,.84,.17,1.23l-3.84,5.04c-.15,.2-.38,.32-.62,.34-.02,0-.05,0-.07,0Z" })] })),
    eventSchedule: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M14.88,5.88h1.25a.26.26,0,0,0,.25-.26V4.32h2.91V8.73a.26.26,0,0,0,.26.26h1.24a.26.26,0,0,0,.26-.26V4.22a1.66,1.66,0,0,0-1.66-1.66h-3V1.26A.25.25,0,0,0,16.13,1H14.88a.26.26,0,0,0-.26.26v1.3h-6V1.26A.26.26,0,0,0,8.34,1H7.1a.26.26,0,0,0-.26.26v1.3h-3A1.66,1.66,0,0,0,2.17,4.22V19.78a1.66,1.66,0,0,0,1.66,1.66h3A.25.25,0,0,0,7,21.18V19.94a.26.26,0,0,0-.26-.26H3.93V4.32H6.84V5.61a.26.26,0,0,0,.26.27H8.34a.27.27,0,0,0,.26-.27V4.32h6v1.3A.26.26,0,0,0,14.88,5.88Z" }), jsxRuntimeExports.jsx("path", { d: "M16.92,19l.88-.88a.25.25,0,0,0,0-.36l-1.42-1.42v-2.6a.26.26,0,0,0-.26-.26H14.88a.26.26,0,0,0-.26.26V17L16.56,19A.25.25,0,0,0,16.92,19Z" }), jsxRuntimeExports.jsx("path", { d: "M15.5,10.34a6.34,6.34,0,1,0,6.33,6.33A6.34,6.34,0,0,0,15.5,10.34Zm0,10.9a4.57,4.57,0,1,1,4.57-4.57A4.57,4.57,0,0,1,15.5,21.24Z" })] })),
    eventList: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.38,2.68H17.14V1.28A.28.28,0,0,0,16.86,1H15.52a.27.27,0,0,0-.28.28v1.4H8.76V1.28A.29.29,0,0,0,8.48,1H7.15a.29.29,0,0,0-.29.28v1.4H3.62A1.78,1.78,0,0,0,1.84,4.46V21.21A1.79,1.79,0,0,0,3.62,23H20.39a1.78,1.78,0,0,0,1.77-1.78v-.11h0V4.46A1.78,1.78,0,0,0,20.38,2.68ZM3.74,21.1V4.57H6.86V6a.29.29,0,0,0,.29.29H8.48A.29.29,0,0,0,8.76,6V4.57h6.48V6a.28.28,0,0,0,.28.28h1.34A.29.29,0,0,0,17.14,6V4.57h3.12V21.1Z" }), jsxRuntimeExports.jsx("rect", { x: "6.08", y: "9.31", width: "1.9", height: "1.9", rx: "0.44" }), jsxRuntimeExports.jsx("rect", { x: "6.08", y: "13.05", width: "1.9", height: "1.9", rx: "0.44" }), jsxRuntimeExports.jsx("rect", { x: "6.08", y: "16.8", width: "1.9", height: "1.9", rx: "0.44" }), jsxRuntimeExports.jsx("rect", { x: "8.89", y: "9.31", width: "9.03", height: "1.9", rx: "0.44" }), jsxRuntimeExports.jsx("rect", { x: "8.89", y: "13.05", width: "7.3", height: "1.9", rx: "0.44" }), jsxRuntimeExports.jsx("rect", { x: "8.89", y: "16.8", width: "4.02", height: "1.9", rx: "0.45" })] })),
    eventLog: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m7.7,22.41h-3.51c-1.46,0-2.66-1.19-2.66-2.66V3.33C1.53,1.87,2.73.68,4.19.68h11.98c1.46,0,2.66,1.19,2.66,2.66v4.77c0,.48-.39.88-.88.88s-.88-.39-.88-.88V3.33c0-.5-.41-.91-.91-.91H4.19c-.5,0-.91.41-.91.91v16.42c0,.5.41.91.91.91h3.51c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m7.44,15.12h-1.49c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h1.49c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m10.41,11.01h-4.46c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h4.46c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m14.84,6.93H5.95c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h8.89c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m19.37,19.16c1.63-2.16,1.32-5.24-.72-7.03-2.05-1.81-5.19-1.72-7.12.22-1.94,1.94-2.04,5.07-.22,7.12,1.8,2.03,4.87,2.34,7.03.72l2.93,2.93.06.06,1.03-1.03-2.99-2.99Zm-.41-3.11c0,2.06-1.68,3.73-3.73,3.73s-3.73-1.67-3.73-3.73,1.67-3.73,3.73-3.73,3.73,1.67,3.73,3.73Z" })] })),
    virtualColumn: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("polygon", { points: "18.52 11.22 20.11 9.61 20.19 9.54 19.08 8.44 15.58 11.93 15.51 12 19.01 15.49 19.08 15.56 20.19 14.46 18.52 12.78 22.6 12.78 22.6 11.22 18.52 11.22" }), jsxRuntimeExports.jsx("polygon", { points: "3.89 14.39 3.81 14.46 4.92 15.56 8.42 12.07 8.49 12 4.99 8.51 4.92 8.44 3.81 9.54 5.49 11.22 1.4 11.22 1.4 12.78 5.49 12.78 3.89 14.39" }), jsxRuntimeExports.jsx("path", { d: "M9.26,3.68H2.31V5.25H9.16v13.5H2.31v1.57h7a1.47,1.47,0,0,0,1.47-1.47V5.15A1.47,1.47,0,0,0,9.26,3.68Z" }), jsxRuntimeExports.jsx("path", { d: "M14.84,5.25h6.85V3.68h-7a1.47,1.47,0,0,0-1.47,1.47v13.7a1.47,1.47,0,0,0,1.47,1.47h7V18.75H14.84Z" })] })),
    zoomArea: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { x: "1.38", y: "15.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "1.38", y: "9.78", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "1.38", y: "12.58", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "1.38", y: "6.98", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "12.58", y: "1.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "15.38", y: "6.98", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "9.78", y: "1.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "15.38", y: "4.18", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "1.38", y: "4.18", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "15.38", y: "1.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "15.38", y: "12.58", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "12.58", y: "15.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "15.38", y: "15.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("path", { d: "M19.33,18.2a5.72,5.72,0,1,0-1.13,1.13l3.22,3.22.07.07,1.13-1.13Zm-.45-3.42a4.1,4.1,0,1,1-4.1-4.1A4.11,4.11,0,0,1,18.88,14.78Z" }), jsxRuntimeExports.jsx("rect", { x: "4.18", y: "15.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "6.98", y: "1.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "1.38", y: "1.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "4.18", y: "1.38", width: "1.6", height: "1.6" }), jsxRuntimeExports.jsx("rect", { x: "6.98", y: "15.38", width: "1.6", height: "1.6" })] })),
    mail: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M20.91,4.12H3.09a2,2,0,0,0-2,2V17.91a2,2,0,0,0,2,2H20.88a2,2,0,0,0,2-2V6.09A2,2,0,0,0,20.91,4.12Zm-8.12,7.31a.81.81,0,0,1-1.08,0L5.12,5.88H18.94Zm8.09,6.69H3.09a.21.21,0,0,1-.21-.21V6.27l7.7,6.52A2.57,2.57,0,0,0,14,12.73l7.15-6.47V17.88A.23.23,0,0,1,20.88,18.12Z" }) })),
    machineSettings: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18,20.27H6A.88.88,0,0,0,6,22H18a.88.88,0,1,0,0-1.75Z" }), jsxRuntimeExports.jsx("path", { d: "M19.62,2H4.38A3.26,3.26,0,0,0,1.13,5.23V15.9a3.26,3.26,0,0,0,3.25,3.25H19.62a3.26,3.26,0,0,0,3.26-3.25V5.23A3.26,3.26,0,0,0,19.62,2ZM21.13,15.9a1.51,1.51,0,0,1-1.51,1.5H4.38a1.5,1.5,0,0,1-1.5-1.5V5.23a1.5,1.5,0,0,1,1.5-1.5H19.62a1.51,1.51,0,0,1,1.51,1.5Z" }), jsxRuntimeExports.jsx("path", { d: "M12,15.86a5.39,5.39,0,0,1-1.42-.19.62.62,0,0,1-.46-.6v-.63a4.65,4.65,0,0,1-.61-.36L9,14.4a.62.62,0,0,1-.75-.1,5.4,5.4,0,0,1-1.42-2.46.63.63,0,0,1,.29-.7l.55-.31c0-.12,0-.24,0-.36s0-.23,0-.35L7.08,9.8a.63.63,0,0,1-.29-.7A5.41,5.41,0,0,1,8.21,6.65.62.62,0,0,1,9,6.55l.55.32a3.76,3.76,0,0,1,.61-.36V5.88a.62.62,0,0,1,.46-.6,5.27,5.27,0,0,1,2.84,0,.62.62,0,0,1,.46.6v.63a3.76,3.76,0,0,1,.61.36L15,6.55a.62.62,0,0,1,.75.1A5.41,5.41,0,0,1,17.21,9.1a.63.63,0,0,1-.29.7l-.55.32c0,.12,0,.24,0,.35s0,.24,0,.36l.55.31a.63.63,0,0,1,.29.7,5.4,5.4,0,0,1-1.42,2.46.62.62,0,0,1-.75.1l-.55-.32a4.65,4.65,0,0,1-.61.36v.63a.63.63,0,0,1-.46.6A5.33,5.33,0,0,1,12,15.86Zm-.63-1.3a3.81,3.81,0,0,0,1.26,0V14a.63.63,0,0,1,.42-.59,3.27,3.27,0,0,0,1-.57.64.64,0,0,1,.72-.07l.47.27A4,4,0,0,0,15.85,12l-.47-.27a.63.63,0,0,1-.3-.66,2.62,2.62,0,0,0,.06-.57,2.76,2.76,0,0,0-.06-.57.63.63,0,0,1,.31-.65L15.85,9a4.21,4.21,0,0,0-.62-1.09l-.47.28A.64.64,0,0,1,14,8.09a3.27,3.27,0,0,0-1-.57.64.64,0,0,1-.42-.59V6.38a4.43,4.43,0,0,0-1.26,0v.55a.63.63,0,0,1-.42.59,3.27,3.27,0,0,0-1,.57.62.62,0,0,1-.71.07l-.48-.28A4.21,4.21,0,0,0,8.15,9l.47.28a.63.63,0,0,1,.3.65,2.79,2.79,0,0,0,0,1.15.61.61,0,0,1-.3.65L8.15,12a3.9,3.9,0,0,0,.62,1.09l.47-.27a.62.62,0,0,1,.72.07,3.27,3.27,0,0,0,1,.57.63.63,0,0,1,.42.59Z" }), jsxRuntimeExports.jsx("path", { d: "M12,12.49a2,2,0,1,1,2-2A2,2,0,0,1,12,12.49Zm0-2.78a.77.77,0,1,0,.77.76A.77.77,0,0,0,12,9.71Z" })] })),
    emojiNormal: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M2,5.87a3.56,3.56,0,0,1,.31-.58,1.1,1.1,0,0,1,.91-.37H6c.7,0,1.39,0,2.09,0a1.12,1.12,0,0,1,1,1.51,1.11,1.11,0,0,1-1,.75c-.69,0-1.38,0-2.07,0H3.43C2.57,7.2,2.33,7,2,6.26Z" }), jsxRuntimeExports.jsx("path", { d: "M12,19.08H5.17a1.29,1.29,0,0,1-1.24-.69,1.25,1.25,0,0,1,1-1.82H18.8a1.31,1.31,0,0,1,1.28.69,1.26,1.26,0,0,1-1,1.82c-.24,0-.48,0-.72,0Z" }), jsxRuntimeExports.jsx("path", { d: "M18.42,7.2c-.82,0-1.64,0-2.46,0a1.11,1.11,0,0,1-1-1.53,1.05,1.05,0,0,1,1-.73c.76,0,1.52,0,2.28,0s1.8,0,2.7,0a1.13,1.13,0,0,1,1,1.53,1.09,1.09,0,0,1-1,.73c-.83,0-1.66,0-2.5,0Z" })] })),
    emojiHappy: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.05,15.34a9.65,9.65,0,0,1-3,4.13,10.51,10.51,0,0,1-4.72,2.28,11.13,11.13,0,0,1-7.7-1.09,9.94,9.94,0,0,1-4.59-5A1.3,1.3,0,0,1,2.71,14a1.27,1.27,0,0,1,1.7.63,8.32,8.32,0,0,0,1.5,2.29,8,8,0,0,0,4.5,2.37,8.54,8.54,0,0,0,5-.54,7.8,7.8,0,0,0,4-3.75,2.89,2.89,0,0,1,.49-.77A1.28,1.28,0,0,1,22,14.8l.06.14Z" }), jsxRuntimeExports.jsx("path", { d: "M8.8,4.71A2.68,2.68,0,1,1,6.14,2,2.68,2.68,0,0,1,8.8,4.71Z" }), jsxRuntimeExports.jsx("path", { d: "M21,4.69A2.68,2.68,0,1,1,18.29,2,2.69,2.69,0,0,1,21,4.69Z" })] })),
    emojiSad: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.16,20.89a1.68,1.68,0,0,1-.49.79,1.3,1.3,0,0,1-2-.36c-.25-.45-.46-.91-.74-1.33a7.83,7.83,0,0,0-4.82-3.34A8.6,8.6,0,0,0,6.94,18a7.25,7.25,0,0,0-2.42,2.87l-.18.39A1.31,1.31,0,0,1,2,20.16,10.11,10.11,0,0,1,6.08,15.4a10.78,10.78,0,0,1,4.28-1.52,11.09,11.09,0,0,1,8.91,2.53A10,10,0,0,1,22,20.12c0,.12.08.24.13.37Z" }), jsxRuntimeExports.jsx("path", { d: "M8.33,4.74A2.71,2.71,0,1,1,5.72,2,2.71,2.71,0,0,1,8.33,4.74Z" }), jsxRuntimeExports.jsx("path", { d: "M17.92,7.42a2.71,2.71,0,1,1,2.7-2.72A2.71,2.71,0,0,1,17.92,7.42Z" })] })),
    padlock: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M5.61,22.84c-.41-.09-.8-.2-1.15-.45-.71-.52-1.09-1.22-1.09-2.11,0-2.86,0-5.73,0-8.59,0-.49,.12-.95,.39-1.36,.48-.74,1.17-1.15,2.05-1.19,.53-.02,1.06,0,1.62,0v-.23c0-1.04,.02-2.07,0-3.11-.04-2.22,1.5-4.05,3.62-4.52,2.43-.54,4.9,1.03,5.42,3.47,.07,.33,.09,.69,.1,1.03,.01,1.04,0,2.07,0,3.11v.25c.51,0,1,0,1.49,0,.55,0,1.06,.15,1.5,.48,.72,.53,1.07,1.25,1.07,2.14,0,2.82,0,5.64,0,8.46,0,.16-.01,.32-.04,.48-.16,1.06-1.01,1.93-2.06,2.1-.05,0-.09,.03-.14,.04H5.61Zm6.4-12.02c-1.99,0-3.98,0-5.97,0-.66,0-.98,.33-.98,.99,0,2.78,0,5.56,0,8.33,0,.68,.32,1,.99,1,3.96,0,7.93,0,11.89,0,.67,0,1-.32,1-1,0-2.77,0-5.54,0-8.31,0-.69-.32-1.01-1.01-1.01-1.97,0-3.95,0-5.92,0Zm2.86-1.7c0-.05,0-.09,0-.12,0-1.13,0-2.26,0-3.38,0-.19-.03-.38-.07-.56-.33-1.39-1.68-2.34-3.08-2.18-1.53,.17-2.59,1.33-2.6,2.83,0,1.07,0,2.14,0,3.21,0,.07,0,.13,0,.2h5.75Z" }), jsxRuntimeExports.jsx("path", { d: "M11.15,17.17c0-.13,0-.25,0-.38,.02-.36-.03-.65-.33-.95-.61-.61-.5-1.64,.15-2.18,.68-.57,1.66-.49,2.21,.17,.57,.69,.48,1.67-.21,2.22-.1,.08-.14,.16-.14,.28,0,.56,.01,1.11,0,1.67-.01,.6-.56,.99-1.11,.81-.34-.11-.57-.41-.58-.78,0-.29,0-.58,0-.87h0Z" })] })),
    keys: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21.68,8.57c-.02-.1-.04-.24-.06-.38-.04-.3-.09-.57-.16-.84-.76-2.6-2.48-4.24-5.12-4.87-.21-.05-.42-.08-.62-.11-.1-.01-.19-.03-.29-.04h-.91c-.09,.02-.2,.04-.32,.05-.25,.04-.5,.08-.75,.13-2.65,.6-4.7,2.8-5.1,5.48-.12,.77-.11,1.54,.03,2.29,.03,.15-.06,.34-.16,.44l-.05,.05c-1.65,1.66-3.31,3.32-4.97,4.97-.38,.38-.77,.8-.86,1.38v3.03c.09,.32,.2,.63,.41,.88,.3,.35,.65,.55,1.07,.62,.04,0,.07,.02,.1,.03h3.31l.06-.03c.06-.03,.13-.05,.19-.09,.26-.16,.39-.4,.39-.73v-1.13h1.04c.63,0,.93-.3,.94-.93v-1.05h.71c.11,0,.21,0,.32,0h.06c.3,0,.54-.11,.77-.34,.3-.31,.61-.62,.92-.93,.22-.22,.45-.45,.67-.67,.11-.11,.23-.16,.36-.16,.04,0,.08,0,.12,.01,.4,.08,.81,.12,1.22,.12,3.21,0,6.04-2.38,6.58-5.53,.03-.16,.05-.33,.08-.49l.03-.23v-.93Zm-6.31,5.59c-.15,.01-.29,.02-.44,.02-.46,0-.91-.06-1.33-.19-.12-.04-.24-.05-.34-.05-.25,0-.47,.1-.68,.32-.55,.58-1.13,1.14-1.71,1.71-.11,.1-.28,.17-.43,.18-.19,0-.38,0-.57,0h-.75c-.54,0-.86,.32-.86,.86,0,.2,0,.4,0,.62v.5h-1.07c-.61,0-.91,.3-.91,.91v1.06H3.92v-.25s-.02-.1-.02-.15v-.66c0-.5,0-1,0-1.5,0-.18,.06-.33,.19-.46l2.32-2.31c1.12-1.12,2.24-2.24,3.36-3.35,.29-.28,.36-.59,.25-.98-.4-1.44-.16-2.98,.67-4.23,.83-1.24,2.16-2.07,3.65-2.26,.21-.03,.43-.04,.64-.04,2.65,0,4.89,2.06,5.1,4.68,.24,2.88-1.83,5.33-4.71,5.57Z" }), jsxRuntimeExports.jsx("path", { d: "M15.03,6.27h-.03c-.43,0-.75,.27-.82,.69-.06,.37,.19,.75,.56,.85,.08,.02,.17,.03,.26,.04h.09c.57,.07,1,.51,1.05,1.07v.06c.01,.1,.02,.19,.05,.28,.1,.33,.4,.56,.74,.56,.05,0,.1,0,.15-.01,.42-.08,.67-.44,.64-.91-.11-1.48-1.25-2.59-2.69-2.62Z" })] })),
    chipWithDollar: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15.7,22.88c-.48,0-.88-.39-.88-.88v-1.78h-1.92v1.78c0,.48-.39,.88-.88,.88s-.88-.39-.88-.88v-1.78h-1.92v1.78c0,.48-.39,.88-.88,.88s-.88-.39-.88-.88v-1.78h-1.07c-1.45,0-2.62-1.18-2.62-2.62v-1.03H2c-.48,0-.88-.39-.88-.88s.39-.88,.88-.88h1.8v-1.92H2c-.48,0-.88-.39-.88-.88s.39-.88,.88-.88h1.8v-1.92H2c-.48,0-.88-.39-.88-.88s.39-.88,.88-.88h1.8v-1.07c0-1.45,1.18-2.62,2.62-2.62h1.07v-1.79c0-.48,.39-.88,.88-.88s.88,.39,.88,.88v1.79h1.92v-1.79c0-.48,.39-.88,.88-.88s.88,.39,.88,.88v1.79h1.92v-1.79c0-.48,.39-.88,.88-.88s.88,.39,.88,.88v1.79h1.03c1.45,0,2.62,1.18,2.62,2.62v1.02h1.77c.48,0,.88,.39,.88,.88s-.39,.88-.88,.88h-1.77v1.92h1.77c.48,0,.88,.39,.88,.88s-.39,.88-.88,.88h-1.77v1.92h1.77c.48,0,.88,.39,.88,.88s-.39,.88-.88,.88h-1.77v1.08c0,1.45-1.18,2.62-2.62,2.62h-1.03v1.78c0,.48-.39,.88-.88,.88ZM6.42,5.54c-.48,0-.87,.39-.87,.87v11.19c0,.48,.39,.87,.87,.87h11.19c.48,0,.87-.39,.87-.87V6.41c0-.48-.39-.87-.87-.87H6.42Z" }), jsxRuntimeExports.jsx("path", { d: "M11.57,17.4c-.09,0-.16-.03-.22-.08s-.08-.13-.08-.22v-.83c-.61-.07-1.12-.22-1.52-.45-.41-.23-.72-.51-.92-.83s-.32-.67-.34-1.03c0-.06,.03-.12,.08-.17,.05-.05,.11-.08,.19-.08h1.28c.1,0,.18,.02,.24,.07,.06,.04,.11,.1,.16,.16,.06,.14,.15,.27,.27,.4s.29,.23,.51,.32,.48,.13,.8,.13c.52,0,.91-.08,1.17-.25,.26-.17,.39-.4,.39-.68,0-.21-.07-.38-.21-.5-.14-.13-.36-.24-.66-.35-.3-.1-.7-.22-1.21-.34-.6-.13-1.11-.29-1.52-.5-.42-.2-.73-.47-.94-.79s-.32-.73-.32-1.21c0-.63,.23-1.17,.68-1.61,.45-.44,1.08-.71,1.88-.82v-.83c0-.09,.03-.16,.08-.22,.06-.06,.13-.08,.22-.08h.85c.08,0,.15,.03,.2,.08,.06,.06,.08,.13,.08,.22v.85c.55,.09,1.01,.25,1.39,.5,.37,.24,.66,.52,.85,.83,.2,.31,.3,.61,.31,.89,0,.06-.02,.12-.07,.17-.05,.05-.11,.08-.18,.08h-1.36c-.07,0-.14-.02-.2-.05-.06-.03-.12-.09-.17-.17-.04-.21-.18-.39-.42-.55-.24-.16-.54-.23-.91-.23-.39,0-.7,.07-.94,.22-.23,.14-.35,.36-.35,.66,0,.19,.06,.35,.18,.49,.12,.13,.32,.25,.59,.35,.27,.1,.64,.21,1.1,.33,.7,.14,1.28,.32,1.72,.52,.44,.2,.76,.46,.97,.77,.2,.32,.31,.71,.31,1.19s-.12,.87-.35,1.23c-.23,.36-.56,.64-.98,.86-.42,.22-.91,.36-1.48,.43v.83c0,.09-.03,.16-.08,.22-.06,.06-.12,.08-.2,.08h-.85Z" })] })),
    changeStatus: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M8.39,9.93l-1.06,1.06v-3.39c0-.62,.5-1.12,1.12-1.12h4.1c.48,0,.88-.39,.88-.88s-.39-.88-.88-.88h-4.1c-1.58,0-2.88,1.29-2.88,2.88v3.39l-1.06-1.06c-.34-.34-.9-.34-1.24,0-.34,.34-.34,.9,0,1.24l2.5,2.5c.17,.17,.4,.26,.62,.26,.02,0,.03,0,.05,0,.02,0,.03,0,.05,0,.22,0,.45-.08,.62-.26l2.5-2.5c.34-.34,.34-.9,0-1.24-.34-.34-.9-.34-1.24,0Z" }), jsxRuntimeExports.jsx("path", { d: "M20.71,12.43l-2.5-2.5c-.18-.18-.42-.26-.66-.25-.24-.01-.48,.07-.66,.25l-2.5,2.5c-.34,.34-.34,.9,0,1.24,.17,.17,.4,.26,.62,.26s.45-.08,.62-.26l.96-.96v3.89c0,.62-.5,1.12-1.12,1.12h-4c-.48,0-.88,.39-.88,.88s.39,.88,.88,.88h4c1.58,0,2.88-1.29,2.88-2.88v-4.08l1.14,1.14c.17,.17,.4,.26,.62,.26s.45-.08,.62-.26c.34-.34,.34-.9,0-1.24Z" }), jsxRuntimeExports.jsx("path", { d: "M7.69,17.33l1.04-1.04c.34-.34,.34-.9,0-1.24-.34-.34-.9-.34-1.24,0l-1.04,1.04-1.04-1.04c-.34-.34-.9-.34-1.24,0-.34,.34-.34,.9,0,1.24l1.04,1.04-1.04,1.04c-.34,.34-.34,.9,0,1.24,.17,.17,.4,.26,.62,.26s.45-.08,.62-.26l1.04-1.04,1.04,1.04c.17,.17,.4,.26,.62,.26s.45-.08,.62-.26c.34-.34,.34-.9,0-1.24l-1.04-1.04Z" }), jsxRuntimeExports.jsx("path", { d: "M16.78,8.79c-.2,0-.4-.07-.56-.2l-1.84-1.54c-.37-.31-.42-.86-.11-1.23,.31-.37,.86-.42,1.23-.11l1.17,.98,1.82-2.21c.31-.37,.86-.43,1.23-.12,.37,.31,.43,.86,.12,1.23l-2.38,2.89c-.15,.18-.36,.29-.6,.32-.03,0-.05,0-.08,0Z" })] })),
    trendUp: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21.2,22.07H4.41c-1.37,0-2.48-1.11-2.48-2.48V2.8c0-.48,.39-.88,.88-.88s.88,.39,.88,.88V19.59c0,.4,.33,.73,.73,.73H21.2c.48,0,.88,.39,.88,.88s-.39,.88-.88,.88Z" }), jsxRuntimeExports.jsx("path", { d: "M21.06,8.35c-.14-.19-.35-.34-.6-.37l-3.51-.42c-.48-.05-.92,.29-.97,.77-.06,.48,.29,.92,.77,.97l1.57,.19s-.03,.01-.04,.02l-4.85,3.85s-.05,.04-.08,.07c-.15,.15-.33,.16-.42,.16-.09,0-.27-.04-.39-.21l-1.04-1.39c-.4-.53-1.01-.86-1.67-.91-.66-.05-1.31,.19-1.73,.62l-3.35,2.85c-.37,.31-.41,.87-.1,1.23,.17,.2,.42,.31,.67,.31,.2,0,.4-.07,.57-.21l3.4-2.89c.15-.15,.33-.17,.42-.16,.09,0,.26,.04,.39,.21l1.04,1.39c.4,.53,1.01,.86,1.67,.91,.63,.05,1.28-.18,1.74-.62l4.75-3.77-.17,1.4c-.06,.48,.29,.92,.77,.97,.04,0,.07,0,.1,0,.44,0,.81-.33,.87-.77l.42-3.51c.03-.26-.06-.5-.22-.68Z" })] })),
    trendDown: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21.2,22.07H4.41c-1.37,0-2.48-1.11-2.48-2.48V2.8c0-.48,.39-.88,.88-.88s.88,.39,.88,.88V19.59c0,.4,.33,.73,.73,.73H21.2c.48,0,.88,.39,.88,.88s-.39,.88-.88,.88Z" }), jsxRuntimeExports.jsx("path", { d: "M21.27,14.61l-.42-3.51c-.06-.48-.5-.82-.97-.77-.48,.06-.82,.49-.77,.97l.17,1.4-4.75-3.77c-.47-.44-1.09-.68-1.74-.62-.66,.05-1.27,.38-1.67,.91l-1.04,1.39c-.13,.17-.3,.21-.39,.21-.1,0-.27,0-.47-.2l-3.35-2.85c-.37-.31-.92-.27-1.23,.1s-.27,.92,.1,1.23l3.29,2.8c.47,.47,1.13,.72,1.78,.66,.66-.05,1.27-.38,1.67-.91l1.04-1.39c.13-.17,.3-.21,.39-.21,.09,0,.27,0,.42,.16,.02,.02,.05,.05,.08,.07l4.85,3.85s.03,.01,.04,.02l-1.56,.19c-.48,.06-.82,.49-.77,.97,.05,.44,.43,.77,.87,.77,.03,0,.07,0,.1,0l3.51-.42c.26-.03,.47-.17,.61-.37,.16-.18,.24-.42,.21-.67Z" })] })),
    costRefresh: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M21.28,13.3c-.47-.12-.94,.18-1.05,.65-.9,3.76-4.23,6.38-8.1,6.38-3.49,0-6.53-2.13-7.76-5.31l1.47,.29c.48,.09,.93-.21,1.03-.69,.09-.47-.21-.94-.69-1.03l-2.51-.5c-.45-.09-.9,0-1.28,.25-.38,.25-.64,.64-.73,1.09l-.5,2.52c-.09,.47,.21,.94,.69,1.03,.06,.01,.12,.02,.17,.02,.41,0,.77-.29,.86-.7l.17-.94c1.64,3.45,5.12,5.73,9.09,5.73,4.68,0,8.72-3.18,9.8-7.73,.11-.47-.18-.94-.65-1.05Z" }), jsxRuntimeExports.jsx("path", { d: "M22.17,5.95c-.48-.08-.93,.21-1.03,.69l-.12,.64c-1.71-3.24-5.09-5.35-8.91-5.35C7.44,1.92,3.41,5.09,2.32,9.64c-.11,.47,.18,.94,.65,1.05,.07,.02,.14,.02,.21,.02,.39,0,.75-.27,.85-.67,.9-3.75,4.23-6.37,8.1-6.37,3.48,0,6.51,2.12,7.75,5.28l-1.69-.34c-.48-.09-.93,.21-1.03,.69-.09,.47,.21,.94,.69,1.03l2.52,.5c.11,.02,.22,.03,.33,.03,.8,0,1.51-.56,1.67-1.37l.5-2.52c.09-.47-.21-.94-.69-1.03Z" }), jsxRuntimeExports.jsx("path", { d: "M11.83,17.39c-.09,0-.16-.03-.22-.08-.06-.06-.08-.13-.08-.22v-.83c-.61-.07-1.12-.22-1.52-.45-.41-.23-.72-.51-.92-.83s-.32-.67-.34-1.03c0-.06,.03-.12,.08-.17,.05-.05,.11-.08,.19-.08h1.28c.1,0,.18,.02,.24,.07,.06,.04,.11,.1,.16,.16,.06,.14,.15,.27,.27,.4,.12,.13,.29,.23,.51,.32s.48,.12,.8,.12c.52,0,.91-.08,1.17-.25,.26-.17,.39-.4,.39-.68,0-.21-.07-.38-.21-.5-.14-.13-.36-.24-.66-.35-.3-.11-.7-.22-1.21-.34-.6-.13-1.11-.29-1.52-.5-.42-.21-.73-.47-.94-.79s-.32-.73-.32-1.21c0-.63,.23-1.17,.68-1.61,.45-.44,1.08-.71,1.88-.81v-.83c0-.09,.03-.16,.08-.22,.06-.06,.13-.08,.22-.08h.85c.08,0,.15,.03,.2,.08s.08,.13,.08,.22v.85c.55,.09,1.01,.25,1.39,.5,.37,.24,.66,.52,.85,.83s.3,.61,.31,.89c0,.06-.02,.12-.07,.17-.05,.05-.11,.08-.18,.08h-1.36c-.07,0-.14-.02-.2-.05-.06-.03-.12-.09-.17-.17-.04-.21-.18-.39-.42-.55-.24-.15-.54-.23-.91-.23-.39,0-.7,.07-.94,.21-.23,.14-.35,.37-.35,.66,0,.19,.06,.35,.18,.49s.32,.25,.59,.35c.27,.1,.64,.21,1.1,.33,.7,.14,1.28,.32,1.72,.52,.44,.2,.76,.46,.97,.78,.2,.31,.31,.71,.31,1.19s-.12,.87-.35,1.23c-.23,.36-.56,.64-.98,.86s-.91,.36-1.48,.43v.83c0,.09-.03,.16-.08,.22-.06,.05-.12,.08-.2,.08h-.85Z" })] })),
    checkmark: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M8.99,18.23h0c-.23,0-.45-.09-.62-.26L3.43,13.03c-.34-.34-.34-.9,0-1.24s.9-.34,1.24,0l4.32,4.32L19.43,5.67c.34-.34,.9-.34,1.24,0s.34,.9,0,1.24l-11.06,11.06c-.16,.16-.39,.26-.62,.26Z" }) })),
    checkmarkDouble: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M11.6,17.32c-.22,0-.45-.08-.62-.26l-4.13-4.13c-.34-.34-.34-.9,0-1.24,.34-.34,.9-.34,1.24,0l3.51,3.51L20.23,6.58c.34-.34,.9-.34,1.24,0,.34,.34,.34,.9,0,1.24l-9.25,9.25c-.17,.17-.4,.26-.62,.26Z" }), jsxRuntimeExports.jsx("path", { d: "M6.98,17.32c-.22,0-.45-.08-.62-.26L2.23,12.94c-.34-.34-.34-.9,0-1.24,.34-.34,.9-.34,1.24,0l4.13,4.13c.34,.34,.34,.9,0,1.24-.17,.17-.4,.26-.62,.26Z" }), jsxRuntimeExports.jsx("path", { d: "M11.61,12.69c-.22,0-.45-.08-.62-.26-.34-.34-.34-.9,0-1.24l4.62-4.62c.34-.34,.9-.34,1.24,0,.34,.34,.34,.9,0,1.24l-4.62,4.62c-.17,.17-.4,.26-.62,.26Z" })] })),
    calendar: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs("g", { children: [jsxRuntimeExports.jsx("path", { d: "M15.15,6.85h1.2c.14,0,.25-.11,.25-.25v-1.25h2.8v14.81h1.7V5.25c0-.88-.72-1.6-1.6-1.6h-2.9v-1.25c0-.14-.11-.25-.25-.25h-1.2c-.14,0-.25,.11-.25,.25v1.25h-5.8v-1.25c0-.14-.11-.25-.25-.25h-1.19c-.14,0-.25,.11-.25,.25v1.25h-2.9c-.88,0-1.6,.72-1.6,1.6v15c0,.88,.72,1.6,1.6,1.6h15.01c.88,0,1.59-.71,1.59-1.59v-.11H4.6V5.35h2.8v1.25c0,.14,.11,.25,.25,.25h1.19c.14,0,.25-.11,.25-.25v-1.25h5.8v1.25c0,.14,.11,.25,.25,.25Z" }), jsxRuntimeExports.jsx("rect", { x: "6.54", y: "8.57", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "10.89", y: "8.57", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "15.24", y: "8.57", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "6.54", y: "12.35", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "10.89", y: "12.35", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "15.24", y: "12.35", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "6.54", y: "16.13", width: "2.22", height: "2.22", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "10.89", y: "16.13", width: "2.22", height: "2.22", rx: ".5", ry: ".5" })] }) })),
    trendLineUp: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.74,7.89c-.16-.23-.41-.4-.72-.43l-4.17-.5c-.57-.06-1.09,.34-1.15,.91-.07,.57,.34,1.09,.91,1.15l1.86,.22s-.03,.01-.05,.02l-5.75,4.57s-.06,.05-.09,.08c-.18,.18-.39,.19-.5,.19-.11,0-.32-.05-.47-.25l-1.24-1.65c-.47-.63-1.2-1.02-1.98-1.08-.79-.06-1.56,.23-2.05,.73l-3.97,3.38c-.44,.37-.49,1.03-.12,1.46,.21,.24,.5,.37,.79,.37,.24,0,.48-.08,.67-.25l4.03-3.44c.18-.18,.4-.2,.5-.19,.11,0,.31,.05,.47,.25l1.24,1.65c.47,.63,1.2,1.02,1.98,1.08,.75,.05,1.51-.22,2.07-.74l5.63-4.47-.2,1.66c-.07,.57,.34,1.09,.91,1.15,.04,0,.08,0,.12,0,.52,0,.97-.39,1.03-.92l.5-4.17c.04-.3-.07-.59-.26-.8Z" }) })),
    trendLineDown: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.99,15.31l-.5-4.17c-.07-.57-.59-.98-1.15-.91-.57,.07-.98,.59-.91,1.15l.2,1.66-5.64-4.47c-.55-.53-1.3-.8-2.07-.74-.79,.06-1.51,.45-1.98,1.08l-1.24,1.65c-.15,.2-.36,.25-.46,.26-.12,0-.32,0-.56-.24l-3.97-3.38c-.44-.37-1.09-.32-1.46,.12s-.32,1.09,.12,1.46l3.91,3.32c.56,.56,1.34,.85,2.12,.79,.79-.06,1.51-.45,1.98-1.08l1.24-1.65c.15-.2,.36-.25,.47-.25,.11,0,.32,0,.5,.19,.03,.03,.06,.05,.09,.08l5.75,4.57s.03,.01,.05,.03l-1.86,.22c-.57,.07-.98,.59-.91,1.15,.06,.53,.51,.92,1.03,.92,.04,0,.08,0,.12,0l4.17-.5c.31-.04,.56-.21,.72-.44,.19-.21,.29-.5,.25-.8Z" }) })),
    target: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M1.78,13.52c-.08-4.59,3.04-8.4,7.47-9.18,2.01-.35,3.93-.04,5.75,.91,.37,.2,.4,.36,.11,.65-.2,.2-.42,.39-.6,.61-.19,.23-.38,.25-.65,.12-1.65-.77-3.36-.9-5.1-.39-3.28,.95-5.38,3.97-5.2,7.46,.17,3.26,2.66,6.06,5.94,6.65,4.15,.75,8.04-2.15,8.51-6.34,.15-1.34-.06-2.64-.64-3.86-.13-.27-.12-.46,.11-.66,.22-.19,.42-.42,.63-.62,.28-.28,.44-.25,.63,.11,.78,1.47,1.16,3.05,1.03,4.7-.3,3.7-2.14,6.37-5.55,7.83-5.46,2.33-11.72-1.37-12.37-7.26-.03-.28-.04-.55-.06-.74Z" }), jsxRuntimeExports.jsx("path", { d: "M10.8,7.75c.49,.09,.98,.15,1.47,.26,.36,.08,.41,.32,.15,.58-.27,.28-.54,.56-.83,.82-.1,.09-.28,.16-.41,.15-1.98-.18-3.75,1.17-4.02,3.09-.29,2,1,3.81,2.97,4.18,2.39,.45,4.57-1.55,4.31-3.96-.02-.21,.02-.35,.17-.49,.27-.25,.52-.52,.78-.78,.28-.27,.49-.22,.6,.15,.63,2.14-.2,4.59-2.05,5.86-1.87,1.28-3.86,1.41-5.83,.3-1.94-1.1-2.84-2.86-2.72-5.08,.16-2.82,2.55-5.01,5.41-5.06Z" }), jsxRuntimeExports.jsx("path", { d: "M10.75,14.78c-.82-.03-1.46-.64-1.52-1.47-.06-.78,.49-1.5,1.28-1.62,.4-.06,.7-.24,.98-.52,1.65-1.66,3.31-3.32,4.97-4.98,.33-.32,.52-.67,.51-1.14,0-.44,.18-.83,.5-1.14,.67-.67,1.34-1.35,2.02-2.01,.07-.07,.24-.15,.3-.12,.09,.05,.15,.2,.16,.31,.03,.47,.04,.94,.05,1.41,.01,.34,.16,.49,.49,.5,.48,.02,.96,.02,1.44,.05,.1,0,.24,.07,.28,.15,.03,.06-.03,.22-.09,.28-.7,.71-1.4,1.42-2.12,2.11-.31,.3-.71,.44-1.14,.43-.39,0-.69,.14-.96,.41-1.73,1.73-3.46,3.46-5.19,5.19-.22,.22-.34,.47-.38,.77-.12,.83-.79,1.4-1.58,1.38Z" })] })),
    refreshSuccess: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m21.28,13.3c-.47-.11-.94.18-1.05.65-.9,3.76-4.23,6.38-8.1,6.38-3.49,0-6.53-2.13-7.76-5.31l1.46.29c.48.09.94-.21,1.03-.69.09-.47-.21-.93-.69-1.03l-2.52-.5c-.93-.19-1.82.42-2.01,1.34l-.5,2.52c-.09.47.21.93.69,1.03.06.01.12.02.17.02.41,0,.77-.29.86-.7l.17-.95c1.64,3.45,5.12,5.73,9.09,5.73,4.68,0,8.71-3.18,9.8-7.73.11-.47-.18-.94-.65-1.05Z" }), jsxRuntimeExports.jsx("path", { d: "m22.17,5.95c-.48-.08-.93.21-1.03.69l-.12.63c-1.71-3.24-5.09-5.35-8.91-5.35C7.44,1.92,3.41,5.09,2.32,9.64c-.11.47.18.94.65,1.05.07.02.14.02.21.02.39,0,.75-.27.85-.67.9-3.75,4.23-6.37,8.1-6.37,3.48,0,6.51,2.12,7.75,5.28l-1.7-.34c-.47-.09-.93.21-1.03.69-.09.47.21.93.69,1.03l2.52.5c.11.02.22.03.33.03.8,0,1.51-.56,1.67-1.37l.5-2.52c.09-.47-.21-.94-.69-1.03Z" }), jsxRuntimeExports.jsx("path", { d: "m10.97,14.96c.22,0,.45-.08.62-.26l4.17-4.17c.34-.34.34-.9,0-1.24-.34-.34-.9-.34-1.24,0l-3.55,3.55-1.24-1.24c-.34-.34-.9-.34-1.24,0-.34.34-.34.9,0,1.24l1.86,1.86c.17.17.4.26.62.26Z" })] })),
    refreshWarning: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m21.28,13.3c-.47-.11-.94.18-1.05.65-.9,3.76-4.23,6.38-8.1,6.38-3.49,0-6.53-2.13-7.76-5.31l1.46.29c.47.09.94-.21,1.03-.69.09-.47-.21-.93-.69-1.03l-2.52-.5c-.93-.19-1.82.42-2.01,1.34l-.5,2.52c-.09.47.21.93.69,1.03.06.01.12.02.17.02.41,0,.77-.29.86-.7l.17-.95c1.64,3.45,5.12,5.73,9.09,5.73,4.68,0,8.71-3.18,9.8-7.73.11-.47-.18-.94-.65-1.05Z" }), jsxRuntimeExports.jsx("path", { d: "m22.17,5.95c-.48-.08-.93.21-1.03.69l-.12.63c-1.71-3.24-5.09-5.35-8.91-5.35C7.44,1.92,3.41,5.09,2.32,9.64c-.11.47.18.94.65,1.05.07.02.14.02.21.02.39,0,.75-.27.85-.67.9-3.75,4.23-6.37,8.1-6.37,3.48,0,6.51,2.12,7.75,5.28l-1.7-.34c-.47-.09-.93.21-1.03.69-.09.47.21.93.69,1.03l2.52.5c.11.02.22.03.33.03.8,0,1.51-.56,1.67-1.37l.5-2.52c.09-.47-.21-.94-.69-1.03Z" }), jsxRuntimeExports.jsx("path", { d: "m11.19,16.88c-.1,0-.18-.03-.24-.1-.06-.07-.09-.14-.09-.23v-1.63c0-.1.03-.18.09-.25.06-.07.14-.1.24-.1h1.63c.09,0,.17.03.23.1s.1.15.1.25v1.63c0,.09-.03.17-.1.23s-.14.1-.23.1h-1.63Zm.05-2.93c-.1,0-.18-.03-.24-.1s-.09-.14-.09-.23v-5.68c0-.1.03-.18.09-.24s.14-.09.24-.09h1.52c.1,0,.18.03.24.09s.09.14.09.24v5.68c0,.09-.03.17-.09.23s-.14.1-.24.1h-1.52Z" })] })),
    refresh: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m21.28,13.3c-.47-.11-.94.18-1.05.65-.9,3.76-4.23,6.38-8.1,6.38-3.49,0-6.53-2.13-7.76-5.31l1.46.29c.47.09.94-.21,1.03-.69.09-.47-.21-.93-.69-1.03l-2.52-.5c-.93-.19-1.82.42-2.01,1.34l-.5,2.52c-.09.47.21.93.69,1.03.06.01.12.02.17.02.41,0,.77-.29.86-.7l.17-.95c1.64,3.45,5.12,5.73,9.09,5.73,4.68,0,8.71-3.18,9.8-7.73.11-.47-.18-.94-.65-1.05Z" }), jsxRuntimeExports.jsx("path", { d: "m22.17,5.95c-.48-.08-.93.21-1.03.69l-.12.63c-1.71-3.24-5.09-5.35-8.91-5.35C7.44,1.92,3.41,5.09,2.32,9.64c-.11.47.18.94.65,1.05.07.02.14.02.21.02.39,0,.75-.27.85-.67.9-3.75,4.23-6.37,8.1-6.37,3.48,0,6.51,2.12,7.75,5.28l-1.7-.34c-.47-.09-.93.21-1.03.69-.09.47.21.93.69,1.03l2.52.5c.11.02.22.03.33.03.8,0,1.51-.56,1.67-1.37l.5-2.52c.09-.47-.21-.94-.69-1.03Z" })] })),
    warning: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m12,1.13C6,1.13,1.12,6,1.12,12s4.88,10.88,10.88,10.88,10.88-4.88,10.88-10.88S18,1.13,12,1.13Zm0,20c-5.03,0-9.12-4.09-9.12-9.12S6.97,2.88,12,2.88s9.12,4.09,9.12,9.12-4.09,9.12-9.12,9.12Z" }), jsxRuntimeExports.jsx("path", { d: "m11.21,13.87h1.58c.1,0,.18-.03.25-.1.06-.07.1-.15.1-.24v-5.88c0-.1-.03-.18-.1-.25s-.15-.1-.25-.1h-1.58c-.1,0-.18.03-.25.1-.06.06-.1.15-.1.25v5.88c0,.09.03.17.1.24.06.07.15.1.25.1Z" }), jsxRuntimeExports.jsx("path", { d: "m12.84,14.51h-1.69c-.1,0-.18.03-.25.1-.06.07-.1.15-.1.25v1.69c0,.09.03.17.1.24.06.07.15.1.25.1h1.69c.09,0,.17-.03.24-.1.07-.07.1-.15.1-.24v-1.69c0-.1-.03-.18-.1-.25s-.15-.1-.24-.1Z" })] })),
    costSettings: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m12.71,3.75c.05,0,.09.04.1.08l.15.87c.11.63.54,1.15,1.14,1.36.2.07.4.15.59.24.24.11.49.17.75.17.36,0,.71-.11,1.02-.32l.8-.57,1.11,1.11s.04.09.01.13l-.52.73c-.37.52-.43,1.19-.16,1.76.08.18.16.37.23.56.21.59.73,1.03,1.35,1.13l.97.17v1.57s-.03.09-.08.1l-.89.15c-.62.1-1.14.54-1.36,1.13-.07.18-.14.37-.23.55-.27.57-.21,1.25.16,1.76l.53.74s.02.09-.01.13l-1.11,1.11-.8-.57c-.3-.22-.66-.33-1.02-.33-.25,0-.51.06-.75.17-.18.08-.37.16-.56.23-.59.21-1.03.73-1.13,1.35l-.15.89s-.05.08-.1.08h-1.49s-.09-.03-.1-.08l-.15-.89c-.1-.62-.54-1.15-1.13-1.36-.18-.06-.35-.14-.52-.21-.24-.11-.49-.16-.74-.16-.36,0-.71.11-1.01.32l-.82.58-1.12-1.12s-.04-.08,0-.12l.52-.72c.37-.52.43-1.2.16-1.78-.09-.18-.16-.37-.23-.55-.22-.59-.73-1.02-1.35-1.13l-.91-.16s-.08-.05-.08-.1v-1.49s.04-.09.08-.1l.87-.15c.63-.11,1.15-.54,1.36-1.15.07-.19.14-.38.23-.56.27-.57.2-1.24-.16-1.75l-.54-.75s-.02-.09.01-.13l1.11-1.12.79.57c.3.22.66.33,1.02.33.26,0,.52-.06.76-.17.18-.09.36-.16.55-.23.59-.22,1.02-.73,1.12-1.35l.16-.91s.05-.09.1-.09h1.48m0-1.75h-1.48c-.9,0-1.68.65-1.83,1.54l-.16.91c-.24.09-.48.19-.71.3l-.79-.57c-.3-.21-.65-.33-1.02-.33-.47,0-.91.18-1.24.51l-1.11,1.11c-.64.64-.72,1.64-.2,2.38l.54.75c-.11.23-.2.47-.29.71l-.87.15c-.89.15-1.54.92-1.54,1.82v1.49c0,.9.65,1.67,1.54,1.82l.91.16c.09.24.19.48.3.71l-.52.72c-.53.73-.44,1.74.19,2.38l1.12,1.12c.33.33.77.51,1.24.51.37,0,.72-.11,1.01-.32l.82-.58c.22.1.44.19.67.27l.15.89c.15.89.92,1.54,1.82,1.54h1.49c.9,0,1.67-.65,1.82-1.54l.15-.89c.24-.09.48-.18.71-.29l.8.57c.3.21.65.33,1.02.33.47,0,.91-.18,1.24-.51l1.11-1.11c.64-.64.72-1.64.2-2.38l-.53-.74c.11-.24.21-.47.29-.71l.89-.15c.89-.15,1.54-.92,1.54-1.82v-1.57c0-.86-.6-1.59-1.45-1.73l-.98-.17c-.09-.24-.19-.48-.29-.71l.52-.73c.53-.74.44-1.75-.2-2.39l-1.11-1.11c-.33-.33-.77-.51-1.24-.51-.37,0-.72.11-1.01.33l-.81.57c-.25-.12-.5-.22-.76-.31l-.15-.87c-.15-.89-.92-1.54-1.83-1.54h0Z" }), jsxRuntimeExports.jsx("path", { d: "m11.56,17.35c-.09,0-.16-.03-.22-.08s-.08-.13-.08-.22v-.83c-.61-.07-1.12-.22-1.52-.45-.41-.23-.72-.51-.92-.83s-.32-.67-.34-1.03c0-.06.03-.12.08-.17.05-.05.11-.08.19-.08h1.28c.1,0,.18.02.24.07.06.04.11.1.16.16.06.14.15.27.27.4s.29.23.51.32.48.13.8.13c.52,0,.91-.08,1.17-.25.26-.17.39-.4.39-.68,0-.21-.07-.38-.21-.5-.14-.13-.36-.24-.66-.35-.3-.1-.7-.22-1.21-.34-.6-.13-1.11-.29-1.52-.5-.42-.2-.73-.47-.94-.79s-.32-.73-.32-1.21c0-.63.23-1.17.68-1.61.45-.44,1.08-.71,1.88-.82v-.83c0-.09.03-.16.08-.22.06-.06.13-.08.22-.08h.85c.08,0,.15.03.2.08.06.06.08.13.08.22v.85c.55.09,1.01.25,1.39.5.37.24.66.52.85.83.2.31.3.61.31.89,0,.06-.02.12-.07.17-.05.05-.11.08-.18.08h-1.36c-.07,0-.14-.02-.2-.05-.06-.03-.12-.09-.17-.17-.04-.21-.18-.39-.42-.55-.24-.16-.54-.23-.91-.23-.39,0-.7.07-.94.22-.23.14-.35.36-.35.66,0,.19.06.35.18.49.12.13.32.25.59.35.27.1.64.21,1.1.33.7.14,1.28.32,1.72.52.44.2.76.46.97.77.2.32.31.71.31,1.19s-.12.87-.35,1.23c-.23.36-.56.64-.98.86-.42.22-.91.36-1.48.43v.83c0,.09-.03.16-.08.22-.06.06-.12.08-.2.08h-.85Z" })] })),
    playFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm6.14,11.42c-.08.15-.2.27-.35.35l-8.57,4.71c-.13.07-.27.11-.42.11-.48,0-.88-.39-.88-.88V7.28c0-.48.39-.88.88-.88.15,0,.3.04.43.11l8.57,4.71c.21.11.35.3.42.52s.04.46-.07.67h-.01Z" }) })),
    cancelFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm5.19,14.69c.41.41.41,1.08,0,1.49-.21.21-.48.31-.75.31s-.54-.1-.75-.31l-3.7-3.7-3.7,3.7c-.21.21-.48.31-.75.31s-.54-.1-.75-.31c-.41-.41-.41-1.08,0-1.49l3.7-3.7-3.7-3.7c-.41-.41-.41-1.08,0-1.49s1.08-.41,1.49,0l3.7,3.7,3.7-3.7c.41-.41,1.08-.41,1.49,0s.41,1.08,0,1.49l-3.7,3.7,3.7,3.7h.02Z" }) })),
    stopFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm5,15c0,.55-.45,1-1,1h-8c-.55,0-1-.45-1-1v-8c0-.55.45-1,1-1h8c.55,0,1,.45,1,1v8Z" }) })),
    pendingFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m11.97,1C5.9,1,.97,5.93.97,12s4.93,11,11,11,11-4.93,11-11S18.03,1,11.97,1Zm-3.25,11.19c0,.72-.59,1.31-1.31,1.31h-.37c-.72,0-1.31-.59-1.31-1.31v-.37c0-.72.59-1.31,1.31-1.31h.37c.72,0,1.31.59,1.31,1.31v.37Zm4.75,0c0,.72-.59,1.31-1.31,1.31h-.37c-.72,0-1.31-.59-1.31-1.31v-.37c0-.72.59-1.31,1.31-1.31h.37c.72,0,1.31.59,1.31,1.31,0,0,0,.37,0,.37Zm4.75,0c0,.72-.59,1.31-1.31,1.31h-.37c-.72,0-1.31-.59-1.31-1.31v-.37c0-.72.59-1.31,1.31-1.31h.37c.72,0,1.31.59,1.31,1.31v.37Z" }) })),
    pausedFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,.89C5.92.89,1,5.81,1,11.89s4.92,11,11,11,11-4.92,11-11S18.08.89,12,.89Zm-1.13,16.2c0,.53-.43.96-.96.96h0c-.53,0-.96-.43-.96-.96V6.91c0-.53.43-.96.96-.96h0c.53,0,.96.43.96.96v10.17h0Zm4.18.01c0,.53-.43.96-.96.96s-.96-.43-.96-.96V6.91c0-.53.43-.96.96-.96s.96.43.96.96v10.17h0Z" }) })),
    successFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m11.98,1.09C5.91,1.09.98,6.02.98,12.09s4.93,11,11,11,11-4.93,11-11S18.04,1.09,11.98,1.09Zm5.9,8.11l-7.09,7.09c-.2.2-.47.31-.74.31s-.54-.1-.74-.31l-3.17-3.17c-.41-.41-.41-1.07,0-1.48s1.07-.41,1.48,0l2.43,2.43,6.35-6.35c.41-.41,1.07-.41,1.48,0,.41.41.41,1.07,0,1.48Z" }) })),
    successManualFilled: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.1198 18.8703C12.1198 15.1603 15.1298 12.1503 18.8398 12.1503C20.2598 12.1503 21.5698 12.5903 22.6498 13.3403C22.7198 12.8303 22.7698 12.3103 22.7698 11.7703C22.7798 5.71027 17.8398 0.780273 11.7798 0.780273C5.71979 0.780273 0.779785 5.71027 0.779785 11.7803C0.779785 17.8503 5.70978 22.7803 11.7798 22.7803C12.2998 22.7803 12.7998 22.7303 13.2998 22.6603C12.5344 21.5449 12.1263 20.223 12.1298 18.8703H12.1198ZM10.5698 15.9803C10.3598 16.1803 10.0998 16.2903 9.82979 16.2903C9.55979 16.2903 9.28979 16.1903 9.08979 15.9803L5.91979 12.8103C5.50979 12.4003 5.50979 11.7403 5.91979 11.3303C6.32979 10.9203 6.98979 10.9203 7.39979 11.3303L9.82979 13.7603L16.1798 7.41027C16.5898 7.00027 17.2498 7.00027 17.6598 7.41027C18.0698 7.82027 18.0698 8.48027 17.6598 8.89027L10.5698 15.9803Z" }), jsxRuntimeExports.jsx("path", { d: "M18.9 14C16.2 14 14 16.2 14 18.9C14 21.6 16.2 23.8 18.9 23.8C21.6 23.8 23.8 21.6 23.8 18.9C23.8 16.2 21.6 14 18.9 14Z", fill: "#55A9F3" }), jsxRuntimeExports.jsx("path", { d: "M20.4534 21.2998L18.6212 19.4677L18.0855 21.0855L16.7998 16.7998L21.0855 18.0855L19.4677 18.6212L21.2998 20.4534L20.4534 21.2998Z" })] })),
    waitingFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12.11,1C6.05,1,1.11,5.93,1.11,12s4.93,11,11,11,11-4.93,11-11S18.18,1,12.11,1Zm3.17,15.94c-.17.17-.4.26-.62.26s-.45-.08-.62-.26l-2.9-2.9c-.16-.16-.26-.39-.26-.62v-5.75c0-.48.39-.88.87-.88s.87.39.87.88v5.39l2.65,2.65c.34.34.34.9,0,1.24h.01Z" }) })),
    warningFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm-1.18,5.86c0-.1.03-.19.1-.26.07-.07.15-.1.26-.1h1.64c.1,0,.19.03.26.1s.1.15.1.26v6.12c0,.1-.03.18-.1.25-.07.07-.15.11-.26.11h-1.64c-.11,0-.19-.04-.26-.11-.07-.07-.1-.15-.1-.25v-6.12Zm2.41,10.29c0,.09-.04.18-.11.25s-.15.11-.25.11h-1.75c-.1,0-.19-.04-.26-.11-.07-.07-.1-.15-.1-.25v-1.75c0-.1.03-.19.1-.26s.15-.11.26-.11h1.75c.09,0,.18.03.25.11.07.07.11.16.11.26v1.75Z" }) })),
    inProgressFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12.0005 22.9998C9.8249 22.9998 7.69816 22.3546 5.88922 21.1459C4.08028 19.9372 2.67038 18.2193 1.83782 16.2093C1.00525 14.1993 0.787418 11.9876 1.21186 9.85377C1.63629 7.71998 2.68394 5.75996 4.22232 4.22159C5.7607 2.68321 7.72071 1.63556 9.8545 1.21112C11.9883 0.786685 14.2 1.00452 16.21 1.83709C18.22 2.66965 19.938 4.07955 21.1467 5.88849C22.3554 7.69743 23.0005 9.82417 23.0005 11.9998C22.9972 14.9161 21.8372 17.7121 19.775 19.7743C17.7128 21.8365 14.9169 22.9965 12.0005 22.9998V22.9998ZM12.0005 2.99976C10.2205 2.99976 8.4804 3.5276 7.00036 4.51653C5.52032 5.50547 4.36677 6.91107 3.68558 8.55561C3.00439 10.2001 2.82616 12.0097 3.17343 13.7556C3.52069 15.5014 4.37786 17.105 5.63653 18.3637C6.8952 19.6224 8.49885 20.4796 10.2447 20.8268C11.9905 21.1741 13.8001 20.9959 15.4446 20.3147C17.0892 19.6335 18.4948 18.4799 19.4837 16.9999C20.4727 15.5199 21.0005 13.7798 21.0005 11.9998C20.9979 9.61361 20.0488 7.32594 18.3616 5.63868C16.6743 3.95141 14.3866 3.00237 12.0005 2.99976V2.99976Z" }), jsxRuntimeExports.jsx("path", { d: "M7.05025 16.9497C7.86424 17.7637 8.86642 18.3644 9.96801 18.6986C11.0696 19.0327 12.2366 19.0901 13.3656 18.8655C14.4947 18.6409 15.5509 18.1414 16.4408 17.4111C17.3306 16.6808 18.0266 15.7423 18.4672 14.6788C18.9077 13.6153 19.0791 12.4595 18.9663 11.3139C18.8535 10.1683 18.4598 9.06816 17.8203 8.11101C17.1807 7.15386 16.315 6.3692 15.2998 5.82655C14.2845 5.2839 13.1512 5 12 5L12 12L7.05025 16.9497Z" })] }) })),
    errorFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m6.34,12c0,3.12,2.54,5.66,5.66,5.66,1.24,0,2.39-.41,3.33-1.09l-7.89-7.89c-.68.93-1.09,2.08-1.09,3.33Z" }), jsxRuntimeExports.jsx("path", { d: "m12,6.34c-1.24,0-2.39.41-3.33,1.09l7.89,7.89c.68-.93,1.09-2.08,1.09-3.33,0-3.12-2.54-5.66-5.66-5.66Z" }), jsxRuntimeExports.jsx("path", { d: "m12,1C5.93,1,1,5.92,1,12s4.93,11,11,11,11-4.92,11-11S18.08,1,12,1Zm0,18.41c-4.08,0-7.41-3.32-7.41-7.41s3.32-7.41,7.41-7.41,7.41,3.32,7.41,7.41-3.32,7.41-7.41,7.41Z" })] }) })),
    timeOutFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.94,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm8.68,9.84l-1.73.23c-.04-.29-.1-.58-.17-.86l1.69-.44c.09.35.16.72.21,1.08Zm-.56-2.13l-1.62.66c-.11-.27-.24-.54-.38-.8l1.53-.85c.18.32.33.65.47.99Zm-1.07-1.91l-1.41,1.04c-.17-.24-.36-.46-.57-.67l1.27-1.21c.25.26.49.54.71.84Zm-2.4-2.23c.31.19.61.41.89.64l-1.11,1.36c-.23-.19-.47-.36-.71-.51l.93-1.48Zm-1.99-.92c.35.11.69.24,1.02.4l-.73,1.59c-.26-.12-.54-.23-.82-.32l.53-1.67Zm-2.16-.4c.36.02.73.06,1.09.13l-.31,1.72c-.29-.05-.58-.09-.87-.1l.1-1.75Zm-1.1,0l.12,1.75c-.3.02-.59.06-.87.11l-.34-1.72c.36-.07.72-.12,1.09-.14Zm-2.15.42l.55,1.66c-.28.09-.55.2-.81.33l-.76-1.58c.33-.16.67-.3,1.02-.41Zm-1.98.95l.95,1.47c-.25.16-.48.33-.71.52l-1.12-1.34c.28-.23.58-.45.88-.65Zm-1.68,1.41l1.29,1.19c-.2.21-.39.44-.56.68l-1.42-1.02c.21-.3.45-.58.69-.85Zm-1.28,1.78l1.54.84c-.14.26-.26.52-.37.8l-1.63-.64c.13-.34.29-.68.46-1Zm-.8,2.04l1.7.43c-.07.28-.12.57-.16.86l-1.74-.21c.04-.37.11-.73.2-1.08Zm-.26,2.18h1.75c0,.29.02.58.06.87l-1.74.23c-.05-.36-.07-.73-.07-1.1Zm.62,3.22c-.14-.34-.25-.69-.34-1.05l1.7-.44c.07.28.17.56.27.83l-1.62.65Zm.47.99l1.53-.85c.14.26.3.5.47.74l-1.41,1.03c-.21-.29-.41-.6-.59-.92Zm1.29,1.77l1.27-1.2c.2.21.42.41.64.6l-1.11,1.35c-.28-.23-.55-.48-.8-.75Zm2.66,1.92c-.33-.15-.65-.33-.96-.53l.93-1.48c.25.16.51.3.77.42l-.74,1.58Zm2.09.67c-.36-.07-.72-.16-1.07-.27l.54-1.67c.28.09.56.16.85.22l-.32,1.72Zm.39-7.19v-5.75c0-.48.39-.88.87-.88s.87.39.87.88v5.39l2.65,2.65c.34.34.34.89,0,1.23-.17.17-.4.26-.61.26s-.45-.08-.62-.26l-2.9-2.9c-.16-.16-.26-.39-.26-.62Zm1.23,7.34c-.18,0-.36,0-.53-.02l.11-1.75c.29.02.59.02.88,0l.11,1.75c-.19.01-.38.02-.57.02Zm1.65-.16l-.33-1.72c.29-.06.57-.13.85-.22l.54,1.66c-.35.11-.71.21-1.07.27Zm2.09-.68l-.75-1.58c.27-.13.52-.27.77-.43l.94,1.48c-.31.2-.63.38-.96.53Zm1.85-1.18l-1.12-1.35c.23-.19.44-.39.64-.6l1.28,1.2c-.25.27-.52.52-.8.75Zm1.5-1.6l-1.41-1.03c.17-.24.33-.48.47-.74l1.53.84c-.18.32-.38.64-.59.93Zm1.06-1.92l-1.63-.65c.11-.27.2-.55.27-.83l1.7.43c-.09.35-.2.71-.34,1.05Zm.54-2.13l-1.74-.22c.04-.29.05-.58.05-.88l1.75-.06v.06c0,.37-.02.74-.07,1.1Z" }) }) })),
    timeRangeFilled: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "m12,1C5.94,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm8.68,9.84l-1.73.23c-.04-.29-.1-.58-.17-.86l1.69-.44c.09.35.16.72.21,1.08Zm-.56-2.12l-1.62.66c-.11-.27-.24-.54-.38-.8l1.53-.85c.18.32.33.65.47.99Zm-1.07-1.91l-1.41,1.04c-.17-.24-.36-.46-.57-.67l1.27-1.21c.25.26.49.54.71.84Zm-2.4-2.23c.31.19.61.41.89.64l-1.11,1.35c-.23-.18-.46-.36-.71-.51l.93-1.48Zm-1.99-.92c.35.11.69.24,1.02.4l-.73,1.59c-.26-.12-.54-.23-.82-.32l.53-1.67Zm.51,13.29c-.17.17-.4.26-.61.26s-.45-.08-.62-.26l-2.9-2.9c-.16-.16-.26-.39-.26-.62v-5.75c0-.48.39-.88.87-.88s.87.39.87.88v5.39l2.65,2.65c.34.34.34.89,0,1.23Zm-3.16,3.81c-4.83,0-8.76-3.93-8.76-8.76S7.17,3.24,12,3.24c.54,0,1.07.06,1.59.15l-.31,1.71h0c-.41-.07-.84-.12-1.28-.12-3.86,0-7.01,3.14-7.01,7.01s3.14,7.01,7.01,7.01c2.01,0,3.83-.86,5.11-2.22h0s1.27,1.2,1.27,1.2c-1.6,1.7-3.86,2.78-6.38,2.78Zm7.09-3.61l-1.41-1.03c.17-.24.33-.48.47-.74l1.53.84c-.18.32-.38.64-.59.93Zm1.06-1.92l-1.63-.65c.11-.27.2-.55.27-.83l1.7.43c-.09.35-.2.71-.34,1.05Zm.54-2.13l-1.74-.22c.04-.29.05-.58.05-.88l1.75-.06v.06c0,.37-.02.74-.07,1.1Z" }) }) })),
    desktop: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m18.02,20.29H6.02c-.48,0-.88.39-.88.88s.39.88.88.88h12c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m19.64,2H4.4c-1.79,0-3.25,1.46-3.25,3.25v10.67c0,1.79,1.46,3.25,3.25,3.25h15.24c1.79,0,3.25-1.46,3.25-3.25V5.25c0-1.79-1.46-3.25-3.25-3.25Zm1.5,13.92c0,.83-.67,1.5-1.5,1.5H4.4c-.83,0-1.5-.67-1.5-1.5V5.25c0-.83.67-1.5,1.5-1.5h15.24c.83,0,1.5.67,1.5,1.5v10.67Z" })] }) })),
    desktopChart: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m18,20.27H6c-.48,0-.88.39-.88.88s.39.88.88.88h12c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m19.62,1.98H4.38c-1.79,0-3.25,1.46-3.25,3.25v10.67c0,1.79,1.46,3.25,3.25,3.25h15.24c1.79,0,3.25-1.46,3.25-3.25V5.23c0-1.79-1.46-3.25-3.25-3.25Zm1.5,13.92c0,.83-.67,1.5-1.5,1.5H4.38c-.83,0-1.5-.67-1.5-1.5V5.23c0-.83.67-1.5,1.5-1.5h15.24c.83,0,1.5.67,1.5,1.5v10.67Z" }), jsxRuntimeExports.jsx("rect", { x: "15.24", y: "8.42", width: "2.22", height: "7.08", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "6.54", y: "5.91", width: "2.22", height: "9.59", rx: ".5", ry: ".5" }), jsxRuntimeExports.jsx("rect", { x: "10.89", y: "10.7", width: "2.22", height: "4.79", rx: ".5", ry: ".5" })] }) })),
    docSearch: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m7.7,22.41h-3.51c-1.46,0-2.66-1.19-2.66-2.66V3.33C1.53,1.87,2.73.68,4.19.68h11.98c1.46,0,2.66,1.19,2.66,2.66v4.77c0,.48-.39.88-.88.88s-.88-.39-.88-.88V3.33c0-.5-.41-.91-.91-.91H4.19c-.5,0-.91.41-.91.91v16.42c0,.5.41.91.91.91h3.51c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m7.44,15.12h-1.49c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h1.49c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m10.41,11.01h-4.46c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h4.46c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m14.84,6.93H5.95c-.48,0-.88-.39-.88-.88s.39-.88.88-.88h8.89c.48,0,.88.39.88.88s-.39.88-.88.88Z" }), jsxRuntimeExports.jsx("path", { d: "m19.37,19.16c1.63-2.16,1.32-5.24-.72-7.03-2.05-1.81-5.19-1.72-7.12.22-1.94,1.94-2.04,5.07-.22,7.12,1.8,2.03,4.87,2.34,7.03.72l2.93,2.93.06.06,1.03-1.03s-2.99-2.99-2.99-2.99Zm-.41-3.11c0,2.06-1.68,3.73-3.73,3.73s-3.73-1.67-3.73-3.73,1.67-3.73,3.73-3.73,3.73,1.67,3.73,3.73Z" })] }) })),
    discount: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m22.29,11.48l-2.08-2.15.42-2.96c.06-.4-.22-.78-.62-.85l-2.94-.52-1.4-2.64c-.19-.36-.63-.5-1-.32l-2.68,1.31-2.68-1.31c-.36-.18-.81-.04-1,.32l-1.4,2.64-2.94.52c-.4.07-.67.44-.62.85l.42,2.96-2.08,2.14c-.28.29-.28.75,0,1.05l2.08,2.15-.42,2.96c-.06.4.22.78.62.85l2.94.52,1.4,2.64c.19.36.63.5,1,.32l2.68-1.31,2.68,1.31c.11.05.22.08.33.08.27,0,.53-.15.67-.4l1.4-2.64,2.94-.52c.4-.07.67-.44.62-.85l-.42-2.96,2.08-2.15c.28-.29.28-.75,0-1.05Zm-3.41,2.41c-.16.17-.24.4-.2.63l.37,2.6-2.59.45c-.23.04-.43.18-.53.39l-1.23,2.32-2.36-1.15c-.1-.05-.22-.08-.33-.08s-.23.03-.33.08l-2.36,1.15-1.23-2.32c-.11-.21-.31-.35-.53-.39l-2.59-.45.37-2.6c.03-.23-.04-.46-.2-.63l-1.82-1.89,1.82-1.89c.16-.17.24-.4.2-.63l-.37-2.6,2.59-.45c.23-.04.43-.18.53-.39l1.23-2.32,2.36,1.15c.21.1.45.1.66,0l2.36-1.15,1.23,2.32c.11.21.31.35.53.39l2.59.45-.37,2.6c-.03.23.04.46.2.63l1.82,1.89-1.82,1.89Z" }), jsxRuntimeExports.jsx("path", { d: "m9.61,11.43c1,0,1.82-.82,1.82-1.82s-.82-1.82-1.82-1.82-1.82.82-1.82,1.82c0,1,.82,1.82,1.82,1.82Zm0-2.44c.34,0,.62.28.62.62s-.28.62-.62.62-.62-.28-.62-.62.28-.62.62-.62Z" }), jsxRuntimeExports.jsx("path", { d: "m15.64,8.36c-.24-.24-.62-.24-.85,0l-6.42,6.42c-.24.24-.24.62,0,.85.12.12.27.18.43.18s.31-.06.43-.18l6.42-6.42c.24-.24.24-.62,0-.85Z" }), jsxRuntimeExports.jsx("path", { d: "m14.39,12.57c-1,0-1.82.82-1.82,1.82s.82,1.82,1.82,1.82,1.82-.82,1.82-1.82c0-1-.82-1.82-1.82-1.82Zm0,2.44c-.34,0-.62-.28-.62-.62s.28-.62.62-.62.62.28.62.62c0,.34-.28.62-.62.62Z" })] }) })),
    doubleGear: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m8.65,12.09c-.07-.26-.12-.53-.12-.81,0-1.66,1.35-3.02,3.02-3.02.41,0,.8.08,1.15.23.7-.29,1.45-.48,2.23-.56-.86-.87-2.06-1.42-3.38-1.42-2.63,0-4.77,2.14-4.77,4.77,0,1.12.41,2.14,1.06,2.95.17-.76.45-1.48.82-2.15Z" }), jsxRuntimeExports.jsx("path", { d: "m21.52,14.15l-.54-.09c-.04-.09-.07-.18-.11-.27l.28-.39c.41-.57.35-1.35-.15-1.85l-.74-.74c-.26-.26-.6-.4-.97-.4-.29,0-.56.09-.79.25l-.44.32c-.1-.05-.2-.09-.31-.13l-.08-.47c-.12-.69-.71-1.2-1.42-1.2h-.99c-.7,0-1.3.5-1.42,1.2l-.08.49c-.09.04-.18.07-.27.11l-.43-.31c-.23-.17-.51-.26-.8-.26-.37,0-.71.14-.97.4l-.74.74c-.5.5-.56,1.27-.16,1.85l.29.41c-.04.09-.08.18-.11.28l-.47.08c-.69.12-1.2.71-1.2,1.41v.99c0,.7.5,1.3,1.19,1.41l.5.08c.04.09.07.18.11.27l-.28.39c-.41.57-.35,1.35.15,1.84l.75.75c.26.26.6.4.97.4.29,0,.56-.09.79-.25l.45-.32c.08.04.16.07.25.1l.08.48c.12.69.71,1.2,1.41,1.2h1c.7,0,1.3-.5,1.41-1.19l.08-.48c.09-.04.18-.07.27-.11l.44.31c.23.17.51.26.8.26.36,0,.71-.14.97-.4l.74-.74c.5-.5.56-1.27.15-1.85l-.28-.4c.04-.09.08-.18.11-.27l.48-.08c.69-.12,1.2-.71,1.2-1.41v-1.05c0-.67-.47-1.24-1.14-1.35Zm-2,4.98l.29.4-.54.54-.4-.28c-.23-.17-.51-.25-.8-.25-.2,0-.4.04-.58.13-.11.05-.23.1-.35.15-.46.17-.8.57-.89,1.06l-.08.49h-.77l-.08-.48c-.08-.49-.42-.89-.89-1.06-.11-.04-.23-.09-.33-.14-.18-.08-.38-.13-.58-.13-.29,0-.56.09-.79.25l-.41.29-.54-.54.28-.39c.29-.41.34-.94.12-1.39-.05-.11-.1-.23-.15-.35-.17-.46-.57-.8-1.05-.88l-.5-.08v-.77l.47-.08c.49-.08.9-.43,1.06-.89.04-.12.09-.24.14-.35.21-.44.16-.97-.13-1.37l-.29-.41.54-.55.39.28c.23.17.51.26.8.26.2,0,.41-.05.59-.13.11-.05.23-.1.35-.15.46-.17.8-.57.88-1.05l.08-.5h.77l.08.47c.08.49.43.9.89,1.06.13.04.25.1.38.16.18.09.38.13.58.13.29,0,.56-.09.79-.25l.4-.28.54.54-.28.4c-.29.4-.34.93-.12,1.38.05.11.1.23.15.35.17.46.57.8,1.06.89l.48.08v.77l-.48.08c-.49.08-.89.42-1.06.89-.04.12-.09.23-.15.35-.21.45-.16.98.12,1.38Z" }), jsxRuntimeExports.jsx("path", { d: "m15.79,12.67c-1.86,0-3.38,1.52-3.38,3.38s1.52,3.38,3.38,3.38h.06c.9,0,1.74-.37,2.36-1.01.63-.64.97-1.48.96-2.38,0-1.86-1.52-3.38-3.38-3.38Zm1.81,3.39c0,.99-.78,1.8-1.76,1.81h-.05c-1,0-1.81-.81-1.81-1.81s.81-1.81,1.81-1.81,1.81.82,1.81,1.82Z" }), jsxRuntimeExports.jsx("path", { d: "m7.67,16.9c-.19.05-.37.13-.53.25l-.82.58-1.12-1.12s-.04-.08,0-.12l.52-.72c.37-.52.43-1.2.16-1.78-.09-.18-.16-.36-.23-.55-.22-.59-.73-1.02-1.35-1.13l-.91-.16s-.08-.05-.08-.1v-1.49s.04-.09.08-.1l.87-.15c.63-.11,1.15-.54,1.36-1.15.07-.19.14-.38.23-.56.26-.57.2-1.24-.16-1.75l-.54-.75s-.02-.09.01-.13l1.11-1.12.79.57c.3.22.66.33,1.02.33.26,0,.52-.06.76-.17.18-.09.36-.16.55-.23.59-.22,1.02-.73,1.12-1.35l.16-.91c0-.05.05-.09.1-.09h1.48c.05,0,.09.04.1.08l.15.87c.11.63.54,1.15,1.14,1.36.2.07.4.15.59.24.24.11.49.17.75.17.36,0,.71-.11,1.02-.32l.8-.57,1.11,1.11s.04.09.01.13l-.52.73c-.25.34-.34.76-.31,1.16,1.72.28,2.02.56,2.02.56-.09-.24-.18-.48-.29-.71l.52-.73c.53-.74.44-1.74-.2-2.39l-1.11-1.11c-.33-.33-.77-.51-1.24-.51-.37,0-.72.11-1.01.33l-.81.57c-.25-.12-.5-.22-.76-.31l-.15-.87c-.15-.89-.92-1.54-1.83-1.54h-1.48c-.9,0-1.68.65-1.83,1.54l-.16.91c-.24.09-.48.19-.71.3l-.79-.57c-.3-.21-.65-.33-1.02-.33-.47,0-.91.18-1.24.51l-1.11,1.11c-.64.64-.72,1.64-.2,2.38l.54.75c-.11.23-.2.47-.29.71l-.87.15c-.89.15-1.54.92-1.54,1.82v1.49c0,.9.65,1.67,1.54,1.82l.91.16c.09.24.19.48.3.71l-.52.72c-.53.73-.44,1.74.19,2.38l1.12,1.12c.33.33.77.51,1.24.51.37,0,.72-.11,1.01-.32l.72-.51c-.19-.56-.32-1.14-.38-1.75Z" })] }) })),
    cloudDataOnly: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m17.32,20.07H6.68c-2.69,0-4.99-1.93-5.47-4.58-.49-2.72,1.12-5.42,3.74-6.28.1-.03.19-.11.21-.2.9-2.99,3.7-5.08,6.83-5.08h.01c.45,0,.89.04,1.33.13,2.62.5,4.72,2.4,5.49,4.95.03.09.11.17.21.21,2.29.75,3.83,2.87,3.83,5.28,0,3.07-2.49,5.57-5.56,5.58Zm-5.32-14.39c-2.36,0-4.47,1.57-5.15,3.83-.19.64-.7,1.15-1.35,1.37-1.8.59-2.9,2.44-2.56,4.31.33,1.81,1.91,3.13,3.75,3.14h10.63c2.1,0,3.81-1.72,3.81-3.83,0-1.65-1.06-3.11-2.63-3.62-.65-.21-1.15-.72-1.34-1.37-.58-1.92-2.17-3.35-4.14-3.73-.33-.06-.67-.09-1.01-.1h0Z" }), jsxRuntimeExports.jsx("path", { d: "m13.7,9.78c-.03.11-.04.21-.07.3-.69,2.13-1.38,4.26-2.06,6.39-.15.46-.59.65-.96.42-.27-.17-.36-.46-.24-.82.58-1.79,1.15-3.57,1.73-5.36.12-.38.24-.76.37-1.13.09-.25.28-.39.54-.41.26-.02.46.08.59.3.05.09.07.2.1.3Z" }), jsxRuntimeExports.jsx("path", { d: "m15.97,13.09c-.56-.26-1.09-.51-1.61-.75-.14-.06-.27-.12-.41-.19-.31-.17-.43-.52-.29-.83.14-.31.5-.45.82-.31,1.07.49,2.15.99,3.22,1.49.25.12.37.32.37.59,0,.28-.13.48-.37.59-1.06.5-2.13,1-3.2,1.49-.33.15-.7,0-.84-.31-.14-.32-.01-.68.32-.84.59-.28,1.19-.55,1.78-.83.06-.03.12-.06.21-.1Z" }), jsxRuntimeExports.jsx("path", { d: "m8.04,13.1c.67.31,1.32.61,1.95.91.32.15.46.43.4.72-.09.41-.5.61-.9.43-.71-.32-1.41-.66-2.12-.98-.35-.16-.7-.32-1.04-.48-.25-.12-.39-.31-.39-.6,0-.28.13-.49.38-.6,1.05-.49,2.11-.98,3.16-1.47.28-.13.56-.08.75.13.19.2.24.51.08.74-.09.13-.24.24-.38.31-.57.28-1.15.54-1.73.81-.05.02-.09.05-.16.09Z" })] })),
    clock: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m12,1.12C6,1.12,1.12,6,1.12,12s4.88,10.88,10.88,10.88,10.88-4.88,10.88-10.88S18,1.12,12,1.12Zm0,20c-5.03,0-9.12-4.09-9.12-9.12S6.97,2.88,12,2.88s9.12,4.09,9.12,9.12-4.09,9.12-9.12,9.12Z" }), jsxRuntimeExports.jsx("path", { d: "m16.39,13.22l-3.52-1.76v-5.46c0-.48-.39-.88-.88-.88s-.88.39-.88.88v6c0,.33.19.63.48.78l4,2c.13.06.26.09.39.09.32,0,.63-.18.78-.48.22-.43.04-.96-.39-1.17Z" })] })),
    tag: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m21.62,10.39L13.03,1.8c-.16-.16-.39-.26-.62-.26H2.42c-.48,0-.88.39-.88.88v10c0,.23.09.46.26.62l8.59,8.58c.54.54,1.26.84,2.03.84h0c.77,0,1.49-.3,2.03-.84l7.17-7.17s0,0,0,0c1.11-1.12,1.11-2.94,0-4.06Zm-1.24,2.82l-7.17,7.17c-.21.21-.49.33-.79.33h0c-.3,0-.58-.12-.8-.33L3.29,12.05V3.29h8.76l8.33,8.33c.44.44.44,1.15,0,1.59Z" }), jsxRuntimeExports.jsx("path", { d: "m7.43,6.42h0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z" })] })),
    layers: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m12,12.88c-.13,0-.27-.03-.39-.09L1.61,7.78c-.3-.15-.48-.45-.48-.78s.19-.63.48-.78L11.61,1.22c.25-.12.54-.12.78,0l10,5c.3.15.48.45.48.78s-.19.63-.48.78l-10,5c-.12.06-.26.09-.39.09ZM3.96,7l8.04,4.02,8.04-4.02L12,2.98,3.96,7Z" }), jsxRuntimeExports.jsx("path", { d: "m12,22.88c-.13,0-.27-.03-.39-.09L1.61,17.78c-.43-.22-.61-.74-.39-1.17.22-.43.74-.61,1.17-.39l9.61,4.8,9.61-4.8c.44-.22.96-.04,1.17.39.22.43.04.96-.39,1.17l-10,5c-.12.06-.26.09-.39.09Z" }), jsxRuntimeExports.jsx("path", { d: "m12,17.88c-.13,0-.27-.03-.39-.09L1.61,12.78c-.43-.22-.61-.74-.39-1.17.22-.43.74-.61,1.17-.39l9.61,4.8,9.61-4.8c.44-.22.96-.04,1.17.39.22.43.04.96-.39,1.17l-10,5c-.12.06-.26.09-.39.09Z" })] })),
    chart: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m19.96,22.61H4.04c-1.33,0-2.41-1.08-2.41-2.41V3.8c0-1.33,1.08-2.41,2.41-2.41h15.93c1.33,0,2.41,1.08,2.41,2.41v16.39c0,1.33-1.08,2.41-2.41,2.41ZM4.04,3.14c-.37,0-.66.3-.66.66v16.39c0,.37.3.66.66.66h15.93c.37,0,.66-.3.66-.66V3.8c0-.37-.3-.66-.66-.66H4.04Z" }), jsxRuntimeExports.jsx("rect", { x: "15.87", y: "8.34", width: "1.94", height: "10.19", rx: ".76", ry: ".76" }), jsxRuntimeExports.jsx("rect", { x: "6.19", y: "6.46", width: "1.94", height: "12.07", rx: ".76", ry: ".76" }), jsxRuntimeExports.jsx("rect", { x: "11.03", y: "11.1", width: "1.94", height: "7.42", rx: ".76", ry: ".76" })] })),
    eventSettings: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m15.12,6.11h1.25c.14,0,.26-.11.26-.26v-1.3h2.91v4.41c0,.15.12.26.26.26h1.24c.15,0,.26-.12.26-.26v-4.51c0-.92-.74-1.66-1.66-1.66h-3.01v-1.3c0-.14-.11-.26-.26-.26h-1.25c-.14,0-.26.11-.26.26v1.3h-6.02v-1.29c0-.14-.12-.26-.26-.26h-1.24c-.14,0-.26.12-.26.26v1.29h-3.01c-.92,0-1.66.74-1.66,1.66v15.57c0,.92.74,1.66,1.66,1.66h2.96c.14,0,.26-.12.26-.26v-1.24c0-.14-.12-.26-.26-.26h-2.85V4.55h2.91v1.29c0,.14.12.26.26.26h1.24c.14,0,.26-.12.26-.26v-1.29h6.02v1.3c0,.14.11.26.26.26h-.01Z" }), jsxRuntimeExports.jsx("path", { d: "m15.3,22.77c-.57,0-1.14-.08-1.71-.24-.38-.1-.64-.45-.64-.84v-.66c-.2-.1-.4-.21-.59-.34l-.57.33c-.34.2-.77.14-1.05-.14-.82-.81-1.41-1.84-1.71-2.96-.1-.38.07-.78.41-.98l.57-.33c0-.12-.01-.23-.01-.34s0-.23.01-.34l-.57-.33c-.34-.2-.51-.6-.41-.98.3-1.13.89-2.15,1.71-2.96.28-.28.71-.33,1.05-.14l.57.33c.19-.13.39-.24.59-.34v-.66c0-.39.26-.74.64-.84,1.15-.31,2.29-.31,3.42,0,.38.1.64.45.64.84v.66c.21.1.4.21.59.34l.57-.33c.34-.2.77-.14,1.05.14.82.81,1.41,1.84,1.71,2.96.1.38-.07.78-.41.98l-.57.33c0,.12.01.23.01.34s0,.23-.01.34l.57.33c.34.2.51.6.41.98-.3,1.13-.89,2.15-1.71,2.96-.28.28-.71.33-1.05.14l-.57-.33c-.19.13-.39.24-.59.34v.66c0,.39-.26.74-.64.84-.57.16-1.15.24-1.71.24Zm-.61-1.79c.41.05.8.06,1.21,0v-.53c0-.37.23-.7.58-.83.42-.15.79-.36,1.12-.65.28-.24.69-.28,1.01-.09l.45.26c.25-.32.45-.67.6-1.05l-.45-.26c-.32-.19-.49-.55-.42-.92.04-.22.06-.44.06-.65s-.02-.43-.06-.65c-.07-.37.1-.73.42-.92l.45-.26c-.16-.37-.36-.73-.6-1.05l-.45.26c-.32.18-.72.15-1.01-.09-.33-.28-.71-.5-1.12-.65-.35-.12-.58-.45-.58-.83v-.53c-.41-.05-.8-.06-1.21,0v.53c0,.37-.23.7-.58.83-.42.15-.8.37-1.13.65-.28.24-.68.28-1.01.09l-.45-.26c-.24.32-.45.67-.6,1.05l.45.26c.32.19.49.55.42.92-.04.23-.06.44-.06.65s.02.43.06.65c.07.37-.1.73-.42.92l-.45.26c.16.37.36.73.6,1.05l.45-.26c.32-.18.72-.15,1.01.09.33.29.71.5,1.12.65.35.12.58.45.58.83v.53h0Z" }), jsxRuntimeExports.jsx("path", { d: "m15.3,18.79c-1.39,0-2.52-1.13-2.52-2.52s1.13-2.52,2.52-2.52,2.52,1.13,2.52,2.52-1.13,2.52-2.52,2.52Zm0-3.29c-.42,0-.77.34-.77.77s.34.77.77.77.77-.34.77-.77-.34-.77-.77-.77Z" })] })),
    file: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m20.81,7.66c-.03-.07-.08-.13-.13-.19-.02-.03-.03-.06-.06-.09L14.62,1.38s-.06-.04-.09-.06c-.06-.05-.12-.1-.19-.13-.11-.04-.22-.07-.34-.07H6c-1.58,0-2.88,1.29-2.88,2.88v16c0,1.58,1.29,2.88,2.88,2.88h12c1.58,0,2.88-1.29,2.88-2.88v-12c0-.12-.02-.23-.07-.34Zm-5.93-3.55l3.01,3.01h-3.01v-3.01Zm3.12,17.01H6c-.62,0-1.12-.5-1.12-1.12V4c0-.62.5-1.12,1.12-1.12h7.12v5.12c0,.48.39.88.88.88h5.12v11.12c0,.62-.5,1.12-1.12,1.12Z" }), jsxRuntimeExports.jsx("path", { d: "m16,12.12h-8c-.48,0-.88.39-.88.88s.39.88.88.88h8c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m16,16.12h-8c-.48,0-.88.39-.88.88s.39.88.88.88h8c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z" }), jsxRuntimeExports.jsx("path", { d: "m8,9.88h2c.48,0,.88-.39.88-.88s-.39-.88-.88-.88h-2c-.48,0-.88.39-.88.88s.39.88.88.88Z" })] })),
};

const resourceCategories = {
    analytics: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.48,21.38l-3.8-3.8a9.84,9.84,0,0,0,2.46-6.52,9.95,9.95,0,1,0-3.72,7.74l3.82,3.82a.86.86,0,0,0,.62.25.87.87,0,0,0,.62-1.49ZM3,11.06a8.19,8.19,0,1,1,8.18,8.18A8.2,8.2,0,0,1,3,11.06Z", fill: "#d9a741" }), jsxRuntimeExports.jsx("path", { d: "M11.34,15.77a.87.87,0,0,1-.87-.87v-5a.88.88,0,0,1,1.75,0v5A.87.87,0,0,1,11.34,15.77Z", fill: "#d9a741" }), jsxRuntimeExports.jsx("path", { d: "M15.15,15.77a.87.87,0,0,1-.87-.87V7.22a.88.88,0,0,1,1.75,0V14.9A.88.88,0,0,1,15.15,15.77Z", fill: "#d9a741" }), jsxRuntimeExports.jsx("path", { d: "M7.53,15.77a.87.87,0,0,1-.87-.87V9.23a.88.88,0,1,1,1.75,0V14.9A.87.87,0,0,1,7.53,15.77Z", fill: "#d9a741" })] })),
    applicationServices: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { x: "17.23", y: "18.69", width: "3.31", height: "3.31", rx: "1.38", fill: "#ffbc00" }), jsxRuntimeExports.jsx("rect", { x: "2.34", y: "18.69", width: "3.31", height: "3.31", rx: "1.38", fill: "#ffbc00" }), jsxRuntimeExports.jsx("rect", { x: "17.23", y: "2", width: "3.31", height: "3.31", rx: "1.38", fill: "#ffbc00" }), jsxRuntimeExports.jsx("rect", { x: "2.34", y: "2", width: "3.31", height: "3.31", rx: "1.38", fill: "#ffbc00" }), jsxRuntimeExports.jsx("path", { d: "M11.5,15.42h-.06a3.39,3.39,0,1,1,.06,0Zm-.06-5.09a1.67,1.67,0,0,0,0,3.34h.05A1.65,1.65,0,0,0,13.11,12,1.68,1.68,0,0,0,11.44,10.33Z", fill: "#ffbc00" }), jsxRuntimeExports.jsx("path", { d: "M12,19.67h-1a2.13,2.13,0,0,1-2-1.49,2.11,2.11,0,0,1-2.48-.34l-.76-.76a2.1,2.1,0,0,1-.38-2.5,2.13,2.13,0,0,1-1.53-2.05v-1a2.13,2.13,0,0,1,1.51-2A2.1,2.1,0,0,1,5.62,7l.75-.76a2.14,2.14,0,0,1,2.49-.34,2.12,2.12,0,0,1,2.05-1.52h1A2.13,2.13,0,0,1,14,5.86a2.13,2.13,0,0,1,2.52.31l.76.76a2.11,2.11,0,0,1,.37,2.52,2,2,0,0,1,1.52,2v1.06a2.14,2.14,0,0,1-1.52,2,2.13,2.13,0,0,1-.38,2.52l-.76.76a2.12,2.12,0,0,1-2.49.33A2.13,2.13,0,0,1,12,19.67ZM9.13,16.08a.94.94,0,0,1,.36.08l.39.16a.9.9,0,0,1,.57.68l.1.6a.38.38,0,0,0,.38.32h1a.38.38,0,0,0,.38-.32l.1-.6a.87.87,0,0,1,.57-.68l.41-.17a.89.89,0,0,1,.88.08l.54.39a.33.33,0,0,0,.42,0l.76-.76a.38.38,0,0,0,0-.49l-.36-.5a.91.91,0,0,1-.08-.89,2.83,2.83,0,0,0,.17-.4.9.9,0,0,1,.68-.57l.61-.1a.38.38,0,0,0,.32-.37V11.44a.3.3,0,0,0-.26-.31h0L16.46,11a.85.85,0,0,1-.67-.56c0-.14-.11-.28-.17-.41a.85.85,0,0,1,.08-.88l.36-.5a.37.37,0,0,0,0-.49l-.76-.76a.32.32,0,0,0-.4,0l-.56.39a.89.89,0,0,1-.88.08A3.93,3.93,0,0,0,13,7.67.88.88,0,0,1,12.41,7l-.1-.59a.4.4,0,0,0-.39-.32h-1a.4.4,0,0,0-.39.32l-.1.62a.89.89,0,0,1-.56.67l-.41.17a.87.87,0,0,1-.89-.08L8,7.39a.33.33,0,0,0-.41,0l-.76.76a.38.38,0,0,0,0,.49l.36.51a.85.85,0,0,1,.08.88c-.06.13-.11.26-.16.4a.88.88,0,0,1-.68.57l-.6.1a.39.39,0,0,0-.32.38v1a.38.38,0,0,0,.32.38l.62.11a.87.87,0,0,1,.68.56,3.42,3.42,0,0,0,.17.4.87.87,0,0,1-.08.89l-.35.49a.37.37,0,0,0,0,.48l.77.76a.31.31,0,0,0,.41,0l.56-.4A.93.93,0,0,1,9.13,16.08Z", fill: "#ffbc00" })] })),
    businessApplications: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M20.19,21.11H3.81a2.69,2.69,0,0,1-2.69-2.68v-10A2.69,2.69,0,0,1,3.81,5.7h3V4A2.15,2.15,0,0,1,9,1.89H15A2.15,2.15,0,0,1,17.18,4V5.7h3a2.68,2.68,0,0,1,2.68,2.68v10A2.68,2.68,0,0,1,20.19,21.11ZM3.81,7.45a.93.93,0,0,0-.94.93v10a.93.93,0,0,0,.94.93H20.19a.92.92,0,0,0,.93-.93v-10a.92.92,0,0,0-.93-.93ZM8.57,5.67h6.86V4a.4.4,0,0,0-.4-.4H9a.4.4,0,0,0-.4.4Z", fill: "#d9a741" }), jsxRuntimeExports.jsx("path", { d: "M14.25,14.64h.5A1.25,1.25,0,0,1,16,15.89v.5a1.25,1.25,0,0,1-1.25,1.25h-.5A1.25,1.25,0,0,1,13,16.39v-.5A1.25,1.25,0,0,1,14.25,14.64Zm-5,0h.5A1.25,1.25,0,0,1,11,15.89v.5a1.25,1.25,0,0,1-1.25,1.25h-.5A1.25,1.25,0,0,1,8,16.39v-.5A1.25,1.25,0,0,1,9.25,14.64Zm5-5.5h.5A1.25,1.25,0,0,1,16,10.39v.5a1.25,1.25,0,0,1-1.25,1.25h-.5A1.25,1.25,0,0,1,13,10.89v-.5A1.25,1.25,0,0,1,14.25,9.14Zm-5,0h.5A1.25,1.25,0,0,1,11,10.39v.5a1.25,1.25,0,0,1-1.25,1.25h-.5A1.25,1.25,0,0,1,8,10.89v-.5A1.25,1.25,0,0,1,9.25,9.14Z", fill: "#d9a741" })] })),
    compute: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15.7,22.87a.87.87,0,0,1-.88-.87V20.22H12.9V22a.88.88,0,0,1-1.75,0V20.22H9.23V22a.88.88,0,0,1-1.75,0V20.22H6.42A2.62,2.62,0,0,1,3.8,17.6v-1H2a.88.88,0,1,1,0-1.75H3.8V12.89H2a.88.88,0,1,1,0-1.75H3.8V9.23H2A.88.88,0,1,1,2,7.48H3.8V6.41A2.62,2.62,0,0,1,6.42,3.79H7.48V2A.88.88,0,1,1,9.23,2V3.79h1.92V2A.88.88,0,1,1,12.9,2V3.79h1.92V2a.88.88,0,1,1,1.75,0V3.79h1a2.62,2.62,0,0,1,2.62,2.62v1H22a.88.88,0,1,1,0,1.75H20.23V11.1H22a.88.88,0,1,1,0,1.75H20.23v1.92H22a.88.88,0,1,1,0,1.75H20.23V17.6a2.63,2.63,0,0,1-2.62,2.62h-1V22A.87.87,0,0,1,15.7,22.87ZM6.42,5.54a.87.87,0,0,0-.87.87V17.6a.87.87,0,0,0,.87.87H17.61a.87.87,0,0,0,.87-.87V6.41a.87.87,0,0,0-.87-.87Z", fill: "#f48334" }), jsxRuntimeExports.jsx("path", { d: "M12.41,11.27a3.28,3.28,0,0,0-.17-.86,2.22,2.22,0,0,0-.44-.72,2.11,2.11,0,0,0-.73-.48,2.77,2.77,0,0,0-1-.17,2.87,2.87,0,0,0-1,.17,2,2,0,0,0-1.17,1.2,3,3,0,0,0-.16.86c0,.15,0,.32,0,.5v.54c0,.18,0,.34,0,.49a3.36,3.36,0,0,0,.16.86,2.14,2.14,0,0,0,.43.73,1.9,1.9,0,0,0,.73.48,2.64,2.64,0,0,0,1,.18,2.71,2.71,0,0,0,1-.18,1.94,1.94,0,0,0,.72-.48,2,2,0,0,0,.43-.73,3.05,3.05,0,0,0,.17-.86c0-.15,0-.31,0-.49v-.54C12.42,11.59,12.41,11.42,12.41,11.27Zm-2.35,2.49a.65.65,0,0,1-.57-.25,1.32,1.32,0,0,1-.22-.76V11.32a1.32,1.32,0,0,1,.21-.74.64.64,0,0,1,.58-.26.64.64,0,0,1,.58.26,1.33,1.33,0,0,1,.2.74c0,.15,0,.3,0,.46v.49c0,.17,0,.32,0,.48a1.37,1.37,0,0,1-.2.76A.65.65,0,0,1,10.06,13.76Z", fill: "#f48334" }), jsxRuntimeExports.jsx("path", { d: "M16.07,9.21a.32.32,0,0,0-.23-.09h-1a.33.33,0,0,0-.13.07l-1.82,1.4a.33.33,0,0,0-.14.21.37.37,0,0,0,.06.25l.4.53a.34.34,0,0,0,.21.13.34.34,0,0,0,.25-.06l1-.74v3.72a.3.3,0,0,0,.1.24A.31.31,0,0,0,15,15h.88a.36.36,0,0,0,.24-.09.34.34,0,0,0,.09-.24V9.44A.29.29,0,0,0,16.07,9.21Z", fill: "#f48334" })] })),
    containers: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M17.71,18H3.29A2.43,2.43,0,0,1,.87,15.62V8.11A2.42,2.42,0,0,1,3.29,5.7H17.71a2.41,2.41,0,0,1,2.41,2.41v7.51A2.42,2.42,0,0,1,17.71,18ZM3.29,7.45a.66.66,0,0,0-.67.66v7.51a.67.67,0,0,0,.67.66H17.71a.66.66,0,0,0,.66-.66V8.11a.65.65,0,0,0-.66-.66Z", fill: "#387efa" }), jsxRuntimeExports.jsx("path", { d: "M16.19,15.45a.88.88,0,0,1-.88-.88V9.42a.88.88,0,0,1,1.75,0v5.15A.87.87,0,0,1,16.19,15.45Z", fill: "#387efa" }), jsxRuntimeExports.jsx("path", { d: "M12.38,15.45a.87.87,0,0,1-.87-.88V9.42a.88.88,0,0,1,1.75,0v5.15A.88.88,0,0,1,12.38,15.45Z", fill: "#387efa" }), jsxRuntimeExports.jsx("path", { d: "M8.6,15.45a.87.87,0,0,1-.88-.88V9.42a.88.88,0,0,1,1.75,0v5.15A.87.87,0,0,1,8.6,15.45Z", fill: "#387efa" }), jsxRuntimeExports.jsx("path", { d: "M4.79,15.45a.88.88,0,0,1-.88-.88V9.42a.88.88,0,0,1,1.75,0v5.15A.87.87,0,0,1,4.79,15.45Z", fill: "#387efa" })] })),
    cost: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M19.16,22.87a.87.87,0,0,1-.87-.87V15.49a.88.88,0,1,1,1.75,0V22A.87.87,0,0,1,19.16,22.87Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "M16,22.87a.87.87,0,0,1-.87-.87V16.61a.88.88,0,1,1,1.75,0V22A.88.88,0,0,1,16,22.87Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "M12.76,22.87a.87.87,0,0,1-.88-.87V18.74a.88.88,0,0,1,1.75,0V22A.87.87,0,0,1,12.76,22.87Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "M9.55,22.87A.87.87,0,0,1,8.68,22V16.61a.88.88,0,1,1,1.75,0V22A.87.87,0,0,1,9.55,22.87Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "M6.35,22.87A.88.88,0,0,1,5.47,22V18.8a.88.88,0,1,1,1.75,0V22A.87.87,0,0,1,6.35,22.87Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "M12.94,14.62a6.75,6.75,0,1,1,6.74-6.75A6.75,6.75,0,0,1,12.94,14.62Zm0-11.75a5,5,0,1,0,5,5A5,5,0,0,0,12.94,2.87Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "M12.45,11.74a.21.21,0,0,1-.16-.06.24.24,0,0,1-.06-.15v-.6a2.75,2.75,0,0,1-1.09-.33,1.88,1.88,0,0,1-.67-.6,1.58,1.58,0,0,1-.24-.75.17.17,0,0,1,.06-.12.18.18,0,0,1,.13-.06H11.5a.3.3,0,0,1,.18,0,.41.41,0,0,1,.12.11,1,1,0,0,0,.19.25.91.91,0,0,0,.32.19,1.47,1.47,0,0,0,.5.07,1.5,1.5,0,0,0,.75-.15.46.46,0,0,0,.25-.42.41.41,0,0,0-.13-.32,1.2,1.2,0,0,0-.44-.21,7.07,7.07,0,0,0-.81-.21,4.84,4.84,0,0,1-1.11-.35,1.79,1.79,0,0,1-.69-.57,1.55,1.55,0,0,1-.24-.89,1.56,1.56,0,0,1,.49-1.16,2.35,2.35,0,0,1,1.35-.6V4.27a.21.21,0,0,1,.22-.22h.71a.24.24,0,0,1,.15.06.21.21,0,0,1,.06.16v.61a2.59,2.59,0,0,1,1,.37,1.84,1.84,0,0,1,.61.6,1.29,1.29,0,0,1,.22.64.21.21,0,0,1,0,.12.18.18,0,0,1-.13.06H13.88a.42.42,0,0,1-.16,0,.25.25,0,0,1-.12-.11.59.59,0,0,0-.27-.33,1.09,1.09,0,0,0-.57-.14,1.06,1.06,0,0,0-.58.13.46.46,0,0,0-.21.41.48.48,0,0,0,.11.3,1,1,0,0,0,.39.22,7.16,7.16,0,0,0,.74.2,5,5,0,0,1,1.25.36,1.43,1.43,0,0,1,.93,1.43,1.58,1.58,0,0,1-.26.89,1.77,1.77,0,0,1-.7.62,3.06,3.06,0,0,1-1.06.32v.6a.21.21,0,0,1-.21.21Z", fill: "#5ea136" })] })),
    databaseCategory: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.88,5.35a2.8,2.8,0,0,0-2.8-2.79H3.92A2.79,2.79,0,0,0,1.13,5.35V7.23A2.78,2.78,0,0,0,1.9,9.15a2.74,2.74,0,0,0-.77,1.91v1.88a2.77,2.77,0,0,0,.77,1.92,2.74,2.74,0,0,0-.77,1.91v1.88a2.79,2.79,0,0,0,2.79,2.79H20.08a2.8,2.8,0,0,0,2.8-2.79V16.77a2.75,2.75,0,0,0-.78-1.91,2.78,2.78,0,0,0,.78-1.92V11.06a2.75,2.75,0,0,0-.78-1.91,2.79,2.79,0,0,0,.78-1.92Zm-20,0a1,1,0,0,1,1-1H20.08a1,1,0,0,1,1.05,1V7.23a1,1,0,0,1-1.05,1H3.92a1,1,0,0,1-1-1Zm18.25,5.71v1.88a1.05,1.05,0,0,1-1,1H3.9a1,1,0,0,1-1-1V11.06a1,1,0,0,1,1-1H20.08A1,1,0,0,1,21.13,11.06Zm0,7.59a1,1,0,0,1-1.05,1H3.92a1,1,0,0,1-1-1V16.77a1,1,0,0,1,1-1H20.1a1.05,1.05,0,0,1,1,1Z", fill: "#2d72b8" }), jsxRuntimeExports.jsx("rect", { x: "17.3", y: "16.31", width: "2.81", height: "2.81", rx: "1.23", fill: "#2d72b8" }), jsxRuntimeExports.jsx("rect", { x: "17.43", y: "10.6", width: "2.81", height: "2.81", rx: "1.23", fill: "#2d72b8" }), jsxRuntimeExports.jsx("rect", { x: "17.3", y: "4.88", width: "2.81", height: "2.81", rx: "1.23", fill: "#2d72b8" })] })),
    devTools: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.4,16.47a.85.85,0,0,1-.61-.25.86.86,0,0,1,0-1.24l3-3-3-3A.88.88,0,1,1,19,7.78l3.6,3.6a.9.9,0,0,1,.25.62.87.87,0,0,1-.25.62L19,16.22A.86.86,0,0,1,18.4,16.47Z", fill: "#759c3e" }), jsxRuntimeExports.jsx("path", { d: "M12,22.27a3.19,3.19,0,0,1-1-.14,3.93,3.93,0,0,1-.43-.18A3,3,0,0,1,9,19.26l0-8.19a.37.37,0,0,0-.14-.3,5.15,5.15,0,0,1-2-4.16A5.21,5.21,0,0,1,10,1.83,1.33,1.33,0,0,1,11.8,3.06V5.79a.22.22,0,0,0,.1.18.24.24,0,0,0,.23,0,.24.24,0,0,0,.09-.18V3.07a1.26,1.26,0,0,1,.15-.62,1.33,1.33,0,0,1,1.71-.6h0a5.22,5.22,0,0,1,2.3,7.61,5.32,5.32,0,0,1-1.25,1.34.34.34,0,0,0-.14.29l0,8.19a3,3,0,0,1-3,3ZM10.05,3.77A3.44,3.44,0,0,0,8.54,6.62a3.37,3.37,0,0,0,.54,1.87,3.31,3.31,0,0,0,.82.89,2.16,2.16,0,0,1,.83,1.7l0,8.18a1.28,1.28,0,0,0,.71,1.14l.12.05a1.25,1.25,0,0,0,1.31-.29,1.24,1.24,0,0,0,.37-.89l0-8.19a2.12,2.12,0,0,1,.84-1.68,3.51,3.51,0,0,0,.83-.89A3.48,3.48,0,0,0,14,3.78v2a2,2,0,0,1-3.92,0Zm.59-.33ZM14,3.07Z", fill: "#759c3e" }), jsxRuntimeExports.jsx("path", { d: "M5.6,16.47A.86.86,0,0,1,5,16.22l-3.6-3.6A.88.88,0,0,1,1.12,12a.91.91,0,0,1,.26-.62L5,7.78A.88.88,0,0,1,6.22,9l-3,3,3,3a.86.86,0,0,1,0,1.24A.85.85,0,0,1,5.6,16.47Z", fill: "#759c3e" })] })),
    iot: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M13.24,15a.87.87,0,0,1-.62-.26.91.91,0,0,0-1.25,0,.87.87,0,0,1-1.23,0,.86.86,0,0,1,0-1.23,2.69,2.69,0,0,1,3.73,0,.87.87,0,0,1,0,1.23A.89.89,0,0,1,13.24,15Z", fill: "#5093cf" }), jsxRuntimeExports.jsx("path", { d: "M15.31,13.41a.87.87,0,0,1-.62-.26,3.83,3.83,0,0,0-5.39,0,.87.87,0,0,1-1.23,0,.88.88,0,0,1,0-1.24,5.56,5.56,0,0,1,7.85,0,.87.87,0,0,1,0,1.24A.91.91,0,0,1,15.31,13.41Z", fill: "#5093cf" }), jsxRuntimeExports.jsx("path", { d: "M16.83,11.7a.89.89,0,0,1-.62-.26,6,6,0,0,0-8.43,0A.88.88,0,0,1,6.54,10.2a7.71,7.71,0,0,1,10.91,0,.88.88,0,0,1-.62,1.5Z", fill: "#5093cf" }), jsxRuntimeExports.jsx("path", { d: "M22,10.8a1.39,1.39,0,0,0-.83-.4L18.08,5.1a1.38,1.38,0,0,0,.21-.73V4a1.44,1.44,0,0,0-1.42-1.44h-.42a1.46,1.46,0,0,0-1,.41,1.54,1.54,0,0,0-.25.36H8.83A1,1,0,0,0,8.65,3a1.39,1.39,0,0,0-1-.43H7.22a1.41,1.41,0,0,0-1,.41,1.43,1.43,0,0,0-.43,1V4.4A1.46,1.46,0,0,0,6,5.05L2.87,10.38a1.42,1.42,0,0,0-1.24,1.38v.42a1.44,1.44,0,0,0,.41,1,1.37,1.37,0,0,0,.83.39L6,19a1.45,1.45,0,0,0-.19.65V20a1.43,1.43,0,0,0,1.4,1.45h.44a1.33,1.33,0,0,0,1.26-.78h6.32a1.52,1.52,0,0,0,.22.34,1.42,1.42,0,0,0,1,.44h.44a1.43,1.43,0,0,0,1.42-1.41v-.42a1.37,1.37,0,0,0-.23-.73l3.08-5.33a1.41,1.41,0,0,0,.8-.37,1.45,1.45,0,0,0,.43-1v-.42A1.36,1.36,0,0,0,22,10.8Zm-5.52,7.42a1.44,1.44,0,0,0-1,.4,1.31,1.31,0,0,0-.24.34H8.84a1.27,1.27,0,0,0-.2-.31,1.45,1.45,0,0,0-1-.43H7.55l-3-5.15a1.46,1.46,0,0,0,.32-.84v-.42a1.42,1.42,0,0,0-.31-.9L7.51,5.84h.12A1.43,1.43,0,0,0,8.91,5h6.31a1.18,1.18,0,0,0,.21.32,1.39,1.39,0,0,0,1,.43h0l3,5.13a1.5,1.5,0,0,0-.31.86v.41a1.37,1.37,0,0,0,.32.89Z", fill: "#5093cf" })] })),
    machineLearning: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M21.14,10.37,18.09,5.09a1.63,1.63,0,0,0,.21-.72V4a1.43,1.43,0,0,0-1.41-1.44h-.43a1.53,1.53,0,0,0-1,.41,1.54,1.54,0,0,0-.25.36H8.86a1.42,1.42,0,0,0-1.22-.71H7.21A1.43,1.43,0,0,0,5.78,4V4.4A1.48,1.48,0,0,0,6,5.07L2.9,10.36a1.42,1.42,0,0,0-1.27,1.39v.42a1.41,1.41,0,0,0,1.25,1.42L6,18.94a1.53,1.53,0,0,0-.19.68V20a1.36,1.36,0,0,0,.4,1,1.4,1.4,0,0,0,1,.44h.44a1.44,1.44,0,0,0,1-.4,1.42,1.42,0,0,0,.26-.38h6.32a1.24,1.24,0,0,0,.22.34,1.42,1.42,0,0,0,1,.44h.43a1.43,1.43,0,0,0,1.43-1.41v-.42a1.41,1.41,0,0,0-.22-.72l3.1-5.36a1.39,1.39,0,0,0,1.2-1.37v-.42A1.42,1.42,0,0,0,21.14,10.37Zm-1.88.77H13.47l3-5.28,2.92,5A2.07,2.07,0,0,0,19.26,11.14Zm-7.3-.9L9,5h6ZM7.47,6l3,5.19H4.73a.77.77,0,0,0-.14-.21ZM4.69,12.89h5.74L7.46,18,4.58,13Zm7.27.85L15,19H9Zm4.56,4.39-3-5.24h5.8a2.43,2.43,0,0,0,.14.2Z", fill: "#46ae98" }) })),
    management: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15,15.13a2.81,2.81,0,0,1,2.81,2.8v2.34H6.19V17.93A2.81,2.81,0,0,1,9,15.13h6m0-1.75H9a4.55,4.55,0,0,0-4.55,4.55v3.26a.83.83,0,0,0,.83.83H18.69a.83.83,0,0,0,.83-.83V17.93A4.56,4.56,0,0,0,15,13.38Z", fill: "#759c3f" }), jsxRuntimeExports.jsx("path", { d: "M12,13.24A6.52,6.52,0,0,1,10.24,13a.86.86,0,0,1-.65-.84v-.69A4.77,4.77,0,0,1,9,11.11l-.6.35a.88.88,0,0,1-1-.14,6.66,6.66,0,0,1-1.74-3,.88.88,0,0,1,.41-1L6.58,7c0-.12,0-.24,0-.36s0-.24,0-.36L6,5.92a.88.88,0,0,1-.41-1,6.66,6.66,0,0,1,1.74-3,.88.88,0,0,1,1-.14l.6.35a4.33,4.33,0,0,1,.62-.36V1.08a.88.88,0,0,1,.65-.84,6.43,6.43,0,0,1,3.48,0,.88.88,0,0,1,.65.84v.69a4.33,4.33,0,0,1,.62.36l.59-.35a.86.86,0,0,1,1,.14,6.57,6.57,0,0,1,1.74,3,.87.87,0,0,1-.4,1l-.59.34c0,.12,0,.24,0,.36s0,.24,0,.36l.58.34a.87.87,0,0,1,.41,1,6.57,6.57,0,0,1-1.74,3,.88.88,0,0,1-1,.14L15,11.11a3.94,3.94,0,0,1-.63.36v.69a.87.87,0,0,1-.64.84A6.57,6.57,0,0,1,12,13.24Zm-.64-1.8a4.5,4.5,0,0,0,1.27,0v-.55a.87.87,0,0,1,.59-.82,3.9,3.9,0,0,0,1.15-.67.87.87,0,0,1,1-.09l.48.27a4.82,4.82,0,0,0,.63-1.1L16,8.2a.88.88,0,0,1-.43-.91,3.25,3.25,0,0,0,.07-.67A3.18,3.18,0,0,0,15.57,6,.9.9,0,0,1,16,5l.47-.27a4.68,4.68,0,0,0-.63-1.11l-.48.28a.88.88,0,0,1-1-.09,3.69,3.69,0,0,0-1.15-.67.86.86,0,0,1-.58-.82V1.79a4.57,4.57,0,0,0-1.28,0v.56a.86.86,0,0,1-.58.82,3.63,3.63,0,0,0-1.16.67.86.86,0,0,1-1,.09l-.48-.27a4.8,4.8,0,0,0-.64,1.1L8,5A.88.88,0,0,1,8.38,6a3.77,3.77,0,0,0,0,1.34A.86.86,0,0,1,8,8.2l-.48.28a5.26,5.26,0,0,0,.64,1.1l.48-.27a.86.86,0,0,1,1,.09,3.83,3.83,0,0,0,1.16.67.86.86,0,0,1,.58.82Z", fill: "#759c3f" }), jsxRuntimeExports.jsx("path", { d: "M12,9.17a2.55,2.55,0,1,1,2.55-2.55A2.56,2.56,0,0,1,12,9.17Zm0-3.35a.8.8,0,1,0,0,1.6.8.8,0,0,0,0-1.6Z", fill: "#759c3f" })] })),
    migration: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.81,15.48a1,1,0,0,0,.06-.3v-.06a.77.77,0,0,0-.22-.54l0-.05-4.25-4.25a.88.88,0,1,0-1.24,1.24l2.76,2.76H10.67a.88.88,0,0,0,0,1.75h9.22l-2.76,2.75a.87.87,0,0,0,.62,1.49.86.86,0,0,0,.62-.25l4.25-4.25,0,0A1,1,0,0,0,22.81,15.48Z", fill: "#2e73b8" }), jsxRuntimeExports.jsx("path", { d: "M13.33,8H4.11L6.87,5.22A.88.88,0,1,0,5.63,4L1.38,8.23l0,0a1,1,0,0,0-.16.24.88.88,0,0,0-.06.33h0c0,.05,0,.1,0,.15s0,.13,0,.18a1,1,0,0,0,.16.24l0,.05h0l4.25,4.25a.86.86,0,0,0,.62.25.87.87,0,0,0,.62-1.49L4.11,9.73h9.22a.88.88,0,0,0,0-1.75Z", fill: "#2e73b8" })] })),
    network: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12.13,23.37A10.88,10.88,0,1,1,23,12.5,10.89,10.89,0,0,1,12.13,23.37ZM8.68,17.24c.78,2.71,2.16,4.38,3.45,4.38s2.66-1.67,3.44-4.38Zm8.7,0a12.54,12.54,0,0,1-1.45,3.55,9.16,9.16,0,0,0,4-3.55Zm-13,0a9.24,9.24,0,0,0,4,3.55,12.55,12.55,0,0,1-1.46-3.55Zm13.4-1.75h3a9,9,0,0,0,.5-3,8.83,8.83,0,0,0-.53-3.06h-3a21.28,21.28,0,0,1,.22,3.06A20.54,20.54,0,0,1,17.73,15.49Zm-9.43,0H16a18.8,18.8,0,0,0,.23-3A19.38,19.38,0,0,0,16,9.44H8.31a18.22,18.22,0,0,0-.25,3.06A18.77,18.77,0,0,0,8.3,15.49Zm-4.79,0h3a20.51,20.51,0,0,1-.22-3,19.91,19.91,0,0,1,.23-3.06h-3a9.06,9.06,0,0,0,0,6.05Zm13.85-7.8h2.52A9.21,9.21,0,0,0,15.93,4.2,12.25,12.25,0,0,1,17.36,7.69Zm-8.66,0h6.85C14.77,5,13.4,3.37,12.13,3.37S9.48,5,8.7,7.69Zm-4.32,0H6.89A12.54,12.54,0,0,1,8.33,4.2,9.1,9.1,0,0,0,4.38,7.69Z", fill: "#f58536" }) })),
    other: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M15.7,22.87a.87.87,0,0,1-.88-.87V20.22H12.9V22a.88.88,0,0,1-1.75,0V20.22H9.23V22a.88.88,0,0,1-1.75,0V20.22H6.42A2.63,2.63,0,0,1,3.79,17.6v-1H2a.88.88,0,1,1,0-1.75H3.79V12.89H2a.88.88,0,1,1,0-1.75H3.79V9.23H2A.88.88,0,1,1,2,7.48H3.79V6.41A2.62,2.62,0,0,1,6.42,3.79H7.48V2A.88.88,0,1,1,9.23,2V3.79h1.92V2A.88.88,0,1,1,12.9,2V3.79h1.92V2a.88.88,0,1,1,1.75,0V3.79h1a2.62,2.62,0,0,1,2.62,2.62v1H22a.88.88,0,1,1,0,1.75H20.23V11.1H22a.88.88,0,1,1,0,1.75H20.23v1.92H22a.88.88,0,1,1,0,1.75H20.23V17.6a2.63,2.63,0,0,1-2.62,2.62h-1V22A.87.87,0,0,1,15.7,22.87ZM6.42,5.54a.88.88,0,0,0-.88.87V17.6a.88.88,0,0,0,.88.87H17.61a.87.87,0,0,0,.87-.87V6.41a.87.87,0,0,0-.87-.87Z", fill: "#46ae98" }), jsxRuntimeExports.jsx("rect", { x: "14.42", y: "10.73", width: "2.55", height: "2.55", rx: "1.12", fill: "#46ae98" }), jsxRuntimeExports.jsx("rect", { x: "10.73", y: "10.73", width: "2.55", height: "2.55", rx: "1.12", fill: "#46ae98" }), jsxRuntimeExports.jsx("rect", { x: "7.03", y: "10.73", width: "2.55", height: "2.55", rx: "1.12", fill: "#46ae98" })] })),
    security: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M12,22.87a8.77,8.77,0,0,1-8.77-8.76V4.43a3.31,3.31,0,0,1,3.3-3.31H17.47a3.31,3.31,0,0,1,3.3,3.31v9.68A8.77,8.77,0,0,1,12,22.87Zm-5.47-20A1.56,1.56,0,0,0,5,4.43v9.68a7,7,0,0,0,14,0V4.43a1.56,1.56,0,0,0-1.55-1.56Z", fill: "#a7698b" }), jsxRuntimeExports.jsx("path", { d: "M10.25,16a.87.87,0,0,1-.62-.26L6.8,13A.88.88,0,1,1,8,11.72l2.21,2.21L16,8.22A.87.87,0,0,1,17.2,9.45l-6.33,6.33A.89.89,0,0,1,10.25,16Z", fill: "#a7698b" })] })),
    webServices: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M18.12,22.11a4.81,4.81,0,1,1,4.81-4.81A4.81,4.81,0,0,1,18.12,22.11Zm0-7.87a3.06,3.06,0,1,0,3.06,3.06A3.07,3.07,0,0,0,18.12,14.24Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M17.53,19.43a.83.83,0,0,1-.61-.26l-1-1a.87.87,0,0,1,1.23-1.23l.41.41,1.69-1.69a.88.88,0,1,1,1.24,1.24l-2.31,2.3A.83.83,0,0,1,17.53,19.43Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M12.69,22.87H11.2A2.71,2.71,0,0,1,8.51,20.6l0-.18-.23.17a2.68,2.68,0,0,1-3.38-.29L3.75,19.19a2.72,2.72,0,0,1-.28-3.51l.12-.17-.25,0a2.72,2.72,0,0,1-2.27-2.69V11.3A2.72,2.72,0,0,1,3.35,8.61l.2,0-.14-.2A2.72,2.72,0,0,1,3.7,4.86L4.82,3.75A2.66,2.66,0,0,1,8.2,3.47l.24.17,0-.25a2.73,2.73,0,0,1,2.69-2.27h1.48A2.72,2.72,0,0,1,15.34,3.4l.05.25.29-.21a2.69,2.69,0,0,1,3.38.28l1.11,1.12a2.71,2.71,0,0,1,.29,3.51l-.13.18.31.05a2.6,2.6,0,0,1,2.18,2.61v1.56a.88.88,0,0,1-1.75,0V11.18a.84.84,0,0,0-.72-.87l-1-.17a.87.87,0,0,1-.67-.56c-.08-.22-.17-.43-.26-.64a.85.85,0,0,1,.08-.88L19,7.33a1,1,0,0,0-.11-1.26L17.82,5a.9.9,0,0,0-1.12-.1l-.81.58a.87.87,0,0,1-.88.08,5.72,5.72,0,0,0-.68-.28.89.89,0,0,1-.56-.68l-.15-.87a1,1,0,0,0-1-.82H11.17a1,1,0,0,0-1,.82l-.16.91a.86.86,0,0,1-.56.67q-.32.12-.63.27A.87.87,0,0,1,8,5.46l-.79-.57A.89.89,0,0,0,6.06,5L4.94,6.1a1,1,0,0,0-.11,1.25l.54.75A.9.9,0,0,1,5.45,9c-.1.21-.18.42-.26.63a.89.89,0,0,1-.68.58l-.87.14a1,1,0,0,0-.82,1v1.48a1,1,0,0,0,.81,1l.92.16a.87.87,0,0,1,.67.56,6,6,0,0,0,.27.63.91.91,0,0,1-.08.89l-.52.72A1,1,0,0,0,5,18l1.12,1.12a.89.89,0,0,0,1.12.09l.82-.58a.85.85,0,0,1,.88-.08,6.07,6.07,0,0,0,.59.24.88.88,0,0,1,.57.68l.15.89a1,1,0,0,0,1,.81h1.49a1,1,0,0,0,.63-.22.87.87,0,1,1,1.12,1.34A2.72,2.72,0,0,1,12.69,22.87Z", fill: "#f90" }), jsxRuntimeExports.jsx("path", { d: "M12,16.92H12A4.92,4.92,0,1,1,16.87,12a.88.88,0,0,1-1.75,0A3.17,3.17,0,1,0,12,15.17a.91.91,0,0,1,.91.87A.84.84,0,0,1,12,16.92Z", fill: "#f90" })] })),
    benefit: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "m2,23.25c-.38-.16-.5-.44-.5-.85.02-1.6,0-3.2,0-4.8,0-.57.24-.8.81-.8.57,0,1.14,0,1.7,0h.24c.04-.17.07-.32.12-.46.3-.85.94-1.27,1.8-1.47,1.56-.36,3.03-.13,4.44.61.38.2.78.38,1.18.5.36.11.74.17,1.11.18.65.03,1.3,0,1.94,0,.5,0,.75.26.74.76-.01.58-.19,1.11-.49,1.61-.03.05-.07.11-.13.2.31,0,.59,0,.87,0,.07,0,.13-.08.19-.13.61-.61,1.21-1.22,1.82-1.82,1.19-1.17,3.02-1.25,4.28-.17.48.41.49.77.05,1.21-1.48,1.48-2.97,2.96-4.44,4.45-.5.51-1.08.86-1.79.96-.02,0-.04.02-.06.03H2Zm3.58-1.31c.1,0,.18,0,.26,0,3.18,0,6.36,0,9.54,0,.56,0,1.01-.18,1.4-.58,1.28-1.3,2.58-2.59,3.87-3.88.05-.05.1-.1.15-.16-.03-.02-.04-.04-.06-.05-.05-.02-.11-.04-.16-.06-.71-.18-1.32,0-1.84.51-.66.66-1.32,1.31-1.97,1.98-.23.24-.48.34-.81.34-2.25-.01-4.5-.01-6.75-.01-.07,0-.15,0-.22,0-.33-.04-.57-.31-.57-.64,0-.4.3-.67.75-.67,1.07,0,2.14.01,3.21,0,.79,0,1.35-.39,1.71-1.08.02-.05.03-.1.05-.17-.42,0-.81,0-1.2,0-.6,0-1.19-.09-1.75-.32-.53-.22-1.06-.44-1.57-.7-1.11-.55-2.25-.57-3.42-.24-.38.11-.61.38-.61.75,0,1.64,0,3.29,0,4.97Zm-2.75-3.82v3.81h1.42v-3.81h-1.42Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "m12,14.47c-3.72,0-6.75-3.03-6.75-6.75S8.28.97,12,.97s6.75,3.03,6.75,6.75-3.03,6.75-6.75,6.75Zm0-11.75c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5Z", fill: "#5ea136" }), jsxRuntimeExports.jsx("path", { d: "m11.51,11.59c-.06,0-.11-.02-.15-.06-.04-.04-.06-.09-.06-.15v-.6c-.44-.05-.8-.16-1.1-.33s-.51-.37-.66-.6-.23-.48-.24-.74c0-.05.02-.09.06-.12s.08-.06.13-.06h1.08c.08,0,.14.01.18.04s.08.07.12.11c.05.08.11.17.19.25.08.08.19.14.32.19.13.05.3.07.5.07.33,0,.58-.05.75-.15s.25-.24.25-.42c0-.13-.05-.24-.14-.32-.09-.08-.24-.15-.44-.22s-.47-.13-.81-.2c-.43-.09-.8-.21-1.11-.35s-.54-.34-.7-.57c-.16-.24-.24-.53-.24-.88,0-.46.16-.84.49-1.16.33-.32.78-.52,1.35-.6v-.6c0-.06.02-.11.06-.15.04-.04.09-.06.15-.06h.71c.06,0,.11.02.15.06s.06.09.06.15v.62c.39.07.72.19.99.37.27.18.47.38.61.6.14.22.21.44.22.64,0,.05-.02.09-.05.12s-.08.06-.13.06h-1.13c-.06,0-.12-.01-.16-.03-.05-.02-.09-.06-.12-.11-.03-.12-.12-.23-.27-.33-.15-.09-.34-.14-.56-.14-.25,0-.45.04-.59.13-.14.09-.21.22-.21.41,0,.11.04.21.12.3.08.08.21.16.38.22s.43.13.74.2c.52.1.94.22,1.26.36.32.15.55.33.7.56.15.23.22.52.22.87s-.08.63-.25.89c-.17.26-.4.46-.7.62-.3.16-.66.26-1.06.32v.6c0,.06-.02.11-.06.15-.04.04-.09.06-.15.06h-.71Z", fill: "#5ea136" })] })),
};

const externalServices = {
    serviceNow: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M12.06,2.25a10.59,10.59,0,0,0-9.8,6.89,11.27,11.27,0,0,0,2.5,12,2,2,0,0,0,2.72.14,7.35,7.35,0,0,1,9,0,2,2,0,0,0,2.76-.14A11.27,11.27,0,0,0,21.77,9.2a10.62,10.62,0,0,0-9.71-6.95M12,18.66a5.08,5.08,0,0,1-3.79-1.54,5.46,5.46,0,0,1-1.51-3.91A5.51,5.51,0,0,1,9.29,8.34a5.09,5.09,0,0,1,5.37,0,5.48,5.48,0,0,1,2.57,4.87,5.39,5.39,0,0,1-1.49,3.89A5.05,5.05,0,0,1,12,18.66" }) })),
    awsLambda: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("polygon", { points: "21.85 19.83 20.63 16.77 17.91 17.77 14.02 7.98 12.94 5.28 12.44 4 11.64 2 7.98 2 6.48 2 6.48 5.28 9.29 5.28 10.26 7.72 2.15 21.59 6.07 21.59 11.85 11.7 15.94 22 16.92 21.64 19.13 20.83 19.13 20.83 21.85 19.83 21.85 19.83" }) })),
    azureFunction: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M22.31,11.22,16.88,5.89a.73.73,0,0,0-1,0,.88.88,0,0,0-.23.61.63.63,0,0,0,.24.45l4.65,4.59a.35.35,0,0,1,0,.44l-4.76,4.75a.79.79,0,0,0,0,1.06.69.69,0,0,0,.5.2.76.76,0,0,0,.52-.2l5.53-5.51h0A.83.83,0,0,0,22.31,11.22Z" }), jsxRuntimeExports.jsx("path", { d: "M8.24,16.73,3.58,12a.33.33,0,0,1,0-.44L8.11,7a.6.6,0,0,0,.26-.47.81.81,0,0,0-.25-.62.73.73,0,0,0-1,0L2.68,10.23l-1,1a.83.83,0,0,0,0,1l1,1.15,4.53,4.36a.69.69,0,0,0,.51.2.72.72,0,0,0,.51-.2A.79.79,0,0,0,8.24,16.73Z" }), jsxRuntimeExports.jsx("polygon", { points: "17.14 8.9 12.83 8.9 17.01 2.45 13.73 2.45 10.74 2.45 7.37 12.03 11.48 12.06 8.27 21.54 8.27 21.54 8.27 21.54 8.27 21.55 17.14 8.9" })] })),
    slack: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M6.22,14.64c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1,.94-2.1,2.1-2.1h2.1v2.1Zm1.05,0c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v5.25c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1v-5.25Z" }), jsxRuntimeExports.jsx("path", { d: "M9.37,6.21c-1.16,0-2.1-.94-2.1-2.1s.94-2.1,2.1-2.1,2.1,.94,2.1,2.1v2.1h-2.1Zm0,1.07c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1H4.1c-1.16,0-2.1-.94-2.1-2.1s.94-2.1,2.1-2.1h5.27Z" }), jsxRuntimeExports.jsx("path", { d: "M17.78,9.37c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1-.94,2.1-2.1,2.1h-2.1v-2.1Zm-1.05,0c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1V4.11c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v5.27Z" }), jsxRuntimeExports.jsx("path", { d: "M14.63,17.79c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1-2.1-.94-2.1-2.1v-2.1h2.1Zm0-1.05c-1.16,0-2.1-.94-2.1-2.1s.94-2.1,2.1-2.1h5.27c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1h-5.27Z" })] })),
    slackColorful: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M6.22,14.64c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1,.94-2.1,2.1-2.1h2.1v2.1Zm1.05,0c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v5.25c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1v-5.25Z", fill: "#e01e5a" }), jsxRuntimeExports.jsx("path", { d: "M9.37,6.21c-1.16,0-2.1-.94-2.1-2.1s.94-2.1,2.1-2.1,2.1,.94,2.1,2.1v2.1h-2.1Zm0,1.07c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1H4.1c-1.16,0-2.1-.94-2.1-2.1s.94-2.1,2.1-2.1h5.27Z", fill: "#36c5f0" }), jsxRuntimeExports.jsx("path", { d: "M17.78,9.37c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1-.94,2.1-2.1,2.1h-2.1v-2.1Zm-1.05,0c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1V4.11c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v5.27Z", fill: "#2eb67d" }), jsxRuntimeExports.jsx("path", { d: "M14.63,17.79c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1-2.1-.94-2.1-2.1v-2.1h2.1Zm0-1.05c-1.16,0-2.1-.94-2.1-2.1s.94-2.1,2.1-2.1h5.27c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1h-5.27Z", fill: "#ecb22e" })] })),
    pagerDuty: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M8.05,16.67v5.33h-2.94v-5.33h2.94ZM10.98,2c2.52,0,3.61,.15,5.16,.98,1.7,.91,2.75,2.73,2.75,4.99,0,2.1-.86,3.92-2.5,5.01-1.51,1.01-3.22,1.14-5.51,1.14H5.11V2h5.87Zm.47,2.57h-.09s-3.31,.02-3.31,.02v6.99h3.51c2.46,0,4.33-.98,4.33-3.58,0-2.41-1.51-3.46-4.53-3.44h.09Z" }) })),
    pagerDutyColorful: (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: jsxRuntimeExports.jsx("path", { d: "M8.05,16.67v5.33h-2.94v-5.33h2.94ZM10.98,2c2.52,0,3.61,.15,5.16,.98,1.7,.91,2.75,2.73,2.75,4.99,0,2.1-.86,3.92-2.5,5.01-1.51,1.01-3.22,1.14-5.51,1.14H5.11V2h5.87Zm.47,2.57h-.09s-3.31,.02-3.31,.02v6.99h3.51c2.46,0,4.33-.98,4.33-3.58,0-2.41-1.51-3.46-4.53-3.44h.09Z", fill: "#06ac38" }) })),
    turbonomic: (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("path", { d: "M9.51,10.83c-.15-.45-.38-.82-.88-.92-.7-.14-1.19,.15-1.44,.82-.15,.42-.19,.86-.2,1.3-.01,.58,0,1.15,.22,1.7,.21,.55,.59,.82,1.13,.82,.54,0,.92-.28,1.12-.83,.18-.48,.21-.99,.21-1.62h0c0-.21-.01-.53-.06-.85-.02-.14-.05-.28-.1-.42Z", fill: "#309546" }), jsxRuntimeExports.jsx("path", { d: "M12,1C5.92,1,1,5.92,1,12s4.92,11,11,11,11-4.92,11-11S18.08,1,12,1Zm-.77,13.84c-.83,1.1-2,1.43-3.31,1.32-.85-.07-1.6-.36-2.21-.97-.56-.57-.84-1.28-.96-2.06-.14-.95-.1-1.88,.27-2.77,.51-1.24,1.45-1.91,2.78-2.08,.67-.08,1.32-.04,1.96,.19,1.29,.46,1.92,1.46,2.16,2.75h0c.06,.33,.07,.66,.08,.99,0,.95-.18,1.86-.76,2.64Zm7.74,1.1c-.59-.01-1.19-.01-1.78,0-.18,0-.23-.04-.22-.22,0-1.61,0-3.23,0-4.84,0-.18-.01-.36-.06-.53-.09-.33-.35-.51-.69-.47-.61,.07-.93,.51-1.23,.98-.04,.06-.01,.15-.01,.23,0,1.54,0,3.08,0,4.61,0,.2-.05,.26-.25,.25-.59-.01-1.17,0-1.76,0-.15,0-.22-.02-.22-.2,0-2.35,0-4.71,0-7.06,0-.16,.04-.2,.2-.2,.53,0,1.05,0,1.58,0,.12,0,.18,.01,.19,.16,.02,.22,.08,.43,.13,.73,.16-.17,.26-.31,.38-.42,.7-.62,1.52-.84,2.43-.66,.81,.16,1.37,.81,1.48,1.67,.03,.24,.05,.49,.05,.74,0,1.67,0,3.33,0,5,0,.19-.04,.25-.24,.24Z", fill: "#309546" })] })),
};

const paths = {
    ...awsIcons,
    ...cloudIcons,
    ...klarityIcons,
    ...menuIcons,
    ...uiIcons,
    ...osProviderIcons,
    ...osComponentsIcons,
    ...NCIcons,
    ...resourceCategories,
    ...externalServices,
    default: jsxRuntimeExports.jsx("path", {}),
};
const getPath = (name) => {
    return paths[name] ?? paths.default;
};

const StyledSVGIcon = styled.svg `
  fill: ${(props) => props.color || theme.color.text.text01};
  width: ${theme.iconSize.md};
  height: ${theme.iconSize.md};
  vertical-align: middle;

  ${({ color }) => color &&
    css `
      fill: ${theme.colors[color] || color};
    `}

  ${({ size }) => size &&
    css `
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};
    `}
`;
const VIEW_BOX = "0 0 24 24";
function SVGIcon({ name, ...props }) {
    const Path = React.useMemo(() => getPath(name), [name]);
    return (jsxRuntimeExports.jsx(StyledSVGIcon, { color: "currentColor", ...props, viewBox: VIEW_BOX, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", children: Path }));
}

const StyledAccordion = styled.div `
  ${space}
`;
const StyledAccordionItem = styled.div `
  padding: ${theme.spacing.spacing03};
  background-color: ${theme.color.background.ui02};
  border: 1px solid ${theme.color.border.border01};
  border-radius: ${theme.radius.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;
const StyledHeader = styled.div `
  font-weight: ${theme.fontWeights.medium};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.color.background.ui03};
  padding: ${theme.spacing.spacing03};
  border-radius: ${theme.radius.md};
  border: 1px solid ${theme.color.border.border01};
  &:hover {
    cursor: pointer;
    background-color: ${theme.color.background.ui04};
  }
  ${({ small }) => small &&
    css `
      font-size: ${theme.fontSizes.sm};
      line-height: 1.5em;
      padding: ${theme.spacing.spacing02};
      svg {
        width: 1.125rem;
        height: 1.125rem;
      }
    `}
  ${({ isOpen }) => isOpen &&
    css `
      background-color: ${theme.color.background.ui04};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;
const HeaderTitle = styled.span `
  margin-left: ${theme.spacing.spacing02};
  text-transform: ${theme.typography.titleCase};
`;
const HeaderDescription = styled.div `
  color: ${theme.color.text.text02};
  font-size: ${theme.fontSizes.sm};
  margin-left: auto;
  font-weight: ${theme.fontWeights.regular};
`;
const HeaderIcon = styled.div `
  display: flex;
  cursor: ${(props) => props.cursor ?? "default"};
  svg {
    transition: ${theme.transition};
    transform-origin: center;
    transform: rotate(-90deg);
  }
  ${({ animate }) => animate &&
    css `
      svg {
        transform: rotate(0);
        transform-origin: center;
        transition: ${theme.transition};
      }
    `}
`;
function AccordionItem({ children, ...props }) {
    return jsxRuntimeExports.jsx(StyledAccordionItem, { ...props, children: children });
}
function AccordionHeader({ title, description, children, small, }) {
    const { isOpen, toggle } = useDisclosure();
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(StyledHeader, { isOpen: isOpen, small: small, onClick: () => children && toggle(), children: [children && (jsxRuntimeExports.jsx(HeaderIcon, { animate: isOpen, children: jsxRuntimeExports.jsx(SVGIcon, { name: "down" }) })), jsxRuntimeExports.jsx(HeaderTitle, { children: title }), jsxRuntimeExports.jsx(HeaderDescription, { children: description })] }), isOpen && children] }));
}
function Accordion({ children, ...props }) {
    return jsxRuntimeExports.jsx(StyledAccordion, { ...props, children: children });
}

const StyledBarChart = styled.svg `
  width: 100%;
  height: 1.5rem;
  border-radius: ${theme.radiusDefault};
  rect {
    height: 1.5rem;
  }
  ${({ height }) => height &&
    css `
      height: ${height};
      rect {
        height: ${height};
      }
    `};
  ${space};
`;
function BarChart({ values, ...visualProps }) {
    const xRef = React.useRef(0);
    const sum = values.reduce((accumulator, { value }) => accumulator + value, 0);
    const calculateX = (prevBarWidth) => (xRef.current += prevBarWidth);
    const percentageValues = values.map(({ value, color }, index) => ({
        size: Math.round((value / sum) * 100),
        x: index === 0
            ? 0
            : calculateX(Math.round((values[index - 1].value / sum) * 100)),
        color,
    }));
    return (jsxRuntimeExports.jsx(StyledBarChart, { ...visualProps, children: jsxRuntimeExports.jsx("g", { children: percentageValues.map(({ size, x, color }, index) => (jsxRuntimeExports.jsx("rect", { x: `${x}%`, width: `${size}%`, fill: color }, index))) }) }));
}

function BrickLoader({ height, ...props }) {
    return (jsxRuntimeExports.jsx(ContentLoader, { speed: 2, backgroundColor: theme.color.background.ui02, foregroundColor: theme.color.background.ui04, style: { width: "100%", height: height ?? "100%" }, ...props, children: jsxRuntimeExports.jsx("rect", { x: "0", y: "0", rx: "0", ry: "0", width: "100%", height: "100%" }) }));
}

const setColor = (color) => {
    return color !== undefined && isSingleColor$1(color)
        ? theme.colors[color]
        : color;
};
function isSingleColor$1(color) {
    return Object.keys(theme.colors).includes(color);
}

const ninjaImg = "data:image/gif;base64,R0lGODlhyADIAPcAANgpOdna3i00SWVqelxichsuRWgsQERKXX2BjigvRYmNmTY9UfDx8oGFkscqOvn5/Pz8/TI4TbgqO9zd4TcuQ0YtQpgrPZWZo1ktQZ6hq42QnJKVoaGkrjpBVW1ygagqPCkwRnl9i4SIlRQuRYgrPvr6+6WosXB1hAsTLNTV2q6wuSUsQr7Ax6mstXgsPxYdNbG0vCAnPsXGzJqdqN7f4+zs7vf4+BohOHZ6iCUtQ9DR1u7v8GBldZibphEZMWhtfCEuRNLU2B4lPPj4+ra5wP8nNeIpOUhOYcDCyebn69fY3OopOMjK0MbIzvT09s3O1PIoOMrM0ri6wQwvRry+xfz8/8LEyuHi5/P09aOmsPb29yIpQOnq7PLz9HN4hrq9xODh5Pj4+M7Q1dvc4PUoN/7+/vsoN+/w8kBHWk1SZebm6vLy9rS2vvDw9FJYaT1EV+Pk6N/g5ujp6/b3+vT0+NHT11ZcbVVabO3u8lFWaEpQYk5UZuLj5vb29iQrQevs8OXm6Fddbqyvt+rq7+Lk6MfJz+Tm6Ofo7NXW22twf+Pk5hwjOq+yusvN0qirs/woNuHi6OTl6ujq7JCTn+bn7Lm7wvT09f8oN+Pk6lRZa93e5Ozu8Nna4KuutuHi5Fleb/r7/ejq7rW4v+vr7S0uRPv7/RggN+0oOMLFzBsiOaeqsurr8AYOJ+jp7eLj6PgoN7CzvRceNuTl5oaKlsbJ0C4uQ0pQZPX19vHy87S2wFBVZ8vM1P3+/ri7w/X2+SouRPf3+GJneOzt8fPz9sPFyxMaMv4oNWJndxQcNBAXL7G0ug4WL/39/o6Snw8WL76/x9PV2+YpON/g44iLmOHi5fX2+k9VZxUbNPn5+hMbMsHDy0tRZP8oNhcfNhgfNxojOiMrQiAoPicvRP4oN/4oNvHy9uLj6ePj6BMbM+/v8+Li6BQcNfP09/Hx9f3+/fv7+/coN+Pj6fX1+ePj5kZMX/n6+hggOP///ycuRP8pNwAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MTI1ZDMzMi1iZjU2LTQyMjMtYWJkMS0zYmFjODJkMDMxM2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTMyM0VDMDhCNzkwMTFFQUJFNjRCMDNBOEIzNTgyNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTMyM0VDMDdCNzkwMTFFQUJFNjRCMDNBOEIzNTgyNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NGI2NzQ4NC1lNjg3LTQ4ZGMtYTdhNC1iMjQxMWMyMGE3NzgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZmE5N2YzOC1jOWI5LTRkNGEtOWVkZi0wY2E3MjY0YTAxYTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJZABhACwAAAAAyADIAAAI/wDDCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl26sgEPHm50fRqQR48eNwPs6MpEgAcOpmAxerizB40AfGjxJUirNsFatmrf0HNDIKxdhnd0RXgL1y1ctH7/AkZzZMDdw2F40APBV3BgwWrFQUYbYQ8PxEs/dXg8GR+Izmk5/33jBrNRN3slgw69OnTjvxF0mQ4aaIHo1Z9bu+684NPsnnput36tW23nN15+4xxgm3hx57rFQRdwR3lNAm6hR9euWzg96zJ1Gf8vPlk4ecCvO4B/SW/8ecjm37dNu8DD+pVv3Mt3zF3+2wg/3IeSG/rtx5+BnYmzQCIClvRJZAgm2J+BbzQ4UiICxBchehtChoaFIW024YYj7pcJiB4RWGKEK74HgmEobsRYiwZqGGGFMWakR4EdltcjZL7laNEJ8/0Imo0IRiCkRTvmZiRoTj6J1olLSvRDkVKWRyN5SlYZkXhbdhhmcdV5+VCGY5KYJVo4mslQIFiuqaWcx7jJ0I4JqCZnZ0juV5qdCoEg3Z6r9SnfAoAmxAOPhB6YJYOJGrQHhI0emWZnf0ZKUH5RVuqjlHtoWlCcnsJ3KWRdihpGIqT2mEMEA4j/cIEqKrDBhjKdcDAJAp+cxZqUX6maB6P7gfBDBlaMsQMz9zTr7LPOvjMKIl/0wMOpgtmhahjiwZWDfJ+YEIQl0JZrrrkM6JDFgz0GKeoBf31bnC6deFLGufjm+2wZsijDLoJHbNtBvK3lgMMT7+ir8ML3QKCEAp2SF6qqgsnb2QlK3MvwxgoDckGYB2xbcWcHEAMBxygvLI0X76Ua6aIEQ4bADinXrDAEovjKlsWCqerByIJlkLDNROc7QRox9yyqHUDD1YnGO0zyQw9WeFJC0QwDMwEVkwyQATDNcvHvaqri0HRaM2h8TwNwLYCAIHXsoDbWzIzSiCpeRACXCc5y/7Gjt0premXSaHlwdbM26JyWvOLYcQELNNcMSCUa/A0ZD88GEDHPaKk69uJsCaDIs6OczSYgKaegOFqc4xPByc46YrqqMHc2A7TM/NxaJykroNsG0GphOehsqcoqaKhDi4sgDRwBmjIpX8CnG9MQMUS5opytKstJe5AvIPlBtkDyHAdBnLweYINvDXoS37mote+cFvTnlmH2X3uwUa/NSqiiSvtpYUO+jjcZVR2jaXXAFw1G5gms3SN7gtHD0MzFAdCoim2dIV+5pDAZUTjwfoKZB76oYEGKdSZy5srCZG5XtDK0BzJBwFcjOiOAba0OLjXAl+wgw8KivVAwSsCXDv86852LDCANbpgKZpw3mQaeqxAd/CB8UFiuGU5GDxc5RpQWUJe7DO8vTMBXFxYAGRFijYOCCUG+KtEZLFZkWILpAKTAQqAV5ksFglGAA+9hiS+qZQz5kt5ktEURP7KlPmGJ32j6gK93+I4tA+jCHu8RgIGFhgr5escPBVMmiaABLkhARAbghRb1hAU0HsQXBKzwgwjcoRNamGSz5LABNCygAQHQ1xNAc4KJkBEugLxHCTaQljyEJXyQ6QAXbibLcpWBWfp6xwB4I5EB6O0v9LsHINJiSqZkAjQeiGUzx3mPHV4xIgRQnB5y44VncQ8fwVqKIgWDAHGSc49I6A8hHfL/OV28gwuC0IMAnHgPK6TFXUv5JWTEkYNELPOeRYOACvqTAIhsEi0LOJwldCGABrCACzJIi8uUYsi/dIAKE4Qox2QRgtYEzCHIhIssnKWKZIaFgKvhQSHqodKFlUEaGyhRFxdyAoXiQwAh8FUhnKUEx8STKZ/8CwDTogdHTCClPW1WCaShjGkWp5sKSSdcLnCPHShDD16IXAmiyhbZ2OWAUgXNG2ahgkIoYR6jwAU2oEk0CPShBmCoAwtMEAKjFmefCfkEcdTYLDWAQACzEIMckMaWkB0mpr8iDwg6kIYBeKEBGrhABjigCkEo47TKEIQqOJCBDUwjBD/Yg2EpxJCL/6JFHB2A3T2IFNciHmae+JhqqTpUJ4Vglh4ESIscnMUG8c2GlHAR7nANNDGEHGO2jSgDItimgRzewxOCQdRsvHDD6f5IvAjplWBY4KxOeGYWTwgpXCz7mzqa90kCSA5CuhU0Z21TMJJpk3Kgyxbp3rdQQzUIZhPQgKjiwFll4O98BTRbYh14MsZCCHP+8oN79KESbhAAE2DXA8G49T4eKK+BLwwXEBRXIJ8QVBrsEDF8HACauBjYJ4hQA0GmBQQIvY8WWSyfCCQ4xa1hgLMeKRgBwAhEHqgxkSezgCcLhLKCsUIAZrGWYN6DhIKJQC9z5AUpt47FH5LUZILpiU8g4P+hshAMfYU0gPJO+ccnLsgdpCwDZ5EQBLNIQR3+kqkqXffO4Z3jQUqaTfBCRgCXARRmp5wAYyYEB2z9ixeGVoJJ42NBmroDtnp0gAAlZM+UMQFv2XIMK9jgHiBMi4AjdWgWLyDSCfnhD8QQCRrobr4aUFwCqgu/TN8XDYXWs68EkIUrYCISmJhAckEjgBdrKg/XvLMA9NCAgkD3B0/ABCbg8Gw4BMHYcEmzqFCD6BanQSA8uKYAOBAHcZMbDpGAAxzALJhkA4oA2W43XATARHwMINz51re4xw0HV+AULU4WVQjQLfC/CMAEzta3vl2Bb3IjItb0WZqd93Tm52yABvb/3jjH4SAKiqMlyGayrZFKjg+aDwcfBAj3uMftigBgEC16uGieveSBCv8oByuYjM0LRRll3HvflovAZeDKJkDxYOQdWsEKaL503Wj9AleYgAbY4tsw2OETaUiwl+y7Jq3noOv7UY3bvWBfAcA8UgSWEtK3Tqi17N1iaNDvtkpacQN1clsuL7yB1K2qvCu+Q7NOlKcfv6HIu0nClDfSnN30ucwb6d12+oGUPd8hKpkp4KR/UgJwvaTJp75H6BUS21+fJcaj6Bijpn1nEAsiS+peTi6OEZZ/LyfLg+cHp1pA4u/rewPxfj2ub80B6kL4+3rBA2kY/WpGCh7g6uYNc8Q8/5H3Oan9DN06Rqd2kB3P4jy3Uj4geKpyZq8bRBYE6+Z1I0GWPxnbz0b8rRF7A4EAFVdDBsF+q+F/iDF8xSGAAzE4Aid/AtF8DfgbTPMeAqBoBEF/U8Z6BJF+nQF6mIF6uqF2BAGA42dd2jcZGhgWHLgam1cQDHhnImgQ1TcZNWgXCAhOxtUZBvABH2AAw6WAAwGCkAECmLElFRUok0ECr3AJlzAOEoAWv1ALFFABWFgBGLCFBtCFXuiFW4gBWEgBFEAKfKIQMrcaVgYWBCgfIZAQLYUPLiABDlCHH4AWAACFUAgFaPEBZvAI4zAOejiIhFiIgWgGZgAPUHAK0WAEAP9Qh0KID6Z2EPgHGc+3FNOwH92GENMmAYM4hfiwBIP4CGb4AYV4iqiYioN4h/hwdwJRiYJRdqckHwrBLg6wivjwC/AwiqWoir74i5fgAGjhbwNBgbphbWFhhOGlEHVkBINoAfhAAY8wiK/Qh8B4jadoBECXEDcIGZhRfuSRg96GFqfwjPhQAYTIh/jgidjYjlBIBr+AD8YXBtNGHvOoFA/XGpN4EM5TC9Ooh9BIAYKoh9qID7foju6IAWqhECQIGq7IFN3IFvrHj2hhAIR4h79QjnoojPiQhwjZjiSAFvtYEBf4fb+hjBiVEACXFhggAUD4ARbgAmhBAkawiACgkPj/YAAu8IU86QI++ZM/SQJCKZQWUJQW8JJAKAESIJP44IEFwX8/toaHsWGgUWUIkYYVZ3oIEX1oAQKC9xvLR4TshhYoGI0VQGSyeBAzeEjI+BufsBhsAQIHEAgH4QHI5AZIkAGQ4QLRcAqsiAEW4AB+WSoxeBAnwFHp9pDK4QFu4Ab2sV+5AQIXMAGukIl/4YdQyJEHeQkFWSlI+BDHQABHMJKhh0wE0ASukJoP9wsSMJCXAI2/AAV6+Ahn6SlfuS0MUXACkAE0kJqp+UWbeQlmcJYuQIjQ6CltiZsH8QkKBW6+6Qph1xjsqIcAgBbTmZmlQmzKeRBstQCOcAXPCZ2D/5YWFuCaUXicojiI0VAqxLidYRBiaYEDQRCe0OkKxJAWBvCEejgOUEABckiI4/AK/lkphamciYBMaKAM9Jma4AlB+GABAKqZhPgIj8CUjcJ9ypl9aSECSrCgz2kCaVELzjibQkgKsjmIgXic57FiBeSeiaFQeUAFHhqePnaO6XkJ1XmO5jkO5CCFpSKVomI5INADmjCjz8kJEIgWGBANl/AKkWiREzoOHFkpThkpdqAzidAIRuqbV1AJhlQBH2ChxQmgjzCln5YHx5AcOEAAmdCQ8qGdifIDbIUGKgCeW+oKKdCGrQGl+xmIoGhkCZEH2CKOdqILuZEACtChdxoHqv+AkmzhkftpBGdZoARxDLDYGXBqJjygUMcgA3fKcVZQO0amGxTwAUopATFZC/hweLXopiYJKJgma50QB5+aAiJAdmEQhyuKFkSIENfyHqphgG6SB4eqAYq6pROQAdm2AMVVjy0jEWXZGm4CnyJZCJ8aBypgOdRBEJ1XHFr5EMZYHC0IIp8QcDigA3Y6o3EgCmOjBxr4gqvhgA5Bde8BpBZSXm9wApOgClJADE+QAkrACZzABs7aAVUakYJRpQ4BlZBhgiDyAwK1HxHQntxyKBbRra1BsSAyAHdwBPQwIsO2EDvYGecXEa6KKZqSCJ/gBnlwAAcgAHqyAHYggQZxspP/cZvQKh8T6aIOIR/36BD5KH08CxF6Sh6XKBGOGjpD+xDeBxqkORHgSB5L6xDOqhvCmkXyMWZTqxAlWRw7axGXympbuxDwOkgbgbBscbRjKxBYORmKGRFwRB4aO7ZoG58b4VXhuLYJEa401BE0kpZ6+4rn8bUXwbBs0atr+x6ZahHRKhifGbgE8WvFsbgV8U3nAbkF0bST8bQWEbROi7kDQa+6obUb8R6Eu7YYWx4fMbLLCLph0LZy9hF1S5agq7mQQbkWcQcYaK9Dq1jv8ZgeUWQ4O7SJYLMRFBKs6yF6C7vHKxJ5wLf9p7fQ+xcJQA/JCRI/kAeZoAe6cARuoAdpPdCyepAJdkAApDu2n/AJ4JsJHZAHttQB9HAASfS2rlu/9nu/+Ju/+ru//Nu//vu/ABzAAjzABFzABjwUAQEAIfkEBTIAxgAsLQATAIEAqwAACP8AjQkcSLCgwYMID06aNuDIgjeZcGxISLGixYsYM2q0iMDDsWME0CTANxIfSZMoE6D5xGNAiI0wY8qcWTADjk/0IqBMuZNnT5QRdP2gSbSo0RB26JX8iU/cUqZQTYLQQ8Co1asVeeh5CpVr1K9vBmAde9XLpwTivu70GpUt0KFk48LEceCk2rV3e7o1+caL3L8VEeyxm9dn4cKfACsueEzA4Z9OH+9MC5Xey8V/Z9Xdm5ez5J0R/GImm2gB4c+GUUcFAXe01R8JPD+WrVqs66IETqvGu5spZXEebtP8ZJJy75+0P7MWHpOH7uM9jUPfuaABc40/nk8/mfwzmusYcTj/7i65JPnHPMBbfNN0O2SU0t2TTKQ+oS7t05+eP5zgTf2DJ+AHXXztyZdSVf8R9MZ+/CFnYEoCaJCgQNkx2BlTFt6Vlh0TGvNGZA/il6FaCYBg3X+5jfjVXiq2hU9i/y0YokmctdiVAP8FaCOGJM44EoLg3bejgz2GqFJ9sfl4oZH4IABehUou+WACd4CXYpRSGrgAeCCAOOVsMwYn3DECHkceCPQcg0MDbHrBg0jHpScccUPq9ZUeIqhihRJyAMPMPYCWAeg9zNyiSCOOeOGYZHow50aZvXH1xiyiKHGGoINmOiimmt7TRSOzgPAYcwvUaacAIRAhzTudBtrqq5nW/6CKaXkBKVMgugggABp2tHZQDzNKhYAMuMBq7LGZ7nCBbG7QRI9uHdB3EAJ45TCdLsrUgOy23OpQ11dHzEQcT9aaZOtAZJIbpwz1cOvutnI4t5pMAaKUiAg/oLGTrwLdBx8+5RbnG8B46WEFq+8mfOwOufUU8Cwx0WqSHIAyIwVKAkBM0KP/BlwgVAEnkIElCpesKTA69HBHAzXIoS9U0mr0cnHKDMpMAyjBOJAd1fIWlbVHBGHy0Aw0oYHE+MxyTyNMWbvHRg3v9EaxgNbAHj4RFBR1ex4T+NMPowytMBdUhCDqTxGEUcYsP1mri0YeeM1BpsqgdAxBM5/UtVonYP8htrsliJKdWlzcI8vZO+WAY0YS36FEIZ3ggA8OF5igjLz4+KqTw4cd00WmgCjDhhVijAEIAyX8DWgGtSLMNlMnWnTETsf8eU8ZGjR9mUCL0khwaj29QfGggCBtkuJ6/NBAD44InXAZz36FxiSFA/pE02JWxPFOiAzKxeY70VNQ71xPFpUVmtZdGPoJe/AVBwgPqgX4XNtGkeQ/iZBpJz+JNpDxh/EABDSVhcN4QWEs+AoIlNApnP3kXAfpnTg2l4BGIKwGPWlUQfSgGh10ShSHwYHCylAHZdTBBEw5xgAzxQamaDAhHERJJ97BhTpsAGvHUEAIdpIxgwyASF9xwwr/M3WLHdrpJywQ29Z8FwBNBYEpIKCIv1AyiUFBwH12ktMGgdgVE7yqDKNQxBh4phcF9KAQnFIYA3hUM9BhCAcIqRcPtQWoADDlOwcho8+i4kFjMQ05PVAdIHg0t0ytETn2I0gI6EejTmRKAXqB40G2BzymVA9W1LITCOg4NC7wKAua6gKGdKag8MVwASzwRBfK8IWeaNEgg9ujb4BhrHcw0i5I+Ns7ADiSJMYKQxCcokk8UYZN1KFeOUAD4vDxwoO8bjKcEcAQW2UJj/kOH1782ySgOLxBjQFDgSjIuHbCvnvIgXw0ioDGEsKjqEjTWPVY5jUzoDpPoBMfGugUFcBJ/xAPyBM4nGLdT7KXkKvJUi9hOFYiiCQK1d2jEj0hANUyhT+8PO1/DqLBoHZgvLdZ5A5cZErYjHUxqEzAoffQQXYWMIOJDkoaXvnRQGaHkg5MIl3HkIE0bgGBH6IEjxYZZyV74jxYaSEQTMFBGlUHjPhlCgJGTKFAKImPQN7DEjJYVAI6ABqC3u+gTFEFsqSRN2Z2E6WwEsSdjJEu3+khdaszn0n8dxGuPkYXTn2VHEKFDxNdEq2vKmlUPuEFeZqkj/eoAf3ScjeNYO5jX2ECt86gCAZsqwxLhRVmW4UNgX4lDUhDXAMyxYEMwkSOkI2KHfpw2cwea7PPU0JbD6OHLv/IgQk9SIACWBAABqjPJB2QyS3vsgHbHYsZrn0tbF+rhEx+JgKfAxQKmSKA2G2Ekl5jCgeMa6zljjC5XJDCbFGTS0BxlDd03cgzJaOA6CpXbLDtAiI6EcvjeIBT090JBDeSB7BCJQ0yyOsXk3ssbChCBhn4gWGhQ4QdCMoTPREfUbywmxUQ4As7aO1rGRAAFmTgBADMSw5GbM2opGEWFAZYDg5glTSoJgcrUBwOlKEEBhDYVWVghiVkUQcqcAABW0ENidXygxCjpFxbskoIjJNdqKxgBZM5gBcmwQFlVAIJVrACC9jgiB7M4gcyClZPcCCNFEQVKgJw0lWE2uS2jdj/PTAu8YtHnIgJuAIOrujEPWl0ArIY+S5PNtCQpzOAMcDh0IcuRPQiGhcsClnO0HlzbwigBFfc2dJ3DgJNQSPJsWRCzKCGSiYQgelSu0IKC34lVsoaalCrIA6mtjQS9oyPTMgFAX9u9YP0wAFOlJoJtFoArmsKGEXp+tgHYIOlxfCtCAzlBBFYwH7HouBjH3sDOnAxPgSQ3tEU1tq63hwI+vwkWoN7Sl4VVzMz4oVcn3s7qp6JT9edEVa/Wz7T3sgiUbK7jXyizffeDQjWOZO85dsiODBowN1DypiUNbjDMffCP8NimeDA3jGTiQJiOHHoTGQjIvjEgvHBoQkPt+OS/+l3RRqQBnvvJFw0OcbIUf6YRCLECwTguFoWJ5OF0hw6DS/ID7T9GOtqBLU/3w29jTGLPEj8K53WSCIAnvS8NHYgA9A5auKN8JNX/TEx+8G3jhPOjSj866qZhjE8YNfppGEj40X7ZxZwgrZvB6gXwQHV5X7uJGNE63yHyi8oUIEKtDqKGEF64PHxCwxYQAIOMMISyPCIcZiBBK3+uEWEKfdauEACAIDCOC5B+tKX/hUuCHXQEWIq+WDgAwAgg+lnP3sApB7Ub7eI4iEVagNIwAijp73wLxENzLfaoxX5dEiPjQEJRCP4w6f9KT5AiuVvR0IWsftQuzKdClgAANCP/v/syfABCrTzQTyvCIb2HgE3QNL6UHGBA+Ah/uG/QgKGP6JqZIP3hDjavz2RBzN1foJnAcBXf8L3CA6AAUyiFlwHSwQIFa8kVNu3EyTwCgg4e+MAAAYwMGZyF7lnEXEHKTZnDAsmGxaQgaS3gbenf5GiQG5QggnhUy74E0unR7L0CyTgAADwAShhBBloBMYXLGwhDkfALxdRXxWIDwpwEDS4RxUAhKVnASZBAvVXfFCxd4XhFWigPDLxfymRXRIWQUxBAsb3AbO3BL+AD6RwCsO3BBawhvC3fzsBArpwdTMRgTuxdAKxRCQAhD6IDw5Ae8YnAdL3AbWgh9BREh2QBxf/YBUhthdjWBA+hw8uAAClJwEmkYKz5wAm4QKmBwXlx30GMhJpEHVGAXhlsnQakAAU4ADhZwQmgQGPMH6J+AtQcAmiaH5zGCkCQADdZhRgeE1RIYMH8AuyZ3qPwID4gImzd3sOIAG8GG6rdxXOBYDAdRDE4YymF4icaHpUqIjbIQ4LgId/cXbECBUliDOGOHuyiA8UkIulBwXMeGx6kHGKsWee0SwGsQBWqIG3ZwG1SAb4ZxIVkIj/smvpBhi504smUXEFkQkUYAa0BwAoYQAugJBsCACeGCxvgISLcY2PAXNagw9SOHuB2BMG4IwpKR/0EIyY4UCfMYkC4QU6MYiz/wcFACCNJvEL8keRpPcIQzgdaGCOwnFDqHFRA4EDm/ONlzB9GJCL8AAAoUd/s3cK+Xcc0jYh6JgXyGcM+9ZXGDB6SzCK3Fh6SyB8HbkbAmCU6oGDhxE7DUArOMA6AGABCOmUpXeWpjeUklFyHWIM03AeLzSXc6UJMtATFOCGtIeTtLcE03gYB7CQCbJEJCJJIUArJ2BnE0A+aCh8etmNjxEBMhiYqggVCDJs+FBnrnAFV0CD8Th8JCCPtEcGWakWIRiYB7FoX9FYTGkSPzAGrekKkLBNmxh9lxh9mngXtqabUvQVESAnmWkSA+BrrmlpjPCDwzcOBvCZwncKd8GPzv9JEQ1gB+jUAfaDA7RyDAHQmleAaYUwi+FneuNQAaBof9UXFW45ngjxAzywB8fQb7+JDzzQnteJaWMgKqF5eolIm7UXRPxJFANKacMZazzzj8K3BCbhmKW3gbfZE/0XoRuhmhQaa5hGLb/Al6XXkS5Qi0Fpe18hACIgovSyOSVqoq7ABFdTCx/goKQXjvhAAgBgBBJQj1HxgDRaEdOJDzdqojqqmB9wgI+wnBSXpHNBK00aa4XQlbNIAkYqGSBppQkRlllqajJgV2lgKhApphbRAJtzDJWGo66ABLTCYmO3HeTGpitHKwPQnnJaCZsjYSDlHn6np2NKK4nga3KqDGf/4x8CQYHHAZiGehA2aRKbKaeukAWU0UyQ2htGN6kD4QGbgwOaIKdxgJTMJHTusaagOhAIsCgIQANyOgHO9ZUUwnCtSombowCwhqNBgDnV6B74CKoncDYb8J44igRjl29PVxhZk6sCgTkZUGqYQANBwAKO0HTwsZ8C4XKScXBWOk5HsAELgQCJkAZ7FgGUORCcVxvQ2q4kcgcEhxAj+Bl5OqlPuBppcIdqdhGV2BvQagw48AOfQACfwBIEcAyJkAj9ChNKiBqsGrBYIZO7YasSixXQ0ZwXSxbNqhYwubFEsWmqMa8gm4rHMQklOxZEhxoJkLJjQVWSEaIuSxNwySgzjnsVu3cY4nmzRCGSkrGzPDsTDakaZRe0NDENvVGNRpsR6/UZSru0FzG0qMGtUGsRItAb91q1GgGzo6K1MaF9j4F4XutYvQG0Y1sRxdobSHq2BYEAXlcYWcu2COFuICi3FvGwklGodosQr7p/fLi3BTEJDIsDHsADafAGCyAAILC4AhABb0BYieAFJCuiAQEAOw==";
const getBorderWidth = (size) => {
    switch (size) {
        case "sm":
            return "1px";
        case "md":
            return "2px";
        case "lg":
            return "3px";
        case "xl":
            return "5px";
        case "xxl":
            return "8px";
        default:
            return "2px";
    }
};
const StyledRing = styled.div `
  ${color$1};
  display: flex;
  position: relative;
  width: ${theme.iconSize.md};
  height: ${theme.iconSize.md};
  animation: chase 2.5s infinite linear both;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 2px solid ${theme.color.interactive.primary};
    border-radius: 50%;
    animation: ring 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.color.interactive.primary} transparent transparent
      transparent;

    &:nth-child(1) {
      animation-delay: -0.2s;
    }
    &:nth-child(2) {
      animation-delay: -0.15s;
    }
    &:nth-child(3) {
      animation-delay: -0.1s;
    }

    ${({ color }) => color &&
    css `
        border-color: ${theme.colors[color]} transparent transparent transparent;
      `}
  }

  ${({ size }) => size &&
    css `
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};

      div {
        border-width: ${getBorderWidth(size)};
      }
    `}

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Image = styled.img `
  width: ${theme.iconSize.lg};
  height: ${theme.iconSize.lg};
  ${({ size }) => size &&
    css `
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};
    `}
`;
function Spinner({ color, size, ninja }) {
    return (jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: ninja ? (jsxRuntimeExports.jsx(Image, { size: size, src: ninjaImg })) : (jsxRuntimeExports.jsxs(StyledRing, { color: color, size: size, children: [jsxRuntimeExports.jsx("div", {}), jsxRuntimeExports.jsx("div", {}), jsxRuntimeExports.jsx("div", {})] })) }));
}

const Button = React.forwardRef(({ children, icon, initialState, linkTo, as, ...props }, ref) => {
    const component = as || linkTo ? "a" : "button";
    return (jsxRuntimeExports.jsxs(StyledButton$1, { ref: ref, as: component, href: linkTo, linkTo: linkTo, ...props, children: [jsxRuntimeExports.jsx(ButtonIcon, { initialState, icon }), children && jsxRuntimeExports.jsx("span", { children: children })] }));
});
function ButtonIcon({ initialState, icon }) {
    switch (initialState) {
        case "success":
            return jsxRuntimeExports.jsx(SVGIcon, { name: "checkmark" });
        case "error":
            return jsxRuntimeExports.jsx(SVGIcon, { name: "danger" });
        case "loading":
            return (jsxRuntimeExports.jsx("div", { className: "spinner", children: jsxRuntimeExports.jsx(Spinner, { size: "sm" }) }));
        default:
            return icon ? jsxRuntimeExports.jsx(SVGIcon, { name: icon }) : null;
    }
}
const changeSize = (size) => {
    switch (size) {
        case "sm":
            return `
      font-size: ${theme.fontSizes.xs};
      padding: ${theme.spacing.spacing01};
      line-height: 0.875rem;
      span {
        padding: 0 ${theme.spacing.spacing01}
      }   
      svg, .spinner {
        padding: 0;
        width: ${theme.iconSize.sm};
        height: ${theme.iconSize.sm};
      }
      `;
        case "md":
            return `
      font-size: ${theme.fontSizes.sm};
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing02};
      span {
        padding: 0 ${theme.spacing.spacing01};
        line-height: 1rem;
      } 
      svg, .spinner {
        padding: 0;
        width: 1rem;
        height: 1rem;
      }
      `;
        default:
            return "";
    }
};
const changeSeverity = (severity) => {
    switch (severity) {
        case "medium":
            return `
      background: transparent;
      border-color: ${theme.color.interactive.primary};
      color: ${theme.color.text.text01};
      .spinner {
        div {
          border-color: ${theme.color.text.text01} transparent transparent
            transparent;
        }
      }
      &:hover {
        background: ${theme.color.interactive.secondary};
        color: ${theme.color.text.text01};
      }
      &:active {
        background: ${theme.color.interactive.secondaryHover};
      }
      `;
        case "low":
            return `
      background: ${theme.color.interactive.secondary};
      color: ${theme.color.text.text01};
      border: none;
      .spinner {
        div {
          border-color: ${theme.color.text.text01} transparent transparent
            transparent;
        }
      }
      &:hover {
        background: ${theme.color.interactive.secondaryHover};
        color: ${theme.color.text.text01};
      }
      &:active {
        background: ${theme.color.interactive.secondaryActive};
      }
      `;
        default:
            return "";
    }
};
const changeStatus$1 = (status) => {
    switch (status) {
        case "danger":
            return {
                default: theme.color.interactive.error,
                hover: theme.color.interactive.errorHover,
                active: theme.color.interactive.errorActive,
            };
        case "warning":
            return {
                default: theme.color.interactive.warning,
                hover: theme.color.interactive.warningHover,
                active: theme.color.interactive.warningActive,
            };
        case "success":
            return {
                default: theme.color.interactive.success,
                hover: theme.color.interactive.successHover,
                active: theme.color.interactive.successActive,
            };
        case "notification":
            return {
                default: theme.color.interactive.info,
                hover: theme.color.interactive.infoHover,
                active: theme.color.interactive.infoActive,
            };
        case "discovery":
            return {
                default: theme.color.interactive.primary,
                hover: theme.color.interactive.primaryHover,
                active: theme.color.interactive.primaryActive,
            };
        case "accent":
            return {
                default: theme.color.interactive.accent,
                hover: theme.color.interactive.accentHover,
                active: theme.color.interactive.accentActive,
            };
        default:
            return null;
    }
};
/* stylelint-disable no-descending-specificity */
const StyledButton$1 = styled.button `
  background: ${theme.color.interactive.primary};
  white-space: nowrap;
  font-family: ${theme.fonts.body};
  color: ${theme.color.text.text04};
  border: ${theme.borders.transparent};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeight};
  text-decoration: none;
  display: ${({ display, linkTo }) => !display && linkTo ? "inline-flex" : display || "flex"};
  flex-direction: ${(props) => (props.iconRight ? "row-reverse" : "row")};
  align-items: center;
  text-transform: ${theme.typography.titleCase};

  span {
    padding: 0 ${theme.spacing.spacing02};
  }

  svg {
    fill: currentColor;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.125rem;
  }

  .spinner {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      border-color: ${theme.color.text.text04} transparent transparent
        transparent;
    }
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${theme.color.text.text04};
    background: ${theme.color.interactive.primaryHover};
    text-decoration: none;
  }

  &:active {
    color: ${theme.color.text.text04};
    background: ${theme.color.interactive.primaryActive};

    svg {
      fill: ${theme.color.text.text02};
    }
  }

  &:disabled {
    background: ${theme.color.interactive.disabled};
    border-color: transparent;
    color: ${theme.color.text.text03};

    &:hover {
      border-color: transparent;
      background: ${theme.color.interactive.disabled};
      color: ${theme.color.text.text03};
      cursor: not-allowed;
      border-radius: ${theme.radiusDefault};
    }
  }

  ${({ severity }) => severity &&
    css `
      ${changeSeverity(severity)}
    `}

  ${({ status }) => status &&
    css `
      background: ${changeStatus$1(status)?.default};
      &:hover {
        background: ${changeStatus$1(status)?.hover};
      }
      &:active {
        background: ${changeStatus$1(status)?.active};
      }
    `}

  ${({ size }) => size &&
    css `
      ${changeSize(size)}
    `};

  ${({ color, severity }) => color &&
    css `
      background-color: ${severity === "medium"
        ? "transparent"
        : setColor(color)};
      color: ${severity === "medium"
        ? setColor(color)
        : theme.color.text.text04};
      border: 1px solid ${setColor(color)};
      &:hover,
      &:active,
      &:disabled,
      &:disabled:hover {
        color: ${theme.color.interactive.disabled};
      }
      .spinner {
        div {
          border-color: ${severity === "medium"
        ? setColor(color)
        : theme.color.text.text04}
            transparent transparent transparent;
        }
      }
      &:hover {
        color: ${severity === "medium"
        ? setColor(color)
        : theme.color.text.text04};
        background-color: ${severity === "medium"
        ? lighten(0.35, setColor(color))
        : darken(0.1, setColor(color))};
      }
      &:active {
        background: ${severity === "medium"
        ? lighten(0.25, setColor(color))
        : darken(0.2, setColor(color))};
      }
    `}
  ${space}
`;

const StyledContainer = styled.div `
  box-sizing: border-box;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.radiusDefault};
  width: ${(props) => props.width || "100%"};

  ${space};
`;
const Container$4 = React.forwardRef(({ children, ...props }, ref) => (jsxRuntimeExports.jsx(StyledContainer, { ...props, ref: ref, children: children })));
/**
 * @deprecated Please use FlexContainer
 */
const Flex = styled(Container$4) `
  display: flex;

  ${(props) => css `
    align-items: ${props.alignItems || "center"};
    justify-content: ${props.justifyContent || "flex-start"};
    flex-direction: ${props.flexDirection || "row"};
    margin: ${props.margin} ?? 0;
  `}

  ${space}
`;
function getFlexCss(props) {
    return css `
    align-items: ${props.alignItems ?? "center"};
    align-content: ${props.alignContent ?? "center"};
    justify-content: ${props.justifyContent ?? "flex-start"};
    flex-wrap: ${props.wrap ?? "nowrap"};
    flex-direction: ${props.direction ?? "row"};
    flex-grow: ${props.grow};
    gap: ${props.gap};
    column-gap: ${props.columnGap};
    row-gap: ${props.rowGap};
  `;
}
const FlexContainer = styled.div `
  display: flex;
  ${getFlexCss}

  ${space}
`;

const changeBoxStyle = (boxStyle) => {
    switch (boxStyle) {
        case "lightGrey":
            return `
      background: ${theme.color.background.ui03};
      border: 1px solid ${theme.color.border.border01};
      padding: ${theme.spacing.spacing03};
      box-shadow: ${theme.shadow.shadow00};
      `;
        case "grey":
            return `
      background: ${theme.color.background.ui04};
      padding: ${theme.spacing.spacing03};
      box-shadow: ${theme.shadow.shadow00};
      `;
        default:
            return "";
    }
};
const StyledBox = styled(Container$4) `
  box-sizing: border-box;
  min-width: 0;
  padding: ${theme.spacing.spacing04};
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  background: ${theme.color.background.ui01};
  font-weight: ${theme.fontWeights.regular};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
  ${({ boxStyle }) => boxStyle &&
    css `
      ${changeBoxStyle(boxStyle)}
    `}
  ${({ dark }) => dark &&
    css `
      background: ${theme.color.background.ui05};
      color: ${theme.color.text.text04};
    `}
  ${({ radius }) => radius &&
    css `
      border-radius: ${theme.radius[radius]};
    `}

  ${({ innerSpacing }) => innerSpacing &&
    css `
      padding: ${theme.spacing[innerSpacing]};
    `}

  ${({ spacing }) => spacing &&
    css `
      margin-bottom: ${theme.spacing[spacing]};
    `}

  ${({ shadow }) => shadow &&
    css `
      box-shadow: ${theme.shadow[shadow]};
    `}
  ${({ minHeight }) => minHeight &&
    css `
      min-height: ${minHeight};
    `}
  ${({ minWidth }) => minWidth &&
    css `
      min-width: ${minWidth};
    `}
  ${({ border }) => border &&
    css `
      border: ${theme.borders[border] || border};
    `}
  ${({ color }) => color &&
    css `
      color: ${color};
    `}
  ${({ backgroundColor }) => backgroundColor &&
    css `
      background-color: ${backgroundColor};
    `}
     ${space}
`;
function Box({ children, ...props }) {
    return jsxRuntimeExports.jsx(StyledBox, { ...props, children: children });
}

function Breadcrumbs({ list, renderCustom }) {
    return (jsxRuntimeExports.jsx(StyledBreadcrumbs, { children: jsxRuntimeExports.jsx("ul", { children: list.map((breadcrumb) => (jsxRuntimeExports.jsx("li", { children: renderCustom ? (renderCustom({
                    css: aStyles,
                    breadcrumb,
                })) : (jsxRuntimeExports.jsx(StyledLink, { isDisabled: breadcrumb.isDisabled, href: breadcrumb.uri, children: breadcrumb.label })) }, breadcrumb.label))) }) }));
}
const aStyles = css `
  line-height: 1.125rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  text-decoration: none;
  transition: ${theme.transition};
  color: ${theme.color.interactive.link};
  &:hover,
  &:focus,
  &:active {
    opacity: ${theme.opacity};
  }
  &:hover {
    text-decoration: underline;
  }
`;
const StyledBreadcrumbs = styled.nav `
  ul {
    padding: 0;
    margin: 0;
    line-height: 1.125rem;
    li {
      display: inline-block;
      margin-right: ${theme.spacing.spacing02};
      line-height: 1.125rem;
      text-transform: ${theme.typography.titleCase};

      a {
        ${aStyles}
      }

      &:after {
        content: "/";
        font-size: ${theme.fontSizes.sm};
        margin-left: ${theme.spacing.spacing02};
        color: ${theme.color.text.text02};
      }

      &:last-child {
        margin-right: 0;
        &:after {
          display: none;
        }
        a {
          color: ${theme.color.text.text03};
          pointer-events: none;
        }
      }
    }
  }
`;
const disabledLinkStyles = css `
  pointer-events: none;
  color: ${theme.color.text.text02};
`;
const StyledLink = styled.a `
  && {
    ${aStyles}
    ${(props) => (props.isDisabled ? disabledLinkStyles : {})}
  }
`;

const Checkbox = React.forwardRef(({ id, labelText, withoutLabel, isIndeterminate, ...props }, ref) => (jsxRuntimeExports.jsxs(SingleCheckWrapper, { withoutLabel: withoutLabel, children: [jsxRuntimeExports.jsxs(CheckboxContainer$1, { children: [jsxRuntimeExports.jsx(CheckboxInput$1, { ref: ref, type: "checkbox", id: id, ...props }), jsxRuntimeExports.jsx(Fill$2, {}), isIndeterminate && jsxRuntimeExports.jsx(FillInter, {})] }), jsxRuntimeExports.jsx(CheckboxLabel$1, { withoutLabel: withoutLabel, htmlFor: id, children: labelText })] })));
function CheckboxGroup({ name, children }) {
    return jsxRuntimeExports.jsx(CheckboxWrapper, { name: name, children: children });
}
const SingleCheckWrapper = styled(Flex) `
  margin-bottom: ${theme.spacing.spacing04};
  position: ${({ withoutLabel }) => (withoutLabel ? "relative" : "static")};

  &:last-child {
    margin-bottom: 0;
  }
`;
const CheckboxLabel$1 = styled.label `
  cursor: pointer;
  margin-left: ${theme.spacing.spacing02};
  font-weight: ${theme.fontWeights.medium};

  ${({ withoutLabel }) => withoutLabel &&
    css `
      position: absolute;
      top: -0.2rem;
      left: -0.2rem;
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0;
    `}
`;
const CheckboxContainer$1 = styled.div `
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  position: relative;

  &::before {
    content: "";
    border-radius: 2px;
    border: 1px solid ${theme.color.border.input};
    background: ${theme.color.field.default};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;
const Fill$2 = styled.div `
  background: ${theme.color.background.ui05};
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.2s ease-in,
    height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    opacity: 0;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const FillInter = styled(Fill$2) ``;
const CheckboxWrapper = styled(Container$4) `
  position: relative;

  ${SingleCheckWrapper} {
    margin-bottom: 1rem;
  }
`;
const CheckboxInput$1 = styled.input `
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:checked {
    & ~ ${Fill$2} {
      width: 0.65rem;
      height: 0.65rem;
      transition:
        width 0.2s ease-out,
        height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }

  & ~ ${FillInter} {
    width: 0.65rem;
    height: 0.25rem;
    transition:
      width 0.2s ease-out,
      height 0.2s ease-out;

    &::before {
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
`;

const IndeterminateCheckbox = React.forwardRef(({ indeterminate = false, id, ...rest }, ref) => {
    const defaultRef = React.useRef(null);
    const resolvedRef = ref ?? defaultRef;
    React.useEffect(() => {
        if ("current" in resolvedRef && resolvedRef.current != null) {
            resolvedRef.current.indeterminate = indeterminate;
        }
    }, [resolvedRef, indeterminate]);
    return (jsxRuntimeExports.jsx(Checkbox, { id: id, withoutLabel: true, isIndeterminate: indeterminate, ref: resolvedRef, ...rest }));
});

const CheckboxLabel = styled.label `
  cursor: pointer;
  margin-left: ${theme.spacing.spacing02};
  font-weight: ${theme.fontWeights.medium};

  ${({ withoutLabel }) => withoutLabel &&
    css `
      position: absolute;
      top: -0.2rem;
      left: -0.2rem;
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0;
    `}
`;
const CheckboxContainer = styled.div `
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  position: relative;

  &::before {
    content: "";
    border-radius: 2px;
    border: 1px solid ${theme.color.border.input};
    background-color: ${theme.color.field.default};
    transition: all 0.2s linear;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;
const Fill$1 = styled(SVGIcon) `
  border-radius: 2px;
  fill: ${theme.color.background.ui05};
  transition: all 0.2s linear;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
`;
const CheckboxInput = styled.input `
  opacity: 0;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:checked {
    & ~ ${Fill$1} {
      border-radius: 2px;
      fill: ${theme.color.background.ui01};
      transition: all 0.2s linear;
      background-color: ${theme.color.background.ui05};
    }
  }

  &:disabled {
    & ~ ${Fill$1} {
      border-radius: 2px;
      fill: ${theme.color.text.text03};
      transition: all 0.2s linear;
    }
  }

  &:checked:disabled {
    & ~ ${Fill$1} {
      border-radius: 2px;
      fill: ${theme.color.text.text03};
      transition: all 0.2s linear;
      background-color: ${theme.color.background.ui04};
    }
  }
`;
const CheckmarkCheckbox = React.forwardRef(({ id, labelText, withoutLabel, double, ...props }, ref) => {
    const handleChange = (event) => {
        props.onChange?.(event);
    };
    return (jsxRuntimeExports.jsxs(FlexContainer, { children: [jsxRuntimeExports.jsxs(CheckboxContainer, { children: [jsxRuntimeExports.jsx(CheckboxInput, { ref: ref, type: "checkbox", id: id, ...props, onChange: handleChange }), jsxRuntimeExports.jsx(Fill$1, { name: double ? "checkmarkDouble" : "checkmark" })] }), jsxRuntimeExports.jsx(CheckboxLabel, { withoutLabel: withoutLabel, htmlFor: id, children: labelText })] }));
});

const TreeWrap = styled.div `
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
const CheckboxWrap = styled.div `
  padding: ${theme.spacing.spacing02};
`;
const TreeItem = styled.div `
  border-top: ${(props) => props.isTopItem ? theme.borders.disabled : "transparent"};
  border-bottom: ${theme.borders.disabled};
  padding: ${theme.spacing.spacing02};
`;
const Indentation = styled.div `
  padding-left: ${(props) => props.isRootElement ? theme.spacing.spacing00 : theme.spacing.spacing07};
`;
const MinusIcon = styled.div `
  transform: rotate(90deg);
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$2(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$2;

var eq$1 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var ListCache$3 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$3;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$4 = root$7.Symbol;

var _Symbol = Symbol$4;

var Symbol$3 = _Symbol;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$c.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$b = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$b.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$2 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$4(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$4;

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

function isObject$5(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$5;

var baseGetTag$3 = _baseGetTag,
    isObject$4 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

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
function isFunction$2(value) {
  if (!isObject$4(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject$3 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$a = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$4 = getNative$6(root$5, 'Map');

var _Map = Map$4;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$3 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$3 || ListCache$2),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;

var _Stack = Stack$1;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;

var getNative$4 = _getNative;

var defineProperty$1 = (function() {
  try {
    var func = getNative$4(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$1;

var defineProperty = _defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$2;

var baseAssignValue$1 = _baseAssignValue,
    eq = eq_1;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$2;

var assignValue$1 = _assignValue,
    baseAssignValue = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$4(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$4;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

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

function isObjectLike$5(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$5;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$4 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$3 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

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
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$3 = Array.isArray;

var isArray_1 = isArray$3;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

isBuffer$2.exports;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer; 
} (isBuffer$2, isBuffer$2.exports));

var isBufferExports = isBuffer$2.exports;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

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
function isLength$2(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$2;

var baseGetTag$1 = _baseGetTag,
    isLength$1 = isLength_1,
    isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] =
typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] =
typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] =
typedArrayTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) &&
    isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$3;

var _nodeUtil = {exports: {}};

_nodeUtil.exports;

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil; 
} (_nodeUtil, _nodeUtil.exports));

var _nodeUtilExports = _nodeUtil.exports;

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$2 = _baseUnary,
    nodeUtil$2 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;

var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray$2 = isArray_1,
    isBuffer$1 = isBufferExports,
    isIndex = _isIndex,
    isTypedArray = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$2(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$2;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$3(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype$3;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$2;

var overArg$1 = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg$1(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype$2 = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction = isFunction_1,
    isLength = isLength_1;

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
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$2;

var arrayLikeKeys$1 = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$1 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
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
function keys$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}

var keys_1 = keys$3;

var copyObject$3 = _copyObject,
    keys$2 = keys_1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}

var _baseAssign = baseAssign$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject$2 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$3;

var copyObject$2 = _copyObject,
    keysIn$2 = keysIn_1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}

var _baseAssignIn = baseAssignIn$1;

var _cloneBuffer = {exports: {}};

_cloneBuffer.exports;

(function (module, exports) {
	var root = _root;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer; 
} (_cloneBuffer, _cloneBuffer.exports));

var _cloneBufferExports = _cloneBuffer.exports;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$2() {
  return [];
}

var stubArray_1 = stubArray$2;

var arrayFilter = _arrayFilter,
    stubArray$1 = stubArray_1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols$3;

var copyObject$1 = _copyObject,
    getSymbols$2 = _getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}

var _copySymbols = copySymbols$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$2(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$2;

var overArg = _overArg;

/** Built-in value references. */
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$2;

var arrayPush$1 = _arrayPush,
    getPrototype$1 = _getPrototype,
    getSymbols$1 = _getSymbols,
    stubArray = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn$2;

var copyObject = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}

var _copySymbolsIn = copySymbolsIn$1;

var arrayPush = _arrayPush,
    isArray$1 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$2;

var baseGetAllKeys$1 = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$1 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$1 = keysIn_1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn$1;

var getNative$3 = _getNative,
    root$4 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$3(root$4, 'DataView');

var _DataView = DataView$1;

var getNative$2 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$3, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Set$2 = getNative$1(root$2, 'Set');

var _Set = Set$2;

var getNative = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$2 = getNative(root$1, 'WeakMap');

var _WeakMap = WeakMap$2;

var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set$1 = _Set,
    WeakMap$1 = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$3 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$3 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$1 && getTag$3(new Map$1) != mapTag$3) ||
    (Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag$3(new Set$1) != setTag$3) ||
    (WeakMap$1 && getTag$3(new WeakMap$1) != weakMapTag$1)) {
  getTag$3 = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$3;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$3;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag$3;

/** Used for built-in method references. */

var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray$1;

var root = _root;

/** Built-in value references. */
var Uint8Array$1 = root.Uint8Array;

var _Uint8Array = Uint8Array$1;

var Uint8Array = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$3;

var cloneArrayBuffer$2 = _cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;

/** Used to match `RegExp` flags from their coerced string values. */

var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;

var Symbol$1 = _Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$1 = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$1:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag$1:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;

var isObject$1 = isObject_1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate$1 = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate$1;

var baseCreate = _baseCreate,
    getPrototype = _getPrototype,
    isPrototype = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject$1;

var getTag$2 = _getTag,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}

var _baseIsMap = baseIsMap$1;

var baseIsMap = _baseIsMap,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;

var isMap_1 = isMap$1;

var getTag$1 = _getTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var setTag$1 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}

var _baseIsSet = baseIsSet$1;

var baseIsSet = _baseIsSet,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

var isSet_1 = isSet$1;

var Stack = _Stack,
    arrayEach = _arrayEach,
    assignValue = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBufferExports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn = _getAllKeysIn,
    getTag = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isMap = isMap_1,
    isObject = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn = keysIn_1;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$1;

var baseClone = _baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

var cloneDeep_1 = cloneDeep;

var cloneDeep$1 = /*@__PURE__*/getDefaultExportFromCjs(cloneDeep_1);

const preProcessTree = (tree, separator = "->") => {
    const treeClone = cloneDeep$1(tree);
    const mappedUids = getRelations(tree, separator);
    return attachRelations(treeClone, mappedUids, separator);
};
const getChildrenUids = (composition) => {
    const uids = [];
    if (!composition.children) {
        return [];
    }
    const recursivelyIterateChildren = (children) => {
        children.forEach((child) => {
            uids.push(child.uid);
            if (child.children) {
                recursivelyIterateChildren(child.children);
            }
        });
    };
    recursivelyIterateChildren(composition.children);
    return uids;
};
const getParentsUids = (compositionUid, separator = "->") => {
    const currentIdSpilt = compositionUid.split(separator);
    return currentIdSpilt.map((_, index) => [...currentIdSpilt].splice(0, index + 1).join(separator));
};
const getRelations = (tree, separator = "->") => {
    const allRelations = [];
    let branch = [];
    let treeCopy = cloneDeep$1(tree);
    let isTreeEmpty = false;
    const firstChildOfItem = (childs) => {
        const firstChild = childs ? childs[0] : null;
        if (!firstChild) {
            return;
        }
        branch.push(firstChild.uid);
        if (firstChild.children && firstChild.children.length > 0) {
            firstChildOfItem(firstChild.children);
        }
        else {
            treeCopy = removeObject(treeCopy, firstChild.uid);
        }
    };
    while (!isTreeEmpty) {
        firstChildOfItem(treeCopy);
        allRelations.push([...new Set(branch)].join(separator));
        branch = [];
        isTreeEmpty = treeCopy.length === 0;
    }
    return allRelations;
};
const removeObject = (tree, uid) => {
    const loop = (childsArray) => {
        if (childsArray) {
            for (const [index] of childsArray.entries()) {
                if (childsArray[index].uid === uid) {
                    childsArray.splice(Number(index), 1);
                }
                else if (childsArray[index].children) {
                    loop(childsArray[index].children);
                }
            }
        }
    };
    loop(tree);
    return tree;
};
const attachRelations = (tree, relations, separator = "->") => {
    const recursivelyIterateChildren = (children) => {
        children.forEach((child) => {
            relations.forEach((relation) => {
                const relationUids = relation.split(separator);
                const lastUid = relationUids.at(-1);
                if (lastUid === child.uid) {
                    child.uid = relation;
                }
            });
            if (child.children) {
                recursivelyIterateChildren(child.children);
            }
        });
    };
    recursivelyIterateChildren(tree);
    return tree;
};

function RenderComposition({ uid, label, children, isFirstElement, selectedList, setSelectedList, expandedList, setExpandedList, indeterminate, preferredSeparator, parent, }) {
    const handleSelect = (treeItem) => {
        if (!selectedList.includes(treeItem.uid)) {
            const uids = [treeItem.uid, ...getChildrenUids(treeItem)];
            setSelectedList([...selectedList, ...uids]);
        }
        else {
            const uids = [
                treeItem.uid,
                ...getChildrenUids(treeItem),
                ...getParentsUids(treeItem.uid, preferredSeparator),
            ];
            setSelectedList(selectedList.filter((id) => !uids.includes(id)));
        }
    };
    const handleExpand = (clickedUid) => {
        if (expandedList.includes(clickedUid)) {
            setExpandedList(expandedList.filter((id) => id !== clickedUid));
        }
        else {
            setExpandedList([...expandedList, clickedUid]);
        }
    };
    React__default.useEffect(() => {
        if (children &&
            children.length > 0 &&
            children.every((child) => selectedList.includes(child.uid)) &&
            !selectedList.includes(uid)) {
            setSelectedList([...selectedList, uid]);
        }
    }, [selectedList, setSelectedList, parent, uid]);
    React__default.useEffect(() => {
        if (parent &&
            selectedList.includes(parent.uid) &&
            !selectedList.includes(uid)) {
            const childrenUids = getChildrenUids(parent);
            setSelectedList([...selectedList, ...childrenUids]);
        }
    }, [selectedList]);
    return (jsxRuntimeExports.jsxs(Indentation, { isRootElement: uid.split(preferredSeparator).length === 1, children: [jsxRuntimeExports.jsx(TreeItem, { isTopItem: !!isFirstElement, children: jsxRuntimeExports.jsxs(FlexContainer, { children: [jsxRuntimeExports.jsx("div", { css: { width: theme.spacing.spacing04 }, children: children && children.length > 0 ? (jsxRuntimeExports.jsx(HeaderIcon, { animate: expandedList.includes(uid), cursor: "pointer", onClick: () => handleExpand(uid), children: jsxRuntimeExports.jsx(SVGIcon, { name: "down" }) })) : (jsxRuntimeExports.jsx(HeaderIcon, { children: jsxRuntimeExports.jsx(MinusIcon, { children: jsxRuntimeExports.jsx(SVGIcon, { size: "sm", name: "minus" }) }) })) }), jsxRuntimeExports.jsx(CheckboxWrap, { children: jsxRuntimeExports.jsx(Checkbox, { isIndeterminate: indeterminate.includes(uid), checked: selectedList.includes(uid), id: uid, labelText: label, onChange: () => handleSelect({ uid, label, children }) }) })] }) }), expandedList.includes(uid) &&
                children &&
                children.length > 0 &&
                children.map((child) => (jsxRuntimeExports.jsx(RenderComposition, { parent: { uid, label, children }, setSelectedList: setSelectedList, setExpandedList: setExpandedList, selectedList: selectedList, expandedList: expandedList, preferredSeparator: preferredSeparator, indeterminate: indeterminate, ...child }, child.uid)))] }));
}

function CheckboxTree({ composition, expanded, selected, onChange, onExpand, preferredSeparator = "->", disabled, }) {
    const processedTree = React.useMemo(() => preProcessTree(composition, preferredSeparator), [composition, preferredSeparator]);
    const [selectedList, setSelectedList] = React.useState(selected ?? []);
    const [expandedList, setExpandedList] = React.useState(expanded ?? []);
    const [indeterminate, setIndeterminate] = React.useState([]);
    React.useEffect(() => {
        if (onChange) {
            onChange(selectedList);
        }
    }, [selectedList, onChange]);
    React.useEffect(() => {
        if (onExpand) {
            onExpand(expandedList);
        }
    }, [expandedList, onExpand]);
    const getParentsUidsMemo = React.useMemo(() => selected?.map((id) => getParentsUids(id, preferredSeparator)).flat(), [selected]);
    React.useEffect(() => {
        const allUids = getParentsUidsMemo ?? [];
        setIndeterminate(allUids);
    }, [selected]);
    return (jsxRuntimeExports.jsx(TreeWrap, { disabled: disabled, children: processedTree.map((comp, index) => (jsxRuntimeExports.jsx(RenderComposition, { selectedList: selected ?? [], expandedList: expanded ?? [], setSelectedList: setSelectedList, setExpandedList: setExpandedList, indeterminate: indeterminate, preferredSeparator: preferredSeparator, isFirstElement: index === 0, ...comp }, comp.uid))) }));
}

const mainCss = css `
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: ${theme.colors.accent};
    --rdp-background-color: ${theme.colors.primary};
    --rdp-accent-color-dark: ${theme.colors.accent};
    --rdp-background-color-dark: ${theme.colors.primary};
    --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75); /* Outline border for focused _and_ selected elements */

    margin: ${theme.spacing.spacing04};
  }

  /* Hide elements for devices that are not screen readers */
  .rdp-vhidden {
    box-sizing: border-box;
    margin: 0;
    background: transparent;
    appearance: none;
    position: absolute !important;
    top: 0;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    border: 0 !important;
  }

  /* Buttons */
  .rdp-button_reset {
    appearance: none;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: default;
    color: ${theme.color.text};
    outline: none;
    background: none;
    font: inherit;
  }

  .rdp-button {
    border: 2px solid transparent;
  }

  .rdp-button[disabled] {
    opacity: 0.25;
  }

  .rdp-button:not([disabled]) {
    cursor: pointer;
  }

  .rdp-button:focus:not([disabled]),
  .rdp-button:active:not([disabled]) {
    color: ${theme.colors.lights[0]};
    border: var(--rdp-outline);
    background-color: var(--rdp-background-color);
  }

  .rdp-button:hover:not([disabled]) {
    color: ${theme.colors.lights[0]};
    background-color: var(--rdp-background-color);
  }

  .rdp-months {
    display: flex;
  }

  .rdp-month {
    margin: 0 ${theme.spacing.spacing04};
  }

  .rdp-month:first-child {
    margin-left: 0;
  }

  .rdp-month:last-child {
    margin-right: 0;
  }

  .rdp-table {
    margin: 0;
    max-width: calc(var(--rdp-cell-size) * 7);
    border-collapse: collapse;
  }

  .rdp-with_weeknumber .rdp-table {
    max-width: calc(var(--rdp-cell-size) * 8);
    border-collapse: collapse;
  }

  .rdp-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    text-align: left;
  }

  .rdp-multiple_months .rdp-caption {
    position: relative;
    display: block;
    text-align: center;
  }

  .rdp-caption_dropdowns {
    position: relative;
    display: inline-flex;
  }

  .rdp-caption_label {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    margin: 0;
    padding: 0 ${theme.spacing.spacing01};
    white-space: nowrap;
    color: currentColor;
    border: 2px solid transparent;
    font-family: ${theme.fonts.body};
    font-size: 140%;
    font-weight: bold;
  }

  .rdp-nav {
    white-space: nowrap;
  }

  .rdp-multiple_months .rdp-caption_start .rdp-nav {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .rdp-multiple_months .rdp-caption_end .rdp-nav {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .rdp-nav_button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
    padding: ${theme.spacing.spacing01};
    border-radius: 100%;
  }

  /* ---------- */
  /* Dropdowns  */
  /* ---------- */

  .rdp-dropdown_year,
  .rdp-dropdown_month {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .rdp-dropdown {
    appearance: none;
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    opacity: 0;
    border: none;
    background-color: transparent;
    font-family: ${theme.fonts.body};
    font-size: inherit;
    line-height: inherit;
  }

  .rdp-dropdown[disabled] {
    opacity: unset;
    color: unset;
  }

  .rdp-dropdown:focus:not([disabled]) + .rdp-caption_label,
  .rdp-dropdown:active:not([disabled]) + .rdp-caption_label {
    border: var(--rdp-outline);
    border-radius: 6px;
    background-color: var(--rdp-background-color);
  }

  .rdp-dropdown_icon {
    margin: 0 0 0 5px;
  }

  .rdp-head {
    border: 0;
  }

  .rdp-head_row,
  .rdp-row {
    height: 100%;
  }

  .rdp-head_cell {
    vertical-align: middle;
    text-transform: uppercase;
    font-size: ${theme.fontSizes.sm};
    font-weight: 700;
    text-align: center;
    height: var(--rdp-cell-size);
    padding: 0;
  }

  .rdp-tbody {
    border: 0;
  }

  .rdp-tfoot {
    margin: ${theme.spacing.spacing02};
  }

  .rdp-cell {
    width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
    padding: 0;
    text-align: center;
  }

  .rdp-weeknumber {
    font-size: ${theme.fontSizes.sm};
  }

  .rdp-weeknumber,
  .rdp-day {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: var(--rdp-cell-size);
    max-width: var(--rdp-cell-size);
    height: var(--rdp-cell-size);
    margin: 0;
    border: 2px solid transparent;
    border-radius: 100%;
  }

  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: bold;
  }

  .rdp-day_selected:not([disabled]),
  .rdp-day_selected:focus:not([disabled]),
  .rdp-day_selected:active:not([disabled]),
  .rdp-day_selected:hover:not([disabled]) {
    color: ${theme.colors.lights[0]};
    background-color: var(--rdp-accent-color);
  }

  .rdp-day_selected:focus:not([disabled]) {
    border: var(--rdp-outline-selected);
  }

  .rdp:not([dir="rtl"]) .rdp-day_range_start:not(.rdp-day_range_end) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rdp:not([dir="rtl"]) .rdp-day_range_end:not(.rdp-day_range_start) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rdp[dir="rtl"] .rdp-day_range_start:not(.rdp-day_range_end) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rdp[dir="rtl"] .rdp-day_range_end:not(.rdp-day_range_start) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rdp-day_range_end.rdp-day_range_start {
    border-radius: 100%;
  }

  .rdp-day_range_middle {
    border-radius: 0;
  }
`;

const DatepickerWrapper = styled.div `
  ${mainCss}
`;
function Datepicker({ children, ...props }) {
    return jsxRuntimeExports.jsx(DatepickerWrapper, { ...props, children: children });
}

const setStatusColor = (status) => {
    if (status === "danger") {
        return css `
      border: 1px solid ${theme.color.border.error};
    `;
    }
    if (status === "success") {
        return css `
      border: 1px solid ${theme.color.border.input};
    `;
    }
};
const InputGroup = styled(FlexContainer) `
  position: relative;
  align-items: center;
  border: 1px solid ${theme.color.border.input};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  background: ${theme.color.field.default};
  transition: ${theme.transition};
  overflow: hidden;
  border-width: ${(props) => props.noBorder && "0"};

  &:hover {
    border: 1px solid ${theme.color.border.focus};
  }

  &:focus {
    outline: 0;
    border: 1px solid ${theme.color.border.focus};
  }

  &:disabled {
    color: ${theme.color.text.text03};
    background: ${theme.color.field.disabled};
    border: 1px solid ${theme.color.border.input};
    cursor: not-allowed;
  }

  ${({ status }) => status &&
    css `
      ${setStatusColor(status)}
    `};
  ${({ popup }) => popup &&
    css `
      cursor: pointer;
    `};
  ${space};
`;
// Autofill selector styles need to be divided in two separate selectors
const autofillCss = css `
  box-shadow: 0 0 0 1rem ${theme.color.background.ui03} inset;
  -webkit-text-fill-color: ${theme.color.text.text01};
`;
const StyledInput = styled.input `
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-family: ${theme.typography.fonts.body};
  font-size: ${(props) => props.small ? theme.fontSizes.sm : theme.fontSizes.md};
  line-height: ${(props) => props.small ? "1rem" : theme.lineHeight};
  padding: 0;
  margin: 0;
  transition: ${theme.transition};
  color: ${theme.color.text.text01};
  color-scheme: ${theme.color.scheme};

  &::placeholder {
    color: ${theme.color.text.text03};
  }

  &:-webkit-autofill {
    ${autofillCss}
  }

  &:autofill {
    ${autofillCss}
  }

  &:hover,
  &:focus {
    outline: 0;
    border: 0;
  }

  &:disabled {
    color: ${theme.color.text.text03};
    background: transparent;
    border: 0;
    cursor: not-allowed;
  }

  ${({ type }) => type === "search" &&
    css `
      margin-left: ${theme.spacing.spacing02};
    `}

  ${({ popup }) => popup &&
    css `
      cursor: pointer;
    `}
`;
const Clear$1 = styled.button `
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.spacing02};
  background: none;
  border: none;
  margin-left: auto;
  outline: none;
  cursor: pointer;
`;

const Input = React.forwardRef(({ noBorder, type, popup, status, loading, onClick, small, showClearButton, onClear = () => undefined, icon, ...props }, ref) => {
    return (jsxRuntimeExports.jsxs(InputGroup, { status: status, noBorder: noBorder, popup: popup, children: [type === "search" && !loading && jsxRuntimeExports.jsx(SVGIcon, { name: "search", size: "smd" }), type === "search" && loading && jsxRuntimeExports.jsx(Spinner, {}), jsxRuntimeExports.jsx(StyledInput, { ref: ref, type: type, popup: popup, small: small, onClick: onClick, ...props }), showClearButton && (jsxRuntimeExports.jsx(Clear$1, { title: `Clear ${props.name ?? ""} value`, role: "button", type: "button", onClick: onClear, children: jsxRuntimeExports.jsx(SVGIcon, { size: "sm", name: "close" }) })), status && jsxRuntimeExports.jsx(SVGIcon, { name: status, size: "smd" }), icon && (jsxRuntimeExports.jsx(SVGIcon, { size: "sm", name: icon, css: { pointerEvents: "none" } }))] }));
});

const StyledUpload = styled.div `
  color: ${theme.color.text.text01};
  background: ${theme.color.field.default};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};

  input[type="file"] {
    display: none;
  }
`;
const StyledLabel$1 = styled.label `
  position: relative;
  border: ${theme.borders.disabled};
  border-radius: ${theme.radiusDefault};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem;
`;
const Upload = React.forwardRef(({ placeholder, id = "upload-file", ...props }, ref) => (jsxRuntimeExports.jsxs(StyledUpload, { children: [jsxRuntimeExports.jsxs(StyledLabel$1, { htmlFor: id, children: [placeholder, jsxRuntimeExports.jsx(SVGIcon, { name: "plus" })] }), jsxRuntimeExports.jsx(StyledInput, { type: "file", id: id, ...props, ref: ref })] })));

const ButtonWrapper = styled.div `
  margin: -0.25rem -0.25rem -0.25rem 0.5rem;
`;
const InputSearch = React.forwardRef(({ noBorder, type = "search", popup, status, loading, onClick, onSearch, small, icon = "search", ...props }, ref) => {
    return (jsxRuntimeExports.jsxs(InputGroup, { status: status, noBorder: noBorder, popup: popup, children: [loading && jsxRuntimeExports.jsx(Spinner, {}), jsxRuntimeExports.jsx(StyledInput, { ref: ref, type: type, popup: popup, small: small, onClick: onClick, ...props }), jsxRuntimeExports.jsx(ButtonWrapper, { children: jsxRuntimeExports.jsx(Button, { size: "md", severity: "low", icon: icon, onClick: onSearch }) })] }));
});

const InputPassword = React.forwardRef(({ noBorder, popup, status, onClick, small, showPasswordOnInit = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(showPasswordOnInit);
    return (jsxRuntimeExports.jsxs(InputGroup, { status: status, noBorder: noBorder, popup: popup, children: [jsxRuntimeExports.jsx(StyledInput, { ref: ref, type: showPassword ? "text" : "password", popup: popup, small: small, onClick: onClick, ...props }), jsxRuntimeExports.jsx(Clear$1, { title: showPassword ? "Hide password" : "Show password", type: "button", onClick: () => setShowPassword((prev) => !prev), children: jsxRuntimeExports.jsx(SVGIcon, { size: "md", name: showPassword ? "eye" : "eyeClose" }) })] }));
});

const StyledDescription = styled(Container$4) `
  font-size: ${theme.fontSizes.sm};
  color: ${theme.color.text.text02};
  margin: ${theme.spacing.spacing02} 0;
  width: 100%;
`;
function Description({ children }) {
    return jsxRuntimeExports.jsx(StyledDescription, { children: children });
}

const StyledLabel = styled.label `
  line-height: ${theme.lineHeight};
  color: ${theme.color.text.text01};
  margin-bottom: ${theme.spacing.spacing02};
  text-transform: ${theme.typography.titleCase};

  ${({ required }) => required &&
    css `
      &:after {
        content: "*";
        color: ${theme.color.text.error};
        margin-left: ${theme.spacing.spacing01};
      }
    `}
`;
function Label({ name = "Label", required = false, ...props }) {
    return (jsxRuntimeExports.jsx(FlexContainer, { children: jsxRuntimeExports.jsx(StyledLabel, { required: required, ...props, children: name }) }));
}

const Spacer = styled.div `
  box-sizing: border-box;
  min-width: 0;
  ${(props) => css `
    height: ${props.height};
    width: ${props.width};
    background: ${props.bgColor || "transparent"};
    border: ${props.border};
    margin: ${props.margin};
  `}
`;

function getOptionValue(option, key = "value") {
    if (option === undefined) {
        return undefined;
    }
    return typeof option === "string" ? option : option[key];
}

const DropdownWrapper = styled(Container$4) `
  position: relative;
  ${space}
`;
const DropdownButton = styled.button `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.color.field.default};
  border: 1px solid ${theme.color.border.input};
  border-radius: ${theme.radiusDefault};
  line-height: 1.5em;
  font-size: inherit;
  color: ${theme.color.text.text01};
  padding: ${theme.spacing.spacing02};
  cursor: pointer;
  transition: ${theme.transition};

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: ${theme.spacing.spacing01};
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.color.border.focus};
  }

  &:hover {
    border-color: ${theme.color.border.border02};
    color: ${theme.color.text.text01};
  }

  &:active {
    border-color: ${theme.color.border.border02};
    color: ${theme.color.text.text01};
  }

  ${({ disabled }) => disabled &&
    css `
      background: ${theme.color.interactive.disabled};
      border: 1px solid ${theme.color.border.input};
      color: ${theme.color.text.text03};
      cursor: not-allowed;

      &:hover {
        background: ${theme.color.interactive.disabled};
        color: ${theme.color.text.text03};
      }
    `}

  ${({ size }) => size &&
    css `
      padding: ${getPadding(size)};
      font-size: ${theme.fontSizes.sm};
    `}
`;
const getPadding = (size) => {
    switch (size) {
        case "sm":
            return `5px ${theme.spacing.spacing02}`;
        case "xs":
            return `1px ${theme.spacing.spacing01}`;
        default:
            return `1px ${theme.spacing.spacing01}`;
    }
};
const DropdownIcon = styled.div `
  transition: ${theme.transition};
  display: flex;
  align-items: center;
  justify-items: center;
  ${({ animate }) => animate &&
    css `
      transform: rotate(180deg);
      transform-origin: center center;
    `};
`;
const DropdownMenu = styled(Container$4) `
  text-align: left;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  box-sizing: border-box;
  position: absolute;
  padding: ${theme.spacing.spacing02};
  border: 1px solid ${theme.color.border.input};
  color: ${theme.color.text.text01};
  font-weight: ${theme.fontWeights.regular};
  border-radius: ${theme.radiusDefault};
  background: ${theme.color.background.ui01};
  z-index: ${theme.zindex.default};
  transition: ${theme.transition};
  box-shadow: ${theme.shadow.shadow04};
  margin-top: ${theme.spacing.spacing01};
`;
const Inner$2 = styled.span `
  margin-right: 1rem;
`;
const Clear = styled.span `
  position: absolute;
  top: 0;
  bottom: 0;
  right: 2rem;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  background: none;
  border: none;
  margin-left: auto;
  appearance: button;

  ${({ size }) => size &&
    css `
      right: 1.25rem;
    `}
`;
const DropdownItem = styled.button `
  border: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  background: transparent;
  color: ${theme.color.text.text01};
  font-size: inherit;
  list-style: none;
  transition: ${theme.transition};
  line-height: 1.5rem;
  padding: ${theme.spacing.spacing01} ${theme.spacing.spacing02};
  border-radius: ${theme.radius.md};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.color.interactive.secondary};
  }

  ${({ size }) => size &&
    css `
      padding: 0 ${theme.spacing.spacing01};
      font-size: ${theme.fontSizes.sm};
    `}
`;

function Dropdown({ value = "", name, options, disabled = false, title, onChange, onClear, minNumOfOptionsToShowSearchBox = 4, size, ...props }) {
    const { isOpen, close, toggle } = useDisclosure();
    const [search, setSearch] = React.useState("");
    const wrapper = React.useRef(null);
    useClickOutside({ ref: wrapper, active: isOpen, onClickAway: close });
    const displayValue = options.find((option) => {
        if (typeof option === "string") {
            return option === value;
        }
        return option.value === value;
    });
    const innerText = getOptionValue(displayValue, "label") ||
        getOptionValue(displayValue, "value") ||
        name;
    const showClearButton = onClear && displayValue;
    const showMenu = isOpen && !disabled;
    const showSearch = options && options.length >= minNumOfOptionsToShowSearchBox;
    return (jsxRuntimeExports.jsxs(DropdownWrapper, { ref: wrapper, value: value, ...props, children: [jsxRuntimeExports.jsxs(DropdownButton, { name: name, disabled: disabled, title: title, type: "button", size: size, onClick: () => !disabled && toggle(), children: [jsxRuntimeExports.jsx(Inner$2, { children: innerText }), showClearButton && (jsxRuntimeExports.jsx(Clear, { title: `Clear ${name} value`, role: "button", size: size, onClick: () => onClear?.(), children: jsxRuntimeExports.jsx(SVGIcon, { size: "sm", name: "close" }) })), jsxRuntimeExports.jsx(DropdownIcon, { animate: isOpen, children: jsxRuntimeExports.jsx(SVGIcon, { name: "chevronDown", size: size && "sm" }) })] }), showMenu && (jsxRuntimeExports.jsxs(DropdownMenu, { children: [showSearch && (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Input, { type: "search", value: search, name: "filter", onChange: (event) => setSearch(event.target.value), small: true, 
                                // eslint-disable-next-line jsx-a11y/no-autofocus
                                autoFocus: true }), jsxRuntimeExports.jsx(Spacer, { height: theme.spacing.spacing02 })] })), options
                        ?.filter((option) => JSON.stringify(option)
                        .toLowerCase()
                        .includes(search.toLowerCase()))
                        .map((option) => {
                        const optionValue = getOptionValue(option);
                        return (jsxRuntimeExports.jsx(DropdownItem, { title: optionValue, value: optionValue, type: "button", size: size, onClick: () => {
                                // default empty string is used to satisfy typescript, we're lacking proper typing in props and getOptionValue
                                onChange(optionValue ?? "");
                                toggle();
                                setSearch("");
                            }, children: getOptionValue(option, "label") || optionValue }, optionValue));
                    })] }))] }));
}

const StyledSubmit = styled.input `
  background: ${theme.color.interactive.primary};
  font-family: ${theme.fonts.body};
  color: ${theme.color.text.text04};
  border: 1px solid ${theme.color.interactive.primary};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeight};
  margin: 0 ${theme.spacing.spacing02};
  transition: ${theme.transition};

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${theme.color.text.text03};
  }

  &:active {
    color: ${theme.color.text.text02};
  }

  &:disabled {
    background: ${theme.color.interactive.disabled};
    color: ${theme.color.text.text03};

    &:hover {
      color: ${theme.color.text.text03};
      cursor: not-allowed;
    }
  }
`;
function FormButtons({ children, ...props }) {
    return (jsxRuntimeExports.jsx(FlexContainer, { css: { margin: `${theme.spacing.spacing04} 0` }, justifyContent: "flex-end", ...props, children: children }));
}
function CancelButton({ name, ...props }) {
    return (jsxRuntimeExports.jsx(Button, { color: "danger", ...props, children: name || "Cancel" }));
}
function SubmitButton({ name, ...props }) {
    return (jsxRuntimeExports.jsx(StyledSubmit, { name: name || "Submit", ...props, ...(!props.type && { type: "submit" }) }));
}
function Form({ children, ...props }) {
    return jsxRuntimeExports.jsx(Container$4, { ...props, children: children });
}

const changeAttributes = (level) => {
    switch (level) {
        case 6:
            return theme.fontSizes.xs;
        case 5:
            return theme.fontSizes.sm;
        case 4:
            return theme.fontSizes.md;
        case 3:
            return theme.fontSizes.lg;
        case 2:
            return theme.fontSizes.xl;
        case 1:
            return theme.fontSizes.xxl;
        default:
            return theme.fontSizes.md;
    }
};
const StyledHeading = styled.h1 `
  color: ${theme.color.text.text01};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 0;
  text-rendering: optimizeLegibility;
  ${({ color }) => color &&
    css `
      color: ${color};
    `}
  ${({ level }) => level &&
    css `
      font-size: ${changeAttributes(level)};
    `};
  ${({ marginBottom }) => marginBottom &&
    css `
      margin-bottom: ${theme.spacing[marginBottom] || marginBottom};
    `};
  ${space}
`;
function Heading({ children, level, ...props }) {
    return (jsxRuntimeExports.jsx(StyledHeading, { as: level ? `h${level}` : "h1", level: level || 1, ...props, children: children }));
}

const StyledListItemTitle = styled.span `
  width: 11.25rem;
  color: ${theme.color.text.text02};
`;
const StyledListMarker = css `
  content: "";
  border-radius: 1px;
  width: 8px;
  min-width: 8px;
  height: 8px;
  margin: ${theme.spacing.spacing02};
  background-color: ${theme.color.text.text01};
`;
const StyledList = styled.ul `
  list-style: none;
  padding-left: ${theme.spacing.spacing05};
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? `row` : `column`)};
  ${space}
`;
const getListSpacing = (props) => {
    if (props.horizontal) {
        return props.spacing ?? `0 ${theme.spacing.spacing04} 0 0`;
    }
    return props.spacing ?? `0 0 ${theme.spacing.spacing02} 0`;
};
const StyledListItem = styled.li `
  font-family: ${theme.fonts.body};
  display: flex;
  margin: ${(props) => getListSpacing(props)};
  color: ${theme.color.text.text01};
  line-height: ${theme.typography.lineHeight};

  ${(props) => props.unordered
    ? css `
          &:before {
            ${StyledListMarker}
          }
        `
    : ``}
`;
const isNested = (item) => item.title !== undefined;
function List(props) {
    return (jsxRuntimeExports.jsx(StyledList, { ...props, children: props.items?.map((item, index) => {
            // Nested object
            if (isNested(item)) {
                return (jsxRuntimeExports.jsxs(React.Fragment, { children: [jsxRuntimeExports.jsx(ListItem$2, { ...props, ...item }), jsxRuntimeExports.jsx(List, { horizontal: props.horizontal, unordered: props.unordered, items: item.rowChildren })] }, `id-${item.title}`));
            }
            // List of strings or numbers
            return (jsxRuntimeExports.jsx(StyledListItem, { ...props, children: item }, index));
        }) }));
}
function ListItem$2(props) {
    return (jsxRuntimeExports.jsx(StyledListItem, { horizontal: props.horizontal || false, unordered: props.unordered || false, children: props.hasDescription ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(StyledListItemTitle, { children: props.title }), jsxRuntimeExports.jsx("span", { children: props.description })] })) : (jsxRuntimeExports.jsx("span", { children: props.title })) }));
}

function generateNumbers(limit) {
    return Array.from(Array(limit), (_e, i) => i + 1);
}
function ListLoader({ itemsNumber = 5, children }) {
    return (jsxRuntimeExports.jsx("div", { children: generateNumbers(itemsNumber).map((item) => (jsxRuntimeExports.jsx(ListItem$1, { children: children }, item))) }));
}
function DefaultItemsSkeleton() {
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("rect", { x: "70", y: "15", rx: "5", ry: "5", width: "300", height: "15" }), jsxRuntimeExports.jsx("rect", { x: "70", y: "39", rx: "5", ry: "5", width: "220", height: "9" }), jsxRuntimeExports.jsx("rect", { x: "20", y: "10", rx: "0", ry: "0", width: "40", height: "40" })] }));
}
function ListItem$1({ children = jsxRuntimeExports.jsx(DefaultItemsSkeleton, {}) }) {
    return (jsxRuntimeExports.jsx(ContentLoader, { speed: 2, backgroundColor: theme.color.background.ui02, foregroundColor: theme.color.background.ui04, style: { width: "100%", height: "80px" }, children: children }));
}

const changeTag = (tag) => {
    if (tag !== "p") {
        return "0";
    }
    return theme.spacing.spacing04;
};
const basicStyles = css `
  text-rendering: optimizeLegibility;
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.md};
  margin: 0 0 ${theme.spacing.spacing04} 0;
  color: ${(props) => props.color || theme.color.text.text01};
`;
const StyledText = styled.p `
  ${basicStyles}
  ${({ size }) => size &&
    css `
      font-size: ${theme.fontSizes[size]};
    `}
  ${({ display }) => display &&
    css `
      display: ${display};
    `}
  ${({ tag }) => tag &&
    css `
      margin-bottom: ${changeTag(tag)};
    `}
  ${({ weight }) => weight &&
    css `
      font-weight: ${theme.fontWeights[weight]};
    `}
  ${({ textStyle }) => textStyle &&
    css `
      font-style: ${textStyle};
    `}
  ${({ align }) => align &&
    css `
      text-align: ${align};
    `}
  ${({ color }) => color &&
    css `
      color: ${theme.colors[color] || color};
    `}
  ${({ lineHeight }) => lineHeight &&
    css `
      line-height: ${lineHeight};
    `}
  ${({ width }) => width &&
    css `
      width: ${width};
    `}
  ${({ nowrap }) => nowrap &&
    css `
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `} 
  ${({ isTitle }) => isTitle &&
    css `
      text-transform: ${theme.typography.titleCase};
    `}
  ${space}
`;
const StyledCode = styled.code `
  ${basicStyles};
  font-family: ${theme.fonts.body};
  font-size: inherit;
`;
function Text({ tag = "p", children, ...props }) {
    return (jsxRuntimeExports.jsx(StyledText, { as: tag, tag: tag, color: "currentColor", ...props, children: children }));
}
function Code({ children, ...props }) {
    return jsxRuntimeExports.jsx(StyledCode, { ...props, children: children });
}

function Loader({ inContent, isBackground, ...props }) {
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [inContent ? (jsxRuntimeExports.jsxs(FlexContainer, { children: [jsxRuntimeExports.jsx(Spinner, {}), jsxRuntimeExports.jsx(Text, { weight: "medium", tag: "div", style: { marginLeft: "1rem" }, children: "Loading ..." })] })) : (jsxRuntimeExports.jsx(LoaderPosition, { ...props, children: jsxRuntimeExports.jsx(Box, { shadow: "shadow04", children: jsxRuntimeExports.jsxs(FlexContainer, { children: [jsxRuntimeExports.jsx(Spinner, { ninja: true, size: "xl" }), jsxRuntimeExports.jsxs("div", { style: { marginLeft: "1rem" }, children: [jsxRuntimeExports.jsx(Text, { size: "sm", tag: "div", children: "Please wait" }), jsxRuntimeExports.jsx(Text, { weight: "medium", tag: "div", children: "Loading ..." })] })] }) }) })), !inContent && isBackground && (jsxRuntimeExports.jsx(LoaderOverlay, { isBackground: isBackground, children: jsxRuntimeExports.jsx(LoaderPosition, { ...props, children: jsxRuntimeExports.jsx(Box, { shadow: "shadow04", children: jsxRuntimeExports.jsxs(FlexContainer, { children: [jsxRuntimeExports.jsx(Spinner, { ninja: true, size: "xl" }), jsxRuntimeExports.jsxs("div", { style: { marginLeft: "1rem" }, children: [jsxRuntimeExports.jsx(Text, { size: "sm", tag: "div", children: "Please wait" }), jsxRuntimeExports.jsx(Text, { weight: "medium", tag: "div", children: "Loading ..." })] })] }) }) }) }))] }));
}
const changePosition = (position) => {
    switch (position) {
        case "top-left":
            return `
      left: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
        case "top-right":
            return `
      left: auto;
      right: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
        case "bottom-right":
            return `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      left: auto;
      right: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
        case "bottom-center":
            return `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      `;
        case "bottom-left":
            return `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      left: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
        default:
            return `
      top: ${theme.spacing.spacing08};
      left:50%;
      margin-left: -7rem;
      `;
    }
};
const LoaderPosition = styled.div `
  width: 14rem;
  position: fixed;
  z-index: ${theme.zindex.topoftheworld};
  top: ${theme.spacing.spacing08};
  left: 50%;
  margin-left: -7rem;
  ${({ position }) => position &&
    css `
      ${changePosition(position)}
    `};
`;
const LoaderOverlay = styled.div `
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: ${theme.zindex.topoftheworld};
`;

const StyledPaginationBox = styled.nav `
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex: ${({ sidebar }) => (sidebar ? 1 : 0)};
  background-color: ${theme.color.background.ui03};
  padding: ${theme.spacing.spacing03};
  border: ${({ sidebar }) => sidebar ? "none" : `1px solid ${theme.color.border.border01}`};
  justify-content: ${({ small }) => (small ? "center" : "space-between")};
  border-radius: ${theme.radius.md};
  align-items: center;

  .pagination-result,
  .pagination-show {
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.color.text.text02};
    margin: 0 ${theme.spacing.spacing02} 0 0;
    line-height: ${theme.lineHeight};
  }

  .pagination-result {
    width: 12rem;
  }

  .pagination-per-page {
    display: flex;
    align-items: center;
  }

  .pagination-list {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  ${bp("lg") `
    .center-absolutely {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
  `}

  button {
    display: flex;
    align-items: center;
    border: 0;
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.typography.fonts.body};
    color: ${theme.color.text.text01};
    line-height: ${theme.lineHeight};
    padding: ${theme.spacing.spacing02};
    border-radius: ${theme.radius.md};
    margin: 0 ${theme.spacing.spacing01};
    background-color: ${theme.color.background.ui03};

    &:active {
      background-color: ${theme.color.interactive.secondaryActive};
    }

    &:focus {
      outline: 0;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      cursor: pointer;
      background-color: ${theme.color.interactive.secondaryHover};
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }

    span {
      min-width: 1.125rem;
      text-align: center;
    }

    &.current {
      background-color: ${theme.color.interactive.primary};
      color: ${theme.color.text.text04};
      font-weight: ${theme.fontWeights.medium};

      &:hover {
        background-color: ${theme.color.interactive.primaryHover};
        color: ${theme.color.text.text03};
      }
    }

    &.pagination-first,
    &.pagination-prev,
    &.pagination-last,
    &.pagination-next {
      background-color: transparent;
    }

    &.pagination-first {
      padding-left: ${theme.spacing.spacing01};

      svg {
        padding-left: 0;
        width: 1rem;
        height: 1rem;
      }
    }

    &.pagination-last {
      padding-right: ${theme.spacing.spacing01};

      svg {
        padding-right: 0;
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .dots {
    margin: 0 ${theme.spacing.spacing02};

    > * {
      margin-top: 0.125rem;
    }
  }
`;

function PaginationAmount({ from, size, count, firstPage = 0, style, }) {
    const isFirstPageZero = firstPage === 0;
    const s = Number(size);
    const c = firstPage * s;
    const offset = isFirstPageZero ? 0 : s;
    const minCurrentPage = count < s ? 1 : from + 1 - offset;
    const maxCurrentPage = count < s ? count : Math.min(from + 1 + s) - c - 1;
    const min = minCurrentPage < 1 ? 1 : minCurrentPage;
    const max = maxCurrentPage < 1 ? size : maxCurrentPage;
    return (jsxRuntimeExports.jsxs("div", { className: "pagination-result", style: style, children: [min, " - ", max > count ? count : max, " of ", count] }));
}

function PerPage({ size, set }) {
    return (jsxRuntimeExports.jsxs("nav", { className: "pagination-per-page", role: "navigation", "aria-label": "pagination", children: [jsxRuntimeExports.jsx("div", { className: "pagination-show", children: "Show:" }), [10, 20, 50].map((element) => (jsxRuntimeExports.jsx("button", { type: "button", className: `pagination-link ${element.toString() === size.toString() ? `current` : ""}`, onClick: () => set(element), children: jsxRuntimeExports.jsx("span", { children: element }) }, element)))] }));
}

const Container$3 = styled(StyledPaginationBox) `
  justify-content: ${({ hideCount }) => hideCount ? "center" : "space-between"};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  min-height: 36px;
`;
const ButtonsContainer = styled.div `
  display: flex;
  gap: ${theme.spacing.spacing02};
`;
function extractButtonProps(props) {
    if (!props) {
        return { disabled: false, rest: {} };
    }
    const { disabled, children: ignoredChildren, onClick: ignoredOnClick, initialState: ignoredInitialState, ...rest } = props;
    return { disabled: !!disabled, rest };
}
function LoadMore({ currentCount, total, onLoadMore, onLoadLess, onShowAll, isLoading = false, hideCount = false, className, showMoreLabel = "Show more", showAllLabel = "Show all", showLessLabel = "Show less", showMoreButtonProps, showAllButtonProps, showLessButtonProps, }) {
    const hasMoreItems = currentCount < total;
    const showLessButton = onLoadLess && currentCount === total && total > 0;
    const { disabled: isMoreDisabled, rest: restShowMoreProps } = extractButtonProps(showMoreButtonProps);
    const { disabled: isAllDisabled, rest: restShowAllProps } = extractButtonProps(showAllButtonProps);
    const { disabled: isLessDisabled, rest: restShowLessProps } = extractButtonProps(showLessButtonProps);
    const baseButtonProps = {
        severity: "medium",
        size: "sm",
        style: { margin: 0 },
        initialState: isLoading ? "loading" : undefined,
    };
    return (jsxRuntimeExports.jsxs(Container$3, { className: className, small: false, hideCount: hideCount, children: [!hideCount && (jsxRuntimeExports.jsx(PaginationAmount, { from: 0, size: currentCount, count: total, style: { width: "auto" } })), (hasMoreItems || showLessButton) && (jsxRuntimeExports.jsxs(ButtonsContainer, { children: [hasMoreItems && (jsxRuntimeExports.jsx(Button, { ...baseButtonProps, status: "warning", icon: "chevronDown", "aria-label": "Show more items", disabled: isLoading || isMoreDisabled, onClick: onLoadMore, ...restShowMoreProps, children: showMoreLabel })), hasMoreItems && onShowAll && (jsxRuntimeExports.jsx(Button, { ...baseButtonProps, icon: "chevronDown", "aria-label": "Show all items", disabled: isLoading || isAllDisabled, onClick: onShowAll, ...restShowAllProps, children: showAllLabel })), showLessButton && (jsxRuntimeExports.jsx(Button, { ...baseButtonProps, icon: "chevronUp", "aria-label": "Show less items", disabled: isLoading || isLessDisabled, onClick: onLoadLess, ...restShowLessProps, children: showLessLabel }))] }))] }));
}

const Container$2 = styled.div `
  font-family: ${theme.fonts.body};
  padding: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui01};
  border-radius: ${theme.radius.md};
`;
const ListContainer = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.spacing03} 0;
`;
const ListItem = styled.li `
  padding: ${theme.spacing.spacing03};
  background-color: ${theme.color.background.ui02};
  border: 1px solid ${theme.color.border.border01};
  margin-bottom: ${theme.spacing.spacing02};
  border-radius: ${theme.radius.md};
  color: ${theme.color.text.text01};

  &:last-child {
    margin-bottom: 0;
  }
`;
/**
 * Example component showing how to use LoadMore with a list
 */
function LoadMoreList({ initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"], totalItems = 15, batchSize = 5, loadingDelay = 1000, withShowAll = false, }) {
    const [items, setItems] = React.useState(initialItems);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleLoadMore = () => {
        setIsLoading(true);
        // Simulate API call delay
        setTimeout(() => {
            const itemsLeft = totalItems - items.length;
            const itemsToAdd = Math.min(batchSize, itemsLeft);
            if (itemsToAdd > 0) {
                const nextBatch = Array.from({ length: itemsToAdd }, (_, index) => `Item ${items.length + index + 1}`);
                setItems([...items, ...nextBatch]);
            }
            setIsLoading(false);
        }, loadingDelay);
    };
    const handleShowAll = () => {
        setIsLoading(true);
        setTimeout(() => {
            const itemsLeft = totalItems - items.length;
            if (itemsLeft > 0) {
                const allNextItems = Array.from({ length: itemsLeft }, (_, index) => `Item ${items.length + index + 1}`);
                setItems([...items, ...allNextItems]);
            }
            setIsLoading(false);
        }, loadingDelay);
    };
    const handleLoadLess = () => {
        setItems(items.slice(0, batchSize));
    };
    return (jsxRuntimeExports.jsxs(Container$2, { children: [jsxRuntimeExports.jsx(ListContainer, { children: items.map((item) => (jsxRuntimeExports.jsx(ListItem, { children: item }, item))) }), jsxRuntimeExports.jsx(LoadMore, { currentCount: items.length, total: totalItems, isLoading: isLoading, onLoadMore: handleLoadMore, onShowAll: withShowAll ? handleShowAll : undefined, onLoadLess: items.length > batchSize ? handleLoadLess : undefined })] }));
}

const getBorderColor = (status) => {
    switch (status) {
        case "notification":
            return theme.color.border.info;
        case "danger":
            return theme.color.border.error;
        default:
            return status ? theme.color.border[status] : theme.color.border.border01;
    }
};
const getTextColor = (status) => {
    switch (status) {
        case "notification":
            return theme.color.text.info;
        case "danger":
            return theme.color.text.error;
        case "discovery":
            return theme.color.text.text01;
        default:
            return status ? theme.color.text[status] : theme.color.text.text01;
    }
};
const MessageWrapper = styled.div `
  display: flex;
  align-items: flex-start;
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing03};
  line-height: 150%;
  border: 1px solid;
  border-left-width: 4px;
  background: ${theme.color.background.ui03};
  border-color: ${({ status }) => getBorderColor(status)};
  color: ${({ status }) => getTextColor(status)};

  ${({ borderColor }) => borderColor &&
    css `
      border: 1px solid ${borderColor};
      border-left-width: 4px;
    `}
  ${({ background }) => background &&
    css `
      background: ${background};
    `}
  ${({ color }) => color &&
    css `
      color: ${color};
    `}
`;
const IconBox = styled.div `
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.spacing03};

  svg {
    fill: currentColor;
  }
`;
const Align = styled.div `
  margin-bottom: auto;
`;
function Message({ children, image, ...props }) {
    return (jsxRuntimeExports.jsxs(MessageWrapper, { ...props, children: [image && (jsxRuntimeExports.jsx(Align, { children: jsxRuntimeExports.jsx(IconBox, { children: jsxRuntimeExports.jsx(SVGIcon, { name: image }) }) })), children] }));
}

const StyledModal = styled.div `
  top: 50%;
  left: 50%;
  position: fixed;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  overflow: visible;
  z-index: ${theme.zindex.topoftheworld};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;
const showTranslateY = keyframes `
  from {
    transform: translate3d(0,1.4rem,0);
    opacity: 0;
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;
const ModalBox = styled(Box) `
  min-width: ${({ modalMinWidth }) => modalMinWidth || "32rem"};
  max-width: 95vw;
  overflow: auto;
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  opacity: 0;
  animation: ${showTranslateY} 0.2s ease-in-out forwards;
`;
const ModalCloseButton = styled(Button) `
  padding: ${theme.spacing.spacing01};
`;
const ModalAction = styled(Button) `
  margin-left: ${theme.spacing.spacing04};

  &:first-child {
    margin-left: auto;
  }
`;
const ModalActions = styled.div `
  position: sticky;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  background-color: ${theme.color.background.ui01};
  width: 100%;
  display: flex;
  padding: ${theme.spacing.spacing07} 0 0 0;
`;
const Background = styled.div `
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: ${theme.color.background.overlay};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: ${theme.transition};
  opacity: ${({ isVisible }) => (isVisible ? 0.7 : 0)};
  z-index: ${({ zIndex = "overlay" }) => theme.zindex[zIndex]};
`;
const ModalContent = styled.div `
  max-height: ${({ contentMaxHeight }) => contentMaxHeight || "25rem"};
  overflow-y: auto;
  text-align: ${({ alignText }) => alignText || "left"};
`;
const ModalHeading$1 = styled(Heading) `
  margin: 0;
`;
const ModalHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem;
  margin-bottom: ${theme.spacing.spacing04};
  border-bottom: 1px solid ${theme.color.border.border01};
  text-transform: ${theme.typography.titleCase};
  margin-left: -1rem;
  margin-right: -1rem;

  ${ModalCloseButton} {
    margin-left: auto;
  }
`;

function Modal({ children, contentLabel, actions, modalMinWidth, contentMaxHeight, alignText, onClose, ...props }) {
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Background, { zIndex: "modal", isVisible: props.isOpen, onClick: onClose }), jsxRuntimeExports.jsx(StyledModal, { ...props, children: props.isOpen && (jsxRuntimeExports.jsxs(ModalBox, { modalMinWidth: modalMinWidth, innerSpacing: "spacing04", shadow: "shadow04", children: [jsxRuntimeExports.jsxs(ModalHeader, { children: [jsxRuntimeExports.jsx(ModalHeading$1, { level: 4, children: contentLabel }), jsxRuntimeExports.jsx(Button, { severity: "low", size: "md", icon: "close", title: "Close", onClick: onClose })] }), jsxRuntimeExports.jsx(ModalContent, { alignText: alignText, contentMaxHeight: contentMaxHeight, children: children }), actions && (jsxRuntimeExports.jsx(ModalActions, { children: actions
                                ?.sort((a, b) => a.order || 0 - b.order || 0)
                                .map((action, index) => (jsxRuntimeExports.jsx(ModalAction, { title: action.label, severity: action.severity, disabled: action.disabled, onClick: action.onAction, children: action.label }, `modal-action-${index}`))) }))] })) })] }));
}

const ModalHeading = styled(Heading) `
  margin: 0;
`;
function ModalConfirm({ children, contentLabel, actionLabel, alignText, onClose, confirm, ...props }) {
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Background, { zIndex: "modal", isVisible: props.isOpen, onClick: onClose }), jsxRuntimeExports.jsx(StyledModal, { ...props, children: props.isOpen && (jsxRuntimeExports.jsxs(ModalBox, { innerSpacing: "spacing04", shadow: "shadow04", children: [jsxRuntimeExports.jsxs(ModalHeader, { children: [jsxRuntimeExports.jsx(ModalHeading, { level: 4, children: contentLabel }), jsxRuntimeExports.jsx(Button, { severity: "low", size: "md", icon: "close", title: "Close", onClick: onClose })] }), jsxRuntimeExports.jsx(ModalContent, { alignText: alignText, children: children }), jsxRuntimeExports.jsxs(ModalActions, { children: [jsxRuntimeExports.jsx(ModalAction, { severity: "medium", type: "button", onClick: onClose, children: "Cancel" }), jsxRuntimeExports.jsx(ModalAction, { type: "button", onClick: confirm, children: actionLabel })] })] })) })] }));
}

const SelectContainer = styled.div `
  .react-select {
    &-container {
      & > .react-select__control {
        background: ${theme.color.field.default};
        border: 1px solid ${theme.color.border.input};
        ${({ isError }) => isError &&
    css `
            border: 1px solid ${theme.color.border.error};
          `}
        &:hover {
          border: 1px solid ${theme.color.border.border02};
        }
        &:focus {
          border: 1px solid ${theme.color.border.focus};
          outline: none;
        }
        &--is-disabled {
          background: ${theme.color.interactive.disabled};
        }
      }
    }
    &__value-container {
      color: ${theme.color.text.text01};
    }
    &__multi-value {
      padding: 0 0.125rem 0 ${theme.spacing.spacing02};
      margin: ${theme.spacing.spacing01};
      border-radius: 1rem;
      align-items: center;
      height: 1.5rem;

      &__label {
        padding-left: 0;
        padding-right: 0.375rem;
        font-size: ${theme.fontSizes.sm};
      }

      &__remove {
        width: 1.125rem;
        height: 1.125rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        svg {
          color: ${theme.color.text.text04};
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }
    &__placeholder {
      color: ${theme.color.text.text02};
    }
    &__single-value {
      color: ${theme.color.text.text01};
      font-size: ${theme.fontSizes.md};
      line-height: 1.5rem;
    }
    &__menu {
      box-shadow: ${theme.shadow.shadow04};
      margin-top: ${theme.spacing.spacing01};
      z-index: ${theme.zindex.dropdown};
      border-radius: ${theme.radiusDefault};
      background: ${theme.color.background.ui01};
      border: 1px solid ${theme.color.border.input};

      &-list {
        padding: ${theme.spacing.spacing02};
      }
    }
    &__option {
      margin-top: ${theme.spacing.spacing01};
      border-radius: ${theme.radius.md};
      &:active {
        background: ${theme.color.interactive.secondaryActive};
        color: ${theme.color.text.text01};
      }
      &--is-focused {
        cursor: pointer;
        background: ${theme.color.interactive.secondary};
        color: ${theme.color.text.text01};
      }
      &--is-selected {
        cursor: not-allowed;
        background: ${theme.color.interactive.secondaryActive};
        color: ${theme.color.text.text01};
        font-weight: 500;
        &:active {
          background: ${theme.color.interactive.secondaryActive};
          color: ${theme.color.text.text01};
        }
      }
    }
  }
`;
function getDefaultStyles() {
    return {
        input: (styles) => {
            return {
                ...styles,
                color: theme.color.text.text01,
            };
        },
        multiValue: (styles) => {
            return {
                ...styles,
                backgroundColor: theme.color.interactive.primary,
            };
        },
        multiValueRemove: (styles) => {
            return {
                ...styles,
                backgroundColor: theme.color.interactive.primaryActive,
                ":hover": {
                    backgroundColor: theme.color.interactive.primaryActive,
                },
            };
        },
        multiValueLabel: (styles) => {
            return {
                ...styles,
                color: theme.color.text.text04,
            };
        },
    };
}
function getOptionBgColor(isDisabled, isSelected, isFocused) {
    return (color) => {
        if (isDisabled) {
            return undefined;
        }
        if (isSelected) {
            return color;
        }
        if (isFocused) {
            return rgba(color, 0.1);
        }
        return undefined;
    };
}
/* taken from https://github.com/JedWatson/react-select/blob/master/docs/examples/StyledMulti.tsx */
const customMultiColorStyles = {
    ...getDefaultStyles(),
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const baseColor = data.color ?? theme.color.text.text01;
        const contrastingColor = getContrast(baseColor, "white") > 2 ? "white" : "black";
        const color = isSelected ? contrastingColor : baseColor;
        const activeSelectedBgColor = data.color ?? theme.color.interactive.secondary;
        const activeBgColor = isSelected
            ? activeSelectedBgColor
            : rgba(baseColor, 0.3);
        return {
            ...styles,
            backgroundColor: getOptionBgColor(isDisabled, isSelected, isFocused)(color),
            color: isDisabled ? theme.color.interactive.disabled : color,
            cursor: isDisabled ? "not-allowed" : "default",
            ":active": {
                ...styles[":active"],
                backgroundColor: isDisabled ? undefined : activeBgColor,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = data.color ?? theme.color.interactive.primary;
        return {
            ...styles,
            backgroundColor: color,
        };
    },
    multiValueRemove: (styles, { data }) => {
        const color = data.color ?? theme.color.interactive.primaryActive;
        return {
            ...styles,
            color,
            ":hover": {
                backgroundColor: color,
                color: "white",
            },
        };
    },
};
function SelectInner({ styles = getDefaultStyles(), ...props }, ref) {
    return (jsxRuntimeExports.jsx(SelectContainer, { isError: props.isError, children: jsxRuntimeExports.jsx(ReactSelect, { ref: ref, className: "react-select-container", classNamePrefix: "react-select", styles: styles, theme: (reactSelectTheme) => ({
                ...reactSelectTheme,
                colors: {
                    ...reactSelectTheme.colors,
                },
            }), ...props }) }));
}
const Select = React.forwardRef(SelectInner);

/* stylelint-disable no-descending-specificity */
const Item = styled.div `
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  line-height: ${theme.lineHeight};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
  border-radius: ${theme.radiusDefault};
  padding: 0 ${theme.spacing.spacing03};
  color: ${theme.color.text.text01};
  height: 2.5rem;
  vertical-align: middle;
  text-decoration: none;
  transition: ${theme.transition};
  text-transform: ${theme.typography.titleCase};

  * {
    margin-right: 0.8125rem;
  }

  &.separator {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.color.text.text02};
    margin-bottom: 0;
  }

  & + .separator {
    margin-top: -${theme.spacing.spacing02};
  }

  &:not(.separator) {
    &:hover {
      background-color: ${theme.color.interactive.secondary};
      text-decoration: none !important;
      color: ${theme.color.text.text01};
    }

    &:active,
    &:focus {
      background-color: ${theme.color.interactive.secondary};
      color: ${theme.color.text.text01};
    }

    &.active {
      background: ${theme.color.interactive.primary};
      color: ${theme.color.text.text04};
      * {
        fill: ${theme.color.text.text04};
      }
    }
  }

  &.hasBg {
    position: relative;
    background: ${theme.color.background.ui03};

    svg {
      position: absolute;
      right: 0;
      width: 1.25rem;
      height: 1.25rem;
      opacity: 0;
    }

    &:active,
    &:focus {
      background-color: ${theme.color.interactive.secondary};
      color: ${theme.color.text.text01};
    }

    &.active {
      background: ${theme.color.interactive.secondaryHover};
      color: ${theme.color.text.text01};
      * {
        opacity: 1;
        fill: ${theme.color.text.text01};
      }
    }
  }
`;
const Info = styled.span `
  width: 1.25rem;
  height: 1.25rem;
  background: ${theme.color.background.error};
  display: block;
  color: ${theme.color.text.text04};
  text-align: center;
  margin-left: auto;
  font-size: ${theme.fontSizes.sm};
  line-height: 1.25rem;
  border-radius: ${theme.radius.sm};
`;
const Container$1 = styled.div `
  margin: 0;
  padding-left: 0;
  display: flex;
  > * {
    margin-left: ${theme.spacing.spacing04};
    &:first-child {
      margin-left: 0;
    }
  }

  ${({ secondary }) => secondary &&
    css `
      width: 100%;
      display: block;
      > * {
        margin: 0 0 ${theme.spacing.spacing02};
      }
    `}

  ${({ popoverMenu }) => popoverMenu &&
    css `
      width: 100%;
      display: block;
      > * {
        margin: 0 0 ${theme.spacing.spacing01};
        padding: 0;
        height: 2rem;
        white-space: nowrap;

        svg {
          width: 1.125rem;
          height: 1.125rem;
          margin: 0 0.5rem;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    `}
`;
const Navigation = { Container: Container$1, Item, Info };

const PageTitleWrapper = styled.div `
  h3 {
    line-height: 2rem;
    font-weight: ${theme.fontWeights.medium};
    margin: 0 0 ${theme.spacing.spacing01};
  }
`;
function PageTitle({ title }) {
    return (jsxRuntimeExports.jsx(PageTitleWrapper, { children: jsxRuntimeExports.jsx(Heading, { level: 3, children: title }) }));
}
function PageTitleBreadcrumbs({ title, list, }) {
    return (jsxRuntimeExports.jsxs(Box, { innerSpacing: "spacing04", shadow: "shadow02", children: [jsxRuntimeExports.jsx(PageTitle, { title: title }), jsxRuntimeExports.jsx(Breadcrumbs, { list: list })] }));
}

function Pagination$1({ set, current, count, size }) {
    const currentPage = Math.ceil(current / size);
    const nPages = Math.ceil(count / size);
    return (jsxRuntimeExports.jsx("nav", { className: "pagination", role: "navigation", "aria-label": "pagination", children: jsxRuntimeExports.jsxs("ul", { className: "pagination-list", children: [jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsxs("button", { type: "button", className: "pagination-first", disabled: current <= 0, onClick: () => set(0), onKeyDown: () => set(0), children: [jsxRuntimeExports.jsx(SVGIcon, { name: "chevronLeft" }), " ", jsxRuntimeExports.jsx("span", { children: "First" })] }) }), new Array(Math.min(Math.ceil(count / size), 5))
                    .map((_, index) => currentPage + index)
                    .map((index) => {
                    if (currentPage === nPages) {
                        return index - 4;
                    }
                    return current > 3 ? index - 1 : index;
                })
                    .filter((index) => index < nPages)
                    .map((index) => {
                    return (jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", disabled: index < 0, className: `pagination-link ${index === currentPage ? `current` : ""}`, onClick: () => set(size * index), onKeyDown: () => set(size * index), children: jsxRuntimeExports.jsx("span", { children: index < 0 ? "1" : index + 1 }) }) }, `p${index}`));
                }), jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsxs("button", { type: "button", className: "pagination-last", disabled: currentPage === nPages - 1, onClick: () => set((nPages - 1) * size), onKeyDown: () => set((nPages - 1) * size), children: [jsxRuntimeExports.jsx("span", { children: "Last" }), " ", jsxRuntimeExports.jsx(SVGIcon, { name: "chevronRight" })] }) })] }) }));
}
function PaginationBox({ size, from, count, setSize, setPage, small, sidebar, }) {
    return (jsxRuntimeExports.jsxs(StyledPaginationBox, { small: small, sidebar: sidebar, children: [!small && jsxRuntimeExports.jsx(PaginationAmount, { from: from, size: size, count: count }), jsxRuntimeExports.jsx(Pagination$1, { set: setPage, current: from, size: size, count: count }), !small && jsxRuntimeExports.jsx(PerPage, { size: size, set: setSize })] }));
}

const setColorBgr = (color) => {
    switch (color) {
        case "danger":
            return theme.color.support.redInverse;
        case "warning":
            return theme.color.support.orangeInverse;
        case "success":
            return theme.color.support.greenInverse;
        case "notification":
            return theme.color.support.blueInverse;
        default:
            return "currentcolor";
    }
};
const setColorProgress = (color) => {
    switch (color) {
        case "danger":
            return theme.color.support.red;
        case "warning":
            return theme.color.support.orange;
        case "success":
            return theme.color.support.green;
        case "notification":
            return theme.color.support.blue;
        default:
            return "currentcolor";
    }
};
const StyledPieChartWrap = styled.div `
  display: flex;
  position: relative;
  ${space}
`;
const StyledPieChartDescription = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.color.text.text02};

  ${({ size }) => size &&
    css `
      width: ${size}px;
      height: ${size}px;
    `}

  ${({ color }) => color &&
    css `
      .chartValue {
        color: ${setColorProgress(color)};
        line-height: 1.5rem;
      }
      .chartCaption {
        color: ${theme.color.text.text02};
      }
    `}
`;
const StyledSVG = styled.svg `
  display: block;

  ${({ size }) => size &&
    css `
      width: ${size}px;
    `}
`;
const StyledCircleBgr = styled.circle `
  fill: none;
  stroke: ${theme.color.support.greyInverse};

  ${({ color }) => color &&
    css `
      stroke: ${setColorBgr(color)};
    `}
`;
const StyledCircleProgress = styled.circle `
  transform: rotate(-90deg) translateX(-96px);
  transition: stroke-dashoffset 0.85s ease-in-out;
  fill: none;
  stroke: ${theme.color.support.grey};

  ${({ color }) => color &&
    css `
      stroke: ${setColorProgress(color)};
    `}

  ${({ size }) => size &&
    css `
      transform: rotate(-90deg) translateX(-${size}px);
    `}
`;
function PieChart({ size, progress, strokeWidth, color = "success", children, ...props }) {
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const [offset, setOffset] = React.useState(circumference);
    React.useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, circumference, progress, offset]);
    return (jsxRuntimeExports.jsxs(StyledPieChartWrap, { ...props, children: [jsxRuntimeExports.jsxs(StyledSVG, { width: size, height: size, children: [jsxRuntimeExports.jsx(StyledCircleBgr, { cx: center, cy: center, r: radius, strokeWidth: strokeWidth, color: color }), jsxRuntimeExports.jsx(StyledCircleProgress, { cx: center, cy: center, r: radius, strokeWidth: strokeWidth, strokeDasharray: circumference, strokeDashoffset: offset, color: color, size: size })] }), children && (jsxRuntimeExports.jsx(StyledPieChartDescription, { size: size, color: color, children: children }))] }));
}

const StyledPopover = styled.div `
  display: inline-block;
  position: relative;
`;
const Content$1 = styled.div `
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: ${theme.zindex.dropdown};
  transition:
    visibility 0.1s ease-out,
    opacity 0.1s ease-out;
  margin-top: ${theme.spacing.spacing01};

  ${({ isVisible }) => isVisible &&
    `
    visibility: visible;
    opacity: 1;
  `}

  ${({ alignRight }) => alignRight &&
    `
      right: 0;
      &>div {
        text-align: right;
      }
    `}
`;
const StyledTrigger = styled.div `
  position: relative;
  cursor: pointer;
`;
function Popover$1({ children, trigger, alignRight }) {
    const { isOpen: isVisible, close, toggle: toggleVisibility, } = useDisclosure();
    const wrapper = React.useRef(null);
    useClickOutside({ ref: wrapper, active: isVisible, onClickAway: close });
    return (jsxRuntimeExports.jsxs(StyledPopover, { ref: wrapper, children: [jsxRuntimeExports.jsx(StyledTrigger, { className: "Popover-trigger", onClick: () => toggleVisibility(), children: trigger }), jsxRuntimeExports.jsx(Content$1, { isVisible: isVisible, alignRight: alignRight, children: jsxRuntimeExports.jsx(Box, { innerSpacing: "spacing03", shadow: "shadow04", children: children }) })] }));
}

const Radio = React.forwardRef(({ id, labelText, ...props }, ref) => (jsxRuntimeExports.jsxs(RadioFlexWrapper, { children: [jsxRuntimeExports.jsxs(RadioContainer, { children: [jsxRuntimeExports.jsx(RadioInput, { ref: ref, type: "radio", id: id, ...props }), jsxRuntimeExports.jsx(Fill, {})] }), jsxRuntimeExports.jsx("label", { htmlFor: id, children: labelText })] })));
function RadioGroup({ children, name }) {
    const [isChecked, setIsChecked] = React.useState(Array.isArray(children) && children[0].props.value);
    const hasNoChildren = Array.isArray(children) && children.length === 0;
    if (hasNoChildren) {
        return null;
    }
    return (jsxRuntimeExports.jsx(RadioWrapper, { role: "radiogroup", name: name, children: React.Children.map(children, (element) => React.cloneElement(element, {
            ...element.props,
            checked: isChecked === element.props.value,
            onChange: () => setIsChecked(element.props.value),
        })) }));
}
const RadioWrapper = styled(Container$4) `
  position: relative;
`;
const RadioFlexWrapper = styled(Flex) `
  margin-bottom: ${theme.spacing.spacing04};

  label {
    cursor: pointer;
    margin-left: ${theme.spacing.spacing02};
    font-weight: ${theme.typography.fontWeights[0]};
  }
`;
const Fill = styled.div `
  background: ${theme.color.interactive.primary};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.2s ease-in,
    height 0.2s ease-in;
  pointer-events: none;
  z-index: ${theme.zindex.masked};

  &::before {
    content: "";
    opacity: 0;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`;
const RadioInput = styled.input `
  opacity: 0;
  z-index: ${theme.zindex.sticky};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: 0.75rem;
      height: 0.75rem;
      transition:
        width 0.2s ease-out,
        height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`;
const RadioContainer = styled.div `
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  flex: 0 0 1.25rem;
  cursor: pointer;

  &::before {
    content: "";
    border-radius: 100%;
    border: 1px solid ${theme.color.border.input};
    background: ${theme.color.background.ui02};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: ${theme.zindex.zero};
  }
`;

/* stylelint-disable no-descending-specificity */
function getStatusCss(status) {
    return css `
    border: 1px solid ${setColor(status)};

    li {
      border-right: 1px solid ${setColor(status)};

      button {
        color: ${setColor(status)};

        &.active {
          color: ${theme.color.text.text04};
          background: ${setColor(status)};

          &:hover {
            background: ${darken(0.1, theme.colors[status] || status)};
          }

          &:active {
            background: ${darken(0.2, theme.colors[status] || status)};
          }

          &:disabled {
            background: ${darken(0.3, theme.colors[status] || status)};
          }
        }
      }
    }
  `;
}
const StyledSelectButtons = styled.ul `
  margin: 0;
  padding: 0;
  display: inline-flex;
  list-style: none;
  border: 1px solid ${theme.color.interactive.primary};
  border-radius: ${theme.radiusDefault};
  line-height: ${theme.lineHeight};

  li {
    display: inline-block;
    border-right: 1px solid ${theme.color.interactive.primary};

    &:last-child {
      border-right: none;
    }

    button {
      outline: none;
      cursor: pointer;
      color: ${theme.color.interactive.primary};
      border: none;
      background: transparent;
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
      transition: ${theme.transition};
      font-size: ${theme.fontSizes.md};
      font-family: ${theme.fonts.body};
      line-height: 1.5;
      text-transform: ${theme.typography.titleCase};

      &.active {
        background: ${theme.color.interactive.primary};
        color: ${theme.color.text.text04};
      }

      ${({ size }) => size === "small" &&
    css `
          font-size: ${theme.fontSizes.sm};
          line-height: initial;
          padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
        `}

      &:disabled {
        cursor: not-allowed;
        background: ${theme.color.interactive.disabled};
        border-color: transparent;
        color: ${theme.color.text.text03};
      }
    }
  }

  ${({ status }) => status && getStatusCss(status)}
`;
function SelectButton({ name, value, labelText, isActive = false, onClick, disabled = false, ...props }) {
    return (jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", value: value, name: name, className: isActive ? "active" : "", disabled: disabled, onClick: () => onClick(value), ...props, children: labelText }) }));
}
function MultipleSelect({ status, children, size, ...containerProps }) {
    return (jsxRuntimeExports.jsx(StyledSelectButtons, { status: status, size: size, ...containerProps, children: children }));
}

const Header = styled.div `
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100%;
  z-index: ${theme.zindex.default};
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: 1px solid ${theme.color.border.border01};
  background-color: ${theme.color.background.ui01};
  line-height: ${theme.lineHeight};
  padding: ${theme.spacing.spacing04};
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: ${({ reverse }) => (reverse ? "flex-end" : "space-between")};
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;
const Title = styled(Text) `
  font-weight: ${theme.fontWeights.medium};
  text-transform: ${theme.typography.titleCase};
  margin: 0;
  ${space}
`;
const Caption = styled(Text) `
  font-size: ${theme.fontSizes.sm};
  color: ${theme.color.text.text02};
  margin-bottom: 0;
`;
const Content = styled(Text) `
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing04} 0;
  margin-bottom: 0;
`;
const SidebarMenu = styled.div `
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  will-change: transform;
  transition: ${theme.transition};
  z-index: ${theme.zindex.topoftheworld};
  transform: ${({ isOpen, reverse }) => isOpen
    ? "translate3d(0,0,0)"
    : `translate3d(${reverse ? "-100%,0,0" : "100%,0,0"})`};
  display: flex;
  justify-content: ${({ side }) => side !== "onLeft" ? "flex-end" : "flex-start"};
`;
const CloseLayer = styled.div `
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: ${theme.zindex.default};
`;
const Inner$1 = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: ${theme.shadow.shadow04};
  background-color: ${theme.color.background.ui01};
  border-left: ${({ side }) => side !== "onLeft" && `1px solid ${theme.color.border.border01}`};
  border-right: ${({ side }) => side === "onLeft" && `1px slid ${theme.color.border.border01}`};
  max-width: 100%;
  ${({ width }) => width
    ? css `
          width: ${width};
        `
    : css `
          ${bp("xs") `width: 100vw`};
          ${bp("sm") `width: 50vw`};
          ${bp("md") `width: 45vw`};
          ${bp("lg") `width: 40vw`};
          ${bp("xl") `width: 30rem`};
          ${bp("xxl") `width: 30rem`};
        `}
  z-index: 2;
  overscroll-behavior: contain;
`;
const Container = styled.div `
  padding: 0 ${theme.spacing.spacing04};
  flex: 1;
`;
const SidebarCloseButton = styled(Button) `
  padding: 0;
  z-index: ${theme.zindex.topoftheworld};
`;
const FooterSidebar = styled.div `
  position: sticky;
  z-index: ${theme.zindex.sticky};
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background-color: ${theme.color.background.ui01};
  border-top: 1px solid ${theme.color.border.border01};
  line-height: ${theme.lineHeight};
  justify-content: space-between;
`;

function CloseButton({ onClick, icon, children }) {
    return (jsxRuntimeExports.jsx(SidebarCloseButton, { severity: "low", title: "Close sidebar", onClick: onClick, children: children ? children : jsxRuntimeExports.jsx(SVGIcon, { name: icon || "close" }) }));
}
function Sidebar({ children, title, caption, side, isOpen, footer, headerStyles, contentStyles, onClick = () => undefined, showExpandButton = false, onExpandClick = () => undefined, ...props }) {
    React.useEffect(() => {
        if (isOpen) {
            const handleKeyDown = (event) => {
                if (event.key === "Escape") {
                    onClick();
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [isOpen, onClick]);
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Background, { isVisible: isOpen, zIndex: "overlay", onClick: onClick }), jsxRuntimeExports.jsxs(SidebarMenu, { isOpen: isOpen, side: side, reverse: side === "onLeft", children: [jsxRuntimeExports.jsx(Inner$1, { isOpen: isOpen, ...props, children: isOpen && (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(Header, { reverse: side === "onLeft", style: headerStyles, children: [jsxRuntimeExports.jsxs("header", { children: [jsxRuntimeExports.jsx(Title, { tag: "span", ml: side === "onLeft" ? ["1rem", "1rem"] : [0], children: title }), caption && jsxRuntimeExports.jsx(Caption, { children: caption })] }), jsxRuntimeExports.jsxs(FlexContainer, { justifyContent: "space-evenly", children: [jsxRuntimeExports.jsx(When, { condition: showExpandButton, children: jsxRuntimeExports.jsx(Button, { severity: "low", size: "md", icon: "externalLink", title: "Expand", type: "button", marginRight: 1, onClick: onExpandClick }) }), jsxRuntimeExports.jsx(Button, { severity: "low", size: "md", icon: "close", title: "Close sidebar", type: "button", onClick: onClick })] })] }), jsxRuntimeExports.jsx(Container, { style: contentStyles, children: jsxRuntimeExports.jsx(Content, { tag: "div", children: children }) }), footer && jsxRuntimeExports.jsx(FooterSidebar, { children: footer })] })) }), isOpen && jsxRuntimeExports.jsx(CloseLayer, { isOpen: isOpen, onClick: onClick, ...props })] })] }));
}

const Wrapper = styled("div") `
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zindex.sticky};
  max-width: 100%;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  display: flex;
  justify-content: center;
  background-color: ${theme.color.support.blueInverse};
  color: ${theme.color.text.text01};
`;
function StickyBar({ children, ...rest }) {
    return jsxRuntimeExports.jsx(Wrapper, { ...rest, children: children });
}

const SwitchInput = styled.input `
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .inner {
    background-color: ${theme.color.interactive.primary};
    ${({ severity }) => severity &&
    css `
        background-color: ${severity === "primary"
        ? theme.color.interactive.primary
        : setColor(severity)};
      `}

    &:before {
      transform: translateX(1.45rem);
      background-color: ${theme.color.background.ui02};
    }
  }
`;
const LabelText = styled.div `
  display: inline-block;
  margin-right: ${theme.spacing.spacing02};

  ${({ position }) => position === "left"
    ? css `
          margin-right: ${theme.spacing.spacing02};
          margin-left: 0;
        `
    : css `
          margin-left: ${theme.spacing.spacing02};
          margin-right: 0;
        `}
`;
const SwitchContainer = styled.div `
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
`;
const SwitchLabel = styled.label `
  display: flex;
  align-items: center;
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
`;
const Inner = styled.div `
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 0.75rem;
  border: 1px solid ${theme.color.border.input};
  background-color: ${theme.color.field.default};

  &:before {
    position: absolute;
    content: "";
    height: 1.125rem;
    width: 1.125rem;
    left: 2px;
    bottom: calc((100% - 1.125rem) / 2);
    background-color: ${theme.color.interactive.primary};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
function Switch({ severity = "success", position = "right", labelText = "", id, ...props }) {
    const showLabel = labelText.length > 0;
    return (jsxRuntimeExports.jsxs(SwitchLabel, { htmlFor: id, children: [showLabel && position === "left" && (jsxRuntimeExports.jsx(LabelText, { position: position, children: labelText })), jsxRuntimeExports.jsxs(SwitchContainer, { children: [jsxRuntimeExports.jsx(SwitchInput, { type: "checkbox", id: id, severity: severity, ...props }), jsxRuntimeExports.jsx(Inner, { className: "inner" })] }), showLabel && position === "right" && (jsxRuntimeExports.jsx(LabelText, { position: position, children: labelText }))] }));
}

// Based on https://github.com/gregberge/react-flatten-children
function flattenChildren(children) {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.flatMap((child) => {
        if (isReactFragment(child)) {
            return flattenChildren(child.props.children);
        }
        return child;
    });
}
function isReactFragment(element) {
    if (isPrimitiveElement(element) || !("type" in element)) {
        return false;
    }
    return element.type === React.Fragment;
}
function isPrimitiveElement(element) {
    return (typeof element === "string" ||
        element instanceof String ||
        typeof element === "number");
}

/* stylelint-disable no-descending-specificity */
const TabsContent = styled(Box) `
  background-color: ${theme.color.background.ui01};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: none;
  padding: ${theme.spacing.spacing06} ${theme.spacing.spacing04};

  p {
    line-height: 1.5rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const TabContainer = styled.div `
  padding: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui03};
  border-right: 1px solid ${theme.color.border.border01};
  border-bottom: 1px solid transparent;
  width: ${({ width }) => width ?? "17rem"};

  &:last-child {
    border-right-color: transparent;
    &.tab-active {
      border-right: 1px solid ${theme.color.border.border01};
    }
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `auto` : `pointer`)};
    background-color: ${({ disabled }) => disabled
    ? `${theme.color.background.ui03}`
    : `${theme.color.background.ui01}`};
  }

  ${({ wizard }) => wizard &&
    css `
      width: auto;
      flex: 1;
      &:last-child {
        border-right: none;
        &.tab-active {
          border-right: none;
        }
      }
    `}

  &:first-child {
    border-top-left-radius: ${theme.radiusDefault};
  }

  &.tab-active {
    background-color: ${theme.color.background.ui01};
    border-bottom: 1px solid ${theme.color.background.ui01};
    z-index: ${theme.zindex.default};
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      left: 0;
      top: -4px;
      background-color: ${theme.color.interactive.primary};
    }
  }

  &.tab,
  &.tab-active {
    &:first-child {
      & > div {
        background-color: ${theme.color.background.ui05};
        color: ${theme.color.text.text04};
      }
    }
  }
`;
const TabsList = styled.div `
  background-color: ${theme.color.background.ui03};
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  overflow-x: auto;
  border-top-left-radius: ${theme.radiusDefault};
  border-top-right-radius: ${theme.radiusDefault};
  padding-top: 4px;

  &::before {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${theme.color.border.input};
  }

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid ${theme.color.border.border01};
    z-index: ${theme.zindex.zero};
  }
`;
const TabsWrapper = styled(Box) `
  padding: 0;
`;
const Step = styled(Box) `
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  box-shadow: none;
  margin-bottom: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui04};
  color: ${theme.color.text.text02};

  &.dark {
    background-color: ${theme.color.background.ui05};
    color: ${theme.color.text.text04};
  }
`;
const TabsStatusButtons = styled.div `
  padding: ${theme.spacing.spacing04};
  border-top: 1px solid ${theme.color.border.border01};
  display: flex;
  justify-content: ${({ buttonsJustify }) => buttonsJustify ? buttonsJustify : "space-between"};
  position: relative;
`;
const TabsCover = styled.div `
  background-color: ${theme.color.background.ui01};
  border-bottom-left-radius: ${theme.radiusDefault};
  border-bottom-right-radius: ${theme.radiusDefault};
`;
const PreviousButton = styled(Button) `
  position: absolute;
  border: none;
`;
const NextButton = styled(Button) `
  margin-left: auto;
  margin-right: auto;
`;
function ButtonPrevious({ onClick, children }) {
    return jsxRuntimeExports.jsx(PreviousButton, { onClick: onClick, children: children });
}
function ButtonNext({ onClick, children }) {
    return jsxRuntimeExports.jsx(NextButton, { onClick: onClick, children: children });
}
function Tab({ wizard, step, heading, caption, activeTab = -1, index = 0, width, disabled, onClick, label = (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Text, { weight: "medium", mb: theme.spacing.spacing01, children: heading }), jsxRuntimeExports.jsx(Text, { size: "sm", mb: 0, color: theme.color.text.text02, children: caption })] })), }) {
    const className = activeTab === index ? "tab-active" : "tab";
    const isActive = activeTab && index;
    const ariaSelected = activeTab === index ? "true" : "false";
    return (jsxRuntimeExports.jsxs(TabContainer, { className: className, role: "tab", "aria-selected": ariaSelected, "aria-controls": `tabpanel-${index + 1}`, width: width, disabled: disabled, wizard: wizard, onClick: onClick, children: [wizard ? (jsxRuntimeExports.jsx(Step, { ...(isActive && index <= activeTab && { className: "dark" }), children: step })) : null, label] }, index));
}
function Tabs({ name, wizard, children, handleTab, step }) {
    const items = React.Children.toArray(flattenChildren(children));
    return (jsxRuntimeExports.jsxs(TabsWrapper, { children: [jsxRuntimeExports.jsx(TabsList, { className: name, children: items.map((child, key) => {
                    const { heading, caption, disabled, buttonsJustify, width, label } = child.props;
                    return (jsxRuntimeExports.jsx(Tab, { wizard: wizard, width: width, step: key + 1, activeTab: step, index: key, heading: heading, caption: caption, disabled: disabled, buttonsJustify: buttonsJustify, label: label, onClick: disabled ? undefined : () => handleTab(key) }, key));
                }) }), jsxRuntimeExports.jsx(TabsCover, { children: items.map((child, key) => {
                    if (key !== step) {
                        return undefined;
                    }
                    const { children: innerChildren, buttonsJustify, buttons, } = child.props;
                    return (jsxRuntimeExports.jsxs(React.Fragment, { children: [jsxRuntimeExports.jsx(TabsContent, { children: innerChildren }), buttons != null && (jsxRuntimeExports.jsx(TabsStatusButtons, { buttonsJustify: buttonsJustify, children: buttons }))] }, key));
                }) })] }));
}
function StyledTab({ onClick, children }) {
    return jsxRuntimeExports.jsx(NextButton, { onClick: onClick, children: children });
}

function isSingleColor(value) {
    return [
        "primary",
        "accent",
        "danger",
        "success",
        "warning",
        "notification",
        "black",
        "white",
        "snowWhite",
    ].includes(value);
}
function isThemeSupportColor(value) {
    return [
        "red",
        "redInverse",
        "pink",
        "purple",
        "indigo",
        "blue",
        "blueInverse",
        "grey",
        "greyInverse",
        "cyan",
        "teal",
        "green",
        "greenInverse",
        "lightGreen",
        "yellow",
        "orange",
        "orangeInverse",
    ].includes(value);
}
const checkColor = (color) => {
    if (color && isSingleColor(color)) {
        return theme.colors[color];
    }
    if (color && isThemeSupportColor(color)) {
        return theme.color.support[color];
    }
    return color;
};

const StyledTag = styled.div `
  display: flex;
  float: left;
  align-items: center;
  padding: 0;
  font-size: ${theme.fontSizes.sm};
  line-height: 1.5rem;
  background: ${theme.color.interactive.secondary};
  border-radius: ${theme.radius.xxl};
  margin: 0 4px 4px 0;

  .tag-icon,
  .tag-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
  }

  .tag-text {
    margin: 0 ${theme.spacing.spacing03};
  }

  .tag-icon {
    margin: 0;
    padding: ${theme.spacing.spacing01};
  }

  .tag-close-button {
    border-radius: ${theme.radius.xxl};
    background: ${theme.color.interactive.secondaryActive};
    margin: ${theme.spacing.spacing01};

    svg {
      width: 0.625rem;
      height: 0.625rem;
    }
  }

  &:hover {
    background: ${theme.color.interactive.secondaryHover};
    cursor: pointer;
  }
  &:active {
    background: ${theme.color.interactive.secondaryActive};
    cursor: pointer;
  }

  ${({ isTransparent }) => isTransparent &&
    css `
      background: transparent;
    `}

  ${({ icon }) => icon &&
    css `
      .tag-text {
        margin-left: 0;
      }
    `}
    
  ${({ showClose }) => showClose &&
    css `
      .tag-text {
        margin-right: ${theme.spacing.spacing01};
      }
    `}
    
  ${({ color }) => color &&
    css `
      background: ${checkColor(color)};
      color: ${theme.color.text.text04};
      svg {
        fill: ${theme.color.text.text04};
      }
      .tag-close-button {
        filter: brightness(90%);
        background: ${checkColor(color)};
      }

      &:hover {
        filter: brightness(95%);
        background: ${checkColor(color)};
      }
      &:active {
        filter: brightness(90%);
        background: ${checkColor(color)};
      }
    `}
  ${({ colorText }) => colorText &&
    css `
      color: ${theme.colors[colorText]};
    `}
  ${space}
`;
function Tag({ color, colorText, text, icon, onClick, showClose, isTransparent, onCloseClick, ...props }) {
    return (jsxRuntimeExports.jsxs(StyledTag, { color: color, colorText: colorText, icon: icon, showClose: showClose, isTransparent: isTransparent, onClick: onCloseClick ? undefined : onClick, ...props, children: [icon && (jsxRuntimeExports.jsx("div", { className: "tag-icon", children: jsxRuntimeExports.jsx(SVGIcon, { name: icon, size: "sm" }) })), text && jsxRuntimeExports.jsx("div", { className: "tag-text", children: text }), showClose && (jsxRuntimeExports.jsx("div", { className: "tag-close-button", children: jsxRuntimeExports.jsx(SVGIcon, { name: "close", size: "sm", onClick: onCloseClick }) }))] }));
}

/* stylelint-disable no-descending-specificity */
const StyledTable = styled.table `
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  font-size: ${({ tiny }) => (tiny ? theme.fontSizes.sm : theme.fontSizes.md)};
  line-height: 1.5em;
  color: ${theme.color.text.text01};

  tbody {
    tr {
      &:hover {
        cursor: ${({ hoverline }) => (hoverline ? "pointer" : "default")};
        background-color: ${({ hoverline }) => hoverline ? theme.color.background.ui03 : ""};
      }
      &:nth-child(odd) {
        background-color: ${({ striped }) => striped ? theme.color.background.ui02 : ""};
        &:hover {
          background-color: ${({ hoverline }) => hoverline ? theme.color.background.ui03 : ""};
        }
      }
    }
  }

  tbody,
  thead,
  tfoot {
    td {
      padding: ${({ small, tiny }) => small || tiny
    ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}`
    : `${theme.spacing.spacing03}`};
    }
    th {
      padding: ${({ small, tiny }) => small || tiny
    ? `${theme.spacing.spacing02} ${theme.spacing.spacing03}`
    : `${theme.spacing.spacing03}`};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.color.text.text02};
      line-height: 1.5em;
    }
  }

  ${space}
`;
const Thead = styled.thead `
  letter-spacing: normal;
  text-transform: ${theme.typography.titleCase};
`;
const Tbody = styled.tbody ``;
const Tfoot = styled.tfoot `
  td {
    background-color: ${theme.color.background.ui01};
  }
`;
const Td = styled.td `
  border-top: 1px solid ${theme.color.border.border01};
  border-left: ${({ hasLeftBorder }) => hasLeftBorder ? `1px solid ${theme.color.border.border01}` : "none"};
  border-right: ${({ hasRightBorder }) => hasRightBorder ? `1px solid ${theme.color.border.border01}` : "none"};
`;
const Tr = styled.tr ``;
const Th = styled.th `
  border-bottom: 2px solid ${theme.color.border.border01};
`;
function Table(props) {
    return jsxRuntimeExports.jsx(StyledTable, { ...props });
}
Table.thead = Thead;
Table.tbody = Tbody;
Table.tfoot = Tfoot;
Table.td = Td;
Table.tr = Tr;
Table.th = Th;

var RANGE_TYPE;
(function (RANGE_TYPE) {
    RANGE_TYPE["DAY"] = "Day";
    RANGE_TYPE["WEEK"] = "Week";
    RANGE_TYPE["MONTH"] = "Month";
    RANGE_TYPE["YEAR"] = "Year";
})(RANGE_TYPE || (RANGE_TYPE = {}));

const WEEKDAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const DEFAULT_RANGE_TYPES = [
    RANGE_TYPE.DAY,
    RANGE_TYPE.WEEK,
    RANGE_TYPE.MONTH,
    RANGE_TYPE.YEAR,
];
const DEFAULT_TIME_RANGE_OPTIONS = [
    {
        id: "0",
        start: "00:00",
        end: "06:00",
        count: 0,
    },
    {
        id: "1",
        start: "06:00",
        end: "12:00",
        count: 0,
    },
    {
        id: "2",
        start: "12:00",
        end: "18:00",
        count: 0,
    },
    {
        id: "3",
        start: "18:00",
        end: "23:59",
        count: 0,
    },
];
const DEFAULT_DAILY_COUNTS = [
    ...new Array(DEFAULT_TIME_RANGE_OPTIONS.length).keys(),
].map(() => 0);

const Row = styled(FlexContainer) `
  align-items: stretch;

  & + & {
    margin-top: ${theme.spacing.spacing03};
  }

  & > * {
    &:not(:last-child) {
      margin-right: ${theme.spacing.spacing03};
    }
  }

  label {
    display: block;
    margin-bottom: 0;
  }

  &.time-range-picker {
    font-size: ${theme.fontSizes.sm};

    ul {
      flex: 1;
    }
  }

  &.date-picker {
    .date-options {
      flex: 1;

      ul {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      .date-value {
        font-size: ${theme.fontSizes.md};
        font-weight: ${theme.fontWeights.medium};
        line-height: ${theme.lineHeight};
      }
    }
  }
`;
const SelectWrap = styled(FlexContainer) `
  margin-right: ${theme.spacing.spacing04};
  flex: 1;
`;
const IconButton = styled(Button) `
  padding: ${theme.spacing.spacing04} ${theme.spacing.spacing02};
`;
const DatepickerContainer = styled.div `
  position: relative;

  .daypicker-panel {
    position: absolute;
    transform: translateX(-100%);
    margin-left: 100%;
    background-color: ${theme.color.background.ui01};
    border: 1px solid ${theme.color.border.border01};
    border-radius: ${theme.radius.md};
    z-index: ${theme.zindex.default};
  }
`;
const UnifiedMultipleSelect = styled(MultipleSelect) `
  width: 100%;
  li {
    flex: 1;

    button {
      width: 100%;
      height: 100%;

      &:not(.active):hover {
        background: ${theme.color.interactive.secondary};
        color: ${theme.color.text.text01};
      }

      &.active:hover {
        cursor: default;
      }
    }
  }
`;
const StyledButton = styled(Button) `
  padding: 0.15rem ${theme.spacing.spacing01};

  span {
    padding: 0.15rem ${theme.spacing.spacing06};
  }
`;

const getMonday = (date) => {
    const currentDate = new Date(date);
    return isMonday(currentDate) ? currentDate : previousMonday(currentDate);
};
const getTimeRangeDate = (initRange) => {
    return isSameDay(initRange.start, initRange.end)
        ? new Date(initRange.start)
        : new Date();
};
const getDateString = (date) => {
    return date.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
    });
};
const getDateWithTime = (date, time) => {
    const copiedDate = new Date(date);
    const timeNumbers = time.split(":").map((value) => parseInt(value, 10));
    return new Date(copiedDate.setHours(timeNumbers[0], timeNumbers[1], 0));
};
const getDateWithDays = (date, rangeType, dateFormat) => {
    switch (rangeType) {
        case RANGE_TYPE.DAY:
            return format(new Date(date), dateFormat);
        case RANGE_TYPE.WEEK:
            return `${format(new Date(date), dateFormat)} - ${format(addWeeks(date, 1), dateFormat)}`;
        case RANGE_TYPE.MONTH:
            return `${format(new Date(date), dateFormat)} - ${format(addMonths(date, 1), dateFormat)}`;
        case RANGE_TYPE.YEAR:
            return `${format(new Date(date), dateFormat)} - ${format(addYears(date, 1), dateFormat)}`;
        default:
            return undefined;
    }
};
const getDate = (selectedType, date, number) => {
    switch (selectedType) {
        case RANGE_TYPE.DAY:
            return addDays(date, number);
        case RANGE_TYPE.WEEK:
            return addWeeks(date, number);
        case RANGE_TYPE.MONTH:
            return addMonths(date, number);
        case RANGE_TYPE.YEAR:
            return addYears(date, number);
        default:
            return date;
    }
};
const getInitSelectedTimeRange = (initRange) => {
    const rangeId = Math.floor(new Date(initRange.start).getHours() / 6); // Each default time range has 6 hours time span
    return DEFAULT_TIME_RANGE_OPTIONS[rangeId];
};
const getDateOptions = (monday, weekCounts) => {
    const maxCount = Math.max(...(weekCounts ?? []).flatMap(({ counts }) => counts));
    return WEEKDAYS.map((weekday, index) => {
        const currentDate = addDays(monday, index);
        return {
            id: currentDate.toDateString(),
            weekday,
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear(),
            counts: weekCounts
                ? getDailyCounts(currentDate, weekCounts).map((count) => count / maxCount)
                : undefined,
        };
    });
};
const getDailyCounts = (date, weekCounts) => weekCounts.find((item) => isSameDay(item.date, date))?.counts ??
    DEFAULT_DAILY_COUNTS;
const isSameTimeRange = (interval, timeRangeOption) => {
    const optionStart = parseInt(timeRangeOption.start.split(":")[0], 10);
    const optionEnd = parseInt(timeRangeOption.start.split(":")[0], 10);
    return (getHours(interval.start) === optionStart &&
        getHours(interval.end) === optionEnd);
};

const dateFormat = "dd MMM yyyy";
function DatesPicker({ initTimeRange, disabledDays, onChange, }) {
    const [selectedDate, setSelectedDate] = useState(getTimeRangeDate(initTimeRange));
    const [selectedDateRange, setSelectedDateRange] = useState({ from: new Date() });
    const [selectedRangeType, setSelectedRangeType] = useState(DEFAULT_RANGE_TYPES[0]);
    const calendarWrapper = useRef(null);
    const { isOpen: isCalendarActive, close: closeCalendar, toggle: toggleCalendar, } = useDisclosure();
    useClickOutside({
        ref: calendarWrapper,
        active: isCalendarActive,
        onClickAway: closeCalendar,
    });
    // Function to update date range when arrows are clicked
    const updateCurrentTime = (direction) => {
        const newSelectedDate = getDate(selectedRangeType, selectedDate, direction === "forward" ? 1 : -1) ?? new Date();
        setSelectedDate(newSelectedDate);
        updateDateRange(newSelectedDate, selectedRangeType);
    };
    const handleRangeTypeSelection = (rangeType) => {
        setSelectedRangeType(rangeType);
        updateDateRange(selectedDate, rangeType);
    };
    const handleDateSelection = (newSelectDate) => {
        if (newSelectDate === undefined) {
            return;
        }
        if (!isSameDay(newSelectDate, selectedDate)) {
            setSelectedDate(newSelectDate);
            updateDateRange(newSelectDate, selectedRangeType);
        }
    };
    const updateDateRange = (date, rangeType) => {
        const newRange = {
            from: startOfDay(date),
            to: rangeType === RANGE_TYPE.DAY
                ? undefined
                : startOfDay(getDate(rangeType, date, 1)),
        };
        setSelectedDateRange(newRange);
        // dateRange.to undefined when range type is day
        onChange({ start: newRange.from, end: newRange.to ?? newRange.from });
    };
    return (jsxRuntimeExports.jsxs(FlexContainer, { alignContent: "center", children: [jsxRuntimeExports.jsx(SelectWrap, { children: jsxRuntimeExports.jsx(UnifiedMultipleSelect, { size: "small", children: DEFAULT_RANGE_TYPES.map((rangeType) => (jsxRuntimeExports.jsx(SelectButton, { name: rangeType, value: rangeType, labelText: rangeType, isActive: rangeType === selectedRangeType, onClick: () => handleRangeTypeSelection(rangeType) }, rangeType))) }) }), jsxRuntimeExports.jsxs(Row, { css: { alignItems: "center" }, children: [jsxRuntimeExports.jsx(StyledButton, { icon: "chevronLeft", onClick: () => updateCurrentTime("backward") }), jsxRuntimeExports.jsx("div", { className: "date-options", children: jsxRuntimeExports.jsxs(DatepickerContainer, { ref: calendarWrapper, children: [jsxRuntimeExports.jsx(StyledButton, { onClick: toggleCalendar, children: jsxRuntimeExports.jsx(Text, { size: "sm", tag: "span", color: theme.color.text.text04, children: getDateWithDays(selectedDate, selectedRangeType, dateFormat) }) }), jsxRuntimeExports.jsx(Datepicker, { className: "daypicker-panel", children: jsxRuntimeExports.jsx(When, { condition: isCalendarActive, children: jsxRuntimeExports.jsx(DayPicker, { mode: "range", selected: selectedDateRange, defaultMonth: selectedDate, disabled: disabledDays, onSelect: (_, newSelectedDate) => handleDateSelection(newSelectedDate) }) }) })] }) }), jsxRuntimeExports.jsx(StyledButton, { icon: "chevronRight", onClick: () => updateCurrentTime("forward") })] })] }));
}

const BORDER_RADIUS = theme.radius.sm;
const CustomTimeRangeSelector = styled(Row) `
  align-items: center;
  visibility: hidden;
  opacity: 0;

  ${({ isVisible }) => isVisible &&
    `
  visibility: visible;
  opacity: 1;
`}

  input {
    height: 100%;
    margin: -0.5rem 0;
    padding: 1rem 0 0.5rem;
    font-size: small;
  }

  button {
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  }
`;
const CountTag = styled(Tag) `
  margin: 0;
  border-radius: ${BORDER_RADIUS};
  height: 1.125rem;

  .tag-text {
    margin: 0 ${theme.spacing.spacing01};
  }
`;
// Opacity on pseudo element as workaround for rgab background color with var
// ref: https://stackoverflow.com/a/56951626
const CountBarWrapper = styled.div `
  position: relative;
  height: 100%;
  width: ${theme.spacing.spacing02};
  border-radius: ${BORDER_RADIUS};

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: ${theme.color.support.grey};
    opacity: 0.6;
    border-radius: ${BORDER_RADIUS};
  }
`;
const CountBar = styled.div `
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ height }) => `${height * 100}%`};
  background: ${theme.color.support.blue};
  border-radius: ${BORDER_RADIUS};
`;

function DateOptionLabel({ dateOption, loading }) {
    const hasCounts = dateOption.counts !== undefined;
    return (jsxRuntimeExports.jsxs(FlexContainer, { justifyContent: hasCounts ? "space-between" : "center", alignItems: "stretch", gap: theme.spacing.spacing02, children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("header", { children: dateOption.weekday }), jsxRuntimeExports.jsx("time", { className: "date-value", dateTime: dateOption.id, children: getDateString(new Date(dateOption.id)) })] }), jsxRuntimeExports.jsx(When, { condition: hasCounts, children: jsxRuntimeExports.jsxs(If, { condition: loading, children: [jsxRuntimeExports.jsx(Then, { children: jsxRuntimeExports.jsx("div", { style: { alignSelf: "center" }, children: jsxRuntimeExports.jsx(Spinner, {}) }) }), jsxRuntimeExports.jsx(Else, { children: jsxRuntimeExports.jsx(FlexContainer, { gap: "2px", children: (dateOption.counts ?? DEFAULT_DAILY_COUNTS).map((percentage, index) => (jsxRuntimeExports.jsx(CountBarWrapper, { children: jsxRuntimeExports.jsx(CountBar, { height: percentage }) }, `${dateOption.id}-${DEFAULT_TIME_RANGE_OPTIONS[index].id}`))) }) })] }) })] }));
}

function DateSelector({ dateOptions, selectedDate, disabledDays, loading, onSelect, }) {
    return (jsxRuntimeExports.jsx("div", { className: "date-options", children: jsxRuntimeExports.jsx(UnifiedMultipleSelect, { size: "small", children: dateOptions.map((dateOption) => {
                const date = new Date(dateOption.id);
                return (jsxRuntimeExports.jsx(SelectButton, { name: dateOption.id, value: dateOption.id, isActive: dateOption.id === selectedDate.toDateString(), disabled: isMatch(date, disabledDays) || loading, labelText: jsxRuntimeExports.jsx(DateOptionLabel, { dateOption: dateOption, loading: loading }), onClick: () => onSelect(date) }, dateOption.id));
            }) }) }));
}

function TimeRangeLabel({ timeRangeOption, justifyContent }) {
    return (jsxRuntimeExports.jsxs(FlexContainer, { justifyContent: justifyContent, alignItems: "center", children: [jsxRuntimeExports.jsx("span", { children: `${timeRangeOption.start} - ${timeRangeOption.end}` }), jsxRuntimeExports.jsx(When, { condition: timeRangeOption.count !== 0, children: jsxRuntimeExports.jsx(CountTag, { text: timeRangeOption.count.toString(), color: "blue", colorText: "white" }) })] }));
}

function HourSelector({ timeRangeOptions, selectedTimeRange, weekCounts, onSelect, }) {
    const isCustomTimeRange = selectedTimeRange.id === "custom";
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Label, { name: "Hours:", htmlFor: "time-range-selector" }), jsxRuntimeExports.jsxs(FlexContainer, { gap: theme.spacing.spacing03, id: "time-range-selector", alignItems: "stretch", style: { flex: 1 }, children: [jsxRuntimeExports.jsxs(UnifiedMultipleSelect, { size: "small", children: [timeRangeOptions.map((timeRangeOption) => (jsxRuntimeExports.jsx(SelectButton, { name: timeRangeOption.id, value: timeRangeOption.id, isActive: timeRangeOption.id === selectedTimeRange.id, labelText: jsxRuntimeExports.jsx(TimeRangeLabel, { timeRangeOption: timeRangeOption, justifyContent: weekCounts !== undefined ? "space-between" : "center" }), onClick: () => onSelect(timeRangeOption, true) }, timeRangeOption.id))), jsxRuntimeExports.jsx(SelectButton, { name: "custom", value: "custom", labelText: "custom", isActive: isCustomTimeRange, onClick: () => onSelect({
                                    ...selectedTimeRange,
                                    id: "custom",
                                }) }, "custom")] }), jsxRuntimeExports.jsxs(CustomTimeRangeSelector, { isVisible: isCustomTimeRange, children: [jsxRuntimeExports.jsx(Label, { name: "From", htmlFor: "time-range-start" }), jsxRuntimeExports.jsx(Input, { id: "time-range-start", type: "time", name: "time-range-start", value: selectedTimeRange.start, onChange: (event) => {
                                    event.persist();
                                    onSelect({
                                        ...selectedTimeRange,
                                        start: event.target.value,
                                    });
                                } }), jsxRuntimeExports.jsx(Label, { name: "To", htmlFor: "time-range-end" }), jsxRuntimeExports.jsx(Input, { id: "time-range-end", type: "time", name: "time-range-end", value: selectedTimeRange.end, min: selectedTimeRange.start, onChange: (event) => {
                                    event.persist();
                                    onSelect({
                                        ...selectedTimeRange,
                                        end: event.target.value,
                                    });
                                } }), jsxRuntimeExports.jsx(Button, { severity: "high", size: "sm", onClick: () => onSelect(selectedTimeRange, true), children: "Apply" })] })] })] }));
}

function DateHourPicker({ initTimeRange, weekCounts, countsLoading = false, disabledDays, onChange, onWeekChange, }) {
    const [selectedDate, setSelectedDate] = useState(getTimeRangeDate(initTimeRange));
    const [dateOptions, setDateOptions] = useState(getDateOptions(getMonday(initTimeRange.start)));
    const [timeRangeOptions, setTimeRangeOptions] = useState(DEFAULT_TIME_RANGE_OPTIONS);
    const [selectedTimeRange, setSelectedTimeRange] = useState(getInitSelectedTimeRange(initTimeRange));
    useEffect(() => {
        if (!isSameDay(selectedDate, initTimeRange.start) ||
            !isSameTimeRange(initTimeRange, selectedTimeRange)) {
            submitDateHour(selectedDate, selectedTimeRange);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps  -- Submit when initTimeRange and initial selectedData and selectedTimeRange not match
    }, []);
    const calendarWrapper = useRef(null);
    const { isOpen: isCalendarActive, close: closeCalendar, toggle: toggleCalendar, } = useDisclosure();
    useClickOutside({
        ref: calendarWrapper,
        active: isCalendarActive,
        onClickAway: closeCalendar,
    });
    useEffect(() => {
        // weekCounts is updated async after week change
        // update date options and time range options when value gets updated
        if (weekCounts) {
            setDateOptions((prev) => getDateOptions(new Date(prev[0].id), weekCounts));
            updateTimeRangeOptions(selectedDate);
        }
    }, [weekCounts]); // eslint-disable-line react-hooks/exhaustive-deps
    // Function to update dateOptions when arrows are clicked
    const updateDateOptions = (direction) => {
        const currentMonday = new Date(dateOptions[0].id);
        const newMonday = direction === "backward"
            ? previousMonday(currentMonday)
            : nextMonday(currentMonday);
        setDateOptions(getDateOptions(newMonday));
        updateTimeRangeOptions(selectedDate);
        if (onWeekChange) {
            onWeekChange(newMonday);
        }
    };
    // Function to update time range options
    const updateTimeRangeOptions = (date) => {
        if (weekCounts === undefined) {
            return;
        }
        const dayCounts = weekCounts.find((item) => isSameDay(item.date, date))
            ?.counts;
        if (dayCounts) {
            setTimeRangeOptions(DEFAULT_TIME_RANGE_OPTIONS.map((item, index) => ({
                ...item,
                count: dayCounts[index],
            })));
        }
        else {
            // when selected date is not in currently showing week, reset time range options
            setTimeRangeOptions(DEFAULT_TIME_RANGE_OPTIONS);
        }
    };
    const handleDateSelection = (newSelectDate) => {
        if (newSelectDate && !isSameDay(newSelectDate, selectedDate)) {
            setSelectedDate(newSelectDate);
            updateTimeRangeOptions(newSelectDate);
            // Update date options when week changes
            const newMonday = getMonday(newSelectDate);
            const currentMonday = new Date(dateOptions[0].id);
            if (!isSameDay(newMonday, currentMonday)) {
                setDateOptions(getDateOptions(newMonday));
                onWeekChange?.(newMonday);
            }
            submitDateHour(newSelectDate, selectedTimeRange);
        }
    };
    const handleHourChange = (timeRange, shouldSubmit = false) => {
        setSelectedTimeRange(timeRange);
        if (shouldSubmit) {
            submitDateHour(selectedDate, timeRange);
        }
    };
    const submitDateHour = (date, timeRange) => {
        const timeStart = getDateWithTime(date, timeRange.start);
        const timeEnd = getDateWithTime(date, timeRange.end);
        onChange({ start: timeStart, end: timeEnd });
    };
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(Row, { className: "date-picker", children: [jsxRuntimeExports.jsx(IconButton, { severity: "medium", icon: "chevronLeft", onClick: () => updateDateOptions("backward") }), jsxRuntimeExports.jsx(DateSelector, { dateOptions: dateOptions, selectedDate: selectedDate, disabledDays: disabledDays ?? [], loading: countsLoading, onSelect: handleDateSelection }), jsxRuntimeExports.jsx(IconButton, { severity: "medium", icon: "chevronRight", onClick: () => updateDateOptions("forward") }), jsxRuntimeExports.jsxs(DatepickerContainer, { ref: calendarWrapper, children: [jsxRuntimeExports.jsx(IconButton, { severity: "medium", icon: "calendar", onClick: toggleCalendar }), jsxRuntimeExports.jsx(Datepicker, { className: "daypicker-panel", children: jsxRuntimeExports.jsx(When, { condition: isCalendarActive, children: jsxRuntimeExports.jsx(DayPicker, { mode: "single", selected: selectedDate, defaultMonth: selectedDate, disabled: disabledDays, onSelect: (selectedDay) => {
                                            handleDateSelection(selectedDay);
                                            closeCalendar();
                                        } }) }) })] })] }), jsxRuntimeExports.jsx(Row, { className: "time-range-picker", children: jsxRuntimeExports.jsx(HourSelector, { timeRangeOptions: timeRangeOptions, selectedTimeRange: selectedTimeRange, weekCounts: weekCounts, onSelect: handleHourChange }) })] }));
}

const DEFAULT_TIME_RANGE = {
    start: new Date(),
    end: new Date(),
};
function TimeRangePicker({ initTimeRange = DEFAULT_TIME_RANGE, type = "Hours", weekCounts, countsLoading = false, disabledDays, onChange, onWeekChange, }) {
    if (type === "Days") {
        return (jsxRuntimeExports.jsx(DatesPicker, { initTimeRange: initTimeRange, disabledDays: disabledDays, onChange: onChange }));
    }
    return (jsxRuntimeExports.jsx(DateHourPicker, { initTimeRange: initTimeRange, weekCounts: weekCounts, countsLoading: countsLoading, disabledDays: disabledDays, onChange: onChange, onWeekChange: onWeekChange }));
}

const StyledToggle = styled.button `
  border: 1px solid ${theme.color.interactive.primary};
  border-radius: ${theme.radiusDefault};
  line-height: ${theme.lineHeight};
  color: ${theme.color.text.text01};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  transition: ${theme.transition};
  font-size: ${theme.fontSizes.md};
  outline: none;
  cursor: pointer;
  background: transparent;

  &.active {
    background: ${theme.color.interactive.primary};
    color: ${theme.color.text.text04};
  }

  ${({ size }) => size === "small" &&
    css `
      font-size: ${theme.fontSizes.md};
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
    `}

  ${({ status }) => status &&
    css `
      color: ${setColor(status)};
      border: 1px solid ${setColor(status)};
      &.active {
        color: ${theme.color.text.text01};
        background: ${setColor(status)};

        &:hover {
          background: ${darken(0.1, theme.colors[status] || status)};
        }

        &:active {
          background: ${darken(0.2, theme.colors[status] || status)};
        }

        &:disabled {
          background: ${darken(0.3, theme.colors[status] || status)};
        }
      }
    `}
`;
function Toggle({ value, labelText = "", onChange, ...props }) {
    return (jsxRuntimeExports.jsx(StyledToggle, { className: value ? "active" : "", onClick: onChange, ...props, children: labelText }));
}

function useTooltipHover() {
    const { isOpen: isHovered, toggle: setIsHovered } = useDisclosure();
    const timerRef = React.useRef(-1);
    const updateIsHovered = (value, timeout) => {
        window.clearTimeout(timerRef.current);
        const timer = window.setTimeout(() => {
            setIsHovered(value);
        }, timeout);
        timerRef.current = timer;
    };
    React.useEffect(() => {
        return () => {
            window.clearTimeout(timerRef.current);
        };
    }, []);
    return {
        isHovered,
        updateIsHovered,
    };
}

function setArrowPosition(position) {
    switch (position) {
        case "left":
            return `
        left: 0.5rem;
        right: auto;
        margin-left: 0;
        `;
        case "right":
            return `
        left: auto;
        right: 0.5rem;
        margin-left: 0;
        `;
        default:
            return `
        left: 50%;
        margin-left: -0.25rem;
        right:auto;
      `;
    }
}
const TooltipWrapper$1 = styled.div `
  display: inline-block;
`;
const StyledTooltip$1 = styled.div `
  position: absolute;
  min-width: ${({ minWidth }) => minWidth};
  max-width: 16rem;
  font-size: ${theme.fontSizes.sm};
  line-height: 1rem;
  padding: ${theme.spacing.spacing02};
  background-color: ${theme.color.background.ui05};
  color: ${theme.color.text.text04};
  border-radius: ${theme.radius.md};
  z-index: ${theme.zindex.sticky};
  opacity: 0;
  animation: 0.2s ease-in-out both fadeInUp;

  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: transparent;
    border-top-color: ${theme.color.background.ui05};
    border-width: 8px;
    margin-left: -8px;
    ${({ position }) => position &&
    css `
        ${setArrowPosition(position)}
      `}

    ${({ bottom }) => bottom &&
    css `
        top: -16px;
        transform: rotate(180deg);
      `}
  }

  ${({ status }) => status &&
    css `
      background: ${setColor(status)};
      &:after {
        border-top-color: ${setColor(status)};
      }
    `}

  @keyframes fadeInUp {
    from {
      transform: translate3d(0, -8px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

function Tooltip$1({ status, position, caption, bottom = false, children, hideTimeout = 100, showTimeout = 300, minWidth = "0", }) {
    const tooltipRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const [tooltipPosition, setPosition] = React.useState({
        marginTop: 0,
        width: 0,
    });
    const { isHovered, updateIsHovered } = useTooltipHover();
    React.useEffect(() => {
        if (isHovered && tooltipRef.current instanceof HTMLDivElement) {
            const tooltipSize = tooltipRef.current.getBoundingClientRect();
            setPosition({
                marginTop: bottom
                    ? tooltipSize.height - 12
                    : -(tooltipSize.height + 12),
                width: tooltipSize.width,
            });
        }
        // Providing refs to dependency array of useEffect may cause unexpected problems
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHovered]);
    const getStyle = () => {
        if (wrapperRef.current == null) {
            return;
        }
        if (position === "left") {
            return {
                marginTop: tooltipPosition.marginTop,
                left: wrapperRef.current.offsetLeft,
            };
        }
        if (position === "right") {
            return {
                marginTop: tooltipPosition.marginTop,
                left: wrapperRef.current.offsetLeft -
                    (tooltipPosition.width - wrapperRef.current.offsetWidth),
            };
        }
        return {
            marginTop: tooltipPosition.marginTop,
            left: wrapperRef.current.offsetLeft,
            marginLeft: -(tooltipPosition.width - wrapperRef.current.offsetWidth) / 2,
        };
    };
    return (jsxRuntimeExports.jsxs(TooltipWrapper$1, { ref: wrapperRef, onMouseEnter: () => updateIsHovered(true, showTimeout), onMouseLeave: () => updateIsHovered(false, hideTimeout), children: [isHovered && (jsxRuntimeExports.jsx(StyledTooltip$1, { ref: tooltipRef, status: status, position: position, bottom: bottom, minWidth: minWidth, style: getStyle(), children: caption })), children] }));
}

const TextareaGroup = styled.div `
  position: relative;
  align-items: center;
  border: 1px solid ${theme.color.border.input};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  background: ${theme.color.field.default};
  transition: ${theme.transition};
  overflow: hidden;

  &:hover {
    border: 1px solid ${theme.color.border.focus};
  }

  &:focus {
    outline: 0;
    border: 1px solid ${theme.color.border.focus};
  }

  &:disabled {
    color: ${theme.color.text.text03};
    background: ${theme.color.field.disabled};
    border: 1px solid ${theme.color.border.input};
    cursor: not-allowed;
  }
  ${({ status }) => status &&
    css `
      ${setStatusColor(status)}
    `};
`;
const StyledTextarea = styled.textarea `
  border: 0;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-family: ${theme.typography.fonts.body};
  font-size: ${(props) => props.small ? theme.fontSizes.sm : theme.fontSizes.md};
  line-height: ${(props) => props.small ? "1rem" : theme.lineHeight};
  padding: 0;
  margin: 0;
  transition: ${theme.transition};
  color: ${theme.color.text.text01};
  resize: none;

  &::placeholder {
    color: ${theme.color.text.text03};
  }

  &:hover,
  &:focus {
    outline: 0;
    border: 0;
  }

  &:disabled {
    color: ${theme.color.text.text03};
    background: transparent;
    border: 0;
    cursor: not-allowed;
  }
`;
const Counter = styled.p `
  color: ${theme.color.text.text03};
  font-size: ${theme.fontSizes.sm};
  text-align: right;
  ${({ status }) => status === "danger" &&
    css `
      color: ${theme.color.text.error};
    `};
`;
const TextareaFlexContainer = styled.div `
  display: flex;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing01};
`;
function getDefaultCharCount(props) {
    if (typeof props.value === "string") {
        return props.value.length;
    }
    if (typeof props.defaultValue === "string") {
        return props.defaultValue.length;
    }
    return 0;
}
const Textarea = React.forwardRef(({ status, maxCharCount, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(getDefaultCharCount(props));
    React.useEffect(() => {
        if (typeof props.value === "string") {
            setCharCount(props.value.length);
        }
    }, [props.value]);
    function handleChange(event) {
        setCharCount(event.target.value.length);
        props.onChange?.(event);
    }
    if (typeof maxCharCount === "number" && maxCharCount > 0) {
        return (jsxRuntimeExports.jsxs(TextareaFlexContainer, { children: [jsxRuntimeExports.jsx(TextareaGroup, { status: status, children: jsxRuntimeExports.jsx(StyledTextarea, { ref: ref, maxLength: maxCharCount, ...props, onChange: handleChange }) }), jsxRuntimeExports.jsxs(Counter, { status: status, children: [maxCharCount - charCount, "\u00A0/\u00A0", maxCharCount] })] }));
    }
    return (jsxRuntimeExports.jsx(TextareaGroup, { status: status, children: jsxRuntimeExports.jsx(StyledTextarea, { ref: ref, ...props }) }));
});

function Pagination({ count, from, set, size, firstPage = 0, small, }) {
    const currentPage = Math.ceil(from / size);
    const nPages = Math.ceil(count / size);
    const isFirstPageZero = firstPage === 0;
    const lastPage = isFirstPageZero ? nPages - 1 : nPages;
    // 6 & 7 pages make a lot of problem with dots so shrinking base number of visible
    // pages to 4 to avoid overlaps (problem: rendering dots and direct page at the same time)
    const baseNumberOfPages = [6, 7].includes(nPages) ? 4 : 5;
    const generatePagesItems = (numberOfPages, subtract = false) => {
        return Array.from(new Array(numberOfPages), (_, index) => {
            if (subtract) {
                return nPages - (index + 1);
            }
            return index;
        });
    };
    const getPages = () => {
        const endPages = generatePagesItems(baseNumberOfPages, true);
        if (currentPage < baseNumberOfPages - 1 + firstPage) {
            return generatePagesItems(baseNumberOfPages);
        }
        else if (endPages.includes(currentPage - 1)) {
            return endPages.reverse();
        }
        else {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    };
    const setPage = (pageNumber) => {
        if (currentPage !== pageNumber) {
            set(pageNumber * size);
        }
    };
    const showFirstPageJump = currentPage >= baseNumberOfPages && nPages > baseNumberOfPages;
    const showLastPageJump = currentPage + baseNumberOfPages <= nPages && nPages > baseNumberOfPages;
    return (jsxRuntimeExports.jsx("nav", { className: `pagination ${!small ? "center-absolutely" : ""}`, role: "navigation", "aria-label": "pagination", children: jsxRuntimeExports.jsxs("ul", { className: "pagination-list", children: [jsxRuntimeExports.jsx(When, { condition: currentPage > firstPage, children: jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", className: "pagination-prev", "data-testid": "prev-page", onClick: () => setPage(currentPage - 1), onKeyDown: () => setPage(currentPage - 1), children: jsxRuntimeExports.jsx(SVGIcon, { name: "chevronLeft" }) }) }) }), jsxRuntimeExports.jsxs(When, { condition: showFirstPageJump, children: [jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", className: "pagination-link", "data-testid": "first-page", onClick: () => setPage(firstPage), onKeyDown: () => setPage(firstPage), children: jsxRuntimeExports.jsx("span", { children: "1" }) }) }), jsxRuntimeExports.jsx("li", { className: "dots", "data-testid": "first-page-dots", children: jsxRuntimeExports.jsx(Text, { tag: "div", children: "..." }) })] }), [...getPages()]
                    .filter((index) => index < nPages)
                    .map((index) => {
                    return (jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", disabled: index < 0, "data-testid": `button-${index + firstPage}`, className: `pagination-link ${index + firstPage === currentPage ? `current` : ""}`, onClick: () => setPage(index + firstPage), onKeyDown: () => setPage(index + firstPage), children: jsxRuntimeExports.jsx("span", { children: index + 1 }) }) }, `p${index + firstPage}`));
                }), jsxRuntimeExports.jsxs(When, { condition: showLastPageJump, children: [jsxRuntimeExports.jsx("li", { className: "dots", "data-testid": "last-page-dots", children: jsxRuntimeExports.jsx(Text, { tag: "div", children: "..." }) }), jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", className: "pagination-link", "data-testid": "last-page", onClick: () => setPage(lastPage), onKeyDown: () => setPage(lastPage), children: jsxRuntimeExports.jsx("span", { children: nPages }) }) })] }), jsxRuntimeExports.jsx(When, { condition: currentPage < nPages - (isFirstPageZero ? 1 : 0), children: jsxRuntimeExports.jsx("li", { children: jsxRuntimeExports.jsx("button", { type: "button", className: "pagination-next", "data-testid": "next-page", onClick: () => setPage(currentPage + 1), onKeyDown: () => setPage(currentPage + 1), children: jsxRuntimeExports.jsx(SVGIcon, { name: "chevronRight" }) }) }) })] }) }));
}
function ExtendedPaginationBox({ size, from, count, setSize, setPage, small, sidebar, firstPage, }) {
    return (jsxRuntimeExports.jsxs(StyledPaginationBox, { small: small, sidebar: sidebar, children: [!small && (jsxRuntimeExports.jsx(PaginationAmount, { from: from, size: size, count: count, firstPage: firstPage })), jsxRuntimeExports.jsx(Pagination, { small: small, from: from, set: setPage, size: size, count: count, firstPage: firstPage }), !small && jsxRuntimeExports.jsx(PerPage, { size: size, set: setSize })] }));
}

function ExtendedTooltip({ caption, children, placement = "top", position = "center", status, showTimeout = 0, hideTimeout = 0, margin = DEFAULT_MARGIN, zIndex = theme.zindex.sticky, display, adjustPositionToViewportSize = false, ...rest }) {
    const wrapperRef = React.useRef(null);
    const tooltipRef = React.useRef(null);
    const viewportDimensions = useViewportDimensions(adjustPositionToViewportSize);
    const { isHovered, updateIsHovered } = useTooltipHover();
    const [tooltipDimensions, setTooltipDimensions] = React.useState(null);
    const [wrapperDimensions, setWrapperDimensions] = React.useState(null);
    const handleScroll = React.useCallback(() => {
        updateIsHovered(false, 0);
    }, [updateIsHovered]);
    useEvent({ name: "scroll", handler: handleScroll });
    React.useEffect(() => {
        if (isHovered &&
            tooltipRef.current instanceof HTMLDivElement &&
            wrapperRef.current instanceof HTMLDivElement) {
            setTooltipDimensions(tooltipRef.current.getBoundingClientRect());
            setWrapperDimensions(wrapperRef.current.getBoundingClientRect());
        }
    }, [isHovered]);
    if (caption == null) {
        return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: children });
    }
    const positionStyle = {
        ...getStyle({
            wrapperDimensions,
            tooltipDimensions,
            viewportDimensions,
            placement,
            position,
            margin,
            adjustPositionToViewportSize,
        }),
        zIndex,
    };
    return (jsxRuntimeExports.jsxs(TooltipWrapper, { ref: wrapperRef, display: display, onPointerEnter: () => updateIsHovered(true, showTimeout), onPointerLeave: () => updateIsHovered(false, hideTimeout), children: [jsxRuntimeExports.jsx(Tooltip, { isHovered: isHovered, caption: caption, tooltipRef: tooltipRef, status: status, positionStyle: positionStyle, ...rest }), children] }));
}
function Tooltip({ caption, isHovered, tooltipRef, status, positionStyle, style, ...rest }) {
    const { zIndex = theme.zindex.sticky } = positionStyle;
    return isHovered
        ? ReactDOM.createPortal(jsxRuntimeExports.jsx(StyledTooltip, { ref: tooltipRef, status: status, style: { ...positionStyle, ...style }, zIndex: zIndex, ...rest, children: caption }), document.body)
        : null;
}
const StyledTooltip = styled.div `
  position: fixed;
  min-width: 0;
  max-width: 16rem;
  font-size: ${theme.fontSizes.sm};
  line-height: 1rem;
  padding: ${theme.spacing.spacing02};
  background-color: ${theme.color.background.ui05};
  color: ${theme.color.text.text04};
  border-radius: ${theme.radius.md};
  z-index: ${({ zIndex }) => zIndex};
  opacity: 0;
  animation: 0.2s ease-in-out both fadeIn;

  ${({ status }) => status && getColor(status)}

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
const TooltipWrapper = styled.div `
  display: ${({ display }) => (display ? display : "inline-block")};
`;
function getColor(status) {
    return css `
    background-color: ${changeStatus(status)};
    color: ${theme.color.text.text04};
    &:after {
      border-top-color: ${changeStatus(status)};
    }
  `;
}
const changeStatus = (status) => {
    switch (status) {
        case "danger":
            return theme.color.interactive.error;
        case "warning":
            return theme.color.interactive.warning;
        case "success":
            return theme.color.interactive.success;
        case "notification":
            return theme.color.interactive.info;
        case "accent":
            return theme.color.interactive.accent;
        default:
            return theme.color.interactive.primary;
    }
};

function throttle(throttledFunction, timeout = 100) {
    const throttlePaused = { state: false };
    return () => {
        if (throttlePaused.state) {
            return;
        }
        throttlePaused.state = true;
        setTimeout(() => {
            throttledFunction();
            throttlePaused.state = false;
        }, timeout);
    };
}

function ExtendedPopover({ trigger = (jsxRuntimeExports.jsx(Button, { size: "sm", children: jsxRuntimeExports.jsx(SVGIcon, { size: "sm", name: "burgerMenu" }) })), content, placement = "right", position = "start", clickOutsideToClose = true, margin = DEFAULT_MARGIN, triggerOn = "click", closeOn = "click", adjustPositionToViewportSize = false, zIndex = theme.zindex.sticky, scrollTarget, closeOnScroll = true, }) {
    const triggerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const { isOpen, close, open, toggle } = useDisclosure();
    const [contentDimensions, setContentDimensions] = React.useState(null);
    const [triggerDimensions, setTriggerDimensions] = React.useState(null);
    const viewportDimensions = useViewportDimensions(adjustPositionToViewportSize);
    function closePopover() {
        close();
        setTriggerDimensions(null);
        setContentDimensions(null);
    }
    React.useEffect(() => {
        if (isOpen &&
            contentRef.current instanceof HTMLDivElement &&
            triggerRef.current instanceof HTMLDivElement) {
            setTriggerDimensions(triggerRef.current.getBoundingClientRect());
            setContentDimensions(contentRef.current.getBoundingClientRect());
        }
    }, [isOpen]);
    const handleClickOutside = React.useCallback((event) => {
        if (clickOutsideToClose &&
            contentRef.current &&
            triggerRef.current &&
            !contentRef.current.contains(event.target) &&
            !triggerRef.current.contains(event.target)) {
            closePopover();
        }
    }, [contentRef, triggerRef, clickOutsideToClose]);
    useEvent({ name: "click", handler: handleClickOutside, target: document });
    const handleScroll = throttle(React.useCallback(() => {
        closePopover();
    }, []));
    useEvent({
        name: "scroll",
        handler: closeOnScroll ? handleScroll : null,
        target: scrollTarget ?? window,
    });
    if (content == null) {
        return null;
    }
    const triggerProps = {
        ...(triggerOn === "click"
            ? {
                onClick: () => toggle(),
            }
            : {
                onMouseEnter: () => open(),
                onMouseLeave: () => {
                    if (closeOn === "hover") {
                        closePopover();
                    }
                },
            }),
    };
    const style = {
        ...getStyle({
            wrapperDimensions: triggerDimensions,
            tooltipDimensions: contentDimensions,
            viewportDimensions,
            placement,
            position,
            adjustPositionToViewportSize,
        }),
        zIndex,
    };
    return (jsxRuntimeExports.jsxs(TriggerWrapper, { ref: triggerRef, ...triggerProps, children: [trigger, jsxRuntimeExports.jsx(Popover, { content: content, contentRef: contentRef, visible: isOpen, style: style, margin: margin, placement: placement, zIndex: zIndex })] }));
}
function Popover({ contentRef, visible, style, margin, content, placement, zIndex, }) {
    // on empty style render popover outside viewport to prevent blinking effect
    const positionStyle = style.top != null && style.left != null
        ? style
        : { ...OUTSIDE_VIEWPORT_STYLE, zIndex };
    return visible
        ? ReactDOM.createPortal(jsxRuntimeExports.jsx(ContentWrapper, { ref: contentRef, style: positionStyle, zIndex: zIndex, children: jsxRuntimeExports.jsx(PaddingWrapper, { ...margin, placement: placement, children: content }) }), document.body)
        : null;
}
const TriggerWrapper = styled.div `
  display: inline-block;
`;
const ContentWrapper = styled.div `
  position: fixed;
  z-index: ${({ zIndex }) => zIndex};
`;

const ItemsContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const ItemsSection = styled.div `
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing04};
  width: 100%;
  ${({ stickToBottom }) => stickToBottom && getBorder()}
  padding-top: ${({ stickToBottom }) => stickToBottom ? theme.spacing.spacing03 : "0"};
  margin-top: ${({ stickToBottom }) => stickToBottom ? theme.spacing.spacing06 : "0"};
`;
function getBorder() {
    return css `
    border-top: solid 1px ${theme.color.border.border01};
  `;
}
const NavigationBarWrapper = styled.nav `
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 0;
  flex-direction: column;
  position: ${({ position }) => position};
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({ expanded }) => (expanded ? "14rem" : theme.spacing.spacing07)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-top: ${theme.spacing.spacing05};
  padding-bottom: ${theme.spacing.spacing04};
  padding-left: ${theme.spacing.spacing03};
  padding-right: ${theme.spacing.spacing03};
  row-gap: ${theme.spacing.spacing07};
  border-right: solid 1px ${theme.color.border.border01};
  ${({ expanded, expandableConfig }) => getTransition({ expanded, expandableConfig })}
  align-items: ${({ expanded }) => (expanded ? "start" : "center")};
  z-index: ${theme.zindex.sticky};
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
function getTransition({ expanded, expandableConfig, }) {
    const transition = expanded
        ? `width ${expandableConfig?.duration ?? ""} ${expandableConfig?.timingFunction ?? ""}`
        : "unset";
    return css `
    transition: ${transition};
  `;
}
const BurgerWrapper = styled.div `
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  width: 100%;
  height: 2rem;
  align-items: center;
  column-gap: ${theme.spacing.spacing02};
  justify-content: ${({ expanded }) => (expanded ? "start" : "center")};
  padding-left: ${({ expanded }) => (expanded ? theme.spacing.spacing01 : 0)};
  box-sizing: border-box;
`;
const StyledPopoverTrigger = styled.div `
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  column-gap: ${theme.spacing.spacing02};
`;
const StyledTriggerWrapper = styled.div `
  display: flex;
  align-items: center;
  border-radius: ${theme.radius.md};
  cursor: pointer;
  height: 2rem;
  width: 100%;

  &:hover {
    background-color: ${theme.color.interactive.secondary};
  }

  &:active {
    background-color: ${theme.color.interactive.secondaryActive};
  }

  &.active {
    background-color: ${theme.color.interactive.secondaryActive};
  }

  > * {
    width: 100%;
    height: 100%;
    display: flex;
    column-gap: ${theme.spacing.spacing02};
    padding-left: ${theme.spacing.spacing01};
  }
`;

const NavigationBarContext = React.createContext(undefined);

function useMenuBarConfiguration() {
    const context = React.useContext(NavigationBarContext);
    if (context === undefined) {
        throw new Error("useMenuBarConfiguration must be used within a NavigationBarContextProvider");
    }
    return context;
}

const popoverConfigDefault = {
    triggerOn: "hover",
    closeOn: "hover",
    position: "start",
};
function NavigationBarProvider({ children, popoverConfig = popoverConfigDefault, }) {
    const { isOpen: expanded, toggle: setExpanded } = useDisclosure();
    const { isOpen: expandedDone, close: closeExpandedDone, toggle: setExpandedDone, } = useDisclosure();
    const handleExpand = () => {
        if (expanded) {
            closeExpandedDone();
        }
        setExpanded();
    };
    const value = {
        expanded,
        expandedDone,
        handleExpand,
        popoverConfig,
        setExpanded,
        setExpandedDone,
    };
    return (jsxRuntimeExports.jsx(NavigationBarContext.Provider, { value: value, children: children }));
}

function NavigationBar(props) {
    return (jsxRuntimeExports.jsx(NavigationBarProvider, { popoverConfig: props.popoverConfig, children: jsxRuntimeExports.jsx(NavigationBarVisual, { ...props }) }));
}
function NavigationBarVisual({ position = "fixed", expandable = true, height = "100vh", backgroundColor = theme.color.background.ui01, closeOnLeave = false, expandableConfig = {
    timingFunction: "linear",
    duration: "0.2s",
}, children, }) {
    const { expanded, expandedDone, handleExpand, setExpanded, setExpandedDone } = useMenuBarConfiguration();
    if (children == null) {
        console.warn("Children is not provided. Component will not be rendered.");
        return null;
    }
    const icon = expandedDone ? "close" : "burgerMenu";
    const caption = expandedDone ? "Main Menu" : "";
    return (jsxRuntimeExports.jsxs(NavigationBarWrapper, { expanded: expanded, onTransitionEnd: () => setExpandedDone(expanded), onMouseLeave: () => {
            if (closeOnLeave) {
                setExpanded(false);
                setExpandedDone(false);
            }
        }, position: position, backgroundColor: backgroundColor, height: height, expandableConfig: expandableConfig, children: [expandable ? (jsxRuntimeExports.jsxs(BurgerWrapper, { expanded: expanded, onClick: handleExpand, children: [jsxRuntimeExports.jsx(SVGIcon, { name: icon, css: { padding: theme.spacing.spacing01, cursor: "pointer" } }), caption] })) : null, children] }));
}

function Trigger({ expanded, icon, caption }) {
    return expanded ? (jsxRuntimeExports.jsxs(StyledPopoverTrigger, { children: [jsxRuntimeExports.jsx(TriggerIcon, { icon: icon }), caption, jsxRuntimeExports.jsx(SVGIcon, { name: "chevronRight", size: "sm" })] })) : (jsxRuntimeExports.jsx(TriggerIcon, { icon: icon }));
}
function TriggerIcon({ icon }) {
    return jsxRuntimeExports.jsx(SVGIcon, { name: icon, css: { padding: theme.spacing.spacing01 } });
}

function MenuItem({ caption, icon, children }) {
    const { expanded, expandedDone, popoverConfig } = useMenuBarConfiguration();
    if (children != null) {
        const triggerElement = (jsxRuntimeExports.jsx(FlexContainer, { justifyContent: expanded ? "start" : "center", children: jsxRuntimeExports.jsx(Trigger, { expanded: expandedDone, icon: icon, caption: caption }) }));
        return (jsxRuntimeExports.jsx(StyledTriggerWrapper, { children: jsxRuntimeExports.jsx(ExtendedPopover, { trigger: triggerElement, margin: { left: 20 }, content: children, ...popoverConfig }) }));
    }
    return (jsxRuntimeExports.jsx(StyledTriggerWrapper, { children: jsxRuntimeExports.jsx(ExtendedTooltip, { caption: expanded ? null : caption, placement: "right", margin: { right: 20 }, children: jsxRuntimeExports.jsxs(FlexContainer, { justifyContent: expanded ? "start" : "center", children: [jsxRuntimeExports.jsx(SVGIcon, { name: icon, css: { padding: theme.spacing.spacing01 } }), expandedDone ? caption : ""] }) }) }));
}

const resetCss = css `
  /* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const scrollbarCustomStyles = css `
  html {
    scrollbar-face-color: ${color.support.grey};
    scrollbar-base-color: ${color.support.grey};
    scrollbar-highlight-color: ${color.support.grey};
    scrollbar-track-color: ${color.background.ui01};
    scrollbar-arrow-color: ${color.background.ui01};
    scrollbar-shadow-color: ${color.support.grey};
    scrollbar-dark-shadow-color: ${color.support.grey};
  }

  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: ${color.background.ui01};
  }
  ::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: ${color.support.grey};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-corner {
    background-color: ${color.background.ui01};
  }

  body * {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
  }
`;

const palette = {
    white: "#FFFFFF",
    black: "#000000",
    grey: {
        grey100: "#FCFCFD",
        grey200: "#FAFAFC",
        grey300: "#ECECF4",
        grey400: "#E4E4EE",
        grey500: "#DBDBE7",
        grey600: "#C8C8D8",
        grey700: "#8E8EAC",
        grey800: "#676783",
    },
    darkGrey: {
        darkGrey100: "#444452",
        darkGrey200: "#3B3B47",
        darkGrey300: "#363641",
        darkGrey400: "#32323B",
        darkGrey500: "#282830",
        darkGrey600: "#1F1F25",
        darkGrey700: "#16161A",
        darkGrey800: "#0C0C0F",
    },
    darkBlue: {
        darkBlue100: "#45459c",
        darkBlue200: "#3d3d8b",
        darkBlue300: "#353579",
        darkBlue400: "#2d2d67",
        darkBlue500: "#262655",
        darkBlue600: "#1e1e44",
        darkBlue700: "#161632",
        darkBlue800: "#06060f",
    },
    red: {
        red100: "#ffcdd2",
        red200: "#ef9a9a",
        red300: "#e57373",
        red400: "#ef5350",
        red500: "#f44336",
        red600: "#e53935",
        red700: "#d32f2f",
        red800: "#c62828",
        redTransparent: "#c6282880",
    },
    pink: {
        pink100: "#f8bbd0",
        pink200: "#f48fb1",
        pink300: "#f06292",
        pink400: "#ec407a",
        pink500: "#e91e63",
        pink600: "#d81b60",
        pink700: "#c2185b",
        pink800: "#ad1457",
    },
    purple: {
        purple100: "#e1bee7",
        purple200: "#ce93d8",
        purple300: "#ba68c8",
        purple400: "#ab47bc",
        purple500: "#9c27b0",
        purple600: "#8e24aa",
        purple700: "#7b1fa2",
        purple800: "#6a1b9a",
    },
    indigo: {
        indigo100: "#c5cae9",
        indigo200: "#9fa8da",
        indigo300: "#7986cb",
        indigo400: "#5c6bc0",
        indigo500: "#3f51b5",
        indigo600: "#3949ab",
        indigo700: "#303f9f",
        indigo800: "#283593",
    },
    blue: {
        blue100: "#bbdefb",
        blue200: "#90caf9",
        blue300: "#64b5f6",
        blue400: "#42a5f5",
        blue500: "#2196f3",
        blue600: "#1e88e5",
        blue700: "#1976d2",
        blue800: "#1565c0",
        blueTransparent: "#1565c080",
    },
    deepBlue: {
        deepBlue100: "#c0daf8",
        deepBlue200: "#92c0f3",
        deepBlue300: "#368ae9",
        deepBlue400: "#1770d5",
        deepBlue500: "#1258a7",
        deepBlue600: "#0d4079",
        deepBlue700: "#08274b",
        deepBlue800: "#030f1d",
    },
    cyan: {
        cyan100: "#b2ebf2",
        cyan200: "#80deea",
        cyan300: "#4dd0e1",
        cyan400: "#26c6da",
        cyan500: "#00bcd4",
        cyan600: "#00acc1",
        cyan700: "#0097a7",
        cyan800: "#00838f",
    },
    teal: {
        teal100: "#b2dfdb",
        teal200: "#80cbc4",
        teal300: "#4db6ac",
        teal400: "#26a69a",
        teal500: "#009688",
        teal600: "#00897b",
        teal700: "#00796b",
        teal800: "#00695c",
    },
    green: {
        green100: "#c8e6c9",
        green200: "#a5d6a7",
        green300: "#81c784",
        green400: "#66bb6a",
        green500: "#4caf50",
        green600: "#43a047",
        green700: "#388e3c",
        green800: "#1b5e20",
        greenTransparent: "#1b5e2080",
    },
    lightGreen: {
        lightGreen100: "#dcedc8",
        lightGreen200: "#c5e1a5",
        lightGreen300: "#aed581",
        lightGreen400: "#9ccc65",
        lightGreen500: "#8bc34a",
        lightGreen600: "#7cb342",
        lightGreen700: "#689f38",
        lightGreen800: "#558b2f",
    },
    yellow: {
        yellow100: "#fff9c4",
        yellow200: "#fff59d",
        yellow300: "#fff176",
        yellow400: "#ffee58",
        yellow500: "#ffeb3b",
        yellow600: "#fdd835",
        yellow700: "#fbc02d",
        yellow800: "#f9a825",
    },
    orange: {
        orange100: "#ffe0b2",
        orange200: "#ffcc80",
        orange300: "#ffb74d",
        orange400: "#ffa726",
        orange500: "#ff9800",
        orange600: "#fb8c00",
        orange700: "#f57c00",
        orange800: "#ef6c00",
        orangeTransparent: "#ef6c0080",
    },
};

const DARK_COLORS = [
    ["--color-scheme", "dark"],
    ["--background-body", palette.darkGrey.darkGrey500],
    ["--background-overlay", palette.black],
    ["--background-ui01", palette.darkGrey.darkGrey300],
    ["--background-ui02", palette.darkGrey.darkGrey200],
    ["--background-ui03", palette.darkGrey.darkGrey200],
    ["--background-ui04", palette.darkGrey.darkGrey100],
    ["--background-ui05", palette.grey.grey500],
    ["--background-error", palette.red.red300],
    ["--background-warning", palette.orange.orange300],
    ["--background-success", palette.green.green300],
    ["--background-info", palette.blue.blue300],
    ["--field-default", palette.darkGrey.darkGrey500],
    ["--field-disabled", palette.grey.grey300],
    ["--text-text01", palette.grey.grey200],
    ["--text-text02", palette.grey.grey600],
    ["--text-text03", palette.grey.grey800],
    ["--text-text04", palette.darkGrey.darkGrey700],
    ["--text-error", palette.red.red300],
    ["--text-warning", palette.orange.orange300],
    ["--text-success", palette.green.green300],
    ["--text-info", palette.blue.blue300],
    ["--border-border01", palette.darkGrey.darkGrey100],
    ["--border-border02", palette.grey.grey700],
    ["--border-input", palette.darkGrey.darkGrey500],
    ["--border-focus", palette.grey.grey800],
    ["--border-error", palette.red.red300],
    ["--border-success", palette.green.green300],
    ["--border-info", palette.blue.blue300],
    ["--border-warning", palette.orange.orange300],
    ["--border-discovery", palette.grey.grey400],
    ["--interactive-primary", palette.grey.grey500],
    ["--interactive-primaryHover", palette.grey.grey600],
    ["--interactive-primaryActive", palette.grey.grey700],
    ["--interactive-secondary", palette.darkGrey.darkGrey400],
    ["--interactive-secondaryHover", palette.darkGrey.darkGrey500],
    ["--interactive-secondaryActive", palette.darkGrey.darkGrey600],
    ["--interactive-link", palette.deepBlue.deepBlue200],
    ["--interactive-linkInverse", palette.deepBlue.deepBlue200],
    ["--interactive-error", palette.red.red400],
    ["--interactive-errorHover", palette.red.red500],
    ["--interactive-errorActive", palette.red.red600],
    ["--interactive-success", palette.green.green400],
    ["--interactive-successHover", palette.green.green500],
    ["--interactive-successActive", palette.green.green600],
    ["--interactive-warning", palette.orange.orange400],
    ["--interactive-warningHover", palette.orange.orange500],
    ["--interactive-warningActive", palette.orange.orange600],
    ["--interactive-info", palette.blue.blue400],
    ["--interactive-infoHover", palette.blue.blue500],
    ["--interactive-infoActive", palette.blue.blue600],
    ["--interactive-accent", palette.purple.purple300],
    ["--interactive-accentHover", palette.purple.purple400],
    ["--interactive-accentActive", palette.purple.purple500],
    ["--interactive-disabled", palette.darkGrey.darkGrey200],
    ["--support-red", palette.red.red400],
    ["--support-redInverse", palette.red.redTransparent],
    ["--support-pink", palette.pink.pink400],
    ["--support-purple", palette.purple.purple400],
    ["--support-indigo", palette.indigo.indigo300],
    ["--support-blue", palette.blue.blue400],
    ["--support-blueInverse", palette.blue.blueTransparent],
    ["--support-grey", palette.grey.grey800],
    ["--support-greyInverse", palette.grey.grey300],
    ["--support-cyan", palette.cyan.cyan400],
    ["--support-teal", palette.teal.teal400],
    ["--support-green", palette.lightGreen.lightGreen400],
    ["--support-greenInverse", palette.green.greenTransparent],
    ["--support-lightGreen", palette.lightGreen.lightGreen400],
    ["--support-yellow", palette.yellow.yellow400],
    ["--support-orange", palette.orange.orange400],
    ["--support-orangeInverse", palette.orange.orangeTransparent],
];

const LIGHT_COLORS = [
    ["--color-scheme", "light"],
    ["--background-body", palette.grey.grey300],
    ["--background-overlay", palette.black],
    ["--background-ui01", palette.white],
    ["--background-ui02", palette.grey.grey100],
    ["--background-ui03", palette.grey.grey200],
    ["--background-ui04", palette.grey.grey300],
    ["--background-ui05", palette.darkBlue.darkBlue700],
    ["--background-error", palette.red.red500],
    ["--background-warning", palette.orange.orange500],
    ["--background-success", palette.green.green500],
    ["--background-info", palette.blue.blue600],
    ["--field-default", palette.grey.grey100],
    ["--field-disabled", palette.grey.grey300],
    ["--text-text01", palette.darkBlue.darkBlue700],
    ["--text-text02", palette.grey.grey800],
    ["--text-text03", palette.grey.grey700],
    ["--text-text04", palette.white],
    ["--text-error", palette.red.red700],
    ["--text-warning", palette.orange.orange800],
    ["--text-success", palette.green.green700],
    ["--text-info", palette.blue.blue700],
    ["--border-border01", palette.grey.grey300],
    ["--border-border02", palette.grey.grey800],
    ["--border-input", palette.grey.grey500],
    ["--border-focus", palette.grey.grey800],
    ["--border-error", palette.red.red700],
    ["--border-success", palette.green.green700],
    ["--border-info", palette.blue.blue700],
    ["--border-warning", palette.orange.orange700],
    ["--border-discovery", palette.grey.grey700],
    ["--interactive-primary", palette.darkBlue.darkBlue500],
    ["--interactive-primaryHover", palette.darkBlue.darkBlue700],
    ["--interactive-primaryActive", palette.darkBlue.darkBlue800],
    ["--interactive-secondary", palette.grey.grey300],
    ["--interactive-secondaryHover", palette.grey.grey400],
    ["--interactive-secondaryActive", palette.grey.grey500],
    ["--interactive-link", palette.deepBlue.deepBlue500],
    ["--interactive-linkInverse", palette.deepBlue.deepBlue200],
    ["--interactive-error", palette.red.red600],
    ["--interactive-errorHover", palette.red.red700],
    ["--interactive-errorActive", palette.red.red800],
    ["--interactive-success", palette.green.green600],
    ["--interactive-successHover", palette.green.green700],
    ["--interactive-successActive", palette.green.green800],
    ["--interactive-warning", palette.orange.orange600],
    ["--interactive-warningHover", palette.orange.orange700],
    ["--interactive-warningActive", palette.orange.orange800],
    ["--interactive-info", palette.blue.blue600],
    ["--interactive-infoHover", palette.blue.blue700],
    ["--interactive-infoActive", palette.blue.blue800],
    ["--interactive-accent", palette.purple.purple600],
    ["--interactive-accentHover", palette.purple.purple700],
    ["--interactive-accentActive", palette.purple.purple800],
    ["--interactive-disabled", palette.grey.grey300],
    ["--support-red", palette.red.red500],
    ["--support-redInverse", palette.red.red100],
    ["--support-pink", palette.pink.pink500],
    ["--support-purple", palette.purple.purple500],
    ["--support-indigo", palette.indigo.indigo500],
    ["--support-blue", palette.blue.blue500],
    ["--support-blueInverse", palette.blue.blue100],
    ["--support-grey", palette.grey.grey600],
    ["--support-greyInverse", palette.grey.grey300],
    ["--support-cyan", palette.cyan.cyan500],
    ["--support-teal", palette.teal.teal500],
    ["--support-green", palette.green.green500],
    ["--support-greenInverse", palette.green.green100],
    ["--support-lightGreen", palette.lightGreen.lightGreen500],
    ["--support-yellow", palette.yellow.yellow600],
    ["--support-orange", palette.orange.orange500],
    ["--support-orangeInverse", palette.orange.orange100],
];

var THEME_OPTIONS;
(function (THEME_OPTIONS) {
    THEME_OPTIONS["LIGHT"] = "LIGHT";
    THEME_OPTIONS["DARK"] = "DARK";
})(THEME_OPTIONS || (THEME_OPTIONS = {}));
function getPreferredBrowserTheme() {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? THEME_OPTIONS.DARK
        : THEME_OPTIONS.LIGHT;
}
function isThemeValue(value) {
    return value === "LIGHT" || value === "DARK";
}
const useThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = React.useState(() => {
        const savedThemeValue = window.localStorage.getItem("NC_GNUI_THEME") ?? "";
        return isThemeValue(savedThemeValue)
            ? THEME_OPTIONS[savedThemeValue]
            : getPreferredBrowserTheme();
    });
    React.useEffect(() => {
        const newTheme = currentTheme === THEME_OPTIONS.DARK ? DARK_COLORS : LIGHT_COLORS;
        newTheme.forEach((element) => {
            document.documentElement.style.setProperty(element[0], element[1]);
        });
    }, [currentTheme]);
    const setTheme = (value) => {
        setCurrentTheme(value);
        localStorage.setItem("NC_GNUI_THEME", THEME_OPTIONS[value]);
    };
    return { currentTheme, setTheme };
};

const GlobalStyle = createGlobalStyle `
  ${resetCss};

  html {
    font-size: 16px;
  }

  html, body {
     font-family: ${theme.typography.fonts.body};
     background: ${theme.color.background.body};
     color: ${theme.color.text.text01};
     font-weight: ${theme.fontWeights.regular};
     line-height: ${theme.lineHeight};
  }

  code {
    font-family: ${theme.typography.fonts.body};
    font-weight: ${theme.fontWeights.regular};
  }

  a {
    color: ${theme.color.interactive.link};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
      color: ${theme.color.interactive.link}
    }
  }

  ${({ customScrollbars }) => customScrollbars && scrollbarCustomStyles}
`;
/**
 * Component for setting global styles using GNUI theme.
 * @param props - properties to configure
 * @param props.customScrollbars - Option to enable GNUI theme based styling for scrollbars.
 */
function SetGlobalStyle({ customScrollbars = false }) {
    useThemeSwitcher();
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs(Helmet, { children: [jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), jsxRuntimeExports.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }), jsxRuntimeExports.jsx("link", { href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap", rel: "stylesheet" })] }), jsxRuntimeExports.jsx(GlobalStyle, { customScrollbars: customScrollbars })] }));
}

export { Accordion, AccordionHeader, AccordionItem, Align, BarChart, Box, Breadcrumbs, BrickLoader, Button, ButtonNext, ButtonPrevious, CancelButton, Checkbox, CheckboxGroup, CheckboxTree, CheckmarkCheckbox, Clear, CloseButton, Code, Datepicker, Description, Dropdown, DropdownButton, DropdownIcon, DropdownItem, DropdownMenu, DropdownWrapper, ExtendedPaginationBox, ExtendedPopover, ExtendedTooltip, Flex, FlexContainer, Form, FormButtons, Container$4 as GnuiContainer, HeaderIcon, Heading, IconBox, IndeterminateCheckbox, Inner$2 as Inner, Input, InputPassword, InputSearch, ItemsContainer, ItemsSection, Label, List, ListLoader, LoadMore, LoadMoreList, Loader, MenuItem, Message, MessageWrapper, Modal, ModalConfirm, MultipleSelect, Navigation, NavigationBar, PageTitle, PageTitleBreadcrumbs, PaginationBox, PieChart, Popover$1 as Popover, Radio, RadioGroup, SVGIcon, Select, SelectButton, SetGlobalStyle, Sidebar, Spacer, Spinner, StickyBar, StyledTab, StyledTag, SubmitButton, Switch, THEME_OPTIONS, Tab, TabContainer, Table, Tabs, TabsContent, Tag, Text, Textarea, TimeRangePicker, Toggle, Tooltip$1 as Tooltip, Upload, bp, customMultiColorStyles, map, theme, useThemeSwitcher };
//# sourceMappingURL=index.esm.js.map
