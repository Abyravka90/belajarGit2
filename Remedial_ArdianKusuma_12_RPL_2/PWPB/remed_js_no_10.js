lulus = () =>{
    var jumlah = 0;
    var nilai = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 62];
  
    for (var s of nilai) {
      if (s >= 70) {
          jumlah += 1;
          
        }
    }
    console.log(`jumlah siswa = ${nilai.length}`);
    console.log(`jumlah siswa yang lulus =  ${jumlah}`);
  }
  lulus()