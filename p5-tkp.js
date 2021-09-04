window.DATA_QUESTION_TKP = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `Saat Anda dalam perjalanan menuju kantor dan sudah hampir terlambat, tiba-tiba teman Anda menelepon untuk menjemputnya di terminal karena dompetnya baru saja kecopetan. Terminal tersebut berada di arah jalan yang berbeda dan mengharuskan Anda putar balik. Yang sebaiknya Anda lakukan adalah...
///Segera menjemput dengan memacu kendaraan Anda sekencang mungkin
///Memintanya menunggu sebentar setelah Anda melakukan presensi di kantor
///Memintanya untuk menghubungi teman lain yang baru saja berangkat
///Menolaknya dengan halus karena akan menyebabkan Anda terlambat masuk kantor.
///Memintanya naik ojek online dan Anda mentransfer sejumlah uang ke aplikasi
///EACDB

///Beberapa hari ini, lingkungan tempat tinggal Anda sering disatroni pencuri. Akhirnya, warga di lingkungan Anda sepakat untuk mengadakan ronda malam terjadwal tiap harinya secara bergiliran untuk mencegah peristiwa pencurian terjadi lagi. Di sisi lain, Anda adalah seorang anggota direksi yang setiap harinya sangat sibuk dan terkadang harus lembur sampai malam menyelesaikan tugas yang belum terselesaikan di kantor. Sikap yang paling tepat Anda tunjukkan adalah...
///Mengikuti ronda pada hari yang saya bisa, meskipun hari itu bukan jadwal saya ronda
///Memilih membayar denda kepada ketua RT karena tidak bisa mengikuti ronda
///Meminta kepada seorang tetangga menggantikan saya dan memberinya imbalan
///Menepati jadwal ronda sebisa mungkin dengan mengatur penyelesaian pekerjaan harian saya
///Meminta agar diberikan jadwal ronda dimana saya tidak terlalu sibuk dan tidak ada lembur
///DEACB

///Anda adalah salah seorang jajaran direksi di perusahaan yang bergerak di bidang konveksi. Di perusahaan Anda sendiri terdiri dari karyawan dengan latar belakang suku, agama, dan budaya yang berbeda. Pada suatu saat, banyak karyawan muslim yang mengeluhkan sulitnya beribadah karena ketersediaan tempat atau pada jam beribadah mereka harus tetap bekerja. Sikap Anda sebagai salah satu jajaran direksi adalah...
///Memberikan kebijakan yang bersifat toleran dan menghargai karyawan
///Bersifat toleran dan menyediakan semua fasilitas ibadah karyawan
///Sudah menjadi aturan yang dipatuhi karyawan karena perusahaan milik seorang non-muslim
///Mendiskusikan dengan jajaran pimpinan dan pemilik perusahaan untuk dicari solusinya
///Akan memfasilitasi tempat untuk beribadah mereka di lingkungan perusahaan
///DEABC

///Anda bekerja di sebuah gerai makanan cepat saji di ibu kota, Hari ini daerah Anda resmi menjadi zona hijau dari Covid-19 dan gerai makanan diperbolehkan makan di tempat, sehingga hari itu sangat ramai dengan pengunjung. Saat sedang ramai-ramainya, tiba-tiba saudara Anda datang meminta tolong kepada Anda untuk mengantarkan ke stasiun karena tidak ada kerabat lain yang bisa mengantarkan. Sikap Anda adalah...
///Meminta saudara Anda untuk menunggu karena gerai sedang ramai lalu mengantarkan ke stasiun setelah gerai mulai sepi.
///Meminta tolong teman untuk mengantarkan saudara Anda karena gerai sedang ramai sehingga tidak bisa mengantarkan
///Menyarankan saudara Anda untuk naik angkutan umum atau ojek online menuju stasiun karena restoran sedang ramai
///Meminta izin pemilik restoran untuk mengantar saudara Anda ke stasiun
///Meminta izin pemilik restoran untuk mengantar saudara Anda ke stasiun karena tidak ada kerabat yang bisa mengantarnya
///CABED

///Kerabat dekat Anda baru saja meninggal dunia karena terpapar virus Covid-19. Sesuai peraturan Satuan Tugas (Satgas) Covid-19 di daerah Anda, tidak disarankan untuk mengadakan acara takziah dan doa di rumah karena dapat mengundang kerumunan dan berpotensi menularkan virus Covid-19. Anda dan keluarga besar sebenarnya ingin sekali mengadakan acara doa bersama di rumah. Yang sebaiknya Anda lakukan adalah...
///Mengadakan doa bersama di rumah hanya dengan keluarga besar saja
///Mengadakan doa bersama di rumah dengan membatasi jumlah hadirin
///Mengadakan doa bersama di rumah dengan menerapkan protokol kesehatan yang ketat
///Mengundang keluarga besar dan tetangga sekitar untuk mengadakan doa bersama secara virtual
///Mengundang keluarga besar dan semua yang mengenal almarhum untuk doa bersama secara virtual
///EDCAB

///Tetangga sebelah rumah Anda akan menyelenggarakan resepsi pernikahan putranya. Di masa pandemi, ketua RT mengeluarkan aturan bahwa resepsi pernikahan hanya boleh melibatkan tetangga dekat dan dihadiri oleh kerabat dekat. Anda diminta untuk membantu mengurus konsumsi bagi para hadirin. Di saat yang sama, Anda adalah seorang guru yang mendapat jam mengajar full daring dari pagi hingga sore pada hari itu. Sikap yang paling tepat Anda tunjukkan terhadap permintaan bantuan tersebut adalah...
///Menolak dengan halus dengan mengutarakan alasan bahwa jam mengajar full
///Meminta maaf kepada tetangga bahwa tidak bisa membantu karena mengajar daring
///Membantu sepenuh hati dengan mengganti jam mengajar hari itu di hari lain
///Membantu semampunya di saat jam istirahat mengajar atau setelah usai mengajar
///Membantu menyiapkan konsumsi sambil tetap mengajar lewat smartphone
///DCEBA

///Tetangga sebelah rumah Anda dikabarkan terpapar virus Covid-19 dan menjalani isolasi mandiri di rumah selama 7-14 hari. Keluarga tetangga Anda yang tidak terkena virus sementara tinggal di rumah mertua. Pada hari ke-5, tetangga Anda yang sedang isoman mengabari Anda melalui pesan bahwa keluarganya tidak bisa mengirim makanan. Sikap Anda adalah...
///Menunggu tetangga lain memberikan makanan kepada tetangga tersebut
///Diam saja dan berpura-pura tidak membaca pesan karena takut tertular virus Covid19
///Membelikan makanan dan memberikannya secara langsung kepada tetangga Anda
///Memesankan makanan lewat ojek online untuk langsung diantar ojek ke rumah tetangga
///Membuatkan makanan dan mengabari bahwa makanan sudah ditaruh di pagar
///ECDAB

///Anda adalah karyawan di suatu rumah sakit Provinsi X. Anda dari pagi sudah melayani banyak pengunjung untuk berobat. Menjelang jam pulang kantor, datang seorang pemuda dan menyampaikan keperluannnya. Pemuda tersebut ingin melakukan pengecekan kesehatan sebagai syarat untuk mengikuti seleksi calon taruna Akademi Militer. Hari itu adalah hari terakhir kesempatannya untuk mengurus persyaratan administrasi karena sorenya ia akan berangkat ke Magelang untuk mengikuti pantukhir. Saat itu Anda sudah merasa cukup lelah. Layanan keterangan kesehatan selain dilakukan pengecekan kondisi kesehatan yang dapat dilakukan selama 24 jam, namun harus disertai dengan surat keterangan kesehatan yang merupakan tugas dari tata usaha rumah sakit tersebut yang sudah tutup ketika pemuda tersebut dating. Hal yang akan Anda lakukan adalah…
///Menyampaikan kepada pemuda tersebut bahwa saya dapat membantunya dalam proses pengecekan kesehatan, namun tidak bisa menerbitan surat keterangan keschatannya yang menjadi kewenangan bagian tata usaha. Dia datang di saat kantor tata usaha rumahsakit sudah tutup sehingga tidak bisa mendapatkan surat keterangannya
///Menyampaikan bahwa saya tidak bisa melayaninya karena dia datang ketika layanan sudah ditutup untuk hari itu. Saya akan menanyakan alasan dia baru mengurusnya di saat yang cukup mendesak sehingga merepotkan dirinya dan orang lain yang berkaitan dengan kepentingannya tersebut.
///Menjelaskan bahwa saya bisa melakukan pengecekan kondisi kesehatannya namun tidak bisa menerbitkan surat keterangan kesehatan yang merupakan kewenangan bagian kantor tata usaha yang saat itu sudah tutup. Namun saya berusaha menghubungi rekan kerja saya di bagian tata usaha kesediaannya untuk datang ke kantor untuk membantu mengurus surat kesehatan bagi pemuda tersebut.
///Menjelaskan bahwa saya bisa membantunya dalam melakukan pengecekan kondisi kesehatannya, namun saya tidak bisa menerbitkan surat keterangan kesehatan karena merupakan kewenangan bagian tata usaha. Sehingga percuma saja bila melakukan pengecekan kesehatan tanpa surat keterangan kesehatan yang diperlukan untuk persyaratan administrasi seleksi taruna Akmil.
///Menjelaskan bahwa saya bisa membantunya dalam melakukan pengecekan kondisi kesehatannya, namun saya tidak bisa menerbitkan surat keterangan kesehatan karena merupakan kewenangan bagian tata usaha. Saya akan menyarankan untuk melakukan pengecekan kesehatan di klinik atau rumah sakit lain yang masih memberikan pelayanan
///CEDAB

///Anda adalah anggota divisi pengembangan aplikasi pelayanan masyarakat berbasis digital yang dikembangkan selama pandemi dan terus disempurnakan di era new normal. Selain dalam bentuk aplikasi, pelayanan ini juga dilakukan secara tatap muka di kantor untuk mengantisipasi jika ada kesulitan penggunaan aplikasi oleh masyarakat. Saat Anda bertugas di loket pelayanan, seseorang dengan membawa HPnya mengadu bahwa tidak berhasil mendaftar di aplikasi. Setelah Anda periksa, ternyata orang tersebut belum memasukkan kode yang dikirim via email, Yang Anda lakukan saat di loket pelayanan adalah...
///Tidak melayani orang tersebut karena masalah tersebut tergolong remeh dan menganggap semua orang bisa
///Mengarahkan kepada orang lain yang sedang antri agar diajari memasukkan kode yang sudah dikirim ke email
///Melayani dengan cepat tanpa memberitahukan langkah-langkah pendaftaran kepada orang tersebut
///Melayani dengan ramah seraya mengajari langkah-langkah pendaftaran kepada orang tersebut
///Melayani dengan memberikan tautan tentang tutorial pembuatan akun kepada orang tersebut
///DECBA



///Anda bekerja di Dinas Kependudukan Kota Y. Pada waktu semua pegawai kantor pulang dan di kantor hanya Anda yang sedang keluar dari kantor serta sekuriti yang sedang berjaga, datang sepasang suami istri dan meminta perubahan data kartu keluarga. Mereka ingin pergi ke luar daerah besok lusa menggunakan pesawat terbang dengan membawa bayi berusia satu tahun. Dikarenakan ada ketentuan dari maskapai penerbangan bahwa setiap anak yang diikutkan dalam penerbangan harus memiliki identitas berupa nama dalam kartu keluarga atau akta kelahiran. Hal yang akan Saya lakukan adalah...
///Menjelaskan kepada pasangan suami istri tersebut bahwa waktu pelayanan data kependudukan sudah ditutup karena mereka datang terlalu sore dan saya tidak bisa memberikan pelayan di luar ketentuan kantor
///Menjelaskan kepada pasangan suami istri tersebut mengenai waktu pelayanan kantor untuk data kependudukan serta persyaratan yang diperlukan untuk mendapatkan pelayanan.
///Mencoba menghubungi teman saya bagian pemuktakhiran data kependudukan untuk menanyakan posisi dia saat itu dan memintanya untuk kembali ke kantor sebentar untuk membantu pengurusan perubahan kartu keluarga pasangan suami istri tersebut.
///Menjelaskan kepada pasangan suami istri tersebut bahwa waktu pelayanan kantor untuk data kependudukan sudah tutup dan menyarankan datang kembali besok pagi dan meyakinkan perubahan kartu keluarga dapat selesai besok dengan cepat bila pengurusannya dilakukan pada saat jam kerja.
///Menghubungi atasan saya yang bertanggung jawab dalam hal pemuktakhiran data kependudukan dan meminta arahan untuk menangani keperluan pasangan suami istri tersebut.
///DBAEC

///Anda adalah seorang kepala bagian di sebuah instansi pemerintahan. Di era new normal, pemerintah mengubah pelaporan kinerja manual menjadi pelaporan kinerja secara digital yang dilakukan setiap akhir tahun. Bulan ini bulan Desember. Di tengah sibuknya Anda sebagai kepala bagian, yang Anda lakukan terhadap tugas pelaporan kinerja online yang harus segera diunggah tersebut adalah...
///Menugaskan anak buah untuk menyusun laporan kinerja online tersebut dan saya yang mengunggahnya
///Menyempatkan waktu untuk merekapitulasi catatan laporan kinerja bulan-bulan sebelumnya untuk segera diunggah
///Meminta file laporan kinerja dari rekan kerja yang sudah mengupload dan mengunggah file tersebut
///Meminta sekretaris bagian untuk membuat laporan kinerja sekaligus mengunggahnya
///Membentuk tim khusus untuk percepatan pembuatan laporan kinerja dengan saya sebagai koordinator
///BEDAC

///Ahmad bekerja di Kantor Badan Narkotika Nasional pada Kabupaten A. Pemerintah daerah setempat membuat peraturan bagi pasangan yang akan menikah harus memiliki surat keterangan bebas narkotika dan obat-obatan terlarang dan pemeriksaannya melalui kantor BNN. Dikarenakan ada kepercayaan bulan terbaik untuk menikah, sehingga jumlah pengunjung untuk melakukan pengujian urin bulan ini cukup banyak. Ketikakondisi ruang sudah penuh dengan orang yang mengantri, tiba-tiba datang seorang pemuda meminta ijin untuk mendahulukan dirinya dalam pengambilan sampel urin. Pemuda tersebut beralasan ingin mengurus administrasi pernikahannya di Kantor Urusan Agama setempat yang sebentar lagi akan tutup. Respon Ahmad yang tepat terhadap permintaan tersebut adalah....
///Memintanya untuk tetap mengantri dan menghormati yang lain sudah lama mengantri untuk menunggu giliran pengambilan sampel urin.
///Menjelaskan untuk mengikuti prosedur dan mengantri serta menjelaskan kepadanya proses pengambilan sampel urin tidak lama. Setelah selesai bisa langsung ke kantor KUA.
///Mengijinkankannya untuk didahulukan. Masalah mengurus admistrasi pernikahan di KUA tidak ada hubungannya dengan pelayanan kantor saya.
///Menasehatinya untuk membiasakan diri tertib dalam proses mendapatkan pelayanan dan jangan mengurus hal-hal yang berkaitan pelayanan umum secara mendadak karena pelayanan umum banyak orang yang membutuhkannya juga.
///Menanyakan kapan waktu menikahnya sehingga saya bisa menilai masih ada waktu baginya untuk mengurus administrasi pernikahannya di kantor KUA. Hal tersebut saya jadikan sebagai pertimbangan untuk mendahulukan dirinya.
///BACDE

///Anda seorang karyawan baru di sebuah lembaga penelitian kesehatan. Anda mendaftar beasiswa S-2 karena tuntutan lembaga yang ingin para karyawannya mendapatkan ilmu yang berkaitan dengan pengembangan vaksin Corona. Pada salah satu syarat beasiswa, Anda mendapat tugas untuk menulis esai tentang rencana kontribusi setelah lulus dari perkuliahan. Anda sebelumnya tidak mahir menulis, yang Anda lakukan adalah...
///Meminta tolong teman yang pandai dalam menulis untuk membuatkan esai tersebut dan membayarnya
///Membatalkan pendaftaran beasiswa karena melihat syarat yang berat dan tidak bisa saya penuhi
///Menulis esai dengan mencari referensi penulisan esai yang baik dengan sesekali meminta bimbingan teman yang lolos tahun sebelumnya
///Meminta file esai rekan yang telah lolos beasiswa tahun sebelumnya untuk digunakan ulang
///Meminta kebijakan kepada lembaga agar diadakan latihan kepenulisan esai khusus beasiswa
///CEADB


///Budi merupakan seorang costumer service pada sebuah Bank X yang dipercaya dalam pencairan dana bantuan sosial bagi masyarakat terdampak Covid-19. Saat itu banyak nasabah umum dan penerima bansos mengantri, datang seorang calon nasabah yang akan membuka rekening menggunakan jaket pangkalan ojek meminta didahulukan karena ia harus segera mengojek untuk memenuhi kebutuhan keluarganya yang sedang mengalami masalah keuangan akibat dampak pandemi Covid-19. Sikap Budi seharusnya adalah...
///Memintanya untuk mengambil nomor antrian dan duduk di kursi tunggu untuk mengantri seperti nasabah lainnya. 
///Menyetujui permintaannya dan memintanya untuk bersabar mengantri karena semua nasabah yang datang memiliki hak yang sama dan harus mengikuti prosedur untuk mendapatkan layanan perbankan.
///Memanggil sekuriti untuk mengarahkan orang tersebut dan tertib mengikuti prosedur pembukaan rekening bagi penerima bansos terdampak covid-19.
///Menjelaskan bahwa semua nasabah memiliki hak yang sama dan meminta menghargai nasabah lain yang datang lebih awal dan sudah bersedia mengantri lama.
///Menjelaskan bahwa orang tersebut harus mengantri seperti nasabah lainnya. Semua orang pasti tidak ada yang ingin mengantri, namun sudah menjadi ketentuan dalam mendapatkan layanan perbankan. Semua orang yang mengantri juga memiliki urusan masing-masing yang harus diselesaikan.
///EDABC

///Cecep bekerja di sebuah maskapai penerbangan sebagai ground staff yang dimana salah satu tugas Anda adalah memberikan pelayanan pada kostumer pengguna jasa penerbangan. Ketika waktu check in penumpang, ada seorang penumpang yang tidak masuk pesawat setelah beberapa kali dipanggil hingga panggilan terakhir. Namun, ketika Anda meninggalkan pesawat dan menuju ke gate keberangkatan, penumpang tersebut baru muncul dan menjelaskan bahwa ia tidak mendengar panggilan terakhir saat boarding pass karena sedang asyik berkeliling melihat toko-toko penjual pernak pernik cenderamata. Sikap Cecep yang tepat adalah...
///Mengingatkannya untuk tidak mengulanginya kembali, seharusnya dia memperhatikan waktu keberangkatan dan sudah berada di gate boarding 15 menit sebelum berangkat. Saya segera mengantarnya ke pesawat.
///Segera mengantarnya ke pesawat sembari menghubungi crew cabin untuk memastikan pesawat belum berangkat
///Menyuruh staf lain datang untuk mengantarnya ke pesawat karena saya masih ada tugas lain yang harus dikerjakan dan menunjukkan jalur menuju ke pesawat bila ia ingin ke pesawat sendiri tanpa menunggu staf maskapai.
///Menanyakan alasan dia tidak mendengar panggilan boarding pass terakhir dan seharusnya dia sudah ada di boarding gate 15 menit sebelum waktu masuk pesawat.
///Mengantarnya ke pesawat sambil menjelaskan prosedur naik pesawat serta persiapan sebelum berangkat agar ia tidak mengulanginya lagi ketika dalam penerbangan lain. Menurut saya, orang tersebut belum terbiasa naik pesawat sehingga tidak mengetahui prosedurnya dan saya harus bersabar melayaninya
///BEDAC

///Bulan ini kantor Anda resmi menerapkan Work From Office (WFO) 100% setelah seluruh pegawai divaksin lengkap. Sebagai bentuk kesiapsiagaan, kantor tetap memberlakukan aturan untuk selalu memakai masker selama beraktivitas di kantor. Setelah satu bulan WFO, rekan satu ruangan Anda terlihat jarang memakai masker. Jikapun memakai, hanya sampai di dagu. Sikap yang sebaiknya Anda tunjukkan kepada rekan tersebut adalah...
///Memarahi rekan kerja tersebut dan meminta untuk memakai masker selama di kantor
///Membiarkan saja toh semua pegawai sudah divaksin, sehingga tidak akan tertular virus lagi
///Memberikan pengertian secara baik-baik pentingnya tetap memakai masker meskipun sudah divaksin
///Melaporkan kepada atasan agar rekan kerja tersebut dipindah ruangannya
///Mentraktimnya makan di restoran dengan syarat mau memakai masker selama bekerja di kantor
///CEDBA

///Anda sudah 10 tahun bekerja di sebuah perusahaan. Di tengah upaya perusahaan bangkit dari hantaman pandemi, Anda mendapatkan email tentang lowongan pekerjaan dari perusahaan lain dengan gaji berkali lipat dari gaji di perusahaan Anda sekarang. Perusahaan tersebut menawarkan proyek pembangunan wisata megah dengan mengubah paksa tanah adat milik sebuah suku di daerah tersebut. Setelah Anda mencari informasi, ternyata perusahaan tersebut juga ilegal. Keputusan yang Anda ambil adalah...
///Menimbang terlebih dahulu baik buruknya, kemudian memutuskan diambil atau tidak
///Meminta pendapat orang terdekat terlebih dahulu terkait gaji yang ditawarkan
///Mengambil tawaran tersebut karena merasa perusahaan saya akan kolaps
///Membiarkan email tawaran pekerjaan tersebut dan jika perlu lapor kepada pihak berwajib
///Membiarkan dulu email tawaran, lalu menerima tawaran jika sedang butuh uang yang mendesak
///DABEC

///Anda disiapkan menjadi ASN di era new normal. Pandemi menyebabkan perubahan di segala bidang terutama penggunaan teknologi dalam menjalankan birokrasi. Di era new normal nanti dimana akan sangat erat berdampingan dengan teknologi, Anda akan menjadi ASN yang...
///Mampu meningkatkan literasi digital dan dengan cepat beradaptasi dengan perkembangan teknologi
///Sanggup belajar menggunakan teknologi baru jika ada yang mengajari dan memberikan tutorial
///Tetap dengan kemampuan IT yang sudah ada seperti pertama kali diterima sebagai CASN
///Memiliki stabilitas dalam pekerjaan karena tidak semua perubahan teknologi dampaknya baik
///Mengikuti tradisi di kantor karena teknologi akan merubah kebiasaan yang sudah baik
///ADBEC

///Anda adalah seorang pimpinan di sebuah perusahan masker. Sebuah perusahaan dari daerah kecil menawarkan kepada Anda untuk membuat produk masker ramah lingkungan yang terbuat dari bahan alam. Keunggulan yang ditawarkan adalah limbah masker habis pakai dapat dengan mudah terurai oleh mikroorganisme. Anda melihat peluang kerja sama tersebut sebagai...
///Tawaran yang membuat target pasar dari produk masker menjadi lebih spesifik
///Tawaran yang akan mengganggu kestabilan penjualan produk masker yang telah ada
///Tawaran yang akan membuat perusahaan saya mendapat untung berkali lipat karena berbasis inovasi
///Tawaran yang akan membuat perusahaan saya mengeluarkan biaya lebih untuk bahan baku dari alam
///Tawaran yang akan menghasilkan nilai tambah produk masker karena bersifat ramah lingkungan
///ECADB

///Anda adalah ASN yang ditugaskan dan tinggal di sebuah desa yang jauh dari kota Pekan lalu, terjadi kasus pertama positif Covid-19 di desa Anda dan sedang menjalani isolasi mandiri. Desa Anda belum mendapat jatah vaksin karena akses yang jauh dari kota. Sebagai ASN yang cukup berpengaruh di lingkungan tempat tinggal Anda, upaya yang dapat Anda lakukan adalah...
///Membiarkan saja, toh warga desa jarang bepergian ke kota sehingga kemungkinan terjadi kasus lagi kecil
///Waspada seraya menunggu kepala desa mengumumkan jadwal vaksinasi di desanya
///Mengumpulkan warga di aula desa untuk sosialisasi tentang pentingnya vaksinasi
///Mengajak seluruh warga desa beramai-ramai ke rumah sakit di kota untuk mendapat vaksin
///Mengajak kepala desa melapor ke rumah sakit di kota agar desanya segera mendapatkan jadwal vaksinasi
///EBDCA

///Dedi bekerja di service center sebuah perusahaan elektronik merk ternama dimana barang-barang produksinya cukup diminati dan termasuk produk berkelas premium. Ada seorang kostumer datang dan mengajukan keluhan atas kerusakan handphone yang ia beli. Orang tersebut mengatakan, barangnya cepat rusak dan tidak berkualitas. Namun, Dedi melihat kerusakan handphone tersebut cukup parah, terlihat retak karena jatuh dan Dedi berpikir bahwa kerusakan tersebut karena kelalaian saat pemakaian. Respon Dede terhadap keluhan tersebut yang tepat adalah….
///Menerima keluhan tersebut dan menyampaikan kepada kostumer tersebut untuk dicek terlebih dahulu oleh bagian teknisi untuk memastikan kerusakan serta penyebab kerusakannya. Saya juga akan menjelaskan syarat dan ketentuan garansi, bahwa kerusakan oleh kelalaian saat pemakaian tidak ditanggung oleh perusahaan
///Menyampaikan kepada pelanggan tersebut bahwa kerusakan pada handphone tersebut disebabkan oleh kelalaian dalam penggunaan dan tidak bisa ditanggung oleh perusahaan. Saya akan menjelaskan prosedur dan persyaratan untuk mengajukan komplain serta bentuk kerusakan yang dapat dilayani oleh perusahaan, tidak semua kerusakan dapat diajukan sebagai keluhan yang harus diperbaiki atau diganti dengan yang baru.
///Menolak pengajuan keluhan tersebut karena dari tampilan dan bentuk fisik handphone tersebut menunjukkan kerusakan yang disebabkan oleh kelalaian pemakai sehingga tidak termasuk jenis kerusakan yang ditanggung untuk diperbaiki atau diganti dengan yang baru.
///Menanyakan kepada kostumer tersebut kondisi pemakaian sehingga menyebabkan handphone tersebut mengalami kerusakan yang sangat fatal seperti itu. Saya juga akan memastikan bahwa kerusakan tersebut tidak dapat diterima karena dari fisiknya terlihat karena adanya pemakaian yang tidak sewajarnya.
///Memanggil bagian teknisi untuk melihat langsung dan menjelaskan kepada ibu tersebut mengenai kerusahakan tersebut guna memastikan bahwa kerusakan tidak masuk dalam jenis kerusakan yang akan ditanggung oleh perusahaan. Teknisi pasti akan sangat paham bahwa kondisi handphone tersebut rusak karena pemakaian yang tidak wajar.
///AEBDC

///Eko bekerja di bagian informasi layanan stasiun bus antar kota. Ketika menjelang lebaran, arus mudik cukup besar sehingga banyak calon penumpang menunggu di area tunggu sehingga cukup sesak. Saat itu juga kipas jenis industrial fan yang digunakan rusak sehingga kondisinya panas. Beberapa calon penumpang mendatangi Eko di ruang bagian pusat informasi untuk menyampaikan kondisi kipas yang rusak. Tindakan Eko terhadap keluhan tersebut adalah...
///Tidak akan memperdulikannya karena kerusakan fasilitas merupakan tanggung jawab bagian fasilitas dan maintenance sehingga saya tidak ingin tugas utama saya sebagai penyedia informasi layanan terbengkalai.
///Melihat langsung kondisi kipas yang rusak dengan meninggalkan ruangan pusat informasi guna memastikan kerusakan yang terjadi serta ketidaknyamanan calon penumpang.
///Menyarankan orang yang menyampaikan keluhan tersebut untuk ke bagian pengaduan fasilitas dan perawatan untuk mendapatkan tindakan perbaikan.
///Menyampaikan kepada orang yang menyampaikan keluhan tersebut bahwa masalah fasilitas dan kerusakan bukan menjadi tanggung jawab saya.
///Menyampaikan keluhan tersebut kepada bagian fasilitas dan maintenance untuk memeriksa kondisi kipas sehingga diperbaiki.
///EBCDA

///Ayah Fitri sedang dirawat di sebuah rumah sakit dan kondisinya kritis. Setelah selesai jam kerja, Fitri hendak menjenguk Ayah Fitri di rumah sakit menggunakan mobil. Saat di jalan satu arah, ada pengendara mobil di depan Fitri mengambil posisi di tengah jalan dengan laju yang sangat lambat. Fitri merasa perlu menyalip mobil karena mobil tersebut terlalu lambat, namun tidak ada ruang untuk melewati mobil tersebut karena berjalan di tengah-tengah jalan. Fitri sudah membunyikan klakson beberapa kali, namun mobil tersebut tetap berjalan di bagian tengah jalan. Sikap Fitri yang paling tepat adalah….
///Mengendarai mobil saya dibelakang mobil tersebut dengan sabar karena hal yang lebih diutamakan adalah saling memahami antara satu sama lain, namun bila pengendara tersebut tidak bisa memahaminya maka saya harus mengalah.
///Membunyikan klakson beberapa kali agar bisa didengar oleh pengendara mobil tersebut, mungkin ia tidak mendengar saat bunyi klakson sebelumnya.
///Berusaha membunyikan Klakson panjang secara terus menerus agar pengendara mobil tersebut menyadari bahwa di belakangnya ada pengendara lain yang ingin cepat karena dalam kondisi darurat.
///Berusaha mencari jalan alternatif lain agar bisa sampai ke rumah sakit lebih cepat.
///Mencoba mengambil posisi sebelah kanan dengan membunyikan klakson agar terlihat oleh pengedara mobil tersebut lewat kaca spionnya sehingga ia bis amenepi ke kiri dan saya bisa melewatinya.
///DECBA

///Ketika Gio berangkat kerja dengan mengendarai sepeda motor. Saat melewati sebuah ruas jalan, Gio melihat beberapa remaja yang berseragam putih abu-abu sedang nongkrong di halte depan sebuah sekolah sambal mengisap rokok. Pada saat itu menunjukkan pukul 07.35, mereka harusnya sudah masuk sekolah dan belajar bersama teman-temannya yang lain. Sikap Gio seharusnya adalah...
///Berhenti menanyakan kepada mereka kenapa masih nongkrong di luar sekolah padahal sudah waktunya masuk sekolah dan belajar di kelas dan bila memungkinkan saya akan menemani mereka masuk ke sekolah.
///Berhenti dan memberi nasehat kepada mereka untuk segera ke sekolah karena sudah waktu masuk sekolah dan belajar di kelas.
///Mampir ke sekolah anak-anak tersebut dan menanyakan kepada guru piket apakah di sekolah ada kegiatan lain sehingga kegiatan belajar mengajar diliburkan. Saya juga akan menyampikan bahwa ada anak didiknya nongkrong di halte depan sekolah.
///Meneruskan perjalanan ke kantor. Kemungkinan sekelompok remaja tersebut telat ke sekolah dan tidak bisa masuk sekolah karena gerbang sekolah sudah ditutup oleh petugas sekuriti.
///Meneruskan perjalanan ke kantor. Menurut saya menasehati remaja seperti itu percuma saja karena mereka memang pelajar yang susah diatur dan suka bolos sekolah dan untuk mendidik mereka adalah tanggung jawab orang tua dan gurunya.
///BCADE

///Hamid adalah seorang pimpinan sebuah divisi di kantonya. Saat Hamid ada lembur di kantor dan dilanjutkan rapat sehingga Hamid sampai rumah sudah larut malam. Ketika akan tidur dan istrahat, ada sekelompok pemuda di pos ronda depan rumah bernyanyi yang diiringi petikan gitar, sekali-sekali mereka becanda, tertawa dan teriak. Hal tersebut membuat Anda cukup terganggu dan tidak bisa tidur. Sikap Hamid menghadapi kondisi tersebut adalah...
///Berusaha tidur dan menenangkan diri meskipun sekelompok pemuda tersebut ribut karena mereka sudah terbiasa seperti itu tiap malam, namun biasanya saya tetap bisa tidur dengan lelap.
///Mendatangi kelompok pemuda tersebut untuk mengingatkan bahwa kebiasaan mereka cukup mengganggu warga sekitar dan mem inta untuk merubah kebiasaan buruknya tersebut.
///Mendatangi mereka untuk meminta mereka untuk tidak membuat suasana yang mengganggu ketenangan warga setempat beristrahat pada waktu larut malam.
///Mendatangi mereka untuk memarahi mereka dan mengatakan bahwa aktivitas mereka mengganggu waktu istrahat saya dan warga lain di sekitar pos ronda.
///Mendatangi mereka untuk meminta mereka untuk pulang ke rumah masing-masing dan menyarankan mereka untuk mencari aktivitas lain yang lebih produktif.
///EBDCA

///Pada suatu hari Anda berjalan-jalan dan tanpa sengaja menabrak orang di depan Anda sampai hampir jatuh. Anda langsung meminta maaf, namun ternyata orang yang Anda tabrak tidak terima dan malah berbalik marah-marah hingga mengeluarkan kata-kata yang tidak pantas. Tindakan yang Anda ambil adalah...
///Mengatakan padanya bahwa kemarahan yang ditujukan pada saya itu berlebihan dan tidak pantas.
///Membiarkan saja meskipun saya dipermalukan di muka umum.
///Saya menjaga perasaan saya agar tetap tenang agar tidak terpancing emosi.
///Meninggalkan orang tersebut agar masalah tidak berkepanjangan.
///Saya mengajak orang tersebut ke tempat sepi agar tidak menarik perhatian orang banyak
///CBDEA

///Saya hendak mengikuti ujian akhir semester, namun tiba-tiba saya tidak bisa hadir karena sakit dan dosen saya tidak menawarkan untuk melakukan ujian kembali, sikap saya...
///Saya mungkin akan mengikuti ujian susulan jika diadakan.
///Cuek saja, toh dosennya tidak menawarkan ujian susulan.
///Saya menghadap dosen untuk meminta ujian susulan.
///Saya menyadari bahwa saya mungkin tidak akan lulus jika tidak mengikuti ujian.
///Seharusnya dosen tahu bahwa saya sakit sehingga tidak bisa mengikuti ujian.
///CDEAB

///Karena prestasi saya di perusahaan, perusahaan lain menawari saya untuk bekerja di sana dengan gaji yang lebih besar dari perusahaan tempat saya bekerja saat ini. Sikap saya....
///Mendiskusikan tawaran tersebut dengan keluarga
///Sesegera mungkin menerima tawaran tersebut
///Menolak tawaran tersebut karena saya menyukai pekerjaan saya sekarang
///Menyampaikan tawaran tersebut pada rekan kerja saya
///Meminta kenaikan gaji hingga setara dengan gaji yang ditawarkan perusahaan tersebut
///CADEB

///Anak saya sedang sakit demam dan perlu dibawa ke dokter untuk diperiksa kesehatannya, tetapi tanggal pembayaran gaji saya masih beberapa hari lagi. Sikap saya....
///Mencari pekerjaan sampingan untuk mendapatkan uang
///Mencari pinjaman uang pada rekan kerja
///Mencari pinjaman uang pada orang tua atau keluarga
///Mendesak atasan untuk membayarkan gaji lebih awal
///Merawat sendiri anak saya dan batal membawanya ke dokter
///CBDAE

///Sejumlah karyawan di perusahaan tempat saya bekerja menyampaikan ketidakpuasannya kepada saya mengenai masalah peraturan pimpinan dan kesejahteraan. Sikap yang seharusnya saya lakukan adalah...
///Saya harus mendukung kebanyakan pendapat rekan kerja.
///Seharusnya pimpinan segera bertindak mengatasi masalah ini.
///Saya akan menyampaikan saran kepada pimpinan bagaimana memperbaiki iklim kerja menjadi lebih positif
///Mengajak rekan-rekan untuk introspeksi diri, berpikir, dan berbuat positif demi memajukan perusahaan 
///Iklim kerja di perusahaan tempat saya bekerja memang sudah seperti itu dan susah untuk diubah.
///CDBEA

///Menurut kabar yang saya dengar, bulan depan akan ada pergantian atasan di unit saya bekerja. Calon atasan saya yang baru tersebut sangat disiplin, banyak menuntut bawahan untuk mengejar target, serta tidak dapat mentoleransi kesalahan kerja. Ini bertolak belakang dengan atasan saya yang sekarang. Sebagai calon bawahannya sikap saya adalah...
///Menutupi kesalahan kerja sebelumnya agar tidak diketahui atasan yang baru.
///Mengubah perilaku kerja yang tidak efektif selama ini agar diperhatikan oleh atasan yang baru.
///Menggalang dukungan sosial dengan rekan kerja yang lain agar kompak menghadapi atasan yang baru.
///Menerima keberadaan atasan yang baru tersebut dengan menunjukkan perilaku kerja yang sesempurna mungkin.
///Menerima atasan baru sewajarnya, menyesuaikan gaya kerja jika diperlukan.
///EDCBA

///Anda akan berangkat untuk mengikuti suatu tes seleksi di sebuah perusahaan. Di tengah perjalanan, motor yang Anda kendarai tiba-tiba mengalami pecah ban. Untuk memperbaiki ban tersebut, Anda membutuhkan waktu selama 10 menit, padahal waktu tes Anda tinggal 15 menit lagi. Jarak ke tempat tes masih 2 kilometer. Jika Anda naik angkot akan membutuhkan waktu selama 10 menit dan disekitar Anda tidak ada tukang ojek, reaksi Anda...
///Saya akan menuntun motor ke bengkel kemudian naik angkot.
///Saya akan menitipkan motor ke rumah penduduk terdekat kemudian segera naik angkot.
///Saya akan menitipkan motor ke rumah penduduk kemudian menelepon salah seorang teman untuk menjemput dan mengantar saya ke tempat tes.
///Saya akan menunggu ban saya dibetulkan di bengkel dengan harapan waktu menambal ban bisa lebih cepat.
///Saya akan membatalkan ikut tes karena mempertimbangkan dengan apa pun saya akan terlambat sampai di tempat tes dan kemungkinan diperbolehkan ikut tes sangat kecil.
///BACDE

///Seandainya Anda satu tim dengan Gita dan Anda tidak setuju dengan keputusannya, apa yang Anda lebih pertimbangkan ketika akan menyatakan sikap Anda...
///Mempertimbangkan konsekuensi pada x dan y, karena itu harus menyatakan dengan sikap yang terbuka.
///Mempertimbangkan konsekuensinya bagi diri sendiri, bisa jadi teman satu tim akan jengkel pada Saya.
///Mempertimbangkan konsekuensinya pada kekompakan tim, karena itu lebih baik menyatakan sikap secara tidak langsung.
///Mempertimbangkan konsekuensinya pada x dan y, karena itu harus berani mengambil alih keputusan dari Gita,
///Mempertimbangkan konsekuensinya pada kelompok tim kerja, bila perlu memberi toleransi pada kesalahan Gita.
///ACEDB

///Di tempat Anda bekerja, ada banyak rekan kerja yang berasal dari latarbelakang berbeda-beda. Namun demikian mereka adalah orang yang sangat ramah kepada Anda dan dapat diajak untuk bekerja sama dalam menyelesaikan pekerjaan di kantor. Mereka semua punya etos kerja yang tinggi. Suatu ketika, Anda mengetahui bahwa salah seorang dari teman Anda merupakan anggota dari ormas yang dianggap radikal oleh pemerintah dan telah dinyatakan dibubarkan keberadaannya oleh pihak pemerintah. Sikap yang Anda lakukan terhadap teman Anda adalah....
///Melakukan diskusi untuk menemukan letak kesalahan atas paham dari organisasi yang diikutinya.
///Mengajak rekan yang lain untuk berhati-hati pada orang tersebut
///Menghindarinya agar tidak terpengaruh atas paham radikalnya.
///Mengingatkan orang tersebut bahwa organisasinya berbahaya bagi negara
///Menyadarkan bahwa paham dari organisasinya  memiliki dampak yang berbahaya bagi diri, masyarakat dan negara
///EDABC

///Indonesia adalah sebuah negara kesatuan. Segala hal yang dapat merusak keutuhan negara merupakan hal yang sangat dilarang dan termasuk paham-paham radikal yang diduga dapat merusak keutuhan negara. Di dalam keluarga, salah seorang adik Anda terpapar paham radikal oleh organisasi tertentu. Orang tua telah mengingatkan berulang kali namun tetap saja menganggap bahwa dirinya sudah benar. Adik Anda adalah salah seorang siswa di sekolah tempat anda mengajar, sebagai seorang guru, tindakan yang baik terhadap adik Anda adalah....
///Mengingatkan bahwa paham yang dianutnya berbahaya
///Melakukan pengawasan terhadap teman bergaulnya.
///Melaporkan hal tersebut kepada orang tua
///Melakukan penguatan terhadap pemahaman Pancasila di sekolah.
///Mengajarkan pada pemahaman agama yang lurus.
///DEBAC

///Iksan adalah seorang resepsionis dalam sebuah perusahaan yang bergerak dalam bidang otomotif. Perusahaan tersebut memberikan garansi service gratis bagi pelanggan yang membeli mobil selama 2 tahun masa penggunaan. Namun untuk memperoleh layanan service gratis tersebut, terlebih dahulu pelanggan harus melakukan pendaftaran melalui aplikasi online yang telah dibuat oleh divisi IT perusahaan. Suatu ketika, ada seorang pelanggan yang datang kepada Iksan karena kebingungan dalam menggunakan aplikasi sementara mobilnya butuh segera di service karena telah mencapai batas standar untuk service. Wajahnya tampak kurang bersahabat karena sejak pagi mencoba untuk mendaftar melalui aplikasi namun tidak berhasil juga. sikap Iksan terhadap pelanggan tersebut adalah...
///Berusaha membantu dengan ramah untuk melakukan pendaftaran online agar mobilnya segera di service
///Meminta pelanggan dengan ramah untuk bersabar dulu sambil anda membantunya mendaftar online.
///Membiarkan pelanggan tersebut mencoba terus karena itu bukan menjadi pekerjaan Anda
///Meminta pelanggan dengan ramah untuk segera kebagian IT agar dapat segera mendaftar secara online
///Menerima keluhan pelanggan secara ramah dan menghubungi bagian IT untuk menyelesaikan masalah berdasarkan keluhan pelanggan
///EDBAC

///Rumah sakit tempat Jafar bekerja melayani pasien dalam jumlah besar. Rata-rata pasien tersebut divonis terpapar virus Covid-19 berdasarkan hasil tes SWAB massal yang dilakukan oleh dinas kesehatan. Karena jumlah pasien yang banyak mengakibatkan Jafar harus bekerja lebih dari jam kerja pada umumnya. Selain dari masa kerja Jafar bertambah dalam sehari, ia juga dituntut untuk bekerja ekstra dalam melayani pasien. Di saat ia bekerja melayani seorang pasien, tiba-tiba keluarganya datang dan meminta secara paksa agar pasien tersebut tidak diisolasi dan segera dibawa pulang kembali kerumahnya. Sementara itu, kebijakan rumah sakit menyatakan bahwa setiap pasien yang positif harus diisolasi di rumah sakit selama 14 hari. Tindakan yang Jafar lakukan terhadap keluarga korban adalah....
///Meminta satuan pengamanan rumah sakit untuk mengamankan keluarga korban karena berbahaya bagi pasien
///Melaporkan kejadian tersebut kepada dokter yang menjadi kepala rumah sakit tersebut
///Menutup ruang isolasi agar tidak dapat dimasuki oleh keluarga pasien sehingga penyebaran virus dapat dicegah
///Menjelaskan akibat yang dapat ditimbulkan kepada keluarga pasien jika pasien di bawah pulang ke rumah
///Menjelaskan kepada keluarga pasien bahwa pasien diisolasi demi keselamatan pasien, keluarga dan masyarakat lainnya 
///EDBCA

///Hasan adalah seorang karyawan di sebuah perusahaan mebel yang terkenal di Kabupaten Konawe Selatan. Ia telah bekerja selama kurang lebih 10 tahun di perusahaan tersebut. Perusahaan telah memperkerjakan karyawan lebih dari 400 orang dan telah memiliki cabang di beberapa daerah di Indonesia. Suatu ketika, dua rekan Hasan saling berseberangan karena masalah pribadi yang kemudian berdampak pada retaknya hubungan antara kedua temannya itu. Akibatnya, kinerja dalam perusahaan di bagian divisi yang ditempati Hasan menjadi kurang lancar. Hal ini disebabkan karena kedua rekannya tersebut sulit untuk berkomunikasi dengan baik. Tindakan yang harus dilakukan Hasan sebagai rekan kerja adalah...
///Melaporkan kedua temannya tersebut ke pihak direktur untuk kemudian diberikan peringatan
///Melaporkan kedua temannya tersebut ke pihak komisi disiplin perusahaan agar diberi sanksi supaya tidak terulang lagi dan menjadi pelajaran bagi karyawan lain
///Mengacuhkan permasalahan tersebut karena itu merupakan masalah pribadi dan tidak ada kaitannya dengan perusahaan
///Menyampaikan kepada kedua temannya itu bahwa tindakannya dapat memperburuk kinerja perusahaan dan berbahaya bagi karir mereka
///Mengajak kedua temannya itu untuk bertemu bertiga dengan melakukan pendekatan persuasif dan mencari solusi dari masalah tersebut.
///EDCBA

///Hasim baru-baru saja diterima sebagai pegawai negeri sipil di sebuah instansi pemerintahan di Kota Kendari.  Ia adalah lulusan sarjana Informatika dan telekomunikasi serta memiliki prestasi yang baik di bidang programmer. Setiap hari ia datang tepat waktu dan pulang sesuai jam yang ditentukan oleh kantor tersebut. Sebagai orang baru dalam lingkungan tersebut, ia belum mengenal baik dan mengetahui karakter rekan kerjanya. Ia ditempatkan sebagai pengelola data di kantor tersebut. Suatu ketika, salah seorang dari rekannya memiliki masalah pada program di laptop pribadinya dan masalah tersebut tidak berkaitan dengan kepentingan kerja kantor. Sikap Hasim sebaiknya terhadap rekan kerjanya adalah....
///Bersikap biasa saja karena belum terlalu mengenal dan mengetahui karakter teman kerjanya dan tidak diminta bantuannya
///Mengabaikan masalah tersebut dan mengutamakan pekerjaan kantor
///Meminta temannya untuk membawa laptop ke service center agar dapat segera diperbaiki
///Membantu menyelesaikan masalah temannya terkait program di laptopnya agar dapat segera digunakan
///Menyelesaikan pekerjaan kantor kemudian menawarkan bantuan kepada rekannya terkait masalah program dilaptopnya
///EDCAB

///Akbar bertugas sebagai kepala satuan polisi lalu lintas di Kabupaten Bau-Bau. Sebagai seorang polisi Akbar memegang teguh sumpah dan tanggung jawab yang diemban. Ia setiap hari melakukan patroli terhadap anggota yang mengatur lalu lintas di jalan raya. Hal ini dilakukan untuk memastikan bahwa setiap pengguna jalan raya mematuhi tertib lalu lintas sesuai dengan petunjuk dan aturan. Namun demikian, ketika ia mengawasi timnya yang berpatroli di lampu merah, tiba-tiba bawahan Akbar memberhentikan seorang pengendara motor yang melanggar lampu lalu lintas. Ia tetap melaju ketika lampu merah sedang menyala. Ketiak diperiksa, orang itu tidak membawa STNK yang berujung pada penilangan. Ternyata orang tersebut adalah orang tua Akbar yang sedang ingin ke apotek untuk membeli obat bagi anaknya sendiri, tindakan yang sebaiknya Akbar lakukan terhadap situasi tersebut adalah....
///Memberitahukan kepada bawahan untuk meminta Bapak anda kembali mengambil STNK nya di rumah kemudian melanjutkan perjalanan karena anak anda sedang sakit
///Mengingatkan kepada Bapak agar membawa SIM dan STNK jika ingin berkendara dan memberi kesempatan untuk melanjutkan perjalanan membeli obat untuk anak anda
///Menahan motor meskipun yang memakainya adalah Bapak anda dan membuat surat tilang serta meminta anggota untuk mengantar bapak anda membeli obat di apotek
///Menahan SIM bapak anda dan membuat surat tilang dan meminta bapak anda untuk melanjutkan perjalanan  membeli obat di apotek
///Menelpon istri untuk membawakan STNK kepada Bapak anda kemudian setelah itu meminta bapak anda melanjutkan perjalanan bila telah memperoleh STNK.
///DCEBA

///Anda bekerja dalam sebuah perusahaan yang bergerak dalam bidang otomotif. Anda ditempatkan di bagian pelayanan service, Anda juga memahami tentang teknologi informasi perusahaan bahkan anda memilik kompetensi yang baik di bagian IT. Hal tersebut dikarenakan posisi Anda sebelumnya adalah di bagian IT perusahaan. Suatu ketika, rekan kerja anda bertanya kepada anda mengenai penggunaan sistem kehadiran berbasis online yang baru di perusahaan yang dianggap rumit pengelolaannya dan anda memahami cara pengelolaan dan penggunaan sistem kehadiran yang baru tersebut. Akan tetapi pada saat yang bersamaan, anda masih memiliki pekerjaan di bagian layanan service. Tindakan yang sebaiknya anda lakukan terhadap teman Anda adalah....
///Membantu dan memberi petunjuk kepada rekan anda mengenai penggunaan sistem kehadiran berbasis online tersebut kemudian melanjutkan pelayanan di bagian service.
///Meminta teman anda untuk menunggu sejenak setelah menyelesaikan pekerjaan di bagian pelayanan service kemudian membantunya
///Menyampaikan kepada teman anda untuk segera menghubungi bagian IT kemudian melanjutkan pekerjaan anda di bagian pelayanan service
///Menyampaikan kepada teman Anda dengan cara yang sopan dan meminta maaf bahwa hal tersebut bahkan bagian dari pekerjaan anda lagi
///Tetap melanjutkan pekerjaan anda di bagian layanan service sebagai bagian dari professionalisme kerja anda dan mengacuhkan permintaan teman Anda.
///CBADE

///Dalam kondisi pandemi seperti saat ini, masyarakat dilarang berkerumun demi memutus penyebaran mata rantai penyebaran Covid-19. Hal ini menjadi tantangan tersendiri bagi layanan umum dalam menjalankan pekerjaannya untuk memastikan bahwa layanan publik tetap dapat berjalan. Yusuf bekerja sebagai seorang karyawan di sebuah perusahaan telekomunikasi. Setiap hari di perusahaan tersebut dipenuhi oleh warga yang datang untuk memperoleh layanan terkait keluhan atas masalah telekomunikasi yang dialaminya. Hal ini menjadi masalah besar bagi perusahaan karena telah mengundang kerumunan. Dengan demikian perusahaan dapat memperoleh sanksi terkait masalah tersebut. Tindakan Yusuf sebagai karyawan di perusahaan tersebut adalah...
///Memastikan protokol kesehatan tetap terjaga dengan menggunakan masker dan jaga jarak.
///Membuat website untuk layanan laporan terkait telekomunikasi dan mengupload video tutorial penggunaan melalui YouTube
///Membuat nomor antrian dan meminta kepada masyarakat untuk datang ke bagian pelayanan berdasarkan nomor antrian
///Membuat website untuk layanan laporan masalah terkait telekomunikasi dan langkah-langkah penggunaannya di website secara tertulis
///Membuat kotak layanan masalah bagi masyarakat di depan perusahaan 
///BDECA

///Sebuah sekolah selalu mengalami masalah dengan pengamanan data penting. Salah satu masalah yang sering terjadi adalah data-data penting sekolah di komputer sering terserang virus dan tidak bisa lagi di buka. Oleh karena kejadian tersebut pihak Operator selalu membuat ulang data penting sekolah dan membutuhkan kerja keras serta waktu yang lama. Suatu ketika, Abdullah diangkat sebagai operator baru di sekolah tersebut karena operator lama pindah tugas keluar daerah. Pihak sekolah menyampaikan masalah yang serit terjadi kepada Abdullah terkait pengamanan data sekolah. Menurut pihak sekolah masalah tersebut  tidak hanya sekali terjadi tetapi telah berulang kali. Sebagai operator sekolah yang bertanggung jawab atas data sekolah dan hal-hal yang terkait dengannya, maka tindakan yang harus dilakukan Abdullah adalah...
///Mengamankan data dengan membuat website sekolah kemudian data di upload ke website
///Mengamankan data dengan membackup data-data penting sekolah di beberapa flashdisk
///Mengamankan data-data penting sekolah dengan menyimpan data ke laptop pribadi
///Mengamankan data di google Drive agar sewaktu-waktu bisa diambil kembali
///Mempelajari cara mengamankan data dengan beberapa aplikasi.
///DBCAE

///Anda bekerja dalam sebuah instansi pemerintah. Anda adalah pegawai baru dalam instansi tersebut. Anda bisa bekerja di instansi tersebut melalui tes penerimaan ASN. Pada penerimaan tersebut anda tidak hanya sendiri diterima, tetapi ada dua rekan lainnya juga diterima sebagai ASN di instansi tersebut. Anda berada dalam satu ruangan kerja dengan rekan baru tersebut. Salah seorang dari mereka ternyata pernah ikut dalam sebuah organisasi yang saat ini telah dilarang di Indonesia karena dianggap radikal. Hal tersebut anda ketahui melalui ngobrol- ngobrol lepas saat jam istirahat. Kondisi ini dapat berpotensi berbahaya bagi instansi pemerintahan tempat anda bekerja. Hal ini dikhawatirkan jika paham-paham organisasinya dulu masih melekat didalam pikiran mereka. Jika hal tersebut terjadi, memungkinkan untuk mempengaruhi rekan kerja yang lainnya sehingga dapat merusak kinerja pegawai. Tidak hanya itu, kesetiaan pegawai terhadap negara juga mulai dipertanyakan. Oleh karena itu, potensi penyebaran paham radikalisme dalam lingkungan kerja harus diwaspadai sejak dini. Segala hal yang terkait dengan paham radikalisme perlu dibendung guna menjaga keutuhan bangsa dan negara. Sebagai warga negara yang patuh pada pemerintahan yang sah, bagaimana tindakan yang sebaiknya anda lakukan terhadap rekan anda...
///Memberitahukan kepada teman anda bahwa paham yang dianut organisasinya yang dulu berbahaya bagi keutuhan bangsa
///Bersikap biasa saja karena negara telah membentuk dewan pengawasan bagi ASN yang terpapar paham radikalisme
///Menyampaikan kepada rekan yang lain untuk waspada terhadap orang tersebut karena bisa jadi akan menularkan paham radikalnya kepada rekan yang lain.
///Menyelidiki paham organisasi tersebut untuk menemukan kebenaran bahwa organisasinya betul menganut paham radikalisme.
///Melaporkan hal tersebut kepada pihak atasan agar diberikan Tindakan sesuai dengan peraturan yang berlaku dan kondisi yang terjadi.
///ECADB

///Anda seorang kepala lingkungan di daerah Wonomulyo. Anda telah menjabat sebagai kepala lingkungan lebih dari sepuluh tahun. Anda telah memperoleh kepercayaan dari warga sebagai kepala lingkungan karena selama kepemimpinan anda, lingkungan tersebut selalu aman dan damai. Anda selalu professional dan berlaku adil kepada warga serta memperhatikan hak dan kewajiban anda dan masyarakat. Pada suatu ketika, ada seorang warga baru masuk di lingkungan anda. Ia telah melapor kepada anda sebagai warga baru dan telah memperlihatkan KTP nya kepada anda. Warga tersebut terlihat ramah dan mudah bersahabat dengan warga lainnya. Ia sering ngobrol-ngobrol dengan warga terkait banyak hal. Ketika di lingkungan anda melaksanakan kerja bakti, warga tersebut juga ikut kerja bakti. Anda tidak sengaja mendengar diskusi warga tersebut dengan warga lainnya disela-sela kerja bakti. Anda mendengar bahwa warga tersebut memberikan kritik dan ketidaksetujuan dengan penerapan ideologi Pancasila yang ada di Indonesia. Ia menganggap bahwa penerapan ideologi Pancasila justru mendzalimi golongan agama tertentu yang ada di indonesia. Jika ia mengangkat agama sebagai bahan untuk memojokkan Pancasila maka dikhawatirkan akan banyak warga yang terprovokasi dengan pernyataan tersebut karena diera saat ini, masyarakat mudah terprovokasi dengan isu agama. Sebagai ketua RT Tindakan yang sebaiknya anda lakukan terhadap warga baru tersebut adalah...
///Mencari tahu kebenaran pernyataan warga tersebut dari warga lain sebelum mengambil sikap terhadap warga tersebut demi menjaga ketentraman lingkungan.
///Menegur warga tersebut di tempat kerja bakti agar tidak melakukan hal demikian demi menjaga keamanan dan ketentraman lingkungan didaerah wonomulyo.
///Mengabaikan hal tersebut agar warga tidak tersinggung dengan alasan bahwa ideologi Pancasila tak akan terganggu hanya dengan hal tersebut.
///Menyampaikan kepada warga agar tetap percaya kepada Pancasila sebagai dasar negara yang dapat dijadikan sebagai pandangan hidup dalam berprilaku dalam masyarakat.
///Memanggil warga tersebut untuk di beri teguran dan disadarkan bahwa prilakunya dapat berbahaya bagi ketentraman lingkungan dan dapat membahayakan dirinya dan warga lain.
///EBDAC`;
	
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
const items = window.DATA_QUESTION_TKP;
const len = items.length;
const kunci = [];
for(let i=0;i<len;i++){
	const item = items[i];
	const scores = item.scores;
	kunci.push(scores);
}

const info = [];
for(let i=0;i<kunci.length;i++){
	info.push((i + 66) + ". "+ kunci[i].join(""));
}

print(info.join("\n"));
*/