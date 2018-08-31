// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

function updateImage() {
    $(".glyphicon-user").hide();
    $(".driver-license").show();
    populateFields();
}

function populateFields() {
    $("#inputFirstname2").val("Omar");
    $("#inputLastname2").val("Khedr");
    $("#inputAddress2").val("432 Park Ave.");
    $("#inputCity2").val("New York City");
    $("#inputState2").val("NY");
    $("#inputZip2").val("10022");
}

function formCheck() {
		var control = document.getElementById("inputEmailaddress2");
		if (control.value == "")
		{
    	$('#formcheck3').hide();
    }
    else
    	{
    		$('#formcheck3').show();
    	}
}

