var LayerHandler = function(){
    
    var self = this;
    
    self.defaultDataProjection = "EPSG:4326";
    self.featureProjection = "EPSG:3857";
    
    self.format = new ol.format.GeoJSON({
	defaultDataProjection: self.defaultDataProjection,
	featureProjection: self.featureProjection
    });
    self.layers = {};
    self.mass_layer_collection = new ol.Collection();
    self.layer_groups = [];
    self.fetchFeatureData = function(data_path){
	return $.getJSON(data_path);
    },
	
    
    self.addGroup = function(options){
	// Create the group
	self.layer_groups[options.group_name] = new ol.layer.Group({
	    title: options.group_title,
	    layers: []
	});
	// Add it to the mass collection
	self.mass_layer_collection.push(self.layer_groups[options.group_name]);
    },

    
    self.addLayerToGroup = function(layer_name, group_name){
	self.layer_groups[group_name].getLayers().push(self.layers[layer_name]);
	self.mass_layer_collection.changed();
    },

    
    self.addFeatureToLayerSource= function(layer_name, feature){
	self.layers[layer_name].getSource().addFeature(feature);
    },	
	
    
    self.addFeaturesToLayerSource = function(layer_name, features){
	self.layers[layer_name].getSource().addFeatures(features);
    },    
    
    
    self.formatGeoJsonToFeature = function(geojson_string, options = {}){
	
	if(!$.isEmptyObject(options)){
	    var fromProjection = typeof options.projection === "undefined" ? self.defaultDataProjection : options.projection;
	    var toProjection = typeof options.feature_projection === "undefined" ? self.featureProjection : options.feature_projection;
	} else {
	    fromProjection = self.defaultDataProjection;
	    toProjection = self.featureProjection;
	}
	
	return self.format.readFeature(geojson_string, {
	    dataProjection: fromProjection, 
	    featureProjection: toProjection
	});
    },

    
    self.formatGeoJsonToFeatures = function(geojson_string, options = {}){
	
	if(!$.isEmptyObject(options)){
	    var fromProjection = typeof options.projection === "undefined" ? self.defaultDataProjection : options.projection;
	    var toProjection = typeof options.feature_projection === "undefined" ? self.featureProjection : options.feature_projection;
	} else {
	    fromProjection = self.defaultDataProjection;
	    toProjection = self.featureProjection;
	}
	
	return self.format.readFeatures(geojson_string, {
	    dataProjection: fromProjection, 
	    featureProjection: toProjection
	});
    },
	
    
    self.formatFeatureToGeoJson = function(feature, options = {}){
	
	if(!$.isEmptyObject(options)){
	    var fromProjection = typeof options.projection === "undefined" ? self.defaultDataProjection : options.projection;
	    var toProjection = typeof options.feature_projection === "undefined" ? self.featureProjection : options.feature_projection;
	} else {
	    fromProjection = self.defaultDataProjection;
	    toProjection = self.featureProjection;
	}
	
	return self.format.writeFeatureObject(feature, {
	    dataProjection: fromProjection, 
	    featureProjection: toProjection, 
	    rightHanded: true
	});
    },
      
   
    self.formatFeaturesToGeoJson = function(features, options = {}){
	
	if(!$.isEmptyObject(options)){
	    var fromProjection = typeof options.projection === "undefined" ? self.defaultDataProjection : options.projection;
	    var toProjection = typeof options.feature_projection === "undefined" ? self.featureProjection : options.feature_projection;
	} else {
	    fromProjection = self.defaultDataProjection;
	    toProjection = self.featureProjection;
	}
	
	return self.format.writeFeaturesObject(features, {
	    dataProjection: fromProjection, 
	    featureProjection: toProjection, 
	    rightHanded: true
	});
    },

    
    self.setSelectable = function(layer_name){
	self.layers[layer_name].set("selectable", true);
    },
    
    
    self.setNonSelectable = function(layer_name){
	self.layers[layer_name].set("selectable", false);
    },

    
    self.addFeaturesFromDataPath = function(layer_name, options){
	//TODO: add this elsewhere / usage outside
	self.fetchFeatureData(options.data.source).then(function(geojson_data){
		
	    self.addGeoJsonToLayerSource(layer_name, geojson_data, options);

	}).done(function(){
	    
	    // TODO: write something if the layer has been succesfully added
	}).fail(function(){
	    // TODO: !!! delete everything (the layer and the layer from the group) if the fetch fails
	    delete self.layers[layer_name];
	});
    },

    self.addGeoJsonToLayerSource = function(layer_name, geojson_data, options = {}){
	switch(geojson_data.type){
	    case "FeatureCollection":
		self.addFeaturesToLayerSource(
		    layer_name, self.formatGeoJsonToFeatures(geojson_data, options)
		);
	    break;

	    case "Feature":
		self.addFeatureToLayerSource(
		    layer_name, self.formatGeoJsonToFeature(geojson_data, options)
		);
	    break;
	}
    },

    self.setStyle = function(layer_name, style){
	self.layers[layer_name].setStyle(style);
    },

    self.addLayer = function(options){
	
	// Create the layer with the provided name
	self.layers[options.layer_name] = new ol.layer.Vector({ 
	    source: new ol.source.Vector(),
	    style: styleFunction
	});
	
	// Make the layer selectable. By default layers are not selectable.
	if(options.selectable === true){
	    self.setSelectable(options.layer_name);
	}
	
	if(!$.isEmptyObject(options.style)){
	    self.setStyle(options.layer_name, options.style);
	}

	// Decide how to add the data ti the layer source based on the datatype
	if(options.hasOwnProperty('data')){
	    switch(options.data.type){
		case "path":
		    // Add features from data path source. WORKFLOW: (fetch -> read -> add)
		    self.addFeaturesFromDataPath(options.layer_name, options);
		    break;
		case "feature":
		    // Add feature from feature source. WORKFLOW: (add) done.
		    self.addFeatureToLayerSource(options.layer_name, options.data);
		    break;
		case "features":
		    // Add features from feature source. WORKFLOW: (add) done.
		    self.addFeaturesToLayerSource(options.layer_name, options.data);
		    break;
		case "geojson":
		    // Add feature / features from geojson. WORKFLOW: source (read -> add)
		    self.addGeoJsonToLayerSource(options.layer_name, options.data.source, options.data);
		    break;
	    }
	}
	self.layers[options.layer_name].set("name", options.layer_name);
	self.layers[options.layer_name].set("title", options.title);
	// Push the layer to a group
	self.addLayerToGroup(options.layer_name, options.group_name);

    };
    
};