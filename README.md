# PABW — Muhamad Raynard Alif — 20523167
 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 3 — Halaman profil saya
 
Topik halaman saya: CV Saya.
 
- Judul halaman: Curriculum Vitae - Muhamad Raynard Alif
- Deskripsi: Curriculum Vitae Muhamad Raynard Alif, mahasiswa Universitas Islam Indonesia.
- Tautan navigasi: Pendidikan, Pengalaman Kerja, Sertifikasi
- Dua bagian utama: Pendidikan, Pengalaman Kerja
- Kolom tabel: Riwayat pendidikan, Institusi, Mulai, Selesai, Program
- Kolom form: Sertifikasi, Nama sertifikasi, Tanggal sertifikasi, Deskripsi sertifikasi
- Gambar: profil.svg
 
## Catatan penggunaan AI
 
Tulis bagian yang dibantu AI:
1. Merapihkan Indentasi
2. Optimasi Code
3. Praktik Arsitektur Clean Code

## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #215E61 (hijau), dipilih karena menyesuaikan warna gambar
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #215E61 | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 — Layout modern dengan Flexbox dan Grid

### Rencana kerangka halaman

Baris 1: header                         (auto)
Baris 2: isi                            (1fr)
Baris 3: footer                         (auto)

Kolom isi:
┌───────────────┬──────────────────────────┐
│ Profil        │ Pengalaman kerja         │
│ (sidebar)     ├──────────────────────────┤
│               │ Pendidikan               │
└───────────────┴──────────────────────────┘
Sertifikasi berada setelah area grid.
