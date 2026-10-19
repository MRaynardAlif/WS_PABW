import { saring } from "./data.js";
import { render } from "./dom.js";

export const state = {
  daftarProyek: [],
  kategoriAktif: "Semua",
  formSudahDicoba: false,
};

export function tandaiFormDicoba() {
  state.formSudahDicoba = true;
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(saring(state.daftarProyek, state.kategoriAktif));
}

export function pilihKategori(kategori) {
  if (state.daftarProyek.length === 0) return;

  state.kategoriAktif = kategori;
  render(saring(state.daftarProyek, state.kategoriAktif));
}
