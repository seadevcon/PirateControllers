# accesses the results of reader.py

from urllib.request import urlopen
import json
import os
from time import time, sleep

old = time()
interval = 30
while True:
	if time() > old + interval:
		old = time()
		
		# http get request to IP address of pi
		response = urlopen("http://192.168.42.102")
		# care about the decoding
		page_source = response.read().decode("utf-8", "ignore")

		all_vessel = []
		known_vessels = dict()

		for vessel in page_source.split(";"):
			arr = vessel.split(",")
			if arr[0] == '':
				break
			mmsi = int(arr[0])
			lat = float(arr[1])
			lon = float(arr[2])
			evil = arr[3] == "True"
			known_vessels[mmsi] = {"mmsi": mmsi, "latitude": lat, "longitude": lon, "evil": evil}

		all_vessel = [ v for k, v in known_vessels.items()]

		# format to var responseShips = [{"mmsi": mmsi, "latitude": lat, "longitude": lon}]
		json_data = "var responseShips = " + json.dumps(all_vessel)

		file_handle = open("data.js", "w")
		file_handle.write(json_data)
		file_handle.close()
		
	sleep(0.5)