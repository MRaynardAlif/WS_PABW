<template>

    <section id="bagian-3">
        <h2>Sertifikasi</h2>

        <p>Tambahkan sertifikasi melalui formulir berikut.</p>

        <form id="form-sertifikasi" action="/simpan-sertifikasi" method="post" novalidate>
            <div class="form-kolom">
                <label for="nama-sertifikasi">Nama sertifikasi</label>
                <input type="text" id="nama-sertifikasi" name="nama-sertifikasi" required>
                <span class="pesan-galat">Masukkan nama sertifikasi.</span>
            </div>

            <div class="form-kolom">
                <label for="tanggal-sertifikasi">Tanggal sertifikasi</label>
                <input type="date" id="tanggal-sertifikasi" name="tanggal-sertifikasi" required>
                <span class="pesan-galat">Masukkan tanggal sertifikasi.</span>
            </div>

            <div class="form-kolom">
                <label for="deskripsi-sertifikasi">Deskripsi sertifikasi</label>
                <input type="text" id="deskripsi-sertifikasi" name="deskripsi-sertifikasi" required>
                <span class="pesan-galat">Masukkan deskripsi sertifikasi.</span>
            </div>

            <button type="submit">Simpan sertifikasi</button>
        </form>
    </section>
</template>
