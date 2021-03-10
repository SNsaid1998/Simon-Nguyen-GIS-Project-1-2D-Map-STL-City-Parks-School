require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Legend","esri/widgets/Home","esri/widgets/Search"], function (esriConfig, Map, MapView, FeatureLayer, Legend, Home, Search) {

esriConfig.apiKey =  "AAPKdc25ad7513a24c46b92cd024b53471173ysex4xHWQwBw2IQ-kNnn5MYzM2Maqnuc7YbUYeHblfF461bYrN1hiCHw4m9SK0E"; 

var map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

var view = new MapView({
          map: map,
          center: [-90.20, 38.65], // Longitude, latitude
          zoom: 12, // Zoom level
          container: "viewDiv" // Div element
        });
  
  	var homeBtn = new Home({
        view: view
      });
      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
  
//STL Parks feature layer (polygons) 
var parksLayer = new FeatureLayer({
  url: "https://services9.arcgis.com/l9yXFvhjz46ekkZV/arcgis/rest/services/St_Louis_City_Parks/FeatureServer"
});
  
  map.add(parksLayer);
          
 var template = {
    title: "{Facility}"}; 
  
//STL Public Schools (points) 
var pubschoolLayer = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Buffer_of_STL_Public_Schools/FeatureServer",
outFields: ["*"],
popupTemplate: template});

  
  map.add(pubschoolLayer);
  
 });
  var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "13ba212005704b72a72ab1c75903393c"
        }
      });
  var searchWidget = new Search({ //not sure why the searchWidget is not popping up
        view: view
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right"
        
      });

//view.when(function() {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
         // var featureLayer = scene.layers.getItemAt(0);
        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Saint Louis City Parks and Schools"
          }]
        });
  
     // Add widget to the bottom right corner of the view
          //view.ui.add(legend, "bottom-right");
    

