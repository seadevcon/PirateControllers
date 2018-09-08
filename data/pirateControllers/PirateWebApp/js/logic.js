
var SERVICE_SHAPE_LAYER = "serviceShapeLayer";
var map = null;
var serviceShape = null;


function doWork() {

    var docWidth = $(document).width();
    var docHeight = $(document).height();
    $('#map-container').width(docWidth);
    $('#map-container').height(docHeight);    


    // Create map instance
    map = new lxs.gis.openlayers.Map("map-container", [20, 40, 50, 70], lxs.gis.Projection.WGS_84);

    // Add basemap layer to map
    var baseMapLayer = new lxs.gis.openlayers.TileLayer("baseMap", lxs.gis.openlayers.Layer.SOURCE_TYPES.BASEMAP, lxs.gis.openlayers.Layer.BASEMAPS.OSM);
    map.addLayer(baseMapLayer);

    // Add service shape to map
    serviceShape = new lxs.gis.openlayers.VectorLayer(SERVICE_SHAPE_LAYER, lxs.gis.openlayers.Layer.SOURCE_TYPES.EMPTY);
    serviceShape.__fillColor = '#FF0000';
    serviceShape.__strokeColor = '#00DDaa'


    map.addLayer(serviceShape);

    // Set initial extent
    map.center([0, 0]);
    map.zoom(2);


    var requestShipsUrl = "http://ais.spire.com/messages";
    var parameters = { 'fields': 'decoded', 'mmsi':'312864000,627179000'}

    var callback = function (response) {}

    var error = function (error) {}



    

}


function sendAjaxRequest(url, method, parameters, callback, error) {
    $.ajax({
        url: url,
        type: method,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJpZCI6IjQ0NCIsIm5hbWUiOiJTZWFkZXZjb24gLSBIYWNrYXRob24gVGVtcG9yYXJ5IiwidXVpZCI6IjQ0NCJ9LCJpc3MiOiJzcGlyZS5jb20iLCJpYXQiOjE1MzU1NDcxMTN9.E72ji2Kt4bfREE_0LoyaWL2aPMwVvbIIKd3xPkx4FtI',
            'access-control-allow-origin': '*'
        },
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(parameters),
        crossDomain: true,
        xhrFields: { withCredentials: true },
        dataType: 'json'
    }).done(function (response) {
        callback(response);
    }).fail(function (data) {
        error(data);
    });
}


function findships() {
    window.setTimeout(doFindships, 30000);
}

function doFindships() {

    var coordinates = null;
    var ftr = null;

    serviceShape.removeFeatures();


    for (var i = 0; i < responseShips.length; i++)
    {
        coordinates = ol.proj.transform([responseShips[i].longitude, responseShips[i].latitude], 'EPSG:4326', 'EPSG:3857');
        ftr = lxs.gis.openlayers.Feature.createPoint(coordinates);

        if (responseShips[i].evil) {
            ftr.setText('' + responseShips[i].mmsi);
        } else {
            ftr.setText2('' + responseShips[i].mmsi);
        }
        
        serviceShape.addFeature(ftr);
    }
    

    // Center map into the feature
    var extent = serviceShape.getExtent();
    map.setExtent(extent);



    findships();
}