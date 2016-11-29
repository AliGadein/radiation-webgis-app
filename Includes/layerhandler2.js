var LayerHandler2 = function(){
    
    var self = this;

    // ol.Collection of all layers. (Layers, Groups)
    self.Layers = new ol.layer.Group();
    
    // Formatter for geojson data
    self.FormatGeoJson = new ol.format.GeoJSON();
    
    // Default feature projection
    self.defaultFeatureProjection = "EPSG:3857";
    
    // Default data projection
    self.defaultDataProjection = "EPSG:4326";
    
    // Methods for layer handling
    
    self.addVectorLayer = function(layer){
	self.Layers.push(layer);
    },
	    
    self.getVectorLayer = function(){
	
    },
	    
    self.removeLayer = function(){
	
    },
    
    // Methods for source handling -
    
    self.addVectorLayerSource = function(){
	
    },
	    
    self.getVectorLayerSource = function(layer){
	return layer.getSource();
    },
	    
    self.removeVectorLayerSource = function(){
	
    },
    
    // Methods for group handling - 
    
    self.addGroup = function(group){
	self.Layers.push(group);
    },
	 
    self.getGroup = function(){
	
    },    
	    
    self.removeGroup = function(){
	
    },
    
    // Methods for mapping the layer structure -
    
    self.getLayerThree = function(){
	
    },
    
    // Methods for property handling -
    
    self.setLayerProperty = function(){
	
    },
	    
    self.getLayerProperty = function(property, layer){

    },
    
    self.getLayerProperties = function(layer){
	return layer.getProperties();
    },
    
    self.editLayerProperty = function(){
	
    },
    
    self.removeLayerProperty = function(){
	
    },
    
    // Methods for feature handling -
    
    self.addFeatureToLayerSource = function(){
	
    },
	    
    self.removeFeatureFromLayerSource = function(){
	
    },
    
    self.addFeaturesToLayerSource = function(){
	
    },
	    
    self.removeFeaturesFromLayerSource = function(){
	
    },
    
    // Methods for formatting geojson <-> feature data -
    
    self.formatGeoJsonToFeature = function(geojson, options = {}){
	return self.FormatGeoJson.readFeature(geojson, options);
    },
	    
    self.formatGeoJsonToFeatures = function(geojson, options = {}){
	return self.FormatGeoJson.readFeature(geojson, options);
    },
    
    self.formatFeatureToGeoJsonObject = function(feature, options = {}){
	return self.FormatGeoJson.writeFeatureObject(feature, options);
    },
    
    self.formatFeaturesToGeoJsonObject = function(features, options = {}){
	return self.FormatGeoJson.writeFeaturesObject(features, options);
    },
    
    self.formatFeatureToGeoJsonString = function(feature, options = {}){
	return self.FormatGeoJson.writeFeature(feature, options);
    },
    
    self.formatFeaturesToGeoJsonString = function(features, options = {}){
	return self.FormatGeoJson.writeFeatures(features, options);
    },
    
    // Methods for adding external data -
    
    self.fetchGeoJsonFromPath = function(path_to_data){
	
    },
	    
    // Methods for geospatial operations -
    
    self.createBuffer = function(){
	
    },
	    
    self.createUnion = function(){
	
    }
    
};