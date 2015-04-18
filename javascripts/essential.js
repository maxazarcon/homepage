$(function() {

	$("#homeButton").on("click", function() {
		$("#homeTab").show();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#homeButton").fadeOut();
		$("#contactButton").show();
		$("#portfolioButton").show();
		$("#skillsButton").show();
		$("#resumeButton").show();
	});

	$("#contactButton").on("click", function() {
		$("#homeTab").hide();
		$("#contactTab").show();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#homeButton").show();
		$("#contactButton").fadeOut();
		$("#portfolioButton").show();
		$("#skillsButton").show();
		$("#resumeButton").show();
	});

	$("#portfolioButton").on("click", function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").show();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#homeButton").show();
		$("#contactButton").show();
		$("#portfolioButton").fadeOut();
		$("#skillsButton").show();
		$("#resumeButton").show();
	});
	
		$("#skillsButton").on("click", function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").show();
		$("#resumeTab").hide();

		$("#homeButton").show();
		$("#contactButton").show();
		$("#portfolioButton").show();
		$("#skillsButton").fadeOut();
		$("#resumeButton").show();
		
		$("#resumeButton").on("click", function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").show();

		$("#homeButton").show();
		$("#contactButton").show();
		$("#portfolioButton").show();
		$("#skillsButton").show();
		$("#resumeButton").fadeOut();
	});
	});
});
