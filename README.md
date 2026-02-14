<p align="center">
  <img src="https://img.shields.io/badge/Eirkized-Finance-7C3AED?style=for-the-badge&logo=cashapp&logoColor=white" alt="Eirkized Finance" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

# 💰 Eirkized Finance

**Aplikasi pencatat keuangan pribadi** dengan tampilan dashboard profesional bertema gelap. Mendukung dua bahasa (Indonesia & English) dengan mata uang Rupiah (Rp).

> _Lacak keuanganmu dengan mudah — by Eirkized_

### 🌐 [Live Demo → eirkizedfinancetracker.vercel.app](https://eirkizedfinancetracker.vercel.app/)

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 📊 **Dashboard Interaktif** | Ringkasan pemasukan, pengeluaran, dan saldo secara real-time |
| ➕ **Tambah Transaksi** | Catat pemasukan dan pengeluaran dengan kategori, tanggal, dan catatan |
| 📜 **Riwayat Transaksi** | Lihat semua transaksi dengan filter berdasarkan tanggal, kategori, dan tipe |
| 🏷️ **Kategori Kustom** | Buat dan kelola kategori sendiri dengan ikon dan warna |
| 📈 **Grafik & Diagram** | Visualisasi data keuangan dalam bentuk pie chart dan bar chart |
| 🌐 **Bilingual (ID/EN)** | Ganti bahasa antara Indonesia dan English kapan saja |
| 🎨 **3 Tema Gelap** | Dark Purple, Ocean Blue, dan Rose Dark |
| 📷 **Upload Foto Profil** | Personalisasi akun dengan foto profil |
| 💾 **Data Lokal** | Semua data tersimpan di browser (localStorage) — tanpa server |

---

## 🖥️ Preview

### Tampilan Dashboard
Tampilan utama menampilkan 3 kartu ringkasan (pemasukan, pengeluaran, saldo), quick access buttons, tabel transaksi terbaru, dan grafik ringkasan.

### Tema yang Tersedia
- 🌙 **Dark Purple** — Tema default dengan aksen ungu
- 💙 **Ocean Blue** — Aksen biru laut
- 🌺 **Rose Dark** — Aksen pink/rose

---

## 🚀 Cara Menjalankan

### Prasyarat
- Browser modern (Chrome, Firefox, Edge, Safari)
- [Node.js](https://nodejs.org/) (opsional, untuk local server)

### Opsi 1: Buka Langsung
Cukup buka file `index.html` di browser kamu — **tidak perlu instalasi apapun!**

### Opsi 2: Dengan Local Server
```bash
# Clone repository
git clone https://github.com/painfulbykisses/Finance-Tracker.git

# Masuk ke folder project
cd Finance-Tracker

# Jalankan server lokal
npx -y serve . -l 3000
```

Lalu buka **http://localhost:3000** di browser.

---

## 📖 Cara Penggunaan

### 1. Registrasi & Login
- Buka aplikasi dan klik **"Daftar di sini!"** untuk buat akun baru
- Masukkan username (min 3 karakter), email, dan password (min 4 karakter)
- Login dengan akun yang sudah dibuat

### 2. Tambah Transaksi
- Klik **"Tambah Transaksi"** di sidebar atau quick access button
- Pilih tipe (Pemasukan/Pengeluaran), tanggal, kategori, jumlah, dan catatan
- Klik tombol submit

### 3. Lihat Riwayat
- Klik **"Riwayat"** untuk melihat semua transaksi
- Gunakan filter untuk mempersempit hasil berdasarkan tanggal, kategori, atau tipe

### 4. Kelola Kategori
- Klik **"Kategori"** untuk menambah, mengedit, atau menghapus kategori kustom
- Pilih ikon dan warna untuk setiap kategori

### 5. Upload Foto Profil
- Klik ikon avatar (👤) di sidebar atas
- Pilih gambar dari perangkat kamu (maks 500KB)

### 6. Ganti Bahasa & Tema
- Klik **"🌐 English"** di sidebar untuk beralih bahasa
- Klik **"🎨 Tema"** untuk memilih tema yang kamu suka

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| **HTML5** | Struktur halaman |
| **CSS3** | Styling & tema gelap (vanilla CSS, no framework) |
| **JavaScript** | Logika aplikasi (vanilla JS, no framework) |
| **Chart.js** | Visualisasi grafik (CDN) |
| **Google Fonts** | Font Inter & Press Start 2P |
| **localStorage** | Penyimpanan data lokal di browser |

---

## 📁 Struktur Project

```
Finance-Tracker/
├── index.html     # Halaman utama & struktur UI
├── style.css      # Semua styling & tema
├── app.js         # Logika aplikasi & i18n
├── .gitignore     # File yang diabaikan git
└── README.md      # Dokumentasi ini
```

---

## ⚠️ Catatan Penting

- **Data disimpan di localStorage** — data tidak sinkron antar perangkat dan bisa hilang jika cache browser dihapus
- **Tidak memerlukan backend** — aplikasi ini sepenuhnya berjalan di sisi client
- **Foto profil** dibatasi maksimal 500KB karena keterbatasan localStorage

---

## 📄 Lisensi

Project ini dibuat oleh **Eirkized** untuk keperluan personal dan edukasi.

---

<p align="center">
  <sub>Made with 💜 by <strong>Eirkized</strong></sub>
</p>
