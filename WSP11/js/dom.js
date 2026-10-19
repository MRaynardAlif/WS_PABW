
const wadah = document.querySelector("#daftar-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat = document.querySelector("#pesan-muat");
const pesanGalat = document.querySelector("#pesan-galat");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

export function render(daftar) {
  wadah.textContent = "";
  pesanKosong.hidden = daftar.length !== 0;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
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

export function enfocarPrimerCampoInvalido() {
  kolomForm
    .find(({ input }) => !input.validity.valid || !input.value.trim())
    ?.input.focus();
}
