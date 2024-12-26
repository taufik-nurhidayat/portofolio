---
title: RetroSuite Project Management
cover: /retrosuite/cover.png
website: https://retrosuite.co
featured: true
excerpt: RetroSuite adalah aplikasi project management berbasis thread yang dirancang untuk menjaga konteks dalam setiap aktivitas tim.
createdAt: 2023-08-08
---

Ketika sebuah tim mengerjakan proyek, kehilangan konteks dari tugas yang telah maupun akan dilakukan sering kali menjadi masalah. RetroSuite hadir sebagai solusi berupa aplikasi project management berbasis thread yang dirancang agar setiap anggota tim tetap dapat menjaga konteks dan fokus.

## Latar Belakang

Dalam dunia kerja yang dinamis, pengelolaan proyek sering kali melibatkan banyak diskusi, pembagian tugas, dan pembaruan status. Jika tidak terstruktur dengan baik, hal ini dapat menyebabkan kebingungan, miskomunikasi, dan hilangnya konteks. RetroSuite dikembangkan untuk menjawab kebutuhan tersebut dengan pendekatan berbasis thread yang memudahkan kolaborasi dan menjaga jejak komunikasi.

---

## Teknologi yang Digunakan

### Actix + Tera

Kami memilih Actix sebagai web framework karena kecepatannya dan kemudahan penggunaannya dalam pengembangan aplikasi berbasis Rust. Tera, sebagai templating engine dengan sintaks serupa Jinja/Django, mempermudah pengembang dalam memahami dan bekerja dengan kode.

### PostgreSQL + Diesel ORM

PostgreSQL, sebagai database yang stabil dan kaya fitur, memungkinkan kami memanfaatkan fitur-fitur canggih seperti referensial composite, array, range, dan partial index. Diesel ORM dipilih untuk mempermudah integrasi dengan Rust.

### Websocket + RethinkDB

Untuk fitur chat, kami menggunakan websocket agar komunikasi berjalan secara real-time. RethinkDB digunakan untuk menyimpan dan memproses data chat secara efisien.

### S3 Object Storage

Untuk menyimpan file seperti dokumen dan gambar, kami memilih layanan S3 karena skalabilitas dan efisiensinya. Dengan S3, file dapat diakses dan disimpan dengan aman serta mendukung kebutuhan aplikasi berbasis cloud.

### Vault

Data penting seperti password dan token memerlukan perlindungan ekstra. Vault dipilih karena keandalannya dalam menjaga kerahasiaan data sensitif.

### MeiliSearch

MeiliSearch dipilih untuk fitur pencarian karena kemudahan penggunaan dan performanya yang lebih ringan dibandingkan Elasticsearch. Meskipun sederhana, MeiliSearch memenuhi kebutuhan pencarian di aplikasi kami dengan hasil yang cepat dan relevan.

### HTMX + Alpine.js

HTMX digunakan hampir di seluruh halaman aplikasi untuk memberikan pengalaman yang menyerupai Single Page Application (SPA) tanpa memerlukan pengkodean frontend yang rumit. Untuk interaksi tambahan di halaman tertentu, kami mengintegrasikan Alpine.js.

### TipTap

TipTap dipilih sebagai rich text editor karena fleksibilitasnya dan kustomisasi yang luas melalui plugin. Editor ini mendukung pembuatan konten kaya untuk thread maupun chat.

---

## Fitur-Fitur

### 1. Create or Join Company

Pengguna dapat mendaftarkan diri dan membuat perusahaan (company) untuk memulai proyek. Alternatifnya, pengguna juga dapat bergabung dengan perusahaan yang sudah ada melalui undangan dari pemilik perusahaan menggunakan email terdaftar.

### 2. Manage Project

Fitur ini memungkinkan pengguna untuk:

- Membuat proyek baru
- Menambahkan anggota tim
- Mengatur jadwal
- Menentukan prioritas
- Mengelola status dan target proyek

### 3. Task Per Project

Setiap proyek memiliki pembagian tugas yang terorganisir, sehingga anggota tim dapat mengetahui tugas masing-masing dan progresnya secara real-time.

### 4. Schedule

Pengguna dapat membuat jadwal untuk mengatur deadline proyek dan tugas-tugas yang perlu diselesaikan, memastikan tim tetap berjalan sesuai rencana.

### 5. Thread

Komunikasi proyek dilakukan melalui thread sehingga setiap diskusi tetap terorganisir dan mudah diikuti oleh anggota tim.

### 6. Company Chat and Task Discussion

Fitur ini memungkinkan tim untuk berkomunikasi melalui chat internal, baik untuk diskusi umum perusahaan maupun pembahasan tugas tertentu.

### 7. Notification

Notifikasi real-time membantu pengguna tetap mendapatkan pembaruan terbaru terkait proyek, tugas, dan diskusi yang relevan.
