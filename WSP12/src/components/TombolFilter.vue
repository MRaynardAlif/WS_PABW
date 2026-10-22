<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
    <div id="filter-proyek">
        <button type="button" id="reintentar-proyek" class="filter":class="{ aktif: state.kategoriAktif === 'Semua' }"
         @click="pilihKategori('Semua')">Semua</button>

        <button type="button" class="filter":class="{ aktif: state.kategoriAktif === 'Website' }"
         @click="pilihKategori('Website')">Website</button>

        <button type="button" class="filter":class="{ aktif: state.kategoriAktif === 'Machine-Learning' }"
         @click="pilihKategori('Machine-Learning')">Machine Learning</button>

        <button type="button" class="filter":class="{ aktif: state.kategoriAktif === 'Lainnya' }"
         @click="pilihKategori('Lainnya')">Lainnya</button>

        <button type="button" @click="aturUlang">Reset</button>
    </div>
</template>
