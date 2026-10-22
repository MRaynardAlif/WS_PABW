export const profil = {
  nama: "Muhamad Raynard Alif",
  peran: "mahasiswa Informatika",
  keahlian: [
    { nama: "HTML", kategori: "Front-end" },
    { nama: "CSS", kategori: "Front-end" },
    { nama: "JavaScript", kategori: "Front-end" },
    { nama: "Node.js", kategori: "Back-end" },
    { nama: "Python", kategori: "Back-end" },
  ],
};

export function buatPerkenalan({ nama, peran }) {
  return `Nama saya ${nama}, ${peran}.`;
}

export function formatKeahlian(daftar) {
  return daftar.map((item) => item.nama).join(" · ");
}

export function saring(daftar, kategori) {
  return daftar.filter(
    (proyek) => kategori === "Semua" || proyek.kategori === kategori
  );
}
