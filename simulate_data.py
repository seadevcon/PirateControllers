import random
import json

lat = ‎53.551086
lon = 9.993682

all_vessel = []
num = random.randint(1, 5)
for i in range(num):
    randmmsi = random.randint(10000, 100000)
    randlat = lat + random.random()/10 - 0.05
    randlon = lon + radnom.random()/10 - 0.05
    randevil = True if random.randint(0,1) = 0 else False
    all_vessel.append({"mmsi": randmmsi, "latitude": randlat, "longitude": randlon, "evil": randevil})
json_data = "var responseShips = " + json.dumps(all_vessel)

file_handle = open("data2.js", "w")
file_handle.write(json_data)
file_handle.close()