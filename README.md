# Deskripsi

Deploy on [![Netlify Status](https://api.netlify.com/api/v1/badges/b9dd3203-ddfa-41bd-b11a-b8d07678842b/deploy-status)](https://app.netlify.com/sites/infallible-ritchie-269156/deploys)

Web Restaurant ini merupakan project submission dicoding untuk penyelesaian kelas Front End Developer Expert.


#### Kriteria Submission 
Berikut beberapa kriteria submission yang harus diselesaikan agar project ini dapat diterima reviewer :

> Catatan : <br> Kriteria yang sudah tercapai akan ditandai dengan ✔️

1. Integration Test
   - Menerapkan integration test untuk fungsi menyukai dan batal menyukai restaurant ✔️
  
2. End to End Test
   - Menerapkan End to End test dengan skenario
     + Menyukai salah satu restaurant ✔️
     + Batal menyukai restaurant tersebut ✔️
     + Mengirim komentar review ✔️

3. Image Optimization
   - Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus dibawah 200kb ✔️
   - Menerapkan teknik image responsive pada gambar hero. Gambar pada layar seluler dan desktop harus berbeda ✔️
   - Menerapkan teknik lazy loading pada gambar daftar restaurant yang ditampilkan. ✔️

4. Bundle Optimization
   - Memasang bundle analyzer pada project submission ✔️
   - Gunakan teknik splitting code untuk memisahkan vendor code dari code asli yang dibuat sendiri. ✔️
  
5. Pertahankan syarat yang ada pada submission sebelumnya. ✔️
6. (Tambahan) Terapkan saran reviewer yang pada submission sebelumnya.
   - 📄 app.js (Line 26) : Tambahkan kondisi apabila routes tidak terdaftar atau tidak ada. Jika kondisi tersebut terjadi lebih baik arahkan pengunjung kembali ke halaman utama atau halaman khusus seperti 404. ✔️
   - 📄 config.js (Line 7) : Jika sudah memasukai fase production sebaiknya nama cache tidak dinamis, lebih baik gunakan nama tertentu yang sesuai dengan tema / judul aplikasi. ✔️
   - 📄 index.html (Line 28) : Tambahkan atribut `aria-label` pada button navigation menu agar screen reader dapat mengetahui secara jelas komponen UI yang ditampilkan. ✔️
   - 📄 style.css : Lebih code css dipisahkan berdasarkan fungsi agar code bisa lebih mudah dimengerti. ✔️
   - 📄 template-creator.js (Line 40) : Tambahkan attribut `aria-label` pada setiap elemen `button` agar komponen UI dapat dikenali screen reader. ✔️
