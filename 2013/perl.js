#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// To emulate
// sub fib{
//       # My is used for variables available only in the declared block. One way to get passed
//       # variables is from $_[<argument number>]
//       my $n = $_[0];

//       return 0 if $n == 0;
//       return 1 if $n == 1;

//       return fib($n - 1) + fib($n - 2);
// }

// print fib(0), "\n";# 0
// print fib(1), "\n";# 1
// print fib(17), "\n";# 1597

// Closest I could get

// console.log always includes a new line at the end unlike Perl's print and Node's write.
// Also, using var print = process.stdout.write causes errors when print is called.
var print = function(d){
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg){
        process.stdout.write(arg + '');
    })
}

// Each time an element is accessed of _$ it must extract the relevant argument of the
// calling function. This must be a function, there is no way operator overloading in
// JavaScript so $_[<index>] cannot be overridden.
var $_ = function findArg(index){
    return findArg.caller.arguments[index];
}

function fib(){
    var $n = $_(0);

    // There is no way to do postfix conditionals in JS if they have a return
    if($n === 0) return 0;
    if($n === 1) return 1;

    return fib($n - 1) + fib($n - 2);
};

print(fib(0), "\n");// 0
print(fib(1), "\n");// 1
print(fib(17), "\n");// 1597