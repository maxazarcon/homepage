$(document).ready(function(){
	$("#homeButton").hide();
	$("#contactTab").hide();
	$("#portfolioTab").hide();
	$("#skillsTab").hide();
	$("#resumeTab").hide();
});

$(function() {

	$("#homeButton").click(function() {
		$("#contactTab").fadeOut("slow", function(){
			$("#homeTab").fadeIn("slow");
		});
		$("#portfolioTab").fadeOut("slow", function(){
			$("#homeTab").fadeIn("slow");
		});
		$("#skillsTab").fadeOut("slow", function(){
			$("#homeTab").fadeIn("slow");
		});
		$("#resumeTab").fadeOut("slow", function(){
			$("#homeTab").fadeIn("slow");
		});

		$("#homeButton").fadeOut("slow", function() {
			$("#contactButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});
	});

	$("#contactButton").click(function() {
		$("#homeTab").fadeOut("slow", function(){
			$("#contactTab").show();
		});
		$("#portfolioTab").fadeOut("slow", function(){
			$("#contactTab").show();
		});
		$("#skillsTab").fadeOut("slow", function(){
			$("#contactTab").show();
		});
		$("#resumeTab").fadeOut("slow", function(){
			$("#contactTab").show();
		});

		$("#contactButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});
	});

	$("#portfolioButton").click(function() {
		$("#homeTab").fadeOut("slow", function(){
			$("#portfolioTab").show();
		});
		$("#contactTab").fadeOut("slow", function(){
			$("#portfolioTab").show();
		});
		$("#skillsTab").fadeOut("slow", function(){
			$("#portfolioTab").show();
		});
		$("#resumeTab").fadeOut("slow", function(){
			$("#portfolioTab").show();
		});

		$("#portfolioButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#contactButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});

	});

	$("#skillsButton").click(function() {
		$("#homeTab").fadeOut("slow", function(){
			$("#skillsTab").show();
		});
		$("#contactTab").fadeOut("slow", function(){
			$("#skillsTab").show();
		});
		$("#portfolioTab").fadeOut("slow", function(){
			$("#skillsTab").show();
		});
		$("#resumeTab").fadeOut("slow", function(){
			$("#skillsTab").show();
		});

		$("#skillsButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#contactButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#resumeButton").fadeIn("slow");
		});
	});

	$("#resumeButton").click(function() {
		$("#homeTab").fadeOut("slow", function(){
			$("#resumeTab").show();
		});
		$("#contactTab").fadeOut("slow", function(){
			$("#resumeTab").show();
		});
		$("#portfolioTab").fadeOut("slow", function(){
			$("#resumeTab").show();
		});
		$("#skillsTab").fadeOut("slow", function(){
			$("#resumeTab").show();
		});

		$("#resumeButton").fadeOut("slow", function() {
			$("#homeButton").fadeIn("slow");
			$("#contactButton").fadeIn("slow");
			$("#portfolioButton").fadeIn("slow");
			$("#skillsButton").fadeIn("slow");
		});
	});
});
