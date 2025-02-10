def fibonacci_generator(fibNum):
    a, b = 0, 1
    for _ in range(fibNum):
        yield a
        a, b = b, a + b
