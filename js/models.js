//
// Item prototype

var Item = function (name) {
	this.name = name;
};

Item.prototype.getName = function() {
	return this.name;
};

//
// BottleContent prototype

var BottleContent = function (name) {
	this.name = name;
};

var BottleContent = function (name, value) {
	this.name = name;
	this.value = value;
};

BottleContent.prototype = new Item();

BottleContent.prototype.displayValue = function () {
	return this.value.toString(2);
}

//
// Bit masks

var masks = new Array(1 << 0, 1 << 1, 1 << 2, 1 << 3, 1 << 4, 1 << 5, 1 << 6, 1 << 7);

//
// Data

var bottleContents = new Array(
	new BottleContent("Empty", 	   masks[2] | masks[4]),
	new BottleContent("Fairy", 	   masks[3] | masks[4]),
	new BottleContent("Fish", 	   masks[0] | masks[3] | masks[4]),
	new BottleContent("Blue Fire", masks[2] | masks[3] | masks[4]),
	new BottleContent("Bugs", 	   masks[0] | masks[2] | masks[3] | masks[4]),
	new BottleContent("Milk", 	   masks[0] | masks[1] | masks[2] | masks[3] | masks[4])
);

$(function () {
	$.each(bottleContents, function (index, b) {
		console.log(index + 1);
		console.log("Name: " + b.name);
		console.log("Value: " + b.value);
		console.log("Bits: " + b.displayValue());
		console.log("--------------");
	});
});