// Just a Chill Room... Mod Dashboard //

// Description: Created for 1-click modding in JACR.

// Developed by: TwinTails

// TODO
// Hide image btns

// Variables //
var jacr = {
	version: "v0.4.4",
	mode: "skip",
	open: false
};

// Activate
$("head").append(
	"<link rel='stylesheet' type='text/css' href='https://rawgit.com/TwinTailsX/JACR-Mod-Dashboard/master/styles.css'>");

$("head").append(
	"<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css'>");

$("head").append(
	"<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>");

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js",
	function (data) {
		//data();
		console.log("Loaded MaterializeJS");
	}).fail(function (error) {
		//alert("JACR Mod Dashboard: Can't load Materialize :l");
	});

// Retrieve external HTML and append to body
$.get("https://rawgit.com/TwinTailsX/JACR-Mod-Dashboard/master/dashboard.html",
	function (ui) {
		var button = "<div id='jacr-open'>";
				//button += "<i class='icon icon-settings-white'></i>";
				button += "<img src='https://pbs.twimg.com/profile_images/635749955030921217/w5F52j48_bigger.png'>";
				button += "</div>";

	// If RS is loaded, remove the skip button
	if ($("#rs-skip-button").length > 0) {
		$("#rs-skip-button").css("display", "none");
	}
	// Add button to header menu
	$("#now-playing-bar").append(button);

	// Bump chat z-index up a notch so it doesn't get covered by our UI
	//$(".app-right").css("z-index", "3");

	// Add pane
	$("#playback").append(ui);

	// Add functionality
	$("#jacr-open").off("click").on("click", function (event) {
		event.preventDefault();
		// Open dashboard if not already open
		if (! jacr.open) {
			// Vanity
			//$("#room-settings-menu .selected").addClass("selected");

			//$("#jacr-open").removeClass("selected");

			// Hide settings pane
			//$("#room-settings .general-settings").css("display", "none");

			// Show dashboard
			//$("#jacr-ui").css("display", "block");
			$("#jacr-ui").css("height", "100%");

			jacr.open = true;
		} else {
			// Vanity
			//$("#room-settings-menu .selected").addClass("selected");

			//$("#jacr-open").removeClass("selected");

			// Hide dashboard
			//$("#jacr-ui").css("display", "none");
			$("#jacr-ui").css("height", "0%");

			// Show settings pane
			//$("#room-settings .general-settings").css("display", "block");

			jacr.open = false;
		}

		$("#jacr-version").text(jacr.version);

		// Private //

		// Buttons functions //

		// Toggle skip/lskip
		$("#jacr-skip").off("click").on("click", function () {
			// Change mode
			jacr.mode = "skip";
			$("#jacr-skip").addClass("active");
			$("#jacr-lockskip").removeClass("active");
		});

		$("#jacr-lockskip").off("click").on("click", function () {
			// Change mode
			jacr.mode = "lockskip";
			$("#jacr-skip").removeClass("active");
			$("#jacr-lockskip").addClass("active");
		});

		// Skip button
		$("#jacr-theme").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip theme");
			} else {
				API.sendChat("!lockskip theme");
			}
		});

		$("#jacr-forbidden").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip forbidden");
			} else {
				API.sendChat("!lockskip forbidden");
			}
		});

		$("#jacr-op").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip op");
			} else {
				API.sendChat("!lockskip op");
			}
		});

		$("#jacr-unpopular").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip unpopular");
			} else {
				API.sendChat("!lockskip unpopular");
			}
		});

		$("#jacr-unavailable").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip unavailable");
			} else {
				API.sendChat("!lockskip unavailable");
			}
		});

		$("#jacr-history").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip history");
			} else {
				API.sendChat("!lockskip history");
			}
		});

		$("#jacr-nsfw").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip nsfw");
			} else {
				API.sendChat("!lockskip nsfw");
			}
		});

		$("#jacr-motto").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip motto");
			} else {
				API.sendChat("!lockskip motto");
			}
		});

		$("#jacr-quality").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip quality");
			} else {
				API.sendChat("!lockskip quality");
			}
		});

		$("#jacr-mix").off("dblclick").on("dblclick", function () {
			if (jacr.mode = "skip") {
				API.sendChat("!skip mix");
			} else {
				API.sendChat("!lockskip mix");
			}
		});

		// Waitlist //
		$("#jacr-lock").off("dblclick").on("dblclick", function () {
			API.sendChat("!lock");
		});

		$("#jacr-unlock").off("dblclick").on("dblclick", function () {
			API.sendChat("!unlock");
		});

		$("#jacr-ping").off("dblclick").on("dblclick", function () {
			API.sendChat("!ping");
		});

		// Input //
		$("#jacr-kick").off("dblclick").on("dblclick", function () {
			var text = $("#jacr-input").val();
			API.sendChat("!kick @" + text);
		});

		$("#jacr-mute").off("dblclick").on("dblclick", function () {
			var text = $("#jacr-input").val();
			API.sendChat("!mute @" + text);
		});

		$("#jacr-ban").off("dblclick").on("dblclick", function () {
			var text = $("#jacr-input").val();
			API.sendChat("!ban @" + text);
		});

		$("#jacr-mottoset").off("dblclick").on("dblclick", function () {
			var text = $("#jacr-input").val();
			API.sendChat("!mottoset " + text);
		});

		// Misc //
		$("#jacr-stats").off("dblclick").on("dblclick", function () {
			API.sendChat("!stats");
		});

		$("#jacr-history").off("dblclick").on("dblclick", function () {
			API.sendChat("!history");
		});

		$("#jacr-status").off("dblclick").on("dblclick", function () {
			API.sendChat("!status");
		});

		$("#jacr-link").off("dblclick").on("dblclick", function () {
			API.sendChat("!link");
		});

	});

	console.log("JACR Mod Dashboard loaded.");
}).fail(function (data) {
		alert("Failed to load dashboard. Is GitHub down?");
	});
