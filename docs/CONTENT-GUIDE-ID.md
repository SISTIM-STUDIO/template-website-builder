# Panduan Konten Website Builder

Panduan ini ditujukan untuk pengguna yang ingin menyiapkan website tanpa perlu mengubah kode desain.

## Alur kerja yang disarankan

1. Duplikasi repository ini ke repository proyek klien atau buat branch proyek baru.
2. Kumpulkan brief klien menggunakan `CLIENT-BRIEF-TEMPLATE-ID.md`.
3. Tentukan satu arah template: company, landing, trekking, store, atau blog.
4. Siapkan nama brand, logo, warna, kontak, foto asli, teks, dan tautan yang sudah disetujui.
5. Ubah data contoh di `src/content/site.ts` dan konten template di `src/content/template-details.ts`.
6. Tinjau halaman di desktop dan ponsel.
7. Jalankan build melalui GitHub Actions dan perbaiki setiap kegagalan.
8. Tinjau Pull Request sebelum perubahan digabungkan ke `main`.
9. Konfigurasikan GitHub Pages jika website akan diterbitkan di sana.

## File yang paling sering diubah

- `src/content/site.ts`: nama website, deskripsi, kontak, navigasi, dan daftar template.
- `src/content/template-details.ts`: judul bagian, deskripsi, dan ajakan bertindak untuk lima template.
- `src/styles/global.css`: warna, font, jarak, dan tampilan responsif.
- `src/layouts/BaseLayout.astro`: struktur umum halaman dan metadata dasar.

## Hal penting sebelum publikasi

- Jangan gunakan teks, nomor telepon, alamat, harga, atau klaim contoh sebagai informasi nyata.
- Pastikan semua foto memiliki izin penggunaan dan teks alternatif yang sesuai.
- Periksa seluruh tautan dan informasi kontak.
- Untuk website trekking, konfirmasikan tingkat kesulitan, durasi, perlengkapan, harga, dan informasi keselamatan kepada operator.
- Untuk toko, sistem keranjang, stok, dan pembayaran online belum disediakan oleh fondasi ini.
- Template blog saat ini adalah halaman awal; CMS dan pengelolaan artikel belum tersedia.
- Jangan menambahkan API key atau kata sandi ke file yang masuk Git.

## Status kemampuan

Fondasi sudah memiliki halaman starter dan build otomatis. Visual editor tanpa kode, CMS, formulir booking yang menyimpan data, payment gateway, sitemap otomatis, serta integrasi analitik masih memerlukan tahap pengembangan tersendiri.
