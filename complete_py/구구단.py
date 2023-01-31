pri = ""

for i in range(3,6):
    for _ in range(5):  
        for a in range((i-2),(i-1)):
            pri += "          "*(5-i)
            print(i,a)
            for b in range(1,10):
                pri += str(a)+" * "+str(b)+" = "+str(a*b)
            pri += "          "*(5-i)
    print("")