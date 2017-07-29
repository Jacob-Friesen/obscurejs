# Related to the ruby in JS post which is implemented in ruby.js
def fib(n)
  if (n < 2)
    return n
  end

  fib(n - 1) + fib(n - 2)
end

puts fib 0
puts fib 1
puts fib 2
puts fib 11
puts fib 17
