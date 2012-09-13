/* Use this file to setup the click regions */
$(window).load(function() {
	/* View01 */
	$(".View0[title='Main Motor']").css("left", "646px")
		.css("top", "93px")
		.width(270)
		.height(102);
	$(".View0[title='Plate Dams']").css("left", "623px")
		.css("top", "207px")
		.width(66)
		.height(68);
	$(".View0[title='Lubrication System']").css("left", "405px")
		.css("top", "316px")
		.width(158)
		.height(210);
	$(".View0[title='Conveyor']").css("left", "34px")
		.css("top", "352px")
		.width(169)
		.height(159);
	$(".View0[title='Pillow Block Bearing']").css("left", "68px")
		.css("top", "206px")
		.width(38)
		.height(62);
	$(".View0[title='Shock Absorber']").css("left", "836px")
		.css("top", "345px")
		.width(67)
		.height(44);

	/* View02 */
	$(".View1[title='Secondary Motor']").css({ "left" : "638px", "top" : "164px" }).width(107).height(104);
	$(".View1[title='Main Motor']").css({ "left" : "506px", "top" : "18px" }).width(298).height(116);
	$(".View1[title='Shock Absorber']").css({ "left" : "555px", "top" : "335px" }).width(66).height(44);
	$(".View1[title='Lubrication System']").css({ "left" : "103px", "top" : "282px" }).width(115).height(153);
	$(".View1[title='Conveyor']").css({ "left" : "6px", "top" : "306px" }).width(77).height(78);
	$(".View1[title='Plate Dams']").css({ "left" : "397px", "top" : "137px" }).width(41).height(87);

});

