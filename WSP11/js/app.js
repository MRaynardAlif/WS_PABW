
import { ambilProyek } from "./api.js";
import {
  aturMemuat,
  render,
  sembunyikanGalat,
  tampilkanGalat,
} from "./dom.js";

const filterProyek = document.querySelector("#filter-proyek");
let semuaProyek = [];

async function muatProyek() {
  aturMemuat(true);
  sembunyikanGalat();

  try {
    semuaProyek = await ambilProyek();
    render(semuaProyek);
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
  } finally {
    aturMemuat(false);
  }
}

filterProyek.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-kategori]");
  if (!tombol || semuaProyek.length === 0) return;

  const kategori = tombol.dataset.kategori;
  const hasil = semuaProyek.filter(
    (proyek) => kategori === "Semua" || proyek.kategori === kategori
  );

  sembunyikanGalat();
  render(hasil);
});

muatProyek();

const muatUlang = document.querySelector("#reintentar-proyek");
muatUlang.addEventListener("click", muatProyek);
