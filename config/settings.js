/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "0910";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "WilQiesyy";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Hingga Tua Bersama",             // ← GANTI JUDUL LAGU
    artist: "Rizky Febian",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/images/ai.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "wildan bersama teman duduknya." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "forever my favorite" },
  { file: "img3.jpeg", caption: "my favorite person" },
  { file: "img4.jpeg", caption: "wildan di bungkam GOLEM!!." },
  { file: "img5.jpeg", caption: "pertamakali ngikut trend ml." },
  { file: "img6.jpeg", caption: "bucin di lobby epep kala itu" },
  // { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  // { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Setiap cerita memiliki awal yang sederhana, dan kisah kalian pun dimulai dari hal-hal kecil yang mungkin dulu terasa biasa. Sebuah nama yang terdengar, sebuah tatapan singkat, lalu sebuah pesan yang mengubah segalanya.",
"Perjalanan ini tentu tidak selalu mudah. Ada keraguan, jarak, dan berbagai tantangan yang datang seiring waktu. Namun, selama kalian tetap saling percaya, saling menghargai, dan saling mendukung, setiap rintangan akan menjadi bagian dari proses untuk tumbuh bersama.",
"Semoga apa pun yang akan datang di masa depan, kalian tetap mengingat bagaimana semuanya dimulai. Jangan pernah lelah untuk berkomunikasi, saling memahami, dan menjadi tempat pulang satu sama lain.",
"Terima kasih telah menciptakan kenangan yang begitu berharga. Semoga kisah ini tidak hanya menjadi cerita tentang masa lalu, tetapi juga menjadi awal dari banyak cerita indah yang masih menunggu untuk ditulis."

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Permulaan",
    text:  "Kisah Bilqis dan Wildan bermula saat mereka duduk di bangku kelas 8 SMP dan berada di kelas yang sama. Perkenalan mereka terbilang cukup unik. Bilqis mengenal nama Wildan dari cerita teman-temannya, sementara Wildan mengetahui sosok Bilqis melalui daftar absen kelas. Meski belum banyak berinteraksi, dari perkenalan sederhana itulah benih-benih ketertarikan mulai tumbuh secara perlahan.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "Titik Awal",
    text:  "Saat memasuki kelas 9, mereka tidak lagi berada di kelas yang sama. Kesempatan untuk bertemu menjadi semakin jarang, dan interaksi mereka hanya sebatas tatapan singkat ketika berpapasan di sekolah. Hingga akhirnya, Bilqis memberanikan diri mengesampingkan rasa gengsi dan mengirim pesan lebih dulu melalui WhatsApp, meskipun ia tahu Wildan dikenal sebagai sosok yang dingin dan cenderung menjaga jarak dengan perempuan.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Proses",
    text:  "Tak disangka, Wildan membalas pesan itu dengan hangat dan perlahan mulai membuka diri. Percakapan mereka mengalir begitu saja, dari obrolan sederhana hingga bermain game bersama. Hari-hari mereka dipenuhi cerita, tawa, dan kebersamaan, mulai dari pagi hingga malam. Seiring berjalannya waktu, hubungan mereka pun semakin dekat dan saling mengenal satu sama lain.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "Langkah Berikutnya",
    text:  "Di balik kebahagiaan itu, Wildan sempat dihantui trauma dari masa lalu yang membuatnya ragu untuk kembali membuka hati. Namun, ia memilih untuk memaafkan, melepaskan keraguan tersebut, dan memberikan kesempatan baru bagi hubungan mereka. Kini, meskipun masa SMP telah berakhir dan mereka melanjutkan pendidikan di sekolah yang berbeda, jarak bukan lagi penghalang. Dengan saling percaya, mendukung, dan menjaga satu sama lain, Bilqis dan Wildan berkomitmen untuk terus melangkah bersama menuju masa depan.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "keinginanku adalah dicintai olehmu selamanya, aku harap kau tak pernah berhenti mencintaiku." },
  { icon: "shell",   text: "semoga setiap impian yang kita bangun bersama dapat terwujud, satu persatu." },
  { icon: "star",    text: "semoga perempuan yang selalu kamu panggil cantik itu selalu aku, dan laki laki yang aku banggakan itu akan selalu kamu." },
  { icon: "compass", text: "semoga hari ini hanyalah awal dari ribuan kenangan indah yang akan kita ciptakan bersama." },
  { icon: "anchor",  text: "ku harap kamu tetap mengingatku, seolah aku adalah tempat yang selalu dituju oleh hatimu, tempat dimana hatimu selalu ingin kembali." },
  { icon: "heart",   text: "semoga aku dan kamu tidak tergoda dengan seseorang yang memiliki 2% sedangkan kita sama sama memiliki 98% itu." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "-";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "-"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);