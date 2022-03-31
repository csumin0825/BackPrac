n = input()
a = int(n[0])
b = int(n[1])
res = a+b
res_ = 0
count = 0

while(res != res_):
    res_ = b+res
    count += 1
print(res)