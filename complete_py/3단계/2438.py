n = int(input())

for i in range(n):
    ans = "*"
    for j in range(i):
        ans += "*"
    print(ans)