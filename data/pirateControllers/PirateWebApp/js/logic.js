function doWork() {

    var docWidth = $(document).width();
    var docHeight = $(document).height();

    $('#divMap').width(docWidth);
    $('#divMap').height(docHeight);


    var map = new Map({
        target: 'map-container',
        layers: [
            new TileLayer({
                source: new XYZSource({
                    url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
                })
            })
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });


    // Create map instance
    var map = new lxs.gis.openlayers.Map("map-container");

    // Add basemap layer to map
    var baseMapLayer = new lxs.gis.openlayers.TileLayer("baseMap", lxs.gis.openlayers.Layer.SOURCE_TYPES.BASEMAP, lxs.gis.openlayers.Layer.BASEMAPS.OSM);
    map.addLayer(baseMapLayer);

    // Add service shape to map
    var serviceShape = new lxs.gis.openlayers.VectorLayer(DeliveryServicesManager.MAP.SERVICE_SHAPE_LAYER, lxs.gis.openlayers.Layer.SOURCE_TYPES.EMPTY);
    map.addLayer(serviceShape);

    // Set initial extent
    map.center([0, 0]);
    map.zoom(2);

    // Return map
    return map
}