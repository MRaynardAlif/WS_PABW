import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar-proyek");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function renderProyek(daftar) {
  wadah.replaceChildren();
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

renderProyek(daftarProyek);
