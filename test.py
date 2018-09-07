from Threading import Timer

def hi():
    print("hi")

t = Timer(10, hi)
t.start()