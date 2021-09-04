window.DATA_QUESTION_TIU = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `Paripurna	=	.....
///Lengkap
///Perdana
///Panjang
///Parlemen
///Musyawarah 
///a

///Aliansi	><	.....
///Perkawanan
///Perlawanan
///Permusuhan
///Persekutuan
///Kerjasama
///c

///Gaung	:	Gema  	=  ...	:  ...
///Letupan	: 	Ledakan
///Belut	: 	Ular
///Bukit	: 	Lembah
///Hutan	:	Pohon
///Keras	:	Padat
///c

///Provinsi	:   Kabupaten	    : Kecamatan   = .... :  ....  : ....
///Tinggi   	:  Besar  	    :  Kecil
///Gubernur    :  Bupati  	    :  Camat 
///Akar    	:  Batang  	    :  Daun  
///Ayah    	:  Ibu  	    	    :  Anak   
///Akar    	:  Ranting  	    :  Daun   
///b

///Jika saya memiliki uang, saya membuat garasi dan membeli mobil. Saat ini saya memiliki uang.
Simpulan yang tepat adalah...
///Saya membeli mobil karena sudah membuat garasi.
///Saya membuat garasi dan membeli mobil.
///Saya membuat garasi karena membeli mobil.
///Saya memiliki uang untuk membeli mobil.
///Saya membuat garasi untuk menyimpan mobil.
///b

///Jika guru matematika menambah jam pelajaran di hari Rabu, nilai siswa banyak yang meningkat. Jika nilai siswa banyak yang meningkat, siswa dapat mengikuti kegiatan ekstrakurikuler.
Simpulan yang tepat adalah...
///Jika guru matematika menambah jam pelajaran, nilai siswa banyak yang meningkat.
///Guru matematika menambahkan jam pelajaran di hari Rabu jika siswa tidak mengikuti kegiatan ekstrakurikuler.
///Jika guru matematika menambah jam pelajaran di hari Rabu, ekstrakurikuler dibatalkan.
///Siswa dapat mengikuti kegiatan ekstrakurikuler jika guru matematika menambah jam pelajaran di hari Rabu.
///Nilai siswa banyak yang meningkat jika tidak mengikuti kegiatan ekstrakurikuler.
///d

///Semua isi buku Doel merupakan catatan harian dan materi kuliah. Tidak ada cerita fiksi pada catatan dan materi kuliah. 
Berdasarkan dua pernyataan di atas, simpulan yang tepat adalah...
///Tidak ada cerita fiksi yang menjadi isi dari buku Doel.
///Tidak ada isi dari buku Doel yang bukan cerita fiksi.
///Ada cerita fiksi yang bukan merupakan isi dari buku Doel.
///Semua catatan harian dan materi kuliah adalah isi buku Doel.
///Ada cerita fiksi yang merupakan isi buku Doel.
///a

///Sebagian peserta seminar adalah wartawan. Semua wartawan memakai tanda pengenal khusus.
Berdasarkan dua pernyataan di atas simpulan yang paling tepat adalah sebagai berikut....
///Sebagian yang memakai tanda pengenal khusus bukan peserta seminar.
///Sebagian peserta seminar tidak memakai tanda pengenal khusus.
///Sebagian yang memakai tanda pengenal khusus adalah peserta seminar.
///Sebagian wartawan bukan peserta seminar.
///Sebagian yang tidak memakai tanda pengenal khusus bukan peserta seminar.
///c

///Pada suatu pemilihan kepala desa terdapat lima peserta, yaitu A, B, C, D, E. Perolehan suara kelima calon tersebut adalah:
<ul>
<li>B lebih banyak dari E, tetapi lebih sedikit dari D.</li>
<li>Perolehan suara calon E lebih banyak dari A dan A lebih banyak dari C.</li>
</ul>
<br/>
<br/>
Calon kepala desa dengan urutan perolehan suara pertama dan keempat adalah...
///B dan A
///D dan C
///B dan C
///D dan A
///E dan B
///d

///Albert, Dian, Tika, Andini, dan Elia telah mengikuti tes dengan kecepatan pengerjaan dan hasil ujian yang berbeda sebagai berikut:
<ul>
<li>Waktu Albert lebih cepat daripada waktu Tika, namun nilai Albert lebih rendah daripada nilai Tika.</li>
<li>Waktu Tika lebih cepat daripada waktu Dian, namun nilai Tika lebih rendah daripada nilai Dian.</li>
<li>Waktu Dian lebih cepat daripada waktu Andini, namun nilai Dian lebih rendah daripada nilai Andini.</li>
<li>Waktu Andini lebih cepat daripada waktu Elia, namun nilai Elia tidak lebih rendah daripada nilai Andini.</li>
</ul>
<br/>
<br/>
Berdasakan data tersebut, maka dilihat dari waktu dan nilai yang diperoleh, Dian menempati urutan waktu...
///kedua tercepat dan nilai ketiga tertinggi
///ketiga tercepat dan nilai kedua tertinggi
///ketiga tercepat dan nilai ketiga tertinggi
///keempat tercepat dan nilai ketiga tertinggi
///ketiga tercepat dan nilai keempat tertinggi
///c 

///Bu Guru memberikan kebebasan kepada para siswa untuk membuat empat makalah dari topik yang berbeda. Di bawah ini persyaratan yang diberikan. 
<ul>
<li>Siswa memilih empat topik antara, K, L, M, N, O, P, Q, dan R. </li>
<li>Antara topik L, M, dan O harus dipilih satu. </li>
<li>Topik N dan harus dipilih bersamaan. </li>
<li>Topik P dan K harus bersama O.</li>
<li>Topik Q harus bersama L.</li>
</ul>
<br/>
<br/>
Jika seorang siswa tidak ingin memilih topik K dan R, topik makalah yang dapat ia kerjakan adalah...
///I, L, N, Q
///L, M, N, Q
///J, M, P, Q
///J, L, P, Q
///J, M, N, Q
///a 

///Delapan kursi suatu pertunjukan tersusun menjadi dari dua baris. Baris pertama diberi nomor A1, A2, A3, dan A4, sedangkan baris kedua diberi nomor B1, B2, B3, dan B4. Suatu ketika enam orang penonton, Andika, Bobi, Clara, Evy, Hanis, dan Yayan datang mengunjungi pertunjukan tersebut dengan pengaturan sebagai berikut:
<ul>
<li>Evy duduk di depan Andika</li>
<li>Kursi nomor A2 selalu kosong</li>
<li>Yayan tidak duduk di sebelah Bobi</li>
<li>Hanis duduk di kursi nomor A4</li>
<li>Clara tidak duduk di kursi nomor B4</li>
</ul>
<br/>
<br/>
Jika Yayan duduk di kursi nomor B3, maka Bobi harus duduk di kursi nomor....
///B1
///B2
///B4
///A1
///A3
///e 

///Hasil dari 480: \\((-6) + 45 - 28 \\times (-11) + 49 =\\)
///-218
///-194
///-128
///322
///482   
///d

///Nilai dari \\((\\frac{4}{10} - \\frac{1}{5})^{2} - (\\frac{3}{7} + \\frac{1}{5})^{2}\\) adalah...
///\\(-\\frac{9}{35}\\)
///\\(-\\frac{7}{35}\\)
///\\(-\\frac{7}{25}\\)
///\\(-\\frac{9}{25}\\)
///\\(\\frac{7}{5}\\)
///a 

///Jika  \\(\\frac{3}{28} + \\frac{5}{x} + 37,5% = \\frac{67}{56}\\) maka nilai  \\(4x\\) adalah….
///24
///28
///32
///36
///40
///b

///1000, 3000, 3004, 1502, 4506, 4510, …
///2255
///2345
///2455
///2555
///2245
///a 

///2000, 1008, 4000, 504, 8000, 252, …, …
///17000, 116
///16000, 126
///16000, 136
///15000, 146
///15000, 156
///b

///7, 18, 40, 84, 172, ….
///181
///184
///216
///264
///348
///e

///B, Y, D, T, H, P, ….,  ….
/// M, P
/// N, M
/// P, N
/// N, O
/// O, N
///b

///Jika \\(x = \\frac{1}{63} - \\frac{1}{67}\\) dan  \\(y = \\frac{1}{64} - \\frac{1}{65} \\) maka ….
///\\(x >y\\)
///\\(x < y\\)
///\\(x = y\\)
///\\(x < 2y\\)
///Hubungan \\(x\\) dan \\(y\\) tidak dapat ditentukan
///a 

///Jika \\(x\\) adalah luas persegi panjang dengan panjang sisi \\(p\\) cm, dan \\(y\\) adalah luas segitiga siku-siku dimana sisi siku-sikunya adalah \\(p\\) cm dan \\(2p\\) cm, maka ….
///\\(x > y\\)
///\\(x < y\\)
///\\(x = y\\)
///\\(2x = y\\)
///Hubungan \\(x\\) dan \\(y\\) tidak dapat ditentukan
///c 

///Sebuah kereta api berjalan selama 5 jam dengan kecepatan rata-rata 56 km/jam. Jika kereta api yang lain dapat menempuh jarak tersebut dalam waktu 4 jam, maka kecepatan rata-ratanya adalah...
///50
///60
///70
///80
///90
///c 

///Persediaan makanan untuk  15 ekor kambing habis setelah 24  hari. Jika dijual  3 ekor kambing, maka persediaan makanan tersebut akan habis setelah .... hari
///30           
///40     
///45
///54
///60
///a 

///Sebuah mobil menghabiskan 8 liter bensin untuk menempuh jarak 56 km. Jika jarak yang ditempuh 84 km, maka bensin yang diperlukan adalah... liter
/// 5,5                
/// 7,0 
///10,5
///12,0
///12,5
///d 

///Si X memiliki uang Rp. 4.500.000 dan ia berniat untuk membeli  sebuah  handycam  seharga  Rp.  2.500.000  sebelum   diskon.   Potongan harga   handycam   tersebut   adalah 20%. Selain itu, X juga membelanjakan uangnya   untuk   keperluan   lain   sebesar   Rp.   1.500.000.    Sisa uang X saat ini adalah….
///Rp. 1.000.000
///Rp. 1.200.000
///Rp. 1.300.000
///Rp. 1.400.000
///Rp. 1.500.000
///a 

///Jarak rumah A dan rumah B 275 km. A berkendara dari rumahnya menuju rumah B pada pukul 10.00 dengan kecepatan rata-rata 52 km/jam. Pada waktu bersamaan B berkendara menuju rumah A dengan kecepatan 58 km/jam. Jika melalui jalan yang sama dan semua lancar, waktu berpapasan A dan B adalah….
///11.30
///12.00
///12.15
///12.30
///13.30
///d 

///Nilai rataan hitung pada tes matematika 10 siswa adlah 55 dan jika digabung dengan 5 siswa, rataannya menjadi 53. Nilai rataan kelima siswa tersebut adalah….
///39
///45
///49
///54
///59
///c 

///A dan B mempunyai hobi bermain layang-layang. A pasti bermain layang-layang setiap 10 hari sekali, sedangkan B tiap 25 hari. Jika A dan B bermain layang-layang bersama pada tanggal 1 Maret, waktu mereka akan bermain bersama lagi adalah….
///19 April
///20 April
///21 April
///22 April
///23 April
///b

///<img src="https://1.bp.blogspot.com/-kdOpPg3sP00/YTPE1niYTyI/AAAAAAAAC_Y/Wkf5jcUKJuoHQ8LAajGUfxpBG24DuoL-gCLcBGAsYHQ/s0-rw/tiu29-soal.jpg" />
///<img src="https://1.bp.blogspot.com/-R_-EwLSmNOM/YTPE0jKxsiI/AAAAAAAAC_M/qg8cg9TWpiQ-VQ8iK6qdyuRsvX3ZqLksgCLcBGAsYHQ/s0-rw/tiu29-a.jpg" />
///<img src="https://1.bp.blogspot.com/-vreN7ZOioj8/YTPE0uQr8UI/AAAAAAAAC_E/0wz85xY6IUk3u9-Rj24nx5vIvOeCZyZ9QCLcBGAsYHQ/s0-rw/tiu29-b.jpg" />
///<img src="https://1.bp.blogspot.com/-cxRgLhwB6-c/YTPE0mihg0I/AAAAAAAAC_I/AAzhdI1x5g4kxefZkSaW-CYuXiv4AANzACLcBGAsYHQ/s0-rw/tiu29-c.jpg" />
///<img src="https://1.bp.blogspot.com/-3mfElfQQvZ0/YTPE1ZN5GLI/AAAAAAAAC_Q/EeTNWkPkp_E3nPyAwbPdUYnbhKVWVPrxACLcBGAsYHQ/s0-rw/tiu29-d.jpg" />
///<img src="https://1.bp.blogspot.com/-CyKnmr6OvLY/YTPE1q_jN4I/AAAAAAAAC_U/HcqFFpTnDTIiZVCLDw3cSFHuo1KNpFKOQCLcBGAsYHQ/s0-rw/tiu29-e.jpg" />
///C

///<img src="https://1.bp.blogspot.com/-yt347gJA0HY/YTPE3Ef_RYI/AAAAAAAAC_w/Q6qlZ1tpDx4Vh_SKl1EChvYhpQVLVRM6wCLcBGAsYHQ/s0-rw/tiu30-soal.jpg" />
///<img src="https://1.bp.blogspot.com/-L9y2qi3bQA4/YTPE2B7hp8I/AAAAAAAAC_c/XZ4-t5LESCEW7HXstwB6Q2orxtIPIXcPACLcBGAsYHQ/s0-rw/tiu30-a.jpg" />
///<img src="https://1.bp.blogspot.com/-16A5Lq6edu4/YTPE2dL_8dI/AAAAAAAAC_g/ZypT2gJtkSY1V9dGglXntVC2FDJvvSRoACLcBGAsYHQ/s0-rw/tiu30-b.jpg" />
///<img src="https://1.bp.blogspot.com/-pIkb-sVfpjY/YTPE2Sl06lI/AAAAAAAAC_k/Gs8IonQzrbsWgakvgcEpGWXvfQ8UEME_gCLcBGAsYHQ/s0-rw/tiu30-c.jpg" />
///<img src="https://1.bp.blogspot.com/-DD8xHBPI-P4/YTPE2_ntzoI/AAAAAAAAC_o/Uy_B05eE97ArA_oEks6EpCVOM8nvVLOQwCLcBGAsYHQ/s0-rw/tiu30-d.jpg" />
///<img src="https://1.bp.blogspot.com/-qFqOKpF37l4/YTPE3F3FQDI/AAAAAAAAC_s/fEOxjPU0iq4wiOhfJJ6r-7hOfgcrpl1OwCLcBGAsYHQ/s0-rw/tiu30-e.jpg" />
///E

///<img src="https://1.bp.blogspot.com/-TAWEk9qj5vc/YTPE4pQCSyI/AAAAAAAADAI/WmETVd2EpC0LFBUd3DCBHRecTMcGDMXWwCLcBGAsYHQ/s0-rw/tiu31-soal.jpg" />
///<img src="https://1.bp.blogspot.com/-ZlE4aWnsYuw/YTPE3i9JtKI/AAAAAAAAC_0/Rmu72vZc1rcXbT9_rb9ulBUBy1TX6ZddgCLcBGAsYHQ/s0-rw/tiu31-a.jpg" />
///<img src="https://1.bp.blogspot.com/-4aMF08z2rok/YTPE38XMMmI/AAAAAAAAC_4/DfRNW-i0HPoa1ZxmH68uWQiZItRX6LpMQCLcBGAsYHQ/s0-rw/tiu31-b.jpg" />
///<img src="https://1.bp.blogspot.com/-R_WDbF7wTQQ/YTPE36luOLI/AAAAAAAAC_8/BH8n4n00gsIgCC1-s8ux3u8YhD6YicxAgCLcBGAsYHQ/s0-rw/tiu31-c.jpg" />
///<img src="https://1.bp.blogspot.com/-hjURR1MR31g/YTPE4eIDyVI/AAAAAAAADAA/UNQ06sC2ZqENIrFNsyi8jyK3O52w3XenQCLcBGAsYHQ/s0-rw/tiu31-d.jpg" />
///<img src="https://1.bp.blogspot.com/-JKrCkjYLt6U/YTPE4c_rbRI/AAAAAAAADAE/YkyHpUHOvTgyRqi2ff-w9GJJWQsWOg4vgCLcBGAsYHQ/s0-rw/tiu31-e.jpg" />
///E

///
///<img src="https://1.bp.blogspot.com/-EkRBwdUOmYc/YTPE5KGWwLI/AAAAAAAADAM/PR7it3VAjYoZOJdCv_5zjdhc5-2fXJwKQCLcBGAsYHQ/s0-rw/tiu32-a.jpg" />
///<img src="https://1.bp.blogspot.com/-NomoO8DAhI8/YTPE5EGQ5EI/AAAAAAAADAQ/QQAasCmMxa86hU98weFg-E0eVi7wtDe8QCLcBGAsYHQ/s0-rw/tiu32-b.jpg" />
///<img src="https://1.bp.blogspot.com/-tYEVPrCkd-A/YTPE5ZU4BiI/AAAAAAAADAU/2PgY_ECzLho3-V5m_bJcQ2dRDL0bxWBKQCLcBGAsYHQ/s0-rw/tiu32-c.jpg" />
///<img src="https://1.bp.blogspot.com/-UryJu_hCf-w/YTPE57QVvvI/AAAAAAAADAY/PHhTH-QhapwN8msZJ4NE67aTcJjeYhmMgCLcBGAsYHQ/s0-rw/tiu32-d.jpg" />
///<img src="https://1.bp.blogspot.com/-36EEb9asvoY/YTPE56r73ZI/AAAAAAAADAc/YRVRatKtH2MXM-gDzIi9rNtInfwmIMiDwCLcBGAsYHQ/s0-rw/tiu32-e.jpg" />
///D

///
///<img src="https://1.bp.blogspot.com/-ncqxf96S4YQ/YTPE6ALW4YI/AAAAAAAADAg/F99peTXnt0sJmdG5sB0dixWW3N3ViN4GgCLcBGAsYHQ/s0-rw/tiu33-a.jpg" />
///<img src="https://1.bp.blogspot.com/-TY0erRmc-cQ/YTPE6l0XqSI/AAAAAAAADAk/GXZVpuUtoVky_XgsZqocu7GPbTaQsp30gCLcBGAsYHQ/s0-rw/tiu33-b.jpg" />
///<img src="https://1.bp.blogspot.com/-fjYsvDrtnJo/YTPE6o2NYlI/AAAAAAAADAo/-00IVBIonN0KB_6nZ4IAq786XNrUkHx9gCLcBGAsYHQ/s0-rw/tiu33-c.jpg" />
///<img src="https://1.bp.blogspot.com/-M2kCHEDawrk/YTPE61bTvEI/AAAAAAAADAs/4BgrqaLgXDEtdtz-Lvxhfo7j6Aifu-aQwCLcBGAsYHQ/s0-rw/tiu33-d.jpg" />
///<img src="https://1.bp.blogspot.com/-NGkb8L9BbTk/YTPE7QX-xrI/AAAAAAAADAw/bcha1fWfQQEEgETA_XetvabCmx96H4gKQCLcBGAsYHQ/s0-rw/tiu33-e.jpg" />
///B

///<img src="https://1.bp.blogspot.com/-odwuVKyuf0Q/YTPE85mDDFI/AAAAAAAADBI/2C0d-QUGk7oJCoctQnw1WT0Bd-6g8t9XwCLcBGAsYHQ/s0-rw/tiu34-soal.jpg" />
///<img src="https://1.bp.blogspot.com/-jBN_i0qHzVw/YTPE7dQOanI/AAAAAAAADA0/x6-YcqHzwjQXSfVozWKdsBsn-XSaLkhuACLcBGAsYHQ/s0-rw/tiu34-a.jpg" />
///<img src="https://1.bp.blogspot.com/-ce5EGw_bZ5A/YTPE7vUQvxI/AAAAAAAADA4/3Wa3DQi7eCILd3TaIGoWXRmzDumNZ27WwCLcBGAsYHQ/s0-rw/tiu34-b.jpg" />
///<img src="https://1.bp.blogspot.com/-pa_hHZHlQsQ/YTPE8NHsF0I/AAAAAAAADA8/R0TUWJe4s5oculB7iZM19vr41qcHMhyJwCLcBGAsYHQ/s0-rw/tiu34-c.jpg" />
///<img src="https://1.bp.blogspot.com/-OTPxmgYZ4Zk/YTPE8UK1x7I/AAAAAAAADBA/i2OTFwE0QI4yxiVELjWV4hAV84z6BgRnACLcBGAsYHQ/s0-rw/tiu34-d.jpg" />
///<img src="https://1.bp.blogspot.com/-1JK-qQOAnm0/YTPE8iSo-YI/AAAAAAAADBE/y4y46FYGFtAEdr24wzL8nAxQmtHeNJAUwCLcBGAsYHQ/s0-rw/tiu34-e.jpg" />
///A

///<img src="https://1.bp.blogspot.com/-OZyb2sJiKwc/YTPE-QxrYhI/AAAAAAAADBg/bBVq9eKt_mUEcHi0XK1elogaKgmSYGgqwCLcBGAsYHQ/s0-rw/tiu35-soal.jpg" />
///<img src="https://1.bp.blogspot.com/-Wyf2UPORCD0/YTPE9O4TQ6I/AAAAAAAADBM/js0HgioHmT0wGlxXt_XqYFRPFMVbQ3Q0QCLcBGAsYHQ/s0-rw/tiu35-a.jpg" />
///<img src="https://1.bp.blogspot.com/-ZA2dt0n_mW4/YTPE9YKvXyI/AAAAAAAADBQ/vxQrlQDjL8Ew57HGGsxi5Elw_3WmYUCsgCLcBGAsYHQ/s0-rw/tiu35-b.jpg" />
///<img src="https://1.bp.blogspot.com/-zmN9QCqpsx8/YTPE9hyD1UI/AAAAAAAADBU/bi-HayGUHTsdyZVEM2Qn3BqlTGitVOBvgCLcBGAsYHQ/s0-rw/tiu35-c.jpg" />
///<img src="https://1.bp.blogspot.com/-m2nSzXlntUo/YTPE94iPe7I/AAAAAAAADBY/JRBYOqWxbx8AXS_8DH-PsyzzPlLpiKDLQCLcBGAsYHQ/s0-rw/tiu35-d.jpg" />
///<img src="https://1.bp.blogspot.com/-EdVL7xR1OHg/YTPE9_TwjbI/AAAAAAAADBc/3sk8-qVbgGY67iNdNONiMbOY2MG9JItUACLcBGAsYHQ/s0-rw/tiu35-e.jpg" />
///A`;
	
	const returned = [];
	const arrayStringQuestions = [];
	const pieces = stringQuestions.split("///");
	const alpabetIndex = ["a", "b", "c", "d", "e"];
	const group = "TES INTELEGENSI UMUM";
	const groupAlias = "tiu";
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
			currentItem.scores = [];
			for(let sIndex = 0;sIndex < 5;sIndex++){
				if(p.toLowerCase() === alpabetIndex[sIndex]){
					currentItem.scores.push(5);
				}
				else{
					currentItem.scores.push(0);
				}
			}
			returned.push(currentItem);
			currentIndex = 0;
		}
	}


	return returned;
})();

//console.log(window.DATA_QUESTION_TIU);
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

print(info.join("\n"));*/
