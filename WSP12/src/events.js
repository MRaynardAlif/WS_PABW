import {
  state,
  pilihKategori,
  tandaiFormDicoba,
  tambahFavorit,
  aturUlang,
} from "./state.js";
import {
  cekKolomInvalid,
  formSertifikasi,
  periksaForm,
  sembunyikanGalat,
} from "./dom.js";

export function pasangPendengar({ mulaiProyek }) {
  const filterProyek = document.querySelector("#filter-proyek");

  filterProyek.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (!tombol || state.daftarProyek.length === 0) return;

    sembunyikanGalat();
    pilihKategori(tombol.dataset.kategori);
  });

  const tombolAturUlang = document.querySelector("#atur-ulang");
  tombolAturUlang.addEventListener("click", aturUlang);

  const muatUlang = document.querySelector("#reintentar-proyek");
  muatUlang.addEventListener("click", mulaiProyek);

  formSertifikasi.addEventListener("submit", (event) => {
    event.preventDefault();
    tandaiFormDicoba();

    if (!periksaForm(true)) {
      cekKolomInvalid();
    }
  });

  formSertifikasi.addEventListener("input", () => {
    if (state.formSudahDicoba) {
      periksaForm(true);
    }
  });

  const daftar = document.querySelector("#daftar-proyek");
  daftar.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;

    tambahFavorit(Number(tombol.dataset.id));
  });
}
