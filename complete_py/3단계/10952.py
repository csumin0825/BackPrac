check = True

while(check):
    a,b = map(int,input().split())
    if(a ==0 and b==0):
        check = False
        break
    print(a+b)
    
