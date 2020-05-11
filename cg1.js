var boreSizes = ["20", "25", "32", "40", "50", "63", "80", "100"];
/*var structure [D, AL, A, H, S, ZZ, TA, TB]*/
var smcMeasures = [[8, 15.5, 18, 35, 69, 106, 11, 11],
[10, 19.5, 22, 40, 69, 111, 11, 11],
[12, 19.5, 22, 40, 71, 113, 11, 10],
[16, 27, 30, 50, 78, 130, 12, 10],
[20, 32, 35, 58, 90, 150, 13, 12],
[20, 32, 35, 58, 90, 150, 13, 12],
[25, 37, 40, 71, 108, 182, 0, 0],
[30, 37, 40, 71, 108, 182, 0, 0]
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
var longStroke = [[77,114, 11, 11],
[77, 119, 11, 11],
[79, 121, 11, 11],
[87, 139, 12, 12],
[102, 162, 13, 13],
[102, 162, 13, 13],
[122, 196, 0, 0],
[122, 196, 0, 0]  
];
var shortStroke = [[69, 106, 11, 11],
[69, 111, 11, 11], 
[71, 113, 11, 10],
[78, 130, 12, 10],
[90, 150, 13, 12],
[90, 150, 13, 12],
[108, 182, 0, 0],
[108, 182, 0, 0]
];
var smcLimit = document.getElementsByClassName("smc").length;
var boreLimit = document.getElementsByClassName("boreSize").length;
var threadLimit = document.getElementsByClassName("smcThread").length;
var stroke = document.getElementById("stroke");

function longStrokeMeasure() {
  if (Number(stroke.value) > 300) {
    for(i = 0; i < 7; i++) {
      for(j = 4; j < 7; j++) {
        smcMeasures[i][j] = longStroke[i][j-4];
      }
    }
  } else if (Number(stroke.value) < 300) {
    for(i = 0; i < 7; i++) {
      for(j = 4; j < 7; j++) {
        smcMeasures[i][j] = shortStroke[i][j-4];
      }
    }
  }
  autoFill();
}

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

stroke.addEventListener("input", longStrokeMeasure);