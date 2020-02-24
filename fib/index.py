from pprint import pprint

def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)


pprint(fib(10))
