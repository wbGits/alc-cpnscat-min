window.DATA_QUESTION_TKP = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `Hari ini adalah akhir bulan, biasanya di kantor kami seluruh staf sibuk dengan laporan closing akhir bulan, biasanya kantor akan menerima denda jika telat membuat laporan. Kamu adalah sebagai pemimpin. Ketika ke kantor keadaan kantor sangat berantakan, kertas, dan debu dimana-mana tak beraturan karena sudah lama ruangan tidak digunakan setelah libur panjang. Sebagai pimpinan, apa yang akan kamu lakukan....
///Mengajak semua staf untuk membersihkannya bersama 
///Kamu akan berinisiatif membersihkannya sendiri sampai benar-benar bersih 
///Menyuruh Bu Wati saja, cleaning service yang membersihkannya 
///Membiarkan saja keadaan seperti itu, kamu dan staf mengerjakan laporan closing
///Membersihkan bersama-sama kemudian setelah bersih mengadakan makan bersama 
///CAEDB

///Anda baru saja lulus dengan predikat cumlaude di salah satu Universitas ternama di kota Anda. Andapun mencoba peruntungan untuk melamar dibeberapa perusahaan dan akhirnya diterima di sebuah perusahaan yang terletak di pinggiran kota. Kemudian Anda memutuskan untuk mencari kontrakan disekitar lokasi perusahaan anda bekerja. Namun, anda merasa tinggal di pinggiran kota sangatlah tidak mengenakkan. Mulai dari transportasi ke kota yang cukup sulit, jauhnya fasilitas kesehatan, sampai jarangnya tempat hiburan untuk melepas penat setelah lelah bekerja. Tapi dengan tinggal di pinggiran kota anda bisa tiba tepat waktu ke kantor. Sikap anda ...
///Saya akan mencoba bertahan semampunya untuk tetap tinggal di pinggiran kota karena akan membuat saya lebih dekat dengan perusahaan 
///Mencari tempat tinggal lain yang lebih nyaman, meskipun sedikit jauh dari lokasi perusahaan tempat saya bekerja 
///Mencari cara agar dapat menikmati kehidupan di daerah pinggiran kota yang lokaisnya dekat dengan pekerjaan saya 
///Berusaha untuk bekerja lebih giat dengan harapan bisa mendapat fasilitas rumah dari kantor 
///Menerima hal ini sebagai resiko dari pekerjaan yang anda ambil dan berusaha untuk tetap bisa merasa nyaman tinggal di daerah pinggiran 
///CEADB

///Anda diminta atasan untuk membenahi atau merevisi peraturan perusahaan yang berkaitan dengan efisiensi keuangan. Maka hal-hal yang akan Anda revisi adalah... 
///Melihat efisiensi jam operasional. Jika memungkinkan mengubah jumlah hari kerja, dari 6 hari menjadi 15 hari 
///Membatasi jumlah pemakaian telepon 
///Efisiensi penggunaan listrik dan internet 
///Melakukan pemotongan kompensasi uang makan pada karyawan yang datang terlambat 
///Efisiensi penggunaan kendaraan operasional sebagai sarana antar jemput karyawan
///EADBC

///Ruang tunggu pasien di rumah sakit tempat Anda bekerja sudah tidak mampu lagi menampung pasien. Sebagai kepala bidang pelayanan yang akan Anda upayakan untuk masalah tersebut adalah... 
///Memecah beberapa tempat tunggu pasien 
///Mencari tempat yang lebih luas untuk menampung pasien lebih banyak 
///Mengatur jam buka masing-masing poli agar tidak ada penumpukan pasien 
///Mendorong tenaga medis agar bekerja lebih cepat 
///Menata ulang bangku tempat tunggu pasien dengan mengedepankan kenyamanan dan daya tampung yang lebih banyak
///EACDB

///Anda merupakan seorang waiters pada sebuah restoran. Datang seorang tamu bersama dengan kelurganya untuk makan direstoran anda. Pada saat menu sudah dihidangkan di atas meja dan mulai dinikmati oleh tamu tersebut, kemudian dia memanggil anda dan komplain jika tadi dia minta agar menu yang dia pesan dibikin tidak pedas sama sekali, sikap anda.... 
///Meminta maaf dan langsung membuatkan menu baru sesuai pesanan 
///Minta maaf dan memohon untuk menunggu agar dibuatkan yang baru 
///Melaporkan kepada bagian dapur yang bertugas memasak 
///Minta maaf dan melaporkan pada bagian dapur 
///Minta maaf dan meminta bagian dapur untuk mengganti menu tersebut
///BDECA

///Anda adalah pegawai di sesuai rumah asi milik pemerintah daerah. Anda dari pagi sudah melayani banyak pengunjung untuk berobat. Menjelang jam pulang kantor, datang seorang pemuda dan menyampaikan keperluannnya. Pemuda tersebut ingin melakukan pengecekan kesehatan sebagai syarat untuk mengikuti seleksi calon taruna Akademi Militer. Hari itu adalah hari terakhir kesempatannya untuk mengurus persyaratan administrasi karena sorenya ia akan berangkat ke Magelang untuk mengikuti pantukhir. Saat itu Anda sudah merasa cukup lelah. Layanan keterangan kesehatan selain dilakukan pengecekan kondisi kesehatan yang dapat dilakukan selama 24 jam, namun harus disertai dengan surat keterangan kesehatan yang merupakan tugas dari tata usaha rumah sakit tersebut yang sudah tutup ketika pemuda tersebut datang, Hal yang akan saya lakukan...
///Saya sampaikan kepada pemuda tersebut bahwa saya dapat membantunya dalam proses pengecekan kesehatan, namun tidak bisa menerbitan surat keterangan keschatannya yang menjadi kewenangan bagian tata usaha. Dia datang di saat kantor tata usaha rumahsakit sudah tutup sehingga tidak bisa mendapatkan surat keterangannya
///Saya akan sampaikan bahwa saya tidak bisa melayaninya karena dia datang ketika layanan sudah ditutup untuk hari itu. Saya akan menanyakan alasan dia baru mengurusnya di saat yang cukup mendesak sehingga merepotkan dirinya dan orang lain yang berkaitan dengan kepentingannya tersebut.
///Saya akan menjelaskan bahwa saya bisa melakukan pengecekan kondisi kesehatannya namun tidak bisa menerbitkan surat keterangan kesehatan yang merupakan kewenangan bagian kantor tata usaha yang saat itu sudah tutup. Namun saya berusaha menghubungi rekan kerja saya dibagian tata usaha kesediaannya untuk datang ke kantor untuk membantu mengurus surat kesehatan bagi pemuda tersebut.
///Saya akan menjelaskan bahwa saya bisa membantunya dalam melakukan pengecekan kondisi kesehatannya, namun saya tidak bisa menerbitkan surat keterangan kesehatan karena merupakan kewenangan bagian tata usaha. Sehingga percuma saja bila melakukan pengecekan kesehatan tanpa surat keterangan kesehatan yang diperlukan untuk persyaratan administrasi seleksi taruna Akmil.
///Saya akan menjelaskan bahwa saya bisa membantunya dalam melakukan pengecekan kondisi kesehatannya, namun saya tidak bisa menerbitkan surat keterangan kesehatan karena merupakan kewenangan bagian tata usaha. Saya akan menyarankan untuk melakukan pengecekan kesehatan di klinik atau rumah sakit lain yang masih memberikan pelayanan
///CEDAB


///Anda bekerja di Dinas Kependudukan dan Catatan Sipil suatu daerah. Pada waktu semua pegawai kantor pulang dan di kantor hanya Anda yang sedang keluar dari kantor serta sekuriti yang sedang berjaga, dating sepasang suami istri dan meminta perubahan data kartu keluarga. Mereka ingin pergi ke luar daerah besok lusa menggunakan pesawat terbang dengan membawa bayi berusia satu tahun. Dikarenakan ada ketentuan dari maskapai penerbangan bahwa setiap anak yang diikutkan dalam penerbangan harus memiliki identitas berupa nama dalam kartu keluarga atau akta kelahiran. Hal yang akan Anda lakukan...
///Saya akan menjelaskan kepada pasangan suami istri tersebut bahwa waktu pelayanan data kependudukan sudah ditutup karena mereka datang terlalu sore dan saya tidak bisa memberikan pelayan di luar ketentuan kantor
///Saya akan menjelaskan kepada pasangan suami istri tersebut mengenai waktu pelayanan kantor untuk data kependudukan serta persyaratan yang diperlukan untuk mendapatkan pelayanan.
///Saya akan mencoba menghubungi teman saya bagian pemuktakhiran data kependudukan untuk menanyakan posisi dia saat itu dan memintanya untuk kembali ke kantor sebentar untuk membantu pengurusan perubahan kartu keluarga pasangan suami istri tersebut.
///Saya akan menjelaskan kepada pasangan suami istri tersebut bahwa waktu pelayanan kantor untuk data kependudukan sudah tutup dan menyarankan datang kembali besok pagi dan meyakinkan perubahan kartu keluarga dapat selesai besok dengan cepat bila pengurusannya dilakukan pada saat jam kerja.
///Saya akan menghubungi atasan saya yang bertanggung jawab dalam hal pemuktakhiran data kependudukan dan meminta arahan untuk menangani keperluan pasangan suami istri tersebut.
///DBAEC

///Anda bekerja di Kantor Badan Narkotika Nasional pada suatu daerah. Pemerintah daerah setempat membuat peraturan bagi pasangan yang akan menikah harus memiliki surat keterangan bebas narkotika dan obat-obatan terlarang dan pemeriksaannya melalui kantor BNN. Dikarenakan ada kepercayaan bulan terbaik untuk menikah, sehingga jumlah pengunjung untuk melakukan pengujian urin bulan ini cukup banyak. Ketikakondisi ruang sudah penuh dengan orang yang mengantri, tiba-tiba datang seorang pemuda meminta ijin untuk mendahulukan dirinya dalam pengambilan sampel urin. Pemuda tersebut beralasan ingin mengurus administrasi pernikahannya di Kantor Urusan Agama setempat yang sebentar lagi akan tutup. Respon Anda terhadap permintaan tersebut adalah....
///Saya akan memintanya untuk tetap mengantri dan menghormati yang lain sudah lama mengantri untuk menunggu giliran pengambilan sampel urin.
///Saya akan menjelaskan untuk mengikuti prosedur dan mengantri serta menjelaskan kepadanya proses pengambilan sampel urin tidak lama. Setelah selesai bisa langsung ke kantor KUA.
///Saya tidak mengijinkankannya untuk didahulukan. Masalah mengurus admistrasi pernikahan di KUA tidak ada hubungannya dengan pelayanan kantor saya.
///Saya menasehatinya untuk membiasakan diri tertib dalam proses mendapatkan pelayanan dan jangan mengurus hal-hal yang berkaitan pelayanan umum secara mendadak karena pelayanan umum banyak orang yang membutuhkannya juga.
///Saya akan menanyakan kapan waktu menikahnya sehingga saya bisa menilai masih ada waktu baginya untuk mengurus administrasi pernikahannya di kantor KUA. Hal tersebut saya jadikan sebagai pertimbangan untuk mendahalukan dirinya.
///BACDE

///Anda seorang costumer service pada sebuah bank yang dipercaya dalam pencairan dana bantuan sosial bagi masyarakat terdampak covid-19. Saat itu banyak nasabah umum dan penerima bansos mengantri, datang seorang calon nasabah yang akan membuka rekening menggunakan jaket pangkalan ojek meminta didahulukan karena ia harus segera mengojek untuk memenuhi kebutuhan keluarganya yang sedang mengalami masalah keuangan akibat dampak pandemi Covid-19. Sikap Anda...
///Saya akan memintanya untuk mengambil nomor antrian dan duduk di kursi tunggu untuk mengantri seperti nasabah lainnya. 
///Saya tidak akan menyetujui permintaannya dan memintanya untuk bersabar mengantri karena semua nasabah yang datang memiliki hak yang sama dan harus mengikuti prosedur untuk mendapatkan layanan perbankan.
///Saya akan memanggil sekuriti untuk mengarahkan orang tersebut dan tertib mengikuti prosedur pembukaan rekening bagi penerima bansos terdampak covid-19.
///Saya akan menjelaskan bahwa semua nasabah memiliki hak yang sama dan meminta menghargai nasabah lain yang datang lebih awal dan sudah bersedia mengantri lama.
///Saya akan menjelaskan bahwa orang tersebut harus mengantri seperti nasabah lainnya. Semua orang pasti tidak ada yang ingin mengantri, namun sudah menjadi ketentuan dalam mendapatkan layanan perbankan. Semua orang yang mengantri juga memiliki urusan masing-masing yang harus diselesaikan.
///EDABC

///Anda bekerja di sebuah maskapai penerbangan sebagai ground staff yang dimana salah satu tugas Anda adalah memberikan pelayanan pada kostumer pengguna jasa penerbangan. Ketika waktu check in penumpang, ada seorang penumpang yang tidak masuk pesawat setelah beberapa kali dipanggil hingga panggilan terakhir. Namun, ketika Anda meninggalkan pesawat dan menuju ke gate keberangkatan, penumpang tersebut baru muncul dan menjelaskan bahwa ia tidak mendengar panggilan terakhir saat boarding pass karena sedang asyik berkeliling melihat toko-toko penjual pernak pernik cenderamata. Sikap Anda...
///Saya mengingatkannya untuk tidak mengulanginya kembali, seharusnya dia memperhatikan waktu keberangkatan dan sudah berada di gate boarding 15 menit sebelum berangkat. Saya segera mengantarnya ke pesawat.
///Saya akan segera mengantarnya ke pesawat sembari menghubungi crew cabin untuk memastikan pesawat belum berangkat
///Saya menyuruh staf lain datang untuk mengantarnya ke pesawat karena saya masih ada tugas lain yang harus dikerjakan dan menunjukkan jalur menuju ke pesawat bila ia ingin ke pesawat sendiri tanpa menunggu staf maskapai.
///Saya akan menanyakan alasan dia tidak mendengar panggilan boarding pass terakhir dan seharusnya dia sudah ada di boarding gate 15 menit sebelum waktu masuk pesawat.
///Saya mengantarnya ke pesawat sambil menjelaskan prosedur naik pesawat serta persiapan sebelum berangkat agar ia tidak mengulanginya lagi ketika dalam penerbangan lain. Menurut saya, orang tersebut belum terbiasa naik pesawat sehingga tidak mengetahui prosedurnya dan saya harus bersabar melayaninya
///BEDAC

///Anda bekerja di service center sebuah perusahaan elektronik merk ternama dimana barang-barang produksinya cukup diminati dan termasuk produk berkelas premium. Ada seorang kostumer datang dan mengajukan keluhan atas kerusakan handphone yang ia beli. Orang tersebut mengatakan, barangnya cepat rusak dan tidak berkualitas. Namun, Anda melihat kerusakan handphone tersebut cukup parah, terlihat retak karena jatuh dan Anda berpikir bahwa kerusakan tersebut karena kelalaian saat pemakaian. Respon Anda terhadap keluhan tersebut adalah
///Saya akan menerima keluhan tersebut dan menyampaikan kepada kostumer tersebut untuk dicek terlebih dahulu oleh bagian teknisi untuk memastikan kerusakan serta penyebab kerusakannya. Saya juga akan menjelaskan syarat dan ketentuan garansi, bahwa kerusakan oleh kelalaian saat pemakaian tidak ditanggung oleh perusahaan
///Saya menyampaikan kepada pelanggan tersebut bahwa kerusakan pada handphone tersebut disebabkan oleh kelalaian dalam penggunaan dan tidak bisa ditanggung oleh perusahaan. Saya akan menjelaskan prosedur dan persyaratan untuk mengajukan komplain serta bentuk kerusakan yang dapat dilayani oleh perusahaan, tidak semua kerusakan dapat diajukan sebagai keluhan yang harus diperbaiki atau diganti dengan yang baru.
///Saya menolak pengajuan keluhan tersebut karena dari tampilan dan bentuk fisik handphone tersebut menunjukkan kerusakan yang disebabkan oleh kelalaian pemakai sehingga tidak termasuk jenis kerusakan yang ditanggung untuk diperbaiki atau diganti dengan yang baru.
///Saya akan menanyakan kepada kostumer tersebut kondisi pemakaian sehingga menyebabkan handphone tersebut mengalami kerusakan yang sangat fatal seperti itu. Saya juga akan memastikan bahwa kerusakan tersebut tidak dapat diterima karena dari fisiknya terlihat karena adanya pemakaian yang tidak sewajarnya.
///Saya memanggil bagian teknisi untuk melihat langsung dan menjelaskan kepada ibu tersebut mengenai kerusahakan tersebut guna memastikan bahwa kerusakan tidak masuk dalam jenis kerusakan yang akan ditanggung oleh perusahaan. Teknisi pasti akan sangat paham bahwa kondisi handphone tersebut rusak karena pemakaian yang tidak wajar.
///AEBDC

///Anda bekerja di bagian informasi layanan stasiun antar kota. Ketika menjelang lebaran, arus mudik cukup besar sehingga banyak calon penumpang menunggu di area tunggu sehingga cukup sesak. Saat itu juga kipas jenis industrial fan yang digunakan rusak sehingga kondisinya panas. Beberapa calon penumpang mendatangi Anda di ruang bagian pusat informasi untuk menyampaikan kondisi kipas yang rusak. Tindakan Anda terhadap keluhan tersebut adalah ...
///Saya tidak akan memperdulikannya karena kerusakan fasilitas merupakan tanggung jawab bagian fasilitas dan maintenance sehingga saya tidak ingin tugas utama saya sebagai penyedia informasi layanan terbengkalai.
///Saya melihat langsung kondisi kipas yang rusak dengan meninggalkan ruangan pusat informasi guna memastikan kerusakan yang terjadi serta ketidaknyamanan calon penumpang.
///Saya menyarankan orang yang menyampaikan keluhan tersebut untuk ke bagian pengaduan fasilitas dan perawatan untuk mendapatkan tindakan perbaikan.
///Saya akan menyampaikan kepada orang yang menyampaikan keluhan tersebut bahwa masalah fasilitas dan kerusakan bukan menjadi tanggung jawab saya.
///Saya akan menyampaikan keluhan tersebut kepada bagian fasilitas dan maintenance untuk memeriksa kondisi kipas sehingga diperbaiki.
///EBCDA

///Orang tua Anda sedang dirawat di sebuah rumah sakit dan kondisinya kritis. Setelah selesai jam kerja, Anda hendak menjenguk orang tua Anda di rumah sakit menggunakan mobil. Saat di jalan satu arah, ada pengendara mobil di depan Anda mengambil posisi ditengah jalan dengan laju yang sangat lambat. Anda merasa perlu menyalip mobil karena mobil tersebut terlalu lambat, namun tidak ada ruang untuk melewati mobil tersebut karena berjalan di tengah-tengah jalan. Anda sudah membunyikan klakson beberapa kali, namun mobil tersebut tetap berjalan di bagian tengah jalan. Sikap Anda....
///Saya tetap mengendarai mobil saya dibelakang mobil tersebut dengan sabar karena hal yang lebih diutamakan adalah saling memahami antara satu sama lain, namun bila pengendara tersebut tidak bisa memahaminya maka saya harus mengalah.
///Saya akan membunyikan klakson beberapa kali agar bisa didengar oleh pengendara mobil tersebut, mungkin ia tidak mendengar saat bunyi klakson sebelumnya.
///Saya akan berusaha membunyikan Klakson panjang secara terus menerus agar pengendara mobil tersebut menyadari bahwa di belakangnya ada pengendara lain yang ingin cepat karena dalam kondisi darurat.
///Saya akan berusaha mencari jalan alternatif lain agar bisa sampai ke rumah sakit lebih cepat.
///Saya akan mencoba mengambil posisi sebelah kanan dengan membunyikan klakson agar terlihat oleh pengedara mobil tersebut lewat kaca spionnya sehingga ia bis amenepi ke kiri dan saya bisa melewatinya.
///DECBA

///Ketika berangkat kerja dengan mengendarai sepeda motor. Saat melewati sebuah ruas jalan, Anda melihat beberapa remaja yang berseragam putih abu-abu sedang nongkrong di halte depan sebuah sekolah sambal mengisap rokok. Pada saat itu menunjukkan pukul 07.35, mereka harusnya sudah masuk sekolah dan belajar bersama teman-temannya yang lain. Sikap Anda...
///Saya akan berhenti menanyakan kepada mereka kenapa masih nongkrong di luar sekolah padahal sudah waktunya masuk sekolah dan belajar di kelas dan bila memungkinkan saya akan menemani mereka masuk ke sekolah.
///Saya akan berhenti dan memberi nasehat kepada mereka untuk segera ke sekolah karena sudah waktu masuk sekolah dan belajar di kelas.
///Saya mampir ke sekolah anak-anak tersebut dan menanyakan kepada guru piket apakah di sekolah ada kegiatan lain sehingga kegiatan belajar mengajar diliburkan. Saya juga akan menyampikan bahwa ada anak didiknya nongkrong di halte depan sekolah.
///Saya akan meneruskan perjalanan ke kantor. Kemungkinan sekelompok remaja tersebut telat ke sekolah dan tidak bisa masuk sekolah karena gerbang sekolah sudah ditutup oleh petugas sekuriti.
///Saya akan meneruskan perjalanan ke kantor. Menurut saya menasehatin remaja seperti itu percuma saja karena mereka memang pelajar yang susah diatur dan suka bolos sekolah dan untuk mendidik mereka adalah tanggung jawab orang tua dan gurunya.
///BCADE

///Anda adalah seorang pimpinan sebuah divisi di kantor Anda. Saat Anda ada lembur di kantor dan dilanjutkan rapat sehingga Anda sampai rumah sudah larut malam. Ketika akan tidur dan istrahat, ada sekelompok pemuda di pos ronda depan rumah bernyanyi yang diiringi petikan gitar, sekali-sekali mereka becanda, tertawa dan teriak. Hal tersebut membuat Anda cukup terganggu dan tidak bisa tidur. Sikap Anda menghadapi kondisi tersebut adalah ...
///Saya akan berusaha tidur dan menenangkan diri meskipun sekelompok pemuda tersebut ribut karena mereka sudah terbiasa seperti itu tiap malam, namun biasanya saya tetap bisa tidur dengan lelap.
///Saya mendatangi kelompok pemuda tersebut untuk mengingatkan bahwa kebiasaan mereka cukup mengganggu warga sekitar dan mem inta untuk merubah kebiasaan buruknya tersebut.
///Saya akan mendatangi mereka untuk meminta mereka untuk tidak membuat suasana yang mengganggu ketenangan warga setempat beristrahat pada waktu larut malam.
///Saya akan mendatangi mereka untuk memarahi mereka dan mengatakan bahwa aktivitas mereka mengganggu waktu istrahat saya dan warga lain di sekitar pos ronda.
///Saya akan mendatangi mereka untuk meminta mereka untuk pulang ke rumah masing-masing dan menyarankan mereka untuk mencari aktivitas lain yang lebih produktif.
///EBDCA

///Anda sedang berdiri menunggu bus saat pulang kerja pada waktu hujan, tiba-tiba sebuah mobil lewat dengan kencang sehingga menyemprotkan lumpur dan air kotor. Reaksi Anda...
///Marah-marah kepada sopirnya sambal memukul bagian mobil itu
///Diam saja meskipun merasa kesal dalam hati
///Segera menelepon teman untuk menjemput dan mengantar pulang
///Tetap tenang sambil berusaha membersihkan sisa lumpur pada baju
///Diam saja karena merasa malu
///DCABE

///Saat Anda sedang berbelanja di pusat pertokoan di kota Anda, tanpa sengaja Anda melihat salah satu atasan Anda di kantor sedang berjalan-jalan tidak jauh dari Anda. Reaksi Anda...
///Diam-diam menyelinap pergi agar tidak perlu menyapanya
///Pura-pura tidak tahu dan akan menyapa jika disapa lebih dahulu
///Segera menghampirinya dan menyapa atasan tersebut
///Melihat keadaan sekitar, jika memungkinkan saya akan menyapanya
///Tidak peduli, toh tidak sedang berada di area kantor
///CDEBA

///Ketika Anda sedang berjalan-jalan di antara keramaian pasar biasanya Anda ...
///Berjalan pelan-pelan sambil melihat-lihat pemandangan sekitar
///Berjalan sedikit cepat dan memperhatikan tempat-tempat tertentu saja
///Berjalan biasa dan berhenti jika merasa membutuhkannya
///Berjalan cepat, mendapatkan apa yang dibutuhkan, kemudian pergi
///Berjalan pelan-pelan sambil memikirkan akan membeli apa
///CDEBA

///Teman-teman Anda berjanji akan pergi bersama ke sebuah pesta pernikahan rekan Anda, namun saat tiba di tempat tujuan ternyata teman-teman Anda terlambat karena terjebak macet. Reaksi Anda....
///Marah-marah dan menyalahkan teman-teman karena tidak disiplin waktu
///Segera masuk dan mencari teman lain yang dikenal
///Tetap menunggu di luar sampai teman-teman saya dating
///Segera masuk dan menikmati hidangan yang disediakan
///Memutuskan untuk pulang dan membatalkan menghadiri pesta tersebut
///BDCEA

///Salah seorang rekan Anda merasa kesulitan untuk menyelesaikan pekerjaannya sementara pekerjaan tersebut bukan job desk Anda. Sikap Anda...
///Mempertimbangkan lebih dahulu, jika menguntungkan akan saya bantu
///Memberikan bantuan jika memang diperbolehkan oleh teman saya
///Tidak berani memberikan bantuan karena akan mendapatkan teguran dari atasan
///Tidak peduli karena memang bukan kewajiban saya
///Saya akan membantu jika teman saya meminta tolong
///BDAEC

///Andre baru saja diterima di sebuah perusahaan transportasi sehingga masih banyak pekerjaan yang belum diketahuinya. Jika Anda adalah Andre, bagaimana cara Anda agar segera memahami pekerjaan Anda...
///Bertanya pada pegawai yang lebih senior
///Menunggu perintah dari atasan
///Membaca buku manual kerja setiap waktu
///Melihat cara pegawai lainnya saat bekerja
///Setiap pekerjaan membutuhkan proses untuk memahaminya
///DACEB

///Anda diberi tugas untuk membagi kelompok ronda di RT Anda, namun karena usia yang masih muda, beberapa warga yang lebih tua tidak setuju dan mengajukan keluhan. Sikap Anda...
///Lebih baik menghindari pertengkaran dan memilih mundur dari jabatan saya
///Menegaskan posisi saya dan meminta warga tersebut untuk mematuhinya
///Tidak peduli dan tetap meneruskan pembagian petugas ronda
///Mencoba untuk membicarakannya baik-baik dan mencari solusi bagi kedua belah pihak
///Perbedaan pendapat dalam suatu forum merupakan hal yang sudah
sewajarnya
///BECDA

///Anda ditugaskan untuk menjaga dokumen penting dan tidak boleh diberitahukan isinya pada pegawai lain karena berkaitan dengan jumlah bonus akhir tahun pada tahun ini. Sahabat karib Anda yang mengetahui hal tersebut dan meminta Anda untuk memberitahukan bagiannya saja. Sikap Anda...
///Menolaknya dan tetap menjaga rahasia dokumen tersebut
///Membocorkannya pada sahabat karib saya saja
///Menanyakan hal tersebut lebih dahulu kepada atasan
///Ikut membuka dokumen tersebut dan membacanya bersama sahabat saya
///Berbasa-basi lebih dahulu baru memberitahukan bonus akhir tahun
bagiannya
///ACBED

///Saat Anda sedang melakukan presentasi dalam sebuah rapat pimpinan, salah seorang pimpinan Anda terlihat sedang sibuk mengobrol dengan rekan kerja yang lain dengan suara yang agak keras. Reaksi Anda....
///Merasa kecewa karena merasa tidak diperhatikan
///Diam saja meskipun merasa kesal dalam hati
///Memberikan catatan pada pimpinan tersebut agar memperhatikan presentasi saya
///Menegur pimpinan tersebut dengan tegas
///Tidak terlalu peduli dan tetap meneruskan presentasi
///CDEBA

///Pimpinan Anda berencana untuk pergi keluar kota selama beberapa hari. Pegawai yang lebih senior mengajak Anda untuk bersantai sejenak selama pimpinan pergi, sikap Anda terhadap hal tersebut...
///Ikut bersantai bersama dengan pegawai senior yang lain
///Tetap bekerja seperti biasanya
///Mencatat pegawai yang bersantai-santai dan melaporkannya pada Pimpinan
///Mempertimbangkannya lebih dahulu, baru memutuskannya
///Terpaksa mengikuti pegawai senior agar tidak dijauhi pegawai yang lain
///BDECA

///Anda ditawari pekerjaan oleh salah seorang rekan Anda, namun pekerjaan tersebut berada di luar kota dan Anda tidak memiliki satu kerabat pun di sana. Sikap Anda...
///Meminta pertimbangan pada keluarga terdekat
///Menolaknya karena tempatnya jauh dari rumah
///Menerimanya dan mempersiapkan segala hal yang dibutuhkan
///Menundanya lebih dulu sambal mempersiapkan kebutuhan untuk tinggal di luar kota
///Tidak terlalu peduli karena bukan passion saya
///CDAEB

///Sebentar lagi kantor Anda akan mengadakan kejuaraan voli antardivisi. Setelah berlatih cukup lama, akhirnya besok adalah hari pertandingan. Sikap Anda...
///Tidak bisa tidur sampai pagi
///Tidur cepat agar bisa lebih siap esok harinya
///Sulit tidur meski akhirnya dapat tertidur juga
///Saya yakin saya akan memenangkan pertandingan tersebut
///Semoga yang terbaik yang akan menang
///EBDCA

///Anda diberi tugas oleh atasan Anda untuk menyelesaikan suatu pekerjaan dalam beberapa hari, sementara Anda masih memiliki beberapa tugas lain yang belum Anda selesaikan. Sikap Anda....
///Lebih baik menolak tugas tersebut daripada tidak terselesaikan tepat waktu
///Menerima tugas tersebut dan berusaha menyelesaikannya tepat waktu
///Mengerjakan tugas tersebut semampu saya, toh atasan juga mengerti saya memiliki tugas yang lain
///Mempertimbangkan lebih dahulu tugas tersebut, baru memutuskan akan menerimanya atau tidak
///Menerima tugas tersebut dan meminta bantuan rekan lain untuk menyelesaikannya
///BECDA

///Salah seorang anggota tim kerja Anda tidak dapat bekerja dengan maksimal karena harus menjaga anaknya yang sedang sakit sehingga menghambat kinerja pegawai lainnya. Sikap Anda sebagai ketua tim...
///Menegurnya dan memintanya lebih bertanggung jawab pada tugasnya
///Memintanya untuk mengundurkan diri karena sudah mengganggu kinerja pegawai lainnya
///Mendiskusikannya dengan pegawai yang lain dan mencari solusi bersama
///Meminta pada atasan untuk memindahkan pegawai tersebut ke
divisi yang lain
///Memberikan pekerjaan yang sesuai dengan kesibukan pegawai tersebut
///ECDAB

///Seorang bawahan Anda berhasil mendapatkan proyek pembangunan jembatan provinsi di daerah Anda. Sikap Anda...
///Tidak akan memberikan pujian karena hal tersebut sudah menjadi tanggung jawabnya
///Akan memuji seperlunya karena sudah melakukan tugas dengan baik
///Saya akan memujinya setelah berhasil menyelesaikan tugas yang lain
///Saya mungkin akan memujinya jika tidak diketahui oleh pegawai yang lain
///Saya akan memujinya di depan pegawai yang lain
///BCEDA

///Suatu hari kantor Anda kedatangan tamu dari pusat untuk menyerahkan laporan pertanggungjawaban kerja, namun atasan Anda sedang tidak di tempat karena masih bertemu dengan klien di luar kota. Sikap Anda....
///Segera menyelesaikan laporan pertanggungjawaban tersebut meski tanpa kehadiran pimpinan
///Meminta pegawai lain yang lebih senior untuk mengambil keputusan
///Mencoba menghubungi pimpinan dan meminta arahannya untuk menyelesaikan laporan tersebut
///Meminta tamu dari pusat untuk menunggu sampai pimpinan kerja datang ke kantor
///Meminta tamu dari pusat untuk dating lain kali ketika pimpinan kerja berada di tempat
///CBADE

///Adi seorang pegawai senior di perusahaan tempatnya bekerja dan diminta atasannya untuk memberikan arahan pada para pegawai baru. Jika Anda adalah Adi apa yang akan Anda harapkan dari para pegawai baru tersebut...
///Mudah untuk beradaptasi dengan lingkungan kerja
///Jujur dan bertanggung jawab pada setiap pekerjaan
///Tegas dan berdisiplin tinggi
///Menyukai tantangan dan hal-hal yang baru
///Tidak akan mengganggu atau mencampuri urusan saya
///BCDAE

///Apa yang akan Anda lakukan agar berhasil dalam pekerjaan Anda...
///Bergaul dengan orang-orang yang lebih hebat dari saya
///Bekerja dengan lebih keras dibanding yang lain
///Melakukan pekerjaan yang sesuai dengan kemampuan saya saja
///Menyerahkan seluruhnya pada keberuntungan
///Mencoba hal-hal baru yang belum pernah dilakukan sebelumnya
///ABECD

///Pimpinan Anda meminta Anda untuk menyelesaikan suatu pekerjaan yang remeh temeh. Sikap Anda...
///Merasa kecewa karena sudah diremehkan oleh pimpinan
///Akan mengerjakannya setelah pekerjaan yang lain selesai
///Segera mengerjakannya agar tidak mengganggu pekerjaan yang lain
///Segera mengerjakannya sambil mengerjakan pekerjaan yang lain
///Meminta rekan kerja yang lain untuk mengerjakannya
///CDBEA

///Suatu hari sahabat Anda yang meminjam mobil Anda dan menabrakkan mobil tersebut hingga rusak. Reaksi Anda....
///Diam saja dan berjanji tidak akan meminjaminya lagi
///Memarahinya dan memintanya untuk mengganti kerusakannya
///Mendiamkannya agar orang tersebut menyadarinya
///Membicarakannya baik-baik dan memintanya mengganti kerusakan yang ada
///Menasihatinya agar lebih berhati-hati saat membawa mobil
///DBECA

///Setiap manusia berbeda dengan manusia lainnya. Sebagai seorang manusia, bagaimana Anda mendeskripsikan diri Anda?
///Loyal dan ramah pada semua orang
///Tegas dan dapat memimpin orang lain
///Percaya diri dan mampu bekerja dalam kelompok
///Jujur dan mampu bekerja secara mandiri
///Tenang dan bertanggung jawab
///DEBAC

///Anda diminta untuk menjadi ketua proyek di kantor Anda dan selama pengerjaan proyek ada salah seorang rekan Anda yang sering mengabaikan perintah Anda karena merasa lebih baik dari Anda. Sikap Anda...
///Melaporkannya pada atasan agar segera dipindahkan ke divisi lain
///Meminta kepada rekan tersebut agar dapat menghargai saya sebagai ketua
///Bersikap tegas dan memintanya menyelesaikan tugas-tugas yang diberikan
///Hanya memberikan tugas pada rekan lain yang bersedia
///Mengabaikannya karena masih banyak rekan lain yang bersedia mengerjakan tugas
///CBADE

///Karena kondisi kantor yang sangat sibuk, atasan Anda meminta Anda untuk menemui mitra perusahaan Anda, namun mitra tersebut sangat rewel dan memiliki banyak permintaan. Sikap Anda?
///Mencatat semua keinginan mitra tersebut dan menyerahkannya pada atasan
///Meminta rekan kerja yang lain untuk melayaninya
///Mengikuti semua permintaannya meskipun sangat kesal
///Berusaha untuk tetap tenang dan memberikan pelayanan yang tidak bertentangan dengan prosedur perusahaan
///Mengabaikannya, toh bukan merupakan tanggung jawab saya
///DECEB

///Eko tiba-tiba diminta untuk bekerja di luar kota selama beberapa bulan padahal dalam waktu dekat Istrinya akan melahirkan. Jika Anda adalah Eko, apa yang akan Anda lakukan...
///Menolaknya karena keluarga lebih penting
///Menerima tawaran tersebut dan segera pergi untuk dinas
///Membicarakannya lebih dahulu dengan keluarga baru memutuskannya
///Menemul atasan dan meminta kebijaksanaannya
///Menerima tawaran tersebut dengan syarat setelah istri saya melahirkan
///CABED

///Saat Anda berada di pusat perbelanjaan, Anda melihat seorang anak kecil terlihat kebingungan mencari orangtuanya. Reaksi Anda...
///Memanggil petugas keamanan terdekat untuk membantunya
///Tidak terlalu peduli, bisa saja itu hanya rekayasa penipu
///Melihat keadaan sekitar, jika memang tidak ada yang membantu
///Diam saja, toh nanti akan ada orang lain yang membantunya
///Membantu anak tersebut untuk menemukan orangtuanya
///AECDB

///Sebagai seorang staff pelayanan yang baik, Anda akan ...
///Memberikan pelayanan yang cepat dan sesuai kebutuhan konsumen
///Memelihara komunikasi dengan konsumen kapan pun dan di mana pun
///Mendengarkan keluhan konsumen dan menyampaikannya pada atasan
///Memberikan pelayanan sesuai dengan kompetensi dan job desk saya
///Bersikap tenang saat melayani konsumen yang rewel
///ADCEB

///Menikah adalah salah satu impian selain menjadi PNS. Ketika Anda sudah menemukan pasangan yang cocok dan berencana menikah ternyata terjadi pandemi covid-19. Jika Anda tetap akan merealisasikan pernikahan di saat pandemic covid-19. Menyikapi hal tersebut maka ...
///Hanya menggelar akad nikah yang dihadiri keluarga dekat saja dan taat protocol kesehatan
///Memilih menggelar resepsi dengan sistem undangan datang langsung dibagikan makanan dan pulang
///Memilih hanya menggelar akad saja dan mengundang tetangga dekat
///Akan mengadakan resepsi setelah pandemic berakhir
///Tetap menyebar undangan sebagai ungkapan meminta doa restu namun menyatakan bahwa tidak menerima kedatangan tamu sebagai upaya menjaga penularan covid-19
///EACBD

///Tersiar kebijakan soal pungutan pajak untuk pembelian token listrik dan pulsa. Masalahnya kabar yang berembus di masyatakat ternyata salah tafsir. Bahkan sampai beberapa warganet melontar kritik pedas lewat media berupa video parodi tiktok, unggahan di instagram dan masih banyak lagi. Selaku petinggi di kementerian keuangan tentulah Anda terusik. Menyikapi pemberitaan yang justru simpang siur di masyarakat sikap Anda ...
///Tetap tenang karena kehebohan warganet adalah hal biasa
///Memilih untuk klarifikasi di media sosial agar jelas informasi yang bisa diterima masyarakat
///Memilih untuk tidak menggubris dan tetap bekerja
///Melakukan konferensi pers untuk memberikan klarifikasi terkait info yang salah tafsir
///Memilih untuk berkomentar pada unggahan warganet yang mengkritik
///BDECA

///Pemerintah melakukan sejumlah penangkapan pasca bom bunuh diri yang terjadi di Kota Makassar terhadap orang-orang yang diduga terlibat tindakan aksi terorisme. Sejumlah orang yang diamankan tersebut ternyata anggota keluarga Budi, dan Budi juga dimintai keterangan mengenai anggota keluarga tersebut. Bila Anda di posisi Budi, yang akan Anda lakukan dalam situasi ini adalah ...
///Berusaha membantu sebisanya dan menjawab semua pertanyaan dari pihak berwajib
///Berusaha menjelaskan kepada pihak berwajib bahwa ia tidak terlibat dan tidak pernah berbuat aneh-aneh
///Berusaha membantu anggota keluarga untuk keluar dari permasalahan tersebut dengan cepat
///Memberikan keterangan sesuai dengan pengetahuan Anda terhadapnya apa adanya
///Berusaha membantu sebisanya dan menjawab semua pertanyaan dari pihak berwajib
///DAEBC

///Maraknya aksi terorisme terjadi karena masuknya paham-paham radikalisme. Bahkan ajaran radikalisme telah menyentuh banyak anak-anak, sehingga selain peran Pemerintah, proses pencegahan dan penanggulangan terorisme di Indonesia, membutuhkan bantuan dari seluruh elemen terkecil masyarakat, salah satunya keluarga. Menurut Anda, bagaimana peran keluarga yang efektif dalam menekan angka terorisme dan paham radikalisme di Indonesia...
///Menjadi contoh yang baik dalam menunjukkan sikap toleran
///Tidak menyalahkan keyakinan orang lain yang berbeda dari kita
///Menyaring setiap Informasi yang didapatkan serta memonitor atau memantau keberadaan kelompok-kelompok tertentu yang mencurigakan
///Membentuk forum-forum kerukunan umat, tim kewaspadaan dini, tim penanggulangan terorisme
///Pola pengasuhan yang demokratis dan toleran
///EABDC`;
	
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