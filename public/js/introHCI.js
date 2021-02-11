'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
}
function callback(result) {
	console.log(result);
	$("#testjs").click(function(e)) {
	$.get("/project/random", addProject);
	}
}
function addProject(result) {
	var projectHTML = '<a href="#" class="thumbnail">' +
	  '<img src="' + result['image'] + '" class="img">' +
	  '<p>' + result['title'] + '</p>' +
	  '<p><small>' + result['date'] +
	  '</small></p></a>';
  }
  function projectClick(e) {
    // prevent the page from reloading     
    e.preventDefault();
    // In an event handler, $(this) refers to     
    // the object that triggered the event 
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);    
    $.get("http://URL", callBackFn)
	$.post("http://URL", {"json":"json"}, callBackFn)
}
