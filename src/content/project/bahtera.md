---
title: Bahtera Adi Jaya Company Website
cover: /bahtera/cover.png
website: https://www.bahteraadijaya.com
featured: true
excerpt: Bahtera adalah spesialis distributor bahan kimia dengan beragam produk yang mencakup berbagai industri, mulai dari perawatan pribadi hingga pertanian.
createdAt: 2024-05-02
---

Bahtera Adi Jaya adalah spesialis distributor bahan kimia dengan berbagai produk yang mendukung berbagai sektor industri, seperti perawatan pribadi, pertanian, dan lainnya.

## The Background

Dalam proyek ini, saya bertanggung jawab untuk mengonversi desain dari Figma menjadi kode menggunakan framework **Astro** serta mengintegrasikannya dengan **Strapi** dan **Ghost CMS**.

## The Stack

- **Astro**: Framework modern untuk membangun situs web statis dengan fokus pada kecepatan dan pengalaman pengguna.
- **TailwindCSS**: Framework CSS utilitas untuk membuat desain yang responsif dan efisien.
- **Strapi**: CMS headless untuk mengelola data secara fleksibel dan efisien.
- **Ghost CMS**: Platform blogging yang cepat dan ramah SEO.
- **Thumbor**: Layanan pengoptimalan gambar untuk meningkatkan performa situs web.
- **Redis**: Basis data caching untuk meningkatkan waktu muat halaman.

## The Goals

1. Membangun situs web yang cepat dan ramah **SEO**.
2. Membuat desain yang responsif untuk berbagai perangkat.
3. Meningkatkan pengalaman pengguna dengan waktu muat halaman yang cepat.
4. Mengintegrasikan CMS untuk kemudahan pengelolaan konten oleh klien.
5. Menyediakan mekanisme caching untuk mengoptimalkan performa.
6. Memastikan kompatibilitas lintas browser, termasuk versi lama.
7. Mempertahankan skor performa yang tinggi pada alat seperti **PageSpeed Insights**.
8. Mengimplementasikan analitik pihak ketiga tanpa mengorbankan performa secara signifikan.
9. Menambahkan dukungan multi-bahasa (Bahasa Indonesia dan Inggris) untuk menjangkau audiens yang lebih luas.
10. Memberikan pengalaman pengguna yang konsisten dan mulus untuk kedua bahasa tersebut.

## The Challenges

### 1. Compatibility

Awalnya, saya menggunakan **native CSS** untuk elemen interaktif seperti dropdown dan modal. Namun, terdapat kendala pada dropdown yang tidak didukung oleh beberapa browser lama. Sebagai solusi, saya memanfaatkan **Alpine.js** untuk mengintegrasikan dropdown dengan **TailwindCSS**.

### 2. Caching

Untuk meningkatkan performa, saya menggunakan **Redis** sebagai mekanisme caching. Redis membantu menyimpan halaman yang sudah di-render, sehingga mengurangi waktu muat bagi pengguna.

### 3. Third-Party Analytics

Setelah website selesai dibuat, saya menguji performa menggunakan **PageSpeed Insights** dan mendapatkan skor 90+ untuk mobile maupun desktop. Namun, performa di perangkat mobile menurun drastis setelah klien menambahkan **third-party analytics**, seperti **Google Tag**, **Meta Pixel**, dan **PostHog**.

Hingga saat ini, belum ada solusi untuk sepenuhnya mengatasi penurunan performa akibat analytics tersebut. Namun, klien memahami situasinya dan memilih untuk mengutamakan data analitik daripada performa optimal di mobile.

### 4. Ghost CMS Multi-Language

Karena **Ghost CMS** tidak mendukung fitur multi-bahasa secara bawaan, saya menggunakan **internal tags** sebagai solusi. Terdapat dua jenis tag:

- Tag bahasa, untuk menandai konten berdasarkan bahasa (contoh: `id` untuk Bahasa Indonesia, `en` untuk Inggris).
- Tag unik, untuk menghubungkan konten yang sama dalam bahasa berbeda.

Dengan pendekatan ini, implementasi multi-bahasa di frontend menggunakan **Astro** menjadi lebih mudah dan terstruktur, memberikan pengalaman pengguna yang mulus dalam kedua bahasa.
