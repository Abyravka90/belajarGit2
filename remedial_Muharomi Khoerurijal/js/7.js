var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
var tahunLahir = 1990;
var bulanLahir = 6-1;
var tanggalLahir = 11;
var day = new Date(tahunLahir, bulanLahir, tanggalLahir).getDay()-1;

console.log(hari[day])