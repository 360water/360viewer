/* This file stores the 360viewer settings */

/* Viewer Size */
var viewWidth = "950px";
var viewHeight = "534px";

/* View Images */
var views = new Array();
views[0] = new Image(950, 534);
views[0].src = folder + "/View0.png";
views[0].name = "View0";
views[1] = new Image(950, 534);
views[1].src = folder + "/View1.png";
views[1].name = "View1";
views[2] = new Image(950, 534);
views[2].src = folder + "/View2.png";
views[2].name = "View2";
views[3] = new Image(950, 534);
views[3].src = folder + "/View3.png";
views[3].name = "View3";
views[4] = new Image(950, 534);
views[4].src = folder + "/View4.png";
views[4].name = "View4";
views[5] = new Image(950, 534);
views[5].src = folder + "/View5.png";
views[5].name = "View5";
views[6] = new Image(950, 534);
views[6].src = folder + "/View6.png";
views[6].name = "View6";

/* Component Images */
var components = new Array();
components[0] = new Image(500, 239);
components[0].src = folder + "/motor.png";
components[0].name = "Main Motor";
components[1] = new Image(100, 239);
components[1].src = folder + "/conveyor.png";
components[1].name = "Screw Conveyor";
components[2] = new Image(500, 239);
components[2].src = folder + "/platedams.png";
components[2].name = "Plate Dams";
components[3] = new Image(500, 239);
components[3].src = folder + "/lubricationunit.png";
components[3].name = "Lubrication System";
components[4] = new Image(500, 239);
components[4].src = folder + "/bearing.png";
components[4].name = "Pillow Block Bearing";
components[5] = new Image(500, 239);
components[5].src = folder + "/secondmotor.png";
components[5].name = "Secondary Motor";
components[6] = new Image(500, 239);
components[6].src = folder + "/shockabsorber.png";
components[6].name = "Shock Absorber";
components[7] = new Image(500, 239);
components[7].src = folder + "/centratetrough.png";
components[7].name = "Centrate Trough";
components[8] = new Image(500, 239);
components[8].src = folder + "/feedpipe.png";
components[8].name = "Feed Pipe";
components[9] = new Image(500, 239);
components[9].src = folder + "/solidsoutput.png";
components[9].name = "Solids Output";

/* Starting View */
var currentView = 0;

