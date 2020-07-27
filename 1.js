// pak arman 

var ukuran1 = 20.5;
var ukuran2 = 30;
var harga = 1500000;
var ppn = 15/100;

var hargaTanpappn = ukuran1 * ukuran2 * harga;
var hargappn = hargaTanpappn * ppn;
var hargaAkhir = hargaTanpappn + hargappn;

console.log("Jadi total yang harus dibayar = Rp."+ hargaAkhir);
