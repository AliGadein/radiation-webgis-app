// STYLES //
	    var image = new ol.style.Circle({
		radius: 10,
		stroke: new ol.style.Stroke({
		    color: 'rgba(255, 255, 255, 1)', 
		    width: 1
		}),
		fill: new ol.style.Fill({
		     color: 'rgba(0, 234, 255, 1)'
		})
	    });

	    var styles = {
		
		'Point': [new ol.style.Style({
		    image: image
		})],
	    
		'LineString': [new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: 'green',
			width: 5
		    }),
		})],
	    
		'MultiLineString': [new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: 'green',
			width: 1
		    })
		})],

		'MultiPoint': [new ol.style.Style({
		    image: image
		})],

		'MultiPolygon': [new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: 'yellow',
			width: 1
		    }),
		    fill: new ol.style.Fill({
			color: 'rgba(255, 255, 0, 0.4)'
		    })
		})],

		'Polygon': [new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: 'rgba(93, 93, 93, 1)',
			width: 1
		    }),
		    fill: new ol.style.Fill({
			color: 'rgba(0, 0, 255, 0)'
		    })
		})],

		'GeometryCollection': [new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: 'magenta',
			width: 2
		    }),
		    fill: new ol.style.Fill({
			color: 'magenta'
		    }),
		    image: new ol.style.Circle({
			radius: 10,
			fill: null,
			stroke: new ol.style.Stroke({
			  color: 'magenta'
			})
		    })
		})],

		'Circle': [new ol.style.Style({
		    stroke: new ol.style.Stroke({
			color: 'red',
			width: 2
		    }),
		    fill: new ol.style.Fill({
			color: 'rgba(255,0,0,0.2)'
		    })
		})]
		
		

	    }; 
		

	    // STYLE CREATIN FUNCTION //

	    var styleFunction = function(feature, resolution) {
	      return styles[feature.getGeometry().getType()];
	    };