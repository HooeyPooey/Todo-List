//add check mark and goThrough line on li;
//parameters of on(): 1st = event, 2nd = target element, 3rd = action;
$("ul").on("click", "i:nth-last-child(3)", function () {
	if ($(this).hasClass("far fa-circle")) {
		$(this).removeClass("far fa-circle");
		$(this).addClass("far fa-check-circle");
		$(this).parent().toggleClass("completed");
	} else {
		$(this).removeClass("far fa-check-circle");
		$(this).addClass("far fa-circle");
		$(this).parent().toggleClass("completed");
	}
});

//tips:
//click() only adds listener for existing elements.
//on() add listeners for all potential future elements.

//remove item
$("ul").on("click", "i:nth-last-child(1)", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

//input item when click "add" button
$("#itemAdd").click(function () {
	//get the inout value
	var textContent = $("#itemInput").val();
	//add new li
	$("ul").append('<li class="m-3"> <i class="far fa-circle"></i>' + " " + " " + textContent + '<span class="addDate mx-5"></span><i class="far fa-trash-alt"></i></li>');
	//clear input
	$("#itemInput").val("");
});

//input item when press "enter" key
$("#itemInput").keypress(function (event) {
	if (event.which == 13) {
		//get the inout value
		var textContent = $(this).val();
		//add new li
		$("ul").append('<li class="m-3"> <i class="far fa-circle"></i>' + " " + " " + textContent + '<span class="addDate mx-5"></span><i class="far fa-trash-alt"></i></li>');
		//clear input
		$(this).val("");
	}
});

//button for all display
$("#all").click(function () {
	$("li").not(".completed").css("display", "block");
	$(".completed").css("display", "block");
});

//button for finished display
$("#finished").click(function () {
	if ($("li").hasClass("completed")) {
		$("li").not(".completed").css("display", "none");
		$(".completed").css("display", "block");
	}
});

//button for unfinished display
$("#unfinished").click(function () {
	if ($("li").hasClass("completed")) {
		$(".completed").css("display", "none");
		$("li").not(".completed").css("display", "block");
	}
});

//clock part
function showTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var min = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var y = date.getFullYear(); // 0000
	var m = date.getMonth(); // 0 - 11
	var d = date.getDate(); // 1 - 31
	var w = date.getDay(); // 0 - 6
	var shift = "AM";
	var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		shift = "PM";
	}

	h = (h < 10) ? "0" + h : h; //01-09, 10-12
	min = (min < 10) ? "0" + min : min; //01-09, 10-12
	s = (s < 10) ? "0" + s : s; //01-09, 10-12

	m = month[m]; //'Jan', 'Feb' ...
	d = (d < 10) ? "0" + d : d; //01-09, 10-12
	w = week[w]; //'Mon', 'Tue' ...

	var time = h + ":" + min + ":" + s + " " + shift;
	var date = m + " " + d + ", " + y + "   " + w;
	var addDate = " ~ " + m + " " + d;



	$("#clock").html(time);
	$("#date").html(date);
	$(".addDate").html(addDate);

	setTimeout(showTime, 1000);
}
showTime();