const profil = {
  nama: "Muhamad Raynard Alif",
  peran: "mahasiswa Informatika yang sedang belajar pengembangan web",
  keahlian: [
    { nama: "HTML", kategori: "Front-end" },
    { nama: "CSS", kategori: "Front-end" },
    { nama: "JavaScript", kategori: "Front-end" },
    { nama: "Node.js", kategori: "Back-end" },
    { nama: "Python", kategori: "Back-end" },
  ]
};

const daftarProyek = [
  {
    judul: "Halaman CV responsif P6",
    kategori: "Website",
    teknologi: ["HTML", "CSS"],
    selesai: true
  },
  {
    judul: "HalalChain",
    kategori: "Website",
    teknologi: ["HTML", "CSS", "JavaScript"],
    selesai: false
  }
];

const jumlahProyek = daftarProyek.length;

function buatPerkenalan({ nama, peran }) {
  return `Nama saya ${nama}, ${peran}.`;
}

const formatKeahlian = (daftar) =>
  daftar.map((item) => item.nama).join(" · ");

// map()
const namaKeahlian = profil.keahlian.map((item) => item.nama);

// filter()
let kategoriAktif = "Front-end";
const filterKeahlian = (daftar, kategori) =>
  daftar.filter((item) => item.kategori === kategori);

// find()
const proyekCV = daftarProyek.find(
  (item) => item.judul === "Halaman CV responsif P6"
);

// map()
const judulProyek = daftarProyek.map((proyek) => proyek.judul);

// sort()
const urutanProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekTerurut = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul)
);
const urutanTidakBerubah =
  JSON.stringify(daftarProyek.map((proyek) => proyek.judul)) ===
  JSON.stringify(urutanProyek);

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log("Jumlah proyek:", jumlahProyek);
console.log("Nama keahlian:", namaKeahlian);

const keahlianAktifAwal = filterKeahlian(profil.keahlian, kategoriAktif);
console.log(`Keahlian ${kategoriAktif}:`, keahlianAktifAwal);

kategoriAktif = "Back-end";
const keahlianAktifBerikutnya = filterKeahlian(profil.keahlian, kategoriAktif);
console.log(`Keahlian ${kategoriAktif}:`, keahlianAktifBerikutnya);

console.log("Proyek CV:", proyekCV);
console.log("Judul proyek hasil map:", judulProyek);
console.log("Panjang map sama dengan array asal:", judulProyek.length === daftarProyek.length);
console.log("Urutan asli sebelum sort:", urutanProyek);
console.log("Urutan asli tidak berubah setelah sort:", urutanTidakBerubah);

console.table(profil.keahlian);
console.table(daftarProyek);
console.table(proyekTerurut);
