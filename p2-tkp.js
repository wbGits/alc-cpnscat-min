window.DATA_QUESTION_TKP = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `Atasan Anda melakukan rekayasa laporan keuangan kantor, sikap anda...
///Dalam hati tudak menyetujui hal tersebut
///Berpikir hal tersebut sering terjadi di kantor manapun
///Mengingatkan dan melaporkan kepada yang berwenang
///Tidak ingin terlibat dalam proses rekayasa tersebut
///Beranggapan hal semacam itu memang sudah menjadi tradisi yang tidak baik di Indonesia 
///DCAEB

///Saya baru saja dimutasikan ke unit lain yang sama sekali baru bagi saya. Sikap saya...
///Berusaha memahami mekanisme kerja unit melalui arsip dan aturan kebijakan
///Jarang masuk karena belum jelas apa yang harus dikerjakan
///Duduk-duduk saja sambil menunggu perintah atasan
///Berusaha mempelajari dan memahami mekanisme kerja unit melalui rekan sejawat
///Mengamati proses pekerjaan yang dilakukan rekan sejawat
///DAECB

///Jika rencana saya melakukan inovasi pekerjaan ditentang oleh rekan kerja saya, maka...
///Saya merasa kecewa
///Saya marah, karena bagaimana pun juga inovasi tersebut untuk kebaikan bersama
///Saya sedih karena inovasi tersebut terhambat
///Saya meminta penjelasan dari rekan tersebut dan mencari solusi terbaik 
///Saya berani berdebat dengan rekan tersebut karena yakin bahwa rencana inovasi tersebut membawa angin perubahan yang positif
///DEBCA

///Jika suatu rencana kerja terlihat rumit, maka...
///Saya tidak mau repot-repot mencobanya
///Saya khawatir jika mencobanya dan gagal
///Saya berani mencoba setelah mempertimbangkan risikonya
///Saya meminta pendapat istri
///Yang penting saya coba dulu
///CDEBA

///Seorang oknum staf HRD menawarkan bantuan kepada saya agar bisa diterima menjadi karyawan di tempat tersebut dengan cara memberikan dana dengan jumlah tertentu. Sikap saya adalah...
///Menerima tawaran tersebut sebab persaingan memang ketat
///Mempertimbangkan terlebih dahulu segala sesuatunya
///Mencoba dulu dengan cara resmi sebelum melalui cara seperti itu
///Menolaknya karena saya ingin diterima dengan cara yang sah, bukan dengan suap untuk mendapatkan rezeki yang halal
///Meminta pertimbangan orang tua dan pihak-pihak yang lebih berpengalaman
///DCBEA

///Saya memiliki sepatu kesayangan dan dihilangkan oleh teman dekat saya ketika ia pinjam. Sikap saya adalah...
///Saya memintanya untuk mengganti sepatu tersebut karena sepatu itu sepatu kesayangan saya
///Saya sangat menyukai sepatu tersebut, namun sepatu itu sudah hilang
///Saya memusuhinya dan melarangnya meminjam sepatu saya lagi
///Saya memintanya untuk mengganti dan mengatakan padanya untuk lebih berhati-hati jika dia meminjam barang-barang saya lagi
///Saya marah pada teman saya
///DABEC

///Menteri pendayagunaan Aparatur Negara dan Reformasi Birokrasi (MenPAN-RB) Tjahjo Kumolo mengungkap adanya paham radikalisme dilingkungan pemerintahan. Bahkan, Tjahjo kerap mencopot oknum PNS yang terpapar paham radikalisme dan terorisme. Hal ini disampaikan Tjahjo saat menghadiri rilis survey Lembaga Survei Indonesia (LSI) bertajuk tantangan reformasi birokrasi: demokrasi dan intoleransi di kalangan PNS. Tjahjo awalnya mengungkap paham radikalisme sangat erat kaitannya dengan praktik intoleransi. Dia menyayangkan banyak kehilangan orang-orang pandai di lingkungan pemerintahan akibat hal ini. “Kami banyak kehilangan orang-orang pintar yang seharusnya dia bisa menjadi kepala badan atau lembaga tapu dalam TPS (tes potensi akademi) dia terpapar masalah-masalah radikalisme dan terorisme,” kata Tjahjo. Pertanyaan Tjahjo Kumolo merupakan kondisi yang juga terjadi pada instansi Anda. Saat ini dibidang yang Anda pimpin ada staff yang Anda curigai sudah terpapar pemahaman radikalisme. Bagaimana sikap yang sebaiknya Anda ambil?
///Mengusulkan kepada bagian kepegawaian agar memberhentikan saja staff tersebut
///Mengajak staff tersebut untuk berbicara secara personal dan menanyakan mengenai kecurigaan Anda agar mendapatkan klarifikasi
///Menjadikan bahan obrolan di kantor agar staff tersebut meninggalkan pemahaman radikalisme
///Merapatkan dengan bidangnya yang lain mengenai tindakan yang sebaiknya diambil
///Melaporkan kepada bagian kepegawaian agar kecurigaan Anda dapat ditelusuri dan ditindaklanjuti
///BEDAC

///Ketika saudara dekat saya meminta bantuan saya untuk melakukan sesuatu yang cenderung melanggar hukum, maka tindakan saya adalah...
///Saya menolak dengan keras
///Saya menolak dan menjelaskan alasannya
///Saya melakukannya untuk pertama dan terakhir kalinya
///Karena dia saudara dekat saya, maka saya melakukanya sekali ini saja
///Saya mempertimbangkan resikonya baru melakukannya kalau memungkinkan saya menanggung resikonya
///ABEDC

///Jika Anda melihat anak atasan Anda melakukan kesalahan, apa yang Anda perbuat?
///Mendiamkannya karena takut atasan tersingung
///Mengingatkannya lalu berpesan kepada anak tersebut agar jangan memberitahukan ayahnya bahwa saya yang mengingatkan
///Mengingatkannya
///Meminta rekan lain untuk mengingatkannya
///Melaporkannya kepada atasan tersebut
///CEDBA

///Ketika berbelanja di minimarket, kasir melakukan kesalahan perhitungan. Maka sikap saya adalah...
///Mengkonfirmasi untuk mendapatkan kebenaran
///Mengkonfirmasi jika saya dirugikan
///Mengkonfirmasi jika selisih harga terlalu tinggi
///Abaikan saja karena bukan kesalahan saya
///Abaikan saja karena mungkin harganya telah berubah
///ACDEB

///Suatu hari, Anda pulang jam 01:00 WIB dini hari menuju rumah dalam kondisi tubuh yang sangat lelah. Di jalan, Anda mendapati ada kecelakaan. Bagaimana sikap Anda?
///Melihat situasi terlebih dahulu. Jika memungkinkan, maka saya tolong
///Langsung pulang saja karena bagaimana pun juga kondisi badan saya sangat lelah sekali
///Pergi saja karena sudah ada orang yang mendekati korban tersebut, pastilah sudah ada yang menolong
///Melihat sepintas, apakah korbanya parah. Jika parah, akan saya tolong
///Langsung pulang saja, paling-paling hanya rekayasa komplotan perampok jalanan yang sedang melakukan aksinya
///ACBDE


///Saya ditugaskan di front office untuk melayani tamu pimpinan. Pada saat pimpinan saya tidak berada di tempat dan ada tamu pimpinan yang memerlukan keputusan segera, sedangkan atasan tidak dapat dihubungi, maka sikap saya adalah...
///Mengambil keputusan meskipun tanpa petunjuk atasan selama tidak bertentangan dengan kebijakan umum pimpinan
///Tidak berani mengambil keputusan tanpa petunjuk atasan saya
///Ragu-ragu dalam mengambil keputusan tanpa petunjuk atasan saya 
///Menunda-nunda pengambilan keputusan tanpa petunjuk atasan saya 
///Mengambil keputusan tanpa petunjuk atasan karena keadaan sangat mendesak
///AEDBC

///Pengumuman seleksi masuk perguruan tinggi akan diumumkan besok. Bagaimana perasaan Anda?
///Malam ini saya tidak bisa tidur
///Malam ini saya melakukan refreshing terlebih dahulu agar besok tidak terlalu tertekan bila tidak lolos
///Biarlah takdir yang menentukan
///Saya berharap lolos, namun jika tidak lolos, saya siap
///Pokoknya saya yakin dan harus lolos
///DBCEA

///Ketika sedang melakukan presentasi, kancing baju Pak Benny, yang juga atasan Anda, terlepas satu buah di bagian perut. Hal ini sangat menganggu jalannya presentasi. Namun tampaknya tak ada yang memberitahu Pak Benny. Bagaimana sikap Anda...
///Lebih baik saya diam karena yang lain pun juga diam saja
///Saya menuliskan di secarik kertas mengenai kancing tersebut lalu saya serahkan kepada Pak Benny 
///Meskipun hal itu mengganggu jalannya presentasi namun saya tidak mau ambil resiko dengan memberitahunya
///Saya takut Pak Benny tersinggung, jadi tidak ada alasan untuk saya memberitahunya
///Semoga Pak Benny sadar dengan sendirinya
///BEACD

///Suatu hari, terjadi musibah dimana salah satu tetangga yang berbeda agama dan keyakinan dengan Anda terkena bencana longsor. Kejadian ini membuat tetangga Anda tersebut kehilangan tempat tinggal. Sebagai bagian dari masyarakat pada lingkungan tersebut, sikap yang akan Anda lakukan adalah?
///Saya yakin solidaritas masyarakat sangat tinggi sehingga sudah banyak warga yang akan membantu memperbaiki rumah warga yang terkena longsor
///Saya akan ikut membantu kegiatan dalam memperbaiki rumah tetangga tersebut dengan segenap tenaga dan materi yang saya miliki karena tindakan ini adalah bentuk toleransi umat beragama
///Saya akan mengajak masyarakat yang tinggal di sekitar untuk ikut menyumbang agar dapat membantu meringankan beban tetangga yang terkena musibah
///Saya akan mengingatkan ketua RT setempat untuk memberikan bantuan kepada tetangga yang terkena musibah
///Saya akan ikut berpartisipasi dalam memberikan sumbangan dengan menyisihkan sedikit uang dari gaji saya dan mengajak masyarakat untuk turut memberikan sumbangan, tentunya dengan dikoordinir oleh ketua RT.
///EBCDA

///Dalam menghadapi masalah pelik, saya...
///Pesimis mampu mengatasinya
///Beranggapan harus ada yang membantu saya menghadapinya
///Berusaha sekuat mungkin memecahkannya
///Merasa tidak adil bila saya harus menyelesaikan sendiri
///Bertanya-tanya mungkinkah saya mampu mengatasinya
///CBEDA


///Ketika di kantor, saya ingin mem-print 3 lembar data-data pribadi yang tidak ada hubungannya dengan pekerjaan. Maka, saya...
///Langsung saja mem-print di kantor 
///Mem-print di kantor namun dengan memakai kertas saya sendiri
///Mem-print di kantor namun menunggu setelah jam kerja selesai
///Mem-print di rumah saja memakai printer sendiri
///Mem-print di kantor pada saat printer tidak dipakai
///DBCEA

///Anda sedang menghadapi ujian akhir, namun Anda tidak bisa hadir dalam ujian tersebut karena sakit dan dosen Anda tidak menawarkan untuk mengikuti ujian susulan. Bagaimana sikap Anda?
///Cuek aja, toh dosenya tidak menawarkan ujian susulan
///Saya menghadap dosen saya untuk meminta ujian susulan
///Saya menyadari bahwa jika saya tidak mengikuti ujian mungkin saya tidak akan lulus
///Seharusnya dosen tahu bahwa saya sedang sakit sehingga tidak dapat mengikuti ujian
///Saya mungkin akan mengikuti ujian susulan kalau diadakan
///BCDEA

///Setelah melaksanakan tugas tertentu yang diberikan atasan, ternyata ada intruksi yang salah dari atasan sehingga Anda harus mengulangi tugas teesebut. Bagaimana sikap Anda?
///Saya tetap mengulanginya meskipun sambil sedikit melampiaskan kekesalan kepada atasan
///Meskipun dia atasan saya, saya menegurnya dengan keras atas kesalahan yang merugikan orang lain tersebut
///Saya mengulanginya meskipun dalam hati terasa sangat marah
///Saya tidak bersedia mengulanginya karena kesalahan bukan dari pihak saya
///Saya bersedia mengulanginya dan saya juga memintanya untuk lebih berhati-hati dalam memberikan intruksi dikemudian hari 
///ECADB 

///Jika saya memiliki bawahan yang kompetensinya rendah, maka...
///Saya menuntutnya untuk meningkatkan kemampuannya
///Saya menegaskan jika dia tidak meningkatkan kemampuannya, maka saya tidak segan akan memberhentikannya
///Saya akan memberhentikannya dengan segera
///Saya meminta atasan saya untuk memindahkannya ke unit lain
///Saya membimbing dan memintanya untuk meningkatkan kemampuannya 
///EABDC 

///Anda adalah seorang karyawan di perusahaan perdagangan. Anda memahami bahaw Indonesia memiliki "Keunggulan Mutlak" dalam perdagangan internasional untuk beberapa jenis produk. Apa visi Anda terhadap kondisi tersebut?
///Saya mengusulkan kepada atasan untuk mengoptimalkan perdagangan produk-produk tersebut karena memiliki keunggulan harga murah dan ketersediaan barang
///Hal itu mungkin sudah ditangani oleh karyawan lainnya, karena di kantor Kementrian Perdagangan ada banyak rekan lain
///Saya kurang berani mengusulkan ini itu pada pimpinan
///Saya kurang yakin produk indonesia mampu bersaing di pasar internasional 
///Saya tanyakan terlebih dahulu pendapat rekan lain mengenai hal ini
///AECDB

///Tim bola voli unit kami diperkirakan akan kalah melawan tim bola voli unit lain dalam instansi kami. Sikap saya dalam pertandingan adalah...
///Lebih baik diam karena sadar akan kekuatan tim kami
///Berusaha bersembunyi agar tidak diketahui bahwa saya adalah pendukung tim lemah
///Tetap memberikan dukungan dengan penuh semangat
///Jika tim kami kalah tidaklah mengapa, toh sudah diperkirakan demikian
///Memberikan dukungan karena malu dianggap tidak setia kawan
///CDEAB

///Setelah mendapat penghargaan sebagai pegawai paling berprestasi tahun ini, sikap saya...
///Puas dengan penghargaan tersebut
///Merasa tidak percaya bila saya mendapat penghargaan tersebut
///Memberitahukan kepada seluruh keluarga berita bahagia ini
///Bertanya-tanya mungkinkah tahun depan akan mendapatkannya lagi
///Senang dan berupaya untuk lebih berprestasi lagi
///EDCAB

///Instansi kantor Anda mengadakan training yang sangat bermanfaat bagi peningkatan kemampuan Anda, namun training tersebut diadakan pada hari Sabtu dan Minggu. Bagaimana sikap Anda?
///Lebih baik saya mengikuti training yang diadakan bukan pada hari libur
///Hari libur Sabtu dan Minggu adalah hak pegawai untuk libur dari urusan pekerjaan dan yang berhubungan dengannya
///Saya bersedia mengorbankan dua hari libur tersebut untuk mengikuti training
///Saya bersedia mengikuti training namun hanya hari sabtu saja
///Saya menyarankan pegawai lain yang masih lajang saja untuk mengikuti tarining tersebut
///CDEAB

///Menurut saya, bekerja merupakan upaya untuk meraih kesuksesan. Untuk itu upaya saya adalah...
///Bekerja dengan disiplin dan selalu berusaha yang terbaik
///Berusaha mengatasi orang yang menghalangi upaya saya
///Bekerja keras
///Bekerja sampai larut malam
///Berkerja berdasarkan kontrak kerja
///ACBDE 

///Seminggu lagi sekolah saya akan mengadakan kegiatan dengan tema lingkungan. Saat melakukan rapat divisi, ketua kelompok saya bersikeras menolak ide yang saya dan teman saya buat karena dianggan tidak sesuai dengan tema kegiatan yang akan diselenggarakan. Sikap saya atas hal tersebut adalah...
///Mengajak teman satu tim saya bersikeras bahwa ide tersebut adalah yang paling baik
///Mengatakan pada ketua kelompok bahwa ide tersebut adalah ide teman saya
///Menerima penolakan tersebut dan mencari ide yang lain agar sesuai dengan tema
///Mencoba mencari ide yang lain agar sesuai tema meskipun dengan rasa kesal
///Mencoba mencari ide yang lain dengan semampunya
///CDEAB 

///Sebagai seorang abdi negara, saya akan...
///Melaksanakan aturan atau prosedur pelayanan publik yang berlaku
///Memilih posisi yang secara langsung berperan dalam pelayanan publik 
///Memberikan pelayanan pada masyarakat sesuai tututan pekerjaan saya
///Menginformasikan bentuk layanan yang dapat dimanfaatkan masyarakat 
///Berusaha memahami kebutuhan masyarakat dalam memberikan pelayanan
///EBDCA 

///Seorang teman kelompok saya sering tidak dapat mengikuti kegiatan kelompok secara aktif karena harus bekerja paruh waktu setiap hari. Sikap saya adalah...
///Meminta ia mengundurkan diri dari kelompok
///Menerima keadaan tersebut selama tidak mengganggu tugas kelompok secara keseluruhan
///Tetap memberinya tugas sebagaimana yang lain 
///Berusaha untuk membantu menyelesaikan tugas-tugasnya 
///Membicarakannya dengan rekan kelompok yang lain dan mencari solusi yang terbaik 
///ECADB

///Salah satu pernyataan berikut mencerminkan perilaku saya..
///Membalas kebaikan orang lain 
///Membantu untuk mendapatkan balasan di kemudian hari 
///Membantu orang yang tidak mampu sesuai dengan kebutuhannya
///Tidak menanggapi suatu permintaan kalau tidak merasa nyaman
///Tidak membantu induvidu bersentuhan khusus karena saya merasa tidak mampu
///CADEB 

///Di ligkungan kerja saya, ada larangan untuk tidak menggunakan gadget selama bekerja, namun hal tersebut sering saya ketahui dilakukan oleh atasan dan rekan kerja saya yang lain sehingga bertentangan dengan hati nurani saya. Sikap saya adalah...
///Melakukan mogok kerja untuk menunjukkan protes
///Membiarkan saja pelanggaran tersebut terjadi demi menjaga hubungan dengan rekan kerja lain
///Menyampaikan pelanggaran tersebut kepada rekan lainnya
///Menegur dan mengingatkan atasan dan rekan kerja tersebut
///Ikut-ikutan demi menjaga toleransi antar sesama pegawai
///DCABE 

///Anda adalah salah seorang anggota unit kerja biasa. Suatu hari unit Anda harus menangani keluhan dari seorang mitra perusahaan yang cukup rumit dan membutuhkan pengambilan keputusan saat itu juga dari pimpinan unit, padahal pimpinan unit masih dalam perjalanan dan terjebak macet. Bagaimana sikap Anda?
///Saya mencoba menenangkan orang tersebut sambil menunggu pimpinan unit datang
///Saya meminta rekan lain yang lebih berpengalaman yang mengambil keputusan 
///Bagaimanapun juga, saya tidak bersedia mengambil keputusan karena akan beresiko pada karier saya
///Saya akan mengambil keputusan yang terbaik menurut saya
///Saya akan menelepon pimpinan dulu baru mengambil keputusan sesuai arahan pimpinan dan berdasarkan kondisi saat itu
///EDABC 

///Teman kantor saya adalah orang tua salah satu siswa yang lulus ujian masuk universitas dan diminta untuk melakukan registrasi ulang pada hari itu juga, namun mereka tidak dapat melakukannya karena mereka harus ke luar kota. Saya akan...
///Menawarkan bantuan untuk melakukan registrasi ulang jika diperbolehkan 
///Meminta teman saya untuk mempertimbangkan kembali keberangkatannya ke luar kota 
///Meminta teman saya untuk membatalkan rencananya ke luar kota 
///Menyuruh anaknya tinggal dan melakukkan registrasi ulang sendirian
///Memahami bahwa seringkali terjadi acara yang bersamaan waktu
///ABCDE 

///Dalam tim kepanitiaan suatu acara yang saya pimpin, ada salah satu anggota saya yang tidak aktif karena dilarang oleh orang tuanya bekerja lembur sehingga kerja tim menjadi tidak lancar padahal acara tersebut akan berlangsung sebentar lagi sehingga harus bekerja sampai lebur. Sikap saya adalah...
///Mempertanyakan kesanggupan yang telah dijanjikan dulu
///Memintanya segera mengundurkan diri dari kepanitiaan
///Berpikir bahwa anggota tersebut menjengkelkan
///Mencoba mengerti kondisinya dan mencoba mencarikan tugas yang dapat dikerjakan di rumah
///Menyesal memilihnya sebagai anggota kepanitiaan tersebut
///DABCE 

///Salah satu perilaku berikut ini yang sesuai dengan saya adalah...
///Mudah tersenyum kepada teman dekat saya
///Tidak duduk dengan orang yang berkebutuhan khusus 
///Tidak bergaul dengan orang yang berbeda statusnya dengan saya 
///Menghindari kerja dengan orang yang membenci kinerja saya
///Memberikan tempat duduk pada seorang ibu dalam bus yang penuh
///EADCB 

///Rekan kerja anda difitnah oleh kepala instansi dan akhirnya akan mendapatkan hukuman yang berat. Bagaimana reaksi Anda?
///Sebenarnya saya ingin melawan tetapi tidak punya cukup kekuatan untuk melawan atasan 
///Saya laporkan kepada pihak terkait mengenai hal tersebut
///Saya sarankan kepada rekan kerja saya untuk bersabar
///Saya ajak rekan kerja saya untuk tidak melawan karena dapat memperumit masalah
///Saya mendoakan yang terbaik atas masalah tersebut
///BDCAE

///Ketika tergabung dengan suatu forum diskusi, Saya biasanya...
///Mudah menerima pendapat orang lain.
///Mudah sekali mengeluarkan ide-ide baru.
///Cenderung menambahkan ide yang sudah ada.
///Selalu memiliki ide yang serupa dengan orang lain.
///Membutuhkan waktu yang agak lama untuk memberikan ide yang berbeda.
///BCDEA

///Respon Saya Ketika dihadapkan dengan perubahan yang mendadak...
///Bingung bagaimana harus ber-sikap.
///Penuh harapan akan perubahan.
///Tertekan karena cemas akan dampak yang akan terjadi.
///Pesimis karena tidak dilibatkan dalam proses awal.
///Berhati-hato memetakan dampak politis perubahan.
///EBCDA

///Kemudahan akses informasi via internet saat ini, menurut Saya...
///Tergantung pada pemakaiannya.
///Mengganggu kinerja secara umu.
///Mengganggu hubungan inter-personal.
///Mempermudah belajar secara mandiri.
///Memperluas wawasan dan meningkatkan keilmuan.
///EDACB

///Jarak dari rumah ke kantor adalah 30 menit dengan bus. Tanpa diketahui sebelumnya, hari ini kendaraan umum melakukan aski mogok bero[erasi. Akibat kejadian tersebut...
///Saya tetap menunggu siapa tahu seseorang akan memberikan Saya tumpangan.
///Saya berusaha menghentikan kendaraan yang lewatuntuk mendapatkan tumpangan.
///Saya akan berjalan kaki secepat mungkin.
///Lebih baik pulang dan tidak usah masuk kerja. 
///Saya akan berjalan kaki sambil berusaha mencari tumpangan.
///BECAD

///Anda mendapatkan kepercayaan dari pimpinan untuk mengerakan sesuatu yang Anda tahu akan menggangu pekerjaan kelompok. Ketika meng-hadapi situasi seperti itu, bagaimana sikap Anda...
///Saya mencoba mempertimbangkan sendiri dari berbagai sudut pandang kepentingan.
///Saya meminte pertimbangan teman dekat.
///Saya akan meminta pertimbangan keluarga.
///Saya akan meminta pertimbangan senior di kantor.
///Saya akan memnta pertimbangan kelompok kerja Saya.
///EDBCA

///Ketika berhasil dalam mengerjakan tugas, untuk tugas selanjutnya saya akan...
///Tetap berusaha semampunya.
///Berusaha lebih baik lagi.
///Tidak puas dan berusaha lebih baik lagi.
///Berusaha sekuat tenaga.
///Biasa saja.
///BDCAE

///Ketika saya merasa dikhianati oleh teman baik Saya, Saya...
///Menghindar darinya agar tidak emosi Ketika bertemu.
///Mancari teman lain yang dapat dijadikan teman bicara.
///Meredam emosi Saya dan mencoba berpikir jernih.
///Segera memutuskan hubungan pertemanan karena merasa tidak dihargai.
///Menceritakan pada orang lain apa yang sudah dia lakukan agar orang lain tidak menjadi korban.
///CABED

///Atasan Anda hari ini tidak berada di kantor. Teman Anda mengajak Anda untuk bekerja dengan lebih santai. Sikap Anda...
///Tetap di meja dan menyelesaikan pekerjaan Anda.
///Mengikuti ajakannya dan ber-santai.
///Ragu-ragu.
///Jika memang tidak ada yang mengawasi, boleh saja bersantai.
///Melihat teman yang lain, jika banyak yang bersantai baru ikut bersantai.
///ACEDB

///Bagaimana reaksi Anda menyikapi aksi-aksi kekerasan yang sering terjadi di jalanan ?
///Takut dan trauma saat berada di jalan.
///Tidak ambil pusing dengan kejadian tersebut.
///Melaporkan aksi yang ada dan tetap waspada saat berkendara di jalan.
///Hanya asyik menonton tanpa melakukan sesuatu.
///Sebisa mungkin mencari teman Ketika melewati jalan tersebut.
///CEBDA

///Anda dan tim Anda diberikan tugas baru oleh pimpinan, namun semua anggota tim belum memahami maksud dan cara mengerjakan tugas baru tersebut. Sikap Anda...
///Saya yakin bahwa para anggota tim juga dapat belajar sendiri untuk memahami cara menyelesaikan tugas baru tersebut.
///Saya akan mempelajari tugas tersebut, lalu membagi pengetahuan Saya kepada anggota tim yang lain.
///Saya akan meminta bantuan rekan kerja yang paling pandai untuk mempelajari tugas tersebut, kemudia menjelaskannya pada semua anggota tm.
///Kami mengerjakan bersama-sama tugas tersebut sesuai dengan pemahaman kami, bila ada kesulitan kami akan menyelesaikan bersama-sama.
///Pimpinan yang memberikan tugas, sebaiknya menjelaskan terlebih dahulu bagaimana mengerjakan tugas tersebut sebaik-baiknya.
///DBCEA`;
	
	const returned = [];
	const arrayStringQuestions = [];
	const pieces = stringQuestions.split("///");
	const alpabet = ["a", "b", "c", "d", "e"];
	const group = "TES KARAKTER PRIBADI";
	const groupAlias = "tkp";
	const len = pieces.length;
	let currentIndex = 0;
	let currentItem;
	for(let i=0;i<len;i++){
		currentIndex += 1;
		const p = p_stringTrim(pieces[i]);
		if(currentIndex===1){
			currentItem = {};
			currentItem.group = group;
			currentItem.groupAlias = groupAlias;
			currentItem.content = p;
		}
		else if(currentIndex < 7){ // index untuk opsi
			if(currentIndex === 2){
				currentItem.option = [];
			}
			currentItem.option.push(p);
		}
		else{ // scores
			const usedScores = [0,0,0,0,0];
			const len = p.length;
			for(let i=0;i<len;i++){
				const huruf = p[i];
				const score = 5 - i;
				const scoreIndex = alpabet.indexOf(huruf.toLowerCase());
				usedScores[scoreIndex] = score;
			}
			currentItem.scores = usedScores;
			
			returned.push(currentItem);
			currentIndex = 0;
		}
	}


	return returned;
})();

//console.log(window.DATA_QUESTION_TKP);
/* AMBIL KUNCI JAWABAN */
/*
const kunciLabels = ["A", "B", "C", "D", "E"];
const items = window.DATA_QUESTION_TIU;
const len = items.length;
const kunci = [];
for(let i=0;i<len;i++){
	const item = items[i];
	const scores = item.scores;
	for(let j=0;j<5;j++){
		if(scores[j] === 5){
			kunci.push(kunciLabels[j]);
			break;
		}
	}
}

const info = [];
for(let i=0;i<items.length;i++){
	info.push(i + 31 + ". "+ kunci[i]);
}

print(info.join("\n"));
*/