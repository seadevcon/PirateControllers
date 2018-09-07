import urllib2
import json

response = urllib2.urlopen("192.168.42.102")
page_source = response.read()

all_vessel = []
for vessel in page_source.split(";"):
	arr = vessel.split(",")
	mmsi = int(arr[0])
	lat = int(arr[1])
	lon = int(arr[2])
	all_vessel.append({"mmsi": mmsi, "latitude": lat, "longitude": lon})

json_data = json.dumps(data)

file_handle = open("data.json", "w")
file_handle.write(json_data)

print("done")
