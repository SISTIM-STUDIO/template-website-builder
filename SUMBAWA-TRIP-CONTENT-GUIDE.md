# SUMBAWA TRIP — Panduan Mengisi Paket Wisata

## File data paket
Semua paket wisata dibaca dari `src/content/sumbawa-trip-packages.json`. Untuk menambah paket, duplikasi satu objek paket yang sudah ada di dalam array, lalu ganti isinya. JSON tidak mendukung komentar.

## Contoh paket baru
```json
{
  "id": "kenawa-island",
  "category": "Island Escape",
  "duration": "2D1N",
  "title": "Kenawa Island Escape",
  "short": "Deskripsi singkat paket untuk kartu di homepage.",
  "route": "Poto Tano · Pulau Kenawa",
  "image": "/images/sumbawa-trip/kenawa.jpg",
  "imageAlt": "Pemandangan Pulau Kenawa di Sumbawa Barat",
  "status": "Perlu konfirmasi",
  "highlights": ["Pulau Kenawa", "Sunset", "Snorkeling"],
  "itinerary": [{ "day": "Hari 1", "title": "Poto Tano & Kenawa", "text": "Tulis kegiatan hari pertama." }],
  "includes": ["Tulis layanan yang termasuk"],
  "excludes": ["Tulis layanan yang tidak termasuk"],
  "note": "Catatan operasional yang penting.",
  "price": "Minta penawaran"
}
```

## Arti kolom
- `id`: wajib unik, huruf kecil dan tanda hubung; dipakai sebagai tautan detail.
- `category`, `duration`, `title`, `short`, `route`: kategori, durasi, judul, deskripsi, dan rute.
- `image`: alamat gambar; gunakan path lokal seperti `/images/sumbawa-trip/kenawa.jpg` setelah foto diunggah ke folder publik tersebut.
- `imageAlt`: deskripsi foto untuk aksesibilitas dan SEO.
- `status`, `note`: status verifikasi dan catatan yang tampil pada halaman detail. Jangan masukkan catatan rahasia internal.
- `highlights`, `itinerary`, `includes`, `excludes`: sorotan, itinerary harian, layanan termasuk, dan layanan tidak termasuk.
- `price`: harga yang sudah diverifikasi atau `Minta penawaran`. Jangan mempublikasikan harga lama yang belum diverifikasi.

## Sebelum paket dipublikasikan
1. Verifikasi harga, durasi, rute, jadwal, fasilitas, izin, dan ketersediaan.
2. Gunakan foto asli yang dimiliki atau diizinkan untuk dipakai SUMBAWA TRIP.
3. Pastikan setiap `id` unik.
4. Uji kartu, halaman detail, dan tombol WhatsApp setelah deploy.
5. Permintaan dari WhatsApp belum booking terkonfirmasi sampai admin mengonfirmasi.

Nomor WhatsApp operator disetel di `src/content/sumbawa-trip.ts`, properti `whatsapp`, dengan format angka internasional tanpa tanda plus atau spasi.
