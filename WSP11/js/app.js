import { ambilProyek } from "./api.js";
import { pasangPendengar } from "./events.js";
import { isiProyek } from "./state.js";
import {
  aturMemuat,
  sembunyikanGalat,
  tampilkanGalat,
} from "./dom.js";

async function mulaiProyek() {
  aturMemuat(true);
  sembunyikanGalat();

  try {
    const daftar = await ambilProyek();
    isiProyek(daftar);
  } catch {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
  } finally {
    aturMemuat(false);
  }
}

pasangPendengar({ mulaiProyek });
mulaiProyek();
