# Node.js MVC REST API (Express + SQL Server)

Proyek ini adalah implementasi sederhana REST API dengan struktur ala **MVC** menggunakan **Node.js, Express, dan SQL Server**.  
Sudah dilengkapi dengan **security middleware** (Helmet, CORS, Rate Limit), **validasi input**, serta **authentication JWT** untuk mengamankan API saat diakses dari aplikasi frontend (contoh: Flutter mobile app).

---

## 🚀 Fitur
- Struktur MVC sederhana (`Controllers`, `Models`, `Routes`, `Config`)
- CRUD Produk
- Authentication (Register + Login) menggunakan **bcryptjs** + **JWT**
- Security Middleware:
  - [Helmet](https://www.npmjs.com/package/helmet) → proteksi header HTTP
  - [CORS](https://www.npmjs.com/package/cors) → kontrol akses frontend
  - [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) → batasi request per IP
  - [express-validator](https://express-validator.github.io/docs/) → validasi input
- Terhubung dengan **SQL Server** via [mssql](https://www.npmjs.com/package/mssql)

---

## 📂 Struktur Folder
``` bash
src/
├── Config/
│ └── db.js # konfigurasi koneksi database
├── Controllers/
│ └── C.product.js # controller produk
├── Models/
│ └── M.product.js # model produk
├── Routes/
│ ├── R.product.js # route produk
│ └── R.auth.js # route auth (login/register)
├── Auth/
│ ├── A.auth.js # controller auth
│ └── middleware.js # middleware JWT
└── app.js # main entry point
```


---

## ⚙️ Instalasi & Setup

### 1. Clone repository
```bash
git clone https://github.com/Fattan-malva/Simple-API.git
cd Simple-API
```
### 2. Install dependencies
```bash
npm install
```
### 3. Setup environment

Buat file .env di root project:

```bash
cp .env.example .env
```

### 4. Jalankan server
```bash
npm run dev   # nodemon (auto reload)
npm start     # node (production)
```
