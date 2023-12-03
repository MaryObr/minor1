a = input()
b = a.split(";")
z = {}
for i in b:
    x = i.split("|")
    if not z.get(x[2]):
        z[x[2]] = 1
    else:
        z[x[2]] += 1
q = input()
if z.get(q):
    print(z.get(q))
else:
    print(0)

