window.DATA_QUESTION_TIU = (()=>{
	const p_stringTrim = (()=>{
		const reg_newLine = /\n/g;
		const reg_doubleSpace = /\s\s+/g;
		return (s)=>{
			return s.replace(reg_newLine, " ").replace(reg_doubleSpace, " ").trim();
		};
	})();
	const stringQuestions = `Wajah : Rona = ... : ...
///Kertas : Tulis
///Bendera : Kibar
///Cerita : Alur
///Buku : Gambar
///Cat : Kuas 
///B 

///Dirgahayu : Ulang Tahun = Selamat Berbahagia : ...
///Mobil Baru
///Putra Baru
///Pernikahan
///Kesembuhan
///Promosi 
///C 

///Gerhana :  Bulan : Matahari   = ...   :  ...  :  ...
///Jari   	:  Tangan  	:  Kaki   
///Hujan    :  Petir  	:  Gurun   
///Laut    	:  Ikan  	:  Nelayan   
///Kayu    	:  Lemari  	:  Kursi   
///Toko    	:  Buku  :  Pasar   
///A 

///Diketahui premis-premis sebagai berikut:
<ul>
<li>Setiap kehujanan, maka Tio sakit.</li>
<li>Setiap sakit, Tio demam</li>
<ul>
<br/>
Kesimpulan dari dua premis tersebut adalah ....
///Jika Tio sakit maka ia kehujanan.
///Setiap kehujanan Tio menjadi demam.
///Tio kehujanan dan ia sakit.
///Tio kehujanan dan ia demam.
///Tio demam karena kehujanan.
///B 

///Diketahui premis-premis:
<ul>
<li>Jika Mesir bergolak dan tidak aman, maka beberapa warga asing dievakuasi.</li>
<li>Semua warga asing tidak dievakuasi.</li>
</ul>
<br/>
Kesimpulan dari kedua premis tersebut adalah ....
///Jika Mesir tidak bergolak atau aman, maka beberapa warga asing dievakuasi
///Jika semua warga asing dievakuasi, maka Mesir bergolak dan tidak aman.
///Mesir bergolak tetapi aman.
///Mesir tidak bergolak atau aman.
///Mesir tidak bergolak dan semua warga asing tidak dievakuasi.
///D 

///Semua pelaut adalah perenang. Sebagian perenang bukan penyelam.
Simpulan yang tepat adalah ....
///Semua penyelam adalah pelaut.
///Sebagian pelaut bukan penyelam.
///Sebagian penyelam bukan perenang.
///Semua pelaut adalah penyelam.
///Semua penyelam bukan pelaut.
///C

///Setiap anggota kelompok A adalah anggota kelompok B. Setiap anggota kelompok B adalah anggota kelompok C.
Simpulan yang tepat tentang kemungkinan keanggotaan A, B, dan C adalah....
///Tidak mungkin ada anggota kelompok A yang tidak merupakan anggota kelompok C.
///Mungkin ada anggota kelompok A yang tidak merupakan anggota C.
///Tidak mungkin ada anggota kelompok C yang merupakan anggota A.
///Tidak mungkin ada anggota kelompok C yang merupakan anggota B.
///Mungkin ada anggota kelompok yang tidak merupakan anggota A.
///A

///Sekolah Cendekia merupakan sekolah yang berlabel Boarding School. Semua kegiatan asrama pun dilaksanakan oleh peserta didik secara bersama-sama. Salah satu kegiatan yang dilakukan dan menjadi kebiasaan para penghuni asrama adalah budaya antre saat mengambil jatah sarapan pagi. Biasanya ketika antre untuk mengambil sarapan, didapati urutan seperti berikut:
<ul>
<li>Mita berada pada urutan kedua di depan Ulfi, sedangkan Ulfi berbaris di belakang Eva.</li>
<li>Uma berada pada baris kelima di depan Ulfi, atau tepat di baris kedua di belakang Ama.</li>
<li>Pelayanan untuk setiap anak membutuhkan waktu tiga menit dan rata-rata siswa menyantap makanan dalam waktu lima menit.</li>
<li>Pada pukul tujuh kurang seperempat, seluruh siswa harus berada di sekolah untuk melaksanakan apel pagi.</li>
<li>Jarak sekolah dan asrama ditempuh dalam waktu lima menit.</li>
</ul>
<br/>
Urutan antrean untuk kelima anak tersebut dari yang paling belakang adalah...
///Ama-Uma-Eva-Mita-Ulfi
///Ama-Eva-Uma-Mita-Ulfi
///Mita-Eva-Uma-Ulfi-Ama
///Ulfi-Eva-Mita-Uma-Ama
///Ulfi-Mita-Eva-Ama-Uma
///D 

///Pada ujian akhir semester kali ini, seorang dosen yang mengampu mata kuliah Menulis Kreatif memerintahkan mahasiswanya untuk membuat feature yang baik secara tata bahasa. Seorang mahasiswa yang mampu membuat feature dengan sedikit kesalahan EBI (ejaan bahasa Indonesia) dan dalam waktu yang paling singkat akan mendapat hadiah dari dosen tersebut. Hasilnya, para mahasiswa tersebut menyelesaikan tulisannya dengan urutan sebagai berikut.
<ul>
<li>Ningrum mampu membuat feature lebih cepat daripada Tuti, dan tidak kalah cepat daripada Novi.</li>
<li>Alda membuat feature dalam waktu yang lebih singkat dibandingkan Bowo, tetapi tidak lebih cepat bila dibandingkan dengan Novi.</li>
<li>Tuti membuat feature lebih cepat daripada Novi, tetapi melakukan kesalahan EBI lebih banyak daripada Novi.</li>
<li>Kesalahan EBI yang dilakukan oleh Bowo lebih sedikit bila dibandingkan dengan kesalahan EBI yang dilakukan oleh Aida, tetapi tidak lebih sedikit daripada Tuti.</li>
<li>Ningrum melakukan kesalahan EBI lebih sedikit daripada Tuti dan tidak lebih banyak daripada Novi.</li>
</ul>
<br/>
Yang mendapat hadiah dari dosen adalah...
///Novi
///Tuti
///Ningrum
///Aida
///Bowo
///C 

///Menjelang Tahun Baru, sebuah pusat perbelanjaan menawarkan diskon besar-besaran. Banyak pengunjung berburu barang-barang mewah di malam pergantian tahun. Ketika didata, pengunjung yang masuk ke dalam pusat perbelanjaan tersebut mempunyai urutan sebagai berikut:
<ul>
<li>Eka memasuki pusat perbelanjaan tiga menit sebelum Nika.</li>
Nika mulai berbelanja tujuh menit setelah Biana.</li>
<li>Biana berbelanja jaket dan celana denim.</li>
<li>Nika keluar dari pusat perbelanjaan dua menit sebelum Biana.</li>
<li>Biana selesai berbelanja lima menit setelah Eka.</li>
<ul>
<br/>
Urutan pengunjung dari yang tercepat menyelesaikan pembelian adalah....
///Eka-Biana-Nika
///Biana-Eka-Nika
///Nika-Eka-Biana
///Eka-Nika-Biana
///Nika-Biana-Eka
///D 

///Masyarakat desa Candirejo kebanyakan berprofesi sebagai petani. Saat ini adalah musim tandur, yaitu musim menanam padi bagi para petani. Ada tiga tahapan yang harus dilakukan oleh para petani untuk mengelola sawahnya, yaitu tandur, perawatan, dan memetik hasil padi atau panen. Dari desa tersebut, diperoleh beberapa data berikut ini.
<ul>
<li>Sawah Pak Bari ditanami padi 2 minggu sebelum sawah Pak Tedjo.</li>
<li>Pak Tedjo menanam padi 18 hari setelah penanaman padi Pak Yadi.</li>
<li>Pak Yadi menanam padi tepat 2 hari sebelum Pak Surat.</li>
<li>Jika tidak ada halangan yang besar, padi akan dipanen 100 hari sejak hari penanaman padi dilakukan.</li>
<li>Harga jual beras semakin turun jika jumlah petani yang mengalami masa panen semakin banyak.</li>
</ul>
<br/>
Maka yang mengalami masa panen paling cepat adalah...
///Pak Yadi
///Pak Tedjo
///Pak Bari
///Pak Surat
///Pak Tedjo dan Bari
///A 

///Hasil kali dari \\(-23 \\times (-11) + 122 - 45 \\times 4 - 5,66 =\\)...
///189,34
///-316,66
///119,6
///316,66
///189
///A 

///Nilai 24% dari  \\(\\lgroup\\frac{2}{3} + \\frac{5}{5}\\rgroup\\) adalah...
///\\(\\frac{51}{25}\\)
///\\(\\frac{1}{3}\\)
///\\(\\frac{23}{50}\\)
///\\(\\frac{15}{41}\\)
///\\(\\frac{21}{50}\\)
///C 

///Hasil dari \\(\\frac{\\sqrt{2.783}}{\\sqrt{23}} \\times 2 - 6^{3} =\\)...
///12
///14
///-12
///-14
///15
///D 

///31, 62, 69, 138, 145, ...,  ....
///444 dan 981
///99 dan 78
///227 dan 887
///290 dan 297
///341 dan 887
///D 

///3183, 1050, 339, 102, ...
///34
///43
///23
///32
///52
///C 

///32, 76, 164, 340, ...
///889
///334
///998
///692
///887
///D 

///C, F, I, L, O, ...,  ...
/// U dan L
/// Y dan K
/// R dan U
/// K dan L
/// I dan L
///C 

///Jika \\(x = 386 - \\frac{386}{2} dan y = \\frac{386}{2}\\) maka...
///\\(x > y\\)
///\\(x < y\\)
///\\(x = y\\)
///\\(3x < 2y\\)
///\\(Hubungan x dan y tidak dapat ditentukan\\)
///C 
 
///Jika \\(x= n^{2} + 1  dan y = n^{3}  dengan n\\) merupakan bilangan bulat maka ....
///\\(x < y\\)
///\\(x > y\\)
///\\(x = y\\)
///\\(3x < 2y\\)
///\\(Hubungan x dan y tidak dapat ditentukan\\)
///E 

///Seorang petani mempunyai persediaan makanan untuk 80 ekor ayam selama 25 hari. Jika petani itu membeli 20 ekor ayam lagi, maka persediaan makanan itu akan habis dalam ... hari.
///30
///25
///20
///15
///10
///C 

///Suatu pekerjaan dapat diselesaikan oleh 10 orang dalam 21 hari. Setelah 3 hari bekerja , Pekerjaan itu terhenti selama 3 hari. Agar pekerjaan tersebut dapat diselesaikan tepat waktu, banyak pekerja yang perlu ditambah adalah...
///2 pekerja
///5 pekerja
///7 pekerja
///10 pekerja
///12 pekerja
///A 

///Roda sebuah sepeda menempuh jarak sejauh 27 meter setelah berputar 18 kali. Jika roda berputar 12 kali, maka berapakah jarak yang telah ditempuh roda tersebut adalah...
///22 meter
///21 meter
///18 meter
///15 meter
///12 meter
///C 

///Rangga mengendarai sepeda motor dari kota A ke kota B dengan  kecepatan rata-rata 50 km/jam. Ia berangkat pukul 07.45 pada waktu yang sama Danu mengendarai sepeda motor dari kota B ke kota A dengan kecepatan rata 60 km/jam, jika jarak kota tersebut 165 km, pada pukul berapa mereka akan berpapasan...
///09.35
///09.15
///08.25
///08.15
///08.45
///B 

///Toko elektronik “X” menjual televisi dan memperoleh keuntungan. Jika harga beli televisi tersebut Rp3.600.000,00, maka harga jualnya adalah ....
///Rp3.800.000,00
///Rp4.000.000,00
///Rp4.250.000,00
///Rp4.500.000,00
///Rp5.000.000,00
///D 

///Berat rata-rata 15 siswa adalah 58 kg. Jika digabung dengan 10 siswa lagi berat rata-ratanya menjadi 56 kg. Berat rata-rata ke 10 siswa tersebut adalah ... kg
///50
///53
///60
///63
///73
///B 

///Di dasar bak mandi terdapat pipa saluran pembuangan. Jika pipa tersebut dibuka, air sebanyak 30 L akan mengalir selama 1 menit. Debit air pada pipa tersebut adalah ... liter/detik
///0,5
///1
///1,5
///2
///3
///A 

///Irma menabung setiap 6 hari sekali dan Ratna menabung setiap 5 hari sekali. Jika mereka menabung bersama – sama pada tanggal 8 Januari 2019, mereka akan menabung bersama – sama lagi pada tanggal ....
///4 Februari 2019
///5 Februari 2019
///6 Februari 2019
///7 Februari 2019
///8 Februari 2019
///D 

///Ibu membeli 4 lusin pensil dan 3 lusin buku gambar. Ibu akan membagi pensil dan buku gambar kepada sejumlah anak paling banyak secara merata. Banyak pensil yang akan diterima setiap anak adalah ....
///6
///5
///4
///3
///12
///C 

///<img src='https://1.bp.blogspot.com/-OAT3YLHPiA8/YSFKqZuTMjI/AAAAAAAAC-s/WNJgQBvlIvMQjw8-STVdVzqh36U6hn7_gCLcBGAsYHQ/s0-rw/tiu30-soal.jpg'/>
///<img src='https://1.bp.blogspot.com/-xjOEuZUKKyw/YSFDav2x1tI/AAAAAAAAC8I/cvwnSEn_sgc8y3ak6Y73yGYjv9cfmYr_gCLcBGAsYHQ/s0-rw/tiu30-a.jpg'/>
///<img src='https://1.bp.blogspot.com/-cn76Au2nCyA/YSFDa1bR-mI/AAAAAAAAC8M/hmNfs5twpIozqKJdEvB_Oxlub1ZfLhebgCLcBGAsYHQ/s0-rw/tiu30-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-Eu8vpAOe8o8/YSFDbMsVdbI/AAAAAAAAC8Q/LB4U-DCJuDkq_-vTaw3czeuuSe3VYqfFwCLcBGAsYHQ/s0-rw/tiu30-c.jpg'/>
///<img src='https://1.bp.blogspot.com/-5QClH7VyFtw/YSFDbRZYgCI/AAAAAAAAC8U/R7uAJzwmzlcDYl-uJGbgGNOidjUwdHy1ACLcBGAsYHQ/s0-rw/tiu30-d.jpg'/>
///<img src='https://1.bp.blogspot.com/-9_9yeWCAHpY/YSFDbpF0qKI/AAAAAAAAC8Y/ey6sG-COT34_i-f2xHz2Vqr_do9jRbKrQCLcBGAsYHQ/s0-rw/tiu30-e.jpg'/>
///D 

///<img src='https://1.bp.blogspot.com/-_uV_f-Yf4Z4/YSFDbi_wk9I/AAAAAAAAC8c/P6o_7Nc9_HsyN2LxdVR4ZP9SpvdYLqRnQCLcBGAsYHQ/s0-rw/tiu30-soal.jpg'/>
///<img src='https://1.bp.blogspot.com/-P3Jak99P3p8/YSFDbxFzOwI/AAAAAAAAC8g/J0QkhWhMuLAPpoKzM77eoY95NH4NX7AugCLcBGAsYHQ/s0-rw/tiu31-a.jpg'/>
///<img src='https://1.bp.blogspot.com/-xKo13wniOgI/YSFDcFoEhxI/AAAAAAAAC8k/zci5ja8VvH4AxDZt0Uhrmh0ivYKdA2U4gCLcBGAsYHQ/s0-rw/tiu31-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-LOOg8eKGnNA/YSFDcJnO1yI/AAAAAAAAC8o/fe0s7N_EXQg-c1NqoLm0EJ44buJ0e9FVwCLcBGAsYHQ/s0-rw/tiu31-c.jpg'/>
///<img src='https://1.bp.blogspot.com/-Abc1OO7gv6M/YSFDcpG_o_I/AAAAAAAAC80/gzUoIbropfsInMCuHtAmjMm6UIpmD2TzQCLcBGAsYHQ/s0-rw/tiu31-d.jpg'/>
///<img src='https://1.bp.blogspot.com/-7FvmspTN9zU/YSFDcaYuywI/AAAAAAAAC8s/3flva4DByYQP71Ra9kjM-qw7DKgMQOgGQCLcBGAsYHQ/s0-rw/tiu31-e.jpg'/>
///A 

///<img src='https://1.bp.blogspot.com/-2PXhlPGzldI/YSFDeLTv0FI/AAAAAAAAC9M/EZELLe4iDBQRuA8ioeOtP2QCkrmGJtYPACLcBGAsYHQ/s0-rw/tiu32-soal.jpg'/>
///<img src='https://1.bp.blogspot.com/-HxyJufjCW68/YSFDdKxAwvI/AAAAAAAAC88/Zq3sJ3dbNZcXauTxiYq-xDQs6hgyx-B4QCLcBGAsYHQ/s0-rw/tiu32-a.jpg'/>
///<img src='https://1.bp.blogspot.com/-jFZ6DVPeWfo/YSFDdK3kAdI/AAAAAAAAC84/8_OpFphJEecrWT3od5_yjaoIxbaHSCkZQCLcBGAsYHQ/s0-rw/tiu32-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-axyhectTrzA/YSFDdWYeMKI/AAAAAAAAC9A/yKxeQ-kU3lAshaohqpzk-ahjXay2hug5QCLcBGAsYHQ/s0-rw/tiu32-c.jpg'/>
///<img src='https://1.bp.blogspot.com/-QUMqmU63dzw/YSFDdlradCI/AAAAAAAAC9E/fYCtmjmUcWQVRJmke9IJ1P-nIcVeaFGkgCLcBGAsYHQ/s0-rw/tiu32-d.jpg'/>
///<img src='https://1.bp.blogspot.com/-by9dPnr5zqE/YSFDdyQCzuI/AAAAAAAAC9I/P7wMahgTKnQh1FOMsp4I0DbwiLojqtPoACLcBGAsYHQ/s0-rw/tiu32-e.jpg'/>
///A 

///
///<img src='https://1.bp.blogspot.com/-IV1xCHoTF78/YSFDeFzTibI/AAAAAAAAC9Q/nLrj5U-cNWgs0Jqi5Fd6Z_4SM_J1HJV7QCLcBGAsYHQ/s0-rw/tiu33-a.jpg'/>
///<img src='https://1.bp.blogspot.com/-AzlJYyOu3os/YSFDeTEZjEI/AAAAAAAAC9U/c9AmCvGMZmw-Yy4pahVks63T8l6aZhxhACLcBGAsYHQ/s0-rw/tiu33-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-lXOEVq2jfqg/YSFDe2oQejI/AAAAAAAAC9c/OYlEzEoDKuYQ91X8AnuSpl5LBIJb9tO3ACLcBGAsYHQ/s0-rw/tiu33-c.jpg'/>
///<img src='https://1.bp.blogspot.com/-C3sspkFMID0/YSFDerl5BbI/AAAAAAAAC9Y/87SJmYlNADkbCkdLsS40zrSYuNRL0HNrQCLcBGAsYHQ/s0-rw/tiu33-d.jpg'/>
///<img src='https://1.bp.blogspot.com/-DJX2QRB2nJ4/YSFDe2uaOLI/AAAAAAAAC9g/ptDnZnTvEe0lWWrwXWHvT60q_ejupZdEgCLcBGAsYHQ/s0-rw/tiu33-e.jpg'/>
///C 

///
///<img src='https://1.bp.blogspot.com/-5Qles2a1TNU/YSFDfOkBVmI/AAAAAAAAC9k/ldSX2oxCvrEB_Ry1z6R3-jj5BzPcrG6EQCLcBGAsYHQ/s0-rw/tiu34-a.jpg'/>
///<img src='https://1.bp.blogspot.com/-MkQiP-1k88I/YSFDffWFTrI/AAAAAAAAC9o/lKq0fTAzqygeNBJPvLHDb70MKcOZOFiOQCLcBGAsYHQ/s0-rw/tiu34-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-5Ovm2NqH7hY/YSFDffIEnNI/AAAAAAAAC9s/66OqepCtGUoLIKLTL1vv6auB7Z_qaYl6ACLcBGAsYHQ/s0-rw/tiu34-c.jpg'/>
///<img src='https://1.bp.blogspot.com/-jmZZi2YhzNY/YSFDfp4gCnI/AAAAAAAAC9w/Pmem-bD2k7g7WU3dPT0hUukxBw2f4HKFwCLcBGAsYHQ/s0-rw/tiu34-d.jpg'/>
///<img src='https://1.bp.blogspot.com/-qzWTVp6rGq8/YSFDgNijIXI/AAAAAAAAC94/v_tL8qKQlVgocuPmblFVa0BLRpEDIHu7wCLcBGAsYHQ/s0-rw/tiu34-e.jpg'/>
///D 

///<img src='https://1.bp.blogspot.com/-bSNsmbtRlm0/YSFDhEjx3RI/AAAAAAAAC-M/HhSO5hMn7HkfVXDliPkEb7AvMIyxYAAQgCLcBGAsYHQ/s0-rw/tiu35-soal.jpg'/>
///<img src='https://1.bp.blogspot.com/-Z_NcZkZoZNc/YSFDgH25TKI/AAAAAAAAC98/u00TEi2j7loDEBCsjs2bIM60YvlesBOigCLcBGAsYHQ/s0-rw/tiu35-a.jpg'/>
///<img src='https://1.bp.blogspot.com/-oLP-ShmQA-Q/YSFDgIgSV7I/AAAAAAAAC90/JlM0cXw3MW4OcCJN7-0AWcY1Ia-WVyNrgCLcBGAsYHQ/s0-rw/tiu35-b.jpg'/>
///<img src='https://1.bp.blogspot.com/-FN6vXwTj_pI/YSFDgvXpw2I/AAAAAAAAC-A/niAMc9bad5EtlDyglvD618uXW6OQIPspACLcBGAsYHQ/s0-rw/tiu35-c.jpg'/>
///<img src='https://1.bp.blogspot.com/-GmRAaXmLUkI/YSFDg6_7xqI/AAAAAAAAC-E/7LP1mNUg6Fw2fhfbZZH159iLS8Gr7KYuACLcBGAsYHQ/s0-rw/tiu35-d.jpg'/>
///<img src='https://1.bp.blogspot.com/-RNLAmcB7xfA/YSFDg7h2YCI/AAAAAAAAC-I/F76Ak4wI3NEAgiusa_cBXpsLAPCqsOL1ACLcBGAsYHQ/s0-rw/tiu35-e.jpg'/>
///B`;
	
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

print(info.join("\n"));
*/