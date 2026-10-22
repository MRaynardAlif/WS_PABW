<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil } from './data.js'
</script>

<template>
    <div class="page">
        <KepalaProfil :profil="profil" />

        <main>
            <div class="isi">
                <aside class="papan sisi" aria-label="Profil">
                    <figure>
                        <img src="/profil.svg"
                        alt="Ilustrasi Profil CV"
                        width="640"
                        height="640"
                        loading="lazy">
                        <figcaption>Profil Muhamad Raynard Alif</figcaption>
                    </figure>
                </aside>

                <section class="utama" id="bagian-2">
                    <h2>Pengalaman Kerja</h2>

                    <div class="galeri" aria-label="Riwayat pekerjaan">
                        <article class="kartu">
                            <div class="kartu__isi">
                                <h3 class="kartu__judul">Cetroo Coffee Cibinong</h3>
                                <p>Full-time Barista</p>
                            </div>

                            <div class="kartu__kaki">
                                <span>2021 - 2022</span>
                                <span>Pengalaman kerja</span>
                            </div>
                        </article>

                        <article class="kartu">
                            <div class="kartu__isi">
                                <h3 class="kartu__judul">PT Arsen Kesuma Indonesia</h3>
                                <p>Junior Programmer</p>
                            </div>

                            <div class="kartu__kaki">
                                <span>2023 - 2024</span>
                                <span>Pengalaman kerja</span>
                            </div>
                        </article>

                    </div>
                </section>

                <section class="sorotan bawah" id="bagian-1">
                    <h2>Pendidikan</h2>

                    <div class="galeri" aria-label="Riwayat pendidikan">
                        <article class="kartu">
                            <div class="kartu__isi">
                                <h3 class="kartu__judul">Universitas Islam Indonesia</h3>
                                <p>Informatika</p>
                            </div>

                            <div class="kartu__kaki">
                                <span>2020 - Sekarang</span>
                                <span>Pendidikan</span>
                            </div>
                        </article>

                        <article class="kartu">
                            <div class="kartu__isi">
                                <h3 class="kartu__judul">Sekolah Menengah Atas</h3>
                                <p>Pendidikan menengah</p>
                            </div>

                            <div class="kartu__kaki">
                                <span>2017 - 2020</span>
                                <span>Pendidikan</span>
                            </div>
                        </article>

                        <article class="kartu">
                            <div class="kartu__isi">
                                <h3 class="kartu__judul">Sekolah Menengah Pertama</h3>
                                <p>Pendidikan dasar lanjutan</p>
                            </div>

                            <div class="kartu__kaki">
                                <span>2014 - 2017</span>
                                <span>Pendidikan</span>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            <DaftarProyek />
            <FormKontak />

        </main>

        <footer>
            <p>Muhamad Raynard Alif · 20523167 · Kelas D · 2026</p>
        </footer>
    </div>
</template>
