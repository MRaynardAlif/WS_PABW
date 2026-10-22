<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
    <header>
        <div class="header-baris">
            <div>
                <p>Curriculum Vitae</p>
                <h1>{{ props.profil.nama }}</h1>
            </div>

            <nav class="navbar" aria-label="Navigasi utama">
                <ul>
                    <li><a href="#bagian-1">Pendidikan</a></li>
                    <li><a href="#bagian-2">Pengalaman Kerja</a></li>
                    <li><a href="#bagian-3">Sertifikasi</a></li>
                </ul>
            </nav>
        </div>

        <div class="tema-kontrol">
            <input type="checkbox" id="tema" class="pengalih-tema">
            <label for="tema" class="tombol-tema">Tema gelap</label>
        </div>
    </header>
</template>
