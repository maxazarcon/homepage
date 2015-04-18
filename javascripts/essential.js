$(function() {

	$("#homeButton").on("click", function() {
		$("#homeTab").show();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").hide();
		$("#resumeTab").hide();

		$("#homeButton").fadeOut("slow");
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
		$("#contactButton").fadeOut("slow");
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
		$("#portfolioButton").fadeOut("slow");
		$("#skillsButton").show();
		$("#resumeButton").show();
	});
	
		$("#skillsButton").on("click", function() {
		$("#homeTab").hide();
		$("#contactTab").hide();
		$("#portfolioTab").hide();
		$("#skillsTab").show();
		$("#resumeTab").hide();

		$("#homeButton").fadeIn("slow");
		$("#contactButton").fadeIn("slow");
		$("#portfolioButton").fadeIn("slow");
		$("#skillsButton").fadeOut("slow");
		$("#resumeButton").fadeIn("slow");
	});
		
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
		$("#resumeButton").fadeOut("slow");
	});
});
