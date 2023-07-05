#!/bin/python3

import sys

def sum_multiples(limit):
    limit -= 1
    def sum_divisible_by(divisor):
        n = limit // divisor
        return divisor * (n * (n + 1)) // 2

    sum3 = sum_divisible_by(3)
    sum5 = sum_divisible_by(5)
    sum15 = sum_divisible_by(15)

    sum = sum3 + sum5 - sum15
    return sum

limit = 100



t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    result = sum_multiples(n)
    print(result)