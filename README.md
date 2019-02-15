# Muse Fastify Starter

### Pengenalan

Ini adalah starter template atau source code yang dicipta khas untuk handle backend punya proses. Starter template ini dibina menggunakan :

- Nodejs (version 8+)
- Fastify

### Langkah Mula

```
# clone repository
git clone git@github.com:mansarip/muse-fastify-starter.git my-server

# masuk dalam folder yang baru diclone
cd my-starter

# remove remote git asal
git remote remove origin

# install semua depedencies
yarn install
```

### Development

Untuk mulakan development server, run command ini :

```
$ yarn run dev
```

Secara default, `PORT` yang akan digunakan ialah `3001`. Jadi kita boleh cuba dengan melayari ke [http://localhost:3001](http://localhost:3001).

Jika ingin menghidupkan server dengan `PORT` yang lain, kita boleh letakkan value pada argument PORT sebelum kita run command `yarn run dev`, contohnya :

```
$ PORT=4001 yarn run dev
```

Dengan ini, server development akan dijalankan pada PORT 4001.

### Deployment (Production)

Saya cadangkan untuk guna `pm2` sebagai process manager untuk deployment pada production. `pm2` akan membenarkan server kita (nodejs app) berjalan secara background.

Jadi, untuk gunakan `pm2`, kita perlu install ia secara global :

```
npm install -g pm2
```

atau kalau guna Yarn :

```
yarn global add pm2
```

Kemudian baru kita boleh run start file :

```
# file process.json ada dalam repo ini sebagai contoh
pm2 start process.json
```

Untuk memastikan ia berjalan, kita boleh cuba dengan melayari [http://localhost:6001](http://localhost:6001).

Sila rujuk bahagian di bawah berkenaan `PORT`.

#### Environment

Jika kita lihat dalam file `process.json`, kita dapati ada satu key namanya `env`. Dalam ruang tersebut, kita boleh define apa sahaja key dan value untuk environment yang akan digunakan semasa production.

Contoh :

```
"env": {
  "NODE_ENV": "production",
  "PORT": 6001
}
```

Key `NODE_ENV` adalah sangat penting untuk disetkan valuenya kepada `production` supaya server kita berjalan dengan behaviour yang sepatutnya.
