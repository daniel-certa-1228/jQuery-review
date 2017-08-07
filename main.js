console.log( "main.js" );

let howManyBeans = 6;
let howManyCows = 2;

$("#resultBtn").click( () => {
	resultFunction(howManyBeans, howManyCows);
	// console.log( "click" );
})

function resultFunction (a,b) {
	let result = a * b;
	// console.log( $("#result-1").html(`${result} random items of cows and beans`) );
	$("#result-1").html(`${result} random items of cows and beans`)
}

$("#scaryBtn").click(() => {
	$("li").toggle();
	console.log( "is hidden", $("li").is(":hidden") );
	$("li").is(":hidden") ? $("#scaryBtn").html("Show") : $("#scaryBtn").html("Hide")
})

let storyItems = $(".story");
console.log( "storyItems", storyItems );

for (let i = 0; i < storyItems.length; i++) {
	storyItems[i].onmouseover = over;
	storyItems[i].onmouseout = out;
};

function over() {
	console.log( "over:id", this.id, "current target", event.currentTarget, "target", event.target );
	this.style.backgroundColor= "red";
}

function out() {
	this.style.backgroundColor= "#fff";
}

$(".inner").append(`, <strong>Jack</strong>`)

//option1
$("#holiday").click(() => {
	doSomething($("#holiday"));
})

function doSomething(obj) {
	console.log( "this obj", obj, event );
	event.target.style.backgroundColor = "orange"
}

$("#tomorrow").click((event) => {
	doSomethingMore(event);
})


function doSomethingMore(event){
	console.log( "event", event );
	event.target.style.backgroundColor = "lightgreen";
}









