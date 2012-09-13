/* Use this file to setup the click regions */
$(document).ready(function () {
	/* Create the clickable regions
	 * Each region requires three classes (view the region is in, 'components', component image index)
	 * Each region requires a title that will be used again for positioning the regions */

	/* View0 */
	$("#viewer").append('<div class="View0 components 0" title="Main Motor"><div></div></div>');
	$("#viewer").append('<div class="View0 components 3" title="Lubrication System"><div></div></div>');
	$("#viewer").append('<div class="View0 components 2" title="Plate Dams"><div></div></div>');
	$("#viewer").append('<div class="View0 components 1" title="Conveyor"><div></div></div>');
	$("#viewer").append('<div class="View0 components 4" title="Pillow Block Bearing"><div></div></div>');
	$("#viewer").append('<div class="View0 components 5" title="Shock Absorber"><div></div></div>');

	/* View1 */
	$("#viewer").append('<div class="View1 components 0" title="Main Motor"><div></div></div>');
	$("#viewer").append('<div class="View1 components 5" title="Secondary Motor"><div></div></div>');
	$("#viewer").append('<div class="View1 components 3" title="Lubrication System"><div></div></div>');
	$("#viewer").append('<div class="View1 components 2" title="Plate Dams"><div></div></div>');
	$("#viewer").append('<div class="View1 components 1" title="Conveyor"><div></div></div>');
	$("#viewer").append('<div class="View1 components 6" title="Shock Absorber"><div></div></div>');
});

$(window).load(function() {
	/* Position the clickable regions
	 * Use debug.js to get the code for the clickable region
	 * When debug.js is enabled, click to create the top-left corner and click again to create
	 * the bottom left corner; debug.js will then give the code for the region placement.
	 * Once debug.js generates code, add a title (use the same title as above). */

	/* View0 */
	$(".View0[title='Main Motor']").css({"left" : "646px", "top" : "93px"}).width(270).height(102);
	$(".View0[title='Plate Dams']").css({"left" : "623px", "top" : "207px"}).width(66).height(68);
	$(".View0[title='Lubrication System']").css({"left" : "405px", "top" : "316px"}).width(158).height(210);
	$(".View0[title='Conveyor']").css({"left" : "34px", "top" : "352px"}).width(169).height(159);
	$(".View0[title='Pillow Block Bearing']").css({"left" : "68px", "top" : "206px"}).width(38).height(62);
	$(".View0[title='Shock Absorber']").css({"left" : "836px", "top" : "345px"}).width(67).height(44);

	/* View1 */
	$(".View1[title='Secondary Motor']").css({ "left" : "638px", "top" : "164px" }).width(107).height(104);
	$(".View1[title='Main Motor']").css({ "left" : "506px", "top" : "18px" }).width(298).height(116);
	$(".View1[title='Shock Absorber']").css({ "left" : "555px", "top" : "335px" }).width(66).height(44);
	$(".View1[title='Lubrication System']").css({ "left" : "103px", "top" : "282px" }).width(115).height(153);
	$(".View1[title='Conveyor']").css({ "left" : "6px", "top" : "306px" }).width(77).height(78);
	$(".View1[title='Plate Dams']").css({ "left" : "397px", "top" : "137px" }).width(41).height(87);

});

