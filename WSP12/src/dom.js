import { saring } from "./data.js";

const wadah = document.querySelector("#daftar-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#pesan-muat");
const pesanGalat = document.querySelector("#pesan-galat");

function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const tombolFavorit = document.createElement("button");
  tombolFavorit.type = "button";
  tombolFavorit.className = "favorit";
  tombolFavorit.dataset.id = proyek.id;
  tombolFavorit.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  tombolFavorit.setAttribute(
    "aria-label",
    `Favorit: ${proyek.judul}`
  );

  isi.append(judul);
  kaki.append(tombolFavorit);
  li.append(isi, kaki);

  return li;
}

export function render(state) {
  wadah.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  document.querySelectorAll("#filter-proyek [data-kategori]").forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori === state.kategoriAktif
    );
  });

  if (tampil.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  tampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek, state.favorit));
  });
}

export function aturMemuat(sedangMemuat) {
  pesanMuat.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  pesanGalat.textContent = pesan;
  pesanGalat.hidden = false;
  pesanGalat.classList.add("is-visible");
}

export function sembunyikanGalat() {
  pesanGalat.hidden = true;
  pesanGalat.classList.remove("is-visible");
}

export const formSertifikasi = document.querySelector("#form-sertifikasi");
const tombolKirim = formSertifikasi.querySelector('button[type="submit"]');

const kolomForm = Array.from(
  formSertifikasi.querySelectorAll(".form-kolom")
).map((kolom) => ({
  input: kolom.querySelector("input"),
  pesan: kolom.querySelector(".pesan-galat"),
}));

export function periksaForm(menunjukkanGalat) {
  const hasil = kolomForm.map(({ input, pesan }) => {
    const sah = input.value.trim() !== "" && input.validity.valid;

    if (menunjukkanGalat) {
      input.setAttribute("aria-invalid", String(!sah));
    }

    pesan.classList.toggle("is-visible", menunjukkanGalat && !sah);
    return sah;
  });

  const todosSah = hasil.every(Boolean);
  tombolKirim.disabled = menunjukkanGalat && !todosSah;
  return todosSah;
}

export function cekKolomInvalid() {
  kolomForm
    .find(({ input }) => !input.validity.valid || !input.value.trim())
    ?.input.focus();
}
