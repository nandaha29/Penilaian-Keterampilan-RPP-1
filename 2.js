let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5 },
    {nama: "Gula", harga: 14000, jumlah: 5 },
    {nama: "Telur", harga: 20000, jumlah: 2 },
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
];

console.log( barang[0].jumlah, barang[0].nama , barang[0].harga * barang[0].jumlah );
console.log( barang[1].jumlah, barang[1].nama , barang[1].harga * barang[1].jumlah );
console.log( barang[2].jumlah, barang[2].nama , barang[2].harga * barang[2].jumlah );
console.log( barang[3].jumlah, barang[3].nama , barang[3].harga * barang[3].jumlah );

let totBeras = barang[0].harga * barang[0].jumlah;
let totGula = barang[1].harga * barang[1].jumlah;
let totTelur = barang[2].harga * barang[2].jumlah;
let totMinyak = barang[3].harga * barang[3].jumlah;

let total = totBeras + totGula + totTelur + totMinyak;
console.log("Total Belanja adalah ", total);
 



