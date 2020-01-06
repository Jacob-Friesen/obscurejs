Obscure JavaScript Examples
===========================

Code from [obscurejavascript.tumblr.com](http://obscurejavascript.tumblr.com) in an easy to download format. All of the code can be run in Node.js and most of it in a browser (what can't is noted below). A few posts require libraries and these are found in the node_modules folder and are specified by packages.json. This is a standard NPM layout.

*Just like the blog, there may be some examples that do not good follow JavaScript patterns for demonstration purposes.*

Example Explanations
====================
Each example corresponds directly to a blog post:

<h5>2019</h5>
<hr/>

* [allSettled.js](https://obscurejavascript.tumblr.com/post/184347636679/waiting-for-all-promises-to-execute-in-javascript): Creating a `Promise.allSettled` function that only is fulfilled once all promises run even if there are errors.
* [ansiColors.js](https://obscurejavascript.tumblr.com/post/185637282341/adding-dynamic-command-line-loading-messages): How to use ANSI codes to format CLI text and provide simple UIs like dynamic loading screens. **Node.js Only**
* [backendImports.mjs](https://obscurejavascript.tumblr.com/post/189416803990/using-es6-modules-in-nodejs): How to do backend imports in Node.js. **Node.js Only**
* [capitalizeSentence.js](https://obscurejavascript.tumblr.com/post/184995360724/a-simple-capitalize-function-for-javascript): Capitalizing sentences instead of just one word with Lodash.
* [changeObjKeys.js](https://obscurejavascript.tumblr.com/post/189274891778/change-object-keys-in-an-array-of-objects-in): How to make a function to transform object keys to values in an array of objects.
* [classStatic.js](http://obscurejavascript.tumblr.com/post/182170538720/static-class-methods-in-javascript): The new way of declaring static methods in classes.
* [clearAllTimeouts.js](http://obscurejavascript.tumblr.com/post/183031058225/how-to-clear-all-timeouts-in-javascript): Two tactics to clear all timeouts globally in an application.
* [compact.js](https://obscurejavascript.tumblr.com/post/185158518225/using-compact-to-simplify-conditional-logic-in): Using a compact function that eliminates falsy values in an array to simplify logic in compination with arrays.
* [consoleStringSubstitute.js](https://obscurejavascript.tumblr.com/post/185478406341/string-substitutions-in-console-strings): Using `console.log`'s built in formatters and inspector to help with debugging.
* [decimalOperations.js](http://obscurejavascript.tumblr.com/post/182875060400/correct-decimal-calculations-in-javascript): How decimals operations can be computed correctly.
* [defaultValuesObjectParams.js](http://obscurejavascript.tumblr.com/post/182353099170/default-values-for-object-properties-in-javascript): How default values can be used for functions taking a single object as configuration instead of a bunch of arguments.
* [exponent.js](http://obscurejavascript.tumblr.com/post/184184974181/the-exponent-operator-in-javascript): A specific syntax for exponents.
* [invert.js](https://obscurejavascript.tumblr.com/post/185321443369/switching-keys-and-values-in-javascript): Inverting keys and values for dual purpose lookup objects.
* [keyBy.js](https://obscurejavascript.tumblr.com/post/189689160331/quick-object-searches-in-arrays-of-objects-with): A function to transform arrays of objects into key value pairs for fast searching.
* [mapObject.js](https://obscurejavascript.tumblr.com/post/186286482043/mapping-objects-in-javascript): The various ways of mapping JavaScript objects.
* [metaClass.js](https://obscurejavascript.tumblr.com/post/186611899759/metaprogramming-classes-in-javascript): How to automate the construction of JS classes.
* [promiseAny.js](https://obscurejavascript.tumblr.com/post/189814490444/waiting-for-the-first-returned-api-result-with): How to get the fastest return API result with `Promise.any` and a simple example Polyfill for it.
* [replayFunction.js](https://obscurejavascript.tumblr.com/post/188956447341/replaying-javascript-functions-without-variables): How to recall functions with the last arguments without external variables or libraries.
* [spreadArrayAdditions.js](https://obscurejavascript.tumblr.com/post/188027834126/array-insertions-with-the-spread-operator): Merging arrays with the spread operator.
* [strict.js](http://obscurejavascript.tumblr.com/post/183679265125/should-use-strict-be-used-everywhere): An example of why adding 'use strict' to legacy code can cause bugs.
* [stringRepeat.js](http://obscurejavascript.tumblr.com/post/181761146545/string-repeat-in-javascript): How `String.repeat` can be used to easily create nicely formatted console messages.
* [swap.js](http://obscurejavascript.tumblr.com/post/183848351969/quickly-swapping-values-in-javascript): How to swap variables or parts of data structures without temporary variables using assignment destructuring.
* [times.js](https://obscurejavascript.tumblr.com/post/186122487680/using-a-times-function-to-simplify-nested-array): How a simple repeater function that accepts a function can be used to simplify nested loops.
* [urlObj.js](https://obscurejavascript.tumblr.com/post/184509895083/fetching-query-params-using-the-url-object-in): How the `URL` object can be used to greatly simplify URL string operations.
* [varUsage.js](http://obscurejavascript.tumblr.com/post/183362895409/what-is-the-point-of-var-in-modern-javascript): An explanation of why `var` is still necessary in some cases even though `let` exists.
* [watchProperties.js](https://obscurejavascript.tumblr.com/post/188326315346/how-to-watch-property-updates-in-javascript): How to watch JS object property changes with code for debugging.

<h5>2018</h5>
<hr/>

* [addCSSRule.js](http://obscurejavascript.tumblr.com/post/175212829015/adding-css-rules-directly-in-javascript): An example of adding CSS rules directly via JavaScript to reduce DOM manipulations. **Browser Only**
* [arrayDelete.js](http://obscurejavascript.tumblr.com/post/172491066039/array-deletes-in-javascript): The most common ways of doing Array deletes in JavaScript along with the advantages/disadvantages of doing each.
* [async.js](http://obscurejavascript.tumblr.com/post/172006278743/async-function-declarations-in-javascript): How the `async` function declarations can simplify async code. **Node 8+/Modern browsers only**
* [asyncAndIf.js](http://obscurejavascript.tumblr.com/post/179052747196/async-functions-and-if-statements): How the `async` helps with conditional logic in asynchronous requests.
* [asyncAndLoops.js](http://obscurejavascript.tumblr.com/post/178828976277/async-functions-and-for-loops): How the `async` function can be used in loops.
* [asyncHooks.js](http://obscurejavascript.tumblr.com/post/174762781120/nodejs-async-hooks): How to track all async operations in Node.js without altering the original code. **Node 8+ only**
* [autoReloadTester.js](http://obscurejavascript.tumblr.com/post/178387949840/more-interactive-programming-in-javascript): The file used to demonstrate automatic script reloading without a framework for backend code. **Node.js Only**
* [checkLocalStorageMemory.js](http://obscurejavascript.tumblr.com/post/180249304819/check-the-size-of-localstorage-in-javascript-with): How to check the current webpage local storage usage programmatically.
* [classInheritance.js](http://obscurejavascript.tumblr.com/post/169971320661/es6-class-inheritance): How the `class` syntax simplifies inheritance
* [clearArraySameReference.js](http://obscurejavascript.tumblr.com/post/179286710719/clearing-an-array-without-changing-its-reference): How to clear an array and keep the same reference.
* [computedPropertyNames.js](http://obscurejavascript.tumblr.com/post/174311258435/computed-property-names-in-javascript): Examples of how Object Literal Computer Property Names can be useful.
* [conformsTo.js](http://obscurejavascript.tumblr.com/post/177913180367/structured-object-validation-in-javascript): A generic way to do structured object validation.
* [console.js](http://obscurejavascript.tumblr.com/post/180962019533/javascripts-extremely-useful-console-object): The most useful ways the JS console can be used (beyond simple string logging)
* [countBy.js](http://obscurejavascript.tumblr.com/post/177173600645/generic-count-handler-in-javascript): Generic counting via a simple callback pattern.
* [customArrayOrder.js](http://obscurejavascript.tumblr.com/post/170237362243/custom-array-ordering-in-javascript): How JavaScript's simple object construction and array usage combine to make a very simple custom ordering algorithm.
* [customIterable.js](http://obscurejavascript.tumblr.com/post/171025564105/custom-iterables-in-javascript): How custom Iterables are implemented in JavaScript.
* [deepFlatten.js](http://obscurejavascript.tumblr.com/): How to implement deep array flattening in JavaScript.
* [destructParams.js](http://obscurejavascript.tumblr.com/post/172246570097/destructuring-function-parameters-in-javascript): How destructuring can be used for function parameters to simplify multi value callback returns.
* [duplicateKeyChecks.js](http://obscurejavascript.tumblr.com/post/176166959840/duplicate-key-checks-in-javascript): An easy tactic to do duplicate key checks in JS and how to extend that to do duplicate format checks.
* [eNotation.js](http://obscurejavascript.tumblr.com/post/170506488877/javascript-exponential-notation): JavaScript's Exponential Notation and how it makes reading and working with very large or very small numbers much easier.
* [es6Class.js](http://obscurejavascript.tumblr.com/post/169705220740/es6-classes): A comparison of classes with and without the `class` keyword in JavaScript.
* [externalLoopExtraction.js](http://obscurejavascript.tumblr.com/post/174539581583/extracting-loops-via-generators-in-javascript): How to extract features in a function that has a loop with passing in a callback. 
* [functionName.js](http://obscurejavascript.tumblr.com/post/171768070910/get-function-and-classnames-from-anywhere-in): How to get class and function names in JavaScript which is useful for debugging and exploring 3rd party libraries.
* [getFirstKey.js](http://obscurejavascript.tumblr.com/post/175683351809/getting-the-first-key-of-an-object-in-javascript): A quick an efficient way to get the first key of an object in JavaScript.
* [getValue.js](http://obscurejavascript.tumblr.com/post/180728229163/get-object-property-paths-safely-in-javascript): How to get values from complex objects quickly and safely.
* [iifeReplace.js](http://obscurejavascript.tumblr.com/post/170768910923/an-alternative-for-iifes-in-javascript): When and how IIFEs can be replaced by a simple block scope.
* [intersection.js](http://obscurejavascript.tumblr.com/post/181177042324/intersectionby-and-intersectionwith-in-javascript): How to discover common array elements across arrays with objects.
* [intl.js](http://obscurejavascript.tumblr.com/post/181354928663/formatting-numbers-with-the-built-in-intl-object): Formatting numbers in JavaScript via the native `Intl` object.
* [lockObject.js](http://obscurejavascript.tumblr.com/post/176416505318/preventing-modifications-to-objects-in-javascript): The 2 ways of locking objects in JavaScript.
* [lookupTable.js](http://obscurejavascript.tumblr.com/post/180007826623/automating-property-to-value-map-creation): A simple lookup table used to reduce large nested loop performance issues.
* [lookupTableAbstracted.js](http://obscurejavascript.tumblr.com/post/180007826623/automating-property-to-value-map-creation): How to abstract the lookup table creation
* [mathMax.js](http://obscurejavascript.tumblr.com/post/172732215812/math-max-in-javascript): Math.max and how it can be used to simplify algorithms.
* [memoize.js](http://obscurejavascript.tumblr.com/post/177666171155/caching-functions-in-javascript): How to memoize any function in JavaScript that is determined solely based on its parameters.
* [naturalStringSort.js](http://obscurejavascript.tumblr.com/post/171529460144/natural-string-sorts-in-javascript): A simple way to implement natural looking string sorts.
* [nodeEnvironmentVariables.js](http://obscurejavascript.tumblr.com/post/173424392295/nodejs-environment-variables): Single setting and config files with Node.js environment variables.
* [noDeletion.js](http://obscurejavascript.tumblr.com/post/173200196881/when-variables-cannot-be-removed-in-javascript): When variables cannot be removed in JS.
* [once.js](http://obscurejavascript.tumblr.com/post/178610922588/restricting-the-number-of-times-a-function-can-be): Restricting function calls to once.
* [orderBy.js](http://obscurejavascript.tumblr.com/post/177420178745/order-by-in-javascript): Generic multi-property ordering in JavaScript.
* [parallelAsyncAwait.js](http://obscurejavascript.tumblr.com/post/180491491480/parallel-asyncawait): How promises can work with parallel async calls.
* [rounding.js](http://obscurejavascript.tumblr.com/post/171282166800/simple-rounding-in-javascript): How `toFixed` can be used to implement rounding and its other uses.
* [setObject.js](http://obscurejavascript.tumblr.com/post/176922898899/creating-objects-from-property-paths-in-javascript): How to create objects from property paths.
* [size.js](http://obscurejavascript.tumblr.com/post/178152937978/generic-size-finding-in-javascript): A generic way to find the size of multiple types.
* [stringNormalize.js](http://obscurejavascript.tumblr.com/post/173645997088/string-normalize-in-javascript): How to deal with string characters that only appear as one character, but count as 2.
* [jsShorthand.js](http://obscurejavascript.tumblr.com/post/172968549600/shorthand-javascript-conversion-syntax-and): Shorthand conversion syntaxes and the slightly longer and more consistent versions of them.
* [sleep.js](http://obscurejavascript.tumblr.com/post/179526695453/a-javascript-sleep-function-using-async): How to create a non-callback function for doing arbitrary waiting.
* [spreadArgs.js](http://obscurejavascript.tumblr.com/post/174983851732/spread-for-function-arguments-in-javascript): How the spread operator can be used to simplify dynamic function calls.
* [taggedStringReplace.js](http://obscurejavascript.tumblr.com/post/175924040173/the-stringindexof-second-argument-in-javascript): The second argument of `String.indexOf` and how it is useful beyond performance optimization.
* [uniqify.js](http://obscurejavascript.tumblr.com/post/174088971784/one-line-unique-array-creation-in-javascript): A simple one line method to make arrays unique without libraries.
* [valueOf.js](http://obscurejavascript.tumblr.com/post/173868722924/valueof-in-javascript): How any object can act like a number via the `valueOf` property. Newer syntax added since the 2017 post and a much better introduction.
* [zipObject.js](http://obscurejavascript.tumblr.com/post/176668199848/zip-object-in-javascript): How Zip Object works and why it is useful for debugging.

<h5>2017</h5>
<hr/>

* [arrayFrom.js](http://obscurejavascript.tumblr.com/post/160414597180/arrayfrom-in-javascript): Array.from and how it simplifies multiple types of array conversions.
* [arrayMove.js](http://obscurejavascript.tumblr.com/post/167914853934/simple-javascript-array-moves): Move elements in arrays without having to create lots of variables and logic.
* [callBind.js](http://obscurejavascript.tumblr.com/post/166682398581/javascript-function-borrowing): How call and bind can be used to make `this` based functions easier to work with and can make them borrowable.
* [circularReferenceA.js](http://obscurejavascript.tumblr.com/post/165697176198/circular-references-in-nodejs): How Node.js shows circular references and strategies to deal with them. **Node.js Only**
* [conditionalToHash.js](http://obscurejavascript.tumblr.com/post/163876444892/expressing-conditions-in-hashes-in-javascript): Simplify and automating logic with hashes.
* [constructor.js](http://obscurejavascript.tumblr.com/post/157159010351/constructors-in-javascript): How the constructor property in ever JS object is useful.
* [defaultFunctionParameters.js](http://obscurejavascript.tumblr.com/post/167168626535/default-parameters-for-functions-in-javascript): How specifying parameter defaults for functions can significantly reduce needed syntax.
* [destructuringAssignment.js](http://obscurejavascript.tumblr.com/post/160918757847/destructuring-assignments-in-javascript): Assigning to multiple variables by mapping directly to an object. 
* [findAsyncInOrder.js](http://obscurejavascript.tumblr.com/post/161975657381/finding-a-list-of-objects-asynchronously-in): A quick pattern to find a set of async items that can be easily switched to other forms.
* [findIndex.js](http://obscurejavascript.tumblr.com/post/165943221448/find-index-in-javascript): How findIndex can be useful compared to find functions in some cases.
* [fluentInterface.js](http://obscurejavascript.tumblr.com/post/158860952073/fluent-interfaces-in-javascript): An explanation of fluent interfaces and how repeater methods can be added to them.
* [forOf.js](http://obscurejavascript.tumblr.com/post/159384822891/forof-in-javascript): What `for...of` loops are.
* [getterSetterAutomation.js](http://obscurejavascript.tumblr.com/post/159121952199/gettersetter-automation-in-javascript): How to automate getters and setters for functions.
* [getterIssue.js](http://obscurejavascript.tumblr.com/post/166189076070/when-assignments-dont-work-in-javascript): How assignment operations in JavaScript can fail due to assignment operation overwrites.
* [hasDecimals.js](http://obscurejavascript.tumblr.com/post/161436529424/checking-for-decimals-in-javascript): A quick way to check for decimals for all types.
* [infinity.js](http://obscurejavascript.tumblr.com/post/156857118520/infinity-in-javascript): Infinity and JS calculation error handling.
* [import.js](http://obscurejavascript.tumblr.com/post/168651638118/es6-import-and-export-statements): How the ES6 import and export statements work. **Browser Only**
* [jsonsExtraCharacters.js](http://obscurejavascript.tumblr.com/post/163336538660/json-supports-more-characters-than-javascript): How JSON supporting extra characters can mess with JavaScript. JSFiddle here: https://jsfiddle.net/jacobfriesen/cxgv37x4/1/
* [letAndConstUsage.js](http://obscurejavascript.tumblr.com/post/157452525608/when-to-use-let-and-const-in-javascript): When to use `let` and `const` in JS.
* [makeImmutable.js](http://obscurejavascript.tumblr.com/post/162247443799/making-any-object-fully-immutable-in-javascript): How to make any object in JavaScript immutable.
* [mapObject.js](http://obscurejavascript.tumblr.com/post/159909708344/javascripts-map-object): An example of the `Map` object and how it can be useful compared to plain objects
* [nodeExec.js](http://obscurejavascript.tumblr.com/post/161173230217/nodejs-exec) Executing external system commands in Node.js. **Node.js Only**
* [newImplementation.js](http://obscurejavascript.tumblr.com/post/158320067365/new-explained-in-javascript): Demonstrating how `new` works with a polyfill-like implementation.
* [notification.js](http://obscurejavascript.tumblr.com/post/158597389283/the-notification-api-in-javascript): Demonstrating the Notification API. **Browser Only**
* [observable1.js](http://obscurejavascript.tumblr.com/post/162520142194/observables-in-javascript-api-simplification): A demonstration of Observable API simplification with a click event. Event is simulated in Node.js.
* [observable2.js](http://obscurejavascript.tumblr.com/post/162793479479/observables-in-javascript-abstraction): A demonstration of Observable API abstraction centered around click events. Extented from observable1.js. **Browser Only**
* [partialModuleImports.js](http://obscurejavascript.tumblr.com/post/166437970603/es6-style-module-imports-explained): The syntax of the new style of module imports in ES6 and how they can be reduced to standard ES6 syntax. **Node.js Only**
* [preciseAnimations.js](http://obscurejavascript.tumblr.com/post/164682092069/precise-animations-with-javascript): How to make JS animations precise via self adjusting timers. **Browser Only**
* [protoVsPrototype.js](http://obscurejavascript.tumblr.com/post/157746968556/proto-vs-prototype-in-javascript): The difference between `__proto__` and `prototype` and their usage.
* [promiseAll.js](http://obscurejavascript.tumblr.com/post/160669781625/easily-handle-multiple-concurrent-requests-via): Easily managing multiple concurrent async requests using `Promise.all`.
* [promisify.js](http://obscurejavascript.tumblr.com/post/167670657130/javascript-promisify): How `util.promisify` can be used to transform async functions into promises.
* [reflect.js](http://obscurejavascript.tumblr.com/post/164145395222/reflect-in-javascript): How the ES6 `Reflect` API can be used as a single interface for many general JS operations.
* [replaceThisParameter.js](http://obscurejavascript.tumblr.com/post/168402850108/making-this-based-apis-easier-to-use-in-javascript): How to transform `this` based interfaces into parameter-only ones. The tactic works in any environment, but the examples are **Browser only**.
* [restProperties.js](http://obscurejavascript.tumblr.com/post/166918990519/javascript-spread-properties): How Rest Properties can be used to simply object operations **Node 8+**.
* [regex.js](http://obscurejavascript.tumblr.com/post/163064136920/simplifying-checks-with-regexp-in-javascript): A demonstration of simple regex expressions and combining them.
* [removeWhitespace.js](http://obscurejavascript.tumblr.com/post/168158324380/cleaning-up-whitespace-in-javascript-strings): A demonstration of quick whitespace replacing.
* [ruby.js](http://obscurejavascript.tumblr.com/post/163607837473/how-close-can-js-get-to-ruby): How close to Ruby syntax JS can get without parsing a source string. Technically, Node.js only, but just replace `global` with `window` and it will work with very modern browsers.
* [setObject.js](http://obscurejavascript.tumblr.com/post/160162150223/set-in-javascript): How the set object can be useful.
* [splitLimit.js](http://obscurejavascript.tumblr.com/post/159648127511/javascript-split-and-the-limit-property): Split and the usefulness of the limit property.
* [spread.js](http://obscurejavascript.tumblr.com/post/164942398036/spread-syntax-in-javascript): The spread syntax in JavaScript and how it simplifies function cals and array operations.
* [templateLiteral.js](http://obscurejavascript.tumblr.com/post/161705493376/template-literals-in-javascript): An easier way of doing multiple line strings are replaces.
* [throw.js](http://obscurejavascript.tumblr.com/post/156546898095/throw-and-custom-errors-in-javascript): Examples of throws, Error based objects and how they relate to stack traces.
* [typeCoercion.js](http://obscurejavascript.tumblr.com/post/167422407608/when-type-coercion-is-useful-in-javascript): When automatic type coercion can make code more readable.
* [unique.js](http://obscurejavascript.tumblr.com/post/165446144823/quick-unique-value-filter-in-javascript): How simple unique value checking is implemented in JavaScript including with a callback.
* [valueOf.js](http://obscurejavascript.tumblr.com/post/158036766746/valueof-in-javascript): How to specify an Objects value when used in numeric operations and how it can be useful.
* [webWorker.js](http://obscurejavascript.tumblr.com/post/156229458463/web-workers-in-javascript): A simple example of how Web Workers make interfaces responsive when doing complex operations. **Browser Only**

<h5>2016</h5>
<hr/>

* [applyApiCalls.js](http://obscurejavascript.tumblr.com/post/149943760977/apply-to-api-calls-in-javascript): How Array.apply can be used as a general pattern to add more functionality to base API calls.
* [assignTo.js](http://obscurejavascript.tumblr.com/post/146858921210/assignto-in-javascript): A function to drastically reduce syntax for asynchronous object property updates.
* [at.js](http://obscurejavascript.tumblr.com/post/145114905723/easily-reading-deep-objects-in-javascript): A function to reduce the time to get values from potentially empty deep objects.
* [attempt.js](http://obscurejavascript.tumblr.com/post/147906605359/attempt-in-javascript): A function to simplify try and catch. See the corresponding blog post for why this is useful.
* [bitwise.js](http://obscurejavascript.tumblr.com/post/152824422976/when-bitwise-operations-are-useful-in-javascript) A simple example of when bitwise operations can lead to large performance advantages.
* [callLater.js](http://obscurejavascript.tumblr.com/post/140584717376/calllater-in-javascript): A function to store functions to be called later.
* [callbackWith.js](http://obscurejavascript.tumblr.com/post/145817349940/simplifying-asynchonous-unit-tests-in-javascript): A way to simplify unit tests by making a function that provides a quick way to mock out functions that call calbacks. Also includes an argsAtSync utility.
* [compose.js](http://obscurejavascript.tumblr.com/post/140984777408/compose-in-javascript): A function used to simplify sequences of functions.
* [curry.js](http://obscurejavascript.tumblr.com/post/147200074182/curries-in-javascript): A function that only gets called when passed all arguments otherwise it returns a curry.
* [extendLodash.js](http://obscurejavascript.tumblr.com/post/151895919972/extending-lodash): How to extend Lodash with details for chaining and how it is used across imports.
* [flatMap.js](http://obscurejavascript.tumblr.com/post/144412398726/flatmap-in-javascript): A map function that allows multiple values or no values to be returned for each array element. Allows returns that are shorter than the original array.
* [functionToString.js](https://github.com/Jacob-Friesen/obscurejs/blob/master/2016/functionToString.js): About the Function.toString method and how it can be used for debugging and function regeneration.
* [generator.js](http://obscurejavascript.tumblr.com/post/153742848043/generators-and-async-operations-in-javascript): How to significantly reduce the number of callbacks for asynchronous operations by using generators.
* [getPagePosition.js](http://obscurejavascript.tumblr.com/post/154043676094/getting-an-elements-absolute-page-position-in): How to get an HTML elements position in the page no matter where it is. **Browser Only**
* [getters.js](http://obscurejavascript.tumblr.com/post/153440752580/getters-and-setters-in-javascript): Getters and Setters similar to other Object Oriented Languages in JavaScript.
* [groupBy.js](http://obscurejavascript.tumblr.com/post/150924290090/group-by-in-javascript): An array of object grouping function and what it can be applied to.
* [identity.js](http://obscurejavascript.tumblr.com/post/143335631545/how-identity-functions-are-useful-in-javascript): How the identity function can be useful.
* [intersection.js](http://obscurejavascript.tumblr.com/post/146168218170/intersection-in-javascript): A function that returns the common elements of 2 array, gives an example of where this is useful.
* [is.js](http://obscurejavascript.tumblr.com/post/148258712814/is-functions-for-debugging-in-javascript): How a function to check object type is useful.
* [objectTypeAndEquality.js](http://obscurejavascript.tumblr.com/post/150597990278/when-javascript-objects-with-identical-properties): When objects with identical properties and printouts are not equal.
* [observable.js](http://obscurejavascript.tumblr.com/post/137500537300/observables-in-javascript): How to treat data that arrives over time in an array like fashion.
* [objectFreeze.js]((http://obscurejavascript.tumblr.com/post/152213315637/constants-and-objectfreeze-in-javascript): How to use const and Object.freeze to create completely immutable objects.
* [objOf.js](http://obscurejavascript.tumblr.com/post/142965398258/object-of): A shorthand way to create objects with dynamic property names in pre-es6 JavaScript.
* [oneLineForLoop.js](http://obscurejavascript.tumblr.com/post/142193257215/one-line-for-loop): An explanation of for loop structure by using one line for loops only.
* [mapJoin.js](http://obscurejavascript.tumblr.com/post/154644602093/the-map-join-pattern-javascript): Using the abstraction of splitting then mapping then joining to simplify string set manipulation.
* [mapValues.js](http://obscurejavascript.tumblr.com/post/150273646551/map-values-in-javascript): Object traversal operations (mapValue and mapKeys) that iterate through objects like Array.map.
* [maxDate.js](http://obscurejavascript.tumblr.com/post/149614290872/finding-max-date-in-one-line-in-javascript): Using one line of code to find the maximum date.
* [negate.js](http://obscurejavascript.tumblr.com/post/151251547176/negate-in-javascript): How a simple closure based negate function can simplify code.
* [mixins.js](http://obscurejavascript.tumblr.com/post/145467239320/javascript-mixins): A simple way to implement mixins in JavaScript.
* [nonMutatedLists.js](http://obscurejavascript.tumblr.com/post/141792956222/non-mutating-list-operations): A simple way to make list operations not mutate their lists.
* [multiLineJoinString.js](http://obscurejavascript.tumblr.com/post/148943508230/multi-line-join-strings): Less cumbersome syntax for multi-line strings in ES5 or less environments.
* [lazyObject.js](http://obscurejavascript.tumblr.com/post/147554515317/lazy-objects-in-javascript): Creating objects that can create more objects or can just be used with no instantiation.
* [propertyMap.js](http://obscurejavascript.tumblr.com/post/149282855871/property-map-in-javascript): A function to group properties from a set of objects. Also has a tactic to avoid array.push in maps.
* [proxy.js](http://obscurejavascript.tumblr.com/post/138429574082/proxies-in-javascript): How to change JavaScript syntax on given objects via the Proxy API.
* [proxyNumberValidation.js](http://obscurejavascript.tumblr.com/post/153139216051/validating-object-property-types-without-setters): How to implement JS type checking without setters by using the Proxy API.
* [publishSubscribeAutomation.js](http://obscurejavascript.tumblr.com/post/154343249184/automating-the-publishsubscribe-pattern-in): How to use an abstracted publisher to implement more advanced publish-subscribe patterns.
* [replace3rdArg.js](http://obscurejavascript.tumblr.com/post/139312155038/the-stringreplace-callback-in-javascript): How to use the little known ability of String.replace to accept callbacks.
* [returnWrap.js](http://obscurejavascript.tumblr.com/post/144056079633/merging-chaining-objects-in-javascript): How a return wrapper function can be used to merge objects that chain.
* [reverseLater.js](http://obscurejavascript.tumblr.com/post/141384784768/reverselater-in-javascript): Return a function that calls the passed in callback with reversed arguments.
* [sealAndPreventExtensions.js](http://obscurejavascript.tumblr.com/post/152520490191/objectfreeze-vs-objectseal-vs): The difference between the various methods to make objects constant in JavaScript.
* [selfRegeneration.js](http://obscurejavascript.tumblr.com/post/139742651734/object-self-regeneration-in-javascript): How an object can regenerate itself. This is useful when the object constructor is lost.
* [seriesGeneration.js](http://obscurejavascript.tumblr.com/post/148601552791/simplifying-series-generation-in-javascript): Simplifying series generation via Functional Programming principles.
* [stoppingForEachLoops.js](http://obscurejavascript.tumblr.com/post/146514355630/stopping-foreach-loops-in-javascript): How to stop forEach loops without using an exception and a better strategy.
* [stub.js](http://obscurejavascript.tumblr.com/post/137969738765/simple-asynchronous-javascript-stubs): A simple one function method of stubbing functions including asynchronous ones.
* [stringify.js](http://obscurejavascript.tumblr.com/post/143697853679/pretty-printing-in-javascript): How to use stringify to pretty print JavaScript objects in a customizable way.
* [tap.js](http://obscurejavascript.tumblr.com/post/151574254573/tap-and-thru-in-javascript): How to use the tap and thru methods to customize chained behavior and make debugging much easier.
* [timing.js](http://obscurejavascript.tumblr.com/post/155910342704/timing-functions-in-javascript): The various ways of timing function calls in JavaScript. Starting with the oldest methods.
* [quickObj.js](http://obscurejavascript.tumblr.com/post/144766469500/faster-object-mocking-with-quick-object-in): A recursive function to quickly create high depth objects for unit and other tests.
* [void.js](http://obscurejavascript.tumblr.com/post/138877228983/void-in-javascript): Uses of the void keyword. Best understood in conjunction with the blog post in this case.
* [zipObj.js](http://obscurejavascript.tumblr.com/post/142586570436/zipping-objects-in-javascript): A function that maps a list of keys to a list of values. This shows an example of why that is important.

 

* [argumentParameterBinding.js](http://obscurejavascript.tumblr.com/post/122101479376/javascript-arguments-and-function-parameter): A demonstration of a little known arguments object quirk.
* [arrowFunctions.js](http://obscurejavascript.tumblr.com/post/131956254400/arrow-functions-in-es6-javascript): How to implement arrow functions in pre ES6 JavaScript.
* [beforeAndAfter.js](http://obscurejavascript.tumblr.com/post/118047746815/before-and-after-in-javascript): A before function with an extension into an after one.
* [bind.js](http://obscurejavascript.tumblr.com/post/107819323140/bind-in-javascript): Bind and an example of it in JavaScript.
* [chainify.js](http://obscurejavascript.tumblr.com/post/126848395566/a-function-to-make-any-object-chainable): How to build a generic chaining method that can add chaining to any object.
* [circularReference.js](http://obscurejavascript.tumblr.com/post/122697146656/javascripts-circular-references): Circular references and potential issues with them. Does not go into all the details, more of an overview.
* [circularReferencePositives.js](http://obscurejavascript.tumblr.com/post/123302560591/circular-references-the-positives): Positives of circular references.
* [class.js](http://obscurejavascript.tumblr.com/post/134216232213/classes-in-es6-javascript): Classes in ES6 and how to create a close equivalent.
* [clone.js](http://obscurejavascript.tumblr.com/post/110468721243/deep-copy-in-javascript): How to deep copy objects in JavaScript.
* [const.js](http://obscurejavascript.tumblr.com/post/135135024082/const-in-es6-javascript): The const keyword in ES6 and how to create a close equivalent.
* [debounce.js](http://obscurejavascript.tumblr.com/post/115595038489/debounce-in-javascript): Create a wrappped function so that the function it wraps is only called after it stops being triggered every n milliseconds.
* [defer.js](http://obscurejavascript.tumblr.com/post/113091822041/defer-in-javascript): Run a function after all processing is done in the current callstack.
* [dependencyInversion.js](http://obscurejavascript.tumblr.com/post/109803267466/monads-in-javascript): Screwed up the monad post. So just the dependency inversion part will be kept.
* [floatingPointArithmetic.js](http://obscurejavascript.tumblr.com/post/129013057189/floating-point-arithmetic-in-javascript): A simple algorithm strategy for reliably calculating decimal based numbers.
* [flow.js](http://obscurejavascript.tumblr.com/post/113715151349/flow-in-javascript): This is used to string functions that use each others results in a chain.
* [functionDecompilation.js](http://obscurejavascript.tumblr.com/post/119214042002/function-decompilation): Function decompilation, Angular.js and simplified dependency injector for it.
* [functionExpressionProperties.js](http://obscurejavascript.tumblr.com/post/127416893771/using-named-function-expressions-properties-in): How properties on object can be used to simplify code. Specifically, with named Function Expressions.
* [generator.js](http://obscurejavascript.tumblr.com/post/133745153006/generators-in-es6-javascript): How to implement a relatively close equivalent of generators in pre ES6 JavaScript.
* [genericChaining.js](http://obscurejavascript.tumblr.com/post/125694248566/generic-chaining-in-javascript): An explanation of a simple generic pattern for creating chainable objects.
* [interatedAsyncCalls.js](http://obscurejavascript.tumblr.com/post/112442518446/issues-with-iterated-asynchronous-calls-in): How to solve a seemingly wierd issue while passing state to multiple asynchronous calls in JavaScript.
* [iterator.js](http://obscurejavascript.tumblr.com/post/131438691771/iterators-in-es6-javascript): A simple implementation of the ES6 iterator abstraction in non ES6 JavaScript (without an Iterable implementation).
* [lazyFunctionDefinition.js](http://obscurejavascript.tumblr.com/post/128172325331/lazy-function-definitions-in-javascript): Caching values without using conditionals. This is useful for calls that need to be made multiple times.
* [mapObject.js](http://obscurejavascript.tumblr.com/post/130495034293/the-map-object-in-es6-javascript): An implementation of the map object in ES6 in less than ES6 JavaScript.
* [mapOrRemove.js](http://obscurejavascript.tumblr.com/post/123911209628/map-or-remove-in-javascript): A function used to filter and modify objects.
* [mapsThirdArgument.js](http://obscurejavascript.tumblr.com/post/124508304377/maps-third-argument-in-javascript): How the 3rd argument in map() can be used to operate on multiple array elements at once.
* [memoize.js](http://obscurejavascript.tumblr.com/post/111106381319/memoize-in-javascript): A way to automatically cache function calls.
* [nonMutatingAssign.js](http://obscurejavascript.tumblr.com/post/129512291001/non-mutating-assign-in-javascript): Showing the implementation of a function similar to Lodash assign and how to not mutate with it. 
* [oneLineRandomText.js](http://obscurejavascript.tumblr.com/post/125694248566/generic-chaining-in-javascript): How to generate short random text codes in JavaScript in one line using no library functions.
* [sortsAndNan.js](http://obscurejavascript.tumblr.com/post/125103356483/sorts-and-nan-in-javascript): What NaN return values do to JavaScript's default sort.
* [templateStrings.js](http://obscurejavascript.tumblr.com/post/132413275313/template-strings-in-es6-javascript): Evaluating strings with expressions in JavaScript similar to ES6 templates.
* [let.js](http://obscurejavascript.tumblr.com/post/133287385450/let-in-es6-javascript): The ES6 let statement and how to emulate close aproximations.
* [monad.js](http://obscurejavascript.tumblr.com/post/111788543345/monads-in-javascript): Defining a chainable specification of operations.
* [multiIf.js](http://obscurejavascript.tumblr.com/post/121526887468/cleaning-up-complex-conditionals-with-chaining): Making complex conditionals more readable by using an expression and chaining conditions.
* [multicore.js](http://obscurejavascript.tumblr.com/post/134675242340/multicore-javascript-with-nodejs): Multicore node.js code. **Node.js Only**
* [omit.js](http://obscurejavascript.tumblr.com/post/114336196594/omit-in-javascript): Return an object with properties removed with no side effects.
* [primitiveCoercion.js](http://obscurejavascript.tumblr.com/post/128642547205/primitive-coercion-in-javascript): A brief explanation of automatic primitive coercion in JavaScript.
* [promise.js](http://obscurejavascript.tumblr.com/post/117449806524/promises-in-javascript): Create an object that represents future state.
* [undefined.js](http://obscurejavascript.tumblr.com/post/116842290598/undefined-in-javascript): An explanation of the undefined type.
* [repl.js](http://obscurejavascript.tumblr.com/post/120957199678/a-repl-for-javascript-in-javascript): A REPL of JavaScript in JavaScript using streams. **Node.js Only**
* [server.js](http://obscurejavascript.tumblr.com/post/119785644766/4-line-node-js-http-test-server): A 4 line http server using connect.js and serve-static.js **Node.js Only**
* [setObject.js](http://obscurejavascript.tumblr.com/post/130966866306/the-set-object-in-es6-javascript): An implementation of the set object in ES6 in less than ES6 JavaScript.
* [stream.js](http://obscurejavascript.tumblr.com/post/120374509401/node-js-streams): A simple example of streams **Node.js Only**
* [symbol.js](http://obscurejavascript.tumblr.com/post/132877236317/symbols-in-es6-javascript): Implementing ES6 Symbols in pre ES6 syntax.
* [thisKeyword.js](http://obscurejavascript.tumblr.com/post/116172560774/how-this-can-be-modified-in-javascript): An attempt of defining all the possible ways that the *this* context is defined.
* [throttle.js](http://obscurejavascript.tumblr.com/post/114959169455/throttle-in-javascript): Create a wrappped function so that the function it wraps is called at most every n milliseconds.
* [trim.js](http://obscurejavascript.tumblr.com/post/135590649158/trim-in-javascript): The trim string function and polyfills for trimLeft and trimRight.
* [typedArray.js](http://obscurejavascript.tumblr.com/post/137036713404/typed-arrays-in-javascript): A simple demonstration of the differences between Array and a Typed Array.
* [where.js](http://obscurejavascript.tumblr.com/post/108473136150/where-in-javascript): Code for the JavaScript where function.
* [unionAndIntersection.js](http://obscurejavascript.tumblr.com/post/109132410484/intersection-and-union-in-javascript): Code for the intersection and union array manipulation functions and the unifyling function.
* [variableChaining.js](http://obscurejavascript.tumblr.com/post/118630892587/variable-chaining-and-globals-in-javascript): How variable chaining can create globals and how global creation can be avoided.
* [zip.js](http://obscurejavascript.tumblr.com/post/107136419970/zip-in-javascript): How to use a function that automatically structures raw array data.

<h5>2014</h5>
<hr/>

* [assign.js](http://obscurejavascript.tumblr.com/post/105199465669/assign-in-javascript): How to use and implement a function that merges objects.
* [autoExecutingRecursionFunctions.js](http://obscurejavascript.tumblr.com/post/73013181197/auto-executing-recursive-functions): How to create functions that can be called without parenthesis. Or other helpers.
* [bracketFreeCall.js](http://obscurejavascript.tumblr.com/post/87491571318/paren-free-function-calls): How to create functions that can be called without parenthesis. Or other helpers.
* [caseForLinting.js](http://obscurejavascript.tumblr.com/post/102806165655/a-case-for-linting-in-javascript): Example of why linting should be used in JavaScript. See blog post for more info.
* [chaiAndParenFree.js](http://obscurejavascript.tumblr.com/post/87981579491/chai-js-and-paren-free-calls-in-javascript): How Chai.js uses bracket (parent) free calls.
* [cleanSwitches.js](http://obscurejavascript.tumblr.com/post/83829086495/a-cleaner-way-to-do-switches-in-javascript): A cleaner way of long decision branches.
* [cleanCallbacks.js](http://obscurejavascript.tumblr.com/post/79867797983/cleaning-up-javascript-callbacks): A clean way of ordering JS callbacks using an object.
* [comprehensions.js](http://obscurejavascript.tumblr.com/post/92833095461/javascript-list-comprehensions): A quick way to do list operations in JS, list comprehensions. Commonly, used in other scripting languages.
* [computedProperties.js](http://obscurejavascript.tumblr.com/post/93680556182/computed-property-values-in-literals): A proposal for computed property literals in JavaScript and how to implement a near equivalent.
* [constant.js](http://obscurejavascript.tumblr.com/post/97472306093/real-constants-in-javascript): How to implement real constants in JavaScript.
* [curry.js](http://obscurejavascript.tumblr.com/post/103825579554/curries-in-javascript): How to implement a function that splits a multi argument function into a series of single argument ones.
* [date.js](http://obscurejavascript.tumblr.com/post/91548405930/dates-in-javascript): JavaScript date comparions.
* [decorators.js](http://obscurejavascript.tumblr.com/post/82388140032/implementing-decorators-in-javascript-using-closures): How to implement decorators in JS using closures.
* [explicitBooleanConversion.js](http://obscurejavascript.tumblr.com/post/76532933108/explicit-boolean-coercion): Using explicit Boolean conversion to save time.
* fibonacci.rb: A fibonacci sequence in Ruby. Syntax emulated in ruby.js.
* [flatten.js](http://obscurejavascript.tumblr.com/post/89552294013/flatten-in-javascript): How to write a simple array flattening function.
* [fold.js](http://obscurejavascript.tumblr.com/post/89068550361/folds-in-javascript): A useful higher order function explained.
* [functionExpressionsVsDeclarations.js](http://obscurejavascript.tumblr.com/post/102207548636/the-difference-between-function-declarations-and): A subtle difference between function expressions and declarations.
* [functionalInheritance.js](http://obscurejavascript.tumblr.com/post/98733772655/javascript-inheritance-strategy-1-functional): How functional inheritance works. 
* [constant.js](http://obscurejavascript.tumblr.com/post/97472306093/real-constants-in-javascript): An explanation of the potiential issues of not using new for object instantiations and a way to combat it.
* [multipleInheritance.js](http://obscurejavascript.tumblr.com/post/100430383994/multiple-inheritance-in-javascript): One way to implement multiple inheritance.
* [new.js](http://obscurejavascript.tumblr.com/post/98144418406/using-new-vs-not-using-new-in-javascript): The pitfalls of not using new before object initializations and an alternative.
* [nodePolyglot.js](http://obscurejavascript.tumblr.com/post/86791947037/node-polyglots): How to use Bash in combination with Node.js to make the script executable without a node command across multiple OSs. **Node.js Only**
* [objectInitializerShorthand.js](http://obscurejavascript.tumblr.com/post/95642604521/traceur-object-initializer-shorthand-in-current-js): An implementation of JS.next's object initializer shorthand.
* [once.js](http://obscurejavascript.tumblr.com/post/104606556389/once-in-javascript): An implementation and usage example of a once function.
* [pluckAndUnique.js](http://obscurejavascript.tumblr.com/post/105799098478/pluck-and-unique-in-javascript): How pluck and unique functions are
* [private.js](http://obscurejavascript.tumblr.com/post/90848733484/private-variables-in-javascript): Private Variables in JavaScript and their uses.
* [prototypalInheritance.js](http://obscurejavascript.tumblr.com/post/99651761063/javascript-inheritance-strategy-3-prototypal) How Prototypal Inheritance works.
* [psuedoClassicalInheritance.js](http://obscurejavascript.tumblr.com/post/99247110986/javascript-inheritance-strategy-2-pseudoclassical) How Psuedoclassical Inheritance works.
* [range.js](http://obscurejavascript.tumblr.com/post/92238246124/a-range-operator-for-javascript): A range operator in JavaScript.
* [restParameters.js](http://obscurejavascript.tumblr.com/post/95097113886/traceur-rest-parameters-in-current-js): Implementing JS.next's rest parameters in vanilla 
* [ruby.js](http://obscurejavascript.tumblr.com/post/90251062581/imitating-ruby-in-javascript): A close aproximation to Ruby's syntax in JavaScript.
* [rubyMethodSyntax.js](http://obscurejavascript.tumblr.com/post/85524888334/rubys-math-method-syntax-in-javascript): How to use ruby math method like syntax in JS.
* [spread.js](http://obscurejavascript.tumblr.com/post/94247680464/spread-vs-apply-in-javascript): JS.next spread and a close alternative.
* [stringInterpolation.js](http://obscurejavascript.tumblr.com/post/74389765835/javascript-string-interpolation): Implementing string interpolation.
* [super.js](http://obscurejavascript.tumblr.com/post/101001619389/super-in-javascript): Implementing super in JavaScript (using functional inheritance).
* [superThatIsEfficient.js](http://obscurejavascript.tumblr.com/post/101608780722/efficient-super-calls-in-javascript): Implementing super in JavaScript in a more efficient way. Specifically, using PsuedoClassical Inheritance.
* [trackingJSStatistics.js](http://obscurejavascript.tumblr.com/post/80464717044/tracking-javascript-statistics): Building a simple function call tracker.
* [toStringFunctionTriggers.js](http://obscurejavascript.tumblr.com/post/77487572765/tostring-based-function-triggers): Calling functions by using the '+' operator.
* [withEmulation.js](http://obscurejavascript.tumblr.com/post/78333366271/emulating-the-with-statement-in-javascript): Emulating the JS with statement via a function.

<h5>2013</h5>
<hr/>

* [arrayInstantiations.js](http://obscurejavascript.tumblr.com/post/64389973002/hardcore-array-instantiations): A compact way to declare pre-initialized arrays in JS.
* [batman.js](http://obscurejavascript.tumblr.com/post/51075341151/batman-arrays-and-javascript-collide): The weird behavior of Array.join demonstrated.
* [chaining.js](http://obscurejavascript.tumblr.com/post/50657613243/chaining-javascript-self-invoking-function-calls): Chaining self invoking function calls to shorten code.
* [defaults.js](http://obscurejavascript.tumblr.com/post/55779896076/clean-default-values-in-javascript): A much better way to do default values in JS.
* [erlang.js](http://obscurejavascript.tumblr.com/post/56604431893/erlang-in-javascript): Emulating Erlang in JS.
* [expressions.js](http://obscurejavascript.tumblr.com/post/61814998019/advanced-javascript-expressions): Using expressions to simplify code in JS.
* [functionCallInheritance.js](http://obscurejavascript.tumblr.com/post/66874710993/inheritance-with-function-call): How Function.call() can be used to create inheritance in JS.
* [functionConstructor.js](http://obscurejavascript.tumblr.com/post/65893136656/the-javascript-function-constructor): How the Function constructor works.
* [functionDeclerationOperations.js](http://obscurejavascript.tumblr.com/post/63861215073/operations-on-javascript-function-declerations): How function declerations (not just calls) can actually be used in arithmetic operations.
* [innerFunctionTesting.js](http://obscurejavascript.tumblr.com/post/69080603746/easily-testing-inner-functions-in-js): How to test inner functions in JS.
* [metaprogramming.js](http://obscurejavascript.tumblr.com/post/51730042465/javascript-metaprogramming) Using metaprogramming to simplify stuff in JS. **Browser Only** 
* [multipleValueChecking.js](http://obscurejavascript.tumblr.com/post/65231120961/clean-mulitple-value-checking): A good way to check multiple values at once in JS.
* [multipleReturnValues.js](http://obscurejavascript.tumblr.com/post/57795427130/multiple-return-values-in-javascript-a-new-way): A good way to return multiple variables in JS.
* [labeledLoops.js](http://obscurejavascript.tumblr.com/post/53519194124/labeled-loops-in-javascript): Did you know that JavaScript has labeled loops?
* [listOperatorMagic.js](http://obscurejavascript.tumblr.com/post/59141181114/list-operator-magic): How to expliot JSs list operator to shorten code.
* [obscureIntegers.js](http://obscurejavascript.tumblr.com/post/52949238843/extremely-obscure-javascript-integers) You should see it for yourself.
* [obscureStrings.js](http://obscurejavascript.tumblr.com/post/52302750125/extremely-obscure-javascript-strings) You should see it for yourself.
* [overloadingArrayOperators.js](http://obscurejavascript.tumblr.com/post/60174354628/overloading-array-operators-in-javascript): What is possible by overloading array operators in JS. This led me to discover how to run functions paranthesis free. **Node.js Only**
* [overloadingFunctions.js](http://obscurejavascript.tumblr.com/post/57179890654/overloading-functions-in-javascript): How to make overridable functions in JS.
* [partials.js](http://obscurejavascript.tumblr.com/post/67961302246/partials-in-javascript): How to create partials and some applications.
* [perl.js](http://obscurejavascript.tumblr.com/post/54101830984/imitating-perl-in-javascript): Emulation perl in JS.
* [recursion.js](http://obscurejavascript.tumblr.com/post/62719895830/recursion-in-javascript-without-making-a-recursive-call): Recursion without making a recursive call. I'm not joking.
* [scheme.js](http://obscurejavascript.tumblr.com/post/55175533448/imitating-scheme-lisp-dialect-in-javascript): Emulating scheme in JS.
