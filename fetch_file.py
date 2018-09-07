from urllib.request import urlopen
import json


response = urlopen("http://192.168.42.102")
page_source = response.read().decode("utf-8", "ignore")

print(page_source)
all_vessel = []

for vessel in page_source.split(";"):
	arr = vessel.split(",")
	if arr[0] == '':
		break
	mmsi = int(arr[0])
	lat = float(arr[1])
	lon = float(arr[2])
	all_vessel.append({"mmsi": mmsi, "latitude": lat, "longitude": lon})

json_data = "var responses = " + json.dumps(all_vessel)

file_handle = open("data.json", "w")
file_handle.write(json_data)
file_handle.close()