a,b,c = map(int, input().split())

if(a==b==c):
    res = 10000+ a*1000
elif(a==b or a==c):
    res = 1000+ a*100
elif(b==c):
    res = 1000+ b*100
else:
    maxNum = max(a,b,c)
    res = maxNum*100

print(res)