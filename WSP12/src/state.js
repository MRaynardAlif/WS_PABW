import { reactive } from 'vue';

const KUNCI = 'pabw-p11';
const VERSI = 2;

export const state = reactive({
  daftarProyek: [],
  kategoriAktif: 'Semua',
  favorit: [],
  formSudahDicoba: false,
  memuat: true,
  galat: '',
})

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));

    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi || isi.versi !== VERSI) return;
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "Semua";
  state.favorit = [];
}

export function tandaiFormDicoba() {
  state.formSudahDicoba = true;
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}

export function pilihKategori(kategori) {
  if (state.daftarProyek.length === 0) return;
  state.kategoriAktif = kategori;
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
}
