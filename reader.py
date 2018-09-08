# this runs on the pi
# fetches the ais receiver data and supplies a file with the decrypted results

import serial
from time import time,sleep

# we use libais for signal decryption:
# https://pypi.org/project/libais/
import ais.stream

import os
from math import radians, cos, sin, asin, sqrt
from threading import Timer

# for future implentation of distance calculator
homelon=9.9833
homelat=53.533
dist=0
latitude=0
longitude=0

# for future implementation of blacklist correlation
blacklist = {211518830,312864000,312867000,627179000,306020000,574756000,720877000,312172000,616999336,677061800,735058912,370070000,657379000,371295000,535096772,214182687,412420941,312120000,567000445,312028000,422734000,730014000,735058984,441667000,416002232,273319630,273338570,440645000,441527000,273240900,422573000,514144000,374083000,332001000,372210000,412688710,664641000,312171000,273357170,671624000}

# for future implentation of distance calculator
def haversine(lon1, lat1, lon2, lat2):
    """
    Calculate the great circle distance between two points
    on the earth (specified in decimal degrees)
    """
    # convert decimal degrees to radians
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    # haversine formula
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a))
    # Radius of earth in kilometers is 6371
    km = 6371* c
    return km

def clear():
    with open ( "/var/www/html/index.html", 'w' ) as filehandle:
        print "Done\n"
        filehandle.write("")

# serial port config (common for ais receivers)
# please refer to
#http://www.varesano.net/blog/fabio/serial%20rs232%20connections%20python
ser = serial.Serial(

               port='/dev/serial0',
               baudrate = 38400,
               parity=serial.PARITY_NONE,
               stopbits=serial.STOPBITS_ONE,
               bytesize=serial.EIGHTBITS,
               timeout=5
           )

# delete webserver index file in repetetively
old = time()
while True:
    if old + 120.0 < time():
        
        clear()
        old = time()

    # poll serial port and decrypt results with libais    
    # the ser.serial uses active polling and creates massive cpu load if run in an endless loop
    # please see the sleep function at the end of the loop
    raw = ser.readline()
    if raw:
        streamlike={raw,''}
        msg = ais.stream.decode(streamlike)      
        for i in msg:
            try:
                mmsi = i["mmsi"]
                latitude = i["y"]
                longitude = i["x"]
                
            except:
                pass
            # for future implementation of distance calculation
            '''
            if mmsi != '':
                if mmsi in linist:
                    print "Attention:",mmsi, "Latitude:", latitude,"Longitude:",longitude
                    if latitude != '' and longitude != '':
                        dist = haversine(homelon,homelat,longitude,latitude)
                        print "Distance to pirate:", dist
            '''
            # create new entry in webserver index file, format "mmsi,latitude,longitude;"
            if latitude != '' and longitude != '' and mmsi !='':
                newline = str(mmsi)+","+str(latitude)+","+str(longitude)+";"
                filehandle =  open ( "/var/www/html/index.html", 'a' )
                filehandle.write (newline)
                filehandle.close()
                print mmsi
                dist=''
                latitude=''
                longitude=''
    # this is important to reduce cpu load while polling the serial port
    # and we don't want to be guilty of "busy waiting" 
    sleep (0.05)