<script setup>
import { computed } from 'vue'
import { saring } from '../data.js'
import { state, tambahFavorit } from '../state.js'
import TombolFilter from './TombolFilter.vue'

const tampil = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif)
)
</script>

<template>
  <section class="utama" aria-labelledby="judul-proyek">
    <h2 id="judul-proyek">Proyek</h2>
    <TombolFilter />

    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat" class="pesan-galat" role="alert">
      {{ state.galat }}
    </p>
    <p v-else-if="tampil.length === 0">Tidak ada proyek untuk ditampilkan.</p>

    <ul v-else id="daftar-proyek" class="galeri" aria-label="Daftar proyek">
      <li v-for="proyek in tampil" :key="proyek.id" class="kartu">
        <div class="kartu__isi">
          <h3 class="kartu__judul">{{ proyek.judul }}</h3>
          <p>{{ proyek.kategori }}</p>
        </div>
        <div class="kartu__kaki">
          <button
            type="button"
            class="favorit"
            :aria-label="`Favorit: ${proyek.judul}`"
            @click="tambahFavorit(proyek.id)"
          >
            {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>
