# Docker Node.js Demo

Demonstrasi perbedaan versi Node.js dengan Docker. Aplikasi ini menggunakan `node:sqlite` yang membutuhkan **Node.js ≥ 22.5**, sehingga sebaiknya dijalankan lewat Docker — versi Node yang terinstall di laptop tidak penting karena container memakai Node dari image (`node:22.22.0-alpine`).

## Cara menjalankan

Pastikan Docker sudah terinstall, lalu:

```bash
docker compose up --build
```

Atau tanpa docker-compose:

```bash
docker build -t docker-node-demo .
docker run --rm docker-node-demo
```

Output akan menampilkan `Node.js version: v22.22.0` apa pun versi Node di host.

> ⚠️ Jangan jalankan `npm start` langsung di host yang Node-nya di bawah 22.5 — `node:sqlite` tidak tersedia di sana.
