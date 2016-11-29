/*
$(document).ready(function(){

    var _form = $("#form_buffer_dialog");
    var _buffer_distance_unit_type = $(_form, $("#buffer_distance_unit_type"));
    var _buffer_distance = $(_form, $("#buffer_distance"));
    var _allFields = $( [] ).add( _buffer_distance_unit_type ).add( _buffer_distance );
    
    function createBuffer() {
  
    }
    
    tool_buffer_dialog = $( "#dialog-form" ).dialog({
	autoOpen: false,
	//height: 400,
	width: 600,
	modal: true,
	show: { 
	    effect: 'fade', 
	    speed: 1000
	},
	buttons: {
	    Cancel: function() {
		tool_buffer_dialog.dialog( "close" );
	    },
	    Create: function(){
		console.log("Execute gis operation");
		tool_buffer_dialog.dialog( "close" );
	    }
	},
	close: function() {
	    _form[ 0 ].reset();
	    _allFields.removeClass( "ui-state-error" );
	}
	
    });

    // Toolbar
    $( "#gis_toolbar" ).draggable({ 
	cursor: "move", cursorAt: { top: 50, left: 50 } 
    });
    
});
*/
var dialog = function(id){
    
    var self = this;
    self.dialogs = {};
    
    // BUFFER DIALOG

    self.dialogs.buffer = $("#dialog-form").dialog({
	autoOpen: false,
	width: 600,
	modal: true,
	show: { effect: 'fade', speed: 1000},
	buttons: {
	    Cancel: function() {
		
	    },
	    Create: function(){
		self.dialogs.buffer.create();
	    }
	},
	close: function() {
	    
	}
	
    }),
	    
    self.dialogs.buffer._field_unit = 'kilometers';
    self.dialogs.buffer._field_dist = 10000;

    self.dialogs.buffer.create = function(){
	// create buffer outside
    }
};