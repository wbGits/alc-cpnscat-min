
window.DATA_QUESTION_TWK = (()=>{
	const returned = [];
	const create = function(content, option, scores){
		const dis = this;
		dis.group = "TEST WAWASAN KEBANGSAAN";
		dis.groupAlias = "twk";
		dis.content = content;
		dis.option = option;
		dis.scores = scores;
	};
	const pushItem = (content, option, scores)=>{
		returned.push(new create(content, option, scores));
	};
	
	// 1
	pushItem(
		/*content*/
		"Pembuatan UUD yang diusahakan untuk mendapat persetujuan rakyatnya seperti Spanyol pada tahun 1932 merupakan contoh pembentukan konstitusi dengan cara...", 
		
		/*option*/
		["Pemberian", "Repolusi", "Pembuatan dengan sengaja", "Evolusi", "Referendum"], 
		
		/*scores*/
		[0,5,0,0,0]
	);
	
	// 2
	pushItem(
		/*content*/
		"Sidang PPKI III dilangsungkan pada tanggal...", 
		
		/*option*/
		[
			"20 Agustus 1945", 
			"21 Agustus 1945", 
			"22 Agustus 1945", 
			"23 Agustus 1945", 
			"24 Agustus 1945"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);
	
	// 3
	pushItem(
		/*content*/
		"Hukum tertulis dan tidak tertulis harus dilaksanakan dalam kehidupan bermasyarakat dan bernegara, namun hukum tertulis memiliki kelebihan...", 
		
		/*option*/
		[
			"Tidak mudah dibah", 
			"Tidak dapat diubah siapapun", 
			"Sanksinya lebih tegas", 
			"Dibuat oleh negara", 
			"Sanksinya lebih lama"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);
	
	// 4
	pushItem(
		/*content*/
		"Secara berurutan, konstitusi yang pernah berlaku di Indonesia sejak proklamasi 17 Agustus 1945 sampai 5 Juli 1959 adalah...", 
		
		/*option*/
		[
			"UUD 1945, Konstitusi RIS, UUD sementara", 
			"UUD 1945, UUD sementara, Konstitusi RIS", 
			"UUD 1945, UUD sementara, UUD 1945", 
			"UUD semetara, Konstitusi RIS, UUD 1945", 
			"Konstitusi RIS, UUD Sementara, UUD 1945"
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);
	
	// 5
	pushItem(
		/*content*/
		"Pada tanggal 24 Agustus 1945 Belanda dan Inggris (atas nama sekutu) menandatangani Civil Affairs Agreement (CAA) yang isinya dituangkan dalam \"Nota tangal 24 Agustus 1945\". Butir terpenting dalam perjanjian ini adalah...", 
		
		/*option*/
		[
			"Penyerahan wilayah Indonesia yang telah \"dibersihkan\" dari tentara Jepang oleh Inggris kepada Indonesia melalui Netherlands Indies Civil Administration (NICA)", 
			"Penyerahan wilayah Indonesia yang telah \"dibersihkan\" dari tentara Jepang oleh Inggris kepada Indonesia melalui dEWAN pERSERIKATAN bANGSA-bANGSA (PBB)", 
			"Penyerahan wilayah Indonesia yang telah \"dibersihkan\" dari tentara Jepang oleh Jepang kepada Inggris melalui Dewan Perserikatan Bangsa-Bangsa (PBB).", 
			"Penyerahan wilayah Indonesia yang telah \"dibersihkan\" dari tentara Jepang oleh Jepang kepada Belanda melalui Netherlands Indies Civil Administration (NICA).", 
			"Penyerahan wilayah Indonesia yang telah \"dibersihkan\" dari tentara Jepang oleh Inggris kepada Belanda melalui Netherlands Indies Civil Administration (NICA)."
		], 
		
		/*scores*/
		[0,0,0,0,5]
	);	
	
	// 6
	pushItem(
		/*content*/
		"Sebuah negara akan diakui secara sah jika ada pengakuan baik secara <i>de facto</i> maupun <i>de jure</i>. Yang merupakan perbedaan pengakuan <i>de facto</i> dan <i>de jure</i> adalah...", 
		
		/*option*/
		[
			"Pengakuan <i>de facto</i> sesuai dengan fakta sedangkan pengakuan <i>de jure</i> atinya pengakuan terhadap sahnya suatu negara berdasarkan pertimbangan menurut hukum. ", 
			"Pengakuan <i>de jure</i> dapat ditarik kembali", 
			"Pengakuan <i>de jure</i> bersifat sementara", 
			"Pengakuan <i>de jure</i> bersifat sementara sedangkan pengakuan <i>de facto</i> bersipat tetap.",
			"Pengakuan <i>de facto</i> sesuai dengan faktanya sedangkan pengakuan <i>de jure</i> belum tentu sesuai faktanya."
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);	
	
	// 7
	pushItem(
		/*content*/
		"Makna yang terkandung pada nilai patriotisme dalam kehidupan berbangsa dan bernegara adalah...", 
		
		/*option*/
		[
			"Selalu berjuang untuk kepentingan negara", 
			"Selalu menentang kebijakan negara yang tidak dikehendaki rakyat", 
			"Rela berkorban untuk kepentingan bangsa dan negara", 
			"Selalu membela apapun yang dilakukan negara",
			"Selalu mengupayakan persatuan bangsa"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);	
	
	// 8
	pushItem(
		/*content*/
		"Berikut ini yang merupakan contoh peran serta positif warga negara dalam kegiatan pemerintah adalah...", 
		
		/*option*/
		[
			"Menunjukkan kekayaan", 
			"Membayar pajak tepat pada waktunya", 
			"Membangun hotel-hotel berbintang", 
			"Bekerja keras untuk memenuhi kebutuhan",
			"Memberikan bantuan kepada korban bencana alam"
		], 
		
		/*scores*/
		[0,5,0,0,0]
	);	
	
	// 9
	pushItem(
		/*content*/
		"Salah satu ciri khas sikap yang dimiliki bangsa Indonesia adalah gotong royong. Gotong royong perlu kita laksanakan dalam kehidupan sehari-hari karena...", 
		
		/*option*/
		[
			"Merupakan kebiasaan suku bangsa", 
			"Merupakan ciri khas daerah tertentu", 
			"Dapat mewujudkan kesejahteraan bersama", 
			"Dapat mewujudkan ketenangan lingkungan",
			"Dapat dijadikan arena berkumpul dengan warga"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);	
	
	// 10
	pushItem(
		/*content*/
		"Organisasi yang didirikan pada taggal 25 Desember 1912 oleh tokoh Tiga Serangkai yaitu Douwes DEkker, Dr. Cipto Mangunkusumo, dan Suwardi Suryaningrat adalah...", 
		
		/*option*/
		[
			"Taman siswa", 
			"Indische Partij", 
			"Partai Indonesia Raya", 
			"Perhimpunan Indonesia",
			"Partai Nasional Indonesia"
		], 
		
		/*scores*/
		[0,5,0,0,0]
	);	
	
	// 11
	pushItem(
		/*content*/
		"Globalisasi adalah sesuatu yang tidak dapat dielakkan lagi pada abat ke-21. Akan tetapi, Globalisasi memiliki sisi buruk sebagaimana dibawah ini, kecuali...", 
		
		/*option*/
		[
			"Menghambat pertumbuhan sektor industri lokal", 
			"Meningkatkan pendapatan masyarakat", 
			"Memperburuk neraca pembayaran", 
			"Sektor keuangan semakin tidak stabil",
			"Memperburuk prospek pertumbuhan ekonomi jangka panjang"
		], 
		
		/*scores*/
		[0,5,0,0,0]
	);	
	
	// 12
	pushItem(
		/*content*/
		"Agenda pokok sidang BPUPKI yang berlangsung dai tanggal 10-17 Juli 1945 membahas tentang....", 
		
		/*option*/
		[
			"Waktu dan tempat Proklamasi", 
			"Dasar Negara Indonesia Merdeka", 
			"Pembaca teks Proklamasi", 
			"Rencana UUD dan pembukaannya",
			"Pendirian PPKI"
		], 
		
		/*scores*/
		[0,0,0,5,0]
	);	
	
	// 13
	pushItem(
		/*content*/
		"DPD dapat memberikan pertimbangan kepada DPR yang berkaitan dengan rancangan undang-undang berikut, kecuali...", 
		
		/*option*/
		[
			"Anggaran pendapatan dan belanja negara", 
			"Agama", 
			"Pajak", 
			"Pendidikan",
			"Kemanan"
		], 
		
		/*scores*/
		[0,0,0,0,5]
	);	
	
	// 14
	pushItem(
		/*content*/
		"Adannya penerimaan terhadap perbedaan sebagai suatu kenyataa atau realitas masyarakat merupakan sikap positif terhadap...", 
		
		/*option*/
		[
			"Semua orang", 
			"Pancasila dan UUD 1945", 
			"Pemerinatah NKRI", 
			"Peraturan Perundang-undangan",
			"Peraturan Presiden"
		], 
		
		/*scores*/
		[0,5,0,0,0]
	);	
	
	// 15
	pushItem(
		/*content*/
		"Periode 27 Desember 1949 sampau dengan 17 Agustus 1950 UUD yang berlaku di Indonesia adalah...", 
		
		/*option*/
		[
			"UUD Proklamasi", 
			"UUD 1945", 
			"Konstitusi RIS", 
			"UUD sementara 1950",
			"Undang-Undang Dasar 1949"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);	
	
	// 16
	pushItem(
		/*content*/
		"Sistem pertahanan negara RI bersifat Semesta, artinya...", 
		
		/*option*/
		[
			"Melibatkan masyarakat di seluruh dunia", 
			"Mempertimbangkan kondisi alam dan lingkungan", 
			"Pelaksanaan berdasarkan prinsip-prinsip internasional", 
			"Melibatkan seluruh rakyat dan seluruh komponen bangsa",
			"Menggunakan persenjataan yang bersumber dari berbagai negara"
		], 
		
		/*scores*/
		[0,0,0,5,0]
	);	
	
	// 17
	pushItem(
		/*content*/
		"Bila telah dibentuk suatu peraturan perundang-undangan, maka secara yuridis undang-undang baru yang berlaku. Hal ini dikenal dengan istiah...", 
		
		/*option*/
		[
			"<i>Lex posterior derogat legi priori</i>", 
			"<i>Lex generalis de-rogat legi specialis</i>", 
			"<i>Lex specialis dere-gat legi generali</i>", 
			"<i>Lex priori dero-gat legi posterior</i>",
			"<i>Lex specialis derogat posterior</i>"
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);

	// 18
	pushItem(
		/*content*/
		"Yang bukan merupakan kekuatan Pancasila dalam kehidupan bangsa Indonesia adalah...", 
		
		/*option*/
		[
			"Memiliki nilai-nilai dasar yang kuat dan tumbuh dari budaya bangsa Indonesia", 
			"Menerima dan mengembangkan pemikiran-pemikiran asing tanpa batas", 
			"Memiliki kekuatan sejarah perjuangan bangsa Indonesia", 
			"Menerima dan mengembangkan pemikiran asing yang sesuai dengan masyarakat Indonesia",
			"Memiliki pedoman untuk menangkal segala bentuk ancaman"
		], 
		
		/*scores*/
		[0,5,0,0,0]
	);	
	
	// 19
	pushItem(
		/*content*/
		"Wujud pengamalan Pancasila yang mengandung nilai moral kemanusiaan adalah...", 
		
		/*option*/
		[
			"Mengakui ke-Bhinneka Tunggal Ika-an sebagai arah pembinaan persatuan dan kesatuan bangsa", 
			"Kedaulatan negara adalah ditangan Majelis Permusyawaratan Rakyat", 
			"Menghargai sesama manusia yang memiliki rasa, cipta, cinta, dan karsa", 
			"Kedaulatan negara ada ditangan rakyat",
			"Mewujudkan cita-cita masyarakat yang adil makmur merata material dan spiritual"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);	
	
	// 20
	pushItem(
		/*content*/
		"Maksud dan tuuan berdirinya organisasi negara-negara Asia Tenggara (ASEAN) adalah...", 
		
		/*option*/
		[
			"Membentuk satu kesatuan antara bangsa-bangsa yang berada di kawasan wilayah Asia Tenggara", 
			"Melindungi bangsa bangsa asia tenggara dari ancaman imperialis dan kolonialis", 
			"Membentuk hubungan kerjasama antara bangsa-bangsa Asia Tenggara",
			"Menciptakan kawasan aman dan damai di wilayah Asia Tenggara",
			"Melindungi wilayah bangsa-bangsa Asia Tengga dari pengaruh komunis"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);	
	
	// 21
	pushItem(
		/*content*/
		"Sebelum berlangusng Konferensi Asia Afrika I pada tahun 1954 telah diadakan Konferensi Kolombo yang bertujuan untuk...", 
		
		/*option*/
		[
			"Membahasa masalah Vietnam dalam menghadapi Konferensi New Delhi dan membahas tentang akan diadakannya KAA", 
			"Membahasa masalah Kamboja, menghadapi Konferensi Jenew, dan membahas tentang akan diadakannya KAA", 
			"Membahasa masalah Singapura, menghadapi Konferensi Jenew, dan membahasa tentang akan diadakannya KAA",
			"Akan mengadakan KAA, membahas Konferensi Bogor, membicarakan masalah Vietnam",
			"Membahasa masalah Vietnam dalam menghadapi Konferensi Jenewa dan membahas akan menyelenggarakan KAA"
		], 
		
		/*scores*/
		[0,0,0,5,0]
	);	
	
	// 22
	pushItem(
		/*content*/
		"Sistem Semi-Presidensil adalah sistem yang membagi tanggung jawab serta hak dalam menjalankan pemerintahannya antara Presiden atau gelar lain serta Perdana Menteri. Perdana Menteri yang akan membentuk kabinet, ditunjuk dan dipilih oleh Presiden sendiri. Negara-negara berikut ini menggunakan sistem Semi-Presidensil sebagai sistem pemerintahannya, kecuali...", 
		
		/*option*/
		[
			"Mesir", 
			"Taiwan", 
			"Rusia",
			"Filipina",
			"Perancis"
		], 
		
		/*scores*/
		[0,0,0,5,0]
	);	
	
	// 23
	pushItem(
		/*content*/
		"Sasaran pembangunan nasional adalah membentuk menusia Indonesia seutuhnya. Berikut ini yang bukan termasuk maksud dari manusia Indonesia yang seutuhnya adalah...", 
		
		/*option*/
		[
			"Stimulasi", 
			"Ketentraman", 
			"Kepuasan",
			"Berkecukupan",
			"Merdeka"
		], 
		
		/*scores*/
		[0,0,0,0,5]
	);		
	
	// 24
	pushItem(
		/*content*/
		"Kedudukan Pancasila sebagai ideologi bangsa tercantu dalam ketetapan MPR nomor...", 
		
		/*option*/
		[
			"TAP MPR No. XIV/MPR/1998", 
			"TAP MPR No. XV/MPR/1998", 
			"TAP MPR No. XVI/MPR/1998",
			"TAP MPR No. XVII/MPR/1998",
			"TAP MPR No. XVIII/MPR/1998"
		], 
		
		/*scores*/
		[0,0,0,0,5]
	);		
	
	// 25
	pushItem(
		/*content*/
		"Bagian dari UUD 1945 yang tidak dapat diubah lagi adalah...", 
		
		/*option*/
		[
			"Pembukaan", 
			"Bab", 
			"Pasal-pasal",
			"Pasal aturan peralihan",
			"Pasal aturan tambahan"
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);
	
	// 26
	pushItem(
		/*content*/
		"Negara hendak mewujudkan suatu keadilan sosial bagi seluruh rakyat Indonesia. Hal tersebut merupakan pokok pikiran alenia ... pembuakaan UUD 1945.", 
		
		/*option*/
		[
			"Pertama", 
			"Kedua", 
			"Ketiga",
			"Keempat",
			"Kelima"
		], 
		
		/*scores*/
		[0,0,0,5,0]
	);	
	
	// 27
	pushItem(
		/*content*/
		"Dalam kehidupan modern seperti sekarang ini, makin disadari pentingnya hubungan antar bangsa. Hal ini sesuai dengan isi pembukaan UUD 1945 alinea ke-4, yaitu...", 
		
		/*option*/
		[
			"Harus hati-hati dan waspada terhadap agresi negara lain", 
			"Harus memperhatikan perkembangan negara lain", 
			"Ikut serta menjaga ketertiban dunia, berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial",
			"Harus memeliki kekuatan yang kokoh dan tangguh",
			"Supaya berkehidupan kebangsaan yang bebas"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);	

	// 28
	pushItem(
		/*content*/
		"Amandemen pertama terhadap UUD 1945 ditujukan untuk mengurasi kewenangan presiden. Hal ini karena sebelum era reformasi...", 
		
		/*option*/
		[
			"Adanya dominasi kekuasaan eksekutif yang mengarh pada otoriter", 
			"Presiden kurang bekerjasama dengan lembaga-lembaga lainnya", 
			"MPR tidak dapat mengevaluasi kinerja Presiden dengan efektif",
			"DPR mengalami kesulitan mengadakan kontrol terhadap kinerja Presiden",
			"Kekuasaan presiden terlalu lemah"
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);			
	
	// 29
	pushItem(
		/*content*/
		"Tokoh yang menyampaikan lima asa Negara Indonesia Merdeka yang berisi Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, dan Kesejahteraan Rakyat ialah...", 
		
		/*option*/
		[
			"Prof. Dr. Mr. Supomo", 
			"Bung Tomo", 
			"Mohammad Yamin",
			"Ir. Soekarno",
			"Mohammad Hatta"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);		
	
	// 30
	pushItem(
		/*content*/
		"Untuk meraih kesejahteraan bersama berdasakan keadilan sosial, kita harus mengembangkan...", 
		
		/*option*/
		[
			"Pemerataan kesempatan kerja", 
			"Pemerataan pendapat", 
			"Usaha bersama yang menguntungkan",
			"Usaha bersama yang mewujudkan kesejahteraan",
			"Usaha bersama untuk mewujudkan kemajuan yang merata dan berkeadilan sosial"
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);		
	
	// 31
	pushItem(
		/*content*/
		"Perhatikan pernyataan dibawah ini!"+
		"<ol>" +
		"<li>Berubahnya arah politik luar negeri dari bebas dan aktif menjadi politik yang memihak salah satu blok</li>" +
		"<li>Demokrasi yang berkembang adalah demokrasi liberalisme</li>" +
		"<li>Pimpinan lembaga-lembaga negara dijadikan menteri-menteri negara</li>" +
		"<li>Penetapan Pidato Kenegaraan Ir. Soekarno sebagai GBHN bersifat sementara</li>" +
		"</ol>"+
		"Penyimpangan-penyimpangan yang terjadi pada masa pemerintahan Orde Lama ditunjukkan oleh nomor...",
		
		/*option*/
		[
			"1 dan 2", 
			"1 dan 3", 
			"2 dan 3",
			"2 dan 4",
			"3 dan 4"
		], 
		
		/*scores*/
		[0,5,0,0,0]
	);	

	// 32
	pushItem(
		/*content*/
		"Berdasakan pasal 11 ayat 2 UU No. 33 Tahun 2004, Dana Bagi Hasil yang bersumber dari pajak daerah terdiri dari...",
		
		/*option*/
		[
			"Pajak perikanan, PBB, pajak kendaraan bermotor", 
			"PPh, pajak bahan bakar kendaraan, BPHTB", 
			"PBB, BPHTB, PPh",
			"PPh, PPN, Bea Material",
			"Pajak Daerah, Pajak Badan, PPh"
		], 
		
		/*scores*/
		[0,0,5,0,0]
	);		
	
	// 33
	pushItem(
		/*content*/
		"Hubungan kerjasama antar lembaga tinggi negara yang diatur dalam UUD 1945 adalah...",
		
		/*option*/
		[
			"Presiden memberi grasi dan rehabilitas dengan memperhatikan pertimbangan Mahkamah Agung", 
			"Presiden mengangkat dan memberhentikan menteri dengan persetujuan DPR", 
			"DPR bersama DPD meminta pertanggungjawaban kinerja para menteri",
			"BPK memeriksa keuangan negara hasilnya dilaporkan kepada Presidan",
			"Presiden dan wakil Presiden bertanggung jawab terhadap Mahkamah Agung"
		], 
		
		/*scores*/
		[5,0,0,0,0]
	);		

	// 34
	pushItem(
		/*content*/
		"Perhatikan pernyataan-pernyataan berikut!"+
		"<ol>" +
		"<li>Memberi arah yang mantap menuju tujuan masyarakat</li>" +
		"<li>Membentuk identitas bangsa</li>" +
		"<li>Untuk mengatasi berbagai konflik dan ketegangan sosial</li>" +
		"<li>Memperdalam dinding pemisah dari berbagai keanekaragaman kehidupan</li>" +
		"<li>Meningkatkan kesejahteraan individu</li>" +
		"</ol>"+
		"Pernyataan di atas yang merupakan arti penting ideologi bagi suatu bangsa ditunjukkan oleh nomor...",
		
		/*option*/
		[
			"2, 3 dan 4", 
			"1, 3, dan 5", 
			"4, 5, dan 1",
			"1, 2, dan 3",
			"3, 4, dan 5"
		], 
		
		/*scores*/
		[0,0,0,5,0]
	);		

		// 35
	pushItem(
		/*content*/
		"Penyimpangan kostitusi pada masa konstitusi RIS relatif sangat sedikit, hal ini dikarenakan...<br/>",
		
		/*option*/
		[
			"Konstitusi RIS sangat ideal bagi Indonesia", 
			"Konstitusi RIS sangat cocok diterapkan di Indonesia", 
			"Konstitusi RIS menggunakan bentuk negara Federal",
			"Pemerintahan pada masa konstitusi RIS selalu berganti-ganti",
			"Masa berlakunya konstitusi RIS sangat singkat, yaitu hanya 9 bulan"
		], 
		
		/*scores*/
		[0,0,0,0,5]
	);		
	return returned;
})();
