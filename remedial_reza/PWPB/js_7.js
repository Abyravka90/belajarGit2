//array hari senin sampai jumat
var hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
var tahun_lahir = 1990;
var bulan_lahir = 06 - 1;
var tanggal_lahir = 11;

var getHari = new Date(tahun_lahir, bulan_lahir, tanggal_lahir).getDay() - 1;
console.log(hari[getHari])