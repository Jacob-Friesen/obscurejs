#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// To emulate
// ; begin is used to indicate there is a set of statements to be evaluated in order.
// (begin 
//     (define fib
//         (lambda (n)
//             ; if the condition is true the first () is run otherwise run the second
//             ; part. Keep in mind Scheme will automatically return values in this 
//             ; case.
//             (if (> n 1)
//                 (+ (fib (- n 1)) (fib (- n 2)) )
//                 n 
//             )
//         )
//     )

//     (display (fib 0)); 0
//     (newline)
//     (display (fib 1)); 1
//     (newline)
//     (display (fib 17)); 1597
//     (newline)
// )

// Going to make this attach to arrays so I have a clean execution.
Array.prototype.runScheme = function() {
    return eval((function run(expression){ 
        var operators = ['*', '+', '-', '>'];

        if (isArray(expression)) {
            var func_name = expression[0];
            var func_args = expression.slice(1);

            var compiled_args = [];
            for (var i = 0; i < func_args.length; i++){
                // Need a special case to ensure lambda's arguments stay as an array
                // and will not be evaluated. Also, to ensure the body is transformed
                // to a string so it can be evaluated later upon function creation
                // (see lambda function declaration).
                if (func_name === 'lambda'){
                    if (i === 0)
                        compiled_args.push(makeArrayOfStrings(func_args[i]));
                    else
                        compiled_args.push('"' + run(func_args[i]) + '"'); 
                }
                else
                    compiled_args.push(run(func_args[i]));

                // All of the if statements later arguments are only executed after
                // the if condition so make them functions.
                if (func_name === '_if' && i > 0)
                    compiled_args[compiled_args.length - 1] = 'function(){return ' +
                        compiled_args[compiled_args.length - 1] + '}';
            }

            // A special case to ensure variable name definitions become strings.
            if (func_name === 'define')
                compiled_args[0] = '"' + compiled_args[0] + '"';

            if(inArray(operators, func_name))
                return compiled_args.join(func_name);
            else
                return func_name + "(" + compiled_args.join(',') + ")";
        }
        else
            return expression.toString();
    })(this));
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function inArray(array, item) {
    for(var i = 0; i < array.length; i++)
        if (array[i] === item) return true;
    return false;
}

// Converts array to a string with all of its contents surrounded by "
function makeArrayOfStrings(array){
    var returns = [];
    array.forEach(function(element, index){
        if (isArray(element))
            returns.push(makeArrayOfStrings(element));
        else
            returns.push('"' + element + '"');
    });
    return '[' + returns.join(',') + ']';
}

// I need to make some fake conditionals so I can emulate Lisp's style of using
// functions for every part of an expression evaluation. With these, I have to make 
// sure any of Lisp replacements can be executed in any context, including when using
// new Function() which unlike normal function definitions, does not create a closure
// of the outside scope.

// Executes arguments sent in in order, JS already does this so it is empty.
GLOBAL.begin = function(){}

// define creates a global variable in Lisp. GLOBAL is Node's way of explicitly
// defining globals.
GLOBAL.define = function(variable, value){
    GLOBAL[variable] = value;
}

// Returns a function using the sent in args array followed by the function contents.
GLOBAL.lambda = function(args){
    var contents = Array.prototype.slice.call(arguments),
        contents = contents.splice(1);

    return new Function(args, 'return ' + contents);
}

// Just like the Lisp if, takes a condition as the first argument. If true evaluates
// the second argument if not the third.  
GLOBAL._if = function(condition, success, failure){
    return (condition) ? success() : failure();
}

// console.log always includes a new line at the end unlike Scheme's print and
// Node's write.
GLOBAL.display = function(d){
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg){
        process.stdout.write(arg + '');
    })
}

GLOBAL.newline = function(){
    process.stdout.write('\n');
}

// In certain contexts the array literal must be bound to a variable or about to be
// bound when a custom array method is defined, hence the var arr =.
var arr = ['begin',
    ['define', 'fib',
        ['lambda', ['n'],
            ['_if', ['>', 'n', 1],
                ['+', ['fib', ['-', 'n', 1]], ['fib', ['-', 'n', 2]] ],
                'n'
            ]
        ]
    ],

    ['display', ['fib', 0]],// 0
    ['newline'],
    ['display', ['fib', 1]],// 1
    ['newline'],
    ['display', ['fib', 17]],// 1597
    ['newline']
].runScheme();