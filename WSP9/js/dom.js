import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar-proyek");
const pesanKosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function renderProyek(daftar) {
  wadah.replaceChildren();
  pesanKosong.hidden = daftar.length > 0;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

renderProyek(daftarProyek);

const barisFilter = document.querySelector("#filter-proyek");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "Semua" || proyek.kategori === kategori
  );

  renderProyek(terpilih);
});
