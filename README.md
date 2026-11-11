# Portfolio Template 2

Template portofolio satu halaman (HTML, CSS, JS murni). Tanpa framework dan tanpa backend.

## Struktur
```
index.html          konten + CSP
styles/             style.css, responsive.css
scripts/main.js     menu mobile, tahun footer
images/profile.jpg  foto profil (placeholder)
images/projects/    gambar project (placeholder)
resume.pdf          placeholder, ganti dengan CV kamu
```

## Yang perlu kamu isi (di salinan lokal, bukan di repo template publik)
- Semua teks placeholder di `index.html` (`Your Name`, `[University Name]`, `you@example.com`, dst).
- Link sosial media (`https://example.com/your-...`) di footer.
- `images/profile.jpg`, `images/projects/*.jpg`, `resume.pdf`.

## Form kontak
Form memakai [Formspree](https://formspree.io). Ganti `YOUR_FORM_ID` di `index.html` dengan ID form milikmu.
ID form itu publik, jadi di dashboard Formspree aktifkan **domain whitelist** dan **reCAPTCHA/spam protection** agar form tidak dispam atau dipakai orang lain. Form sudah punya honeypot (`_gotcha`).

## Hapus metadata foto sebelum push
```bash
exiftool -all= -overwrite_original images/*.jpg images/projects/*.jpg
```

## Jalankan lokal
```bash
python3 -m http.server 8000
```

## Catatan keamanan
- Tidak ada API key, token, `fetch`, atau `eval`.
- CSP di `index.html` membatasi script dan gambar ke origin sendiri, dan form hanya boleh dikirim ke formspree.io.
- Pihak ketiga hanya Google Fonts dan Formspree.
