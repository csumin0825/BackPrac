import sys
sys.stdin = open(
    '/Users/choesumin/Documents/BaekPrac/complete_py/example.txt', 'r')

n = list(map(int, input().split(' ')))

for i in range(3,17):
    print(i)