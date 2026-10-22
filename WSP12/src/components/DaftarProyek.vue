<script setup>
import TombolFilter from './TombolFilter.vue'
</script>

<template>

    <section class="utama" aria-labelledby="judul-proyek">
        <h2 id="judul-proyek">Proyek</h2>

        <TombolFilter/>

        <p id="pesan-kosong" hidden>Tidak ada proyek untuk ditampilkan.</p>
        <p id="pesan-muat" hidden>Memuat data...</p>
        <p id="pesan-galat" class="pesan-galat" role="alert" hidden></p>
        <ul id="daftar-proyek" class="galeri" aria-label="Daftar proyek"></ul>
    </section>
</template>
