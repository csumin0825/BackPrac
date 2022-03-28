h,m = map(int, input().split())

if(m >= 45):
    print(str(h) ,str(m-45))
else:
    if(h<1):
        print("23", str(m-45+60))
    else:
        print(str(h-1), str(m-45+60))