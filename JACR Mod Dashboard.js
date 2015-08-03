// Just a Chill Room... Mod Dashboard //

// Version: 0.3.0

// Description: Created for 1-click modding in JACR.

// Developed by: TwinTails

// TODO
// Hide image btns

// Variables //
var jacr = {
	mode: "skip",
	open: false
};

// Activate
$("head").append("<link rel='stylesheet' type='text/css' href='https://rawgit.com/TwinTailsX/JACR-Mod-Dashboard/master/styles.css'>");

// Retrieve external HTML and append to body
$.get("https://rawgit.com/TwinTailsX/JACR-Mod-Dashboard/master/dashboard.html", function (data) {
	// Add button to Community Settings menu
	$("#room-settings-menu").append("<a id='jacr-open' class='item general' href=''><i class='icon icon-settings-white'></i><span class='label'>Dashboard</span></a>");

	// Add pane
	$("#room-settings").append(data);

	// Add functionality
	$("#jacr-open").on("click", function (event) {
		event.preventDefault();
		// Open dashboard if not already open
		if (! jacr.open) {
			// Vanity
			$("#room-settings-menu .selected").removeClass("selected");

			// Hide settings pane
			$("#room-settings .general-settings").css("display", "none");

			// Show dashboard
			$("#jacr-ui").css("display", "block");

			jacr.open = true;
		} else {
			// Vanity
			$("#jacr-open").addClass("selected");

			// Hide dashboard
			$("#jacr-ui").css("display", "none");

			// Show settings pane
			$("#room-settings .general-settings").css("display", "block");

			jacr.open = false;
		}
	});

	console.log("JACR Mod Dashboard loaded.");
}).fail(function (data) {
		alert("Failed to load dashboard. Is GitHub down?");
	});

// Private //

// Buttons functions //

// Toggle skip/lskip
$("#jacr-theme").on("click", function () {
	if (jacr.mode = "skip") {
		jacr.mode = "lockskip";
		$("#jacr-skip").removeClass("jacr-ui-active");
		$("#jacr-lockskip").addClass("jacr-ui-active");
	} else {
		jacr.mode = "skip";
		$("#jacr-skip").addClass("jacr-ui-active");
		$("#jacr-lockskip").removeClass("jacr-ui-active");
	}
});

// Skip button
$("#jacr-theme").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip theme");
	} else {
		API.sendChat("!lockskip theme");
	}
});

$("#jacr-forbidden").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip forbidden");
	} else {
		API.sendChat("!lockskip forbidden");
	}
});

$("#jacr-op").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip op");
	} else {
		API.sendChat("!lockskip op");
	}
});

$("#jacr-unpopular").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip unpopular");
	} else {
		API.sendChat("!lockskip unpopular");
	}
});

$("#jacr-unavailable").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip unavailable");
	} else {
		API.sendChat("!lockskip unavailable");
	}
});

$("#jacr-history").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip history");
	} else {
		API.sendChat("!lockskip history");
	}
});

$("#jacr-nsfw").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip nsfw");
	} else {
		API.sendChat("!lockskip nsfw");
	}
});

$("#jacr-motto").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip motto");
	} else {
		API.sendChat("!lockskip motto");
	}
});

$("#jacr-quality").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip quality");
	} else {
		API.sendChat("!lockskip quality");
	}
});

$("#jacr-mix").on("dblclick", function () {
	if (jacr.mode = "skip") {
		API.sendChat("!skip mix");
	} else {
		API.sendChat("!lockskip mix");
	}
});

// Waitlist //
$("#jacr-lock").on("dblclick", function () {
	API.sendChat("!lock");
});

$("#jacr-unlock").on("dblclick", function () {
	API.sendChat("!unlock");
});

$("#jacr-ping").on("dblclick", function () {
	API.sendChat("!ping");
});

// Input //
$("#jacr-kick").on("dblclick", function () {
	var text = $("#jacr-input").text();
	API.sendChat("!kick @" + text);
});

$("#jacr-mute").on("dblclick", function () {
	var text = $("#jacr-input").text();
	API.sendChat("!mute @" + text);
});

$("#jacr-ban").on("dblclick", function () {
	var text = $("#jacr-input").text();
	API.sendChat("!ban @" + text);
});

$("#jacr-mottoset").on("dblclick", function () {
	var text = $("#jacr-input").text();
	API.sendChat("!mottoset " + text);
});

// Misc //
$("#jacr-stats").on("dblclick", function () {
	API.sendChat("!stats");
});

$("#jacr-history").on("dblclick", function () {
	API.sendChat("!history");
});

$("#jacr-status").on("dblclick", function () {
	API.sendChat("!status");
});

$("#jacr-song-link").on("dblclick", function () {
	API.chatLog("Coming soon!");
});
