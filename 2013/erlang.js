#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The Erlang to emulate
// %% Erlang automatically returns the last statement. Also, if the first functions when
// %% fails Erlang will run the second and so on.
// fib(N) when N < 2 -> N;
// fib(N) -> fib(N - 1) + fib(N - 2).

// main(Args) ->
//     erlang:display(fib(0)),%% 0
//     erlang:display(fib(1)),%% 1
//     erlang:display(fib(17)).%% 1597

// Equivalent in JS

// Just make erlang.display do the same as console.log, there are almost equivalent.
var erlang = { display: console.log };

// Going to have a statement and callback table for each function name so there can
// be multiple overriding version of a function.
var overrides = {};

Function.prototype.when = function(statement){
    // This is the actual function body
    var callback = this;

    // I am going to need the variables of the function when wraps. Since this
    // example is short I am going to use the very naive strategy of taking
    // everything between the ()s. An argument parser would have to be developed to
    // overcome the niave approach.
    var varList = this.toString().split('(')[1].split(')')[0];
        varList = varList.split(',');

    // Another naive approach to get function name...
    var funcName = this.toString().split('function')[1].split('(')[0].replace(' ', '');

    overrides[funcName] = overrides[funcName] || [];
    overrides[funcName].push({
        callback: callback,
        statement: statement
    });

    // This will check the passed in parameters and then execute the original if, if
    // the arguments passed in substituted into the when pass.
    return function(){
        // Keep in mind the recurse and forEach will create a new arguments object.
        args = arguments;

        // Recurse until I get reach a statement in overrides that evaluates to true
        // or the end of a list is reached.
        return (function test(index){
            var items = overrides[funcName][index],
                newStatement = items.statement;

            // merge the arguments into the checking statement.
            if (newStatement){
                varList.forEach(function(varName, index){
                    newStatement = newStatement.replace(varName, args[index]);
                });
            }
            else
                newStatement = true;

            // Really no way around eval in this case as the when needs to be passed
            // a string because N is not yet defined.
            if (eval(newStatement)) 
                return items.callback.apply(this, args);
            else if (index < overrides[funcName].length)
                return test(index + 1);

            throw('There is no defined function for the sent in arguments');
        })(0);
    }
}

var fib = (function(N){ return N }).when('N < 2');
var fib = (function(N){ return fib(N - 1) + fib(N - 2) }).when();

erlang.display(fib(0));
erlang.display(fib(1));
erlang.display(fib(17));