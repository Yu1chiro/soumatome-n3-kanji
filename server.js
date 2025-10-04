const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

const allKanji = [
    { kanji: '駐車', furigana: 'ちゅうしゃ', meaning: 'parkir' },
    { kanji: '駐車場', furigana: 'ちゅうしゃじょう', meaning: 'tempat parkir' },
    { kanji: '無休', furigana: 'むきゅう', meaning: 'kerja tanpa libur' },
    { kanji: '無理な', furigana: 'むり', meaning: 'な Tidak Mungkin, Mustahil' },
    { kanji: '無料', furigana: 'むりょう', meaning: 'gratis' },
    { kanji: '無い', furigana: 'ない', meaning: 'tidak ada' },
    { kanji: '満車', furigana: 'まんしゃ', meaning: 'penuh mobil' },
    { kanji: '満員', furigana: 'まんいん', meaning: 'penuh orang' },
    { kanji: '不満', furigana: 'ふまん', meaning: 'Tidak puas' },
    { kanji: '向こう', furigana: 'むこう', meaning: 'seberang sana' },
    { kanji: '向かう', furigana: 'むかう', meaning: 'menuju, menghadap' },
    { kanji: '向き', furigana: 'むき', meaning: 'Menghadap' },
    { kanji: '関する', furigana: 'かんする', meaning: 'Berhubungan dengan、mengenai,terkait' },
    { kanji: '感心', furigana: 'かんしん', meaning: 'kagum, terkesan、minat,ketertarikan' },
    { kanji: '関係', furigana: 'かんけい', meaning: 'hubungan' },
    { kanji: '係', furigana: 'かかり', meaning: 'petugas' },
    { kanji: '禁止', furigana: 'きんし', meaning: 'larangan' },
    { kanji: '断る', furigana: 'ことわる', meaning: 'menolak' },
    { kanji: '無断', furigana: 'むだん', meaning: 'tanpa izin' },
    { kanji: '断水', furigana: 'だんすい', meaning: 'pemberhentian air, pemadaman air' },
    { kanji: '断食', furigana: 'だんじき', meaning: 'Puasa' },
    { kanji: '横', furigana: 'よこ', meaning: 'samping' },
    { kanji: '横断', furigana: 'おうだん', meaning: 'menyebrang' },
    { kanji: '横断歩道', furigana: 'おうだんほどう', meaning: 'zebra cross' },
    { kanji: '押す', furigana: 'おす', meaning: 'mendorong' },
    { kanji: '押さえる', furigana: 'おさえる', meaning: 'Menahan、menekan' },
    { kanji: '押し入れ', furigana: 'おしいれ', meaning: 'Lemari dinding ala jepang' },
    { kanji: '入学式', furigana: 'にゅうがくしき', meaning: 'upacara masuk sekolah' },
    { kanji: '数式', furigana: 'すうしき', meaning: 'rumus' },
    { kanji: '押しボタン式', furigana: 'おしボタンしき', meaning: 'dengan cara menekan tombol' },
    { kanji: '飛ぶ', furigana: 'とぶ', meaning: 'terbang' },
    { kanji: '飛行場', furigana: 'ひこうじょう', meaning: 'bandara' },
    { kanji: '飛行機', furigana: 'ひこうき', meaning: 'pesawat' },
    { kanji: '信じる', furigana: 'しんじる', meaning: 'percaya' },
    { kanji: '送信', furigana: 'そうしん', meaning: 'Pengiriman pesan' },
    { kanji: '自信', furigana: 'じしん', meaning: 'percaya diri' },
    { kanji: '信用', furigana: 'しんよう', meaning: 'kepercayaan' },
    { kanji: '信号', furigana: 'しんごう', meaning: 'lampu lalu lintas' },
    { kanji: '~号車', furigana: 'ごうしゃ', meaning: 'Nomor gerbong' },
    { kanji: '確かめる', furigana: 'たしかめる', meaning: 'memastikan' },
    { kanji: '確か（な）', furigana: 'たしかな', meaning: 'pasti' },
    { kanji: '正確', furigana: 'せいかく', meaning: 'tepat' },
    { kanji: '認める', furigana: 'みとめる', meaning: 'Mengakui' },
    { kanji: '確認', furigana: 'かくにん', meaning: 'konfirmasi' },
    { kanji: '非常に', furigana: 'ひじょうに', meaning: 'amat sangat' },
    { kanji: '非常', furigana: 'ひじょう', meaning: 'darurat' },
    { kanji: '非常口', furigana: 'ひじょうぐち', meaning: 'pintu darurat' },
    { kanji: '日常', furigana: 'にちじょう', meaning: 'Sehari-hari' },
    { kanji: '正常な', furigana: 'せいじょうな', meaning: 'Normal, biasa' },
    { kanji: '階', furigana: 'かい', meaning: '- lantai, - tingkat' },
    { kanji: '寺', furigana: 'じ', meaning: 'kuil' },
    { kanji: '階段', furigana: 'かいだん', meaning: 'tangga' },
    { kanji: '危ない', furigana: 'あぶない', meaning: 'bahaya' },
    { kanji: '危険な', furigana: 'きけんな', meaning: 'Bahaya' },
    { kanji: '箱', furigana: 'はこ', meaning: 'kotak' },
    { kanji: 'ゴミ箱', furigana: 'ごみばこ', meaning: 'Tempat sampah' },
    { kanji: '捨てる', furigana: 'すてる', meaning: 'membuang' },
    { kanji: '線', furigana: 'せん', meaning: 'garis' },
    { kanji: '番線', furigana: 'ばんせん', meaning: 'Peron nomor' },
    { kanji: '画面', furigana: 'がめん', meaning: 'Layar' },
    { kanji: '全面', furigana: 'ぜんめん', meaning: 'secara keseluruhan' },
    { kanji: '方面', furigana: 'ほうめん', meaning: 'arah' },
    { kanji: '普通', furigana: 'ふつう', meaning: 'Biasa' },
    { kanji: '各駅', furigana: 'かくえき', meaning: 'setiap stasiun' },
    { kanji: '各国', furigana: 'かっこく', meaning: 'setiap negara' },
    { kanji: '各自', furigana: 'かくじ', meaning: 'setiap individu、masing-masing' },
    { kanji: '快速', furigana: 'かいそく', meaning: 'kereta cepat' },
    { kanji: '速い', furigana: 'はやい', meaning: 'cepat speed' },
    { kanji: '速度', furigana: 'そくど', meaning: 'kecepatan' },
    { kanji: '高速道路', furigana: 'こうそくどうろ', meaning: 'jalan tol' },
    { kanji: '次', furigana: 'つぎ', meaning: 'berikutnya' },
    { kanji: '次回', furigana: 'じかい', meaning: 'Kali selanjutnya. kedatangan berikutnya' },
    { kanji: '目次', furigana: 'もくじ', meaning: 'daftar isi' },
    { kanji: '過ぎる', furigana: 'すぎる', meaning: 'melewati / melampaui' },
    { kanji: '過去', furigana: 'かこ', meaning: 'masa lalu' },
    { kanji: '通過', furigana: 'つうか', meaning: 'Melewati terowongan/stasiun/dll' },
    { kanji: '鉄', furigana: 'てつ', meaning: 'besi' },
    { kanji: '鉄道', furigana: 'てつどう', meaning: 'kereta api' },
    { kanji: '地下鉄', furigana: 'ちかてつ', meaning: 'kereta bawah tanah' },
    { kanji: '指', furigana: 'ゆび', meaning: 'jari' },
    { kanji: '指輪', furigana: 'ゆびわ', meaning: 'cincin' },
    { kanji: '指定', furigana: 'してい', meaning: 'tertentu, spesifik' },
    { kanji: '指定席', furigana: 'していせき', meaning: 'Kursi yang dipesan' },
    { kanji: '定休日', furigana: 'ていきゅうび', meaning: 'Hari libur yg sdh ditentukan' },
    { kanji: '安定', furigana: 'あんてい', meaning: 'stabil' },
    { kanji: '不安定', furigana: 'ふあんてい', meaning: 'tidak stabil' },
    { kanji: '席', furigana: 'せき', meaning: 'tempat duduk' },
    { kanji: '出席', furigana: 'しゅっせき', meaning: 'hadir' },
    { kanji: '欠席', furigana: 'けっせき', meaning: 'tidak hadir' },
    { kanji: '自由', furigana: 'じゆう', meaning: 'bebas' },
    { kanji: '自由席', furigana: 'じゆうせき', meaning: 'Kursi bebas' },
    { kanji: '窓', furigana: 'まど', meaning: 'jendela' },
    { kanji: '窓口', furigana: 'まどぐち', meaning: 'loket' },
    { kanji: '窓側', furigana: 'まどがわ', meaning: 'sisi jendela' },
    { kanji: '右側', furigana: 'みぎがわ', meaning: 'sisi kanan' },
    { kanji: '両側', furigana: 'りょうがわ', meaning: 'Kedua sisi' },
    { kanji: '道路', furigana: 'どうろ', meaning: 'jalan' },
    { kanji: '線路', furigana: 'せんろ', meaning: 'Rel kereta' },
    { kanji: '通路', furigana: 'つうろ', meaning: 'lorong' },
    { kanji: '番号', furigana: 'ばんごう', meaning: 'nomor' },
    { kanji: '停車', furigana: 'ていしゃ', meaning: 'Berhenti kendaraan' },
    { kanji: 'バス停', furigana: 'バスてい', meaning: 'halte bus' },
    { kanji: '整理', furigana: 'せいり', meaning: 'menata,mengatur' },
    { kanji: '整理券', furigana: 'せいりけん', meaning: 'Tiket antrian' },
    { kanji: '駐車券', furigana: 'ちゅうしゃけん', meaning: 'tiket parkir' },
    { kanji: '乗車券', furigana: 'じょうしゃけん', meaning: 'Tiket naik kendaraan' },
    { kanji: '回数券', furigana: 'かいすうけん', meaning: 'tiket berlangganan' },
    { kanji: '現れる', furigana: 'あらわれる', meaning: 'muncul' },
    { kanji: '現金', furigana: 'げんきん', meaning: 'uang tunai' },
    { kanji: '表現', furigana: 'ひょうげん', meaning: 'Ekspresi/ungkapan' },
    { kanji: '両親', furigana: 'りょうしん', meaning: 'orang tua' },
    { kanji: '~両', furigana: 'りょう', meaning: '~gerbong' },
    { kanji: '両替', furigana: 'りょうがえ', meaning: 'Penukaran Uang' },
    { kanji: '取り替える', furigana: 'とりかえる', meaning: 'mengganti / menukar' },
    { kanji: '着替える', furigana: 'きがえる', meaning: 'Ganti baju' },
    { kanji: '優しい', furigana: 'やさしい', meaning: 'baik hati / ramah' },
    { kanji: '優先席', furigana: 'ゆうせんせき', meaning: 'Kursi Prioritas' },
    { kanji: '女優', furigana: 'じょゆう', meaning: 'aktris' },
    { kanji: '座る', furigana: 'すわる', meaning: 'duduk' },
    { kanji: '座席', furigana: 'ざせき', meaning: 'tempat duduk' },
    { kanji: '正座', furigana: 'せいざ', meaning: 'duduk ala jepang' },
    { kanji: '降りる', furigana: 'おりる', meaning: 'turunkendaraan' },
    { kanji: '降る', furigana: 'ふる', meaning: 'turun hujan, salju' },
    { kanji: '降車口', furigana: 'こうしゃぐち', meaning: 'pintu turun kendaraan' },
    { kanji: '以降', furigana: 'いこう', meaning: 'Sesudah, setelah' },
    { kanji: '未来', furigana: 'みらい', meaning: 'Masa depan' },
    { kanji: '未定', furigana: 'みてい', meaning: 'Bimbang, belum diputuskan' },
    { kanji: '未満', furigana: 'みまん', meaning: 'kurang dari~' },
    { kanji: '週末', furigana: 'しゅうまつ', meaning: 'akhir pekan' },
    { kanji: '月末', furigana: 'げつまつ', meaning: 'akhir bulan' },
    { kanji: '年末', furigana: 'ねんまつ', meaning: 'akhir tahun' },
    { kanji: '若い', furigana: 'わかい', meaning: 'muda' },
    { kanji: '晩', furigana: 'ばん', meaning: 'malam' },
    { kanji: '晩ご飯', furigana: 'ばんごはん', meaning: 'Makan malam' },
    { kanji: '今晩', furigana: 'こんばん', meaning: 'Malam ini' },
    { kanji: '毎晩', furigana: 'まいばん', meaning: 'Setiap malam' },
    { kanji: '皿', furigana: 'さら', meaning: 'piring' },
    { kanji: '灰皿', furigana: 'はいざら', meaning: 'Asbak' },
    { kanji: '血', furigana: 'ち', meaning: 'darah' },
    { kanji: '出血', furigana: 'しゅっけつ', meaning: 'pendarahan / berdarah / keluar darah' },
    { kanji: '島', furigana: 'しま', meaning: 'pulau' },
    { kanji: '馬', furigana: 'うま', meaning: 'kuda' },
    { kanji: 'バリ島', furigana: 'ばりとう', meaning: 'pulau bali' },
    { kanji: '助ける', furigana: 'たすける', meaning: 'menolong' },
    { kanji: '救助', furigana: 'きゅうじょ', meaning: 'Penyelamatan, pertolongan' },
    { kanji: '準備', furigana: 'じゅんび', meaning: 'persiapan' },
    { kanji: '備える', furigana: 'そなえる', meaning: 'mempersiapkan' },
    { kanji: '営業', furigana: 'えいぎょう', meaning: 'bisnis, pemasaran' },
    { kanji: '閉める', furigana: 'しめる', meaning: 'menutup' },
    { kanji: '番', furigana: 'ばん', meaning: 'nomor' },
    { kanji: '閉まる', furigana: 'しまる', meaning: 'tertutup' },
    { kanji: '開閉', furigana: 'かいへい', meaning: 'Buka/tutup' },
    { kanji: '案', furigana: 'あん', meaning: 'usul/usulan' },
    { kanji: '案内', furigana: 'あんない', meaning: 'Panduan' },
    { kanji: '国内', furigana: 'こくない', meaning: 'dalam negeri' },
    { kanji: '家内', furigana: 'かない', meaning: 'istri' },
    { kanji: '以内', furigana: 'いない', meaning: 'dalam、dalam 1 bulan' },
    { kanji: '内側', furigana: 'うちがわ', meaning: 'bagian dalam' },
    { kanji: '予定', furigana: 'よてい', meaning: 'rencana' },
    { kanji: '予習', furigana: 'よしゅう', meaning: 'persiapan pelajaran' },
    { kanji: '予約', furigana: 'よやく', meaning: 'reservasi' },
    { kanji: '約', furigana: 'やく', meaning: 'Kira - kira, Sekitar、Kira Kira 1 tahun' },
    { kanji: '煙', furigana: 'けむり', meaning: 'asap' },
    { kanji: '禁煙', furigana: 'きんえん', meaning: 'dilarang merokok' },
    { kanji: '当たる', furigana: 'あたる', meaning: 'kena,tepat,terbentur' },
    { kanji: '本当', furigana: 'ほんとう', meaning: 'benar' },
    { kanji: '当たり前', furigana: 'あたりまえ', meaning: 'sewajarnya,memang,masuk akal' },
    { kanji: '当00', furigana: 'とう', meaning: '、iniformalperusahaan ini' },
    { kanji: '全部', furigana: 'ぜんぶ', meaning: 'semua' },
    { kanji: '全席', furigana: 'ぜんせき', meaning: 'semua kursi' },
    { kanji: '安全な', furigana: 'あんぜんな', meaning: 'aman' },
    { kanji: '客', furigana: 'きゃく', meaning: 'Tamu' },
    { kanji: 'お客様', furigana: 'おきゃくさま', meaning: 'Pelanggan' },
    { kanji: '様子', furigana: 'ようす', meaning: 'keadaan.kondisi' },
    { kanji: '様', furigana: 'さま', meaning: 'tuan' },
    { kanji: '理解', furigana: 'りかい', meaning: 'pengertian' },
    { kanji: '解説', furigana: 'かいせつ', meaning: 'Penjelasan' },
    { kanji: '解答', furigana: 'かいとう', meaning: 'jawaban, solusi' },
    { kanji: '分解', furigana: 'ぶんかい', meaning: 'Bongkar' },
    { kanji: '協力', furigana: 'きょうりょく', meaning: 'kerjasama' },
    { kanji: '願う', furigana: 'ねがう', meaning: 'Memohon, meminta, mengharap' },
    { kanji: '観光', furigana: 'かんこう', meaning: 'Pariwisata' },
    { kanji: '観客', furigana: 'かんきゃく', meaning: 'penonton' },
    { kanji: '動物園', furigana: 'どうぶつえん', meaning: 'kebun binatang' },
    { kanji: '公園', furigana: 'こうえん', meaning: 'taman' },
    { kanji: '港', furigana: 'みなと', meaning: 'pelabuhan' },
    { kanji: '空港', furigana: 'くうこう', meaning: 'bandara' },
    { kanji: '名古屋港', furigana: 'なごやこう', meaning: 'pelabuhan nagoya' },
    { kanji: '遊ぶ', furigana: 'あそぶ', meaning: 'bermain' },
    { kanji: '遊園地', furigana: 'ゆうえんち', meaning: 'taman hiburan' },
    { kanji: '美術館', furigana: 'びじゅつかん', meaning: 'gedung kesenian' },
    { kanji: '美人', furigana: 'びじん', meaning: 'wanita cantik' },
    { kanji: '美しい', furigana: 'うつくしい', meaning: 'cantik, indah' },
    { kanji: '美術', furigana: 'びじゅつ', meaning: 'Seni' },
    { kanji: '手術', furigana: 'しゅじゅつ', meaning: 'Operasi' },
    { kanji: '技術', furigana: 'ぎじゅつ', meaning: 'teknologi' },
    { kanji: '神社', furigana: 'じんじゃ', meaning: 'kuil shinto' },
    { kanji: '神様', furigana: 'かみさま', meaning: 'tuhan' },
    { kanji: '神経質', furigana: 'しんけいしつ', meaning: 'sensitif' },
    { kanji: 'お寺', furigana: 'おてら', meaning: 'wihara' },
    { kanji: '市役所', furigana: 'しやくしょ', meaning: 'balai kota' },
    { kanji: '役に立つ', furigana: 'やくにたつ', meaning: 'berguna, bermanfaat' },
    { kanji: '役員', furigana: 'やくいん', meaning: 'direktur anggota' },
    { kanji: '郵便', furigana: 'ゆうびん', meaning: 'pos' },
    { kanji: '郵便局', furigana: 'ゆうびんきょく', meaning: 'kantor pos' },
    { kanji: '薬局', furigana: 'やっきょく', meaning: 'Drug store, apotek' },
    { kanji: '交番', furigana: 'こうばん', meaning: 'pos polisi' },
    { kanji: '交換', furigana: 'こうかん', meaning: 'tukar/pertukaran' },
    { kanji: '交通', furigana: 'こうつう', meaning: 'lalu lintas' },
    { kanji: '差', furigana: 'さ', meaning: 'perbedaan' },
    { kanji: '差し出す', furigana: 'さしだす', meaning: 'mengajukan, menyampaikan, menyerahkan' },
    { kanji: '差出人', furigana: 'さしだしにん', meaning: 'pengirim email, dll' },
    { kanji: '交差点', furigana: 'こうさてん', meaning: 'perempatan' },
    { kanji: '点数', furigana: 'てんすう', meaning: 'Skor, nilai' },
    { kanji: '点', furigana: 'てん', meaning: 'nilai' },
    { kanji: '橋', furigana: 'はし', meaning: 'jembatan' },
    { kanji: '歩道橋', furigana: 'ほどうきょう', meaning: 'jembatan penyebrangan' },
    { kanji: '受ける', furigana: 'うける', meaning: 'Menerima' },
    { kanji: '受験', furigana: 'じゅけん', meaning: 'mengikuti ujian' },
    { kanji: '受信', furigana: 'じゅしん', meaning: 'mendapatkan / menerima pesan / e-mail' },
    { kanji: '付く', furigana: 'つく', meaning: 'Melekat/nempel' },
    { kanji: '付ける', furigana: 'つける', meaning: 'menempelkan' },
    { kanji: '受付', furigana: 'うけつけ', meaning: 'resepsionis' },
    { kanji: '片付ける', furigana: 'かたづける', meaning: 'membereskan' },
    { kanji: '科学', furigana: 'かがく', meaning: 'ilmu pengetahuan' },
    { kanji: '内科', furigana: 'ないか', meaning: 'Bagian Dalamdengan cara di obati' },
    { kanji: '外科', furigana: 'げか', meaning: 'operasi,departemen bedah' },
    { kanji: '教科書', furigana: 'きょうかしょ', meaning: 'buku pelajaran' },
    { kanji: '鼻', furigana: 'はな', meaning: 'hidung' },
    { kanji: '耳鼻科', furigana: 'じびか', meaning: 'THT' },
    { kanji: '主婦', furigana: 'しゅふ', meaning: 'ibu rumah tangga' },
    { kanji: '婦人', furigana: 'ふじん', meaning: 'nyonya' },
    { kanji: '産婦人科', furigana: 'さんふじんか', meaning: 'kebidanan / dokter kandungan' },
    { kanji: '骨', furigana: 'ほね', meaning: 'tulang' },
    { kanji: '骨折', furigana: 'こっせつ', meaning: 'patah tulang' },
    { kanji: '人形', furigana: 'にんぎょう', meaning: 'boneka' },
    { kanji: '形式', furigana: 'けいしき', meaning: 'Bentuk, format' },
    { kanji: '図形', furigana: 'ずけい', meaning: 'bentuk bulat, persegi' },
    { kanji: '凍る', furigana: 'こおる', meaning: 'Membeku' },
    { kanji: '整形外科', furigana: 'せいけいげか', meaning: 'operasi plastik' },
    { kanji: '金庫', furigana: 'きんこ', meaning: 'brangkas' },
    { kanji: '折る', furigana: 'おる', meaning: 'mematahkan' },
    { kanji: '車庫', furigana: 'しゃこ', meaning: 'garasi' },
    { kanji: '折れる', furigana: 'おれる', meaning: 'patah' },
    { kanji: '保存する', furigana: 'ほぞんする', meaning: 'menyimpan' },
    { kanji: '左折', furigana: 'させつ', meaning: 'belok kiri' },
    { kanji: 'ご存知です', furigana: 'ごぞんじです', meaning: 'tahu, kenal' },
    { kanji: '右折', furigana: 'うせつ', meaning: 'belok kanan' },
    { kanji: '存じる', furigana: 'ぞんじる', meaning: 'Mengetahui' },
    { kanji: '折り紙', furigana: 'おりがみ', meaning: 'seni melipat kertas' },
    { kanji: '召し上がる', furigana: 'めしあがる', meaning: 'Makan' },
    { kanji: '困る', furigana: 'こまる', meaning: 'Susah, Repot' },
    { kanji: '費用', furigana: 'ひよう', meaning: 'biaya' },
    { kanji: '消す', furigana: 'けす', meaning: 'mematikan' },
    { kanji: '旅費', furigana: 'りょひ', meaning: 'biaya perjalanan' },
    { kanji: '消える', furigana: 'きえる', meaning: 'padam' },
    { kanji: '会費', furigana: 'かいひ', meaning: 'biaya keanggotaan' },
    { kanji: '消しゴム', furigana: 'けしゴム', meaning: 'penghapus' },
    { kanji: '消費者', furigana: 'しょうひしゃ', meaning: 'konsumen' },
    { kanji: '消防', furigana: 'しょうぼう', meaning: 'Pemadam kebakaran' },
    { kanji: '期間', furigana: 'きかん', meaning: 'jangka waktu' },
    { kanji: '防ぐ', furigana: 'ふせぐ', meaning: 'Mencegah,Menangkal' },
    { kanji: '長期', furigana: 'ちょうき', meaning: 'Jangka panjang' },
    { kanji: '予防', furigana: 'よぼう', meaning: 'pencegahan' },
    { kanji: '短期', furigana: 'たんき', meaning: 'jangka pendek' },
    { kanji: '救う', furigana: 'すくう', meaning: 'Menyelamatkan' },
    { kanji: '定期券', furigana: 'ていきけん', meaning: 'tiket langganan kereta, gym, dll' },
    { kanji: '救急車', furigana: 'きゅうきゅうしゃ', meaning: 'ambulan' },
    { kanji: '期限', furigana: 'きげん', meaning: 'batas waktu' },
    { kanji: '警官', furigana: 'けいかん', meaning: 'polisi' },
    { kanji: '限る', furigana: 'かぎる', meaning: 'terbatas, hanya' },
    { kanji: '警察', furigana: 'けいさつ', meaning: 'polisi' },
    { kanji: '限度', furigana: 'げんど', meaning: 'batas maksimal/limit' },
    { kanji: '警察署', furigana: 'けいさつしょ', meaning: 'kantor polisi' },
    { kanji: '限定', furigana: 'げんてい', meaning: 'terbatas' },
    { kanji: '事故', furigana: 'じこ', meaning: 'kecelakaan' },
    { kanji: '賞', furigana: 'しょう', meaning: 'Hadiah/penghargaan' },
    { kanji: '故障', furigana: 'こしょう', meaning: 'kerusakan' },
    { kanji: '賞金', furigana: 'しょうきん', meaning: 'hadiah uang' },
    { kanji: '故ー', furigana: 'こー', meaning: 'Almarhumー' },
    { kanji: '賞品', furigana: 'しょうひん', meaning: 'hadiah' },
    { kanji: '伝える', furigana: 'つたえる', meaning: 'menyampaikan' },
    { kanji: '賞味期限', furigana: 'しょうみきげん', meaning: 'tanggal kadaluarsa' },
    { kanji: '手伝う', furigana: 'てつだう', meaning: 'membantu' },
    { kanji: '製品', furigana: 'せいひん', meaning: 'produk' },
    { kanji: '伝言', furigana: 'でんごん', meaning: 'pesan' },
    { kanji: '製', furigana: 'せい', meaning: '... Buatan...' },
    { kanji: '黄色', furigana: 'きいろ', meaning: 'kuning' },
    { kanji: '造る', furigana: 'つくる', meaning: 'membuat' },
    { kanji: '黄色い', furigana: 'きいろい', meaning: 'kuning' },
    { kanji: '製造', furigana: 'せいぞう', meaning: 'produksi' },
    { kanji: '絵', furigana: 'え', meaning: 'gambar' },
    { kanji: '方法', furigana: 'ほうほう', meaning: 'Cara, Metode' },
    { kanji: '絵本', furigana: 'えほん', meaning: 'Buku bergambar' },
    { kanji: '文法', furigana: 'ぶんぽう', meaning: 'tata bahasa' },
    { kanji: '絵画', furigana: 'かいが', meaning: 'Lukisan' },
    { kanji: '温かい', furigana: 'あたたかい', meaning: 'hangat' },
    { kanji: '組む', furigana: 'くむ', meaning: 'menggabungkan, menjalin' },
    { kanji: '温度', furigana: 'おんど', meaning: 'Suhu, temperatur' },
    { kanji: '組み立てる', furigana: 'くみたてる', meaning: 'merakit' },
    { kanji: '気温', furigana: 'きおん', meaning: 'Suhu udara' },
    { kanji: '番組', furigana: 'ばんぐみ', meaning: 'acara tv' },
    { kanji: '常温', furigana: 'じょうおん', meaning: 'suhu normal' },
    { kanji: 'ー組', furigana: 'くみ', meaning: 'pasangan' },
    { kanji: '約束', furigana: 'やくそく', meaning: 'janji' },
    { kanji: '花束', furigana: 'はなたば', meaning: 'Buket bunga/karangan bunga' },
    { kanji: '授業', furigana: 'じゅぎょう', meaning: 'pelajaran' },
    { kanji: '教授', furigana: 'きょうじゅ', meaning: 'profesor' },
    { kanji: '渡る', furigana: 'わたる', meaning: 'menyeberang' },
    { kanji: '渡す', furigana: 'わたす', meaning: 'menyerahkan' },
    { kanji: '昔', furigana: 'むかし', meaning: 'dahulu kala' },
    { kanji: '必ず', furigana: 'かならず', meaning: 'pasti' },
    { kanji: '必死', furigana: 'ひっし', meaning: 'Mati-matian' },
    { kanji: '要る', furigana: 'いる', meaning: 'perlu' },
    { kanji: '必要', furigana: 'ひつよう', meaning: 'perlu' },
    { kanji: '冷やす', furigana: 'ひやす', meaning: 'mendinginkan\ndari suhu normal ke suhu dingin' },
    { kanji: '冷える', furigana: 'ひえる', meaning: 'menjadi dingin\ndari suhu normal ke suhu dingin' },
    { kanji: '冷ます', furigana: 'さます', meaning: 'mendinginkan\ndari suhu panas ke suhu normal' },
    { kanji: '冷める', furigana: 'さめる', meaning: 'menjadi dingin\ndari suhu panas ke suhu normal' },
    { kanji: '冷蔵庫', furigana: 'れいぞうこ', meaning: 'kulkas' },
    { kanji: '冷凍庫', furigana: 'れいとうこ', meaning: 'Frezer' },
    { kanji: '存じる', furigana: 'ぞんじる', meaning: 'Mengetahui merendakan diri' },
];

