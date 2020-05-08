var boreSizes = ["20", "25", "32", "40", "50", "63", "80", "100"];
/*var structure [D, AL, A, H, S, ZZ, TA, TB]*/
var smcMeasures = [[8, 15.5, 18, 35, 69, 106, 11, 11],
[10, 19.5, 22, 40, 69, 111, 11, 11],
[12, 19.5, 22, 40, 71, 113, 11, 10],
[16, 27, 30, 50, 78, 130, 12, 10],
[20, 32, 35, 58, 90, 150, 13, 12],
[20, 32, 35, 58, 90, 150, 13, 12],
[25, 37, 40, 71, 108, 182],
[30, 37, 40, 71, 108, 182]
];
/*var structure [MM, P, TC]*/
var smcThreads = [["M8x1.25", '1/8"', "M5x0.8"],
["M10x1.25", '1/8"', "M6x0.75"],
["M10x1.25", '1/8"', "M8x1.0"],
["M14x1.5", '1/8"', "M10x1.25"],
["M18x1.5", '1/4"', "M12x1.25"],
["M18x1.5", '1/4"', "M14x1.5"],
["M22x1.5", '3/8"', "N/A"],
["M26x1.5", '1/2"', "N/A"]
];
var smcLimit = document.getElementsByClassName("smc").length;
var boreLimit = document.getElementsByClassName("boreSize").length;
var threadLimit = document.getElementsByClassName("smcThread").length;

function autoFill() {
  var bore = document.getElementById("bore").value;
  for (i = 0; i < boreLimit; i++) {
    if (bore === boreSizes[i]) {
      for (j = 0; j < smcLimit; j++) {
        document.getElementsByClassName("smc")[j].value = smcMeasures[i][j];
      }
      for (j = 0; j < threadLimit; j++) {
        document.getElementsByClassName("smcThread")[j].value = smcThreads[i][j];
      }
    }
  }
}