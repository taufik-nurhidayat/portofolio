---
title: Novelindo Web App
cover: /novelindo/cover.png
website: https://novelindo.vercel.app/
featured: true
excerpt: Novelindo adalah aplikasi web yang menyediakan konten berupa novel ringan dan anime, serta informasi terkait tulisan.
createdAt: 2023-01-01
---

**Novelindo** adalah aplikasi web yang menyediakan konten berupa novel ringan, anime, serta informasi terkait tulisan.

## Teknologi yang Digunakan

- **Next.js**: Digunakan sebagai framework React untuk frontend karena fitur lengkapnya dan performa render yang cepat.
- **TailwindCSS**: Mempermudah pengaturan tata letak dan gaya dengan gaya yang dapat digunakan kembali, mempercepat proses pengembangan.
- **Contentlayer**: Mengelola konten dengan markdown untuk mengurangi biaya server, meskipun membutuhkan sedikit penyesuaian awal.

## Fitur-Fitur

### 1. **Halaman Utama**

Menampilkan daftar novel dan anime unggulan.

### 2. **Navigasi dan Header**

- **Navigasi**: Memudahkan akses ke halaman seperti Home, Novel, Anime, Blog, dan Bookmark.
- **Header**: Menampilkan logo dan bilah pencarian.

### 3. **Halaman Novel dan Anime**

- **Index**: Menampilkan semua daftar novel atau anime.
- **Info**: Memuat informasi seperti sinopsis, genre, daftar chapter (novel), dan daftar episode atau season (anime).
- **Baca Chapter & Tonton Anime**:
  - **Novel**: Pagination untuk chapter berikutnya/sebelumnya dan tombol kembali ke atas.
  - **Anime**: Video yang dapat ditonton dengan daftar episode yang di-highlight untuk episode aktif.

### 4. **Halaman Blog**

- **Index Blog**: Menampilkan semua artikel yang telah dipublikasikan.
- **Baca Artikel**: Menampilkan konten artikel secara lengkap.

### 5. **Halaman Bookmark**

Menampilkan konten yang disimpan oleh pengguna, termasuk novel, anime, dan artikel.

### 6. **Komentar**

Fitur komentar menggunakan Disqus tersedia untuk novel, anime, dan blog, kecuali pada halaman chapter novel.

### 7. **Halaman Error**

Memberikan informasi error dengan tombol untuk kembali ke halaman utama jika halaman tidak ditemukan.