const KANJI_PER_WEEK = 20;

// Menyajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// API untuk mendapatkan data kanji per minggu
app.get('/api/kanji/week/:weekNumber', (req, res) => {
    const week = parseInt(req.params.weekNumber, 10);
    const startIndex = (week - 1) * KANJI_PER_WEEK;
    const endIndex = startIndex + KANJI_PER_WEEK;
    
    const weeklyKanji = allKanji.slice(startIndex, endIndex);

    if (weeklyKanji.length === 0) {
        return res.status(404).json({ message: 'Data untuk minggu ini tidak ditemukan.' });
    }
    
    res.json({
        totalWeeks: Math.ceil(allKanji.length / KANJI_PER_WEEK),
        totalKanji: allKanji.length,
        kanjiData: weeklyKanji
    });
});

// Helper function to get random items from an array
function getRandomItems(arr, n, exclude) {
    const result = new Set();
    const filteredArr = arr.filter(item => item !== exclude);
    while(result.size < n && result.size < filteredArr.length) {
        const randomIndex = Math.floor(Math.random() * filteredArr.length);
        result.add(filteredArr[randomIndex]);
    }
    return Array.from(result);
}

// API untuk membuat kuis dengan variasi soal
app.get('/api/quiz/week/:weekNumber', (req, res) => {
    const week = parseInt(req.params.weekNumber, 10);
    const startIndex = (week - 1) * KANJI_PER_WEEK;
    const endIndex = startIndex + KANJI_PER_WEEK;

    const weeklyKanji = allKanji.slice(startIndex, endIndex);
    if (weeklyKanji.length === 0) {
        return res.status(404).json({ message: 'Data untuk minggu ini tidak ditemukan.' });
    }

    const quizData = weeklyKanji.map(correctKanji => {
        const questionType = Math.floor(Math.random() * 2); // 0: arti, 1: furigana
        let question, options, answer;

        if (questionType === 0) { // Menanyakan Arti Kanji
            const allMeanings = allKanji.map(k => k.meaning);
            const wrongAnswers = getRandomItems(allMeanings, 3, correctKanji.meaning);
            options = [...wrongAnswers, correctKanji.meaning].sort(() => Math.random() - 0.5);
            question = {
                type: 'arti',
                prompt: 'Apa arti dari Kanji ini?',
                subject: correctKanji.kanji,
                answer: correctKanji.meaning,
                options
            };
        } else { // Menanyakan Cara Baca (Furigana)
            const allFurigana = allKanji.map(k => k.furigana);
            const wrongAnswers = getRandomItems(allFurigana, 3, correctKanji.furigana);
            options = [...wrongAnswers, correctKanji.furigana].sort(() => Math.random() - 0.5);
            question = {
                type: 'furigana',
                prompt: 'Bagaimana cara membaca Kanji ini?',
                subject: correctKanji.kanji,
                answer: correctKanji.furigana,
                options
            };
        }
        return question;
    });

    res.json(quizData.sort(() => Math.random() - 0.5)); // Acak urutan soal
});


// Routes untuk menyajikan halaman HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/study-mode', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'study-mode.html'));
});
app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'history.html'));
});

// Rute baru untuk halaman kuis
app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});