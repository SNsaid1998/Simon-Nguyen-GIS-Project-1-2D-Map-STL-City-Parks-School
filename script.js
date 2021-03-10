require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (esriConfig, Map, MapView, FeatureLayer) {

esriConfig.apiKey =  "AAPKdc25ad7513a24c46b92cd024b53471173ysex4xHWQwBw2IQ-kNnn5MYzM2Maqnuc7YbUYeHblfF461bYrN1hiCHw4m9SK0E"; 

var map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

var view = new MapView({
          map: map,
          center: [-90.35, 38.65], // Longitude, latitude
          zoom: 11.5, // Zoom level
          container: "viewDiv" // Div element
        });
//STL Parks feature layer (polygons) 
var parksLayer = new FeatureLayer({
  url: "https://services9.arcgis.com/l9yXFvhjz46ekkZV/arcgis/rest/services/St_Louis_City_Parks/FeatureServer"
});
  
  map.add(parksLayer);
          
//STL Public Schools (points) 
var pubschoolLayer = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Buffer_of_STL_Public_Schools/FeatureServer"
});
  
  map.add(pubschoolLayer);
  
 });

  var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "13ba212005704b72a72ab1c75903393c"
        }
      });
