import {
  state,
  pilihKategori,
  tandaiFormDicoba,
} from "./state.js";
import {
  enfocarPrimerCampoInvalido,
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

  const muatUlang = document.querySelector("#reintentar-proyek");
  muatUlang.addEventListener("click", mulaiProyek);

  formSertifikasi.addEventListener("submit", (event) => {
    event.preventDefault();
    tandaiFormDicoba();

    if (!periksaForm(true)) {
      enfocarPrimerCampoInvalido();
    }
  });

  formSertifikasi.addEventListener("input", () => {
    if (state.formSudahDicoba) {
      periksaForm(true);
    }
  });
}
