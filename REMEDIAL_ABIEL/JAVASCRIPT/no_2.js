/** @format */

var dalem = 5 * 100;
var lokasi = 0;
var progress = 0;

while (progress < dalem) {
  lokasi += 1;
  progress += 50;

  if (progress < dalem) {
    progress -= 15;
  } else {
    false;
  }
}

console.log(`total hari yang diraih untuk sampai atas adalah ${lokasi} hari `);
