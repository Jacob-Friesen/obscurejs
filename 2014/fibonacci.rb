#!/usr/bin/env ruby
# What needs to be implemented for ruby.js

def fib(n)
    return n if n < 2
    fib(n - 1) + fib(n - 2)
end

puts fib(0) # 0
puts fib(1) # 1
puts fib(17) # 1597