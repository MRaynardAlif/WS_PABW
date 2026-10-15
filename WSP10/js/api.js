const ALAMAT = 'https://raw.githubusercontent.com/MRaynardAlif/WS_PABW/refs/heads/main/WSP10/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }
    return await respons.json();
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}
